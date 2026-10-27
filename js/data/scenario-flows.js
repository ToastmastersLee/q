/** Signal particle definitions for each simulator scenario. */
(function (app) {
    const flow = (pathId, color, intervalMs, speed, initialDelay = 0) => ({
        pathId,
        color,
        intervalMs,
        speed,
        initialDelay
    });

    app.data.scenarioFlows = {
        standby: [
            flow('link_cloud_router', '#0284c7', 2400, 1.2),
            flow('link_router_switch', '#0074D9', 2400, 1.2, 500),
            flow('link_switch_ndp600', '#0074D9', 3000, 1.0, 1000),
            flow('link_switch_nmp', '#0074D9', 3000, 1.0, 1200),
            flow('link_switch_ndp200', '#0074D9', 3000, 1.0, 1400),
            flow('link_switch_sl100', '#0074D9', 3000, 1.0, 1600),
            flow('link_switch_nps150', '#0074D9', 3000, 1.0, 1800),
            flow('link_switch_mbx_l', '#0074D9', 3000, 1.0, 2000)
        ],
        live_broadcast: [
            flow('link_mediaserver_switch', '#f97316', 700, 2.0),
            flow('link_switch_ndp600', '#f97316', 800, 2.2, 200),
            flow('link_switch_nmp', '#f97316', 800, 2.2, 250),
            flow('link_switch_ndp200', '#f97316', 800, 2.2, 300),
            flow('link_switch_mbx_l', '#f97316', 800, 2.2, 400),
            flow('link_ndp600_ifp_a', '#FF4136', 700, 2.5, 600),
            flow('link_ndp600_spk_a', '#2ECC40', 800, 2.0, 600),
            flow('link_nmp_ifp_b', '#FF4136', 700, 2.5, 600),
            flow('link_nmp_spk_b', '#2ECC40', 800, 2.0, 600),
            flow('link_ndp200_ifp_h', '#FF4136', 700, 2.5, 600),
            flow('link_ndp200_spk_h', '#2ECC40', 800, 2.0, 600),
            flow('link_mbx_l_disp_l', '#FF4136', 700, 2.5, 600),
            flow('link_mbx_l_spk_l', '#2ECC40', 800, 2.0, 600)
        ],
        bell_music: [
            flow('link_mediaserver_switch', '#2ECC40', 800, 1.8),
            flow('link_switch_ndp600', '#2ECC40', 900, 2.0, 200),
            flow('link_switch_nmp', '#2ECC40', 900, 2.0, 200),
            flow('link_switch_ndp200', '#2ECC40', 900, 2.0, 250),
            flow('link_switch_mbx_l', '#2ECC40', 900, 2.0, 300),
            flow('link_ndp600_spk_a', '#2ECC40', 700, 2.2, 500),
            flow('link_nmp_spk_b', '#2ECC40', 700, 2.2, 500),
            flow('link_ndp200_spk_h', '#2ECC40', 700, 2.2, 550),
            flow('link_mbx_l_spk_l', '#2ECC40', 700, 2.2, 600),
            flow('link_ndp600_ifp_a', '#FF4136', 1100, 1.5, 500),
            flow('link_nmp_ifp_b', '#FF4136', 1100, 1.5, 500),
            flow('link_ndp200_ifp_h', '#FF4136', 1100, 1.5, 550)
        ],
        cloud_control: [
            flow('link_console_cloud', '#38bdf8', 1000, 2.0),
            flow('link_app_cloud', '#38bdf8', 1200, 2.0),
            flow('link_cloud_router', '#38bdf8', 800, 2.2, 300),
            flow('link_router_switch', '#38bdf8', 800, 2.2, 500),
            flow('link_switch_ndp600', '#38bdf8', 900, 2.0, 700),
            flow('link_switch_nmp', '#38bdf8', 900, 2.0, 750),
            flow('link_switch_ndp200', '#38bdf8', 900, 2.0, 800),
            flow('link_switch_sl100', '#38bdf8', 900, 2.0, 850),
            flow('link_switch_nps150', '#38bdf8', 900, 2.0, 900),
            flow('link_switch_mbx_l', '#38bdf8', 900, 2.0, 950)
        ],
        emergency_alert: [
            flow('link_cloud_router', '#ef4444', 400, 3.0),
            flow('link_router_switch', '#ef4444', 400, 3.0, 100),
            flow('link_switch_ndp600', '#ef4444', 500, 3.2, 200),
            flow('link_switch_nmp', '#ef4444', 500, 3.2, 200),
            flow('link_switch_ndp200', '#ef4444', 500, 3.2, 200),
            flow('link_switch_sl100', '#ef4444', 500, 3.2, 200),
            flow('link_switch_nps150', '#ef4444', 500, 3.2, 200),
            flow('link_switch_mbx_l', '#ef4444', 500, 3.2, 200),
            flow('link_ndp600_ifp_a', '#ef4444', 400, 3.5, 400),
            flow('link_nmp_ifp_b', '#ef4444', 400, 3.5, 400),
            flow('link_ndp200_ifp_h', '#ef4444', 400, 3.5, 400),
            flow('link_sl100_ifp_sl', '#ef4444', 400, 3.5, 400),
            flow('link_nps150_disp_c', '#ef4444', 400, 3.5, 400),
            flow('link_mbx_l_disp_l', '#ef4444', 400, 3.5, 400)
        ],
        local_teaching: [
            flow('link_ndp600_lcs810', '#FFDC00', 1000, 0.5),
            flow('link_nps150_disp_c', '#FF4136', 700, 2.2),
            flow('link_nps150_spk_c', '#2ECC40', 800, 2.0),
            flow('link_ndp600_ifp_a', '#FF4136', 700, 2.2),
            flow('link_ndp600_spk_a', '#2ECC40', 800, 2.0),
            flow('link_nmp_ifp_b', '#FF4136', 700, 2.2),
            flow('link_nmp_spk_b', '#2ECC40', 800, 2.0),
            flow('link_ndp200_ifp_h', '#FF4136', 700, 2.2),
            flow('link_ndp200_spk_h', '#2ECC40', 800, 2.0),
            flow('link_sl100_ifp_sl', '#FF4136', 700, 2.2),
            flow('link_sl100_spk_sl', '#2ECC40', 800, 2.0)
        ]
    };
})(window.QnexApp);
