/** Join localized content to stable device IDs without altering topology data. */
(function (app) {
    const roomDevices = {
        room_a: ['ndp600', 'ifp_a', 'spk_a', 'lcs810'], room_b: ['nmp', 'ifp_b', 'spk_b'],
        room_h: ['ndp200', 'ifp_h', 'spk_h'], room_sl: ['sl100', 'ifp_sl', 'spk_sl'],
        room_c: ['nps150', 'disp_c', 'spk_c'], room_l: ['mbx_library', 'disp_l', 'spk_l']
    };
    Object.entries(app.data.localeContent).forEach(([lang, content]) => {
        const ui = app.data.i18n[lang];
        content.deviceZones = {};
        ['console', 'app', 'cloud', 'router', 'switch', 'mediaserver'].forEach((id, index) => {
            content.deviceZones[id] = content.locations[index];
        });
        Object.entries(roomDevices).forEach(([zone, devices]) => {
            devices.forEach(id => { content.deviceZones[id] = ui.zones[zone]; });
        });
        content.deviceScenarios = {};
        Object.entries(content.applications).forEach(([id, values]) => {
            content.deviceScenarios[id] = Object.fromEntries(
                ['teaching', 'control', 'cascading', 'badge1', 'badge2', 'badge3'].map((key, index) => [key, values[index]])
            );
        });
        content.tour.forEach(step => {
            step.description = step.paragraphs.map(text => `<p class="tour-text">${text}</p>`).join('');
        });
        app.data.screenStates[lang] = {};
        Object.entries(app.data.screenStates.en).forEach(([scenario, screens]) => {
            app.data.screenStates[lang][scenario] = {};
            Object.entries(screens).forEach(([id, state]) => {
                // Preserve inactive displays; meeting-screen-states supplies NPS150-specific text.
                const inactive = ['STANDBY', 'SIGNAGE', 'NOTICE'].includes(state.badge);
                const text = ui.scenarios[inactive ? 'standby' : scenario];
                app.data.screenStates[lang][scenario][id] = {
                    ...state, badge: text.badge,
                    title: inactive ? content.devices[id][0] : text.title,
                    desc: text.desc
                };
            });
        });
    });
})(window.QnexApp);
