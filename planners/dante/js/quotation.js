(function (App) {
    App.quotationForPlan = function () {
        const s = App.state, e = s.equipment, b = App.configuredBOM(), { line } = Quotation;
        const lines = Quotation.qnexLines(e.qnexModel).map(l => ({ ...l, quantity: l.quantity * e.qnexCount }));
        if (s.showIFP) lines.push(line('QA1400 Pro 86-inch', e.ifpCount, '86-inch interactive flat panel for teaching presentations, touch interaction and hybrid learning.'));
        for (const type of ['m100', 'm40', 'dc20']) lines.push(line(type.toUpperCase(), b.counts[type], type === 'dc20' ? 'Dante ceiling speaker for classroom listening.' : 'Dante ceiling microphone for speech capture and local PA feed.'));
        lines.push(line('DU11', b.du11, 'Dante audio interface linking the meeting computer / podium OPS and room audio.'));
        if (b.processor) lines.push(line(b.processor.type, b.processor.count, 'Dante audio processing for the configured channel count.', false, false));
        for (const size of [55, 65, 75]) lines.push(line(`Auxiliary Display / TV ${size}-inch`, b.counts[size], 'Auxiliary classroom display; mounting and signal distribution require selection.'));
        if (e.lcsEnabled) {
            lines.push(line('LCS810 GEN2', e.lcsCount, 'K3200N1-D15 recording host for lecture capture and USB hybrid learning. Confirm Dante audio routing and ordered options.'));
            lines.push(line('CV870', e.cameraCount, 'Teacher / student camera for lecture capture. Confirm recording and tracking configuration.'));
        }
        const snapshot = App.snapshotFromState(s, 'en');
        return { sceneKind: 'dante', ifpCount: s.showIFP ? e.ifpCount : 0, qnexModel: e.qnexModel,
            sceneHash: () => App.encodeSnapshot(snapshot), title: 'Dante Classroom', width: s.roomLength, depth: s.roomWidth,
            lines: lines.filter(l => l.quantity > 0), summary: `Teaching, hybrid learning and unified classroom control with ${e.qnexModel} and Dante audio.`,
            detail: Quotation.scenarioDetail(e.qnexModel, e.lcsEnabled) };
    };
    window.addEventListener('DOMContentLoaded', () => {
        const s = App.state, sidebar = document.querySelector('.sidebar'), nav = document.querySelector('.top-nav');
        sidebar.id = 'dante-options'; sidebar.hidden = true;
        const toggle = document.createElement('button'); toggle.id = 'dante-options-toggle'; toggle.className = 'theme-toggle';
        toggle.setAttribute('aria-controls', sidebar.id); toggle.setAttribute('aria-expanded', 'false');
        function open(value) { sidebar.hidden = !value; toggle.setAttribute('aria-expanded', String(value)); }
        toggle.onclick = () => open(sidebar.hidden); nav.prepend(toggle);
        const back = document.createElement('a'); back.href = new URLSearchParams(location.search).get('home') || '../../index.html'; back.className = 'theme-toggle'; nav.prepend(back);
        const exportButton = document.createElement('button'); exportButton.id = 'export-quotation'; exportButton.className = 'action-btn';
        exportButton.onclick = () => Quotation.download(exportButton, App.quotationForPlan()); sidebar.prepend(exportButton);
        const bom = document.getElementById('bomPanel'); sidebar.prepend(bom);
        const warning = document.createElement('p'); warning.id = 'processor-warning'; bom.append(warning);
        const note = document.createElement('p'); note.id = 'configuration-note'; sidebar.prepend(note);
        const restore = document.createElement('button'); restore.id = 'restore-recommended'; restore.className = 'action-btn'; restore.onclick = () => App.restoreRecommended(); bom.after(restore);
        function checkbox(id, text, checked, change) {
            const label = document.createElement('label'), input = document.createElement('input'), title = document.createElement('span');
            input.type = 'checkbox'; input.id = id; input.checked = checked; title.textContent = text;
            label.append(input, title); bom.before(label); input.onchange = () => { change(input.checked); App.renderRoom(); };
            return { input, title };
        }
        const lcs = checkbox('include-lcs', '', false, v => { s.equipment.lcsEnabled = v; });
        const ifp = checkbox('include-ifp', 'QA1400 Pro 86″ IFP', true, v => { s.showIFP = v; if (v && !s.equipment.ifpCount) s.equipment.ifpCount = 1; });
        const aux = checkbox('include-aux-displays', '', true, v => { s.showAuxDisplays = v; });
        const shortcut = document.createElement('button'); shortcut.id = 'bom-shortcut'; shortcut.className = 'theme-toggle'; shortcut.textContent = 'BOM';
        shortcut.onclick = () => { open(true); bom.scrollIntoView({ block: 'start' }); }; document.querySelector('.main-area').append(shortcut);
        App.refreshConfigurationUI = () => {
            const lang = document.getElementById('langSelect').value, t = Quotation.words(lang), c = App.configurationCopy(lang);
            document.documentElement.lang = lang; exportButton.textContent = t[0]; back.textContent = t[3];
            toggle.textContent = c.configuration; note.textContent = c.manual; restore.textContent = c.restore; lcs.title.textContent = c.includeLCS;
            aux.title.textContent = App.getDisplayCopy(lang).title; ifp.input.checked = s.showIFP; aux.input.checked = s.showAuxDisplays; lcs.input.checked = s.equipment.lcsEnabled;
            document.querySelectorAll('[data-config-copy]').forEach(el => { el.textContent = c[el.dataset.configCopy]; });
            App.refreshWorkspace?.();
        };
        document.getElementById('langSelect').addEventListener('change', () => { App.refreshConfigurationUI(); App.updateBOM(); });
        const q = new URLSearchParams(location.search);
        if (q.get('theme') === 'light' && !document.body.classList.contains('light-mode')) App.toggleTheme();
        if (q.get('lang') && [...document.getElementById('langSelect').options].some(o => o.value === q.get('lang'))) {
            document.getElementById('langSelect').value = q.get('lang'); App.changeLanguage(q.get('lang'));
        }
        App.refreshConfigurationUI(); App.renderRoom();
    });
})(window.AISpeech);
