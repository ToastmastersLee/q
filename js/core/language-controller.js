/** Locale content adapters; geometry and product model identifiers stay stable. */
(function (app, Simulator) {
    const DEMO_TEXT = {
        en: ['LCS 3D Demo ↗', 'Dante 3D Demo ↗'],
        zh: ['LCS 3D 演示 ↗', 'Dante 3D 演示 ↗'],
        ko: ['LCS 3D 데모 ↗', 'Dante 3D 데모 ↗'],
        mn: ['LCS 3D үзүүлэн ↗', 'Dante 3D үзүүлэн ↗'],
        ja: ['LCS 3D デモ ↗', 'Dante 3D デモ ↗'],
        es: ['Demo 3D LCS ↗', 'Demo 3D Dante ↗'],
        fr: ['Démo LCS 3D ↗', 'Démo Dante 3D ↗'],
        ar: ['عرض LCS ثلاثي الأبعاد ↗', 'عرض Dante ثلاثي الأبعاد ↗']
    };
    Object.assign(Simulator.prototype, {
        updateLanguageControls(t) {
            document.title = `Q-NEX | ${t.app_title}`;
            const select = document.getElementById('language-select');
            select.value = this.lang;
            select.setAttribute('aria-label', t.setting_lang_label);
            const [lcs, dante] = DEMO_TEXT[this.lang];
            document.getElementById('lcs-demo-link').textContent = lcs;
            document.getElementById('dante-demo-link').textContent = dante;
            for (const name of ['lcs','dante']) document.getElementById(`${name}-demo-link`).setAttribute('href', `demos/${name}/index.html?lang=${this.lang}`);
            for (const name of ['lcs','dante']) {
 const link=document.getElementById(`${name}-2d-link`);
 link.onclick=()=>{link.href=`planners/${name}/index.html?lang=${this.lang}&theme=${this.theme}&home=../../index.html`;};
 }
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
            if (content && property.startsWith('badge')) return content.deviceScenarios?.[device.id]?.[property];
            return content?.deviceScenarios?.[device.id]?.[property]
                || device.scenarios?.[`${property}_${this.lang}`]
                || device.scenarios?.[`${property}_en`];
        }
    });
})(window.QnexApp, window.QnexApp.services.QnexSimulator);
