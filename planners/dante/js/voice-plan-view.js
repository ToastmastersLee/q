(function (App) {
    const state = App.state, V = App.voice;
    const el = id => document.getElementById(id);
    let controls, previous, previousPreset;
    function toggle(enabled) {
        if (enabled) {
            const hall = V.hall();
            previous = Object.fromEntries(Object.keys(hall).map(k => [k, structuredClone(state[k])]));
            previousPreset = el('presetSelect').value;
            Object.assign(state, hall);
            App.idCounter = Math.max(App.idCounter, state.devices.length + 1);
        } else {
            Object.assign(state, previous); previous = null;
        }
        el('presetSelect').value = enabled ? 'custom' : previousPreset;
        for (const [id, metres] of [['length', state.roomLength], ['width', state.roomWidth]]) {
            const slider = el(id+'Slider');
            if (enabled) {
                slider.dataset.previousMax = slider.max; slider.dataset.previousStep = slider.step;
                slider.max = Math.max(Number(slider.max),metres); slider.step = '0.01';
            } else { slider.max = slider.dataset.previousMax; slider.step = slider.dataset.previousStep; }
            slider.value = metres;
            el(id+'Val').textContent = metres + ' m';
        }
        for (const id of ['presetSelect','lengthSlider','widthSlider','include-lcs','t_reset']) el(id).disabled = enabled;
        for (const [input,key] of Object.entries(App.inputMapping)) el(input).value = state.radii[key].toFixed(2);
        App.refreshHeightUI(); App.renderRoom();
    }
    function svg(tag, attrs, parent, text) {
        const node = document.createElementNS('http://www.w3.org/2000/svg',tag);
        for (const [k,v] of Object.entries(attrs)) node.setAttribute(k,v);
        if (text) node.textContent = text;
        parent.append(node); return node;
    }
    function draw() {
        const root = el('voice-layer'), t = state.tracking;
        root.replaceChildren(); controls?.refresh();
        if (!t) return;
        const list = V.zones(t.count), shot = V.shot(t), scale = App.PPM;
        const lang = el('langSelect').value, w = V.words(lang);
        const layer = svg('g',{transform:'scale('+scale+')'},root);
        const f = V.teacherField(state.displayPlan.stageMm);
        const guide = svg('g',{'data-guide':'teacher-field','pointer-events':'none'},layer);
        svg('path',{d:`M${f.left} ${f.targetY} L${f.mount.x} ${f.mount.y} L${f.right} ${f.targetY}`,
            stroke:'#168d88','stroke-width':.045,'stroke-dasharray':'.16 .10',fill:'none'},guide);
        svg('line',{x1:f.stageLeft,x2:f.stageRight,y1:f.targetY,y2:f.targetY,stroke:'#708799','stroke-width':.045},guide);
        if (f.visibleWidth > 0) svg('line',{x1:f.start,x2:f.end,y1:f.targetY,y2:f.targetY,stroke:'#12b4ac','stroke-width':.15},guide);
        for (const z of list) {
            const active = z.number === shot.zone?.number;
            svg('rect',{x:z.bank?7.7:0.52,y:V.firstRow+(z.start-0.46)*V.pitch,width:5.7,
                height:(z.end-z.start)*V.pitch-0.1,rx:0.12,fill:z.color,'fill-opacity':active?0.38:0.12,
                stroke:z.color,'stroke-width':active?0.07:0.025},layer);
        }
        for (const s of V.seats) {
            const zone = V.zoneFor(s,list), active = s.id === t.seat;
            const g = svg('g',{'data-seat':s.id,transform:'translate('+s.x+' '+s.y+')'},layer);
            svg('rect',{x:-0.4,y:-0.32,width:0.8,height:0.64,rx:0.1,fill:active?'#ffe582':zone.color},g);
            svg('path',{d:'M-.28 .22h.56',stroke:'#173044','stroke-width':0.07,fill:'none'},g);
            svg('title',{},g,w[12]+' '+s.id+' · CV870 #'+zone.number);
        }
        const cx = shot.camera.x, cy = shot.camera.y;
        if (shot.seat) {
            svg('path',{d:'M'+cx+' '+cy+' L'+shot.seat.x+' '+shot.seat.y,stroke:'#edb544','stroke-width':0.085,'stroke-dasharray':'.24 .12','pointer-events':'none'},layer);
            svg('circle',{cx:shot.seat.x,cy:shot.seat.y,r:.49,fill:'none',stroke:'#efb345','stroke-width':.08,'pointer-events':'none'},layer);
        }
        for (const d of t.devices) {
            const name = d.role === 'student' ? 'CV870 #'+d.number : V.label(d,lang);
            const active = d.id === shot.camera.id;
            const g = svg('g',{transform:'translate('+d.x+' '+d.y+')','pointer-events':'none'},layer);
            const rotation = d.role === 'teacher' ? 180 : active && shot.seat ? -Math.atan2(shot.seat.x-cx,shot.seat.y-cy)*180/Math.PI : 0;
            svg('path',{d:d.role==='tracker'?'M-.25 -.12h.5v.24h-.5z':'M-.18 -.12h.36v.27h-.08l-.1 .15-.1-.15h-.08z',
                transform:'rotate('+rotation+')',stroke:active?'#ffe182':'#c2e3ef','stroke-width':.05, fill:active?'#9b6423':'#194f67'},g);
            svg('text',{x:d.role==='tracker'?.35:0,y:d.role==='teacher'?-.35:.48,'text-anchor':d.role==='tracker'?'start':'middle',
                fill:'var(--text)','font-size':.29,'font-weight':700},g,name);
        }
        svg('text',{x:V.length/2,y:V.width-1.35,'text-anchor':'middle',fill:'var(--text)','font-size':.31},layer,
            w[11]+' · '+(shot.zone?'CV870 #'+shot.zone.number+' → '+shot.seat.id:'CV210 · '+w[3]));
    }
    App.drawVoicePlan = draw;
    window.addEventListener('DOMContentLoaded', () => {
        controls = App.bindVoiceControls(el('voice-panel'),{read:()=>state.tracking,stageWidthMm:()=>state.displayPlan.stageMm,language:()=>el('langSelect').value,
            toggle,resize:n=>{state.tracking=V.create(n,state.tracking.seat);App.renderRoom();},
            speak:id=>{state.tracking.seat=id;draw();}});
        el('voice-layer').onclick = e => { const id = e.target.closest('[data-seat]')?.dataset.seat; if (id) controls.pick(id); };
        el('langSelect').addEventListener('change',draw);
        if (new URLSearchParams(location.search).get('tracking') === '1') {
            el('workspace-settings').click(); el('settings-display-button').click();
            el('voice-panel').querySelector('.voice-enable').click();
        }
    });
})(window.AISpeech);
