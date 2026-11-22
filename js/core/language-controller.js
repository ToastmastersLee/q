/** Locale content adapters; geometry and product model identifiers stay stable. */
(function (app, Simulator) {
    const SETTINGS_COPY = {
        en: ['Planners', 'Tools', 'Display', 'Meeting Room', 'Each planner opens in a new tab.'],
        zh: ['方案设计', '工具', '显示', '会议室', '方案工具会在新标签页打开。'],
        ko: ['설계 도구', '도구', '화면', '회의실', '설계 도구는 새 탭에서 열립니다.'],
        mn: ['Төлөвлөлт', 'Хэрэгсэл', 'Дэлгэц', 'Хурлын өрөө', 'Төлөвлөх хэрэгсэл шинэ табд нээгдэнэ.'],
        ja: ['プランナー', 'ツール', '表示', '会議室', 'プランナーは新しいタブで開きます。'],
        es: ['Planificación', 'Herramientas', 'Pantalla', 'Sala de reuniones', 'Cada planificador se abre en una pestaña nueva.'],
        fr: ['Planification', 'Outils', 'Affichage', 'Salle de réunion', 'Chaque outil de planification s’ouvre dans un nouvel onglet.'],
        ar: ['أدوات التخطيط', 'الأدوات', 'العرض', 'غرفة الاجتماعات', 'تُفتح أدوات التخطيط في علامات تبويب جديدة.']
    };
    Object.assign(Simulator.prototype, {
        updateLanguageControls(t) {
            document.title = `Q-NEX | ${t.app_title}`;
            const select = document.getElementById('language-select');
            select.value = this.lang;
            select.setAttribute('aria-label', t.setting_lang_label);
            const labelIds = ['settings-tab-planners', 'settings-tab-tools', 'settings-tab-display',
                'planner-name-meeting', 'lbl-planner-tab-note'];
            SETTINGS_COPY[this.lang].forEach((label, index) => {
                document.getElementById(labelIds[index]).textContent = label;
            });
            this.updatePlannerLinks();
            const titles = {
                'btn-settings-toggle': t.settings_heading,
                'btn-scenarios-toggle': t.scenario_bar_title,
                'btn-scenarios-close-bar': t.scenarios_collapse_btn,
                'btn-sidebar-close': t.sidebar_close,
                'btn-sidebar-expand-tab': t.sidebar_tab,
                'speed-select': t.setting_speed_label,
                'btn-theme-toggle': t.setting_theme_label,
                'btn-fullscreen': t.setting_fullscreen_label
            };
            Object.entries(titles).forEach(([id, title]) => {
                document.getElementById(id)?.setAttribute('title', title);
            });
        },
        updatePlannerLinks() {
            const language = `lang=${this.lang}`;
            for (const name of ['lcs', 'dante']) {
                document.getElementById(`${name}-2d-link`).setAttribute('href',
                    `planners/${name}/index.html?${language}&theme=${this.theme}&home=../../index.html`);
                document.getElementById(`${name}-demo-link`).setAttribute('href',
                    `demos/${name}/index.html?${language}`);
            }
            const meetingQuery = `?${language}&v=20261102-devices`;
            document.getElementById('meeting-2d-link').setAttribute('href',
                `planners/meeting/index.html${meetingQuery}`);
            document.getElementById('meeting-3d-link').setAttribute('href',
                `planners/meeting/three-demo/index.html${meetingQuery}`);
        },
        getDeviceTranslation(device, property) {
            const data = app.data.localeContent?.[this.lang];
            if (!data) return null;
            const item = data.devices[device.id];
            if (property === 'zone') return data.deviceZones[device.id];
            if (property === 'name' || property === 'genericName') return item?.[0];
            if (property === 'role') return item?.[1];
            if (property === 'ports') return data.ports[device.id];
            return null;
        },
        localizedScenarioValue(device, property) {
            const content = app.data.localeContent?.[this.lang];
            if (content && property.startsWith('badge')) return this.resolveDeploymentText(content.deviceScenarios?.[device.id]?.[property]);
            return this.resolveDeploymentText(content?.deviceScenarios?.[device.id]?.[property]
                || device.scenarios?.[`${property}_${this.lang}`]
                || device.scenarios?.[`${property}_en`]);
        }
    });
})(window.QnexApp, window.QnexApp.services.QnexSimulator);
