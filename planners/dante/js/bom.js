(function (App) {
    function updateBOM() {
        const list = document.getElementById('bomList');
        if (!list || !window.Quotation) return;
        const s = App.state, e = s.equipment, b = App.configuredBOM();
        const copy = App.configurationCopy(document.getElementById('langSelect').value);
        list.replaceChildren();
        function row(key, model, count, choices, onModel, onCount, note) {
            const wrap = document.createElement('div'); wrap.className = 'editable-bom-row'; wrap.dataset.bomKey = key;
            let name;
            if (choices) {
                name = document.createElement('select'); if (key === 'qnex') name.id = 'qnex-model'; name.setAttribute('aria-label', `${copy.model}: ${model}`);
                choices.forEach(v => name.add(new Option(v, v))); name.value = model;
                name.onchange = () => onModel(name.value);
            } else { name = document.createElement('span'); name.textContent = model; }
            const input = document.createElement('input'); input.type = 'number'; input.min = 0; input.max = 99; input.step = 1; input.value = count;
            input.setAttribute('aria-label', `${copy.quantity}: ${model}`); input.disabled = !onCount;
            input.onchange = () => { if (!App.validQuantity(input.value)) { input.value = count; return; } onCount(Number(input.value)); };
            wrap.append(name, input);
            if (note) { const small = document.createElement('small'); small.textContent = note; wrap.append(small); }
            list.append(wrap);
        }
        const set = (key, value) => { e[key] = value; App.renderRoom(); };
        row('qnex', e.qnexModel, e.qnexCount, Quotation.qnexModels, v => set('qnexModel', v), v => set('qnexCount', v));
        if (e.qnexModel === 'NDP600') row('stand', 'NDP600 Height-Adjustable Stand', e.qnexCount, null, null, null, copy.linked);
        row('ifp', 'QA1400 Pro 86-inch', e.ifpCount, null, null, v => { s.showIFP = v > 0; set('ifpCount', v); });
        for (const type of ['m100', 'm40', 'dc20']) {
            row(type, App.audioName(type, document.getElementById('langSelect').value, s.showModels) +
                (type === 'm100' ? ' · A' : type === 'm40' ? ' · B' : ''), b.counts[type], null, null, null);
        }
        row('du11', 'DU11', b.du11, null, null, v => set('du11Count', v));
        row('processor', e.processorModel, b.processor?.count || 0, ['DP88', 'DP44'], v => set('processorModel', v), v => set('processorCount', v));
        for (const size of [55, 65, 75]) row(`aux-${size}`, `Auxiliary Display / TV ${size}-inch`, b.counts[size],
            [55,65,75].map(n => `Auxiliary Display / TV ${n}-inch`), value => {
                const nextSize = Number(value.match(/(55|65|75)-inch/)[1]);
                const rule = App.DISPLAY_RULES.find(r => r.size === nextSize);
                s.manualAux = true;
                s.auxDisplays.filter(d => d.size === size).forEach(d => {
                    d.size = nextSize; d.maxDistance = rule.maxDistance;
                    d.coverageEnd = Math.min(s.roomWidth, d.y + rule.maxDistance);
                }); App.renderRoom();
            }, v => App.setAuxCount(size, v));
        if (e.lcsEnabled) {
            row('lcs', 'LCS810 GEN2', e.lcsCount, null, null, v => set('lcsCount', v));
            row('camera', 'CV870', e.cameraCount, null, null, v => set('cameraCount', v));
        }
        const warning = document.getElementById('processor-warning');
        if (warning) { warning.textContent = copy.capacity; warning.hidden = b.channels <= (b.processor?.count || 0) * (e.processorModel === 'DP44' ? 4 : 8); }
        App.refreshConfigurationUI?.();
        App.refreshAudioUI?.();
    }
    App.updateBOM = updateBOM;
})(window.AISpeech);
