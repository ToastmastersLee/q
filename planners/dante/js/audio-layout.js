// Shared, DOM-free quantity policy and fixed-count placement for 2D and 3D.
(function (App) {
    const types = ['m100', 'm40', 'dc20'];
    const limits = { m100: 10, m40: 10, dc20: 30 };
    const countsFor = devices => Object.fromEntries(types.map(type => [type, devices.filter(d => d.type === type).length]));
    function appliedAudioRequest(state) {
        return { mode: state.audioLayout?.mode || (state.manualAudio ? 'fixed' : 'auto'), counts: countsFor(state.devices) };
    }
    function audioRequest(state) {
        if (state.audioDraft) return { mode: 'fixed', counts: { ...state.audioDraft } };
        return appliedAudioRequest(state);
    }
    function commitAudioLayout(state, request) {
        state.audioLayout = { mode: request.mode, counts: countsFor(state.devices) };
        state.manualAudio = request.mode === 'fixed';
        state.audioDraft = null;
    }
    function stageAudioCount(state, type, count) {
        if (!types.includes(type) || !Number.isInteger(count) || count < 0 || count > limits[type]) return false;
        state.audioDraft = { ...(state.audioDraft || countsFor(state.devices)), [type]: count };
        return true;
    }
    function lockAudioCounts(state) {
        state.audioLayout = { mode: 'fixed', counts: countsFor(state.devices) };
        state.manualAudio = true;
    }
    function layoutConflict(devices) {
        const mics = devices.filter(d => d.type !== 'dc20');
        return devices.some((d, index) => devices.some((other, i) => i < index && Math.hypot(d.x-other.x, d.y-other.y) < 0.1)) ||
            devices.some(d => d.type === 'dc20' && !App.isFarEnoughFromMicrophones(d, mics, 2));
    }
    function fixedAudioDevices(counts) {
        const s = App.state, micTypes = [...Array(counts.m100).fill('m100'), ...Array(counts.m40).fill('m40')];
        const grid = App.createGridPositions(micTypes.length, s.roomLength, s.roomWidth);
        const transposed = App.createGridPositions(micTypes.length, s.roomWidth, s.roomLength).map(p => ({ x:p.y, y:p.x }));
        const candidates = [grid, transposed].map(points => points.map((p, i) => ({ type:micTypes[i], ...p })));
        const scores = candidates.map(devices => App.estimateCoverageForDevices(devices).mic);
        const best = candidates[scores[1] > scores[0] ? 1 : 0];
        const mics = best.map(d => ({ ...d, id:App.idCounter++ }));
        const balanced = App.createGridPositions(counts.dc20, s.roomLength, s.roomWidth)
            .map(p => App.keepSpeakerAwayFromMicrophones(p, mics));
        let optimized = counts.dc20 ? App.optimizeSpeakerPositions(counts.dc20, mics) : [];
        // Dense/very small rooms may exhaust legal candidates: preserve the requested count.
        if (optimized.length !== counts.dc20) optimized = balanced;
        const speakersFor = points => points.map(p => ({ type:'dc20', ...p }));
        const greedyScore = App.estimateCoverageForDevices([...mics, ...speakersFor(optimized)]).speaker;
        const balancedScore = App.estimateCoverageForDevices([...mics, ...speakersFor(balanced)]).speaker;
        const points = balancedScore >= greedyScore ? balanced : optimized;
        return [...mics, ...App.makeDevices('dc20', points)];
    }
    Object.assign(App, { audioTypes:types, audioLimits:limits, audioCounts:countsFor, audioRequest, appliedAudioRequest,
        commitAudioLayout, stageAudioCount, lockAudioCounts, fixedAudioDevices, layoutConflict });
})(window.AISpeech = window.AISpeech || {});
