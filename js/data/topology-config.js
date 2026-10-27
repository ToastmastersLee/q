/**
 * Canvas dimensions, wiring colors and node positions.
 */
(function (app) {
    app.data.topology.config = {
        canvasWidth: 1440,
        canvasHeight: 1360,
        colors: {
            lan: '#0074D9',
            usb: '#FFDC00',
            hdmi: '#FF4136',
            audio: '#2ECC40',
            rs232: '#B10DC9',
            relay: '#FF851B',
            power: '#111111',
            wireless: '#0284c7',
            cloudControl: '#38bdf8',
            rtmpStream: '#f97316'
        }
    };

    app.data.topology.positions = {
        console: { x: 75, y: 110, w: 140, h: 112 },
        app: { x: 75, y: 410, w: 140, h: 115 },
        cloud: { x: 440, y: 65, w: 165, h: 112 },
        router: { x: 440, y: 260, w: 165, h: 112 },
        switch: { x: 440, y: 480, w: 165, h: 115 },
        mediaserver: { x: 430, y: 740, w: 185, h: 124 },
        ndp600: { x: 800, y: 70, w: 140, h: 112 },
        ifp_a: { x: 1020, y: 65, w: 135, h: 112 },
        spk_a: { x: 1210, y: 65, w: 105, h: 112 },
        lcs810: { x: 968, y: 210, w: 230, h: 150 },
        nmp: { x: 800, y: 420, w: 140, h: 112 },
        ifp_b: { x: 1020, y: 415, w: 135, h: 112 },
        spk_b: { x: 1210, y: 415, w: 105, h: 112 },
        ndp200: { x: 800, y: 610, w: 140, h: 112 },
        ifp_h: { x: 1020, y: 605, w: 135, h: 112 },
        spk_h: { x: 1210, y: 605, w: 105, h: 112 },
        sl100: { x: 800, y: 800, w: 140, h: 112 },
        ifp_sl: { x: 1020, y: 795, w: 135, h: 112 },
        spk_sl: { x: 1210, y: 795, w: 105, h: 112 },
        nps150: { x: 800, y: 990, w: 140, h: 112 },
        disp_c: { x: 1020, y: 985, w: 135, h: 112 },
        spk_c: { x: 1210, y: 985, w: 105, h: 112 },
        mbx_library: { x: 800, y: 1180, w: 140, h: 112 },
        disp_l: { x: 1020, y: 1175, w: 135, h: 112 },
        spk_l: { x: 1210, y: 1175, w: 105, h: 112 }
    };
})(window.QnexApp);
