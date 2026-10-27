(function (App) {
    const state = App.state;
    const clamp = (...args) => App.clamp(...args);
    const createGridPositions = (...args) => App.createGridPositions(...args);
    const makeDevices = (...args) => App.makeDevices(...args);
    const estimateCoverageForDevices = (...args) => App.estimateCoverageForDevices(...args);

    function keepSpeakerAwayFromMicrophones(position, micDevices) {
        const minDistance = 2.0;
        let x = position.x;
        let y = position.y;

        for (let i = 0; i < 8; i++) {
            let nearest = null;
            let nearestDist = Infinity;

            micDevices.forEach(mic => {
                const dx = x - mic.x;
                const dy = y - mic.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < nearestDist) {
                    nearest = mic;
                    nearestDist = dist;
                }
            });

            if (!nearest || nearestDist >= minDistance) break;

            let dx = x - nearest.x;
            let dy = y - nearest.y;
            if (nearestDist < 0.01) {
                dx = x - state.roomLength / 2 || 1;
                dy = y - state.roomWidth / 2 || 1;
                nearestDist = Math.sqrt(dx * dx + dy * dy);
            }

            const push = minDistance - nearestDist + 0.15;
            x += (dx / nearestDist) * push;
            y += (dy / nearestDist) * push;
            x = clamp(x, 0.3, Math.max(0.3, state.roomLength - 0.3));
            y = clamp(y, 0.3, Math.max(0.3, state.roomWidth - 0.3));
        }

        return { x, y };
    }

    function createCoverageSamples(step) {
        const samples = [];
        for (let x = 0; x <= state.roomLength; x += step) {
            for (let y = 0; y <= state.roomWidth; y += step) {
                samples.push({ x, y, covered: false });
            }
        }
        return samples;
    }

    function isFarEnoughFromMicrophones(pos, micDevices, minDistance) {
        return micDevices.every(mic => {
            const dx = pos.x - mic.x;
            const dy = pos.y - mic.y;
            return Math.sqrt(dx * dx + dy * dy) >= minDistance;
        });
    }

    function createSpeakerCandidates(micDevices) {
        const minDistance = 2.0;
        const step = Math.max(0.5, Math.min(1.0, Math.max(state.roomLength, state.roomWidth) / 24));
        const margin = Math.min(0.5, state.roomLength / 4, state.roomWidth / 4);
        const candidates = [];

        for (let x = margin; x <= state.roomLength - margin + 0.001; x += step) {
            for (let y = margin; y <= state.roomWidth - margin + 0.001; y += step) {
                const pos = { x, y };
                if (isFarEnoughFromMicrophones(pos, micDevices, minDistance)) {
                    candidates.push(pos);
                }
            }
        }

        // Always include partition-center layouts as fallback / tie-break anchors.
        for (let count = 1; count <= 30; count++) {
            createGridPositions(count, state.roomLength, state.roomWidth).forEach(pos => {
                const adjusted = keepSpeakerAwayFromMicrophones(pos, micDevices);
                candidates.push(adjusted);
            });
        }

        return candidates;
    }

    function optimizeSpeakerPositions(count, micDevices) {
        const samples = createCoverageSamples(0.5);
        const candidates = createSpeakerCandidates(micDevices);
        const selected = [];
        const used = new Set();
        const radiusSq = state.radii.dc20 * state.radii.dc20;

        for (let i = 0; i < count; i++) {
            let bestCandidate = null;
            let bestGain = -1;
            let bestKey = '';

            candidates.forEach(candidate => {
                const key = `${candidate.x.toFixed(2)},${candidate.y.toFixed(2)}`;
                if (used.has(key)) return;

                let gain = 0;
                samples.forEach(sample => {
                    if (sample.covered) return;
                    const dx = sample.x - candidate.x;
                    const dy = sample.y - candidate.y;
                    if ((dx * dx + dy * dy) <= radiusSq) {
                        gain++;
                    }
                });

                if (gain > bestGain) {
                    bestGain = gain;
                    bestCandidate = candidate;
                    bestKey = key;
                }
            });

            if (!bestCandidate) break;

            selected.push(bestCandidate);
            used.add(bestKey);
            samples.forEach(sample => {
                if (sample.covered) return;
                const dx = sample.x - bestCandidate.x;
                const dy = sample.y - bestCandidate.y;
                if ((dx * dx + dy * dy) <= radiusSq) {
                    sample.covered = true;
                }
            });
        }

        return selected;
    }

    function planSpeakerDevices(micDevices) {
        const area = state.roomLength * state.roomWidth;
        const referenceByArea = Math.max(1, Math.ceil(area / 30));
        const standardClassroomFloor = (
            area >= 70 && area <= 110 &&
            Math.min(state.roomLength, state.roomWidth) >= 8
        ) ? 4 : 0;
        // DC20 coverage is a usability target, not a reason to add equipment
        // until the map is perfect. 75% is acceptable; 80% is the automatic
        // recommendation target. Keep the established four-speaker baseline
        // for standard 10x8 / 10x10 classrooms, where a balanced 2 x 2 layout
        // is more robust than an uneven three-speaker layout.
        const searchStart = Math.max(1, referenceByArea - 1, standardClassroomFloor);
        const recommendedCoverage = 80;
        let bestDevices = [];
        let bestCoverage = -1;

        for (let count = searchStart; count <= 30; count++) {
            const positions = optimizeSpeakerPositions(count, micDevices);
            let speakers = makeDevices('dc20', positions);
            let coverage = estimateCoverageForDevices([...micDevices, ...speakers]);

            // A balanced partition grid is a strong alternative to a purely
            // greedy search. It avoids redundant overlap in long classrooms
            // (notably 10m x 20m) and is evaluated against the same coverage grid.
            const balancedPositions = createGridPositions(count, state.roomLength, state.roomWidth)
                .map(position => keepSpeakerAwayFromMicrophones(position, micDevices));
            const balancedSpeakers = makeDevices('dc20', balancedPositions);
            const balancedCoverage = estimateCoverageForDevices([...micDevices, ...balancedSpeakers]);
            if (balancedCoverage.speaker >= coverage.speaker) {
                speakers = balancedSpeakers;
                coverage = balancedCoverage;
            }

            if (coverage.speaker > bestCoverage) {
                bestCoverage = coverage.speaker;
                bestDevices = speakers;
            }
            if (coverage.speaker >= recommendedCoverage) {
                return speakers;
            }
        }

        return bestDevices;
    }

    App.keepSpeakerAwayFromMicrophones = keepSpeakerAwayFromMicrophones;
    App.createCoverageSamples = createCoverageSamples;
    App.isFarEnoughFromMicrophones = isFarEnoughFromMicrophones;
    App.createSpeakerCandidates = createSpeakerCandidates;
    App.optimizeSpeakerPositions = optimizeSpeakerPositions;
    App.planSpeakerDevices = planSpeakerDevices;
})(window.AISpeech);
