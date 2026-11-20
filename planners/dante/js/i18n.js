(function (App) {
    const renderRoom = (...args) => App.renderRoom(...args);

    const displayI18n = {
        en: {
            title: 'Auxiliary Displays',
            size: 'Screen size',
            none: 'Main display covers the usable audience depth; no auxiliary display is required.',
            summary: (count, models, end) => `${count} auxiliary displays in left/right pairs: ${models}. Main display: first 6.0m; rear 2.0m excluded. Detailed-reading coverage through ${end.toFixed(1)}m.`,
            rule: '55″ ≤4.1m · 65″ ≤5.0m · 75″ ≤5.6m',
            canvas: 'AUX',
            main: 'MAIN DISPLAY'
        },
        zh: {
            title: '辅助显示屏',
            size: '屏幕尺寸',
            none: '主显示屏已覆盖可用听课深度，无需辅助显示屏。',
            summary: (count, models, end) => `建议 ${count} 台辅助显示屏，左右成对：${models}。主显示屏覆盖前 6.0m，后方 2.0m 不布置座位；细节阅读覆盖至 ${end.toFixed(1)}m。`,
            rule: '55英寸 ≤4.1m · 65英寸 ≤5.0m · 75英寸 ≤5.6m',
            canvas: '辅助屏',
            main: '主显示屏'
        }
    };

    function getDisplayCopy(lang) {
        return displayI18n[lang] || displayI18n.en;
    }

    const legendCopy = {
        en: ['Coverage legend', 'All', 'Remote pickup', 'Local PA pickup', 'Speaker coverage', 'Ceiling height boundary', 'Auxiliary display viewing range'],
        zh: ['覆盖图例', '全部', '远程拾音', '本地扩声拾音', '扬声器覆盖', '层高分界线', '辅助屏观看范围'],
        es: ['Leyenda de cobertura', 'Todo', 'Captación remota', 'Captación para megafonía', 'Cobertura de altavoces', 'Límite entre alturas de techo', 'Alcance visual de las pantallas auxiliares'],
        ja: ['カバー範囲の凡例', 'すべて', '遠隔用集音', '室内拡声用集音', 'スピーカー範囲', '天井高の境界線', '補助画面の視聴範囲'],
        ko: ['커버리지 범례', '전체', '원격 수음', '로컬 확성용 수음', '스피커 범위', '천장 높이 경계선', '보조 화면 시청 범위'],
        it: ['Legenda copertura', 'Tutto', 'Ripresa remota', 'Ripresa per amplificazione', 'Copertura diffusori', 'Confine tra altezze del soffitto', 'Distanza di visione degli schermi ausiliari'],
        hu: ['Lefedettségi jelmagyarázat', 'Mind', 'Távoli hangfelvétel', 'Helyi hangosítás', 'Hangszórók lefedettsége', 'Belmagassági zónahatár', 'Kiegészítő kijelzők látótávolsága'],
        ar: ['مفتاح التغطية', 'الكل', 'التقاط الصوت عن بُعد', 'التقاط الصوت للتضخيم المحلي', 'تغطية مكبرات الصوت', 'الحد الفاصل بين ارتفاعات السقف', 'نطاق مشاهدة الشاشات المساعدة']
    };

    function changeLanguage(lang) {
        const i18n = { [lang]: App.presentCopy(App.i18n[lang], lang, App.state.showModels) };
        document.documentElement.lang = lang;
        const legend = legendCopy[lang] || legendCopy.en;
        ['title', 'all', 'remote', 'local', 'speaker', 'heightSplit', 'auxRange'].forEach((key, i) => {
            document.querySelector(`[data-legend-text="${key}"]`).textContent = legend[i];
        });
        const presentation = App.presentationCopy(lang);
        document.getElementById('t_open3d').title = presentation.open3d;
        document.getElementById('t_open3d').setAttribute('aria-label', presentation.open3d);
        document.getElementById('t_showModels').textContent = presentation.showModels;
        document.getElementById('t_reference').textContent = presentation.reference;
        document.getElementById('handoff-error').hidden = true;
        document.title = i18n[lang].title;
        document.getElementById('t_h1').textContent = i18n[lang].h1;
        document.getElementById('t_sub').textContent = i18n[lang].sub;
        document.getElementById('t_themeBtn').textContent = i18n[lang].themeToggle;
        document.getElementById('t_scenarioLabel').textContent = i18n[lang].scenarioLabel;
        document.getElementById('t_presetMedium').textContent = i18n[lang].presetMedium;
        document.getElementById('t_presetStandard').textContent = i18n[lang].presetStandard;
        document.getElementById('t_presetLarge').textContent = i18n[lang].presetLarge;
        document.getElementById('t_presetStep').textContent = i18n[lang].presetStep;
        document.getElementById('t_presetSmall').textContent = i18n[lang].presetSmall;
        document.getElementById('t_presetCustom').textContent = i18n[lang].presetCustom;
        document.getElementById('t_roomConfigLabel').textContent = i18n[lang].roomConfigLabel;
        document.getElementById('t_lengthLabel').textContent = i18n[lang].lengthLabel;
        document.getElementById('t_widthLabel').textContent = i18n[lang].widthLabel;
        document.getElementById('t_heightLabel').textContent = i18n[lang].heightLabel;
        document.getElementById('t_heightDesc').textContent = i18n[lang].heightDesc;
        App.refreshHeightUI?.();
        document.getElementById('t_recalculate').textContent = i18n[lang].recalculate || i18n.en.recalculate;
        document.getElementById('t_dataLabel').textContent = i18n[lang].dataLabel;
        document.getElementById('t_m100Pickup').textContent = i18n[lang].m100Pickup;
        document.getElementById('t_m100PA').textContent = i18n[lang].m100PA;
        document.getElementById('t_m40Pickup').textContent = i18n[lang].m40Pickup;
        document.getElementById('t_m40PA').textContent = i18n[lang].m40PA;
        document.getElementById('t_dc20Cover').textContent = i18n[lang].dc20Cover;
        document.getElementById('t_statsLabel').textContent = i18n[lang].statsLabel;
        document.getElementById('t_totalArea').textContent = i18n[lang].totalArea;
        document.getElementById('t_micCoverage').textContent = i18n[lang].micCoverage;
        document.getElementById('t_paCoverage').textContent = i18n[lang].paCoverage;
        document.getElementById('t_spkCoverage').textContent = i18n[lang].spkCoverage;
        document.getElementById('t_auxDisplaysLabel').textContent = getDisplayCopy(lang).title;
        document.getElementById('t_devicesLabel').textContent = i18n[lang].devicesLabel;



        document.getElementById('t_reset').textContent = i18n[lang].reset;
        document.getElementById('t_clearAll').textContent = i18n[lang].clearAll;
        document.getElementById('t_warnTitle').textContent = i18n[lang].warnTitle;
        document.getElementById('t_warnDesc').textContent = i18n[lang].warnDesc;
        
        // Update new BOM panel labels
        document.getElementById('t_bomTitle').textContent = i18n[lang].bomTitle;
        
        // Update specs panel labels
        document.getElementById('t_refTitle').textContent = i18n[lang].refTitle;
        const refSpecsList = document.getElementById('refSpecsList');
        if (refSpecsList) {
            refSpecsList.innerHTML = `
                <div class="spec-entry"><strong>${App.audioName('m100', lang, App.state.showModels)}:</strong><br>${i18n[lang].specM100}</div>
                <div class="spec-entry"><strong>${App.audioName('m40', lang, App.state.showModels)}:</strong><br>${i18n[lang].specM40}</div>
                <div><strong>${App.audioName('dc20', lang, App.state.showModels)}:</strong><br>${i18n[lang].specDC20}</div>
                <div class="spec-rule"><strong>${getDisplayCopy(lang).title}</strong><br>${getDisplayCopy(lang).rule}</div>
            `;
        }

        // Update door labels in SVG
        document.querySelectorAll('#doorGroup text').forEach(label => { label.textContent = i18n[lang].door; });

        // Re-trigger layout measurement calculations
        renderRoom();
    }

    App.displayI18n = displayI18n;

    App.getDisplayCopy = getDisplayCopy;
    App.changeLanguage = changeLanguage;
})(window.AISpeech);
