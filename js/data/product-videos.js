/** Curated official videos. Edit this table, validate, then republish the static site. */
(function (app) {
    const workbook = 'IQBoard-Youtube营销视频汇总表-20250620.xlsx';
    const channel = 'https://www.youtube.com/@IQBoardworld';
    const record = (videoId, title, scope, reference, source, extra = {}) => ({
        videoId, title, scope, reference, enabled: true, visibility: 'public',
        channel, source, checkedAt: '2026-10-24', ...extra
    });
    app.data.productVideos = {
        videos: {
            ndp600: record('l3tfMVfGCRo', 'Transform Your Classroom with the NDP600 Digital Podium',
                'product', 'NDP600', `${workbook} / Q-NEX / 46`),
            sl100: record('MnmeMer428k', 'Q-NEX Smart Lectern SL100 | Smart Digital Podium for Classrooms & Conference Rooms',
                'product', 'SL100', `${channel}/search?query=SL100`),
            nps150: record('IRqMV3clbRc', 'Q-NEX NPS150 Networked Presentation Switcher | 4K BYOD & BYOM Meeting Room Control',
                'product', 'NPS150', `${channel}/search?query=NPS150`),
            lcs810: record('qDfCMkeXIfA', 'Elevate Lecture Capture & Hybrid Learning with IQVideo LCS810!',
                'product', 'LCS810', `${workbook} / IQ / 79`, {
                    note: 'LCS810 introduction; not a GEN2-specific specification demonstration.'
                }),
            nmp: record('R36Wk8011Lw', 'How to Simplify Smart Classroom Management with Q-NEX NMP?',
                'series', 'NMP', `${workbook} / Q-NEX / 67`),
            ndp: record('pKISdB0ME-E', 'Enhance Lectures with Digital Excellence: Introducing the Q-NEX Digital Podium NDP100',
                'series', 'NDP100', `${workbook} / Q-NEX / 28`, {
                    note: 'NDP series reference for NDP200; actual video model is NDP100.'
                }),
            iqtouch: record('rAHrUHvqQTw', 'IQTouch QA1400 Pro | Google EDLA Certified 4K Interactive Display',
                'series', 'QA1400 Pro', `${workbook} / IQ / 35`, {
                    note: 'Use displayed URL, verified against video metadata. Cell hyperlink 5r-1gM35RGk is QA1300 Ultra. Existing topology screen models are unchanged.'
                }),
            console: record('jQfLU0wk5v8', 'Q-NEX Console Operation',
                'product', 'Q-NEX Console', `${workbook} / Q-NEX / 54`),
            solution: record('ANsE01k8F8c', 'Q-NEX Solution Overview: Animated Introduction Video',
                'solution', 'Q-NEX', `${channel}/search?query=Cloud`),
            sa200: record('iLt0FcSB0rk', 'IQSoundbarSA200 Introduction Video',
                'product', 'SA200', `${workbook} / IQ / 182`, {
                    enabled: false, visibility: 'unlisted', note: 'Workbook marks this video 不公开; do not enable without a new decision.'
                }),
            mediaInstall: record('lPfm3bpnzW4', 'Lite Media Server Installation',
                'product', 'Lite Media Server', `${workbook} / Q-NEX / 57`, {
                    enabled: false, visibility: 'unconfirmed', note: 'Installation tutorial, not a product introduction.'
                })
        },
        devices: {
            ndp600: 'ndp600', sl100: 'sl100', nps150: 'nps150', lcs810: 'lcs810',
            nmp: 'nmp', ndp200: 'ndp', ifp_a: 'iqtouch', ifp_b: 'iqtouch', ifp_sl: 'iqtouch',
            console: 'console', cloud: 'solution', app: 'solution',
            spk_c: 'sa200', mediaserver: 'mediaInstall'
        },
        omitted: {
            router: 'Generic network infrastructure.', switch: 'Generic network infrastructure.',
            mbx_library: 'No verified matching public introduction found.',
            spk_a: 'No verified PS610 introduction found.', spk_b: 'No verified PS610 introduction found.',
            spk_sl: 'No verified PS610 introduction found.',
            ifp_h: 'Illustrative commercial display; no confirmed product model.',
            spk_h: 'Illustrative auditorium sound system.', disp_c: 'Unspecified meeting display.',
            disp_l: 'Unspecified signage display.', spk_l: 'Illustrative library speakers.'
        }
    };
})(window.QnexApp);
