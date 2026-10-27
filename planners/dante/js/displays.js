(function (App) {
    const state = App.state;
    const PPM = App.PPM;
    const getDisplayCopy = (...args) => App.getDisplayCopy(...args);

    const MAIN_DISPLAY_DEPTH = 6.0;
    const DISPLAY_RULES = App.DISPLAY_RULES;

    function recommendAuxiliaryDisplays() {
        return App.auxiliaryDisplaysForWidth(state.roomWidth, state.roomLength);
    }

    function updateAuxiliaryDisplaySummary() {
        const lang = document.getElementById('langSelect').value || 'en';
        const copy = getDisplayCopy(lang);
        const summary = document.getElementById('auxDisplaySummary');
        if (!summary) return;

        if (state.auxDisplays.length === 0) {
            summary.innerHTML = `${copy.none}<br><span class="accent-text">${copy.rule}</span>`;
            return;
        }

        const groupedModels = DISPLAY_RULES
            .map(rule => {
                const count = state.auxDisplays.filter(display => display.size === rule.size).length;
                return count > 0 ? `${rule.size}″ × ${count}` : '';
            })
            .filter(Boolean)
            .join(', ');
        const coverageEnd = Math.max(...state.auxDisplays.map(display => display.coverageEnd));
        summary.innerHTML = `${copy.summary(state.auxDisplays.length, groupedModels, coverageEnd)}<br><span class="accent-text">${copy.rule}</span>`;
    }

    function renderAuxiliaryDisplays() {
        if (!state.manualAux) state.auxDisplays = recommendAuxiliaryDisplays();
        App.fitConfiguration();
        updateAuxiliaryDisplaySummary();

        const layer = document.getElementById('displayLayer');
        layer.innerHTML = '';
        const copy = getDisplayCopy(document.getElementById('langSelect').value || 'en');
        const screenWidth = 86 * 0.0254 * 16 / Math.sqrt(337) * PPM;
        const screenX = (state.roomLength * PPM - screenWidth) / 2;
        const screenHeight = 11;

        const makeScreen = (x, y, label, accent, coverageEnd, auxiliary = false, device = null) => {
            const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            if (device) { group.setAttribute('class','device'); group.dataset.auxId = device.id; }
            const pxY = y * PPM;
            const pxX = auxiliary ? x * PPM - 5 : screenX;
            const rectWidth = auxiliary ? 10 : screenWidth;
            const coverage = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            coverage.setAttribute('x1', pxX + rectWidth / 2);
            coverage.setAttribute('x2', pxX + rectWidth / 2);
            coverage.setAttribute('y1', pxY + screenHeight);
            coverage.setAttribute('y2', coverageEnd * PPM);
            coverage.setAttribute('stroke', accent);
            coverage.setAttribute('stroke-width', '2');
            coverage.setAttribute('stroke-dasharray', '6,5');
            coverage.setAttribute('opacity', '0.7');
            group.appendChild(coverage);

            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', pxX);
            rect.setAttribute('y', pxY);
            rect.setAttribute('width', rectWidth);
            rect.setAttribute('height', screenHeight);
            rect.setAttribute('rx', '3');
            rect.setAttribute('fill', 'rgba(245, 158, 11, 0.28)');
            rect.setAttribute('stroke', accent);
            rect.setAttribute('stroke-width', '2');
            group.appendChild(rect);

            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', pxX + rectWidth / 2);
            text.setAttribute('y', pxY - 5);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('font-size', '10');
            text.setAttribute('font-weight', 'bold');
            text.setAttribute('fill', accent);
            text.textContent = label;
            group.appendChild(text);
            layer.appendChild(group);
        };

        // Main screens are actual teaching-device instances.
        (state.showAuxDisplays === false ? [] : state.auxDisplays).forEach((display, index) => {
            makeScreen(display.x, display.y, `${copy.canvas} ${index + 1} · ${display.size}″`, '#fb923c', display.coverageEnd, true, display);
        });
    }

    App.DISPLAY_RULES = DISPLAY_RULES;

    App.recommendAuxiliaryDisplays = recommendAuxiliaryDisplays;
    App.updateAuxiliaryDisplaySummary = updateAuxiliaryDisplaySummary;
    App.renderAuxiliaryDisplays = renderAuxiliaryDisplays;
})(window.AISpeech);
