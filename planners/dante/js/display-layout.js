(function (App) {
    const F = globalThis.DisplayFit;
    App.displayRoom = (width, depth, height, stations = [], doorSide = 'right', profile = null) => ({
        width,
        depth,
        height,
        stations: stations.filter((s) => s.type === 'station'),
        doorSide,
        profile,
    });
    App.seedScreens = function (width, ifps, aux) {
        return {
            stageMm: Math.round(width * 1000),
            screens: [
                ...ifps
                    .filter((s) => s.type === 'ifp')
                    .map((s) => F.standard('front', s.size || 86, s.id, s.x, s.y)),
                ...aux.map((s) => {
                    const p = F.standard(s.side, s.size, s.id, s.x, s.y);
                    p.offsetMm = Math.max(
                        0,
                        Math.round((s.side === 'left' ? s.x : width - s.x) * 1000 - p.widthMm / 2),
                    );
                    return p;
                }),
            ],
        };
    };
    App.screenEntries = function (layout, depth) {
        const teaching = [],
            displays = [];
        for (const panel of layout.screens) {
            const { id, x, y, size } = panel;
            if (panel.zone === 'front')
                teaching.push({ id, x, y, type: 'ifp', model: panel.name, size, panel });
            else {
                const maxDistance = { 55: 4.1, 65: 5, 75: 5.6 }[size] || 0;
                displays.push({
                    id,
                    x,
                    y,
                    side: panel.zone,
                    size,
                    panel,
                    maxDistance,
                    coverageEnd: Math.min(depth, y + maxDistance),
                });
            }
        }
        return { teaching, displays };
    };
    App.admitDisplayRoom = function (overrides = {}) {
        if (!App.state.displayPlan) return true;
        const { plan, room, lang } = App.displayContext();
        const nextRoom = { ...room, ...overrides };
        if (overrides.width)
            nextRoom.stations = nextRoom.stations.map((d) => ({
                ...d,
                x: Math.max(0.41, Math.min(nextRoom.width - 0.41, d.x)),
            }));
        if (overrides.height !== undefined && !overrides.profile) nextRoom.profile = null;
        const result = F.fit(plan, nextRoom);
        const message = document.getElementById('handoff-error');
        if (result.status === 'blocked') {
            const reason = DisplayEditor.message(result, lang);
            App.displayEditor?.report(reason);
            message.textContent = reason;
            message.hidden = false;
            return false;
        }
        App.state.displayPlan = result.plan;
        App.displayEditor?.report('');
        message.hidden = true;
        return true;
    };
    App.setStationOption = function (key, value) {
        const s = App.state,
            oldValue = s.equipment[key],
            oldDevices = s.teachingDevices.map((d) => ({ ...d }));
        s.equipment[key] = value;
        if (!s.displayPlan) return;
        App.syncTeachingDevices();
        if (!App.admitDisplayRoom()) {
            s.equipment[key] = oldValue;
            s.teachingDevices = oldDevices;
        }
    };
    App.displayContext = function () {
        const s = App.state;
        const teaching = s.teachingDevices.slice();
        // A hidden IFP still consumes its installation space when confirming the plan.
        if (!s.displayPlan && !s.showIFP) {
            for (let i = teaching.filter((d) => d.type === 'ifp').length; i < s.equipment.ifpCount; i++) {
                teaching.push({
                    type: 'ifp',
                    id: 'hidden-lcd-' + (i + 1),
                    size: 86,
                    x: s.roomLength / 2,
                    y: 0.15,
                });
            }
        }
        return {
            frontWall: s.tracking?.hall === 'small',
            plan: s.displayPlan || App.seedScreens(s.roomLength, teaching, s.auxDisplays),
            room: App.displayRoom(
                s.roomLength,
                s.roomWidth,
                s.heightProfile.front,
                s.teachingDevices,
                'right',
                s.heightProfile,
            ),
            lang: document.getElementById('langSelect').value,
        };
    };
    App.applyScreenEntries = function () {
        const s = App.state;
        if (!s.displayPlan) return;
        const parts = App.screenEntries(s.displayPlan, s.roomWidth);
        s.teachingDevices = [...s.teachingDevices.filter((d) => d.type !== 'ifp'), ...parts.teaching];
        s.auxDisplays = parts.displays;
        s.equipment.ifpCount = parts.teaching.length;
        s.manualAux = true;
    };
    App.mountDisplayEditor = function (host) {
        App.displayEditor = DisplayEditor.bind(host, App.displayContext, (plan) => {
            const s = App.state;
            s.displayPlan = plan;
            document.getElementById('handoff-error').hidden = true;
            App.applyScreenEntries();
            App.renderRoom();
        });
    };
    App.checkDisplayMove = function (device, x, y) {
        const s = App.state;
        if (!s.displayPlan) return false;
        const context = App.displayContext();
        const screen = s.displayPlan.screens.find((p) => p.id === String(device.id));
        const candidate = screen
            ? {
                  ...s.displayPlan,
                  screens: s.displayPlan.screens.map((p) => (p === screen ? { ...p, x, y } : p)),
              }
            : s.displayPlan;
        if (!screen && device.type !== 'station') return false;
        if (!screen)
            context.room.stations = context.room.stations.map((d) =>
                d.id === device.id ? { ...d, x, y } : d,
            );
        const result = F.fit(candidate, context.room, { fixed: true });
        if (result.status === 'blocked') {
            App.displayEditor?.report(DisplayEditor.message(result, context.lang));
            return true;
        }
        if (!screen) {
            device.x = x;
            device.y = y;
        }
        s.displayPlan = result.plan;
        App.renderRoom();
        return true;
    };
})(window.AISpeech);
