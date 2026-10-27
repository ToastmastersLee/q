(function (App) {
    const state = App.state;

    function clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    }

    function createGridPositions(count, len, wid) {
        if (count <= 0) return [];
        if (count === 1) return [{ x: len / 2, y: wid / 2 }];

        // Round to the closest balanced grid. Using ceil() turns a 10m x 8m,
        // four-speaker room into an uneven 3+1 layout instead of a 2 x 2 grid.
        const cols = Math.max(1, Math.round(Math.sqrt(count * (len / Math.max(wid, 0.1)))));
        const rows = Math.max(1, Math.ceil(count / cols));
        const positions = [];

        for (let row = 0; row < rows && positions.length < count; row++) {
            const remaining = count - positions.length;
            const colsInRow = Math.min(cols, remaining);
            const rowWidth = (colsInRow / cols) * len;
            const rowOffset = (len - rowWidth) / 2;

            for (let col = 0; col < colsInRow && positions.length < count; col++) {
                positions.push({
                    x: rowOffset + ((col + 0.5) * len) / cols,
                    y: ((row + 0.5) * wid) / rows
                });
            }
        }

        return positions;
    }

    function makeDevices(type, positions) {
        return positions.map(pos => ({
            id: App.idCounter++,
            type: type,
            x: clamp(pos.x, 0, state.roomLength),
            y: clamp(pos.y, 0, state.roomWidth)
        }));
    }

    function estimateCoverageForDevices(devices) {
        return App.coverageForPlan(state.roomLength, state.roomWidth, devices, state.radii, {}, state.heightProfile);
    }

    function planMicrophoneDevices() {
        const len = state.roomLength;
        const wid = state.roomWidth;
        const area = len * wid;
        const smallRoom = area <= 35 && Math.max(len, wid) <= 7;
        const minRemoteCoverage = 75;
        let bestDevices = [];
        let bestScore = -1;

        if (smallRoom) {
            for (let count = 1; count <= 2; count++) {
                const devices = makeDevices('m40', createGridPositions(count, len, wid));
                const coverage = estimateCoverageForDevices(devices);
                const score = (coverage.mic * 2) + coverage.pa;

                if (score > bestScore) {
                    bestScore = score;
                    bestDevices = devices;
                }
                if (coverage.mic >= minRemoteCoverage && coverage.pa >= 75) {
                    return devices;
                }
            }
            return bestDevices;
        }

        // M100 is the expensive part of the system. Keep the quantity minimal and
        // Remote pickup drives quantity. Local PA pickup covers talkers, not listeners;
        // whole-room PA pickup is not a procurement requirement.
        for (let count = 1; count <= 8; count++) {
            const devices = makeDevices('m100', createGridPositions(count, len, wid));
            const coverage = estimateCoverageForDevices(devices);
            const score = (coverage.mic * 2) - ((count - 1) * 35);

            if (score > bestScore) {
                bestScore = score;
                bestDevices = devices;
            }
            if (
                coverage.mic >= minRemoteCoverage
            ) {
                return devices;
            }
        }

        return bestDevices;
    }

    App.clamp = clamp;
    App.createGridPositions = createGridPositions;
    App.makeDevices = makeDevices;
    App.estimateCoverageForDevices = estimateCoverageForDevices;
    App.planMicrophoneDevices = planMicrophoneDevices;
})(window.AISpeech);
