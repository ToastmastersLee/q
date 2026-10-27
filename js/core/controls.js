/** DOM event binding for application controls. */
(function (Simulator) {
    Object.assign(Simulator.prototype, {
        bindEvents() {
            this.bindScenarioControls();
            this.bindViewControls();
            document.getElementById('btn-export-png')?.addEventListener('click', () => this.exportPng());
            this.bindPlaybackControls();
            this.bindDisplayControls();
            this.bindTourAndInspectorControls();
            this.bindCableFilters();
            this.bindCollapsiblePanels();
            window.addEventListener('resize', () => this.handleResize());
            this.boardResizeObserver = new ResizeObserver(() => this.handleResize());
            this.boardResizeObserver.observe(document.getElementById('board-container'));
            this.handleResize();
        },

        bindViewControls() {
            const tabs = [...document.querySelectorAll('[data-view]')];
            tabs.forEach((tab, index) => {
                tab.addEventListener('click', () => this.setView(tab.dataset.view));
                tab.addEventListener('keydown', event => {
                    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
                    event.preventDefault();
                    const rtl = document.documentElement.dir === 'rtl';
                    const forward = event.key === (rtl ? 'ArrowLeft' : 'ArrowRight');
                    const target = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1
                        : (index + (forward ? 1 : -1) + tabs.length) % tabs.length;
                    this.setView(tabs[target].dataset.view);
                    tabs[target].focus();
                });
            });
        },

        bindScenarioControls() {
            document.querySelectorAll('.scenario-btn').forEach(button => {
                button.addEventListener('click', () => this.setScenario(button.dataset.scenario));
            });
        },

        bindPlaybackControls() {
            const playButton = document.getElementById('btn-play-pause');
            playButton?.addEventListener('click', () => {
                this.setPlayback(!this.isPlaying);
            });

            document.getElementById('speed-select')?.addEventListener('change', event => {
                this.speed = parseFloat(event.target.value);
            });
            document.getElementById('btn-reset')?.addEventListener('click', () => {
                this.setScenario('standby');
                window.soundSys?.playClick();
            });

            const soundButton = document.getElementById('btn-sound-toggle');
            soundButton?.addEventListener('click', () => {
                const isMuted = !window.soundSys.isMuted;
                window.soundSys.setMuted(isMuted);
                const translations = this.getTranslations();
                soundButton.innerHTML = isMuted ? translations.sound_off : translations.sound_on;
                if (!isMuted && this.isPlaying) window.soundSys.playClick();
            });
        },

        bindDisplayControls() {
            document.getElementById('btn-theme-toggle')
                ?.addEventListener('click', () => this.toggleTheme());
            document.getElementById('language-select')
                ?.addEventListener('change', event => {
                    this.applyLanguage(event.target.value);
                    window.soundSys?.playClick();
                });
            document.getElementById('btn-fullscreen')
                ?.addEventListener('click', () => this.toggleFullscreen());

            const updateFullscreen = () => {
                this.updateFullscreenButton();
                setTimeout(() => this.handleResize(), 100);
            };
            document.addEventListener('fullscreenchange', updateFullscreen);
            document.addEventListener('webkitfullscreenchange', updateFullscreen);
        },

        bindTourAndInspectorControls() {
            document.getElementById('btn-start-tour')
                ?.addEventListener('click', () => window.newbieTour?.start());
            document.getElementById('tour-next-btn')
                ?.addEventListener('click', () => window.newbieTour?.next());
            document.getElementById('tour-prev-btn')
                ?.addEventListener('click', () => window.newbieTour?.prev());
            document.getElementById('tour-close-btn')
                ?.addEventListener('click', () => window.newbieTour?.close());
            document.getElementById('inspector-test-btn')
                ?.addEventListener('click', () => this.triggerDeviceSelfTest());
        },

        bindCableFilters() {
            document.querySelectorAll('.legend-filter-chk').forEach(checkbox => {
                checkbox.addEventListener('change', event => {
                    this.toggleCableFilter(event.target.dataset.type, event.target.checked);
                });
            });
        },

        bindCollapsiblePanels() {
            const settingsToggle = document.getElementById('btn-settings-toggle');
            const settingsPanel = document.getElementById('settings-panel');

            settingsToggle?.addEventListener('click', (event) => {
                event.stopPropagation();
                this.toggleSettingsPanel();
            });
            settingsPanel?.addEventListener('click', event => {
                if (event.target.closest('.tool-actions button')) this.closeSettingsPanel();
            });

            document.addEventListener('click', (event) => {
                if (settingsPanel && !settingsPanel.classList.contains('hidden')) {
                    if (!settingsPanel.contains(event.target) && !settingsToggle?.contains(event.target)) {
                        this.closeSettingsPanel();
                    }
                }
            });

            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    const wasOpen = !settingsPanel?.classList.contains('hidden');
                    this.closeSettingsPanel();
                    if (wasOpen) settingsToggle?.focus();
                }
            });

            document.getElementById('btn-sidebar-toggle')
                ?.addEventListener('click', () => this.toggleSidebar());
            document.getElementById('btn-sidebar-close')
                ?.addEventListener('click', () => this.toggleSidebar(true));
            document.getElementById('btn-sidebar-expand-tab')
                ?.addEventListener('click', () => this.toggleSidebar(false));

            document.getElementById('btn-scenarios-toggle')
                ?.addEventListener('click', () => this.toggleScenariosBar());
            document.getElementById('btn-scenarios-close-bar')
                ?.addEventListener('click', () => this.toggleScenariosBar(true));
        }
    });
})(window.QnexApp.services.QnexSimulator);
