/** View-specific geometry; the shared product catalogue remains unchanged. */
(function (app) {
    const base = app.data.topology;
    const rooms = [
        { key: 'room_a', y: 40, height: 335 },
        { key: 'room_b', y: 390, height: 175 },
        { key: 'room_h', y: 580, height: 175 },
        { key: 'room_sl', y: 770, height: 175 },
        { key: 'room_c', y: 960, height: 175 },
        { key: 'room_l', y: 1150, height: 175 }
    ];
    const excluded = new Set(['sl100', 'ifp_sl', 'spk_sl', 'nps150', 'disp_c', 'spk_c', 'lcs810']);
    const mediaPositions = Object.fromEntries(Object.entries(base.positions)
        .filter(([id]) => !excluded.has(id)).map(([id, position]) => [id, { ...position }]));
    mediaPositions.console = { ...mediaPositions.console, x: 60, y: 75 };
    mediaPositions.app = { ...mediaPositions.app, x: 230, y: 75 };
    const shifts = { nmp: -130, ifp_b: -130, spk_b: -130,
        ndp200: -100, ifp_h: -100, spk_h: -100,
        mbx_library: -450, disp_l: -450, spk_l: -450 };
    Object.entries(shifts).forEach(([id, shift]) => { mediaPositions[id].y += shift; });
    const visible = ids => base.connections.filter(link => ids.includes(link.from) && ids.includes(link.to));
    const broadcastOnly = new Set(['mediaserver', 'mbx_library', 'disp_l', 'spk_l']);
    const controlIds = Object.keys(base.positions).filter(id => !broadcastOnly.has(id));
    const mediaIds = Object.keys(mediaPositions);
    const mediaConnections = visible(mediaIds).map(link => {
        const shift = shifts[link.to] || 0;
        const points = link.points.map(([x, y], index) => [x,
            y + (link.from === 'switch' && index < 2 ? 0 : shift)]);
        if (link.id === 'link_console_cloud') points.splice(0, points.length, [200, 130], [215, 130], [215, 60], [420, 60], [420, 105], [440, 105]);
        if (link.id === 'link_app_cloud') points.splice(0, points.length, [370, 130], [410, 130], [410, 140], [440, 140]);
        return { ...link, points, hideLabel: ['link_console_cloud', 'link_app_cloud'].includes(link.id), bidirectional: link.id === 'link_mediaserver_switch' };
    });
    app.data.architectureViews = {
        control: {
            config: { ...base.config, canvasHeight: 1170 }, positions: base.positions,
            deviceIds: controlIds, connections: visible(controlIds),
            rooms: rooms.filter(room => room.key !== 'room_l'),
            scenarios: ['standby', 'cloud_control', 'emergency_alert', 'local_teaching']
        },
        media: {
            config: { ...base.config, canvasHeight: 1000 }, positions: mediaPositions,
            deviceIds: mediaIds, connections: mediaConnections,
            rooms: ['room_a', 'room_b', 'room_h', 'room_l'].map((key, index) => ({
                key, y: 40 + index * 220, height: 200
            })),
            scenarios: ['standby', 'live_broadcast', 'bell_music']
        }
    };
})(window.QnexApp);
