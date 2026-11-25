// Shared 2D/3D controls. The timer owns only playback; the plan owns the active seat.
(function (App) {
    // The coloured segment marks the intersection with the stage width at the lectern depth.
    function teacherNote(lang, f) {
        const widths = f.visibleWidth.toFixed(2) + ' / ' + f.stageWidth.toFixed(2) + ' m (' + f.percent + '%)';
        const notes = {
            zh: `教师机距讲桌横线 ${f.distance} m，吊点距前墙 ${f.mount.y} m。青色线为讲桌所在横线的可视宽度：${widths}。固定镜头 ${f.hfov}°，实际跟踪区需现场标定。`,
            en: `Teacher ceiling mount: ${f.distance} m behind the lectern line, ${f.mount.y} m from the front wall. Teal line: visible stage width at lectern depth, ${widths}. Fixed lens ${f.hfov}°. Calibrate tracking on site.`,
            fr: `Caméra au plafond à ${f.distance} m en retrait de la ligne du pupitre, à ${f.mount.y} m du mur avant. Trait turquoise à hauteur du pupitre : ${widths}. Champ fixe 43°. Calibrer le suivi sur place.`,
            es: `Cámara docente en el techo a ${f.distance} m de la línea del atril y ${f.mount.y} m de la pared frontal. Línea turquesa a la altura del atril: ${widths}. Campo fijo de 43°. Calibrar el seguimiento in situ.`,
            ja: `教員カメラは演台の横線から後方${f.distance} m、前壁から${f.mount.y} mの天井に設置。青緑の線は演台位置での可視幅 ${widths}。固定画角43°。追尾範囲は現地で設定。`,
            ko: `교사 카메라는 강의대 기준선 뒤 ${f.distance} m, 전면 벽에서 ${f.mount.y} m 지점의 천장에 설치합니다. 청록색 선은 강의대 위치의 가시 폭 ${widths}입니다. 고정 화각 43°. 현장에서 추적 영역을 설정하세요.`,
            it: `Telecamera a soffitto a ${f.distance} m dalla linea del leggio e a ${f.mount.y} m dalla parete frontale. Linea turchese alla profondità del leggio: ${widths}. Campo fisso 43°. Calibrare in loco.`,
            hu: `Oktatói kamera a mennyezeten, a pulpitus vonala mögött ${f.distance} m-re, az elülső faltól ${f.mount.y} m-re. Türkiz vonal a pulpitusnál: ${widths}. Fix látószög 43°. Helyszíni kalibrálás szükséges.`,
            mn: `Багшийн камер индрийн шугамаас хойш ${f.distance} м, урд хананаас ${f.mount.y} м зайд таазанд байрлана. Индрийн түвшинд харагдах өргөн (оюу шугам): ${widths}. Тогтмол өнцөг 43°. Дагалтын бүсийг газар дээр нь тохируулна.`,
            ar: `كاميرا المحاضر مثبتة في السقف على بُعد ${f.distance} م خلف خط المنصة و${f.mount.y} م من الجدار الأمامي. الخط الفيروزي يوضح العرض المرئي عند عمق المنصة: ${widths}. زاوية ثابتة 43°. تُعايَر منطقة التتبع ميدانياً.`
        };
        return notes[lang] || notes.en;
    }
    App.teacherFieldNote = teacherNote;
    App.voiceRotationSeats = (hall, count) => hall.zones(count).map(zone =>
        hall.seats.find(seat => seat.bank === zone.bank && seat.row === Math.floor((zone.start + zone.end - 1)/2) &&
            seat.x >= hall.desks[zone.bank]));
    App.bindVoiceControls = function (host, {read, area, stageWidthMm, language, toggle, resize, speak,
        localHall = () => null, modelFor = App.voice.forTracking}) {
        const {halls, words} = App.voice;
        host.innerHTML = '<label class="voice-switch"><input type="checkbox" class="voice-enable"><strong></strong></label><div class="voice-options" hidden><label><span></span><select class="voice-count"></select></label><label><span></span><select class="voice-seat"></select></label><div class="voice-actions"><button type="button" class="voice-play"></button><button type="button" class="voice-idle"></button></div><output aria-live="polite"></output><small class="teacher-field-note"></small></div>';
        const preset = document.querySelector('#presetSelect, #preset');
        const get = selector => host.querySelector(selector);
        const enable = get('.voice-enable'), count = get('.voice-count'), seat = get('.voice-seat');
        const options = new Map(Object.values(halls).map(hall => {
            const option = new Option('', hall.small ? 'voice-hall-small' : 'voice-hall');
            preset.add(option);
            return [hall.id, option];
        }));
        const smartOption = new Option('',App.smartRoom.key); preset.add(smartOption);
        let lastOrdinaryPreset = preset.value, seatHall, previousTitle, timer = null;
        for (let n = 2; n <= 6; n++) count.add(new Option(n,n));
        seat.add(new Option('', ''));

        function stop() { clearInterval(timer); timer = null; }
        function pick(id) { stop(); speak(id); refresh(); }
        function refresh() {
            const t = read(), lang = language(), w = words(lang);
            for (const [id, option] of options) option.text = halls[id].menuName(lang);
            smartOption.text=App.smartRoom.roomName(lang);
            const currentArea = typeof area === 'function' ? area() : (App.state && !App.state.smart ? App.state.roomLength * App.state.roomWidth : 0);
            host.hidden = !t && (Boolean(App.smartRoom?.active()) || !(currentArea >= 200));
            enable.checked = Boolean(t);
            get('strong').textContent = w[0];
            get('.voice-options').hidden = !t;
            if (!t) {
                lastOrdinaryPreset = preset.value;
                if (previousTitle !== undefined) { document.title = previousTitle; previousTitle = undefined; }
                stop(); return;
            }
            const V = modelFor(t);
            previousTitle ??= document.title;
            document.title = V.hallName(lang) + (preset.id === 'preset' ? ' · Dante 3D' : ' · Dante 2D');
            preset.value = options.get(V.id)?.value ?? V.id;
            if (seatHall !== V.id) {
                seat.replaceChildren(new Option(w[3], ''), ...V.seats.map(s => new Option(s.id,s.id)));
                seatHall = V.id;
            }
            const trial = V.small && t.count !== V.defaultCount;
            count.previousElementSibling.textContent = w[1] + (trial ? (lang==='zh' ? ' · 试配' : ' · Trial') : '');
            seat.previousElementSibling.textContent = w[2];
            seat.options[0].text = w[3]; count.value = t.count; seat.value = t.seat || '';
            get('.voice-play').textContent = timer === null ? w[4] : w[5];
            get('.voice-play').setAttribute('aria-pressed',String(timer !== null));
            get('.voice-idle').textContent = w[6];
            const field = V.teacherField(stageWidthMm());
            get('.teacher-field-note').textContent = teacherNote(language(), field);
            const shot = V.shot(t);
            get('output').textContent = w[11] + ' · ' + shot.camera.model + (shot.seat ? ' #' + shot.zone.number + ' → ' + shot.seat.id : ' · ' + w[3]);
        }
        function selectHall(hall) {
            stop();
            if (localHall()) preset.value = localHall().id;
            else if (!read()) preset.value = lastOrdinaryPreset;
            toggle(true, hall);
            refresh();
        }
        // Route project presets before the existing ordinary-room change handler.
        preset.addEventListener('change', event => {
            const choice = preset.value;
            if(choice===App.smartRoom.key || App.smartRoom.active()){
                event.stopImmediatePropagation(); stop(); App.smartRoom.route(choice,language()); return;
            }
            for (const [id, option] of options) {
                if (choice === option.value) {
                    event.stopImmediatePropagation();
                    selectHall(halls[id]);
                    return;
                }
            }
            if (read()) { stop(); if (!localHall()) toggle(false); preset.value = choice; }
            lastOrdinaryPreset = choice;
        }, true);
        enable.onchange = () => {
            if (localHall()) { stop(); toggle(enable.checked, localHall()); refresh(); return; }
            if (enable.checked) selectHall(halls.large);
            else { stop(); toggle(false); refresh(); }
        };
        count.onchange = () => { stop(); resize(Number(count.value)); refresh(); };
        seat.onchange = () => pick(seat.value || null);
        get('.voice-idle').onclick = () => pick(null);
        get('.voice-play').onclick = () => {
            if (timer !== null) { stop(); refresh(); return; }
            const V = modelFor(read());
            const list = App.voiceRotationSeats(V, read().count).map(s => s.id);
            let cursor = 0;
            const advance = () => { if (cursor >= list.length) { pick(null); return; } speak(list[cursor++]); refresh(); };
            timer = setInterval(advance, 2400); advance();
        };
        window.addEventListener('pagehide', stop);
        refresh();
        return {refresh,pick,selectHall};
    };
})(window.AISpeech);
