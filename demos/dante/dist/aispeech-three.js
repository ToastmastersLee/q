(()=>{function ph(n){window.addEventListener("message",async e=>{if(window.parent===window||e.source!==window.parent||location.protocol!=="file:"&&e.origin!==location.origin||e.data?.type!=="qnex-quotation-capture"||typeof e.data.id!="string")return;let t={type:"qnex-quotation-image",id:e.data.id};try{Object.assign(t,await n(e.data))}catch(i){t.error=i.message||"3D capture failed"}e.source.postMessage(t,e.origin==="null"?"*":e.origin)})}function fl(n,e){if(!n?.renderer)throw new Error("3D scene is not ready");n.setTheme("light"),n.renderer.setPixelRatio(1),n.renderer.setSize(1440,1e3,!1),n.camera.aspect=1440/1e3,n.camera.up.set(0,1,0),n.camera.updateProjectionMatrix(),n.viewTween=null,n.setView("overview",!0),n.controls.update(),n.renderer.render(n.scene,n.camera);let t=document.createElement("canvas");t.width=1440,t.height=1e3;let i=t.getContext("2d");return i.drawImage(n.canvas,0,0,1440,1e3),i.fillStyle="rgba(255,255,255,.94)",i.fillRect(16,16,1408,44),i.fillStyle="#17324d",i.font="bold 20px Arial",i.fillText(e,30,46),{data:t.toDataURL("image/png"),width:1440,height:1e3,view:"overview",upright:!0}}var pl={en:"English",zh:"\u7B80\u4F53\u4E2D\u6587",ko:"\uD55C\uAD6D\uC5B4",mn:"\u041C\u043E\u043D\u0433\u043E\u043B",ja:"\u65E5\u672C\u8A9E",es:"Espa\xF1ol",fr:"Fran\xE7ais",ar:"\u0627\u0644\u0639\u0631\u0628\u064A\u0629"},cf=["light","dark","theme","showSidebar","hideSidebar","language","left","right","types","tabletop","scene","views","devices"],mh={en:["Light","Dark","Switch light / dark theme","Show sidebar","Hide sidebar","Language","Left","Right","types","tabletop","Interactive 3D room","Camera views","Device names"],zh:["\u660E\u4EAE","\u6DF1\u8272","\u5207\u6362\u660E\u4EAE\uFF0F\u6DF1\u8272\u4E3B\u9898","\u5C55\u5F00\u4FA7\u680F","\u6536\u8D77\u4FA7\u680F","\u8BED\u8A00","\u5DE6","\u53F3","\u7C7B","\u684C\u9762","\u4EA4\u4E92\u5F0F\u4E09\u7EF4\u6559\u5BA4","\u89C2\u5BDF\u89C6\u89D2","\u8BBE\u5907\u540D\u79F0"],ko:["\uBC1D\uAC8C","\uC5B4\uB461\uAC8C","\uBC1D\uC740/\uC5B4\uB450\uC6B4 \uD14C\uB9C8 \uC804\uD658","\uC0AC\uC774\uB4DC\uBC14 \uD45C\uC2DC","\uC0AC\uC774\uB4DC\uBC14 \uC228\uAE30\uAE30","\uC5B8\uC5B4","\uC67C\uCABD","\uC624\uB978\uCABD","\uC720\uD615","\uCC45\uC0C1 \uC0C1\uD310","\uC778\uD130\uB799\uD2F0\uBE0C 3D \uAD50\uC2E4","\uCE74\uBA54\uB77C \uC2DC\uC810","\uC7A5\uBE44 \uC774\uB984"],mn:["\u0426\u0430\u0439\u0432\u0430\u0440","\u0411\u0430\u0440\u0430\u0430\u043D","\u0426\u0430\u0439\u0432\u0430\u0440 / \u0431\u0430\u0440\u0430\u0430\u043D \u04E9\u043D\u0433\u04E9 \u0441\u043E\u043B\u0438\u0445","\u0425\u0430\u0436\u0443\u0443\u0433\u0438\u0439\u043D \u0441\u0430\u043C\u0431\u0430\u0440\u044B\u0433 \u0445\u0430\u0440\u0443\u0443\u043B\u0430\u0445","\u0425\u0430\u0436\u0443\u0443\u0433\u0438\u0439\u043D \u0441\u0430\u043C\u0431\u0430\u0440\u044B\u0433 \u043D\u0443\u0443\u0445","\u0425\u044D\u043B","\u0417\u04AF\u04AF\u043D","\u0411\u0430\u0440\u0443\u0443\u043D","\u0442\u04E9\u0440\u04E9\u043B","\u0448\u0438\u0440\u044D\u044D\u043D\u0438\u0439 \u0442\u0430\u0432\u0446\u0430\u043D","\u0418\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432 3D \u04E9\u0440\u04E9\u04E9","\u041A\u0430\u043C\u0435\u0440\u044B\u043D \u0445\u0430\u0440\u0430\u0433\u0434\u0430\u0446","\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u043D \u043D\u044D\u0440"],ja:["\u30E9\u30A4\u30C8","\u30C0\u30FC\u30AF","\u30E9\u30A4\u30C8\uFF0F\u30C0\u30FC\u30AF\u5207\u66FF","\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u8868\u793A","\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u96A0\u3059","\u8A00\u8A9E","\u5DE6","\u53F3","\u7A2E\u985E","\u5929\u677F","\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D63D\u6559\u5BA4","\u8996\u70B9","\u6A5F\u5668\u540D"],es:["Claro","Oscuro","Cambiar tema claro / oscuro","Mostrar panel","Ocultar panel","Idioma","Izquierda","Derecha","tipos","superficie","Aula 3D interactiva","Vistas de c\xE1mara","Nombres de equipos"],fr:["Clair","Sombre","Changer de th\xE8me clair / sombre","Afficher le panneau","Masquer le panneau","Langue","Gauche","Droite","types","plateau","Salle 3D interactive","Points de vue","Noms des \xE9quipements"],ar:["\u0641\u0627\u062A\u062D","\u062F\u0627\u0643\u0646","\u062A\u0628\u062F\u064A\u0644 \u0627\u0644\u0645\u0638\u0647\u0631 \u0627\u0644\u0641\u0627\u062A\u062D \u0648\u0627\u0644\u062F\u0627\u0643\u0646","\u0625\u0638\u0647\u0627\u0631 \u0627\u0644\u0644\u0648\u062D\u0629","\u0625\u062E\u0641\u0627\u0621 \u0627\u0644\u0644\u0648\u062D\u0629","\u0627\u0644\u0644\u063A\u0629","\u064A\u0633\u0627\u0631","\u064A\u0645\u064A\u0646","\u0623\u0646\u0648\u0627\u0639","\u0633\u0637\u062D \u0627\u0644\u0637\u0627\u0648\u0644\u0629","\u063A\u0631\u0641\u0629 \u062A\u0641\u0627\u0639\u0644\u064A\u0629 \u062B\u0644\u0627\u062B\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F","\u0632\u0648\u0627\u064A\u0627 \u0627\u0644\u0639\u0631\u0636","\u0623\u0633\u0645\u0627\u0621 \u0627\u0644\u0623\u062C\u0647\u0632\u0629"]},Sn=n=>Object.fromEntries(cf.map((e,t)=>[e,(mh[n]||mh.en)[t]]));function ml(n){let e=new URLSearchParams(location.search).get("lang");return Object.hasOwn(pl,e)?e:Object.hasOwn(pl,n)?n:"en"}function hf(n){try{localStorage.setItem("qnex_arch_lang_v2",n)}catch{}}function gh(n){document.documentElement.lang=n==="zh"?"zh-CN":n,document.documentElement.dir=n==="ar"?"rtl":"ltr";let e=Sn(n);for(let[t,i]of[[".scene-panel","scene"],["#scene-canvas","scene"],["[role=group]","views"],["#device-labels","devices"]])document.querySelector(t)?.setAttribute("aria-label",e[i])}function gl(n,e,t){n.replaceChildren(...Object.entries(pl).map(([i,s])=>{let r=document.createElement("option");return r.value=i,r.textContent=s,r})),n.value=e,n.setAttribute("aria-label",Sn(e).language),n.addEventListener("change",()=>{hf(n.value);try{let i=new URL(location.href);i.searchParams.set("lang",n.value),history.replaceState(null,"",i)}catch{}t(n.value),n.setAttribute("aria-label",Sn(n.value).language)})}var Ls={light:{background:"#eaf0f5",floor:"#e3e5df",platform:"#d1ae89",front:"#e3ebf0",glass:"#9fc5d1",base:"#d5e2e8",trim:"#829eaa",door:"#637e8b",doorPanel:"#a6c5cf",window:"#9fbfcc",handle:"#456578",grid:"#bdc8c8",gridCenter:"#9aafb9",sky:"#f8fdff",ground:"#b6cad1",exposure:1.35},dark:{background:"#0c1729",floor:"#172940",platform:"#385873",front:"#102239",glass:"#27415a",base:"#20354b",trim:"#3d6984",door:"#385873",doorPanel:"#345367",window:"#4a6b80",handle:"#83aabd",grid:"#30475d",gridCenter:"#45647a",sky:"#c9e8ff",ground:"#26374c",exposure:1}};function _h(n,e,t){let i=e;try{let h=localStorage.getItem(n);Object.hasOwn(Ls,h)&&(i=h)}catch{}let s=!1,r="en",o=document.querySelector("#theme-toggle"),a=document.querySelector("#sidebar-toggle"),c=document.querySelector(".sidebar");function l(){let h=Sn(r);o.textContent=i==="dark"?h.light:h.dark,o.title=o.ariaLabel=h.theme,o.setAttribute("aria-pressed",String(i==="dark")),a.textContent=s?h.showSidebar:h.hideSidebar,a.setAttribute("aria-expanded",String(!s)),a.setAttribute("aria-controls",c.id)}function u(){document.documentElement.dataset.theme=i,document.querySelector('meta[name="theme-color"]')?.setAttribute("content",Ls[i].background),t(i),l()}return o.addEventListener("click",()=>{i=i==="dark"?"light":"dark";try{localStorage.setItem(n,i)}catch{}u()}),a.addEventListener("click",()=>{s=!s,c.hidden=s,document.documentElement.classList.toggle("sidebar-collapsed",s),l()}),u(),{setLanguage(h){r=h,l()},get theme(){return i}}}(function(n){let t=73*Math.PI/180,i=[{size:55,maxDistance:4.1},{size:65,maxDistance:5},{size:75,maxDistance:5.6}];function s(h,d=0){let f=Math.max(0,h-d-1.2),g=Math.min(8,f*Math.tan(t));return{m100Pickup:g,m100PA:g*5/8}}function r(h,d,f){if(!h||h.mode!=="split")return h?.front??h?.height??3;let g=Math.min(Math.max(h.split,0),f);return d<g?h.front:h.rear}function o(h,d,f,g){if(h.type!=="m100"||!f||f.legacy)return d;let _=s(r(f,h.y,g),f.drop||0);return{...d,m100Pickup:f.manualPickup??_.m100Pickup,m100PA:f.manualPA??_.m100PA}}function a(h,d=0){let f=Math.max(.1,h-1.2),g=f/(3-1.2);return{...s(h,d),m40Pickup:5*g,m40PA:3*g,dc20:f*1.73205}}function c(h,d){let f=h-2,g=[],_=i[2];for(let m=6;m<f-.001;m+=_.maxDistance){let p=f-m,v=i.find(b=>p<=b.maxDistance+.001)||_,x=(v.size*.0254*16/Math.sqrt(337)+.07)/2+.18;for(let b of["left","right"])g.push({id:`aux-${g.length+1}`,side:b,x:b==="left"?x:d-x,size:v.size,maxDistance:v.maxDistance,y:m,coverageEnd:Math.min(m+v.maxDistance,f)})}return g}function l(h,d,f,g){let _={m100:0,m40:0,dc20:0,55:0,65:0,75:0};f.forEach(v=>{_[v.type]++}),g.forEach(v=>{_[v.size]++});let m=_.m100+_.m40,p=m*2+(_.dc20>0?1:0);return{counts:_,du11:m||_.dc20?h*d>100||m>=2?2:1:0,channels:p,processor:p===0?null:p<=4?{type:"DP44",count:1}:{type:"DP88",count:Math.ceil(p/8)}}}function u(h,d,f,g,_={},m=null){let v=0,M=0,x=0,b=0;for(let A=0;A<=h;A+=.25)for(let C=0;C<=d;C+=.25){v++;let I=!1,w=!1,E=!1;f.forEach(D=>{let F=A-D.x,k=C-D.y,H=F*F+k*k;if(D.type==="m100"){let X=o(D,g,m,d);I=I||_.m100_pickup!==!1&&H<=X.m100Pickup*X.m100Pickup,w=w||_.m100_pa!==!1&&H<=X.m100PA*X.m100PA}else D.type==="m40"?(I=I||_.m40_pickup!==!1&&H<=g.m40Pickup*g.m40Pickup,w=w||_.m40_pa!==!1&&H<=g.m40PA*g.m40PA):D.type==="dc20"&&(E=E||_.dc20!==!1&&H<=g.dc20*g.dc20)}),I&&M++,w&&x++,E&&b++}return{mic:v>0?Math.round(M/v*100):0,pa:v>0?Math.round(x/v*100):0,speaker:v>0?Math.round(b/v*100):0}}n.coverageForPlan=u,n.DISPLAY_RULES=i,n.radiiForHeight=a,n.m100RadiiForHeight=s,n.radiiForDevice=o,n.heightAt=r,n.auxiliaryDisplaysForWidth=c,n.bomForPlan=l})(window.AISpeech=window.AISpeech||{});(function(n){let i={roomLength:10,roomWidth:8,height:3,heightProfile:{mode:"uniform",front:3,rear:3,split:5,drop:0,manualPickup:null,manualPA:null},devices:[],auxDisplays:[],show:{m100_pickup:!0,m100_pa:!0,m40_pickup:!0,m40_pa:!0,dc20:!0},radii:{m100Pickup:5.89,m100PA:3.68,m40Pickup:5,m40PA:3,dc20:3.12},showModels:!1,theme:"dark"},s=document.getElementById("canvas"),r={m100PickupInput:"m100Pickup",m100PAInput:"m100PA",m40PickupInput:"m40Pickup",m40PAInput:"m40PA",dc20Input:"dc20"};n.PPM=50,n.EAR_HEIGHT=1.2,n.state=i,n.idCounter=0,n.svgCanvas=s,n.inputMapping=r})(window.AISpeech=window.AISpeech||{});(function(n){let e=()=>({qnexModel:"NDP600",qnexCount:1,ifpCount:1,lcsEnabled:!1,lcsCount:1,cameraCount:2,processorModel:"DP88",processorCount:null,du11Count:null});n.defaultEquipment=e;let t=n.state;t.auxDisplays=[],t.equipment=e(),t.teachingDevices=[],t.manualAudio=!1,t.manualAux=!1,t.showIFP=!0,t.showAuxDisplays=!0;let i=(c,l)=>Math.max(.15,Math.min(l-.15,c)),s=c=>c!==""&&c!==null&&Number.isInteger(Number(c))&&Number(c)>=0&&Number(c)<=99;n.validQuantity=s;function r(c,l,u,h){return Array.from({length:100},(f,g)=>({x:l*(g%10+.5)/10,y:u*(Math.floor(g/10)+.5)/10})).sort((f,g)=>{let _=m=>h.length?Math.min(...h.map(p=>(p.x-m.x)**2+(p.y-m.y)**2)):-((m.x-l/2)**2+(m.y-u/2)**2);return _(g)-_(f)})[0]}function o(c,l,u){let h=c==="ifp"?1:.36,d=[...l,...t.teachingDevices.filter(m=>m.type!==c&&["ifp","station"].includes(m.type)&&m.y<.8)],f=[u/2,...Array.from({length:41},(m,p)=>h+.05+(u-2*h-.1)*p/40),...d.flatMap(m=>{let p=h+(m.type==="ifp"?1:.36)+.08;return[m.x-p,m.x+p]})].filter(m=>m>=h&&m<=u-h),g=f.filter(m=>d.every(p=>Math.abs(m-p.x)>=h+(p.type==="ifp"?1:.36)+.079)),_=m=>l.length?Math.min(...l.map(p=>Math.abs(p.x-m))):c==="ifp"?-Math.abs(m-u/2):-m;return(g.length?g:f).sort((m,p)=>_(p)-_(m))[0]??u/2}n.reconcileInstances=function(c,l,u,h){let d=c.filter(f=>f.type===l).slice(0,u);for(;d.length<u;)d.push(h(d.length,d));return[...c.filter(f=>f.type!==l),...d]};function a(c){if(c.x=i(c.x,t.roomLength),c.y=i(c.y,t.roomWidth),c.type==="ifp"){let l=(34.9504/Math.sqrt(337)+.07)/2;c.x=t.roomLength>2*l+.02?Math.max(l+.01,Math.min(t.roomLength-l-.01,c.x)):t.roomLength/2}}n.fitConfiguration=function(){for(let c of[...t.devices,...t.auxDisplays,...t.teachingDevices])a(c),c.coverageEnd!==void 0&&(c.coverageEnd=Math.max(c.y,Math.min(t.roomWidth,c.coverageEnd)))},n.syncTeachingDevices=function(){let c=t.equipment,l=t.roomLength,u=t.roomWidth,h=[["qnex",c.qnexCount],["ifp",t.showIFP?c.ifpCount:0],["station",c.lcsEnabled?c.lcsCount:0],["camera",c.lcsEnabled?c.cameraCount:0]];for(let[d,f]of h)t.teachingDevices=n.reconcileInstances(t.teachingDevices,d,f,(g,_)=>{let m=n.idCounter++,p=d==="camera"?{x:l/2+Math.floor(g/2)*.45,y:g%2?u-.3:.3}:d==="ifp"?{x:o(d,_,l),y:.15}:d==="station"?{x:o(d,_,l),y:.3}:{x:l*.32+g*1.7,y:1.2};return{id:`teaching-${m}`,type:d,...p,role:g%2?"teacher":"student"}});for(let d of t.teachingDevices)d.model=d.type==="qnex"?c.qnexModel:d.type==="ifp"?"QA1400 Pro":d.type==="camera"?"CV870":"LCS810 GEN2",d.type==="ifp"&&(d.size=86);t.qnexModel=c.qnexModel;for(let d of t.teachingDevices)a(d)},n.configuredBOM=function(c=t){let l=n.bomForPlan(c.roomLength,c.roomWidth,c.devices,c.showAuxDisplays===!1?[]:c.auxDisplays),u=c.equipment;l.du11=u.du11Count??l.du11;let h=u.processorCount??(l.channels?Math.ceil(l.channels/(u.processorModel==="DP44"?4:8)):0);return l.processor=h?{type:u.processorModel,count:h}:null,l},n.setAudioCount=function(c,l){s(l)&&(n.stageAudioCount(t,c,Number(l)),n.refreshAudioUI?.())},n.setAuxCount=function(c,l){if(!s(l))return;t.manualAux=!0,t.showAuxDisplays=!0;let u=t.auxDisplays.filter(d=>d.size===c).slice(0,Number(l)),h=n.DISPLAY_RULES.find(d=>d.size===c);for(;u.length<Number(l);){let d=u.length,f=Math.min(t.roomWidth-.4,3+Math.floor(d/2)*2),g=(c*.0254*16/Math.sqrt(337)+.07)/2+.18;u.push({id:`aux-manual-${n.idCounter++}`,size:c,side:d%2?"right":"left",x:d%2?t.roomLength-g:g,y:f,maxDistance:h.maxDistance,coverageEnd:Math.min(t.roomWidth,f+h.maxDistance)})}t.auxDisplays=[...t.auxDisplays.filter(d=>d.size!==c),...u],n.renderRoom()},n.restoreRecommended=function(){t.audioDraft=null,t.devices=n.buildProductRecommendation({mode:"auto"}),n.commitAudioLayout(t,{mode:"auto"}),n.renderRoom()},n.renderTeachingDevices=function(){n.syncTeachingDevices();let c=document.getElementById("canvas");if(!c)return;let l=document.getElementById("teachingLayer");l||(l=document.createElementNS(c.namespaceURI,"g"),l.id="teachingLayer",c.append(l)),l.replaceChildren();let u=h=>t.teachingDevices.filter(d=>d.type===h).length;for(let h of t.teachingDevices){let d=document.createElementNS(c.namespaceURI,"g");d.setAttribute("class","device teaching-device"),d.dataset.teachingId=h.id,d.setAttribute("transform",`translate(${h.x*n.PPM},${h.y*n.PPM})`);let f=document.createElementNS(c.namespaceURI,"rect"),g=h.type==="ifp"?90:h.type==="camera"?32:65;for(let[m,p]of Object.entries({x:-g/2,y:-7,width:g,height:14,rx:3,fill:h.type==="camera"?"#7c3aed":"#0072ce"}))f.setAttribute(m,p);let _=document.createElementNS(c.namespaceURI,"text");_.setAttribute("y",-12),_.setAttribute("text-anchor","middle"),_.setAttribute("font-size","10"),_.setAttribute("fill","var(--text)"),_.textContent=h.type==="qnex"?`Q-NEX ${h.model}${u(h.type)>1?" #"+(t.teachingDevices.filter(m=>m.type===h.type).indexOf(h)+1):""}`:`${h.model}${h.size?" 86\u2033":""} #${t.teachingDevices.filter(m=>m.type===h.type).indexOf(h)+1}`,d.append(f,_),l.append(d)}}})(window.AISpeech);(function(n){let e=["configuration","instructions","reference","restore","includeLCS","model","quantity","capacity","manual","linked","teacher","student","projection"],t={fr:["Configuration / devis","Instructions","R\xE9f\xE9rence des appareils","Restaurer la configuration recommand\xE9e","Inclure LCS810 + CV870","Mod\xE8le","Quantit\xE9","La capacit\xE9 DSP est inf\xE9rieure aux canaux estim\xE9s.","Le recalcul conserve les quantit\xE9s impos\xE9es et redispose les appareils audio.","Suit la quantit\xE9 de NDP600","Cam\xE9ra enseignant","Cam\xE9ra \xE9l\xE8ves","R\xE8gles 2D / projection au sol"],mn:["\u0422\u043E\u0445\u0438\u0440\u0433\u043E\u043E / \u04AF\u043D\u0438\u0439\u043D \u0441\u0430\u043D\u0430\u043B","\u0410\u0448\u0438\u0433\u043B\u0430\u0445 \u0437\u0430\u0430\u0432\u0430\u0440","\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u043D \u043B\u0430\u0432\u043B\u0430\u0433\u0430\u0430","\u0417\u04E9\u0432\u043B\u04E9\u043C\u0436\u0438\u0442 \u0442\u043E\u0445\u0438\u0440\u0433\u043E\u043E\u0433 \u0441\u044D\u0440\u0433\u044D\u044D\u0445","LCS810 + CV870 \u043D\u044D\u043C\u044D\u0445","\u0417\u0430\u0433\u0432\u0430\u0440","\u0422\u043E\u043E","DSP \u0431\u0430\u0433\u0442\u0430\u0430\u043C\u0436 \u0442\u043E\u043E\u0446\u043E\u043E\u043B\u0441\u043E\u043D \u0441\u0443\u0432\u0433\u0430\u0430\u0441 \u0431\u0430\u0433\u0430 \u0431\u0430\u0439\u043D\u0430.","\u0414\u0430\u0445\u0438\u043D \u0442\u043E\u043E\u0446\u043E\u0445\u043E\u0434 \u0442\u043E\u0433\u0442\u0441\u043E\u043D \u0442\u043E\u043E\u0433 \u0445\u0430\u0434\u0433\u0430\u043B\u0436 \u0430\u0443\u0434\u0438\u043E \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u0433 \u0434\u0430\u0445\u0438\u043D \u0431\u0430\u0439\u0440\u043B\u0443\u0443\u043B\u043D\u0430.","NDP600 \u0442\u043E\u043E\u0433 \u0434\u0430\u0433\u0430\u043D\u0430","\u0411\u0430\u0433\u0448\u0438\u0439\u043D \u043A\u0430\u043C\u0435\u0440","\u0421\u0443\u0440\u0430\u0433\u0447\u0438\u0439\u043D \u043A\u0430\u043C\u0435\u0440","2D \u0434\u04AF\u0440\u044D\u043C / \u0448\u0430\u043B\u043D\u044B \u0442\u0443\u0441\u0433\u0430\u043B"],en:["Configuration / quotation","Operating instructions","Device reference","Restore recommended configuration","Include LCS810 + CV870","Model","Quantity","Configured DSP capacity is below the estimated channel count.","Recalculate preserves specified quantities and rearranges audio devices.","Follows NDP600 quantity","Teacher camera","Student camera","2D rules / ground projection"],zh:["\u914D\u7F6E\u4E0E\u62A5\u4EF7","\u64CD\u4F5C\u8BF4\u660E","\u8BBE\u5907\u53C2\u6570\u53C2\u8003","\u6062\u590D\u63A8\u8350\u914D\u7F6E","\u52A0\u5165 LCS810 + CV870","\u578B\u53F7","\u6570\u91CF","\u5F53\u524D DSP \u5BB9\u91CF\u4F4E\u4E8E\u4F30\u7B97\u901A\u9053\u6570\u3002","\u91CD\u65B0\u8BA1\u7B97\u4FDD\u7559\u6307\u5B9A\u6570\u91CF\uFF0C\u5E76\u91CD\u65B0\u5E03\u7F6E\u97F3\u9891\u8BBE\u5907\u3002","\u968F NDP600 \u6570\u91CF\u8054\u52A8","\u6559\u5E08\u6444\u50CF\u673A","\u5B66\u751F\u6444\u50CF\u673A","\u4E8C\u7EF4\u89C4\u5219\uFF0F\u5730\u9762\u6295\u5F71"],es:["Configuraci\xF3n / cotizaci\xF3n","Instrucciones","Referencia de equipos","Restaurar configuraci\xF3n recomendada","Incluir LCS810 + CV870","Modelo","Cantidad","La capacidad DSP es inferior a los canales estimados.","Recalcular conserva las cantidades fijadas y redistribuye los equipos de audio.","Sigue la cantidad de NDP600","C\xE1mara del profesor","C\xE1mara del alumnado","Reglas 2D / proyecci\xF3n del suelo"],ja:["\u69CB\u6210\u30FB\u898B\u7A4D","\u64CD\u4F5C\u8AAC\u660E","\u6A5F\u5668\u4ED5\u69D8\u306E\u53C2\u8003","\u63A8\u5968\u69CB\u6210\u306B\u623B\u3059","LCS810 + CV870 \u3092\u8FFD\u52A0","\u578B\u756A","\u6570\u91CF","DSP \u306E\u5BB9\u91CF\u304C\u63A8\u5B9A\u30C1\u30E3\u30F3\u30CD\u30EB\u6570\u3092\u4E0B\u56DE\u3063\u3066\u3044\u307E\u3059\u3002","\u518D\u8A08\u7B97\u3067\u306F\u6307\u5B9A\u53F0\u6570\u3092\u4FDD\u6301\u3057\u3001\u97F3\u58F0\u6A5F\u5668\u3092\u518D\u914D\u7F6E\u3057\u307E\u3059\u3002","NDP600 \u306E\u6570\u91CF\u306B\u9023\u52D5","\u6559\u5E2B\u30AB\u30E1\u30E9","\u5B66\u751F\u30AB\u30E1\u30E9","2D \u30EB\u30FC\u30EB\uFF0F\u5E8A\u9762\u6295\u5F71"],ko:["\uAD6C\uC131 / \uACAC\uC801","\uC0AC\uC6A9 \uC548\uB0B4","\uC7A5\uBE44 \uCC38\uACE0 \uC0AC\uC591","\uAD8C\uC7A5 \uAD6C\uC131 \uBCF5\uC6D0","LCS810 + CV870 \uCD94\uAC00","\uBAA8\uB378","\uC218\uB7C9","DSP \uC6A9\uB7C9\uC774 \uCD94\uC815 \uCC44\uB110 \uC218\uBCF4\uB2E4 \uC791\uC2B5\uB2C8\uB2E4.","\uC7AC\uACC4\uC0B0 \uC2DC \uC9C0\uC815 \uC218\uB7C9\uC744 \uC720\uC9C0\uD558\uACE0 \uC624\uB514\uC624 \uC7A5\uCE58\uB97C \uC7AC\uBC30\uCE58\uD569\uB2C8\uB2E4.","NDP600 \uC218\uB7C9\uACFC \uC5F0\uB3D9","\uAD50\uC0AC \uCE74\uBA54\uB77C","\uD559\uC0DD \uCE74\uBA54\uB77C","2D \uADDC\uCE59 / \uBC14\uB2E5 \uD22C\uC601"],hu:["Konfigur\xE1ci\xF3 / \xE1raj\xE1nlat","Haszn\xE1lati \xFAtmutat\xF3","Eszk\xF6zreferencia","Aj\xE1nlott konfigur\xE1ci\xF3 vissza\xE1ll\xEDt\xE1sa","LCS810 + CV870 hozz\xE1ad\xE1sa","Modell","Mennyis\xE9g","A DSP kapacit\xE1sa kisebb a becs\xFClt csatornasz\xE1mn\xE1l.","Az \xFAjrasz\xE1m\xEDt\xE1s megtartja a megadott mennyis\xE9geket \xE9s \xE1trendezi az audioeszk\xF6z\xF6ket.","Az NDP600 mennyis\xE9g\xE9t k\xF6veti","Tan\xE1ri kamera","Di\xE1kkamera","2D szab\xE1lyok / padl\xF3vet\xFClet"],it:["Configurazione / preventivo","Istruzioni","Riferimenti dispositivi","Ripristina configurazione consigliata","Includi LCS810 + CV870","Modello","Quantit\xE0","La capacit\xE0 DSP \xE8 inferiore ai canali stimati.","Il ricalcolo mantiene le quantit\xE0 specificate e riposiziona i dispositivi audio.","Segue la quantit\xE0 di NDP600","Telecamera docente","Telecamera studenti","Regole 2D / proiezione a terra"],ar:["\u0627\u0644\u062A\u0643\u0648\u064A\u0646 / \u0639\u0631\u0636 \u0627\u0644\u0633\u0639\u0631","\u0625\u0631\u0634\u0627\u062F\u0627\u062A \u0627\u0644\u062A\u0634\u063A\u064A\u0644","\u0645\u0631\u062C\u0639 \u0627\u0644\u0623\u062C\u0647\u0632\u0629","\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0643\u0648\u064A\u0646 \u0627\u0644\u0645\u0648\u0635\u0649 \u0628\u0647","\u0625\u0636\u0627\u0641\u0629 LCS810 + CV870","\u0627\u0644\u0637\u0631\u0627\u0632","\u0627\u0644\u0643\u0645\u064A\u0629","\u0633\u0639\u0629 DSP \u0623\u0642\u0644 \u0645\u0646 \u0639\u062F\u062F \u0627\u0644\u0642\u0646\u0648\u0627\u062A \u0627\u0644\u0645\u0642\u062F\u0631.","\u062A\u062D\u0627\u0641\u0638 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062D\u0633\u0627\u0628 \u0639\u0644\u0649 \u0627\u0644\u0623\u0639\u062F\u0627\u062F \u0627\u0644\u0645\u062D\u062F\u062F\u0629 \u0648\u062A\u0639\u064A\u062F \u062A\u0648\u0632\u064A\u0639 \u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0635\u0648\u062A.","\u064A\u062A\u0628\u0639 \u0643\u0645\u064A\u0629 NDP600","\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u0645\u0639\u0644\u0645","\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u0637\u0644\u0627\u0628","\u0642\u0648\u0627\u0639\u062F \u062B\u0646\u0627\u0626\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F / \u0625\u0633\u0642\u0627\u0637 \u0623\u0631\u0636\u064A"]};n.configurationCopy=i=>Object.fromEntries(e.map((s,r)=>[s,(t[i]||t.en)[r]]))})(window.AISpeech);(function(n){let e=["m100","m40","dc20"],t={m100:10,m40:10,dc20:30},i=h=>Object.fromEntries(e.map(d=>[d,h.filter(f=>f.type===d).length]));function s(h){return{mode:h.audioLayout?.mode||(h.manualAudio?"fixed":"auto"),counts:i(h.devices)}}function r(h){return h.audioDraft?{mode:"fixed",counts:{...h.audioDraft}}:s(h)}function o(h,d){h.audioLayout={mode:d.mode,counts:i(h.devices)},h.manualAudio=d.mode==="fixed",h.audioDraft=null}function a(h,d,f){return!e.includes(d)||!Number.isInteger(f)||f<0||f>t[d]?!1:(h.audioDraft={...h.audioDraft||i(h.devices),[d]:f},!0)}function c(h){h.audioLayout={mode:"fixed",counts:i(h.devices)},h.manualAudio=!0}function l(h){let d=h.filter(f=>f.type!=="dc20");return h.some((f,g)=>h.some((_,m)=>m<g&&Math.hypot(f.x-_.x,f.y-_.y)<.1))||h.some(f=>f.type==="dc20"&&!n.isFarEnoughFromMicrophones(f,d,2))}function u(h){let d=n.state,f=[...Array(h.m100).fill("m100"),...Array(h.m40).fill("m40")],g=n.createGridPositions(f.length,d.roomLength,d.roomWidth),_=n.createGridPositions(f.length,d.roomWidth,d.roomLength).map(E=>({x:E.y,y:E.x})),m=[g,_].map(E=>E.map((D,F)=>({type:f[F],...D}))),p=m.map(E=>n.estimateCoverageForDevices(E).mic),M=m[p[1]>p[0]?1:0].map(E=>({...E,id:n.idCounter++})),x=n.createGridPositions(h.dc20,d.roomLength,d.roomWidth).map(E=>n.keepSpeakerAwayFromMicrophones(E,M)),b=h.dc20?n.optimizeSpeakerPositions(h.dc20,M):[];b.length!==h.dc20&&(b=x);let A=E=>E.map(D=>({type:"dc20",...D})),C=n.estimateCoverageForDevices([...M,...A(b)]).speaker,w=n.estimateCoverageForDevices([...M,...A(x)]).speaker>=C?x:b;return[...M,...n.makeDevices("dc20",w)]}Object.assign(n,{audioTypes:e,audioLimits:t,audioCounts:i,audioRequest:r,appliedAudioRequest:s,commitAudioLayout:o,stageAudioCount:a,lockAudioCounts:c,fixedAudioDevices:u,layoutConflict:l})})(window.AISpeech=window.AISpeech||{});(function(n){let e={en:["Audio device quantities","Automatic recommendation","Specified quantities","Pending \xB7 click Recalculate","Restore automatic recommendation","Clear audio devices","Placement conflict: review microphone/speaker spacing.","Settings","Instructions","Device reference","BOM / quotation","More","Close","Drawing, BOM and export use the applied quantities."],zh:["\u97F3\u9891\u8BBE\u5907\u6570\u91CF","\u81EA\u52A8\u63A8\u8350","\u6307\u5B9A\u6570\u91CF","\u5F85\u91CD\u65B0\u8BA1\u7B97","\u6062\u590D\u81EA\u52A8\u63A8\u8350","\u6E05\u7A7A\u97F3\u9891\u8BBE\u5907","\u5E03\u7F6E\u51B2\u7A81\uFF1A\u8BF7\u68C0\u67E5\u9EA6\u514B\u98CE\u4E0E\u97F3\u7BB1\u95F4\u8DDD\u3002","\u8BBE\u7F6E","\u64CD\u4F5C\u8BF4\u660E","\u8BBE\u5907\u53C2\u8003","BOM\uFF0F\u62A5\u4EF7","\u66F4\u591A","\u5173\u95ED","\u56FE\u5F62\u3001BOM \u4E0E\u5BFC\u51FA\u4F7F\u7528\u5DF2\u5E94\u7528\u6570\u91CF\u3002"],ko:["\uC624\uB514\uC624 \uC7A5\uCE58 \uC218","\uC790\uB3D9 \uCD94\uCC9C","\uC9C0\uC815 \uC218\uB7C9","\uB2E4\uC2DC \uACC4\uC0B0 \uD544\uC694","\uC790\uB3D9 \uCD94\uCC9C \uBCF5\uC6D0","\uC624\uB514\uC624 \uC7A5\uCE58 \uC9C0\uC6B0\uAE30","\uBC30\uCE58 \uCDA9\uB3CC: \uB9C8\uC774\uD06C\uC640 \uC2A4\uD53C\uCEE4 \uAC04\uACA9\uC744 \uD655\uC778\uD558\uC138\uC694.","\uC124\uC815","\uC0AC\uC6A9 \uC548\uB0B4","\uC7A5\uCE58 \uCC38\uACE0","BOM / \uACAC\uC801","\uB354 \uBCF4\uAE30","\uB2EB\uAE30","\uB3C4\uBA74, BOM \uBC0F \uB0B4\uBCF4\uB0B4\uAE30\uB294 \uC801\uC6A9\uB41C \uC218\uB7C9\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4."],ja:["\u97F3\u58F0\u6A5F\u5668\u306E\u53F0\u6570","\u81EA\u52D5\u63A8\u5968","\u6307\u5B9A\u53F0\u6570","\u518D\u8A08\u7B97\u3057\u3066\u304F\u3060\u3055\u3044","\u81EA\u52D5\u63A8\u5968\u306B\u623B\u3059","\u97F3\u58F0\u6A5F\u5668\u3092\u30AF\u30EA\u30A2","\u914D\u7F6E\u306E\u7AF6\u5408\uFF1A\u30DE\u30A4\u30AF\u3068\u30B9\u30D4\u30FC\u30AB\u30FC\u306E\u9593\u9694\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002","\u8A2D\u5B9A","\u64CD\u4F5C\u8AAC\u660E","\u6A5F\u5668\u306E\u53C2\u8003","BOM\uFF0F\u898B\u7A4D","\u305D\u306E\u4ED6","\u9589\u3058\u308B","\u56F3\u3001BOM\u3001\u51FA\u529B\u306B\u306F\u9069\u7528\u6E08\u307F\u306E\u53F0\u6570\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"],es:["Cantidades de audio","Recomendaci\xF3n autom\xE1tica","Cantidades fijadas","Pendiente: recalcular","Restaurar recomendaci\xF3n autom\xE1tica","Borrar equipos de audio","Conflicto: revise la separaci\xF3n entre micr\xF3fonos y altavoces.","Ajustes","Instrucciones","Referencia de equipos","BOM / presupuesto","M\xE1s","Cerrar","El plano, BOM y exportaci\xF3n usan las cantidades aplicadas."],fr:["Quantit\xE9s audio","Recommandation automatique","Quantit\xE9s impos\xE9es","En attente : recalculer","R\xE9tablir la recommandation","Effacer les appareils audio","Conflit : v\xE9rifier les distances entre microphones et enceintes.","R\xE9glages","Instructions","R\xE9f\xE9rences","BOM / devis","Plus","Fermer","Le plan, la nomenclature et les exports utilisent les quantit\xE9s appliqu\xE9es."],mn:["\u0410\u0443\u0434\u0438\u043E \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u043D \u0442\u043E\u043E","\u0410\u0432\u0442\u043E\u043C\u0430\u0442 \u0441\u0430\u043D\u0430\u043B","\u0422\u043E\u0433\u0442\u0441\u043E\u043D \u0442\u043E\u043E","\u0414\u0430\u0445\u0438\u043D \u0442\u043E\u043E\u0446\u043E\u043E\u043B\u043D\u043E \u0443\u0443","\u0410\u0432\u0442\u043E\u043C\u0430\u0442 \u0441\u0430\u043D\u0430\u043B\u044B\u0433 \u0441\u044D\u0440\u0433\u044D\u044D\u0445","\u0410\u0443\u0434\u0438\u043E \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u0433 \u0430\u0440\u0438\u043B\u0433\u0430\u0445","\u0411\u0430\u0439\u0440\u043B\u0430\u043B\u044B\u043D \u0437\u04E9\u0440\u0447\u0438\u043B: \u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D \u0431\u0430 \u0447\u0430\u043D\u0433\u0430 \u044F\u0440\u0438\u0433\u0447\u0438\u0439\u043D \u0437\u0430\u0439\u0433 \u0448\u0430\u043B\u0433\u0430\u043D\u0430 \u0443\u0443.","\u0422\u043E\u0445\u0438\u0440\u0433\u043E\u043E","\u0417\u0430\u0430\u0432\u0430\u0440","\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u043D \u043B\u0430\u0432\u043B\u0430\u0433\u0430\u0430","BOM / \u04AE\u043D\u0438\u0439\u043D \u0441\u0430\u043D\u0430\u043B","\u0411\u0443\u0441\u0430\u0434","\u0425\u0430\u0430\u0445","\u0417\u0443\u0440\u0430\u0433, BOM, \u044D\u043A\u0441\u043F\u043E\u0440\u0442 \u043D\u044C \u0445\u044D\u0440\u044D\u0433\u0436\u04AF\u04AF\u043B\u0441\u044D\u043D \u0442\u043E\u043E\u0433 \u0430\u0448\u0438\u0433\u043B\u0430\u043D\u0430."],ar:["\u0623\u0639\u062F\u0627\u062F \u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0635\u0648\u062A","\u0627\u0642\u062A\u0631\u0627\u062D \u062A\u0644\u0642\u0627\u0626\u064A","\u0623\u0639\u062F\u0627\u062F \u0645\u062D\u062F\u062F\u0629","\u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062D\u0633\u0627\u0628","\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0627\u0642\u062A\u0631\u0627\u062D \u0627\u0644\u062A\u0644\u0642\u0627\u0626\u064A","\u0645\u0633\u062D \u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0635\u0648\u062A","\u062A\u0639\u0627\u0631\u0636 \u0641\u064A \u0627\u0644\u0645\u0648\u0627\u0636\u0639: \u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0628\u064A\u0646 \u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646\u0627\u062A \u0648\u0645\u0643\u0628\u0631\u0627\u062A \u0627\u0644\u0635\u0648\u062A.","\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A","\u0627\u0644\u062A\u0639\u0644\u064A\u0645\u0627\u062A","\u0645\u0631\u062C\u0639 \u0627\u0644\u0623\u062C\u0647\u0632\u0629","\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0639\u062F\u0627\u062A / \u0639\u0631\u0636 \u0627\u0644\u0633\u0639\u0631","\u0627\u0644\u0645\u0632\u064A\u062F","\u0625\u063A\u0644\u0627\u0642","\u064A\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0631\u0633\u0645 \u0648\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0639\u062F\u0627\u062A \u0648\u0627\u0644\u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u0623\u0639\u062F\u0627\u062F \u0627\u0644\u0645\u0637\u0628\u0642\u0629."],it:["Quantit\xE0 audio","Consiglio automatico","Quantit\xE0 fisse","In attesa: ricalcolare","Ripristina consiglio automatico","Cancella dispositivi audio","Conflitto: verificare la distanza tra microfoni e altoparlanti.","Impostazioni","Istruzioni","Riferimenti","BOM / preventivo","Altro","Chiudi","Disegno, BOM ed esportazione usano le quantit\xE0 applicate."],hu:["Audioeszk\xF6z\xF6k sz\xE1ma","Automatikus aj\xE1nl\xE1s","R\xF6gz\xEDtett mennyis\xE9g","\xDAjrasz\xE1m\xEDt\xE1s sz\xFCks\xE9ges","Automatikus aj\xE1nl\xE1s vissza\xE1ll\xEDt\xE1sa","Audioeszk\xF6z\xF6k t\xF6rl\xE9se","Elhelyez\xE9si \xFCtk\xF6z\xE9s: ellen\u0151rizze a mikrofonok \xE9s hangsz\xF3r\xF3k t\xE1vols\xE1g\xE1t.","Be\xE1ll\xEDt\xE1sok","\xDAtmutat\xF3","Eszk\xF6zreferencia","BOM / \xE1raj\xE1nlat","Tov\xE1bbiak","Bez\xE1r\xE1s","A rajz, BOM \xE9s export az alkalmazott mennyis\xE9geket haszn\xE1lja."]};n.audioUIWords=t=>e[t]||e.en,n.createAudioControls=function(t,i){let s=document.createElement("h3"),r=document.createElement("p"),o=document.createElement("p"),a=document.createElement("p"),c=document.createElement("div"),l=document.createElement("button"),u=document.createElement("button");t.classList.add("audio-count-card"),t.append(s,r),r.className="audio-count-status",r.setAttribute("aria-live","polite");let h=n.audioTypes.map(f=>{let g=document.createElement("label"),_=document.createElement("span"),m=document.createElement("select");return g.className="audio-count-row",m.dataset.audioCount=f,m.addEventListener("change",()=>{n.stageAudioCount(i.state(),f,Number(m.value)),d(),i.staged?.()}),g.append(_,m),t.append(g),{type:f,name:_,select:m}});o.className=a.className="microcopy",a.classList.add("audio-layout-warning"),o.setAttribute("role","note"),c.className="audio-count-actions",l.dataset.audioAction="restore",u.dataset.audioAction="clear",l.type=u.type="button",l.onclick=i.restore,u.onclick=i.clear,c.append(l,u),t.append(o,a,c);function d(){let f=i.state();if(!f)return;let g=n.audioUIWords(i.language()),_=f.audioDraft||n.audioCounts(f.devices);s.textContent=g[0],r.textContent=f.audioDraft?g[3]:g[n.audioRequest(f).mode==="fixed"?2:1],t.dataset.pending=String(!!f.audioDraft),t.dataset.mode=n.audioRequest(f).mode;for(let{type:m,name:p,select:v}of h){p.textContent=i.name(m)+(m==="m100"?" \xB7 A":m==="m40"?" \xB7 B":"");let M=Array.from({length:n.audioLimits[m]+1},(x,b)=>b);_[m]>n.audioLimits[m]&&M.push(_[m]),v.replaceChildren(...M.map(x=>new Option(String(x),String(x)))),v.value=_[m],v.setAttribute("aria-label",p.textContent)}l.textContent=g[4],u.textContent=g[5],o.textContent=g[13],a.textContent=g[6],a.hidden=!n.layoutConflict(f.devices)}return d(),d}})(window.AISpeech=window.AISpeech||{});(function(n){let e=["m100Pickup","m100PA","m40Pickup","m40PA","dc20"],t=["m100_pickup","m100_pa","m40_pickup","m40_pa","dc20"];function i(l="invalidSnapshot"){let u=new Error(l);throw u.code=l,u}let s=(l,u,h)=>typeof l=="number"&&Number.isFinite(l)&&l>=u&&l<=h;function r(l){(!l||typeof l!="object")&&i(),[1,2,3,4].includes(l.version)||i("snapshotVersion");let{length:u,width:h,height:d}=l;(!s(u,2,40)||!s(h,2,40)||!s(d,2,4))&&i(),(!Array.isArray(l.devices)||!Array.isArray(l.displays))&&i();let f=new Set;function g(b){(!b||!["string","number"].includes(typeof b.id))&&i(),typeof b.id=="number"&&!Number.isSafeInteger(b.id)&&i();let A=String(b.id);return(!A||A.length>100||f.has(A)||/^(ifp-|podium$|station$)/.test(A))&&i(),f.add(A),(!s(b.x,0,u)||!s(b.y,0,h))&&i("snapshotBounds"),{id:A,x:b.x,y:b.y}}let _=l.devices.map(b=>{let A=g(b);return["m100","m40","dc20"].includes(b.type)||i(),{...A,type:b.type}}),m=l.displays.map(b=>{let A=g(b);return(!["left","right"].includes(b.side)||![55,65,75].includes(b.size)||!s(b.maxDistance,0,40)||!s(b.coverageEnd,b.y,h))&&i(),{...A,side:b.side,size:b.size,maxDistance:b.maxDistance,coverageEnd:b.coverageEnd}});(!l.radii||e.some(b=>!s(l.radii[b],0,Number.MAX_VALUE)))&&i(),(!l.show||t.some(b=>typeof l.show[b]!="boolean")||typeof l.showModels!="boolean")&&i(),["en","zh","hu","it","es","ja","ko","ar"].includes(l.language)||i();let p;if(l.version>=2){let b=l.heightProfile;(!b||!["uniform","split"].includes(b.mode)||!s(b.front,2,4)||!s(b.rear,2,4)||!s(b.split,0,h)||!s(b.drop,0,.7)||b.manualPickup!==null&&!s(b.manualPickup,0,100)||b.manualPA!==null&&!s(b.manualPA,0,100))&&i(),p={mode:b.mode,front:b.front,rear:b.rear,split:b.split,drop:b.drop,manualPickup:b.manualPickup,manualPA:b.manualPA}}let v,M;if(l.version===3||l.version===4&&l.equipment){let b=l.equipment,A=C=>Number.isInteger(C)&&s(C,0,99);(!b||!["NDP600","SL100","NMP311"].includes(b.qnexModel)||!["DP44","DP88"].includes(b.processorModel)||!["qnexCount","ifpCount","lcsCount","cameraCount"].every(C=>A(b[C]))||typeof b.lcsEnabled!="boolean"||!["processorCount","du11Count"].every(C=>b[C]===null||A(b[C]))||!Array.isArray(l.teachingDevices))&&i(),v=Object.fromEntries(["qnexModel","qnexCount","ifpCount","lcsEnabled","lcsCount","cameraCount","processorModel","processorCount","du11Count"].map(C=>[C,b[C]])),M=l.teachingDevices.map(C=>{let I=g(C);["qnex","ifp","station","camera"].includes(C.type)||i();let w=C.type==="qnex"?b.qnexModel:C.type==="ifp"?"QA1400 Pro":C.type==="camera"?"CV870":"LCS810 GEN2";return(C.model!==w||C.type==="ifp"&&C.size!==86||C.type==="camera"&&!["teacher","student"].includes(C.role))&&i(),{...I,type:C.type,model:w,...C.type==="ifp"?{size:86}:{},...C.type==="camera"?{role:C.role}:{}}});for(let[C,I]of[["qnex",b.qnexCount],["ifp",b.ifpCount],["station",b.lcsEnabled?b.lcsCount:0],["camera",b.lcsEnabled?b.cameraCount:0]])M.filter(w=>w.type===C).length!==I&&i()}let x;if(l.version===4){let b=l.audioLayout,A=n.audioCounts(_);(!b||!["auto","fixed"].includes(b.mode)||!b.counts||n.audioTypes.some(C=>!Number.isInteger(b.counts[C])||b.counts[C]!==A[C]))&&i(),!v&&l.teachingDevices?.length&&i(),x={mode:b.mode,counts:A}}return{version:l.version,length:u,width:h,height:d,devices:_,displays:m,radii:Object.fromEntries(e.map(b=>[b,l.radii[b]])),show:Object.fromEntries(t.map(b=>[b,l.show[b]])),language:l.language,showModels:l.showModels,...p?{heightProfile:p}:{},...v?{equipment:v,teachingDevices:M}:{},...x?{audioLayout:x}:{}}}function o(l,u){return l===n.state&&l.equipment&&n.syncTeachingDevices(),r({version:4,audioLayout:n.appliedAudioRequest(l),length:l.roomLength,width:l.roomWidth,height:l.height,devices:l.devices,displays:l.showAuxDisplays===!1?[]:l.auxDisplays,radii:l.radii,show:l.show,language:u,showModels:l.showModels===!0,heightProfile:l.heightProfile||{mode:"uniform",front:l.height,rear:l.height,split:l.roomWidth/2,drop:0,manualPickup:null,manualPA:null},equipment:l.equipment?{...l.equipment,ifpCount:l.showIFP===!1?0:l.equipment.ifpCount}:void 0,teachingDevices:l.teachingDevices})}function a(l){return"#plan="+encodeURIComponent(JSON.stringify(r(l)))}function c(l){if(!l)return null;l.startsWith("#plan=")||i();let u;try{u=JSON.parse(decodeURIComponent(l.slice(6)))}catch{i()}return r(u)}Object.assign(n,{validateSnapshot:r,snapshotFromState:o,encodeSnapshot:a,decodeSnapshot:c})})(window.AISpeech=window.AISpeech||{});(function(n){let e={en:["Dante Ceiling Microphone","Dante Ceiling Microphone","Dante Ceiling Speaker","Dante Interface Adapter","4-channel Dante Audio Processor","8-channel Dante Audio Processor","Show model numbers","View 3D","Reference configuration. Adjust parameters for customer-owned equipment.","No devices","channels used","The plan is invalid. Check room dimensions, devices and coverage radii.","A device is outside the room. Move it inside in 2D before opening 3D.","This plan version is unsupported. Open it again from the updated 2D page."],zh:["Dante \u5438\u9876\u9EA6\u514B\u98CE","Dante \u5438\u9876\u9EA6\u514B\u98CE","Dante \u5438\u9876\u97F3\u7BB1","Dante \u63A5\u53E3\u9002\u914D\u5668","4 \u901A\u9053 Dante \u97F3\u9891\u5904\u7406\u5668","8 \u901A\u9053 Dante \u97F3\u9891\u5904\u7406\u5668","\u663E\u793A\u578B\u53F7","\u67E5\u770B 3D","\u5F53\u524D\u53C2\u8003\u914D\u7F6E\uFF1B\u5BA2\u6237\u81EA\u6709\u8BBE\u5907\u8BF7\u6309\u5B9E\u9645\u53C2\u6570\u8C03\u6574\u3002","\u65E0\u8BBE\u5907","\u5DF2\u5360\u7528\u901A\u9053","\u65B9\u6848\u6570\u636E\u65E0\u6548\uFF0C\u8BF7\u68C0\u67E5\u623F\u95F4\u5C3A\u5BF8\u3001\u8BBE\u5907\u4E0E\u8986\u76D6\u534A\u5F84\u3002","\u6709\u8BBE\u5907\u4F4D\u4E8E\u623F\u95F4\u5916\uFF0C\u8BF7\u5148\u5728 2D \u4E2D\u79FB\u56DE\u623F\u95F4\u5185\u518D\u6253\u5F00 3D\u3002","\u4E0D\u652F\u6301\u6B64\u65B9\u6848\u7248\u672C\uFF0C\u8BF7\u4ECE\u66F4\u65B0\u540E\u7684 2D \u9875\u9762\u91CD\u65B0\u6253\u5F00\u3002"],hu:["Dante mennyezeti mikrofon","Dante mennyezeti mikrofon","Dante mennyezeti hangsz\xF3r\xF3","Dante interf\xE9szadapter","4 csatorn\xE1s Dante audioprocesszor","8 csatorn\xE1s Dante audioprocesszor","Modellsz\xE1mok megjelen\xEDt\xE9se","3D n\xE9zet","Referencia-konfigur\xE1ci\xF3. Saj\xE1t eszk\xF6z\xF6kn\xE9l m\xF3dos\xEDtsa a param\xE9tereket.","Nincs eszk\xF6z","foglalt csatorna","\xC9rv\xE9nytelen terv. Ellen\u0151rizze a m\xE9reteket, eszk\xF6z\xF6ket \xE9s sugarakat.","Egy eszk\xF6z a termen k\xEDv\xFCl van. Helyezze vissza a 2D n\xE9zetben.","Nem t\xE1mogatott tervverzi\xF3. Nyissa meg a friss\xEDtett 2D oldalr\xF3l."],it:["Microfono Dante a soffitto","Microfono Dante a soffitto","Altoparlante Dante a soffitto","Adattatore di interfaccia Dante","Processore audio Dante a 4 canali","Processore audio Dante a 8 canali","Mostra modelli","Vista 3D","Configurazione di riferimento. Adeguare i parametri ai dispositivi del cliente.","Nessun dispositivo","canali occupati","Piano non valido. Verificare dimensioni, dispositivi e raggi.","Un dispositivo \xE8 fuori dalla stanza. Spostarlo nel piano 2D.","Versione del piano non supportata. Riaprire dalla pagina 2D aggiornata."],es:["Micr\xF3fono Dante de techo","Micr\xF3fono Dante de techo","Altavoz Dante de techo","Adaptador de interfaz Dante","Procesador de audio Dante de 4 canales","Procesador de audio Dante de 8 canales","Mostrar modelos","Ver 3D","Configuraci\xF3n de referencia. Ajuste los par\xE1metros para los equipos del cliente.","Sin dispositivos","canales ocupados","Plan no v\xE1lido. Compruebe dimensiones, equipos y radios.","Hay un equipo fuera de la sala. Mu\xE9valo dentro en 2D.","Versi\xF3n no compatible. Abra el plan desde la p\xE1gina 2D actualizada."],ja:["Dante \u5929\u4E95\u30DE\u30A4\u30AF","Dante \u5929\u4E95\u30DE\u30A4\u30AF","Dante \u5929\u4E95\u30B9\u30D4\u30FC\u30AB\u30FC","Dante \u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u30A2\u30C0\u30D7\u30BF\u30FC","4\u30C1\u30E3\u30F3\u30CD\u30EB Dante \u97F3\u58F0\u30D7\u30ED\u30BB\u30C3\u30B5\u30FC","8\u30C1\u30E3\u30F3\u30CD\u30EB Dante \u97F3\u58F0\u30D7\u30ED\u30BB\u30C3\u30B5\u30FC","\u578B\u756A\u3092\u8868\u793A","3D \u3092\u8868\u793A","\u53C2\u8003\u69CB\u6210\u3067\u3059\u3002\u304A\u5BA2\u69D8\u306E\u6A5F\u5668\u306B\u5408\u308F\u305B\u3066\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3092\u8ABF\u6574\u3057\u3066\u304F\u3060\u3055\u3044\u3002","\u30C7\u30D0\u30A4\u30B9\u306A\u3057","\u4F7F\u7528\u30C1\u30E3\u30F3\u30CD\u30EB","\u7121\u52B9\u306A\u30D7\u30E9\u30F3\u3067\u3059\u3002\u5BF8\u6CD5\u3001\u6A5F\u5668\u3001\u534A\u5F84\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002","\u5BA4\u5916\u306B\u6A5F\u5668\u304C\u3042\u308A\u307E\u3059\u30022D \u3067\u5BA4\u5185\u306B\u623B\u3057\u3066\u304F\u3060\u3055\u3044\u3002","\u672A\u5BFE\u5FDC\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3067\u3059\u3002\u66F4\u65B0\u3057\u305F 2D \u30DA\u30FC\u30B8\u304B\u3089\u958B\u304D\u76F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002"],ko:["Dante \uCC9C\uC7A5 \uB9C8\uC774\uD06C","Dante \uCC9C\uC7A5 \uB9C8\uC774\uD06C","Dante \uCC9C\uC7A5 \uC2A4\uD53C\uCEE4","Dante \uC778\uD130\uD398\uC774\uC2A4 \uC5B4\uB311\uD130","4\uCC44\uB110 Dante \uC624\uB514\uC624 \uD504\uB85C\uC138\uC11C","8\uCC44\uB110 Dante \uC624\uB514\uC624 \uD504\uB85C\uC138\uC11C","\uBAA8\uB378\uBA85 \uD45C\uC2DC","3D \uBCF4\uAE30","\uCC38\uACE0 \uAD6C\uC131\uC785\uB2C8\uB2E4. \uACE0\uAC1D \uC7A5\uBE44\uC758 \uC2E4\uC81C \uC0AC\uC591\uC5D0 \uB9DE\uAC8C \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC870\uC815\uD558\uC138\uC694.","\uC7A5\uCE58 \uC5C6\uC74C","\uC0AC\uC6A9 \uCC44\uB110","\uC798\uBABB\uB41C \uACC4\uD68D\uC785\uB2C8\uB2E4. \uD06C\uAE30, \uC7A5\uBE44, \uBC18\uACBD\uC744 \uD655\uC778\uD558\uC138\uC694.","\uBC29 \uBC16\uC5D0 \uC7A5\uBE44\uAC00 \uC788\uC2B5\uB2C8\uB2E4. 2D\uC5D0\uC11C \uC548\uC73C\uB85C \uC774\uB3D9\uD558\uC138\uC694.","\uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uBC84\uC804\uC785\uB2C8\uB2E4. \uC5C5\uB370\uC774\uD2B8\uB41C 2D \uD398\uC774\uC9C0\uC5D0\uC11C \uB2E4\uC2DC \uC5EC\uC138\uC694."],ar:["\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646 \u0633\u0642\u0641\u064A Dante","\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646 \u0633\u0642\u0641\u064A Dante","\u0645\u0643\u0628\u0631 \u0635\u0648\u062A \u0633\u0642\u0641\u064A Dante","\u0645\u062D\u0648\u0644 \u0648\u0627\u062C\u0647\u0629 Dante","\u0645\u0639\u0627\u0644\u062C \u0635\u0648\u062A Dante \u0628\u0623\u0631\u0628\u0639 \u0642\u0646\u0648\u0627\u062A","\u0645\u0639\u0627\u0644\u062C \u0635\u0648\u062A Dante \u0628\u062B\u0645\u0627\u0646\u064A \u0642\u0646\u0648\u0627\u062A","\u0625\u0638\u0647\u0627\u0631 \u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0637\u0631\u0627\u0632","\u0639\u0631\u0636 \u062B\u0644\u0627\u062B\u064A \u0627\u0644\u0623\u0628\u0639\u0627\u062F","\u062A\u0643\u0648\u064A\u0646 \u0645\u0631\u062C\u0639\u064A. \u0627\u0636\u0628\u0637 \u0627\u0644\u0645\u0639\u0644\u0645\u0627\u062A \u062D\u0633\u0628 \u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0639\u0645\u064A\u0644 \u0627\u0644\u0641\u0639\u0644\u064A\u0629.","\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u062C\u0647\u0632\u0629","\u0627\u0644\u0642\u0646\u0648\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0629","\u0627\u0644\u0645\u062E\u0637\u0637 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D. \u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0623\u0628\u0639\u0627\u062F \u0648\u0627\u0644\u0623\u062C\u0647\u0632\u0629 \u0648\u0623\u0646\u0635\u0627\u0641 \u0627\u0644\u0623\u0642\u0637\u0627\u0631.","\u064A\u0648\u062C\u062F \u062C\u0647\u0627\u0632 \u062E\u0627\u0631\u062C \u0627\u0644\u063A\u0631\u0641\u0629. \u0627\u0646\u0642\u0644\u0647 \u0625\u0644\u0649 \u0627\u0644\u062F\u0627\u062E\u0644 \u0641\u064A \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062B\u0646\u0627\u0626\u064A.","\u0625\u0635\u062F\u0627\u0631 \u063A\u064A\u0631 \u0645\u062F\u0639\u0648\u0645. \u0627\u0641\u062A\u062D \u0627\u0644\u0645\u062E\u0637\u0637 \u0645\u0646 \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062B\u0646\u0627\u0626\u064A\u0629 \u0627\u0644\u0645\u062D\u062F\u062B\u0629."]},t=["m100","m40","dc20","du11","dp44","dp88","showModels","open3d","reference","noDevices","channels","invalidSnapshot","snapshotBounds","snapshotVersion"],i={en:"One ceiling microphone can feed both remote audio and local PA. The PA circle covers talkers; ceiling speakers serve listeners. PA area alone does not determine microphone quantity.",zh:"\u540C\u4E00\u53F0\u5438\u9876\u9EA6\u53EF\u540C\u65F6\u7528\u4E8E\u8FDC\u7AEF\u62FE\u97F3\u548C\u672C\u5730\u6269\u58F0\u3002\u6269\u58F0\u62FE\u97F3\u5708\u5BF9\u5E94\u8BB2\u8BDD\u8005\u4F4D\u7F6E\uFF1B\u5B66\u751F\u542C\u97F3\u7531\u5438\u9876\u97F3\u7BB1\u8986\u76D6\u3002\u6269\u58F0\u62FE\u97F3\u9762\u79EF\u4E0D\u5355\u72EC\u51B3\u5B9A\u9EA6\u514B\u98CE\u6570\u91CF\u3002",hu:"A mikrofonok nem adnak ki hangot. A helyi hangos\xEDt\xE1shoz mennyezeti hangsz\xF3r\xF3k kellenek.",it:"I microfoni non emettono suono. La diffusione locale richiede altoparlanti a soffitto.",es:"Los micr\xF3fonos no emiten sonido. La amplificaci\xF3n local requiere altavoces de techo.",ja:"\u30DE\u30A4\u30AF\u81EA\u4F53\u306F\u97F3\u3092\u51FA\u3057\u307E\u305B\u3093\u3002\u5BA4\u5185\u62E1\u58F0\u306B\u306F\u5929\u4E95\u30B9\u30D4\u30FC\u30AB\u30FC\u304C\u5FC5\u8981\u3067\u3059\u3002",ko:"\uB9C8\uC774\uD06C \uC790\uCCB4\uB294 \uC18C\uB9AC\uB97C \uB0B4\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC2E4\uB0B4 \uD655\uC131\uC5D0\uB294 \uCC9C\uC7A5 \uC2A4\uD53C\uCEE4\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.",ar:"\u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646\u0627\u062A \u0644\u0627 \u062A\u0635\u062F\u0631 \u0635\u0648\u062A\u064B\u0627. \u064A\u062A\u0637\u0644\u0628 \u0627\u0644\u062A\u0636\u062E\u064A\u0645 \u0627\u0644\u0645\u062D\u0644\u064A \u0645\u0643\u0628\u0631\u0627\u062A \u0635\u0648\u062A \u0633\u0642\u0641\u064A\u0629."};n.presentationCopy=s=>Object.fromEntries(t.map((r,o)=>[r,(e[s]||e.en)[o]])),n.audioName=(s,r="en",o=!1)=>{let a=s.toLowerCase();return n.presentationCopy(r)[a]+(o?` (${a.toUpperCase()})`:"")},n.presentText=(s,r,o=!1)=>String(s).replace(/AISpeech|AI Speech|思必驰/gi,"Dante").replace(/\b(M100|M40|DC20|DU11|DP44|DP88)(?:s)?\b/g,(a,c)=>n.audioName(c,r,o)),n.presentCopy=(s,r,o)=>Object.fromEntries(Object.entries(s).map(([a,c])=>[a,["warnTitle","paNote"].includes(a)?i[r]||i.en:typeof c=="string"?n.presentText(c,r,o):c]))})(window.AISpeech=window.AISpeech||{});(function(n){let e=n.state;function t(a,c,l){return Math.max(c,Math.min(l,a))}function i(a,c,l){if(a<=0)return[];if(a===1)return[{x:c/2,y:l/2}];let u=Math.max(1,Math.round(Math.sqrt(a*(c/Math.max(l,.1))))),h=Math.max(1,Math.ceil(a/u)),d=[];for(let f=0;f<h&&d.length<a;f++){let g=a-d.length,_=Math.min(u,g),m=_/u*c,p=(c-m)/2;for(let v=0;v<_&&d.length<a;v++)d.push({x:p+(v+.5)*c/u,y:(f+.5)*l/h})}return d}function s(a,c){return c.map(l=>({id:n.idCounter++,type:a,x:t(l.x,0,e.roomLength),y:t(l.y,0,e.roomWidth)}))}function r(a){return n.coverageForPlan(e.roomLength,e.roomWidth,a,e.radii,{},e.heightProfile)}function o(){let a=e.roomLength,c=e.roomWidth,u=a*c<=35&&Math.max(a,c)<=7,h=75,d=[],f=-1;if(u){for(let g=1;g<=2;g++){let _=s("m40",i(g,a,c)),m=r(_),p=m.mic*2+m.pa;if(p>f&&(f=p,d=_),m.mic>=h&&m.pa>=75)return _}return d}for(let g=1;g<=8;g++){let _=s("m100",i(g,a,c)),m=r(_),p=m.mic*2-(g-1)*35;if(p>f&&(f=p,d=_),m.mic>=h)return _}return d}n.clamp=t,n.createGridPositions=i,n.makeDevices=s,n.estimateCoverageForDevices=r,n.planMicrophoneDevices=o})(window.AISpeech);(function(n){let e=n.state,t=(...d)=>n.clamp(...d),i=(...d)=>n.createGridPositions(...d),s=(...d)=>n.makeDevices(...d),r=(...d)=>n.estimateCoverageForDevices(...d);function o(d,f){let _=d.x,m=d.y;for(let p=0;p<8;p++){let v=null,M=1/0;if(f.forEach(C=>{let I=_-C.x,w=m-C.y,E=Math.sqrt(I*I+w*w);E<M&&(v=C,M=E)}),!v||M>=2)break;let x=_-v.x,b=m-v.y;M<.01&&(x=_-e.roomLength/2||1,b=m-e.roomWidth/2||1,M=Math.sqrt(x*x+b*b));let A=2-M+.15;_+=x/M*A,m+=b/M*A,_=t(_,.3,Math.max(.3,e.roomLength-.3)),m=t(m,.3,Math.max(.3,e.roomWidth-.3))}return{x:_,y:m}}function a(d){let f=[];for(let g=0;g<=e.roomLength;g+=d)for(let _=0;_<=e.roomWidth;_+=d)f.push({x:g,y:_,covered:!1});return f}function c(d,f,g){return f.every(_=>{let m=d.x-_.x,p=d.y-_.y;return Math.sqrt(m*m+p*p)>=g})}function l(d){let g=Math.max(.5,Math.min(1,Math.max(e.roomLength,e.roomWidth)/24)),_=Math.min(.5,e.roomLength/4,e.roomWidth/4),m=[];for(let p=_;p<=e.roomLength-_+.001;p+=g)for(let v=_;v<=e.roomWidth-_+.001;v+=g){let M={x:p,y:v};c(M,d,2)&&m.push(M)}for(let p=1;p<=30;p++)i(p,e.roomLength,e.roomWidth).forEach(v=>{let M=o(v,d);m.push(M)});return m}function u(d,f){let g=a(.5),_=l(f),m=[],p=new Set,v=e.radii.dc20*e.radii.dc20;for(let M=0;M<d;M++){let x=null,b=-1,A="";if(_.forEach(C=>{let I=`${C.x.toFixed(2)},${C.y.toFixed(2)}`;if(p.has(I))return;let w=0;g.forEach(E=>{if(E.covered)return;let D=E.x-C.x,F=E.y-C.y;D*D+F*F<=v&&w++}),w>b&&(b=w,x=C,A=I)}),!x)break;m.push(x),p.add(A),g.forEach(C=>{if(C.covered)return;let I=C.x-x.x,w=C.y-x.y;I*I+w*w<=v&&(C.covered=!0)})}return m}function h(d){let f=e.roomLength*e.roomWidth,g=Math.max(1,Math.ceil(f/30)),_=f>=70&&f<=110&&Math.min(e.roomLength,e.roomWidth)>=8?4:0,m=Math.max(1,g-1,_),p=80,v=[],M=-1;for(let x=m;x<=30;x++){let b=u(x,d),A=s("dc20",b),C=r([...d,...A]),I=i(x,e.roomLength,e.roomWidth).map(D=>o(D,d)),w=s("dc20",I),E=r([...d,...w]);if(E.speaker>=C.speaker&&(A=w,C=E),C.speaker>M&&(M=C.speaker,v=A),C.speaker>=p)return A}return v}n.keepSpeakerAwayFromMicrophones=o,n.createCoverageSamples=a,n.isFarEnoughFromMicrophones=c,n.createSpeakerCandidates=l,n.optimizeSpeakerPositions=u,n.planSpeakerDevices=h})(window.AISpeech);(function(n){let e=n.state,t=(...a)=>n.renderRoom(...a),i=(...a)=>n.planMicrophoneDevices(...a),s=(...a)=>n.planSpeakerDevices(...a);function r(a=n.audioRequest(e)){if(a.mode==="fixed")return n.fixedAudioDevices(a.counts);let c=i(),l=s(c);return[...c,...l]}function o(){let a=n.audioRequest(e);e.devices=r(a),n.commitAudioLayout(e,a),document.getElementById("presetSelect").value="custom",t()}n.buildProductRecommendation=r,n.recalculateProductPlan=o})(window.AISpeech);var et=window.AISpeech,xh=Object.freeze({medium:[8,10,3],standard:[10,10,3],large:[10,14,3.4],step:[10,20,3.6],small:[5,6,2.8]});function yh(n,e,t,i=null,s={mode:"auto"}){let r=i||{mode:"uniform",front:t,rear:t,split:e/2,drop:0,manualPickup:null,manualPA:null};Object.assign(et.state,{roomLength:n,roomWidth:e,height:t,heightProfile:r}),Object.assign(et.state.radii,et.radiiForHeight(r.front,r.drop)),r.manualPickup!==null&&(et.state.radii.m100Pickup=r.manualPickup),r.manualPA!==null&&(et.state.radii.m100PA=r.manualPA),et.idCounter=0;let o=et.buildProductRecommendation(s).map(({type:u,x:h,y:d},f)=>({id:`${u}-${f+1}`,type:u,x:h,y:d}));o.forEach((u,h)=>{Object.defineProperty(u,"number",{value:o.slice(0,h+1).filter(d=>["m100","m40"].includes(u.type)?["m100","m40"].includes(d.type):d.type===u.type).length})}),et.state.devices=o,et.commitAudioLayout(et.state,s);let a=et.auxiliaryDisplaysForWidth(e,n),c=et.estimateCoverageForDevices(o),l=et.configuredBOM({...et.state,roomLength:n,roomWidth:e,devices:o,auxDisplays:a});return{length:n,width:e,height:t,audioLayout:et.state.audioLayout,heightProfile:{...r},devices:o,displays:a,coverage:c,bom:l,radii:{...et.state.radii}}}function vh(n){let e=et.validateSnapshot(n);e.devices.forEach((i,s)=>{Object.defineProperty(i,"number",{value:e.devices.slice(0,s+1).filter(r=>["m100","m40"].includes(i.type)?["m100","m40"].includes(r.type):r.type===i.type).length})});let t=e.heightProfile||{mode:"uniform",front:e.height,rear:e.height,split:e.width/2,drop:0,manualPickup:null,manualPA:null,legacy:!0};return{...e,audioLayout:e.audioLayout||{mode:"fixed",counts:et.audioCounts(e.devices)},heightProfile:t,coverage:et.coverageForPlan(e.length,e.width,e.devices,e.radii,e.show,t),bom:e.equipment?et.configuredBOM({...e,roomLength:e.length,roomWidth:e.width,auxDisplays:e.displays}):et.bomForPlan(e.length,e.width,e.devices,e.displays)}}function Gr(n,e,t,i=0){return[e-n.length/2,i,t-n.width/2]}function Mh(n,e){Object.assign(et.state,{roomLength:n.length,roomWidth:n.width,height:n.height,heightProfile:n.heightProfile,radii:{...n.radii}}),et.idCounter=0;let t=et.buildProductRecommendation(e).map((i,s)=>({...i,id:`audio-${s+1}`}));return t.forEach((i,s)=>Object.defineProperty(i,"number",{value:t.slice(0,s+1).filter(r=>i.type==="dc20"?r.type==="dc20":r.type!=="dc20").length})),{...n,devices:t,audioDraft:null,audioLayout:{mode:e.mode,counts:et.audioCounts(t)},coverage:et.coverageForPlan(n.length,n.width,t,n.radii,n.show,n.heightProfile),bom:n.equipment?et.configuredBOM({...n,devices:t,roomLength:n.length,roomWidth:n.width,auxDisplays:n.displays}):et.bomForPlan(n.length,n.width,t,n.displays)}}var ci={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qh=0,nc=1,eu=2;var ic=1,tu=2,Tn=3,Gn=0,Xt=1,ht=2,qn=0,Ei=1,sc=2,rc=3,oc=4,nu=5,ii=100,iu=101,su=102,ru=103,ou=104,au=200,lu=201,cu=202,hu=203,xo=204,yo=205,uu=206,du=207,fu=208,pu=209,mu=210,gu=211,_u=212,xu=213,yu=214,$o=0,Zo=1,jo=2,wi=3,Jo=4,Ko=5,Qo=6,ea=7,ac=0,vu=1,Mu=2,Xn=0,Su=1,bu=2,Eu=3,ta=4,wu=5,Tu=6,Au=7;var lc=300,Li=301,Ni=302,na=303,ia=304,Er=306,vo=1e3,ni=1001,Mo=1002,$t=1003,Cu=1004;var wr=1005;var on=1006,sa=1007;var An=1008;var vn=1009,cc=1010,hc=1011,vs=1012,ra=1013,ui=1014,Cn=1015,Ms=1016,oa=1017,aa=1018,Ss=1020,uc=35902,dc=35899,fc=1021,pc=1022,Jt=1023,ls=1026,bs=1027,mc=1028,la=1029,gc=1030,ca=1031;var ha=1033,Tr=33776,Ar=33777,Cr=33778,Rr=33779,ua=35840,da=35841,fa=35842,pa=35843,ma=36196,ga=37492,_a=37496,xa=37808,ya=37809,va=37810,Ma=37811,Sa=37812,ba=37813,Ea=37814,wa=37815,Ta=37816,Aa=37817,Ca=37818,Ra=37819,Pa=37820,Da=37821,Ia=36492,La=36494,Na=36495,Ua=36283,Fa=36284,Oa=36285,Ba=36286;var Gs=2300,So=2301,_o=2302,Wl=2400,ql=2401,Xl=2402;var Ru=3200,Pu=3201;var _c=0,Du=1,Yn="",Et="srgb",Ti="srgb-linear",Ws="linear",Ke="srgb";var bi=7680;var Yl=519,Iu=512,Lu=513,Nu=514,xc=515,Uu=516,Fu=517,Ou=518,Bu=519,$l=35044;var yc="300 es",_n=2e3,qs=2001;var bn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sh=1234567,rs=Math.PI/180,cs=180/Math.PI;function Ui(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function ke(n,e,t){return Math.max(e,Math.min(t,n))}function vc(n,e){return(n%e+e)%e}function uf(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function df(n,e,t){return n!==e?(t-n)/(e-n):0}function ks(n,e,t){return(1-t)*n+t*e}function ff(n,e,t,i){return ks(n,e,1-Math.exp(-t*i))}function pf(n,e=1){return e-Math.abs(vc(n,e*2)-e)}function mf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function gf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function _f(n,e){return n+Math.floor(Math.random()*(e-n+1))}function xf(n,e){return n+Math.random()*(e-n)}function yf(n){return n*(.5-Math.random())}function vf(n){n!==void 0&&(Sh=n);let e=Sh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Mf(n){return n*rs}function Sf(n){return n*cs}function bf(n){return(n&n-1)===0&&n!==0}function Ef(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function wf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Tf(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,c*h,c*d,a*l);break;case"YZY":n.set(c*d,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*d,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ss(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Mc={DEG2RAD:rs,RAD2DEG:cs,generateUUID:Ui,clamp:ke,euclideanModulo:vc,mapLinear:uf,inverseLerp:df,lerp:ks,damp:ff,pingpong:pf,smoothstep:mf,smootherstep:gf,randInt:_f,randFloat:xf,randFloatSpread:yf,seededRandom:vf,degToRad:Mf,radToDeg:Sf,isPowerOfTwo:bf,ceilPowerOfTwo:Ef,floorPowerOfTwo:wf,setQuaternionFromProperEuler:Tf,normalize:Wt,denormalize:ss},re=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let m=1-a,p=c*d+l*f+u*g+h*_,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let b=Math.sqrt(M),A=Math.atan2(b,p*v);m=Math.sin(m*A)/b,a=Math.sin(a*A)/b}let x=a*v;if(c=c*m+d*x,l=l*m+f*x,u=u*m+g*x,h=h*m+_*x,m===1-a){let b=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=b,l*=b,u*=b,h*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>h){let f=2*Math.sqrt(1+i-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){let f=2*Math.sqrt(1+a-i-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _l.copy(this).projectOnVector(e),this.sub(_l)}reflect(e){return this.sub(_l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_l=new R,bh=new Zt,Oe=class n{constructor(e,t,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],v=s[1],M=s[4],x=s[7],b=s[2],A=s[5],C=s[8];return r[0]=o*_+a*v+c*b,r[3]=o*m+a*M+c*A,r[6]=o*p+a*x+c*C,r[1]=l*_+u*v+h*b,r[4]=l*m+u*M+h*A,r[7]=l*p+u*x+h*C,r[2]=d*_+f*v+g*b,r[5]=d*m+f*M+g*A,r[8]=d*p+f*x+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=t*h+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=h*_,e[1]=(s*l-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xl.makeScale(e,t)),this}rotate(e){return this.premultiply(xl.makeRotation(-e)),this}translate(e,t){return this.premultiply(xl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},xl=new Oe;function Sc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Xs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function zu(){let n=Xs("canvas");return n.style.display="block",n}var Eh={};function hs(n){n in Eh||(Eh[n]=!0,console.warn(n))}function ku(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var wh=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Th=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Af(){let n={enabled:!0,workingColorSpace:Ti,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ke&&(s.r=Vn(s.r),s.g=Vn(s.g),s.b=Vn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ke&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yn?Ws:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return hs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return hs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ti]:{primaries:e,whitePoint:i,transfer:Ws,toXYZ:wh,fromXYZ:Th,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:e,whitePoint:i,transfer:Ke,toXYZ:wh,fromXYZ:Th,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}}),n}var Ye=Af();function Vn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function os(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Xi,bo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xi===void 0&&(Xi=Xs("canvas")),Xi.width=e.width,Xi.height=e.height;let s=Xi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Xi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Xs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vn(t[i]/255)*255):t[i]=Vn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Cf=0,us=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(yl(s[o].image)):r.push(yl(s[o]))}else r=yl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function yl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Rf=0,vl=new R,qt=class n extends bn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ni,s=ni,r=on,o=An,a=Jt,c=vn,l=n.DEFAULT_ANISOTROPY,u=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Ui(),this.name="",this.source=new us(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vl).x}get height(){return this.source.getSize(vl).y}get depth(){return this.source.getSize(vl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vo:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case Mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vo:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case Mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=lc;qt.DEFAULT_ANISOTROPY=1;var yt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,x=(f+1)/2,b=(p+1)/2,A=(u+d)/4,C=(h+_)/4,I=(g+m)/4;return M>x&&M>b?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=A/i,r=C/i):x>b?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=A/s,r=I/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=C/r,s=I/r),this.set(i,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Eo=class extends bn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new qt(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new us(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},En=class extends Eo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ys=class extends qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var wo=class extends qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var si=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pn):pn.fromBufferAttribute(r,o),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wr.copy(i.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ns),qr.subVectors(this.max,Ns),Yi.subVectors(e.a,Ns),$i.subVectors(e.b,Ns),Zi.subVectors(e.c,Ns),jn.subVectors($i,Yi),Jn.subVectors(Zi,$i),yi.subVectors(Yi,Zi);let t=[0,-jn.z,jn.y,0,-Jn.z,Jn.y,0,-yi.z,yi.y,jn.z,0,-jn.x,Jn.z,0,-Jn.x,yi.z,0,-yi.x,-jn.y,jn.x,0,-Jn.y,Jn.x,0,-yi.y,yi.x,0];return!Ml(t,Yi,$i,Zi,qr)||(t=[1,0,0,0,1,0,0,0,1],!Ml(t,Yi,$i,Zi,qr))?!1:(Xr.crossVectors(jn,Jn),t=[Xr.x,Xr.y,Xr.z],Ml(t,Yi,$i,Zi,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Fn=[new R,new R,new R,new R,new R,new R,new R,new R],pn=new R,Wr=new si,Yi=new R,$i=new R,Zi=new R,jn=new R,Jn=new R,yi=new R,Ns=new R,qr=new R,Xr=new R,vi=new R;function Ml(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){vi.fromArray(n,r);let a=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),c=e.dot(vi),l=t.dot(vi),u=i.dot(vi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Pf=new si,Us=new R,Sl=new R,Ai=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Pf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);let t=Us.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Us,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(Sl)),this.expandByPoint(Us.copy(e.center).sub(Sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},On=new R,bl=new R,Yr=new R,Kn=new R,El=new R,$r=new R,wl=new R,ri=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){bl.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(bl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Yr),a=Kn.dot(this.direction),c=-Kn.dot(Yr),l=Kn.lengthSq(),u=Math.abs(1-o*o),h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){let _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(bl).addScaledVector(Yr,d),f}intersectSphere(e,t){On.subVectors(e.center,this.origin);let i=On.dot(this.direction),s=On.dot(On)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,i,s,r){El.subVectors(t,e),$r.subVectors(i,e),wl.crossVectors(El,$r);let o=this.direction.dot(wl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,e);let c=a*this.direction.dot($r.crossVectors(Kn,$r));if(c<0)return null;let l=a*this.direction.dot(El.cross(Kn));if(l<0||c+l>o)return null;let u=-a*Kn.dot(wl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pt=class n{constructor(e,t,i,s,r,o,a,c,l,u,h,d,f,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,h,d,f,g,_,m)}set(e,t,i,s,r,o,a,c,l,u,h,d,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/ji.setFromMatrixColumn(e,0).length(),r=1/ji.setFromMatrixColumn(e,1).length(),o=1/ji.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Df,e,If)}lookAt(e,t,i){let s=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Qn.crossVectors(i,nn),Qn.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Qn.crossVectors(i,nn)),Qn.normalize(),Zr.crossVectors(nn,Qn),s[0]=Qn.x,s[4]=Zr.x,s[8]=nn.x,s[1]=Qn.y,s[5]=Zr.y,s[9]=nn.y,s[2]=Qn.z,s[6]=Zr.z,s[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],v=i[3],M=i[7],x=i[11],b=i[15],A=s[0],C=s[4],I=s[8],w=s[12],E=s[1],D=s[5],F=s[9],k=s[13],H=s[2],X=s[6],W=s[10],ne=s[14],V=s[3],ae=s[7],ue=s[11],Ee=s[15];return r[0]=o*A+a*E+c*H+l*V,r[4]=o*C+a*D+c*X+l*ae,r[8]=o*I+a*F+c*W+l*ue,r[12]=o*w+a*k+c*ne+l*Ee,r[1]=u*A+h*E+d*H+f*V,r[5]=u*C+h*D+d*X+f*ae,r[9]=u*I+h*F+d*W+f*ue,r[13]=u*w+h*k+d*ne+f*Ee,r[2]=g*A+_*E+m*H+p*V,r[6]=g*C+_*D+m*X+p*ae,r[10]=g*I+_*F+m*W+p*ue,r[14]=g*w+_*k+m*ne+p*Ee,r[3]=v*A+M*E+x*H+b*V,r[7]=v*C+M*D+x*X+b*ae,r[11]=v*I+M*F+x*W+b*ue,r[15]=v*w+M*k+x*ne+b*Ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*h-s*l*h-r*a*d+i*l*d+s*a*f-i*c*f)+_*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+m*(+t*l*h-t*a*f-r*o*h+i*o*f+r*a*u-i*l*u)+p*(-s*a*u-t*c*h+t*a*d+s*o*h-i*o*d+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=h*m*l-_*d*l+_*c*f-a*m*f-h*c*p+a*d*p,M=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,x=u*_*l-g*h*l+g*a*f-o*_*f-u*a*p+o*h*p,b=g*h*c-u*_*c-g*a*d+o*_*d+u*a*m-o*h*m,A=t*v+i*M+s*x+r*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return e[0]=v*C,e[1]=(_*d*r-h*m*r-_*s*f+i*m*f+h*s*p-i*d*p)*C,e[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*p+i*c*p)*C,e[3]=(h*c*r-a*d*r-h*s*l+i*d*l+a*s*f-i*c*f)*C,e[4]=M*C,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*C,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*C,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*f+t*c*f)*C,e[8]=x*C,e[9]=(g*h*r-u*_*r-g*i*f+t*_*f+u*i*p-t*h*p)*C,e[10]=(o*_*r-g*a*r+g*i*l-t*_*l-o*i*p+t*a*p)*C,e[11]=(u*a*r-o*h*r-u*i*l+t*h*l+o*i*f-t*a*f)*C,e[12]=b*C,e[13]=(u*_*s-g*h*s+g*i*d-t*_*d-u*i*m+t*h*m)*C,e[14]=(g*a*s-o*_*s-g*i*c+t*_*c+o*i*m-t*a*m)*C,e[15]=(o*h*s-u*a*s+u*i*c-t*h*c-o*i*d+t*a*d)*C,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,v=c*l,M=c*u,x=c*h,b=i.x,A=i.y,C=i.z;return s[0]=(1-(_+p))*b,s[1]=(f+x)*b,s[2]=(g-M)*b,s[3]=0,s[4]=(f-x)*A,s[5]=(1-(d+p))*A,s[6]=(m+v)*A,s[7]=0,s[8]=(g+M)*C,s[9]=(m-v)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=ji.set(s[0],s[1],s[2]).length(),o=ji.set(s[4],s[5],s[6]).length(),a=ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],mn.copy(this);let l=1/r,u=1/o,h=1/a;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=h,mn.elements[9]*=h,mn.elements[10]*=h,t.setFromRotationMatrix(mn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=_n,c=!1){let l=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===_n)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===qs)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=_n,c=!1){let l=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===_n)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===qs)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ji=new R,mn=new pt,Df=new R(0,0,0),If=new R(1,1,1),Qn=new R,Zr=new R,nn=new R,Ah=new pt,Ch=new Zt,an=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ah.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ah,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ch.setFromEuler(this),this.setFromQuaternion(Ch,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};an.DEFAULT_ORDER="XYZ";var ds=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Lf=0,Rh=new R,Ji=new Zt,Bn=new pt,jr=new R,Fs=new R,Nf=new R,Uf=new Zt,Ph=new R(1,0,0),Dh=new R(0,1,0),Ih=new R(0,0,1),Lh={type:"added"},Ff={type:"removed"},Ki={type:"childadded",child:null},Tl={type:"childremoved",child:null},Nt=class n extends bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new R,t=new an,i=new Zt,s=new R(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new Oe}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ds,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(Ph,e)}rotateY(e){return this.rotateOnAxis(Dh,e)}rotateZ(e){return this.rotateOnAxis(Ih,e)}translateOnAxis(e,t){return Rh.copy(e).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ph,e)}translateY(e){return this.translateOnAxis(Dh,e)}translateZ(e){return this.translateOnAxis(Ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?jr.copy(e):jr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Fs,jr,this.up):Bn.lookAt(jr,Fs,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(Bn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lh),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ff),Tl.child=e,this.dispatchEvent(Tl),Tl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lh),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,Nf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,Uf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Nt.DEFAULT_UP=new R(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gn=new R,zn=new R,Al=new R,kn=new R,Qi=new R,es=new R,Nh=new R,Cl=new R,Rl=new R,Pl=new R,Dl=new yt,Il=new yt,Ll=new yt,Hn=class n{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),gn.subVectors(e,t),s.cross(gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){gn.subVectors(s,t),zn.subVectors(i,t),Al.subVectors(e,t);let o=gn.dot(gn),a=gn.dot(zn),c=gn.dot(Al),l=zn.dot(zn),u=zn.dot(Al),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,kn.x),c.addScaledVector(o,kn.y),c.addScaledVector(a,kn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Dl.setScalar(0),Il.setScalar(0),Ll.setScalar(0),Dl.fromBufferAttribute(e,t),Il.fromBufferAttribute(e,i),Ll.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Dl,r.x),o.addScaledVector(Il,r.y),o.addScaledVector(Ll,r.z),o}static isFrontFacing(e,t,i,s){return gn.subVectors(i,t),zn.subVectors(e,t),gn.cross(zn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),gn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Qi.subVectors(s,i),es.subVectors(r,i),Cl.subVectors(e,i);let c=Qi.dot(Cl),l=es.dot(Cl);if(c<=0&&l<=0)return t.copy(i);Rl.subVectors(e,s);let u=Qi.dot(Rl),h=es.dot(Rl);if(u>=0&&h<=u)return t.copy(s);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Qi,o);Pl.subVectors(e,r);let f=Qi.dot(Pl),g=es.dot(Pl);if(g>=0&&f<=g)return t.copy(r);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(es,a);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Nh.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(Nh,a);let p=1/(m+_+d);return o=_*p,a=d*p,t.copy(i).addScaledVector(Qi,o).addScaledVector(es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function Nl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ue=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ye.workingColorSpace){if(e=vc(e,1),t=ke(t,0,1),i=ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Nl(o,r,e+1/3),this.g=Nl(o,r,e),this.b=Nl(o,r,e-1/3)}return Ye.colorSpaceToWorking(this,s),this}setStyle(e,t=Et){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let i=Hu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vn(e.r),this.g=Vn(e.g),this.b=Vn(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return Ye.workingToColorSpace(Bt.copy(this),e),Math.round(ke(Bt.r*255,0,255))*65536+Math.round(ke(Bt.g*255,0,255))*256+Math.round(ke(Bt.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Bt.copy(this),t);let i=Bt.r,s=Bt.g,r=Bt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Et){Ye.workingToColorSpace(Bt.copy(this),e);let t=Bt.r,i=Bt.g,s=Bt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(Jr);let i=ks(ei.h,Jr.h,t),s=ks(ei.s,Jr.s,t),r=ks(ei.l,Jr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bt=new Ue;Ue.NAMES=Hu;var Of=0,Wn=class extends bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=Ei,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xo,this.blendDst=yo,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(i.blending=this.blending),this.side!==Gn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xo&&(i.blendSrc=this.blendSrc),this.blendDst!==yo&&(i.blendDst=this.blendDst),this.blendEquation!==ii&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Dt=class extends Wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var bt=new R,Kr=new re,Bf=0,rn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=$l,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix3(e),this.setXY(t,Kr.x,Kr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ss(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ss(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ss(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ss(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ss(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),s=Wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),s=Wt(s,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$l&&(e.usage=this.usage),e}};var $s=class extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Zs=class extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Xe=class extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}},zf=0,fn=new pt,Ul=new Nt,ts=new R,sn=new si,Os=new si,Pt=new R,mt=class n extends bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sc(e)?Zs:$s)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Oe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,i){return fn.makeTranslation(e,t,i),this.applyMatrix4(fn),this}scale(e,t,i){return fn.makeScale(e,t,i),this.applyMatrix4(fn),this}lookAt(e){return Ul.lookAt(e),Ul.updateMatrix(),this.applyMatrix4(Ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xe(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Os.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(sn.min,Os.min),sn.expandByPoint(Pt),Pt.addVectors(sn.max,Os.max),sn.expandByPoint(Pt)):(sn.expandByPoint(Os.min),sn.expandByPoint(Os.max))}sn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Pt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Pt.fromBufferAttribute(a,l),c&&(ts.fromBufferAttribute(e,l),Pt.add(ts)),s=Math.max(s,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<i.count;I++)a[I]=new R,c[I]=new R;let l=new R,u=new R,h=new R,d=new re,f=new re,g=new re,_=new R,m=new R;function p(I,w,E){l.fromBufferAttribute(i,I),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,E),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,E),u.sub(l),h.sub(l),f.sub(d),g.sub(d);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(D),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),a[I].add(_),a[w].add(_),a[E].add(_),c[I].add(m),c[w].add(m),c[E].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let I=0,w=v.length;I<w;++I){let E=v[I],D=E.start,F=E.count;for(let k=D,H=D+F;k<H;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let M=new R,x=new R,b=new R,A=new R;function C(I){b.fromBufferAttribute(s,I),A.copy(b);let w=a[I];M.copy(w),M.sub(b.multiplyScalar(b.dot(w))).normalize(),x.crossVectors(A,w);let D=x.dot(c[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,D)}for(let I=0,w=v.length;I<w;++I){let E=v[I],D=E.start,F=E.count;for(let k=D,H=D+F;k<H;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,u=new R,h=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u),f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new rn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uh=new pt,Mi=new ri,Qr=new Ai,Fh=new R,eo=new R,to=new R,no=new R,Fl=new R,io=new R,Oh=new R,so=new R,Le=class extends Nt{constructor(e=new mt,t=new Dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){io.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(Fl.fromBufferAttribute(h,e),o?io.addScaledVector(Fl,u):io.addScaledVector(Fl.sub(t),u))}t.add(io)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(r),Mi.copy(e.ray).recast(e.near),!(Qr.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Qr,Fh)===null||Mi.origin.distanceToSquared(Fh)>(e.far-e.near)**2))&&(Uh.copy(r).invert(),Mi.copy(e.ray).applyMatrix4(Uh),!(i.boundingBox!==null&&Mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,b=M;x<b;x+=3){let A=a.getX(x),C=a.getX(x+1),I=a.getX(x+2);s=ro(this,p,e,i,l,u,h,A,C,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let v=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);s=ro(this,o,e,i,l,u,h,v,M,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,b=M;x<b;x+=3){let A=x,C=x+1,I=x+2;s=ro(this,p,e,i,l,u,h,A,C,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let v=m,M=m+1,x=m+2;s=ro(this,o,e,i,l,u,h,v,M,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function kf(n,e,t,i,s,r,o,a){let c;if(e.side===Xt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Gn,a),c===null)return null;so.copy(a),so.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(so);return l<t.near||l>t.far?null:{distance:l,point:so.clone(),object:n}}function ro(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,eo),n.getVertexPosition(c,to),n.getVertexPosition(l,no);let u=kf(n,e,t,i,eo,to,no,Oh);if(u){let h=new R;Hn.getBarycoord(Oh,eo,to,no,h),s&&(u.uv=Hn.getInterpolatedAttribute(s,a,c,l,h,new re)),r&&(u.uv1=Hn.getInterpolatedAttribute(r,a,c,l,h,new re)),o&&(u.normal=Hn.getInterpolatedAttribute(o,a,c,l,h,new R),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new R,materialIndex:0};Hn.getNormal(eo,to,no,d.normal),u.face=d,u.barycoord=h}return u}var ct=class n extends mt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Xe(l,3)),this.setAttribute("normal",new Xe(u,3)),this.setAttribute("uv",new Xe(h,2));function g(_,m,p,v,M,x,b,A,C,I,w){let E=x/C,D=b/I,F=x/2,k=b/2,H=A/2,X=C+1,W=I+1,ne=0,V=0,ae=new R;for(let ue=0;ue<W;ue++){let Ee=ue*D-k;for(let Ve=0;Ve<X;Ve++){let rt=Ve*E-F;ae[_]=rt*v,ae[m]=Ee*M,ae[p]=H,l.push(ae.x,ae.y,ae.z),ae[_]=0,ae[m]=0,ae[p]=A>0?1:-1,u.push(ae.x,ae.y,ae.z),h.push(Ve/C),h.push(1-ue/I),ne+=1}}for(let ue=0;ue<I;ue++)for(let Ee=0;Ee<C;Ee++){let Ve=d+Ee+X*ue,rt=d+Ee+X*(ue+1),ut=d+(Ee+1)+X*(ue+1),Ze=d+(Ee+1)+X*ue;c.push(Ve,rt,Ze),c.push(rt,ut,Ze),V+=6}a.addGroup(f,V,w),f+=V,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Fi(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function kt(n){let e={};for(let t=0;t<n.length;t++){let i=Fi(n[t]);for(let s in i)e[s]=i[s]}return e}function Hf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}var Vu={clone:Fi,merge:kt},Vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends Wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vf,this.fragmentShader=Gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fi(e.uniforms),this.uniformsGroups=Hf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},js=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=_n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ti=new R,Bh=new re,zh=new re,zt=class extends js{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,Bh,zh),t.subVectors(zh,Bh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ns=-90,is=1,To=class extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zt(ns,is,e,t);s.layers=this.layers,this.add(s);let r=new zt(ns,is,e,t);r.layers=this.layers,this.add(r);let o=new zt(ns,is,e,t);o.layers=this.layers,this.add(o);let a=new zt(ns,is,e,t);a.layers=this.layers,this.add(a);let c=new zt(ns,is,e,t);c.layers=this.layers,this.add(c);let l=new zt(ns,is,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===_n)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===qs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Js=class extends qt{constructor(e=[],t=Li,i,s,r,o,a,c,l,u){super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ao=class extends En{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Js(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ct(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:Fi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:qn});r.uniforms.tEquirect.value=t;let o=new Le(s,r),a=t.minFilter;return t.minFilter===An&&(t.minFilter=on),new To(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Ge=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wf={type:"move"},fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wf)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ge;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Ks=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Qs=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var er=class extends qt{constructor(e=null,t=1,i=1,s,r,o,a,c,l=$t,u=$t,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ol=new R,qf=new R,Xf=new Oe,Lt=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ol.subVectors(i,t).cross(qf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ol),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Xf.getNormalMatrix(e),s=this.coplanarPoint(Ol).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Si=new Ai,Yf=new re(.5,.5),oo=new R,ps=class{constructor(e=new Lt,t=new Lt,i=new Lt,s=new Lt,r=new Lt,o=new Lt){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=_n,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],v=r[12],M=r[13],x=r[14],b=r[15];if(s[0].setComponents(l-o,f-u,p-g,b-v).normalize(),s[1].setComponents(l+o,f+u,p+g,b+v).normalize(),s[2].setComponents(l+a,f+h,p+_,b+M).normalize(),s[3].setComponents(l-a,f-h,p-_,b-M).normalize(),i)s[4].setComponents(c,d,m,x).normalize(),s[5].setComponents(l-c,f-d,p-m,b-x).normalize();else if(s[4].setComponents(l-c,f-d,p-m,b-x).normalize(),t===_n)s[5].setComponents(l+c,f+d,p+m,b+x).normalize();else if(t===qs)s[5].setComponents(c,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){Si.center.set(0,0,0);let t=Yf.distanceTo(e.center);return Si.radius=.7071067811865476+t,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(oo.x=s.normal.x>0?e.max.x:e.min.x,oo.y=s.normal.y>0?e.max.y:e.min.y,oo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var yn=class extends Wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Co=new R,Ro=new R,kh=new pt,Bs=new ri,ao=new Ai,Bl=new R,Hh=new R,Ci=class extends Nt{constructor(e=new mt,t=new yn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Co.fromBufferAttribute(t,s-1),Ro.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Co.distanceTo(Ro);e.setAttribute("lineDistance",new Xe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ao.copy(i.boundingSphere),ao.applyMatrix4(s),ao.radius+=r,e.ray.intersectsSphere(ao)===!1)return;kh.copy(s).invert(),Bs.copy(e.ray).applyMatrix4(kh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){let p=u.getX(_),v=u.getX(_+1),M=lo(this,e,Bs,c,p,v,_);M&&t.push(M)}if(this.isLineLoop){let _=u.getX(g-1),m=u.getX(f),p=lo(this,e,Bs,c,_,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){let p=lo(this,e,Bs,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=lo(this,e,Bs,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function lo(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Co.fromBufferAttribute(a,s),Ro.fromBufferAttribute(a,r),t.distanceSqToSegment(Co,Ro,Bl,Hh)>i)return;Bl.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Bl);if(!(l<e.near||l>e.far))return{distance:l,point:Hh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Vh=new R,Gh=new R,oi=class extends Ci{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Vh.fromBufferAttribute(t,s),Gh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Vh.distanceTo(Gh);e.setAttribute("lineDistance",new Xe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ri=class extends Ci{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};var tr=class extends qt{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},nr=class extends qt{constructor(e,t,i=ui,s,r,o,a=$t,c=$t,l,u=ls,h=1){if(u!==ls&&u!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new us(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ir=class extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var sr=class n extends mt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new R,u=new re;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=i+h/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Xe(o,3)),this.setAttribute("normal",new Xe(a,3)),this.setAttribute("uv",new Xe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},wn=class n extends mt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,_=[],m=i/2,p=0;v(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Xe(h,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(f,2));function v(){let x=new R,b=new R,A=0,C=(t-e)/i;for(let I=0;I<=r;I++){let w=[],E=I/r,D=E*(t-e)+e;for(let F=0;F<=s;F++){let k=F/s,H=k*c+a,X=Math.sin(H),W=Math.cos(H);b.x=D*X,b.y=-E*i+m,b.z=D*W,h.push(b.x,b.y,b.z),x.set(X,C,W).normalize(),d.push(x.x,x.y,x.z),f.push(k,1-E),w.push(g++)}_.push(w)}for(let I=0;I<s;I++)for(let w=0;w<r;w++){let E=_[w][I],D=_[w+1][I],F=_[w+1][I+1],k=_[w][I+1];(e>0||w!==0)&&(u.push(E,D,k),A+=3),(t>0||w!==r-1)&&(u.push(D,F,k),A+=3)}l.addGroup(p,A,0),p+=A}function M(x){let b=g,A=new re,C=new R,I=0,w=x===!0?e:t,E=x===!0?1:-1;for(let F=1;F<=s;F++)h.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),g++;let D=g;for(let F=0;F<=s;F++){let H=F/s*c+a,X=Math.cos(H),W=Math.sin(H);C.x=w*W,C.y=m*E,C.z=w*X,h.push(C.x,C.y,C.z),d.push(0,E,0),A.x=X*.5+.5,A.y=W*.5*E+.5,f.push(A.x,A.y),g++}for(let F=0;F<s;F++){let k=b+F,H=D+F;x===!0?u.push(H,H+1,k):u.push(H+1,H,k),I+=3}l.addGroup(p,I,x===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},rr=class n extends wn{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var co=new R,ho=new R,zl=new R,uo=new Hn,or=class extends mt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(rs*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:_,b:m,c:p}=uo;if(_.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),uo.getNormal(zl),h[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let v=0;v<3;v++){let M=(v+1)%3,x=h[v],b=h[M],A=uo[u[v]],C=uo[u[M]],I=`${x}_${b}`,w=`${b}_${x}`;w in d&&d[w]?(zl.dot(d[w].normal)<=r&&(f.push(A.x,A.y,A.z),f.push(C.x,C.y,C.z)),d[w]=null):I in d||(d[I]={index0:l[v],index1:l[M],normal:zl.clone()})}}for(let g in d)if(d[g]){let{index0:_,index1:m}=d[g];co.fromBufferAttribute(a,_),ho.fromBufferAttribute(a,m),f.push(co.x,co.y,co.z),f.push(ho.x,ho.y,ho.z)}this.setAttribute("position",new Xe(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let u=i[s],d=i[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new re:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new R,s=[],r=[],o=[],a=new R,c=new pt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ke(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ke(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ms=class extends ln{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new re){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Po=class extends ms{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ec(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var fo=new R,kl=new Ec,Hl=new Ec,Vl=new Ec,Do=class extends ln{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new R){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(fo.subVectors(s[0],s[1]).add(s[0]),l=fo);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(fo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=fo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),kl.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,_,m),Hl.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,_,m),Vl.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(kl.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Hl.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Vl.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set(kl.calc(c),Hl.calc(c),Vl.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Wh(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function $f(n,e){let t=1-n;return t*t*e}function Zf(n,e){return 2*(1-n)*n*e}function jf(n,e){return n*n*e}function Hs(n,e,t,i){return $f(n,e)+Zf(n,t)+jf(n,i)}function Jf(n,e){let t=1-n;return t*t*t*e}function Kf(n,e){let t=1-n;return 3*t*t*n*e}function Qf(n,e){return 3*(1-n)*n*n*e}function ep(n,e){return n*n*n*e}function Vs(n,e,t,i,s){return Jf(n,e)+Kf(n,t)+Qf(n,i)+ep(n,s)}var ar=class extends ln{constructor(e=new re,t=new re,i=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new re){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Vs(e,s.x,r.x,o.x,a.x),Vs(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Io=class extends ln{constructor(e=new R,t=new R,i=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new R){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Vs(e,s.x,r.x,o.x,a.x),Vs(e,s.y,r.y,o.y,a.y),Vs(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},lr=class extends ln{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lo=class extends ln{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cr=class extends ln{constructor(e=new re,t=new re,i=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new re){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Hs(e,s.x,r.x,o.x),Hs(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},No=class extends ln{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Hs(e,s.x,r.x,o.x),Hs(e,s.y,r.y,o.y),Hs(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hr=class extends ln{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Wh(a,c.x,l.x,u.x,h.x),Wh(a,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new re().fromArray(s))}return this}},qh=Object.freeze({__proto__:null,ArcCurve:Po,CatmullRomCurve3:Do,CubicBezierCurve:ar,CubicBezierCurve3:Io,EllipseCurve:ms,LineCurve:lr,LineCurve3:Lo,QuadraticBezierCurve:cr,QuadraticBezierCurve3:No,SplineCurve:hr}),Uo=class extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qh[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new qh[s.type]().fromJSON(s))}return this}},Pi=class extends Uo{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new lr(this.currentPoint.clone(),new re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new cr(this.currentPoint.clone(),new re(e,t),new re(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new ar(this.currentPoint.clone(),new re(e,t),new re(i,s),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new hr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){let l=new ms(e,t,i,s,r,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},gs=class extends Pi{constructor(e){super(e),this.uuid=Ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Pi().fromJSON(s))}return this}};function tp(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Gu(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=op(n,e,r,t)),n.length>80*t){a=1/0,c=1/0;let u=-1/0,h=-1/0;for(let d=t;d<s;d+=t){let f=n[d],g=n[d+1];f<a&&(a=f),g<c&&(c=g),f>u&&(u=f),g>h&&(h=g)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return ur(r,o,t,a,c,l,0),o}function Gu(n,e,t,i,s){let r;if(s===_p(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Xh(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Xh(o/i|0,n[o],n[o+1],r);return r&&_s(r,r.next)&&(fr(r),r=r.next),r}function Di(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(_s(t,t.next)||xt(t.prev,t,t.next)===0)){if(fr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ur(n,e,t,i,s,r,o){if(!n)return;!o&&r&&up(n,i,s,r);let a=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?ip(n,i,s,r):np(n)){e.push(c.i,n.i,l.i),fr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=sp(Di(n),e),ur(n,e,t,i,s,r,2)):o===2&&rp(n,e,t,i,s,r):ur(Di(n),e,t,i,s,r,1);break}}}function np(n){let e=n.prev,t=n,i=n.next;if(xt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(s,r,o),h=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l),g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&zs(s,a,r,c,o,l,g.x,g.y)&&xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ip(n,e,t,i){let s=n.prev,r=n,o=n.next;if(xt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,f=Math.min(a,c,l),g=Math.min(u,h,d),_=Math.max(a,c,l),m=Math.max(u,h,d),p=Zl(f,g,e,t,i),v=Zl(_,m,e,t,i),M=n.prevZ,x=n.nextZ;for(;M&&M.z>=p&&x&&x.z<=v;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&zs(a,u,c,h,l,d,M.x,M.y)&&xt(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&zs(a,u,c,h,l,d,x.x,x.y)&&xt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&zs(a,u,c,h,l,d,M.x,M.y)&&xt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&zs(a,u,c,h,l,d,x.x,x.y)&&xt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function sp(n,e){let t=n;do{let i=t.prev,s=t.next.next;!_s(i,s)&&qu(i,t,t.next,s)&&dr(i,s)&&dr(s,i)&&(e.push(i.i,t.i,s.i),fr(t),fr(t.next),t=n=s),t=t.next}while(t!==n);return Di(t)}function rp(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&pp(o,a)){let c=Xu(o,a);o=Di(o,o.next),c=Di(c,c.next),ur(o,e,t,i,s,r,0),ur(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function op(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=Gu(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(fp(l))}s.sort(ap);for(let r=0;r<s.length;r++)t=lp(s[r],t);return t}function ap(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function lp(n,e){let t=cp(n,e);if(!t)return e;let i=Xu(t,n);return Di(i,i.next),Di(t,t.next)}function cp(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(_s(n,t))return t;do{if(_s(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Wu(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){let h=Math.abs(s-t.y)/(i-t.x);dr(t,n)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&hp(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function hp(n,e){return xt(n.prev,n,e.prev)<0&&xt(e.next,n,n.next)<0}function up(n,e,t,i){let s=n;do s.z===0&&(s.z=Zl(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,dp(s)}function dp(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Zl(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function fp(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Wu(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function zs(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Wu(n,e,t,i,s,r,o,a)}function pp(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!mp(n,e)&&(dr(n,e)&&dr(e,n)&&gp(n,e)&&(xt(n.prev,n,e.prev)||xt(n,e.prev,e))||_s(n,e)&&xt(n.prev,n,n.next)>0&&xt(e.prev,e,e.next)>0)}function xt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function _s(n,e){return n.x===e.x&&n.y===e.y}function qu(n,e,t,i){let s=mo(xt(n,e,t)),r=mo(xt(n,e,i)),o=mo(xt(t,i,n)),a=mo(xt(t,i,e));return!!(s!==r&&o!==a||s===0&&po(n,t,e)||r===0&&po(n,i,e)||o===0&&po(t,n,i)||a===0&&po(t,e,i))}function po(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function mo(n){return n>0?1:n<0?-1:0}function mp(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&qu(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function dr(n,e){return xt(n.prev,n,n.next)<0?xt(n,e,n.next)>=0&&xt(n,n.prev,e)>=0:xt(n,e,n.prev)<0||xt(n,n.next,e)<0}function gp(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Xu(n,e){let t=jl(n.i,n.x,n.y),i=jl(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Xh(n,e,t,i){let s=jl(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function fr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function jl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _p(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Jl=class{static triangulate(e,t,i=2){return tp(e,t,i)}},as=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Yh(e),$h(i,e);let o=e.length;t.forEach(Yh);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,$h(i,t[c]);let a=Jl.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Yh(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function $h(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var jt=class n extends mt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){let v=p*d-o;for(let M=0;M<l;M++){let x=M*h-r;g.push(x,-v,0),_.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){let M=v+l*p,x=v+l*(p+1),b=v+1+l*(p+1),A=v+1+l*p;f.push(M,x,A),f.push(x,b,A)}this.setIndex(f),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(_,3)),this.setAttribute("uv",new Xe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},pr=class n extends mt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],u=[],h=e,d=(t-e)/s,f=new R,g=new re;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){let p=r+m/i*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){let m=_*(i+1);for(let p=0;p<i;p++){let v=p+m,M=v,x=v+i+1,b=v+i+2,A=v+1;a.push(M,x,A),a.push(x,b,A)}}this.setIndex(a),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(l,3)),this.setAttribute("uv",new Xe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},mr=class n extends mt{constructor(e=new gs([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Xe(s,3)),this.setAttribute("normal",new Xe(r,3)),this.setAttribute("uv",new Xe(o,2));function l(u){let h=s.length/3,d=u.extractPoints(t),f=d.shape,g=d.holes;as.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let v=g[m];as.isClockWise(v)===!0&&(g[m]=v.reverse())}let _=as.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let v=g[m];f=f.concat(v)}for(let m=0,p=f.length;m<p;m++){let v=f[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=_.length;m<p;m++){let v=_[m],M=v[0]+h,x=v[1]+h,b=v[2]+h;i.push(M,x,b),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return xp(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function xp(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var gr=class n extends mt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new R,d=new R,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){let v=[],M=p/i,x=0;p===0&&o===0?x=.5/t:p===i&&c===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){let A=b/t;h.x=-e*Math.cos(s+A*r)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(s+A*r)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(A+x,1-M),v.push(l++)}u.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){let M=u[p][v+1],x=u[p][v],b=u[p+1][v],A=u[p+1][v+1];(p!==0||o>0)&&f.push(M,x,A),(p!==i-1||c<Math.PI)&&f.push(x,b,A)}this.setIndex(f),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(_,3)),this.setAttribute("uv",new Xe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Mt=class extends Wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_c,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Fo=class extends Wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Oo=class extends Wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function go(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function yp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ii=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bo=class extends Ii{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wl,endingEnd:Wl}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ql:r=e,a=2*t-i;break;case Xl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case ql:o=e,c=2*i-t;break;case Xl:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let b=0;b!==a;++b)r[b]=p*o[u+b]+v*o[l+b]+M*o[c+b]+x*o[h+b];return r}},zo=class extends Ii{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}},ko=class extends Ii{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},cn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=go(t,this.TimeBufferType),this.values=go(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:go(e.times,Array),values:go(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Gs:t=this.InterpolantFactoryMethodDiscrete;break;case So:t=this.InterpolantFactoryMethodLinear;break;case _o:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gs;case this.InterpolantFactoryMethodLinear:return So;case this.InterpolantFactoryMethodSmooth:return _o}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&yp(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===_o,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{let h=a*i,d=h-i,f=h+i;for(let g=0;g!==i;++g){let _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};cn.prototype.ValueTypeName="";cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=So;var ai=class extends cn{constructor(e,t,i){super(e,t,i)}};ai.prototype.ValueTypeName="bool";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=Gs;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Ho=class extends cn{constructor(e,t,i,s){super(e,t,i,s)}};Ho.prototype.ValueTypeName="color";var Vo=class extends cn{constructor(e,t,i,s){super(e,t,i,s)}};Vo.prototype.ValueTypeName="number";var Go=class extends Ii{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let u=l+a;l!==u;l+=4)Zt.slerpFlat(r,0,o,l-a,o,l,c);return r}},_r=class extends cn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Go(this.times,this.values,this.getValueSize(),e)}};_r.prototype.ValueTypeName="quaternion";_r.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends cn{constructor(e,t,i){super(e,t,i)}};li.prototype.ValueTypeName="string";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=Gs;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var Wo=class extends cn{constructor(e,t,i,s){super(e,t,i,s)}};Wo.prototype.ValueTypeName="vector";var qo=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Yu=new qo,Xo=class{constructor(e){this.manager=e!==void 0?e:Yu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Xo.DEFAULT_MATERIAL_NAME="__DEFAULT";var xr=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},yr=class extends xr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Gl=new pt,Zh=new R,jh=new R,Kl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ps,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zh),jh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jh),t.updateMatrixWorld(),Gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var vr=class extends js{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ql=class extends Kl{constructor(){super(new vr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xs=class extends xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new Ql}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Yo=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var wc="\\[\\]\\.:\\/",vp=new RegExp("["+wc+"]","g"),Tc="[^"+wc+"]",Mp="[^"+wc.replace("\\.","")+"]",Sp=/((?:WC+[\/:])*)/.source.replace("WC",Tc),bp=/(WCOD+)?/.source.replace("WCOD",Mp),Ep=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tc),wp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tc),Tp=new RegExp("^"+Sp+bp+Ep+wp+"$"),Ap=["material","materials","bones","map"],ec=class{constructor(e,t,i){let s=i||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},lt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vp,"")}static parseTrackName(e){let t=Tp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Ap.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=ec;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sy=new Float32Array(1);var Jh=new pt,Mr=class{constructor(e,t,i=0,s=1/0){this.ray=new ri(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ds,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Jh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jh),this}intersectObject(e,t=!0,i=[]){return tc(e,this,i,t),i.sort(Kh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)tc(e[s],this,i,t);return i.sort(Kh),i}};function Kh(n,e){return n.distance-e.distance}function tc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)tc(r[o],e,t,!0)}}var ys=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Sr=class extends oi{constructor(e=10,t=10,i=4473924,s=8947848){i=new Ue(i),s=new Ue(s);let r=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,f=0,g=-a;d<=t;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);let _=d===r?i:s;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}let u=new mt;u.setAttribute("position",new Xe(c,3)),u.setAttribute("color",new Xe(l,3));let h=new yn({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var br=class extends bn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Ac(n,e,t,i){let s=Cp(i);switch(t){case fc:return n*e;case mc:return n*e/s.components*s.byteLength;case la:return n*e/s.components*s.byteLength;case gc:return n*e*2/s.components*s.byteLength;case ca:return n*e*2/s.components*s.byteLength;case pc:return n*e*3/s.components*s.byteLength;case Jt:return n*e*4/s.components*s.byteLength;case ha:return n*e*4/s.components*s.byteLength;case Tr:case Ar:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Cr:case Rr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case da:case pa:return Math.max(n,16)*Math.max(e,8)/4;case ua:case fa:return Math.max(n,8)*Math.max(e,8)/2;case ma:case ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ya:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case va:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ma:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ba:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case wa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ta:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ra:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Pa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Da:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ia:case La:case Na:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ua:case Fa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Oa:case Ba:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cp(n){switch(n){case vn:case cc:return{byteLength:1,components:1};case vs:case hc:case Ms:return{byteLength:2,components:1};case oa:case aa:return{byteLength:2,components:4};case ui:case ra:case Cn:return{byteLength:4,components:1};case uc:case dc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function _d(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Pp(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){let u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let _=h[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Dp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ip=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Up=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Op=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,em=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,om=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,am="gl_FragColor = linearToOutputTexel( gl_FragColor );",lm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,um=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_m=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ym=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Em=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Am=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Im=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Om=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,km=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ag=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,fg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_g=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ug=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Og=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Bg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,t0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,r0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,l0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:Dp,alphahash_pars_fragment:Ip,alphamap_fragment:Lp,alphamap_pars_fragment:Np,alphatest_fragment:Up,alphatest_pars_fragment:Fp,aomap_fragment:Op,aomap_pars_fragment:Bp,batching_pars_vertex:zp,batching_vertex:kp,begin_vertex:Hp,beginnormal_vertex:Vp,bsdfs:Gp,iridescence_fragment:Wp,bumpmap_pars_fragment:qp,clipping_planes_fragment:Xp,clipping_planes_pars_fragment:Yp,clipping_planes_pars_vertex:$p,clipping_planes_vertex:Zp,color_fragment:jp,color_pars_fragment:Jp,color_pars_vertex:Kp,color_vertex:Qp,common:em,cube_uv_reflection_fragment:tm,defaultnormal_vertex:nm,displacementmap_pars_vertex:im,displacementmap_vertex:sm,emissivemap_fragment:rm,emissivemap_pars_fragment:om,colorspace_fragment:am,colorspace_pars_fragment:lm,envmap_fragment:cm,envmap_common_pars_fragment:hm,envmap_pars_fragment:um,envmap_pars_vertex:dm,envmap_physical_pars_fragment:bm,envmap_vertex:fm,fog_vertex:pm,fog_pars_vertex:mm,fog_fragment:gm,fog_pars_fragment:_m,gradientmap_pars_fragment:xm,lightmap_pars_fragment:ym,lights_lambert_fragment:vm,lights_lambert_pars_fragment:Mm,lights_pars_begin:Sm,lights_toon_fragment:Em,lights_toon_pars_fragment:wm,lights_phong_fragment:Tm,lights_phong_pars_fragment:Am,lights_physical_fragment:Cm,lights_physical_pars_fragment:Rm,lights_fragment_begin:Pm,lights_fragment_maps:Dm,lights_fragment_end:Im,logdepthbuf_fragment:Lm,logdepthbuf_pars_fragment:Nm,logdepthbuf_pars_vertex:Um,logdepthbuf_vertex:Fm,map_fragment:Om,map_pars_fragment:Bm,map_particle_fragment:zm,map_particle_pars_fragment:km,metalnessmap_fragment:Hm,metalnessmap_pars_fragment:Vm,morphinstance_vertex:Gm,morphcolor_vertex:Wm,morphnormal_vertex:qm,morphtarget_pars_vertex:Xm,morphtarget_vertex:Ym,normal_fragment_begin:$m,normal_fragment_maps:Zm,normal_pars_fragment:jm,normal_pars_vertex:Jm,normal_vertex:Km,normalmap_pars_fragment:Qm,clearcoat_normal_fragment_begin:eg,clearcoat_normal_fragment_maps:tg,clearcoat_pars_fragment:ng,iridescence_pars_fragment:ig,opaque_fragment:sg,packing:rg,premultiplied_alpha_fragment:og,project_vertex:ag,dithering_fragment:lg,dithering_pars_fragment:cg,roughnessmap_fragment:hg,roughnessmap_pars_fragment:ug,shadowmap_pars_fragment:dg,shadowmap_pars_vertex:fg,shadowmap_vertex:pg,shadowmask_pars_fragment:mg,skinbase_vertex:gg,skinning_pars_vertex:_g,skinning_vertex:xg,skinnormal_vertex:yg,specularmap_fragment:vg,specularmap_pars_fragment:Mg,tonemapping_fragment:Sg,tonemapping_pars_fragment:bg,transmission_fragment:Eg,transmission_pars_fragment:wg,uv_pars_fragment:Tg,uv_pars_vertex:Ag,uv_vertex:Cg,worldpos_vertex:Rg,background_vert:Pg,background_frag:Dg,backgroundCube_vert:Ig,backgroundCube_frag:Lg,cube_vert:Ng,cube_frag:Ug,depth_vert:Fg,depth_frag:Og,distanceRGBA_vert:Bg,distanceRGBA_frag:zg,equirect_vert:kg,equirect_frag:Hg,linedashed_vert:Vg,linedashed_frag:Gg,meshbasic_vert:Wg,meshbasic_frag:qg,meshlambert_vert:Xg,meshlambert_frag:Yg,meshmatcap_vert:$g,meshmatcap_frag:Zg,meshnormal_vert:jg,meshnormal_frag:Jg,meshphong_vert:Kg,meshphong_frag:Qg,meshphysical_vert:e0,meshphysical_frag:t0,meshtoon_vert:n0,meshtoon_frag:i0,points_vert:s0,points_frag:r0,shadow_vert:o0,shadow_frag:a0,sprite_vert:l0,sprite_frag:c0},oe={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Rn={basic:{uniforms:kt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:kt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:kt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:kt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:kt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:kt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:kt([oe.points,oe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:kt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:kt([oe.common,oe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:kt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:kt([oe.sprite,oe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:kt([oe.common,oe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:kt([oe.lights,oe.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Rn.physical={uniforms:kt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var za={r:0,b:0,g:0},Oi=new an,h0=new pt;function u0(n,e,t,i,s,r,o){let a=new Ue(0),c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function _(M){let x=!1,b=g(M);b===null?p(a,c):b&&b.isColor&&(p(b,1),x=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,x){let b=g(x);b&&(b.isCubeTexture||b.mapping===Er)?(u===void 0&&(u=new Le(new ct(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:Fi(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Oi.copy(x.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(h0.makeRotationFromEuler(Oi)),u.material.toneMapped=Ye.getTransfer(b.colorSpace)!==Ke,(h!==b||d!==b.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=b,d=b.version,f=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Le(new jt(2,2),new xn({name:"BackgroundMaterial",uniforms:Fi(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(b.colorSpace)!==Ke,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,f=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,x){M.getRGB(za,bc(n)),i.buffers.color.setClear(za.r,za.g,za.b,x,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:_,addToRenderList:m,dispose:v}}function d0(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(E,D,F,k,H){let X=!1,W=h(k,F,D);r!==W&&(r=W,l(r.object)),X=f(E,k,F,H),X&&g(E,k,F,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(E,D,F,k),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return n.createVertexArray()}function l(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function h(E,D,F){let k=F.wireframe===!0,H=i[E.id];H===void 0&&(H={},i[E.id]=H);let X=H[D.id];X===void 0&&(X={},H[D.id]=X);let W=X[k];return W===void 0&&(W=d(c()),X[k]=W),W}function d(E){let D=[],F=[],k=[];for(let H=0;H<t;H++)D[H]=0,F[H]=0,k[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:k,object:E,attributes:{},index:null}}function f(E,D,F,k){let H=r.attributes,X=D.attributes,W=0,ne=F.getAttributes();for(let V in ne)if(ne[V].location>=0){let ue=H[V],Ee=X[V];if(Ee===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(Ee=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(Ee=E.instanceColor)),ue===void 0||ue.attribute!==Ee||Ee&&ue.data!==Ee.data)return!0;W++}return r.attributesNum!==W||r.index!==k}function g(E,D,F,k){let H={},X=D.attributes,W=0,ne=F.getAttributes();for(let V in ne)if(ne[V].location>=0){let ue=X[V];ue===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(ue=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(ue=E.instanceColor));let Ee={};Ee.attribute=ue,ue&&ue.data&&(Ee.data=ue.data),H[V]=Ee,W++}r.attributes=H,r.attributesNum=W,r.index=k}function _(){let E=r.newAttributes;for(let D=0,F=E.length;D<F;D++)E[D]=0}function m(E){p(E,0)}function p(E,D){let F=r.newAttributes,k=r.enabledAttributes,H=r.attributeDivisors;F[E]=1,k[E]===0&&(n.enableVertexAttribArray(E),k[E]=1),H[E]!==D&&(n.vertexAttribDivisor(E,D),H[E]=D)}function v(){let E=r.newAttributes,D=r.enabledAttributes;for(let F=0,k=D.length;F<k;F++)D[F]!==E[F]&&(n.disableVertexAttribArray(F),D[F]=0)}function M(E,D,F,k,H,X,W){W===!0?n.vertexAttribIPointer(E,D,F,H,X):n.vertexAttribPointer(E,D,F,k,H,X)}function x(E,D,F,k){_();let H=k.attributes,X=F.getAttributes(),W=D.defaultAttributeValues;for(let ne in X){let V=X[ne];if(V.location>=0){let ae=H[ne];if(ae===void 0&&(ne==="instanceMatrix"&&E.instanceMatrix&&(ae=E.instanceMatrix),ne==="instanceColor"&&E.instanceColor&&(ae=E.instanceColor)),ae!==void 0){let ue=ae.normalized,Ee=ae.itemSize,Ve=e.get(ae);if(Ve===void 0)continue;let rt=Ve.buffer,ut=Ve.type,Ze=Ve.bytesPerElement,Y=ut===n.INT||ut===n.UNSIGNED_INT||ae.gpuType===ra;if(ae.isInterleavedBufferAttribute){let j=ae.data,pe=j.stride,Ie=ae.offset;if(j.isInstancedInterleavedBuffer){for(let be=0;be<V.locationSize;be++)p(V.location+be,j.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let be=0;be<V.locationSize;be++)m(V.location+be);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let be=0;be<V.locationSize;be++)M(V.location+be,Ee/V.locationSize,ut,ue,pe*Ze,(Ie+Ee/V.locationSize*be)*Ze,Y)}else{if(ae.isInstancedBufferAttribute){for(let j=0;j<V.locationSize;j++)p(V.location+j,ae.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let j=0;j<V.locationSize;j++)m(V.location+j);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let j=0;j<V.locationSize;j++)M(V.location+j,Ee/V.locationSize,ut,ue,Ee*Ze,Ee/V.locationSize*j*Ze,Y)}}else if(W!==void 0){let ue=W[ne];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(V.location,ue);break;case 3:n.vertexAttrib3fv(V.location,ue);break;case 4:n.vertexAttrib4fv(V.location,ue);break;default:n.vertexAttrib1fv(V.location,ue)}}}}v()}function b(){I();for(let E in i){let D=i[E];for(let F in D){let k=D[F];for(let H in k)u(k[H].object),delete k[H];delete D[F]}delete i[E]}}function A(E){if(i[E.id]===void 0)return;let D=i[E.id];for(let F in D){let k=D[F];for(let H in k)u(k[H].object),delete k[H];delete D[F]}delete i[E.id]}function C(E){for(let D in i){let F=i[D];if(F[E.id]===void 0)continue;let k=F[E.id];for(let H in k)u(k[H].object),delete k[H];delete F[E.id]}}function I(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function f0(n,e,t){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,i,1)}function c(l,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function p0(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Jt&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let I=C===Ms&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==vn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Cn&&!I)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:b,maxSamples:A}}function m0(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Lt,a=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let v=r?0:i,M=v*4,x=p.clippingState||null;c.value=x,x=u(g,d,M,f);for(let b=0;b!==M;++b)x[b]=t[b];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=f;M!==_;++M,x+=4)o.copy(h[M]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function g0(n){let e=new WeakMap;function t(o,a){return a===na?o.mapping=Li:a===ia&&(o.mapping=Ni),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===na||a===ia)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ao(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var ws=4,$u=[.125,.215,.35,.446,.526,.582],ki=20,Cc=new vr,Zu=new Ue,Rc=null,Pc=0,Dc=0,Ic=!1,zi=(1+Math.sqrt(5))/2,Es=1/zi,ju=[new R(-zi,Es,0),new R(zi,Es,0),new R(-Es,0,zi),new R(Es,0,zi),new R(0,zi,-Es),new R(0,zi,Es),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],_0=new R,Va=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=_0}=r;Rc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rc,Pc,Dc),this._renderer.xr.enabled=Ic,e.scissorTest=!1,ka(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Li||e.mapping===Ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:Ms,format:Jt,colorSpace:Ti,depthBuffer:!1},s=Ju(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ju(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=x0(r)),this._blurMaterial=y0(r,e,t)}return s}_compileMaterial(e){let t=new Le(this._lodPlanes[0],e);this._renderer.compile(t,Cc)}_sceneToCubeUV(e,t,i,s,r){let c=new zt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Zu),h.toneMapping=Xn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let _=new Dt({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),m=new Le(new ct,_),p=!1,v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,p=!0):(_.color.copy(Zu),p=!0);for(let M=0;M<6;M++){let x=M%3;x===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[M],r.y,r.z)):x===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[M]));let b=this._cubeSize;ka(s,x*b,M>2?b:0,b,b),h.setRenderTarget(s),p&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=v}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Li||e.mapping===Ni;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ku());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Le(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;ka(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Cc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ju[(s-r-1)%ju.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Le(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ki-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):ki;m>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);let p=[],v=0;for(let C=0;C<ki;++C){let I=C/_,w=Math.exp(-I*I/2);p.push(w),C===0?v+=w:C<m&&(v+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;let x=this._sizeLods[s],b=3*x*(s>M-ws?s-M+ws:0),A=4*(this._cubeSize-x);ka(t,b,A,3*x,2*x),c.setRenderTarget(t),c.render(h,Cc)}};function x0(n){let e=[],t=[],i=[],s=n,r=n-ws+1+$u.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>n-ws?c=$u[o-n+ws-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),M=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){let C=A%3*2/3-1,I=A>2?0:-1,w=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];v.set(w,_*g*A),M.set(d,m*g*A);let E=[A,A,A,A,A,A];x.set(E,p*g*A)}let b=new mt;b.setAttribute("position",new rn(v,_)),b.setAttribute("uv",new rn(M,m)),b.setAttribute("faceIndex",new rn(x,p)),e.push(b),s>ws&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ju(n,e,t){let i=new En(n,e,t);return i.texture.mapping=Er,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ka(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function y0(n,e,t){let i=new Float32Array(ki),s=new R(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Ku(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Qu(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Vc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function v0(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===na||c===ia,u=c===Li||c===Ni;if(l||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Va(n)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Va(n)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function M0(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&hs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function S0(n,e,t,i){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let f in d)e.update(d[f],n.ARRAY_BUFFER)}function l(h){let d=[],f=h.index,g=h.attributes.position,_=0;if(f!==null){let v=f.array;_=f.version;for(let M=0,x=v.length;M<x;M+=3){let b=v[M+0],A=v[M+1],C=v[M+2];d.push(b,A,A,C,C,b)}}else if(g!==void 0){let v=g.array;_=g.version;for(let M=0,x=v.length/3-1;M<x;M+=3){let b=M+0,A=M+1,C=M+2;d.push(b,A,A,C,C,b)}}else return;let m=new(Sc(d)?Zs:$s)(d,1);m.version=_;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function b0(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function l(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),t.update(f,i,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function h(d,f,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*_[v];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function E0(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function w0(n,e,t){let i=new WeakMap,s=new yt;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(a);if(d===void 0||d.count!==h){let w=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let x=a.attributes.position.count*M,b=1;x>e.maxTextureSize&&(b=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let A=new Float32Array(x*b*4*h),C=new Ys(A,x,b,h);C.type=Cn,C.needsUpdate=!0;let I=M*4;for(let E=0;E<h;E++){let D=m[E],F=p[E],k=v[E],H=x*b*4*E;for(let X=0;X<D.count;X++){let W=X*I;f===!0&&(s.fromBufferAttribute(D,X),A[H+W+0]=s.x,A[H+W+1]=s.y,A[H+W+2]=s.z,A[H+W+3]=0),g===!0&&(s.fromBufferAttribute(F,X),A[H+W+4]=s.x,A[H+W+5]=s.y,A[H+W+6]=s.z,A[H+W+7]=0),_===!0&&(s.fromBufferAttribute(k,X),A[H+W+8]=s.x,A[H+W+9]=s.y,A[H+W+10]=s.z,A[H+W+11]=k.itemSize===4?s.w:1)}}d={count:h,texture:C,size:new re(x,b)},i.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function T0(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var xd=new qt,ed=new nr(1,1),yd=new Ys,vd=new wo,Md=new Js,td=[],nd=[],id=new Float32Array(16),sd=new Float32Array(9),rd=new Float32Array(4);function As(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=td[s];if(r===void 0&&(r=new Float32Array(s),td[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Wa(n,e){let t=nd[e];t===void 0&&(t=new Int32Array(e),nd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function A0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function C0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function R0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function P0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function D0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,i))return;rd.set(i),n.uniformMatrix2fv(this.addr,!1,rd),Tt(t,i)}}function I0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,i))return;sd.set(i),n.uniformMatrix3fv(this.addr,!1,sd),Tt(t,i)}}function L0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,i))return;id.set(i),n.uniformMatrix4fv(this.addr,!1,id),Tt(t,i)}}function N0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function U0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function F0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function O0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function B0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function z0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function k0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function H0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function V0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ed.compareFunction=xc,r=ed):r=xd,t.setTexture2D(e||r,s)}function G0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||vd,s)}function W0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Md,s)}function q0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||yd,s)}function X0(n){switch(n){case 5126:return A0;case 35664:return C0;case 35665:return R0;case 35666:return P0;case 35674:return D0;case 35675:return I0;case 35676:return L0;case 5124:case 35670:return N0;case 35667:case 35671:return U0;case 35668:case 35672:return F0;case 35669:case 35673:return O0;case 5125:return B0;case 36294:return z0;case 36295:return k0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return q0}}function Y0(n,e){n.uniform1fv(this.addr,e)}function $0(n,e){let t=As(e,this.size,2);n.uniform2fv(this.addr,t)}function Z0(n,e){let t=As(e,this.size,3);n.uniform3fv(this.addr,t)}function j0(n,e){let t=As(e,this.size,4);n.uniform4fv(this.addr,t)}function J0(n,e){let t=As(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function K0(n,e){let t=As(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Q0(n,e){let t=As(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function e_(n,e){n.uniform1iv(this.addr,e)}function t_(n,e){n.uniform2iv(this.addr,e)}function n_(n,e){n.uniform3iv(this.addr,e)}function i_(n,e){n.uniform4iv(this.addr,e)}function s_(n,e){n.uniform1uiv(this.addr,e)}function r_(n,e){n.uniform2uiv(this.addr,e)}function o_(n,e){n.uniform3uiv(this.addr,e)}function a_(n,e){n.uniform4uiv(this.addr,e)}function l_(n,e,t){let i=this.cache,s=e.length,r=Wa(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||xd,r[o])}function c_(n,e,t){let i=this.cache,s=e.length,r=Wa(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||vd,r[o])}function h_(n,e,t){let i=this.cache,s=e.length,r=Wa(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Md,r[o])}function u_(n,e,t){let i=this.cache,s=e.length,r=Wa(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||yd,r[o])}function d_(n){switch(n){case 5126:return Y0;case 35664:return $0;case 35665:return Z0;case 35666:return j0;case 35674:return J0;case 35675:return K0;case 35676:return Q0;case 5124:case 35670:return e_;case 35667:case 35671:return t_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return s_;case 36294:return r_;case 36295:return o_;case 36296:return a_;case 35678:case 36198:case 36298:case 36306:case 35682:return l_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return h_;case 36289:case 36303:case 36311:case 36292:return u_}}var Nc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=X0(t.type)}},Uc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=d_(t.type)}},Fc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Lc=/(\w+)(\])?(\[|\.)?/g;function od(n,e){n.seq.push(e),n.map[e.id]=e}function f_(n,e,t){let i=n.name,s=i.length;for(Lc.lastIndex=0;;){let r=Lc.exec(i),o=Lc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){od(t,l===void 0?new Nc(a,n,e):new Uc(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Fc(a),od(t,h)),t=h}}}var Ts=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);f_(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function ad(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var p_=37297,m_=0;function g_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var ld=new Oe;function __(n){Ye._getMatrix(ld,Ye.workingColorSpace,n);let e=`mat3( ${ld.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(n)){case Ws:return[e,"LinearTransferOETF"];case Ke:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function cd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+g_(n.getShaderSource(e),a)}else return r}function x_(n,e){let t=__(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function y_(n,e){let t;switch(e){case Su:t="Linear";break;case bu:t="Reinhard";break;case Eu:t="Cineon";break;case ta:t="ACESFilmic";break;case Tu:t="AgX";break;case Au:t="Neutral";break;case wu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ha=new R;function v_(){Ye.getLuminanceCoefficients(Ha);let n=Ha.x.toFixed(4),e=Ha.y.toFixed(4),t=Ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function S_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function b_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Pr(n){return n!==""}function hd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ud(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var E_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oc(n){return n.replace(E_,T_)}var w_=new Map;function T_(n,e){let t=He[e];if(t===void 0){let i=w_.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Oc(t)}var A_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dd(n){return n.replace(A_,C_)}function C_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function R_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ic?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===tu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Tn&&(e="SHADOWMAP_TYPE_VSM"),e}function P_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Li:case Ni:e="ENVMAP_TYPE_CUBE";break;case Er:e="ENVMAP_TYPE_CUBE_UV";break}return e}function D_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ni:e="ENVMAP_MODE_REFRACTION";break}return e}function I_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ac:e="ENVMAP_BLENDING_MULTIPLY";break;case vu:e="ENVMAP_BLENDING_MIX";break;case Mu:e="ENVMAP_BLENDING_ADD";break}return e}function L_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function N_(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=R_(t),l=P_(t),u=D_(t),h=I_(t),d=L_(t),f=M_(t),g=S_(r),_=s.createProgram(),m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pr).join(`
`),p.length>0&&(p+=`
`)):(m=[fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),p=[fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?He.tonemapping_pars_fragment:"",t.toneMapping!==Xn?y_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,x_("linearToOutputTexel",t.outputColorSpace),v_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pr).join(`
`)),o=Oc(o),o=hd(o,t),o=ud(o,t),a=Oc(a),a=hd(a,t),a=ud(a,t),o=dd(o),a=dd(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=v+m+o,x=v+p+a,b=ad(s,s.VERTEX_SHADER,M),A=ad(s,s.FRAGMENT_SHADER,x);s.attachShader(_,b),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(D){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(b)||"",H=s.getShaderInfoLog(A)||"",X=F.trim(),W=k.trim(),ne=H.trim(),V=!0,ae=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,b,A);else{let ue=cd(s,b,"vertex"),Ee=cd(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+ue+`
`+Ee)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(W===""||ne==="")&&(ae=!1);ae&&(D.diagnostics={runnable:V,programLog:X,vertexShader:{log:W,prefix:m},fragmentShader:{log:ne,prefix:p}})}s.deleteShader(b),s.deleteShader(A),I=new Ts(s,_),w=b_(s,_)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,p_)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=m_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=A,this}var U_=0,Bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new zc(e),t.set(e,i)),i}},zc=class{constructor(e){this.id=U_++,this.code=e,this.usedTimes=0}};function F_(n,e,t,i,s,r,o){let a=new ds,c=new Bc,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,E,D,F,k){let H=F.fog,X=k.geometry,W=w.isMeshStandardMaterial?F.environment:null,ne=(w.isMeshStandardMaterial?t:e).get(w.envMap||W),V=ne&&ne.mapping===Er?ne.image.height:null,ae=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let ue=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ee=ue!==void 0?ue.length:0,Ve=0;X.morphAttributes.position!==void 0&&(Ve=1),X.morphAttributes.normal!==void 0&&(Ve=2),X.morphAttributes.color!==void 0&&(Ve=3);let rt,ut,Ze,Y;if(ae){let je=Rn[ae];rt=je.vertexShader,ut=je.fragmentShader}else rt=w.vertexShader,ut=w.fragmentShader,c.update(w),Ze=c.getVertexShaderID(w),Y=c.getFragmentShaderID(w);let j=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),Ie=k.isInstancedMesh===!0,be=k.isBatchedMesh===!0,qe=!!w.map,Ft=!!w.matcap,P=!!ne,dt=!!w.aoMap,Fe=!!w.lightMap,Pe=!!w.bumpMap,_e=!!w.normalMap,ft=!!w.displacementMap,xe=!!w.emissiveMap,ze=!!w.metalnessMap,Rt=!!w.roughnessMap,St=w.anisotropy>0,T=w.clearcoat>0,y=w.dispersion>0,O=w.iridescence>0,q=w.sheen>0,Z=w.transmission>0,G=St&&!!w.anisotropyMap,Se=T&&!!w.clearcoatMap,ie=T&&!!w.clearcoatNormalMap,ye=T&&!!w.clearcoatRoughnessMap,ve=O&&!!w.iridescenceMap,ee=O&&!!w.iridescenceThicknessMap,he=q&&!!w.sheenColorMap,Re=q&&!!w.sheenRoughnessMap,Me=!!w.specularMap,le=!!w.specularColorMap,Be=!!w.specularIntensityMap,L=Z&&!!w.transmissionMap,te=Z&&!!w.thicknessMap,se=!!w.gradientMap,fe=!!w.alphaMap,K=w.alphaTest>0,$=!!w.alphaHash,ge=!!w.extensions,Ne=Xn;w.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ne=n.toneMapping);let ot={shaderID:ae,shaderType:w.type,shaderName:w.name,vertexShader:rt,fragmentShader:ut,defines:w.defines,customVertexShaderID:Ze,customFragmentShaderID:Y,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:be,batchingColor:be&&k._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&k.instanceColor!==null,instancingMorph:Ie&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ti,alphaToCoverage:!!w.alphaToCoverage,map:qe,matcap:Ft,envMap:P,envMapMode:P&&ne.mapping,envMapCubeUVHeight:V,aoMap:dt,lightMap:Fe,bumpMap:Pe,normalMap:_e,displacementMap:d&&ft,emissiveMap:xe,normalMapObjectSpace:_e&&w.normalMapType===Du,normalMapTangentSpace:_e&&w.normalMapType===_c,metalnessMap:ze,roughnessMap:Rt,anisotropy:St,anisotropyMap:G,clearcoat:T,clearcoatMap:Se,clearcoatNormalMap:ie,clearcoatRoughnessMap:ye,dispersion:y,iridescence:O,iridescenceMap:ve,iridescenceThicknessMap:ee,sheen:q,sheenColorMap:he,sheenRoughnessMap:Re,specularMap:Me,specularColorMap:le,specularIntensityMap:Be,transmission:Z,transmissionMap:L,thicknessMap:te,gradientMap:se,opaque:w.transparent===!1&&w.blending===Ei&&w.alphaToCoverage===!1,alphaMap:fe,alphaTest:K,alphaHash:$,combine:w.combine,mapUv:qe&&_(w.map.channel),aoMapUv:dt&&_(w.aoMap.channel),lightMapUv:Fe&&_(w.lightMap.channel),bumpMapUv:Pe&&_(w.bumpMap.channel),normalMapUv:_e&&_(w.normalMap.channel),displacementMapUv:ft&&_(w.displacementMap.channel),emissiveMapUv:xe&&_(w.emissiveMap.channel),metalnessMapUv:ze&&_(w.metalnessMap.channel),roughnessMapUv:Rt&&_(w.roughnessMap.channel),anisotropyMapUv:G&&_(w.anisotropyMap.channel),clearcoatMapUv:Se&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:he&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(w.sheenRoughnessMap.channel),specularMapUv:Me&&_(w.specularMap.channel),specularColorMapUv:le&&_(w.specularColorMap.channel),specularIntensityMapUv:Be&&_(w.specularIntensityMap.channel),transmissionMapUv:L&&_(w.transmissionMap.channel),thicknessMapUv:te&&_(w.thicknessMap.channel),alphaMapUv:fe&&_(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(_e||St),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&(qe||fe),fog:!!H,useFog:w.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:pe,skinning:k.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ve,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ne,decodeVideoTexture:qe&&w.map.isVideoTexture===!0&&Ye.getTransfer(w.map.colorSpace)===Ke,decodeVideoTextureEmissive:xe&&w.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(w.emissiveMap.colorSpace)===Ke,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ht,flipSided:w.side===Xt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ge&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&w.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ot.vertexUv1s=l.has(1),ot.vertexUv2s=l.has(2),ot.vertexUv3s=l.has(3),l.clear(),ot}function p(w){let E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(let D in w.defines)E.push(D),E.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(v(E,w),M(E,w),E.push(n.outputColorSpace)),E.push(w.customProgramCacheKey),E.join()}function v(w,E){w.push(E.precision),w.push(E.outputColorSpace),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.anisotropyMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.numLightProbes),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function M(w,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){let E=g[w.type],D;if(E){let F=Rn[E];D=Vu.clone(F.uniforms)}else D=w.uniforms;return D}function b(w,E){let D;for(let F=0,k=u.length;F<k;F++){let H=u[F];if(H.cacheKey===E){D=H,++D.usedTimes;break}}return D===void 0&&(D=new N_(n,E,w,r),u.push(D)),D}function A(w){if(--w.usedTimes===0){let E=u.indexOf(w);u[E]=u[u.length-1],u.pop(),w.destroy()}}function C(w){c.remove(w)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:b,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:I}}function O_(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function B_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function pd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function md(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,f,g,_,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){let p=o(h,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(h,d,f,g,_,m){let p=o(h,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||B_),i.length>1&&i.sort(d||pd),s.length>1&&s.sort(d||pd)}function u(){for(let h=e,d=n.length;h<d;h++){let f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function z_(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new md,n.set(i,[o])):s>=r.length?(o=new md,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function k_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ue};break;case"SpotLight":t={position:new R,direction:new R,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function H_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var V_=0;function G_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function W_(n){let e=new k_,t=H_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new R);let s=new R,r=new pt,o=new pt;function a(l){let u=0,h=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,M=0,x=0,b=0,A=0,C=0;l.sort(G_);for(let w=0,E=l.length;w<E;w++){let D=l[w],F=D.color,k=D.intensity,H=D.distance,X=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=F.r*k,h+=F.g*k,d+=F.b*k;else if(D.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],k);C++}else if(D.isDirectionalLight){let W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ne=D.shadow,V=t.get(D);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=X,i.directionalShadowMatrix[f]=D.shadow.matrix,v++}i.directional[f]=W,f++}else if(D.isSpotLight){let W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(F).multiplyScalar(k),W.distance=H,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[_]=W;let ne=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,ne.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[_]=ne.matrix,D.castShadow){let V=t.get(D);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=X,x++}_++}else if(D.isRectAreaLight){let W=e.get(D);W.color.copy(F).multiplyScalar(k),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=W,m++}else if(D.isPointLight){let W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){let ne=D.shadow,V=t.get(D);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,V.shadowCameraNear=ne.camera.near,V.shadowCameraFar=ne.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=D.shadow.matrix,M++}i.point[g]=W,g++}else if(D.isHemisphereLight){let W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(k),W.groundColor.copy(D.groundColor).multiplyScalar(k),i.hemi[p]=W,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let I=i.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==v||I.numPointShadows!==M||I.numSpotShadows!==x||I.numSpotMaps!==b||I.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=v,I.numPointShadows=M,I.numSpotShadows=x,I.numSpotMaps=b,I.numLightProbes=C,i.version=V_++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0,m=u.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){let M=l[p];if(M.isDirectionalLight){let x=i.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(M.isSpotLight){let x=i.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(M.isRectAreaLight){let x=i.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let x=i.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let x=i.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function gd(n){let e=new W_(n),t=[],i=[];function s(u){l.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function q_(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new gd(n),e.set(s,[a])):r>=o.length?(a=new gd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var X_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $_(n,e,t){let i=new ps,s=new re,r=new re,o=new yt,a=new Fo({depthPacking:Pu}),c=new Oo,l={},u=t.maxTextureSize,h={[Gn]:Xt,[Xt]:Gn,[ht]:ht},d=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:X_,fragmentShader:Y_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new mt;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Le(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ic;let p=this.type;this.render=function(A,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let w=n.getRenderTarget(),E=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),F=n.state;F.setBlending(qn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=p!==Tn&&this.type===Tn,H=p===Tn&&this.type!==Tn;for(let X=0,W=A.length;X<W;X++){let ne=A[X],V=ne.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ae=V.getFrameExtents();if(s.multiply(ae),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ae.x),s.x=r.x*ae.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ae.y),s.y=r.y*ae.y,V.mapSize.y=r.y)),V.map===null||k===!0||H===!0){let Ee=this.type!==Tn?{minFilter:$t,magFilter:$t}:{};V.map!==null&&V.map.dispose(),V.map=new En(s.x,s.y,Ee),V.map.texture.name=ne.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let ue=V.getViewportCount();for(let Ee=0;Ee<ue;Ee++){let Ve=V.getViewport(Ee);o.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),F.viewport(o),V.updateMatrices(ne,Ee),i=V.getFrustum(),x(C,I,V.camera,ne,this.type)}V.isPointLightShadow!==!0&&this.type===Tn&&v(V,I),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,E,D)};function v(A,C){let I=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new En(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,I,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,I,f,_,null)}function M(A,C,I,w){let E=null,D=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)E=D;else if(E=I.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let F=E.uuid,k=C.uuid,H=l[F];H===void 0&&(H={},l[F]=H);let X=H[k];X===void 0&&(X=E.clone(),H[k]=X,C.addEventListener("dispose",b)),E=X}if(E.visible=C.visible,E.wireframe=C.wireframe,w===Tn?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:h[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let F=n.properties.get(E);F.light=I}return E}function x(A,C,I,w,E){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===Tn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);let k=e.update(A),H=A.material;if(Array.isArray(H)){let X=k.groups;for(let W=0,ne=X.length;W<ne;W++){let V=X[W],ae=H[V.materialIndex];if(ae&&ae.visible){let ue=M(A,ae,w,E);A.onBeforeShadow(n,A,C,I,k,ue,V),n.renderBufferDirect(I,null,k,ue,A,V),A.onAfterShadow(n,A,C,I,k,ue,V)}}}else if(H.visible){let X=M(A,H,w,E);A.onBeforeShadow(n,A,C,I,k,X,null),n.renderBufferDirect(I,null,k,X,A,null),A.onAfterShadow(n,A,C,I,k,X,null)}}let F=A.children;for(let k=0,H=F.length;k<H;k++)x(F[k],C,I,w,E)}function b(A){A.target.removeEventListener("dispose",b);for(let I in l){let w=l[I],E=A.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}var Z_={[$o]:Zo,[jo]:Qo,[Jo]:ea,[wi]:Ko,[Zo]:$o,[Qo]:jo,[ea]:Jo,[Ko]:wi};function j_(n,e){function t(){let L=!1,te=new yt,se=null,fe=new yt(0,0,0,0);return{setMask:function(K){se!==K&&!L&&(n.colorMask(K,K,K,K),se=K)},setLocked:function(K){L=K},setClear:function(K,$,ge,Ne,ot){ot===!0&&(K*=Ne,$*=Ne,ge*=Ne),te.set(K,$,ge,Ne),fe.equals(te)===!1&&(n.clearColor(K,$,ge,Ne),fe.copy(te))},reset:function(){L=!1,se=null,fe.set(-1,0,0,0)}}}function i(){let L=!1,te=!1,se=null,fe=null,K=null;return{setReversed:function($){if(te!==$){let ge=e.get("EXT_clip_control");$?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),te=$;let Ne=K;K=null,this.setClear(Ne)}},getReversed:function(){return te},setTest:function($){$?j(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function($){se!==$&&!L&&(n.depthMask($),se=$)},setFunc:function($){if(te&&($=Z_[$]),fe!==$){switch($){case $o:n.depthFunc(n.NEVER);break;case Zo:n.depthFunc(n.ALWAYS);break;case jo:n.depthFunc(n.LESS);break;case wi:n.depthFunc(n.LEQUAL);break;case Jo:n.depthFunc(n.EQUAL);break;case Ko:n.depthFunc(n.GEQUAL);break;case Qo:n.depthFunc(n.GREATER);break;case ea:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=$}},setLocked:function($){L=$},setClear:function($){K!==$&&(te&&($=1-$),n.clearDepth($),K=$)},reset:function(){L=!1,se=null,fe=null,K=null,te=!1}}}function s(){let L=!1,te=null,se=null,fe=null,K=null,$=null,ge=null,Ne=null,ot=null;return{setTest:function(je){L||(je?j(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(je){te!==je&&!L&&(n.stencilMask(je),te=je)},setFunc:function(je,Un,Mn){(se!==je||fe!==Un||K!==Mn)&&(n.stencilFunc(je,Un,Mn),se=je,fe=Un,K=Mn)},setOp:function(je,Un,Mn){($!==je||ge!==Un||Ne!==Mn)&&(n.stencilOp(je,Un,Mn),$=je,ge=Un,Ne=Mn)},setLocked:function(je){L=je},setClear:function(je){ot!==je&&(n.clearStencil(je),ot=je)},reset:function(){L=!1,te=null,se=null,fe=null,K=null,$=null,ge=null,Ne=null,ot=null}}}let r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,M=null,x=null,b=null,A=null,C=new Ue(0,0,0),I=0,w=!1,E=null,D=null,F=null,k=null,H=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ne=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=ne>=1):V.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=ne>=2);let ae=null,ue={},Ee=n.getParameter(n.SCISSOR_BOX),Ve=n.getParameter(n.VIEWPORT),rt=new yt().fromArray(Ee),ut=new yt().fromArray(Ve);function Ze(L,te,se,fe){let K=new Uint8Array(4),$=n.createTexture();n.bindTexture(L,$),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ge=0;ge<se;ge++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(te,0,n.RGBA,1,1,fe,0,n.RGBA,n.UNSIGNED_BYTE,K):n.texImage2D(te+ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,K);return $}let Y={};Y[n.TEXTURE_2D]=Ze(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=Ze(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=Ze(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=Ze(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(n.DEPTH_TEST),o.setFunc(wi),Pe(!1),_e(nc),j(n.CULL_FACE),dt(qn);function j(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function pe(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Ie(L,te){return h[L]!==te?(n.bindFramebuffer(L,te),h[L]=te,L===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=te),L===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=te),!0):!1}function be(L,te){let se=f,fe=!1;if(L){se=d.get(te),se===void 0&&(se=[],d.set(te,se));let K=L.textures;if(se.length!==K.length||se[0]!==n.COLOR_ATTACHMENT0){for(let $=0,ge=K.length;$<ge;$++)se[$]=n.COLOR_ATTACHMENT0+$;se.length=K.length,fe=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,fe=!0);fe&&n.drawBuffers(se)}function qe(L){return g!==L?(n.useProgram(L),g=L,!0):!1}let Ft={[ii]:n.FUNC_ADD,[iu]:n.FUNC_SUBTRACT,[su]:n.FUNC_REVERSE_SUBTRACT};Ft[ru]=n.MIN,Ft[ou]=n.MAX;let P={[au]:n.ZERO,[lu]:n.ONE,[cu]:n.SRC_COLOR,[xo]:n.SRC_ALPHA,[mu]:n.SRC_ALPHA_SATURATE,[fu]:n.DST_COLOR,[uu]:n.DST_ALPHA,[hu]:n.ONE_MINUS_SRC_COLOR,[yo]:n.ONE_MINUS_SRC_ALPHA,[pu]:n.ONE_MINUS_DST_COLOR,[du]:n.ONE_MINUS_DST_ALPHA,[gu]:n.CONSTANT_COLOR,[_u]:n.ONE_MINUS_CONSTANT_COLOR,[xu]:n.CONSTANT_ALPHA,[yu]:n.ONE_MINUS_CONSTANT_ALPHA};function dt(L,te,se,fe,K,$,ge,Ne,ot,je){if(L===qn){_===!0&&(pe(n.BLEND),_=!1);return}if(_===!1&&(j(n.BLEND),_=!0),L!==nu){if(L!==m||je!==w){if((p!==ii||x!==ii)&&(n.blendEquation(n.FUNC_ADD),p=ii,x=ii),je)switch(L){case Ei:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sc:n.blendFunc(n.ONE,n.ONE);break;case rc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case oc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ei:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case rc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case oc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,M=null,b=null,A=null,C.set(0,0,0),I=0,m=L,w=je}return}K=K||te,$=$||se,ge=ge||fe,(te!==p||K!==x)&&(n.blendEquationSeparate(Ft[te],Ft[K]),p=te,x=K),(se!==v||fe!==M||$!==b||ge!==A)&&(n.blendFuncSeparate(P[se],P[fe],P[$],P[ge]),v=se,M=fe,b=$,A=ge),(Ne.equals(C)===!1||ot!==I)&&(n.blendColor(Ne.r,Ne.g,Ne.b,ot),C.copy(Ne),I=ot),m=L,w=!1}function Fe(L,te){L.side===ht?pe(n.CULL_FACE):j(n.CULL_FACE);let se=L.side===Xt;te&&(se=!se),Pe(se),L.blending===Ei&&L.transparent===!1?dt(qn):dt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let fe=L.stencilWrite;a.setTest(fe),fe&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),xe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(L){E!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),E=L)}function _e(L){L!==Qh?(j(n.CULL_FACE),L!==D&&(L===nc?n.cullFace(n.BACK):L===eu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),D=L}function ft(L){L!==F&&(W&&n.lineWidth(L),F=L)}function xe(L,te,se){L?(j(n.POLYGON_OFFSET_FILL),(k!==te||H!==se)&&(n.polygonOffset(te,se),k=te,H=se)):pe(n.POLYGON_OFFSET_FILL)}function ze(L){L?j(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function Rt(L){L===void 0&&(L=n.TEXTURE0+X-1),ae!==L&&(n.activeTexture(L),ae=L)}function St(L,te,se){se===void 0&&(ae===null?se=n.TEXTURE0+X-1:se=ae);let fe=ue[se];fe===void 0&&(fe={type:void 0,texture:void 0},ue[se]=fe),(fe.type!==L||fe.texture!==te)&&(ae!==se&&(n.activeTexture(se),ae=se),n.bindTexture(L,te||Y[L]),fe.type=L,fe.texture=te)}function T(){let L=ue[ae];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{n.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{n.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{n.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{n.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{n.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{n.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{n.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(L){rt.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),rt.copy(L))}function Re(L){ut.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),ut.copy(L))}function Me(L,te){let se=l.get(te);se===void 0&&(se=new WeakMap,l.set(te,se));let fe=se.get(L);fe===void 0&&(fe=n.getUniformBlockIndex(te,L.name),se.set(L,fe))}function le(L,te){let fe=l.get(te).get(L);c.get(te)!==fe&&(n.uniformBlockBinding(te,fe,L.__bindingPointIndex),c.set(te,fe))}function Be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ae=null,ue={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,M=null,x=null,b=null,A=null,C=new Ue(0,0,0),I=0,w=!1,E=null,D=null,F=null,k=null,H=null,rt.set(0,0,n.canvas.width,n.canvas.height),ut.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:pe,bindFramebuffer:Ie,drawBuffers:be,useProgram:qe,setBlending:dt,setMaterial:Fe,setFlipSided:Pe,setCullFace:_e,setLineWidth:ft,setPolygonOffset:xe,setScissorTest:ze,activeTexture:Rt,bindTexture:St,unbindTexture:T,compressedTexImage2D:y,compressedTexImage3D:O,texImage2D:ve,texImage3D:ee,updateUBOMapping:Me,uniformBlockBinding:le,texStorage2D:ie,texStorage3D:ye,texSubImage2D:q,texSubImage3D:Z,compressedTexSubImage2D:G,compressedTexSubImage3D:Se,scissor:he,viewport:Re,reset:Be}}function J_(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new re,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return f?new OffscreenCanvas(T,y):Xs("canvas")}function _(T,y,O){let q=1,Z=St(T);if((Z.width>O||Z.height>O)&&(q=O/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let G=Math.floor(q*Z.width),Se=Math.floor(q*Z.height);h===void 0&&(h=g(G,Se));let ie=y?g(G,Se):h;return ie.width=G,ie.height=Se,ie.getContext("2d").drawImage(T,0,0,G,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+G+"x"+Se+")."),ie}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(T,y,O,q,Z=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let G=y;if(y===n.RED&&(O===n.FLOAT&&(G=n.R32F),O===n.HALF_FLOAT&&(G=n.R16F),O===n.UNSIGNED_BYTE&&(G=n.R8)),y===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(G=n.R8UI),O===n.UNSIGNED_SHORT&&(G=n.R16UI),O===n.UNSIGNED_INT&&(G=n.R32UI),O===n.BYTE&&(G=n.R8I),O===n.SHORT&&(G=n.R16I),O===n.INT&&(G=n.R32I)),y===n.RG&&(O===n.FLOAT&&(G=n.RG32F),O===n.HALF_FLOAT&&(G=n.RG16F),O===n.UNSIGNED_BYTE&&(G=n.RG8)),y===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(G=n.RG8UI),O===n.UNSIGNED_SHORT&&(G=n.RG16UI),O===n.UNSIGNED_INT&&(G=n.RG32UI),O===n.BYTE&&(G=n.RG8I),O===n.SHORT&&(G=n.RG16I),O===n.INT&&(G=n.RG32I)),y===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(G=n.RGB8UI),O===n.UNSIGNED_SHORT&&(G=n.RGB16UI),O===n.UNSIGNED_INT&&(G=n.RGB32UI),O===n.BYTE&&(G=n.RGB8I),O===n.SHORT&&(G=n.RGB16I),O===n.INT&&(G=n.RGB32I)),y===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),O===n.UNSIGNED_INT&&(G=n.RGBA32UI),O===n.BYTE&&(G=n.RGBA8I),O===n.SHORT&&(G=n.RGBA16I),O===n.INT&&(G=n.RGBA32I)),y===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(G=n.R11F_G11F_B10F)),y===n.RGBA){let Se=Z?Ws:Ye.getTransfer(q);O===n.FLOAT&&(G=n.RGBA32F),O===n.HALF_FLOAT&&(G=n.RGBA16F),O===n.UNSIGNED_BYTE&&(G=Se===Ke?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function x(T,y){let O;return T?y===null||y===ui||y===Ss?O=n.DEPTH24_STENCIL8:y===Cn?O=n.DEPTH32F_STENCIL8:y===vs&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ui||y===Ss?O=n.DEPTH_COMPONENT24:y===Cn?O=n.DEPTH_COMPONENT32F:y===vs&&(O=n.DEPTH_COMPONENT16),O}function b(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==$t&&T.minFilter!==on?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function A(T){let y=T.target;y.removeEventListener("dispose",A),I(y),y.isVideoTexture&&u.delete(y)}function C(T){let y=T.target;y.removeEventListener("dispose",C),E(y)}function I(T){let y=i.get(T);if(y.__webglInit===void 0)return;let O=T.source,q=d.get(O);if(q){let Z=q[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&w(T),Object.keys(q).length===0&&d.delete(O)}i.remove(T)}function w(T){let y=i.get(T);n.deleteTexture(y.__webglTexture);let O=T.source,q=d.get(O);delete q[y.__cacheKey],o.memory.textures--}function E(T){let y=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let Z=0;Z<y.__webglFramebuffer[q].length;Z++)n.deleteFramebuffer(y.__webglFramebuffer[q][Z]);else n.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)n.deleteFramebuffer(y.__webglFramebuffer[q]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let O=T.textures;for(let q=0,Z=O.length;q<Z;q++){let G=i.get(O[q]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(O[q])}i.remove(T)}let D=0;function F(){D=0}function k(){let T=D;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),D+=1,T}function H(T){let y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function X(T,y){let O=i.get(T);if(T.isVideoTexture&&ze(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){let q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,T,y);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+y)}function W(T,y){let O=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Y(O,T,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+y)}function ne(T,y){let O=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Y(O,T,y);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+y)}function V(T,y){let O=i.get(T);if(T.version>0&&O.__version!==T.version){j(O,T,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+y)}let ae={[vo]:n.REPEAT,[ni]:n.CLAMP_TO_EDGE,[Mo]:n.MIRRORED_REPEAT},ue={[$t]:n.NEAREST,[Cu]:n.NEAREST_MIPMAP_NEAREST,[wr]:n.NEAREST_MIPMAP_LINEAR,[on]:n.LINEAR,[sa]:n.LINEAR_MIPMAP_NEAREST,[An]:n.LINEAR_MIPMAP_LINEAR},Ee={[Iu]:n.NEVER,[Bu]:n.ALWAYS,[Lu]:n.LESS,[xc]:n.LEQUAL,[Nu]:n.EQUAL,[Ou]:n.GEQUAL,[Uu]:n.GREATER,[Fu]:n.NOTEQUAL};function Ve(T,y){if(y.type===Cn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===on||y.magFilter===sa||y.magFilter===wr||y.magFilter===An||y.minFilter===on||y.minFilter===sa||y.minFilter===wr||y.minFilter===An)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,ae[y.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ae[y.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ae[y.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ue[y.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ue[y.minFilter]),y.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Ee[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===$t||y.minFilter!==wr&&y.minFilter!==An||y.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function rt(T,y){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",A));let q=y.source,Z=d.get(q);Z===void 0&&(Z={},d.set(q,Z));let G=H(y);if(G!==T.__cacheKey){Z[G]===void 0&&(Z[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Z[G].usedTimes++;let Se=Z[T.__cacheKey];Se!==void 0&&(Z[T.__cacheKey].usedTimes--,Se.usedTimes===0&&w(y)),T.__cacheKey=G,T.__webglTexture=Z[G].texture}return O}function ut(T,y,O){return Math.floor(Math.floor(T/O)/y)}function Ze(T,y,O,q){let G=T.updateRanges;if(G.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,O,q,y.data);else{G.sort((ee,he)=>ee.start-he.start);let Se=0;for(let ee=1;ee<G.length;ee++){let he=G[Se],Re=G[ee],Me=he.start+he.count,le=ut(Re.start,y.width,4),Be=ut(he.start,y.width,4);Re.start<=Me+1&&le===Be&&ut(Re.start+Re.count-1,y.width,4)===le?he.count=Math.max(he.count,Re.start+Re.count-he.start):(++Se,G[Se]=Re)}G.length=Se+1;let ie=n.getParameter(n.UNPACK_ROW_LENGTH),ye=n.getParameter(n.UNPACK_SKIP_PIXELS),ve=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let ee=0,he=G.length;ee<he;ee++){let Re=G[ee],Me=Math.floor(Re.start/4),le=Math.ceil(Re.count/4),Be=Me%y.width,L=Math.floor(Me/y.width),te=le,se=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Be),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Be,L,te,se,O,q,y.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ie),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ye),n.pixelStorei(n.UNPACK_SKIP_ROWS,ve)}}function Y(T,y,O){let q=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=n.TEXTURE_3D);let Z=rt(T,y),G=y.source;t.bindTexture(q,T.__webglTexture,n.TEXTURE0+O);let Se=i.get(G);if(G.version!==Se.__version||Z===!0){t.activeTexture(n.TEXTURE0+O);let ie=Ye.getPrimaries(Ye.workingColorSpace),ye=y.colorSpace===Yn?null:Ye.getPrimaries(y.colorSpace),ve=y.colorSpace===Yn||ie===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let ee=_(y.image,!1,s.maxTextureSize);ee=Rt(y,ee);let he=r.convert(y.format,y.colorSpace),Re=r.convert(y.type),Me=M(y.internalFormat,he,Re,y.colorSpace,y.isVideoTexture);Ve(q,y);let le,Be=y.mipmaps,L=y.isVideoTexture!==!0,te=Se.__version===void 0||Z===!0,se=G.dataReady,fe=b(y,ee);if(y.isDepthTexture)Me=x(y.format===bs,y.type),te&&(L?t.texStorage2D(n.TEXTURE_2D,1,Me,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Me,ee.width,ee.height,0,he,Re,null));else if(y.isDataTexture)if(Be.length>0){L&&te&&t.texStorage2D(n.TEXTURE_2D,fe,Me,Be[0].width,Be[0].height);for(let K=0,$=Be.length;K<$;K++)le=Be[K],L?se&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,le.width,le.height,he,Re,le.data):t.texImage2D(n.TEXTURE_2D,K,Me,le.width,le.height,0,he,Re,le.data);y.generateMipmaps=!1}else L?(te&&t.texStorage2D(n.TEXTURE_2D,fe,Me,ee.width,ee.height),se&&Ze(y,ee,he,Re)):t.texImage2D(n.TEXTURE_2D,0,Me,ee.width,ee.height,0,he,Re,ee.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){L&&te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Me,Be[0].width,Be[0].height,ee.depth);for(let K=0,$=Be.length;K<$;K++)if(le=Be[K],y.format!==Jt)if(he!==null)if(L){if(se)if(y.layerUpdates.size>0){let ge=Ac(le.width,le.height,y.format,y.type);for(let Ne of y.layerUpdates){let ot=le.data.subarray(Ne*ge/le.data.BYTES_PER_ELEMENT,(Ne+1)*ge/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,Ne,le.width,le.height,1,he,ot)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,le.width,le.height,ee.depth,he,le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,Me,le.width,le.height,ee.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,le.width,le.height,ee.depth,he,Re,le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,Me,le.width,le.height,ee.depth,0,he,Re,le.data)}else{L&&te&&t.texStorage2D(n.TEXTURE_2D,fe,Me,Be[0].width,Be[0].height);for(let K=0,$=Be.length;K<$;K++)le=Be[K],y.format!==Jt?he!==null?L?se&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,le.width,le.height,he,le.data):t.compressedTexImage2D(n.TEXTURE_2D,K,Me,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?se&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,le.width,le.height,he,Re,le.data):t.texImage2D(n.TEXTURE_2D,K,Me,le.width,le.height,0,he,Re,le.data)}else if(y.isDataArrayTexture)if(L){if(te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Me,ee.width,ee.height,ee.depth),se)if(y.layerUpdates.size>0){let K=Ac(ee.width,ee.height,y.format,y.type);for(let $ of y.layerUpdates){let ge=ee.data.subarray($*K/ee.data.BYTES_PER_ELEMENT,($+1)*K/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,ee.width,ee.height,1,he,Re,ge)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,he,Re,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,ee.width,ee.height,ee.depth,0,he,Re,ee.data);else if(y.isData3DTexture)L?(te&&t.texStorage3D(n.TEXTURE_3D,fe,Me,ee.width,ee.height,ee.depth),se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,he,Re,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Me,ee.width,ee.height,ee.depth,0,he,Re,ee.data);else if(y.isFramebufferTexture){if(te)if(L)t.texStorage2D(n.TEXTURE_2D,fe,Me,ee.width,ee.height);else{let K=ee.width,$=ee.height;for(let ge=0;ge<fe;ge++)t.texImage2D(n.TEXTURE_2D,ge,Me,K,$,0,he,Re,null),K>>=1,$>>=1}}else if(Be.length>0){if(L&&te){let K=St(Be[0]);t.texStorage2D(n.TEXTURE_2D,fe,Me,K.width,K.height)}for(let K=0,$=Be.length;K<$;K++)le=Be[K],L?se&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,he,Re,le):t.texImage2D(n.TEXTURE_2D,K,Me,he,Re,le);y.generateMipmaps=!1}else if(L){if(te){let K=St(ee);t.texStorage2D(n.TEXTURE_2D,fe,Me,K.width,K.height)}se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,Re,ee)}else t.texImage2D(n.TEXTURE_2D,0,Me,he,Re,ee);m(y)&&p(q),Se.__version=G.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function j(T,y,O){if(y.image.length!==6)return;let q=rt(T,y),Z=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+O);let G=i.get(Z);if(Z.version!==G.__version||q===!0){t.activeTexture(n.TEXTURE0+O);let Se=Ye.getPrimaries(Ye.workingColorSpace),ie=y.colorSpace===Yn?null:Ye.getPrimaries(y.colorSpace),ye=y.colorSpace===Yn||Se===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let ve=y.isCompressedTexture||y.image[0].isCompressedTexture,ee=y.image[0]&&y.image[0].isDataTexture,he=[];for(let $=0;$<6;$++)!ve&&!ee?he[$]=_(y.image[$],!0,s.maxCubemapSize):he[$]=ee?y.image[$].image:y.image[$],he[$]=Rt(y,he[$]);let Re=he[0],Me=r.convert(y.format,y.colorSpace),le=r.convert(y.type),Be=M(y.internalFormat,Me,le,y.colorSpace),L=y.isVideoTexture!==!0,te=G.__version===void 0||q===!0,se=Z.dataReady,fe=b(y,Re);Ve(n.TEXTURE_CUBE_MAP,y);let K;if(ve){L&&te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,Be,Re.width,Re.height);for(let $=0;$<6;$++){K=he[$].mipmaps;for(let ge=0;ge<K.length;ge++){let Ne=K[ge];y.format!==Jt?Me!==null?L?se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge,0,0,Ne.width,Ne.height,Me,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge,Be,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge,0,0,Ne.width,Ne.height,Me,le,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge,Be,Ne.width,Ne.height,0,Me,le,Ne.data)}}}else{if(K=y.mipmaps,L&&te){K.length>0&&fe++;let $=St(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,Be,$.width,$.height)}for(let $=0;$<6;$++)if(ee){L?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,he[$].width,he[$].height,Me,le,he[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Be,he[$].width,he[$].height,0,Me,le,he[$].data);for(let ge=0;ge<K.length;ge++){let ot=K[ge].image[$].image;L?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge+1,0,0,ot.width,ot.height,Me,le,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge+1,Be,ot.width,ot.height,0,Me,le,ot.data)}}else{L?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Me,le,he[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Be,Me,le,he[$]);for(let ge=0;ge<K.length;ge++){let Ne=K[ge];L?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge+1,0,0,Me,le,Ne.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge+1,Be,Me,le,Ne.image[$])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),G.__version=Z.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function pe(T,y,O,q,Z,G){let Se=r.convert(O.format,O.colorSpace),ie=r.convert(O.type),ye=M(O.internalFormat,Se,ie,O.colorSpace),ve=i.get(y),ee=i.get(O);if(ee.__renderTarget=y,!ve.__hasExternalTextures){let he=Math.max(1,y.width>>G),Re=Math.max(1,y.height>>G);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,G,ye,he,Re,y.depth,0,Se,ie,null):t.texImage2D(Z,G,ye,he,Re,0,Se,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),xe(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Z,ee.__webglTexture,0,ft(y)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Z,ee.__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(T,y,O){if(n.bindRenderbuffer(n.RENDERBUFFER,T),y.depthBuffer){let q=y.depthTexture,Z=q&&q.isDepthTexture?q.type:null,G=x(y.stencilBuffer,Z),Se=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=ft(y);xe(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,G,y.width,y.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,G,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,G,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,T)}else{let q=y.textures;for(let Z=0;Z<q.length;Z++){let G=q[Z],Se=r.convert(G.format,G.colorSpace),ie=r.convert(G.type),ye=M(G.internalFormat,Se,ie,G.colorSpace),ve=ft(y);O&&xe(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,ye,y.width,y.height):xe(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,ye,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ye,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=i.get(y.depthTexture);q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);let Z=q.__webglTexture,G=ft(y);if(y.depthTexture.format===ls)xe(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(y.depthTexture.format===bs)xe(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function qe(T){let y=i.get(T),O=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){let q=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){let Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=q}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let q=T.texture.mipmaps;q&&q.length>0?be(y.__webglFramebuffer[0],T):be(y.__webglFramebuffer,T)}else if(O){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=n.createRenderbuffer(),Ie(y.__webglDepthbuffer[q],T,!1);else{let Z=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=y.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,G)}}else{let q=T.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Ie(y.__webglDepthbuffer,T,!1);else{let Z=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,G)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(T,y,O){let q=i.get(T);y!==void 0&&pe(q.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&qe(T)}function P(T){let y=T.texture,O=i.get(T),q=i.get(y);T.addEventListener("dispose",C);let Z=T.textures,G=T.isWebGLCubeRenderTarget===!0,Se=Z.length>1;if(Se||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=y.version,o.memory.textures++),G){O.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[ie]=[];for(let ye=0;ye<y.mipmaps.length;ye++)O.__webglFramebuffer[ie][ye]=n.createFramebuffer()}else O.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let ie=0;ie<y.mipmaps.length;ie++)O.__webglFramebuffer[ie]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Se)for(let ie=0,ye=Z.length;ie<ye;ie++){let ve=i.get(Z[ie]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&xe(T)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ie=0;ie<Z.length;ie++){let ye=Z[ie];O.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ie]);let ve=r.convert(ye.format,ye.colorSpace),ee=r.convert(ye.type),he=M(ye.internalFormat,ve,ee,ye.colorSpace,T.isXRRenderTarget===!0),Re=ft(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,he,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,O.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,y);for(let ie=0;ie<6;ie++)if(y.mipmaps&&y.mipmaps.length>0)for(let ye=0;ye<y.mipmaps.length;ye++)pe(O.__webglFramebuffer[ie][ye],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye);else pe(O.__webglFramebuffer[ie],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ie=0,ye=Z.length;ie<ye;ie++){let ve=Z[ie],ee=i.get(ve),he=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,ee.__webglTexture),Ve(he,ve),pe(O.__webglFramebuffer,T,ve,n.COLOR_ATTACHMENT0+ie,he,0),m(ve)&&p(he)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ie=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,q.__webglTexture),Ve(ie,y),y.mipmaps&&y.mipmaps.length>0)for(let ye=0;ye<y.mipmaps.length;ye++)pe(O.__webglFramebuffer[ye],T,y,n.COLOR_ATTACHMENT0,ie,ye);else pe(O.__webglFramebuffer,T,y,n.COLOR_ATTACHMENT0,ie,0);m(y)&&p(ie),t.unbindTexture()}T.depthBuffer&&qe(T)}function dt(T){let y=T.textures;for(let O=0,q=y.length;O<q;O++){let Z=y[O];if(m(Z)){let G=v(T),Se=i.get(Z).__webglTexture;t.bindTexture(G,Se),p(G),t.unbindTexture()}}}let Fe=[],Pe=[];function _e(T){if(T.samples>0){if(xe(T)===!1){let y=T.textures,O=T.width,q=T.height,Z=n.COLOR_BUFFER_BIT,G=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(T),ie=y.length>1;if(ie)for(let ve=0;ve<y.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);let ye=T.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ve=0;ve<y.length;ve++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[ve]);let ee=i.get(y[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,O,q,0,0,O,q,Z,n.NEAREST),c===!0&&(Fe.length=0,Pe.length=0,Fe.push(n.COLOR_ATTACHMENT0+ve),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Fe.push(G),Pe.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Pe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let ve=0;ve<y.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,Se.__webglColorRenderbuffer[ve]);let ee=i.get(y[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function ft(T){return Math.min(s.maxSamples,T.samples)}function xe(T){let y=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ze(T){let y=o.render.frame;u.get(T)!==y&&(u.set(T,y),T.update())}function Rt(T,y){let O=T.colorSpace,q=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Ti&&O!==Yn&&(Ye.getTransfer(O)===Ke?(q!==Jt||Z!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function St(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=ne,this.setTextureCube=V,this.rebindTextures=Ft,this.setupRenderTarget=P,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=xe}function K_(n,e){function t(i,s=Yn){let r,o=Ye.getTransfer(s);if(i===vn)return n.UNSIGNED_BYTE;if(i===oa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===aa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===uc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===dc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===cc)return n.BYTE;if(i===hc)return n.SHORT;if(i===vs)return n.UNSIGNED_SHORT;if(i===ra)return n.INT;if(i===ui)return n.UNSIGNED_INT;if(i===Cn)return n.FLOAT;if(i===Ms)return n.HALF_FLOAT;if(i===fc)return n.ALPHA;if(i===pc)return n.RGB;if(i===Jt)return n.RGBA;if(i===ls)return n.DEPTH_COMPONENT;if(i===bs)return n.DEPTH_STENCIL;if(i===mc)return n.RED;if(i===la)return n.RED_INTEGER;if(i===gc)return n.RG;if(i===ca)return n.RG_INTEGER;if(i===ha)return n.RGBA_INTEGER;if(i===Tr||i===Ar||i===Cr||i===Rr)if(o===Ke)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ua||i===da||i===fa||i===pa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ma||i===ga||i===_a)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ma||i===ga)return o===Ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===_a)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xa||i===ya||i===va||i===Ma||i===Sa||i===ba||i===Ea||i===wa||i===Ta||i===Aa||i===Ca||i===Ra||i===Pa||i===Da)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===xa)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ya)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===va)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ma)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sa)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ba)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ea)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wa)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ta)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Aa)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ca)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ra)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pa)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Da)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ia||i===La||i===Na)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ia)return o===Ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===La)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Na)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ua||i===Fa||i===Oa||i===Ba)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ua)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Fa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ba)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ss?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Q_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ex=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,kc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ir(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new xn({vertexShader:Q_,fragmentShader:ex,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Le(new jt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hc=class extends bn{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new kc,p={},v=t.getContextAttributes(),M=null,x=null,b=[],A=[],C=new re,I=null,w=new zt;w.viewport=new yt;let E=new zt;E.viewport=new yt;let D=[w,E],F=new Yo,k=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=b[Y];return j===void 0&&(j=new fs,b[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=b[Y];return j===void 0&&(j=new fs,b[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=b[Y];return j===void 0&&(j=new fs,b[Y]=j),j.getHandSpace()};function X(Y){let j=A.indexOf(Y.inputSource);if(j===-1)return;let pe=b[j];pe!==void 0&&(pe.update(Y.inputSource,Y.frame,l||o),pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ne);for(let Y=0;Y<b.length;Y++){let j=A[Y];j!==null&&(A[Y]=null,b[Y].disconnect(j))}k=null,H=null,m.reset();for(let Y in p)delete p[Y];e.setRenderTarget(M),f=null,d=null,h=null,s=null,x=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ne),v.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ie=null,be=null;v.depth&&(be=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=v.stencil?bs:ls,Ie=v.stencil?Ss:ui);let qe={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(qe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new En(d.textureWidth,d.textureHeight,{format:Jt,type:vn,depthTexture:new nr(d.textureWidth,d.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let pe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new En(f.framebufferWidth,f.framebufferHeight,{format:Jt,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ze.setContext(s),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(Y){for(let j=0;j<Y.removed.length;j++){let pe=Y.removed[j],Ie=A.indexOf(pe);Ie>=0&&(A[Ie]=null,b[Ie].disconnect(pe))}for(let j=0;j<Y.added.length;j++){let pe=Y.added[j],Ie=A.indexOf(pe);if(Ie===-1){for(let qe=0;qe<b.length;qe++)if(qe>=A.length){A.push(pe),Ie=qe;break}else if(A[qe]===null){A[qe]=pe,Ie=qe;break}if(Ie===-1)break}let be=b[Ie];be&&be.connect(pe)}}let V=new R,ae=new R;function ue(Y,j,pe){V.setFromMatrixPosition(j.matrixWorld),ae.setFromMatrixPosition(pe.matrixWorld);let Ie=V.distanceTo(ae),be=j.projectionMatrix.elements,qe=pe.projectionMatrix.elements,Ft=be[14]/(be[10]-1),P=be[14]/(be[10]+1),dt=(be[9]+1)/be[5],Fe=(be[9]-1)/be[5],Pe=(be[8]-1)/be[0],_e=(qe[8]+1)/qe[0],ft=Ft*Pe,xe=Ft*_e,ze=Ie/(-Pe+_e),Rt=ze*-Pe;if(j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Rt),Y.translateZ(ze),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),be[10]===-1)Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let St=Ft+ze,T=P+ze,y=ft-Rt,O=xe+(Ie-Rt),q=dt*P/T*St,Z=Fe*P/T*St;Y.projectionMatrix.makePerspective(y,O,q,Z,St,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Ee(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let j=Y.near,pe=Y.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),F.near=E.near=w.near=j,F.far=E.far=w.far=pe,(k!==F.near||H!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),k=F.near,H=F.far),F.layers.mask=Y.layers.mask|6,w.layers.mask=F.layers.mask&3,E.layers.mask=F.layers.mask&5;let Ie=Y.parent,be=F.cameras;Ee(F,Ie);for(let qe=0;qe<be.length;qe++)Ee(be[qe],Ie);be.length===2?ue(F,w,E):F.projectionMatrix.copy(w.projectionMatrix),Ve(Y,F,Ie)};function Ve(Y,j,pe){pe===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=cs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Y){return p[Y]};let rt=null;function ut(Y,j){if(u=j.getViewerPose(l||o),g=j,u!==null){let pe=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Ie=!1;pe.length!==F.cameras.length&&(F.cameras.length=0,Ie=!0);for(let P=0;P<pe.length;P++){let dt=pe[P],Fe=null;if(f!==null)Fe=f.getViewport(dt);else{let _e=h.getViewSubImage(d,dt);Fe=_e.viewport,P===0&&(e.setRenderTargetTextures(x,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(x))}let Pe=D[P];Pe===void 0&&(Pe=new zt,Pe.layers.enable(P),Pe.viewport=new yt,D[P]=Pe),Pe.matrix.fromArray(dt.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(dt.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),P===0&&(F.matrix.copy(Pe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ie===!0&&F.cameras.push(Pe)}let be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=i.getBinding();let P=h.getDepthInformation(pe[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(be&&be.includes("camera-access")&&_){e.state.unbindTexture(),h=i.getBinding();for(let P=0;P<pe.length;P++){let dt=pe[P].camera;if(dt){let Fe=p[dt];Fe||(Fe=new ir,p[dt]=Fe);let Pe=h.getCameraImage(dt);Fe.sourceTexture=Pe}}}}for(let pe=0;pe<b.length;pe++){let Ie=A[pe],be=b[pe];Ie!==null&&be!==void 0&&be.update(Ie,j,l||o)}rt&&rt(Y,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}let Ze=new _d;Ze.setAnimationLoop(ut),this.setAnimationLoop=function(Y){rt=Y},this.dispose=function(){}}},Bi=new an,tx=new pt;function nx(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,bc(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p),M=v.envMap,x=v.envMapRotation;M&&(m.envMap.value=M,Bi.copy(x),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),m.envMapRotation.value.setFromMatrix4(tx.makeRotationFromEuler(Bi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ix(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){let x=M.program;i.uniformBlockBinding(v,x)}function l(v,M){let x=s[v.id];x===void 0&&(g(v),x=u(v),s[v.id]=x,v.addEventListener("dispose",m));let b=M.program;i.updateUBOMapping(v,b);let A=e.render.frame;r[v.id]!==A&&(d(v),r[v.id]=A)}function u(v){let M=h();v.__bindingPointIndex=M;let x=n.createBuffer(),b=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,b,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,x),x}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let M=s[v.id],x=v.uniforms,b=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let A=0,C=x.length;A<C;A++){let I=Array.isArray(x[A])?x[A]:[x[A]];for(let w=0,E=I.length;w<E;w++){let D=I[w];if(f(D,A,w,b)===!0){let F=D.__offset,k=Array.isArray(D.value)?D.value:[D.value],H=0;for(let X=0;X<k.length;X++){let W=k[X],ne=_(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,F+H,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,H),H+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,M,x,b){let A=v.value,C=M+"_"+x;if(b[C]===void 0)return typeof A=="number"||typeof A=="boolean"?b[C]=A:b[C]=A.clone(),!0;{let I=b[C];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return b[C]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(v){let M=v.uniforms,x=0,b=16;for(let C=0,I=M.length;C<I;C++){let w=Array.isArray(M[C])?M[C]:[M[C]];for(let E=0,D=w.length;E<D;E++){let F=w[E],k=Array.isArray(F.value)?F.value:[F.value];for(let H=0,X=k.length;H<X;H++){let W=k[H],ne=_(W),V=x%b,ae=V%ne.boundary,ue=V+ae;x+=ae,ue!==0&&b-ue<ne.storage&&(x+=b-ue),F.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=ne.storage}}}let A=x%b;return A>0&&(x+=b-A),v.__size=x,v.__cache={},this}function _(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){let M=v.target;M.removeEventListener("dispose",m);let x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Ga=class{constructor(e={}){let{canvas:t=zu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,v=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,b=!1;this._outputColorSpace=Et;let A=0,C=0,I=null,w=-1,E=null,D=new yt,F=new yt,k=null,H=new Ue(0),X=0,W=t.width,ne=t.height,V=1,ae=null,ue=null,Ee=new yt(0,0,W,ne),Ve=new yt(0,0,W,ne),rt=!1,ut=new ps,Ze=!1,Y=!1,j=new pt,pe=new R,Ie=new yt,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function Ft(){return I===null?V:1}let P=i;function dt(S,N){return t.getContext(S,N)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",K,!1),P===null){let N="webgl2";if(P=dt(N,S),P===null)throw dt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Fe,Pe,_e,ft,xe,ze,Rt,St,T,y,O,q,Z,G,Se,ie,ye,ve,ee,he,Re,Me,le,Be;function L(){Fe=new M0(P),Fe.init(),Me=new K_(P,Fe),Pe=new p0(P,Fe,e,Me),_e=new j_(P,Fe),Pe.reversedDepthBuffer&&d&&_e.buffers.depth.setReversed(!0),ft=new E0(P),xe=new O_,ze=new J_(P,Fe,_e,xe,Pe,Me,ft),Rt=new g0(x),St=new v0(x),T=new Pp(P),le=new d0(P,T),y=new S0(P,T,ft,le),O=new T0(P,y,T,ft),ee=new w0(P,Pe,ze),ie=new m0(xe),q=new F_(x,Rt,St,Fe,Pe,le,ie),Z=new nx(x,xe),G=new z_,Se=new q_(Fe),ve=new u0(x,Rt,St,_e,O,f,c),ye=new $_(x,O,Pe),Be=new ix(P,ft,Pe,_e),he=new f0(P,Fe,ft),Re=new b0(P,Fe,ft),ft.programs=q.programs,x.capabilities=Pe,x.extensions=Fe,x.properties=xe,x.renderLists=G,x.shadowMap=ye,x.state=_e,x.info=ft}L();let te=new Hc(x,P);this.xr=te,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let S=Fe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Fe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(S){S!==void 0&&(V=S,this.setSize(W,ne,!1))},this.getSize=function(S){return S.set(W,ne)},this.setSize=function(S,N,B=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,ne=N,t.width=Math.floor(S*V),t.height=Math.floor(N*V),B===!0&&(t.style.width=S+"px",t.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(W*V,ne*V).floor()},this.setDrawingBufferSize=function(S,N,B){W=S,ne=N,V=B,t.width=Math.floor(S*B),t.height=Math.floor(N*B),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(D)},this.getViewport=function(S){return S.copy(Ee)},this.setViewport=function(S,N,B,z){S.isVector4?Ee.set(S.x,S.y,S.z,S.w):Ee.set(S,N,B,z),_e.viewport(D.copy(Ee).multiplyScalar(V).round())},this.getScissor=function(S){return S.copy(Ve)},this.setScissor=function(S,N,B,z){S.isVector4?Ve.set(S.x,S.y,S.z,S.w):Ve.set(S,N,B,z),_e.scissor(F.copy(Ve).multiplyScalar(V).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(S){_e.setScissorTest(rt=S)},this.setOpaqueSort=function(S){ae=S},this.setTransparentSort=function(S){ue=S},this.getClearColor=function(S){return S.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,B=!0){let z=0;if(S){let U=!1;if(I!==null){let Q=I.texture.format;U=Q===ha||Q===ca||Q===la}if(U){let Q=I.texture.type,ce=Q===vn||Q===ui||Q===vs||Q===Ss||Q===oa||Q===aa,me=ve.getClearColor(),de=ve.getClearAlpha(),Ce=me.r,De=me.g,Te=me.b;ce?(g[0]=Ce,g[1]=De,g[2]=Te,g[3]=de,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Ce,_[1]=De,_[2]=Te,_[3]=de,P.clearBufferiv(P.COLOR,0,_))}else z|=P.COLOR_BUFFER_BIT}N&&(z|=P.DEPTH_BUFFER_BIT),B&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",K,!1),ve.dispose(),G.dispose(),Se.dispose(),xe.dispose(),Rt.dispose(),St.dispose(),O.dispose(),le.dispose(),Be.dispose(),q.dispose(),te.dispose(),te.removeEventListener("sessionstart",Mn),te.removeEventListener("sessionend",lh),_i.stop()};function se(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let S=ft.autoReset,N=ye.enabled,B=ye.autoUpdate,z=ye.needsUpdate,U=ye.type;L(),ft.autoReset=S,ye.enabled=N,ye.autoUpdate=B,ye.needsUpdate=z,ye.type=U}function K(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function $(S){let N=S.target;N.removeEventListener("dispose",$),ge(N)}function ge(S){Ne(S),xe.remove(S)}function Ne(S){let N=xe.get(S).programs;N!==void 0&&(N.forEach(function(B){q.releaseProgram(B)}),S.isShaderMaterial&&q.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,B,z,U,Q){N===null&&(N=be);let ce=U.isMesh&&U.matrixWorld.determinant()<0,me=nf(S,N,B,z,U);_e.setMaterial(z,ce);let de=B.index,Ce=1;if(z.wireframe===!0){if(de=y.getWireframeAttribute(B),de===void 0)return;Ce=2}let De=B.drawRange,Te=B.attributes.position,We=De.start*Ce,Qe=(De.start+De.count)*Ce;Q!==null&&(We=Math.max(We,Q.start*Ce),Qe=Math.min(Qe,(Q.start+Q.count)*Ce)),de!==null?(We=Math.max(We,0),Qe=Math.min(Qe,de.count)):Te!=null&&(We=Math.max(We,0),Qe=Math.min(Qe,Te.count));let vt=Qe-We;if(vt<0||vt===1/0)return;le.setup(U,z,me,B,de);let at,it=he;if(de!==null&&(at=T.get(de),it=Re,it.setIndex(at)),U.isMesh)z.wireframe===!0?(_e.setLineWidth(z.wireframeLinewidth*Ft()),it.setMode(P.LINES)):it.setMode(P.TRIANGLES);else if(U.isLine){let Ae=z.linewidth;Ae===void 0&&(Ae=1),_e.setLineWidth(Ae*Ft()),U.isLineSegments?it.setMode(P.LINES):U.isLineLoop?it.setMode(P.LINE_LOOP):it.setMode(P.LINE_STRIP)}else U.isPoints?it.setMode(P.POINTS):U.isSprite&&it.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)hs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))it.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Ae=U._multiDrawStarts,gt=U._multiDrawCounts,$e=U._multiDrawCount,en=de?T.get(de).bytesPerElement:1,qi=xe.get(z).currentProgram.getUniforms();for(let tn=0;tn<$e;tn++)qi.setValue(P,"_gl_DrawID",tn),it.render(Ae[tn]/en,gt[tn])}else if(U.isInstancedMesh)it.renderInstances(We,vt,U.count);else if(B.isInstancedBufferGeometry){let Ae=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,gt=Math.min(B.instanceCount,Ae);it.renderInstances(We,vt,gt)}else it.render(We,vt)};function ot(S,N,B){S.transparent===!0&&S.side===ht&&S.forceSinglePass===!1?(S.side=Xt,S.needsUpdate=!0,Vr(S,N,B),S.side=Gn,S.needsUpdate=!0,Vr(S,N,B),S.side=ht):Vr(S,N,B)}this.compile=function(S,N,B=null){B===null&&(B=S),p=Se.get(B),p.init(N),M.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),S!==B&&S.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let z=new Set;return S.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let Q=U.material;if(Q)if(Array.isArray(Q))for(let ce=0;ce<Q.length;ce++){let me=Q[ce];ot(me,B,U),z.add(me)}else ot(Q,B,U),z.add(Q)}),p=M.pop(),z},this.compileAsync=function(S,N,B=null){let z=this.compile(S,N,B);return new Promise(U=>{function Q(){if(z.forEach(function(ce){xe.get(ce).currentProgram.isReady()&&z.delete(ce)}),z.size===0){U(S);return}setTimeout(Q,10)}Fe.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let je=null;function Un(S){je&&je(S)}function Mn(){_i.stop()}function lh(){_i.start()}let _i=new _d;_i.setAnimationLoop(Un),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(S){je=S,te.setAnimationLoop(S),S===null?_i.stop():_i.start()},te.addEventListener("sessionstart",Mn),te.addEventListener("sessionend",lh),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(N),N=te.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,N,I),p=Se.get(S,M.length),p.init(N),M.push(p),j.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ut.setFromProjectionMatrix(j,_n,N.reversedDepth),Y=this.localClippingEnabled,Ze=ie.init(this.clippingPlanes,Y),m=G.get(S,v.length),m.init(),v.push(m),te.enabled===!0&&te.isPresenting===!0){let Q=x.xr.getDepthSensingMesh();Q!==null&&ul(Q,N,-1/0,x.sortObjects)}ul(S,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ae,ue),qe=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,qe&&ve.addToRenderList(m,S),this.info.render.frame++,Ze===!0&&ie.beginShadows();let B=p.state.shadowsArray;ye.render(B,S,N),Ze===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=m.opaque,U=m.transmissive;if(p.setupLights(),N.isArrayCamera){let Q=N.cameras;if(U.length>0)for(let ce=0,me=Q.length;ce<me;ce++){let de=Q[ce];hh(z,U,S,de)}qe&&ve.render(S);for(let ce=0,me=Q.length;ce<me;ce++){let de=Q[ce];ch(m,S,de,de.viewport)}}else U.length>0&&hh(z,U,S,N),qe&&ve.render(S),ch(m,S,N);I!==null&&C===0&&(ze.updateMultisampleRenderTarget(I),ze.updateRenderTargetMipmap(I)),S.isScene===!0&&S.onAfterRender(x,S,N),le.resetDefaultState(),w=-1,E=null,M.pop(),M.length>0?(p=M[M.length-1],Ze===!0&&ie.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function ul(S,N,B,z){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ut.intersectsSprite(S)){z&&Ie.setFromMatrixPosition(S.matrixWorld).applyMatrix4(j);let ce=O.update(S),me=S.material;me.visible&&m.push(S,ce,me,B,Ie.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ut.intersectsObject(S))){let ce=O.update(S),me=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ie.copy(S.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Ie.copy(ce.boundingSphere.center)),Ie.applyMatrix4(S.matrixWorld).applyMatrix4(j)),Array.isArray(me)){let de=ce.groups;for(let Ce=0,De=de.length;Ce<De;Ce++){let Te=de[Ce],We=me[Te.materialIndex];We&&We.visible&&m.push(S,ce,We,B,Ie.z,Te)}}else me.visible&&m.push(S,ce,me,B,Ie.z,null)}}let Q=S.children;for(let ce=0,me=Q.length;ce<me;ce++)ul(Q[ce],N,B,z)}function ch(S,N,B,z){let U=S.opaque,Q=S.transmissive,ce=S.transparent;p.setupLightsView(B),Ze===!0&&ie.setGlobalState(x.clippingPlanes,B),z&&_e.viewport(D.copy(z)),U.length>0&&Hr(U,N,B),Q.length>0&&Hr(Q,N,B),ce.length>0&&Hr(ce,N,B),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function hh(S,N,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new En(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Ms:vn,minFilter:An,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));let Q=p.state.transmissionRenderTarget[z.id],ce=z.viewport||D;Q.setSize(ce.z*x.transmissionResolutionScale,ce.w*x.transmissionResolutionScale);let me=x.getRenderTarget(),de=x.getActiveCubeFace(),Ce=x.getActiveMipmapLevel();x.setRenderTarget(Q),x.getClearColor(H),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),qe&&ve.render(B);let De=x.toneMapping;x.toneMapping=Xn;let Te=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),Ze===!0&&ie.setGlobalState(x.clippingPlanes,z),Hr(S,B,z),ze.updateMultisampleRenderTarget(Q),ze.updateRenderTargetMipmap(Q),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Qe=0,vt=N.length;Qe<vt;Qe++){let at=N[Qe],it=at.object,Ae=at.geometry,gt=at.material,$e=at.group;if(gt.side===ht&&it.layers.test(z.layers)){let en=gt.side;gt.side=Xt,gt.needsUpdate=!0,uh(it,B,z,Ae,gt,$e),gt.side=en,gt.needsUpdate=!0,We=!0}}We===!0&&(ze.updateMultisampleRenderTarget(Q),ze.updateRenderTargetMipmap(Q))}x.setRenderTarget(me,de,Ce),x.setClearColor(H,X),Te!==void 0&&(z.viewport=Te),x.toneMapping=De}function Hr(S,N,B){let z=N.isScene===!0?N.overrideMaterial:null;for(let U=0,Q=S.length;U<Q;U++){let ce=S[U],me=ce.object,de=ce.geometry,Ce=ce.group,De=ce.material;De.allowOverride===!0&&z!==null&&(De=z),me.layers.test(B.layers)&&uh(me,N,B,de,De,Ce)}}function uh(S,N,B,z,U,Q){S.onBeforeRender(x,N,B,z,U,Q),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(x,N,B,z,S,Q),U.transparent===!0&&U.side===ht&&U.forceSinglePass===!1?(U.side=Xt,U.needsUpdate=!0,x.renderBufferDirect(B,N,z,U,S,Q),U.side=Gn,U.needsUpdate=!0,x.renderBufferDirect(B,N,z,U,S,Q),U.side=ht):x.renderBufferDirect(B,N,z,U,S,Q),S.onAfterRender(x,N,B,z,U,Q)}function Vr(S,N,B){N.isScene!==!0&&(N=be);let z=xe.get(S),U=p.state.lights,Q=p.state.shadowsArray,ce=U.state.version,me=q.getParameters(S,U.state,Q,N,B),de=q.getProgramCacheKey(me),Ce=z.programs;z.environment=S.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(S.isMeshStandardMaterial?St:Rt).get(S.envMap||z.environment),z.envMapRotation=z.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Ce===void 0&&(S.addEventListener("dispose",$),Ce=new Map,z.programs=Ce);let De=Ce.get(de);if(De!==void 0){if(z.currentProgram===De&&z.lightsStateVersion===ce)return fh(S,me),De}else me.uniforms=q.getUniforms(S),S.onBeforeCompile(me,x),De=q.acquireProgram(me,de),Ce.set(de,De),z.uniforms=me.uniforms;let Te=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Te.clippingPlanes=ie.uniform),fh(S,me),z.needsLights=rf(S),z.lightsStateVersion=ce,z.needsLights&&(Te.ambientLightColor.value=U.state.ambient,Te.lightProbe.value=U.state.probe,Te.directionalLights.value=U.state.directional,Te.directionalLightShadows.value=U.state.directionalShadow,Te.spotLights.value=U.state.spot,Te.spotLightShadows.value=U.state.spotShadow,Te.rectAreaLights.value=U.state.rectArea,Te.ltc_1.value=U.state.rectAreaLTC1,Te.ltc_2.value=U.state.rectAreaLTC2,Te.pointLights.value=U.state.point,Te.pointLightShadows.value=U.state.pointShadow,Te.hemisphereLights.value=U.state.hemi,Te.directionalShadowMap.value=U.state.directionalShadowMap,Te.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Te.spotShadowMap.value=U.state.spotShadowMap,Te.spotLightMatrix.value=U.state.spotLightMatrix,Te.spotLightMap.value=U.state.spotLightMap,Te.pointShadowMap.value=U.state.pointShadowMap,Te.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=De,z.uniformsList=null,De}function dh(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=Ts.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function fh(S,N){let B=xe.get(S);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function nf(S,N,B,z,U){N.isScene!==!0&&(N=be),ze.resetTextureUnits();let Q=N.fog,ce=z.isMeshStandardMaterial?N.environment:null,me=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ti,de=(z.isMeshStandardMaterial?St:Rt).get(z.envMap||ce),Ce=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,De=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Te=!!B.morphAttributes.position,We=!!B.morphAttributes.normal,Qe=!!B.morphAttributes.color,vt=Xn;z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(vt=x.toneMapping);let at=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,it=at!==void 0?at.length:0,Ae=xe.get(z),gt=p.state.lights;if(Ze===!0&&(Y===!0||S!==E)){let Gt=S===E&&z.id===w;ie.setState(z,S,Gt)}let $e=!1;z.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==gt.state.version||Ae.outputColorSpace!==me||U.isBatchedMesh&&Ae.batching===!1||!U.isBatchedMesh&&Ae.batching===!0||U.isBatchedMesh&&Ae.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ae.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ae.instancing===!1||!U.isInstancedMesh&&Ae.instancing===!0||U.isSkinnedMesh&&Ae.skinning===!1||!U.isSkinnedMesh&&Ae.skinning===!0||U.isInstancedMesh&&Ae.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ae.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ae.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ae.instancingMorph===!1&&U.morphTexture!==null||Ae.envMap!==de||z.fog===!0&&Ae.fog!==Q||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ie.numPlanes||Ae.numIntersection!==ie.numIntersection)||Ae.vertexAlphas!==Ce||Ae.vertexTangents!==De||Ae.morphTargets!==Te||Ae.morphNormals!==We||Ae.morphColors!==Qe||Ae.toneMapping!==vt||Ae.morphTargetsCount!==it)&&($e=!0):($e=!0,Ae.__version=z.version);let en=Ae.currentProgram;$e===!0&&(en=Vr(z,N,U));let qi=!1,tn=!1,Is=!1,_t=en.getUniforms(),un=Ae.uniforms;if(_e.useProgram(en.program)&&(qi=!0,tn=!0,Is=!0),z.id!==w&&(w=z.id,tn=!0),qi||E!==S){_e.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),_t.setValue(P,"projectionMatrix",S.projectionMatrix),_t.setValue(P,"viewMatrix",S.matrixWorldInverse);let Yt=_t.map.cameraPosition;Yt!==void 0&&Yt.setValue(P,pe.setFromMatrixPosition(S.matrixWorld)),Pe.logarithmicDepthBuffer&&_t.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&_t.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),E!==S&&(E=S,tn=!0,Is=!0)}if(U.isSkinnedMesh){_t.setOptional(P,U,"bindMatrix"),_t.setOptional(P,U,"bindMatrixInverse");let Gt=U.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),_t.setValue(P,"boneTexture",Gt.boneTexture,ze))}U.isBatchedMesh&&(_t.setOptional(P,U,"batchingTexture"),_t.setValue(P,"batchingTexture",U._matricesTexture,ze),_t.setOptional(P,U,"batchingIdTexture"),_t.setValue(P,"batchingIdTexture",U._indirectTexture,ze),_t.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&_t.setValue(P,"batchingColorTexture",U._colorsTexture,ze));let dn=B.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&ee.update(U,B,en),(tn||Ae.receiveShadow!==U.receiveShadow)&&(Ae.receiveShadow=U.receiveShadow,_t.setValue(P,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(un.envMap.value=de,un.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&N.environment!==null&&(un.envMapIntensity.value=N.environmentIntensity),tn&&(_t.setValue(P,"toneMappingExposure",x.toneMappingExposure),Ae.needsLights&&sf(un,Is),Q&&z.fog===!0&&Z.refreshFogUniforms(un,Q),Z.refreshMaterialUniforms(un,z,V,ne,p.state.transmissionRenderTarget[S.id]),Ts.upload(P,dh(Ae),un,ze)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ts.upload(P,dh(Ae),un,ze),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&_t.setValue(P,"center",U.center),_t.setValue(P,"modelViewMatrix",U.modelViewMatrix),_t.setValue(P,"normalMatrix",U.normalMatrix),_t.setValue(P,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Gt=z.uniformsGroups;for(let Yt=0,dl=Gt.length;Yt<dl;Yt++){let xi=Gt[Yt];Be.update(xi,en),Be.bind(xi,en)}}return en}function sf(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function rf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,N,B){let z=xe.get(S);z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),xe.get(S.texture).__webglTexture=N,xe.get(S.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){let B=xe.get(S);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0};let of=P.createFramebuffer();this.setRenderTarget=function(S,N=0,B=0){I=S,A=N,C=B;let z=!0,U=null,Q=!1,ce=!1;if(S){let de=xe.get(S);if(de.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(P.FRAMEBUFFER,null),z=!1;else if(de.__webglFramebuffer===void 0)ze.setupRenderTarget(S);else if(de.__hasExternalTextures)ze.rebindTextures(S,xe.get(S.texture).__webglTexture,xe.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Te=S.depthTexture;if(de.__boundDepthTexture!==Te){if(Te!==null&&xe.has(Te)&&(S.width!==Te.image.width||S.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(S)}}let Ce=S.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ce=!0);let De=xe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(De[N])?U=De[N][B]:U=De[N],Q=!0):S.samples>0&&ze.useMultisampledRTT(S)===!1?U=xe.get(S).__webglMultisampledFramebuffer:Array.isArray(De)?U=De[B]:U=De,D.copy(S.viewport),F.copy(S.scissor),k=S.scissorTest}else D.copy(Ee).multiplyScalar(V).floor(),F.copy(Ve).multiplyScalar(V).floor(),k=rt;if(B!==0&&(U=of),_e.bindFramebuffer(P.FRAMEBUFFER,U)&&z&&_e.drawBuffers(S,U),_e.viewport(D),_e.scissor(F),_e.setScissorTest(k),Q){let de=xe.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,de.__webglTexture,B)}else if(ce){let de=N;for(let Ce=0;Ce<S.textures.length;Ce++){let De=xe.get(S.textures[Ce]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ce,De.__webglTexture,B,de)}}else if(S!==null&&B!==0){let de=xe.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,de.__webglTexture,B)}w=-1},this.readRenderTargetPixels=function(S,N,B,z,U,Q,ce,me=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=xe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ce!==void 0&&(de=de[ce]),de){_e.bindFramebuffer(P.FRAMEBUFFER,de);try{let Ce=S.textures[me],De=Ce.format,Te=Ce.type;if(!Pe.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-z&&B>=0&&B<=S.height-U&&(S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+me),P.readPixels(N,B,z,U,Me.convert(De),Me.convert(Te),Q))}finally{let Ce=I!==null?xe.get(I).__webglFramebuffer:null;_e.bindFramebuffer(P.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(S,N,B,z,U,Q,ce,me=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=xe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ce!==void 0&&(de=de[ce]),de)if(N>=0&&N<=S.width-z&&B>=0&&B<=S.height-U){_e.bindFramebuffer(P.FRAMEBUFFER,de);let Ce=S.textures[me],De=Ce.format,Te=Ce.type;if(!Pe.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let We=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,We),P.bufferData(P.PIXEL_PACK_BUFFER,Q.byteLength,P.STREAM_READ),S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+me),P.readPixels(N,B,z,U,Me.convert(De),Me.convert(Te),0);let Qe=I!==null?xe.get(I).__webglFramebuffer:null;_e.bindFramebuffer(P.FRAMEBUFFER,Qe);let vt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await ku(P,vt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,We),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Q),P.deleteBuffer(We),P.deleteSync(vt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,B=0){let z=Math.pow(2,-B),U=Math.floor(S.image.width*z),Q=Math.floor(S.image.height*z),ce=N!==null?N.x:0,me=N!==null?N.y:0;ze.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,B,0,0,ce,me,U,Q),_e.unbindTexture()};let af=P.createFramebuffer(),lf=P.createFramebuffer();this.copyTextureToTexture=function(S,N,B=null,z=null,U=0,Q=null){Q===null&&(U!==0?(hs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=U,U=0):Q=0);let ce,me,de,Ce,De,Te,We,Qe,vt,at=S.isCompressedTexture?S.mipmaps[Q]:S.image;if(B!==null)ce=B.max.x-B.min.x,me=B.max.y-B.min.y,de=B.isBox3?B.max.z-B.min.z:1,Ce=B.min.x,De=B.min.y,Te=B.isBox3?B.min.z:0;else{let dn=Math.pow(2,-U);ce=Math.floor(at.width*dn),me=Math.floor(at.height*dn),S.isDataArrayTexture?de=at.depth:S.isData3DTexture?de=Math.floor(at.depth*dn):de=1,Ce=0,De=0,Te=0}z!==null?(We=z.x,Qe=z.y,vt=z.z):(We=0,Qe=0,vt=0);let it=Me.convert(N.format),Ae=Me.convert(N.type),gt;N.isData3DTexture?(ze.setTexture3D(N,0),gt=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(ze.setTexture2DArray(N,0),gt=P.TEXTURE_2D_ARRAY):(ze.setTexture2D(N,0),gt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);let $e=P.getParameter(P.UNPACK_ROW_LENGTH),en=P.getParameter(P.UNPACK_IMAGE_HEIGHT),qi=P.getParameter(P.UNPACK_SKIP_PIXELS),tn=P.getParameter(P.UNPACK_SKIP_ROWS),Is=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,at.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,at.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ce),P.pixelStorei(P.UNPACK_SKIP_ROWS,De),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Te);let _t=S.isDataArrayTexture||S.isData3DTexture,un=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){let dn=xe.get(S),Gt=xe.get(N),Yt=xe.get(dn.__renderTarget),dl=xe.get(Gt.__renderTarget);_e.bindFramebuffer(P.READ_FRAMEBUFFER,Yt.__webglFramebuffer),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,dl.__webglFramebuffer);for(let xi=0;xi<de;xi++)_t&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xe.get(S).__webglTexture,U,Te+xi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xe.get(N).__webglTexture,Q,vt+xi)),P.blitFramebuffer(Ce,De,ce,me,We,Qe,ce,me,P.DEPTH_BUFFER_BIT,P.NEAREST);_e.bindFramebuffer(P.READ_FRAMEBUFFER,null),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(U!==0||S.isRenderTargetTexture||xe.has(S)){let dn=xe.get(S),Gt=xe.get(N);_e.bindFramebuffer(P.READ_FRAMEBUFFER,af),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,lf);for(let Yt=0;Yt<de;Yt++)_t?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,dn.__webglTexture,U,Te+Yt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,dn.__webglTexture,U),un?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Gt.__webglTexture,Q,vt+Yt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Gt.__webglTexture,Q),U!==0?P.blitFramebuffer(Ce,De,ce,me,We,Qe,ce,me,P.COLOR_BUFFER_BIT,P.NEAREST):un?P.copyTexSubImage3D(gt,Q,We,Qe,vt+Yt,Ce,De,ce,me):P.copyTexSubImage2D(gt,Q,We,Qe,Ce,De,ce,me);_e.bindFramebuffer(P.READ_FRAMEBUFFER,null),_e.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else un?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(gt,Q,We,Qe,vt,ce,me,de,it,Ae,at.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(gt,Q,We,Qe,vt,ce,me,de,it,at.data):P.texSubImage3D(gt,Q,We,Qe,vt,ce,me,de,it,Ae,at):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Q,We,Qe,ce,me,it,Ae,at.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Q,We,Qe,at.width,at.height,it,at.data):P.texSubImage2D(P.TEXTURE_2D,Q,We,Qe,ce,me,it,Ae,at);P.pixelStorei(P.UNPACK_ROW_LENGTH,$e),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,en),P.pixelStorei(P.UNPACK_SKIP_PIXELS,qi),P.pixelStorei(P.UNPACK_SKIP_ROWS,tn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Is),Q===0&&N.generateMipmaps&&P.generateMipmap(gt),_e.unbindTexture()},this.initRenderTarget=function(S){xe.get(S).__webglFramebuffer===void 0&&ze.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ze.setTextureCube(S,0):S.isData3DTexture?ze.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ze.setTexture2DArray(S,0):ze.setTexture2D(S,0),_e.unbindTexture()},this.resetState=function(){A=0,C=0,I=null,_e.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}};var Sd={type:"change"},Wc={type:"start"},Ed={type:"end"},qa=new ri,bd=new Lt,sx=Math.cos(70*Mc.DEG2RAD),At=new R,Kt=2*Math.PI,tt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gc=1e-6,Xa=class extends br{constructor(e,t=null){super(e,t),this.state=tt.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ci.ROTATE,MIDDLE:ci.DOLLY,RIGHT:ci.PAN},this.touches={ONE:hi.ROTATE,TWO:hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Zt,this._lastTargetPosition=new R,this._quat=new Zt().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ys,this._sphericalDelta=new ys,this._scale=1,this._panOffset=new R,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new R,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ox.bind(this),this._onPointerDown=rx.bind(this),this._onPointerUp=ax.bind(this),this._onContextMenu=px.bind(this),this._onMouseWheel=hx.bind(this),this._onKeyDown=ux.bind(this),this._onTouchStart=dx.bind(this),this._onTouchMove=fx.bind(this),this._onMouseDown=lx.bind(this),this._onMouseMove=cx.bind(this),this._interceptControlDown=mx.bind(this),this._interceptControlUp=gx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sd),this.update(),this.state=tt.NONE}update(e=null){let t=this.object.position;At.copy(t).sub(this.target),At.applyQuaternion(this._quat),this._spherical.setFromVector3(At),this.autoRotate&&this.state===tt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Kt:i>Math.PI&&(i-=Kt),s<-Math.PI?s+=Kt:s>Math.PI&&(s-=Kt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(At.setFromSpherical(this._spherical),At.applyQuaternion(this._quatInverse),t.copy(this.target).add(At),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=At.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new R(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=At.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(qa.origin.copy(this.object.position),qa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qa.direction))<sx?this.object.lookAt(this.target):(bd.setFromNormalAndCoplanarPoint(this.object.up,this.target),qa.intersectPlane(bd,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Gc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gc||this._lastTargetPosition.distanceToSquared(this.target)>Gc?(this.dispatchEvent(Sd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Kt/60*this.autoRotateSpeed*e:Kt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){At.setFromMatrixColumn(t,0),At.multiplyScalar(-e),this._panOffset.add(At)}_panUp(e,t){this.screenSpacePanning===!0?At.setFromMatrixColumn(t,1):(At.setFromMatrixColumn(t,0),At.crossVectors(this.object.up,At)),At.multiplyScalar(e),this._panOffset.add(At)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;At.copy(s).sub(this.target);let r=At.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function rx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function ox(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function ax(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ed),this.state=tt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function lx(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ci.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=tt.DOLLY;break;case ci.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=tt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=tt.ROTATE}break;case ci.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=tt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=tt.PAN}break;default:this.state=tt.NONE}this.state!==tt.NONE&&this.dispatchEvent(Wc)}function cx(n){switch(this.state){case tt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case tt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case tt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function hx(n){this.enabled===!1||this.enableZoom===!1||this.state!==tt.NONE||(n.preventDefault(),this.dispatchEvent(Wc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Ed))}function ux(n){this.enabled!==!1&&this._handleKeyDown(n)}function dx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case hi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=tt.TOUCH_ROTATE;break;case hi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=tt.TOUCH_PAN;break;default:this.state=tt.NONE}break;case 2:switch(this.touches.TWO){case hi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=tt.TOUCH_DOLLY_PAN;break;case hi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=tt.TOUCH_DOLLY_ROTATE;break;default:this.state=tt.NONE}break;default:this.state=tt.NONE}this.state!==tt.NONE&&this.dispatchEvent(Wc)}function fx(n){switch(this._trackPointer(n),this.state){case tt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case tt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case tt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case tt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=tt.NONE}}function px(n){this.enabled!==!1&&n.preventDefault()}function mx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ht=(n,e={})=>new Mt({color:n,roughness:.68,metalness:.05,...e});function Hi(n,e,t,i=0,s=0,r=0){let o=new Le(e,t);return o.position.set(i,s,r),n.add(o),o}function Pn(n,e,t,i,s,r=0,o=0,a=0){return Hi(n,new ct(e,t,i),s,r,o,a)}function Vi(n,e,t,i,s,r=0,o=0,a=0,c=64){return Hi(n,new wn(e,t,i,c),s,r,o,a)}function Ya(n,e,t=6){let s=new Uint8Array(262144);for(let o=0;o<256;o++)for(let a=0;a<256;a++){let l=(a+Math.floor(o/t)%2*Math.floor(t/2))%t<2&&o%t<2?e:n,u=(o*256+a)*4;s[u]=l[0],s[u+1]=l[1],s[u+2]=l[2],s[u+3]=255}let r=new er(s,256,256,Jt);return r.colorSpace=Et,r.magFilter=on,r.minFilter=An,r.generateMipmaps=!0,r.needsUpdate=!0,r}function $a(n,e,t,i,s=96){let r=Hi(n,new sr(e,s),t,0,i);return r.rotation.x=Math.PI/2,r}var di=Object.freeze({width:.597,depth:.597,thickness:.0535});function wd(n){let e=new Ge,t=new Ge;t.name="m100-product-body",e.add(t),e.userData.productBody=t;let i=Ht(15790575),s=Ht(16514041),r=Ht(13225163,{metalness:.45}),o=Ht(7568768,{metalness:.24});Pn(t,di.width,.05275,di.depth,i,0,375e-6);for(let f of[-.285,.285])for(let g of[-.285,.285])Pn(t,.015,75e-5,.015,i,f,-.026375,g);Pn(t,.563,.004,.563,s,0,-.022);let a=Vi(t,.24,.24,.001,r,0,-.0258);a.name="m100-grille-rim";let c=Ht(16777215,{map:Ya([157,165,166],[79,90,93],5),metalness:.27,side:ht}),l=$a(t,.231,c,-.02658);l.name="m100-downward-grille",Pn(t,.019,.001,.004,Ht(6087630,{emissive:557678,emissiveIntensity:.55}),.185,-.0261,.244),Vi(t,.0035,.0035,.001,o,-.181,-.0261,.244,12);let u=Ht(11186352,{metalness:.82,roughness:.29}),h=Ht(14211541,{metalness:.7,roughness:.22}),d=Math.max(.014,n-di.thickness/2);Pn(e,.081,.014,.081,u,0,di.thickness/2+.007),Pn(e,.038,d*.58,.038,h,0,di.thickness/2+d*.29),Pn(e,.029,d*.54,.029,u,0,di.thickness/2+d*.73);for(let f of[-.016,.016])Pn(e,.004,d*.72,.004,r,f,di.thickness/2+d*.53);return Pn(e,.062,.008,.062,u,0,di.thickness/2+d-.004),e}var Dr=Object.freeze({diameter:.279,depth:.176}),qc=.012;function Td(){let n=new Ge,e=new Ge;e.name="dc20-product-body",n.add(e),n.userData.productBody=e;let t=Ht(16185075),i=Ht(14146520,{metalness:.3}),s=Ht(3423040,{roughness:.87}),r=Ht(1514271,{metalness:.45});Vi(e,.112,.117,.159,s,0,.0085),Vi(e,.118,.118,.013,r,0,-.077);let o=Vi(e,Dr.diameter/2,Dr.diameter/2,.008,t,0,-.08);o.name="dc20-white-flange";let a=Hi(e,new pr(.122,Dr.diameter/2,96),i,0,-.088);a.rotation.x=Math.PI/2,a.name="dc20-front-rim";let c=Ht(16777215,{map:Ya([237,239,237],[183,190,188],5),side:ht}),l=$a(e,.122,c,-.08795);l.name="dc20-downward-grille";for(let g of[-1,1]){let _=Hi(e,new ct(.015,.026,.022),r,g*.109,.008);_.name="dc20-retention-clip"}let u=new gs,h=.225;u.moveTo(-h,-h),u.lineTo(h,-h),u.lineTo(h,h),u.lineTo(-h,h),u.closePath();let d=new Pi;d.absarc(0,0,.121,0,Math.PI*2,!0),u.holes.push(d);let f=Hi(n,new mr(u),Ht(8688283,{side:ht,transparent:!0,opacity:.72}),0,-.088+qc);return f.rotation.x=-Math.PI/2,f.name="dc20-ceiling-tile-demonstration",n}var _x=n=>n*.0254*16/Math.sqrt(337),xx=n=>n*.0254*9/Math.sqrt(337),fi=n=>({width:_x(n),height:xx(n)});function Xc(n,e){if(n.teachingDevices&&e.visible?.display!==!1&&n.displays.some(_=>{let m=(fi(_.size).width+.07)/2;return _.x-m<.18-1e-9||_.x+m>n.length-.18+1e-9||(_.side==="left"?_.x+m>n.length/2-.05:_.x-m<n.length/2+.05)}))return{error:"auxSpace"};if(n.teachingDevices)return{entries:n.teachingDevices.map((_,m)=>({..._,type:_.type==="qnex"?_.model==="NMP311"?"controller":"podium":_.type,number:n.teachingDevices.slice(0,m+1).filter(p=>p.type===_.type).length,mountHeight:_.type==="ifp"?Math.min(e.mainHeight||1.5,n.height-.1-fi(_.size).height/2):_.type==="station"?1.5:_.type==="camera"?Math.min(n.height-.4,2.4):1.05,install:["ifp","station","camera"].includes(_.type)||_.model==="NMP311"?"wall":"floor"}))};let t=[],{length:i,width:s,height:r}=n,o=Number(e.ifpSize),a=e.visible.ifp===!1?0:Number(e.ifpCount),c=fi(o),l=c.width+.07,u=c.height+.07,h=a*l+(a-1)*.15,d=i/2-h/2;if(a>0&&d<.3||e.visible.station&&d-.15-.72<.3)return{error:"screenSpace"};let f=n.displays||window.AISpeech.auxiliaryDisplaysForWidth(s,i);if(e.visible.display!==!1&&f.some(_=>{let m=fi(_.size).width+.07;return _.x-m/2<.18-1e-9||_.x+m/2>i-.18+1e-9||_.side==="left"&&_.x+m/2>i/2-.05||_.side==="right"&&_.x-m/2<i/2+.05}))return{error:"auxSpace"};let g=Number(e.mainHeight);if(a>0&&(g-u/2<.18||g+u/2>r-.12))return{error:"screenHeight"};for(let _=0;_<a;_++)t.push({id:`ifp-${_+1}`,type:"ifp",size:o,x:d+l*(_+.5)+_*.15,y:0,mountHeight:g,install:"wall"});return e.visible.station&&t.push({id:"station",type:"station",x:d-.15-.72/2,y:0,mountHeight:1.5,install:"wall"}),e.visible.podium&&t.push({id:"podium",type:"podium",model:e.podiumModel,x:Math.max(.8,Math.min(i-.8,i*.32)),y:Math.max(.4,Math.min(s-.4,1.2)),mountHeight:1.05,install:"floor"}),{entries:t}}function yx(){let n=document.createElement("canvas");n.width=1024,n.height=576;let e=n.getContext("2d"),t=e.createLinearGradient(0,0,1024,576);t.addColorStop(0,"#f7fdff"),t.addColorStop(1,"#bbebfa"),e.fillStyle=t,e.fillRect(0,0,1024,576),e.fillStyle="#1769a0",e.fillRect(0,0,1024,92),e.fillStyle="#fff",e.font="bold 48px Arial",e.fillText("CLASSROOM",48,62),e.fillStyle="#13446c",e.font="bold 54px Arial",e.fillText("Explore \xB7 Learn \xB7 Create",65,215),e.font="31px Arial",e.fillText("Interactive lesson display",68,275),e.fillStyle="#2ab9b4",e.fillRect(70,327,285,125),e.fillStyle="#48a4da",e.fillRect(380,327,245,125),e.fillStyle="#f2b968",e.fillRect(650,327,300,125);let i=new tr(n);return i.colorSpace=Et,i}function Yc(n,e,t=!1){let i=new Ge,s=fi(n),r=t?Math.min(e*.7,s.width):s.width,o=r*9/16,a=new Le(new ct(r+.07,o+.07,.075),new Mt({color:14148587,metalness:.3,roughness:.4}));i.add(a);let c=new Le(new jt(r,o),new Dt({map:yx(),toneMapped:!1}));c.position.z=.039,i.add(c);let l=new Le(new ct(.26,.2,.12),new Mt({color:8755368,metalness:.65}));return l.position.z=-.1,i.add(l),i}var Zc=n=>new Mt({color:n,metalness:.16,roughness:.48}),Ir=Zc(14870763),Za=Zc(3753555),ja=Zc(1320251),$c=new Dt({color:4830693,toneMapped:!1});function Vt(n,e,t,i,s=0){let r=new Le(new ct(...e),i.clone());return r.position.set(...t),r.rotation.x=s,n.add(r),r}function Ad(n){let e=new Ge;if(Vt(e,[.72,.07,.48],[0,.035,0],Za),n==="SL100")Vt(e,[.59,.86,.37],[0,.48,0],Ir),Vt(e,[.45,.58,.012],[0,.47,.193],ja),Vt(e,[.39,.5,.014],[0,.47,.202],$c),Vt(e,[.77,.065,.49],[0,1.01,0],Za,-.22),Vt(e,[.61,.012,.36],[0,1.052,0],$c,-.22);else{let t=new Ge;t.name="ndp600-teaching-desk",e.add(t),Vt(t,[1.6,.07,.8],[0,.865,0],Ir);for(let i of[-.57,.57])Vt(t,[.1,.79,.13],[i,.435,0],Ir),Vt(t,[.36,.045,.68],[i,.023,0],Ir),Vt(t,[.15,.035,.18],[i,.69,0],Za);Vt(t,[1.12,.32,.035],[0,.65,.29],Ir),Vt(t,[.72,.07,.43],[0,.935,.07],Za),Vt(t,[.66,.025,.39],[0,1.01,.07],ja,-.39),Vt(t,[.6,.028,.32],[0,1.024,.07],$c,-.39),Vt(t,[.46,.017,.16],[-.19,.909,-.28],ja),Vt(t,[.08,.025,.11],[.36,.912,-.28],ja)}return e}function Cd(){let n=new Ge,e=(t,i,s,r,o,a,c)=>{let l=new Le(new ct(t,i,s),c);l.position.set(r,o,a),n.add(l)};e(.72,.43,.075,0,0,0,new Mt({color:14148585,metalness:.25})),e(.66,.37,.008,0,0,.041,new Dt({color:2319746,toneMapped:!1}));for(let t=0;t<3;t++)e(.15,.13,.009,(t-1)*.19,-.02,.049,new Dt({color:[5297866,10083820,16043386][t],toneMapped:!1}));return n}function Rd(n){let e=new Ge,t=new Mt({color:14148585,metalness:.25,roughness:.5}),i=new Mt({color:1516344}),s=new Mt({color:1457244,metalness:.5,roughness:.15}),r=new Ge;r.name="camera-head",r.position.y=.21;let o=(a,c,l,u,h,d,f)=>{let g=new Le(new ct(c,l,u),f);g.position.set(0,h,d),a.add(g)};o(e,.51,.11,.28,.025,0,t),o(r,.29,.22,.2,-.03,0,t);for(let[a,c,l,u]of[[.105,.18,.15,i],[.07,.015,.25,s]]){let h=new Le(new wn(a,a,c,24),u);h.rotation.x=Math.PI/2,h.position.set(0,0,l),r.add(h)}return n==="teacher"&&(r.rotation.y=Math.PI),e.add(r),e}function Pd(){let n=new Ge,e=new Le(new ct(.34,.075,.22),new Mt({color:14148585}));n.add(e);let t=new Le(new ct(.28,.035,.008),new Mt({color:1516344}));return t.position.z=.114,n.add(t),n}var Ja=(n,e={})=>new Mt({color:n,roughness:.58,metalness:.12,...e}),vx=Ja(1516344),jc=Ja(9873593,{metalness:.7}),Mx=Ja(593692);function Dd(n,e,t,i=0,s=0,r=0){let o=new Le(n,e.clone());return o.position.set(i,s,r),t.add(o),o}function Lr(n,e,t,i,s,r=0,o=0,a=0){return Dd(new wn(e,t,i,24),s,n,r,o,a)}function Sx(n,e){let t=Ja(11828218,{metalness:.35});e>.11&&Lr(n,.019,.019,e-.075,jc,0,(e-.075)/2+.075),Lr(n,.22,.22,.035,vx,0,.08),Lr(n,.2,.2,.075,t,0,-.005),Lr(n,.15,.15,.012,Mx,0,-.048);for(let i=0;i<6;i++){let s=i*Math.PI/3;Dd(new gr(.012,8,8),jc,n,Math.sin(s)*.11,-.055,Math.cos(s)*.11)}}function Id(n,e,t){let i=new Ge,s=["m100","m40","dc20"].includes(n.type),r=n.type==="display",o,a,c,l=e.heightProfile?.mode==="split"&&n.y>=e.heightProfile.split?e.heightProfile.rear:e.heightProfile?.front??e.height;if(n.type==="dc20")o=l-qc,c=o+Dr.depth/2,a="recessed",i=Td();else if(s){let f=Math.min(Math.max(t.audioDrop,0),Math.max(0,l-.3));o=l-f,a="ceiling",n.type==="m100"?i=wd(f):Sx(i,f)}else if(n.type==="ifp")o=n.mountHeight,a="wall",i=Yc(n.size,e.length);else if(n.type==="camera"||n.type==="controller")o=n.mountHeight,a=n.install,i=n.type==="camera"?Rd(n.role):Pd();else if(n.type==="station")o=n.mountHeight,a="wall",i=Cd();else if(n.type==="podium")o=n.mountHeight,a="floor",i=Ad(n.model);else if(r){let f=fi(n.size).height+.07;o=Math.max(f/2+.2,Math.min(l-f/2-.15,l-t.auxDrop)),a="suspended",i=Yc(n.size,e.length);let g=Math.max(.08,l-o-f/2);for(let _ of[-.22,.22])Lr(i,.014,.014,g,jc,_,f/2+g/2)}let[u,h,d]=Gr(e,n.x,n.y,n.type==="podium"?0:c??o);return i.position.set(u,h,!e.teachingDevices&&["ifp","station"].includes(n.type)?-e.width/2+.13:d),i.userData.device={...n,number:n.number,mountHeight:o,install:a},i.traverse(f=>{f.isMesh&&(f.userData.selectGroup=i)}),i}function Nr(n){n.traverse(e=>{if(!e.geometry||!e.material)return;e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(i=>{i.map?.dispose(),i.dispose()})}),n.clear()}var bx={remote:1884027,pa:11497710,speaker:3775224};function Ex(n,e,t){return e.flatMap(({userData:i})=>{let s=i.device;if(!["m100","m40","dc20"].includes(s.type))return[];let r=window.AISpeech.radiiForDevice(s,n.radii,n.heightProfile,n.width),o=s.type==="dc20";return(o?["speaker"]:["remote","pa"]).filter(a=>t[a]).map(a=>({id:s.id,kind:a,x:s.x-n.length/2,z:s.y-n.width/2,top:s.mountHeight,bottom:o?.032:1.2,radius:o?r.dc20:r[s.type+(a==="remote"?"Pickup":"PA")]})).filter(a=>a.top>a.bottom&&a.radius>0)})}var Ka=class{constructor(e,t){this.root=new Ge,this.root.name="audio-coverage-volumes",e.add(this.root),t.localClippingEnabled=!0,this.entries=[],this.phase=0,this.lastTime=null}sync(e,t,i,s){Nr(this.root),this.entries=[],this.settings=i;let r=[new Lt(new R(1,0,0),e.length/2),new Lt(new R(-1,0,0),e.length/2),new Lt(new R(0,0,1),e.width/2),new Lt(new R(0,0,-1),e.width/2)];for(let o of Ex(e,t,i)){if(i.onlySelected&&o.id!==s)continue;let c=!s||o.id===s?1:.3,l=bx[o.kind],u=(m,p=!1)=>new(p?yn:Dt)({color:l,transparent:!0,opacity:m*c,depthWrite:!1,clippingPlanes:r,...p?{}:{side:ht},toneMapped:!1}),h=o.top-o.bottom,d=new Le(new rr(o.radius,h,72,1,!0),u(.055));d.position.set(o.x,(o.top+o.bottom)/2,o.z),this.root.add(d);let f=m=>{let p=Array.from({length:73},(M,x)=>{let b=x/72*Math.PI*2;return new R(Math.cos(b),0,Math.sin(b))}),v=new Ri(new mt().setFromPoints(p),u(.42,!0));return this.root.add(v),{line:v,offset:m}},g=[.25,.5,.75,1].map(f),_=new oi(new mt().setFromPoints([0,Math.PI/2,Math.PI,Math.PI*1.5].flatMap(m=>[new R(o.x,o.top,o.z),new R(o.x+o.radius*Math.cos(m),o.bottom,o.z+o.radius*Math.sin(m))])),u(.28,!0));this.root.add(_),this.entries.push({spec:o,rings:g})}this.draw()}draw(){for(let{spec:e,rings:t}of this.entries)for(let{line:i,offset:s}of t){let o=this.settings.animation&&!this.settings.reducedMotion?((s+(e.kind==="speaker"?this.phase:-this.phase))%1+1)%1:s;i.scale.setScalar(Math.max(.001,e.radius*o)),i.position.set(e.x,e.top-(e.top-e.bottom)*o,e.z)}}tick(e){this.lastTime!==null&&this.settings?.animation&&!this.settings.reducedMotion&&!this.frozen&&(this.phase=(this.phase+Math.min(.05,(e-this.lastTime)/1e3)/3)%1),this.lastTime=e,!this.frozen&&this.settings&&this.draw()}};var wx={remote:1884027,pa:11497710,speaker:3775224};function Ld(n,e,t){let i=e.devices.flatMap(c=>{let l=t==="speaker"?"dc20":`${c.type}_${t==="remote"?"pickup":"pa"}`;if(e.show?.[l]===!1)return[];if(t==="speaker")return c.type==="dc20"?[{device:c,radius:e.radii.dc20}]:[];if(c.type==="dc20")return[];let u=window.AISpeech.radiiForDevice(c,e.radii,e.heightProfile,e.width),h=t==="remote"?c.type==="m100"?u.m100Pickup:u.m40Pickup:c.type==="m100"?u.m100PA:u.m40PA;return[{device:c,radius:h}]}),s=.35,r=[];for(let c=0;c<e.length;c+=s)for(let l=0;l<e.width;l+=s){let u=Math.min(c+s/2,e.length),h=Math.min(l+s/2,e.width);if(!i.some(({device:g,radius:_})=>(u-g.x)**2+(h-g.y)**2<=_**2))continue;let d=Math.min(c+s,e.length),f=Math.min(l+s,e.width);for(let[g,_]of[[c,l],[d,l],[d,f],[c,l],[d,f],[c,f]])r.push(...Gr(e,g,_,t==="remote"?.018:t==="pa"?.025:.032))}let o=new mt;o.setAttribute("position",new Xe(r,3));let a=new Le(o,new Dt({color:wx[t],transparent:!0,opacity:.32,side:ht,depthWrite:!1}));a.name=`coverage-${t}`,n.add(a)}var Tx=(n,e={})=>new Mt({color:n,roughness:.82,...e}),Qa=class{constructor(e,t){this.canvas=e,this.onSelect=t,this.deviceObjects=[],this.scene=new Qs,this.scene.background=new Ue(792361),this.scene.fog=new Ks(792361,30,78),this.camera=new zt(43,1,.05,150),this.renderer=new Ga({canvas:e,antialias:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=Et,this.renderer.toneMapping=ta,this.controls=new Xa(this.camera,e),this.controls.enableDamping=!0,this.controls.minDistance=.18,this.controls.addEventListener("start",()=>{this.viewName=null,this.updateViewButtons()}),this.controls.maxDistance=95,this.controls.maxPolarAngle=Math.PI*.495,this.raycaster=new Mr,this.pointer=new re,this.room=new Ge,this.scene.add(this.room),this.ambient=new yr(13232383,2504524,2.5),this.scene.add(this.ambient);let i=new xs(16777215,2.4);i.position.set(-9,16,-12),this.scene.add(i);let s=new xs(14873087,1.7);s.position.set(3,-7,6),this.scene.add(s);let r=()=>this.resize();this.resizeObserver=new ResizeObserver(r),this.resizeObserver.observe(e.parentElement);let o;e.addEventListener("pointerdown",a=>{o=[a.clientX,a.clientY]}),e.addEventListener("pointerup",a=>{if(!o||Math.hypot(a.clientX-o[0],a.clientY-o[1])>5)return;let c=e.getBoundingClientRect();this.pointer.set((a.clientX-c.left)/c.width*2-1,-(a.clientY-c.top)/c.height*2+1),this.raycaster.setFromCamera(this.pointer,this.camera);let l=this.raycaster.intersectObjects(this.deviceObjects,!0)[0];l&&this.onSelect(l.object.userData.selectGroup?.userData.device)}),this.volumes=new Ka(this.scene,this.renderer),this.resize(),this.animate()}resize(){let e=this.canvas.parentElement.getBoundingClientRect(),t=Math.max(1,Math.floor(e.width)),i=Math.max(1,Math.floor(e.height));this.renderer.setSize(t,i,!1),this.camera.aspect=t/i,this.camera.updateProjectionMatrix(),this.plan&&this.viewName&&this.setView(this.viewName)}animate(){this.volumes?.tick(performance.now()),this.controls.update(),this.renderer.render(this.scene,this.camera),this.onFrame?.(),this.frame=requestAnimationFrame(()=>this.animate())}build(e,t,i,s){this.focusTile=null,Nr(this.room),this.plan=e,this.cameraVisible=i.camera!==!1;let r=Math.max(e.length,e.width);this.camera.far=Math.max(250,r*12),this.camera.updateProjectionMatrix(),this.controls.maxDistance=Math.max(95,r*12),this.scene.fog.near=Math.max(30,r*3),this.scene.fog.far=Math.max(78,r*8),this.deviceObjects=[];let o=new Le(new jt(e.length,e.width),this.shellMaterial("floor"));o.rotation.x=-Math.PI/2,this.room.add(o);let a=new Sr(Math.max(e.length,e.width),Math.ceil(Math.max(e.length,e.width)),4547706,3163997);a.scale.set(e.length/Math.max(e.length,e.width),1,e.width/Math.max(e.length,e.width)),a.position.y=.008,a.userData.themeGrid=!0;let c=new Ue(4547706),l=a.geometry.attributes.color;a.userData.centerIndices=new Set(Array.from({length:l.count},(v,M)=>M).filter(v=>Math.abs(l.getX(v)-c.r)<1e-6)),this.room.add(a);let u=this.shellMaterial("glass",{transparent:!0,opacity:.22,side:ht,depthWrite:!1}),h=e.heightProfile,d=h?.mode==="split"?h.split:e.width,f=h?.front??e.height,g=h?.mode==="split"?h.rear:f,_=new Le(new jt(e.length,g),u);_.position.set(0,g/2,e.width/2),this.room.add(_);for(let v of[-1,1])for(let[M,x,b]of[[0,d,f],[d,e.width,g]]){if(x<=M)continue;let A=new Le(new jt(x-M,b),u);if(A.rotation.y=Math.PI/2,A.position.set(v*e.length/2,b/2,(M+x)/2-e.width/2),this.room.add(A),v===-1){let C=new Le(new jt(e.length,x-M),this.shellMaterial("glass",{transparent:!0,opacity:.08,side:ht,depthWrite:!1}));C.rotation.x=-Math.PI/2,C.position.set(0,b,(M+x)/2-e.width/2),C.name="ceiling-zone",this.room.add(C);let I=new oi(new or(new ct(e.length,b,x-M)),new yn({color:4024708,transparent:!0,opacity:.52}));I.position.set(0,b/2,(M+x)/2-e.width/2),I.material.userData.themeRole="trim",this.room.add(I)}}if(h?.mode==="split"&&f!==g){let v=new Le(new jt(e.length,Math.abs(f-g)),u);v.position.set(0,(f+g)/2,d-e.width/2),this.room.add(v)}this.addDoors(e);let m=new Le(new jt(e.length,f),this.shellMaterial("front",{side:ht}));m.position.set(0,f/2,-e.width/2),this.room.add(m);let p=new Le(new ct(Math.max(1,e.length*.58),.045,.7),this.shellMaterial("platform"));p.position.set(0,.023,-e.width/2+.55),this.room.add(p),this.setTheme(this.theme||"dark"),s.forEach(v=>this.addDevice(v,t,i)),e.displays.forEach(v=>this.addDevice({...v,type:"display"},t,i)),e.devices.forEach(v=>this.addDevice(v,t,i));for(let v of["remote","pa","speaker"])t.floorProjection&&i[v]&&Ld(this.room,e,v)}addDevice(e,t,i){if(i[e.type]===!1)return;let s=Id(e,this.plan,t);this.room.add(s),this.deviceObjects.push(s)}shellMaterial(e,t={}){let i=Tx(Ls[this.theme||"dark"][e],t);return i.userData.themeRole=e,i}addDoors({length:e,width:t,height:i,heightProfile:s}){let r=new Ge;r.name="room-doors";let o=Math.min(1.16,(t-.36)/2),a=Math.max(o/2+.08,Math.min(1.45,t*.2)),c=this.doorSide==="left"?-e/2+.09:e/2-.09;for(let[l,u]of[a,t-a].entries()){let h=s?.mode==="split"&&u>=s.split?s.rear:s?.front??i,d=Math.min(2.18,h-.12),f=new Ge;f.name=`room-door-${l+1}`;let g=(m,p,v)=>{let M=new Le(new ct(...m),this.shellMaterial(v));M.position.set(...p),f.add(M)},_=u-t/2;g([.09,d,o],[c,d/2,_],"door"),g([.1,d-.14,o-.14],[c,d/2,_],"doorPanel"),g([.115,d*.22,o*.42],[c,d*.75,_],"window"),g([.15,.04,.14],[c,d*.45,_+o*.3],"handle"),r.add(f)}this.room.add(r)}setDoorSide(e){if(this.doorSide=e==="left"?"left":"right",!this.plan)return;let t=this.room.getObjectByName("room-doors");t&&(Nr(t),t.removeFromParent()),this.addDoors(this.plan)}setTheme(e){this.theme=e;let t=Ls[e];this.scene.background.set(t.background),this.scene.fog.color.set(t.background),this.ambient.color.set(t.sky),this.ambient.groundColor.set(t.ground),this.renderer.toneMappingExposure=t.exposure,this.room.traverse(i=>{let s=i.material?.userData.themeRole;if(s&&i.material.color.set(t[s]),i.userData.themeGrid){let r=i.geometry.attributes.color;for(let o=0;o<r.count;o++){let a=new Ue(i.userData.centerIndices.has(o)?t.gridCenter:t.grid);r.setXYZ(o,a.r,a.g,a.b)}r.needsUpdate=!0}})}updateViewButtons(){document.querySelectorAll("[data-view]").forEach(e=>{let t=e.dataset.view===this.viewName;e.classList.toggle("active",t),e.setAttribute("aria-pressed",String(t))})}setView(e){this.focusTile&&(this.focusTile.visible=!0),this.focusTile=null,this.viewName=e,this.updateViewButtons(),this.controls.maxPolarAngle=Math.PI*.495;let{length:t,width:i,height:s}=this.plan,r=Math.max(t,i),o=Math.max(1,1.2/this.camera.aspect),a=new R(0,s*.34,0),c={overview:[r*.78*o,r*.78*o,r*.94*o],top:[.01,r*1.35*o,.01],stage:[0,s*.75,-i/2+Math.min(2,i*.3)],audience:[0,s*.85,i/2+Math.max(2,i*.25)]},l=c[e]||c.overview;if(this.camera.position.set(...l),e==="overview"||e==="top"){let u=this.camera.position.clone().sub(a).normalize(),h=new R(0,1,0).cross(u).normalize(),d=u.clone().cross(h),f=Math.tan(this.camera.fov*Math.PI/360)*.8,g=f*this.camera.aspect,_=1;for(let m of[-t/2,t/2])for(let p of[0,s])for(let v of[-i/2,i/2]){let M=new R(m,p,v).sub(a),x=M.dot(u);_=Math.max(_,x+Math.abs(M.dot(h))/g,x+Math.abs(M.dot(d))/f)}this.camera.position.copy(a).addScaledVector(u,_)}this.controls.target.copy(a),this.camera.lookAt(a),this.controls.update()}focusDevice(e){let t=this.deviceObjects.find(o=>o.userData.device.id===e);if(!t)return!1;this.focusTile&&(this.focusTile.visible=!0),this.focusTile=null;let i=t.userData.device;i.type==="dc20"&&(this.focusTile=t.getObjectByName("dc20-ceiling-tile-demonstration"),this.focusTile&&(this.focusTile.visible=!1)),this.viewName=null,this.updateViewButtons(),this.controls.maxPolarAngle=Math.PI*.96;let s=t.position.clone(),r=i.type==="m100"?new R(.25,-.64,.95):i.type==="dc20"?new R(.43,-.25,.52):i.type==="podium"?new R(1.7,1.65,-1.7):new R(.7,.35,1.15);return this.controls.target.copy(s),this.camera.position.copy(s).add(r),this.camera.lookAt(s),this.controls.update(),!0}exportPNG(e){let t=this.volumes.frozen;this.volumes.frozen=!0;try{this.renderer.render(this.scene,this.camera);let i=document.createElement("canvas");i.width=this.canvas.width,i.height=this.canvas.height;let s=i.getContext("2d");return s.drawImage(this.canvas,0,0),e?.drawOnCanvas(s),i.toDataURL("image/png")}finally{this.volumes.frozen=t}}};var Nd={brandSub:"Planificateur de salle 3D",preset:"Salle",custom:"Personnalis\xE9e",length:"Longueur X",width:"Profondeur Y",height:"Hauteur",recalculate:"Recalculer",export:"Exporter en PNG",sceneCaption:"Vue interactive de la salle",overview:"Vue g\xE9n\xE9rale",top:"Vue de dessus",stage:"Estrade",audience:"\xC9l\xE8ves",sceneHint:"Glisser pour tourner \xB7 Molette pour zoomer \xB7 Glisser avec le bouton droit pour d\xE9placer",planLabel:"CONFIGURATION ACTUELLE",title:"Couverture de la salle en 3D",intro:"Les plans ind\xE9pendants utilisent les r\xE8gles de recommandation de la vue 2D.",importedIntro:"Les dimensions, \xE9quipements et positions au sol sont conserv\xE9s depuis le d\xE9ploiement 2D import\xE9.",coverage:"Projection au sol",projection:"R\xE8gles 2D",coverageNote:"Projection au sol des r\xE8gles 2D, sans validation acoustique 3D.",selection:"\xC9quipement s\xE9lectionn\xE9",demo:"D\xE9mo",selectPrompt:"Cliquez sur un \xE9quipement ou s\xE9lectionnez-le ci-dessous.",settings:"Param\xE8tres et \xE9quipements",visibility:"Visibilit\xE9",aux:"\xC9crans auxiliaires",remote:"Captation pour les participants distants",pa:"Captation pour la sonorisation locale",speaker:"Projection des haut-parleurs",showLabels:"Noms des \xE9quipements",auxSpace:"Les deux \xE9crans auxiliaires ne tiennent pas dans cette salle. Augmentez sa longueur ou masquez-les.",paNote:"Les M100/M40 n\u2019\xE9mettent pas de son. La sonorisation locale n\xE9cessite des DC20.",install:"Hauteurs de montage de la d\xE9mo",audioDrop:"M100/M40 sous le plafond",mainHeight:"Centre de l\u2019IFP",auxDrop:"\xC9crans auxiliaires sous le plafond",dc20MountNote:"La grille du DC20 se situe \xE0 12 mm sous le plafond ; son bo\xEEtier est au-dessus.",radii:"Rayons de couverture 2D \xB7 m",devices:"\xC9quipements",bom:"\xC9quipements recommand\xE9s",bomNote:"DU11 et DSP figurent dans la nomenclature ; aucun emplacement de montage dans la salle n\u2019est sp\xE9cifi\xE9.",main:"\xC9cran interactif IFP",display:"\xC9crans auxiliaires",ceiling:"Montage au plafond",suspended:"Suspendu",wall:"Fixation murale",floor:"Au sol",visualConfig:"\xC9quipements p\xE9dagogiques \xB7 D\xE9mo 3D",ifpCount:"Nombre d\u2019IFP",ifpSize:"Diagonale de l\u2019IFP",podiumModel:"Mod\xE8le du pupitre",podium:"Pupitre",station:"Station d\u2019enregistrement",screenSpace:"Les IFP et la station ne tiennent pas sur le mur avant. R\xE9duisez le nombre ou la taille des \xE9crans, ou masquez la station.",screenHeight:"L\u2019IFP ne tient pas \xE0 cette hauteur. Ajustez sa taille, sa hauteur centrale ou la hauteur de la salle.",demoEquipment:"\xC9quipements p\xE9dagogiques 3D",position:"Position 2D",demoPosition:"Position au sol de la d\xE9mo",demoDimensions:"Dimensions de la d\xE9mo",mountHeight:"Hauteur de montage",installMethod:"Montage",assumption:"Hypoth\xE8se de d\xE9monstration",recessed:"Encastr\xE9 dans le plafond",dimensions:"Dimensions du produit",focusDevice:"Voir l\u2019\xE9quipement de pr\xE8s",area:"Surface",unit:"m",du11:"DU11",channels:"canaux utilis\xE9s",invalid:"Saisissez une salle valide : X de 2\u201340 m, Y de 2\u201340 m, hauteur de 2\u20134 m.",imported:"Plan issu de la 2D \xB7 Modifiez le d\xE9ploiement en 2D, puis ouvrez \xE0 nouveau la vue 3D. Les statistiques conservent les param\xE8tres de couverture import\xE9s.",doorSide:"C\xF4t\xE9 des portes",doorRight:"Mur de droite",doorLeft:"Mur de gauche",reset:"Restaurer les valeurs de la d\xE9mo",webgl:"WebGL n\u2019est pas disponible. Activez l\u2019acc\xE9l\xE9ration mat\xE9rielle dans votre navigateur."};var Ud={brandSub:"3D \uAD50\uC2E4 \uC124\uACC4",preset:"\uACF5\uAC04",custom:"\uC0AC\uC6A9\uC790 \uC9C0\uC815",length:"\uAE38\uC774 X",width:"\uAE4A\uC774 Y",height:"\uB192\uC774 (m)",recalculate:"\uB2E4\uC2DC \uACC4\uC0B0",export:"PNG \uB0B4\uBCF4\uB0B4\uAE30",sceneCaption:"\uC778\uD130\uB799\uD2F0\uBE0C \uACF5\uAC04 \uBCF4\uAE30",overview:"\uC804\uCCB4 \uBCF4\uAE30",top:"\uD3C9\uBA74 \uBCF4\uAE30",stage:"\uAD50\uB2E8",audience:"\uD559\uC0DD\uC11D",sceneHint:"\uB4DC\uB798\uADF8: \uD68C\uC804 \xB7 \uD720: \uD655\uB300/\uCD95\uC18C \xB7 \uC624\uB978\uCABD \uB4DC\uB798\uADF8: \uC774\uB3D9",planLabel:"\uD604\uC7AC \uAD6C\uC131",title:"3D \uAD50\uC2E4 \uCEE4\uBC84\uB9AC\uC9C0",intro:"\uB3C5\uB9BD \uACC4\uD68D\uC740 2D\uC640 \uAC19\uC740 \uCD94\uCC9C \uADDC\uCE59\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4.",importedIntro:"\uACF5\uAC04 \uD06C\uAE30, \uC7A5\uBE44 \uBC0F \uBC14\uB2E5 \uC704\uCE58\uB294 \uAC00\uC838\uC628 2D \uBC30\uCE58\uC640 \uAC19\uC2B5\uB2C8\uB2E4.",coverage:"\uBC14\uB2E5 \uD22C\uC601",projection:"2D \uADDC\uCE59",coverageNote:"2D \uADDC\uCE59\uC758 \uBC14\uB2E5 \uD22C\uC601\uC774\uBA70 \uAC80\uC99D\uB41C 3D \uC74C\uD5A5 \uC2DC\uBBAC\uB808\uC774\uC158\uC774 \uC544\uB2D9\uB2C8\uB2E4.",selection:"\uC120\uD0DD\uD55C \uC7A5\uBE44",demo:"\uB370\uBAA8",selectPrompt:"\uC7A5\uBE44\uB97C \uD074\uB9AD\uD558\uAC70\uB098 \uC544\uB798\uC5D0\uC11C \uC120\uD0DD\uD558\uC138\uC694.",settings:"\uC124\uC815 \uBC0F \uC7A5\uBE44",visibility:"\uD45C\uC2DC \uC124\uC815",aux:"\uBCF4\uC870 \uD654\uBA74",remote:"\uC6D0\uACA9 \uC218\uC74C",pa:"\uD604\uC7A5 \uD655\uC131 \uC218\uC74C",speaker:"\uC2A4\uD53C\uCEE4 \uD22C\uC601",showLabels:"\uC7A5\uBE44 \uC774\uB984",auxSpace:"\uBCF4\uC870 \uD654\uBA74 \uB450 \uAC1C\uAC00 \uACF5\uAC04\uC5D0 \uB9DE\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uAE38\uC774\uB97C \uB298\uB9AC\uAC70\uB098 \uD654\uBA74\uC744 \uC228\uAE30\uC138\uC694.",paNote:"\uB9C8\uC774\uD06C \uC790\uCCB4\uB294 \uC18C\uB9AC\uB97C \uB0B4\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uD604\uC7A5 \uD655\uC131\uC5D0\uB294 \uCC9C\uC7A5 \uC2A4\uD53C\uCEE4\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.",install:"\uC608\uC2DC \uC124\uCE58 \uB192\uC774",audioDrop:"\uCC9C\uC7A5 \uC544\uB798 M100/M40",mainHeight:"IFP \uC911\uC2EC \uB192\uC774",auxDrop:"\uBCF4\uC870 \uD654\uBA74 \uCC9C\uC7A5 \uC774\uACA9",dc20MountNote:"DC20 \uC804\uBA74\uC740 \uCC9C\uC7A5 \uC544\uB798 12 mm, \uBCF8\uCCB4\uB294 \uCC9C\uC7A5 \uC704\uC5D0 \uBC30\uCE58\uB429\uB2C8\uB2E4.",radii:"2D \uCEE4\uBC84\uB9AC\uC9C0 \uBC18\uACBD \xB7 m",devices:"\uC7A5\uBE44",bom:"\uAD8C\uC7A5 \uC7A5\uBE44",bomNote:"DU11\uACFC DSP\uB294 \uC7A5\uBE44 \uBAA9\uB85D\uC5D0 \uD3EC\uD568\uB418\uBA70 \uAD50\uC2E4 \uC124\uCE58 \uC704\uCE58\uB294 \uC9C0\uC815\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.",main:"IFP \uB300\uD654\uD615 \uD654\uBA74",display:"\uBCF4\uC870 \uD654\uBA74",ceiling:"\uCC9C\uC7A5 \uC124\uCE58",suspended:"\uB9E4\uB2EC\uAE30 \uC124\uCE58",wall:"\uBCBD\uBA74 \uC124\uCE58",floor:"\uBC14\uB2E5 \uBC30\uCE58",visualConfig:"\uAD50\uC721 \uC7A5\uBE44 \xB7 3D \uC2DC\uC5F0",ifpCount:"IFP \uC218\uB7C9",ifpSize:"IFP \uD06C\uAE30",podiumModel:"\uAC15\uC758\uB300 \uBAA8\uB378",podium:"\uAC15\uC758\uB300",station:"\uB179\uD654 \uC2A4\uD14C\uC774\uC158",screenSpace:"IFP\uC640 \uC2A4\uD14C\uC774\uC158\uC774 \uC804\uBA74 \uBCBD\uC5D0 \uB9DE\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uD654\uBA74 \uC218\xB7\uD06C\uAE30\uB97C \uC904\uC774\uAC70\uB098 \uC2A4\uD14C\uC774\uC158\uC744 \uC228\uAE30\uC138\uC694.",screenHeight:"IFP\uAC00 \uD604\uC7AC \uB192\uC774\uC5D0 \uB9DE\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uD06C\uAE30, \uC911\uC2EC \uB192\uC774 \uB610\uB294 \uCC9C\uC7A5 \uB192\uC774\uB97C \uC870\uC815\uD558\uC138\uC694.",demoEquipment:"3D \uAD50\uC721 \uC7A5\uBE44",position:"2D \uC704\uCE58",demoPosition:"\uC608\uC2DC \uBC14\uB2E5 \uC704\uCE58",demoDimensions:"\uC608\uC2DC \uD06C\uAE30",mountHeight:"\uC124\uCE58 \uB192\uC774",installMethod:"\uC124\uCE58 \uBC29\uC2DD",assumption:"\uC2DC\uC5F0\uC6A9 \uAC00\uC815",recessed:"\uCC9C\uC7A5 \uB9E4\uB9BD",dimensions:"\uC81C\uD488 \uD06C\uAE30",focusDevice:"\uC7A5\uBE44 \uD655\uB300 \uBCF4\uAE30",area:"\uBA74\uC801",unit:"m",du11:"DU11",channels:"\uC0AC\uC6A9 \uCC44\uB110",invalid:"\uC720\uD6A8\uD55C \uACF5\uAC04\uC744 \uC785\uB825\uD558\uC138\uC694: X 2\u201340 m, Y 2\u201340 m, \uB192\uC774 2\u20134 m.",imported:"2D \uACC4\uD68D \xB7 \uC218\uC815 \uD6C4 2D\uC5D0\uC11C 3D \uBCF4\uAE30\uB97C \uB2E4\uC2DC \uB204\uB974\uC138\uC694. \uD1B5\uACC4\uB294 \uAC00\uC838\uC628 \uCEE4\uBC84\uB9AC\uC9C0 \uC124\uC815\uC744 \uC720\uC9C0\uD569\uB2C8\uB2E4.",doorSide:"\uBB38 \uC704\uCE58",doorRight:"\uC624\uB978\uCABD \uBCBD",doorLeft:"\uC67C\uCABD \uBCBD",reset:"\uB370\uBAA8 \uAE30\uBCF8\uAC12 \uBCF5\uC6D0",webgl:"WebGL\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D\uC744 \uC9C0\uC6D0\uD558\uB294 \uBE0C\uB77C\uC6B0\uC800\uB97C \uC0AC\uC6A9\uD558\uC138\uC694."};var Fd={brandSub:"3D \u0430\u043D\u0433\u0438\u0439\u043D \u0442\u04E9\u043B\u04E9\u0432\u043B\u04E9\u043B\u0442",preset:"\u04E8\u0440\u04E9\u04E9",custom:"\u0422\u0443\u0441\u0433\u0430\u0439 \u0445\u044D\u043C\u0436\u044D\u044D",length:"\u0423\u0440\u0442 X",width:"\u0413\u04AF\u043D Y",height:"\u04E8\u043D\u0434\u04E9\u0440 (\u043C)",recalculate:"\u0414\u0430\u0445\u0438\u043D \u0442\u043E\u043E\u0446\u043E\u043E\u043B\u043E\u0445",export:"PNG \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u043B\u043E\u0445",sceneCaption:"\u04E8\u0440\u04E9\u04E9\u043D\u0438\u0439 \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432 \u0445\u0430\u0440\u0430\u0433\u0434\u0430\u0446",overview:"\u0415\u0440\u04E9\u043D\u0445\u0438\u0439",top:"\u0414\u044D\u044D\u0440\u044D\u044D\u0441",stage:"\u0411\u0430\u0433\u0448\u0438\u0439\u043D \u0445\u044D\u0441\u044D\u0433",audience:"\u0421\u0443\u0440\u0430\u043B\u0446\u0430\u0433\u0447\u0438\u0434",sceneHint:"\u0427\u0438\u0440\u044D\u0445: \u044D\u0440\u0433\u04AF\u04AF\u043B\u044D\u0445 \xB7 \u0413\u04AF\u0439\u043B\u0433\u044D\u0445: \u0442\u043E\u043C\u0440\u0443\u0443\u043B\u0430\u0445 \xB7 \u0411\u0430\u0440\u0443\u0443\u043D \u0447\u0438\u0440\u044D\u043B\u0442: \u0448\u0438\u043B\u0436\u04AF\u04AF\u043B\u044D\u0445",planLabel:"\u041E\u0414\u041E\u041E\u0413\u0418\u0419\u041D \u0422\u04E8\u041B\u04E8\u0412\u041B\u04E8\u0413\u04E8\u04E8",title:"3D \u0430\u043D\u0433\u0438\u0439\u043D \u0445\u0430\u043C\u0440\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D",intro:"\u0422\u0443\u0441\u0434\u0430\u0430 \u0442\u04E9\u043B\u04E9\u0432\u043B\u04E9\u0433\u04E9\u04E9 \u043D\u044C 2D \u0441\u0430\u043D\u0430\u043B\u044B\u043D \u0434\u04AF\u0440\u043C\u0438\u0439\u0433 \u0430\u0448\u0438\u0433\u043B\u0430\u043D\u0430.",importedIntro:"\u0425\u044D\u043C\u0436\u044D\u044D, \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436, \u0448\u0430\u043B\u043D\u044B \u0431\u0430\u0439\u0440\u043B\u0430\u043B \u043D\u044C \u0438\u043C\u043F\u043E\u0440\u0442\u043E\u043B\u0441\u043E\u043D 2D \u0442\u04E9\u043B\u04E9\u0432\u043B\u04E9\u0433\u04E9\u04E9\u0442\u044D\u0439 \u0438\u0436\u0438\u043B.",coverage:"\u0428\u0430\u043B\u043D\u044B \u0442\u0443\u0441\u0433\u0430\u043B",projection:"2D \u0434\u04AF\u0440\u044D\u043C",coverageNote:"2D \u0434\u04AF\u0440\u043C\u0438\u0439\u043D \u0448\u0430\u043B\u043D\u044B \u0442\u0443\u0441\u0433\u0430\u043B \u0431\u04E9\u0433\u04E9\u04E9\u0434 \u0431\u0430\u0442\u0430\u043B\u0433\u0430\u0430\u0436\u0441\u0430\u043D 3D \u0430\u043A\u0443\u0441\u0442\u0438\u043A \u0441\u0438\u043C\u0443\u043B\u044F\u0446 \u0431\u0438\u0448.",selection:"\u0421\u043E\u043D\u0433\u043E\u0441\u043E\u043D \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436",demo:"\u04AE\u0437\u04AF\u04AF\u043B\u044D\u043D",selectPrompt:"\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436 \u0434\u044D\u044D\u0440 \u0434\u0430\u0440\u0436 \u044D\u0441\u0432\u044D\u043B \u0434\u043E\u043E\u0440\u043E\u043E\u0441 \u0441\u043E\u043D\u0433\u043E\u043D\u043E.",settings:"\u0422\u043E\u0445\u0438\u0440\u0433\u043E\u043E \u0431\u0430 \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u04AF\u04AF\u0434",visibility:"\u0425\u0430\u0440\u0430\u0433\u0434\u0430\u0446",aux:"\u0422\u0443\u0441\u043B\u0430\u0445 \u0434\u044D\u043B\u0433\u044D\u0446\u04AF\u04AF\u0434",remote:"\u0410\u043B\u0441\u044B\u043D \u043E\u0440\u043E\u043B\u0446\u043E\u043E\u043D\u044B \u0434\u0443\u0443 \u0445\u04AF\u043B\u044D\u044D\u043D \u0430\u0432\u0430\u043B\u0442",pa:"\u0414\u043E\u0442\u043E\u043E\u0434 \u04E9\u0441\u0433\u04E9\u043B\u0442\u0438\u0439\u043D \u0434\u0443\u0443 \u0445\u04AF\u043B\u044D\u044D\u043D \u0430\u0432\u0430\u043B\u0442",speaker:"\u0427\u0430\u043D\u0433\u0430 \u044F\u0440\u0438\u0433\u0447\u0438\u0439\u043D \u0442\u0443\u0441\u0433\u0430\u043B",showLabels:"\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u043D \u043D\u044D\u0440",auxSpace:"\u0425\u043E\u0451\u0440 \u0442\u0443\u0441\u043B\u0430\u0445 \u0434\u044D\u043B\u0433\u044D\u0446 \u0431\u0430\u0433\u0442\u0430\u0445\u0433\u04AF\u0439. \u04E8\u0440\u04E9\u04E9\u043D\u0438\u0439 \u0443\u0440\u0442\u044B\u0433 \u043D\u044D\u043C\u044D\u0445 \u044D\u0441\u0432\u044D\u043B \u0434\u044D\u043B\u0433\u044D\u0446\u0438\u0439\u0433 \u043D\u0443\u0443\u043D\u0430.",paNote:"\u041C\u0438\u043A\u0440\u043E\u0444\u043E\u043D \u04E9\u04E9\u0440\u04E9\u04E9 \u0434\u0443\u0443 \u0433\u0430\u0440\u0433\u0430\u0445\u0433\u04AF\u0439. \u0414\u043E\u0442\u043E\u043E\u0434 \u04E9\u0441\u0433\u04E9\u043B\u0442\u04E9\u0434 \u0442\u0430\u0430\u0437\u043D\u044B \u0447\u0430\u043D\u0433\u0430 \u044F\u0440\u0438\u0433\u0447 \u0448\u0430\u0430\u0440\u0434\u043B\u0430\u0433\u0430\u0442\u0430\u0439.",install:"\u0423\u0433\u0441\u0440\u0430\u043B\u0442\u044B\u043D \u04E9\u043D\u0434\u0440\u0438\u0439\u043D \u0436\u0438\u0448\u044D\u044D",audioDrop:"\u0422\u0430\u0430\u0437\u043D\u0430\u0430\u0441 \u0434\u043E\u043E\u0448 M100/M40",mainHeight:"IFP \u0442\u04E9\u0432\u0438\u0439\u043D \u04E9\u043D\u0434\u04E9\u0440",auxDrop:"\u0422\u0443\u0441\u043B\u0430\u0445 \u0434\u044D\u043B\u0433\u044D\u0446\u0438\u0439\u043D \u0442\u0430\u0430\u0437\u043D\u0430\u0430\u0441 \u0437\u0430\u0439",dc20MountNote:"DC20 \u043D\u04AF\u04AF\u0440 \u0442\u0430\u0430\u0437\u043D\u0430\u0430\u0441 12 \u043C\u043C \u0434\u043E\u043E\u0440, \u0438\u0445 \u0431\u0438\u0435 \u0442\u0430\u0430\u0437\u043D\u044B \u0434\u044D\u044D\u0440 \u0431\u0430\u0439\u0440\u043B\u0430\u043D\u0430.",radii:"2D \u0445\u0430\u043C\u0440\u0430\u0445 \u0440\u0430\u0434\u0438\u0443\u0441 \xB7 \u043C",devices:"\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u04AF\u04AF\u0434",bom:"\u0421\u0430\u043D\u0430\u043B \u0431\u043E\u043B\u0433\u043E\u0445 \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u04AF\u04AF\u0434",bomNote:"DU11 \u0431\u0430 DSP \u043D\u044C \u0436\u0430\u0433\u0441\u0430\u0430\u043B\u0442\u0430\u0434 \u043E\u0440\u0441\u043E\u043D; \u04E9\u0440\u04E9\u04E9\u043D\u0438\u0439 \u0443\u0433\u0441\u0440\u0430\u043B\u0442\u044B\u043D \u0431\u0430\u0439\u0440\u043B\u0430\u043B \u0437\u0430\u0430\u0433\u0430\u0430\u0433\u04AF\u0439.",main:"IFP \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432 \u0434\u044D\u043B\u0433\u044D\u0446",display:"\u0422\u0443\u0441\u043B\u0430\u0445 \u0434\u044D\u043B\u0433\u044D\u0446",ceiling:"\u0422\u0430\u0430\u0437\u043D\u044B \u0443\u0433\u0441\u0440\u0430\u043B\u0442",suspended:"\u0423\u043D\u0436\u0443\u0443\u043B\u0441\u0430\u043D \u0443\u0433\u0441\u0440\u0430\u043B\u0442",wall:"\u0425\u0430\u043D\u044B\u043D \u0443\u0433\u0441\u0440\u0430\u043B\u0442",floor:"\u0428\u0430\u043B\u0430\u043D \u0434\u044D\u044D\u0440 \u0431\u0430\u0439\u0440\u043B\u0443\u0443\u043B\u0430\u0445",visualConfig:"\u0421\u0443\u0440\u0433\u0430\u043B\u0442\u044B\u043D \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436 \xB7 3D \u04AF\u0437\u04AF\u04AF\u043B\u044D\u043D",ifpCount:"IFP \u0442\u043E\u043E",ifpSize:"IFP \u0445\u044D\u043C\u0436\u044D\u044D",podiumModel:"\u0411\u0430\u0433\u0448\u0438\u0439\u043D \u0448\u0438\u0440\u044D\u044D\u043D\u0438\u0439 \u0437\u0430\u0433\u0432\u0430\u0440",podium:"\u0411\u0430\u0433\u0448\u0438\u0439\u043D \u0448\u0438\u0440\u044D\u044D",station:"\u0411\u0438\u0447\u043B\u044D\u0433\u0438\u0439\u043D \u0441\u0442\u0430\u043D\u0446",screenSpace:"IFP \u0431\u0430 \u0441\u0442\u0430\u043D\u0446 \u0443\u0440\u0434 \u0445\u0430\u043D\u0430\u043D\u0434 \u0431\u0430\u0433\u0442\u0430\u0445\u0433\u04AF\u0439. \u0414\u044D\u043B\u0433\u044D\u0446\u0438\u0439\u043D \u0442\u043E\u043E, \u0445\u044D\u043C\u0436\u044D\u044D\u0433 \u0431\u0430\u0433\u0430\u0441\u0433\u0430\u0445 \u044D\u0441\u0432\u044D\u043B \u0441\u0442\u0430\u043D\u0446\u044B\u0433 \u043D\u0443\u0443\u043D\u0430.",screenHeight:"IFP \u044D\u043D\u044D \u04E9\u043D\u0434\u04E9\u0440\u0442 \u0431\u0430\u0433\u0442\u0430\u0445\u0433\u04AF\u0439. \u0425\u044D\u043C\u0436\u044D\u044D, \u0442\u04E9\u0432\u0438\u0439\u043D \u044D\u0441\u0432\u044D\u043B \u04E9\u0440\u04E9\u04E9\u043D\u0438\u0439 \u04E9\u043D\u0434\u0440\u0438\u0439\u0433 \u04E9\u04E9\u0440\u0447\u0438\u043B\u043D\u04E9.",demoEquipment:"3D \u0441\u0443\u0440\u0433\u0430\u043B\u0442\u044B\u043D \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436",position:"2D \u0431\u0430\u0439\u0440\u043B\u0430\u043B",demoPosition:"\u0428\u0430\u043B\u043D\u044B \u0431\u0430\u0439\u0440\u043B\u0430\u043B\u044B\u043D \u0436\u0438\u0448\u044D\u044D",demoDimensions:"\u0425\u044D\u043C\u0436\u044D\u044D\u043D\u0438\u0439 \u0436\u0438\u0448\u044D\u044D",mountHeight:"\u0423\u0433\u0441\u0440\u0430\u043B\u0442\u044B\u043D \u04E9\u043D\u0434\u04E9\u0440",installMethod:"\u0423\u0433\u0441\u0440\u0430\u043B\u0442\u044B\u043D \u0442\u04E9\u0440\u04E9\u043B",assumption:"\u04AE\u0437\u04AF\u04AF\u043B\u044D\u043D\u0433\u0438\u0439\u043D \u0442\u0430\u0430\u043C\u0430\u0433",recessed:"\u0422\u0430\u0430\u0437\u0430\u043D\u0434 \u0441\u0443\u0443\u043B\u0433\u0430\u0445",dimensions:"\u0411\u04AF\u0442\u044D\u044D\u0433\u0434\u044D\u0445\u04AF\u04AF\u043D\u0438\u0439 \u0445\u044D\u043C\u0436\u044D\u044D",focusDevice:"\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u0433 \u043E\u0439\u0440\u043E\u043E\u0441 \u0445\u0430\u0440\u0430\u0445",area:"\u0422\u0430\u043B\u0431\u0430\u0439",unit:"\u043C",du11:"DU11",channels:"\u0410\u0448\u0438\u0433\u043B\u0430\u0441\u0430\u043D \u0441\u0443\u0432\u0430\u0433",invalid:"\u0417\u04E9\u0432 \u0445\u044D\u043C\u0436\u044D\u044D \u043E\u0440\u0443\u0443\u043B\u043D\u0430: X 2\u201340 \u043C, Y 2\u201340 \u043C, \u04E9\u043D\u0434\u04E9\u0440 2\u20134 \u043C.",imported:"2D \u0442\u04E9\u043B\u04E9\u0432\u043B\u04E9\u0433\u04E9\u04E9 \xB7 2D \u0434\u044D\u044D\u0440 \u04E9\u04E9\u0440\u0447\u043B\u04E9\u04E9\u0434 3D-\u0433 \u0434\u0430\u0445\u0438\u043D \u043D\u044D\u044D\u043D\u044D. \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A \u0438\u043C\u043F\u043E\u0440\u0442\u043E\u043B\u0441\u043E\u043D \u0445\u0430\u043C\u0440\u0430\u0445 \u0442\u043E\u0445\u0438\u0440\u0433\u043E\u043E\u0433 \u0445\u0430\u0434\u0433\u0430\u043B\u043D\u0430.",doorSide:"\u0425\u0430\u0430\u043B\u0433\u0430\u043D\u044B \u0442\u0430\u043B",doorRight:"\u0411\u0430\u0440\u0443\u0443\u043D \u0445\u0430\u043D\u0430",doorLeft:"\u0417\u04AF\u04AF\u043D \u0445\u0430\u043D\u0430",reset:"\u04AE\u0437\u04AF\u04AF\u043B\u044D\u043D\u0433\u0438\u0439\u043D \u0430\u043D\u0445\u043D\u044B \u0442\u043E\u0445\u0438\u0440\u0433\u043E\u043E",webgl:"WebGL \u0430\u0448\u0438\u0433\u043B\u0430\u0445 \u0431\u043E\u043B\u043E\u043C\u0436\u0433\u04AF\u0439. \u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u043D \u0445\u0443\u0440\u0434\u0430\u0441\u0433\u0430\u043B\u0442\u0430\u0439 \u0445\u04E9\u0442\u04E9\u0447 \u0445\u044D\u0440\u044D\u0433\u043B\u044D\u043D\u044D."};var Od={brandSub:"3D\u6559\u5BA4\u30D7\u30E9\u30F3\u30CA\u30FC",preset:"\u90E8\u5C4B",custom:"\u30AB\u30B9\u30BF\u30E0",length:"\u9577\u3055 X",width:"\u5965\u884C Y",height:"\u9AD8\u3055 (m)",recalculate:"\u518D\u8A08\u7B97",export:"PNG\u3092\u66F8\u304D\u51FA\u3059",sceneCaption:"\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D6\u306A\u5BA4\u5185\u8868\u793A",overview:"\u5168\u4F53",top:"\u4E0A\u9762",stage:"\u6559\u58C7",audience:"\u5BA2\u5E2D",sceneHint:"\u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u8EE2\u30FB\u30DB\u30A4\u30FC\u30EB\u3067\u62E1\u5927\u7E2E\u5C0F\u30FB\u53F3\u30C9\u30E9\u30C3\u30B0\u3067\u79FB\u52D5",planLabel:"\u73FE\u5728\u306E\u30D7\u30E9\u30F3",title:"\u6559\u5BA4\u306E3D\u30AB\u30D0\u30FC\u7BC4\u56F2",intro:"\u72EC\u7ACB\u30D7\u30E9\u30F3\u306F2D\u3068\u540C\u3058\u63A8\u5968\u30EB\u30FC\u30EB\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002",importedIntro:"\u5BF8\u6CD5\u3001\u6A5F\u5668\u3001\u5E8A\u9762\u4F4D\u7F6E\u306F\u8AAD\u307F\u8FBC\u3093\u30602D\u914D\u7F6E\u3068\u540C\u3058\u3067\u3059\u3002",coverage:"\u5E8A\u9762\u6295\u5F71",projection:"2D\u30EB\u30FC\u30EB",coverageNote:"2D\u30EB\u30FC\u30EB\u306E\u5E8A\u9762\u6295\u5F71\u3067\u3042\u308A\u3001\u691C\u8A3C\u6E08\u307F\u306E3D\u97F3\u97FF\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002",selection:"\u9078\u629E\u3057\u305F\u6A5F\u5668",demo:"\u30C7\u30E2",selectPrompt:"\u6A5F\u5668\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u304B\u3001\u4E0B\u304B\u3089\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002",settings:"\u8A2D\u5B9A\u3068\u6A5F\u5668",visibility:"\u8868\u793A\u8A2D\u5B9A",aux:"\u88DC\u52A9\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",remote:"\u9060\u9694\u5411\u3051\u96C6\u97F3",pa:"\u5BA4\u5185\u62E1\u58F0\u7528\u96C6\u97F3",speaker:"\u30B9\u30D4\u30FC\u30AB\u30FC\u6295\u5F71",showLabels:"\u6A5F\u5668\u540D",auxSpace:"\u88DC\u52A9\u753B\u97622\u53F0\u304C\u53CE\u307E\u308A\u307E\u305B\u3093\u3002\u90E8\u5C4B\u3092\u9577\u304F\u3059\u308B\u304B\u753B\u9762\u3092\u975E\u8868\u793A\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",paNote:"\u30DE\u30A4\u30AF\u81EA\u4F53\u306F\u97F3\u3092\u51FA\u3057\u307E\u305B\u3093\u3002\u5BA4\u5185\u62E1\u58F0\u306B\u306F\u5929\u4E95\u30B9\u30D4\u30FC\u30AB\u30FC\u304C\u5FC5\u8981\u3067\u3059\u3002",install:"\u53C2\u8003\u53D6\u4ED8\u9AD8\u3055",audioDrop:"\u5929\u4E95\u304B\u3089M100/M40\u307E\u3067",mainHeight:"IFP\u4E2D\u5FC3\u9AD8\u3055",auxDrop:"\u88DC\u52A9\u753B\u9762\u306E\u5929\u4E95\u304B\u3089\u306E\u8DDD\u96E2",dc20MountNote:"DC20\u306E\u524D\u9762\u306F\u5929\u4E95\u4E0B12 mm\u3001\u672C\u4F53\u306F\u5929\u4E95\u88CF\u306B\u914D\u7F6E\u3057\u307E\u3059\u3002",radii:"2D\u30AB\u30D0\u30FC\u534A\u5F84 \xB7 m",devices:"\u6A5F\u5668",bom:"\u63A8\u5968\u6A5F\u5668",bomNote:"DU11\u3068DSP\u306F\u6A5F\u5668\u8868\u306B\u542B\u307E\u308C\u307E\u3059\u304C\u3001\u6559\u5BA4\u5185\u306E\u53D6\u4ED8\u4F4D\u7F6E\u306F\u6307\u5B9A\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002",main:"IFP\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D6\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",display:"\u88DC\u52A9\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",ceiling:"\u5929\u4E95\u53D6\u4ED8",suspended:"\u540A\u4E0B\u3052\u53D6\u4ED8",wall:"\u58C1\u9762\u53D6\u4ED8",floor:"\u5E8A\u7F6E\u304D",visualConfig:"\u6559\u5B66\u6A5F\u5668 \xB7 3D\u53C2\u8003\u8868\u793A",ifpCount:"IFP\u53F0\u6570",ifpSize:"IFP\u30B5\u30A4\u30BA",podiumModel:"\u8B1B\u5E2B\u5353\u306E\u578B\u756A",podium:"\u8B1B\u5E2B\u5353",station:"\u53CE\u9332\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3",screenSpace:"IFP\u3068\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3\u304C\u524D\u58C1\u306B\u53CE\u307E\u308A\u307E\u305B\u3093\u3002\u753B\u9762\u3092\u6E1B\u3089\u3059\u304B\u5C0F\u3055\u304F\u3059\u308B\u304B\u3001\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3\u3092\u975E\u8868\u793A\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",screenHeight:"\u3053\u306E\u9AD8\u3055\u306BIFP\u3092\u8A2D\u7F6E\u3067\u304D\u307E\u305B\u3093\u3002\u30B5\u30A4\u30BA\u3001\u4E2D\u5FC3\u9AD8\u3055\u3001\u5929\u4E95\u9AD8\u3092\u8ABF\u6574\u3057\u3066\u304F\u3060\u3055\u3044\u3002",demoEquipment:"3D\u6559\u5B66\u6A5F\u5668",position:"2D\u4F4D\u7F6E",demoPosition:"\u53C2\u8003\u5E8A\u9762\u4F4D\u7F6E",demoDimensions:"\u53C2\u8003\u5BF8\u6CD5",mountHeight:"\u53D6\u4ED8\u9AD8\u3055",installMethod:"\u53D6\u4ED8\u65B9\u5F0F",assumption:"\u53C2\u8003\u60F3\u5B9A",recessed:"\u5929\u4E95\u57CB\u8FBC",dimensions:"\u88FD\u54C1\u5BF8\u6CD5",focusDevice:"\u6A5F\u5668\u3092\u8FD1\u304F\u3067\u898B\u308B",area:"\u9762\u7A4D",unit:"m",du11:"DU11",channels:"\u4F7F\u7528\u30C1\u30E3\u30F3\u30CD\u30EB",invalid:"X 2\u201340 m\u3001Y 2\u201340 m\u3001\u9AD8\u30552\u20134 m\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",imported:"2D\u304B\u3089\u306E\u30D7\u30E9\u30F3\u3067\u3059\u3002\u5909\u66F4\u5F8C\u306F2D\u304B\u3089\u518D\u5EA63D\u3092\u958B\u3044\u3066\u304F\u3060\u3055\u3044\u3002\u7D71\u8A08\u306F\u8AAD\u8FBC\u6642\u306E\u30AB\u30D0\u30FC\u8A2D\u5B9A\u3092\u4FDD\u6301\u3057\u307E\u3059\u3002",doorSide:"\u30C9\u30A2\u306E\u4F4D\u7F6E",doorRight:"\u53F3\u306E\u58C1",doorLeft:"\u5DE6\u306E\u58C1",reset:"\u30C7\u30E2\u306E\u521D\u671F\u8A2D\u5B9A\u306B\u623B\u3059",webgl:"WebGL\u3092\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u5BFE\u5FDC\u30D6\u30E9\u30A6\u30B6\u3092\u3054\u5229\u7528\u304F\u3060\u3055\u3044\u3002"};var Bd={brandSub:"Planificador de aulas 3D",preset:"Sala",custom:"Personalizada",length:"Longitud X",width:"Profundidad Y",height:"Altura (m)",recalculate:"Recalcular",export:"Exportar PNG",sceneCaption:"Vista interactiva de la sala",overview:"Vista general",top:"Vista superior",stage:"Escenario",audience:"Alumnos",sceneHint:"Arrastre para rotar \xB7 Rueda para acercar \xB7 Arrastre derecho para desplazar",planLabel:"PLAN ACTUAL",title:"Cobertura del aula en 3D",intro:"Los planes independientes comparten las reglas de recomendaci\xF3n 2D.",importedIntro:"Dimensiones, equipos y posiciones coinciden con la distribuci\xF3n 2D importada.",coverage:"Proyecci\xF3n en el suelo",projection:"Regla 2D",coverageNote:"Proyecci\xF3n de reglas 2D, no una simulaci\xF3n ac\xFAstica 3D validada.",selection:"Equipo seleccionado",demo:"Demo",selectPrompt:"Pulse un equipo o selecci\xF3nelo abajo.",settings:"Ajustes y equipos",visibility:"Visibilidad",aux:"Pantallas auxiliares",remote:"Captaci\xF3n remota",pa:"Captaci\xF3n para amplificaci\xF3n local",speaker:"Proyecci\xF3n de altavoces",showLabels:"Nombres de equipos",auxSpace:"No caben las dos pantallas auxiliares. Aumente la longitud u oc\xFAltelas.",paNote:"Los micr\xF3fonos no emiten sonido. La amplificaci\xF3n requiere altavoces de techo.",install:"Alturas de montaje ilustrativas",audioDrop:"M100/M40 bajo el techo",mainHeight:"Altura central de IFP",auxDrop:"Pantallas auxiliares bajo el techo",dc20MountNote:"La cara de DC20 queda 12 mm bajo el techo; la carcasa queda encima.",radii:"Radios de cobertura 2D \xB7 m",devices:"Equipos",bom:"Equipos recomendados",bomNote:"DU11 y DSP figuran en la lista; no se especifica su ubicaci\xF3n en el aula.",main:"Pantalla interactiva IFP",display:"Pantallas auxiliares",ceiling:"Montaje en techo",suspended:"Suspendido",wall:"Montaje mural",floor:"Sobre el suelo",visualConfig:"Equipos docentes \xB7 Demostraci\xF3n 3D",ifpCount:"Cantidad de IFP",ifpSize:"Tama\xF1o de IFP",podiumModel:"Modelo de atril",podium:"Atril",station:"Estaci\xF3n de grabaci\xF3n",screenSpace:"No caben las IFP y la estaci\xF3n. Reduzca las pantallas u oculte la estaci\xF3n.",screenHeight:"La IFP no cabe a esta altura. Cambie el tama\xF1o, su altura central o la sala.",demoEquipment:"Equipos docentes 3D",position:"Posici\xF3n 2D",demoPosition:"Posici\xF3n ilustrativa",demoDimensions:"Dimensiones ilustrativas",mountHeight:"Altura de montaje",installMethod:"Montaje",assumption:"Supuesto ilustrativo",recessed:"Empotrado en techo",dimensions:"Dimensiones del producto",focusDevice:"Ver equipo de cerca",area:"\xC1rea",unit:"m",du11:"DU11",channels:"canales usados",invalid:"Introduzca X 2\u201340 m, Y 2\u201340 m y altura 2\u20134 m.",imported:"Plan de 2D. Modif\xEDquelo en 2D y vuelva a abrir 3D. Las estad\xEDsticas conservan la cobertura importada.",doorSide:"Lado de la puerta",doorRight:"Pared derecha",doorLeft:"Pared izquierda",reset:"Restaurar valores del demo",webgl:"WebGL no est\xE1 disponible. Use un navegador con aceleraci\xF3n por hardware."};var zd={brandSub:"\u0645\u062E\u0637\u0637 \u0627\u0644\u0641\u0635\u0644 \u062B\u0644\u0627\u062B\u064A \u0627\u0644\u0623\u0628\u0639\u0627\u062F",preset:"\u0627\u0644\u063A\u0631\u0641\u0629",custom:"\u0645\u062E\u0635\u0635",length:"\u0627\u0644\u0637\u0648\u0644 X",width:"\u0627\u0644\u0639\u0645\u0642 Y",height:"\u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639 (\u0645)",recalculate:"\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062D\u0633\u0627\u0628",export:"\u062A\u0635\u062F\u064A\u0631 PNG",sceneCaption:"\u0645\u0646\u0638\u0648\u0631 \u062A\u0641\u0627\u0639\u0644\u064A \u0644\u0644\u063A\u0631\u0641\u0629",overview:"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629",top:"\u0645\u0646 \u0627\u0644\u0623\u0639\u0644\u0649",stage:"\u0627\u0644\u0645\u0646\u0635\u0629",audience:"\u0627\u0644\u0637\u0644\u0627\u0628",sceneHint:"\u0627\u0633\u062D\u0628 \u0644\u0644\u062F\u0648\u0631\u0627\u0646 \xB7 \u0645\u0631\u0651\u0631 \u0644\u0644\u062A\u0643\u0628\u064A\u0631 \xB7 \u0627\u0633\u062D\u0628 \u0628\u0627\u0644\u0632\u0631 \u0627\u0644\u0623\u064A\u0645\u0646 \u0644\u0644\u062A\u062D\u0631\u064A\u0643",planLabel:"\u0627\u0644\u0645\u062E\u0637\u0637 \u0627\u0644\u062D\u0627\u0644\u064A",title:"\u062A\u063A\u0637\u064A\u0629 \u0627\u0644\u0641\u0635\u0644 \u062B\u0644\u0627\u062B\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F",intro:"\u062A\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0645\u062E\u0637\u0637\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u0642\u0644\u0629 \u0642\u0648\u0627\u0639\u062F \u0627\u0644\u062A\u0648\u0635\u064A\u0629 \u0627\u0644\u062B\u0646\u0627\u0626\u064A\u0629 \u0646\u0641\u0633\u0647\u0627.",importedIntro:"\u0627\u0644\u0623\u0628\u0639\u0627\u062F \u0648\u0627\u0644\u0623\u062C\u0647\u0632\u0629 \u0648\u0627\u0644\u0645\u0648\u0627\u0636\u0639 \u062A\u0637\u0627\u0628\u0642 \u0627\u0644\u0645\u062E\u0637\u0637 \u0627\u0644\u062B\u0646\u0627\u0626\u064A \u0627\u0644\u0645\u0633\u062A\u0648\u0631\u062F.",coverage:"\u0627\u0644\u0625\u0633\u0642\u0627\u0637 \u0627\u0644\u0623\u0631\u0636\u064A",projection:"\u0642\u0627\u0639\u062F\u0629 \u062B\u0646\u0627\u0626\u064A\u0629",coverageNote:"\u0625\u0633\u0642\u0627\u0637 \u0644\u0642\u0648\u0627\u0639\u062F \u062B\u0646\u0627\u0626\u064A\u0629\u060C \u0648\u0644\u064A\u0633 \u0645\u062D\u0627\u0643\u0627\u0629 \u0635\u0648\u062A\u064A\u0629 \u062B\u0644\u0627\u062B\u064A\u0629 \u0645\u0639\u062A\u0645\u062F\u0629.",selection:"\u0627\u0644\u062C\u0647\u0627\u0632 \u0627\u0644\u0645\u062D\u062F\u062F",demo:"\u0639\u0631\u0636 \u062A\u0648\u0636\u064A\u062D\u064A",selectPrompt:"\u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \u062C\u0647\u0627\u0632 \u0623\u0648 \u0627\u062E\u062A\u0631\u0647 \u0623\u062F\u0646\u0627\u0647.",settings:"\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0648\u0627\u0644\u0623\u062C\u0647\u0632\u0629",visibility:"\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0639\u0631\u0636",aux:"\u0627\u0644\u0634\u0627\u0634\u0627\u062A \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629",remote:"\u0627\u0644\u062A\u0642\u0627\u0637 \u0627\u0644\u0635\u0648\u062A \u0644\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0644\u0628\u0639\u064A\u062F\u0629",pa:"\u0627\u0644\u062A\u0642\u0627\u0637 \u0627\u0644\u0635\u0648\u062A \u0644\u0644\u062A\u0636\u062E\u064A\u0645 \u0627\u0644\u0645\u062D\u0644\u064A",speaker:"\u0625\u0633\u0642\u0627\u0637 \u0645\u0643\u0628\u0631\u0627\u062A \u0627\u0644\u0635\u0648\u062A",showLabels:"\u0623\u0633\u0645\u0627\u0621 \u0627\u0644\u0623\u062C\u0647\u0632\u0629",auxSpace:"\u0644\u0627 \u062A\u062A\u0633\u0639 \u0627\u0644\u063A\u0631\u0641\u0629 \u0644\u0644\u0634\u0627\u0634\u062A\u064A\u0646 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u062A\u064A\u0646. \u0632\u0650\u062F \u0627\u0644\u0637\u0648\u0644 \u0623\u0648 \u0623\u062E\u0641\u0650 \u0627\u0644\u0634\u0627\u0634\u0627\u062A.",paNote:"\u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646\u0627\u062A \u0644\u0627 \u062A\u0635\u062F\u0631 \u0635\u0648\u062A\u064B\u0627. \u064A\u062A\u0637\u0644\u0628 \u0627\u0644\u062A\u0636\u062E\u064A\u0645 \u0645\u0643\u0628\u0631\u0627\u062A \u0635\u0648\u062A \u0633\u0642\u0641\u064A\u0629.",install:"\u0627\u0631\u062A\u0641\u0627\u0639\u0627\u062A \u062A\u0631\u0643\u064A\u0628 \u062A\u0648\u0636\u064A\u062D\u064A\u0629",audioDrop:"M100/M40 \u0623\u0633\u0641\u0644 \u0627\u0644\u0633\u0642\u0641",mainHeight:"\u0627\u0631\u062A\u0641\u0627\u0639 \u0645\u0631\u0643\u0632 \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u064A\u0629",auxDrop:"\u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0623\u0633\u0641\u0644 \u0627\u0644\u0633\u0642\u0641",dc20MountNote:"\u0648\u0627\u062C\u0647\u0629 DC20 \u0623\u0633\u0641\u0644 \u0627\u0644\u0633\u0642\u0641 \u0628\u064012 \u0645\u0645\u060C \u0648\u0627\u0644\u0647\u064A\u0643\u0644 \u0641\u0648\u0642\u0647.",radii:"\u0623\u0646\u0635\u0627\u0641 \u0623\u0642\u0637\u0627\u0631 \u0627\u0644\u062A\u063A\u0637\u064A\u0629 \u0627\u0644\u062B\u0646\u0627\u0626\u064A\u0629 \xB7 \u0645",devices:"\u0627\u0644\u0623\u062C\u0647\u0632\u0629",bom:"\u0627\u0644\u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0645\u0642\u062A\u0631\u062D\u0629",bomNote:"DU11 \u0648DSP \u0636\u0645\u0646 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0623\u062C\u0647\u0632\u0629\u061B \u0644\u0645 \u064A\u064F\u062D\u062F\u062F \u0645\u0648\u0636\u0639 \u062A\u0631\u0643\u064A\u0628\u0647\u0645\u0627 \u0641\u064A \u0627\u0644\u063A\u0631\u0641\u0629.",main:"\u0634\u0627\u0634\u0629 \u062A\u0641\u0627\u0639\u0644\u064A\u0629 IFP",display:"\u0627\u0644\u0634\u0627\u0634\u0627\u062A \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629",ceiling:"\u062A\u0631\u0643\u064A\u0628 \u0633\u0642\u0641\u064A",suspended:"\u062A\u0631\u0643\u064A\u0628 \u0645\u0639\u0644\u0642",wall:"\u062A\u0631\u0643\u064A\u0628 \u062C\u062F\u0627\u0631\u064A",floor:"\u062A\u0631\u0643\u064A\u0628 \u0623\u0631\u0636\u064A",visualConfig:"\u0645\u0639\u062F\u0627\u062A \u0627\u0644\u062A\u062F\u0631\u064A\u0633 \xB7 \u0639\u0631\u0636 \u062B\u0644\u0627\u062B\u064A \u0627\u0644\u0623\u0628\u0639\u0627\u062F",ifpCount:"\u0639\u062F\u062F \u0627\u0644\u0634\u0627\u0634\u0627\u062A \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u064A\u0629",ifpSize:"\u062D\u062C\u0645 \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u064A\u0629",podiumModel:"\u0637\u0631\u0627\u0632 \u0627\u0644\u0645\u0646\u0635\u0629",podium:"\u0645\u0646\u0635\u0629",station:"\u0645\u062D\u0637\u0629 \u062A\u0633\u062C\u064A\u0644",screenSpace:"\u0644\u0627 \u062A\u062A\u0633\u0639 \u0627\u0644\u0648\u0627\u062C\u0647\u0629 \u0644\u0644\u0634\u0627\u0634\u0627\u062A \u0648\u0627\u0644\u0645\u062D\u0637\u0629. \u0642\u0644\u0644 \u0639\u062F\u062F \u0627\u0644\u0634\u0627\u0634\u0627\u062A \u0623\u0648 \u062D\u062C\u0645\u0647\u0627\u060C \u0623\u0648 \u0623\u062E\u0641\u0650 \u0627\u0644\u0645\u062D\u0637\u0629.",screenHeight:"\u0644\u0627 \u062A\u0644\u0627\u0626\u0645 \u0627\u0644\u0634\u0627\u0634\u0629 \u0647\u0630\u0627 \u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639. \u0639\u062F\u0651\u0644 \u062D\u062C\u0645\u0647\u0627 \u0623\u0648 \u0627\u0631\u062A\u0641\u0627\u0639 \u0645\u0631\u0643\u0632\u0647\u0627 \u0623\u0648 \u0627\u0631\u062A\u0641\u0627\u0639 \u0627\u0644\u063A\u0631\u0641\u0629.",demoEquipment:"\u0645\u0639\u062F\u0627\u062A \u0627\u0644\u062A\u062F\u0631\u064A\u0633 \u0627\u0644\u062B\u0644\u0627\u062B\u064A\u0629",position:"\u0627\u0644\u0645\u0648\u0636\u0639 \u0627\u0644\u062B\u0646\u0627\u0626\u064A",demoPosition:"\u0645\u0648\u0636\u0639 \u0623\u0631\u0636\u064A \u062A\u0648\u0636\u064A\u062D\u064A",demoDimensions:"\u0623\u0628\u0639\u0627\u062F \u062A\u0648\u0636\u064A\u062D\u064A\u0629",mountHeight:"\u0627\u0631\u062A\u0641\u0627\u0639 \u0627\u0644\u062A\u0631\u0643\u064A\u0628",installMethod:"\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062A\u0631\u0643\u064A\u0628",assumption:"\u0627\u0641\u062A\u0631\u0627\u0636 \u062A\u0648\u0636\u064A\u062D\u064A",recessed:"\u062A\u0631\u0643\u064A\u0628 \u0645\u062F\u0645\u062C \u0641\u064A \u0627\u0644\u0633\u0642\u0641",dimensions:"\u0623\u0628\u0639\u0627\u062F \u0627\u0644\u0645\u0646\u062A\u062C",focusDevice:"\u0639\u0631\u0636 \u0627\u0644\u062C\u0647\u0627\u0632 \u0639\u0646 \u0642\u0631\u0628",area:"\u0627\u0644\u0645\u0633\u0627\u062D\u0629",unit:"\u0645",du11:"DU11",channels:"\u0627\u0644\u0642\u0646\u0648\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0629",invalid:"\u0623\u062F\u062E\u0644 X \u0645\u0646 2\u201340 \u0645 \u0648Y \u0645\u0646 2\u201340 \u0645 \u0648\u0627\u0631\u062A\u0641\u0627\u0639\u064B\u0627 2\u20134 \u0645.",imported:"\u0645\u062E\u0637\u0637 \u0645\u0633\u062A\u0648\u0631\u062F. \u0639\u062F\u0651\u0644\u0647 \u0641\u064A \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062B\u0646\u0627\u0626\u064A \u062B\u0645 \u0627\u0641\u062A\u062D \u0627\u0644\u062B\u0644\u0627\u062B\u064A \u0645\u062C\u062F\u062F\u064B\u0627. \u062A\u062D\u062A\u0641\u0638 \u0627\u0644\u0625\u062D\u0635\u0627\u0621\u0627\u062A \u0628\u0627\u0644\u062A\u063A\u0637\u064A\u0629 \u0627\u0644\u0645\u0633\u062A\u0648\u0631\u062F\u0629.",doorSide:"\u062C\u0647\u0629 \u0627\u0644\u0628\u0627\u0628",doorRight:"\u0627\u0644\u062C\u062F\u0627\u0631 \u0627\u0644\u0623\u064A\u0645\u0646",doorLeft:"\u0627\u0644\u062C\u062F\u0627\u0631 \u0627\u0644\u0623\u064A\u0633\u0631",reset:"\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629",webgl:"WebGL \u063A\u064A\u0631 \u0645\u062A\u0627\u062D. \u0627\u0633\u062A\u062E\u062F\u0645 \u0645\u062A\u0635\u0641\u062D\u064B\u0627 \u064A\u062F\u0639\u0645 \u062A\u0633\u0631\u064A\u0639 \u0627\u0644\u0623\u062C\u0647\u0632\u0629."};var Dn={en:{brandSub:"3D classroom planner",preset:"Room",custom:"Custom",length:"Length X",width:"Depth Y",height:"Height",recalculate:"Recalculate",export:"Export PNG",sceneCaption:"Interactive room view",overview:"Overview",top:"Top",stage:"Stage",audience:"Audience",sceneHint:"Drag to rotate \xB7 wheel to zoom \xB7 right drag to pan",planLabel:"CURRENT PLAN",title:"Classroom coverage in 3D",intro:"Independent plans share the 2D recommendation rules.",importedIntro:"Dimensions, devices and floor positions match the imported 2D deployment.",coverage:"Ground projection",projection:"2D rule",coverageNote:"Projection of the 2D rules, not a validated 3D acoustic simulation.",selection:"Selected device",demo:"Demo",selectPrompt:"Click a device or choose one below.",settings:"Settings & devices",visibility:"Visibility",aux:"Auxiliary Displays",remote:"Remote pickup",pa:"Local PA pickup",speaker:"Speaker projection",showLabels:"Device names",auxSpace:"The two Auxiliary Displays do not fit across this room. Increase its length or hide Auxiliary Displays.",paNote:"M100/M40 do not produce sound. Local PA requires DC20.",install:"Demo mounting heights",audioDrop:"M100/M40 below ceiling",mainHeight:"IFP center",auxDrop:"Auxiliary below ceiling",dc20MountNote:"DC20 face is fixed 12 mm below the ceiling; its enclosure sits above it.",radii:"2D coverage radii \xB7 m",devices:"Devices",bom:"Recommended equipment",bomNote:"DU11 and DSP belong to the BOM; no room mounting location is specified.",main:"IFP",display:"Auxiliary Displays",ceiling:"Ceiling mount",suspended:"Suspended",wall:"Wall mount",floor:"Floor standing",visualConfig:"Teaching equipment \xB7 3D demonstration",ifpCount:"IFP panels",ifpSize:"IFP size",podiumModel:"Podium model",podium:"Podium",station:"Recording Station",screenSpace:"These IFP panels and the Station do not fit on the front wall. Choose fewer or smaller panels, or hide the Station.",screenHeight:"The IFP does not fit at this height. Change its size, center height, or room height.",demoEquipment:"3D teaching equipment",position:"2D position",demoPosition:"Demo floor position",demoDimensions:"Demo size",mountHeight:"Mounting height",installMethod:"Mounting",assumption:"Demonstration assumption",recessed:"Recessed ceiling mount",dimensions:"Product size",focusDevice:"View device close up",area:"Area",unit:"m",du11:"DU11",channels:"channels used",invalid:"Enter a valid room: X 2\u201340 m, Y 2\u201340 m, height 2\u20134 m.",imported:"Plan from 2D \xB7 Edit the deployment in 2D and click View 3D again. Statistics retain the imported coverage settings.",doorSide:"Door side",doorRight:"Right wall",doorLeft:"Left wall",reset:"Restore demo defaults",webgl:"WebGL is unavailable in this browser. Try a browser with hardware acceleration."},zh:{brandSub:"\u4E09\u7EF4\u6559\u5BA4\u65B9\u6848",preset:"\u623F\u95F4",custom:"\u81EA\u5B9A\u4E49",length:"\u957F\u5EA6 X",width:"\u6559\u5B66\u6DF1\u5EA6 Y",height:"\u5C42\u9AD8",recalculate:"\u91CD\u65B0\u8BA1\u7B97",export:"\u5BFC\u51FA PNG",sceneCaption:"\u4EA4\u4E92\u5F0F\u623F\u95F4\u89C6\u56FE",overview:"\u5168\u666F",top:"\u4FEF\u89C6",stage:"\u8BB2\u53F0",audience:"\u89C2\u4F17",sceneHint:"\u62D6\u62FD\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u53F3\u952E\u62D6\u62FD\u5E73\u79FB",planLabel:"\u5F53\u524D\u65B9\u6848",title:"\u6559\u5BA4\u4E09\u7EF4\u8986\u76D6\u6F14\u793A",intro:"\u72EC\u7ACB\u89C4\u5212\u4E0E\u4E8C\u7EF4\u9875\u9762\u5171\u7528\u63A8\u8350\u89C4\u5219\u3002",importedIntro:"\u5C3A\u5BF8\u3001\u8BBE\u5907\u6570\u91CF\u4E0E\u5E73\u9762\u4F4D\u7F6E\u5747\u4FDD\u7559\u5BFC\u5165\u7684\u4E8C\u7EF4\u90E8\u7F72\u3002",coverage:"\u5730\u9762\u6295\u5F71",projection:"\u4E8C\u7EF4\u89C4\u5219",coverageNote:"\u4EC5\u4E3A\u4E8C\u7EF4\u89C4\u5219\u5728\u5730\u9762\u7684\u6295\u5F71\uFF0C\u672A\u7ECF\u4E09\u7EF4\u58F0\u5B66\u9A8C\u8BC1\u3002",selection:"\u9009\u4E2D\u8BBE\u5907",demo:"\u6F14\u793A",selectPrompt:"\u70B9\u51FB\u6A21\u578B\u6216\u4ECE\u4E0B\u65B9\u9009\u62E9\u8BBE\u5907\u3002",settings:"\u8BBE\u7F6E\u4E0E\u8BBE\u5907",visibility:"\u663E\u793A\u5F00\u5173",aux:"\u8F85\u52A9\u663E\u793A\u5C4F",remote:"\u8FDC\u7AEF\u62FE\u97F3",pa:"\u672C\u5730\u6269\u58F0\u62FE\u97F3",speaker:"\u626C\u58F0\u5668\u6295\u5F71",showLabels:"\u8BBE\u5907\u540D\u79F0",auxSpace:"\u4E24\u4FA7\u8F85\u52A9\u5C4F\u65E0\u6CD5\u653E\u5165\u5F53\u524D\u6559\u5BA4\uFF0C\u8BF7\u589E\u5927\u623F\u95F4\u957F\u5EA6\u6216\u9690\u85CF\u8F85\u52A9\u5C4F\u3002",paNote:"M100/M40 \u672C\u8EAB\u4E0D\u53D1\u58F0\uFF1B\u672C\u5730\u6269\u58F0\u4F9D\u8D56 DC20\u3002",install:"\u6F14\u793A\u5B89\u88C5\u9AD8\u5EA6",audioDrop:"M100/M40 \u4F4E\u4E8E\u5929\u82B1",mainHeight:"IFP \u4E2D\u5FC3\u9AD8\u5EA6",auxDrop:"\u8F85\u52A9\u5C4F\u4F4E\u4E8E\u5929\u82B1",dc20MountNote:"DC20 \u9762\u7F69\u56FA\u5B9A\u5728\u5929\u82B1\u4E0B\u65B9 12mm\uFF0C\u9ED1\u8272\u540E\u8154\u4F4D\u4E8E\u5929\u82B1\u4E0A\u65B9\u3002",radii:"\u4E8C\u7EF4\u8986\u76D6\u534A\u5F84 \xB7 \u7C73",devices:"\u8BBE\u5907",bom:"\u63A8\u8350\u8BBE\u5907\u6E05\u5355",bomNote:"DU11 \u548C DSP \u5C5E\u4E8E BOM\uFF0C\u73B0\u6709\u8D44\u6599\u672A\u6307\u5B9A\u6559\u5BA4\u5B89\u88C5\u4F4D\u7F6E\u3002",main:"IFP \u4EA4\u4E92\u5E73\u677F",display:"\u8F85\u52A9\u663E\u793A\u5C4F",ceiling:"\u540A\u9876\u5B89\u88C5",suspended:"\u540A\u88C5",wall:"\u58C1\u6302",floor:"\u843D\u5730\u6446\u653E",visualConfig:"\u6559\u5B66\u8BBE\u5907 \xB7 \u4E09\u7EF4\u6F14\u793A",ifpCount:"IFP \u5C4F\u5E55\u6570\u91CF",ifpSize:"IFP \u5C3A\u5BF8",podiumModel:"\u8BB2\u53F0\u578B\u53F7",podium:"\u8BB2\u53F0",station:"\u5F55\u64AD Station",screenSpace:"IFP \u4E0E Station \u65E0\u6CD5\u653E\u5165\u524D\u5899\u3002\u8BF7\u9009\u62E9\u8F83\u5C11\u6216\u8F83\u5C0F\u7684\u5C4F\u5E55\uFF0C\u6216\u9690\u85CF Station\u3002",screenHeight:"\u5F53\u524D\u9AD8\u5EA6\u65E0\u6CD5\u5B89\u88C5 IFP\uFF0C\u8BF7\u8C03\u6574\u5C4F\u5E55\u5C3A\u5BF8\u3001\u4E2D\u5FC3\u9AD8\u5EA6\u6216\u623F\u95F4\u5C42\u9AD8\u3002",demoEquipment:"\u4E09\u7EF4\u6559\u5B66\u8BBE\u5907",position:"\u4E8C\u7EF4\u4F4D\u7F6E",demoPosition:"\u6F14\u793A\u5E73\u9762\u4F4D\u7F6E",demoDimensions:"\u6F14\u793A\u5C3A\u5BF8",mountHeight:"\u5B89\u88C5\u9AD8\u5EA6",installMethod:"\u5B89\u88C5\u65B9\u5F0F",assumption:"\u6F14\u793A\u5047\u8BBE",recessed:"\u5D4C\u5165\u5929\u82B1",dimensions:"\u4EA7\u54C1\u5C3A\u5BF8",focusDevice:"\u8FD1\u666F\u67E5\u770B\u8BBE\u5907",area:"\u9762\u79EF",unit:"\u7C73",du11:"DU11",channels:"\u5DF2\u5360\u7528\u901A\u9053",invalid:"\u8BF7\u8F93\u5165\u6709\u6548\u623F\u95F4\uFF1AX 2\u201340 \u7C73\u3001Y 2\u201340 \u7C73\u3001\u5C42\u9AD8 2\u20134 \u7C73\u3002",imported:"\u6765\u81EA 2D \u7684\u65B9\u6848 \xB7 \u8BF7\u5728 2D \u4FEE\u6539\u90E8\u7F72\u540E\u518D\u6B21\u70B9\u51FB\u201C\u67E5\u770B 3D\u201D\u3002\u7EDF\u8BA1\u4FDD\u7559\u5BFC\u5165\u65F6\u7684\u8986\u76D6\u8BBE\u7F6E\u3002",doorSide:"\u95E8\u7684\u4F4D\u7F6E",doorRight:"\u53F3\u4FA7\u5899",doorLeft:"\u5DE6\u4FA7\u5899",reset:"\u6062\u590D\u6F14\u793A\u9ED8\u8BA4\u503C",webgl:"\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u4F7F\u7528 WebGL\uFF0C\u8BF7\u542F\u7528\u786C\u4EF6\u52A0\u901F\u3002"}};Object.assign(Dn,{ko:Ud,mn:Fd,ja:Od,es:Bd,fr:Nd,ar:zd});function $n(n,e){let t=Fr(e);return n.type==="camera"?`CV870 \xB7 ${window.AISpeech.configurationCopy(e)[n.role]} #${n.number||1}`:n.type==="controller"?`NMP311 #${n.number||1}`:n.type==="ifp"&&n.model?`${n.model} \xB7 ${n.size}\u2033 #${n.number||1}`:n.type==="ifp"?`${t.main} \xB7 ${n.size}\u2033 ${n.id.split("-")[1]}`:n.type==="podium"?`${n.model} ${t.podium}${n.number?" #"+n.number:""}`:n.type==="station"?`${n.model||"LCS 810"} ${t.station}${n.number?" #"+n.number:""}`:n.type==="display"?`${t.display} ${Sn(e)[n.side==="left"?"left":"right"]} \xB7 ${n.size}\u2033`:Ut(n.type,e)+(n.number?` #${n.number}`:"")}var Ax={m100:"Microphone de plafond Dante",m40:"Microphone de plafond Dante",dc20:"Haut-parleur de plafond Dante",du11:"Adaptateur d\u2019interface Dante",dp44:"Processeur audio Dante \xE0 4 canaux",dp88:"Processeur audio Dante \xE0 8 canaux",showModels:"Afficher les r\xE9f\xE9rences des mod\xE8les",reference:"Configuration de r\xE9f\xE9rence. Ajustez les param\xE8tres selon les \xE9quipements r\xE9els du client.",invalidSnapshot:"Le plan est invalide. V\xE9rifiez les dimensions, les \xE9quipements et les rayons de couverture.",snapshotBounds:"Un \xE9quipement est hors de la salle. D\xE9placez-le dans la salle en 2D avant d\u2019ouvrir la 3D.",snapshotVersion:"Version de plan non prise en charge. Rouvrez-le depuis la page 2D mise \xE0 jour."},Cx={m100:"Dante \u0442\u0430\u0430\u0437\u043D\u044B \u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D",m40:"Dante \u0442\u0430\u0430\u0437\u043D\u044B \u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D",dc20:"Dante \u0442\u0430\u0430\u0437\u043D\u044B \u0447\u0430\u043D\u0433\u0430 \u044F\u0440\u0438\u0433\u0447",du11:"Dante \u0438\u043D\u0442\u0435\u0440\u0444\u044D\u0439\u0441\u0438\u0439\u043D \u0430\u0434\u0430\u043F\u0442\u0435\u0440",dp44:"4 \u0441\u0443\u0432\u0433\u0438\u0439\u043D Dante \u0430\u0443\u0434\u0438\u043E \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440",dp88:"8 \u0441\u0443\u0432\u0433\u0438\u0439\u043D Dante \u0430\u0443\u0434\u0438\u043E \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440",showModels:"\u0417\u0430\u0433\u0432\u0430\u0440\u044B\u043D \u0434\u0443\u0433\u0430\u0430\u0440\u044B\u0433 \u0445\u0430\u0440\u0443\u0443\u043B\u0430\u0445",reference:"\u0416\u0438\u0448\u0438\u0433 \u0442\u043E\u0445\u0438\u0440\u0433\u043E\u043E. \u0417\u0430\u0445\u0438\u0430\u043B\u0430\u0433\u0447\u0438\u0439\u043D \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u043D \u0431\u043E\u0434\u0438\u0442 \u04AF\u0437\u04AF\u04AF\u043B\u044D\u043B\u0442\u044D\u0434 \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u043D\u0430 \u0443\u0443.",invalidSnapshot:"\u0422\u04E9\u043B\u04E9\u0432\u043B\u04E9\u0433\u04E9\u04E9 \u0431\u0443\u0440\u0443\u0443 \u0431\u0430\u0439\u043D\u0430. \u04E8\u0440\u04E9\u04E9\u043D\u0438\u0439 \u0445\u044D\u043C\u0436\u044D\u044D, \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436, \u0445\u0430\u043C\u0440\u0430\u0445 \u0440\u0430\u0434\u0438\u0443\u0441\u044B\u0433 \u0448\u0430\u043B\u0433\u0430\u043D\u0430 \u0443\u0443.",snapshotBounds:"\u04E8\u0440\u04E9\u04E9\u043D\u0438\u0439 \u0433\u0430\u0434\u043D\u0430 \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436 \u0431\u0430\u0439\u043D\u0430. 3D \u043D\u044D\u044D\u0445\u044D\u044D\u0441 \u04E9\u043C\u043D\u04E9 2D \u0434\u044D\u044D\u0440 \u0434\u043E\u0442\u043E\u0433\u0448 \u0437\u04E9\u04E9\u043D\u04E9 \u04AF\u04AF.",snapshotVersion:"\u042D\u043D\u044D \u0445\u0443\u0432\u0438\u043B\u0431\u0430\u0440\u044B\u0433 \u0434\u044D\u043C\u0436\u0438\u0445\u0433\u04AF\u0439. \u0428\u0438\u043D\u044D\u0447\u0438\u043B\u0441\u044D\u043D 2D \u0445\u0443\u0443\u0434\u0430\u0441\u043D\u0430\u0430\u0441 \u0434\u0430\u0445\u0438\u043D \u043D\u044D\u044D\u043D\u044D \u04AF\u04AF."};function Ur(n){return n==="fr"?Ax:n==="mn"?Cx:window.AISpeech.presentationCopy(n)}function Ut(n,e){let t=n.toLowerCase();return Ur(e)[t]+(window.AISpeech.state.showModels?` (${t.toUpperCase()})`:"")}function Fr(n){return Object.fromEntries(Object.entries(Dn[n]||Dn.en).map(([e,t])=>[e,String(t).replace(/AISpeech|AI Speech|思必驰/gi,"Dante").replace(/\b(M100|M40|DC20|DU11|DP44|DP88)(?:s)?\b/g,(i,s)=>Ut(s,n))]))}var st=n=>document.querySelector(n),Cs=n=>`${Number(n).toFixed(2)} m`,kd={en:["Front","Rear"],zh:["\u524D\u533A","\u540E\u533A"],ko:["\uC55E","\uB4A4"],mn:["\u0423\u0440\u0434","\u0410\u0440\u0434"],ja:["\u524D\u65B9","\u5F8C\u65B9"],es:["Delante","Detr\xE1s"],fr:["Avant","Arri\xE8re"],ar:["\u0623\u0645\u0627\u0645","\u062E\u0644\u0641"]},el=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Or(){let n=Object.fromEntries([...document.querySelectorAll("[data-kind]")].map(e=>[e.dataset.kind,e.checked]));return n.controller=n.podium,{floorProjection:st("#floor-projection").checked,audioDrop:Number(st("#audio-drop").value),mainHeight:Number(st("#main-height").value),auxDrop:Number(st("#aux-drop").value),ifpCount:Number(st("#ifp-count").value),ifpSize:Number(st("#ifp-size").value),podiumModel:st("#podium-model").value,visible:n}}function tl(n){let e=Fr(n);gh(n),document.title=`Dante \xB7 ${e.brandSub}`;let t=Ur(n);st("#model-caption").textContent=t.showModels,st("#reference-note").textContent=t.reference,document.querySelectorAll("[data-audio-name]").forEach(i=>{i.textContent=Ut(i.dataset.audioName,n)}),st("#plan-origin").textContent=e.imported,document.querySelectorAll("[data-i18n]").forEach(i=>{i.textContent=e[i.dataset.i18n]}),st("#plan-origin").hidden||(st('[data-i18n="intro"]').textContent=e.importedIntro),document.querySelectorAll("[data-i18n-label]").forEach(i=>{let s=i.querySelector("input");i.replaceChildren(s,document.createTextNode(e[i.dataset.i18nLabel]))}),st("#language").value=n}function Jc(n,e,t,i,s,r){let o=Fr(e),a=n.heightProfile;st("#room-metric").textContent=a?.mode==="split"?`${n.length} \xD7 ${n.width} m \xB7 ${a.front.toFixed(2)} / ${a.rear.toFixed(2)} m`:`${n.length} \xD7 ${n.width} \xD7 ${n.height} m`,st("#coverage-stats").innerHTML=[[o.remote,n.coverage.mic,"remote"],[o.pa,n.coverage.pa,"pa"],[o.speaker,n.coverage.speaker,"speaker"]].map(([v,M,x])=>`<div class="stat"><div><span>${v}</span><strong>${M}%</strong></div><div class="track"><i class="fill ${x}" style="width:${M}%"></i></div></div>`).join("");let c=n.radii,[l,u]=kd[e]||kd.en,h=a?.mode==="split"?[...[[l,a.front],[u,a.rear]].flatMap(([v,M])=>{let x=window.AISpeech.m100RadiiForHeight(M,a.drop);return[[`${Ut("m100",e)} \xB7 ${v} \xB7 ${o.remote}`,a.manualPickup??x.m100Pickup],[`${Ut("m100",e)} \xB7 ${v} \xB7 ${o.pa}`,a.manualPA??x.m100PA]]})]:[[Ut("m100",e)+" \xB7 "+o.remote,c.m100Pickup],[Ut("m100",e)+" \xB7 "+o.pa,c.m100PA]];st("#radii-list").innerHTML=[...h,[Ut("m40",e)+" \xB7 "+o.remote,c.m40Pickup],[Ut("m40",e)+" \xB7 "+o.pa,c.m40PA],[Ut("dc20",e)+" \xB7 "+o.speaker,c.dc20]].map(([v,M])=>`<div><span>${v}</span><strong>${Cs(M)}</strong></div>`).join("");let d=[...s,...n.displays.map(v=>({...v,type:"display"})),...n.devices].filter(v=>r[v.type]!==!1);st("#device-list").replaceChildren(),d.forEach(v=>{let M=document.createElement("button");M.className="device-row",M.dataset.deviceId=v.id,M.innerHTML=`<span class="device-icon ${v.type}"></span><span>${el($n(v,e))}<small>${Cs(v.x)} \xB7 ${Cs(v.y)}</small></span><span class="arrow">\u2197</span>`,M.addEventListener("click",()=>i(v)),st("#device-list").appendChild(M)}),st("#demo-list").innerHTML=s.map(v=>`<div class="bom-row"><span>${el($n(v,e))}</span><strong>\xD7 1</strong></div>`).join(""),n.equipment?.qnexModel==="NDP600"&&n.equipment.qnexCount&&st("#demo-list").insertAdjacentHTML("beforeend",`<div class="bom-row"><span>NDP600 Height-Adjustable Stand</span><strong>\xD7 ${n.equipment.qnexCount}</strong></div>`);let{counts:f,du11:g,channels:_,processor:m}=n.bom,p=[[Ut("m100",e),f.m100],[Ut("m40",e),f.m40],[Ut("dc20",e),f.dc20],...[55,65,75].map(v=>[`${v}\u2033 ${o.display}`,f[v]]),[o.du11,g],[m?`${Ut(m.type,e)} \xB7 ${_}/${(m.type==="DP44"?4:8)*m.count} ${o.channels}`:"",m?.count||0]].filter(([,v])=>v>0);st("#equipment-total").textContent=`${p.length} ${Sn(e).types}`,st("#bom-list").innerHTML=p.map(([v,M])=>`<div class="bom-row"><span>${el(v)}</span><strong>\xD7 ${M}</strong></div>`).join(""),Kc(t,n,e)}function Kc(n,e,t,i=Or()){let s=Fr(t);if(!n){st("#device-detail").textContent=s.selectPrompt,st("#focus-device").hidden=!0;return}let r=n.mountHeight;r==null&&(n.type==="dc20"?r=e.height-.012:["m100","m40"].includes(n.type)?r=e.height-i.audioDrop:n.type==="ifp"?r=i.mainHeight:r=e.height-i.auxDrop);let o=n.install||(n.type==="ifp"||n.type==="station"?"wall":n.type==="podium"?"floor":n.type==="display"?"suspended":n.type==="dc20"?"recessed":"ceiling"),a=n.type==="m100"?"597 \xD7 597 \xD7 53.5 mm":n.type==="dc20"?"\xD8279 \xD7 176 mm":n.type==="ifp"?`${n.size}\u2033`:n.type==="station"?"0.72 \xD7 0.43 m":n.type==="podium"?n.model==="NDP600"?`1.60 \xD7 0.80 m \xB7 0.90 m ${Sn(t).tabletop}`:"0.77 \xD7 0.49 m":null,c=["ifp","station","podium","camera","controller"].includes(n.type);st("#device-detail").innerHTML=`<strong>${el($n(n,t))}</strong><div>${c?s.demoPosition:s.position}: (${Cs(n.x)}, ${Cs(n.y)})</div>${a?`<div>${c?s.demoDimensions:s.dimensions}: ${a}${c?` <em>${s.assumption}</em>`:""}</div>`:""}<div>${s.mountHeight}: ${Cs(r)} <em>${s.assumption}</em></div><div>${s.installMethod}: ${s[o]} <em>${s.assumption}</em></div>`,st("#focus-device").hidden=!["m100","dc20","ifp","station","podium","camera","controller"].includes(n.type),document.querySelectorAll(".device-row").forEach(l=>l.classList.toggle("selected",l.dataset.deviceId===n.id))}function In(n){let e=st("#scene-error");e.textContent=n||"",e.hidden=!n}var Hd={en:["3D coverage","Remote pickup","Local PA pickup","Speaker output","Selected device only","Animate waves","Planning envelopes. Microphone rings converge; speaker rings expand. Direction illustration, not an acoustic simulation."],zh:["\u7ACB\u4F53\u8986\u76D6","\u8FDC\u7AEF\u62FE\u97F3","\u672C\u5730\u6269\u58F0\u62FE\u97F3","\u97F3\u7BB1\u64AD\u653E","\u4EC5\u9009\u4E2D\u8BBE\u5907","\u64AD\u653E\u6CE2\u7EB9","\u89C4\u5212\u8303\u56F4\u793A\u610F\uFF1A\u9EA6\u514B\u98CE\u73AF\u7EBF\u5411\u4E0A\u6C47\u805A\uFF0C\u97F3\u7BB1\u73AF\u7EBF\u5411\u4E0B\u6269\u6563\u3002\u4EC5\u8BF4\u660E\u65B9\u5411\uFF0C\u4E0D\u4EE3\u8868\u58F0\u5B66\u4EFF\u771F\u3002"],ko:["3D \uBC94\uC704","\uC6D0\uACA9 \uC218\uC74C","\uC2E4\uB0B4 \uD655\uC131 \uC218\uC74C","\uC2A4\uD53C\uCEE4 \uCD9C\uB825","\uC120\uD0DD\uD55C \uC7A5\uCE58\uB9CC","\uD30C\uB3D9 \uC560\uB2C8\uBA54\uC774\uC158","\uACC4\uD68D\uC6A9 \uBC94\uC704\uC785\uB2C8\uB2E4. \uB9C8\uC774\uD06C\uB294 \uC218\uB834\uD558\uACE0 \uC2A4\uD53C\uCEE4\uB294 \uD655\uC0B0\uD569\uB2C8\uB2E4. \uC74C\uD5A5 \uC2DC\uBBAC\uB808\uC774\uC158\uC774 \uC544\uB2D9\uB2C8\uB2E4."],mn:["3D \u0445\u0430\u043C\u0440\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D","\u0410\u043B\u0441\u044B\u043D \u0434\u0443\u0443 \u0445\u0443\u0440\u0430\u0430\u043B\u0442","\u0414\u043E\u0442\u043E\u043E\u0434 \u04E9\u0441\u0433\u04E9\u043B\u0442\u0438\u0439\u043D \u0445\u0443\u0440\u0430\u0430\u043B\u0442","\u0427\u0430\u043D\u0433\u0430 \u044F\u0440\u0438\u0433\u0447","\u0417\u04E9\u0432\u0445\u04E9\u043D \u0441\u043E\u043D\u0433\u043E\u0441\u043E\u043D \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436","\u0414\u043E\u043B\u0433\u0438\u043E\u043D \u0445\u04E9\u0434\u04E9\u043B\u0433\u04E9\u0445","\u0422\u04E9\u043B\u04E9\u0432\u043B\u04E9\u043B\u0442\u0438\u0439\u043D \u0434\u04AF\u0440\u0441\u043B\u044D\u043B. \u041C\u0438\u043A\u0440\u043E\u0444\u043E\u043D\u044B \u0446\u0430\u0433\u0438\u0440\u0430\u0433 \u0442\u04E9\u0432\u043B\u04E9\u0440\u0447, \u0447\u0430\u043D\u0433\u0430 \u044F\u0440\u0438\u0433\u0447\u0438\u0439\u043D \u0446\u0430\u0433\u0438\u0440\u0430\u0433 \u0442\u044D\u043B\u043D\u044D. \u0410\u043A\u0443\u0441\u0442\u0438\u043A \u0441\u0438\u043C\u0443\u043B\u044F\u0446\u0438 \u0431\u0438\u0448."],ja:["\u7ACB\u4F53\u30AB\u30D0\u30FC\u7BC4\u56F2","\u9060\u9694\u96C6\u97F3","\u5BA4\u5185\u62E1\u58F0\u7528\u96C6\u97F3","\u30B9\u30D4\u30FC\u30AB\u30FC\u51FA\u529B","\u9078\u629E\u6A5F\u5668\u306E\u307F","\u6CE2\u7D0B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3","\u8A08\u753B\u7528\u306E\u6A21\u5F0F\u56F3\u3002\u30DE\u30A4\u30AF\u306F\u53CE\u675F\u3001\u30B9\u30D4\u30FC\u30AB\u30FC\u306F\u62E1\u6563\u3057\u307E\u3059\u3002\u97F3\u97FF\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002"],es:["Cobertura 3D","Captaci\xF3n remota","Captaci\xF3n para PA local","Salida de altavoz","Solo dispositivo seleccionado","Animar ondas","Envolventes de planificaci\xF3n. Los anillos del micr\xF3fono convergen; los del altavoz se expanden. No es simulaci\xF3n ac\xFAstica."],fr:["Couverture 3D","Captation distante","Captation pour sonorisation","Sortie haut-parleur","Appareil s\xE9lectionn\xE9 uniquement","Animer les ondes","Enveloppes de planification. Les anneaux du microphone convergent, ceux du haut-parleur divergent. Sans simulation acoustique."],ar:["\u062A\u063A\u0637\u064A\u0629 \u062B\u0644\u0627\u062B\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F","\u0627\u0644\u062A\u0642\u0627\u0637 \u0639\u0646 \u0628\u0639\u062F","\u0627\u0644\u062A\u0642\u0627\u0637 \u0644\u0644\u062A\u0636\u062E\u064A\u0645 \u0627\u0644\u0645\u062D\u0644\u064A","\u062E\u0631\u062C \u0645\u0643\u0628\u0631 \u0627\u0644\u0635\u0648\u062A","\u0627\u0644\u062C\u0647\u0627\u0632 \u0627\u0644\u0645\u062D\u062F\u062F \u0641\u0642\u0637","\u062A\u062D\u0631\u064A\u0643 \u0627\u0644\u0645\u0648\u062C\u0627\u062A","\u0646\u0637\u0627\u0642\u0627\u062A \u062A\u062E\u0637\u064A\u0637\u064A\u0629. \u062A\u062A\u0642\u0627\u0631\u0628 \u062D\u0644\u0642\u0627\u062A \u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646 \u0648\u062A\u062A\u0648\u0633\u0639 \u062D\u0644\u0642\u0627\u062A \u0627\u0644\u0633\u0645\u0627\u0639\u0629. \u0644\u064A\u0633\u062A \u0645\u062D\u0627\u0643\u0627\u0629 \u0635\u0648\u062A\u064A\u0629."]};function Vd(n){let e=Hd[n]||Hd.en;["title","remote-label","pa-label","speaker-label","selected-label","animation-label","note"].forEach((t,i)=>{document.getElementById(`volume-${t}`).textContent=e[i]})}function Gd(){let n=e=>document.getElementById(`volume-${e}`).checked;return{remote:n("remote"),pa:n("pa"),speaker:n("speaker"),onlySelected:n("selected"),animation:n("animation"),reducedMotion:window.matchMedia("(prefers-reduced-motion: reduce)").matches}}var Gi={CV870:{label:"CV870 Pro",projectOnly:!1,roleHfov:{teacher:43,student:94},roleMinDistance:{teacher:0,student:0},roleMaxDistance:{teacher:10,student:10}},CV210:{label:"CV210",projectOnly:!1,budgetPair:!0,roleHfov:{teacher:40,student:120},roleMinDistance:{teacher:5,student:1},roleMaxDistance:{teacher:12,student:10}},"PVC-G530P":{label:"PVC-G530P",opticalZoom:"30x",minHfov:2,maxHfov:56.5,projectOnly:!0},"PVC-G520P":{label:"PVC-G520P",opticalZoom:"20x",minHfov:2.8,maxHfov:56.5,projectOnly:!0},"PVC-G512P":{label:"PVC-G512P",opticalZoom:"12x",minHfov:7.6,maxHfov:81,projectOnly:!0}};var Wi=n=>["teacher","student"].includes(n.kind),Br=n=>n*Math.PI/180,nl=n=>2*Math.atan(Math.tan(Br(n)/2)*9/16)*180/Math.PI;function Qc(n,e,t,i={}){let s=(n.direction==="front"?Math.PI:0)+Br(i.pan||0),r=new Zt().setFromEuler(new an(Br(i.tilt||0),s,0,"YXZ")),o=n.depth===0?.27:n.depth===t.depth?-.27:0,a=new R(n.x,e+.21,n.depth+o),c=new R(0,0,n.model.startsWith("PVC")?.31:.2575).applyQuaternion(r).add(a),l=new R(0,0,1).applyQuaternion(r),u=new R(1,0,0).applyQuaternion(r),h=new R(0,1,0).applyQuaternion(r);return{origin:c,pivot:a,quaternion:r,forward:l,right:u,up:h}}function Wd(n,e,t,i,s){let r=n.getObjectByName("camera-head");r&&r.quaternion.copy(Qc(e,t,i,s).quaternion)}function Xd(n){return{model:n.model,pan:0,tilt:0,hfov:n.hfov,custom:!1}}function eh(n,e){let t=Gi[n.model];return t.projectOnly?[t.minHfov,t.maxHfov]:e.custom?[2,140]:[n.hfov,n.hfov]}function qd(n,e){let t=Xd(n),i={...t,...e,model:n.model},s=(a,c,l,u)=>Math.min(l,Math.max(c,Number.isFinite(Number(a))?Number(a):u));i.custom=!Gi[n.model].projectOnly&&!!i.custom,i.pan=s(i.pan,-90,90,0),i.tilt=s(i.tilt,-60,60,0);let[r,o]=eh(n,i);return i.hfov=s(i.hfov,r,o,t.hfov),i}var il=class{constructor(){this.enabled=!1,this.onlyCurrent=!1,this.activeId=null,this.settings=new Map}sync(e){let t=e.filter(Wi),i=new Set(t.map(s=>s.id));for(let s of this.settings.keys())i.has(s)||this.settings.delete(s);for(let s of t){let r=this.settings.get(s.id);this.settings.set(s.id,qd(s,r?.model===s.model?r:{}))}i.has(this.activeId)||(this.activeId=t[0]?.id||null)}change(e,t){let i=qd(e,{...this.settings.get(e.id),...t});return this.settings.set(e.id,i),i}reset(e){this.settings.set(e.id,Xd(e))}resetAll(){this.enabled=!1,this.onlyCurrent=!1,this.settings.clear(),this.activeId=null}};var Rx=["heading","enabled","camera","onlyCurrent","pan","tilt","hfov","custom","reset","note","tiltHint","fixedHint","zoomHint","empty","vfov","poseNote"],Yd={en:["Camera field of view","Show 3D camera field","Camera","Only current camera","Pan","Tilt","Horizontal field of view","Custom demonstration","Reset this camera","16:9 field-of-view illustration \xB7 furniture occlusion is not simulated.","Positive tilt points down; negative tilt points up.","Fixed lens: use the model default, or enable a custom demonstration.","Adjust within the model\u2019s wide / tele field-of-view range.","No camera is available.","Vertical field of view","Camera direction: adjust in the field-of-view panel."],zh:["\u6444\u50CF\u5934\u89C6\u573A","\u663E\u793A\u4E09\u7EF4\u89C6\u573A","\u6444\u50CF\u5934","\u4EC5\u5F53\u524D\u6444\u50CF\u5934","\u5DE6\u53F3\u8F6C\u5411","\u4E0A\u4E0B\u4FEF\u4EF0","\u6C34\u5E73\u89C6\u573A\u89D2","\u81EA\u5B9A\u4E49\u6F14\u793A","\u6062\u590D\u5F53\u524D\u6444\u50CF\u5934","16:9 \u89C6\u573A\u793A\u610F \xB7 \u672A\u6A21\u62DF\u684C\u6905\u7B49\u7269\u4F53\u906E\u6321\u3002","\u4FEF\u4EF0\u6B63\u503C\u5411\u4E0B\uFF0C\u8D1F\u503C\u5411\u4E0A\u3002","\u56FA\u5B9A\u955C\u5934\u91C7\u7528\u578B\u53F7\u9ED8\u8BA4\u89C6\u89D2\uFF1B\u5F00\u542F\u81EA\u5B9A\u4E49\u6F14\u793A\u53EF\u8C03\u6574\u793A\u610F\u8303\u56F4\u3002","\u5728\u8BE5\u578B\u53F7\u5E7F\u89D2\u4E0E\u957F\u7126\u89C6\u573A\u8303\u56F4\u5185\u8C03\u6574\u3002","\u5F53\u524D\u6CA1\u6709\u53EF\u7528\u6444\u50CF\u5934\u3002","\u5782\u76F4\u89C6\u573A\u89D2","\u6444\u50CF\u5934\u671D\u5411\uFF1A\u53EF\u5728\u89C6\u573A\u9762\u677F\u4E2D\u8C03\u6574\u3002"],ko:["\uCE74\uBA54\uB77C \uD654\uAC01","3D \uCE74\uBA54\uB77C \uD654\uAC01 \uD45C\uC2DC","\uCE74\uBA54\uB77C","\uD604\uC7AC \uCE74\uBA54\uB77C\uB9CC","\uC88C\uC6B0 \uD68C\uC804","\uC0C1\uD558 \uAE30\uC6B8\uAE30","\uC218\uD3C9 \uD654\uAC01","\uC0AC\uC6A9\uC790 \uC9C0\uC815 \uC2DC\uC5F0","\uD604\uC7AC \uCE74\uBA54\uB77C \uCD08\uAE30\uD654","16:9 \uD654\uAC01 \uC608\uC2DC \xB7 \uAC00\uAD6C\uC5D0 \uC758\uD55C \uAC00\uB9BC\uC740 \uACC4\uC0B0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.","\uC591\uC218\uB294 \uC544\uB798\uCABD, \uC74C\uC218\uB294 \uC704\uCABD\uC785\uB2C8\uB2E4.","\uACE0\uC815 \uB80C\uC988\uB294 \uAE30\uBCF8 \uD654\uAC01\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uC9C0\uC815 \uC2DC\uC5F0\uC5D0\uC11C \uC870\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","\uBAA8\uB378\uC758 \uAD11\uAC01 / \uB9DD\uC6D0 \uD654\uAC01 \uBC94\uC704\uC5D0\uC11C \uC870\uC815\uD569\uB2C8\uB2E4.","\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uCE74\uBA54\uB77C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.","\uC218\uC9C1 \uD654\uAC01","\uCE74\uBA54\uB77C \uBC29\uD5A5: \uD654\uAC01 \uD328\uB110\uC5D0\uC11C \uC870\uC815\uD569\uB2C8\uB2E4."],mn:["\u041A\u0430\u043C\u0435\u0440\u044B\u043D \u0445\u0430\u0440\u0430\u0445 \u04E9\u043D\u0446\u04E9\u0433","\u041A\u0430\u043C\u0435\u0440\u044B\u043D 3D \u0445\u0430\u0440\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D\u0433 \u0445\u0430\u0440\u0443\u0443\u043B\u0430\u0445","\u041A\u0430\u043C\u0435\u0440","\u0417\u04E9\u0432\u0445\u04E9\u043D \u043E\u0434\u043E\u043E\u0433\u0438\u0439\u043D \u043A\u0430\u043C\u0435\u0440","\u0425\u044D\u0432\u0442\u044D\u044D \u044D\u0440\u0433\u044D\u043B\u0442","\u0411\u043E\u0441\u043E\u043E \u043D\u0430\u043B\u0430\u043B\u0442","\u0425\u044D\u0432\u0442\u044D\u044D \u0445\u0430\u0440\u0430\u0445 \u04E9\u043D\u0446\u04E9\u0433","\u04E8\u04E9\u0440\u0447\u043B\u04E9\u043D \u04AF\u0437\u04AF\u04AF\u043B\u044D\u0445","\u042D\u043D\u044D \u043A\u0430\u043C\u0435\u0440\u044B\u0433 \u0441\u044D\u0440\u0433\u044D\u044D\u0445","16:9 \u0445\u0430\u0440\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D\u043D\u0438\u0439 \u0436\u0438\u0448\u044D\u044D \xB7 \u0442\u0430\u0432\u0438\u043B\u0433\u0430\u0430\u0441 \u04AF\u04AF\u0441\u044D\u0445 \u0445\u0430\u043B\u0445\u043B\u0430\u043B\u0442\u044B\u0433 \u0442\u043E\u043E\u0446\u043E\u043E\u0433\u04AF\u0439.","\u042D\u0435\u0440\u044D\u0433 \u0443\u0442\u0433\u0430 \u0434\u043E\u043E\u0448, \u0441\u04E9\u0440\u04E9\u0433 \u0443\u0442\u0433\u0430 \u0434\u044D\u044D\u0448 \u0447\u0438\u0433\u043B\u044D\u043D\u044D.","\u0422\u043E\u0433\u0442\u043C\u043E\u043B \u043B\u0438\u043D\u0437 \u0437\u0430\u0433\u0432\u0430\u0440\u044B\u043D \u04AF\u043D\u0434\u0441\u044D\u043D \u04E9\u043D\u0446\u0433\u0438\u0439\u0433 \u0430\u0448\u0438\u0433\u043B\u0430\u043D\u0430. \u04E8\u04E9\u0440\u0447\u043B\u04E9\u043D \u04AF\u0437\u04AF\u04AF\u043B\u044D\u0445 \u0433\u043E\u0440\u0438\u043C\u0434 \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u0436 \u0431\u043E\u043B\u043D\u043E.","\u0417\u0430\u0433\u0432\u0430\u0440\u044B\u043D \u04E9\u0440\u0433\u04E9\u043D / \u043D\u0430\u0440\u0438\u0439\u043D \u0445\u0430\u0440\u0430\u0445 \u04E9\u043D\u0446\u0433\u0438\u0439\u043D \u0445\u04AF\u0440\u044D\u044D\u043D\u0434 \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u043D\u0430.","\u041A\u0430\u043C\u0435\u0440 \u0431\u0430\u0439\u0445\u0433\u04AF\u0439 \u0431\u0430\u0439\u043D\u0430.","\u0411\u043E\u0441\u043E\u043E \u0445\u0430\u0440\u0430\u0445 \u04E9\u043D\u0446\u04E9\u0433","\u041A\u0430\u043C\u0435\u0440\u044B\u043D \u0447\u0438\u0433\u043B\u044D\u043B: \u0445\u0430\u0440\u0430\u0445 \u04E9\u043D\u0446\u0433\u0438\u0439\u043D \u0441\u0430\u043C\u0431\u0430\u0440\u0442 \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u043D\u0430."],ja:["\u30AB\u30E1\u30E9\u306E\u753B\u89D2","3D\u753B\u89D2\u3092\u8868\u793A","\u30AB\u30E1\u30E9","\u73FE\u5728\u306E\u30AB\u30E1\u30E9\u306E\u307F","\u5DE6\u53F3\u306E\u5411\u304D","\u4E0A\u4E0B\u306E\u50BE\u304D","\u6C34\u5E73\u753B\u89D2","\u30AB\u30B9\u30BF\u30E0\u30C7\u30E2","\u73FE\u5728\u306E\u30AB\u30E1\u30E9\u3092\u30EA\u30BB\u30C3\u30C8","16:9\u753B\u89D2\u306E\u6A21\u5F0F\u56F3 \xB7 \u5BB6\u5177\u306A\u3069\u306E\u906E\u853D\u306F\u8A08\u7B97\u3057\u307E\u305B\u3093\u3002","\u6B63\u306E\u5024\u306F\u4E0B\u5411\u304D\u3001\u8CA0\u306E\u5024\u306F\u4E0A\u5411\u304D\u3067\u3059\u3002","\u56FA\u5B9A\u30EC\u30F3\u30BA\u306F\u65E2\u5B9A\u306E\u753B\u89D2\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\u30AB\u30B9\u30BF\u30E0\u30C7\u30E2\u3067\u6A21\u5F0F\u7684\u306B\u5909\u66F4\u3067\u304D\u307E\u3059\u3002","\u6A5F\u7A2E\u306E\u5E83\u89D2 / \u671B\u9060\u753B\u89D2\u306E\u7BC4\u56F2\u3067\u8ABF\u6574\u3057\u307E\u3059\u3002","\u4F7F\u7528\u3067\u304D\u308B\u30AB\u30E1\u30E9\u304C\u3042\u308A\u307E\u305B\u3093\u3002","\u5782\u76F4\u753B\u89D2","\u30AB\u30E1\u30E9\u306E\u5411\u304D\uFF1A\u753B\u89D2\u30D1\u30CD\u30EB\u3067\u8ABF\u6574\u3057\u307E\u3059\u3002"],es:["Campo de visi\xF3n de la c\xE1mara","Mostrar campo de visi\xF3n 3D","C\xE1mara","Solo la c\xE1mara actual","Giro horizontal","Inclinaci\xF3n","Campo horizontal","Demostraci\xF3n personalizada","Restablecer esta c\xE1mara","Esquema 16:9 \xB7 no se simulan obstrucciones de muebles.","Un valor positivo apunta abajo; uno negativo, arriba.","La lente fija usa el \xE1ngulo del modelo; active la demostraci\xF3n personalizada para ajustarlo.","Ajuste dentro del campo angular / tele del modelo.","No hay c\xE1maras disponibles.","Campo vertical","Direcci\xF3n de c\xE1mara: ajuste en el panel de campo de visi\xF3n."],fr:["Champ de vision des cam\xE9ras","Afficher le champ de vision 3D","Cam\xE9ra","Cam\xE9ra actuelle uniquement","Rotation horizontale","Inclinaison verticale","Champ de vision horizontal","D\xE9monstration personnalis\xE9e","R\xE9initialiser cette cam\xE9ra","Champ de vision 16:9 indicatif \xB7 les obstacles comme le mobilier ne sont pas simul\xE9s.","Une valeur positive incline vers le bas ; une valeur n\xE9gative vers le haut.","La lentille fixe utilise l\u2019angle du mod\xE8le. Activez la d\xE9monstration personnalis\xE9e pour modifier la repr\xE9sentation.","R\xE9glez l\u2019angle dans la plage grand-angle / t\xE9l\xE9objectif du mod\xE8le.","Aucune cam\xE9ra disponible.","Champ de vision vertical","Orientation de la cam\xE9ra : r\xE9glable dans le panneau de champ de vision."],ar:["\u0645\u062C\u0627\u0644 \u0631\u0624\u064A\u0629 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627","\u0625\u0638\u0647\u0627\u0631 \u0645\u062C\u0627\u0644 \u0631\u0624\u064A\u0629 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \u062B\u0644\u0627\u062B\u064A \u0627\u0644\u0623\u0628\u0639\u0627\u062F","\u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627","\u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u062D\u0627\u0644\u064A\u0629 \u0641\u0642\u0637","\u0627\u0644\u062F\u0648\u0631\u0627\u0646 \u0627\u0644\u0623\u0641\u0642\u064A","\u0627\u0644\u0645\u064A\u0644 \u0627\u0644\u0631\u0623\u0633\u064A","\u0645\u062C\u0627\u0644 \u0627\u0644\u0631\u0624\u064A\u0629 \u0627\u0644\u0623\u0641\u0642\u064A","\u0639\u0631\u0636 \u062A\u0648\u0636\u064A\u062D\u064A \u0645\u062E\u0635\u0635","\u0625\u0639\u0627\u062F\u0629 \u0636\u0628\u0637 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u062D\u0627\u0644\u064A\u0629","\u062A\u0645\u062B\u064A\u0644 \u0645\u062C\u0627\u0644 \u0627\u0644\u0631\u0624\u064A\u0629 \u0628\u0646\u0633\u0628\u0629 16:9 \xB7 \u0644\u0627 \u062A\u064F\u062D\u0627\u0643\u0649 \u0627\u0644\u0639\u0648\u0627\u0626\u0642 \u0645\u062B\u0644 \u0627\u0644\u0623\u062B\u0627\u062B.","\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0648\u062C\u0628\u0629 \u0644\u0644\u0623\u0633\u0641\u0644 \u0648\u0627\u0644\u0633\u0627\u0644\u0628\u0629 \u0644\u0644\u0623\u0639\u0644\u0649.","\u062A\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0639\u062F\u0633\u0629 \u0627\u0644\u062B\u0627\u0628\u062A\u0629 \u0632\u0627\u0648\u064A\u0629 \u0627\u0644\u0637\u0631\u0627\u0632 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629\u061B \u064A\u0645\u0643\u0646 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u0645\u062B\u064A\u0644 \u0641\u064A \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u0645\u062E\u0635\u0635.","\u0627\u0636\u0628\u0637 \u0636\u0645\u0646 \u0646\u0637\u0627\u0642 \u0627\u0644\u0632\u0627\u0648\u064A\u0629 \u0627\u0644\u0648\u0627\u0633\u0639\u0629 / \u0627\u0644\u0645\u0642\u0631\u0628\u0629 \u0644\u0644\u0637\u0631\u0627\u0632.","\u0644\u0627 \u062A\u0648\u062C\u062F \u0643\u0627\u0645\u064A\u0631\u0627\u062A \u0645\u062A\u0627\u062D\u0629.","\u0645\u062C\u0627\u0644 \u0627\u0644\u0631\u0624\u064A\u0629 \u0627\u0644\u0631\u0623\u0633\u064A","\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627: \u064A\u064F\u0636\u0628\u0637 \u0645\u0646 \u0644\u0648\u062D\u0629 \u0645\u062C\u0627\u0644 \u0627\u0644\u0631\u0624\u064A\u0629."]},th=n=>Object.fromEntries(Rx.map((e,t)=>[e,(Yd[n]||Yd.en)[t]]));var Ct=n=>document.querySelector(n),sl=class{constructor({devices:e,title:t,language:i,onSelect:s,scene:r}){Object.assign(this,{devices:e,title:t,language:i,onSelect:s,scene:r}),this.state=new il,this.frame=null,Ct("#camera-field-enabled").addEventListener("change",o=>{this.state.enabled=o.target.checked,this.apply(),this.render()}),Ct("#camera-field-only").addEventListener("change",o=>{this.state.onlyCurrent=o.target.checked,this.apply()}),Ct("#camera-field-select").addEventListener("change",o=>{this.state.activeId=o.target.value,s(o.target.value)}),Ct("#camera-field-custom").addEventListener("change",o=>{let a=this.active();a&&(this.state.change(a,{custom:o.target.checked}),this.apply(),this.render())}),Ct("#camera-field-reset").addEventListener("click",()=>{let o=this.active();o&&(this.state.reset(o),this.apply(),this.render())});for(let o of["pan","tilt","hfov"])for(let a of["","-number"]){let c=Ct(`#camera-field-${o}${a}`);c.addEventListener("input",()=>this.input(o,c)),c.addEventListener("change",()=>this.renderValues())}}active(){return this.devices().find(e=>e.id===this.state.activeId)}input(e,t){let i=this.active();!i||t.value===""||!Number.isFinite(Number(t.value))||(this.state.change(i,{[e]:Number(t.value)}),this.renderValues(t),this.frame===null&&(this.frame=requestAnimationFrame(()=>{this.frame=null,this.apply()})))}apply(){this.scene()?.setCameraFrusta(this.state);let e=Ct("#camera-field-panel");e.dataset.enabled=String(this.state.enabled),e.dataset.camera=this.state.activeId||""}select(e){this.devices().find(t=>t.id===e&&Wi(t))&&(this.state.activeId=e),this.apply(),this.render()}sync(){this.state.sync(this.devices()),this.apply(),this.render()}resetAll(){this.state.resetAll(),this.state.sync(this.devices()),this.apply(),this.render()}renderValues(e){let t=this.active(),i=this.state.settings.get(t?.id);if(!i)return;let[s,r]=eh(t,i);for(let a of["pan","tilt","hfov"])for(let c of["","-number"]){let l=Ct(`#camera-field-${a}${c}`);a==="hfov"&&(l.min=s,l.max=r,l.disabled=s===r),l!==e&&(l.value=i[a])}let o=th(this.language());Ct("#camera-field-vfov").textContent=`${o.vfov}: ${nl(i.hfov).toFixed(1)}\xB0`,Ct("#camera-field-custom").checked=i.custom}render(){let e=th(this.language()),t=this.devices().filter(Wi);document.querySelectorAll("[data-field-i18n]").forEach(o=>{o.textContent=e[o.dataset.fieldI18n]}),Ct("#camera-field-enabled").checked=this.state.enabled,Ct("#camera-field-enabled").disabled=!t.length,Ct("#camera-field-only").checked=this.state.onlyCurrent;let i=Ct("#camera-field-select");i.replaceChildren(...t.map(o=>{let a=document.createElement("option");return a.value=o.id,a.textContent=this.title(o),a})),i.value=this.state.activeId;let s=this.active();if(Ct("#camera-field-empty").hidden=t.length>0,Ct("#camera-field-settings").hidden=!this.state.enabled||!s,!s)return;let r=Gi[s.model].projectOnly;Ct("#camera-field-custom-row").hidden=r,Ct("#camera-field-hint").textContent=r?e.zoomHint:e.fixedHint;for(let o of["pan","tilt","hfov"])Ct(`#camera-field-${o}-number`).setAttribute("aria-label",`${e[o]} (\xB0)`);this.renderValues()}};var pi=1e-8;function Zd(n){return n.filter((e,t)=>n.findIndex(i=>i.distanceToSquared(e)<pi*pi)===t)}function $d(n){if(n.length<3)return!1;let e=n[1].clone().sub(n[0]);return n.slice(2).some(t=>e.clone().cross(t.clone().sub(n[0])).lengthSq()>pi*pi)}function Px(n,e,t){let i=[];for(let s=0;s<n.length;s++){let r=n[s],o=n[(s+1)%n.length],a=e(r),c=e(o),l=a>=-pi,u=c>=-pi;if(l&&i.push(r),l!==u){let h=r.clone().lerp(o,a/(a-c));i.push(h),t.push(h)}}return Zd(i)}function Dx(n,e){let t=n.reduce((o,a)=>o.add(a),new R).multiplyScalar(1/n.length),s=(Math.abs(e.y)<.9?new R(0,1,0):new R(1,0,0)).cross(e).normalize(),r=e.clone().cross(s);return n.sort((o,a)=>{let c=o.clone().sub(t),l=a.clone().sub(t);return Math.atan2(c.dot(r),c.dot(s))-Math.atan2(l.dot(r),l.dot(s))})}function Ix(n,e){let t=[[new R(1,0,0),0,"wall"],[new R(-1,0,0),e.width,"wall"],[new R(0,1,0),0,"floor"],[new R(0,-1,0),e.height,"ceiling"],[new R(0,0,1),0,"wall"],[new R(0,0,-1),e.depth,"wall"]],i=n;for(let[s,r,o]of t){let a=[],c=u=>s.dot(u)+r;i=i.map(u=>({...u,points:Px(u.points,c,a)})).filter(u=>$d(u.points));let l=Zd(a);if($d(l)&&i.push({kind:o,points:Dx(l,s)}),!i.length)break}return i}function jd(n,e,t,i){let s=Qc(n,e,t,i),r=i.hfov,o=nl(r),a=Math.hypot(t.width,t.depth,t.height)*2+2,c=s.origin.clone().addScaledVector(s.forward,a),l=a*Math.tan(Br(r)/2),u=l*9/16,h=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([g,_])=>c.clone().addScaledVector(s.right,l*g).addScaledVector(s.up,u*_)),d=[{kind:"far",points:h}];for(let g=0;g<4;g++)d.push({kind:"frustum",points:[s.origin,h[g],h[(g+1)%4]]});let f=Ix(d,t);return{...s,hfov:r,vfov:o,faces:f,floor:f.find(g=>g.kind==="floor")?.points||[],centerEnd:Lx(s.origin,s.forward,t)}}function Lx(n,e,t){let i=0,s=1/0;for(let[r,o]of[["x",t.width],["y",t.height],["z",t.depth]]){if(Math.abs(e[r])<pi){if(n[r]<0||n[r]>o)return null;continue}let a=-n[r]/e[r],c=(o-n[r])/e[r];i=Math.max(i,Math.min(a,c)),s=Math.min(s,Math.max(a,c))}return s>=i&&s>pi?n.clone().addScaledVector(e,s):null}function Rs(n){n?.traverse(e=>{e.geometry?.dispose();for(let t of Array.isArray(e.material)?e.material:[e.material])t?.dispose()}),n?.parent?.remove(n)}function Jd(n,e,t){let i=[];for(let r=1;r<n.length-1;r++)for(let o of[n[0],n[r],n[r+1]])i.push(o.x,o.y,o.z);let s=new mt().setAttribute("position",new Xe(i,3));return new Le(s,new Dt({color:e,transparent:!0,opacity:t,side:ht,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1}))}function nh(n,e,t=!0){let i=new mt().setFromPoints(n),s=new yn({color:e,transparent:!0,opacity:.68,toneMapped:!1});return t?new Ri(i,s):new Ci(i,s)}function Nx(n,e){let t=new Ge,i=new Ge;t.name="camera-view-volume",i.name="camera-floor-intersection";for(let s of n.faces)t.add(Jd(s.points,e,s.kind==="frustum"?.065:.09)),t.add(nh(s.points,e));if(n.centerEnd){let s=nh([n.origin,n.centerEnd],e,!1);s.name="camera-view-center",t.add(s)}if(n.floor.length>=3){let s=n.floor.map(r=>new R(r.x,.055,r.z));i.add(Jd(s,e,.14),nh(s,e))}return{group:t,floor:i}}var rl=class{constructor(e){this.volumeRoot=new Ge,this.floorRoot=new Ge,this.entries=new Map,this.volumeRoot.name="camera-frusta",this.floorRoot.name="camera-floor-coverage",e.add(this.volumeRoot,this.floorRoot)}sync(e,t,i,s,r){let o=e.filter(Wi),a=new Set(o.map(c=>c.id));for(let[c,l]of this.entries)a.has(c)||(Rs(l.group),Rs(l.floor),this.entries.delete(c));for(let c of o){let l=s.settings.get(c.id),u=JSON.stringify([c.model,c.x,c.depth,c.direction,t[c.id],i.width,i.height,i.depth,l]),h=this.entries.get(c.id);if(h?.key!==u){h&&(Rs(h.group),Rs(h.floor));let g=jd(c,t[c.id],i,l);h={...Nx(g,c.kind==="teacher"?"#e87836":"#288fda"),key:u,geometry:g},this.volumeRoot.add(h.group),this.floorRoot.add(h.floor),this.entries.set(c.id,h)}let d=c.id===s.activeId,f=r[c.kind]!==!1;h.group.visible=s.enabled&&f&&(!s.onlyCurrent||d),h.floor.visible=f&&(!s.onlyCurrent||d),h.group.traverse(g=>{g.material&&(g.material.opacity=g.isLine?d?.9:.42:d?.095:.045)})}}setFloorVisible(e){this.floorRoot.visible=e}dispose(){Rs(this.volumeRoot),Rs(this.floorRoot),this.entries.clear()}};var Kd={en:["Recording cameras","Illustrative angles follow the LCS 3D presets; they are not verified CV870 specifications."],zh:["\u5F55\u64AD\u6444\u50CF\u5934","\u793A\u610F\u89C6\u89D2\u53C2\u8003 LCS 3D \u9884\u8BBE\uFF0C\u4E0D\u4EE3\u8868 CV870 \u7684\u5B9E\u6D4B\u53C2\u6570\u3002"],ko:["\uB179\uD654 \uCE74\uBA54\uB77C","\uD654\uAC01\uC740 LCS 3D \uC608\uC2DC \uC124\uC815\uC744 \uC0AC\uC6A9\uD558\uBA70 \uAC80\uC99D\uB41C CV870 \uC0AC\uC591\uC774 \uC544\uB2D9\uB2C8\uB2E4."],mn:["\u0411\u0438\u0447\u043B\u044D\u0433\u0438\u0439\u043D \u043A\u0430\u043C\u0435\u0440","\u04E8\u043D\u0446\u04E9\u0433 \u043D\u044C LCS 3D \u0436\u0438\u0448\u0438\u0433 \u0442\u043E\u0445\u0438\u0440\u0433\u043E\u043E \u0431\u04E9\u0433\u04E9\u04E9\u0434 CV870-\u0438\u0439\u043D \u0431\u0430\u0442\u0430\u043B\u0433\u0430\u0430\u0436\u0441\u0430\u043D \u04AF\u0437\u04AF\u04AF\u043B\u044D\u043B\u0442 \u0431\u0438\u0448."],ja:["\u9332\u753B\u30AB\u30E1\u30E9","LCS 3D \u306E\u6A21\u5F0F\u7684\u306A\u753B\u89D2\u3092\u4F7F\u7528\u3057\u3001CV870 \u306E\u5B9F\u6E2C\u4ED5\u69D8\u3092\u793A\u3059\u3082\u306E\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002"],es:["C\xE1maras de grabaci\xF3n","Los \xE1ngulos siguen los ejemplos de LCS 3D; no son especificaciones verificadas de CV870."],fr:["Cam\xE9ras de captation","Les angles suivent les exemples LCS 3D et ne constituent pas des caract\xE9ristiques CV870 v\xE9rifi\xE9es."],ar:["\u0643\u0627\u0645\u064A\u0631\u0627\u062A \u0627\u0644\u062A\u0633\u062C\u064A\u0644","\u062A\u062A\u0628\u0639 \u0627\u0644\u0632\u0648\u0627\u064A\u0627 \u0623\u0645\u062B\u0644\u0629 LCS 3D \u0648\u0644\u0627 \u062A\u0645\u062B\u0644 \u0645\u0648\u0627\u0635\u0641\u0627\u062A CV870 \u0645\u0639\u062A\u0645\u062F\u0629."]};function Ux(n){return{...n,kind:n.role,depth:n.y,direction:n.role==="teacher"?"front":"rear",hfov:Gi.CV870.roleHfov[n.role]}}var Fx=n=>({width:n.length,depth:n.width,height:n.height}),ol=class extends sl{constructor({scene:e,devices:t,plan:i,language:s,onSelect:r}){super({devices:()=>t().filter(o=>o.type==="camera").map(Ux),title:o=>$n(o,s()),language:s,onSelect:r,scene:()=>({setCameraFrusta:o=>this.syncScene(o)})}),this.roomScene=e,this.roomPlan=i}syncScene(e){let t=this.roomScene(),i=this.roomPlan();if(!t?.plan||!i)return;let s=this.devices(),r=Fx(i),o=Object.fromEntries(s.map(l=>[l.id,l.mountHeight]));this.layer||(this.layer=new rl(t.scene));let a=[-i.length/2,0,-i.width/2];this.layer.volumeRoot.position.set(...a),this.layer.floorRoot.position.set(...a),this.layer.sync(s,o,r,e,{teacher:t.cameraVisible,student:t.cameraVisible}),this.layer.setFloorVisible(e.enabled&&document.querySelector("#floor-projection").checked);for(let l of t.deviceObjects.filter(u=>u.userData.device.type==="camera")){let u=s.find(h=>h.id===l.userData.device.id);u&&Wd(l,u,o[u.id],r,e.settings.get(u.id))}let c=document.querySelector("#camera-field-panel");c.dataset.fieldCount=[...this.layer.entries.values()].filter(l=>l.group.visible).length,c.dataset.visibleCameras=t.deviceObjects.filter(l=>l.userData.device.type==="camera").length}render(){super.render();let e=Kd[this.language()]||Kd.en;document.querySelector("#recording-camera-label").textContent=e[0],document.querySelector("#camera-field-hint").textContent=e[1]}};var mi=new R,Ox=n=>n.type==="podium"?1.45:n.type==="display"?-.65:["m100","m40","dc20"].includes(n.type)?-.38:.75,al=class{constructor(e,t,i){this.canvas=e,this.layer=t,this.onSelect=i,this.buttons=new Map,this.enabled=!0,this.lang="en",this.selectedId=null}reset(e){this.models=e,this.layer.replaceChildren(),this.buttons.clear();for(let t of e){let i=t.userData.device,s=document.createElement("button");s.className="device-label",s.type="button",s.dataset.deviceId=i.id,s.textContent=$n(i,this.lang),s.addEventListener("click",()=>this.onSelect(i)),this.layer.append(s),this.buttons.set(i.id,s)}}setLanguage(e){this.lang=e;for(let[t,i]of this.buttons){let s=this.models?.find(r=>r.userData.device.id===t)?.userData.device;s&&(i.textContent=$n(s,e))}}setEnabled(e){this.enabled=e,this.layer.hidden=!e}setSelected(e){this.selectedId=e;for(let[t,i]of this.buttons)i.classList.toggle("selected",t===e)}render(e,t){if(this.models=e,!this.enabled)return;let i=this.canvas.getBoundingClientRect(),s=[...document.querySelectorAll(".scene-tools,.scene-caption")].map(o=>{let a=o.getBoundingClientRect();return{l:a.left-i.left,r:a.right-i.left,t:a.top-i.top,b:a.bottom-i.top}}),r=[...e].sort((o,a)=>+(a.userData.device.id===this.selectedId)-+(o.userData.device.id===this.selectedId));for(let o of r){let a=o.userData.device,c=this.buttons.get(a.id);if(!c)continue;if(mi.set(0,Ox(a),0),o.localToWorld(mi).project(t),mi.z<=-1||mi.z>=1||Math.abs(mi.x)>.94||Math.abs(mi.y)>.9){c.hidden=!0;continue}let l=(mi.x*.5+.5)*i.width,u=(-mi.y*.5+.5)*i.height;c.hidden=!1;let h=c.offsetWidth,d=c.offsetHeight,f;for(let[g,_]of[[0,0],[0,-27],[-55,0],[55,0],[0,27]]){let m=Math.max(h/2+4,Math.min(i.width-h/2-4,l+g)),p=Math.max(23,Math.min(i.height-25,u+_)),v={l:m-h/2,r:m+h/2,t:p-d,b:p};if(s.every(M=>v.r+4<M.l||v.l-4>M.r||v.b+4<M.t||v.t-4>M.b)){f={px:m,py:p,rect:v};break}}c.hidden=!f,f&&(c.style.left=`${f.px}px`,c.style.top=`${f.py}px`,s.push(f.rect))}}drawOnCanvas(e){if(!this.enabled)return;let t=this.canvas.getBoundingClientRect(),i=this.canvas.width/t.width,s=this.canvas.height/t.height;e.save(),e.scale(i,s),e.font="600 12px Arial",e.textAlign="center";for(let r of this.buttons.values()){if(r.hidden)continue;let o=r.getBoundingClientRect(),a=o.left-t.left,c=o.top-t.top,l=getComputedStyle(r);e.fillStyle=l.backgroundColor,e.strokeStyle=l.borderColor,e.lineWidth=1,e.beginPath(),e.roundRect(a,c,o.width,o.height,6),e.fill(),e.stroke(),e.fillStyle=l.color,e.fillText(r.textContent,a+o.width/2,c+o.height/2+4)}e.restore()}};var J=n=>document.querySelector(n),nt=ml(),we,It,Je,gi=[],rh,Nn,Ds,Zn=!1,oh=()=>{},Qt=window.AISpeech,ll=_h("dante-3d-theme","dark",n=>Je?.setTheme(n)),Qd={en:["Ceiling profile","Uniform","Front / rear","Front / uniform height","Rear height","Front zone depth","Front","Rear","73\xB0 geometric estimate \xB7 verify on site","Outside supplier example \xB7 verify on site","Manual microphone radii retained","Use 73\xB0 estimate"],zh:["\u5929\u82B1\u5C42\u9AD8","\u7EDF\u4E00\u5C42\u9AD8","\u524D\u540E\u5206\u533A","\u524D\u533A\uFF0F\u7EDF\u4E00\u5C42\u9AD8","\u540E\u533A\u5C42\u9AD8","\u524D\u533A\u6DF1\u5EA6","\u524D\u533A","\u540E\u533A","73\xB0 \u51E0\u4F55\u4F30\u7B97 \xB7 \u9700\u73B0\u573A\u9A8C\u8BC1","\u8D85\u51FA\u5382\u5BB6\u7B97\u4F8B \xB7 \u9700\u73B0\u573A\u9A8C\u8BC1","\u4FDD\u7559\u624B\u52A8\u9EA6\u514B\u98CE\u534A\u5F84","\u4F7F\u7528 73\xB0 \u4F30\u7B97"],ko:["\uCC9C\uC7A5 \uB192\uC774","\uB3D9\uC77C","\uC55E/\uB4A4","\uC55E/\uC804\uCCB4 \uB192\uC774","\uB4A4 \uB192\uC774","\uC55E \uAD6C\uC5ED \uAE4A\uC774","\uC55E","\uB4A4","73\xB0 \uAE30\uD558 \uCD94\uC815 \xB7 \uD604\uC7A5 \uD655\uC778 \uD544\uC694","\uC81C\uC870\uC0AC \uC0AC\uB840 \uBC94\uC704 \uBC16 \xB7 \uD604\uC7A5 \uD655\uC778","\uC218\uB3D9 \uBC18\uACBD \uC720\uC9C0","73\xB0 \uCD94\uC815 \uC0AC\uC6A9"],mn:["\u0422\u0430\u0430\u0437\u043D\u044B \u04E9\u043D\u0434\u04E9\u0440","\u0418\u0436\u0438\u043B","\u0423\u0440\u0434 / \u0430\u0440\u0434","\u0423\u0440\u0434 \u04E9\u043D\u0434\u04E9\u0440","\u0410\u0440\u0434 \u04E9\u043D\u0434\u04E9\u0440","\u0423\u0440\u0434 \u0431\u04AF\u0441\u0438\u0439\u043D \u0433\u04AF\u043D","\u0423\u0440\u0434","\u0410\u0440\u0434","73\xB0 \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u0439\u043D \u0442\u043E\u043E\u0446\u043E\u043E \xB7 \u0433\u0430\u0437\u0430\u0440 \u0434\u044D\u044D\u0440 \u0448\u0430\u043B\u0433\u0430\u043D\u0430","\u0416\u0438\u0448\u044D\u044D\u043D\u044D\u044D\u0441 \u0433\u0430\u0434\u0443\u0443\u0440 \xB7 \u0448\u0430\u043B\u0433\u0430\u043D\u0430","\u0413\u0430\u0440\u0430\u0430\u0440 \u043E\u0440\u0443\u0443\u043B\u0441\u0430\u043D \u0440\u0430\u0434\u0438\u0443\u0441 \u0445\u044D\u0432\u044D\u044D\u0440","73\xB0 \u0442\u043E\u043E\u0446\u043E\u043E\u0433 \u0430\u0448\u0438\u0433\u043B\u0430\u0445"],ja:["\u5929\u4E95\u9AD8","\u5747\u4E00","\u524D\uFF0F\u5F8C","\u524D\u65B9\u306E\u9AD8\u3055","\u5F8C\u65B9\u306E\u9AD8\u3055","\u524D\u65B9\u306E\u5965\u884C\u304D","\u524D\u65B9","\u5F8C\u65B9","73\xB0 \u5E7E\u4F55\u63A8\u5B9A \xB7 \u73FE\u5730\u78BA\u8A8D\u304C\u5FC5\u8981","\u30E1\u30FC\u30AB\u30FC\u4E8B\u4F8B\u5916 \xB7 \u73FE\u5730\u78BA\u8A8D\u304C\u5FC5\u8981","\u624B\u5165\u529B\u534A\u5F84\u3092\u4FDD\u6301","73\xB0 \u63A8\u5B9A\u3092\u4F7F\u7528"],es:["Perfil del techo","Uniforme","Delante / detr\xE1s","Altura delantera","Altura trasera","Profundidad delantera","Delante","Detr\xE1s","Estimaci\xF3n geom\xE9trica 73\xB0 \xB7 verificar in situ","Fuera del ejemplo \xB7 verificar in situ","Radio manual conservado","Usar estimaci\xF3n 73\xB0"],fr:["Profil du plafond","Uniforme","Avant / arri\xE8re","Hauteur avant","Hauteur arri\xE8re","Profondeur avant","Avant","Arri\xE8re","Estimation g\xE9om\xE9trique 73\xB0 \xB7 v\xE9rifier sur site","Hors exemple fournisseur \xB7 v\xE9rifier","Rayon manuel conserv\xE9","Utiliser estimation 73\xB0"],ar:["\u0627\u0631\u062A\u0641\u0627\u0639 \u0627\u0644\u0633\u0642\u0641","\u0645\u0648\u062D\u062F","\u0623\u0645\u0627\u0645 / \u062E\u0644\u0641","\u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639 \u0627\u0644\u0623\u0645\u0627\u0645\u064A","\u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639 \u0627\u0644\u062E\u0644\u0641\u064A","\u0639\u0645\u0642 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0623\u0645\u0627\u0645\u064A\u0629","\u0623\u0645\u0627\u0645","\u062E\u0644\u0641","\u062A\u0642\u062F\u064A\u0631 \u0647\u0646\u062F\u0633\u064A 73\xB0 \xB7 \u062A\u062D\u0642\u0642 \u0645\u064A\u062F\u0627\u0646\u064A","\u062E\u0627\u0631\u062C \u0645\u062B\u0627\u0644 \u0627\u0644\u0645\u0635\u0646\u0639 \xB7 \u062A\u062D\u0642\u0642","\u0627\u0644\u0645\u062F\u0649 \u0627\u0644\u064A\u062F\u0648\u064A \u0645\u062D\u0641\u0648\u0638","\u0627\u0633\u062A\u062E\u062F\u0645 \u062A\u0642\u062F\u064A\u0631 73\xB0"]};function ah(){let n=we?.heightProfile||Qt.state.heightProfile;return{mode:J("#profile-mode").value,front:Number(J("#front-height").value),rear:Number(J("#rear-height").value),split:Number(J("#split-depth").value),drop:Number(J("#audio-drop").value),manualPickup:n?.manualPickup??null,manualPA:n?.manualPA??null}}function hl(n){let e=Qd[nt]||Qd.en;J("#profile-heading").textContent=`${e[0]} \xB7 73\xB0`;for(let[r,o]of[["profile-mode-label",0],["front-height-label",3],["rear-height-label",4],["split-depth-label",5]])J(`#${r}`).textContent=e[o];J('#profile-mode option[value="uniform"]').textContent=e[1],J('#profile-mode option[value="split"]').textContent=e[2],J("#profile-mode").value=n.mode,J("#front-height").value=n.front.toFixed(2),J("#front-height-slider").value=n.front,J("#rear-height").value=n.rear.toFixed(2),J("#rear-height-slider").value=n.rear,J("#split-depth").value=n.split.toFixed(2),J("#audio-drop").value=n.drop.toFixed(2),J("#room-height").value=n.front.toFixed(2),J("#rear-height-controls").hidden=n.mode!=="split";let t=Qt.m100RadiiForHeight(n.front,n.drop).m100Pickup.toFixed(2),i=Qt.m100RadiiForHeight(n.rear,n.drop).m100Pickup.toFixed(2),s=[n.front,...n.mode==="split"?[n.rear]:[]].some(r=>r-n.drop<2.47||r-n.drop>3.2);J("#profile-estimate").textContent=`${e[6]} ${t} m${n.mode==="split"?` \xB7 ${e[7]} ${i} m`:""} \xB7 ${e[s?9:8]}${n.manualPickup!==null||n.manualPA!==null?` \xB7 ${e[10]}`:""}`,J("#profile-estimate").dataset.warning=String(s),J("#reset-m100-radii").textContent=e[11],J("#reset-m100-radii").hidden=n.manualPickup===null&&n.manualPA===null}function tf(n,e){return["uniform","split"].includes(n.mode)&&[n.front,n.rear].every(t=>Number.isFinite(t)&&t>=2&&t<=4)&&Number.isFinite(n.split)&&n.split>0&&n.split<e&&Number.isFinite(n.drop)&&n.drop>=0&&n.drop<=.7}function zr(){if(!we)return;let n=ah();if(!tf(n,we.width)){In(Dn[nt].invalid);return}n.mode==="uniform"&&(n.rear=n.front),we.heightProfile.legacy&&(n.manualPickup=we.radii.m100Pickup,n.manualPA=we.radii.m100PA);let e=Math.max(n.front,n.rear),t={...we.radii,...Qt.m100RadiiForHeight(n.front,n.drop)};n.manualPickup!==null&&(t.m100Pickup=n.manualPickup),n.manualPA!==null&&(t.m100PA=n.manualPA),we={...we,height:e,heightProfile:n,radii:t,coverage:Qt.coverageForPlan(we.length,we.width,we.devices,t,we.show,n)},hl(n),Ln()}function ih(){tl(nt),Vd(nt),oh(),ll.setLanguage(nt),Nn?.setLanguage(nt),Ds?.render(),hl(we?.heightProfile||ah()),we&&Jc(we,nt,It,kr,gi,rh?.visible||Or().visible)}function kr(n){It=Je.deviceObjects.find(e=>e.userData.device.id===n.id)?.userData.device||n,Kc(It,we,nt),Nn.setSelected(It.id),Ds?.select(It.id),cl()}function Bx(){return[Number(J("#room-length").value),Number(J("#room-width").value),Number(J("#room-height").value)]}function zx([n,e,t]){return Number.isFinite(n)&&n>=2&&n<=40&&Number.isFinite(e)&&e>=2&&e<=40&&Number.isFinite(t)&&t>=2&&t<=4}function sh(n){we&&(we=Mh(we,n),It=null,Ln())}function Ps(n=!1){if(Zn){n&&sh(Qt.audioRequest(we));return}let e=Bx();if(!zx(e)){In(Dn[nt].invalid);return}let t=ah();if(t.front=Number(J("#room-height").value),!tf(t,e[1])){In(Dn[nt].invalid);return}t.mode==="uniform"&&(t.rear=t.front),e[2]=Math.max(t.front,t.rear);let i=Or(),s=Xc({length:e[0],width:e[1],height:t.front},i);if(s.error){In(Dn[nt][s.error]);return}In("");let r=we?n?Qt.audioRequest(we):Qt.appliedAudioRequest(we):{mode:"auto"},o=n?null:we?.audioDraft;we=yh(...e,t,r),we.audioDraft=o,hl(t),It=null,gi=s.entries,rh=i,Ln(!0),Je.setView("overview"),document.documentElement.dataset.sceneReady="true"}function Ln(n=!1){if(!we)return;let e=Or(),t=n?{entries:gi}:Xc({...we,height:we.heightProfile?.front??we.height},e);if(t.error){In(Dn[nt][t.error]),Je.plan||(document.documentElement.dataset.sceneReady="error");return}In(""),gi=t.entries,rh=e,It&&![...gi,...we.displays.map(s=>({...s,type:"display"})),...we.devices].some(s=>s.id===It.id&&e.visible[s.type]!==!1)&&(It=null);let i=!Je.plan;Je.build(we,e,e.visible,gi),i&&Je.setView("overview"),J("#export").disabled=!1,document.documentElement.dataset.sceneReady="true",It&&(It=Je.deviceObjects.find(s=>s.userData.device.id===It.id)?.userData.device||null),Nn.reset(Je.deviceObjects),Nn.setSelected(It?.id??null),Jc(we,nt,It,kr,gi,e.visible),cl(),Ds?.sync(),oh()}function cl(){Je?.plan&&(Je.volumes.sync(Je.plan,Je.deviceObjects,Gd(),It?.id),J("#volume-controls").dataset.volumeCount=Je.volumes.entries.length)}function ef(n){let e=xh[n];e&&(["#room-length","#room-width","#room-height"].forEach((t,i)=>{J(t).value=e[i]}),J("#front-height").value=e[2],J("#rear-height").value=e[2],J("#profile-mode").value="uniform",J("#split-depth").value=e[1]/2,J("#audio-drop").value="0",Ps())}function kx(){oh=Qt.createAudioControls(J("#audio-count-controls"),{state:()=>we,language:()=>nt,name:n=>Ut(n,nt,Qt.state.showModels),restore:()=>sh({mode:"auto"}),clear:()=>sh({mode:"fixed",counts:{m100:0,m40:0,dc20:0}})}),document.querySelectorAll("#volume-controls input").forEach(n=>n.addEventListener("change",cl)),window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",cl),J("#preset").addEventListener("change",n=>ef(n.target.value));for(let n of["#room-length","#room-width","#room-height"])J(n).addEventListener("input",()=>{J("#preset").value="custom"});for(let[n,e]of[["#front-height-slider","#front-height"],["#rear-height-slider","#rear-height"]])J(n).addEventListener("input",()=>{J(e).value=J(n).value,e==="#front-height"&&(J("#room-height").value=J(n).value),J("#preset").value="custom",Zn?zr():Ps()});for(let n of["#front-height","#rear-height","#split-depth","#profile-mode"])J(n).addEventListener("change",()=>{n==="#front-height"&&(J("#room-height").value=J("#front-height").value),J("#preset").value="custom",Zn?zr():Ps()});J("#room-height").addEventListener("change",()=>{J("#front-height").value=J("#room-height").value,Zn?zr():Ps()}),J("#reset-m100-radii").addEventListener("click",()=>{we&&(we.heightProfile.manualPickup=null,we.heightProfile.manualPA=null,zr())}),J("#floor-projection").addEventListener("change",()=>Ln()),J("#door-side").addEventListener("change",n=>Je.setDoorSide(n.target.value)),J("#recalculate").addEventListener("click",()=>Ps(!0)),J("#reset-demo").addEventListener("click",()=>{if(!Zn){Ds?.resetAll(),J("#floor-projection").checked=!1,J("#door-side").value="right",Je.setDoorSide("right");for(let[n,e]of Object.entries({"audio-drop":"0","main-height":"1.5","aux-drop":"0.7","ifp-count":"2","ifp-size":"75","podium-model":"NDP600"}))J(`#${n}`).value=e;document.querySelectorAll("[data-kind]").forEach(n=>{n.checked=!["remote","pa","speaker"].includes(n.dataset.kind)}),J("#show-labels").checked=!0,Nn.setEnabled(!0),J("#preset").value="medium",ef("medium")}}),gl(J("#language"),nt,n=>{nt=n,ih(),!Je.plan&&we&&Ln()}),J("#show-models").addEventListener("change",n=>{Qt.state.showModels=n.target.checked,ih()}),document.querySelectorAll("[data-view]").forEach(n=>{n.addEventListener("click",()=>{Je.plan&&Je.setView(n.dataset.view)})}),J("#focus-device").addEventListener("click",()=>{It&&Je.focusDevice(It.id)}),J("#show-labels").addEventListener("change",n=>Nn.setEnabled(n.target.checked)),document.querySelectorAll("[data-kind]").forEach(n=>n.addEventListener("change",()=>Ln())),J("#audio-drop").addEventListener("change",zr);for(let n of["#main-height","#aux-drop","#ifp-count","#ifp-size","#podium-model"])J(n).addEventListener("change",()=>Ln());J("#export").addEventListener("click",()=>{let n=document.createElement("a");n.href=Je.exportPNG(Nn),n.download=`dante-${we.length}x${we.width}-3d.png`,n.click()})}function Hx(){let n;try{n=Qt.decodeSnapshot(window.location.hash)}catch(e){let t=e.code||"invalidSnapshot",i=()=>{tl(nt),In(Ur(nt)[t])};document.querySelectorAll("button,input,select,summary").forEach(s=>{["language","theme-toggle","sidebar-toggle"].includes(s.id)||(s.disabled=!0)}),J("#room-metric").textContent="",gl(J("#language"),nt,s=>{nt=s,ll.setLanguage(nt),i()}),i(),document.documentElement.dataset.sceneReady="error";return}if(Zn=!!n,n){nt=ml(n.language),Qt.state.showModels=n.showModels,we=vh(n),hl(we.heightProfile),["#room-length","#room-width","#room-height"].forEach((e,t)=>{J(e).value=[we.length,we.width,we.height][t]}),J("#preset").value="custom",document.querySelectorAll(".room-controls input,.room-controls select,.room-controls button").forEach(e=>{e.disabled=!0});for(let e of["#recalculate","#room-height","#profile-mode","#front-height","#front-height-slider","#rear-height","#rear-height-slider","#split-depth","#reset-m100-radii"])J(e).disabled=!1;for(let e of["ifp","podium","station"])J(`[data-kind="${e}"]`).checked=!!n.equipment;if(n.equipment){J("#ifp-count").replaceChildren(...Array.from({length:100},(e,t)=>new Option(String(t),String(t)))),J("#ifp-count").value=n.equipment.ifpCount,J("#ifp-size").value="86",n.equipment.qnexModel==="NMP311"&&J("#podium-model").add(new Option("NMP311","NMP311")),J("#podium-model").value=n.equipment.qnexModel;for(let e of["#ifp-count","#ifp-size","#podium-model"])J(e).disabled=!0;J('[data-kind="ifp"]').checked=n.equipment.ifpCount>0,J('[data-kind="podium"]').checked=n.equipment.qnexCount>0,J('[data-kind="station"]').checked=n.equipment.lcsEnabled}J('[data-kind="dc20"]').checked=n.show.dc20;for(let e of["remote","pa","speaker"]){let t=e==="remote"?["m100_pickup","m40_pickup"]:e==="pa"?["m100_pa","m40_pa"]:["dc20"];J(`[data-kind="${e}"]`).checked=t.some(i=>n.show[i])}}J("#reset-demo").hidden=Zn,J("#show-models").checked=Qt.state.showModels,J("#plan-origin").hidden=!Zn,J("#export").disabled=!0,tl(nt);try{Je=new Qa(J("#scene-canvas"),kr)}catch(e){In(Dn[nt].webgl),document.documentElement.dataset.sceneReady="error",console.error(e);return}Je.setTheme(ll.theme),ll.setLanguage(nt),Nn=new al(J("#scene-canvas"),J("#device-labels"),kr),Nn.setLanguage(nt),Je.onFrame=()=>Nn.render(Je.deviceObjects||[],Je.camera),Ds=new ol({scene:()=>Je,plan:()=>we,devices:()=>gi,language:()=>nt,onSelect:e=>{let t=Je.deviceObjects.find(i=>i.userData.device.id===e);t?kr(t.userData.device):Ds.select(e)}}),kx(),Zn?(ih(),Ln()):Ps()}window.addEventListener("DOMContentLoaded",Hx);ph(n=>{if(document.documentElement.dataset.sceneReady!=="true")throw new Error("Invalid or unavailable 3D plan");if(we.equipment)return J("#floor-projection").checked=!1,Ln(),fl(Je,`Dante Classroom \xB7 ${we.equipment.qnexModel} \xB7 ${we.length} \xD7 ${we.width} m`);J("#podium-model").value=n.qnexModel==="SL100"?"SL100":"NDP600",J("#ifp-count").value=n.ifpCount===1?"1":"0",J("#ifp-size").value="86",document.querySelector('[data-kind="ifp"]').checked=n.ifpCount===1;let e=document.querySelector('[data-kind="podium"]');return e&&(e.checked=n.qnexModel!=="NMP311"),Ln(),fl(Je,`Dante Classroom \xB7 ${n.qnexModel} \xB7 ${we.length} \xD7 ${we.width} m`)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
