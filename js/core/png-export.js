/** Capture the complete layered board, independently of viewport scale/scroll. */
(function (app, Simulator) {
    function snapshotBoard() {
        const source = document.getElementById('topology-board');
        const clone = source.cloneNode(true);
        const originals = [source, ...source.querySelectorAll('*')];
        const copies = [clone, ...clone.querySelectorAll('*')];
        originals.forEach((element, index) => {
            const computed = getComputedStyle(element);
            const target = copies[index];
            for (const property of computed) {
                const value = computed.getPropertyValue(property).replace(
                    /url\(["']?[^)"']*#([^)'"\s]+)["']?\)/g, 'url(#$1)');
                target.style.setProperty(property, value);
            }
            target.style.animation = 'none';
            target.style.transition = 'none';
            if (element.tagName === 'IMG') {
                const path = element.getAttribute('src');
                const embedded = app.data.exportImages[path];
                if (!embedded && !path.startsWith('data:')) throw new Error(`Missing export asset: ${path}`);
                target.src = embedded || path;
            }
        });
        // Native checkbox rendering differs in SVG foreignObject; export explicit state.
        clone.querySelectorAll('.legend-filter-chk').forEach(checkbox => {
            const state = document.createElement('span');
            state.className = 'legend-export-state';
            state.textContent = checkbox.checked ? '✓' : '';
            checkbox.replaceWith(state);
        });
        const background = getComputedStyle(document.getElementById('board-container'));
        Object.assign(clone.style, {
            position: 'relative', top: '0', left: '0', transform: 'none', margin: '0',
            width: `${app.data.topology.config.canvasWidth}px`, height: `${app.data.topology.config.canvasHeight}px`, overflow: 'hidden',
            backgroundColor: background.backgroundColor,
            backgroundImage: background.backgroundImage,
            backgroundSize: background.backgroundSize
        });
        const host = document.createElement('div');
        host.setAttribute('aria-hidden', 'true');
        Object.assign(host.style, { position: 'fixed', left: '-20000px', top: '0', pointerEvents: 'none' });
        host.appendChild(clone);
        document.body.appendChild(host);
        return { host, clone };
    }

    function filename(simulator) {
        const now = new Date();
        const timestamp = [now.getFullYear(), now.getMonth() + 1, now.getDate(),
            now.getHours(), now.getMinutes(), now.getSeconds()]
            .map(value => String(value).padStart(2, '0')).join('');
        return `Q-NEX-${simulator.currentScenario}-${simulator.lang}-media-${simulator.mediaServerEnabled ? 'on' : 'off'}-${timestamp}.png`;
    }

    Object.assign(Simulator.prototype, {
        updateExportButton() {
            const button = document.getElementById('btn-export-png');
            if (!button) return;
            const translations = this.getTranslations();
            button.textContent = this.isExporting ? translations.export_busy : translations.export_png;
            button.disabled = Boolean(this.isExporting);
        },

        async exportPng() {
            if (this.isExporting) return;
            this.isExporting = true;
            const playing = this.isPlaying;
            this.isPlaying = false;
            this.updateExportButton();
            const controls = [...document.querySelectorAll('button, input, select')];
            const disabled = controls.map(control => control.disabled);
            controls.forEach(control => { control.disabled = true; });
            let snapshot;
            const status = document.getElementById('export-status');
            status.textContent = this.getTranslations().export_busy;
            try {
                await document.fonts.ready;
                snapshot = snapshotBoard();
                await Promise.all([...snapshot.clone.querySelectorAll('img')].map(img => img.decode()));
                const blob = await window.htmlToImage.toBlob(snapshot.clone, {
                    width: app.data.topology.config.canvasWidth,
                    height: app.data.topology.config.canvasHeight, pixelRatio: 2, fontEmbedCSS: ''
                });
                if (!blob) throw new Error('PNG encoder returned no data');
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = filename(this);
                document.body.appendChild(link);
                link.click();
                link.remove();
                setTimeout(() => URL.revokeObjectURL(url), 30000);
                status.textContent = this.getTranslations().export_success;
            } catch (error) {
                console.error('PNG export failed:', error);
                status.textContent = this.getTranslations().export_error;
            } finally {
                snapshot?.host.remove();
                controls.forEach((control, index) => { control.disabled = disabled[index]; });
                this.isPlaying = playing;
                this.lastTimestamp = performance.now();
                this.isExporting = false;
                this.updateExportButton();
            }
        }
    });
})(window.QnexApp, window.QnexApp.services.QnexSimulator);
