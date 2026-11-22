// One-room schedule and CAD coordinates, in metres from the teaching wall's left corner.
(function (App) {
    const width = 8, depth = 10.23, height = 3.05;
    const desks = [3.719, 5.414, 7.109, 8.805].flatMap(y => [.9, 3.95, 7.2].map(x => [x, y]));
    const door = {center:1.037, width:1.2};
    const windows = [1.212,3.812,6.412,9.012].map(center=>({side:'east',center,width:1.2}));
    windows.push({side:'west',center:3.3,width:3.6});
    const devices = [], schedule = [];
    function item(model, type, mounts, quantity=1, role=null) {
        const entries=mounts.map(([id,x,y,z,parent],i)=>({id,x,y,mountHeight:z,parent,model,type,role,number:i+1,
            install:parent==='P01'?'cabinet':type==='podium'?'floor':['m100','dc20','s210'].includes(type)?'ceiling':'wall'}));
        schedule.push({model,role,quantity,devices:entries});
        devices.push(...entries);
    }
    item('NDP200','podium',[['P01',1.78,1.65,0]]);
    item('QA1400 Pro 86″ · LE086MD','ifp',[['D01',4,.105,1.697]]);
    item('OPS · i7 / 16 GB / 256 GB','ops',[['PC01',4,.105,1.697,'D01']]);
    item('LCS810 GEN 2','station',[['R01',.96,.12,1.5]]);
    item('CV870 Pro','camera',[['CT01',4,10.03,2.65]],1,'teacher');
    item('CV870 Pro','camera',[['CS01',4,.18,2.65]],1,'student');
    item('M100','m100',[['M01',4.1,5.55,2.90]]);
    item('S210','s210',[['M02',2.95,2.25,2.85]]);
    item('DP88','processor',[['A01',1.78,1.65,.55,'P01']]);
    item('DC20','dc20',[['S01',2,3.55,3.038],['S02',6,3.55,3.038],['S03',2,7.75,3.038],['S04',6,7.75,3.038]],4);
    item('DU11','adapter',[['U01',4,.105,1.697,'D01']]);
    item('D90','receiver',[['W01',1.78,1.65,.75,'P01']]);
    item('E4521 GEN2','document-camera',[['V01',1.78,1.65,.85,'P01']]);
    item('CPL50','scheduler',[['E01',-.08,1.98,1.45]]);
    item('IRQK-60C','board',[['D02',2.4455,.105,1.697],['D03',5.5545,.105,1.697]]);
    item('SPM-6000F','sequencer',[['Q01',1.78,1.65,.35,'P01']]);
    item('H3C ZX200P-24T2MS-400','switch',[['N01',1.78,1.65,.62,'P01']]);
    Object.assign(devices.find(d=>d.type==='ifp'),{size:86,panel:{name:'QA1400 Pro',size:86,widthMm:1968,heightMm:1194,depthMm:87}});
    const roomName=lang=>lang==='zh'?'某航空培训大楼 · 智慧教室':'Aviation Training Building · Smart Classroom';
    const label=(item,lang)=>item.model + (item.role==='teacher'?(lang==='zh'?' · 教师':' · Teacher'):item.role==='student'?(lang==='zh'?' · 学生':' · Student'):'');
    const key='smart-classroom';
    const equipment=()=>({...App.defaultEquipment(),qnexModel:'NDP200',lcsEnabled:true,du11Count:1,processorCount:1});
    function route(choice,lang) {
        const url=new URL(location.href);
        url.hash=''; for(const p of ['room','preset','tracking','hall','quality'])url.searchParams.delete(p);
        url.searchParams.set('lang',lang);
        if(choice===key)url.searchParams.set('room',key);
        else if(choice.startsWith('voice-hall')){
            url.searchParams.set('tracking','1');
            if(choice.endsWith('-small'))url.searchParams.set('hall','small');
        }else url.searchParams.set('preset',choice);
        location.assign(url.href);
    }
    App.smartRoom={key,equipment,roomName,label,route,width,depth,height,door,windows,desks,schedule,devices,
        active:()=>location.hash==='#room='+key || (!location.hash && new URLSearchParams(location.search).get('room')===key),
        audio:devices.filter(d=>d.type==='m100'||d.type==='dc20'),
        visible:devices.filter(d=>!d.parent)};
})(window.AISpeech);
