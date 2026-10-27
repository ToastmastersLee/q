/** Theme, language, fullscreen and responsive layout controls. */
(function (Simulator) {
    const setText = (id, value) => {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    };

    Object.assign(Simulator.prototype, {
        getTranslations() {
            return window.I18N_DATA?.[this.lang] || window.I18N_DATA?.en;
        },

        applyTheme(theme) {
            this.theme = theme;
            document.body.classList.remove('theme-light', 'theme-dark');
            document.body.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light');
            try {
                localStorage.setItem('qnex_theme', theme);
            } catch (error) {}

            const button = document.getElementById('btn-theme-toggle');
            const translations = this.getTranslations();
            if (button && translations) {
                button.innerHTML = theme === 'dark' ? translations.theme_dark : translations.theme_light;
            }
        },

        toggleTheme() {
            this.applyTheme(this.theme === 'dark' ? 'light' : 'dark');
            window.soundSys?.playClick();
        },

        applyLanguage(language) {
            this.lang = Object.hasOwn(window.I18N_DATA, language) ? language : 'en';
            document.documentElement.lang = this.lang === 'zh' ? 'zh-CN' : this.lang;
            document.documentElement.dir = this.lang === 'ar' ? 'rtl' : 'ltr';

            const translations = this.getTranslations();
            if (!translations) return;
            this.updateHeaderLanguage(translations);
            this.updateLanguageControls(translations);
            this.updateMediaServerControls();
            this.updateExportButton();
            this.updateScenarioLanguage(translations);
            this.updateTopologyLanguage(translations);
            this.updateInspectorLanguage(translations);
            this.updateLegendLanguage(translations);
            this.updateTourLanguage(translations);
            this.updateScreensAndSpeakers(this.currentScenario);
        },

        updateHeaderLanguage(translations) {
            const title = document.querySelector('.app-title-group h1');
            if (title) {
                title.childNodes[0].textContent = `${translations.app_title} `;
                const tag = document.getElementById('app-version');
                if (tag) tag.textContent = translations.app_tag;
            }
            const subtitle = document.querySelector('.app-title-group p');
            if (subtitle) subtitle.textContent = translations.app_subtitle;

            const htmlValues = {
                'btn-theme-toggle': this.theme === 'dark' ? translations.theme_dark : translations.theme_light,
                'btn-start-tour': translations.tour_btn,
                'btn-sound-toggle': window.soundSys?.isMuted ? translations.sound_off : translations.sound_on,
                'btn-play-pause': this.isPlaying ? translations.pause : translations.play,
                'btn-reset': translations.reset,
                'btn-sidebar-toggle': this.isSidebarCollapsed ? translations.sidebar_expand_btn : translations.sidebar_collapse_btn
            };
            Object.entries(htmlValues).forEach(([id, value]) => {
                const element = document.getElementById(id);
                if (element) element.innerHTML = value;
            });

            setText('lbl-settings-toggle-text', translations.settings_btn_text || '更多设置');
            setText('lbl-settings-heading', translations.settings_heading);
            setText('lbl-setting-speed', translations.setting_speed_label);
            setText('lbl-setting-sound', translations.setting_sound_label);
            setText('lbl-setting-theme', translations.setting_theme_label);
            setText('lbl-setting-lang', translations.setting_lang_label);
            setText('lbl-setting-fullscreen', translations.setting_fullscreen_label);
            setText('lbl-sidebar-title', translations.sidebar_heading);
            setText('lbl-sidebar-close-text', translations.sidebar_close);
            setText('lbl-sidebar-expand-text', translations.sidebar_tab);

            const speed = document.getElementById('speed-select');
            if (speed?.options.length >= 3) {
                speed.options[0].text = translations.speed_slow;
                speed.options[1].text = translations.speed_normal;
                speed.options[2].text = translations.speed_fast;
            }
            this.updateFullscreenButton();
        },

        updateScenarioLanguage(translations) {
            const barTitle = document.querySelector('.scenario-bar-title');
            if (barTitle) barTitle.textContent = translations.scenario_bar_title;
            document.querySelectorAll('.scenario-btn').forEach(button => {
                const scenario = translations.scenarios?.[button.dataset.scenario];
                if (scenario) button.innerHTML = scenario.btn;
            });
            setText('btn-scenarios-close-bar', translations.scenarios_collapse_btn || '收起 ▴');
            this.updateScenarioBanner(this.currentScenario);
        },

        updateTopologyLanguage(translations) {
            const cloudTitle = document.querySelector('.cloud-title');
            if (cloudTitle && translations.zones) cloudTitle.textContent = translations.zones.cloud_plane;
            const campusTitle = document.querySelector('.campus-lan-title');
            if (campusTitle && translations.zones) campusTitle.textContent = translations.zones.campus_lan;

            const roomKeys = ['room_a', 'room_b', 'room_h', 'room_sl', 'room_c', 'room_l'];
            document.querySelectorAll('.room-title').forEach((element, index) => {
                if (translations.zones?.[roomKeys[index]]) {
                    element.textContent = translations.zones[roomKeys[index]];
                }
            });

            Object.values(TOPOLOGY_DATA.devices).forEach(device => {
                const name = document.querySelector(`#node-${device.id} .node-generic-name`);
                if (name) name.textContent = this.localizedDeviceValue(device, 'genericName');
            });
        },

        updateInspectorLanguage(translations) {
            setText('lbl-role', translations.inspector.role_label);
            setText('lbl-ports', translations.inspector.ports_label);
            setText('lbl-scenarios', translations.inspector.scenarios_label);
            if (this.selectedDevice) {
                this.selectDevice(this.selectedDevice, { openSidebar: false });
                return;
            }
            if (TOPOLOGY_DATA.devices?.switch) {
                this.selectDevice('switch');
            }
        },

        updateLegendLanguage(translations) {
            const title = document.getElementById('legend-title');
            if (title) title.childNodes[0].textContent = `${translations.legend.title} `;
            setText('legend-filter-hint', translations.legend.filter_hint);
            setText('legend-label-lan', translations.legend.lan);
            setText('legend-label-hdmi', translations.legend.hdmi);
            setText('legend-label-audio', translations.legend.audio);
            setText('legend-label-usb', translations.legend.usb);
            setText('legend-label-wireless', translations.legend.wireless);
        },

        updateTourLanguage(translations) {
            setText('tour-close-btn', translations.tour.close_btn);
            setText('tour-prev-btn', translations.tour.prev_btn);
            const modal = document.getElementById('tour-modal');
            if (window.newbieTour && !modal?.classList.contains('hidden')) {
                window.newbieTour.renderStep();
            }
        },

        localizedDeviceValue(device, property) {
            return this.getDeviceTranslation(device, property)
                || device[`${property}_${this.lang}`]
                || device[`${property}_en`]
                || device[property]
                || device.name;
        },

        toggleLanguage() {
            this.applyLanguage(this.lang === 'zh' ? 'en' : 'zh');
            window.soundSys?.playClick();
        },

        toggleFullscreen() {
            if (!document.fullscreenElement) {
                const root = document.documentElement;
                const request = root.requestFullscreen || root.webkitRequestFullscreen || root.msRequestFullscreen;
                const result = request?.call(root);
                result?.catch?.(error => console.warn('Fullscreen request failed:', error));
                return;
            }
            const exit = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
            const result = exit?.call(document);
            result?.catch?.(error => console.warn('Exit fullscreen failed:', error));
        },

        updateFullscreenButton() {
            const button = document.getElementById('btn-fullscreen');
            const translations = this.getTranslations();
            if (button && translations) {
                button.innerHTML = document.fullscreenElement
                    ? translations.fullscreen_exit
                    : translations.fullscreen_enter;
            }
        },

        toggleSettingsPanel() {
            const panel = document.getElementById('settings-panel');
            const dropdown = document.querySelector('.settings-dropdown');
            if (!panel) return;
            const isHidden = panel.classList.toggle('hidden');
            document.getElementById('btn-settings-toggle')?.setAttribute('aria-expanded', String(!isHidden));
            dropdown?.classList.toggle('open', !isHidden);
            window.soundSys?.playClick();
        },

        closeSettingsPanel() {
            const panel = document.getElementById('settings-panel');
            const dropdown = document.querySelector('.settings-dropdown');
            if (panel && !panel.classList.contains('hidden')) {
                panel.classList.add('hidden');
                document.getElementById('btn-settings-toggle')?.setAttribute('aria-expanded', 'false');
                dropdown?.classList.remove('open');
            }
        },

        toggleSidebar(forceState) {
            const sidebar = document.getElementById('sidebar-panel');
            const expandTab = document.getElementById('btn-sidebar-expand-tab');
            if (!sidebar) return;

            this.isSidebarCollapsed = (forceState !== undefined) ? forceState : !this.isSidebarCollapsed;
            sidebar.classList.toggle('collapsed', this.isSidebarCollapsed);
            expandTab?.classList.toggle('hidden', !this.isSidebarCollapsed);

            const translations = this.getTranslations();
            const toggleBtn = document.getElementById('btn-sidebar-toggle');
            if (toggleBtn && translations) {
                toggleBtn.innerHTML = this.isSidebarCollapsed
                    ? translations.sidebar_expand_btn
                    : translations.sidebar_collapse_btn;
            }

            window.soundSys?.playClick();
            setTimeout(() => this.handleResize(), 320);
        },

        toggleScenariosBar(forceState) {
            const wrapper = document.getElementById('scenarios-collapse-wrapper');
            const toggleBtn = document.getElementById('btn-scenarios-toggle');
            if (!wrapper) return;

            this.isScenariosCollapsed = (forceState !== undefined) ? forceState : !this.isScenariosCollapsed;
            wrapper.classList.toggle('collapsed', this.isScenariosCollapsed);
            toggleBtn?.classList.toggle('open', !this.isScenariosCollapsed);
            toggleBtn?.setAttribute('aria-expanded', String(!this.isScenariosCollapsed));
            window.soundSys?.playClick();
            setTimeout(() => this.handleResize(), 320);
        },

        handleResize() {
            const board = document.getElementById('topology-board');
            const container = document.getElementById('board-container');
            if (!board || !container) return;

            const width = TOPOLOGY_DATA.config.canvasWidth;
            const height = TOPOLOGY_DATA.config.canvasHeight;
            // clientWidth excludes the native vertical scrollbar. Keep 12px on each side.
            const scale = Math.min(Math.max(0, container.clientWidth - 24) / width, 1.15);
            board.style.transform = `scale(${scale})`;
            board.style.transformOrigin = 'top left';

            let spacer = document.getElementById('board-scroll-spacer');
            if (!spacer) {
                spacer = document.createElement('div');
                spacer.id = 'board-scroll-spacer';
                container.appendChild(spacer);
                spacer.appendChild(board);
            }
            // Clip the unscaled layout box so only the scaled board contributes to scrolling.
            Object.assign(spacer.style, {
                width: `${width * scale + 24}px`,
                height: `${height * scale + 24}px`,
                position: 'relative',
                overflow: 'hidden'
            });
        }
    });
})(window.QnexApp.services.QnexSimulator);
