// Shared 2D/3D controls. The timer owns only playback; the plan owns the active seat.
(function (App) {
    App.bindVoiceControls = function (host, {read, language, toggle, resize, speak}) {
        const V = App.voice;
        host.innerHTML = '<label class="voice-switch"><input type="checkbox" class="voice-enable"><strong></strong></label><div class="voice-options" hidden><label><span></span><select class="voice-count"></select></label><label><span></span><select class="voice-seat"></select></label><div class="voice-actions"><button type="button" class="voice-play"></button><button type="button" class="voice-idle"></button></div><output aria-live="polite"></output></div>';
        const preset = document.querySelector('#presetSelect, #preset');
        const get = selector => host.querySelector(selector);
        const enable = get('.voice-enable'), count = get('.voice-count'), seat = get('.voice-seat');
        let timer = null;
        for (let n = 2; n <= 6; n++) count.add(new Option(n,n));
        seat.add(new Option('', ''));
        for (const s of V.seats) seat.add(new Option(s.id, s.id));
        function stop() { clearInterval(timer); timer = null; }
        function pick(id) { stop(); speak(id); refresh(); }
        function refresh() {
            const t = read(), w = V.words(language());
            enable.checked = Boolean(t);
            get('strong').textContent = w[0];
            get('.voice-options').hidden = !t;
            const hallOption = preset.querySelector('option[value="voice-hall"]');
            if (!t) { hallOption?.remove(); stop(); return; }
            const option = hallOption || new Option('', 'voice-hall');
            option.text = V.hallName(language());
            if (!hallOption) preset.add(option);
            preset.value = option.value;
            count.previousElementSibling.textContent = w[1];
            seat.previousElementSibling.textContent = w[2];
            seat.options[0].text = w[3]; count.value = t.count; seat.value = t.seat || '';
            get('.voice-play').textContent = timer === null ? w[4] : w[5];
            get('.voice-play').setAttribute('aria-pressed',String(timer !== null));
            get('.voice-idle').textContent = w[6];
            const shot = V.shot(t);
            get('output').textContent = w[11] + ' · ' + shot.camera.model + (shot.seat ? ' #' + shot.zone.number + ' → ' + shot.seat.id : ' · ' + w[3]);
        }
        enable.onchange = () => { stop(); toggle(enable.checked); refresh(); };
        count.onchange = () => { stop(); resize(Number(count.value)); refresh(); };
        seat.onchange = () => pick(seat.value || null);
        get('.voice-idle').onclick = () => pick(null);
        get('.voice-play').onclick = () => {
            if (timer !== null) { stop(); refresh(); return; }
            const list = V.zones(read().count).map(z => V.seats.find(s => s.bank === z.bank &&
                s.row === Math.floor((z.start + z.end - 1)/2) && (s.x > (z.bank ? 10 : 3))).id);
            let cursor = 0;
            const advance = () => { if (cursor >= list.length) { pick(null); return; } speak(list[cursor++]); refresh(); };
            timer = setInterval(advance, 2400); advance();
        };
        window.addEventListener('pagehide', stop);
        refresh();
        return {refresh,pick};
    };
})(window.AISpeech);
