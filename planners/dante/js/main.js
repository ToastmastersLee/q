(function (App) {
    const state = App.state;
    const inputMapping = App.inputMapping;
    const changeLanguage = (...args) => App.changeLanguage(...args);
    const renderRoom = (...args) => App.renderRoom(...args);
    const updateRadiiFromHeight = (...args) => App.updateRadiiFromHeight(...args);
    const renderDevices = (...args) => App.renderDevices(...args);
    const calculateCoverage = (...args) => App.calculateCoverage(...args);
    const applyScenario = (...args) => App.applyScenario(...args);
    const heightCopy = {
        en: ['Ceiling profile', 'Uniform', 'Front / rear', 'Front / uniform height', 'Rear height', 'Front zone depth', 'Ceiling microphone below ceiling', 'Front', 'Rear', '73° geometric estimate · on-site verification required', 'Outside the supplier example · verify on site', 'Manual microphone radius overrides height estimate', 'Use 73° estimate'],
        zh: ['天花层高', '统一层高', '前后分区', '前区／统一层高', '后区层高', '前区深度', '吊顶麦低于天花', '前区', '后区', '73° 几何估算 · 需现场验证', '超出厂家算例 · 需现场验证', '手动麦克风半径覆盖层高估算', '使用 73° 估算'],
        ko: ['천장 높이', '동일', '앞/뒤', '앞/전체 높이', '뒤 높이', '앞 구역 깊이', '천장 아래 마이크', '앞', '뒤', '73° 기하 추정 · 현장 확인 필요', '제조사 사례 범위 밖 · 현장 확인', '수동 마이크 반경이 높이 추정을 재정의'],
        ar: ['ارتفاع السقف', 'موحد', 'أمام/خلف', 'الارتفاع الأمامي', 'الارتفاع الخلفي', 'عمق المنطقة الأمامية', 'انخفاض الميكروفون', 'أمام', 'خلف', 'تقدير هندسي 73° · تحقق ميداني مطلوب', 'خارج المثال المقدم · تحقق ميداني', 'نصف القطر اليدوي يتجاوز التقدير'],
        es: ['Perfil del techo', 'Uniforme', 'Delante / detrás', 'Altura delantera', 'Altura trasera', 'Profundidad delantera', 'Micrófono bajo techo', 'Delante', 'Detrás', 'Estimación geométrica 73° · verificar in situ', 'Fuera del ejemplo · verificar in situ', 'El radio manual sustituye la estimación'],
        ja: ['天井高', '均一', '前／後', '前方の高さ', '後方の高さ', '前方の奥行き', 'マイクの吊下げ長', '前方', '後方', '73° 幾何推定 · 現地確認が必要', 'メーカー事例外 · 現地確認が必要', '手入力半径が推定値を上書き'],
        hu: ['Mennyezetprofil', 'Egységes', 'Elöl / hátul', 'Első magasság', 'Hátsó magasság', 'Első zóna mélysége', 'Mikrofon a mennyezet alatt', 'Elöl', 'Hátul', '73° geometriai becslés · helyszíni ellenőrzés', 'A gyártói példán kívül · ellenőrizze', 'A kézi sugár felülírja a becslést'],
        it: ['Profilo soffitto', 'Uniforme', 'Anteriore / posteriore', 'Altezza anteriore', 'Altezza posteriore', 'Profondità zona anteriore', 'Microfono sotto il soffitto', 'Anteriore', 'Posteriore', 'Stima geometrica 73° · verificare sul posto', 'Fuori dal caso del produttore · verificare', 'Il raggio manuale sostituisce la stima']
    };
    function refreshHeightUI() {
        const p = state.heightProfile, lang = document.getElementById('langSelect').value;
        const t = heightCopy[lang] || heightCopy.en;
        for (const [id, index] of [['heightModeLabel',0],['frontHeightLabel',3],['rearHeightLabel',4],['splitLabel',5],['dropLabel',6]]) document.getElementById(id).textContent = t[index];
        document.querySelector('#heightMode option[value="uniform"]').textContent = t[1];
        document.querySelector('#heightMode option[value="split"]').textContent = t[2];
        document.getElementById('heightMode').value = p.mode;
        document.getElementById('frontHeight').value = p.front.toFixed(2);
        document.getElementById('heightSlider').value = p.front;
        document.getElementById('heightVal').textContent = p.front.toFixed(2) + 'm';
        document.getElementById('rearHeight').value = p.rear.toFixed(2);
        document.getElementById('rearHeightSlider').value = p.rear;
        document.getElementById('heightSplit').value = p.split.toFixed(2);
        document.getElementById('micDrop').value = p.drop.toFixed(2);
        document.getElementById('rearHeightControls').hidden = p.mode !== 'split';
        const front = App.m100RadiiForHeight(p.front, p.drop).m100Pickup.toFixed(2);
        const rear = App.m100RadiiForHeight(p.rear, p.drop).m100Pickup.toFixed(2);
        const warn = [p.front, ...(p.mode === 'split' ? [p.rear] : [])].some(h => h - p.drop < 2.47 || h - p.drop > 3.2);
        document.getElementById('heightEstimate').textContent = `${t[7]} ${front} m${p.mode === 'split' ? ` · ${t[8]} ${rear} m` : ''} · ${t[warn ? 10 : 9]}${p.manualPickup !== null || p.manualPA !== null ? ` · ${t[11]}` : ''}`;
        document.getElementById('heightEstimate').dataset.warning = String(warn);
        document.getElementById('resetM100Radii').textContent = t[12] || heightCopy.en[12];
        document.getElementById('resetM100Radii').hidden = p.manualPickup === null && p.manualPA === null;
        document.getElementById('t_heightDesc').textContent = t[9];
    }
    function applyHeightInput(id, value) {
        const p = state.heightProfile;
        if (!Number.isFinite(value)) return;
        if (id === 'front' || id === 'rear') {
            if (value < 2 || value > 4) return;
            p[id] = value;
            if (p.mode === 'uniform') p.rear = p.front;
        } else if (id === 'split') {
            if (value <= 0 || value >= state.roomWidth) return;
            p.split = value;
        } else if (id === 'drop') {
            if (value < 0 || value > 0.7) return;
            p.drop = value;
        }
        state.height = Math.max(p.front, p.mode === 'split' ? p.rear : p.front);
        document.getElementById('presetSelect').value = 'custom';
        updateRadiiFromHeight(state.height); refreshHeightUI(); renderRoom();
    }
    App.refreshHeightUI = refreshHeightUI;

    window.addEventListener('DOMContentLoaded', () => {
        // Init multi-language support (English by default)
        changeLanguage('en');

        document.getElementById('t_themeBtn').addEventListener('click', toggleTheme);
        document.getElementById('langSelect').addEventListener('change', (e) => changeLanguage(e.target.value));
        document.getElementById('presetSelect').addEventListener('change', (e) => applyScenario(e.target.value));
        document.getElementById('show-models').addEventListener('change', (event) => {
            state.showModels = event.target.checked;
            changeLanguage(document.getElementById('langSelect').value);
        });
        document.getElementById('t_open3d').addEventListener('click', () => {
            const language = document.getElementById('langSelect').value;
            const message = document.getElementById('handoff-error');
            try {
                const snapshot = App.snapshotFromState(state, language);
                const target = new URL('../../demos/dante/index.html', window.location.href);
                target.hash = App.encodeSnapshot(snapshot);
                message.hidden = true;
                window.open(target.href, '_blank', 'noopener');
            } catch (failure) {
                message.textContent = App.presentationCopy(language)[failure.code] || App.presentationCopy(language).invalidSnapshot;
                message.hidden = false;
            }
        });
        document.getElementById('t_recalculate').addEventListener('click', () => App.recalculateProductPlan());
        document.getElementById('t_reset').addEventListener('click', () => App.resetPositions());
        document.getElementById('t_clearAll').addEventListener('click', () => App.clearAllDevices());
        document.querySelectorAll('[data-visibility]').forEach((checkbox) => {
            checkbox.addEventListener('change', () => App.toggleVisibility(checkbox.dataset.visibility, checkbox.checked));
        });

        // Dimensions sliders input listeners
        document.getElementById('lengthSlider').addEventListener('input', (e) => {
            state.roomLength = parseFloat(e.target.value);
            document.getElementById('lengthVal').textContent = state.roomLength.toFixed(1) + 'm';
            document.getElementById('presetSelect').value = 'custom';
            renderRoom();
        });

        document.getElementById('widthSlider').addEventListener('input', (e) => {
            state.roomWidth = parseFloat(e.target.value);
            document.getElementById('widthVal').textContent = state.roomWidth.toFixed(1) + 'm';
            document.getElementById('presetSelect').value = 'custom';
            state.heightProfile.split = Math.min(state.heightProfile.split, Math.max(0.1, state.roomWidth / 2));
            refreshHeightUI();
            renderRoom();
        });

        document.getElementById('heightSlider').addEventListener('input', (e) => {
            applyHeightInput('front', parseFloat(e.target.value));
        });
        document.getElementById('frontHeight').addEventListener('change', e => applyHeightInput('front', Number(e.target.value)));
        document.getElementById('rearHeight').addEventListener('change', e => applyHeightInput('rear', Number(e.target.value)));
        document.getElementById('rearHeightSlider').addEventListener('input', e => applyHeightInput('rear', Number(e.target.value)));
        document.getElementById('heightSplit').addEventListener('change', e => applyHeightInput('split', Number(e.target.value)));
        document.getElementById('micDrop').addEventListener('change', e => applyHeightInput('drop', Number(e.target.value)));
        document.getElementById('heightMode').addEventListener('change', e => {
            state.heightProfile.mode = e.target.value;
            if (e.target.value === 'uniform') state.heightProfile.rear = state.heightProfile.front;
            state.height = Math.max(state.heightProfile.front, state.heightProfile.rear);
            document.getElementById('presetSelect').value = 'custom';
            updateRadiiFromHeight(state.height); refreshHeightUI(); renderRoom();
        });
        document.getElementById('resetM100Radii').addEventListener('click', () => {
            state.heightProfile.manualPickup = null;
            state.heightProfile.manualPA = null;
            updateRadiiFromHeight(state.height); refreshHeightUI(); renderRoom();
        });

        // Radii manual text-input fields override listener
        Object.entries(inputMapping).forEach(([inputId, stateKey]) => {
            const inputEl = document.getElementById(inputId);
            if (inputEl) {
                inputEl.addEventListener('input', (e) => {
                    let val = parseFloat(e.target.value);
                    if (!isNaN(val) && val >= 0) {
                        state.radii[stateKey] = val;
                        if (stateKey === 'm100Pickup') state.heightProfile.manualPickup = val;
                        if (stateKey === 'm100PA') state.heightProfile.manualPA = val;
                        refreshHeightUI();
                        renderDevices();
                        calculateCoverage();
                    }
                });
            }
        });

        // Initialize teaching positions after the actual default room dimensions are selected.
        state.teachingDevices = [];
        applyScenario('medium');
    });

    // --- Theme Controller ---
    function toggleTheme() {
        const body = document.body;
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            state.theme = 'dark';
        } else {
            body.classList.add('light-mode');
            state.theme = 'light';
        }
    }

    App.toggleTheme = toggleTheme;
})(window.AISpeech);
