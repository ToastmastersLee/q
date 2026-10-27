// One editable configuration for the drawing, handoff and quotation.
(function (App) {
    const defaults = () => ({ qnexModel: 'NDP600', qnexCount: 1, ifpCount: 1,
        lcsEnabled: false, lcsCount: 1, cameraCount: 2, processorModel: 'DP88',
        processorCount: null, du11Count: null });
    App.defaultEquipment = defaults;
    const s = App.state;
    s.auxDisplays = []; s.equipment = defaults(); s.teachingDevices = []; s.manualAudio = false; s.manualAux = false;
    s.showIFP = true; s.showAuxDisplays = true;
    const clamp = (v, max) => Math.max(0.15, Math.min(max - 0.15, v));
    const quantity = value => value !== '' && value !== null && Number.isInteger(Number(value)) && Number(value) >= 0 && Number(value) <= 99;
    App.validQuantity = quantity;
    function slot(index, length, width, retained) {
        const candidates = Array.from({length:100}, (_,i)=>({x:length*((i%10)+0.5)/10,y:width*(Math.floor(i/10)+0.5)/10}));
        return candidates.sort((a,b)=>{
            const score = p => retained.length ? Math.min(...retained.map(d=>(d.x-p.x)**2+(d.y-p.y)**2)) : -((p.x-length/2)**2+(p.y-width/2)**2);
            return score(b)-score(a);
        })[0];
    }
    function frontPosition(type, retained, length) {
        const half = type === 'ifp' ? 1 : 0.36;
        const obstacles = [...retained, ...s.teachingDevices.filter(d => d.type !== type && ['ifp','station'].includes(d.type) && d.y < 0.8)];
        const candidates = [length / 2, ...Array.from({length:41}, (_,i) => half + 0.05 + (length - 2 * half - 0.1) * i / 40),
            ...obstacles.flatMap(d => { const gap = half + (d.type === 'ifp' ? 1 : 0.36) + 0.08; return [d.x-gap,d.x+gap]; })]
            .filter(x => x >= half && x <= length-half);
        const available = candidates.filter(x => obstacles.every(d => Math.abs(x-d.x) >= half + (d.type === 'ifp' ? 1 : 0.36) + 0.079));
        const score = x => retained.length ? Math.min(...retained.map(d => Math.abs(d.x-x))) : type === 'ifp' ? -Math.abs(x-length/2) : -x;
        return (available.length ? available : candidates).sort((a,b) => score(b)-score(a))[0] ?? length/2;
    }
    App.reconcileInstances = function (items, type, count, create) {
        const retained = items.filter(d => d.type === type).slice(0, count);
        while (retained.length < count) retained.push(create(retained.length, retained));
        return [...items.filter(d => d.type !== type), ...retained];
    };
    function fitTeaching(d) {
        d.x = clamp(d.x, s.roomLength); d.y = clamp(d.y, s.roomWidth);
        if (d.type === 'ifp') {
            const half = (86 * 0.0254 * 16 / Math.sqrt(337) + 0.07) / 2;
            d.x = s.roomLength > 2 * half + 0.02 ? Math.max(half + 0.01, Math.min(s.roomLength - half - 0.01, d.x)) : s.roomLength / 2;
        }
    }
    App.fitConfiguration = function () {
        for (const d of [...s.devices, ...s.auxDisplays, ...s.teachingDevices]) {
            fitTeaching(d);
            if (d.coverageEnd !== undefined) d.coverageEnd = Math.max(d.y, Math.min(s.roomWidth, d.coverageEnd));
        }
    };
    App.syncTeachingDevices = function () {
        const e = s.equipment, len = s.roomLength, wid = s.roomWidth;
        const specs = [ ['qnex', e.qnexCount], ['ifp', s.showIFP ? e.ifpCount : 0],
            ['station', e.lcsEnabled ? e.lcsCount : 0], ['camera', e.lcsEnabled ? e.cameraCount : 0] ];
        for (const [type, count] of specs) {
            s.teachingDevices = App.reconcileInstances(s.teachingDevices, type, count, (i, retained) => {
                const n = App.idCounter++;
                const point = type === 'camera' ? { x: len / 2 + Math.floor(i / 2) * 0.45,
                    y: i % 2 ? wid - 0.3 : 0.3 } : type === 'ifp' ? { x: frontPosition(type, retained, len), y: 0.15 }
                    : type === 'station' ? { x: frontPosition(type, retained, len), y: 0.3 }
                    : { x: len * 0.32 + i * 1.7, y: 1.2 };
                return { id: `teaching-${n}`, type, ...point, role: i % 2 ? 'teacher' : 'student' };
            });
        }
        for (const d of s.teachingDevices) {
            d.model = d.type === 'qnex' ? e.qnexModel : d.type === 'ifp' ? 'QA1400 Pro' : d.type === 'camera' ? 'CV870' : 'LCS810 GEN2';
            if (d.type === 'ifp') d.size = 86;
        }
        s.qnexModel = e.qnexModel;
        for (const d of s.teachingDevices) fitTeaching(d);
    };
    App.configuredBOM = function (state = s) {
        const b = App.bomForPlan(state.roomLength, state.roomWidth, state.devices,
            state.showAuxDisplays === false ? [] : state.auxDisplays);
        const e = state.equipment;
        b.du11 = e.du11Count ?? b.du11;
        const count = e.processorCount ?? (b.channels ? Math.ceil(b.channels / (e.processorModel === 'DP44' ? 4 : 8)) : 0);
        b.processor = count ? { type: e.processorModel, count } : null;
        return b;
    };
    App.setAudioCount = function (type, count) {
        if (!quantity(count)) return;
        App.stageAudioCount(s, type, Number(count));
        App.refreshAudioUI?.();
    };
    App.setAuxCount = function (size, count) {
        if (!quantity(count)) return;
        s.manualAux = true; s.showAuxDisplays = true;
        const retained = s.auxDisplays.filter(d => d.size === size).slice(0, Number(count));
        const rule = App.DISPLAY_RULES.find(r => r.size === size);
        while (retained.length < Number(count)) {
            const i = retained.length, y = Math.min(s.roomWidth - 0.4, 3 + Math.floor(i / 2) * 2);
            const offset = (size * 0.0254 * 16 / Math.sqrt(337) + 0.07) / 2 + 0.18;
            retained.push({ id: `aux-manual-${App.idCounter++}`, size, side: i % 2 ? 'right' : 'left',
                x: i % 2 ? s.roomLength - offset : offset, y,
                maxDistance: rule.maxDistance, coverageEnd: Math.min(s.roomWidth, y + rule.maxDistance) });
        }
        s.auxDisplays = [...s.auxDisplays.filter(d => d.size !== size), ...retained];
        App.renderRoom();
    };
    App.restoreRecommended = function () {
        s.audioDraft = null;
        s.devices = App.buildProductRecommendation({mode:'auto'});
        App.commitAudioLayout(s, {mode:'auto'});
        App.renderRoom();
    };
    App.renderTeachingDevices = function () {
        App.syncTeachingDevices();
        const svg = document.getElementById('canvas'); if (!svg) return;
        let layer = document.getElementById('teachingLayer');
        if (!layer) { layer = document.createElementNS(svg.namespaceURI, 'g'); layer.id = 'teachingLayer'; svg.append(layer); }
        layer.replaceChildren();
        const eCount = type => s.teachingDevices.filter(v => v.type === type).length;
        for (const d of s.teachingDevices) {
            const g = document.createElementNS(svg.namespaceURI, 'g');
            g.setAttribute('class', 'device teaching-device'); g.dataset.teachingId = d.id;
            g.setAttribute('transform', `translate(${d.x * App.PPM},${d.y * App.PPM})`);
            const rect = document.createElementNS(svg.namespaceURI, 'rect');
            const width = d.type === 'ifp' ? 90 : d.type === 'camera' ? 32 : 65;
            for (const [k, v] of Object.entries({ x: -width / 2, y: -7, width, height: 14, rx: 3, fill: d.type === 'camera' ? '#7c3aed' : '#0072ce' })) rect.setAttribute(k, v);
            const text = document.createElementNS(svg.namespaceURI, 'text');
            text.setAttribute('y', -12); text.setAttribute('text-anchor', 'middle');
            text.setAttribute('font-size', '10'); text.setAttribute('fill', 'var(--text)');
            text.textContent = d.type === 'qnex' ? `Q-NEX ${d.model}${eCount(d.type) > 1 ? ' #' + (s.teachingDevices.filter(v => v.type === d.type).indexOf(d) + 1) : ''}` : `${d.model}${d.size ? ' 86″' : ''} #${s.teachingDevices.filter(v => v.type === d.type).indexOf(d) + 1}`;
            g.append(rect, text); layer.append(g);
        }
    };
})(window.AISpeech);
