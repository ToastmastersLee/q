// Versioned, DOM-free handoff. Included as a defer script in 2D and bundled in 3D.
(function (App) {
    const radiusKeys = ['m100Pickup', 'm100PA', 'm40Pickup', 'm40PA', 'dc20'];
    const showKeys = ['m100_pickup', 'm100_pa', 'm40_pickup', 'm40_pa', 'dc20'];
    function fail(code = 'invalidSnapshot') { const error = new Error(code); error.code = code; throw error; }
    const number = (value, min, max) => typeof value === 'number' && Number.isFinite(value) && value >= min && value <= max;

    function validateSnapshot(input) {
        if (!input || typeof input !== 'object') fail();
        if (![1, 2, 3, 4].includes(input.version)) fail('snapshotVersion');
        const { length, width, height } = input;
        if (!number(length, 2, 40) || !number(width, 2, 40) || !number(height, 2, 4)) fail();
        if (!Array.isArray(input.devices) || !Array.isArray(input.displays)) fail();
        const ids = new Set();
        function entry(value) {
            if (!value || !['string', 'number'].includes(typeof value.id)) fail();
            if (typeof value.id === 'number' && !Number.isSafeInteger(value.id)) fail();
            const id = String(value.id);
            if (!id || id.length > 100 || ids.has(id) || /^(ifp-|podium$|station$)/.test(id)) fail();
            ids.add(id);
            if (!number(value.x, 0, length) || !number(value.y, 0, width)) fail('snapshotBounds');
            return { id, x: value.x, y: value.y };
        }
        const devices = input.devices.map(device => {
            const base = entry(device);
            if (!['m100', 'm40', 'dc20'].includes(device.type)) fail();
            return { ...base, type: device.type };
        });
        const displays = input.displays.map(display => {
            const base = entry(display);
            if (!['left', 'right'].includes(display.side) || ![55, 65, 75].includes(display.size) ||
                !number(display.maxDistance, 0, 40) || !number(display.coverageEnd, display.y, width)) fail();
            return { ...base, side: display.side, size: display.size, maxDistance: display.maxDistance, coverageEnd: display.coverageEnd };
        });
        if (!input.radii || radiusKeys.some(key => !number(input.radii[key], 0, Number.MAX_VALUE))) fail();
        if (!input.show || showKeys.some(key => typeof input.show[key] !== 'boolean') || typeof input.showModels !== 'boolean') fail();
        if (!['en', 'zh', 'hu', 'it', 'es', 'ja', 'ko', 'ar'].includes(input.language)) fail();
        let heightProfile;
        if (input.version >= 2) {
            const p = input.heightProfile;
            if (!p || !['uniform', 'split'].includes(p.mode) ||
                !number(p.front, 2, 4) || !number(p.rear, 2, 4) ||
                !number(p.split, 0, width) || !number(p.drop, 0, 0.7) ||
                (p.manualPickup !== null && !number(p.manualPickup, 0, 100)) ||
                (p.manualPA !== null && !number(p.manualPA, 0, 100))) fail();
            heightProfile = { mode: p.mode, front: p.front, rear: p.rear, split: p.split,
                drop: p.drop, manualPickup: p.manualPickup, manualPA: p.manualPA };
        }
        let equipment, teachingDevices;
        if (input.version === 3 || (input.version === 4 && input.equipment)) {
            const e = input.equipment;
            const qty = n => Number.isInteger(n) && number(n, 0, 99);
            if (!e || !['NDP600','SL100','NMP311'].includes(e.qnexModel) || !['DP44','DP88'].includes(e.processorModel) ||
                !['qnexCount','ifpCount','lcsCount','cameraCount'].every(k => qty(e[k])) || typeof e.lcsEnabled !== 'boolean' ||
                !['processorCount','du11Count'].every(k => e[k] === null || qty(e[k])) || !Array.isArray(input.teachingDevices)) fail();
            equipment = Object.fromEntries(['qnexModel','qnexCount','ifpCount','lcsEnabled','lcsCount','cameraCount','processorModel','processorCount','du11Count'].map(k => [k,e[k]]));
            teachingDevices = input.teachingDevices.map(d => {
                const base = entry(d);
                if (!['qnex','ifp','station','camera'].includes(d.type)) fail();
                const expected = d.type === 'qnex' ? e.qnexModel : d.type === 'ifp' ? 'QA1400 Pro' : d.type === 'camera' ? 'CV870' : 'LCS810 GEN2';
                if (d.model !== expected || (d.type === 'ifp' && d.size !== 86) || (d.type === 'camera' && !['teacher','student'].includes(d.role))) fail();
                return { ...base, type:d.type, model:expected, ...(d.type === 'ifp' ? {size:86} : {}), ...(d.type === 'camera' ? {role:d.role} : {}) };
            });
            for (const [type, count] of [['qnex',e.qnexCount],['ifp',e.ifpCount],['station',e.lcsEnabled ? e.lcsCount : 0],['camera',e.lcsEnabled ? e.cameraCount : 0]]) {
                if (teachingDevices.filter(d => d.type === type).length !== count) fail();
            }
        }
        let audioLayout;
        if (input.version === 4) {
            const a = input.audioLayout, actual = App.audioCounts(devices);
            if (!a || !['auto','fixed'].includes(a.mode) || !a.counts ||
                App.audioTypes.some(type => !Number.isInteger(a.counts[type]) || a.counts[type] !== actual[type])) fail();
            if (!equipment && input.teachingDevices?.length) fail();
            audioLayout = { mode:a.mode, counts:actual };
        }
        return { version: input.version, length, width, height, devices, displays,
            radii: Object.fromEntries(radiusKeys.map(key => [key, input.radii[key]])),
            show: Object.fromEntries(showKeys.map(key => [key, input.show[key]])),
            language: input.language, showModels: input.showModels, ...(heightProfile ? { heightProfile } : {}),
            ...(equipment ? { equipment, teachingDevices } : {}), ...(audioLayout ? {audioLayout} : {}) };
    }
    function snapshotFromState(state, language) {
        if (state === App.state && state.equipment) App.syncTeachingDevices();
        return validateSnapshot({ version: 4, audioLayout:App.appliedAudioRequest(state), length: state.roomLength, width: state.roomWidth, height: state.height,
            devices: state.devices, displays: state.showAuxDisplays === false ? [] : state.auxDisplays, radii: state.radii, show: state.show,
            language, showModels: state.showModels === true, heightProfile: state.heightProfile || {mode:"uniform",front:state.height,rear:state.height,split:state.roomWidth/2,drop:0,manualPickup:null,manualPA:null},
            equipment: state.equipment ? {...state.equipment, ifpCount:state.showIFP === false ? 0 : state.equipment.ifpCount} : undefined,
            teachingDevices: state.teachingDevices });
    }
    function encodeSnapshot(snapshot) { return '#plan=' + encodeURIComponent(JSON.stringify(validateSnapshot(snapshot))); }
    function decodeSnapshot(hash) {
        if (!hash) return null;
        if (!hash.startsWith('#plan=')) fail();
        let data;
        try { data = JSON.parse(decodeURIComponent(hash.slice(6))); } catch { fail(); }
        return validateSnapshot(data);
    }
    Object.assign(App, { validateSnapshot, snapshotFromState, encodeSnapshot, decodeSnapshot });
})(window.AISpeech = window.AISpeech || {});
