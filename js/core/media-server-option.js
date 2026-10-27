/** One configuration gate shared by topology, scenarios, inspector and guide. */
(function (Simulator) {
    const MEDIA_SCENARIOS = ['live_broadcast', 'bell_music'];

    Object.assign(Simulator.prototype, {
        isDeviceVisible(deviceId) {
            return deviceId !== 'mediaserver' || this.mediaServerEnabled;
        },

        isScenarioAvailable(scenarioKey) {
            return this.mediaServerEnabled || !MEDIA_SCENARIOS.includes(scenarioKey);
        },

        updateMediaServerControls() {
            const checkbox = document.getElementById('media-server-option');
            if (checkbox) checkbox.checked = this.mediaServerEnabled;
            const label = document.getElementById('lbl-media-server-option');
            if (label) label.textContent = this.getTranslations().media_server_option;
            document.querySelectorAll('.scenario-btn').forEach(button => {
                button.hidden = !this.isScenarioAvailable(button.dataset.scenario);
            });
        },

        setMediaServerEnabled(enabled) {
            if (this.isExporting) return;
            const tour = window.newbieTour;
            const oldStep = tour?.steps[tour.currentStep];
            this.mediaServerEnabled = Boolean(enabled);
            try {
                localStorage.setItem('qnex_media_server', String(this.mediaServerEnabled));
            } catch (error) {}
            this.updateMediaServerControls();
            const scenario = this.isScenarioAvailable(this.currentScenario)
                ? this.currentScenario : 'standby';
            this.clearParticles();
            this.renderCanvas();
            Object.entries(this.cableFilters).forEach(([type, visible]) => {
                this.toggleCableFilter(type, visible);
            });
            this.setScenario(scenario);
            this.selectDevice(this.selectedDevice || 'switch', { openSidebar: false });
            if (tour && !document.getElementById('tour-modal').classList.contains('hidden')) {
                const index = tour.steps.indexOf(oldStep);
                tour.currentStep = index < 0 ? Math.min(tour.currentStep, tour.steps.length - 1) : index;
                tour.renderStep();
            }
        }
    });
})(window.QnexApp.services.QnexSimulator);
