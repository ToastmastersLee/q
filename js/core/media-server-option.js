/** One view gate shared by topology, scenarios, inspector, export and guide. */
(function (app, Simulator) {
    Object.assign(Simulator.prototype, {
        getTopology() { return app.data.architectureViews[this.view]; },
        isDeviceVisible(deviceId) { return this.getTopology().deviceIds.includes(deviceId); },
        isScenarioAvailable(scenarioKey) { return this.getTopology().scenarios.includes(scenarioKey); },
        updateMediaServerControls() {
            const t = this.getTranslations();
            document.querySelector('.architecture-tabs').setAttribute('aria-label', t.views.label);
            document.getElementById('architecture-panel').setAttribute('aria-labelledby', `tab-${this.view}`);
            document.querySelectorAll('[data-view]').forEach(tab => {
                const selected = tab.dataset.view === this.view;
                tab.setAttribute('aria-selected', String(selected));
                tab.tabIndex = selected ? 0 : -1;
                tab.querySelector('.view-tab-label').textContent = t.views[tab.dataset.view];
            });
            document.querySelector('.legend-filter-chk[data-type=usb]').closest('.legend-row').hidden = this.view === 'media';
            document.querySelectorAll('.scenario-btn').forEach(button => {
                button.hidden = !this.isScenarioAvailable(button.dataset.scenario);
            });
        },
        setView(view) {
            if (this.isExporting || !app.data.architectureViews[view] || this.view === view) return;
            window.newbieTour?.close();
            this.clearParticles();
            window.soundSys?.stopAll();
            this.view = view;
            this.updateMediaServerControls();
            this.renderCanvas();
            Object.entries(this.cableFilters).forEach(([type, visible]) => this.toggleCableFilter(type, visible));
            this.selectDevice(this.selectedDevice || 'switch', { openSidebar: false });
            this.setScenario(view === 'media' ? 'live_broadcast' : 'standby');
            document.getElementById('board-container').scrollTop = 0;
            this.handleResize();
        },
        // Compatibility entry point; the former option now selects a complete view.
        setMediaServerEnabled(enabled) { this.setView(enabled ? 'media' : 'control'); }
    });
})(window.QnexApp, window.QnexApp.services.QnexSimulator);
