(function(App){
    const room=App.smartRoom, state=App.state;
    const el=id=>document.getElementById(id);
    App.renderSmartBOM=function(list,lang){
        list.replaceChildren(...room.schedule.map(row=>{
            const wrap=document.createElement('div'); wrap.className='bom-row';
            const name=document.createElement('span'), qty=document.createElement('strong');
            name.textContent=room.label(row,lang); qty.textContent='× '+row.quantity;
            wrap.append(name,qty); return wrap;
        }));
    };
    App.renderSmartPlan=function(){
        const lang=el('langSelect').value,zh=lang==='zh',canvas=App.svgCanvas;
        for(const node of canvas.children)if(node.tagName!=='defs')node.style.display='none';
        let group=el('smart-floor-plan');
        if(!group){group=document.createElementNS(canvas.namespaceURI,'g');group.id='smart-floor-plan';canvas.append(group);}
        group.style.display='';group.replaceChildren();
        el('t_warnTitle').textContent=zh?'智慧教室 · 单间配置':'Smart classroom · Single-room plan';
        el('t_warnDesc').textContent=zh?'在设备清单查看单间数量，或打开 3D 浏览教室和装修效果。':'Open the equipment list for room quantities, or switch to 3D to explore the classroom finishes.';
        const W=room.width,D=room.depth;
        canvas.setAttribute('viewBox',[-.9,-1,W+1.8,D+2].join(' '));
        function draw(tag,attrs,parent=group,text){
            const node=document.createElementNS(canvas.namespaceURI,tag);
            for(const [key,val] of Object.entries(attrs))node.setAttribute(key,val);
            if(text)node.textContent=text; parent.append(node);return node;
        }
        const rect=(x,y,w,h,fill,extra={})=>draw('rect',{x,y,width:w,height:h,fill,...extra});
        const label=(x,y,value,size=.22)=>draw('text',{x,y,'text-anchor':'middle','font-size':size,fill:'var(--text)', 'font-weight':600},group,value);
        rect(0,0,W,D,'var(--room-fill)',{stroke:'var(--room-stroke)','stroke-width':.06});
        for(const w of room.windows)rect((w.side==='east'?W:0)-.045,w.center-w.width/2,.09,w.width,'#60aac4');
        rect(-.05,room.door.center-room.door.width/2,.1,room.door.width,'#cdaa76');
        draw('path',{d:'M0 .44 h1.2 a1.2 1.2 0 0 1 -1.2 1.2',fill:'none',stroke:'#cdaa76','stroke-width':.025});
        label(W/2,-.55,zh?'教学墙 · 智慧教室':'Teaching wall · Smart Classroom',.28);
        label(W/2,D+.5,'8.00 × 10.23 × 3.05 m  ·  '+(zh?'24 席':'24 seats'));
        for(const [x,y] of room.desks){
            rect(x-.8,y-.4,1.6,.8,'#c5aa80',{rx:.05,'data-smart-desk':1});
            for(const dx of [-.39,.39])rect(x+dx-.21,y+.42,.42,.38,'#647c7b',{rx:.07,'data-smart-seat':1});
        }
        rect(3.275,.95,1.45,.68,'#c5aa80');rect(2.8,9.72,2.4,.42,'#bcb7a9');
        for(const d of room.visible){
            const w=d.type==='ifp'?1.968:d.type==='board'?1.141:d.type==='podium'?.87:0;
            const tag=w?rect(d.x-w/2,d.y-.06,w,d.type==='podium'?.609:.12,'#366b74'):
                draw('circle',{cx:d.x,cy:d.y,r:.13,fill:d.type==='camera'?'#bc703f':'#207e78'});
            tag.setAttribute('data-smart-device',d.id);
            const text=room.label(d,lang); draw('title',{},tag,text);
            const offset={CS01:[.55,.64],D01:[0,-.24],D02:[0,.52],D03:[0,.52],R01:[0,.4],E01:[.54,.38],CT01:[0,-.27]};
            const [dx,dy]=offset[d.id]||[0,.39];
            label(d.x+dx,d.y+dy,d.type==='ifp'?'QA1400 Pro':d.type==='board'?'IRQK-60C':d.model.split(' · ')[0],.19);
        }
        App.updateBOM();
    };
    window.addEventListener('DOMContentLoaded',()=>{
        if(!room.active())return;
        state.smart=true;document.body.dataset.room=room.key;
        Object.assign(state,{roomLength:room.width,roomWidth:room.depth,height:room.height,devices:room.audio,equipment:room.equipment(),auxDisplays:[],showAuxDisplays:false});
        Object.assign(state.heightProfile,{mode:'uniform',front:room.height,rear:room.height,drop:.15,split:room.depth/2});
        for(const [id,v] of [['length',room.width],['width',room.depth],['height',room.height]]){
            el(id+'Slider').step='.01';el(id+'Slider').value=v;el(id+'Val').textContent=v.toFixed(2)+' m';
        }
        el('presetSelect').value=room.key;
        for(const id of ['settings-audio-button','settings-display-button','settings-coverage-button','display-layout','t_recalculate','processor-warning'])el(id).hidden=true;
        document.querySelectorAll('#settings-room input,#settings-room select:not(#presetSelect),#settings-room button').forEach(control=>control.disabled=true);
        el('langSelect').addEventListener('change',()=>{el('presetSelect').value=room.key;App.renderSmartPlan();});
        Object.assign(state.radii,App.radiiForHeight(room.height,.15));
        App.commitAudioLayout(state,{mode:'fixed',counts:App.audioCounts(room.audio)});
        App.refreshHeightUI();App.renderSmartPlan();
    });
})(window.AISpeech);
