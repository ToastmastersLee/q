(()=>{var ip=(s,e,t,n,i,r="up")=>{let a=s-t,o=e-n,l=Math.sqrt(a*a+o*o);if(l===0)return!0;let c=Math.atan2(o,a),h=i/2,u=r==="down"?h*(1+Math.sin(c)):h*(1-Math.sin(c));return l<=u},Es=(s,e,t,n=30)=>{if(!s||s.length===0||e<=0||t<=0)return{best:0,limit:0};let i=Math.round(n*(t/e));if(isNaN(i)||i<=0)return{best:0,limit:0};let r=0,a=0,o=n*i;for(let l=0;l<i;l++){let c=(l+.5)*(t/i);for(let h=0;h<n;h++){let u=(h+.5)*(e/n),p=!1,d=!1;for(let _ of s)if(!p&&ip(u,c,_.x,_.y,6,_.facing)&&(p=!0,d=!0),!d&&ip(u,c,_.x,_.y,8,_.facing)&&(d=!0),p&&d)break;p&&r++,d&&a++}}return{best:r/o*100,limit:a/o*100}};var si=(s,e,t)=>Math.max(e,Math.min(t,s)),sp={best:80,limit:95},A_=8,C_=2,pi=A_+C_,Jo=(s,e,t)=>{if(s.length===0)return s;let n=Math.min(...s.map(o=>o.y)),i=s.filter(o=>Math.abs(o.y-n)<1e-6),r=new Set(i.map(o=>o.id)),a=si(.8,.3,t-.3);return s.map(o=>{if(!r.has(o.id))return{...o,facing:"up"};let l=i.findIndex(h=>h.id===o.id),c=i.length===1?e/2:e*(.3+.4*l/(i.length-1));return{...o,x:si(c,.3,e-.3),y:a,facing:"down"}})},ap=(s,e,t)=>{if(s<=8&&e<=10)return[];let n=4.1;t==="65"&&(n=5),t==="75"&&(n=5.6);let i=e-6,r=[];if(i>0){let a=Math.ceil(i/n);for(let o=0;o<a;o++){let l=6+o*n;l<e-2&&(r.push({id:`L${o}`,x:.5,y:l}),r.push({id:`R${o}`,x:s-.5,y:l}))}}return r},ws=s=>({x:s/2,y:.35,width:86*.0254*16/Math.sqrt(337)}),ga=(s,e,t,n,i=!0)=>{let r=Math.ceil(t/n),a=[];for(let o=0;o<r;o++){let l=Math.min(n,t-a.length);for(let c=0;c<l;c++){let h=a.length,u=l===1?s/2:(c+.5)*s/l,p=si(e-.5,1.2,e-.3),d=Math.min(.8+12,p),_=r===1?.5:.32+.58*o/(r-1),g=r===1?e/2:i?o===0?.8:d+(p-d)*(o-1)/Math.max(1,r-2):si(e*_,1.2,e-.5);a.push({id:h,x:u,y:g,label:`S${h+1}`,facing:"up"})}}return Jo(a,s,e)},ur=(s,e,t)=>{let n=Es(s,e,t);return{...n,score:n.best+n.limit}},tu=(s,e,t)=>{let n=s.map(a=>({...a})),i=ur(n,e,t).score,r=[...new Set(n.map(a=>a.y))].sort((a,o)=>a-o);if(r.length<2)return n;for(let a of[.5,.1])for(let o=0;o<4;o++){let l=!1;for(let c=1;c<r.length;c++){let h=r[c],u=Math.max(r[c-1]+1.2,1.2),p=Math.min(c+1<r.length?r[c+1]-1.2:t-.3,t-.3),d=h,_=i;for(let g of[-2,-1,0,1,2]){let m=si(h+g*a,u,p);if(Math.abs(m-d)<1e-8)continue;let f=n.map(y=>Math.abs(y.y-h)<1e-8?{...y,y:m}:y),x=ur(f,e,t).score;x>_+1e-8&&(d=m,_=x)}d!==h&&(n=n.map(g=>Math.abs(g.y-h)<1e-8?{...g,y:d}:g),r[c]=d,i=_,l=!0)}if(!l)break}return n},R_=(s,e)=>{let t={best:75,limit:85},n=null,i=3*Math.PI*6**2/8,r=Math.ceil(t.best*s*e/(i*100)),a=Math.max(3,Math.min(pi,r));for(let o=a;o<=pi;o++){let l=s>=9?[2,1]:[1],c=null,h=-1/0;for(let u of l){if(u>o)continue;let d=[ga(s,e,o,u,!1),ga(s,e,o,u,!0)].map(m=>({layout:m,...ur(m,s,e)})).sort((m,f)=>f.score-m.score)[0];(!n||d.score>n.score)&&(n={layout:d.layout,score:d.score});let _=tu(d.layout,s,e),g=ur(_,s,e);(!n||g.score>n.score)&&(n={layout:_,score:g.score}),g.best>=t.best&&g.limit>=t.limit&&g.score>h&&(c=_,h=g.score)}if(c)return c}return n?n.layout:tu(ga(s,e,3,1),s,e)},P_=(s,e)=>{if(s>=13)return Jo([{id:0,x:s*.3,y:e*.5,label:"S1",facing:"up"},{id:1,x:s*.7,y:e*.5,label:"S2",facing:"up"}],s,e);let t=si(Math.min(e*.46,6),1.2,e-1.2),n=si(e-.5,t+1.2,e-.3);return Jo([{id:0,x:s/2,y:t,label:"S1",facing:"up"},{id:1,x:s/2,y:n,label:"S2",facing:"up"}],s,e)},jo=(s,e,t)=>{let n=Es(s,e,t);return n.best>=sp.best&&n.limit>=sp.limit},rp=(s,e,t)=>{if(!Number.isInteger(t)||t<0||t>pi)throw new RangeError("Invalid S210 count");return t===0?[]:(s>=9?[1,2]:[1]).filter(i=>i<=t).flatMap(i=>[!1,!0].map(r=>tu(ga(s,e,t,i,r),s,e))).sort((i,r)=>ur(r,s,e).score-ur(i,s,e).score)[0]},Ko=(s,e,t,n=null)=>{if(n!==null)return rp(s,e,n);let i=e<=6;if(i){let o=ga(s,e,1,1);if(jo(o,s,e))return o}let r=t.length===2?Jo(t.map((o,l)=>({...o,id:l,x:si(o.x,.3,s-.3),y:si(o.y,.3,e-.3),label:o.label||`S${l+1}`})),s,e):null;if(r&&jo(r,s,e))return r;let a=P_(s,e);if(jo(a,s,e))return a;if(i){let o=rp(s,e,2);if(jo(o,s,e))return o}return R_(s,e)},op=(s,e)=>{let t=Math.max(2,Math.ceil(e/9.5)),n=si(.8,.3,s/2),i=si(s-.8,s/2,s-.3),r=[];for(let a=0;a<t;a++){let o=t===1?e/2:1.5+a*(e-3)/(t-1);r.push({id:r.length,x:n,y:o}),r.push({id:r.length,x:i,y:o})}return r};var D_="2026-11-13",I_=["NDP600","NDP200","NMP311","SL100"];function lp(s,e){return s?.confirmed===!0&&typeof s.model=="string"&&s.model.trim().length>0&&typeof s.notes=="string"&&s.notes.trim().length>0&&Number.isInteger(s.capacity)&&s.capacity>=e}function L_(s,e){if(![s,e].every(r=>Number.isFinite(r)&&r>0))return null;let t=Ko(s,e,[]),n=Es(t,s,e),i=t.length<=2?{best:80,limit:95}:{best:75,limit:85};return{count:t.length,coverage:n,unmet:n.best<i.best||n.limit<i.limit}}function _a({width:s,depth:e,s210Count:t,speakerCount:n,qnexModel:i="NDP600",audioConfig:r={},minimum:a=L_(s,e)}){let o=r.useBuiltInAmp!==!1&&I_.includes(i)?Math.min(2,n):0,l=Math.max(0,n-o),c=n>0&&(n>=6||s*e>150),h=t>0&&n>0,u=c&&lp(r.amplifier,l||1),p=h&&lp(r.feedback,1),d=c?Math.max(1,Math.ceil(l/4)):0;return{policyVersion:D_,minimum:a,actualCount:t,reviewSuggested:t>0&&a?.count>=4,suggestedCount:a?Math.min(pi,a.count+2):null,engineeringReview:!!a&&(a.unmet||a.count>=pi||t>=pi),a3006Required:t>=3,overCapacity:t>pi,amplifierRequired:c,amplifierQuantity:d,amplifierProvided:u,feedbackRequired:h,feedbackProvided:p,purchaseAmplifiers:u?0:d,purchaseFeedback:h&&!p?1:0,builtInSpeakers:o,externalSpeakers:l,amplifierDeclarationInvalid:c&&r.amplifier?.confirmed===!0&&!u,feedbackDeclarationInvalid:h&&r.feedback?.confirmed===!0&&!p}}function cp(s,e={},t="en"){let n=t==="zh",i=[];s.actualCount>0&&s.minimum&&(i.push(n?`S210\uFF1A\u7B97\u6CD5\u6700\u4F4E ${s.minimum.count} \u652F\uFF1B\u5F53\u524D\u91C7\u7528 ${s.actualCount} \u652F\u3002`:`S210: calculated minimum ${s.minimum.count}; selected ${s.actualCount}.`),s.reviewSuggested&&s.suggestedCount>s.minimum.count&&i.push(n?`\u5EFA\u8BAE\u4EBA\u5DE5\u6BD4\u8F83 ${s.minimum.count} \u4E0E ${s.suggestedCount} \u652F\u65B9\u6848\uFF1B\u589E\u52A0\u6570\u91CF\u987B\u7ECF\u4E1A\u52A1\u786E\u8BA4\u3002`:`Manually compare ${s.minimum.count} versus ${s.suggestedCount} microphones; extra units require project confirmation.`),s.engineeringReview&&i.push(n?"\u5DF2\u8FBE\u5230\u5BB9\u91CF\u4E0A\u9650\u6216\u6700\u4F4E\u8986\u76D6\u672A\u8FBE\u6807\uFF0C\u8BF7\u5DE5\u7A0B\u590D\u6838\u3002":"Engineering review required: capacity limit reached or minimum coverage target unmet."),i.push(n?"\u8986\u76D6\u4E3A\u51E0\u4F55\u4F30\u7B97\uFF0C\u9700\u73B0\u573A\u6838\u5B9E\u6DF7\u54CD\u3001\u566A\u58F0\u548C\u5B89\u88C5\u6761\u4EF6\u3002":"Coverage is a geometric estimate; verify reverberation, noise and mounting on site.")),s.amplifierRequired&&(i.push(n?`\u529F\u653E\u5206\u914D\uFF1AQ-NEX \u5185\u7F6E\u529F\u653E\uFF082\xD740W\uFF09\u5E26 ${s.builtInSpeakers} \u53EA\uFF1B\u5916\u7F6E\u529F\u653E\u5E26 ${s.externalSpeakers} \u53EA PS610\u3002`:`Amplifier routing: Q-NEX built-in amplifier (2 x 40W) serves ${s.builtInSpeakers}; external amplification serves ${s.externalSpeakers} PS610 speakers.`),s.amplifierProvided||i.push(n?"EKA-415\uFF1A\u6BCF\u901A\u9053\u4E00\u53EAPS610\uFF1B\u987B\u786E\u8BA4\u9650\u5E45/\u589E\u76CA\u8C03\u8BD5\u53CAAC220V/50Hz\u7535\u6E90\u3002\u516D\u53EA\u5168\u90E8\u63A5\u4E00\u53F0\u4EC5\u4F5C\u4E3A\u5DF2\u6838\u5B9E\u8D1F\u8F7D\u4E0E\u63A5\u7EBF\u7684\u4EBA\u5DE5\u5DE5\u7A0B\u5907\u9009\u3002":"EKA-415: one PS610 per channel; confirm limiter/gain commissioning and AC220V/50Hz supply. Six speakers on one EKA-415 is a manual engineering alternative only after load and wiring verification."));for(let[r,a,o]of[["amplifier",s.amplifierProvided,s.amplifierDeclarationInvalid],["feedback",s.feedbackProvided,s.feedbackDeclarationInvalid]]){let l=r==="amplifier"?n?"\u529F\u653E":"Amplifier":n?"\u53CD\u9988\u6291\u5236\u5668":"Feedback suppressor";a&&i.push(`${n?"\u5BA2\u6237\u63D0\u4F9B":"Customer provided"} \u2014 ${l}: ${e[r].model}; ${n?"\u5BB9\u91CF":"capacity"} ${e[r].capacity}; ${e[r].notes}`),o&&i.push(n?`${l}\u7684\u5DF2\u6709\u8BBE\u5907\u786E\u8BA4\u4E0D\u5B8C\u6574\u6216\u5BB9\u91CF\u4E0D\u8DB3\uFF0C\u4ECD\u8BA1\u5165\u91C7\u8D2D\u3002`:`${l} declaration is incomplete or capacity is insufficient; purchase remains included.`)}return i}function hp(s){window.addEventListener("message",async e=>{if(window.parent===window||e.source!==window.parent||location.protocol!=="file:"&&e.origin!==location.origin||e.data?.type!=="qnex-quotation-capture"||typeof e.data.id!="string")return;let t={type:"qnex-quotation-image",id:e.data.id};try{Object.assign(t,await s(e.data))}catch(n){t.error=n.message||"3D capture failed"}e.source.postMessage(t,e.origin==="null"?"*":e.origin)})}function up(s,e){if(!s?.renderer)throw new Error("3D scene is not ready");s.setTheme("light"),s.renderer.setPixelRatio(1),s.renderer.setSize(1440,1e3,!1),s.camera.aspect=1440/1e3,s.camera.up.set(0,1,0),s.camera.updateProjectionMatrix(),s.viewTween=null,s.setView("overview",!0),s.controls.update(),s.renderer.render(s.scene,s.camera);let t=document.createElement("canvas");t.width=1440,t.height=1e3;let n=t.getContext("2d");return n.drawImage(s.canvas,0,0,1440,1e3),n.fillStyle="rgba(255,255,255,.94)",n.fillRect(16,16,1408,44),n.fillStyle="#17324d",n.font="bold 20px Arial",n.fillText(e,30,46),{data:t.toDataURL("image/png"),width:1440,height:1e3,view:"overview",upright:!0}}var nu={en:"English",zh:"\u7B80\u4F53\u4E2D\u6587",ko:"\uD55C\uAD6D\uC5B4",mn:"\u041C\u043E\u043D\u0433\u043E\u043B",ja:"\u65E5\u672C\u8A9E",es:"Espa\xF1ol",fr:"Fran\xE7ais",ar:"\u0627\u0644\u0639\u0631\u0628\u064A\u0629"},N_=["light","dark","theme","showSidebar","hideSidebar","language","left","right","types","tabletop","scene","views","devices"],dp={en:["Light","Dark","Switch light / dark theme","Show sidebar","Hide sidebar","Language","Left","Right","types","tabletop","Interactive 3D room","Camera views","Device names"],zh:["\u660E\u4EAE","\u6DF1\u8272","\u5207\u6362\u660E\u4EAE\uFF0F\u6DF1\u8272\u4E3B\u9898","\u5C55\u5F00\u4FA7\u680F","\u6536\u8D77\u4FA7\u680F","\u8BED\u8A00","\u5DE6","\u53F3","\u7C7B","\u684C\u9762","\u4EA4\u4E92\u5F0F\u4E09\u7EF4\u6559\u5BA4","\u89C2\u5BDF\u89C6\u89D2","\u8BBE\u5907\u540D\u79F0"],ko:["\uBC1D\uAC8C","\uC5B4\uB461\uAC8C","\uBC1D\uC740/\uC5B4\uB450\uC6B4 \uD14C\uB9C8 \uC804\uD658","\uC0AC\uC774\uB4DC\uBC14 \uD45C\uC2DC","\uC0AC\uC774\uB4DC\uBC14 \uC228\uAE30\uAE30","\uC5B8\uC5B4","\uC67C\uCABD","\uC624\uB978\uCABD","\uC720\uD615","\uCC45\uC0C1 \uC0C1\uD310","\uC778\uD130\uB799\uD2F0\uBE0C 3D \uAD50\uC2E4","\uCE74\uBA54\uB77C \uC2DC\uC810","\uC7A5\uBE44 \uC774\uB984"],mn:["\u0426\u0430\u0439\u0432\u0430\u0440","\u0411\u0430\u0440\u0430\u0430\u043D","\u0426\u0430\u0439\u0432\u0430\u0440 / \u0431\u0430\u0440\u0430\u0430\u043D \u04E9\u043D\u0433\u04E9 \u0441\u043E\u043B\u0438\u0445","\u0425\u0430\u0436\u0443\u0443\u0433\u0438\u0439\u043D \u0441\u0430\u043C\u0431\u0430\u0440\u044B\u0433 \u0445\u0430\u0440\u0443\u0443\u043B\u0430\u0445","\u0425\u0430\u0436\u0443\u0443\u0433\u0438\u0439\u043D \u0441\u0430\u043C\u0431\u0430\u0440\u044B\u0433 \u043D\u0443\u0443\u0445","\u0425\u044D\u043B","\u0417\u04AF\u04AF\u043D","\u0411\u0430\u0440\u0443\u0443\u043D","\u0442\u04E9\u0440\u04E9\u043B","\u0448\u0438\u0440\u044D\u044D\u043D\u0438\u0439 \u0442\u0430\u0432\u0446\u0430\u043D","\u0418\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432 3D \u04E9\u0440\u04E9\u04E9","\u041A\u0430\u043C\u0435\u0440\u044B\u043D \u0445\u0430\u0440\u0430\u0433\u0434\u0430\u0446","\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u043D \u043D\u044D\u0440"],ja:["\u30E9\u30A4\u30C8","\u30C0\u30FC\u30AF","\u30E9\u30A4\u30C8\uFF0F\u30C0\u30FC\u30AF\u5207\u66FF","\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u8868\u793A","\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u96A0\u3059","\u8A00\u8A9E","\u5DE6","\u53F3","\u7A2E\u985E","\u5929\u677F","\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D63D\u6559\u5BA4","\u8996\u70B9","\u6A5F\u5668\u540D"],es:["Claro","Oscuro","Cambiar tema claro / oscuro","Mostrar panel","Ocultar panel","Idioma","Izquierda","Derecha","tipos","superficie","Aula 3D interactiva","Vistas de c\xE1mara","Nombres de equipos"],fr:["Clair","Sombre","Changer de th\xE8me clair / sombre","Afficher le panneau","Masquer le panneau","Langue","Gauche","Droite","types","plateau","Salle 3D interactive","Points de vue","Noms des \xE9quipements"],ar:["\u0641\u0627\u062A\u062D","\u062F\u0627\u0643\u0646","\u062A\u0628\u062F\u064A\u0644 \u0627\u0644\u0645\u0638\u0647\u0631 \u0627\u0644\u0641\u0627\u062A\u062D \u0648\u0627\u0644\u062F\u0627\u0643\u0646","\u0625\u0638\u0647\u0627\u0631 \u0627\u0644\u0644\u0648\u062D\u0629","\u0625\u062E\u0641\u0627\u0621 \u0627\u0644\u0644\u0648\u062D\u0629","\u0627\u0644\u0644\u063A\u0629","\u064A\u0633\u0627\u0631","\u064A\u0645\u064A\u0646","\u0623\u0646\u0648\u0627\u0639","\u0633\u0637\u062D \u0627\u0644\u0637\u0627\u0648\u0644\u0629","\u063A\u0631\u0641\u0629 \u062A\u0641\u0627\u0639\u0644\u064A\u0629 \u062B\u0644\u0627\u062B\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F","\u0632\u0648\u0627\u064A\u0627 \u0627\u0644\u0639\u0631\u0636","\u0623\u0633\u0645\u0627\u0621 \u0627\u0644\u0623\u062C\u0647\u0632\u0629"]},xa=s=>Object.fromEntries(N_.map((e,t)=>[e,(dp[s]||dp.en)[t]]));function fp(s){let e=new URLSearchParams(location.search).get("lang");return Object.hasOwn(nu,e)?e:Object.hasOwn(nu,s)?s:"en"}function U_(s){try{localStorage.setItem("qnex_arch_lang_v2",s)}catch{}}function iu(s){document.documentElement.lang=s==="zh"?"zh-CN":s,document.documentElement.dir=s==="ar"?"rtl":"ltr";let e=xa(s);for(let[t,n]of[[".scene-panel","scene"],["#scene-canvas","scene"],["[role=group]","views"],["#device-labels","devices"]])document.querySelector(t)?.setAttribute("aria-label",e[n])}function pp(s,e,t){s.replaceChildren(...Object.entries(nu).map(([n,i])=>{let r=document.createElement("option");return r.value=n,r.textContent=i,r})),s.value=e,s.setAttribute("aria-label",xa(e).language),s.addEventListener("change",()=>{U_(s.value);try{let n=new URL(location.href);n.searchParams.set("lang",s.value),history.replaceState(null,"",n)}catch{}t(s.value),s.setAttribute("aria-label",xa(s.value).language)})}var dr={light:{background:"#eaf0f5",floor:"#e3e5df",platform:"#d1ae89",front:"#e3ebf0",glass:"#9fc5d1",base:"#d5e2e8",trim:"#829eaa",door:"#637e8b",doorPanel:"#a6c5cf",window:"#9fbfcc",handle:"#456578",grid:"#bdc8c8",gridCenter:"#9aafb9",sky:"#f8fdff",ground:"#b6cad1",exposure:1.35},dark:{background:"#0c1729",floor:"#172940",platform:"#385873",front:"#102239",glass:"#27415a",base:"#20354b",trim:"#3d6984",door:"#385873",doorPanel:"#345367",window:"#4a6b80",handle:"#83aabd",grid:"#30475d",gridCenter:"#45647a",sky:"#c9e8ff",ground:"#26374c",exposure:1}};function mp(s,e,t){let n=e;try{let u=localStorage.getItem(s);Object.hasOwn(dr,u)&&(n=u)}catch{}let i=!1,r="en",a=document.querySelector("#theme-toggle"),o=document.querySelector("#sidebar-toggle"),l=document.querySelector(".sidebar");function c(){let u=xa(r);a.textContent=n==="dark"?u.light:u.dark,a.title=a.ariaLabel=u.theme,a.setAttribute("aria-pressed",String(n==="dark")),o.textContent=i?u.showSidebar:u.hideSidebar,o.setAttribute("aria-expanded",String(!i)),o.setAttribute("aria-controls",l.id)}function h(){document.documentElement.dataset.theme=n,document.querySelector('meta[name="theme-color"]')?.setAttribute("content",dr[n].background),t(n),c()}return a.addEventListener("click",()=>{n=n==="dark"?"light":"dark";try{localStorage.setItem(s,n)}catch{}h()}),o.addEventListener("click",()=>{i=!i,l.hidden=i,document.documentElement.classList.toggle("sidebar-collapsed",i),c()}),h(),{setLanguage(u){r=u,c()},get theme(){return n}}}var gp={en:["Scene settings","Setup","Devices","Coverage","Display","Acoustic coverage","Adjust field of view"],zh:["\u573A\u666F\u8BBE\u7F6E","\u914D\u7F6E","\u8BBE\u5907","\u8986\u76D6","\u663E\u793A","\u58F0\u5B66\u8986\u76D6","\u8C03\u6574\u89C6\u573A"],ko:["\uC7A5\uBA74 \uC124\uC815","\uC124\uC815","\uC7A5\uBE44","\uCEE4\uBC84\uB9AC\uC9C0","\uD45C\uC2DC","\uC74C\uD5A5 \uCEE4\uBC84\uB9AC\uC9C0","\uC2DC\uC57C\uAC01 \uC870\uC815"],mn:["\u041E\u0440\u0447\u043D\u044B \u0442\u043E\u0445\u0438\u0440\u0433\u043E\u043E","\u0422\u043E\u0445\u0438\u0440\u0433\u043E\u043E","\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436","\u0425\u0430\u043C\u0440\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D","\u0414\u044D\u043B\u0433\u044D\u0446","\u0414\u0443\u0443\u043D\u044B \u0445\u0430\u043C\u0440\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D","\u0425\u0430\u0440\u0430\u0445 \u04E9\u043D\u0446\u04E9\u0433 \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u0430\u0445"],ja:["\u30B7\u30FC\u30F3\u8A2D\u5B9A","\u69CB\u6210","\u6A5F\u5668","\u30AB\u30D0\u30FC\u7BC4\u56F2","\u8868\u793A","\u97F3\u97FF\u30AB\u30D0\u30FC\u7BC4\u56F2","\u753B\u89D2\u3092\u8ABF\u6574"],es:["Ajustes de escena","Configurar","Equipos","Cobertura","Mostrar","Cobertura ac\xFAstica","Ajustar campo de visi\xF3n"],fr:["R\xE9glages de la sc\xE8ne","Configurer","\xC9quipements","Couverture","Affichage","Couverture acoustique","R\xE9gler le champ de vision"],ar:["\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0634\u0647\u062F","\u0627\u0644\u0625\u0639\u062F\u0627\u062F","\u0627\u0644\u0623\u062C\u0647\u0632\u0629","\u0627\u0644\u062A\u063A\u0637\u064A\u0629","\u0627\u0644\u0639\u0631\u0636","\u0627\u0644\u062A\u063A\u0637\u064A\u0629 \u0627\u0644\u0635\u0648\u062A\u064A\u0629","\u0636\u0628\u0637 \u0645\u062C\u0627\u0644 \u0627\u0644\u0631\u0624\u064A\u0629"]};function su(s,e){let t=[...s.querySelectorAll('[role="tab"]')],n=t.map(l=>document.getElementById(l.getAttribute("aria-controls"))),i=new Map,r=matchMedia(`(max-width: ${e}px)`),a=0;function o(l,c=!1){if(l===a)return;let h=n[a],u=s.offsetHeight-h.getBoundingClientRect().top,p=!r.matches;p?i.set(h,h.scrollTop):c&&i.set(h,Math.max(0,u)),h.hidden=!0,t[a].ariaSelected="false",t[a].tabIndex=-1,a=l;let d=n[a];d.hidden=!1,t[a].ariaSelected="true",t[a].tabIndex=0;let _=i.get(d)||0;p?d.scrollTop=_:c&&(u>=0||_>0)&&window.scrollBy(0,d.getBoundingClientRect().top-s.offsetHeight+_)}return t.forEach((l,c)=>{l.addEventListener("click",()=>o(c,!0)),l.addEventListener("keydown",h=>{let u=getComputedStyle(s).direction==="rtl"?-1:1,p={Home:0,End:t.length-1,ArrowLeft:c-u,ArrowRight:c+u};if(!Object.hasOwn(p,h.key))return;h.preventDefault();let d=(p[h.key]+t.length)%t.length;o(d,!0),t[d].focus({preventScroll:!0})})}),{activate:o,get active(){return a}}}function _p(s,e){let t=s.querySelector('[role="tablist"]'),n=su(t,e);return s.querySelector("#adjust-camera-field").addEventListener("click",()=>{n.activate(2);let i=s.querySelector("#camera-field-panel"),r=i.closest("details");r&&(r.open=!0);let a=i.querySelector("#camera-field-enabled");a.checked||a.click();let o=i.querySelector("#camera-field-select");o.focus({preventScroll:!0}),o.scrollIntoView({block:"nearest"})}),{showCoverage(){n.activate(2)},showDevice(){n.active!==2&&(n.activate(1),matchMedia(`(max-width: ${e}px)`).matches||(s.querySelector("#sidebar-devices").scrollTop=0))},setLanguage(i){let[r,a,o,l,c,h,u]=gp[i]||gp.en,p={config:a,devices:o,coverage:l,display:c,acoustic:h,adjustCamera:u};t.setAttribute("aria-label",r),s.querySelectorAll("[data-sidebar-copy]").forEach(d=>{d.textContent=p[d.dataset.sidebarCopy]})}}}var is={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Kp=0,Wu=1,Qp=2;var qu=1,ec=2,gi=3,Pi=0,Yt=1,nn=2,Ut=0,Ds=1,Xu=2,Yu=3,$u=4,tc=5,Un=100,em=101,tm=102,nm=103,im=104,Vs=200,sm=201,rm=202,am=203,El=204,wl=205,uo=206,om=207,fo=208,lm=209,cm=210,hm=211,um=212,dm=213,fm=214,nc=0,ic=1,sc=2,Is=3,rc=4,ac=5,oc=6,lc=7,cc=0,pm=1,mm=2,Ui=0,hc=1,uc=2,dc=3,Vr=4,fc=5,pc=6,mc=7;var Zu=300,Hs=301,Gs=302,gc=303,_c=304,po=306,$n=1e3,Ki=1001,Tl=1002,Xt=1003,gm=1004;var mo=1005;var ci=1006,xc=1007;var rs=1008;var zn=1009,ju=1010,Ju=1011,Hr=1012,vc=1013,as=1014,ui=1015,di=1016,yc=1017,Sc=1018,os=1020,Ku=35902,Qu=35899,ed=1021,td=1022,Mn=1023,Rr=1026,ls=1027,Mc=1028,bc=1029,nd=1030,Ec=1031;var wc=1033,go=33776,_o=33777,xo=33778,vo=33779,Tc=35840,Ac=35841,Cc=35842,Rc=35843,Pc=36196,Dc=37492,Ic=37496,Lc=37808,Nc=37809,Uc=37810,Fc=37811,Oc=37812,Bc=37813,zc=37814,kc=37815,Vc=37816,Hc=37817,Gc=37818,Wc=37819,qc=37820,Xc=37821,Yc=36492,$c=36494,Zc=36495,jc=36283,Jc=36284,Kc=36285,Qc=36286;var Ia=2300,Al=2301,bl=2302,Iu=2400,Lu=2401,Nu=2402;var _m=3200,xm=3201;var yo=0,vm=1,Fi="",Pt="srgb",Ls="srgb-linear",La="linear",nt="srgb";var Ps=7680;var Uu=519,ym=512,Sm=513,Mm=514,id=515,bm=516,Em=517,wm=518,Tm=519,Fu=35044;var sd="300 es",li=2e3,Na=2001;var mi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xp=1234567,Ca=Math.PI/180,Pr=180/Math.PI;function Ws(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[s&255]+Qt[s>>8&255]+Qt[s>>16&255]+Qt[s>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function qe(s,e,t){return Math.max(e,Math.min(t,s))}function rd(s,e){return(s%e+e)%e}function F_(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function O_(s,e,t){return s!==e?(t-s)/(e-s):0}function Ra(s,e,t){return(1-t)*s+t*e}function B_(s,e,t,n){return Ra(s,e,1-Math.exp(-t*n))}function z_(s,e=1){return e-Math.abs(rd(s,e*2)-e)}function k_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function V_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function H_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function G_(s,e){return s+Math.random()*(e-s)}function W_(s){return s*(.5-Math.random())}function q_(s){s!==void 0&&(xp=s);let e=xp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function X_(s){return s*Ca}function Y_(s){return s*Pr}function $_(s){return(s&s-1)===0&&s!==0}function Z_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function j_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function J_(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),p=a((e-n)/2),d=r((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*p,o*c);break;case"YZY":s.set(l*p,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*p,o*h,o*c);break;case"XZX":s.set(o*h,l*_,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*_,o*c);break;case"ZYZ":s.set(l*_,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Tr(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function hn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Gr={DEG2RAD:Ca,RAD2DEG:Pr,generateUUID:Ws,clamp:qe,euclideanModulo:rd,mapLinear:F_,inverseLerp:O_,lerp:Ra,damp:B_,pingpong:z_,smoothstep:k_,smootherstep:V_,randInt:H_,randFloat:G_,randFloatSpread:W_,seededRandom:q_,degToRad:X_,radToDeg:Y_,isPowerOfTwo:$_,ceilPowerOfTwo:Z_,floorPowerOfTwo:j_,setQuaternionFromProperEuler:J_,normalize:hn,denormalize:Tr},ce=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},vn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],p=r[a+0],d=r[a+1],_=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=p,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(u!==g||l!==p||c!==d||h!==_){let m=1-o,f=l*p+c*d+h*_+u*g,x=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let S=Math.sqrt(y),b=Math.atan2(S,f*x);m=Math.sin(m*b)/S,o=Math.sin(o*b)/S}let v=o*x;if(l=l*m+p*v,c=c*m+d*v,h=h*m+_*v,u=u*m+g*v,m===1-o){let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],p=r[a+1],d=r[a+2],_=r[a+3];return e[t]=o*_+h*u+l*d-c*p,e[t+1]=l*_+h*p+c*u-o*d,e[t+2]=c*_+h*d+o*p-l*u,e[t+3]=h*_-o*u-l*p-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),p=l(n/2),d=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=p*h*u+c*d*_,this._y=c*d*u-p*h*_,this._z=c*h*_+p*d*u,this._w=c*h*u-p*d*_;break;case"YXZ":this._x=p*h*u+c*d*_,this._y=c*d*u-p*h*_,this._z=c*h*_-p*d*u,this._w=c*h*u+p*d*_;break;case"ZXY":this._x=p*h*u-c*d*_,this._y=c*d*u+p*h*_,this._z=c*h*_+p*d*u,this._w=c*h*u-p*d*_;break;case"ZYX":this._x=p*h*u-c*d*_,this._y=c*d*u+p*h*_,this._z=c*h*_-p*d*u,this._w=c*h*u+p*d*_;break;case"YZX":this._x=p*h*u+c*d*_,this._y=c*d*u+p*h*_,this._z=c*h*_-p*d*u,this._w=c*h*u-p*d*_;break;case"XZY":this._x=p*h*u-c*d*_,this._y=c*d*u-p*h*_,this._z=c*h*_+p*d*u,this._w=c*h*u+p*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],p=n+o+u;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=a*u+this._w*p,this._x=n*u+this._x*p,this._y=i*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ru.copy(this).projectOnVector(e),this.sub(ru)}reflect(e){return this.sub(ru.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ru=new P,vp=new vn,We=class s{constructor(e,t,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],p=n[2],d=n[5],_=n[8],g=i[0],m=i[3],f=i[6],x=i[1],y=i[4],v=i[7],S=i[2],b=i[5],T=i[8];return r[0]=a*g+o*x+l*S,r[3]=a*m+o*y+l*b,r[6]=a*f+o*v+l*T,r[1]=c*g+h*x+u*S,r[4]=c*m+h*y+u*b,r[7]=c*f+h*v+u*T,r[2]=p*g+d*x+_*S,r[5]=p*m+d*y+_*b,r[8]=p*f+d*v+_*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,p=o*l-h*r,d=c*r-a*l,_=t*u+n*p+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return e[0]=u*g,e[1]=(i*c-h*n)*g,e[2]=(o*n-i*a)*g,e[3]=p*g,e[4]=(h*t-i*l)*g,e[5]=(i*r-o*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(au.makeScale(e,t)),this}rotate(e){return this.premultiply(au.makeRotation(-e)),this}translate(e,t){return this.premultiply(au.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},au=new We;function ad(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ua(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Am(){let s=Ua("canvas");return s.style.display="block",s}var yp={};function Dr(s){s in yp||(yp[s]=!0,console.warn(s))}function Cm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Sp=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mp=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function K_(){let s={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===nt&&(i.r=Ri(i.r),i.g=Ri(i.g),i.b=Ri(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(i.r=Ar(i.r),i.g=Ar(i.g),i.b=Ar(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Fi?La:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Dr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Dr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ls]:{primaries:e,whitePoint:n,transfer:La,toXYZ:Sp,fromXYZ:Mp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:Sp,fromXYZ:Mp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),s}var Je=K_();function Ri(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ar(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var fr,Cl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fr===void 0&&(fr=Ua("canvas")),fr.width=e.width,fr.height=e.height;let i=fr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=fr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ua("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ri(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ri(t[n]/255)*255):t[n]=Ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Q_=0,Ir=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=Ws(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ou(i[a].image)):r.push(ou(i[a]))}else r=ou(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function ou(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Cl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ex=0,lu=new P,un=class s extends mi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Ki,i=Ki,r=ci,a=rs,o=Mn,l=zn,c=s.DEFAULT_ANISOTROPY,h=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=Ws(),this.name="",this.source=new Ir(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(lu).x}get height(){return this.source.getSize(lu).y}get depth(){return this.source.getSize(lu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $n:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case Tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $n:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case Tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Zu;un.DEFAULT_ANISOTROPY=1;var at=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],p=l[1],d=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,v=(d+1)/2,S=(f+1)/2,b=(h+p)/4,T=(u+g)/4,C=(_+m)/4;return y>v&&y>S?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=b/n,r=T/n):v>S?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=b/i,r=C/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=T/r,i=C/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(p-h)*(p-h));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(u-g)/x,this.z=(p-h)/x,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rl=class extends mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new un(i);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:ci,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ir(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},dn=class extends Rl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Fa=class extends un{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pl=class extends un{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ri):ri.fromBufferAttribute(r,a),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qo.copy(n.boundingBox)),Qo.applyMatrix4(e.matrixWorld),this.union(Qo)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),el.subVectors(this.max,va),pr.subVectors(e.a,va),mr.subVectors(e.b,va),gr.subVectors(e.c,va),qi.subVectors(mr,pr),Xi.subVectors(gr,mr),Ts.subVectors(pr,gr);let t=[0,-qi.z,qi.y,0,-Xi.z,Xi.y,0,-Ts.z,Ts.y,qi.z,0,-qi.x,Xi.z,0,-Xi.x,Ts.z,0,-Ts.x,-qi.y,qi.x,0,-Xi.y,Xi.x,0,-Ts.y,Ts.x,0];return!cu(t,pr,mr,gr,el)||(t=[1,0,0,0,1,0,0,0,1],!cu(t,pr,mr,gr,el))?!1:(tl.crossVectors(qi,Xi),t=[tl.x,tl.y,tl.z],cu(t,pr,mr,gr,el))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ei=[new P,new P,new P,new P,new P,new P,new P,new P],ri=new P,Qo=new fn,pr=new P,mr=new P,gr=new P,qi=new P,Xi=new P,Ts=new P,va=new P,el=new P,tl=new P,As=new P;function cu(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){As.fromArray(s,r);let o=i.x*Math.abs(As.x)+i.y*Math.abs(As.y)+i.z*Math.abs(As.z),l=e.dot(As),c=t.dot(As),h=n.dot(As);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var tx=new fn,ya=new P,hu=new P,Di=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):tx.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ya.subVectors(e,this.center);let t=ya.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ya,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ya.copy(e.center).add(hu)),this.expandByPoint(ya.copy(e.center).sub(hu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wi=new P,uu=new P,nl=new P,Yi=new P,du=new P,il=new P,fu=new P,Qi=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){uu.copy(e).add(t).multiplyScalar(.5),nl.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(uu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(nl),o=Yi.dot(this.direction),l=-Yi.dot(nl),c=Yi.lengthSq(),h=Math.abs(1-a*a),u,p,d,_;if(h>0)if(u=a*l-o,p=a*o-l,_=r*h,u>=0)if(p>=-_)if(p<=_){let g=1/h;u*=g,p*=g,d=u*(u+a*p+2*o)+p*(a*u+p+2*l)+c}else p=r,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*l)+c;else p<=-_?(u=Math.max(0,-(-a*r+o)),p=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+p*(p+2*l)+c):p<=_?(u=0,p=Math.min(Math.max(-r,-l),r),d=p*(p+2*l)+c):(u=Math.max(0,-(a*r+o)),p=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+p*(p+2*l)+c);else p=a>0?-r:r,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(uu).addScaledVector(nl,p),d}intersectSphere(e,t){wi.subVectors(e.center,this.origin);let n=wi.dot(this.direction),i=wi.dot(wi)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,i=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,i=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(o=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,n,i,r){du.subVectors(t,e),il.subVectors(n,e),fu.crossVectors(du,il);let a=this.direction.dot(fu),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yi.subVectors(this.origin,e);let l=o*this.direction.dot(il.crossVectors(Yi,il));if(l<0)return null;let c=o*this.direction.dot(du.cross(Yi));if(c<0||l+c>a)return null;let h=-o*Yi.dot(fu);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ze=class s{constructor(e,t,n,i,r,a,o,l,c,h,u,p,d,_,g,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,p,d,_,g,m)}set(e,t,n,i,r,a,o,l,c,h,u,p,d,_,g,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=p,f[3]=d,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/_r.setFromMatrixColumn(e,0).length(),r=1/_r.setFromMatrixColumn(e,1).length(),a=1/_r.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let p=a*h,d=a*u,_=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+_*c,t[5]=p-g*c,t[9]=-o*l,t[2]=g-p*c,t[6]=_+d*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*h,d=l*u,_=c*h,g=c*u;t[0]=p+g*o,t[4]=_*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-_,t[6]=g+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*h,d=l*u,_=c*h,g=c*u;t[0]=p-g*o,t[4]=-a*u,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*h,t[9]=g-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*h,d=a*u,_=o*h,g=o*u;t[0]=l*h,t[4]=_*c-d,t[8]=p*c+g,t[1]=l*u,t[5]=g*c+p,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,d=a*c,_=o*l,g=o*c;t[0]=l*h,t[4]=g-p*u,t[8]=_*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+_,t[10]=p-g*u}else if(e.order==="XZY"){let p=a*l,d=a*c,_=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=p*u+g,t[5]=a*h,t[9]=d*u-_,t[2]=_*u-d,t[6]=o*h,t[10]=g*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nx,e,ix)}lookAt(e,t,n){let i=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),$i.crossVectors(n,Ln),$i.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),$i.crossVectors(n,Ln)),$i.normalize(),sl.crossVectors(Ln,$i),i[0]=$i.x,i[4]=sl.x,i[8]=Ln.x,i[1]=$i.y,i[5]=sl.y,i[9]=Ln.y,i[2]=$i.z,i[6]=sl.z,i[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],p=n[9],d=n[13],_=n[2],g=n[6],m=n[10],f=n[14],x=n[3],y=n[7],v=n[11],S=n[15],b=i[0],T=i[4],C=i[8],M=i[12],E=i[1],D=i[5],L=i[9],U=i[13],B=i[2],k=i[6],z=i[10],$=i[14],H=i[3],ee=i[7],se=i[11],de=i[15];return r[0]=a*b+o*E+l*B+c*H,r[4]=a*T+o*D+l*k+c*ee,r[8]=a*C+o*L+l*z+c*se,r[12]=a*M+o*U+l*$+c*de,r[1]=h*b+u*E+p*B+d*H,r[5]=h*T+u*D+p*k+d*ee,r[9]=h*C+u*L+p*z+d*se,r[13]=h*M+u*U+p*$+d*de,r[2]=_*b+g*E+m*B+f*H,r[6]=_*T+g*D+m*k+f*ee,r[10]=_*C+g*L+m*z+f*se,r[14]=_*M+g*U+m*$+f*de,r[3]=x*b+y*E+v*B+S*H,r[7]=x*T+y*D+v*k+S*ee,r[11]=x*C+y*L+v*z+S*se,r[15]=x*M+y*U+v*$+S*de,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],p=e[10],d=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+r*l*u-i*c*u-r*o*p+n*c*p+i*o*d-n*l*d)+g*(+t*l*d-t*c*p+r*a*p-i*a*d+i*c*h-r*l*h)+m*(+t*c*u-t*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+f*(-i*o*h-t*l*u+t*o*p+i*a*u-n*a*p+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],p=e[10],d=e[11],_=e[12],g=e[13],m=e[14],f=e[15],x=u*m*c-g*p*c+g*l*d-o*m*d-u*l*f+o*p*f,y=_*p*c-h*m*c-_*l*d+a*m*d+h*l*f-a*p*f,v=h*g*c-_*u*c+_*o*d-a*g*d-h*o*f+a*u*f,S=_*u*l-h*g*l-_*o*p+a*g*p+h*o*m-a*u*m,b=t*x+n*y+i*v+r*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/b;return e[0]=x*T,e[1]=(g*p*r-u*m*r-g*i*d+n*m*d+u*i*f-n*p*f)*T,e[2]=(o*m*r-g*l*r+g*i*c-n*m*c-o*i*f+n*l*f)*T,e[3]=(u*l*r-o*p*r-u*i*c+n*p*c+o*i*d-n*l*d)*T,e[4]=y*T,e[5]=(h*m*r-_*p*r+_*i*d-t*m*d-h*i*f+t*p*f)*T,e[6]=(_*l*r-a*m*r-_*i*c+t*m*c+a*i*f-t*l*f)*T,e[7]=(a*p*r-h*l*r+h*i*c-t*p*c-a*i*d+t*l*d)*T,e[8]=v*T,e[9]=(_*u*r-h*g*r-_*n*d+t*g*d+h*n*f-t*u*f)*T,e[10]=(a*g*r-_*o*r+_*n*c-t*g*c-a*n*f+t*o*f)*T,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*d-t*o*d)*T,e[12]=S*T,e[13]=(h*g*i-_*u*i+_*n*p-t*g*p-h*n*m+t*u*m)*T,e[14]=(_*o*i-a*g*i-_*n*l+t*g*l+a*n*m-t*o*m)*T,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*p+t*o*p)*T,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,p=r*c,d=r*h,_=r*u,g=a*h,m=a*u,f=o*u,x=l*c,y=l*h,v=l*u,S=n.x,b=n.y,T=n.z;return i[0]=(1-(g+f))*S,i[1]=(d+v)*S,i[2]=(_-y)*S,i[3]=0,i[4]=(d-v)*b,i[5]=(1-(p+f))*b,i[6]=(m+x)*b,i[7]=0,i[8]=(_+y)*T,i[9]=(m-x)*T,i[10]=(1-(p+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=_r.set(i[0],i[1],i[2]).length(),a=_r.set(i[4],i[5],i[6]).length(),o=_r.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],ai.copy(this);let c=1/r,h=1/a,u=1/o;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=h,ai.elements[5]*=h,ai.elements[6]*=h,ai.elements[8]*=u,ai.elements[9]*=u,ai.elements[10]*=u,t.setFromRotationMatrix(ai),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=li,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-i),p=(t+e)/(t-e),d=(n+i)/(n-i),_,g;if(l)_=r/(a-r),g=a*r/(a-r);else if(o===li)_=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Na)_=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=li,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),p=-(t+e)/(t-e),d=-(n+i)/(n-i),_,g;if(l)_=1/(a-r),g=a/(a-r);else if(o===li)_=-2/(a-r),g=-(a+r)/(a-r);else if(o===Na)_=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},_r=new P,ai=new Ze,nx=new P(0,0,0),ix=new P(1,1,1),$i=new P,sl=new P,Ln=new P,bp=new Ze,Ep=new vn,yn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],p=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ep.setFromEuler(this),this.setFromQuaternion(Ep,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yn.DEFAULT_ORDER="XYZ";var Lr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},sx=0,wp=new P,xr=new vn,Ti=new Ze,rl=new P,Sa=new P,rx=new P,ax=new vn,Tp=new P(1,0,0),Ap=new P(0,1,0),Cp=new P(0,0,1),Rp={type:"added"},ox={type:"removed"},vr={type:"childadded",child:null},pu={type:"childremoved",child:null},Dt=class s extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=Ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new P,t=new yn,n=new vn,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ze},normalMatrix:{value:new We}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.multiply(xr),this}rotateOnWorldAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.premultiply(xr),this}rotateX(e){return this.rotateOnAxis(Tp,e)}rotateY(e){return this.rotateOnAxis(Ap,e)}rotateZ(e){return this.rotateOnAxis(Cp,e)}translateOnAxis(e,t){return wp.copy(e).applyQuaternion(this.quaternion),this.position.add(wp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tp,e)}translateY(e){return this.translateOnAxis(Ap,e)}translateZ(e){return this.translateOnAxis(Cp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?rl.copy(e):rl.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Sa,rl,this.up):Ti.lookAt(rl,Sa,this.up),this.quaternion.setFromRotationMatrix(Ti),i&&(Ti.extractRotation(i.matrixWorld),xr.setFromRotationMatrix(Ti),this.quaternion.premultiply(xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rp),vr.child=e,this.dispatchEvent(vr),vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ox),pu.child=e,this.dispatchEvent(pu),pu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rp),vr.child=e,this.dispatchEvent(vr),vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,e,rx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,ax,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),p=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Dt.DEFAULT_UP=new P(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var oi=new P,Ai=new P,mu=new P,Ci=new P,yr=new P,Sr=new P,Pp=new P,gu=new P,_u=new P,xu=new P,vu=new at,yu=new at,Su=new at,Ji=class s{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),oi.subVectors(e,t),i.cross(oi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){oi.subVectors(i,t),Ai.subVectors(n,t),mu.subVectors(e,t);let a=oi.dot(oi),o=oi.dot(Ai),l=oi.dot(mu),c=Ai.dot(Ai),h=Ai.dot(mu),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let p=1/u,d=(c*l-o*h)*p,_=(a*h-o*l)*p;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ci.x),l.addScaledVector(a,Ci.y),l.addScaledVector(o,Ci.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return vu.setScalar(0),yu.setScalar(0),Su.setScalar(0),vu.fromBufferAttribute(e,t),yu.fromBufferAttribute(e,n),Su.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(vu,r.x),a.addScaledVector(yu,r.y),a.addScaledVector(Su,r.z),a}static isFrontFacing(e,t,n,i){return oi.subVectors(n,t),Ai.subVectors(e,t),oi.cross(Ai).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),oi.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;yr.subVectors(i,n),Sr.subVectors(r,n),gu.subVectors(e,n);let l=yr.dot(gu),c=Sr.dot(gu);if(l<=0&&c<=0)return t.copy(n);_u.subVectors(e,i);let h=yr.dot(_u),u=Sr.dot(_u);if(h>=0&&u<=h)return t.copy(i);let p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(yr,a);xu.subVectors(e,r);let d=yr.dot(xu),_=Sr.dot(xu);if(_>=0&&d<=_)return t.copy(r);let g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Sr,o);let m=h*_-d*u;if(m<=0&&u-h>=0&&d-_>=0)return Pp.subVectors(r,i),o=(u-h)/(u-h+(d-_)),t.copy(i).addScaledVector(Pp,o);let f=1/(m+g+p);return a=g*f,o=p*f,t.copy(n).addScaledVector(yr,a).addScaledVector(Sr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Rm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},al={h:0,s:0,l:0};function Mu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var He=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=rd(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Mu(a,r,e+1/3),this.g=Mu(a,r,e),this.b=Mu(a,r,e-1/3)}return Je.colorSpaceToWorking(this,i),this}setStyle(e,t=Pt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){let n=Rm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Je.workingToColorSpace(en.copy(this),e),Math.round(qe(en.r*255,0,255))*65536+Math.round(qe(en.g*255,0,255))*256+Math.round(qe(en.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(en.copy(this),t);let n=en.r,i=en.g,r=en.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Pt){Je.workingToColorSpace(en.copy(this),e);let t=en.r,n=en.g,i=en.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+t,Zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zi),e.getHSL(al);let n=Ra(Zi.h,al.h,t),i=Ra(Zi.s,al.s,t),r=Ra(Zi.l,al.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new He;He.NAMES=Rm;var lx=0,hi=class extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=Ws(),this.name="",this.type="Material",this.blending=Ds,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=El,this.blendDst=wl,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(n.blending=this.blending),this.side!==Pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==El&&(n.blendSrc=this.blendSrc),this.blendDst!==wl&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Sn=class extends hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Nt=new P,ol=new ce,cx=0,xn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fu,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ol.fromBufferAttribute(this,t),ol.applyMatrix3(e),this.setXY(t,ol.x,ol.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tr(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tr(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tr(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),i=hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),i=hn(i,this.array),r=hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fu&&(e.usage=this.usage),e}};var Oa=class extends xn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ba=class extends xn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var it=class extends xn{constructor(e,t,n){super(new Float32Array(e),t,n)}},hx=0,Yn=new Ze,bu=new Dt,Mr=new P,Nn=new fn,Ma=new fn,Wt=new P,_t=class s extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=Ws(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ad(e)?Ba:Oa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,n){return Yn.makeTranslation(e,t,n),this.applyMatrix4(Yn),this}scale(e,t,n){return Yn.makeScale(e,t,n),this.applyMatrix4(Yn),this}lookAt(e){return bu.lookAt(e),bu.updateMatrix(),this.applyMatrix4(bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new it(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Di);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ma.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(Nn.min,Ma.min),Nn.expandByPoint(Wt),Wt.addVectors(Nn.max,Ma.max),Nn.expandByPoint(Wt)):(Nn.expandByPoint(Ma.min),Nn.expandByPoint(Ma.max))}Nn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Wt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Wt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Wt.fromBufferAttribute(o,c),l&&(Mr.fromBufferAttribute(e,c),Wt.add(Mr)),i=Math.max(i,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new P,l[C]=new P;let c=new P,h=new P,u=new P,p=new ce,d=new ce,_=new ce,g=new P,m=new P;function f(C,M,E){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,E),p.fromBufferAttribute(r,C),d.fromBufferAttribute(r,M),_.fromBufferAttribute(r,E),h.sub(c),u.sub(c),d.sub(p),_.sub(p);let D=1/(d.x*_.y-_.x*d.y);isFinite(D)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-d.y).multiplyScalar(D),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(D),o[C].add(g),o[M].add(g),o[E].add(g),l[C].add(m),l[M].add(m),l[E].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,M=x.length;C<M;++C){let E=x[C],D=E.start,L=E.count;for(let U=D,B=D+L;U<B;U+=3)f(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let y=new P,v=new P,S=new P,b=new P;function T(C){S.fromBufferAttribute(i,C),b.copy(S);let M=o[C];y.copy(M),y.sub(S.multiplyScalar(S.dot(M))).normalize(),v.crossVectors(b,M);let D=v.dot(l[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,D)}for(let C=0,M=x.length;C<M;++C){let E=x[C],D=E.start,L=E.count;for(let U=D,B=D+L;U<B;U+=3)T(e.getX(U+0)),T(e.getX(U+1)),T(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);let i=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let p=0,d=e.count;p<d;p+=3){let _=e.getX(p+0),g=e.getX(p+1),m=e.getX(p+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,d=t.count;p<d;p+=3)i.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,p=new c.constructor(l.length*h),d=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*h;for(let f=0;f<h;f++)p[_++]=c[d++]}return new xn(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let p=c[h],d=e(p,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let p=0,d=u.length;p<d;p++)h.push(u[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dp=new Ze,Cs=new Qi,ll=new Di,Ip=new P,cl=new P,hl=new P,ul=new P,Eu=new P,dl=new P,Lp=new P,fl=new P,Xe=class extends Dt{constructor(e=new _t,t=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){dl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Eu.fromBufferAttribute(u,e),a?dl.addScaledVector(Eu,h):dl.addScaledVector(Eu.sub(t),h))}t.add(dl)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ll.copy(n.boundingSphere),ll.applyMatrix4(r),Cs.copy(e.ray).recast(e.near),!(ll.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(ll,Ip)===null||Cs.origin.distanceToSquared(Ip)>(e.far-e.near)**2))&&(Dp.copy(r).invert(),Cs.copy(e.ray).applyMatrix4(Dp),!(n.boundingBox!==null&&Cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Cs)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=p.length;_<g;_++){let m=p[_],f=a[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=x,S=y;v<S;v+=3){let b=o.getX(v),T=o.getX(v+1),C=o.getX(v+2);i=pl(this,f,e,n,c,h,u,b,T,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=_,f=g;m<f;m+=3){let x=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);i=pl(this,a,e,n,c,h,u,x,y,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=p.length;_<g;_++){let m=p[_],f=a[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=x,S=y;v<S;v+=3){let b=v,T=v+1,C=v+2;i=pl(this,f,e,n,c,h,u,b,T,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,f=g;m<f;m+=3){let x=m,y=m+1,v=m+2;i=pl(this,a,e,n,c,h,u,x,y,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function ux(s,e,t,n,i,r,a,o){let l;if(e.side===Yt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Pi,o),l===null)return null;fl.copy(o),fl.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(fl);return c<t.near||c>t.far?null:{distance:c,point:fl.clone(),object:s}}function pl(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,cl),s.getVertexPosition(l,hl),s.getVertexPosition(c,ul);let h=ux(s,e,t,n,cl,hl,ul,Lp);if(h){let u=new P;Ji.getBarycoord(Lp,cl,hl,ul,u),i&&(h.uv=Ji.getInterpolatedAttribute(i,o,l,c,u,new ce)),r&&(h.uv1=Ji.getInterpolatedAttribute(r,o,l,c,u,new ce)),a&&(h.normal=Ji.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:l,c,normal:new P,materialIndex:0};Ji.getNormal(cl,hl,ul,p.normal),h.face=p,h.barycoord=u}return h}var Tt=class s extends _t{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],p=0,d=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(u,2));function _(g,m,f,x,y,v,S,b,T,C,M){let E=v/T,D=S/C,L=v/2,U=S/2,B=b/2,k=T+1,z=C+1,$=0,H=0,ee=new P;for(let se=0;se<z;se++){let de=se*D-U;for(let Re=0;Re<k;Re++){let ze=Re*E-L;ee[g]=ze*x,ee[m]=de*y,ee[f]=B,c.push(ee.x,ee.y,ee.z),ee[g]=0,ee[m]=0,ee[f]=b>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(Re/T),u.push(1-se/C),$+=1}}for(let se=0;se<C;se++)for(let de=0;de<T;de++){let Re=p+de+k*se,ze=p+de+k*(se+1),Be=p+(de+1)+k*(se+1),Ue=p+(de+1)+k*se;l.push(Re,ze,Ue),l.push(ze,Be,Ue),H+=6}o.addGroup(d,H,M),d+=H,p+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function qs(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function sn(s){let e={};for(let t=0;t<s.length;t++){let n=qs(s[t]);for(let i in n)e[i]=n[i]}return e}function dx(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function od(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var jn={clone:qs,merge:sn},fx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,px=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,It=class extends hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fx,this.fragmentShader=px,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=dx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},za=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ji=new P,Np=new ce,Up=new ce,qt=class extends za{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(Ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,Np,Up),t.subVectors(Up,Np)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ca*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},br=-90,Er=1,Dl=class extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new qt(br,Er,e,t);i.layers=this.layers,this.add(i);let r=new qt(br,Er,e,t);r.layers=this.layers,this.add(r);let a=new qt(br,Er,e,t);a.layers=this.layers,this.add(a);let o=new qt(br,Er,e,t);o.layers=this.layers,this.add(o);let l=new qt(br,Er,e,t);l.layers=this.layers,this.add(l);let c=new qt(br,Er,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===li)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Na)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,p,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},ka=class extends un{constructor(e=[],t=Hs,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Il=class extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ka(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Tt(5,5,5),r=new It({name:"CubemapFromEquirect",uniforms:qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:Ut});r.uniforms.tEquirect.value=t;let a=new Xe(i,r),o=t.minFilter;return t.minFilter===rs&&(t.minFilter=ci),new Dl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},Ve=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},mx={type:"move"},Nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),d=.02,_=.005;c.inputState.pinching&&p>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ve;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Ns=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var es=class extends un{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Xt,h=Xt,u,p){super(null,a,o,l,c,h,i,r,u,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Va=class extends xn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},wr=new Ze,Fp=new Ze,ml=[],Op=new fn,gx=new Ze,ba=new Xe,Ea=new Di,Ii=class extends Xe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Va(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,gx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),Op.copy(e.boundingBox).applyMatrix4(wr),this.boundingBox.union(Op)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Di),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),Ea.copy(e.boundingSphere).applyMatrix4(wr),this.boundingSphere.union(Ea)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ba.geometry=this.geometry,ba.material=this.material,ba.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ea.copy(this.boundingSphere),Ea.applyMatrix4(n),e.ray.intersectsSphere(Ea)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,wr),Fp.multiplyMatrices(n,wr),ba.matrixWorld=Fp,ba.raycast(e,ml);for(let a=0,o=ml.length;a<o;a++){let l=ml[a];l.instanceId=r,l.object=this,t.push(l)}ml.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Va(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new es(new Float32Array(i*this.count),i,this.count,Mc,ui));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},wu=new P,_x=new P,xx=new We,Ot=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=wu.subVectors(n,t).cross(_x.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(wu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||xx.getNormalMatrix(e),i=this.coplanarPoint(wu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Rs=new Di,vx=new ce(.5,.5),gl=new P,Ur=class{constructor(e=new Ot,t=new Ot,n=new Ot,i=new Ot,r=new Ot,a=new Ot){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=li,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],p=r[6],d=r[7],_=r[8],g=r[9],m=r[10],f=r[11],x=r[12],y=r[13],v=r[14],S=r[15];if(i[0].setComponents(c-a,d-h,f-_,S-x).normalize(),i[1].setComponents(c+a,d+h,f+_,S+x).normalize(),i[2].setComponents(c+o,d+u,f+g,S+y).normalize(),i[3].setComponents(c-o,d-u,f-g,S-y).normalize(),n)i[4].setComponents(l,p,m,v).normalize(),i[5].setComponents(c-l,d-p,f-m,S-v).normalize();else if(i[4].setComponents(c-l,d-p,f-m,S-v).normalize(),t===li)i[5].setComponents(c+l,d+p,f+m,S+v).normalize();else if(t===Na)i[5].setComponents(l,p,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){Rs.center.set(0,0,0);let t=vx.distanceTo(e.center);return Rs.radius=.7071067811865476+t,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(gl.x=i.normal.x>0?e.max.x:e.min.x,gl.y=i.normal.y>0?e.max.y:e.min.y,gl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(gl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Zn=class extends hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ll=new P,Nl=new P,Bp=new Ze,wa=new Qi,_l=new Di,Tu=new P,zp=new P,Us=class extends Dt{constructor(e=new _t,t=new Zn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ll.fromBufferAttribute(t,i-1),Nl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ll.distanceTo(Nl);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_l.copy(n.boundingSphere),_l.applyMatrix4(i),_l.radius+=r,e.ray.intersectsSphere(_l)===!1)return;Bp.copy(i).invert(),wa.copy(e.ray).applyMatrix4(Bp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=d,m=_-1;g<m;g+=c){let f=h.getX(g),x=h.getX(g+1),y=xl(this,e,wa,l,f,x,g);y&&t.push(y)}if(this.isLineLoop){let g=h.getX(_-1),m=h.getX(d),f=xl(this,e,wa,l,g,m,_-1);f&&t.push(f)}}else{let d=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let g=d,m=_-1;g<m;g+=c){let f=xl(this,e,wa,l,g,g+1,g);f&&t.push(f)}if(this.isLineLoop){let g=xl(this,e,wa,l,_-1,d,_-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function xl(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(Ll.fromBufferAttribute(o,i),Nl.fromBufferAttribute(o,r),t.distanceSqToSegment(Ll,Nl,Tu,zp)>n)return;Tu.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Tu);if(!(c<e.near||c>e.far))return{distance:c,point:zp.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var kp=new P,Vp=new P,Ha=class extends Us{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)kp.fromBufferAttribute(t,i),Vp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+kp.distanceTo(Vp);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Li=class extends Us{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};var Ni=class extends un{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Fs=class extends un{constructor(e,t,n=as,i,r,a,o=Xt,l=Xt,c,h=Rr,u=1){if(h!==Rr&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:u};super(p,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ir(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ga=class extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Os=class s extends _t{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],p=[],d=[],_=0,g=[],m=n/2,f=0;x(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(p,3)),this.setAttribute("uv",new it(d,2));function x(){let v=new P,S=new P,b=0,T=(t-e)/n;for(let C=0;C<=r;C++){let M=[],E=C/r,D=E*(t-e)+e;for(let L=0;L<=i;L++){let U=L/i,B=U*l+o,k=Math.sin(B),z=Math.cos(B);S.x=D*k,S.y=-E*n+m,S.z=D*z,u.push(S.x,S.y,S.z),v.set(k,T,z).normalize(),p.push(v.x,v.y,v.z),d.push(U,1-E),M.push(_++)}g.push(M)}for(let C=0;C<i;C++)for(let M=0;M<r;M++){let E=g[M][C],D=g[M+1][C],L=g[M+1][C+1],U=g[M][C+1];(e>0||M!==0)&&(h.push(E,D,U),b+=3),(t>0||M!==r-1)&&(h.push(D,L,U),b+=3)}c.addGroup(f,b,0),f+=b}function y(v){let S=_,b=new ce,T=new P,C=0,M=v===!0?e:t,E=v===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,m*E,0),p.push(0,E,0),d.push(.5,.5),_++;let D=_;for(let L=0;L<=i;L++){let B=L/i*l+o,k=Math.cos(B),z=Math.sin(B);T.x=M*z,T.y=m*E,T.z=M*k,u.push(T.x,T.y,T.z),p.push(0,E,0),b.x=k*.5+.5,b.y=z*.5*E+.5,d.push(b.x,b.y),_++}for(let L=0;L<i;L++){let U=S+L,B=D+L;v===!0?h.push(B,B+1,U):h.push(B+1,B,U),C+=3}c.addGroup(f,C,v===!0?1:2),f+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],p=n[i+1]-h,d=(a-h)/p;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new ce:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,i=[],r=[],a=[],o=new P,l=new Ze;for(let d=0;d<=e;d++){let _=d/e;i[d]=this.getTangentAt(_,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),p=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(qe(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,_))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(qe(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(i[_],d*_)),a[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Fr=class extends Fn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ce){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*h-d*u+this.aX,c=p*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ul=class extends Fr{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ld(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let p=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;p*=h,d*=h,i(a,o,p,d)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var vl=new P,Au=new ld,Cu=new ld,Ru=new ld,Fl=class extends Fn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(vl.subVectors(i[0],i[1]).add(i[0]),c=vl);let u=i[o%r],p=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(vl.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=vl),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(h),d);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),Au.initNonuniformCatmullRom(c.x,u.x,p.x,h.x,_,g,m),Cu.initNonuniformCatmullRom(c.y,u.y,p.y,h.y,_,g,m),Ru.initNonuniformCatmullRom(c.z,u.z,p.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(Au.initCatmullRom(c.x,u.x,p.x,h.x,this.tension),Cu.initCatmullRom(c.y,u.y,p.y,h.y,this.tension),Ru.initCatmullRom(c.z,u.z,p.z,h.z,this.tension));return n.set(Au.calc(l),Cu.calc(l),Ru.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Hp(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function yx(s,e){let t=1-s;return t*t*e}function Sx(s,e){return 2*(1-s)*s*e}function Mx(s,e){return s*s*e}function Pa(s,e,t,n){return yx(s,e)+Sx(s,t)+Mx(s,n)}function bx(s,e){let t=1-s;return t*t*t*e}function Ex(s,e){let t=1-s;return 3*t*t*s*e}function wx(s,e){return 3*(1-s)*s*s*e}function Tx(s,e){return s*s*s*e}function Da(s,e,t,n,i){return bx(s,e)+Ex(s,t)+wx(s,n)+Tx(s,i)}var Wa=class extends Fn{constructor(e=new ce,t=new ce,n=new ce,i=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ce){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Da(e,i.x,r.x,a.x,o.x),Da(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ol=class extends Fn{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Da(e,i.x,r.x,a.x,o.x),Da(e,i.y,r.y,a.y,o.y),Da(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qa=class extends Fn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bl=class extends Fn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xa=class extends Fn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Pa(e,i.x,r.x,a.x),Pa(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zl=class extends Fn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Pa(e,i.x,r.x,a.x),Pa(e,i.y,r.y,a.y),Pa(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ya=class extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Hp(o,l.x,c.x,h.x,u.x),Hp(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ce().fromArray(i))}return this}},Gp=Object.freeze({__proto__:null,ArcCurve:Ul,CatmullRomCurve3:Fl,CubicBezierCurve:Wa,CubicBezierCurve3:Ol,EllipseCurve:Fr,LineCurve:qa,LineCurve3:Bl,QuadraticBezierCurve:Xa,QuadraticBezierCurve3:zl,SplineCurve:Ya}),kl=class extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gp[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Gp[i.type]().fromJSON(i))}return this}},$a=class extends kl{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new qa(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Xa(this.currentPoint.clone(),new ce(e,t),new ce(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new Wa(this.currentPoint.clone(),new ce(e,t),new ce(n,i),new ce(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ya(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){let c=new Fr(e,t,n,i,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Or=class extends $a{constructor(e){super(e),this.uuid=Ws(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new $a().fromJSON(i))}return this}};function Ax(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Pm(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Ix(s,e,r,t)),s.length>80*t){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let p=t;p<i;p+=t){let d=s[p],_=s[p+1];d<o&&(o=d),_<l&&(l=_),d>h&&(h=d),_>u&&(u=_)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Za(r,a,t,o,l,c,0),a}function Pm(s,e,t,n,i){let r;if(i===Gx(s,e,t,n)>0)for(let a=e;a<t;a+=n)r=Wp(a/n|0,s[a],s[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Wp(a/n|0,s[a],s[a+1],r);return r&&Br(r,r.next)&&(Ja(r),r=r.next),r}function Bs(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Br(t,t.next)||St(t.prev,t,t.next)===0)){if(Ja(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Za(s,e,t,n,i,r,a){if(!s)return;!a&&r&&Ox(s,n,i,r);let o=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?Rx(s,n,i,r):Cx(s)){e.push(l.i,s.i,c.i),Ja(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Px(Bs(s),e),Za(s,e,t,n,i,r,2)):a===2&&Dx(s,e,t,n,i,r):Za(Bs(s),e,t,n,i,r,1);break}}}function Cx(s){let e=s.prev,t=s,n=s.next;if(St(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,r,a),u=Math.min(o,l,c),p=Math.max(i,r,a),d=Math.max(o,l,c),_=n.next;for(;_!==e;){if(_.x>=h&&_.x<=p&&_.y>=u&&_.y<=d&&Aa(i,o,r,l,a,c,_.x,_.y)&&St(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Rx(s,e,t,n){let i=s.prev,r=s,a=s.next;if(St(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,p=a.y,d=Math.min(o,l,c),_=Math.min(h,u,p),g=Math.max(o,l,c),m=Math.max(h,u,p),f=Ou(d,_,e,t,n),x=Ou(g,m,e,t,n),y=s.prevZ,v=s.nextZ;for(;y&&y.z>=f&&v&&v.z<=x;){if(y.x>=d&&y.x<=g&&y.y>=_&&y.y<=m&&y!==i&&y!==a&&Aa(o,h,l,u,c,p,y.x,y.y)&&St(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=d&&v.x<=g&&v.y>=_&&v.y<=m&&v!==i&&v!==a&&Aa(o,h,l,u,c,p,v.x,v.y)&&St(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=f;){if(y.x>=d&&y.x<=g&&y.y>=_&&y.y<=m&&y!==i&&y!==a&&Aa(o,h,l,u,c,p,y.x,y.y)&&St(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=g&&v.y>=_&&v.y<=m&&v!==i&&v!==a&&Aa(o,h,l,u,c,p,v.x,v.y)&&St(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Px(s,e){let t=s;do{let n=t.prev,i=t.next.next;!Br(n,i)&&Im(n,t,t.next,i)&&ja(n,i)&&ja(i,n)&&(e.push(n.i,t.i,i.i),Ja(t),Ja(t.next),t=s=i),t=t.next}while(t!==s);return Bs(t)}function Dx(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&kx(a,o)){let l=Lm(a,o);a=Bs(a,a.next),l=Bs(l,l.next),Za(a,e,t,n,i,r,0),Za(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Ix(s,e,t,n){let i=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=Pm(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(zx(c))}i.sort(Lx);for(let r=0;r<i.length;r++)t=Nx(i[r],t);return t}function Lx(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Nx(s,e){let t=Ux(s,e);if(!t)return e;let n=Lm(t,s);return Bs(n,n.next),Bs(t,t.next)}function Ux(s,e){let t=e,n=s.x,i=s.y,r=-1/0,a;if(Br(s,t))return t;do{if(Br(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Dm(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){let u=Math.abs(i-t.y)/(n-t.x);ja(t,s)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Fx(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Fx(s,e){return St(s.prev,s,e.prev)<0&&St(e.next,s,s.next)<0}function Ox(s,e,t,n){let i=s;do i.z===0&&(i.z=Ou(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Bx(i)}function Bx(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,t*=2}while(e>1);return s}function Ou(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function zx(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Dm(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function Aa(s,e,t,n,i,r,a,o){return!(s===a&&e===o)&&Dm(s,e,t,n,i,r,a,o)}function kx(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Vx(s,e)&&(ja(s,e)&&ja(e,s)&&Hx(s,e)&&(St(s.prev,s,e.prev)||St(s,e.prev,e))||Br(s,e)&&St(s.prev,s,s.next)>0&&St(e.prev,e,e.next)>0)}function St(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Br(s,e){return s.x===e.x&&s.y===e.y}function Im(s,e,t,n){let i=Sl(St(s,e,t)),r=Sl(St(s,e,n)),a=Sl(St(t,n,s)),o=Sl(St(t,n,e));return!!(i!==r&&a!==o||i===0&&yl(s,t,e)||r===0&&yl(s,n,e)||a===0&&yl(t,s,n)||o===0&&yl(t,e,n))}function yl(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Sl(s){return s>0?1:s<0?-1:0}function Vx(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Im(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ja(s,e){return St(s.prev,s,s.next)<0?St(s,e,s.next)>=0&&St(s,s.prev,e)>=0:St(s,e,s.prev)<0||St(s,s.next,e)<0}function Hx(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Lm(s,e){let t=Bu(s.i,s.x,s.y),n=Bu(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Wp(s,e,t,n){let i=Bu(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ja(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Bu(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Gx(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var zu=class{static triangulate(e,t,n=2){return Ax(e,t,n)}},Cr=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];qp(e),Xp(n,e);let a=e.length;t.forEach(qp);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Xp(n,t[l]);let o=zu.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function qp(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Xp(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var On=class s extends _t{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,p=t/l,d=[],_=[],g=[],m=[];for(let f=0;f<h;f++){let x=f*p-a;for(let y=0;y<c;y++){let v=y*u-r;_.push(v,-x,0),g.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){let y=x+c*f,v=x+c*(f+1),S=x+1+c*(f+1),b=x+1+c*f;d.push(y,v,b),d.push(v,S,b)}this.setIndex(d),this.setAttribute("position",new it(_,3)),this.setAttribute("normal",new it(g,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ka=class s extends _t{constructor(e=new Or([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new it(i,3)),this.setAttribute("normal",new it(r,3)),this.setAttribute("uv",new it(a,2));function c(h){let u=i.length/3,p=h.extractPoints(t),d=p.shape,_=p.holes;Cr.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,f=_.length;m<f;m++){let x=_[m];Cr.isClockWise(x)===!0&&(_[m]=x.reverse())}let g=Cr.triangulateShape(d,_);for(let m=0,f=_.length;m<f;m++){let x=_[m];d=d.concat(x)}for(let m=0,f=d.length;m<f;m++){let x=d[m];i.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let m=0,f=g.length;m<f;m++){let x=g[m],y=x[0]+u,v=x[1]+u,S=x[2]+u;n.push(y,v,S),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Wx(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let a=t[e.shapes[i]];n.push(a)}return new s(n,e.curveSegments)}};function Wx(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var Qa=class s extends _t{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,p=new P,d=[],_=[],g=[],m=[];for(let f=0;f<=n;f++){let x=[],y=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&l===Math.PI&&(v=-.5/t);for(let S=0;S<=t;S++){let b=S/t;u.x=-e*Math.cos(i+b*r)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(i+b*r)*Math.sin(a+y*o),_.push(u.x,u.y,u.z),p.copy(u).normalize(),g.push(p.x,p.y,p.z),m.push(b+v,1-y),x.push(c++)}h.push(x)}for(let f=0;f<n;f++)for(let x=0;x<t;x++){let y=h[f][x+1],v=h[f][x],S=h[f+1][x],b=h[f+1][x+1];(f!==0||a>0)&&d.push(y,v,b),(f!==n-1||l<Math.PI)&&d.push(v,S,b)}this.setIndex(d),this.setAttribute("position",new it(_,3)),this.setAttribute("normal",new it(g,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var eo=class s extends _t{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new P,u=new P,p=new P;for(let d=0;d<=n;d++)for(let _=0;_<=i;_++){let g=_/i*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(g),u.y=(e+t*Math.cos(m))*Math.sin(g),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),p.subVectors(u,h).normalize(),l.push(p.x,p.y,p.z),c.push(_/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let _=1;_<=i;_++){let g=(i+1)*d+_-1,m=(i+1)*(d-1)+_-1,f=(i+1)*(d-1)+_,x=(i+1)*d+_;a.push(g,m,x),a.push(m,f,x)}this.setIndex(a),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var to=class extends It{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},tn=class extends hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yo,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var no=class extends hi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yo,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},io=class extends hi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yo,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Vl=class extends hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_m,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Hl=class extends hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ml(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function qx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var zs=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Gl=class extends zs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Iu,endingEnd:Iu}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Lu:r=e,o=2*t-n;break;case Nu:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Lu:a=e,l=2*n-t;break;case Nu:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,f=-p*m+2*p*g-p*_,x=(1+p)*m+(-1.5-2*p)*g+(-.5+p)*_+1,y=(-1-d)*m+(1.5+d)*g+.5*_,v=d*m-d*g;for(let S=0;S!==o;++S)r[S]=f*a[h+S]+x*a[c+S]+y*a[l+S]+v*a[u+S];return r}},Wl=class extends zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let p=0;p!==o;++p)r[p]=a[c+p]*u+a[l+p]*h;return r}},ql=class extends zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Bn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ml(t,this.TimeBufferType),this.values=Ml(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ml(e.times,Array),values:Ml(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ia:t=this.InterpolantFactoryMethodDiscrete;break;case Al:t=this.InterpolantFactoryMethodLinear;break;case bl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ia;case this.InterpolantFactoryMethodLinear:return Al;case this.InterpolantFactoryMethodSmooth:return bl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&qx(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===bl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let u=o*n,p=u-n,d=u+n;for(let _=0;_!==n;++_){let g=t[u+_];if(g!==t[p+_]||g!==t[d+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,p=a*n;for(let d=0;d!==n;++d)t[p+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Al;var ts=class extends Bn{constructor(e,t,n){super(e,t,n)}};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Ia;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Xl=class extends Bn{constructor(e,t,n,i){super(e,t,n,i)}};Xl.prototype.ValueTypeName="color";var Yl=class extends Bn{constructor(e,t,n,i){super(e,t,n,i)}};Yl.prototype.ValueTypeName="number";var $l=class extends zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)vn.slerpFlat(r,0,a,c-o,a,c,l);return r}},so=class extends Bn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new $l(this.times,this.values,this.getValueSize(),e)}};so.prototype.ValueTypeName="quaternion";so.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends Bn{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Ia;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Zl=class extends Bn{constructor(e,t,n,i){super(e,t,n,i)}};Zl.prototype.ValueTypeName="vector";var jl=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){let d=c[u],_=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Nm=new jl,Jl=class{constructor(e){this.manager=e!==void 0?e:Nm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Jl.DEFAULT_MATERIAL_NAME="__DEFAULT";var zr=class extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ro=class extends zr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Pu=new Ze,Yp=new P,$p=new P,Kl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ur,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Yp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yp),$p.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($p),t.updateMatrixWorld(),Pu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pu,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Zp=new Ze,Ta=new P,Du=new P,ku=class extends Kl{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ta.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ta),Du.copy(n.position),Du.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Du),n.updateMatrixWorld(),i.makeTranslation(-Ta.x,-Ta.y,-Ta.z),Zp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zp,n.coordinateSystem,n.reversedDepth)}},ao=class extends zr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ku}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ks=class extends za{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Vu=class extends Kl{constructor(){super(new ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},oo=class extends zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new Vu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ql=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},lo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var cd="\\[\\]\\.:\\/",Xx=new RegExp("["+cd+"]","g"),hd="[^"+cd+"]",Yx="[^"+cd.replace("\\.","")+"]",$x=/((?:WC+[\/:])*)/.source.replace("WC",hd),Zx=/(WCOD+)?/.source.replace("WCOD",Yx),jx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hd),Jx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hd),Kx=new RegExp("^"+$x+Zx+jx+Jx+"$"),Qx=["material","materials","bones","map"],Hu=class{constructor(e,t,n){let i=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},mt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xx,"")}static parseTrackName(e){let t=Kx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Qx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=Hu;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bw=new Float32Array(1);var jp=new Ze,co=class{constructor(e,t,n=0,i=1/0){this.ray=new Qi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Lr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return jp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jp),this}intersectObject(e,t=!0,n=[]){return Gu(e,this,n,t),n.sort(Jp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Gu(e[i],this,n,t);return n.sort(Jp),n}};function Jp(s,e){return s.distance-e.distance}function Gu(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)Gu(r[a],e,t,!0)}}var kr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ho=class extends mi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function ud(s,e,t,n){let i=ev(n);switch(t){case ed:return s*e;case Mc:return s*e/i.components*i.byteLength;case bc:return s*e/i.components*i.byteLength;case nd:return s*e*2/i.components*i.byteLength;case Ec:return s*e*2/i.components*i.byteLength;case td:return s*e*3/i.components*i.byteLength;case Mn:return s*e*4/i.components*i.byteLength;case wc:return s*e*4/i.components*i.byteLength;case go:case _o:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case xo:case vo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ac:case Rc:return Math.max(s,16)*Math.max(e,8)/4;case Tc:case Cc:return Math.max(s,8)*Math.max(e,8)/2;case Pc:case Dc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ic:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case zc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case kc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Wc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case qc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Yc:case $c:case Zc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case jc:case Jc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Kc:case Qc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ev(s){switch(s){case zn:case ju:return{byteLength:1,components:1};case Hr:case Ju:case di:return{byteLength:2,components:1};case yc:case Sc:return{byteLength:2,components:4};case as:case vc:case ui:return{byteLength:4,components:1};case Ku:case Qu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function s0(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function nv(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,p=s.createBuffer();s.bindBuffer(l,p),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,_)=>d.start-_.start);let p=0;for(let d=1;d<u.length;d++){let _=u[p],g=u[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++p,u[p]=g)}u.length=p+1;for(let d=0,_=u.length;d<_;d++){let g=u[d];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var iv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sv=`#ifdef USE_ALPHAHASH
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
#endif`,rv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,av=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ov=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cv=`#ifdef USE_AOMAP
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
#endif`,hv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uv=`#ifdef USE_BATCHING
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
#endif`,dv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gv=`#ifdef USE_IRIDESCENCE
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
#endif`,_v=`#ifdef USE_BUMPMAP
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
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ev=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Tv=`#define PI 3.141592653589793
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
} // validated`,Av=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cv=`vec3 transformedNormal = objectNormal;
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
#endif`,Rv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uv=`#ifdef USE_ENVMAP
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
#endif`,Fv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ov=`#ifdef USE_ENVMAP
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
#endif`,Bv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zv=`#ifdef USE_ENVMAP
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
#endif`,kv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wv=`#ifdef USE_GRADIENTMAP
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
}`,qv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$v=`uniform bool receiveShadow;
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
#endif`,Zv=`#ifdef USE_ENVMAP
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
#endif`,jv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ey=`PhysicalMaterial material;
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
#endif`,ty=`struct PhysicalMaterial {
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
}`,ny=`
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
#endif`,iy=`#if defined( RE_IndirectDiffuse )
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
#endif`,sy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ry=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ay=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ly=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dy=`#if defined( USE_POINTS_UV )
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
#endif`,fy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,py=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,my=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_y=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xy=`#ifdef USE_MORPHTARGETS
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
#endif`,vy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,My=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,by=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ey=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wy=`#ifdef USE_NORMALMAP
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
#endif`,Ty=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ay=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ry=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Py=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Iy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ly=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ny=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Oy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,By=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ky=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vy=`float getShadowMask() {
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
}`,Hy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gy=`#ifdef USE_SKINNING
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
#endif`,Wy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qy=`#ifdef USE_SKINNING
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
#endif`,Xy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$y=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jy=`#ifdef USE_TRANSMISSION
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
#endif`,Jy=`#ifdef USE_TRANSMISSION
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
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,nS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iS=`uniform sampler2D t2D;
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
}`,sS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lS=`#include <common>
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
}`,cS=`#if DEPTH_PACKING == 3200
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
}`,hS=`#define DISTANCE
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
}`,uS=`#define DISTANCE
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
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pS=`uniform float scale;
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
}`,mS=`uniform vec3 diffuse;
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
}`,gS=`#include <common>
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
}`,_S=`uniform vec3 diffuse;
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
}`,xS=`#define LAMBERT
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
}`,vS=`#define LAMBERT
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
}`,yS=`#define MATCAP
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
}`,SS=`#define MATCAP
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
}`,MS=`#define NORMAL
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
}`,bS=`#define NORMAL
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
}`,ES=`#define PHONG
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
}`,wS=`#define PHONG
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
}`,TS=`#define STANDARD
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
}`,AS=`#define STANDARD
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
}`,CS=`#define TOON
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
}`,RS=`#define TOON
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
}`,PS=`uniform float size;
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
}`,DS=`uniform vec3 diffuse;
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
}`,IS=`#include <common>
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
}`,LS=`uniform vec3 color;
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
}`,NS=`uniform float rotation;
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
}`,US=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:iv,alphahash_pars_fragment:sv,alphamap_fragment:rv,alphamap_pars_fragment:av,alphatest_fragment:ov,alphatest_pars_fragment:lv,aomap_fragment:cv,aomap_pars_fragment:hv,batching_pars_vertex:uv,batching_vertex:dv,begin_vertex:fv,beginnormal_vertex:pv,bsdfs:mv,iridescence_fragment:gv,bumpmap_pars_fragment:_v,clipping_planes_fragment:xv,clipping_planes_pars_fragment:vv,clipping_planes_pars_vertex:yv,clipping_planes_vertex:Sv,color_fragment:Mv,color_pars_fragment:bv,color_pars_vertex:Ev,color_vertex:wv,common:Tv,cube_uv_reflection_fragment:Av,defaultnormal_vertex:Cv,displacementmap_pars_vertex:Rv,displacementmap_vertex:Pv,emissivemap_fragment:Dv,emissivemap_pars_fragment:Iv,colorspace_fragment:Lv,colorspace_pars_fragment:Nv,envmap_fragment:Uv,envmap_common_pars_fragment:Fv,envmap_pars_fragment:Ov,envmap_pars_vertex:Bv,envmap_physical_pars_fragment:Zv,envmap_vertex:zv,fog_vertex:kv,fog_pars_vertex:Vv,fog_fragment:Hv,fog_pars_fragment:Gv,gradientmap_pars_fragment:Wv,lightmap_pars_fragment:qv,lights_lambert_fragment:Xv,lights_lambert_pars_fragment:Yv,lights_pars_begin:$v,lights_toon_fragment:jv,lights_toon_pars_fragment:Jv,lights_phong_fragment:Kv,lights_phong_pars_fragment:Qv,lights_physical_fragment:ey,lights_physical_pars_fragment:ty,lights_fragment_begin:ny,lights_fragment_maps:iy,lights_fragment_end:sy,logdepthbuf_fragment:ry,logdepthbuf_pars_fragment:ay,logdepthbuf_pars_vertex:oy,logdepthbuf_vertex:ly,map_fragment:cy,map_pars_fragment:hy,map_particle_fragment:uy,map_particle_pars_fragment:dy,metalnessmap_fragment:fy,metalnessmap_pars_fragment:py,morphinstance_vertex:my,morphcolor_vertex:gy,morphnormal_vertex:_y,morphtarget_pars_vertex:xy,morphtarget_vertex:vy,normal_fragment_begin:yy,normal_fragment_maps:Sy,normal_pars_fragment:My,normal_pars_vertex:by,normal_vertex:Ey,normalmap_pars_fragment:wy,clearcoat_normal_fragment_begin:Ty,clearcoat_normal_fragment_maps:Ay,clearcoat_pars_fragment:Cy,iridescence_pars_fragment:Ry,opaque_fragment:Py,packing:Dy,premultiplied_alpha_fragment:Iy,project_vertex:Ly,dithering_fragment:Ny,dithering_pars_fragment:Uy,roughnessmap_fragment:Fy,roughnessmap_pars_fragment:Oy,shadowmap_pars_fragment:By,shadowmap_pars_vertex:zy,shadowmap_vertex:ky,shadowmask_pars_fragment:Vy,skinbase_vertex:Hy,skinning_pars_vertex:Gy,skinning_vertex:Wy,skinnormal_vertex:qy,specularmap_fragment:Xy,specularmap_pars_fragment:Yy,tonemapping_fragment:$y,tonemapping_pars_fragment:Zy,transmission_fragment:jy,transmission_pars_fragment:Jy,uv_pars_fragment:Ky,uv_pars_vertex:Qy,uv_vertex:eS,worldpos_vertex:tS,background_vert:nS,background_frag:iS,backgroundCube_vert:sS,backgroundCube_frag:rS,cube_vert:aS,cube_frag:oS,depth_vert:lS,depth_frag:cS,distanceRGBA_vert:hS,distanceRGBA_frag:uS,equirect_vert:dS,equirect_frag:fS,linedashed_vert:pS,linedashed_frag:mS,meshbasic_vert:gS,meshbasic_frag:_S,meshlambert_vert:xS,meshlambert_frag:vS,meshmatcap_vert:yS,meshmatcap_frag:SS,meshnormal_vert:MS,meshnormal_frag:bS,meshphong_vert:ES,meshphong_frag:wS,meshphysical_vert:TS,meshphysical_frag:AS,meshtoon_vert:CS,meshtoon_frag:RS,points_vert:PS,points_frag:DS,shadow_vert:IS,shadow_frag:LS,sprite_vert:NS,sprite_frag:US},pe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},_i={basic:{uniforms:sn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:sn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new He(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:sn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:sn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:sn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new He(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:sn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:sn([pe.points,pe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:sn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:sn([pe.common,pe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:sn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:sn([pe.sprite,pe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:sn([pe.common,pe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:sn([pe.lights,pe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};_i.physical={uniforms:sn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var eh={r:0,b:0,g:0},Xs=new yn,FS=new Ze;function OS(s,e,t,n,i,r,a){let o=new He(0),l=r===!0?0:1,c,h,u=null,p=0,d=null;function _(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function g(y){let v=!1,S=_(y);S===null?f(o,l):S&&S.isColor&&(f(S,1),v=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,v){let S=_(v);S&&(S.isCubeTexture||S.mapping===po)?(h===void 0&&(h=new Xe(new Tt(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:qs(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Xs.copy(v.backgroundRotation),Xs.x*=-1,Xs.y*=-1,Xs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Xs.y*=-1,Xs.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(FS.makeRotationFromEuler(Xs)),h.material.toneMapped=Je.getTransfer(S.colorSpace)!==nt,(u!==S||p!==S.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=S,p=S.version,d=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Xe(new On(2,2),new It({name:"BackgroundMaterial",uniforms:qs(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Je.getTransfer(S.colorSpace)!==nt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||p!==S.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=S,p=S.version,d=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,v){y.getRGB(eh,od(s)),n.buffers.color.setClear(eh.r,eh.g,eh.b,v,a)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:g,addToRenderList:m,dispose:x}}function BS(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=p(null),r=i,a=!1;function o(E,D,L,U,B){let k=!1,z=u(U,L,D);r!==z&&(r=z,c(r.object)),k=d(E,U,L,B),k&&_(E,U,L,B),B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,v(E,D,L,U),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return s.createVertexArray()}function c(E){return s.bindVertexArray(E)}function h(E){return s.deleteVertexArray(E)}function u(E,D,L){let U=L.wireframe===!0,B=n[E.id];B===void 0&&(B={},n[E.id]=B);let k=B[D.id];k===void 0&&(k={},B[D.id]=k);let z=k[U];return z===void 0&&(z=p(l()),k[U]=z),z}function p(E){let D=[],L=[],U=[];for(let B=0;B<t;B++)D[B]=0,L[B]=0,U[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:L,attributeDivisors:U,object:E,attributes:{},index:null}}function d(E,D,L,U){let B=r.attributes,k=D.attributes,z=0,$=L.getAttributes();for(let H in $)if($[H].location>=0){let se=B[H],de=k[H];if(de===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(de=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(de=E.instanceColor)),se===void 0||se.attribute!==de||de&&se.data!==de.data)return!0;z++}return r.attributesNum!==z||r.index!==U}function _(E,D,L,U){let B={},k=D.attributes,z=0,$=L.getAttributes();for(let H in $)if($[H].location>=0){let se=k[H];se===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(se=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(se=E.instanceColor));let de={};de.attribute=se,se&&se.data&&(de.data=se.data),B[H]=de,z++}r.attributes=B,r.attributesNum=z,r.index=U}function g(){let E=r.newAttributes;for(let D=0,L=E.length;D<L;D++)E[D]=0}function m(E){f(E,0)}function f(E,D){let L=r.newAttributes,U=r.enabledAttributes,B=r.attributeDivisors;L[E]=1,U[E]===0&&(s.enableVertexAttribArray(E),U[E]=1),B[E]!==D&&(s.vertexAttribDivisor(E,D),B[E]=D)}function x(){let E=r.newAttributes,D=r.enabledAttributes;for(let L=0,U=D.length;L<U;L++)D[L]!==E[L]&&(s.disableVertexAttribArray(L),D[L]=0)}function y(E,D,L,U,B,k,z){z===!0?s.vertexAttribIPointer(E,D,L,B,k):s.vertexAttribPointer(E,D,L,U,B,k)}function v(E,D,L,U){g();let B=U.attributes,k=L.getAttributes(),z=D.defaultAttributeValues;for(let $ in k){let H=k[$];if(H.location>=0){let ee=B[$];if(ee===void 0&&($==="instanceMatrix"&&E.instanceMatrix&&(ee=E.instanceMatrix),$==="instanceColor"&&E.instanceColor&&(ee=E.instanceColor)),ee!==void 0){let se=ee.normalized,de=ee.itemSize,Re=e.get(ee);if(Re===void 0)continue;let ze=Re.buffer,Be=Re.type,Ue=Re.bytesPerElement,Z=Be===s.INT||Be===s.UNSIGNED_INT||ee.gpuType===vc;if(ee.isInterleavedBufferAttribute){let K=ee.data,X=K.stride,fe=ee.offset;if(K.isInstancedInterleavedBuffer){for(let ne=0;ne<H.locationSize;ne++)f(H.location+ne,K.meshPerAttribute);E.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ne=0;ne<H.locationSize;ne++)m(H.location+ne);s.bindBuffer(s.ARRAY_BUFFER,ze);for(let ne=0;ne<H.locationSize;ne++)y(H.location+ne,de/H.locationSize,Be,se,X*Ue,(fe+de/H.locationSize*ne)*Ue,Z)}else{if(ee.isInstancedBufferAttribute){for(let K=0;K<H.locationSize;K++)f(H.location+K,ee.meshPerAttribute);E.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let K=0;K<H.locationSize;K++)m(H.location+K);s.bindBuffer(s.ARRAY_BUFFER,ze);for(let K=0;K<H.locationSize;K++)y(H.location+K,de/H.locationSize,Be,se,de*Ue,de/H.locationSize*K*Ue,Z)}}else if(z!==void 0){let se=z[$];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(H.location,se);break;case 3:s.vertexAttrib3fv(H.location,se);break;case 4:s.vertexAttrib4fv(H.location,se);break;default:s.vertexAttrib1fv(H.location,se)}}}}x()}function S(){C();for(let E in n){let D=n[E];for(let L in D){let U=D[L];for(let B in U)h(U[B].object),delete U[B];delete D[L]}delete n[E]}}function b(E){if(n[E.id]===void 0)return;let D=n[E.id];for(let L in D){let U=D[L];for(let B in U)h(U[B].object),delete U[B];delete D[L]}delete n[E.id]}function T(E){for(let D in n){let L=n[D];if(L[E.id]===void 0)continue;let U=L[E.id];for(let B in U)h(U[B].object),delete U[B];delete L[E.id]}}function C(){M(),a=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function zS(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_];t.update(d,n,1)}function l(c,h,u,p){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)a(c[_],h[_],p[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*p[g];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function kS(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==Mn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let C=T===di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==zn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ui&&!C)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=_>0,b=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:S,maxSamples:b}}function VS(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Ot,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let d=u.length!==0||p||n!==0||i;return i=p,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,d){let _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||_===null||_.length===0||r&&!m)r?h(null):c();else{let x=r?0:n,y=x*4,v=f.clippingState||null;l.value=v,v=h(_,p,y,d);for(let S=0;S!==y;++S)v[S]=t[S];f.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,p,d,_){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let f=d+g*4,x=p.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,v=d;y!==g;++y,v+=4)a.copy(u[y]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function HS(s){let e=new WeakMap;function t(a,o){return o===gc?a.mapping=Hs:o===_c&&(a.mapping=Gs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===gc||o===_c)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Il(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var qr=4,Um=[.125,.215,.35,.446,.526,.582],Zs=20,dd=new ks,Fm=new He,fd=null,pd=0,md=0,gd=!1,$s=(1+Math.sqrt(5))/2,Wr=1/$s,Om=[new P(-$s,Wr,0),new P($s,Wr,0),new P(-Wr,0,$s),new P(Wr,0,$s),new P(0,$s,-Wr),new P(0,$s,Wr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],GS=new P,Yr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=GS}=r;fd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=km(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fd,pd,md),this._renderer.xr.enabled=gd,e.scissorTest=!1,th(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:di,format:Mn,colorSpace:Ls,depthBuffer:!1},i=Bm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bm(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WS(r)),this._blurMaterial=qS(r,e,t)}return i}_compileMaterial(e){let t=new Xe(this._lodPlanes[0],e);this._renderer.compile(t,dd)}_sceneToCubeUV(e,t,n,i,r){let l=new qt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,d=u.toneMapping;u.getClearColor(Fm),u.toneMapping=Ui,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));let g=new Sn({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),m=new Xe(new Tt,g),f=!1,x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,f=!0):(g.color.copy(Fm),f=!0);for(let y=0;y<6;y++){let v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));let S=this._cubeSize;th(i,v*S,y>2?S:0,S,S),u.setRenderTarget(i),f&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=p,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Hs||e.mapping===Gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=km()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zm());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new Xe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;th(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,dd)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Om[(i-r-1)%Om.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Xe(this._lodPlanes[i],c),p=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Zs-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):Zs;m>Zs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zs}`);let f=[],x=0;for(let T=0;T<Zs;++T){let C=T/g,M=Math.exp(-C*C/2);f.push(M),T===0?x+=M:T<m&&(x+=2*M)}for(let T=0;T<f.length;T++)f[T]=f[T]/x;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:y}=this;p.dTheta.value=_,p.mipInt.value=y-n;let v=this._sizeLods[i],S=3*v*(i>y-qr?i-y+qr:0),b=4*(this._cubeSize-v);th(t,S,b,3*v,2*v),l.setRenderTarget(t),l.render(u,dd)}};function WS(s){let e=[],t=[],n=[],i=s,r=s-qr+1+Um.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-qr?l=Um[a-s+qr-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,_=6,g=3,m=2,f=1,x=new Float32Array(g*_*d),y=new Float32Array(m*_*d),v=new Float32Array(f*_*d);for(let b=0;b<d;b++){let T=b%3*2/3-1,C=b>2?0:-1,M=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];x.set(M,g*_*b),y.set(p,m*_*b);let E=[b,b,b,b,b,b];v.set(E,f*_*b)}let S=new _t;S.setAttribute("position",new xn(x,g)),S.setAttribute("uv",new xn(y,m)),S.setAttribute("faceIndex",new xn(v,f)),e.push(S),i>qr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bm(s,e,t){let n=new dn(s,e,t);return n.texture.mapping=po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function th(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function qS(s,e,t){let n=new Float32Array(Zs),i=new P(0,1,0);return new It({name:"SphericalGaussianBlur",defines:{n:Zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Td(),fragmentShader:`

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
		`,blending:Ut,depthTest:!1,depthWrite:!1})}function zm(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Td(),fragmentShader:`

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
		`,blending:Ut,depthTest:!1,depthWrite:!1})}function km(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ut,depthTest:!1,depthWrite:!1})}function Td(){return`

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
	`}function XS(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===gc||l===_c,h=l===Hs||l===Gs;if(c||h){let u=e.get(o),p=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new Yr(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new Yr(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function YS(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Dr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function $S(s,e,t,n){let i={},r=new WeakMap;function a(u){let p=u.target;p.index!==null&&e.remove(p.index);for(let _ in p.attributes)e.remove(p.attributes[_]);p.removeEventListener("dispose",a),delete i[p.id];let d=r.get(p);d&&(e.remove(d),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(u,p){return i[p.id]===!0||(p.addEventListener("dispose",a),i[p.id]=!0,t.memory.geometries++),p}function l(u){let p=u.attributes;for(let d in p)e.update(p[d],s.ARRAY_BUFFER)}function c(u){let p=[],d=u.index,_=u.attributes.position,g=0;if(d!==null){let x=d.array;g=d.version;for(let y=0,v=x.length;y<v;y+=3){let S=x[y+0],b=x[y+1],T=x[y+2];p.push(S,b,b,T,T,S)}}else if(_!==void 0){let x=_.array;g=_.version;for(let y=0,v=x.length/3-1;y<v;y+=3){let S=y+0,b=y+1,T=y+2;p.push(S,b,b,T,T,S)}}else return;let m=new(ad(p)?Ba:Oa)(p,1);m.version=g;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let p=r.get(u);if(p){let d=u.index;d!==null&&p.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function ZS(s,e,t){let n;function i(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,d){s.drawElements(n,d,r,p*a),t.update(d,n,1)}function c(p,d,_){_!==0&&(s.drawElementsInstanced(n,d,r,p*a,_),t.update(d,n,_))}function h(p,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,_);let m=0;for(let f=0;f<_;f++)m+=d[f];t.update(m,n,1)}function u(p,d,_,g){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)c(p[f]/a,d[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,p,0,g,0,_);let f=0;for(let x=0;x<_;x++)f+=d[x]*g[x];t.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function jS(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function JS(s,e,t){let n=new WeakMap,i=new at;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,p=n.get(o);if(p===void 0||p.count!==u){let M=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",M)};p!==void 0&&p.texture.dispose();let d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],y=0;d===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let v=o.attributes.position.count*y,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let b=new Float32Array(v*S*4*u),T=new Fa(b,v,S,u);T.type=ui,T.needsUpdate=!0;let C=y*4;for(let E=0;E<u;E++){let D=m[E],L=f[E],U=x[E],B=v*S*4*E;for(let k=0;k<D.count;k++){let z=k*C;d===!0&&(i.fromBufferAttribute(D,k),b[B+z+0]=i.x,b[B+z+1]=i.y,b[B+z+2]=i.z,b[B+z+3]=0),_===!0&&(i.fromBufferAttribute(L,k),b[B+z+4]=i.x,b[B+z+5]=i.y,b[B+z+6]=i.z,b[B+z+7]=0),g===!0&&(i.fromBufferAttribute(U,k),b[B+z+8]=i.x,b[B+z+9]=i.y,b[B+z+10]=i.z,b[B+z+11]=U.itemSize===4?i.w:1)}}p={count:u,texture:T,size:new ce(v,S)},n.set(o,p),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];let _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}return{update:r}}function KS(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;i.get(p)!==c&&(p.update(),i.set(p,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var r0=new un,Vm=new Fs(1,1),a0=new Fa,o0=new Pl,l0=new ka,Hm=[],Gm=[],Wm=new Float32Array(16),qm=new Float32Array(9),Xm=new Float32Array(4);function $r(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Hm[i];if(r===void 0&&(r=new Float32Array(i),Hm[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Bt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function zt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function sh(s,e){let t=Gm[e];t===void 0&&(t=new Int32Array(e),Gm[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function QS(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function eM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2fv(this.addr,e),zt(t,e)}}function tM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;s.uniform3fv(this.addr,e),zt(t,e)}}function nM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4fv(this.addr,e),zt(t,e)}}function iM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;Xm.set(n),s.uniformMatrix2fv(this.addr,!1,Xm),zt(t,n)}}function sM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;qm.set(n),s.uniformMatrix3fv(this.addr,!1,qm),zt(t,n)}}function rM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;Wm.set(n),s.uniformMatrix4fv(this.addr,!1,Wm),zt(t,n)}}function aM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function oM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2iv(this.addr,e),zt(t,e)}}function lM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3iv(this.addr,e),zt(t,e)}}function cM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4iv(this.addr,e),zt(t,e)}}function hM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function uM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2uiv(this.addr,e),zt(t,e)}}function dM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3uiv(this.addr,e),zt(t,e)}}function fM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4uiv(this.addr,e),zt(t,e)}}function pM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Vm.compareFunction=id,r=Vm):r=r0,t.setTexture2D(e||r,i)}function mM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||o0,i)}function gM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||l0,i)}function _M(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||a0,i)}function xM(s){switch(s){case 5126:return QS;case 35664:return eM;case 35665:return tM;case 35666:return nM;case 35674:return iM;case 35675:return sM;case 35676:return rM;case 5124:case 35670:return aM;case 35667:case 35671:return oM;case 35668:case 35672:return lM;case 35669:case 35673:return cM;case 5125:return hM;case 36294:return uM;case 36295:return dM;case 36296:return fM;case 35678:case 36198:case 36298:case 36306:case 35682:return pM;case 35679:case 36299:case 36307:return mM;case 35680:case 36300:case 36308:case 36293:return gM;case 36289:case 36303:case 36311:case 36292:return _M}}function vM(s,e){s.uniform1fv(this.addr,e)}function yM(s,e){let t=$r(e,this.size,2);s.uniform2fv(this.addr,t)}function SM(s,e){let t=$r(e,this.size,3);s.uniform3fv(this.addr,t)}function MM(s,e){let t=$r(e,this.size,4);s.uniform4fv(this.addr,t)}function bM(s,e){let t=$r(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function EM(s,e){let t=$r(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function wM(s,e){let t=$r(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function TM(s,e){s.uniform1iv(this.addr,e)}function AM(s,e){s.uniform2iv(this.addr,e)}function CM(s,e){s.uniform3iv(this.addr,e)}function RM(s,e){s.uniform4iv(this.addr,e)}function PM(s,e){s.uniform1uiv(this.addr,e)}function DM(s,e){s.uniform2uiv(this.addr,e)}function IM(s,e){s.uniform3uiv(this.addr,e)}function LM(s,e){s.uniform4uiv(this.addr,e)}function NM(s,e,t){let n=this.cache,i=e.length,r=sh(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||r0,r[a])}function UM(s,e,t){let n=this.cache,i=e.length,r=sh(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||o0,r[a])}function FM(s,e,t){let n=this.cache,i=e.length,r=sh(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||l0,r[a])}function OM(s,e,t){let n=this.cache,i=e.length,r=sh(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||a0,r[a])}function BM(s){switch(s){case 5126:return vM;case 35664:return yM;case 35665:return SM;case 35666:return MM;case 35674:return bM;case 35675:return EM;case 35676:return wM;case 5124:case 35670:return TM;case 35667:case 35671:return AM;case 35668:case 35672:return CM;case 35669:case 35673:return RM;case 5125:return PM;case 36294:return DM;case 36295:return IM;case 36296:return LM;case 35678:case 36198:case 36298:case 36306:case 35682:return NM;case 35679:case 36299:case 36307:return UM;case 35680:case 36300:case 36308:case 36293:return FM;case 36289:case 36303:case 36311:case 36292:return OM}}var xd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xM(t.type)}},vd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=BM(t.type)}},yd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},_d=/(\w+)(\])?(\[|\.)?/g;function Ym(s,e){s.seq.push(e),s.map[e.id]=e}function zM(s,e,t){let n=s.name,i=n.length;for(_d.lastIndex=0;;){let r=_d.exec(n),a=_d.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Ym(t,c===void 0?new xd(o,s,e):new vd(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new yd(o),Ym(t,u)),t=u}}}var Xr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);zM(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function $m(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var kM=37297,VM=0;function HM(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Zm=new We;function GM(s){Je._getMatrix(Zm,Je.workingColorSpace,s);let e=`mat3( ${Zm.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(s)){case La:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function jm(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+HM(s.getShaderSource(e),o)}else return r}function WM(s,e){let t=GM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function qM(s,e){let t;switch(e){case hc:t="Linear";break;case uc:t="Reinhard";break;case dc:t="Cineon";break;case Vr:t="ACESFilmic";break;case pc:t="AgX";break;case mc:t="Neutral";break;case fc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var nh=new P;function XM(){Je.getLuminanceCoefficients(nh);let s=nh.x.toFixed(4),e=nh.y.toFixed(4),t=nh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(So).join(`
`)}function $M(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ZM(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function So(s){return s!==""}function Jm(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Km(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var jM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sd(s){return s.replace(jM,KM)}var JM=new Map;function KM(s,e){let t=Ye[e];if(t===void 0){let n=JM.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sd(t)}var QM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qm(s){return s.replace(QM,eb)}function eb(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function e0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tb(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===qu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ec?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function nb(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Hs:case Gs:e="ENVMAP_TYPE_CUBE";break;case po:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ib(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function sb(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case cc:e="ENVMAP_BLENDING_MULTIPLY";break;case pm:e="ENVMAP_BLENDING_MIX";break;case mm:e="ENVMAP_BLENDING_ADD";break}return e}function rb(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ab(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=tb(t),c=nb(t),h=ib(t),u=sb(t),p=rb(t),d=YM(t),_=$M(r),g=i.createProgram(),m,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(So).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(So).join(`
`),f.length>0&&(f+=`
`)):(m=[e0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(So).join(`
`),f=[e0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ui?qM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,WM("linearToOutputTexel",t.outputColorSpace),XM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(So).join(`
`)),a=Sd(a),a=Jm(a,t),a=Km(a,t),o=Sd(o),o=Jm(o,t),o=Km(o,t),a=Qm(a),o=Qm(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===sd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let y=x+m+a,v=x+f+o,S=$m(i,i.VERTEX_SHADER,y),b=$m(i,i.FRAGMENT_SHADER,v);i.attachShader(g,S),i.attachShader(g,b),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(D){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(g)||"",U=i.getShaderInfoLog(S)||"",B=i.getShaderInfoLog(b)||"",k=L.trim(),z=U.trim(),$=B.trim(),H=!0,ee=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,S,b);else{let se=jm(i,S,"vertex"),de=jm(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+se+`
`+de)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(z===""||$==="")&&(ee=!1);ee&&(D.diagnostics={runnable:H,programLog:k,vertexShader:{log:z,prefix:m},fragmentShader:{log:$,prefix:f}})}i.deleteShader(S),i.deleteShader(b),C=new Xr(i,g),M=ZM(i,g)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(g,kM)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=VM++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=b,this}var ob=0,Md=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new bd(e),t.set(e,n)),n}},bd=class{constructor(e){this.id=ob++,this.code=e,this.usedTimes=0}};function lb(s,e,t,n,i,r,a){let o=new Lr,l=new Md,c=new Set,h=[],u=i.logarithmicDepthBuffer,p=i.vertexTextures,d=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,E,D,L,U){let B=L.fog,k=U.geometry,z=M.isMeshStandardMaterial?L.environment:null,$=(M.isMeshStandardMaterial?t:e).get(M.envMap||z),H=$&&$.mapping===po?$.image.height:null,ee=_[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let se=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,de=se!==void 0?se.length:0,Re=0;k.morphAttributes.position!==void 0&&(Re=1),k.morphAttributes.normal!==void 0&&(Re=2),k.morphAttributes.color!==void 0&&(Re=3);let ze,Be,Ue,Z;if(ee){let rt=_i[ee];ze=rt.vertexShader,Be=rt.fragmentShader}else ze=M.vertexShader,Be=M.fragmentShader,l.update(M),Ue=l.getVertexShaderID(M),Z=l.getFragmentShaderID(M);let K=s.getRenderTarget(),X=s.state.buffers.depth.getReversed(),fe=U.isInstancedMesh===!0,ne=U.isBatchedMesh===!0,be=!!M.map,Qe=!!M.matcap,I=!!$,$e=!!M.aoMap,De=!!M.lightMap,we=!!M.bumpMap,_e=!!M.normalMap,tt=!!M.displacementMap,ye=!!M.emissiveMap,ke=!!M.metalnessMap,Et=!!M.roughnessMap,ft=M.anisotropy>0,R=M.clearcoat>0,w=M.dispersion>0,V=M.iridescence>0,Y=M.sheen>0,te=M.transmission>0,q=ft&&!!M.anisotropyMap,Me=R&&!!M.clearcoatMap,le=R&&!!M.clearcoatNormalMap,ve=R&&!!M.clearcoatRoughnessMap,Ae=V&&!!M.iridescenceMap,ae=V&&!!M.iridescenceThicknessMap,me=Y&&!!M.sheenColorMap,Le=Y&&!!M.sheenRoughnessMap,Ce=!!M.specularMap,ue=!!M.specularColorMap,Fe=!!M.specularIntensityMap,N=te&&!!M.transmissionMap,ie=te&&!!M.thicknessMap,he=!!M.gradientMap,Se=!!M.alphaMap,re=M.alphaTest>0,Q=!!M.alphaHash,Te=!!M.extensions,Ge=Ui;M.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ge=s.toneMapping);let dt={shaderID:ee,shaderType:M.type,shaderName:M.name,vertexShader:ze,fragmentShader:Be,defines:M.defines,customVertexShaderID:Ue,customFragmentShaderID:Z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:ne,batchingColor:ne&&U._colorsTexture!==null,instancing:fe,instancingColor:fe&&U.instanceColor!==null,instancingMorph:fe&&U.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:K===null?s.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ls,alphaToCoverage:!!M.alphaToCoverage,map:be,matcap:Qe,envMap:I,envMapMode:I&&$.mapping,envMapCubeUVHeight:H,aoMap:$e,lightMap:De,bumpMap:we,normalMap:_e,displacementMap:p&&tt,emissiveMap:ye,normalMapObjectSpace:_e&&M.normalMapType===vm,normalMapTangentSpace:_e&&M.normalMapType===yo,metalnessMap:ke,roughnessMap:Et,anisotropy:ft,anisotropyMap:q,clearcoat:R,clearcoatMap:Me,clearcoatNormalMap:le,clearcoatRoughnessMap:ve,dispersion:w,iridescence:V,iridescenceMap:Ae,iridescenceThicknessMap:ae,sheen:Y,sheenColorMap:me,sheenRoughnessMap:Le,specularMap:Ce,specularColorMap:ue,specularIntensityMap:Fe,transmission:te,transmissionMap:N,thicknessMap:ie,gradientMap:he,opaque:M.transparent===!1&&M.blending===Ds&&M.alphaToCoverage===!1,alphaMap:Se,alphaTest:re,alphaHash:Q,combine:M.combine,mapUv:be&&g(M.map.channel),aoMapUv:$e&&g(M.aoMap.channel),lightMapUv:De&&g(M.lightMap.channel),bumpMapUv:we&&g(M.bumpMap.channel),normalMapUv:_e&&g(M.normalMap.channel),displacementMapUv:tt&&g(M.displacementMap.channel),emissiveMapUv:ye&&g(M.emissiveMap.channel),metalnessMapUv:ke&&g(M.metalnessMap.channel),roughnessMapUv:Et&&g(M.roughnessMap.channel),anisotropyMapUv:q&&g(M.anisotropyMap.channel),clearcoatMapUv:Me&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:me&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Le&&g(M.sheenRoughnessMap.channel),specularMapUv:Ce&&g(M.specularMap.channel),specularColorMapUv:ue&&g(M.specularColorMap.channel),specularIntensityMapUv:Fe&&g(M.specularIntensityMap.channel),transmissionMapUv:N&&g(M.transmissionMap.channel),thicknessMapUv:ie&&g(M.thicknessMap.channel),alphaMapUv:Se&&g(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(_e||ft),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!k.attributes.uv&&(be||Se),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:X,skinning:U.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Re,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ge,decodeVideoTexture:be&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===nt,decodeVideoTextureEmissive:ye&&M.emissiveMap.isVideoTexture===!0&&Je.getTransfer(M.emissiveMap.colorSpace)===nt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===nn,flipSided:M.side===Yt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Te&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&M.extensions.multiDraw===!0||ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function f(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let D in M.defines)E.push(D),E.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(x(E,M),y(E,M),E.push(s.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function x(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function y(M,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),E.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){let E=_[M.type],D;if(E){let L=_i[E];D=jn.clone(L.uniforms)}else D=M.uniforms;return D}function S(M,E){let D;for(let L=0,U=h.length;L<U;L++){let B=h[L];if(B.cacheKey===E){D=B,++D.usedTimes;break}}return D===void 0&&(D=new ab(s,E,M,r),h.push(D)),D}function b(M){if(--M.usedTimes===0){let E=h.indexOf(M);h[E]=h[h.length-1],h.pop(),M.destroy()}}function T(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:S,releaseProgram:b,releaseShaderCache:T,programs:h,dispose:C}}function cb(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function hb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function t0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function n0(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,p,d,_,g,m){let f=s[e];return f===void 0?(f={id:u.id,object:u,geometry:p,material:d,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[e]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=d,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=g,f.group=m),e++,f}function o(u,p,d,_,g,m){let f=a(u,p,d,_,g,m);d.transmission>0?n.push(f):d.transparent===!0?i.push(f):t.push(f)}function l(u,p,d,_,g,m){let f=a(u,p,d,_,g,m);d.transmission>0?n.unshift(f):d.transparent===!0?i.unshift(f):t.unshift(f)}function c(u,p){t.length>1&&t.sort(u||hb),n.length>1&&n.sort(p||t0),i.length>1&&i.sort(p||t0)}function h(){for(let u=e,p=s.length;u<p;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function ub(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new n0,s.set(n,[a])):i>=r.length?(a=new n0,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function db(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new He};break;case"SpotLight":t={position:new P,direction:new P,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function fb(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var pb=0;function mb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function gb(s){let e=new db,t=fb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let i=new P,r=new Ze,a=new Ze;function o(c){let h=0,u=0,p=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,_=0,g=0,m=0,f=0,x=0,y=0,v=0,S=0,b=0,T=0;c.sort(mb);for(let M=0,E=c.length;M<E;M++){let D=c[M],L=D.color,U=D.intensity,B=D.distance,k=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=L.r*U,u+=L.g*U,p+=L.b*U;else if(D.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(D.sh.coefficients[z],U);T++}else if(D.isDirectionalLight){let z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let $=D.shadow,H=t.get(D);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=k,n.directionalShadowMatrix[d]=D.shadow.matrix,x++}n.directional[d]=z,d++}else if(D.isSpotLight){let z=e.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(L).multiplyScalar(U),z.distance=B,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,n.spot[g]=z;let $=D.shadow;if(D.map&&(n.spotLightMap[S]=D.map,S++,$.updateMatrices(D),D.castShadow&&b++),n.spotLightMatrix[g]=$.matrix,D.castShadow){let H=t.get(D);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=k,v++}g++}else if(D.isRectAreaLight){let z=e.get(D);z.color.copy(L).multiplyScalar(U),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=z,m++}else if(D.isPointLight){let z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),z.distance=D.distance,z.decay=D.decay,D.castShadow){let $=D.shadow,H=t.get(D);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=k,n.pointShadowMatrix[_]=D.shadow.matrix,y++}n.point[_]=z,_++}else if(D.isHemisphereLight){let z=e.get(D);z.skyColor.copy(D.color).multiplyScalar(U),z.groundColor.copy(D.groundColor).multiplyScalar(U),n.hemi[f]=z,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;let C=n.hash;(C.directionalLength!==d||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==x||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==S||C.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+S-b,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=T,C.directionalLength=d,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=x,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=S,C.numLightProbes=T,n.version=pb++)}function l(c,h){let u=0,p=0,d=0,_=0,g=0,m=h.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){let y=c[f];if(y.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(y.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(y.isRectAreaLight){let v=n.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let v=n.point[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),p++}else if(y.isHemisphereLight){let v=n.hemi[g];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function i0(s){let e=new gb(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function _b(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new i0(s),e.set(i,[o])):r>=a.length?(o=new i0(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var xb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vb=`uniform sampler2D shadow_pass;
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
}`;function yb(s,e,t){let n=new Ur,i=new ce,r=new ce,a=new at,o=new Vl({depthPacking:xm}),l=new Hl,c={},h=t.maxTextureSize,u={[Pi]:Yt,[Yt]:Pi,[nn]:nn},p=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:xb,fragmentShader:vb}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let _=new _t;_.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Xe(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qu;let f=this.type;this.render=function(b,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let M=s.getRenderTarget(),E=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Ut),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let U=f!==gi&&this.type===gi,B=f===gi&&this.type!==gi;for(let k=0,z=b.length;k<z;k++){let $=b[k],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let ee=H.getFrameExtents();if(i.multiply(ee),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ee.x),i.x=r.x*ee.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ee.y),i.y=r.y*ee.y,H.mapSize.y=r.y)),H.map===null||U===!0||B===!0){let de=this.type!==gi?{minFilter:Xt,magFilter:Xt}:{};H.map!==null&&H.map.dispose(),H.map=new dn(i.x,i.y,de),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();let se=H.getViewportCount();for(let de=0;de<se;de++){let Re=H.getViewport(de);a.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),L.viewport(a),H.updateMatrices($,de),n=H.getFrustum(),v(T,C,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===gi&&x(H,C),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(M,E,D)};function x(b,T){let C=e.update(g);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new dn(i.x,i.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(T,null,C,p,g,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(T,null,C,d,g,null)}function y(b,T,C,M){let E=null,D=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)E=D;else if(E=C.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let L=E.uuid,U=T.uuid,B=c[L];B===void 0&&(B={},c[L]=B);let k=B[U];k===void 0&&(k=E.clone(),B[U]=k,T.addEventListener("dispose",S)),E=k}if(E.visible=T.visible,E.wireframe=T.wireframe,M===gi?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:u[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,C.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let L=s.properties.get(E);L.light=C}return E}function v(b,T,C,M,E){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===gi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);let U=e.update(b),B=b.material;if(Array.isArray(B)){let k=U.groups;for(let z=0,$=k.length;z<$;z++){let H=k[z],ee=B[H.materialIndex];if(ee&&ee.visible){let se=y(b,ee,M,E);b.onBeforeShadow(s,b,T,C,U,se,H),s.renderBufferDirect(C,null,U,se,b,H),b.onAfterShadow(s,b,T,C,U,se,H)}}}else if(B.visible){let k=y(b,B,M,E);b.onBeforeShadow(s,b,T,C,U,k,null),s.renderBufferDirect(C,null,U,k,b,null),b.onAfterShadow(s,b,T,C,U,k,null)}}let L=b.children;for(let U=0,B=L.length;U<B;U++)v(L[U],T,C,M,E)}function S(b){b.target.removeEventListener("dispose",S);for(let C in c){let M=c[C],E=b.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}var Sb={[nc]:ic,[sc]:oc,[rc]:lc,[Is]:ac,[ic]:nc,[oc]:sc,[lc]:rc,[ac]:Is};function Mb(s,e){function t(){let N=!1,ie=new at,he=null,Se=new at(0,0,0,0);return{setMask:function(re){he!==re&&!N&&(s.colorMask(re,re,re,re),he=re)},setLocked:function(re){N=re},setClear:function(re,Q,Te,Ge,dt){dt===!0&&(re*=Ge,Q*=Ge,Te*=Ge),ie.set(re,Q,Te,Ge),Se.equals(ie)===!1&&(s.clearColor(re,Q,Te,Ge),Se.copy(ie))},reset:function(){N=!1,he=null,Se.set(-1,0,0,0)}}}function n(){let N=!1,ie=!1,he=null,Se=null,re=null;return{setReversed:function(Q){if(ie!==Q){let Te=e.get("EXT_clip_control");Q?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),ie=Q;let Ge=re;re=null,this.setClear(Ge)}},getReversed:function(){return ie},setTest:function(Q){Q?K(s.DEPTH_TEST):X(s.DEPTH_TEST)},setMask:function(Q){he!==Q&&!N&&(s.depthMask(Q),he=Q)},setFunc:function(Q){if(ie&&(Q=Sb[Q]),Se!==Q){switch(Q){case nc:s.depthFunc(s.NEVER);break;case ic:s.depthFunc(s.ALWAYS);break;case sc:s.depthFunc(s.LESS);break;case Is:s.depthFunc(s.LEQUAL);break;case rc:s.depthFunc(s.EQUAL);break;case ac:s.depthFunc(s.GEQUAL);break;case oc:s.depthFunc(s.GREATER);break;case lc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Se=Q}},setLocked:function(Q){N=Q},setClear:function(Q){re!==Q&&(ie&&(Q=1-Q),s.clearDepth(Q),re=Q)},reset:function(){N=!1,he=null,Se=null,re=null,ie=!1}}}function i(){let N=!1,ie=null,he=null,Se=null,re=null,Q=null,Te=null,Ge=null,dt=null;return{setTest:function(rt){N||(rt?K(s.STENCIL_TEST):X(s.STENCIL_TEST))},setMask:function(rt){ie!==rt&&!N&&(s.stencilMask(rt),ie=rt)},setFunc:function(rt,bi,fi){(he!==rt||Se!==bi||re!==fi)&&(s.stencilFunc(rt,bi,fi),he=rt,Se=bi,re=fi)},setOp:function(rt,bi,fi){(Q!==rt||Te!==bi||Ge!==fi)&&(s.stencilOp(rt,bi,fi),Q=rt,Te=bi,Ge=fi)},setLocked:function(rt){N=rt},setClear:function(rt){dt!==rt&&(s.clearStencil(rt),dt=rt)},reset:function(){N=!1,ie=null,he=null,Se=null,re=null,Q=null,Te=null,Ge=null,dt=null}}}let r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},p=new WeakMap,d=[],_=null,g=!1,m=null,f=null,x=null,y=null,v=null,S=null,b=null,T=new He(0,0,0),C=0,M=!1,E=null,D=null,L=null,U=null,B=null,k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,$=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=$>=2);let ee=null,se={},de=s.getParameter(s.SCISSOR_BOX),Re=s.getParameter(s.VIEWPORT),ze=new at().fromArray(de),Be=new at().fromArray(Re);function Ue(N,ie,he,Se){let re=new Uint8Array(4),Q=s.createTexture();s.bindTexture(N,Q),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Te=0;Te<he;Te++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(ie,0,s.RGBA,1,1,Se,0,s.RGBA,s.UNSIGNED_BYTE,re):s.texImage2D(ie+Te,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,re);return Q}let Z={};Z[s.TEXTURE_2D]=Ue(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=Ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=Ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=Ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(s.DEPTH_TEST),a.setFunc(Is),we(!1),_e(Wu),K(s.CULL_FACE),$e(Ut);function K(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function X(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function fe(N,ie){return u[N]!==ie?(s.bindFramebuffer(N,ie),u[N]=ie,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ie),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ie),!0):!1}function ne(N,ie){let he=d,Se=!1;if(N){he=p.get(ie),he===void 0&&(he=[],p.set(ie,he));let re=N.textures;if(he.length!==re.length||he[0]!==s.COLOR_ATTACHMENT0){for(let Q=0,Te=re.length;Q<Te;Q++)he[Q]=s.COLOR_ATTACHMENT0+Q;he.length=re.length,Se=!0}}else he[0]!==s.BACK&&(he[0]=s.BACK,Se=!0);Se&&s.drawBuffers(he)}function be(N){return _!==N?(s.useProgram(N),_=N,!0):!1}let Qe={[Un]:s.FUNC_ADD,[em]:s.FUNC_SUBTRACT,[tm]:s.FUNC_REVERSE_SUBTRACT};Qe[nm]=s.MIN,Qe[im]=s.MAX;let I={[Vs]:s.ZERO,[sm]:s.ONE,[rm]:s.SRC_COLOR,[El]:s.SRC_ALPHA,[cm]:s.SRC_ALPHA_SATURATE,[fo]:s.DST_COLOR,[uo]:s.DST_ALPHA,[am]:s.ONE_MINUS_SRC_COLOR,[wl]:s.ONE_MINUS_SRC_ALPHA,[lm]:s.ONE_MINUS_DST_COLOR,[om]:s.ONE_MINUS_DST_ALPHA,[hm]:s.CONSTANT_COLOR,[um]:s.ONE_MINUS_CONSTANT_COLOR,[dm]:s.CONSTANT_ALPHA,[fm]:s.ONE_MINUS_CONSTANT_ALPHA};function $e(N,ie,he,Se,re,Q,Te,Ge,dt,rt){if(N===Ut){g===!0&&(X(s.BLEND),g=!1);return}if(g===!1&&(K(s.BLEND),g=!0),N!==tc){if(N!==m||rt!==M){if((f!==Un||v!==Un)&&(s.blendEquation(s.FUNC_ADD),f=Un,v=Un),rt)switch(N){case Ds:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xu:s.blendFunc(s.ONE,s.ONE);break;case Yu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $u:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ds:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xu:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Yu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $u:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}x=null,y=null,S=null,b=null,T.set(0,0,0),C=0,m=N,M=rt}return}re=re||ie,Q=Q||he,Te=Te||Se,(ie!==f||re!==v)&&(s.blendEquationSeparate(Qe[ie],Qe[re]),f=ie,v=re),(he!==x||Se!==y||Q!==S||Te!==b)&&(s.blendFuncSeparate(I[he],I[Se],I[Q],I[Te]),x=he,y=Se,S=Q,b=Te),(Ge.equals(T)===!1||dt!==C)&&(s.blendColor(Ge.r,Ge.g,Ge.b,dt),T.copy(Ge),C=dt),m=N,M=!1}function De(N,ie){N.side===nn?X(s.CULL_FACE):K(s.CULL_FACE);let he=N.side===Yt;ie&&(he=!he),we(he),N.blending===Ds&&N.transparent===!1?$e(Ut):$e(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let Se=N.stencilWrite;o.setTest(Se),Se&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ye(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?K(s.SAMPLE_ALPHA_TO_COVERAGE):X(s.SAMPLE_ALPHA_TO_COVERAGE)}function we(N){E!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),E=N)}function _e(N){N!==Kp?(K(s.CULL_FACE),N!==D&&(N===Wu?s.cullFace(s.BACK):N===Qp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):X(s.CULL_FACE),D=N}function tt(N){N!==L&&(z&&s.lineWidth(N),L=N)}function ye(N,ie,he){N?(K(s.POLYGON_OFFSET_FILL),(U!==ie||B!==he)&&(s.polygonOffset(ie,he),U=ie,B=he)):X(s.POLYGON_OFFSET_FILL)}function ke(N){N?K(s.SCISSOR_TEST):X(s.SCISSOR_TEST)}function Et(N){N===void 0&&(N=s.TEXTURE0+k-1),ee!==N&&(s.activeTexture(N),ee=N)}function ft(N,ie,he){he===void 0&&(ee===null?he=s.TEXTURE0+k-1:he=ee);let Se=se[he];Se===void 0&&(Se={type:void 0,texture:void 0},se[he]=Se),(Se.type!==N||Se.texture!==ie)&&(ee!==he&&(s.activeTexture(he),ee=he),s.bindTexture(N,ie||Z[N]),Se.type=N,Se.texture=ie)}function R(){let N=se[ee];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function V(){try{s.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{s.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{s.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{s.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{s.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{s.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(){try{s.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{s.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(N){ze.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),ze.copy(N))}function Le(N){Be.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),Be.copy(N))}function Ce(N,ie){let he=c.get(ie);he===void 0&&(he=new WeakMap,c.set(ie,he));let Se=he.get(N);Se===void 0&&(Se=s.getUniformBlockIndex(ie,N.name),he.set(N,Se))}function ue(N,ie){let Se=c.get(ie).get(N);l.get(ie)!==Se&&(s.uniformBlockBinding(ie,Se,N.__bindingPointIndex),l.set(ie,Se))}function Fe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ee=null,se={},u={},p=new WeakMap,d=[],_=null,g=!1,m=null,f=null,x=null,y=null,v=null,S=null,b=null,T=new He(0,0,0),C=0,M=!1,E=null,D=null,L=null,U=null,B=null,ze.set(0,0,s.canvas.width,s.canvas.height),Be.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:X,bindFramebuffer:fe,drawBuffers:ne,useProgram:be,setBlending:$e,setMaterial:De,setFlipSided:we,setCullFace:_e,setLineWidth:tt,setPolygonOffset:ye,setScissorTest:ke,activeTexture:Et,bindTexture:ft,unbindTexture:R,compressedTexImage2D:w,compressedTexImage3D:V,texImage2D:Ae,texImage3D:ae,updateUBOMapping:Ce,uniformBlockBinding:ue,texStorage2D:le,texStorage3D:ve,texSubImage2D:Y,texSubImage3D:te,compressedTexSubImage2D:q,compressedTexSubImage3D:Me,scissor:me,viewport:Le,reset:Fe}}function bb(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,h=new WeakMap,u,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,w){return d?new OffscreenCanvas(R,w):Ua("canvas")}function g(R,w,V){let Y=1,te=ft(R);if((te.width>V||te.height>V)&&(Y=V/Math.max(te.width,te.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let q=Math.floor(Y*te.width),Me=Math.floor(Y*te.height);u===void 0&&(u=_(q,Me));let le=w?_(q,Me):u;return le.width=q,le.height=Me,le.getContext("2d").drawImage(R,0,0,q,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+q+"x"+Me+")."),le}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){s.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(R,w,V,Y,te=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=w;if(w===s.RED&&(V===s.FLOAT&&(q=s.R32F),V===s.HALF_FLOAT&&(q=s.R16F),V===s.UNSIGNED_BYTE&&(q=s.R8)),w===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(q=s.R8UI),V===s.UNSIGNED_SHORT&&(q=s.R16UI),V===s.UNSIGNED_INT&&(q=s.R32UI),V===s.BYTE&&(q=s.R8I),V===s.SHORT&&(q=s.R16I),V===s.INT&&(q=s.R32I)),w===s.RG&&(V===s.FLOAT&&(q=s.RG32F),V===s.HALF_FLOAT&&(q=s.RG16F),V===s.UNSIGNED_BYTE&&(q=s.RG8)),w===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(q=s.RG8UI),V===s.UNSIGNED_SHORT&&(q=s.RG16UI),V===s.UNSIGNED_INT&&(q=s.RG32UI),V===s.BYTE&&(q=s.RG8I),V===s.SHORT&&(q=s.RG16I),V===s.INT&&(q=s.RG32I)),w===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(q=s.RGB8UI),V===s.UNSIGNED_SHORT&&(q=s.RGB16UI),V===s.UNSIGNED_INT&&(q=s.RGB32UI),V===s.BYTE&&(q=s.RGB8I),V===s.SHORT&&(q=s.RGB16I),V===s.INT&&(q=s.RGB32I)),w===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),V===s.UNSIGNED_INT&&(q=s.RGBA32UI),V===s.BYTE&&(q=s.RGBA8I),V===s.SHORT&&(q=s.RGBA16I),V===s.INT&&(q=s.RGBA32I)),w===s.RGB&&(V===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),V===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),w===s.RGBA){let Me=te?La:Je.getTransfer(Y);V===s.FLOAT&&(q=s.RGBA32F),V===s.HALF_FLOAT&&(q=s.RGBA16F),V===s.UNSIGNED_BYTE&&(q=Me===nt?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function v(R,w){let V;return R?w===null||w===as||w===os?V=s.DEPTH24_STENCIL8:w===ui?V=s.DEPTH32F_STENCIL8:w===Hr&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===as||w===os?V=s.DEPTH_COMPONENT24:w===ui?V=s.DEPTH_COMPONENT32F:w===Hr&&(V=s.DEPTH_COMPONENT16),V}function S(R,w){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Xt&&R.minFilter!==ci?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function b(R){let w=R.target;w.removeEventListener("dispose",b),C(w),w.isVideoTexture&&h.delete(w)}function T(R){let w=R.target;w.removeEventListener("dispose",T),E(w)}function C(R){let w=n.get(R);if(w.__webglInit===void 0)return;let V=R.source,Y=p.get(V);if(Y){let te=Y[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&M(R),Object.keys(Y).length===0&&p.delete(V)}n.remove(R)}function M(R){let w=n.get(R);s.deleteTexture(w.__webglTexture);let V=R.source,Y=p.get(V);delete Y[w.__cacheKey],a.memory.textures--}function E(R){let w=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(w.__webglFramebuffer[Y]))for(let te=0;te<w.__webglFramebuffer[Y].length;te++)s.deleteFramebuffer(w.__webglFramebuffer[Y][te]);else s.deleteFramebuffer(w.__webglFramebuffer[Y]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[Y])}else{if(Array.isArray(w.__webglFramebuffer))for(let Y=0;Y<w.__webglFramebuffer.length;Y++)s.deleteFramebuffer(w.__webglFramebuffer[Y]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Y=0;Y<w.__webglColorRenderbuffer.length;Y++)w.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[Y]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let V=R.textures;for(let Y=0,te=V.length;Y<te;Y++){let q=n.get(V[Y]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(V[Y])}n.remove(R)}let D=0;function L(){D=0}function U(){let R=D;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),D+=1,R}function B(R){let w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function k(R,w){let V=n.get(R);if(R.isVideoTexture&&ke(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){let Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(V,R,w);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+w)}function z(R,w){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){Z(V,R,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+w)}function $(R,w){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){Z(V,R,w);return}t.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+w)}function H(R,w){let V=n.get(R);if(R.version>0&&V.__version!==R.version){K(V,R,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+w)}let ee={[$n]:s.REPEAT,[Ki]:s.CLAMP_TO_EDGE,[Tl]:s.MIRRORED_REPEAT},se={[Xt]:s.NEAREST,[gm]:s.NEAREST_MIPMAP_NEAREST,[mo]:s.NEAREST_MIPMAP_LINEAR,[ci]:s.LINEAR,[xc]:s.LINEAR_MIPMAP_NEAREST,[rs]:s.LINEAR_MIPMAP_LINEAR},de={[ym]:s.NEVER,[Tm]:s.ALWAYS,[Sm]:s.LESS,[id]:s.LEQUAL,[Mm]:s.EQUAL,[wm]:s.GEQUAL,[bm]:s.GREATER,[Em]:s.NOTEQUAL};function Re(R,w){if(w.type===ui&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===ci||w.magFilter===xc||w.magFilter===mo||w.magFilter===rs||w.minFilter===ci||w.minFilter===xc||w.minFilter===mo||w.minFilter===rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,ee[w.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,ee[w.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,ee[w.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,se[w.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,se[w.minFilter]),w.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,de[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Xt||w.minFilter!==mo&&w.minFilter!==rs||w.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ze(R,w){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",b));let Y=w.source,te=p.get(Y);te===void 0&&(te={},p.set(Y,te));let q=B(w);if(q!==R.__cacheKey){te[q]===void 0&&(te[q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),te[q].usedTimes++;let Me=te[R.__cacheKey];Me!==void 0&&(te[R.__cacheKey].usedTimes--,Me.usedTimes===0&&M(w)),R.__cacheKey=q,R.__webglTexture=te[q].texture}return V}function Be(R,w,V){return Math.floor(Math.floor(R/V)/w)}function Ue(R,w,V,Y){let q=R.updateRanges;if(q.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,V,Y,w.data);else{q.sort((ae,me)=>ae.start-me.start);let Me=0;for(let ae=1;ae<q.length;ae++){let me=q[Me],Le=q[ae],Ce=me.start+me.count,ue=Be(Le.start,w.width,4),Fe=Be(me.start,w.width,4);Le.start<=Ce+1&&ue===Fe&&Be(Le.start+Le.count-1,w.width,4)===ue?me.count=Math.max(me.count,Le.start+Le.count-me.start):(++Me,q[Me]=Le)}q.length=Me+1;let le=s.getParameter(s.UNPACK_ROW_LENGTH),ve=s.getParameter(s.UNPACK_SKIP_PIXELS),Ae=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let ae=0,me=q.length;ae<me;ae++){let Le=q[ae],Ce=Math.floor(Le.start/4),ue=Math.ceil(Le.count/4),Fe=Ce%w.width,N=Math.floor(Ce/w.width),ie=ue,he=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Fe),s.pixelStorei(s.UNPACK_SKIP_ROWS,N),t.texSubImage2D(s.TEXTURE_2D,0,Fe,N,ie,he,V,Y,w.data)}R.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,le),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ve),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ae)}}function Z(R,w,V){let Y=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Y=s.TEXTURE_3D);let te=ze(R,w),q=w.source;t.bindTexture(Y,R.__webglTexture,s.TEXTURE0+V);let Me=n.get(q);if(q.version!==Me.__version||te===!0){t.activeTexture(s.TEXTURE0+V);let le=Je.getPrimaries(Je.workingColorSpace),ve=w.colorSpace===Fi?null:Je.getPrimaries(w.colorSpace),Ae=w.colorSpace===Fi||le===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ae=g(w.image,!1,i.maxTextureSize);ae=Et(w,ae);let me=r.convert(w.format,w.colorSpace),Le=r.convert(w.type),Ce=y(w.internalFormat,me,Le,w.colorSpace,w.isVideoTexture);Re(Y,w);let ue,Fe=w.mipmaps,N=w.isVideoTexture!==!0,ie=Me.__version===void 0||te===!0,he=q.dataReady,Se=S(w,ae);if(w.isDepthTexture)Ce=v(w.format===ls,w.type),ie&&(N?t.texStorage2D(s.TEXTURE_2D,1,Ce,ae.width,ae.height):t.texImage2D(s.TEXTURE_2D,0,Ce,ae.width,ae.height,0,me,Le,null));else if(w.isDataTexture)if(Fe.length>0){N&&ie&&t.texStorage2D(s.TEXTURE_2D,Se,Ce,Fe[0].width,Fe[0].height);for(let re=0,Q=Fe.length;re<Q;re++)ue=Fe[re],N?he&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,ue.width,ue.height,me,Le,ue.data):t.texImage2D(s.TEXTURE_2D,re,Ce,ue.width,ue.height,0,me,Le,ue.data);w.generateMipmaps=!1}else N?(ie&&t.texStorage2D(s.TEXTURE_2D,Se,Ce,ae.width,ae.height),he&&Ue(w,ae,me,Le)):t.texImage2D(s.TEXTURE_2D,0,Ce,ae.width,ae.height,0,me,Le,ae.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){N&&ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Se,Ce,Fe[0].width,Fe[0].height,ae.depth);for(let re=0,Q=Fe.length;re<Q;re++)if(ue=Fe[re],w.format!==Mn)if(me!==null)if(N){if(he)if(w.layerUpdates.size>0){let Te=ud(ue.width,ue.height,w.format,w.type);for(let Ge of w.layerUpdates){let dt=ue.data.subarray(Ge*Te/ue.data.BYTES_PER_ELEMENT,(Ge+1)*Te/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,Ge,ue.width,ue.height,1,me,dt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,ue.width,ue.height,ae.depth,me,ue.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,Ce,ue.width,ue.height,ae.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?he&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,ue.width,ue.height,ae.depth,me,Le,ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,re,Ce,ue.width,ue.height,ae.depth,0,me,Le,ue.data)}else{N&&ie&&t.texStorage2D(s.TEXTURE_2D,Se,Ce,Fe[0].width,Fe[0].height);for(let re=0,Q=Fe.length;re<Q;re++)ue=Fe[re],w.format!==Mn?me!==null?N?he&&t.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,ue.width,ue.height,me,ue.data):t.compressedTexImage2D(s.TEXTURE_2D,re,Ce,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?he&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,ue.width,ue.height,me,Le,ue.data):t.texImage2D(s.TEXTURE_2D,re,Ce,ue.width,ue.height,0,me,Le,ue.data)}else if(w.isDataArrayTexture)if(N){if(ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Se,Ce,ae.width,ae.height,ae.depth),he)if(w.layerUpdates.size>0){let re=ud(ae.width,ae.height,w.format,w.type);for(let Q of w.layerUpdates){let Te=ae.data.subarray(Q*re/ae.data.BYTES_PER_ELEMENT,(Q+1)*re/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,ae.width,ae.height,1,me,Le,Te)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,me,Le,ae.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ce,ae.width,ae.height,ae.depth,0,me,Le,ae.data);else if(w.isData3DTexture)N?(ie&&t.texStorage3D(s.TEXTURE_3D,Se,Ce,ae.width,ae.height,ae.depth),he&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,me,Le,ae.data)):t.texImage3D(s.TEXTURE_3D,0,Ce,ae.width,ae.height,ae.depth,0,me,Le,ae.data);else if(w.isFramebufferTexture){if(ie)if(N)t.texStorage2D(s.TEXTURE_2D,Se,Ce,ae.width,ae.height);else{let re=ae.width,Q=ae.height;for(let Te=0;Te<Se;Te++)t.texImage2D(s.TEXTURE_2D,Te,Ce,re,Q,0,me,Le,null),re>>=1,Q>>=1}}else if(Fe.length>0){if(N&&ie){let re=ft(Fe[0]);t.texStorage2D(s.TEXTURE_2D,Se,Ce,re.width,re.height)}for(let re=0,Q=Fe.length;re<Q;re++)ue=Fe[re],N?he&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,me,Le,ue):t.texImage2D(s.TEXTURE_2D,re,Ce,me,Le,ue);w.generateMipmaps=!1}else if(N){if(ie){let re=ft(ae);t.texStorage2D(s.TEXTURE_2D,Se,Ce,re.width,re.height)}he&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me,Le,ae)}else t.texImage2D(s.TEXTURE_2D,0,Ce,me,Le,ae);m(w)&&f(Y),Me.__version=q.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function K(R,w,V){if(w.image.length!==6)return;let Y=ze(R,w),te=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+V);let q=n.get(te);if(te.version!==q.__version||Y===!0){t.activeTexture(s.TEXTURE0+V);let Me=Je.getPrimaries(Je.workingColorSpace),le=w.colorSpace===Fi?null:Je.getPrimaries(w.colorSpace),ve=w.colorSpace===Fi||Me===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Ae=w.isCompressedTexture||w.image[0].isCompressedTexture,ae=w.image[0]&&w.image[0].isDataTexture,me=[];for(let Q=0;Q<6;Q++)!Ae&&!ae?me[Q]=g(w.image[Q],!0,i.maxCubemapSize):me[Q]=ae?w.image[Q].image:w.image[Q],me[Q]=Et(w,me[Q]);let Le=me[0],Ce=r.convert(w.format,w.colorSpace),ue=r.convert(w.type),Fe=y(w.internalFormat,Ce,ue,w.colorSpace),N=w.isVideoTexture!==!0,ie=q.__version===void 0||Y===!0,he=te.dataReady,Se=S(w,Le);Re(s.TEXTURE_CUBE_MAP,w);let re;if(Ae){N&&ie&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Se,Fe,Le.width,Le.height);for(let Q=0;Q<6;Q++){re=me[Q].mipmaps;for(let Te=0;Te<re.length;Te++){let Ge=re[Te];w.format!==Mn?Ce!==null?N?he&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,0,0,Ge.width,Ge.height,Ce,Ge.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,Fe,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,0,0,Ge.width,Ge.height,Ce,ue,Ge.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,Fe,Ge.width,Ge.height,0,Ce,ue,Ge.data)}}}else{if(re=w.mipmaps,N&&ie){re.length>0&&Se++;let Q=ft(me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Se,Fe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ae){N?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,me[Q].width,me[Q].height,Ce,ue,me[Q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Fe,me[Q].width,me[Q].height,0,Ce,ue,me[Q].data);for(let Te=0;Te<re.length;Te++){let dt=re[Te].image[Q].image;N?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,0,0,dt.width,dt.height,Ce,ue,dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,Fe,dt.width,dt.height,0,Ce,ue,dt.data)}}else{N?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ce,ue,me[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Fe,Ce,ue,me[Q]);for(let Te=0;Te<re.length;Te++){let Ge=re[Te];N?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,0,0,Ce,ue,Ge.image[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,Fe,Ce,ue,Ge.image[Q])}}}m(w)&&f(s.TEXTURE_CUBE_MAP),q.__version=te.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function X(R,w,V,Y,te,q){let Me=r.convert(V.format,V.colorSpace),le=r.convert(V.type),ve=y(V.internalFormat,Me,le,V.colorSpace),Ae=n.get(w),ae=n.get(V);if(ae.__renderTarget=w,!Ae.__hasExternalTextures){let me=Math.max(1,w.width>>q),Le=Math.max(1,w.height>>q);te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,q,ve,me,Le,w.depth,0,Me,le,null):t.texImage2D(te,q,ve,me,Le,0,Me,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),ye(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,te,ae.__webglTexture,0,tt(w)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,te,ae.__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function fe(R,w,V){if(s.bindRenderbuffer(s.RENDERBUFFER,R),w.depthBuffer){let Y=w.depthTexture,te=Y&&Y.isDepthTexture?Y.type:null,q=v(w.stencilBuffer,te),Me=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=tt(w);ye(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,le,q,w.width,w.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,le,q,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,q,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,R)}else{let Y=w.textures;for(let te=0;te<Y.length;te++){let q=Y[te],Me=r.convert(q.format,q.colorSpace),le=r.convert(q.type),ve=y(q.internalFormat,Me,le,q.colorSpace),Ae=tt(w);V&&ye(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,ve,w.width,w.height):ye(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,ve,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ve,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ne(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(w.depthTexture);Y.__renderTarget=w,(!Y.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),k(w.depthTexture,0);let te=Y.__webglTexture,q=tt(w);if(w.depthTexture.format===Rr)ye(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0);else if(w.depthTexture.format===ls)ye(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function be(R){let w=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){let Y=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Y){let te=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Y.removeEventListener("dispose",te)};Y.addEventListener("dispose",te),w.__depthDisposeCallback=te}w.__boundDepthTexture=Y}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");let Y=R.texture.mipmaps;Y&&Y.length>0?ne(w.__webglFramebuffer[0],R):ne(w.__webglFramebuffer,R)}else if(V){w.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[Y]),w.__webglDepthbuffer[Y]===void 0)w.__webglDepthbuffer[Y]=s.createRenderbuffer(),fe(w.__webglDepthbuffer[Y],R,!1);else{let te=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=w.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,q)}}else{let Y=R.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),fe(w.__webglDepthbuffer,R,!1);else{let te=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,q)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Qe(R,w,V){let Y=n.get(R);w!==void 0&&X(Y.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&be(R)}function I(R){let w=R.texture,V=n.get(R),Y=n.get(w);R.addEventListener("dispose",T);let te=R.textures,q=R.isWebGLCubeRenderTarget===!0,Me=te.length>1;if(Me||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=w.version,a.memory.textures++),q){V.__webglFramebuffer=[];for(let le=0;le<6;le++)if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[le]=[];for(let ve=0;ve<w.mipmaps.length;ve++)V.__webglFramebuffer[le][ve]=s.createFramebuffer()}else V.__webglFramebuffer[le]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let le=0;le<w.mipmaps.length;le++)V.__webglFramebuffer[le]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(Me)for(let le=0,ve=te.length;le<ve;le++){let Ae=n.get(te[le]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&ye(R)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let le=0;le<te.length;le++){let ve=te[le];V.__webglColorRenderbuffer[le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[le]);let Ae=r.convert(ve.format,ve.colorSpace),ae=r.convert(ve.type),me=y(ve.internalFormat,Ae,ae,ve.colorSpace,R.isXRRenderTarget===!0),Le=tt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,me,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,V.__webglColorRenderbuffer[le])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),fe(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Re(s.TEXTURE_CUBE_MAP,w);for(let le=0;le<6;le++)if(w.mipmaps&&w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)X(V.__webglFramebuffer[le][ve],R,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve);else X(V.__webglFramebuffer[le],R,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(w)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let le=0,ve=te.length;le<ve;le++){let Ae=te[le],ae=n.get(Ae),me=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(me,ae.__webglTexture),Re(me,Ae),X(V.__webglFramebuffer,R,Ae,s.COLOR_ATTACHMENT0+le,me,0),m(Ae)&&f(me)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,Y.__webglTexture),Re(le,w),w.mipmaps&&w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)X(V.__webglFramebuffer[ve],R,w,s.COLOR_ATTACHMENT0,le,ve);else X(V.__webglFramebuffer,R,w,s.COLOR_ATTACHMENT0,le,0);m(w)&&f(le),t.unbindTexture()}R.depthBuffer&&be(R)}function $e(R){let w=R.textures;for(let V=0,Y=w.length;V<Y;V++){let te=w[V];if(m(te)){let q=x(R),Me=n.get(te).__webglTexture;t.bindTexture(q,Me),f(q),t.unbindTexture()}}}let De=[],we=[];function _e(R){if(R.samples>0){if(ye(R)===!1){let w=R.textures,V=R.width,Y=R.height,te=s.COLOR_BUFFER_BIT,q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=n.get(R),le=w.length>1;if(le)for(let Ae=0;Ae<w.length;Ae++)t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);let ve=R.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ae=0;Ae<w.length;Ae++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Me.__webglColorRenderbuffer[Ae]);let ae=n.get(w[Ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ae,0)}s.blitFramebuffer(0,0,V,Y,0,0,V,Y,te,s.NEAREST),l===!0&&(De.length=0,we.length=0,De.push(s.COLOR_ATTACHMENT0+Ae),R.depthBuffer&&R.resolveDepthBuffer===!1&&(De.push(q),we.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,we)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),le)for(let Ae=0;Ae<w.length;Ae++){t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Me.__webglColorRenderbuffer[Ae]);let ae=n.get(w[Ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,ae,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let w=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function tt(R){return Math.min(i.maxSamples,R.samples)}function ye(R){let w=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ke(R){let w=a.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function Et(R,w){let V=R.colorSpace,Y=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==Ls&&V!==Fi&&(Je.getTransfer(V)===nt?(Y!==Mn||te!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}function ft(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.setTexture2D=k,this.setTexture2DArray=z,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=Qe,this.setupRenderTarget=I,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=X,this.useMultisampledRTT=ye}function Eb(s,e){function t(n,i=Fi){let r,a=Je.getTransfer(i);if(n===zn)return s.UNSIGNED_BYTE;if(n===yc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Sc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ku)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Qu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===ju)return s.BYTE;if(n===Ju)return s.SHORT;if(n===Hr)return s.UNSIGNED_SHORT;if(n===vc)return s.INT;if(n===as)return s.UNSIGNED_INT;if(n===ui)return s.FLOAT;if(n===di)return s.HALF_FLOAT;if(n===ed)return s.ALPHA;if(n===td)return s.RGB;if(n===Mn)return s.RGBA;if(n===Rr)return s.DEPTH_COMPONENT;if(n===ls)return s.DEPTH_STENCIL;if(n===Mc)return s.RED;if(n===bc)return s.RED_INTEGER;if(n===nd)return s.RG;if(n===Ec)return s.RG_INTEGER;if(n===wc)return s.RGBA_INTEGER;if(n===go||n===_o||n===xo||n===vo)if(a===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===go)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===go)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tc||n===Ac||n===Cc||n===Rc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ac)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pc||n===Dc||n===Ic)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Pc||n===Dc)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ic)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lc||n===Nc||n===Uc||n===Fc||n===Oc||n===Bc||n===zc||n===kc||n===Vc||n===Hc||n===Gc||n===Wc||n===qc||n===Xc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Lc)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nc)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uc)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fc)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oc)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bc)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zc)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kc)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vc)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hc)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gc)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wc)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qc)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xc)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yc||n===$c||n===Zc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Yc)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$c)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jc||n===Jc||n===Kc||n===Qc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===jc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Jc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var wb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tb=`
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

}`,Ed=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ga(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new It({vertexShader:wb,fragmentShader:Tb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xe(new On(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wd=class extends mi{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,p=null,d=null,_=null,g=typeof XRWebGLBinding<"u",m=new Ed,f={},x=t.getContextAttributes(),y=null,v=null,S=[],b=[],T=new ce,C=null,M=new qt;M.viewport=new at;let E=new qt;E.viewport=new at;let D=[M,E],L=new Ql,U=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let K=S[Z];return K===void 0&&(K=new Nr,S[Z]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Z){let K=S[Z];return K===void 0&&(K=new Nr,S[Z]=K),K.getGripSpace()},this.getHand=function(Z){let K=S[Z];return K===void 0&&(K=new Nr,S[Z]=K),K.getHandSpace()};function k(Z){let K=b.indexOf(Z.inputSource);if(K===-1)return;let X=S[K];X!==void 0&&(X.update(Z.inputSource,Z.frame,c||a),X.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",$);for(let Z=0;Z<S.length;Z++){let K=b[Z];K!==null&&(b[Z]=null,S[Z].disconnect(K))}U=null,B=null,m.reset();for(let Z in f)delete f[Z];e.setRenderTarget(y),d=null,p=null,u=null,i=null,v=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",z),i.addEventListener("inputsourceschange",$),x.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(T),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let X=null,fe=null,ne=null;x.depth&&(ne=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=x.stencil?ls:Rr,fe=x.stencil?os:as);let be={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:r};u=this.getBinding(),p=u.createProjectionLayer(be),i.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),v=new dn(p.textureWidth,p.textureHeight,{format:Mn,type:zn,depthTexture:new Fs(p.textureWidth,p.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let X={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,X),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new dn(d.framebufferWidth,d.framebufferHeight,{format:Mn,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ue.setContext(i),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(Z){for(let K=0;K<Z.removed.length;K++){let X=Z.removed[K],fe=b.indexOf(X);fe>=0&&(b[fe]=null,S[fe].disconnect(X))}for(let K=0;K<Z.added.length;K++){let X=Z.added[K],fe=b.indexOf(X);if(fe===-1){for(let be=0;be<S.length;be++)if(be>=b.length){b.push(X),fe=be;break}else if(b[be]===null){b[be]=X,fe=be;break}if(fe===-1)break}let ne=S[fe];ne&&ne.connect(X)}}let H=new P,ee=new P;function se(Z,K,X){H.setFromMatrixPosition(K.matrixWorld),ee.setFromMatrixPosition(X.matrixWorld);let fe=H.distanceTo(ee),ne=K.projectionMatrix.elements,be=X.projectionMatrix.elements,Qe=ne[14]/(ne[10]-1),I=ne[14]/(ne[10]+1),$e=(ne[9]+1)/ne[5],De=(ne[9]-1)/ne[5],we=(ne[8]-1)/ne[0],_e=(be[8]+1)/be[0],tt=Qe*we,ye=Qe*_e,ke=fe/(-we+_e),Et=ke*-we;if(K.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Et),Z.translateZ(ke),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ne[10]===-1)Z.projectionMatrix.copy(K.projectionMatrix),Z.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let ft=Qe+ke,R=I+ke,w=tt-Et,V=ye+(fe-Et),Y=$e*I/R*ft,te=De*I/R*ft;Z.projectionMatrix.makePerspective(w,V,Y,te,ft,R),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function de(Z,K){K===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(K.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let K=Z.near,X=Z.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(X=m.depthFar)),L.near=E.near=M.near=K,L.far=E.far=M.far=X,(U!==L.near||B!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),U=L.near,B=L.far),L.layers.mask=Z.layers.mask|6,M.layers.mask=L.layers.mask&3,E.layers.mask=L.layers.mask&5;let fe=Z.parent,ne=L.cameras;de(L,fe);for(let be=0;be<ne.length;be++)de(ne[be],fe);ne.length===2?se(L,M,E):L.projectionMatrix.copy(M.projectionMatrix),Re(Z,L,fe)};function Re(Z,K,X){X===null?Z.matrix.copy(K.matrixWorld):(Z.matrix.copy(X.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(K.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(K.projectionMatrix),Z.projectionMatrixInverse.copy(K.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Pr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(Z){l=Z,p!==null&&(p.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(Z){return f[Z]};let ze=null;function Be(Z,K){if(h=K.getViewerPose(c||a),_=K,h!==null){let X=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let fe=!1;X.length!==L.cameras.length&&(L.cameras.length=0,fe=!0);for(let I=0;I<X.length;I++){let $e=X[I],De=null;if(d!==null)De=d.getViewport($e);else{let _e=u.getViewSubImage(p,$e);De=_e.viewport,I===0&&(e.setRenderTargetTextures(v,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(v))}let we=D[I];we===void 0&&(we=new qt,we.layers.enable(I),we.viewport=new at,D[I]=we),we.matrix.fromArray($e.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray($e.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(De.x,De.y,De.width,De.height),I===0&&(L.matrix.copy(we.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),fe===!0&&L.cameras.push(we)}let ne=i.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){u=n.getBinding();let I=u.getDepthInformation(X[0]);I&&I.isValid&&I.texture&&m.init(I,i.renderState)}if(ne&&ne.includes("camera-access")&&g){e.state.unbindTexture(),u=n.getBinding();for(let I=0;I<X.length;I++){let $e=X[I].camera;if($e){let De=f[$e];De||(De=new Ga,f[$e]=De);let we=u.getCameraImage($e);De.sourceTexture=we}}}}for(let X=0;X<S.length;X++){let fe=b[X],ne=S[X];fe!==null&&ne!==void 0&&ne.update(fe,K,c||a)}ze&&ze(Z,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),_=null}let Ue=new s0;Ue.setAnimationLoop(Be),this.setAnimationLoop=function(Z){ze=Z},this.dispose=function(){}}},Ys=new yn,Ab=new Ze;function Cb(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,od(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,x,y,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,x,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Yt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Yt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let x=e.get(f),y=x.envMap,v=x.envMapRotation;y&&(m.envMap.value=y,Ys.copy(v),Ys.x*=-1,Ys.y*=-1,Ys.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ys.y*=-1,Ys.z*=-1),m.envMapRotation.value.setFromMatrix4(Ab.makeRotationFromEuler(Ys)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Yt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){let x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Rb(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){let v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=i[x.id];v===void 0&&(_(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",m));let S=y.program;n.updateUBOMapping(x,S);let b=e.render.frame;r[x.id]!==b&&(p(x),r[x.id]=b)}function h(x){let y=u();x.__bindingPointIndex=y;let v=s.createBuffer(),S=x.__size,b=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,S,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,v),v}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){let y=i[x.id],v=x.uniforms,S=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let b=0,T=v.length;b<T;b++){let C=Array.isArray(v[b])?v[b]:[v[b]];for(let M=0,E=C.length;M<E;M++){let D=C[M];if(d(D,b,M,S)===!0){let L=D.__offset,U=Array.isArray(D.value)?D.value:[D.value],B=0;for(let k=0;k<U.length;k++){let z=U[k],$=g(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,L+B,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,B),B+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(x,y,v,S){let b=x.value,T=y+"_"+v;if(S[T]===void 0)return typeof b=="number"||typeof b=="boolean"?S[T]=b:S[T]=b.clone(),!0;{let C=S[T];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return S[T]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function _(x){let y=x.uniforms,v=0,S=16;for(let T=0,C=y.length;T<C;T++){let M=Array.isArray(y[T])?y[T]:[y[T]];for(let E=0,D=M.length;E<D;E++){let L=M[E],U=Array.isArray(L.value)?L.value:[L.value];for(let B=0,k=U.length;B<k;B++){let z=U[B],$=g(z),H=v%S,ee=H%$.boundary,se=H+ee;v+=ee,se!==0&&S-se<$.storage&&(v+=S-se),L.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=$.storage}}}let b=v%S;return b>0&&(v+=S-b),x.__size=v,x.__cache={},this}function g(x){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){let y=x.target;y.removeEventListener("dispose",m);let v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function f(){for(let x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:f}}var ih=class{constructor(e={}){let{canvas:t=Am(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let _=new Uint32Array(4),g=new Int32Array(4),m=null,f=null,x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,S=!1;this._outputColorSpace=Pt;let b=0,T=0,C=null,M=-1,E=null,D=new at,L=new at,U=null,B=new He(0),k=0,z=t.width,$=t.height,H=1,ee=null,se=null,de=new at(0,0,z,$),Re=new at(0,0,z,$),ze=!1,Be=new Ur,Ue=!1,Z=!1,K=new Ze,X=new P,fe=new at,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},be=!1;function Qe(){return C===null?H:1}let I=n;function $e(A,F){return t.getContext(A,F)}try{let A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",re,!1),I===null){let F="webgl2";if(I=$e(F,A),I===null)throw $e(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let De,we,_e,tt,ye,ke,Et,ft,R,w,V,Y,te,q,Me,le,ve,Ae,ae,me,Le,Ce,ue,Fe;function N(){De=new YS(I),De.init(),Ce=new Eb(I,De),we=new kS(I,De,e,Ce),_e=new Mb(I,De),we.reversedDepthBuffer&&p&&_e.buffers.depth.setReversed(!0),tt=new jS(I),ye=new cb,ke=new bb(I,De,_e,ye,we,Ce,tt),Et=new HS(v),ft=new XS(v),R=new nv(I),ue=new BS(I,R),w=new $S(I,R,tt,ue),V=new KS(I,w,R,tt),ae=new JS(I,we,ke),le=new VS(ye),Y=new lb(v,Et,ft,De,we,ue,le),te=new Cb(v,ye),q=new ub,Me=new _b(De),Ae=new OS(v,Et,ft,_e,V,d,l),ve=new yb(v,V,we),Fe=new Rb(I,tt,we,_e),me=new zS(I,De,tt),Le=new ZS(I,De,tt),tt.programs=Y.programs,v.capabilities=we,v.extensions=De,v.properties=ye,v.renderLists=q,v.shadowMap=ve,v.state=_e,v.info=tt}N();let ie=new wd(v,I);this.xr=ie,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let A=De.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=De.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(z,$,!1))},this.getSize=function(A){return A.set(z,$)},this.setSize=function(A,F,G=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,$=F,t.width=Math.floor(A*H),t.height=Math.floor(F*H),G===!0&&(t.style.width=A+"px",t.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(z*H,$*H).floor()},this.setDrawingBufferSize=function(A,F,G){z=A,$=F,H=G,t.width=Math.floor(A*G),t.height=Math.floor(F*G),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(de)},this.setViewport=function(A,F,G,W){A.isVector4?de.set(A.x,A.y,A.z,A.w):de.set(A,F,G,W),_e.viewport(D.copy(de).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(Re)},this.setScissor=function(A,F,G,W){A.isVector4?Re.set(A.x,A.y,A.z,A.w):Re.set(A,F,G,W),_e.scissor(L.copy(Re).multiplyScalar(H).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(A){_e.setScissorTest(ze=A)},this.setOpaqueSort=function(A){ee=A},this.setTransparentSort=function(A){se=A},this.getClearColor=function(A){return A.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(A=!0,F=!0,G=!0){let W=0;if(A){let O=!1;if(C!==null){let oe=C.texture.format;O=oe===wc||oe===Ec||oe===bc}if(O){let oe=C.texture.type,ge=oe===zn||oe===as||oe===Hr||oe===os||oe===yc||oe===Sc,Ee=Ae.getClearColor(),xe=Ae.getClearAlpha(),Ne=Ee.r,Oe=Ee.g,Pe=Ee.b;ge?(_[0]=Ne,_[1]=Oe,_[2]=Pe,_[3]=xe,I.clearBufferuiv(I.COLOR,0,_)):(g[0]=Ne,g[1]=Oe,g[2]=Pe,g[3]=xe,I.clearBufferiv(I.COLOR,0,g))}else W|=I.COLOR_BUFFER_BIT}F&&(W|=I.DEPTH_BUFFER_BIT),G&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",re,!1),Ae.dispose(),q.dispose(),Me.dispose(),ye.dispose(),Et.dispose(),ft.dispose(),V.dispose(),ue.dispose(),Fe.dispose(),Y.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",fi),ie.removeEventListener("sessionend",Jf),Ms.stop()};function he(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let A=tt.autoReset,F=ve.enabled,G=ve.autoUpdate,W=ve.needsUpdate,O=ve.type;N(),tt.autoReset=A,ve.enabled=F,ve.autoUpdate=G,ve.needsUpdate=W,ve.type=O}function re(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Q(A){let F=A.target;F.removeEventListener("dispose",Q),Te(F)}function Te(A){Ge(A),ye.remove(A)}function Ge(A){let F=ye.get(A).programs;F!==void 0&&(F.forEach(function(G){Y.releaseProgram(G)}),A.isShaderMaterial&&Y.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,G,W,O,oe){F===null&&(F=ne);let ge=O.isMesh&&O.matrixWorld.determinant()<0,Ee=S_(A,F,G,W,O);_e.setMaterial(W,ge);let xe=G.index,Ne=1;if(W.wireframe===!0){if(xe=w.getWireframeAttribute(G),xe===void 0)return;Ne=2}let Oe=G.drawRange,Pe=G.attributes.position,je=Oe.start*Ne,ot=(Oe.start+Oe.count)*Ne;oe!==null&&(je=Math.max(je,oe.start*Ne),ot=Math.min(ot,(oe.start+oe.count)*Ne)),xe!==null?(je=Math.max(je,0),ot=Math.min(ot,xe.count)):Pe!=null&&(je=Math.max(je,0),ot=Math.min(ot,Pe.count));let wt=ot-je;if(wt<0||wt===1/0)return;ue.setup(O,W,Ee,G,xe);let pt,ct=me;if(xe!==null&&(pt=R.get(xe),ct=Le,ct.setIndex(pt)),O.isMesh)W.wireframe===!0?(_e.setLineWidth(W.wireframeLinewidth*Qe()),ct.setMode(I.LINES)):ct.setMode(I.TRIANGLES);else if(O.isLine){let Ie=W.linewidth;Ie===void 0&&(Ie=1),_e.setLineWidth(Ie*Qe()),O.isLineSegments?ct.setMode(I.LINES):O.isLineLoop?ct.setMode(I.LINE_LOOP):ct.setMode(I.LINE_STRIP)}else O.isPoints?ct.setMode(I.POINTS):O.isSprite&&ct.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Dr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))ct.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Ie=O._multiDrawStarts,vt=O._multiDrawCounts,et=O._multiDrawCount,Dn=xe?R.get(xe).bytesPerElement:1,hr=ye.get(W).currentProgram.getUniforms();for(let In=0;In<et;In++)hr.setValue(I,"_gl_DrawID",In),ct.render(Ie[In]/Dn,vt[In])}else if(O.isInstancedMesh)ct.renderInstances(je,wt,O.count);else if(G.isInstancedBufferGeometry){let Ie=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,vt=Math.min(G.instanceCount,Ie);ct.renderInstances(je,wt,vt)}else ct.render(je,wt)};function dt(A,F,G){A.transparent===!0&&A.side===nn&&A.forceSinglePass===!1?(A.side=Yt,A.needsUpdate=!0,Zo(A,F,G),A.side=Pi,A.needsUpdate=!0,Zo(A,F,G),A.side=nn):Zo(A,F,G)}this.compile=function(A,F,G=null){G===null&&(G=A),f=Me.get(G),f.init(F),y.push(f),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),A!==G&&A.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();let W=new Set;return A.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let oe=O.material;if(oe)if(Array.isArray(oe))for(let ge=0;ge<oe.length;ge++){let Ee=oe[ge];dt(Ee,G,O),W.add(Ee)}else dt(oe,G,O),W.add(oe)}),f=y.pop(),W},this.compileAsync=function(A,F,G=null){let W=this.compile(A,F,G);return new Promise(O=>{function oe(){if(W.forEach(function(ge){ye.get(ge).currentProgram.isReady()&&W.delete(ge)}),W.size===0){O(A);return}setTimeout(oe,10)}De.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let rt=null;function bi(A){rt&&rt(A)}function fi(){Ms.stop()}function Jf(){Ms.start()}let Ms=new s0;Ms.setAnimationLoop(bi),typeof self<"u"&&Ms.setContext(self),this.setAnimationLoop=function(A){rt=A,ie.setAnimationLoop(A),A===null?Ms.stop():Ms.start()},ie.addEventListener("sessionstart",fi),ie.addEventListener("sessionend",Jf),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(F),F=ie.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,F,C),f=Me.get(A,y.length),f.init(F),y.push(f),K.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Be.setFromProjectionMatrix(K,li,F.reversedDepth),Z=this.localClippingEnabled,Ue=le.init(this.clippingPlanes,Z),m=q.get(A,x.length),m.init(),x.push(m),ie.enabled===!0&&ie.isPresenting===!0){let oe=v.xr.getDepthSensingMesh();oe!==null&&Qh(oe,F,-1/0,v.sortObjects)}Qh(A,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ee,se),be=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,be&&Ae.addToRenderList(m,A),this.info.render.frame++,Ue===!0&&le.beginShadows();let G=f.state.shadowsArray;ve.render(G,A,F),Ue===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,O=m.transmissive;if(f.setupLights(),F.isArrayCamera){let oe=F.cameras;if(O.length>0)for(let ge=0,Ee=oe.length;ge<Ee;ge++){let xe=oe[ge];Qf(W,O,A,xe)}be&&Ae.render(A);for(let ge=0,Ee=oe.length;ge<Ee;ge++){let xe=oe[ge];Kf(m,A,xe,xe.viewport)}}else O.length>0&&Qf(W,O,A,F),be&&Ae.render(A),Kf(m,A,F);C!==null&&T===0&&(ke.updateMultisampleRenderTarget(C),ke.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(v,A,F),ue.resetDefaultState(),M=-1,E=null,y.pop(),y.length>0?(f=y[y.length-1],Ue===!0&&le.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Qh(A,F,G,W){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Be.intersectsSprite(A)){W&&fe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(K);let ge=V.update(A),Ee=A.material;Ee.visible&&m.push(A,ge,Ee,G,fe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Be.intersectsObject(A))){let ge=V.update(A),Ee=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),fe.copy(A.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),fe.copy(ge.boundingSphere.center)),fe.applyMatrix4(A.matrixWorld).applyMatrix4(K)),Array.isArray(Ee)){let xe=ge.groups;for(let Ne=0,Oe=xe.length;Ne<Oe;Ne++){let Pe=xe[Ne],je=Ee[Pe.materialIndex];je&&je.visible&&m.push(A,ge,je,G,fe.z,Pe)}}else Ee.visible&&m.push(A,ge,Ee,G,fe.z,null)}}let oe=A.children;for(let ge=0,Ee=oe.length;ge<Ee;ge++)Qh(oe[ge],F,G,W)}function Kf(A,F,G,W){let O=A.opaque,oe=A.transmissive,ge=A.transparent;f.setupLightsView(G),Ue===!0&&le.setGlobalState(v.clippingPlanes,G),W&&_e.viewport(D.copy(W)),O.length>0&&$o(O,F,G),oe.length>0&&$o(oe,F,G),ge.length>0&&$o(ge,F,G),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Qf(A,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new dn(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?di:zn,minFilter:rs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));let oe=f.state.transmissionRenderTarget[W.id],ge=W.viewport||D;oe.setSize(ge.z*v.transmissionResolutionScale,ge.w*v.transmissionResolutionScale);let Ee=v.getRenderTarget(),xe=v.getActiveCubeFace(),Ne=v.getActiveMipmapLevel();v.setRenderTarget(oe),v.getClearColor(B),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),be&&Ae.render(G);let Oe=v.toneMapping;v.toneMapping=Ui;let Pe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),Ue===!0&&le.setGlobalState(v.clippingPlanes,W),$o(A,G,W),ke.updateMultisampleRenderTarget(oe),ke.updateRenderTargetMipmap(oe),De.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let ot=0,wt=F.length;ot<wt;ot++){let pt=F[ot],ct=pt.object,Ie=pt.geometry,vt=pt.material,et=pt.group;if(vt.side===nn&&ct.layers.test(W.layers)){let Dn=vt.side;vt.side=Yt,vt.needsUpdate=!0,ep(ct,G,W,Ie,vt,et),vt.side=Dn,vt.needsUpdate=!0,je=!0}}je===!0&&(ke.updateMultisampleRenderTarget(oe),ke.updateRenderTargetMipmap(oe))}v.setRenderTarget(Ee,xe,Ne),v.setClearColor(B,k),Pe!==void 0&&(W.viewport=Pe),v.toneMapping=Oe}function $o(A,F,G){let W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,oe=A.length;O<oe;O++){let ge=A[O],Ee=ge.object,xe=ge.geometry,Ne=ge.group,Oe=ge.material;Oe.allowOverride===!0&&W!==null&&(Oe=W),Ee.layers.test(G.layers)&&ep(Ee,F,G,xe,Oe,Ne)}}function ep(A,F,G,W,O,oe){A.onBeforeRender(v,F,G,W,O,oe),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.onBeforeRender(v,F,G,W,A,oe),O.transparent===!0&&O.side===nn&&O.forceSinglePass===!1?(O.side=Yt,O.needsUpdate=!0,v.renderBufferDirect(G,F,W,O,A,oe),O.side=Pi,O.needsUpdate=!0,v.renderBufferDirect(G,F,W,O,A,oe),O.side=nn):v.renderBufferDirect(G,F,W,O,A,oe),A.onAfterRender(v,F,G,W,O,oe)}function Zo(A,F,G){F.isScene!==!0&&(F=ne);let W=ye.get(A),O=f.state.lights,oe=f.state.shadowsArray,ge=O.state.version,Ee=Y.getParameters(A,O.state,oe,F,G),xe=Y.getProgramCacheKey(Ee),Ne=W.programs;W.environment=A.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(A.isMeshStandardMaterial?ft:Et).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Ne===void 0&&(A.addEventListener("dispose",Q),Ne=new Map,W.programs=Ne);let Oe=Ne.get(xe);if(Oe!==void 0){if(W.currentProgram===Oe&&W.lightsStateVersion===ge)return np(A,Ee),Oe}else Ee.uniforms=Y.getUniforms(A),A.onBeforeCompile(Ee,v),Oe=Y.acquireProgram(Ee,xe),Ne.set(xe,Oe),W.uniforms=Ee.uniforms;let Pe=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Pe.clippingPlanes=le.uniform),np(A,Ee),W.needsLights=b_(A),W.lightsStateVersion=ge,W.needsLights&&(Pe.ambientLightColor.value=O.state.ambient,Pe.lightProbe.value=O.state.probe,Pe.directionalLights.value=O.state.directional,Pe.directionalLightShadows.value=O.state.directionalShadow,Pe.spotLights.value=O.state.spot,Pe.spotLightShadows.value=O.state.spotShadow,Pe.rectAreaLights.value=O.state.rectArea,Pe.ltc_1.value=O.state.rectAreaLTC1,Pe.ltc_2.value=O.state.rectAreaLTC2,Pe.pointLights.value=O.state.point,Pe.pointLightShadows.value=O.state.pointShadow,Pe.hemisphereLights.value=O.state.hemi,Pe.directionalShadowMap.value=O.state.directionalShadowMap,Pe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Pe.spotShadowMap.value=O.state.spotShadowMap,Pe.spotLightMatrix.value=O.state.spotLightMatrix,Pe.spotLightMap.value=O.state.spotLightMap,Pe.pointShadowMap.value=O.state.pointShadowMap,Pe.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Oe,W.uniformsList=null,Oe}function tp(A){if(A.uniformsList===null){let F=A.currentProgram.getUniforms();A.uniformsList=Xr.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function np(A,F){let G=ye.get(A);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function S_(A,F,G,W,O){F.isScene!==!0&&(F=ne),ke.resetTextureUnits();let oe=F.fog,ge=W.isMeshStandardMaterial?F.environment:null,Ee=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ls,xe=(W.isMeshStandardMaterial?ft:Et).get(W.envMap||ge),Ne=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Oe=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Pe=!!G.morphAttributes.position,je=!!G.morphAttributes.normal,ot=!!G.morphAttributes.color,wt=Ui;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(wt=v.toneMapping);let pt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ct=pt!==void 0?pt.length:0,Ie=ye.get(W),vt=f.state.lights;if(Ue===!0&&(Z===!0||A!==E)){let cn=A===E&&W.id===M;le.setState(W,A,cn)}let et=!1;W.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==vt.state.version||Ie.outputColorSpace!==Ee||O.isBatchedMesh&&Ie.batching===!1||!O.isBatchedMesh&&Ie.batching===!0||O.isBatchedMesh&&Ie.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ie.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ie.instancing===!1||!O.isInstancedMesh&&Ie.instancing===!0||O.isSkinnedMesh&&Ie.skinning===!1||!O.isSkinnedMesh&&Ie.skinning===!0||O.isInstancedMesh&&Ie.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ie.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ie.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ie.instancingMorph===!1&&O.morphTexture!==null||Ie.envMap!==xe||W.fog===!0&&Ie.fog!==oe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==le.numPlanes||Ie.numIntersection!==le.numIntersection)||Ie.vertexAlphas!==Ne||Ie.vertexTangents!==Oe||Ie.morphTargets!==Pe||Ie.morphNormals!==je||Ie.morphColors!==ot||Ie.toneMapping!==wt||Ie.morphTargetsCount!==ct)&&(et=!0):(et=!0,Ie.__version=W.version);let Dn=Ie.currentProgram;et===!0&&(Dn=Zo(W,F,O));let hr=!1,In=!1,ma=!1,yt=Dn.getUniforms(),qn=Ie.uniforms;if(_e.useProgram(Dn.program)&&(hr=!0,In=!0,ma=!0),W.id!==M&&(M=W.id,In=!0),hr||E!==A){_e.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),yt.setValue(I,"projectionMatrix",A.projectionMatrix),yt.setValue(I,"viewMatrix",A.matrixWorldInverse);let _n=yt.map.cameraPosition;_n!==void 0&&_n.setValue(I,X.setFromMatrixPosition(A.matrixWorld)),we.logarithmicDepthBuffer&&yt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&yt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,In=!0,ma=!0)}if(O.isSkinnedMesh){yt.setOptional(I,O,"bindMatrix"),yt.setOptional(I,O,"bindMatrixInverse");let cn=O.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),yt.setValue(I,"boneTexture",cn.boneTexture,ke))}O.isBatchedMesh&&(yt.setOptional(I,O,"batchingTexture"),yt.setValue(I,"batchingTexture",O._matricesTexture,ke),yt.setOptional(I,O,"batchingIdTexture"),yt.setValue(I,"batchingIdTexture",O._indirectTexture,ke),yt.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&yt.setValue(I,"batchingColorTexture",O._colorsTexture,ke));let Xn=G.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&ae.update(O,G,Dn),(In||Ie.receiveShadow!==O.receiveShadow)&&(Ie.receiveShadow=O.receiveShadow,yt.setValue(I,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(qn.envMap.value=xe,qn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(qn.envMapIntensity.value=F.environmentIntensity),In&&(yt.setValue(I,"toneMappingExposure",v.toneMappingExposure),Ie.needsLights&&M_(qn,ma),oe&&W.fog===!0&&te.refreshFogUniforms(qn,oe),te.refreshMaterialUniforms(qn,W,H,$,f.state.transmissionRenderTarget[A.id]),Xr.upload(I,tp(Ie),qn,ke)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Xr.upload(I,tp(Ie),qn,ke),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&yt.setValue(I,"center",O.center),yt.setValue(I,"modelViewMatrix",O.modelViewMatrix),yt.setValue(I,"normalMatrix",O.normalMatrix),yt.setValue(I,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let cn=W.uniformsGroups;for(let _n=0,eu=cn.length;_n<eu;_n++){let bs=cn[_n];Fe.update(bs,Dn),Fe.bind(bs,Dn)}}return Dn}function M_(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function b_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,F,G){let W=ye.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),ye.get(A.texture).__webglTexture=F,ye.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,F){let G=ye.get(A);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0};let E_=I.createFramebuffer();this.setRenderTarget=function(A,F=0,G=0){C=A,b=F,T=G;let W=!0,O=null,oe=!1,ge=!1;if(A){let xe=ye.get(A);if(xe.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(xe.__webglFramebuffer===void 0)ke.setupRenderTarget(A);else if(xe.__hasExternalTextures)ke.rebindTextures(A,ye.get(A.texture).__webglTexture,ye.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Pe=A.depthTexture;if(xe.__boundDepthTexture!==Pe){if(Pe!==null&&ye.has(Pe)&&(A.width!==Pe.image.width||A.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(A)}}let Ne=A.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ge=!0);let Oe=ye.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Oe[F])?O=Oe[F][G]:O=Oe[F],oe=!0):A.samples>0&&ke.useMultisampledRTT(A)===!1?O=ye.get(A).__webglMultisampledFramebuffer:Array.isArray(Oe)?O=Oe[G]:O=Oe,D.copy(A.viewport),L.copy(A.scissor),U=A.scissorTest}else D.copy(de).multiplyScalar(H).floor(),L.copy(Re).multiplyScalar(H).floor(),U=ze;if(G!==0&&(O=E_),_e.bindFramebuffer(I.FRAMEBUFFER,O)&&W&&_e.drawBuffers(A,O),_e.viewport(D),_e.scissor(L),_e.setScissorTest(U),oe){let xe=ye.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,xe.__webglTexture,G)}else if(ge){let xe=F;for(let Ne=0;Ne<A.textures.length;Ne++){let Oe=ye.get(A.textures[Ne]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ne,Oe.__webglTexture,G,xe)}}else if(A!==null&&G!==0){let xe=ye.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,xe.__webglTexture,G)}M=-1},this.readRenderTargetPixels=function(A,F,G,W,O,oe,ge,Ee=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe){_e.bindFramebuffer(I.FRAMEBUFFER,xe);try{let Ne=A.textures[Ee],Oe=Ne.format,Pe=Ne.type;if(!we.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-W&&G>=0&&G<=A.height-O&&(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ee),I.readPixels(F,G,W,O,Ce.convert(Oe),Ce.convert(Pe),oe))}finally{let Ne=C!==null?ye.get(C).__webglFramebuffer:null;_e.bindFramebuffer(I.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(A,F,G,W,O,oe,ge,Ee=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe)if(F>=0&&F<=A.width-W&&G>=0&&G<=A.height-O){_e.bindFramebuffer(I.FRAMEBUFFER,xe);let Ne=A.textures[Ee],Oe=Ne.format,Pe=Ne.type;if(!we.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let je=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,je),I.bufferData(I.PIXEL_PACK_BUFFER,oe.byteLength,I.STREAM_READ),A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ee),I.readPixels(F,G,W,O,Ce.convert(Oe),Ce.convert(Pe),0);let ot=C!==null?ye.get(C).__webglFramebuffer:null;_e.bindFramebuffer(I.FRAMEBUFFER,ot);let wt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Cm(I,wt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,je),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,oe),I.deleteBuffer(je),I.deleteSync(wt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,F=null,G=0){let W=Math.pow(2,-G),O=Math.floor(A.image.width*W),oe=Math.floor(A.image.height*W),ge=F!==null?F.x:0,Ee=F!==null?F.y:0;ke.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,ge,Ee,O,oe),_e.unbindTexture()};let w_=I.createFramebuffer(),T_=I.createFramebuffer();this.copyTextureToTexture=function(A,F,G=null,W=null,O=0,oe=null){oe===null&&(O!==0?(Dr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=O,O=0):oe=0);let ge,Ee,xe,Ne,Oe,Pe,je,ot,wt,pt=A.isCompressedTexture?A.mipmaps[oe]:A.image;if(G!==null)ge=G.max.x-G.min.x,Ee=G.max.y-G.min.y,xe=G.isBox3?G.max.z-G.min.z:1,Ne=G.min.x,Oe=G.min.y,Pe=G.isBox3?G.min.z:0;else{let Xn=Math.pow(2,-O);ge=Math.floor(pt.width*Xn),Ee=Math.floor(pt.height*Xn),A.isDataArrayTexture?xe=pt.depth:A.isData3DTexture?xe=Math.floor(pt.depth*Xn):xe=1,Ne=0,Oe=0,Pe=0}W!==null?(je=W.x,ot=W.y,wt=W.z):(je=0,ot=0,wt=0);let ct=Ce.convert(F.format),Ie=Ce.convert(F.type),vt;F.isData3DTexture?(ke.setTexture3D(F,0),vt=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(ke.setTexture2DArray(F,0),vt=I.TEXTURE_2D_ARRAY):(ke.setTexture2D(F,0),vt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);let et=I.getParameter(I.UNPACK_ROW_LENGTH),Dn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),hr=I.getParameter(I.UNPACK_SKIP_PIXELS),In=I.getParameter(I.UNPACK_SKIP_ROWS),ma=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,pt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ne),I.pixelStorei(I.UNPACK_SKIP_ROWS,Oe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Pe);let yt=A.isDataArrayTexture||A.isData3DTexture,qn=F.isDataArrayTexture||F.isData3DTexture;if(A.isDepthTexture){let Xn=ye.get(A),cn=ye.get(F),_n=ye.get(Xn.__renderTarget),eu=ye.get(cn.__renderTarget);_e.bindFramebuffer(I.READ_FRAMEBUFFER,_n.__webglFramebuffer),_e.bindFramebuffer(I.DRAW_FRAMEBUFFER,eu.__webglFramebuffer);for(let bs=0;bs<xe;bs++)yt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ye.get(A).__webglTexture,O,Pe+bs),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ye.get(F).__webglTexture,oe,wt+bs)),I.blitFramebuffer(Ne,Oe,ge,Ee,je,ot,ge,Ee,I.DEPTH_BUFFER_BIT,I.NEAREST);_e.bindFramebuffer(I.READ_FRAMEBUFFER,null),_e.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(O!==0||A.isRenderTargetTexture||ye.has(A)){let Xn=ye.get(A),cn=ye.get(F);_e.bindFramebuffer(I.READ_FRAMEBUFFER,w_),_e.bindFramebuffer(I.DRAW_FRAMEBUFFER,T_);for(let _n=0;_n<xe;_n++)yt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xn.__webglTexture,O,Pe+_n):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Xn.__webglTexture,O),qn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,cn.__webglTexture,oe,wt+_n):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,cn.__webglTexture,oe),O!==0?I.blitFramebuffer(Ne,Oe,ge,Ee,je,ot,ge,Ee,I.COLOR_BUFFER_BIT,I.NEAREST):qn?I.copyTexSubImage3D(vt,oe,je,ot,wt+_n,Ne,Oe,ge,Ee):I.copyTexSubImage2D(vt,oe,je,ot,Ne,Oe,ge,Ee);_e.bindFramebuffer(I.READ_FRAMEBUFFER,null),_e.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else qn?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(vt,oe,je,ot,wt,ge,Ee,xe,ct,Ie,pt.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(vt,oe,je,ot,wt,ge,Ee,xe,ct,pt.data):I.texSubImage3D(vt,oe,je,ot,wt,ge,Ee,xe,ct,Ie,pt):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,oe,je,ot,ge,Ee,ct,Ie,pt.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,oe,je,ot,pt.width,pt.height,ct,pt.data):I.texSubImage2D(I.TEXTURE_2D,oe,je,ot,ge,Ee,ct,Ie,pt);I.pixelStorei(I.UNPACK_ROW_LENGTH,et),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Dn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,hr),I.pixelStorei(I.UNPACK_SKIP_ROWS,In),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ma),oe===0&&F.generateMipmaps&&I.generateMipmap(vt),_e.unbindTexture()},this.initRenderTarget=function(A){ye.get(A).__webglFramebuffer===void 0&&ke.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ke.setTextureCube(A,0):A.isData3DTexture?ke.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ke.setTexture2DArray(A,0):ke.setTexture2D(A,0),_e.unbindTexture()},this.resetState=function(){b=0,T=0,C=null,_e.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};function c0(s,e){let t=new Ve;t.name="reference-furniture";let n=[[1.2,.046,.55,0,.727,0]],i=[],r=[];for(let c of[-.53,.53])for(let h of[-.21,.21])r.push([.04,.705,.04,c,.353,h]);for(let c of[-.27,.27]){i.push([.4,.04,.4,c,.43,.58]),i.push([.4,.28,.04,c,.66,.76]);for(let h of[-.15,.15])r.push([.03,.41,.03,c+h,.205,.43]),r.push([.03,.69,.03,c+h,.345,.752])}let a=Math.max(...[...n,...i,...r].map(c=>c[5]+c[2]/2)),o=e(s,a),l=new Ze;for(let[c,h]of[[n,"#c99f73"],[i,"#729baa"],[r,"#829ca9"]]){let u=new Ii(new Tt,new tn({color:h,roughness:.8}),o.length*c.length),p=0;for(let[d,,_]of o)for(let[g,m,f,x,y,v]of c)u.setMatrixAt(p++,l.makeScale(g,m,f).setPosition(d+x,y,_+v));u.castShadow=u.receiveShadow=!0,t.add(u)}return t}var h0={type:"change"},Cd={type:"start"},d0={type:"end"},rh=new Qi,u0=new Ot,Pb=Math.cos(70*Gr.DEG2RAD),kt=new P,bn=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ad=1e-6,ah=class extends ho{constructor(e,t=null){super(e,t),this.state=lt.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:is.ROTATE,MIDDLE:is.DOLLY,RIGHT:is.PAN},this.touches={ONE:ss.ROTATE,TWO:ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new vn,this._lastTargetPosition=new P,this._quat=new vn().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new kr,this._sphericalDelta=new kr,this._scale=1,this._panOffset=new P,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new P,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ib.bind(this),this._onPointerDown=Db.bind(this),this._onPointerUp=Lb.bind(this),this._onContextMenu=kb.bind(this),this._onMouseWheel=Fb.bind(this),this._onKeyDown=Ob.bind(this),this._onTouchStart=Bb.bind(this),this._onTouchMove=zb.bind(this),this._onMouseDown=Nb.bind(this),this._onMouseMove=Ub.bind(this),this._interceptControlDown=Vb.bind(this),this._interceptControlUp=Hb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(h0),this.update(),this.state=lt.NONE}update(e=null){let t=this.object.position;kt.copy(t).sub(this.target),kt.applyQuaternion(this._quat),this._spherical.setFromVector3(kt),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=bn:n>Math.PI&&(n-=bn),i<-Math.PI?i+=bn:i>Math.PI&&(i-=bn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(kt.setFromSpherical(this._spherical),kt.applyQuaternion(this._quatInverse),t.copy(this.target).add(kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=kt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(rh.origin.copy(this.object.position),rh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(rh.direction))<Pb?this.object.lookAt(this.target):(u0.setFromNormalAndCoplanarPoint(this.object.up,this.target),rh.intersectPlane(u0,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ad||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ad||this._lastTargetPosition.distanceToSquared(this.target)>Ad?(this.dispatchEvent(h0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?bn/60*this.autoRotateSpeed*e:bn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){kt.setFromMatrixColumn(t,0),kt.multiplyScalar(-e),this._panOffset.add(kt)}_panUp(e,t){this.screenSpacePanning===!0?kt.setFromMatrixColumn(t,1):(kt.setFromMatrixColumn(t,0),kt.crossVectors(this.object.up,kt)),kt.multiplyScalar(e),this._panOffset.add(kt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;kt.copy(i).sub(this.target);let r=kt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Db(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Ib(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Lb(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(d0),this.state=lt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Nb(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=lt.DOLLY;break;case is.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=lt.ROTATE}break;case is.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Cd)}function Ub(s){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Fb(s){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(s.preventDefault(),this.dispatchEvent(Cd),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(d0))}function Ob(s){this.enabled!==!1&&this._handleKeyDown(s)}function Bb(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ss.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=lt.TOUCH_ROTATE;break;case ss.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case ss.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=lt.TOUCH_DOLLY_PAN;break;case ss.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Cd)}function zb(s){switch(this._trackPointer(s),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=lt.NONE}}function kb(s){this.enabled!==!1&&s.preventDefault()}function Vb(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Hb(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Gb(s,e){return[{axis:"x",value:0,keepGreater:!0},{axis:"x",value:e.width,keepGreater:!1},{axis:"z",value:0,keepGreater:!0},{axis:"z",value:e.depth,keepGreater:!1}].reduce((n,i)=>{if(!n.length)return n;let r=l=>i.keepGreater?l[i.axis]>=i.value:l[i.axis]<=i.value,a=(l,c)=>{let h=c[i.axis]-l[i.axis],u=h===0?0:(i.value-l[i.axis])/h;return{x:l.x+(c.x-l.x)*u,z:l.z+(c.z-l.z)*u}},o=[];for(let l=0;l<n.length;l++){let c=n[l],h=n[(l+n.length-1)%n.length];r(c)?(r(h)||o.push(a(h,c)),o.push(c)):r(h)&&o.push(a(h,c))}return o},s)}function Wb(s,e,t,n,i,r){let a=Gb(e,r);if(a.length<3)return;let o=new Or;o.moveTo(a[0].x,a[0].z);for(let u of a.slice(1))o.lineTo(u.x,u.z);o.closePath();let l=new Xe(new Ka(o),new Sn({color:t,transparent:!0,opacity:n,side:nn,depthWrite:!1}));l.rotation.x=Math.PI/2,l.position.y=i,l.renderOrder=2+i*100,s.add(l);let c=a.map(u=>new P(u.x,i+.006,u.z)),h=new Li(new _t().setFromPoints(c),new Zn({color:t,transparent:!0,opacity:.75,depthTest:!1}));h.renderOrder=l.renderOrder+.1,s.add(h)}function f0(s,e){let t=new Ve;for(let n of e)if(n.kind==="s210"){let i=n.direction==="rear"?1:-1;for(let[r,a,o]of[[8,.075,.025],[6,.13,.03]]){let l=[];for(let c=0;c<360;c+=4){let h=c*Math.PI/180,u=r/2*(1+i*Math.sin(h));l.push({x:n.x+u*Math.cos(h),z:n.depth+u*Math.sin(h)})}Wb(t,l,"#16a589",a,o,s)}}return t.visible=!1,t}function oh(s){return s==="standard"?{width:8,length:10,teacherCam:{x:8/2,y:5},studentCams:[{id:0,x:8/2,y:1}],speakers:[{id:0,x:.8,y:1.5},{id:1,x:8-.8,y:1.5},{id:2,x:.8,y:10-1.5},{id:3,x:8-.8,y:10-1.5}],largeScreen:ws(8),hub:{x:1.5,y:1},displaySize:"55"}:s==="large"?{width:10,length:20,teacherCam:{x:10/2,y:7},studentCams:[{id:0,x:10/2,y:1}],speakers:[{id:0,x:1,y:2},{id:1,x:9,y:2},{id:2,x:1,y:9},{id:3,x:9,y:9},{id:4,x:1,y:16},{id:5,x:9,y:16}],largeScreen:ws(10),hub:{x:1.5,y:1},displaySize:"65"}:s==="lecture"?{width:12,length:15,teacherCam:{x:12/2,y:7},studentCams:[{id:0,x:12/2,y:1}],speakers:[{id:0,x:1,y:2},{id:1,x:11,y:2},{id:2,x:1,y:13},{id:3,x:11,y:13}],largeScreen:ws(12),hub:{x:1.5,y:1},displaySize:"65"}:s==="ultra"?{width:17,length:37,teacherCam:{x:17/2,y:9},studentCams:[{id:0,x:17/2,y:1}],speakers:[{id:0,x:1.5,y:3},{id:1,x:17-1.5,y:3},{id:2,x:1.5,y:15},{id:3,x:17-1.5,y:15},{id:4,x:1.5,y:27},{id:5,x:17-1.5,y:27},{id:6,x:1.5,y:34},{id:7,x:17-1.5,y:34}],largeScreen:ws(17),hub:{x:2,y:1.5},displaySize:"75"}:null}function p0({width:s,depth:e,teacher:t,students:n,teacherModel:i,studentModel:r}){let a=s/2;return{teacher:i==="CV870"?{x:a,y:Math.min(e,10)}:t,students:r==="CV870"?[{id:0,x:a,y:0}]:n}}function Pd({width:s,depth:e,teacher:t,students:n,teacherModel:i="CV870",studentModel:r="CV870",s210s:a=[],displaySize:o="55",s210Count:l=null}){let c=p0({width:s,depth:e,teacher:t,students:n,teacherModel:i,studentModel:r});return{teacherCam:c.teacher,studentCams:c.students,s210s:Ko(s,e,a,l),speakers:op(s,e),displays:ap(s,e,o),largeScreen:ws(s)}}var Vt={CV870:{label:"CV870 Pro",projectOnly:!1,roleHfov:{teacher:43,student:94},roleMinDistance:{teacher:0,student:0},roleMaxDistance:{teacher:10,student:10}},CV210:{label:"CV210",projectOnly:!1,budgetPair:!0,roleHfov:{teacher:40,student:120},roleMinDistance:{teacher:5,student:1},roleMaxDistance:{teacher:12,student:10}},"PVC-G530P":{label:"PVC-G530P",opticalZoom:"30x",minHfov:2,maxHfov:56.5,projectOnly:!0},"PVC-G520P":{label:"PVC-G520P",opticalZoom:"20x",minHfov:2.8,maxHfov:56.5,projectOnly:!0},"PVC-G512P":{label:"PVC-G512P",opticalZoom:"12x",minHfov:7.6,maxHfov:81,projectOnly:!0}};var Zr=(s,e,t,n)=>{let i=t>500||e>16?3:t>300||e>12?2:1;return s>30?{teacher:"PVC-G530P",student:"PVC-G530P",studentQty:i,reason:n.longReasonFar}:s>20?{teacher:"PVC-G520P",student:"PVC-G530P",studentQty:i,reason:n.longReasonMid}:{teacher:"PVC-G520P",student:"PVC-G520P",studentQty:1,reason:n.longReasonNear}};var qb=1;var Xb=(s,e)=>s&&Number.isFinite(s.x)&&Number.isFinite(s.y)&&s.x>=0&&s.x<=e.width&&s.y>=0&&s.y<=e.depth;function Dd(s){if(!s||s.version!==qb)return"snapshotVersion";let{room:e,layout:t,cameraPlan:n,visibility:i}=s;if(!e||![e.width,e.depth,e.height].every(Number.isFinite)||e.width<4||e.width>30||e.depth<5||e.depth>50||e.height<2.4||e.height>6)return"roomSize";if(!t||!n||!Object.hasOwn(Vt,n.teacher)||!Object.hasOwn(Vt,n.student)||!i||["teacher","student","s210","speaker","display","ifp"].some(r=>typeof i[r]!="boolean")||typeof s.projectTitle!="string"||typeof s.lang!="string"||typeof s.hubName!="string"||typeof s.displayName!="string"||!["55","65","75"].includes(String(s.displaySize))||!["studentCams","s210s","speakers","displays"].every(r=>Array.isArray(t[r]))||t.studentCams.length<1||t.studentCams.length>3||t.s210s.length>10||t.speakers.length>100||t.displays.length>100||![t.teacherCam,t.hub,t.largeScreen,...t.studentCams,...t.s210s,...t.speakers,...t.displays].every(r=>Xb(r,e))||t.s210s.some(r=>!["up","down"].includes(r.facing))||!Number.isFinite(t.largeScreen.width)||t.largeScreen.width<=0||!Number.isInteger(n.studentQty)||n.studentQty!==t.studentCams.length||!Vt[n.student].projectOnly&&n.studentQty!==1||s.qnexModel!==void 0&&!["NDP600","SL100","NMP311","NDP200"].includes(s.qnexModel)||s.s210Request!==void 0&&(!s.s210Request||!["auto","fixed"].includes(s.s210Request.mode)||s.s210Request.mode==="fixed"&&(!Number.isInteger(s.s210Request.count)||s.s210Request.count<0||s.s210Request.count>10)))return"snapshotInvalid";if(s.audioConfig!==void 0){let r=s.audioConfig;if(!r||typeof r!="object"||Array.isArray(r)||r.useBuiltInAmp!==void 0&&typeof r.useBuiltInAmp!="boolean")return"snapshotInvalid";for(let a of["amplifier","feedback"]){let o=r[a];if(o!==void 0&&(!o||typeof o!="object"||Array.isArray(o)||o.confirmed!==void 0&&typeof o.confirmed!="boolean"||o.model!==void 0&&(typeof o.model!="string"||o.model.length>120)||o.notes!==void 0&&(typeof o.notes!="string"||o.notes.length>1e3)||o.capacity!==void 0&&(!Number.isFinite(o.capacity)||o.capacity<0||o.capacity>100)))return"snapshotInvalid"}}if(i.ifp){let{x:r,width:a}=t.largeScreen;if(a+1.3>e.width||r-a/2<0||r+a/2>e.width)return"screenSpace";let o=a*9/32;if(Math.max(1.2,o+.08)>e.height-o-.08)return"screenHeight"}return null}function m0(s){if(!s)return{snapshot:null,error:null};try{if(!s.startsWith("#plan=")||s.length>2e5)return{error:"snapshotInvalid"};let e=JSON.parse(decodeURIComponent(s.slice(6))),t=Dd(e);return t?{error:t}:{snapshot:e,error:null}}catch{return{error:"snapshotInvalid"}}}var lh=Object.freeze({width:8,depth:10,defaultHeight:3}),zC=Object.freeze(["standard","large","lecture","ultra"]),Id=Object.freeze({teacher:"CV870",student:"CV870",studentQty:1}),g0={s210:"#1ca78d",teacher:"#e87836",student:"#288fda",station:"#5576c7",ndp:"#b9783c",ifp:"#488cbe",display:"#6e7cda",speaker:"#75879b"},Kn=s=>Number(s)*.0254*16/Math.sqrt(337),cs=s=>Number(s)*.0254*9/Math.sqrt(337);function Yb({width:s,depth:e,height:t,ifpSize:n,ifpCount:i}){return![s,e,t].every(Number.isFinite)||s<4||e<5||t<2.4||s>30||e>50||t>6?"roomSize":Kn(n)*i+(i-1)*.15+1.3>s?"screenSpace":1.65+cs(n)/2+.1>t?"screenHeight":null}function _0(s){let{width:e,depth:t,height:n,ifpSize:i,ifpCount:r,displaySize:a,cameraPlan:o}=s,l=Yb(s);if(l)return{error:l};let c=oh(s.preset),h=c&&c.width===e&&c.length===t?c:{teacherCam:{x:e/2,y:Math.min(t,10)},studentCams:[{id:0,x:e/2,y:0}],s210s:[]},u=Pd({width:e,depth:t,teacher:h.teacherCam,students:h.studentCams,teacherModel:o.teacher,studentModel:o.student,s210s:s.s210Request?[]:h.s210s,s210Count:s.s210Request?.mode==="fixed"?s.s210Request.count:null,displaySize:a}),p=[],d=(x,y,v,S,b,T,C={})=>p.push({id:x,kind:y,name:C.name||x,x:v,depth:S,height:b,direction:T,color:g0[y],...C});u.s210s.forEach((x,y)=>d(`s210-${y+1}`,"s210",x.x,x.y,2.7,x.facing==="down"?"rear":"front",{name:`S210 S${y+1}`,planX:x.x,planDepth:x.y}));for(let[x,y,v]of[["teacher",o.teacher,1],["student",o.student,Vt[o.student].projectOnly?o.studentQty:1]])for(let S=0;S<v;S++){let b=x==="teacher"?u.teacherCam:u.studentCams[0],T=v===1?b.x:e*(S+1)/(v+1),C=x==="teacher"?"teacher-camera":`student-camera-${S+1}`,M=Vt[y];d(C,x,T,b.y,2.4,x==="teacher"?"front":"rear",{model:y,name:`${M.label} \xB7 ${x==="teacher"?"Teacher":`Student ${S+1}`}`,planX:T,planDepth:b.y,hfov:M.roleHfov?.[x]||M.maxHfov,teleHfov:M.minHfov,maxDistance:M.roleMaxDistance?.[x]})}let _=Kn(i)*r+(r-1)*.15,g=e/2-_/2,m=Math.max(.5,Math.min(1.5,g-.55));d("lcs-station","station",m,0,1.5,"rear",{name:"LCS 810 Station",planX:c?.hub.x??1.5,planDepth:c?.hub.y??1,mount:"front-wall"}),d("ndp600","ndp",Math.max(1.1,e*.32),1.2,1.05,"front",{name:"NDP600",mount:"floor"});for(let x=0;x<r;x++){let y=g+Kn(i)*(x+.5)+.15*x;d(`ifp-${x+1}`,"ifp",y,0,1.65,"rear",{name:`IFP ${i}" ${x+1}`,size:i,mount:"front-wall"})}u.displays.forEach(x=>d(`display-${x.id}`,"display",x.id.startsWith("L")?0:e,x.y,2.1,"rear",{name:`Auxiliary Display ${x.id} \xB7 ${a}"`,size:a,planX:x.x,planDepth:x.y,mount:"side-wall",wallSide:x.id.startsWith("L")?"left":"right"})),u.speakers.forEach((x,y)=>{let v=y<2,S=y>=u.speakers.length-2,b=v||S?x.x:x.x<e/2?0:e,T=v?0:S?t:x.y,C=v?"rear":S?"front":x.x<e/2?"right":"left";d(`ps610-${x.id+1}`,"speaker",b,T,2.5,C,{name:`PS610 ${x.id+1}`,planX:x.x,planDepth:x.y,mount:v?"front-wall":S?"rear-wall":"side-wall"})});let f=v0(u.s210s,e,t);return p.some(x=>x.maxDistance&&(x.kind==="teacher"?x.depth:t-x.depth)>x.maxDistance)&&f.push("cameraRange"),{room:{width:e,depth:t,height:n},devices:p,plan:u,warnings:f,audioPlan:_a({width:e,depth:t,s210Count:u.s210s.length,speakerCount:u.speakers.length,qnexModel:"NDP600"}),recommendation:Zr(t,e,e*t,{longReasonFar:"",longReasonMid:"",longReasonNear:""})}}function x0(s){let e=Dd(s);if(e)return{error:e};let{room:t,layout:n,cameraPlan:i,visibility:r,displaySize:a}=s,{width:o,depth:l}=t,c=[],h=(_,g,m,f,x,y,v,S={})=>c.push({id:_,kind:g,name:_,x:f,depth:x,height:y,direction:v,color:g0[g],planX:m.x,planDepth:m.y,...S});r.s210&&n.s210s.forEach((_,g)=>h(`s210-${g+1}`,"s210",_,_.x,_.y,2.7,_.facing==="down"?"rear":"front",{name:`S210 ${_.label||`S${g+1}`}`}));for(let _ of["teacher","student"]){if(!r[_])continue;let g=i[_],m=Vt[g];(_==="teacher"?[n.teacherCam]:n.studentCams).forEach((x,y)=>h(_==="teacher"?"teacher-camera":`student-camera-${y+1}`,_,x,x.x,x.y,2.4,_==="teacher"?"front":"rear",{model:g,name:`${m.label} \xB7 ${_==="teacher"?"Teacher":`Student ${y+1}`}`,hfov:m.roleHfov?.[_]||m.maxHfov,teleHfov:m.minHfov,maxDistance:m.roleMaxDistance?.[_]}))}let u=n.largeScreen,p=r.ifp?Math.max(.5,Math.min(n.hub.x,u.x-u.width/2-.55)):n.hub.x;h("lcs-station","station",n.hub,p,0,1.5,"rear",{name:s.hubName,mount:"front-wall"}),r.ifp&&h("ifp-1","ifp",u,u.x,0,1.65,"rear",{name:s.lang==="zh"?"\u4E3B\u5C4F / IFP":"Main Screen / IFP",mount:"front-wall",size:u.width*Math.sqrt(337)/(.0254*16)}),r.display&&n.displays.forEach((_,g)=>{let m=String(_.id).startsWith("L");h(`display-${g+1}`,"display",_,m?0:o,_.y,2.1,"rear",{name:`${s.displayName} ${_.id} \xB7 ${a}"`,size:Number(a),mount:"side-wall",wallSide:m?"left":"right"})}),r.speaker&&n.speakers.forEach((_,g)=>{let m=g<2,f=!m&&g>=n.speakers.length-2,x=_.x<o/2;h(`ps610-${g+1}`,"speaker",_,m||f?_.x:x?0:o,m?0:f?l:_.y,2.5,m?"rear":f?"front":x?"right":"left",{name:`PS610 ${g+1}`,mount:m?"front-wall":f?"rear-wall":"side-wall"})});let d=c.some(_=>_.maxDistance&&(_.kind==="teacher"?_.depth:l-_.depth)>_.maxDistance)?["cameraRange"]:[];return d.push(...v0(n.s210s,o,l)),{room:{...t},devices:c,plan:n,warnings:d,audioPlan:_a({width:o,depth:l,s210Count:r.s210?n.s210s.length:0,speakerCount:r.speaker?n.speakers.length:0,qnexModel:s.qnexModel||"NDP600",audioConfig:s.audioConfig}),recommendation:Zr(l,o,o*l,{longReasonFar:"",longReasonMid:"",longReasonNear:""})}}function v0(s,e,t){if(!s.length)return[];let n=Es(s,e,t),i=s.length<=2?[80,95]:[75,85];return n.best<i[0]||n.limit<i[1]?["pickupUnmet"]:[]}function y0(s,e,t=!1){let n=structuredClone(s),{width:i,depth:r}=n.room;t&&Vt[n.cameraPlan.student].projectOnly&&(n.cameraPlan.studentQty=Zr(r,i,i*r,{}).studentQty);let a=Pd({width:i,depth:r,teacher:t?{x:i/2,y:Math.min(r,10)}:n.layout.teacherCam,students:t?[{id:0,x:i/2,y:0}]:n.layout.studentCams,teacherModel:n.cameraPlan.teacher,studentModel:n.cameraPlan.student,displaySize:n.displaySize,s210Count:e.mode==="fixed"?e.count:null}),o=n.cameraPlan.studentQty,l=a.studentCams[0];return a.studentCams=Array.from({length:o},(c,h)=>({...l,id:h,x:o===1?l.x:i*(h+1)/(o+1)})),n.layout={...n.layout,...a,largeScreen:n.layout.largeScreen},n.s210Request={...e},n}function Mo(s,e,t){let n={s210:1.5,teacher:1.5,student:1.5,station:.55,ndp:.9,ifp:1.2,display:1.2,speaker:1.2}[s.kind],i={s210:.1,teacher:.38,student:.38,station:.26,ndp:.16,ifp:cs(s.size)/2+.08,display:cs(s.size)/2+.08,speaker:.29}[s.kind],r=s.kind==="ndp"?.9:["ifp","display"].includes(s.kind)?cs(s.size)/2+.08:0,a=["station","ndp"].includes(s.kind)?20:10,o=Math.max(n,r);return Math.max(o,Math.floor(Math.min(Math.max(Number(e)||o,o),t-i)*a+1e-8)/a)}var Oi={CV870:[.245,.165,.145],CV210:[.196,.052,.082],PVC:[.205,.16,.16],PS610:[.23,.35,.23],NDP600:[.716,.242,.35],station:[.36,.235,.055],s210:{foamLength:.245,foamRadius:.018,stemLength:.125},ifp:{bezel:.012,chin:.032,depth:.069},display:{bezel:.009,chin:.012,depth:.05}};function ch(s){return s==="CV870"?{pivotHeight:.113,lensDepth:.073}:s==="CV210"?{pivotHeight:.035,lensDepth:.042}:{pivotHeight:.098,lensDepth:.081}}var hh=72,M0=[.24,.48,.72,.96],$b="#128d78",Ld=Object.freeze({pan:0,tilt:15});function bo(s,{pan:e,tilt:t}=Ld){let n=s.userData.pickupJoint;n&&n.rotation.set(Gr.degToRad(t),Gr.degToRad(e),0,"YXZ")}function S0(s,e,t){let n=Math.cos(e),i=s*(1+n)/2,r=i*Math.sin(e);return new P(r*Math.cos(t),-i*n,r*Math.sin(t))}function Nd({width:s,depth:e,height:t}){return[new Ot(new P(1,0,0),0),new Ot(new P(-1,0,0),s),new Ot(new P(0,0,1),0),new Ot(new P(0,0,-1),e),new Ot(new P(0,1,0),0),new Ot(new P(0,-1,0),t)]}function b0(s){let e=new Ve,t=(i,r)=>{let a=new Li(new _t().setFromPoints(i),new Zn({color:$b,opacity:r,transparent:!0,depthWrite:!1,toneMapped:!1,clippingPlanes:s}));return a.raycast=()=>{},e.add(a),a};for(let[i,r]of[[8,.25],[6,.48]])for(let a of[0,Math.PI/2])t(Array.from({length:hh},(o,l)=>S0(i,l/hh*2*Math.PI,a)),r);let n=Array.from({length:hh},(i,r)=>S0(6,Math.PI/3,r/hh*2*Math.PI));return e.userData.waves=M0.map(()=>t(n,.78)),e.visible=!1,uh(e,0),e}function uh(s,e){s.userData.waves.forEach((t,n)=>{let i=(M0[n]+1-e)%1;t.scale.setScalar(i),t.material.opacity=.78*Math.min(1,i*9,(1-i)*12)})}function Ud(s,e){let t=s.texture("screen:"+e,512,288,(n,i,r)=>{if(e==="station"||e==="control"){n.fillStyle="#16242c",n.fillRect(0,0,i,r),n.fillStyle="#e4eef2",n.font="bold 26px Arial",n.fillText(e==="station"?"LECTURE CAPTURE":"Q-NEX",24,43),n.fillStyle="#274759",n.fillRect(24,64,i-48,156);for(let o=0;o<4;o++)n.fillStyle=o===1?"#da8051":"#458688",n.fillRect(31+o*116,244,94,18);return}let a=n.createLinearGradient(0,0,i,r);a.addColorStop(0,"#113e50"),a.addColorStop(1,"#216a69"),n.fillStyle=a,n.fillRect(0,0,i,r),n.fillStyle="#d5e8de",n.font="16px Arial",n.fillText("CLASSROOM",35,45),n.fillStyle="#fff3dc",n.font="bold 44px Georgia",n.fillText("Explore. Learn.",35,118);for(let o=0;o<3;o++)n.fillStyle=["#d4b985","#78b9ac","#6997bc"][o],n.fillRect(35+o*151,162,129,68)});return s.surface("screen:"+e,"#58616a",.32,{map:t,emissive:"#ffffff",emissiveMap:t,emissiveIntensity:.74})}function E0(s,e,t,n,i,r,a=0){let o=Math.max(.012,t-e-a);n.round(s,.012,1,[0,a+o/2,0],i).scale.y=o,n.round(s,.055,.014,[0,a+o-.007,0],r)}function Zb(s,e,t,n,i,r,a,o){s.rotation.y=e.direction==="rear"?Math.PI:0,E0(s,t,n.height,i,a,o);let l=new Ve;l.position.set(0,-.025,0),s.add(l);let{stemLength:c,foamLength:h,foamRadius:u}=Oi.s210;i.box(l,[.04,.038,.052],[0,.008,.008],r,.01),i.round(l,.013,c,[0,-c/2,0],r),i.round(l,u,h,[0,-c-h/2,0],i.foam,24);let p=i.geometry("s210 cap",()=>new Qa(u,24,12));i.mesh(l,p,i.foam,[0,-c-h,0]);let d=new Dt;d.position.y=-c-h-u,l.add(d),s.userData.pickupOrigin=d,s.userData.pickupJoint=l,bo(s)}function jb(s,e,t,n,i,r,a,o,l){let c=e.model.startsWith("PVC")?"PVC":e.model,[h,u,p]=Oi[c],{pivotHeight:d,lensDepth:_}=ch(e.model),g=e.depth===0?.27:e.depth===n.depth?-.27:0,m=new Ve;m.position.z=g,s.add(m);let f=u+.025,x=e.direction==="front"?Math.PI:0,y=g-Math.cos(x)*(p/2+.024);E0(s,t,n.height,i,a,o,f),i.box(s,[.025,.021,Math.abs(y)],[0,f,y/2],a),i.box(s,[.025,f+.014,.022],[0,(f-.014)/2,y],a),i.box(s,[h*.66,.012,Math.abs(y-g)+.035],[0,c==="CV210"?-.006:-.007,(y+g)/2],a,.004);let v=new Ve;v.rotation.y=x,m.add(v);let S=new Ve;S.name="camera-head",S.position.y=d,S.rotation.y=x,m.add(S);function b(M,E,D,L){let U=i.round(M,E,.015,[0,L,D-.011],r,28);U.rotation.x=Math.PI/2;let B=i.round(M,E*.66,.006,[0,L,D-.003],l,28);B.rotation.x=Math.PI/2}if(c==="CV210"){i.box(S,[h,u,p-.01],[0,-.009,-.005],r,.024),b(S,.019,_,0);return}i.box(v,[h,.039,p],[0,.0195,0],c==="CV870"?o:r,.008),c==="CV870"&&b(v,.013,p/2+.006,.021);let T=new Ve;S.add(T),T.name="camera-yoke";for(let M of[-1,1]){i.box(T,[.019,.082,.042],[M*.064,-.027,0],a,.009);let E=i.box(T,[.046,.021,.043],[M*.046,-.068,0],a,.008);E.rotation.z=M*.29}i.box(T,[.081,.024,.06],[0,-.066,0],a,.01);let C=i.round(S,u-d,_+.04,[0,0,(_-.048)/2],c==="CV870"?o:r,28);C.rotation.x=Math.PI/2,b(S,.047,_,0)}function Jb(s,e,t,n,i){let{kind:r,size:a,wallSide:o}=e,l=r==="station",c=r==="display",h=l?Oi.station[0]-.028:Kn(a),u=l?Oi.station[1]-.032:cs(a),{bezel:p,chin:d,depth:_}=l?{bezel:.014,chin:.018,depth:Oi.station[2]}:Oi[r],g=new Ve;c&&(g.position.x=(o==="left"?1:-1)*(h/2+.18),t.box(s,[Math.abs(g.position.x),.048,.052],[g.position.x/2,0,.055],i,.006)),s.add(g),t.box(g,[.18,.13,.07],[0,0,.04],i,.007);let m=.112+_;t.box(g,[h+2*p,u+p+d,_],[0,(p-d)/2,m-_/2],n,.007);let f=t.mesh(g,t.geometry(["panel",h,u].join("/"),()=>new On(h,u)),Ud(t,l?"station":"lesson"),[0,0,m+.001]);f.castShadow=!1,(r==="ifp"||l)&&(s.userData.avScreen=f),r==="ifp"&&t.box(g,[.28,.012,.027],[0,-u/2-.02,m+.009],i,.005)}function Kb(s,e,t,n,i,r){let[a,o,l]=Oi.NDP600,c=-o;n.box(s,[a,.044,l],[0,c+.022,0],i,.012);let h=new Ve;h.position.set(0,-.117,0),h.rotation.x=-.59,s.add(h),n.box(h,[a-.006,.027,.366],[0,0,0],i,.013),s.userData.avScreen=n.box(h,[.523,.002,.294],[-.068,.015,.009],Ud(n,"lesson"),.001),s.userData.avControl=n.box(h,[.111,.002,.22],[.265,.015,-.018],Ud(n,"control"),.001),n.box(s,[.88,.038,.52],[0,c-.019,0],n.wood,.009);let u=Math.min(t.width-.8,t.width*.82)/2,p=Math.min(1.8,t.depth*.2);for(let d of[-.37,.37])for(let _ of[-.202,.202]){let m=(Math.abs(s.position.x+d-t.width/2)<u&&s.position.z+_<p?.08:0)-e,f=Math.max(.01,c-.038-m);n.box(s,[.04,1,.04],[d,m+f/2,_],r).scale.y=f}}function Fd(s,e,t,n,i){let r=i.surface("device body","#262e35",.43,{metalness:.24}),a=i.surface("mount hardware","#768488",.36,{metalness:.54}),o=i.surface("camera silver","#d4dadd",.32,{metalness:.31}),l=i.surface("lens glass","#1e485c",.14,{metalness:.42});if(e.kind==="s210")Zb(s,e,t,n,i,r,a,o);else if(e.kind==="teacher"||e.kind==="student")jb(s,e,t,n,i,r,a,o,l);else if(e.kind==="ndp")Kb(s,t,n,i,r,a);else if(e.kind==="speaker"){s.rotation.y={rear:0,front:Math.PI,right:Math.PI/2,left:-Math.PI/2}[e.direction];let[c,h,u]=Oi.PS610;i.box(s,[.095,.13,.11],[0,0,.055],a,.008),i.box(s,[c,h,u],[0,0,.092+u/2],r,.025),i.box(s,[c-.022,h-.02,.017],[0,0,.09+u],i.grille,.008)}else Jb(s,e,i,r,a)}var Eo=new P;function Qn(s,e,t,n,i,r){let a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;Eo.copy(e),Eo[n]=0,Eo.normalize();let c=.5*a/(a+o),h=1-Eo.angleTo(s)/l;return Math.sign(Eo[t])===1?h*c:o/(a+o)+c+c*(1-h)}var dh=class s extends Tt{constructor(e=1,t=1,n=1,i=2,r=.1){let a=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new P,c=new P,h=new P(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,p=this.attributes.normal.array,d=this.attributes.uv.array,_=u.length/6,g=new P,m=.5/a;for(let f=0,x=0;f<u.length;f+=3,x+=2)switch(l.fromArray(u,f),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[f+0]=h.x*Math.sign(l.x)+c.x*r,u[f+1]=h.y*Math.sign(l.y)+c.y*r,u[f+2]=h.z*Math.sign(l.z)+c.z*r,p[f+0]=c.x,p[f+1]=c.y,p[f+2]=c.z,Math.floor(f/_)){case 0:g.set(1,0,0),d[x+0]=Qn(g,c,"z","y",r,n),d[x+1]=1-Qn(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),d[x+0]=1-Qn(g,c,"z","y",r,n),d[x+1]=1-Qn(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),d[x+0]=1-Qn(g,c,"x","z",r,e),d[x+1]=Qn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[x+0]=1-Qn(g,c,"x","z",r,e),d[x+1]=1-Qn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[x+0]=1-Qn(g,c,"x","y",r,e),d[x+1]=1-Qn(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),d[x+0]=Qn(g,c,"x","y",r,e),d[x+1]=1-Qn(g,c,"y","x",r,t);break}}static fromJSON(e){return new s(e.width,e.height,e.depth,e.segments,e.radius)}};function fh(){let s=new Map,e=new Map,t=new Map;function n(d,_,g,m){if(!t.has(d)){let f=document.createElement("canvas");f.width=_,f.height=g,m(f.getContext("2d"),_,g);let x=new Ni(f);x.colorSpace=Pt,x.wrapS=x.wrapT=$n,x.anisotropy=4,t.set(d,x)}return t.get(d)}function i(d,_){return n(d,128,128,(g,m,f)=>{let x=g.createImageData(m,f),y=19;for(let v=0;v<f;v++)for(let S=0;S<m;S++){y=Math.imul(y,1664525)+1013904223>>>0;let b=_(S,v,y/4294967296),T=(v*m+S)*4;x.data[T]=x.data[T+1]=x.data[T+2]=b,x.data[T+3]=255}g.putImageData(x,0,0)})}function r(d,_,g=.65,m={}){if(!e.has(d)){let f=new tn({color:_,roughness:g,...m});f.userData.fidelityShared=!0,e.set(d,f)}return e.get(d)}function a(d,_){if(!s.has(d)){let g=_();g.userData.fidelityShared=!0,s.set(d,g)}return s.get(d)}let o=(d,_=0)=>a([_,...d].join("/"),()=>_?new dh(...d,2,_):new Tt(...d)),l=(d,_,g=16)=>a(["cylinder",d,_,g].join("/"),()=>new Os(d,d,_,g));function c(d,_,g,m){let f=new Xe(_,g);return f.position.set(...m),f.castShadow=f.receiveShadow=!0,d.add(f),f}let h=i("wood",(d,_,g)=>{let m=_+2.6*Math.sin(d/30)+1.6*Math.sin(d/12+_/18);return 192+13*Math.sin(m*.72)+12*Math.sin(m*.24)+16*g}),u=i("grille",(d,_,g)=>(d%4===1&&_%4===1?82:156)+g*32),p=i("foam",(d,_,g)=>139+g*92);return{surface:r,texture:n,geometry:a,cube:o,cylinder:l,mesh:c,box:(d,_,g,m,f)=>c(d,o(_,f),m,g),round:(d,_,g,m,f,x)=>c(d,l(_,g,x),f,m),wood:r("oak","#e4b686",.57,{map:h,bumpMap:h,bumpScale:9e-4}),grille:r("speaker grille","#2b3035",.94,{map:u,bumpMap:u,bumpScale:.0015}),foam:r("microphone foam","#252b2e",.95,{map:p,bumpMap:p,bumpScale:8e-4}),releaseRoomGeometry(){for(let[d,_]of s)d.startsWith("room:")&&(_.dispose(),s.delete(d))},dispose(){for(let d of[s,e,t]){for(let _ of d.values())_.dispose();d.clear()}}}}var w0,js=(s,e=0,t=.5)=>new tn({color:s,metalness:e,roughness:t}),ph=js("#172536",.18),jr=js("#748895",.55),Od=js("#e0e7e9",.22),Bd=js("#22638b",.05,.2);function Qb(){let s=document.createElement("canvas");s.width=1024,s.height=576;let e=s.getContext("2d"),t=e.createLinearGradient(0,0,1024,576);t.addColorStop(0,"#f7fdff"),t.addColorStop(1,"#bbebfa"),e.fillStyle=t,e.fillRect(0,0,1024,576),e.fillStyle="#1769a0",e.fillRect(0,0,1024,92),e.fillStyle="#fff",e.font="bold 48px Arial",e.fillText("CLASSROOM",48,62),e.fillStyle="#13446c",e.font="bold 54px Arial",e.fillText("Explore \xB7 Learn \xB7 Create",65,215),e.font="31px Arial",e.fillText("Interactive lesson display",68,275),e.fillStyle="#2ab9b4",e.fillRect(70,327,285,125),e.fillStyle="#48a4da",e.fillRect(380,327,245,125),e.fillStyle="#f2b968",e.fillRect(650,327,300,125);let n=new Ni(s);return n.colorSpace=Pt,new Sn({map:n,toneMapped:!1})}var T0=Qb();for(let s of[ph,jr,Od,Bd,T0])s.userData.fidelityShared=!0;function En(s,e,t,n){let i=new Xe(new Tt(...e),n);return i.position.set(...t),i.castShadow=!0,i.receiveShadow=!0,s.add(i),i}function e1(s,e,t,n,i){let r=new Xe(new Os(e,e,Math.max(.01,t),16),i);return r.position.set(...n),r.castShadow=!0,s.add(r),r}function t1(s,e,t=!1,n=!1,i=null){let r=n?.72:Kn(e),a=n?.43:cs(e),o=t?new Ve:s;if(t){let l=(i==="left"?1:-1)*(r/2+.18);En(s,[Math.abs(l),.055,.055],[l/2,0,.05],jr),o.position.x=l,s.add(o)}if(En(o,[.22,.17,.1],[0,0,.05],jr),En(o,[r,a,.07],[0,0,.18],ph),n)s.userData.avScreen=En(o,[r-.07,a-.07,.008],[0,0,.224],js("#24506a",0,.23));else{let l=new Xe(new On(r-.07,a-.07),T0);l.position.set(0,0,.229),l.receiveShadow=!0,o.add(l),t||(s.userData.avScreen=l)}n&&(s.userData.avDecorations=["#2da6aa","#80b8d3","#e1b36b"].map((l,c)=>En(o,[.1,.1,.01],[-.18+c*.17,-.02,.234],js(l))))}function n1(s,e){let t=js("#bb8b59");En(s,[.74,.05,.5],[0,-.07,0],t),En(s,[.68,.42,.3],[0,-.36,.02],Od),En(s,[.48,Math.max(.22,e-.52),.29],[0,-e/2-.1,.03],Od),En(s,[.7,.055,.45],[0,-e+.04,.02],jr);let n=new Ve;n.rotation.x=-.22,n.position.set(0,.02,-.035),s.add(n),En(n,[.64,.035,.37],[0,0,0],ph),s.userData.avScreen=En(n,[.46,.008,.26],[-.058,.024,0],Bd),s.userData.avControl=En(n,[.098,.008,.197],[.239,.024,0],Bd)}function i1(s,e){s.rotation.y={rear:0,front:Math.PI,right:Math.PI/2,left:-Math.PI/2}[e],En(s,[.14,.12,.16],[0,0,.08],jr),En(s,[.43,.55,.28],[0,0,.28],ph),e1(s,.115,.025,[0,-.08,.43],jr).rotation.x=Math.PI/2}function A0(s,e,t,n){let i=new Ve;i.name=s.name,i.userData.deviceId=s.id,i.userData.direction=s.direction,i.position.set(s.x,e,s.depth),n?Fd(i,s,e,t,n):["s210","teacher","student"].includes(s.kind)?(w0??(w0=fh()),Fd(i,s,e,t,w0)):["ifp","display","station"].includes(s.kind)?t1(i,s.size,s.kind==="display",s.kind==="station",s.wallSide):s.kind==="speaker"?i1(i,s.direction):s.kind==="ndp"&&n1(i,e);let r=new Xe(new eo(s.kind==="ifp"?.7:.38,.016,8,48),new Sn({color:s.color,transparent:!0,opacity:.88,depthTest:!1}));return r.rotation.x=Math.PI/2,r.position.y=s.kind==="ndp"?.12:0,s.kind==="display"&&(r.position.x=(s.wallSide==="left"?1:-1)*(Kn(s.size)/2+.18)),s.kind==="speaker"&&(r.position.z=n?.21:.28),r.raycast=()=>{},r.visible=!1,i.userData.halo=r,i.add(r),i}var kn=s=>["teacher","student"].includes(s.kind),Jr=s=>s*Math.PI/180,mh=s=>2*Math.atan(Math.tan(Jr(s)/2)*9/16)*180/Math.PI;function zd(s,e,t,n={},i=!1){let r=(s.direction==="front"?Math.PI:0)+Jr(n.pan||0),a=new vn().setFromEuler(new yn(Jr(n.tilt||0),r,0,"YXZ")),o=s.depth===0?.27:s.depth===t.depth?-.27:0,{pivotHeight:l,lensDepth:c}=i?ch(s.model):{pivotHeight:.21,lensDepth:s.model.startsWith("PVC")?.31:.2575},h=new P(s.x,e+l,s.depth+o),u=new P(0,0,c).applyQuaternion(a).add(h),p=new P(0,0,1).applyQuaternion(a),d=new P(1,0,0).applyQuaternion(a),_=new P(0,1,0).applyQuaternion(a);return{origin:u,pivot:h,quaternion:a,forward:p,right:d,up:_}}function kd(s,e,t,n,i={},r=!1){let a=s.getObjectByName("camera-head");if(a&&(a.quaternion.copy(zd(e,t,n,i,r).quaternion),r)){let o=a.getObjectByName("camera-yoke");o&&(o.rotation.x=-Jr(i.tilt||0))}}var hs=1e-8;function R0(s){return s.filter((e,t)=>s.findIndex(n=>n.distanceToSquared(e)<hs*hs)===t)}function C0(s){if(s.length<3)return!1;let e=s[1].clone().sub(s[0]);return s.slice(2).some(t=>e.clone().cross(t.clone().sub(s[0])).lengthSq()>hs*hs)}function s1(s,e,t){let n=[];for(let i=0;i<s.length;i++){let r=s[i],a=s[(i+1)%s.length],o=e(r),l=e(a),c=o>=-hs,h=l>=-hs;if(c&&n.push(r),c!==h){let u=r.clone().lerp(a,o/(o-l));n.push(u),t.push(u)}}return R0(n)}function r1(s,e){let t=s.reduce((a,o)=>a.add(o),new P).multiplyScalar(1/s.length),i=(Math.abs(e.y)<.9?new P(0,1,0):new P(1,0,0)).cross(e).normalize(),r=e.clone().cross(i);return s.sort((a,o)=>{let l=a.clone().sub(t),c=o.clone().sub(t);return Math.atan2(l.dot(r),l.dot(i))-Math.atan2(c.dot(r),c.dot(i))})}function a1(s,e){let t=[[new P(1,0,0),0,"wall"],[new P(-1,0,0),e.width,"wall"],[new P(0,1,0),0,"floor"],[new P(0,-1,0),e.height,"ceiling"],[new P(0,0,1),0,"wall"],[new P(0,0,-1),e.depth,"wall"]],n=s;for(let[i,r,a]of t){let o=[],l=h=>i.dot(h)+r;n=n.map(h=>({...h,points:s1(h.points,l,o)})).filter(h=>C0(h.points));let c=R0(o);if(C0(c)&&n.push({kind:a,points:r1(c,i)}),!n.length)break}return n}function P0(s,e,t,n,i=!1){let r=zd(s,e,t,n,i),a=n.hfov,o=mh(a),l=Math.hypot(t.width,t.depth,t.height)*2+2,c=r.origin.clone().addScaledVector(r.forward,l),h=l*Math.tan(Jr(a)/2),u=h*9/16,p=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([g,m])=>c.clone().addScaledVector(r.right,h*g).addScaledVector(r.up,u*m)),d=[{kind:"far",points:p}];for(let g=0;g<4;g++)d.push({kind:"frustum",points:[r.origin,p[g],p[(g+1)%4]]});let _=a1(d,t);return{...r,hfov:a,vfov:o,faces:_,floor:_.find(g=>g.kind==="floor")?.points||[],centerEnd:o1(r.origin,r.forward,t)}}function o1(s,e,t){let n=0,i=1/0;for(let[r,a]of[["x",t.width],["y",t.height],["z",t.depth]]){if(Math.abs(e[r])<hs){if(s[r]<0||s[r]>a)return null;continue}let o=-s[r]/e[r],l=(a-s[r])/e[r];n=Math.max(n,Math.min(o,l)),i=Math.min(i,Math.max(o,l))}return i>=n&&i>hs?s.clone().addScaledVector(e,i):null}var gh=class extends Ns{constructor(){super();let e=new Tt;e.deleteAttribute("uv");let t=new tn({side:Yt}),n=new tn,i=new ao(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Xe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Ii(e,n,6),o=new Dt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Xe(e,Kr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Xe(e,Kr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Xe(e,Kr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Xe(e,Kr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let p=new Xe(e,Kr(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let d=new Xe(e,Kr(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Kr(s){return new io({color:0,emissive:16777215,emissiveIntensity:s})}var Qr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Vn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},l1=new ks(-1,1,1,-1,0,1),Vd=class extends _t{constructor(){super(),this.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new it([0,2,0,0,2,0],2))}},c1=new Vd,us=class{constructor(e){this._mesh=new Xe(c1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,l1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ea=class extends Vn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof It?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=jn.clone(e.uniforms),this.material=new It({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new us(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var wo=class extends Vn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},_h=class extends Vn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var xh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ce);this._width=n.width,this._height=n.height,t=new dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:di}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ea(Qr),this.copyPass.material.blending=Ut,this.clock=new lo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}wo!==void 0&&(a instanceof wo?n=!0:a instanceof _h&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var vh=class extends Vn{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new He}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var To={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ce},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ze},cameraProjectionMatrixInverse:{value:new Ze},cameraWorldMatrix:{value:new Ze},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new P(-1,-1,-1)},sceneBoxMax:{value:new P(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Ao={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},yh={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function D0(s=5){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=h1(e),n=t.length,i=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new P(Math.cos(l),Math.sin(l),0).normalize();i[a*4]=(c.x*.5+.5)*255,i[a*4+1]=(c.y*.5+.5)*255,i[a*4+2]=127,i[a*4+3]=255}let r=new es(i,e,e);return r.wrapS=$n,r.wrapT=$n,r.needsUpdate=!0,r}function h1(s){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,n=Array(t).fill(0),i=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(i===-1&&r===e?(r=e-2,i=0):(r===e&&(r=0),i<0&&(i=e-1)),n[i*e+r]!==0){r-=2,i++;continue}else n[i*e+r]=a++;r++,i--}return n}var Co={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Hd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ce},cameraProjectionMatrixInverse:{value:new Ze},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Hd(s,e,t){let n=u1(s,e,t),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let a=n[r];i+=`vec3(${a.x}, ${a.y}, ${a.z})${r<s-1?",":")"}`}return i}function u1(s,e,t){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*e*i/s,a=Math.pow(i/(s-1),t);n.push(new P(Math.cos(r),Math.sin(r),a))}return n}var Sh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,i,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,p=l-u,d=c-u,_=e-p,g=t-d,m,f;_>g?(m=1,f=0):(m=0,f=1);let x=_-m+h,y=g-f+h,v=_-1+2*h,S=g-1+2*h,b=l&255,T=c&255,C=this.perm[b+this.perm[T]]%12,M=this.perm[b+m+this.perm[T+f]]%12,E=this.perm[b+1+this.perm[T+1]]%12,D=.5-_*_-g*g;D<0?n=0:(D*=D,n=D*D*this._dot(this.grad3[C],_,g));let L=.5-x*x-y*y;L<0?i=0:(L*=L,i=L*L*this._dot(this.grad3[M],x,y));let U=.5-v*v-S*S;return U<0?r=0:(U*=U,r=U*U*this._dot(this.grad3[E],v,S)),70*(n+i+r)}noise3d(e,t,n){let i,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),p=Math.floor(n+c),d=1/6,_=(h+u+p)*d,g=h-_,m=u-_,f=p-_,x=e-g,y=t-m,v=n-f,S,b,T,C,M,E;x>=y?y>=v?(S=1,b=0,T=0,C=1,M=1,E=0):x>=v?(S=1,b=0,T=0,C=1,M=0,E=1):(S=0,b=0,T=1,C=1,M=0,E=1):y<v?(S=0,b=0,T=1,C=0,M=1,E=1):x<v?(S=0,b=1,T=0,C=0,M=1,E=1):(S=0,b=1,T=0,C=1,M=1,E=0);let D=x-S+d,L=y-b+d,U=v-T+d,B=x-C+2*d,k=y-M+2*d,z=v-E+2*d,$=x-1+3*d,H=y-1+3*d,ee=v-1+3*d,se=h&255,de=u&255,Re=p&255,ze=this.perm[se+this.perm[de+this.perm[Re]]]%12,Be=this.perm[se+S+this.perm[de+b+this.perm[Re+T]]]%12,Ue=this.perm[se+C+this.perm[de+M+this.perm[Re+E]]]%12,Z=this.perm[se+1+this.perm[de+1+this.perm[Re+1]]]%12,K=.6-x*x-y*y-v*v;K<0?i=0:(K*=K,i=K*K*this._dot3(this.grad3[ze],x,y,v));let X=.6-D*D-L*L-U*U;X<0?r=0:(X*=X,r=X*X*this._dot3(this.grad3[Be],D,L,U));let fe=.6-B*B-k*k-z*z;fe<0?a=0:(fe*=fe,a=fe*fe*this._dot3(this.grad3[Ue],B,k,z));let ne=.6-$*$-H*H-ee*ee;return ne<0?o=0:(ne*=ne,o=ne*ne*this._dot3(this.grad3[Z],$,H,ee)),32*(i+r+a+o)}noise4d(e,t,n,i){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,p,d,_,g=(e+t+n+i)*l,m=Math.floor(e+g),f=Math.floor(t+g),x=Math.floor(n+g),y=Math.floor(i+g),v=(m+f+x+y)*c,S=m-v,b=f-v,T=x-v,C=y-v,M=e-S,E=t-b,D=n-T,L=i-C,U=M>E?32:0,B=M>D?16:0,k=E>D?8:0,z=M>L?4:0,$=E>L?2:0,H=D>L?1:0,ee=U+B+k+z+$+H,se=a[ee][0]>=3?1:0,de=a[ee][1]>=3?1:0,Re=a[ee][2]>=3?1:0,ze=a[ee][3]>=3?1:0,Be=a[ee][0]>=2?1:0,Ue=a[ee][1]>=2?1:0,Z=a[ee][2]>=2?1:0,K=a[ee][3]>=2?1:0,X=a[ee][0]>=1?1:0,fe=a[ee][1]>=1?1:0,ne=a[ee][2]>=1?1:0,be=a[ee][3]>=1?1:0,Qe=M-se+c,I=E-de+c,$e=D-Re+c,De=L-ze+c,we=M-Be+2*c,_e=E-Ue+2*c,tt=D-Z+2*c,ye=L-K+2*c,ke=M-X+3*c,Et=E-fe+3*c,ft=D-ne+3*c,R=L-be+3*c,w=M-1+4*c,V=E-1+4*c,Y=D-1+4*c,te=L-1+4*c,q=m&255,Me=f&255,le=x&255,ve=y&255,Ae=o[q+o[Me+o[le+o[ve]]]]%32,ae=o[q+se+o[Me+de+o[le+Re+o[ve+ze]]]]%32,me=o[q+Be+o[Me+Ue+o[le+Z+o[ve+K]]]]%32,Le=o[q+X+o[Me+fe+o[le+ne+o[ve+be]]]]%32,Ce=o[q+1+o[Me+1+o[le+1+o[ve+1]]]]%32,ue=.6-M*M-E*E-D*D-L*L;ue<0?h=0:(ue*=ue,h=ue*ue*this._dot4(r[Ae],M,E,D,L));let Fe=.6-Qe*Qe-I*I-$e*$e-De*De;Fe<0?u=0:(Fe*=Fe,u=Fe*Fe*this._dot4(r[ae],Qe,I,$e,De));let N=.6-we*we-_e*_e-tt*tt-ye*ye;N<0?p=0:(N*=N,p=N*N*this._dot4(r[me],we,_e,tt,ye));let ie=.6-ke*ke-Et*Et-ft*ft-R*R;ie<0?d=0:(ie*=ie,d=ie*ie*this._dot4(r[Le],ke,Et,ft,R));let he=.6-w*w-V*V-Y*Y-te*te;return he<0?_=0:(he*=he,_=he*he*this._dot4(r[Ce],w,V,Y,te)),27*(h+u+p+d+_)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}_dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}};var Ro=class s extends Vn{constructor(e,t,n=512,i=512,r,a,o){super(),this.width=n,this.height=i,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=D0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new dn(this.width,this.height,{type:di}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new It({defines:Object.assign({},To.defines),uniforms:jn.clone(To.uniforms),vertexShader:To.vertexShader,fragmentShader:To.fragmentShader,blending:Ut,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new no,this.normalMaterial.blending=Ut,this.pdMaterial=new It({defines:Object.assign({},Co.defines),uniforms:jn.clone(Co.uniforms),vertexShader:Co.vertexShader,fragmentShader:Co.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new It({defines:Object.assign({},Ao.defines),uniforms:jn.clone(Ao.uniforms),vertexShader:Ao.vertexShader,fragmentShader:Ao.fragmentShader,blending:Ut}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new It({uniforms:jn.clone(Qr.uniforms),vertexShader:Qr.vertexShader,fragmentShader:Qr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:fo,blendDst:Vs,blendEquation:Un,blendSrcAlpha:uo,blendDstAlpha:Vs,blendEquationAlpha:Un}),this.blendMaterial=new It({uniforms:jn.clone(yh.uniforms),vertexShader:yh.vertexShader,fragmentShader:yh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:tc,blendSrc:fo,blendDst:Vs,blendEquation:Un,blendSrcAlpha:uo,blendDstAlpha:Vs,blendEquationAlpha:Un}),this._fsQuad=new us(null),this._originalClearColor=new He,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Fs,this.depthTexture.format=ls,this.depthTexture.type=os,this.normalRenderTarget=new dn(this.width,this.height,{minFilter:Xt,magFilter:Xt,type:di,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Hd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ut,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ut,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ut,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ut,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ut,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,i,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,i,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Sh,n=e*e*4,i=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;i[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,i[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,i[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,i[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new es(i,e,e,Mn,zn);return r.wrapS=$n,r.wrapT=$n,r.needsUpdate=!0,r}};Ro.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Po={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Mh=class extends Vn{constructor(){super(),this.uniforms=jn.clone(Po.uniforms),this.material=new to({name:Po.name,uniforms:this.uniforms,vertexShader:Po.vertexShader,fragmentShader:Po.fragmentShader}),this._fsQuad=new us(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Je.getTransfer(this._outputColorSpace)===nt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===hc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===uc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===dc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Vr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===pc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===mc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===fc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var I0={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new ce(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`};var Bi=1,Gd=class extends Ro{render(...e){let t=this.camera.layers.mask;this.camera.layers.disable(Bi);try{super.render(...e)}finally{this.camera.layers.mask=t}}};function L0({renderer:s,scene:e,camera:t,ambient:n,sun:i}){if(!s.extensions.has("EXT_color_buffer_float"))throw new Error("Floating point color attachments are unavailable");let r=s.getPixelRatio(),a=i.shadow.camera.clone(),o=i.shadow.autoUpdate,l=i.position.clone(),c=n.intensity,h=i.intensity,u,p,d,_,g;function m(){e.environment=null,e.environmentIntensity=1,e.overrideMaterial=null,t.layers.disable(Bi),i.shadow.autoUpdate=o,i.shadow.camera.copy(a),i.shadow.camera.updateProjectionMatrix(),i.position.copy(l),i.target.position.set(0,0,0),i.target.removeFromParent(),i.intensity=h,n.intensity=c,s.setRenderTarget(null),s.setPixelRatio(r),d?.gtaoMaterial.dispose(),d?.blendMaterial.dispose(),d?.dispose(),_?.dispose(),g?.dispose(),p?.dispose(),u?.dispose()}try{let f=new gh,x=new Yr(s);try{u=x.fromScene(f,.04)}finally{f.traverse(y=>{y.isInstancedMesh&&y.dispose()}),f.dispose(),x.dispose()}e.environment=u.texture,e.environmentIntensity=.44,n.intensity=1.04,i.intensity=2.55,i.shadow.autoUpdate=!1,e.add(i.target),t.layers.enable(Bi),s.setPixelRatio(Math.min(r,1.25)),p=new xh(s),p.addPass(new vh(e,t)),d=new Gd(e,t,1,1,void 0,{radius:.24,distanceExponent:1,samples:8},{radius:5,samples:8}),d.blendIntensity=.48,p.addPass(d),_=new Mh,p.addPass(_),g=new ea(I0),p.addPass(g)}catch(f){throw m(),f}return{resize(f,x){p.setSize(f,x);let y=Math.min(.55,720/Math.max(f,x));d.setSize(Math.max(1,Math.round(f*y)),Math.max(1,Math.round(x*y))),g.uniforms.resolution.value.set(1/s.domElement.width,1/s.domElement.height)},fitLights({width:f,depth:x,height:y}){let v=Math.hypot(f,x)/2+y;i.position.set(f/2-8,y+15,x/2+5),i.target.position.set(f/2,0,x/2),Object.assign(i.shadow.camera,{left:-v,right:v,top:v,bottom:-v,near:.25,far:v*2+30}),i.shadow.camera.updateProjectionMatrix()},render(){p.render()},invalidateShadows(){i.shadow.needsUpdate=!0},dispose:m}}function ta(s){s?.traverse(e=>{e.geometry?.dispose();for(let t of Array.isArray(e.material)?e.material:[e.material])t?.dispose()}),s?.parent?.remove(s)}function N0(s,e,t){let n=[];for(let r=1;r<s.length-1;r++)for(let a of[s[0],s[r],s[r+1]])n.push(a.x,a.y,a.z);let i=new _t().setAttribute("position",new it(n,3));return new Xe(i,new Sn({color:e,transparent:!0,opacity:t,side:nn,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1}))}function Wd(s,e,t=!0){let n=new _t().setFromPoints(s),i=new Zn({color:e,transparent:!0,opacity:.68,toneMapped:!1});return t?new Li(n,i):new Us(n,i)}function d1(s,e){let t=new Ve,n=new Ve;t.name="camera-view-volume",n.name="camera-floor-intersection";for(let i of s.faces)t.add(N0(i.points,e,i.kind==="frustum"?.065:.09)),t.add(Wd(i.points,e));if(s.centerEnd){let i=Wd([s.origin,s.centerEnd],e,!1);i.name="camera-view-center",t.add(i)}if(s.floor.length>=3){let i=s.floor.map(r=>new P(r.x,.055,r.z));n.add(N0(i,e,.14),Wd(i,e))}return{group:t,floor:n}}var bh=class{constructor(e){this.volumeRoot=new Ve,this.floorRoot=new Ve,this.entries=new Map,this.volumeRoot.name="camera-frusta",this.floorRoot.name="camera-floor-coverage",e.add(this.volumeRoot,this.floorRoot)}sync(e,t,n,i,r,a=!1){let o=e.filter(kn),l=new Set(o.map(c=>c.id));for(let[c,h]of this.entries)l.has(c)||(ta(h.group),ta(h.floor),this.entries.delete(c));for(let c of o){let h=i.settings.get(c.id),u=JSON.stringify([c.model,c.x,c.depth,c.direction,t[c.id],n.width,n.height,n.depth,h,a]),p=this.entries.get(c.id);if(p?.key!==u){p&&(ta(p.group),ta(p.floor));let g=P0(c,t[c.id],n,h,!0);if(p={...d1(g,c.kind==="teacher"?"#e87836":"#288fda"),key:u,geometry:g},a)for(let m of[p.group,p.floor])m.traverse(f=>f.layers.set(Bi));this.volumeRoot.add(p.group),this.floorRoot.add(p.floor),this.entries.set(c.id,p)}let d=c.id===i.activeId,_=r[c.kind]!==!1;p.group.visible=i.enabled&&_&&(!i.onlyCurrent||d),p.floor.visible=_&&(!i.onlyCurrent||d),p.group.traverse(g=>{g.material&&(g.material.opacity=g.isLine?d?.9:.42:d?.095:.045)})}}setFloorVisible(e){this.floorRoot.visible=e}dispose(){ta(this.volumeRoot),ta(this.floorRoot),this.entries.clear()}};var Eh=.08,f1=1.2,p1=.55,m1=.75,U0=3,g1=.6;function qd({width:s,depth:e},t){let n=Math.max(1,Math.floor(s/3.2)),i=Math.max(1,Math.floor((e-2.5)/2.5)),r=e-Eh/2-g1-t,a=i>1?(r-U0)/(i-1):0;return Array.from({length:i*n},(o,l)=>[(l%n+.5)*s/n,0,U0+Math.floor(l/n)*a])}function F0(s,e){let t=new Ve;t.name="reference-furniture";let n=new Ve,i=e.surface("furniture steel","#646e70",.38,{metalness:.53}),r=e.surface("rubber","#30363a",.96),a=e.surface("chair shell","#547c7a",.59),{box:o,round:l,mesh:c,geometry:h}=e,u=.032;o(n,[f1,u,p1],[0,m1-u/2,0],e.wood,.014),o(n,[1.06,.043,.037],[0,.69,-.18],i,.006);for(let f of[-.54,.54]){o(n,[.038,.038,.44],[f,.68,0],i,.006);for(let x of[-.21,.21])o(n,[.038,.71,.038],[f,.361,x],i,.007),o(n,[.045,.014,.045],[f,.007,x],r,.005)}let p=h("chair back",()=>{let f=e.cube([.4,.27,.032],.015).clone(),{position:x,normal:y}=f.attributes,v=new P;for(let S=0;S<x.count;S++){let b=x.getX(S),T=x.getY(S);x.setZ(S,x.getZ(S)+.14*T-.46*b*b);let C=y.getZ(S);v.set(y.getX(S)+.92*b*C,y.getY(S)-.14*C,C).normalize(),y.setXYZ(S,v.x,v.y,v.z)}return f});for(let f of[-.27,.27]){o(n,[.4,.037,.4],[f,.432,.58],a,.018),c(n,p,a,[f,.665,.755]);for(let x of[-.15,.15]){for(let y of[.43,.73])l(n,.014,.42,[f+x,.219,y],i).rotation.set(y<.58?.1:-.1,0,x<0?-.1:.1),l(n,.018,.02,[f+x*1.14,.01,y<.58?y-.021:y+.021],r);l(n,.013,.31,[f+x,.57,.748],i).rotation.x=.07}}let d=new fn().setFromObject(n,!0),_=qd(s,d.max.z),g=new Map;for(let f of n.children){let x=[f.geometry.id,f.material.id].join("/");g.has(x)||g.set(x,[]),g.get(x).push(f)}let m=new Ze;for(let f of g.values()){let[x]=f,y=new Ii(x.geometry,x.material,_.length*f.length),v=0;for(let[S,b,T]of _)for(let C of f)y.setMatrixAt(v++,m.copy(C.matrix).setPosition(S+C.position.x,b+C.position.y,T+C.position.z));y.castShadow=y.receiveShadow=!0,t.add(y)}return t}function O0({width:s,depth:e,height:t},n,i){let r=new Ve;r.name="fidelity-room";let a=i.surface("plaster","#ede9df",.94),o=i.surface("skirting","#c5c2b8",.69),l=i.surface("door frame","#526568",.56),c=i.surface("door window","#a5bbc4",.26,{metalness:.26}),h=i.surface("door handle","#8a979d",.31,{metalness:.7}),u=i.texture("tile",128,128,(y,v,S)=>{y.fillStyle="#a3a09a",y.fillRect(0,0,v,S),y.fillStyle="#e2dfd7",y.fillRect(1,1,v-2,S-2);for(let b=0;b<240;b++)y.fillStyle=b%2?"#d9d6d0":"#ebe7e0",y.fillRect(b*43%v,b*67%S,1,1)}),p=i.surface("tile","#d8d3c9",.82,{map:u,bumpMap:u,bumpScale:.0014});function d(y,v,S,b){let T=i.geometry("room:"+v.join("/"),()=>new Tt(...v));return i.mesh(y,T,b,S)}let _=i.geometry("room:floor",()=>{let y=new On(s,e),v=y.attributes.uv;for(let S=0;S<v.count;S++)v.setXY(S,v.getX(S)*s/.6,v.getY(S)*e/.6);return y}),g=d(r,[s,.12,e],[s/2,-.061,e/2],o),m=i.mesh(r,_,p,[s/2,0,e/2]);m.rotation.x=-Math.PI/2,g.castShadow=m.castShadow=!1;let f=Math.min(1.8,e*.2);d(r,[Math.min(s-.8,s*.82),.08,f],[s/2,.04,f/2],i.wood);let x={};for(let y of["front","rear","left","right"]){let C=function(U,B,k=0){let z=B-U;if(z<=0||k>=t)return;let $=(U+B)/2;d(v,[z,t-k,.07],[$,(t+k)/2,-T*.018],a).castShadow=!1,!k&&y!==n&&(d(v,[z,.083,Eh],[$,.0415,0],o).castShadow=!1)},v=x[y]=new Ve;r.add(v);let S=y==="left"||y==="right",b=S?e:s;v.position.set(y==="right"?s:0,0,y==="rear"||S?e:0),v.rotation.y=S?Math.PI/2:0;let T=y==="front"||y==="left"?1:-1;if(y!==n){let U=d(r,[b,.075,.065],[0,.0375,0],o);U.rotation.y=v.rotation.y,U.position.add(v.position).add(new P(b/2,0,0).applyEuler(v.rotation)),U.castShadow=!1,v.userData.cutEdge=U}if(y!==n){C(0,b);continue}let M=Math.min(1.16,(e-.36)/2),E=Math.min(2.18,t-.12),D=Math.max(M/2+.08,Math.min(1.45,e*.2)),L=0;for(let U of[D,b-D]){let B=U-M/2,k=U+M/2;C(L,B),C(B,k,E);for(let z of[B+.026,k-.026])d(v,[.052,E,.105],[z,E/2,0],l).castShadow=!1;d(v,[M,.052,.105],[U,E-.026,0],l).castShadow=!1,d(v,[M-.112,E-.06,.045],[U,(E-.05)/2,T*.017],i.wood).castShadow=!1,d(v,[.18,.52,.049],[U,E*.73,T*.017],c).castShadow=!1,d(v,[.1,.026,.035],[k-.16,.95,T*.055],h).castShadow=!1,L=k}C(L,b)}return r.userData.walls=x,r}function B0(s,e,t){let{front:n,rear:i,left:r,right:a}=s.userData.walls,{x:o,z:l}=e.position;n.visible=l>=0,i.visible=l<t.depth*.46,r.visible=o>t.width*.54,a.visible=o<t.width*.46;for(let c of[n,i,r,a])c.userData.cutEdge&&(c.userData.cutEdge.visible=!c.visible)}function wn(s,e,t,n,i=!1){let r=new Xe(new Tt(...e),new tn({color:dr.light[n]||n,roughness:.85,transparent:i,opacity:i?.13:1,depthWrite:!i,side:nn}));Object.hasOwn(dr.light,n)&&(r.material.userData.themeRole=n),r.position.set(...t),r.castShadow=!i&&n!=="floor",r.receiveShadow=!0,s.add(r)}function Do(s){s&&(s.traverse(e=>{e.isInstancedMesh&&e.dispose(),e.geometry&&!e.geometry.userData.fidelityShared&&e.geometry.dispose(),e.material&&!e.material.userData.fidelityShared&&e.material.dispose()}),s.parent?.remove(s))}function _1({width:s,depth:e,height:t},n){let i=new Ve;i.name="room-doors";let r=n==="left"?.09:s-.09,a=Math.min(1.16,(e-.36)/2),o=Math.min(2.18,t-.12),l=Math.max(a/2+.08,Math.min(1.45,e*.2));for(let[c,h]of[l,e-l].entries()){let u=new Ve;u.name=`room-door-${c+1}`,wn(u,[.09,o,a],[r,o/2,h],"door"),wn(u,[.1,o-.14,a-.14],[r,o/2,h],"doorPanel"),wn(u,[.115,o*.22,a*.42],[r,o*.75,h],"window"),wn(u,[.15,.04,.14],[r,o*.45,h+a*.3],"handle"),i.add(u)}return i}function x1(s,e="right"){let t=new Ve,{width:n,depth:i,height:r}=s;wn(t,[n,.12,i],[n/2,-.06,i/2],"floor"),wn(t,[Math.min(n-.8,n*.82),.09,Math.min(2.1,i*.22)],[n/2,.04,Math.min(1.08,i*.12)],"platform"),wn(t,[n,r,.12],[n/2,r/2,-.07],"front");for(let l of[0,n])wn(t,[.045,r,i],[l,r/2,i/2],"glass",!0),(l===0?"left":"right")!==e&&wn(t,[.08,.5,i],[l,.25,i/2],"base"),wn(t,[.065,.06,i],[l,r-.02,i/2],"trim"),wn(t,[.065,r,.065],[l,r/2,i],"trim");wn(t,[n,r,.045],[n/2,r/2,i],"glass",!0),wn(t,[n,.5,Eh],[n/2,.25,i],"base"),t.add(_1(s,e)),wn(t,[n,.06,.065],[n/2,r-.02,i],"trim");let a=[];for(let l=1;l<n;l++)a.push(l,.015,0,l,.015,i);for(let l=1;l<i;l++)a.push(0,.015,l,n,.015,l);let o=new Ha(new _t().setAttribute("position",new it(a,3)),new Zn({color:"#bdc8c8",transparent:!0,opacity:.43}));return o.material.userData.themeRole="grid",t.add(o),t}var wh=class{constructor(e,t,n,i,r,a){this.canvas=e,this.labelContainer=t,this.onSelect=n,this.onFrame=i,this.scene=new Ns,this.scene.background=new He("#eaf0f5"),this.renderer=new ih({canvas:e,antialias:!0,preserveDrawingBuffer:!0}),this.renderer.localClippingEnabled=!0,this.reducedMotion=matchMedia("(prefers-reduced-motion: reduce)"),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=Pt,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ec,this.renderer.toneMapping=Vr,this.renderer.toneMappingExposure=1.35,this.camera=new qt(43,1,.1,250),this.controls=new ah(this.camera,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=2.2,this.controls.maxPolarAngle=Math.PI*.495,this.controls.addEventListener("start",()=>{this.viewTween=null,this.currentView=null,this.updateViewButtons()}),this.ambient=new ro("#f8fdff","#b6cad1",2.3),this.scene.add(this.ambient);let o=this.sun=new oo("#fff7e8",2.1);o.position.set(8,18,18),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),Object.assign(o.shadow.camera,{left:-45,right:45,top:45,bottom:-45,near:.5,far:100}),o.shadow.bias=-3e-4,o.shadow.normalBias=.025,this.scene.add(o),this.models=new Map,this.s210Aim=new Map,this.visibleKinds={},this.doorSide="right",this.updateData(r,a,!0),this.raycaster=new co,this.pointer=new ce,this.pointerStart=null,e.addEventListener("pointerdown",l=>{this.pointerStart=l.isPrimary&&l.button===0?{id:l.pointerId,x:l.clientX,y:l.clientY}:null}),e.addEventListener("pointerup",l=>this.pick(l)),e.addEventListener("pointercancel",()=>{this.pointerStart=null}),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e.parentElement),this.resize(),this.tick=this.tick.bind(this),requestAnimationFrame(this.tick)}updateData(e,t,n=!1){this.room=e.room,this.devicesData=e.devices,this.mountHeights={...t};let i=new Set(e.devices.filter(r=>r.kind==="s210").map(r=>r.id));for(let r of this.s210Aim.keys())i.has(r)||this.s210Aim.delete(r);this.ripplePlanes=Nd(this.room),this.rebuildVisuals(),(n||!this.models.has(this.selectedId))&&(this.selectedId=this.models.has("teacher-camera")?"teacher-camera":this.devicesData[0].id),this.setSelected(this.selectedId,!1),this.camera.far=Math.max(250,this.room.depth*6),this.camera.updateProjectionMatrix(),this.controls.maxDistance=Math.max(42,this.room.depth*6,this.room.width*6),this.setTheme(this.theme||"light"),this.setView("overview",n),this.cameraFieldState&&this.setCameraFrusta(this.cameraFieldState)}rebuildRoom(){Do(this.shell),this.assets?.releaseRoomGeometry(),this.shell=this.assets?O0(this.room,this.doorSide,this.assets):x1(this.room,this.doorSide),this.scene.add(this.shell),this.fidelity?.fitLights(this.room),this.invalidateShadows()}rebuildVisuals(){this.simulation?.clear();let e=this.furniture?.visible??!0,t=this.coverage?.visible??!1;this.rebuildRoom(),Do(this.furniture),Do(this.coverage),Do(this.devices),this.models.clear(),this.furniture=this.assets?F0(this.room,this.assets):c0(this.room,qd),this.furniture.visible=e,this.coverage=f0(this.room,this.devicesData),this.coverage.visible=t,this.fidelity&&this.coverage.traverse(n=>n.layers.set(Bi)),this.devices=new Ve,this.scene.add(this.furniture,this.coverage,this.devices);for(let n of this.devicesData)this.rebuildDevice(n);this.simulation?.refresh()}get quality(){return this.fidelity?"high":"standard"}setQuality(e){if(e===this.quality)return!0;this.simulation?.clear();let t=this.renderer.debug.onShaderError;try{if(e==="high"){let n=!1;if(this.renderer.debug.onShaderError=(...i)=>{n=!0,t?.(...i)},this.fidelity=L0(this),this.assets=fh(),this.refreshQuality(),this.renderFrame(),n||this.renderer.getContext().isContextLost())throw new Error("High fidelity render failed")}else this.releaseFidelity(),this.refreshQuality(),this.renderFrame();return!0}catch(n){return console.warn("LCS high fidelity:",n),this.releaseFidelity(),this.refreshQuality(),this.renderFrame(),!1}finally{this.renderer.debug.onShaderError=t}}releaseFidelity(){this.simulation?.clear(),this.fidelity?.dispose(),this.assets?.dispose(),this.fidelity=this.assets=null}refreshQuality(){this.rebuildVisuals(),this.setTheme(this.theme||"light"),this.cameraFieldState&&this.setCameraFrusta(this.cameraFieldState),this.resize(!1)}invalidateShadows(){this.fidelity?.invalidateShadows(),this.frameDirty=!0}renderFrame(){this.cameraFields?.setFloorVisible(this.coverage.visible),this.fidelity?(B0(this.shell,this.camera,this.room),this.fidelity.render()):this.renderer.render(this.scene,this.camera),this.frameDirty=!1}rebuildDevice(e){this.simulation?.unbind(e.id);let t=this.models.get(e.id);t&&Do(t);let n=A0(e,this.mountHeights[e.id],this.room,this.assets);this.fidelity&&n.userData.halo.layers.set(Bi);let i=n.userData.pickupOrigin;if(i){bo(n,this.s210Aim.get(e.id));let r=b0(this.ripplePlanes);this.fidelity&&r.traverse(a=>a.layers.set(Bi)),r.visible=!!this.showS210Ripples,i.add(r),n.userData.pickupRipples=r}n.visible=this.visibleKinds[e.kind]!==!1,this.models.set(e.id,n),this.devices.add(n),n.userData.halo.visible=e.id===this.selectedId,kn(e)&&this.cameraFieldState&&kd(n,e,this.mountHeights[e.id],this.room,this.cameraFieldState.settings.get(e.id),!0),this.invalidateShadows()}setRoomHeight(e,t){this.room={...this.room,height:e},this.mountHeights={...t},this.ripplePlanes=Nd(this.room),this.rebuildRoom(),this.setTheme(this.theme||"light");for(let n of this.devicesData)this.rebuildDevice(n);this.simulation?.refresh(),this.cameraFieldState&&this.setCameraFrusta(this.cameraFieldState)}setMountHeight(e,t){let n=this.devicesData.find(i=>i.id===e);n&&(this.mountHeights[e]=t,this.rebuildDevice(n),this.simulation?.refresh(),this.cameraFieldState&&this.setCameraFrusta(this.cameraFieldState))}setVisibility(e,t){this.visibleKinds[e]=t;for(let n of this.devicesData)n.kind===e&&(this.models.get(n.id).visible=t&&!this.simulation?.hides(n.id));this.invalidateShadows(),this.cameraFieldState&&this.setCameraFrusta(this.cameraFieldState)}setCameraFrusta(e){this.cameraFieldState=e,this.cameraFields||(this.cameraFields=new bh(this.scene));for(let t of this.devicesData.filter(kn))kd(this.models.get(t.id),t,this.mountHeights[t.id],this.room,e.settings.get(t.id),!0);this.cameraFields.sync(this.devicesData,this.mountHeights,this.room,e,this.visibleKinds,!!this.fidelity),this.invalidateShadows(),this.cameraFields.setFloorVisible(this.coverage.visible)}setS210Aim(e,t){let n=this.models.get(e);n?.userData.pickupJoint&&(t?this.s210Aim.set(e,t):this.s210Aim.delete(e),bo(n,t),this.invalidateShadows())}setS210Ripples(e,t){this.showS210Ripples=e,this.animateS210Ripples=t,this.frameDirty=!0;for(let n of this.models.values()){let i=n.userData.pickupRipples;i&&(i.visible=e,uh(i,0))}}setSelected(e,t=!0){if(!(e!==null&&!this.models.has(e))){this.selectedId=e,this.frameDirty=!0;for(let[n,i]of this.models)i.userData.halo.visible=n===e;e&&t&&this.onSelect(e)}}setDoorSide(e){this.doorSide=e==="left"?"left":"right",this.shell&&(this.rebuildRoom(),this.setTheme(this.theme||"light"),this.simulation?.refresh())}setTheme(e){this.theme=e;let t=dr[e];this.scene.background.set(this.fidelity?e==="dark"?"#17242c":"#e8e7e1":t.background),this.ambient.color.set(t.sky),this.ambient.groundColor.set(t.ground),this.renderer.toneMappingExposure=this.fidelity?e==="dark"?.78:1.05:t.exposure,this.frameDirty=!0,this.shell?.traverse(n=>{let i=n.material?.userData.themeRole;i&&n.material.color.set(t[i])})}updateViewButtons(){document.querySelectorAll("[data-view]").forEach(e=>{let t=e.dataset.view===this.currentView;e.classList.toggle("active",t),e.setAttribute("aria-pressed",String(t))})}viewTarget(){return new P(this.room.width/2,this.room.height*.34,this.room.depth/2)}presetPosition(e){let{width:t,depth:n,height:i}=this.room;if(e==="stage")return new P(t/2,i*.75,Math.min(2,n*.3));if(e==="audience")return new P(t*.72,i*.85,n+Math.max(2,n*.25));let r=this.viewTarget(),a=new P(...e==="top"?[.001,1,.001]:[.78,.78,.94]).normalize(),o=new P(0,1,0).cross(a).normalize(),l=a.clone().cross(o),c=Math.tan(this.camera.fov*Math.PI/360)*.8,h=c*this.camera.aspect,u=1;for(let p of[0,t])for(let d of[0,i])for(let _ of[0,n]){let g=new P(p,d,_).sub(r),m=g.dot(a);u=Math.max(u,m+Math.abs(g.dot(o))/h,m+Math.abs(g.dot(l))/c)}return r.clone().addScaledVector(a,u)}setView(e,t=!1){this.currentView=e,this.updateViewButtons();let n=this.presetPosition(e),i=this.viewTarget();if(t){this.camera.position.copy(n),this.controls.target.copy(i),this.controls.update();return}this.viewTween={started:performance.now(),fromPosition:this.camera.position.clone(),fromTarget:this.controls.target.clone(),toPosition:n,toTarget:i}}pick(e){let t=this.pointerStart;if(this.pointerStart=null,!t||t.id!==e.pointerId||Math.hypot(e.clientX-t.x,e.clientY-t.y)>5)return;let n=this.canvas.getBoundingClientRect();if(!n.width||!n.height)return;this.pointer.set((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height)*2+1),this.raycaster.setFromCamera(this.pointer,this.camera);let i=this.devices.children.filter(r=>r.visible).concat(this.simulation?.roots||[]);for(let r of this.raycaster.intersectObjects(i,!0)){let a=r.object;for(;a&&!a.userData.deviceId&&a.visible;)a=a.parent;let o=a?.userData.deviceId;if(o){this.models.has(o)?this.setSelected(o):this.onSelect(o);return}}}resize(e=!0){let t=this.canvas.parentElement.getBoundingClientRect(),n=Math.max(1,Math.floor(t.width)),i=Math.max(1,Math.floor(t.height));this.camera.aspect=n/i,this.camera.updateProjectionMatrix(),e&&this.currentView&&(this.viewTween=null,this.camera.position.copy(this.presetPosition(this.currentView)),this.controls.target.copy(this.viewTarget())),this.renderer.setSize(n,i,!1),this.fidelity?.resize(n,i),this.frameDirty=!0}labelPositions(){let e=this.canvas.getBoundingClientRect();return this.devicesData.map(t=>{let n=this.models.get(t.id);if(!n?.visible)return{device:t,visible:!1};let i=t.kind==="display"?(t.wallSide==="left"?1:-1)*(Kn(t.size)/2+.18):0,r=n.localToWorld(new P(i,t.kind==="ndp"?.3:.4,0)).project(this.camera);return{device:t,x:(r.x*.5+.5)*e.width,y:(-r.y*.5+.5)*e.height,visible:r.z>-1&&r.z<1&&Math.abs(r.x)<.96&&Math.abs(r.y)<.94}})}tick(e){if(this.cameraFields?.setFloorVisible(this.coverage.visible),this.showS210Ripples&&this.animateS210Ripples){let t=this.reducedMotion.matches?0:e%3200/3200;for(let n of this.models.values())n.visible&&n.userData.pickupRipples&&uh(n.userData.pickupRipples,t)}if(this.viewTween){let t=this.viewTween,n=Math.min(1,(e-t.started)/650),i=1-(1-n)**3;this.camera.position.lerpVectors(t.fromPosition,t.toPosition,i),this.controls.target.lerpVectors(t.fromTarget,t.toTarget,i),n>=1&&(this.viewTween=null)}if(this.controls.update(),this.fidelity){let t=[...this.camera.position,...this.camera.quaternion,this.furniture.visible,this.coverage.visible].join("/");this.previousFurnitureVisibility!==this.furniture.visible&&this.invalidateShadows(),this.previousFurnitureVisibility=this.furniture.visible;let n=this.showS210Ripples&&this.animateS210Ripples&&!this.reducedMotion.matches;(this.frameDirty||t!==this.frameSignature||n)&&this.renderFrame(),this.frameSignature=t}else this.renderFrame();this.onFrame(this.labelPositions()),requestAnimationFrame(this.tick)}};var z0={en:["Render quality","Standard","High fidelity","High fidelity is unavailable on this device. Standard rendering is active."],zh:["\u6E32\u67D3\u753B\u8D28","\u6807\u51C6","\u9AD8\u4FDD\u771F","\u5F53\u524D\u8BBE\u5907\u65E0\u6CD5\u542F\u7528\u9AD8\u4FDD\u771F\uFF0C\u5DF2\u5207\u56DE\u6807\u51C6\u753B\u8D28\u3002"],ko:["\uB80C\uB354\uB9C1 \uD488\uC9C8","\uD45C\uC900","\uACE0\uD488\uC9C8","\uC774 \uAE30\uAE30\uC5D0\uC11C \uACE0\uD488\uC9C8 \uBAA8\uB4DC\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC5B4 \uD45C\uC900\uC73C\uB85C \uC804\uD658\uD588\uC2B5\uB2C8\uB2E4."],mn:["\u0414\u04AF\u0440\u0441\u043B\u044D\u043B\u0438\u0439\u043D \u0447\u0430\u043D\u0430\u0440","\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442","\u04E8\u043D\u0434\u04E9\u0440 \u0447\u0430\u043D\u0430\u0440","\u042D\u043D\u044D \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0434 \u04E9\u043D\u0434\u04E9\u0440 \u0447\u0430\u043D\u0430\u0440\u044B\u043D \u0433\u043E\u0440\u0438\u043C \u0431\u043E\u043B\u043E\u043C\u0436\u0433\u04AF\u0439 \u0442\u0443\u043B \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442 \u0433\u043E\u0440\u0438\u043C\u0434 \u0448\u0438\u043B\u0436\u043B\u044D\u044D."],ja:["\u63CF\u753B\u54C1\u8CEA","\u6A19\u6E96","\u9AD8\u54C1\u8CEA","\u3053\u306E\u7AEF\u672B\u3067\u306F\u9AD8\u54C1\u8CEA\u30E2\u30FC\u30C9\u3092\u5229\u7528\u3067\u304D\u306A\u3044\u305F\u3081\u3001\u6A19\u6E96\u8868\u793A\u306B\u5207\u308A\u66FF\u3048\u307E\u3057\u305F\u3002"],es:["Calidad de renderizado","Est\xE1ndar","Alta fidelidad","La alta fidelidad no est\xE1 disponible en este dispositivo. Se ha activado el modo est\xE1ndar."],fr:["Qualit\xE9 de rendu","Standard","Haute fid\xE9lit\xE9","La haute fid\xE9lit\xE9 est indisponible sur cet appareil. Le rendu standard est actif."],ar:["\u062C\u0648\u062F\u0629 \u0627\u0644\u0639\u0631\u0636","\u0642\u064A\u0627\u0633\u064A\u0629","\u0639\u0627\u0644\u064A\u0629 \u0627\u0644\u062F\u0642\u0629","\u0627\u0644\u0639\u0631\u0636 \u0639\u0627\u0644\u064A \u0627\u0644\u062F\u0642\u0629 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u062C\u0647\u0627\u0632. \u062A\u0645 \u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u0642\u064A\u0627\u0633\u064A."]};function k0(s){let[e,t,n,i]=z0[s]||z0.en;document.querySelector("#quality-label").textContent=e,document.querySelector('#render-quality option[value="standard"]').textContent=t,document.querySelector('#render-quality option[value="high"]').textContent=n,document.querySelector("#quality-warning").textContent=i}var V0={en:["Aim S210","Microphone","Azimuth","Tilt from vertical","Reset angle","Azimuth is relative to the planned heading. Tilt is measured from straight down. Preview angles are for visualization."],zh:["\u8C03\u6574 S210 \u62FE\u97F3\u89D2\u5EA6","\u540A\u9EA6","\u65B9\u4F4D\u89D2","\u79BB\u5782\u76F4\u65B9\u5411\u7684\u503E\u89D2","\u6062\u590D\u9ED8\u8BA4\u89D2\u5EA6","\u65B9\u4F4D\u89D2\u4EE5\u65B9\u6848\u671D\u5411\u4E3A\u96F6\u70B9\u3002\u503E\u89D2\u4ECE\u5782\u76F4\u5411\u4E0B\u7B97\u8D77\u3002\u89D2\u5EA6\u7528\u4E8E\u89C2\u5BDF\u6CE2\u7EB9\u3002"],ko:["S210 \uBC29\uD5A5 \uC870\uC815","\uB9C8\uC774\uD06C","\uBC29\uC704\uAC01","\uC218\uC9C1 \uAE30\uC900 \uAE30\uC6B8\uAE30","\uAC01\uB3C4 \uCD08\uAE30\uD654","\uBC29\uC704\uAC01\uC740 \uBC30\uCE58 \uBC29\uD5A5 \uAE30\uC900\uC785\uB2C8\uB2E4. \uAE30\uC6B8\uAE30\uB294 \uC218\uC9C1 \uC544\uB798 \uBC29\uD5A5\uC5D0\uC11C \uCE21\uC815\uD569\uB2C8\uB2E4. \uC2DC\uAC01\uD654\uC6A9 \uAC01\uB3C4\uC785\uB2C8\uB2E4."],mn:["S210 \u0447\u0438\u0433\u043B\u044D\u043B \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u0430\u0445","\u041C\u0438\u043A\u0440\u043E\u0444\u043E\u043D","\u0410\u0437\u0438\u043C\u0443\u0442","\u0411\u043E\u0441\u043E\u043E \u0442\u044D\u043D\u0445\u043B\u044D\u0433\u0438\u0439\u043D \u043D\u0430\u043B\u0443\u0443","\u04E8\u043D\u0446\u04E9\u0433 \u0441\u044D\u0440\u0433\u044D\u044D\u0445","\u0410\u0437\u0438\u043C\u0443\u0442 \u043D\u044C \u0442\u04E9\u043B\u04E9\u0432\u043B\u04E9\u0441\u04E9\u043D \u0447\u0438\u0433\u043B\u044D\u043B\u044D\u044D\u0441, \u043D\u0430\u043B\u0443\u0443 \u043D\u044C \u044D\u0433\u0446 \u0434\u043E\u043E\u0448 \u0447\u0438\u0433\u043B\u044D\u043B\u044D\u044D\u0441 \u0445\u044D\u043C\u0436\u0438\u0433\u0434\u044D\u043D\u044D. \u0417\u04E9\u0432\u0445\u04E9\u043D \u0434\u04AF\u0440\u0441\u043B\u044D\u043B\u0438\u0439\u043D \u04E9\u043D\u0446\u04E9\u0433."],ja:["S210 \u306E\u53CE\u97F3\u65B9\u5411\u3092\u8ABF\u6574","\u30DE\u30A4\u30AF","\u65B9\u4F4D\u89D2","\u925B\u76F4\u304B\u3089\u306E\u50BE\u304D","\u89D2\u5EA6\u3092\u30EA\u30BB\u30C3\u30C8","\u65B9\u4F4D\u89D2\u306F\u914D\u7F6E\u65B9\u5411\u304C\u57FA\u6E96\u3067\u3059\u3002\u50BE\u304D\u306F\u771F\u4E0B\u304B\u3089\u6E2C\u308A\u307E\u3059\u3002\u8868\u793A\u78BA\u8A8D\u7528\u306E\u89D2\u5EA6\u3067\u3059\u3002"],es:["Orientar S210","Micr\xF3fono","Azimut","Inclinaci\xF3n desde la vertical","Restablecer \xE1ngulo","El azimut parte de la orientaci\xF3n prevista. La inclinaci\xF3n se mide desde la vertical hacia abajo. \xC1ngulos para visualizaci\xF3n."],fr:["Orienter le S210","Microphone","Azimut","Inclinaison depuis la verticale","R\xE9initialiser l\u2019angle","L\u2019azimut part de l\u2019orientation pr\xE9vue. L\u2019inclinaison se mesure depuis la verticale descendante. Angles de visualisation."],ar:["\u0636\u0628\u0637 \u0627\u062A\u062C\u0627\u0647 S210","\u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646","\u0627\u0644\u0633\u0645\u062A","\u0627\u0644\u0645\u064A\u0644 \u0639\u0646 \u0627\u0644\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0631\u0623\u0633\u064A","\u0625\u0639\u0627\u062F\u0629 \u0636\u0628\u0637 \u0627\u0644\u0632\u0627\u0648\u064A\u0629","\u064A\u0628\u062F\u0623 \u0627\u0644\u0633\u0645\u062A \u0645\u0646 \u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0645\u062E\u0637\u0637 \u0648\u064A\u064F\u0642\u0627\u0633 \u0627\u0644\u0645\u064A\u0644 \u0645\u0646 \u0627\u0644\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0631\u0623\u0633\u064A \u0646\u062D\u0648 \u0627\u0644\u0623\u0633\u0641\u0644. \u0627\u0644\u0632\u0648\u0627\u064A\u0627 \u0644\u0644\u0639\u0631\u0636."]};function H0({devices:s,title:e,scene:t,onSelect:n,showRipples:i,showCoverage:r}){let a=document.querySelector("#s210-aim"),o=document.querySelector("#adjust-s210-aim"),l=a.querySelector("select"),c=a.querySelector("button"),h,p=Object.entries({pan:[-180,180],tilt:[0,75]}).map(([m,[f,x]])=>{let y=a.querySelector(`[data-aim-axis="${m}"]`),[v,S]=y.querySelectorAll("input");for(let b of[v,S])b.min=f,b.max=x,b.addEventListener("input",()=>{let T=b.valueAsNumber;if(!Number.isFinite(T)||!h)return;let C=Math.min(x,Math.max(f,Math.round(T)));t()?.setS210Aim(h,{...d(),[m]:C}),_(),i()}),b.addEventListener("change",_);return{key:m,slider:v,number:S}});function d(){return t()?.s210Aim.get(h)||Ld}function _(){let m=d();for(let{key:f,slider:x,number:y}of p)x.value=y.value=m[f]}function g(){let m=s();m.some(f=>f.id===h)||(h=m[0]?.id),a.hidden=!h,l.replaceChildren(...m.map(f=>new Option(e(f),f.id))),h&&(l.value=h),_()}return l.addEventListener("change",()=>n(l.value)),c.addEventListener("click",()=>{t()?.setS210Aim(h),_()}),o.addEventListener("click",()=>{r(),i(),l.focus({preventScroll:!0}),l.scrollIntoView({block:"nearest"})}),{sync:g,select(m){s().some(f=>f.id===m)&&(h=l.value=m,_())},setLanguage(m){let[f,x,y,v,S,b]=V0[m]||V0.en;o.textContent=f,c.textContent=S,a.querySelector('[data-aim-copy="mic"]').textContent=x,a.querySelector('[data-aim-copy="note"]').textContent=b;for(let[T,{slider:C,number:M}]of p.entries()){let E=T?v:y;a.querySelector(`label[for="${C.id}"]`).textContent=E,M.setAttribute("aria-label",E)}}}}function zi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function j0(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var Rn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ia={duration:.5,overwrite:!1,delay:0},uf,Zt,xt,ti=1e8,ut=1/ti,Qd=Math.PI*2,v1=Qd/4,y1=0,J0=Math.sqrt,S1=Math.cos,M1=Math.sin,Ht=function(e){return typeof e=="string"},At=function(e){return typeof e=="function"},Vi=function(e){return typeof e=="number"},Uh=function(e){return typeof e>"u"},yi=function(e){return typeof e=="object"},Cn=function(e){return e!==!1},df=function(){return typeof window<"u"},Th=function(e){return At(e)||Ht(e)},K0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},rn=Array.isArray,ef=/(?:-?\.?\d|\.)+/gi,ff=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,er=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Xd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,pf=/[+-]=-?[.\d]+/,Q0=/[^,'"\[\]\s]+/gi,b1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Mt,xi,tf,mf,Gn={},Ph={},eg,tg=function(e){return(Ph=sa(e,Gn))&&an},Fh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Oo=function(e,t){return!t&&console.warn(e)},ng=function(e,t){return e&&(Gn[e]=t)&&Ph&&(Ph[e]=t)||Gn},Bo=function(){return 0},E1={suppressEvents:!0,isStart:!0,kill:!1},Ah={suppressEvents:!0,kill:!1},w1={suppressEvents:!0},gf={},fs=[],nf={},ig,Tn={},Yd={},G0=30,Ch=[],_f="",xf=function(e){var t=e[0],n,i;if(yi(t)||At(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ch.length;i--&&!Ch[i].targetTest(t););n=Ch[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Mf(e[i],n)))||e.splice(i,1);return e},ps=function(e){return e._gsap||xf(ni(e))[0]._gsap},vf=function(e,t,n){return(n=e[t])&&At(n)?e[t]():Uh(n)&&e.getAttribute&&e.getAttribute(t)||n},pn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ct=function(e){return Math.round(e*1e5)/1e5||0},Ft=function(e){return Math.round(e*1e7)/1e7||0},tr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},T1=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Dh=function(){var e=fs.length,t=fs.slice(0),n,i;for(nf={},fs.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},yf=function(e){return!!(e._initted||e._startAt||e.add)},sg=function(e,t,n,i){fs.length&&!Zt&&Dh(),e.render(t,n,i||!!(Zt&&t<0&&yf(e))),fs.length&&!Zt&&Dh()},rg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Q0).length<2?t:Ht(e)?e.trim():e},ag=function(e){return e},Wn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},A1=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},sa=function(e,t){for(var n in t)e[n]=t[n];return e},W0=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=yi(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Ih=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},No=function(e){var t=e.parent||Mt,n=e.keyframes?A1(rn(e.keyframes)):Wn;if(Cn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},C1=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},og=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Oh=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},ms=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Js=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},R1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},sf=function(e,t,n,i){return e._startAt&&(Zt?e._startAt.revert(Ah):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},P1=function s(e){return!e||e._ts&&s(e.parent)},q0=function(e){return e._repeat?ra(e._tTime,e=e.duration()+e._rDelay)*e:0},ra=function(e,t){var n=Math.floor(e=Ft(e/t));return e&&n===e?n-1:n},Lh=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Bh=function(e){return e._end=Ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||ut)||0))},zh=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ft(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Bh(e),n._dirty||Js(n,e)),e},lg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Lh(e.rawTime(),t),(!t._dur||Vo(0,t.totalDuration(),n)-t._tTime>ut)&&t.render(n,!0)),Js(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ut}},vi=function(e,t,n,i){return t.parent&&ms(t),t._start=Ft((Vi(n)?n:n||e!==Mt?ei(e,n,t):e._time)+t._delay),t._end=Ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),og(e,t,"_first","_last",e._sort?"_start":0),rf(t)||(e._recent=t),i||lg(e,t),e._ts<0&&zh(e,e._tTime),e},cg=function(e,t){return(Gn.ScrollTrigger||Fh("scrollTrigger",t))&&Gn.ScrollTrigger.create(t,e)},hg=function(e,t,n,i,r){if(wf(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Zt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ig!==An.frame)return fs.push(e),e._lazy=[r,i],1},D1=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},rf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},I1=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&D1(e)&&!(!e._initted&&rf(e))||(e._ts<0||e._dp._ts<0)&&!rf(e))?0:1,o=e._rDelay,l=0,c,h,u;if(o&&e._repeat&&(l=Vo(0,e._tDur,t),h=ra(l,o),e._yoyo&&h&1&&(a=1-a),h!==ra(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Zt||i||e._zTime===ut||!t&&e._zTime){if(!e._initted&&hg(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?ut:0),n||(n=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&sf(e,t,n,!0),e._onUpdate&&!n&&Hn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Hn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&ms(e,1),!n&&!Zt&&(Hn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},L1=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},aa=function(e,t,n,i){var r=e._repeat,a=Ft(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:Ft(a*(r+1)+e._rDelay*r):a,o>0&&!i&&zh(e,e._tTime=e._tDur*o),e.parent&&Bh(e),n||Js(e.parent,e),e},X0=function(e){return e instanceof $t?Js(e):aa(e,e._dur)},N1={_start:0,endTime:Bo,totalDuration:Bo},ei=function s(e,t,n){var i=e.labels,r=e._recent||N1,a=e.duration()>=ti?r.endTime(!1):e._dur,o,l,c;return Ht(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(rn(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Uo=function(e,t,n){var i=Vi(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Cn(l.vars.inherit)&&l.parent;a.immediateRender=Cn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new Lt(t[0],a,t[r+1])},gs=function(e,t){return e||e===0?t(e):t},Vo=function(e,t,n){return n<e?e:n>t?t:n},jt=function(e,t){return!Ht(e)||!(t=b1.exec(e))?"":t[1]},U1=function(e,t,n){return gs(n,function(i){return Vo(e,t,i)})},af=[].slice,ug=function(e,t){return e&&yi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&yi(e[0]))&&!e.nodeType&&e!==xi},F1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Ht(i)&&!t||ug(i,1)?(r=n).push.apply(r,ni(i)):n.push(i)})||n},ni=function(e,t,n){return xt&&!t&&xt.selector?xt.selector(e):Ht(e)&&!n&&(tf||!oa())?af.call((t||mf).querySelectorAll(e),0):rn(e)?F1(e,n):ug(e)?af.call(e,0):e?[e]:[]},of=function(e){return e=ni(e)[0]||Oo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ni(t,n.querySelectorAll?n:n===e?Oo("Invalid scope")||mf.createElement("div"):e)}},dg=function(e){return e.sort(function(){return .5-Math.random()})},fg=function(e){if(At(e))return e;var t=yi(e)?e:{each:e},n=Ks(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,u=i;return Ht(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(p,d,_){var g=(_||t).length,m=a[g],f,x,y,v,S,b,T,C,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,ti])[1],!M){for(T=-ti;T<(T=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(m=a[g]=[],f=l?Math.min(M,g)*h-.5:i%M,x=M===ti?0:l?g*u/M-.5:i/M|0,T=0,C=ti,b=0;b<g;b++)y=b%M-f,v=x-(b/M|0),m[b]=S=c?Math.abs(c==="y"?v:y):J0(y*y+v*v),S>T&&(T=S),S<C&&(C=S);i==="random"&&dg(m),m.max=T-C,m.min=C,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=jt(t.amount||t.each)||0,n=n&&g<0?Mg(n):n}return g=(m[p]-m.min)/m.max||0,Ft(m.b+(n?n(g):g)*m.v)+m.u}},lf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ft(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Vi(n)?0:jt(n))}},pg=function(e,t){var n=rn(e),i,r;return!n&&yi(e)&&(i=n=e.radius||ti,e.values?(e=ni(e.values),(r=!Vi(e[0]))&&(i*=i)):e=lf(e.increment)),gs(t,n?At(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=ti,h=0,u=e.length,p,d;u--;)r?(p=e[u].x-o,d=e[u].y-l,p=p*p+d*d):p=Math.abs(e[u]-o),p<c&&(c=p,h=u);return h=!i||c<=i?e[h]:a,r||h===a||Vi(a)?h:h+jt(a)}:lf(e))},mg=function(e,t,n,i){return gs(rn(e)?!t:n===!0?!!(n=0):!i,function(){return rn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},O1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},B1=function(e,t){return function(n){return e(parseFloat(n))+(t||jt(n))}},z1=function(e,t,n){return _g(e,t,0,1,n)},gg=function(e,t,n){return gs(n,function(i){return e[~~t(i)]})},k1=function s(e,t,n){var i=t-e;return rn(e)?gg(e,s(0,e.length),t):gs(n,function(r){return(i+(r-e)%i)%i+e})},V1=function s(e,t,n){var i=t-e,r=i*2;return rn(e)?gg(e,s(0,e.length-1),t):gs(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},la=function(e){for(var t=0,n="",i,r,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(o?Q0:ef),n+=e.substr(t,i-t)+mg(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},_g=function(e,t,n,i,r){var a=t-e,o=i-n;return gs(r,function(l){return n+((l-e)/a*o||0)})},H1=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var a=Ht(e),o={},l,c,h,u,p;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(rn(e)&&!rn(t)){for(h=[],u=e.length,p=u-2,c=1;c<u;c++)h.push(s(e[c-1],e[c]));u--,r=function(_){_*=u;var g=Math.min(p,~~_);return h[g](_-g)},n=t}else i||(e=sa(rn(e)?[]:{},e));if(!h){for(l in t)bf.call(o,e,l,"get",t[l]);r=function(_){return Cf(_,o)||(a?e.p:e)}}}return gs(n,r)},Y0=function(e,t,n){var i=e.labels,r=ti,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},Hn=function(e,t,n){var i=e.vars,r=i[t],a=xt,o=e._ctx,l,c,h;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&fs.length&&Dh(),o&&(xt=o),h=l?r.apply(c,l):r.call(c),xt=a,h},Io=function(e){return ms(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Zt),e.progress()<1&&Hn(e,"onInterrupt"),e},na,xg=[],vg=function(e){if(e)if(e=!e.name&&e.default||e,df()||e.headless){var t=e.name,n=At(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Bo,render:Cf,add:bf,kill:sE,modifier:iE,rawVars:0},a={targetTest:0,get:0,getSetter:kh,aliases:{},register:0};if(oa(),e!==i){if(Tn[t])return;Wn(i,Wn(Ih(e,r),a)),sa(i.prototype,sa(r,Ih(e,a))),Tn[i.prop=t]=i,e.targetTest&&(Ch.push(i),gf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ng(t,i),e.register&&e.register(an,i,mn)}else xg.push(e)},ht=255,Lo={aqua:[0,ht,ht],lime:[0,ht,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ht],navy:[0,0,128],white:[ht,ht,ht],olive:[128,128,0],yellow:[ht,ht,0],orange:[ht,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ht,0,0],pink:[ht,192,203],cyan:[0,ht,ht],transparent:[ht,ht,ht,0]},$d=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ht+.5|0},yg=function(e,t,n){var i=e?Vi(e)?[e>>16,e>>8&ht,e&ht]:0:Lo.black,r,a,o,l,c,h,u,p,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Lo[e])i=Lo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ht,i&ht,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ht,e&ht]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(ef),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=$d(l+1/3,r,a),i[1]=$d(l,r,a),i[2]=$d(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(ff),n&&i.length<4&&(i[3]=1),i}else i=e.match(ef)||Lo.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/ht,a=i[1]/ht,o=i[2]/ht,u=Math.max(r,a,o),p=Math.min(r,a,o),h=(u+p)/2,u===p?l=c=0:(d=u-p,c=h>.5?d/(2-u-p):d/(u+p),l=u===r?(a-o)/d+(a<o?6:0):u===a?(o-r)/d+2:(r-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Sg=function(e){var t=[],n=[],i=-1;return e.split(ki).forEach(function(r){var a=r.match(er)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},$0=function(e,t,n){var i="",r=(e+i).match(ki),a=t?"hsla(":"rgba(",o=0,l,c,h,u;if(!r)return e;if(r=r.map(function(p){return(p=yg(p,t,1))&&a+(t?p[0]+","+p[1]+"%,"+p[2]+"%,"+p[3]:p.join(","))+")"}),n&&(h=Sg(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(ki,"1").split(er),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=e.split(ki),u=c.length-1;o<u;o++)i+=c[o]+r[o];return i+c[u]},ki=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Lo)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),G1=/hsl[a]?\(/,Sf=function(e){var t=e.join(" "),n;if(ki.lastIndex=0,ki.test(t))return n=G1.test(t),e[1]=$0(e[1],n),e[0]=$0(e[0],n,Sg(e[1])),!0},zo,An=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,h,u,p,d,_=function g(m){var f=s()-i,x=m===!0,y,v,S,b;if((f>e||f<0)&&(n+=f-t),i+=f,S=i-n,y=S-a,(y>0||x)&&(b=++u.frame,p=S-u.time*1e3,u.time=S=S/1e3,a+=y+(y>=r?4:r-y),v=1),x||(l=c(g)),v)for(d=0;d<o.length;d++)o[d](S,p,b,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return p/(1e3/(m||60))},wake:function(){eg&&(!tf&&df()&&(xi=tf=window,mf=xi.document||{},Gn.gsap=an,(xi.gsapVersions||(xi.gsapVersions=[])).push(an.version),tg(Ph||xi.GreenSockGlobals||!xi.gsap&&xi||{}),xg.forEach(vg)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},zo=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),zo=0,c=Bo},lagSmoothing:function(m,f){e=m||1/0,t=Math.min(f||33,e)},fps:function(m){r=1e3/(m||240),a=u.time*1e3+r},add:function(m,f,x){var y=f?function(v,S,b,T){m(v,S,b,T),u.remove(y)}:m;return u.remove(m),o[x?"unshift":"push"](y),oa(),y},remove:function(m,f){~(f=o.indexOf(m))&&o.splice(f,1)&&d>=f&&d--},_listeners:o},u})(),oa=function(){return!zo&&An.wake()},Ke={},W1=/^[\d.\-M][\d.\-,\s]/,q1=/["']/g,X1=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(q1,"").trim():+c,i=l.substr(o+1).trim();return t},Y1=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},$1=function(e){var t=(e+"").split("("),n=Ke[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[X1(t[1])]:Y1(e).split(",").map(rg)):Ke._CE&&W1.test(e)?Ke._CE("",e):n},Mg=function(e){return function(t){return 1-e(1-t)}},bg=function s(e,t){for(var n=e._first,i;n;)n instanceof $t?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ks=function(e,t){return e&&(At(e)?e:Ke[e]||$1(e))||t},nr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return pn(e,function(o){Ke[o]=Gn[o]=r,Ke[a=o.toLowerCase()]=n;for(var l in r)Ke[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ke[o+"."+l]=r[l]}),r},Eg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Zd=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/Qd*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*M1((h-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Eg(o);return r=Qd/r,l.config=function(c,h){return s(e,c,h)},l},jd=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Eg(n);return i.config=function(r){return s(e,r)},i};pn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;nr(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ke.Linear.easeNone=Ke.none=Ke.Linear.easeIn;nr("Elastic",Zd("in"),Zd("out"),Zd());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};nr("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);nr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});nr("Circ",function(s){return-(J0(1-s*s)-1)});nr("Sine",function(s){return s===1?1:-S1(s*v1)+1});nr("Back",jd("in"),jd("out"),jd());Ke.SteppedEase=Ke.steps=Gn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-ut;return function(o){return((i*Vo(0,a,o)|0)+r)*n}}};ia.ease=Ke["quad.out"];pn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return _f+=s+","+s+"Params,"});var Mf=function(e,t){this.id=y1++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:vf,this.set=t?t.getSetter:kh},ko=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,aa(this,+t.duration,1,1),this.data=t.data,xt&&(this._ctx=xt,xt.data.push(this)),zo||An.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,aa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(oa(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(zh(this,n),!r._dp||r.parent||lg(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&vi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ut||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),sg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+q0(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+q0(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?ra(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-ut?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Lh(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ut?0:this._rts,this.totalTime(Vo(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Bh(this),R1(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(oa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ut&&(this._tTime-=ut)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&vi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Cn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Lh(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=w1);var i=Zt;return Zt=n,yf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Zt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,X0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,X0(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ei(this,n),Cn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Cn(i)),this._dur||(this._zTime=-ut),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ut:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ut,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ut)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=At(n)?n:ag,o=function(){var c=i.then;i.then=null,At(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Io(this)},s})();Wn(ko.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ut,_prom:0,_ps:!1,_rts:1});var $t=(function(s){j0(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Cn(n.sortChildren),Mt&&vi(n.parent||Mt,zi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&cg(zi(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return Uo(0,arguments,this),this},t.from=function(i,r,a){return Uo(1,arguments,this),this},t.fromTo=function(i,r,a,o){return Uo(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,No(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Lt(i,r,ei(this,a),1),this},t.call=function(i,r,a){return vi(this,Lt.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Lt(i,a,ei(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,h){return a.runBackwards=1,No(a).immediateRender=Cn(a.immediateRender),this.staggerTo(i,r,a,o,l,c,h)},t.staggerFromTo=function(i,r,a,o,l,c,h,u){return o.startAt=a,No(o).immediateRender=Cn(o.immediateRender),this.staggerTo(i,r,o,l,c,h,u)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ft(i),u=this._zTime<0!=i<0&&(this._initted||!c),p,d,_,g,m,f,x,y,v,S,b,T;if(this!==Mt&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),p=h,v=this._start,y=this._ts,f=!y,u&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(p=Ft(h%m),h===l?(g=this._repeat,p=c):(S=Ft(h/m),g=~~S,g&&g===S&&(p=c,g--),p>c&&(p=c)),S=ra(this._tTime,m),!o&&this._tTime&&S!==g&&this._tTime-S*m-this._dur<=0&&(S=g),b&&g&1&&(p=c-p,T=1),g!==S&&!this._lock){var C=b&&S&1,M=C===(b&&g&1);if(g<S&&(C=!C),o=C?0:h%c?c:h,this._lock=1,this.render(o||(T?0:Ft(g*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Hn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),o&&o!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;bg(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=L1(this,Ft(o),Ft(p)),x&&(h-=p-(p=x._start))),this._tTime=h,this._time=p,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&!r&&!S&&(Hn(this,"onStart"),this._tTime!==h))return this;if(p>=o&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||p>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(p-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(p-d._start)*d._ts,r,a),p!==this._time||!this._ts&&!f){x=0,_&&(h+=this._zTime=-ut);break}}d=_}else{d=this._last;for(var E=i<0?i:p;d;){if(_=d._prev,(d._act||E<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(E-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(E-d._start)*d._ts,r,a||Zt&&yf(d)),p!==this._time||!this._ts&&!f){x=0,_&&(h+=this._zTime=E?-ut:ut);break}}d=_}}if(x&&!r&&(this.pause(),x.render(p>=o?0:-ut)._zTime=p>=o?1:-1,this._ts))return this._start=v,Bh(this),this.render(i,r,a);this._onUpdate&&!r&&Hn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&ms(this,1),!r&&!(i<0&&!o)&&(h||o||!l)&&(Hn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(Vi(r)||(r=ei(this,r,i)),!(i instanceof ko)){if(rn(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Ht(i))return this.addLabel(i,r);if(At(i))i=Lt.delayedCall(0,i);else return this}return this!==i?vi(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-ti);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Lt?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return Ht(i)?this.removeLabel(i):At(i)?this.killTweensOf(i):(i.parent===this&&Oh(this,i),i===this._recent&&(this._recent=this._last),Js(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ft(An.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=ei(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=Lt.delayedCall(0,r||Bo,a);return o.data="isPause",this._hasPause=1,vi(this,o,ei(this,i))},t.removePause=function(i){var r=this._first;for(i=ei(this,i);r;)r._start===i&&r.data==="isPause"&&ms(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ds!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=ni(i),l=this._first,c=Vi(r),h;l;)l instanceof Lt?T1(l._targets,o)&&(c?(!ds||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=ei(a,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,p=l.immediateRender,d,_=Lt.to(a,Wn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ut,onStart:function(){if(a.pause(),!d){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&aa(_,m,0,1).render(_._time,!0,!0),d=1}h&&h.apply(_,u||[])}},r));return p?_.render(0):_},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,Wn({startAt:{time:ei(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Y0(this,ei(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Y0(this,ei(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ut)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return Js(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Js(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=ti,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,vi(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;aa(a,a===Mt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Mt._ts&&(sg(Mt,Lh(i,Mt)),ig=An.frame),An.frame>=G0){G0+=Rn.autoSleep||120;var r=Mt._first;if((!r||!r._ts)&&Rn.autoSleep&&An._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||An.sleep()}}},e})(ko);Wn($t.prototype,{_lock:0,_hasPause:0,_forcing:0});var Z1=function(e,t,n,i,r,a,o){var l=new mn(this._pt,e,t,0,1,Af,null,r),c=0,h=0,u,p,d,_,g,m,f,x;for(l.b=n,l.e=i,n+="",i+="",(f=~i.indexOf("random("))&&(i=la(i)),a&&(x=[n,i],a(x,e,t),n=x[0],i=x[1]),p=n.match(Xd)||[];u=Xd.exec(i);)_=u[0],g=i.substring(c,u.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==p[h++]&&(m=parseFloat(p[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?tr(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=Xd.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(pf.test(i)||f)&&(l.e=0),this._pt=l,l},bf=function(e,t,n,i,r,a,o,l,c,h){At(i)&&(i=i(r||0,e,a));var u=e[t],p=n!=="get"?n:At(u)?c?e[t.indexOf("set")||!At(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,d=At(u)?c?eE:Ag:Tf,_;if(Ht(i)&&(~i.indexOf("random(")&&(i=la(i)),i.charAt(1)==="="&&(_=tr(p,i)+(jt(p)||0),(_||_===0)&&(i=_))),!h||p!==i||cf)return!isNaN(p*i)&&i!==""?(_=new mn(this._pt,e,t,+p||0,i-(p||0),typeof u=="boolean"?nE:Cg,0,d),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!u&&!(t in e)&&Fh(t,i),Z1.call(this,e,t,p,i,d,l||Rn.stringFilter,c))},j1=function(e,t,n,i,r){if(At(e)&&(e=Fo(e,r,t,n,i)),!yi(e)||e.style&&e.nodeType||rn(e)||K0(e))return Ht(e)?Fo(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=Fo(e[o],r,t,n,i);return a},Ef=function(e,t,n,i,r,a){var o,l,c,h;if(Tn[e]&&(o=new Tn[e]).init(r,o.rawVars?t[e]:j1(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new mn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==na))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},ds,cf,wf=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,p=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,f=e.parent,x=f&&f.data==="nested"?f.vars.targets:m,y=e._overwrite==="auto"&&!uf,v=e.timeline,S,b,T,C,M,E,D,L,U,B,k,z,$;if(v&&(!p||!r)&&(r="none"),e._ease=Ks(r,ia.ease),e._yEase=u?Mg(Ks(u===!0?r:u,ia.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!v&&!!i.runBackwards,!v||p&&!i.stagger){if(L=m[0]?ps(m[0]).harness:0,z=L&&i[L.prop],S=Ih(i,gf),g&&(g._zTime<0&&g.progress(1),t<0&&h&&o&&!d?g.render(-1,!0):g.revert(h&&_?Ah:E1),g._lazy=0),a){if(ms(e._startAt=Lt.set(m,Wn({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!g&&Cn(l),startAt:null,delay:0,onUpdate:c&&function(){return Hn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Zt||!o&&!d)&&e._startAt.revert(Ah),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&_&&!g){if(t&&(o=!1),T=Wn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Cn(l),immediateRender:o,stagger:0,parent:f},S),z&&(T[L.prop]=z),ms(e._startAt=Lt.set(m,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Zt?e._startAt.revert(Ah):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,ut,ut);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Cn(l)||l&&!_,b=0;b<m.length;b++){if(M=m[b],D=M._gsap||xf(m)[b]._gsap,e._ptLookup[b]=B={},nf[D.id]&&fs.length&&Dh(),k=x===m?b:x.indexOf(M),L&&(U=new L).init(M,z||S,e,k,x)!==!1&&(e._pt=C=new mn(e._pt,M,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(H){B[H]=C}),U.priority&&(E=1)),!L||z)for(T in S)Tn[T]&&(U=Ef(T,S,e,k,M,x))?U.priority&&(E=1):B[T]=C=bf.call(e,M,T,"get",S[T],k,x,0,i.stringFilter);e._op&&e._op[b]&&e.kill(M,e._op[b]),y&&e._pt&&(ds=e,Mt.killTweensOf(M,B,e.globalTime(t)),$=!e.parent,ds=0),e._pt&&l&&(nf[D.id]=1)}E&&Rf(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!$,p&&t<=0&&v.render(ti,!0,!0)},J1=function(e,t,n,i,r,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,p,d;if(!c)for(c=e._ptCache[t]=[],p=e._ptLookup,d=e._targets.length;d--;){if(h=p[d][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return cf=1,e.vars[t]="+=0",wf(e,o),cf=0,l?Oo(t+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=Ct(n)+jt(u.e)),u.b&&(u.b=h.s+jt(u.b))},K1=function(e,t){var n=e[0]?ps(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=sa({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},Q1=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(rn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},Fo=function(e,t,n,i,r){return At(e)?e.call(t,n,i,r):Ht(e)&&~e.indexOf("random(")?la(e):e},wg=_f+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Tg={};pn(wg+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Tg[s]=1});var Lt=(function(s){j0(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:No(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,p=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,f=l.yoyoEase,x=i.parent||Mt,y=(rn(n)||K0(n)?Vi(n[0]):"length"in i)?[n]:ni(n),v,S,b,T,C,M,E,D;if(o._targets=y.length?xf(y):Oo("GSAP target "+n+" not found. https://gsap.com",!Rn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||p||Th(c)||Th(h)){if(i=o.vars,v=o.timeline=new $t({data:"nested",defaults:g||{},targets:x&&x.data==="nested"?x.vars.targets:y}),v.kill(),v.parent=v._dp=zi(o),v._start=0,p||Th(c)||Th(h)){if(T=y.length,E=p&&fg(p),yi(p))for(C in p)~wg.indexOf(C)&&(D||(D={}),D[C]=p[C]);for(S=0;S<T;S++)b=Ih(i,Tg),b.stagger=0,f&&(b.yoyoEase=f),D&&sa(b,D),M=y[S],b.duration=+Fo(c,zi(o),S,M,y),b.delay=(+Fo(h,zi(o),S,M,y)||0)-o._delay,!p&&T===1&&b.delay&&(o._delay=h=b.delay,o._start+=h,b.delay=0),v.to(M,b,E?E(S,M,y):0),v._ease=Ke.none;v.duration()?c=h=0:o.timeline=0}else if(_){No(Wn(v.vars.defaults,{ease:"none"})),v._ease=Ks(_.ease||i.ease||"none");var L=0,U,B,k;if(rn(_))_.forEach(function(z){return v.to(y,z,">")}),v.duration();else{b={};for(C in _)C==="ease"||C==="easeEach"||Q1(C,_[C],b,_.easeEach);for(C in b)for(U=b[C].sort(function(z,$){return z.t-$.t}),L=0,S=0;S<U.length;S++)B=U[S],k={ease:B.e,duration:(B.t-(S?U[S-1].t:0))/100*c},k[C]=B.v,v.to(y,k,L),L+=k.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return d===!0&&!uf&&(ds=zi(o),Mt.killTweensOf(y),ds=0),vi(x,zi(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!_&&o._start===Ft(x._time)&&Cn(u)&&P1(zi(o))&&x.data!=="nested")&&(o._tTime=-ut,o.render(Math.max(0,-h)||0)),m&&cg(zi(o),m),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ut&&!h?l:i<ut?0:i,p,d,_,g,m,f,x,y,v;if(!c)I1(this,i,r,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(p=u,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,a);if(p=Ft(u%g),u===l?(_=this._repeat,p=c):(m=Ft(u/g),_=~~m,_&&_===m?(p=c,_--):p>c&&(p=c)),f=this._yoyo&&_&1,f&&(v=this._yEase,p=c-p),m=ra(this._tTime,g),p===o&&!a&&this._initted&&_===m)return this._tTime=u,this;_!==m&&(y&&this._yEase&&bg(y,f),this.vars.repeatRefresh&&!f&&!this._lock&&p!==g&&this._initted&&(this._lock=a=1,this.render(Ft(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(hg(this,h?i:p,a,r,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=u,this._time=p,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(v||this._ease)(p/c),this._from&&(this.ratio=x=1-x),!o&&u&&!r&&!m&&(Hn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;y&&y.render(i<0?i:y._dur*y._ease(p/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&sf(this,i,r,a),Hn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&Hn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&sf(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&ms(this,1),!r&&!(h&&!o)&&(u||o||f)&&(Hn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o,l){zo||An.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||wf(this,c),h=this._ease(c/this._dur),J1(this,i,r,a,o,h,c,l)?this.resetTo(i,r,a,o,1):(zh(this,0),this.parent||og(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Io(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Zt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,ds&&ds.vars.overwrite!==!0)._first||Io(this),this.parent&&a!==this.timeline.totalDuration()&&aa(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?ni(i):o,c=this._ptLookup,h=this._pt,u,p,d,_,g,m,f;if((!r||r==="all")&&C1(o,l))return r==="all"&&(this._pt=0),Io(this);for(u=this._op=this._op||[],r!=="all"&&(Ht(r)&&(g={},pn(r,function(x){return g[x]=1}),r=g),r=K1(o,r)),f=o.length;f--;)if(~l.indexOf(o[f])){p=c[f],r==="all"?(u[f]=r,_=p,d={}):(d=u[f]=u[f]||{},_=r);for(g in _)m=p&&p[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Oh(this,m,"_pt"),delete p[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&h&&Io(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Uo(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return Uo(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return Mt.killTweensOf(i,r,a)},e})(ko);Wn(Lt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});pn("staggerTo,staggerFrom,staggerFromTo",function(s){Lt[s]=function(){var e=new $t,t=af.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Tf=function(e,t,n){return e[t]=n},Ag=function(e,t,n){return e[t](n)},eE=function(e,t,n,i){return e[t](i.fp,n)},tE=function(e,t,n){return e.setAttribute(t,n)},kh=function(e,t){return At(e[t])?Ag:Uh(e[t])&&e.setAttribute?tE:Tf},Cg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},nE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Af=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Cf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},iE=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},sE=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Oh(this,t,"_pt"):t.dep||(n=1),t=i;return!n},rE=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Rf=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},mn=(function(){function s(t,n,i,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Cg,this.d=l||this,this.set=c||Tf,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=rE,this.m=n,this.mt=r,this.tween=i},s})();pn(_f+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return gf[s]=1});Gn.TweenMax=Gn.TweenLite=Lt;Gn.TimelineLite=Gn.TimelineMax=$t;Mt=new $t({sortChildren:!1,defaults:ia,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Rn.stringFilter=Sf;var Qs=[],Rh={},aE=[],Z0=0,oE=0,Jd=function(e){return(Rh[e]||aE).map(function(t){return t()})},hf=function(){var e=Date.now(),t=[];e-Z0>2&&(Jd("matchMediaInit"),Qs.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=xi.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Jd("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Z0=e,Jd("matchMedia"))},Rg=(function(){function s(t,n){this.selector=n&&of(n),this.data=[],this._r=[],this.isReverted=!1,this.id=oE++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){At(n)&&(r=i,i=n,n=At);var a=this,o=function(){var c=xt,h=a.selector,u;return c&&c!==a&&c.data.push(a),r&&(a.selector=of(r)),xt=a,u=i.apply(a,arguments),At(u)&&a._r.push(u),xt=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===At?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=xt;xt=null,n(this),xt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Lt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof $t?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Lt)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Qs.length;a--;)Qs[a].id===this.id&&Qs.splice(a,1)},e.revert=function(n){this.kill(n||{})},s})(),lE=(function(){function s(t){this.contexts=[],this.scope=t,xt&&xt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){yi(n)||(n={matches:n});var a=new Rg(0,r||this.scope),o=a.conditions={},l,c,h;xt&&!a.selector&&(a.selector=xt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=xi.matchMedia(n[c]),l&&(Qs.indexOf(a)<0&&Qs.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(hf):l.addEventListener("change",hf)));return h&&i(a,function(u){return a.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Nh={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return vg(i)})},timeline:function(e){return new $t(e)},getTweensOf:function(e,t){return Mt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Ht(e)&&(e=ni(e)[0]);var r=ps(e||{}).get,a=n?ag:rg;return n==="native"&&(n=""),e&&(t?a((Tn[t]&&Tn[t].get||r)(e,t,n,i)):function(o,l,c){return a((Tn[o]&&Tn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=ni(e),e.length>1){var i=e.map(function(h){return an.quickSetter(h,t,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}e=e[0]||{};var a=Tn[t],o=ps(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var u=new a;na._pt=0,u.init(e,n?h+n:h,na,0,[e]),u.render(1,u),na._pt&&Cf(1,na)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,r=an.to(e,Wn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return r.resetTo(t,l,c,h)};return a.tween=r,a},isTweening:function(e){return Mt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ks(e.ease,ia.ease)),W0(ia,e||{})},config:function(e){return W0(Rn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Tn[o]&&!Gn[o]&&Oo(t+" effect requires "+o+" plugin.")}),Yd[t]=function(o,l,c){return n(ni(o),Wn(l||{},r),c)},a&&($t.prototype[t]=function(o,l,c){return this.add(Yd[t](o,yi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ke[e]=Ks(t)},parseEase:function(e,t){return arguments.length?Ks(e,t):Ke},getById:function(e){return Mt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new $t(e),i,r;for(n.smoothChildTiming=Cn(e.smoothChildTiming),Mt.remove(n),n._dp=0,n._time=n._tTime=Mt._time,i=Mt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Lt&&i.vars.onComplete===i._targets[0]))&&vi(n,i,i._start-i._delay),i=r;return vi(Mt,n,0),n},context:function(e,t){return e?new Rg(e,t):xt},matchMedia:function(e){return new lE(e)},matchMediaRefresh:function(){return Qs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||hf()},addEventListener:function(e,t){var n=Rh[e]||(Rh[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Rh[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:k1,wrapYoyo:V1,distribute:fg,random:mg,snap:pg,normalize:z1,getUnit:jt,clamp:U1,splitColor:yg,toArray:ni,selector:of,mapRange:_g,pipe:O1,unitize:B1,interpolate:H1,shuffle:dg},install:tg,effects:Yd,ticker:An,updateRoot:$t.updateRoot,plugins:Tn,globalTimeline:Mt,core:{PropTween:mn,globals:ng,Tween:Lt,Timeline:$t,Animation:ko,getCache:ps,_removeLinkedListItem:Oh,reverting:function(){return Zt},context:function(e){return e&&xt&&(xt.data.push(e),e._ctx=xt),xt},suppressOverwrites:function(e){return uf=e}}};pn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Nh[s]=Lt[s]});An.add($t.updateRoot);na=Nh.to({},{duration:0});var cE=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},hE=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=cE(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},Kd=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(Ht(r)&&(l={},pn(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}hE(o,r)}}}},an=Nh.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Zt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Kd("roundProps",lf),Kd("modifiers"),Kd("snap",pg))||Nh;Lt.version=$t.version=an.version="3.13.0";eg=1;df()&&oa();var uE=Ke.Power0,dE=Ke.Power1,fE=Ke.Power2,pE=Ke.Power3,mE=Ke.Power4,gE=Ke.Linear,_E=Ke.Quad,xE=Ke.Cubic,vE=Ke.Quart,yE=Ke.Quint,SE=Ke.Strong,ME=Ke.Elastic,bE=Ke.Back,EE=Ke.SteppedEase,wE=Ke.Bounce,TE=Ke.Sine,AE=Ke.Expo,CE=Ke.Circ;var Pg,_s,ha,Uf,ar,RE,Dg,Ff,PE=function(){return typeof window<"u"},Gi={},rr=180/Math.PI,ua=Math.PI/180,ca=Math.atan2,Ig=1e8,Of=/([A-Z])/g,DE=/(left|right|width|margin|padding|x)/i,IE=/[\s,\(]\S/,Si={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Df=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},LE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},NE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},UE=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},kg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Vg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},FE=function(e,t,n){return e.style[t]=n},OE=function(e,t,n){return e.style.setProperty(t,n)},BE=function(e,t,n){return e._gsap[t]=n},zE=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},kE=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},VE=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},bt="transform",Pn=bt+"Origin",HE=function s(e,t){var n=this,i=this.target,r=i.style,a=i._gsap;if(e in Gi&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Si[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Hi(i,o)}):this.tfm[e]=a.x?a[e]:Hi(i,e),e===Pn&&(this.tfm.zOrigin=a.zOrigin);else return Si.transform.split(",").forEach(function(o){return s.call(n,o,t)});if(this.props.indexOf(bt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Pn,t,"")),e=bt}(r||t)&&this.props.push(e,t,r[e])},Hg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},GE=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Of,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Ff(),(!r||!r.isStart)&&!n[bt]&&(Hg(n),i.zOrigin&&n[Pn]&&(n[Pn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Gg=function(e,t){var n={target:e,props:[],revert:GE,save:HE};return e._gsap||an.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Wg,If=function(e,t){var n=_s.createElementNS?_s.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):_s.createElement(e);return n&&n.style?n:_s.createElement(e)},ii=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Of,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,da(t)||t,1)||""},Lg="O,Moz,ms,Ms,Webkit".split(","),da=function(e,t,n){var i=t||ar,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Lg[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Lg[a]:"")+e},Lf=function(){PE()&&window.document&&(Pg=window,_s=Pg.document,ha=_s.documentElement,ar=If("div")||{style:{}},RE=If("div"),bt=da(bt),Pn=bt+"Origin",ar.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Wg=!!da("perspective"),Ff=an.core.reverting,Uf=1)},Ng=function(e){var t=e.ownerSVGElement,n=If("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),ha.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),ha.removeChild(n),r},Ug=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},qg=function(e){var t,n;try{t=e.getBBox()}catch{t=Ng(e),n=1}return t&&(t.width||t.height)||n||(t=Ng(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ug(e,["x","cx","x1"])||0,y:+Ug(e,["y","cy","y1"])||0,width:0,height:0}:t},Xg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&qg(e))},or=function(e,t){if(t){var n=e.style,i;t in Gi&&t!==Pn&&(t=bt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Of,"-$1").toLowerCase())):n.removeAttribute(t)}},xs=function(e,t,n,i,r,a){var o=new mn(e._pt,t,n,0,1,a?Vg:kg);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},Fg={deg:1,rad:1,turn:1},WE={grid:1,flex:1},vs=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=ar.style,l=DE.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,p=i==="px",d=i==="%",_,g,m,f;if(i===a||!r||Fg[i]||Fg[a])return r;if(a!=="px"&&!p&&(r=s(e,t,n,"px")),f=e.getCTM&&Xg(e),(d||a==="%")&&(Gi[t]||~t.indexOf("adius")))return _=f?e.getBBox()[l?"width":"height"]:e[h],Ct(d?r/_*u:r/100*_);if(o[l?"width":"height"]=u+(p?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,f&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===_s||!g.appendChild)&&(g=_s.body),m=g._gsap,m&&d&&m.width&&l&&m.time===An.time&&!m.uncache)return Ct(r/m.width*u);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=u+i,_=e[h],x?e.style[t]=x:or(e,t)}else(d||a==="%")&&!WE[ii(g,"display")]&&(o.position=ii(e,"position")),g===e&&(o.position="static"),g.appendChild(ar),_=ar[h],g.removeChild(ar),o.position="absolute";return l&&d&&(m=ps(g),m.time=An.time,m.width=g[h]),Ct(p?_*r/u:_&&r?u/_*r:0)},Hi=function(e,t,n,i){var r;return Uf||Lf(),t in Si&&t!=="transform"&&(t=Si[t],~t.indexOf(",")&&(t=t.split(",")[0])),Gi[t]&&t!=="transform"?(r=Wo(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Hh(ii(e,Pn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Vh[t]&&Vh[t](e,t,n)||ii(e,t)||vf(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?vs(e,t,r,n)+n:r},qE=function(e,t,n,i){if(!n||n==="none"){var r=da(t,e,1),a=r&&ii(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=ii(e,"borderTopColor"))}var o=new mn(this._pt,e.style,t,0,1,Af),l=0,c=0,h,u,p,d,_,g,m,f,x,y,v,S;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ii(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=ii(e,t)||i,g?e.style[t]=g:or(e,t)),h=[n,i],Sf(h),n=h[0],i=h[1],p=n.match(er)||[],S=i.match(er)||[],S.length){for(;u=er.exec(i);)m=u[0],x=i.substring(l,u.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),m!==(g=p[c++]||"")&&(d=parseFloat(g)||0,v=g.substr((d+"").length),m.charAt(1)==="="&&(m=tr(d,m)+v),f=parseFloat(m),y=m.substr((f+"").length),l=er.lastIndex-y.length,y||(y=y||Rn.units[t]||v,l===i.length&&(i+=y,o.e+=y)),v!==y&&(d=vs(e,t,g,y)||0),o._pt={_next:o._pt,p:x||c===1?x:",",s:d,c:f-d,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Vg:kg;return pf.test(i)&&(o.e=0),this._pt=o,o},Og={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},XE=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Og[n]||n,t[1]=Og[i]||i,t.join(" ")},YE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Gi[o]&&(l=1,o=o==="transformOrigin"?Pn:bt),or(n,o);l&&(or(n,bt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Wo(n,1),a.uncache=1,Hg(i)))}},Vh={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new mn(e._pt,t,n,0,0,YE);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},Go=[1,0,0,1,0,0],Yg={},$g=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Bg=function(e){var t=ii(e,bt);return $g(t)?Go:t.substr(7).match(ff).map(Ct)},Bf=function(e,t){var n=e._gsap||ps(e),i=e.style,r=Bg(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Go:r):(r===Go&&!e.offsetParent&&e!==ha&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,ha.appendChild(e)),r=Bg(e),l?i.display=l:or(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ha.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Nf=function(e,t,n,i,r,a){var o=e._gsap,l=r||Bf(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,p=o.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],f=l[4],x=l[5],y=t.split(" "),v=parseFloat(y[0])||0,S=parseFloat(y[1])||0,b,T,C,M;n?l!==Go&&(T=d*m-_*g)&&(C=v*(m/T)+S*(-g/T)+(g*x-m*f)/T,M=v*(-_/T)+S*(d/T)-(d*x-_*f)/T,v=C,S=M):(b=qg(e),v=b.x+(~y[0].indexOf("%")?v/100*b.width:v),S=b.y+(~(y[1]||y[0]).indexOf("%")?S/100*b.height:S)),i||i!==!1&&o.smooth?(f=v-c,x=S-h,o.xOffset=u+(f*d+x*g)-f,o.yOffset=p+(f*_+x*m)-x):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=S,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Pn]="0px 0px",a&&(xs(a,o,"xOrigin",c,v),xs(a,o,"yOrigin",h,S),xs(a,o,"xOffset",u,o.xOffset),xs(a,o,"yOffset",p,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+S)},Wo=function(e,t){var n=e._gsap||new Mf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=ii(e,Pn)||"0",h,u,p,d,_,g,m,f,x,y,v,S,b,T,C,M,E,D,L,U,B,k,z,$,H,ee,se,de,Re,ze,Be,Ue;return h=u=p=g=m=f=x=y=v=0,d=_=1,n.svg=!!(e.getCTM&&Xg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[bt]!=="none"?l[bt]:"")),i.scale=i.rotate=i.translate="none"),T=Bf(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),Nf(e,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,T)),S=n.xOrigin||0,b=n.yOrigin||0,T!==Go&&(D=T[0],L=T[1],U=T[2],B=T[3],h=k=T[4],u=z=T[5],T.length===6?(d=Math.sqrt(D*D+L*L),_=Math.sqrt(B*B+U*U),g=D||L?ca(L,D)*rr:0,x=U||B?ca(U,B)*rr+g:0,x&&(_*=Math.abs(Math.cos(x*ua))),n.svg&&(h-=S-(S*D+b*U),u-=b-(S*L+b*B))):(Ue=T[6],ze=T[7],se=T[8],de=T[9],Re=T[10],Be=T[11],h=T[12],u=T[13],p=T[14],C=ca(Ue,Re),m=C*rr,C&&(M=Math.cos(-C),E=Math.sin(-C),$=k*M+se*E,H=z*M+de*E,ee=Ue*M+Re*E,se=k*-E+se*M,de=z*-E+de*M,Re=Ue*-E+Re*M,Be=ze*-E+Be*M,k=$,z=H,Ue=ee),C=ca(-U,Re),f=C*rr,C&&(M=Math.cos(-C),E=Math.sin(-C),$=D*M-se*E,H=L*M-de*E,ee=U*M-Re*E,Be=B*E+Be*M,D=$,L=H,U=ee),C=ca(L,D),g=C*rr,C&&(M=Math.cos(C),E=Math.sin(C),$=D*M+L*E,H=k*M+z*E,L=L*M-D*E,z=z*M-k*E,D=$,k=H),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,f=180-f),d=Ct(Math.sqrt(D*D+L*L+U*U)),_=Ct(Math.sqrt(z*z+Ue*Ue)),C=ca(k,z),x=Math.abs(C)>2e-4?C*rr:0,v=Be?1/(Be<0?-Be:Be):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!$g(ii(e,bt)),$&&e.setAttribute("transform",$))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(d*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=p+a,n.scaleX=Ct(d),n.scaleY=Ct(_),n.rotation=Ct(g)+o,n.rotationX=Ct(m)+o,n.rotationY=Ct(f)+o,n.skewX=x+o,n.skewY=y+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Pn]=Hh(c)),n.xOffset=n.yOffset=0,n.force3D=Rn.force3D,n.renderTransform=n.svg?ZE:Wg?Zg:$E,n.uncache=0,n},Hh=function(e){return(e=e.split(" "))[0]+" "+e[1]},Pf=function(e,t,n){var i=jt(t);return Ct(parseFloat(t)+parseFloat(vs(e,"x",n+"px",i)))+i},$E=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Zg(e,t)},ir="0deg",Ho="0px",sr=") ",Zg=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,p=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,f=n.force3D,x=n.target,y=n.zOrigin,v="",S=f==="auto"&&e&&e!==1||f===!0;if(y&&(u!==ir||h!==ir)){var b=parseFloat(h)*ua,T=Math.sin(b),C=Math.cos(b),M;b=parseFloat(u)*ua,M=Math.cos(b),a=Pf(x,a,T*M*-y),o=Pf(x,o,-Math.sin(b)*-y),l=Pf(x,l,C*M*-y+y)}m!==Ho&&(v+="perspective("+m+sr),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(S||a!==Ho||o!==Ho||l!==Ho)&&(v+=l!==Ho||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+sr),c!==ir&&(v+="rotate("+c+sr),h!==ir&&(v+="rotateY("+h+sr),u!==ir&&(v+="rotateX("+u+sr),(p!==ir||d!==ir)&&(v+="skew("+p+", "+d+sr),(_!==1||g!==1)&&(v+="scale("+_+", "+g+sr),x.style[bt]=v||"translate(0, 0)"},ZE=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,p=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,f=n.yOffset,x=n.forceCSS,y=parseFloat(a),v=parseFloat(o),S,b,T,C,M;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ua,c*=ua,S=Math.cos(l)*u,b=Math.sin(l)*u,T=Math.sin(l-c)*-p,C=Math.cos(l-c)*p,c&&(h*=ua,M=Math.tan(c-h),M=Math.sqrt(1+M*M),T*=M,C*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),S*=M,b*=M)),S=Ct(S),b=Ct(b),T=Ct(T),C=Ct(C)):(S=u,C=p,b=T=0),(y&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(y=vs(d,"x",a,"px"),v=vs(d,"y",o,"px")),(_||g||m||f)&&(y=Ct(y+_-(_*S+g*T)+m),v=Ct(v+g-(_*b+g*C)+f)),(i||r)&&(M=d.getBBox(),y=Ct(y+i/100*M.width),v=Ct(v+r/100*M.height)),M="matrix("+S+","+b+","+T+","+C+","+y+","+v+")",d.setAttribute("transform",M),x&&(d.style[bt]=M)},jE=function(e,t,n,i,r){var a=360,o=Ht(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?rr:1),c=l-i,h=i+c+"deg",u,p;return o&&(u=r.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*Ig)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*Ig)%a-~~(c/a)*a)),e._pt=p=new mn(e._pt,t,n,i,c,LE),p.e=h,p.u="deg",e._props.push(n),p},zg=function(e,t){for(var n in t)e[n]=t[n];return e},JE=function(e,t,n){var i=zg({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,p,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[bt]=t,o=Wo(n,1),or(n,bt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[bt],a[bt]=t,o=Wo(n,1),a[bt]=c);for(l in Gi)c=i[l],h=o[l],c!==h&&r.indexOf(l)<0&&(d=jt(c),_=jt(h),u=d!==_?vs(n,l,c,_):parseFloat(c),p=parseFloat(h),e._pt=new mn(e._pt,o,l,u,p-u,Df),e._pt.u=_||0,e._props.push(l));zg(o,i)};pn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});Vh[e>1?"border"+s:s]=function(o,l,c,h,u){var p,d;if(arguments.length<4)return p=a.map(function(_){return Hi(o,_,c)}),d=p.join(" "),d.split(p[0]).length===5?p[0]:d;p=(h+"").split(" "),d={},a.forEach(function(_,g){return d[_]=p[g]=p[g]||p[(g-1)/2|0]}),o.init(l,d,u)}});var zf={name:"css",register:Lf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,c,h,u,p,d,_,g,m,f,x,y,v,S,b,T,C;Uf||Lf(),this.styles=this.styles||Gg(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(h=t[g],!(Tn[g]&&Ef(g,t,n,i,e,r)))){if(d=typeof h,_=Vh[g],d==="function"&&(h=h.call(n,i,e,r),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=la(h)),_)_(this,e,g,h,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",ki.lastIndex=0,ki.test(c)||(m=jt(c),f=jt(h)),f?m!==f&&(c=vs(e,g,c,f)+f):m&&(h+=m),this.add(o,"setProperty",c,h,i,r,0,0,g),a.push(g),C.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],Ht(c)&&~c.indexOf("random(")&&(c=la(c)),jt(c+"")||c==="auto"||(c+=Rn.units[g]||jt(Hi(e,g))||""),(c+"").charAt(1)==="="&&(c=Hi(e,g))):c=Hi(e,g),p=parseFloat(c),x=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),u=parseFloat(h),g in Si&&(g==="autoAlpha"&&(p===1&&Hi(e,"visibility")==="hidden"&&u&&(p=0),C.push("visibility",0,o.visibility),xs(this,o,"visibility",p?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Si[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in Gi,y){if(this.styles.save(g),d==="string"&&h.substring(0,6)==="var(--"&&(h=ii(e,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),v||(S=e._gsap,S.renderTransform&&!t.parseTransform||Wo(e,t.parseTransform),b=t.smoothOrigin!==!1&&S.smooth,v=this._pt=new mn(this._pt,o,bt,0,1,S.renderTransform,S,0,-1),v.dep=1),g==="scale")this._pt=new mn(this._pt,S,"scaleY",S.scaleY,(x?tr(S.scaleY,x+u):u)-S.scaleY||0,Df),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(Pn,0,o[Pn]),h=XE(h),S.svg?Nf(e,h,0,b,0,this):(f=parseFloat(h.split(" ")[2])||0,f!==S.zOrigin&&xs(this,S,"zOrigin",S.zOrigin,f),xs(this,o,g,Hh(c),Hh(h)));continue}else if(g==="svgOrigin"){Nf(e,h,1,b,0,this);continue}else if(g in Yg){jE(this,S,g,p,x?tr(p,x+h):h);continue}else if(g==="smoothOrigin"){xs(this,S,"smooth",S.smooth,h);continue}else if(g==="force3D"){S[g]=h;continue}else if(g==="transform"){JE(this,h,e);continue}}else g in o||(g=da(g)||g);if(y||(u||u===0)&&(p||p===0)&&!IE.test(h)&&g in o)m=(c+"").substr((p+"").length),u||(u=0),f=jt(h)||(g in Rn.units?Rn.units[g]:m),m!==f&&(p=vs(e,g,c,f)),this._pt=new mn(this._pt,y?S:o,g,p,(x?tr(p,x+u):u)-p,!y&&(f==="px"||g==="zIndex")&&t.autoRound!==!1?UE:Df),this._pt.u=f||0,m!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=NE);else if(g in o)qE.call(this,e,g,c,x?x+h:h);else if(g in e)this.add(e,g,c||e[g],x?x+h:h,i,r);else if(g!=="parseTransform"){Fh(g,h);continue}y||(g in o?C.push(g,0,o[g]):typeof e[g]=="function"?C.push(g,2,e[g]()):C.push(g,1,c||e[g])),a.push(g)}}T&&Rf(this)},render:function(e,t){if(t.tween._time||!Ff())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Hi,aliases:Si,getSetter:function(e,t,n){var i=Si[t];return i&&i.indexOf(",")<0&&(t=i),t in Gi&&t!==Pn&&(e._gsap.x||Hi(e,"x"))?n&&Dg===n?t==="scale"?zE:BE:(Dg=n||{})&&(t==="scale"?kE:VE):e.style&&!Uh(e.style[t])?FE:~t.indexOf("-")?OE:kh(e,t)},core:{_removeProperty:or,_getMatrix:Bf}};an.utils.checkPrefix=da;an.core.getStyleSaver=Gg;(function(s,e,t,n){var i=pn(s+","+e+","+t,function(r){Gi[r]=1});pn(e,function(r){Rn.units[r]="deg",Yg[r]=1}),Si[i[13]]=s+","+e,pn(n,function(r){var a=r.split(":");Si[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");pn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Rn.units[s]="px"});an.registerPlugin(zf);var kf=an.registerPlugin(zf)||an,AR=kf.core.Tween;function jg({from:s,target:e,seconds:t,delay:n,update:i,complete:r}){let a={value:s};return kf.timeline({paused:!0,onComplete:r}).to(a,{value:e,duration:t,ease:"power1.inOut",onUpdate:()=>i(a.value)},n)}var ys=[{id:"ops",port:"OPS",label:"teacherPc"},{id:"hdmi1",port:"HDMI IN 1",label:"laptop"},{id:"hdmi2",port:"HDMI IN 2",label:"wireless"}],Jt={A:"ifp-1",B:"ifp-2",C:"sim-screen"},Kt="ndp600",Mi="lcs-station",Gh={"sim-lights":"lights","sim-blind":"blind","sim-screen":"screen","sim-ac":"ac"};function Wh(s){return s.width===8&&s.depth===10}function qh(s){let i=s-.64,r=Math.ceil((i+.08)/(2+.08)),a=(i-.08*(r-1))/r;return Array.from({length:r},(o,l)=>({x:.32+a/2+l*(a+.08),span:a}))}var KE={lights:0,blind:3.6,screen:2.6,ac:.35,ifp:.32,station:0},Xh=Object.fromEntries(Object.entries({start:1,end:0}).map(([s,e])=>[s,Object.fromEntries(Object.entries(KE).map(([t,n])=>[t,{target:e,duration:n,delay:0}]))]));var QE={planning:"Planning",simulation:"Simulation",mode:"Classroom mode",matrix:"AV Matrix",room:"Room devices",openMatrix:"Open AV Matrix",classStart:"Start class",classEnd:"End class",controls:"Simulated classroom controls",duplicate:"Duplicate",duplicateHint:"Send one source to every output.",common:"Shared source",notConnected:"Not connected",penSync:"Pen display follows OUT A.",receiverNote:"Wireless Presentation uses a simulated external HDMI receiver.",teacherPc:"Teacher PC",laptop:"Laptop",wireless:"Wireless Presentation",lights:"Lighting",blind:"Rear window blinds",screen:"Projection screen",ac:"Air conditioning",dualIfp:"Dual IFP demo",stop:"Stop",stopped:"Stopped",station:"LCS recording",recording:"Recording",standby:"Standby",startRecording:"Start recording",stopRecording:"Stop recording",blindTopology:s=>`1 CBX \u2192 RS232 \u2192 remote \u2192 ${s} blinds`,on:"On",off:"Off",raise:"Raise",lower:"Lower",raised:"Raised",lowered:"Lowered",moving:"Moving",signal:"Assigned input",lesson:"Today\u2019s lesson",workspace:"Presentation workspace",sharing:"Screen sharing",lessonTopic:"Explore, learn, create",selectDevice:"Select device",matrixUnavailable:"NDP600 is not installed in this layout.",quality:"Render quality"},ew={planning:"\u89C4\u5212",simulation:"\u4EFF\u771F",mode:"\u6559\u5BA4\u6A21\u5F0F",matrix:"AV \u77E9\u9635",room:"\u6559\u5BA4\u8BBE\u5907",openMatrix:"\u6253\u5F00 AV \u77E9\u9635",classStart:"\u4E00\u952E\u4E0A\u8BFE",classEnd:"\u4E00\u952E\u4E0B\u8BFE",controls:"\u6559\u5BA4\u4EFF\u771F\u63A7\u5236",duplicate:"\u540C\u5C4F\u6A21\u5F0F",duplicateHint:"\u5C06\u540C\u4E00\u4E2A\u8F93\u5165\u5206\u914D\u7ED9\u6240\u6709\u8F93\u51FA\u3002",common:"\u7EDF\u4E00\u8F93\u5165",notConnected:"\u672A\u8FDE\u63A5",penSync:"\u624B\u5199\u5C4F\u8DDF\u968F OUT A\u3002",receiverNote:"\u65E0\u7EBF\u6295\u5C4F\u901A\u8FC7\u6A21\u62DF\u7684\u5916\u63A5 HDMI \u63A5\u6536\u5668\u63A5\u5165\u3002",teacherPc:"\u6559\u5E08\u7535\u8111",laptop:"\u7B14\u8BB0\u672C",wireless:"\u65E0\u7EBF\u6295\u5C4F",lights:"\u706F\u5149",blind:"\u540E\u5899\u7535\u52A8\u7A97\u5E18",screen:"\u6295\u5F71\u5E55\u5E03",ac:"\u7A7A\u8C03",dualIfp:"\u53CC IFP \u6F14\u793A",stop:"\u505C\u6B62",stopped:"\u5DF2\u505C\u6B62",station:"LCS \u5F55\u64AD",recording:"\u5F55\u5236\u4E2D",standby:"\u5F85\u673A",startRecording:"\u5F00\u59CB\u5F55\u5236",stopRecording:"\u505C\u6B62\u5F55\u5236",blindTopology:s=>`1 \u53F0 CBX \u2192 RS232 \u2192 \u9065\u63A7\u5668 \u2192 ${s} \u5757\u7A97\u5E18`,on:"\u5F00\u542F",off:"\u5173\u95ED",raise:"\u5347\u8D77",lower:"\u653E\u4E0B",raised:"\u5DF2\u5347\u8D77",lowered:"\u5DF2\u653E\u4E0B",moving:"\u8FD0\u884C\u4E2D",signal:"\u5DF2\u5206\u914D\u8F93\u5165",lesson:"\u4ECA\u65E5\u8BFE\u7A0B",workspace:"\u6F14\u793A\u5DE5\u4F5C\u533A",sharing:"\u5C4F\u5E55\u5171\u4EAB",lessonTopic:"\u63A2\u7D22\u3001\u5B66\u4E60\u3001\u521B\u9020",selectDevice:"\u9009\u4E2D\u8BBE\u5907",matrixUnavailable:"\u5F53\u524D\u5E03\u5C40\u672A\u5B89\u88C5 NDP600\u3002",quality:"\u6E32\u67D3\u753B\u8D28"},lr=s=>s==="zh"?ew:QE;function Vf(s,e,t){return`<section class="simulation-card" data-sim-device="${s}">
    <h3><button type="button" class="simulation-device-name" data-sim-select="${s}" ${t?"":`data-sim-copy="${e}"`}>${t||""}</button></h3>
    <div class="simulation-device-controls">
      <output data-sim-status aria-live="polite"></output>
      ${e==="blind"?`<div class="simulation-blind-controls">${["raise","lower","stop"].map(n=>`<button type="button" class="quiet-button" data-blind-action="${n}" data-sim-copy="${n}"></button>`).join("")}</div>`:'<button type="button" class="quiet-button" data-sim-toggle></button>'}
    </div>
    ${["ifp","screen"].includes(e)?'<p class="settings-note" data-sim-signal></p>':""}
    ${e==="blind"?'<p class="settings-note" data-blind-topology></p>':""}
  </section>`}function Jg({sidebar:s,model:e,select:t,setQuality:n}){let i=s.querySelector("#simulation-controls");i.innerHTML=`
    <div class="simulation-actions">
      <p data-sim-copy="controls"></p>
      <div><button type="button" id="class-start" class="primary-button" data-sim-copy="classStart"></button>
        <button type="button" id="class-end" class="quiet-button" data-sim-copy="classEnd"></button></div>
    </div>
    <div class="sidebar-tabs" role="tablist">
      <button type="button" role="tab" id="sim-tab-matrix" aria-controls="sim-matrix" aria-selected="true" data-sim-copy="matrix"></button>
      <button type="button" role="tab" id="sim-tab-room" aria-controls="sim-room" aria-selected="false" tabindex="-1" data-sim-copy="room"></button>
    </div>
    <div class="sidebar-pane" id="sim-matrix" role="tabpanel" aria-labelledby="sim-tab-matrix" tabindex="0">
      <label class="check-row"><input id="sim-dual-ifp" type="checkbox"><span data-sim-copy="dualIfp"></span></label>
      <p data-sim-unavailable data-sim-copy="matrixUnavailable" hidden></p>
      <section class="simulation-card" data-sim-device="${Kt}">
        <h3><button type="button" class="simulation-device-name" data-sim-select="${Kt}">NDP600</button></h3>
        <label class="check-row"><input id="matrix-duplicate" type="checkbox"><span data-sim-copy="duplicate"></span></label>
        <p class="settings-note" data-sim-copy="duplicateHint"></p>
        <label class="simulation-route" data-matrix-route="all"><span data-sim-copy="common"></span><select id="matrix-source"></select></label>
        ${Object.keys(Jt).map(S=>`<div class="simulation-route" data-matrix-output="${S}">
          <label for="matrix-out-${S}"></label>
          <select id="matrix-out-${S}" data-output="${S}"></select>
          <span class="simulation-route-status"></span>
        </div>`).join("")}
        <p class="settings-note" data-sim-copy="penSync"></p>
        <p class="settings-note" data-sim-copy="receiverNote"></p>
      </section>
    </div>
    <div class="sidebar-pane" id="sim-room" role="tabpanel" aria-labelledby="sim-tab-room" tabindex="0" hidden>
      ${Object.entries(Gh).map(([S,b])=>Vf(S,b)).join("")}
      ${Vf(Mi,"station")}
      ${["A","B"].map((S,b)=>Vf(Jt[S],"ifp",`IFP ${b+1}`)).join("")}
    </div>
    <div class="simulation-footer">
      <label for="simulation-quality" data-sim-copy="quality"></label>
      <select id="simulation-quality"></select>
    </div>`;let r=S=>i.querySelector(S),a=su(r('[role="tablist"]'),980),o=r("#matrix-duplicate"),l=r("#sim-dual-ifp"),c=r("#matrix-source"),h=r('[data-sim-device="ndp600"]'),u=r("#simulation-quality"),p=document.querySelector("#render-quality"),d=lr("en"),_,g=Object.entries(Jt).map(([S,b])=>{let T=r(`[data-matrix-output="${S}"]`);return{output:S,id:b,label:T.querySelector("label"),input:T.querySelector("select"),status:T.querySelector("span")}}),m=[...i.querySelectorAll("[data-sim-device]")].filter(S=>S!==h).map(S=>({card:S,id:S.dataset.simDevice,status:S.querySelector("[data-sim-status]"),toggle:S.querySelector("[data-sim-toggle]"),signal:S.querySelector("[data-sim-signal]")})),f=e.dispatch;l.addEventListener("change",()=>f({type:"dual-ifp",enabled:l.checked})),o.addEventListener("change",()=>f({type:"duplicate",enabled:o.checked})),c.addEventListener("change",()=>f({type:"route",output:"all",input:c.value}));for(let{output:S,input:b}of g)b?.addEventListener("change",()=>f({type:"route",output:S,input:b.value}));r("#class-start").addEventListener("click",()=>f({type:"preset",id:"start"})),r("#class-end").addEventListener("click",()=>f({type:"preset",id:"end"}));for(let S of i.querySelectorAll("[data-sim-select]"))S.addEventListener("click",()=>t(S.dataset.simSelect,!1));for(let{id:S,toggle:b}of m)b?.addEventListener("click",()=>{t(S,!1),f({type:"device",id:S,target:+(e.state.devices.get(S).target===0)})});for(let S of i.querySelectorAll("[data-blind-action]"))S.addEventListener("click",()=>{t("sim-blind",!1);let b=S.dataset.blindAction;f(b==="stop"?{type:"stop-blinds"}:{type:"device",id:"sim-blind",target:+(b==="raise")})});u.addEventListener("change",()=>n(u.value));function x(S){let b=ys.find(T=>T.id===S);return`${d[b.label]} \xB7 ${b.port}`}function y(S,b){S.textContent!==b&&(S.textContent=b)}function v({duplicate:S,routes:b,devices:T,dualIfp:C,hasSecondIfp:M,blindCount:E}){l.parentElement.hidden=!M,l.checked=C,y(r("[data-blind-topology]"),d.blindTopology(E)),h.hidden=!T.has(Kt),r("[data-sim-unavailable]").hidden=!h.hidden,o.checked=S,c.parentElement.hidden=!S,c.value=b.A;for(let{id:D,output:L,label:U,input:B,status:k}of g){let z=T.has(D),$=L==="C"?d.screen:`IFP ${L==="A"?1:2}`;y(U,`OUT ${L}${z?` \u2192 ${$}`:""}`),B&&(B.hidden=S||!z,B.value=b[L]),k.hidden=z&&!S,y(k,z?x(b[L]):d.notConnected)}for(let{id:D,card:L,toggle:U,status:B,signal:k}of m){let z=T.get(D);if(L.hidden=!z,!z)continue;let{actual:$,target:H,moving:ee,kind:se,power:de}=z;if(L.classList.toggle("simulation-selected",_===D),L.dataset.moving=String(ee),y(B,d[ee?"moving":se==="screen"?de?"lowered":"raised":se==="station"?de?"recording":"standby":se==="blind"?$===1?"raised":$===0?"lowered":"stopped":de?"on":"off"]),se==="blind")for(let ze of L.querySelectorAll("[data-blind-action]")){let Be=ze.dataset.blindAction;ze.disabled=Be==="stop"?!ee:H===+(Be==="raise")}if(U){let ze=se==="screen"?H?"raise":"lower":se==="station"?H?"stopRecording":"startRecording":H?"off":"on";y(U,d[ze]),U.setAttribute("aria-label",`${d[se]||L.querySelector("h3").textContent} \xB7 ${d[ze]}`)}if(k){let ze=se==="screen"?"C":D===Jt.A?"A":"B";y(k,`${d.signal} \xB7 ${T.has(Kt)?x(b[ze]):d.notConnected}`)}}}return e.subscribe(v),{setLanguage(S){d=lr(S),i.querySelectorAll("[data-sim-copy]").forEach(b=>y(b,d[b.dataset.simCopy])),i.querySelector('[role="tablist"]').ariaLabel=d.controls;for(let b of[c,...g.map(T=>T.input).filter(Boolean)])b.replaceChildren(...ys.map(({id:T})=>new Option(x(T),T)));for(let{output:b,input:T,status:C}of g)T&&T.setAttribute("aria-label",`OUT ${b} \xB7 ${d.signal}`),C.dir="auto";this.syncQuality(),v(e.state)},syncQuality(){let S=[...p.options].map(b=>new Option(b.text,b.value));u.replaceChildren(...S),u.value=p.value},select(S,b){_=S,a.activate(S===Kt?0:1),v(e.state);let T=i.querySelector(`[data-sim-device="${S}"]`);!T||!b||s.hidden||(T.querySelector("h3 button").focus({preventScroll:!0}),T.scrollIntoView({block:"nearest"}))}}}function Hf(s,e,t){let n=s-.4,i=[],r=.4;for(let[c,h]of e.sort((u,p)=>u[0]-p[0]))if(c>r&&i.push([r,Math.min(n,c)]),r=Math.max(r,h),r>=n)break;r<n&&i.push([r,n]),i.sort((c,h)=>h[1]-h[0]-(c[1]-c[0]));let[a,o]=i.find(([c,h])=>h-c>=t)||i[0]||[0,0],l=Math.min(t,o-a);return l<.42?null:{center:a+l/2,span:l}}function tw(s,e,t,n,i){let r=e==="left"?0:s.width,a=n.filter(l=>l.min.x<r+.35&&l.max.x>r-.35).map(l=>[l.min.z-.16,l.max.z+.16]);if(e===t){let l=Math.min(1.16,(s.depth-.36)/2),c=Math.max(l/2+.08,Math.min(1.45,s.depth*.2));for(let h of[c,s.depth-c])a.push([h-l/2-.14,h+l/2+.14])}let o=Hf(s.depth,a,i);return o&&{x:r,z:o.center,span:o.span,angle:e==="left"?Math.PI/2:-Math.PI/2}}function Kg(s,e){let t=new Ve,n=new Map,{room:i}=s,r=new Tt,a,o=(X,fe)=>new tn({color:X,roughness:.72,...fe}),l=o("#d7e1e5"),c=o("#748589",{metalness:.45}),h=o("#dad5bb"),u=o("#f1f0e6"),p=o("#78b6c9",{roughness:.29,transparent:!0,opacity:.32,depthWrite:!1}),d=o("#fff1d2",{emissive:"#ffe6ad"}),_=o("#335263",{emissive:"#36d6a7"}),g=o("#334553"),m=[l,c,h,u,p,d,_,g];function f(X,fe,ne,be,Qe=!1){let I=new Xe(r,be);return I.scale.set(...fe),I.position.set(...ne),I.castShadow=Qe,I.receiveShadow=!0,X.add(I),I}function x(X,fe,ne){let be=new Ve;return be.userData.deviceId=X,be.position.set(...fe),t.add(be),n.set(X,{root:be,update:ne}),be}let y=[],v=new fn;for(let X of s.models.values()){if(s.simulation?.hides(X.userData.deviceId))continue;X.updateWorldMatrix(!0,!0);let fe=new fn;X.traverse(ne=>{!ne.isMesh||ne===X.userData.halo||(ne.geometry.boundingBox||ne.geometry.computeBoundingBox(),fe.union(v.copy(ne.geometry.boundingBox).applyMatrix4(ne.matrixWorld)))}),y.push(fe)}function S(X,fe,ne,be,Qe=.17){f(X,[fe+.04,.085,.12],[0,0,Qe],l);let I=f(X,[fe,ne,.021],[0,-ne/2,Qe+.01],be,!0),$e=f(X,[fe+.01,.037,.045],[0,-ne,Qe+.01],c,!0);return De=>{let we=ne*De;I.visible=we>.005,I.scale.y=Math.max(we,.005),I.position.y=-.05-we/2,$e.position.y=-.055-we}}let b=s.devicesData.find(X=>X.id==="ifp-2"),T=y.filter(X=>X.min.z<.35&&X.max.y>1.1).map(X=>[X.min.x-.14,X.max.x+.14]),C=Hf(i.width,[...T,[0,i.width/2]],2.2),M=b?{x:b.x,z:0,span:Kn(b.size),angle:0}:C&&{x:C.center,z:0,span:C.span,angle:0},E=tw(i,s.doorSide==="right"?"left":"right",s.doorSide,y,2.45),D=(!e&&M?.span>=.85?M:E)||M;if(D){let{x:X,z:fe,span:ne,angle:be}=D,Qe=be===0?(s.mountHeights["ifp-1"]??1.65)+ne*9/32+.05:2.8,I=Math.min(i.height-.16,Qe),$e,De=Math.min(ne*9/16,I-.91),we=x("sim-screen",[X,I,fe],tt=>{$e(tt),a.visible=tt>=.995&&s.models.has("ndp600")});we.rotation.y=be,$e=S(we,ne,De,u);let _e=Math.min(ne-.1,(De-.09)*16/9);a=new Xe(new On(_e,_e*9/16),u),a.name="projected-image",a.position.set(0,-.05-De/2,.192),we.add(a)}let L=Wh(i),U=y.filter(X=>X.max.z>i.depth-.32&&X.min.y>1.3),B=L?Math.min(2.58,i.height-.42):Math.min(2.16,i.height-.53,...U.map(X=>X.min.y-.08)),k=L?B-.635:Math.min(1.28,B-.66),z=L?.051:.109,$=z+.003,H=[],ee=x("sim-blind",[0,B,i.depth],X=>{for(let fe of H)fe(1-X)});ee.rotation.y=Math.PI;for(let[X,{x:fe,span:ne}]of qh(i.width).entries()){let be=new Ve;be.name=`rear-blind-${X+1}`,be.position.x=-fe,ee.add(be),f(be,[ne-.036,k,.025],[0,-.05-k/2,z],p);for(let Qe of[-1,1])f(be,[.034,k,.055],[Qe*(ne/2-.017),-.05-k/2,$],c);f(be,[ne,.034,.06],[0,-.06-k,$],c),H.push(S(be,ne-.02,k,h,L?.084:void 0))}let se=Math.max(.32,B-k-.21)-B;f(ee,[.12,.085,.055],[-.42,se,.085],g).name="CBX",f(ee,[.08,.11,.045],[-.62,se,.085],l).name="Curtain remote",f(ee,[.1,.01,.012],[-.53,se,.077],g).name="RS232";let de=x("sim-lights",[i.width/2,i.height-.08,i.depth/2],X=>{d.emissiveIntensity=X*1.4});for(let X of[-i.width*.24,i.width*.24])for(let fe of[-i.depth*.1,i.depth*.24]){let ne=Math.min(1.15,i.width*.23),be=de.position.x+X,Qe=[fe,fe-.35,fe+.35].find(I=>!y.some($e=>$e.max.y>i.height-.18&&$e.min.x<be+ne/2+.04&&$e.max.x>be-ne/2-.04&&$e.min.z<de.position.z+I+.17&&$e.max.z>de.position.z+I-.17));Qe!==void 0&&(f(de,[ne,.065,.24],[X,0,Qe],l),f(de,[ne-.07,.018,.19],[X,-.042,Qe],d))}let Re=i.height-.21,ze=y.filter(X=>X.max.z>i.depth-.33&&X.max.y>Re-.18).map(X=>[X.min.x-.12,X.max.x+.12]),Be=Hf(i.width,ze,Math.min(.94,i.width*.2)),Ue=Be?.span??.55,Z,K=x("sim-ac",[Be?.center??i.width/2,Re,i.depth-.17],X=>{Z.rotation.x=X*.52,_.emissiveIntensity=X*1.6});return f(K,[Ue,.26,.2],[0,0,0],l),f(K,[Ue*.9,.068,.026],[0,-.073,-.104],c),Z=f(K,[Ue*.86,.016,.061],[0,-.08,-.126],l),f(K,[.035,.018,.012],[Ue*.36,.028,-.104],_),{group:t,models:n,projection:a,dispose(){t.removeFromParent(),r.dispose(),a?.geometry.dispose();for(let X of m)X.dispose()}}}var nw={ops:{background:"#e8f3fb",ink:"#153552",accent:"#176f9f",title:"lesson"},hdmi1:{background:"#28203f",ink:"#fff3ff",accent:"#8756c4",title:"workspace"},hdmi2:{background:"#083d39",ink:"#e3fff4",accent:"#128873",title:"sharing"}};function Yh(s,e,t=[]){let n=s.material,i=document.createElement("canvas");i.width=e==="control"?256:640,i.height=e==="control"?512:360;let r=i.getContext("2d"),a=new Ni(i);a.colorSpace=Pt;let o=new Sn({map:a,toneMapped:!1,...e==="projection"?{transparent:!0,opacity:.9,depthWrite:!1}:{}});s.material=o;for(let h of t)h.visible=!1;let l;function c({powered:h,level:u=1,source:p,routes:d,duplicate:_,lang:g}){let m=h?u:1,f=o.color.r!==m;f&&o.color.setScalar(m);let x=[h,p,d?.A,d?.B,d?.C,_,g].join("/");if(x===l)return f;l=x;let y=lr(g),{width:v,height:S}=i;if(r.fillStyle="#111820",r.fillRect(0,0,v,S),e==="recording")r.fillStyle="#1b2b3c",r.fillRect(0,0,v,S),r.fillStyle="#0d1928",r.fillRect(0,0,v,86),r.fillStyle="#eaf4fa",r.font="bold 46px sans-serif",r.fillText("LCS 810",32,60),r.fillStyle=h?"#ff555d":"#93a7b8",r.beginPath(),r.arc(62,182,25,0,2*Math.PI),r.fill(),r.font="bold 57px sans-serif",r.fillText(h?y.recording:y.standby,108,200,v-145);else if(h&&e==="control")r.fillStyle="#0d615c",r.fillRect(0,0,v,125),r.fillStyle="#efffff",r.font="bold 26px sans-serif",r.fillText("NDP600",18,40),r.font="20px sans-serif",r.fillText(y.matrix,18,78),_&&r.fillText(y.duplicate,18,109),Object.entries(d).forEach(([b,T],C)=>{let M=145+C*112;r.fillStyle="#233544",r.fillRect(12,M,v-24,90),r.fillStyle="#f0f9ff",r.font="bold 22px sans-serif",r.fillText("OUT "+b,24,M+32),r.font="19px sans-serif",r.fillText(ys.find(E=>E.id===T).port,24,M+65)});else if(h&&p){let b=ys.find(C=>C.id===p),T=nw[p];if(r.fillStyle=T.background,r.fillRect(0,0,v,S),r.fillStyle=T.accent,r.fillRect(0,0,v,68),r.fillStyle="#fff",r.font="bold 30px sans-serif",r.fillText(y[b.label],28,45),r.textAlign="right",r.font="22px sans-serif",r.fillText(b.port,v-24,45),r.textAlign="left",r.fillStyle=T.ink,r.font="bold 40px sans-serif",r.fillText(y[T.title],32,137,v-64),p==="ops")r.font="25px sans-serif",r.fillText(y.lessonTopic,32,183),["#258f87","#3e97c1","#c98836"].forEach((C,M)=>{r.fillStyle=C,r.fillRect(32+M*195,223,177,84)});else if(p==="hdmi1"){r.fillStyle="#634b8a",r.fillRect(32,169,120,153),r.fillStyle="#e6d9f6",r.fillRect(169,169,438,153),r.fillStyle="#8756c4";for(let C=0;C<4;C++)r.fillRect(201+87*C,278-C*19,57,22+C*19)}else r.strokeStyle="#91e7c3",r.lineWidth=9,r.strokeRect(205,181,230,121),r.beginPath(),r.arc(208,298,47,-Math.PI/2,0),r.stroke(),r.fillStyle="#91e7c3",r.fillRect(205,291,12,12)}else h&&(r.fillStyle="#d7e2ec",r.font="28px sans-serif",r.fillText(y.notConnected,28,S/2));return a.needsUpdate=!0,!0}return{render:c,dispose(){s.material=n;for(let h of t)h.visible=!0;o.dispose(),a.dispose()}}}function Qg(s){let e=!1,t,n,i,r="en",a,o,l=new Map,c=new Map,h=new Map;function u(m){for(let f of c.get(m)||[])f.dispose();c.delete(m)}function p(){for(let m of c.keys())u(m);a?.dispose(),a=null,t?.dispose(),t=null,h.clear();for(let{model:m,kind:f}of l.values())m.visible=s.visibleKinds[f]!==!1;l.clear(),n&&(s.ambient.intensity=n.ambient,s.sun.intensity=n.sun,s.scene.environmentIntensity=n.environment,n=null),s.invalidateShadows()}function d(m){if(!e||c.has(m))return;let f=s.models.get(m),x=f?.userData.avScreen;if(!x)return;let y=[Yh(x,m===Mi?"recording":"content",f.userData.avDecorations)];f.userData.avControl&&y.push(Yh(f.userData.avControl,"control")),c.set(m,y)}function _(){if(!e)return;p(),o=i?.dualIfp??!1;let m=Wh(s.room);for(let{id:f,kind:x,mount:y}of s.devicesData){if(!(!o&&f===Jt.B)&&!(m&&x==="speaker"&&y==="rear-wall"))continue;let b=s.models.get(f);b.visible=!1,l.set(f,{model:b,kind:x})}n={ambient:s.ambient.intensity,sun:s.sun.intensity,environment:s.scene.environmentIntensity},t=Kg(s,o),s.scene.add(t.group),t.projection&&(a=Yh(t.projection,"projection"));for(let f of[Kt,Mi,Jt.A,...o?[Jt.B]:[]])d(f);g(i,r)}function g(m,f){if(i=m,r=f,!e||!t||!m)return;if(o!==m.dualIfp){_();return}let x=!1;for(let[b,{update:T}]of t.models){let C=m.devices.get(b)?.actual??1;h.get(b)!==C&&(T(C),h.set(b,C),x||(x=b==="sim-blind"||b==="sim-screen"),b==="sim-lights"&&(s.ambient.intensity=n.ambient*(.29+.71*C),s.sun.intensity=n.sun*(.27+.73*C),s.scene.environmentIntensity=n.environment*(.45+.55*C)),s.frameDirty=!0)}for(let b of["A","B"]){let T=Jt[b],[C]=c.get(T)||[],M=m.devices.has(Kt)?m.routes[b]:null,E=m.devices.get(T)?.actual??0;C?.render({powered:E>0,level:E,source:M,lang:f})&&(s.frameDirty=!0)}let[y,v]=c.get(Kt)||[];y?.render({powered:!0,source:m.routes.A,lang:f})&&(s.frameDirty=!0),v?.render({powered:!0,routes:m.routes,duplicate:m.duplicate,lang:f})&&(s.frameDirty=!0);let[S]=c.get(Mi)||[];S?.render({powered:m.devices.get(Mi)?.power,lang:f})&&(s.frameDirty=!0),a&&m.devices.has(Kt)&&m.devices.get(Jt.C)?.actual>=.995&&a.render({powered:!0,source:m.routes.C,lang:f})&&(s.frameDirty=!0),x&&s.invalidateShadows()}return{clear:p,unbind:u,refresh:_,render:g,setActive(m){e!==m&&(e=m,e?_():p())},hides(m){return l.has(m)},get roots(){return t?[...t.models.values()].map(({root:m})=>m):[]}}}function e_({animate:s,reducedMotion:e}){let t=new Map,n={A:"ops",B:"ops",C:"ops"},i=new Set,r=new Map,a={devices:t,routes:n,duplicate:!0,dualIfp:!1,hasSecondIfp:!1,blindCount:0},o=[],l=!0;function c(){for(let g of i)g(a)}function h(g){let m=r.get(g);r.delete(g),m?.kill()}function u(g,m){o=g,a.hasSecondIfp=g.some(f=>f.id===Jt.B),a.blindCount=qh(m).length,p(),c()}function p(){let g=new Map(Object.entries(Gh));for(let{id:m,kind:f}of o)(m===Kt||m===Mi||m===Jt.A||m===Jt.B&&a.dualIfp)&&g.set(m,f);for(let m of t.keys())g.has(m)||(h(m),t.delete(m));for(let[m,f]of g){if(t.has(m))continue;let x=+(m!==Mi);t.set(m,{id:m,kind:f,actual:x,target:x,power:!!x,moving:!1})}}function d(g,{target:m,duration:f,delay:x}){if(g.target===m)return;h(g.id),g.target=m;let y=g.actual,v=f*Math.abs(m-y);if(!v||e()){Object.assign(g,{actual:m,power:m>0,moving:!1});return}g.moving=!0;let S=s({from:y,target:m,seconds:v,delay:x,update(b){r.get(g.id)===S&&(g.actual=b,g.power=b>0,c())},complete(){r.get(g.id)===S&&(r.delete(g.id),Object.assign(g,{actual:m,power:m>0,moving:!1}),c())}});r.set(g.id,S),l||S.resume()}function _(g){switch(g.type){case"duplicate":if(!t.has(Kt))return;a.duplicate=!!g.enabled,a.duplicate&&(n.B=n.C=n.A);break;case"route":if(!t.has(Kt)||!ys.some(m=>m.id===g.input))return;if(a.duplicate&&g.output==="all")n.A=n.B=n.C=g.input;else if(!a.duplicate&&Object.hasOwn(Jt,g.output)&&t.has(Jt[g.output]))n[g.output]=g.input;else return;break;case"dual-ifp":a.dualIfp=!!g.enabled,p();break;case"preset":{let m=Object.hasOwn(Xh,g.id)&&Xh[g.id];if(!m)return;for(let f of t.values())m[f.kind]&&d(f,m[f.kind]);break}case"device":{let m=t.get(g.id),f=m&&Xh.start[m.kind];if(!f||!Number.isFinite(g.target))return;d(m,{...f,target:+(g.target>0)});break}case"stop-blinds":{let m=t.get("sim-blind");if(!m?.moving)return;h(m.id),m.target=m.actual,m.moving=!1;break}default:return}c()}return{state:a,dispatch:_,reconcile:u,subscribe(g){return i.add(g),()=>i.delete(g)},setPaused(g){if(l!==g){l=g;for(let m of r.values())l?m.pause():m.resume()}},finishMotion(){for(let g of t.values())g.moving&&(h(g.id),Object.assign(g,{actual:g.target,power:g.target>0,moving:!1}));c()}}}function t_({room:s,sidebar:e,devices:t,visible:n,setQuality:i,restorePlanningSelection:r}){let a=[...document.querySelectorAll("[data-classroom-mode]")],o=document.querySelector("#classroom-mode"),l=s.reducedMotion,c=e_({animate:jg,reducedMotion:()=>l.matches}),h=Qg(s);s.simulation=h;let u=!1,p,d="en",_=Jg({sidebar:e,model:c,select:m,setQuality:i});function g(){c.setPaused(!u||document.hidden)}function m(x,y=!0){if(!u||!c.state.devices.has(x))return!1;y&&e.hidden&&document.querySelector("#sidebar-toggle").click(),p=x;let v=t().find(S=>S.id===x);return v&&n(v)?s.setSelected(x,!1):v||s.setSelected(null,!1),_.select(x,y),!0}function f(x){u=x==="simulation",e.dataset.mode=x,document.documentElement.dataset.classroomMode=x;for(let v of a)v.ariaPressed=String(v.dataset.classroomMode===x);h.setActive(u),g(),u?p&&m(p,!1):r();let y=new URL(location.href);if(u?y.searchParams.set("mode","simulation"):y.searchParams.get("mode")==="simulation"&&y.searchParams.delete("mode"),y.href!==location.href)try{history.replaceState(null,"",y)}catch{}}return a.forEach(x=>x.addEventListener("click",()=>f(x.dataset.classroomMode))),document.querySelector("#open-av-matrix").addEventListener("click",()=>{f("simulation"),m(Kt)}),document.addEventListener("visibilitychange",g),l.addEventListener("change",()=>{l.matches&&c.finishMotion()}),c.subscribe(x=>h.render(x,d)),c.reconcile(t(),s.room.width),o.hidden=!1,f(new URLSearchParams(location.search).get("mode")==="simulation"?"simulation":"planning"),{select:m,get active(){return u},syncLayout(){c.reconcile(t(),s.room.width),p&&!c.state.devices.has(p)&&(p=void 0),p&&m(p,!1)},syncQuality(){_.syncQuality()},setLanguage(x){d=x;let y=lr(x);o.setAttribute("aria-label",y.mode);for(let v of a)v.textContent=y[v.dataset.classroomMode];document.querySelector("#open-av-matrix").textContent=y.openMatrix,_.setLanguage(x),h.render(c.state,x)}}}var iw=["resetPlan","resetPlanHint","quantity","automatic","fixed","pending","adjusted","pickupUnmet","importHint"],n_={en:["Reset","Recommend quantities and layout for the current room","S210 quantities","Automatic recommendation","Specified quantities","Pending \xB7 click Recalculate","From 2D \xB7 adjusted in 3D","Pickup coverage is below target; specified quantities are retained.","Recalculate or reset this 3D view locally. Refresh restores the original 2D snapshot."],zh:["\u91CD\u7F6E","\u6309\u5F53\u524D\u623F\u95F4\u91CD\u65B0\u63A8\u8350\u6570\u91CF\u4E0E\u5E03\u5C40","S210 \u6570\u91CF","\u81EA\u52A8\u63A8\u8350","\u6307\u5B9A\u6570\u91CF","\u5F85\u5E94\u7528 \xB7 \u70B9\u51FB\u91CD\u65B0\u8BA1\u7B97","\u6765\u81EA 2D \xB7 \u5DF2\u5728 3D \u8C03\u6574","\u62FE\u97F3\u8986\u76D6\u672A\u8FBE\u5230\u76EE\u6807\uFF0C\u4FDD\u7559\u6307\u5B9A\u6570\u91CF\u3002","\u53EF\u5728\u5F53\u524D 3D \u91CD\u65B0\u8BA1\u7B97\u6216\u91CD\u7F6E\uFF1B\u5237\u65B0\u6062\u590D\u539F\u59CB 2D \u5FEB\u7167\u3002"],ko:["\uC7AC\uC124\uC815","\uD604\uC7AC \uBC29\uC758 \uC218\uB7C9\uACFC \uBC30\uCE58\uB97C \uB2E4\uC2DC \uCD94\uCC9C","S210 \uC218\uB7C9","\uC790\uB3D9 \uCD94\uCC9C","\uC9C0\uC815 \uC218\uB7C9","\uB300\uAE30 \uC911 \xB7 \uB2E4\uC2DC \uACC4\uC0B0 \uD074\uB9AD","2D\uC5D0\uC11C \uAC00\uC838\uC634 \xB7 3D\uC5D0\uC11C \uC870\uC815\uB428","\uC218\uC74C \uBC94\uC704\uAC00 \uBAA9\uD45C \uBBF8\uB9CC\uC785\uB2C8\uB2E4. \uC9C0\uC815 \uC218\uB7C9\uC740 \uC720\uC9C0\uB429\uB2C8\uB2E4.","\uC774 3D\uC5D0\uC11C \uB2E4\uC2DC \uACC4\uC0B0\uD558\uAC70\uB098 \uC7AC\uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0C8\uB85C \uACE0\uCE58\uBA74 \uC6D0\uB798 2D \uBC30\uCE58\uB85C \uB3CC\uC544\uAC11\uB2C8\uB2E4."],mn:["\u0414\u0430\u0445\u0438\u043D \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u0430\u0445","\u041E\u0434\u043E\u043E\u0433\u0438\u0439\u043D \u04E9\u0440\u04E9\u04E9\u043D\u0434 \u0442\u043E\u043E, \u0431\u0430\u0439\u0440\u043B\u0430\u043B\u044B\u0433 \u0441\u0430\u043D\u0430\u043B \u0431\u043E\u043B\u0433\u043E\u0445","S210 \u0442\u043E\u043E","\u0410\u0432\u0442\u043E\u043C\u0430\u0442 \u0441\u0430\u043D\u0430\u043B","\u0417\u0430\u0430\u0441\u0430\u043D \u0442\u043E\u043E","\u0425\u04AF\u043B\u044D\u044D\u0433\u0434\u044D\u0436 \u0431\u0430\u0439\u043D\u0430 \xB7 \u0414\u0430\u0445\u0438\u043D \u0442\u043E\u043E\u0446\u043E\u043E\u043B\u043E\u0445","2D-\u044D\u044D\u0441 \xB7 3D-\u0434 \u04E9\u04E9\u0440\u0447\u0438\u043B\u0441\u04E9\u043D","\u0414\u0443\u0443 \u0445\u04AF\u043B\u044D\u044D\u043D \u0430\u0432\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D \u0437\u043E\u0440\u0438\u043B\u0442\u043E\u0434 \u0445\u04AF\u0440\u044D\u044D\u0433\u04AF\u0439. \u0417\u0430\u0430\u0441\u0430\u043D \u0442\u043E\u043E\u0433 \u0445\u0430\u0434\u0433\u0430\u043B\u043D\u0430.","\u042D\u043D\u044D 3D-\u0434 \u0434\u0430\u0445\u0438\u043D \u0442\u043E\u043E\u0446\u043E\u043E\u043B\u0436 \u0431\u043E\u043B\u043D\u043E. \u0428\u0438\u043D\u044D\u0447\u043B\u044D\u0445\u044D\u0434 \u0430\u043D\u0445\u043D\u044B 2D \u0431\u0430\u0439\u0440\u043B\u0430\u043B \u0441\u044D\u0440\u0433\u044D\u043D\u044D."],ja:["\u30EA\u30BB\u30C3\u30C8","\u73FE\u5728\u306E\u90E8\u5C4B\u3067\u6570\u91CF\u3068\u914D\u7F6E\u3092\u518D\u63D0\u6848","S210 \u6570\u91CF","\u81EA\u52D5\u63D0\u6848","\u6307\u5B9A\u6570\u91CF","\u672A\u9069\u7528 \xB7 \u518D\u8A08\u7B97\u3092\u30AF\u30EA\u30C3\u30AF","2D\u304B\u3089 \xB7 3D\u3067\u8ABF\u6574\u6E08\u307F","\u96C6\u97F3\u7BC4\u56F2\u304C\u76EE\u6A19\u672A\u6E80\u3067\u3059\u3002\u6307\u5B9A\u6570\u91CF\u3092\u4FDD\u6301\u3057\u307E\u3059\u3002","\u3053\u306E3D\u3067\u518D\u8A08\u7B97\u30FB\u30EA\u30BB\u30C3\u30C8\u3067\u304D\u307E\u3059\u3002\u66F4\u65B0\u3059\u308B\u3068\u5143\u306E2D\u914D\u7F6E\u306B\u623B\u308A\u307E\u3059\u3002"],es:["Restablecer","Recomendar cantidades y distribuci\xF3n para la sala actual","Cantidad S210","Recomendaci\xF3n autom\xE1tica","Cantidades especificadas","Pendiente \xB7 pulse Recalcular","Desde 2D \xB7 ajustado en 3D","Cobertura de captaci\xF3n inferior al objetivo; se conservan las cantidades.","Recalcule o restablezca este 3D. Al recargar se recupera el plano 2D original."],fr:["R\xE9initialiser","Recommander les quantit\xE9s et positions pour la salle actuelle","Quantit\xE9 S210","Recommandation automatique","Quantit\xE9s d\xE9finies","En attente \xB7 cliquer sur Recalculer","Depuis la 2D \xB7 ajust\xE9 en 3D","Couverture de captation insuffisante ; les quantit\xE9s d\xE9finies sont conserv\xE9es.","Recalculez ou r\xE9initialisez cette vue 3D. Un rechargement restaure le plan 2D initial."],ar:["\u0625\u0639\u0627\u062F\u0629 \u0636\u0628\u0637","\u0627\u0642\u062A\u0631\u0627\u062D \u0627\u0644\u0643\u0645\u064A\u0627\u062A \u0648\u0627\u0644\u062A\u0648\u0632\u064A\u0639 \u0644\u0644\u063A\u0631\u0641\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629","\u0639\u062F\u062F S210","\u0627\u0642\u062A\u0631\u0627\u062D \u062A\u0644\u0642\u0627\u0626\u064A","\u0643\u0645\u064A\u0627\u062A \u0645\u062D\u062F\u062F\u0629","\u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \xB7 \u0627\u0636\u063A\u0637 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062D\u0633\u0627\u0628","\u0645\u0646 2D \xB7 \u062A\u0645 \u0627\u0644\u062A\u0639\u062F\u064A\u0644 \u0641\u064A 3D","\u062A\u063A\u0637\u064A\u0629 \u0627\u0644\u0627\u0644\u062A\u0642\u0627\u0637 \u0623\u0642\u0644 \u0645\u0646 \u0627\u0644\u0647\u062F\u0641\u061B \u064A\u062A\u0645 \u0627\u0644\u0627\u062D\u062A\u0641\u0627\u0638 \u0628\u0627\u0644\u0643\u0645\u064A\u0627\u062A \u0627\u0644\u0645\u062D\u062F\u062F\u0629.","\u064A\u0645\u0643\u0646 \u0625\u0639\u0627\u062F\u0629 \u062D\u0633\u0627\u0628 \u0647\u0630\u0627 \u0627\u0644\u0639\u0631\u0636 \u0623\u0648 \u0636\u0628\u0637\u0647 \u0645\u062D\u0644\u064A\u0627\u064B. \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0635\u0641\u062D\u0629 \u064A\u0639\u064A\u062F \u0645\u062E\u0637\u0637 2D \u0627\u0644\u0623\u0635\u0644\u064A."]},Gf=s=>Object.fromEntries(iw.map((e,t)=>[e,(n_[s]||n_.en)[t]]));function s_(s){return{model:s.model,pan:0,tilt:0,hfov:s.hfov,custom:!1}}function Wf(s,e){let t=Vt[s.model];return t.projectOnly?[t.minHfov,t.maxHfov]:e.custom?[2,140]:[s.hfov,s.hfov]}function i_(s,e){let t=s_(s),n={...t,...e,model:s.model},i=(o,l,c,h)=>Math.min(c,Math.max(l,Number.isFinite(Number(o))?Number(o):h));n.custom=!Vt[s.model].projectOnly&&!!n.custom,n.pan=i(n.pan,-90,90,0),n.tilt=i(n.tilt,-60,60,0);let[r,a]=Wf(s,n);return n.hfov=i(n.hfov,r,a,t.hfov),n}var $h=class{constructor(){this.enabled=!1,this.onlyCurrent=!1,this.activeId=null,this.settings=new Map}sync(e){let t=e.filter(kn),n=new Set(t.map(i=>i.id));for(let i of this.settings.keys())n.has(i)||this.settings.delete(i);for(let i of t){let r=this.settings.get(i.id);this.settings.set(i.id,i_(i,r?.model===i.model?r:{}))}n.has(this.activeId)||(this.activeId=t[0]?.id||null)}change(e,t){let n=i_(e,{...this.settings.get(e.id),...t});return this.settings.set(e.id,n),n}reset(e){this.settings.set(e.id,s_(e))}resetAll(){this.enabled=!1,this.onlyCurrent=!1,this.settings.clear(),this.activeId=null}};var sw=["heading","enabled","camera","onlyCurrent","pan","tilt","hfov","custom","reset","note","tiltHint","fixedHint","zoomHint","empty","vfov","poseNote"],r_={en:["Camera field of view","Show 3D camera field","Camera","Only current camera","Pan","Tilt","Horizontal field of view","Custom demonstration","Reset this camera","16:9 field-of-view illustration \xB7 furniture occlusion is not simulated.","Positive tilt points down; negative tilt points up.","Fixed lens: use the model default, or enable a custom demonstration.","Adjust within the model\u2019s wide / tele field-of-view range.","No camera is available.","Vertical field of view","Camera direction: adjust in the field-of-view panel."],zh:["\u6444\u50CF\u5934\u89C6\u573A","\u663E\u793A\u4E09\u7EF4\u89C6\u573A","\u6444\u50CF\u5934","\u4EC5\u5F53\u524D\u6444\u50CF\u5934","\u5DE6\u53F3\u8F6C\u5411","\u4E0A\u4E0B\u4FEF\u4EF0","\u6C34\u5E73\u89C6\u573A\u89D2","\u81EA\u5B9A\u4E49\u6F14\u793A","\u6062\u590D\u5F53\u524D\u6444\u50CF\u5934","16:9 \u89C6\u573A\u793A\u610F \xB7 \u672A\u6A21\u62DF\u684C\u6905\u7B49\u7269\u4F53\u906E\u6321\u3002","\u4FEF\u4EF0\u6B63\u503C\u5411\u4E0B\uFF0C\u8D1F\u503C\u5411\u4E0A\u3002","\u56FA\u5B9A\u955C\u5934\u91C7\u7528\u578B\u53F7\u9ED8\u8BA4\u89C6\u89D2\uFF1B\u5F00\u542F\u81EA\u5B9A\u4E49\u6F14\u793A\u53EF\u8C03\u6574\u793A\u610F\u8303\u56F4\u3002","\u5728\u8BE5\u578B\u53F7\u5E7F\u89D2\u4E0E\u957F\u7126\u89C6\u573A\u8303\u56F4\u5185\u8C03\u6574\u3002","\u5F53\u524D\u6CA1\u6709\u53EF\u7528\u6444\u50CF\u5934\u3002","\u5782\u76F4\u89C6\u573A\u89D2","\u6444\u50CF\u5934\u671D\u5411\uFF1A\u53EF\u5728\u89C6\u573A\u9762\u677F\u4E2D\u8C03\u6574\u3002"],ko:["\uCE74\uBA54\uB77C \uD654\uAC01","3D \uCE74\uBA54\uB77C \uD654\uAC01 \uD45C\uC2DC","\uCE74\uBA54\uB77C","\uD604\uC7AC \uCE74\uBA54\uB77C\uB9CC","\uC88C\uC6B0 \uD68C\uC804","\uC0C1\uD558 \uAE30\uC6B8\uAE30","\uC218\uD3C9 \uD654\uAC01","\uC0AC\uC6A9\uC790 \uC9C0\uC815 \uC2DC\uC5F0","\uD604\uC7AC \uCE74\uBA54\uB77C \uCD08\uAE30\uD654","16:9 \uD654\uAC01 \uC608\uC2DC \xB7 \uAC00\uAD6C\uC5D0 \uC758\uD55C \uAC00\uB9BC\uC740 \uACC4\uC0B0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.","\uC591\uC218\uB294 \uC544\uB798\uCABD, \uC74C\uC218\uB294 \uC704\uCABD\uC785\uB2C8\uB2E4.","\uACE0\uC815 \uB80C\uC988\uB294 \uAE30\uBCF8 \uD654\uAC01\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uC9C0\uC815 \uC2DC\uC5F0\uC5D0\uC11C \uC870\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","\uBAA8\uB378\uC758 \uAD11\uAC01 / \uB9DD\uC6D0 \uD654\uAC01 \uBC94\uC704\uC5D0\uC11C \uC870\uC815\uD569\uB2C8\uB2E4.","\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uCE74\uBA54\uB77C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.","\uC218\uC9C1 \uD654\uAC01","\uCE74\uBA54\uB77C \uBC29\uD5A5: \uD654\uAC01 \uD328\uB110\uC5D0\uC11C \uC870\uC815\uD569\uB2C8\uB2E4."],mn:["\u041A\u0430\u043C\u0435\u0440\u044B\u043D \u0445\u0430\u0440\u0430\u0445 \u04E9\u043D\u0446\u04E9\u0433","\u041A\u0430\u043C\u0435\u0440\u044B\u043D 3D \u0445\u0430\u0440\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D\u0433 \u0445\u0430\u0440\u0443\u0443\u043B\u0430\u0445","\u041A\u0430\u043C\u0435\u0440","\u0417\u04E9\u0432\u0445\u04E9\u043D \u043E\u0434\u043E\u043E\u0433\u0438\u0439\u043D \u043A\u0430\u043C\u0435\u0440","\u0425\u044D\u0432\u0442\u044D\u044D \u044D\u0440\u0433\u044D\u043B\u0442","\u0411\u043E\u0441\u043E\u043E \u043D\u0430\u043B\u0430\u043B\u0442","\u0425\u044D\u0432\u0442\u044D\u044D \u0445\u0430\u0440\u0430\u0445 \u04E9\u043D\u0446\u04E9\u0433","\u04E8\u04E9\u0440\u0447\u043B\u04E9\u043D \u04AF\u0437\u04AF\u04AF\u043B\u044D\u0445","\u042D\u043D\u044D \u043A\u0430\u043C\u0435\u0440\u044B\u0433 \u0441\u044D\u0440\u0433\u044D\u044D\u0445","16:9 \u0445\u0430\u0440\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D\u043D\u0438\u0439 \u0436\u0438\u0448\u044D\u044D \xB7 \u0442\u0430\u0432\u0438\u043B\u0433\u0430\u0430\u0441 \u04AF\u04AF\u0441\u044D\u0445 \u0445\u0430\u043B\u0445\u043B\u0430\u043B\u0442\u044B\u0433 \u0442\u043E\u043E\u0446\u043E\u043E\u0433\u04AF\u0439.","\u042D\u0435\u0440\u044D\u0433 \u0443\u0442\u0433\u0430 \u0434\u043E\u043E\u0448, \u0441\u04E9\u0440\u04E9\u0433 \u0443\u0442\u0433\u0430 \u0434\u044D\u044D\u0448 \u0447\u0438\u0433\u043B\u044D\u043D\u044D.","\u0422\u043E\u0433\u0442\u043C\u043E\u043B \u043B\u0438\u043D\u0437 \u0437\u0430\u0433\u0432\u0430\u0440\u044B\u043D \u04AF\u043D\u0434\u0441\u044D\u043D \u04E9\u043D\u0446\u0433\u0438\u0439\u0433 \u0430\u0448\u0438\u0433\u043B\u0430\u043D\u0430. \u04E8\u04E9\u0440\u0447\u043B\u04E9\u043D \u04AF\u0437\u04AF\u04AF\u043B\u044D\u0445 \u0433\u043E\u0440\u0438\u043C\u0434 \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u0436 \u0431\u043E\u043B\u043D\u043E.","\u0417\u0430\u0433\u0432\u0430\u0440\u044B\u043D \u04E9\u0440\u0433\u04E9\u043D / \u043D\u0430\u0440\u0438\u0439\u043D \u0445\u0430\u0440\u0430\u0445 \u04E9\u043D\u0446\u0433\u0438\u0439\u043D \u0445\u04AF\u0440\u044D\u044D\u043D\u0434 \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u043D\u0430.","\u041A\u0430\u043C\u0435\u0440 \u0431\u0430\u0439\u0445\u0433\u04AF\u0439 \u0431\u0430\u0439\u043D\u0430.","\u0411\u043E\u0441\u043E\u043E \u0445\u0430\u0440\u0430\u0445 \u04E9\u043D\u0446\u04E9\u0433","\u041A\u0430\u043C\u0435\u0440\u044B\u043D \u0447\u0438\u0433\u043B\u044D\u043B: \u0445\u0430\u0440\u0430\u0445 \u04E9\u043D\u0446\u0433\u0438\u0439\u043D \u0441\u0430\u043C\u0431\u0430\u0440\u0442 \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u043D\u0430."],ja:["\u30AB\u30E1\u30E9\u306E\u753B\u89D2","3D\u753B\u89D2\u3092\u8868\u793A","\u30AB\u30E1\u30E9","\u73FE\u5728\u306E\u30AB\u30E1\u30E9\u306E\u307F","\u5DE6\u53F3\u306E\u5411\u304D","\u4E0A\u4E0B\u306E\u50BE\u304D","\u6C34\u5E73\u753B\u89D2","\u30AB\u30B9\u30BF\u30E0\u30C7\u30E2","\u73FE\u5728\u306E\u30AB\u30E1\u30E9\u3092\u30EA\u30BB\u30C3\u30C8","16:9\u753B\u89D2\u306E\u6A21\u5F0F\u56F3 \xB7 \u5BB6\u5177\u306A\u3069\u306E\u906E\u853D\u306F\u8A08\u7B97\u3057\u307E\u305B\u3093\u3002","\u6B63\u306E\u5024\u306F\u4E0B\u5411\u304D\u3001\u8CA0\u306E\u5024\u306F\u4E0A\u5411\u304D\u3067\u3059\u3002","\u56FA\u5B9A\u30EC\u30F3\u30BA\u306F\u65E2\u5B9A\u306E\u753B\u89D2\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\u30AB\u30B9\u30BF\u30E0\u30C7\u30E2\u3067\u6A21\u5F0F\u7684\u306B\u5909\u66F4\u3067\u304D\u307E\u3059\u3002","\u6A5F\u7A2E\u306E\u5E83\u89D2 / \u671B\u9060\u753B\u89D2\u306E\u7BC4\u56F2\u3067\u8ABF\u6574\u3057\u307E\u3059\u3002","\u4F7F\u7528\u3067\u304D\u308B\u30AB\u30E1\u30E9\u304C\u3042\u308A\u307E\u305B\u3093\u3002","\u5782\u76F4\u753B\u89D2","\u30AB\u30E1\u30E9\u306E\u5411\u304D\uFF1A\u753B\u89D2\u30D1\u30CD\u30EB\u3067\u8ABF\u6574\u3057\u307E\u3059\u3002"],es:["Campo de visi\xF3n de la c\xE1mara","Mostrar campo de visi\xF3n 3D","C\xE1mara","Solo la c\xE1mara actual","Giro horizontal","Inclinaci\xF3n","Campo horizontal","Demostraci\xF3n personalizada","Restablecer esta c\xE1mara","Esquema 16:9 \xB7 no se simulan obstrucciones de muebles.","Un valor positivo apunta abajo; uno negativo, arriba.","La lente fija usa el \xE1ngulo del modelo; active la demostraci\xF3n personalizada para ajustarlo.","Ajuste dentro del campo angular / tele del modelo.","No hay c\xE1maras disponibles.","Campo vertical","Direcci\xF3n de c\xE1mara: ajuste en el panel de campo de visi\xF3n."],fr:["Champ de vision des cam\xE9ras","Afficher le champ de vision 3D","Cam\xE9ra","Cam\xE9ra actuelle uniquement","Rotation horizontale","Inclinaison verticale","Champ de vision horizontal","D\xE9monstration personnalis\xE9e","R\xE9initialiser cette cam\xE9ra","Champ de vision 16:9 indicatif \xB7 les obstacles comme le mobilier ne sont pas simul\xE9s.","Une valeur positive incline vers le bas ; une valeur n\xE9gative vers le haut.","La lentille fixe utilise l\u2019angle du mod\xE8le. Activez la d\xE9monstration personnalis\xE9e pour modifier la repr\xE9sentation.","R\xE9glez l\u2019angle dans la plage grand-angle / t\xE9l\xE9objectif du mod\xE8le.","Aucune cam\xE9ra disponible.","Champ de vision vertical","Orientation de la cam\xE9ra : r\xE9glable dans le panneau de champ de vision."],ar:["\u0645\u062C\u0627\u0644 \u0631\u0624\u064A\u0629 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627","\u0625\u0638\u0647\u0627\u0631 \u0645\u062C\u0627\u0644 \u0631\u0624\u064A\u0629 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \u062B\u0644\u0627\u062B\u064A \u0627\u0644\u0623\u0628\u0639\u0627\u062F","\u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627","\u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u062D\u0627\u0644\u064A\u0629 \u0641\u0642\u0637","\u0627\u0644\u062F\u0648\u0631\u0627\u0646 \u0627\u0644\u0623\u0641\u0642\u064A","\u0627\u0644\u0645\u064A\u0644 \u0627\u0644\u0631\u0623\u0633\u064A","\u0645\u062C\u0627\u0644 \u0627\u0644\u0631\u0624\u064A\u0629 \u0627\u0644\u0623\u0641\u0642\u064A","\u0639\u0631\u0636 \u062A\u0648\u0636\u064A\u062D\u064A \u0645\u062E\u0635\u0635","\u0625\u0639\u0627\u062F\u0629 \u0636\u0628\u0637 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u062D\u0627\u0644\u064A\u0629","\u062A\u0645\u062B\u064A\u0644 \u0645\u062C\u0627\u0644 \u0627\u0644\u0631\u0624\u064A\u0629 \u0628\u0646\u0633\u0628\u0629 16:9 \xB7 \u0644\u0627 \u062A\u064F\u062D\u0627\u0643\u0649 \u0627\u0644\u0639\u0648\u0627\u0626\u0642 \u0645\u062B\u0644 \u0627\u0644\u0623\u062B\u0627\u062B.","\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0648\u062C\u0628\u0629 \u0644\u0644\u0623\u0633\u0641\u0644 \u0648\u0627\u0644\u0633\u0627\u0644\u0628\u0629 \u0644\u0644\u0623\u0639\u0644\u0649.","\u062A\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0639\u062F\u0633\u0629 \u0627\u0644\u062B\u0627\u0628\u062A\u0629 \u0632\u0627\u0648\u064A\u0629 \u0627\u0644\u0637\u0631\u0627\u0632 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629\u061B \u064A\u0645\u0643\u0646 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u0645\u062B\u064A\u0644 \u0641\u064A \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u0645\u062E\u0635\u0635.","\u0627\u0636\u0628\u0637 \u0636\u0645\u0646 \u0646\u0637\u0627\u0642 \u0627\u0644\u0632\u0627\u0648\u064A\u0629 \u0627\u0644\u0648\u0627\u0633\u0639\u0629 / \u0627\u0644\u0645\u0642\u0631\u0628\u0629 \u0644\u0644\u0637\u0631\u0627\u0632.","\u0644\u0627 \u062A\u0648\u062C\u062F \u0643\u0627\u0645\u064A\u0631\u0627\u062A \u0645\u062A\u0627\u062D\u0629.","\u0645\u062C\u0627\u0644 \u0627\u0644\u0631\u0624\u064A\u0629 \u0627\u0644\u0631\u0623\u0633\u064A","\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627: \u064A\u064F\u0636\u0628\u0637 \u0645\u0646 \u0644\u0648\u062D\u0629 \u0645\u062C\u0627\u0644 \u0627\u0644\u0631\u0624\u064A\u0629."]},qo=s=>Object.fromEntries(sw.map((e,t)=>[e,(r_[s]||r_.en)[t]]));var Gt=s=>document.querySelector(s),Zh=class{constructor({devices:e,title:t,language:n,onSelect:i,scene:r}){Object.assign(this,{devices:e,title:t,language:n,onSelect:i,scene:r}),this.state=new $h,this.frame=null,Gt("#camera-field-enabled").addEventListener("change",a=>{this.state.enabled=a.target.checked,this.apply(),this.render()}),Gt("#camera-field-only").addEventListener("change",a=>{this.state.onlyCurrent=a.target.checked,this.apply()}),Gt("#camera-field-select").addEventListener("change",a=>{this.state.activeId=a.target.value,i(a.target.value)}),Gt("#camera-field-custom").addEventListener("change",a=>{let o=this.active();o&&(this.state.change(o,{custom:a.target.checked}),this.apply(),this.render())}),Gt("#camera-field-reset").addEventListener("click",()=>{let a=this.active();a&&(this.state.reset(a),this.apply(),this.render())});for(let a of["pan","tilt","hfov"])for(let o of["","-number"]){let l=Gt(`#camera-field-${a}${o}`);l.addEventListener("input",()=>this.input(a,l)),l.addEventListener("change",()=>this.renderValues())}}active(){return this.devices().find(e=>e.id===this.state.activeId)}input(e,t){let n=this.active();!n||t.value===""||!Number.isFinite(Number(t.value))||(this.state.change(n,{[e]:Number(t.value)}),this.renderValues(t),this.frame===null&&(this.frame=requestAnimationFrame(()=>{this.frame=null,this.apply()})))}apply(){this.scene()?.setCameraFrusta(this.state);let e=Gt("#camera-field-panel");e.dataset.enabled=String(this.state.enabled),e.dataset.camera=this.state.activeId||""}select(e){this.devices().find(t=>t.id===e&&kn(t))&&(this.state.activeId=e),this.apply(),this.render()}sync(){this.state.sync(this.devices()),this.apply(),this.render()}resetAll(){this.state.resetAll(),this.state.sync(this.devices()),this.apply(),this.render()}renderValues(e){let t=this.active(),n=this.state.settings.get(t?.id);if(!n)return;let[i,r]=Wf(t,n);for(let o of["pan","tilt","hfov"])for(let l of["","-number"]){let c=Gt(`#camera-field-${o}${l}`);o==="hfov"&&(c.min=i,c.max=r,c.disabled=i===r),c!==e&&(c.value=n[o])}let a=qo(this.language());Gt("#camera-field-vfov").textContent=`${a.vfov}: ${mh(n.hfov).toFixed(1)}\xB0`,Gt("#camera-field-custom").checked=n.custom}render(){let e=qo(this.language()),t=this.devices().filter(kn);document.querySelectorAll("[data-field-i18n]").forEach(a=>{a.textContent=e[a.dataset.fieldI18n]}),Gt("#camera-field-enabled").checked=this.state.enabled,Gt("#camera-field-enabled").disabled=!t.length,Gt("#camera-field-only").checked=this.state.onlyCurrent;let n=Gt("#camera-field-select");n.replaceChildren(...t.map(a=>{let o=document.createElement("option");return o.value=a.id,o.textContent=this.title(a),o})),n.value=this.state.activeId;let i=this.active();if(Gt("#camera-field-empty").hidden=t.length>0,Gt("#camera-field-settings").hidden=!this.state.enabled||!i,!i)return;let r=Vt[i.model].projectOnly;Gt("#camera-field-custom-row").hidden=r,Gt("#camera-field-hint").textContent=r?e.zoomHint:e.fixedHint;for(let a of["pan","tilt","hfov"])Gt(`#camera-field-${a}-number`).setAttribute("aria-label",`${e[a]} (\xB0)`);this.renderValues()}};var a_=s=>document.querySelector(s);async function o_({roomScene:s,state:e,devices:t,visible:n,title:i,t:r}){if(!s)return;s.renderFrame();let a=s.canvas,o=a.width/Math.max(1,a.clientWidth),l=document.createElement("canvas");l.width=a.width,l.height=a.height;let c=l.getContext("2d");if(c.drawImage(a,0,0),c.save(),c.scale(o,o),c.fillStyle="rgba(15,34,49,.82)",c.fillRect(16,16,300,39),c.fillStyle="#fff",c.font="700 15px Arial",c.fillText(r("title"),27,42),e.showLabels){let p=a.getBoundingClientRect();for(let d of t().filter(n)){let _=document.querySelector(`.device-label[data-device-id="${d.id}"]`);if(!_||_.hidden)continue;let g=_.getBoundingClientRect(),m=g.left+g.width/2-p.left,f=g.bottom-p.top,x=i(d);c.font="600 11px Arial";let y=c.measureText(x).width+18,v=getComputedStyle(_);c.fillStyle=v.backgroundColor,c.beginPath(),c.roundRect(m-y/2,f-31,y,23,7),c.fill(),c.fillStyle=d.color,c.fillRect(m-y/2,f-31,3,23),c.fillStyle=v.color,c.fillText(x,m-y/2+10,f-15)}}c.restore();let h=await new Promise(p=>l.toBlob(p,"image/png")),u=document.createElement("a");u.href=h?URL.createObjectURL(h):l.toDataURL("image/png"),u.download="lcs-810-3d-room-demo.png",document.body.append(u),u.click(),u.remove(),h&&setTimeout(()=>URL.revokeObjectURL(u.href),3e4),a_("#frame-status").textContent=r("pngReady"),setTimeout(()=>{a_("#frame-status").textContent="3D"},2800)}var l_={importedPlan:"Depuis le plan 2D",importedDesc:"D\xE9ploiement 2D import\xE9 avec fixations murales indicatives. Modifiez la salle et les \xE9quipements dans la vue 2D.",resetImported:"Restaurer la vue et les hauteurs import\xE9es",title:"LCS 810 \xB7 D\xE9mo de salle 3D",eyebrow:"\xC9TUDE INTERACTIVE DE LA SALLE",export:"Exporter en PNG",preset:"Salle pr\xE9d\xE9finie",standard:"Standard 8 \xD7 10",large:"Grande salle 10 \xD7 20",lecture:"Salle de conf\xE9rence 12 \xD7 15",ultra:"Amphith\xE9\xE2tre 17 \xD7 37",custom:"Personnalis\xE9e",recalculate:"Recalculer",overview:"Vue g\xE9n\xE9rale",top:"Vue de dessus",stageView:"Vers l\u2019estrade",audienceView:"Vers les \xE9l\xE8ves",gestureHint:"Glisser pour tourner \xB7 Molette pour zoomer \xB7 Glisser avec le bouton droit pour d\xE9placer \xB7 Cliquer sur un \xE9quipement",study:"\xC9TUDE SPATIALE AVANT-VENTE",layoutTitle:"Implantation du syst\xE8me",layoutDesc:"Positions d\u2019installation indicatives issues des r\xE8gles de recalcul 2D.",width:"Largeur (m)",depth:"Profondeur (m)",height:"Hauteur (m)",devices:"\xC9quipements",selected:"\xC9quipement s\xE9lectionn\xE9",settings:"Param\xE8tres de la sc\xE8ne",equipment:"Configuration des \xE9quipements",ifpSize:"Diagonale de l\u2019IFP",ifpCount:"Nombre d\u2019IFP",displaySize:"Diagonale des \xE9crans auxiliaires",cameraPackage:"Ensemble de cam\xE9ras",teacherModel:"Cam\xE9ra enseignant",studentModel:"Cam\xE9ra \xE9l\xE8ves",studentQty:"Nombre de cam\xE9ras \xE9l\xE8ves",applyRecommendation:"Appliquer les cam\xE9ras recommand\xE9es",applyEquipment:"Appliquer la configuration",mountingHeights:"Hauteurs de montage indicatives",doorSide:"C\xF4t\xE9 des portes",doorRight:"Mur de droite",doorLeft:"Mur de gauche",visibility:"Visibilit\xE9",showLabels:"Noms des \xE9quipements",showFurniture:"Mobilier de r\xE9f\xE9rence",showCoverage:"Projection de couverture au sol",coverageNote:"S210 utilise la projection 2D au sol. La zone au sol des cam\xE9ras suit le champ 16:9 et l\u2019orientation actuels.",reset:"Restaurer les valeurs de la d\xE9mo",assumption:"Les hauteurs et formes simplifi\xE9es sont indicatives. Confirmez l\u2019installation sur site.",fromLeft:"Depuis le mur gauche",fromFront:"Depuis le mur avant",aboveFloor:"Au-dessus du sol",planSymbol:"Symbole 2D",wallAnchor:"Fixation murale",facesStage:"Vers l\u2019estrade",facesAudience:"Vers les \xE9l\xE8ves",facesRoom:"Vers l\u2019int\xE9rieur de la salle",facesLeft:"Vers la gauche",facesRight:"Vers la droite",heightWarning:"La salle mesure au moins 3,5 m de haut. V\xE9rifiez la hauteur de montage et le besoin de suspension.",cameraRange:"Au moins une cam\xE9ra CV d\xE9passe sa port\xE9e de suivi de 10 m. V\xE9rifiez la configuration.",roomSize:"Saisissez une largeur de 4\u201330 m, une profondeur de 5\u201350 m et une hauteur de 2,4\u20136 m.",screenSpace:"Les IFP s\xE9lectionn\xE9s n\xE9cessitent un mur avant plus large.",screenHeight:"L\u2019IFP est trop haut pour cette salle.",pngReady:"PNG export\xE9",webglError:"Impossible de d\xE9marrer la 3D. Activez l\u2019acc\xE9l\xE9ration mat\xE9rielle ou utilisez un navigateur compatible WebGL.",demoNote:"Hauteur indicative ; \xE0 confirmer sur site",recommendation:"Recommandation pour cette salle",s210:"Microphone de plafond S210",teacher:"Cam\xE9ra enseignant",student:"Cam\xE9ra \xE9l\xE8ves",station:"Station LCS",ndp:"Pupitre NDP600",ifp:"\xC9cran interactif IFP",display:"\xC9crans auxiliaires",speaker:"Haut-parleur PS610"};var c_={importedPlan:"2D \uACC4\uD68D\uC5D0\uC11C \uAC00\uC838\uC634",importedDesc:"\uAC00\uC838\uC628 2D \uBC30\uCE58\uC640 \uBCBD\uBA74 \uC124\uCE58 \uC608\uC2DC\uC785\uB2C8\uB2E4. \uACF5\uAC04\uACFC \uC7A5\uBE44\uB294 2D\uC5D0\uC11C \uC218\uC815\uD558\uC138\uC694.",resetImported:"\uAC00\uC838\uC628 \uBCF4\uAE30\uC640 \uB192\uC774 \uBCF5\uC6D0",title:"LCS 810 \xB7 3D \uAD50\uC2E4 \uB370\uBAA8",eyebrow:"\uAD50\uC2E4 \uACF5\uAC04 \uC778\uD130\uB799\uD2F0\uBE0C \uC5F0\uAD6C",export:"PNG \uB0B4\uBCF4\uB0B4\uAE30",preset:"\uACF5\uAC04 \uD504\uB9AC\uC14B",standard:"\uD45C\uC900 8 \xD7 10",large:"\uB300\uD615 10 \xD7 20",lecture:"\uAC15\uC758\uC2E4 12 \xD7 15",ultra:"\uB300\uAC15\uB2F9 17 \xD7 37",custom:"\uC0AC\uC6A9\uC790 \uC9C0\uC815",recalculate:"\uB2E4\uC2DC \uACC4\uC0B0",overview:"\uC804\uCCB4 \uBCF4\uAE30",top:"\uD3C9\uBA74 \uBCF4\uAE30",stageView:"\uAD50\uB2E8 \uBC29\uD5A5",audienceView:"\uD559\uC0DD \uBC29\uD5A5",gestureHint:"\uB4DC\uB798\uADF8: \uD68C\uC804 \xB7 \uC2A4\uD06C\uB864: \uD655\uB300/\uCD95\uC18C \xB7 \uC624\uB978\uCABD \uB4DC\uB798\uADF8: \uC774\uB3D9 \xB7 \uC7A5\uBE44 \uD074\uB9AD",study:"\uD504\uB9AC\uC138\uC77C\uC988 \uACF5\uAC04 \uC5F0\uAD6C",layoutTitle:"\uC2DC\uC2A4\uD15C \uBC30\uCE58",layoutDesc:"2D \uC7AC\uACC4\uC0B0 \uADDC\uCE59\uC5D0 \uB530\uB978 \uC124\uCE58 \uC704\uCE58 \uC608\uC2DC\uC785\uB2C8\uB2E4.",width:"\uB108\uBE44 (m)",depth:"\uAE4A\uC774 (m)",height:"\uB192\uC774 (m)",devices:"\uC7A5\uBE44",selected:"\uC120\uD0DD\uD55C \uC7A5\uBE44",settings:"\uC7A5\uBA74 \uC124\uC815",equipment:"\uC7A5\uBE44 \uAD6C\uC131",ifpSize:"IFP \uD06C\uAE30",ifpCount:"IFP \uC218\uB7C9",displaySize:"\uBCF4\uC870 \uD654\uBA74 \uD06C\uAE30",cameraPackage:"\uCE74\uBA54\uB77C \uAD6C\uC131",teacherModel:"\uAD50\uC0AC \uCE74\uBA54\uB77C",studentModel:"\uD559\uC0DD \uCE74\uBA54\uB77C",studentQty:"\uD559\uC0DD \uCE74\uBA54\uB77C \uC218\uB7C9",applyRecommendation:"\uCD94\uCC9C \uCE74\uBA54\uB77C \uC801\uC6A9",applyEquipment:"\uC7A5\uBE44 \uC801\uC6A9",mountingHeights:"\uC608\uC2DC \uC124\uCE58 \uB192\uC774",doorSide:"\uBB38 \uC704\uCE58",doorRight:"\uC624\uB978\uCABD \uBCBD",doorLeft:"\uC67C\uCABD \uBCBD",visibility:"\uD45C\uC2DC \uC124\uC815",showLabels:"\uC7A5\uBE44 \uC774\uB984",showFurniture:"\uCC38\uACE0 \uAC00\uAD6C",showCoverage:"\uBC14\uB2E5 \uCEE4\uBC84\uB9AC\uC9C0 \uD22C\uC601",coverageNote:"S210\uC740 2D \uBC14\uB2E5 \uD22C\uC601\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uCE74\uBA54\uB77C \uBC14\uB2E5 \uBC94\uC704\uB294 \uD604\uC7AC 16:9 \uD654\uAC01\uACFC \uBC29\uD5A5\uC744 \uB530\uB985\uB2C8\uB2E4.",reset:"\uB370\uBAA8 \uAE30\uBCF8\uAC12 \uBCF5\uC6D0",assumption:"\uC124\uCE58 \uB192\uC774\uC640 \uB2E8\uC21C\uD654\uB41C \uC678\uD615\uC740 \uC2DC\uC5F0\uC6A9\uC785\uB2C8\uB2E4. \uD604\uC7A5\uC5D0\uC11C \uCD5C\uC885 \uD655\uC778\uD558\uC138\uC694.",fromLeft:"\uC67C\uCABD \uBCBD\uC5D0\uC11C",fromFront:"\uC55E\uCABD \uBCBD\uC5D0\uC11C",aboveFloor:"\uBC14\uB2E5\uC5D0\uC11C",planSymbol:"2D \uAE30\uD638",wallAnchor:"\uBCBD\uBA74 \uC124\uCE58",facesStage:"\uAD50\uB2E8 \uBC29\uD5A5",facesAudience:"\uD559\uC0DD \uBC29\uD5A5",facesRoom:"\uAD50\uC2E4 \uC548\uCABD \uBC29\uD5A5",facesLeft:"\uC67C\uCABD \uBC29\uD5A5",facesRight:"\uC624\uB978\uCABD \uBC29\uD5A5",heightWarning:"\uCC9C\uC7A5 \uB192\uC774\uAC00 3.5 m \uC774\uC0C1\uC785\uB2C8\uB2E4. \uC124\uCE58 \uB192\uC774\uC640 \uD558\uAC15 \uBE0C\uB798\uD0B7 \uD544\uC694 \uC5EC\uBD80\uB97C \uD655\uC778\uD558\uC138\uC694.",cameraRange:"CV \uCE74\uBA54\uB77C\uAC00 10 m \uCD94\uC801 \uBC94\uC704\uB97C \uCD08\uACFC\uD569\uB2C8\uB2E4. \uCE74\uBA54\uB77C \uAD6C\uC131\uC744 \uD655\uC778\uD558\uC138\uC694.",roomSize:"\uB108\uBE44 4\u201330 m, \uAE4A\uC774 5\u201350 m, \uB192\uC774 2.4\u20136 m\uB97C \uC785\uB825\uD558\uC138\uC694.",screenSpace:"\uC120\uD0DD\uD55C IFP \uC870\uD569\uC5D0 \uD544\uC694\uD55C \uC804\uBA74 \uBCBD \uB108\uBE44\uAC00 \uBD80\uC871\uD569\uB2C8\uB2E4.",screenHeight:"IFP \uB192\uC774\uAC00 \uD604\uC7AC \uACF5\uAC04\uC5D0 \uB9DE\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",pngReady:"PNG \uB0B4\uBCF4\uB0B4\uAE30 \uC644\uB8CC",webglError:"3D\uB97C \uC2DC\uC791\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D \uB610\uB294 WebGL \uC9C0\uC6D0 \uBE0C\uB77C\uC6B0\uC800\uB97C \uC0AC\uC6A9\uD558\uC138\uC694.",demoNote:"\uC608\uC2DC \uB192\uC774 \u2014 \uD604\uC7A5 \uD655\uC778",recommendation:"\uC774 \uACF5\uAC04\uC5D0 \uB300\uD55C \uAD8C\uC7A5 \uAD6C\uC131",s210:"S210 \uCC9C\uC7A5 \uB9C8\uC774\uD06C",teacher:"\uAD50\uC0AC \uCE74\uBA54\uB77C",student:"\uD559\uC0DD \uCE74\uBA54\uB77C",station:"LCS \uC2A4\uD14C\uC774\uC158",ndp:"NDP600 \uAC15\uC758\uB300",ifp:"IFP \uB300\uD654\uD615 \uD654\uBA74",display:"\uBCF4\uC870 \uD654\uBA74",speaker:"PS610 \uC2A4\uD53C\uCEE4"};var h_={importedPlan:"2D \u0442\u04E9\u043B\u04E9\u0432\u043B\u04E9\u0433\u04E9\u04E9\u043D\u04E9\u04E9\u0441",importedDesc:"\u0418\u043C\u043F\u043E\u0440\u0442\u043E\u043B\u0441\u043E\u043D 2D \u0431\u0430\u0439\u0440\u043B\u0430\u043B \u0431\u0430 \u0445\u0430\u043D\u044B\u043D \u0443\u0433\u0441\u0440\u0430\u043B\u0442\u044B\u043D \u0436\u0438\u0448\u044D\u044D. \u04E8\u0440\u04E9\u04E9, \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u0433 2D \u0434\u044D\u044D\u0440 \u04E9\u04E9\u0440\u0447\u0438\u043B\u043D\u04E9.",resetImported:"\u0418\u043C\u043F\u043E\u0440\u0442\u043E\u043B\u0441\u043E\u043D \u0445\u0430\u0440\u0430\u0433\u0434\u0430\u0446, \u04E9\u043D\u0434\u0440\u0438\u0439\u0433 \u0441\u044D\u0440\u0433\u044D\u044D\u0445",title:"LCS 810 \xB7 3D \u0430\u043D\u0433\u0438\u0439\u043D \u04AF\u0437\u04AF\u04AF\u043B\u044D\u043D",eyebrow:"\u0410\u041D\u0413\u0418\u0419\u041D \u041E\u0420\u041E\u041D \u0417\u0410\u0419\u041D \u0418\u041D\u0422\u0415\u0420\u0410\u041A\u0422\u0418\u0412 \u04AE\u0417\u04AE\u04AE\u041B\u042D\u041D",export:"PNG \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u043B\u043E\u0445",preset:"\u04E8\u0440\u04E9\u04E9\u043D\u0438\u0439 \u0437\u0430\u0433\u0432\u0430\u0440",standard:"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442 8 \xD7 10",large:"\u0422\u043E\u043C 10 \xD7 20",lecture:"\u041B\u0435\u043A\u0446\u0438\u0439\u043D \u0442\u0430\u043D\u0445\u0438\u043C 12 \xD7 15",ultra:"\u0418\u0445 \u0442\u0430\u043D\u0445\u0438\u043C 17 \xD7 37",custom:"\u0422\u0443\u0441\u0433\u0430\u0439 \u0445\u044D\u043C\u0436\u044D\u044D",recalculate:"\u0414\u0430\u0445\u0438\u043D \u0442\u043E\u043E\u0446\u043E\u043E\u043B\u043E\u0445",overview:"\u0415\u0440\u04E9\u043D\u0445\u0438\u0439",top:"\u0414\u044D\u044D\u0440\u044D\u044D\u0441",stageView:"\u0411\u0430\u0433\u0448\u0438\u0439\u043D \u0445\u044D\u0441\u044D\u0433",audienceView:"\u0421\u0443\u0440\u0430\u043B\u0446\u0430\u0433\u0447\u0434\u044B\u043D \u0445\u044D\u0441\u044D\u0433",gestureHint:"\u0427\u0438\u0440\u044D\u0445: \u044D\u0440\u0433\u04AF\u04AF\u043B\u044D\u0445 \xB7 \u0413\u04AF\u0439\u043B\u0433\u044D\u0445: \u0442\u043E\u043C\u0440\u0443\u0443\u043B\u0430\u0445 \xB7 \u0411\u0430\u0440\u0443\u0443\u043D \u0447\u0438\u0440\u044D\u043B\u0442: \u0448\u0438\u043B\u0436\u04AF\u04AF\u043B\u044D\u0445 \xB7 \u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436 \u0434\u044D\u044D\u0440 \u0434\u0430\u0440\u043D\u0430",study:"\u0411\u041E\u0420\u041B\u0423\u0423\u041B\u0410\u041B\u0422\u042B\u041D \u04E8\u041C\u041D\u04E8\u0425 \u041E\u0420\u041E\u041D \u0417\u0410\u0419\u041D \u0421\u0423\u0414\u0410\u041B\u0413\u0410\u0410",layoutTitle:"\u0421\u0438\u0441\u0442\u0435\u043C\u0438\u0439\u043D \u0431\u0430\u0439\u0440\u043B\u0430\u043B",layoutDesc:"2D \u0434\u0430\u0445\u0438\u043D \u0442\u043E\u043E\u0446\u043E\u043E\u043B\u043B\u044B\u043D \u0434\u04AF\u0440\u044D\u043C\u0434 \u0442\u0443\u043B\u0433\u0443\u0443\u0440\u043B\u0430\u0441\u0430\u043D \u0443\u0433\u0441\u0440\u0430\u043B\u0442\u044B\u043D \u0431\u0430\u0439\u0440\u043B\u0430\u043B\u044B\u043D \u0436\u0438\u0448\u044D\u044D.",width:"\u04E8\u0440\u0433\u04E9\u043D (\u043C)",depth:"\u0413\u04AF\u043D (\u043C)",height:"\u04E8\u043D\u0434\u04E9\u0440 (\u043C)",devices:"\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u04AF\u04AF\u0434",selected:"\u0421\u043E\u043D\u0433\u043E\u0441\u043E\u043D \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436",settings:"\u0414\u04AF\u0440\u0441\u043B\u044D\u043B\u0438\u0439\u043D \u0442\u043E\u0445\u0438\u0440\u0433\u043E\u043E",equipment:"\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u043D \u0442\u043E\u0445\u0438\u0440\u0433\u043E\u043E",ifpSize:"IFP \u0445\u044D\u043C\u0436\u044D\u044D",ifpCount:"IFP \u0442\u043E\u043E",displaySize:"\u0422\u0443\u0441\u043B\u0430\u0445 \u0434\u044D\u043B\u0433\u044D\u0446\u0438\u0439\u043D \u0445\u044D\u043C\u0436\u044D\u044D",cameraPackage:"\u041A\u0430\u043C\u0435\u0440\u044B\u043D \u0431\u0430\u0433\u0446",teacherModel:"\u0411\u0430\u0433\u0448\u0438\u0439\u043D \u043A\u0430\u043C\u0435\u0440",studentModel:"\u0421\u0443\u0440\u0430\u043B\u0446\u0430\u0433\u0447\u0434\u044B\u043D \u043A\u0430\u043C\u0435\u0440",studentQty:"\u0421\u0443\u0440\u0430\u043B\u0446\u0430\u0433\u0447\u0434\u044B\u043D \u043A\u0430\u043C\u0435\u0440\u044B\u043D \u0442\u043E\u043E",applyRecommendation:"\u0421\u0430\u043D\u0430\u043B \u0431\u043E\u043B\u0433\u043E\u0441\u043E\u043D \u043A\u0430\u043C\u0435\u0440\u044B\u0433 \u0445\u044D\u0440\u044D\u0433\u043B\u044D\u0445",applyEquipment:"\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u0433 \u0445\u044D\u0440\u044D\u0433\u043B\u044D\u0445",mountingHeights:"\u0423\u0433\u0441\u0440\u0430\u043B\u0442\u044B\u043D \u04E9\u043D\u0434\u0440\u0438\u0439\u043D \u0436\u0438\u0448\u044D\u044D",doorSide:"\u0425\u0430\u0430\u043B\u0433\u0430\u043D\u044B \u0442\u0430\u043B",doorRight:"\u0411\u0430\u0440\u0443\u0443\u043D \u0445\u0430\u043D\u0430",doorLeft:"\u0417\u04AF\u04AF\u043D \u0445\u0430\u043D\u0430",visibility:"\u0425\u0430\u0440\u0430\u0433\u0434\u0430\u0446",showLabels:"\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u043D \u043D\u044D\u0440",showFurniture:"\u0416\u0438\u0448\u0438\u0433 \u0442\u0430\u0432\u0438\u043B\u0433\u0430",showCoverage:"\u0428\u0430\u043B\u043D\u044B \u0445\u0430\u043C\u0440\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D\u043D\u0438\u0439 \u0442\u0443\u0441\u0433\u0430\u043B",coverageNote:"S210 \u043D\u044C 2D \u0448\u0430\u043B\u043D\u044B \u0442\u0443\u0441\u0433\u0430\u043B\u044B\u0433 \u0430\u0448\u0438\u0433\u043B\u0430\u043D\u0430. \u041A\u0430\u043C\u0435\u0440\u044B\u043D \u0448\u0430\u043B\u043D\u044B \u0445\u04AF\u0440\u044D\u044D \u043E\u0434\u043E\u043E\u0433\u0438\u0439\u043D 16:9 \u04E9\u043D\u0446\u04E9\u0433 \u0431\u0430 \u0447\u0438\u0433\u043B\u044D\u043B\u0438\u0439\u0433 \u0434\u0430\u0433\u0430\u043D\u0430.",reset:"\u04AE\u0437\u04AF\u04AF\u043B\u044D\u043D\u0433\u0438\u0439\u043D \u0430\u043D\u0445\u043D\u044B \u0442\u043E\u0445\u0438\u0440\u0433\u043E\u043E",assumption:"\u0423\u0433\u0441\u0440\u0430\u043B\u0442\u044B\u043D \u04E9\u043D\u0434\u04E9\u0440, \u0445\u044F\u043B\u0431\u0430\u0440\u0448\u0443\u0443\u043B\u0441\u0430\u043D \u0445\u044D\u043B\u0431\u044D\u0440 \u043D\u044C \u04AF\u0437\u04AF\u04AF\u043B\u044D\u043D\u0433\u0438\u0439\u043D \u0442\u0430\u0430\u043C\u0430\u0433. \u0422\u0430\u043B\u0431\u0430\u0439 \u0434\u044D\u044D\u0440 \u0431\u0430\u0442\u0430\u043B\u0433\u0430\u0430\u0436\u0443\u0443\u043B\u043D\u0430.",fromLeft:"\u0417\u04AF\u04AF\u043D \u0445\u0430\u043D\u0430\u043D\u0430\u0430\u0441",fromFront:"\u0423\u0440\u0434 \u0445\u0430\u043D\u0430\u043D\u0430\u0430\u0441",aboveFloor:"\u0428\u0430\u043B\u043D\u0430\u0430\u0441 \u0434\u044D\u044D\u0448",planSymbol:"2D \u0442\u044D\u043C\u0434\u044D\u0433\u043B\u044D\u0433\u044D\u044D",wallAnchor:"\u0425\u0430\u043D\u044B\u043D \u0443\u0433\u0441\u0440\u0430\u043B\u0442",facesStage:"\u0411\u0430\u0433\u0448\u0438\u0439\u043D \u0445\u044D\u0441\u044D\u0433 \u0440\u04AF\u04AF",facesAudience:"\u0421\u0443\u0440\u0430\u043B\u0446\u0430\u0433\u0447\u0438\u0434 \u0440\u0443\u0443",facesRoom:"\u04E8\u0440\u04E9\u04E9\u043D\u0438\u0439 \u0434\u043E\u0442\u043E\u0440 \u0442\u0430\u043B \u0440\u0443\u0443",facesLeft:"\u0417\u04AF\u04AF\u043D \u0442\u0438\u0439\u0448",facesRight:"\u0411\u0430\u0440\u0443\u0443\u043D \u0442\u0438\u0439\u0448",heightWarning:"\u04E8\u0440\u04E9\u04E9\u043D\u0438\u0439 \u04E9\u043D\u0434\u04E9\u0440 3.5 \u043C-\u044D\u044D\u0441 \u0434\u044D\u044D\u0448. \u0423\u0433\u0441\u0440\u0430\u043B\u0442\u044B\u043D \u04E9\u043D\u0434\u04E9\u0440 \u0431\u043E\u043B\u043E\u043D \u0443\u043D\u0436\u0443\u0443\u043B\u0430\u0445 \u0431\u044D\u0445\u044D\u043B\u0433\u044D\u044D\u0433 \u0448\u0430\u043B\u0433\u0430\u043D\u0430.",cameraRange:"CV \u043A\u0430\u043C\u0435\u0440\u044B\u043D 10 \u043C \u0434\u0430\u0433\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D \u0445\u044D\u0442\u044D\u0440\u0441\u044D\u043D. \u041A\u0430\u043C\u0435\u0440\u044B\u043D \u0431\u0430\u0439\u0440\u043B\u0430\u043B\u044B\u0433 \u0448\u0430\u043B\u0433\u0430\u043D\u0430.",roomSize:"\u04E8\u0440\u0433\u04E9\u043D 4\u201330 \u043C, \u0433\u04AF\u043D 5\u201350 \u043C, \u04E9\u043D\u0434\u04E9\u0440 2.4\u20136 \u043C \u043E\u0440\u0443\u0443\u043B\u043D\u0430.",screenSpace:"\u0421\u043E\u043D\u0433\u043E\u0441\u043E\u043D IFP \u0445\u043E\u0441\u043B\u043E\u043B\u0434 \u0443\u0440\u0434 \u0445\u0430\u043D\u044B\u043D \u04E9\u0440\u0433\u04E9\u043D \u0445\u04AF\u0440\u044D\u043B\u0446\u044D\u0445\u0433\u04AF\u0439.",screenHeight:"IFP \u0434\u044D\u043B\u0433\u044D\u0446\u0438\u0439\u043D \u04E9\u043D\u0434\u04E9\u0440 \u044D\u043D\u044D \u04E9\u0440\u04E9\u04E9\u043D\u0434 \u0442\u043E\u0445\u0438\u0440\u043E\u0445\u0433\u04AF\u0439.",pngReady:"PNG \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u043B\u043E\u0433\u0434\u043B\u043E\u043E",webglError:"3D \u044D\u0445\u043B\u04AF\u04AF\u043B\u044D\u0445 \u0431\u043E\u043B\u043E\u043C\u0436\u0433\u04AF\u0439. \u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u043D \u0445\u0443\u0440\u0434\u0430\u0441\u0433\u0430\u043B \u044D\u0441\u0432\u044D\u043B WebGL \u0434\u044D\u043C\u0436\u0434\u044D\u0433 \u0445\u04E9\u0442\u04E9\u0447 \u0445\u044D\u0440\u044D\u0433\u043B\u044D\u043D\u044D.",demoNote:"\u04E8\u043D\u0434\u0440\u0438\u0439\u043D \u0436\u0438\u0448\u044D\u044D \u2014 \u0442\u0430\u043B\u0431\u0430\u0439 \u0434\u044D\u044D\u0440 \u0448\u0430\u043B\u0433\u0430\u043D\u0430",recommendation:"\u042D\u043D\u044D \u04E9\u0440\u04E9\u04E9\u043D\u0434 \u0441\u0430\u043D\u0430\u043B \u0431\u043E\u043B\u0433\u043E\u0445",s210:"S210 \u0442\u0430\u0430\u0437\u043D\u044B \u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D",teacher:"\u0411\u0430\u0433\u0448\u0438\u0439\u043D \u043A\u0430\u043C\u0435\u0440",student:"\u0421\u0443\u0440\u0430\u043B\u0446\u0430\u0433\u0447\u0434\u044B\u043D \u043A\u0430\u043C\u0435\u0440",station:"LCS \u0441\u0442\u0430\u043D\u0446",ndp:"NDP600 \u0431\u0430\u0433\u0448\u0438\u0439\u043D \u0448\u0438\u0440\u044D\u044D",ifp:"IFP \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432 \u0434\u044D\u043B\u0433\u044D\u0446",display:"\u0422\u0443\u0441\u043B\u0430\u0445 \u0434\u044D\u043B\u0433\u044D\u0446",speaker:"PS610 \u0447\u0430\u043D\u0433\u0430 \u044F\u0440\u0438\u0433\u0447"};var u_={importedPlan:"2D\u30D7\u30E9\u30F3\u304B\u3089",importedDesc:"\u8AAD\u307F\u8FBC\u3093\u30602D\u914D\u7F6E\u3068\u58C1\u9762\u53D6\u4ED8\u306E\u53C2\u8003\u8868\u793A\u3067\u3059\u3002\u90E8\u5C4B\u3084\u6A5F\u5668\u306E\u5909\u66F4\u306F2D\u3067\u884C\u3063\u3066\u304F\u3060\u3055\u3044\u3002",resetImported:"\u8AAD\u8FBC\u6642\u306E\u8996\u70B9\u3068\u9AD8\u3055\u306B\u623B\u3059",title:"LCS 810 \xB7 3D\u6559\u5BA4\u30C7\u30E2",eyebrow:"\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D6\u306A\u6559\u5BA4\u7A7A\u9593",export:"PNG\u3092\u66F8\u304D\u51FA\u3059",preset:"\u90E8\u5C4B\u30D7\u30EA\u30BB\u30C3\u30C8",standard:"\u6A19\u6E96 8 \xD7 10",large:"\u5927\u578B 10 \xD7 20",lecture:"\u8B1B\u7FA9\u5BA4 12 \xD7 15",ultra:"\u8B1B\u5802 17 \xD7 37",custom:"\u30AB\u30B9\u30BF\u30E0",recalculate:"\u518D\u8A08\u7B97",overview:"\u5168\u4F53",top:"\u4E0A\u9762",stageView:"\u6559\u58C7\u5074",audienceView:"\u5BA2\u5E2D\u5074",gestureHint:"\u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u8EE2\u30FB\u30B9\u30AF\u30ED\u30FC\u30EB\u3067\u62E1\u5927\u7E2E\u5C0F\u30FB\u53F3\u30C9\u30E9\u30C3\u30B0\u3067\u79FB\u52D5\u30FB\u6A5F\u5668\u3092\u30AF\u30EA\u30C3\u30AF",study:"\u63D0\u6848\u7528\u306E\u7A7A\u9593\u691C\u8A0E",layoutTitle:"\u30B7\u30B9\u30C6\u30E0\u914D\u7F6E",layoutDesc:"2D\u306E\u518D\u8A08\u7B97\u30EB\u30FC\u30EB\u306B\u57FA\u3065\u304F\u53D6\u4ED8\u4F4D\u7F6E\u306E\u53C2\u8003\u8868\u793A\u3067\u3059\u3002",width:"\u5E45 (m)",depth:"\u5965\u884C (m)",height:"\u9AD8\u3055 (m)",devices:"\u6A5F\u5668",selected:"\u9078\u629E\u3057\u305F\u6A5F\u5668",settings:"\u30B7\u30FC\u30F3\u8A2D\u5B9A",equipment:"\u6A5F\u5668\u69CB\u6210",ifpSize:"IFP\u30B5\u30A4\u30BA",ifpCount:"IFP\u53F0\u6570",displaySize:"\u88DC\u52A9\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30B5\u30A4\u30BA",cameraPackage:"\u30AB\u30E1\u30E9\u69CB\u6210",teacherModel:"\u8B1B\u5E2B\u7528\u30AB\u30E1\u30E9",studentModel:"\u53D7\u8B1B\u8005\u7528\u30AB\u30E1\u30E9",studentQty:"\u53D7\u8B1B\u8005\u7528\u30AB\u30E1\u30E9\u53F0\u6570",applyRecommendation:"\u63A8\u5968\u30AB\u30E1\u30E9\u3092\u9069\u7528",applyEquipment:"\u6A5F\u5668\u69CB\u6210\u3092\u9069\u7528",mountingHeights:"\u53C2\u8003\u53D6\u4ED8\u9AD8\u3055",doorSide:"\u30C9\u30A2\u306E\u4F4D\u7F6E",doorRight:"\u53F3\u306E\u58C1",doorLeft:"\u5DE6\u306E\u58C1",visibility:"\u8868\u793A\u8A2D\u5B9A",showLabels:"\u6A5F\u5668\u540D",showFurniture:"\u53C2\u8003\u5BB6\u5177",showCoverage:"\u5E8A\u9762\u30AB\u30D0\u30FC\u7BC4\u56F2",coverageNote:"S210\u306F2D\u5E8A\u9762\u6295\u5F71\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\u30AB\u30E1\u30E9\u306E\u5E8A\u9762\u7BC4\u56F2\u306F\u73FE\u5728\u306E16:9\u753B\u89D2\u3068\u5411\u304D\u306B\u9023\u52D5\u3057\u307E\u3059\u3002",reset:"\u30C7\u30E2\u306E\u521D\u671F\u8A2D\u5B9A\u306B\u623B\u3059",assumption:"\u53D6\u4ED8\u9AD8\u3055\u3068\u7C21\u7565\u5F62\u72B6\u306F\u53C2\u8003\u3067\u3059\u3002\u6700\u7D42\u4F4D\u7F6E\u306F\u73FE\u5730\u3067\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",fromLeft:"\u5DE6\u58C1\u304B\u3089",fromFront:"\u524D\u58C1\u304B\u3089",aboveFloor:"\u5E8A\u9762\u304B\u3089",planSymbol:"2D\u8A18\u53F7\u4F4D\u7F6E",wallAnchor:"\u58C1\u9762\u53D6\u4ED8",facesStage:"\u6559\u58C7\u5411\u304D",facesAudience:"\u5BA2\u5E2D\u5411\u304D",facesRoom:"\u6559\u5BA4\u5185\u5411\u304D",facesLeft:"\u5DE6\u5411\u304D",facesRight:"\u53F3\u5411\u304D",heightWarning:"\u5929\u4E95\u9AD8\u304C3.5 m\u4EE5\u4E0A\u3067\u3059\u3002\u53D6\u4ED8\u9AD8\u3055\u3068\u540A\u4E0B\u3052\u91D1\u5177\u306E\u5FC5\u8981\u6027\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",cameraRange:"CV\u30AB\u30E1\u30E9\u306E\u8FFD\u5C3E\u8DDD\u96E210 m\u3092\u8D85\u3048\u3066\u3044\u307E\u3059\u3002\u69CB\u6210\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",roomSize:"\u5E454\u201330 m\u3001\u5965\u884C5\u201350 m\u3001\u9AD8\u30552.4\u20136 m\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",screenSpace:"\u9078\u629E\u3057\u305FIFP\u3092\u7F6E\u304F\u524D\u58C1\u306E\u5E45\u304C\u4E0D\u8DB3\u3057\u3066\u3044\u307E\u3059\u3002",screenHeight:"IFP\u306E\u9AD8\u3055\u304C\u5BA4\u5185\u306E\u8A2D\u7F6E\u53EF\u80FD\u7BC4\u56F2\u3092\u8D85\u3048\u3066\u3044\u307E\u3059\u3002",pngReady:"PNG\u3092\u66F8\u304D\u51FA\u3057\u307E\u3057\u305F",webglError:"3D\u3092\u958B\u59CB\u3067\u304D\u307E\u305B\u3093\u3002\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u304BWebGL\u5BFE\u5FDC\u30D6\u30E9\u30A6\u30B6\u3092\u3054\u5229\u7528\u304F\u3060\u3055\u3044\u3002",demoNote:"\u53C2\u8003\u9AD8\u3055\u30FB\u73FE\u5730\u78BA\u8A8D",recommendation:"\u3053\u306E\u90E8\u5C4B\u306E\u63A8\u5968\u69CB\u6210",s210:"S210\u5929\u4E95\u30DE\u30A4\u30AF",teacher:"\u8B1B\u5E2B\u7528\u30AB\u30E1\u30E9",student:"\u53D7\u8B1B\u8005\u7528\u30AB\u30E1\u30E9",station:"LCS\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3",ndp:"NDP600\u8B1B\u5E2B\u5353",ifp:"IFP\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D6\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",display:"\u88DC\u52A9\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",speaker:"PS610\u30B9\u30D4\u30FC\u30AB\u30FC"};var d_={importedPlan:"Desde el plan 2D",importedDesc:"Distribuci\xF3n 2D importada con montaje mural ilustrativo. Modifique la sala y los equipos en 2D.",resetImported:"Restaurar vista y alturas importadas",title:"LCS 810 \xB7 Demo de aula 3D",eyebrow:"ESTUDIO INTERACTIVO DEL AULA",export:"Exportar PNG",preset:"Sala predefinida",standard:"Est\xE1ndar 8 \xD7 10",large:"Grande 10 \xD7 20",lecture:"Sala de conferencias 12 \xD7 15",ultra:"Auditorio 17 \xD7 37",custom:"Personalizada",recalculate:"Recalcular",overview:"Vista general",top:"Vista superior",stageView:"Hacia el escenario",audienceView:"Hacia los alumnos",gestureHint:"Arrastre para orbitar \xB7 Rueda para acercar \xB7 Arrastre derecho para desplazar \xB7 Pulse un equipo",study:"ESTUDIO ESPACIAL DE PREVENTA",layoutTitle:"Distribuci\xF3n del sistema",layoutDesc:"Posiciones ilustrativas seg\xFAn las reglas de rec\xE1lculo 2D.",width:"Ancho (m)",depth:"Fondo (m)",height:"Altura (m)",devices:"Equipos",selected:"Equipo seleccionado",settings:"Ajustes de escena",equipment:"Configuraci\xF3n de equipos",ifpSize:"Tama\xF1o de IFP",ifpCount:"Cantidad de IFP",displaySize:"Tama\xF1o de pantalla auxiliar",cameraPackage:"Paquete de c\xE1maras",teacherModel:"C\xE1mara del docente",studentModel:"C\xE1mara de alumnos",studentQty:"Cantidad de c\xE1maras de alumnos",applyRecommendation:"Aplicar c\xE1maras recomendadas",applyEquipment:"Aplicar equipos",mountingHeights:"Alturas ilustrativas de montaje",doorSide:"Lado de la puerta",doorRight:"Pared derecha",doorLeft:"Pared izquierda",visibility:"Visibilidad",showLabels:"Nombres de equipos",showFurniture:"Mobiliario de referencia",showCoverage:"Proyecci\xF3n de cobertura",coverageNote:"S210 usa la proyecci\xF3n 2D. El \xE1rea de c\xE1mara en el suelo sigue el campo 16:9 y la direcci\xF3n actuales.",reset:"Restaurar valores del demo",assumption:"Alturas y formas simplificadas son ilustrativas. Confirme en obra.",fromLeft:"Desde la pared izquierda",fromFront:"Desde la pared frontal",aboveFloor:"Sobre el suelo",planSymbol:"S\xEDmbolo 2D",wallAnchor:"Montaje mural",facesStage:"Hacia el escenario",facesAudience:"Hacia los alumnos",facesRoom:"Hacia el aula",facesLeft:"Hacia la izquierda",facesRight:"Hacia la derecha",heightWarning:"La altura es de 3,5 m o m\xE1s. Revise el montaje y el soporte suspendido.",cameraRange:"Alguna c\xE1mara CV supera su alcance de seguimiento de 10 m. Revise el plan.",roomSize:"Introduzca ancho 4\u201330 m, fondo 5\u201350 m y altura 2,4\u20136 m.",screenSpace:"Las pantallas IFP requieren m\xE1s ancho en la pared frontal.",screenHeight:"La pantalla IFP es demasiado alta para esta sala.",pngReady:"PNG exportado",webglError:"No se pudo iniciar 3D. Active la aceleraci\xF3n o use un navegador con WebGL.",demoNote:"Altura ilustrativa; confirmar en obra",recommendation:"Recomendado para esta sala",s210:"Micr\xF3fono de techo S210",teacher:"C\xE1mara del docente",student:"C\xE1mara de alumnos",station:"Estaci\xF3n LCS",ndp:"Atril NDP600",ifp:"Pantalla interactiva IFP",display:"Pantallas auxiliares",speaker:"Altavoz PS610"};var f_={importedPlan:"\u0645\u0646 \u0627\u0644\u0645\u062E\u0637\u0637 \u0627\u0644\u062B\u0646\u0627\u0626\u064A",importedDesc:"\u0627\u0644\u0645\u062E\u0637\u0637 \u0627\u0644\u062B\u0646\u0627\u0626\u064A \u0627\u0644\u0645\u0633\u062A\u0648\u0631\u062F \u0645\u0639 \u0623\u0645\u062B\u0644\u0629 \u0644\u0644\u062A\u062B\u0628\u064A\u062A \u0627\u0644\u062C\u062F\u0627\u0631\u064A. \u0639\u062F\u0651\u0644 \u0627\u0644\u063A\u0631\u0641\u0629 \u0648\u0627\u0644\u0623\u062C\u0647\u0632\u0629 \u0641\u064A \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062B\u0646\u0627\u0626\u064A.",resetImported:"\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u0646\u0638\u0648\u0631 \u0648\u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u0648\u0631\u062F\u0629",title:"LCS 810 \xB7 \u0639\u0631\u0636 \u0627\u0644\u0641\u0635\u0644 \u062B\u0644\u0627\u062B\u064A \u0627\u0644\u0623\u0628\u0639\u0627\u062F",eyebrow:"\u062F\u0631\u0627\u0633\u0629 \u062A\u0641\u0627\u0639\u0644\u064A\u0629 \u0644\u0645\u0633\u0627\u062D\u0629 \u0627\u0644\u0641\u0635\u0644",export:"\u062A\u0635\u062F\u064A\u0631 PNG",preset:"\u0646\u0645\u0648\u0630\u062C \u0627\u0644\u063A\u0631\u0641\u0629",standard:"\u0642\u064A\u0627\u0633\u064A 8 \xD7 10",large:"\u0643\u0628\u064A\u0631 10 \xD7 20",lecture:"\u0642\u0627\u0639\u0629 \u0645\u062D\u0627\u0636\u0631\u0627\u062A 12 \xD7 15",ultra:"\u0645\u062F\u0631\u062C 17 \xD7 37",custom:"\u0645\u062E\u0635\u0635",recalculate:"\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062D\u0633\u0627\u0628",overview:"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629",top:"\u0645\u0646 \u0627\u0644\u0623\u0639\u0644\u0649",stageView:"\u062C\u0647\u0629 \u0627\u0644\u0645\u0646\u0635\u0629",audienceView:"\u062C\u0647\u0629 \u0627\u0644\u0637\u0644\u0627\u0628",gestureHint:"\u0627\u0633\u062D\u0628 \u0644\u0644\u062F\u0648\u0631\u0627\u0646 \xB7 \u0645\u0631\u0651\u0631 \u0644\u0644\u062A\u0643\u0628\u064A\u0631 \xB7 \u0627\u0633\u062D\u0628 \u0628\u0627\u0644\u0632\u0631 \u0627\u0644\u0623\u064A\u0645\u0646 \u0644\u0644\u062A\u062D\u0631\u064A\u0643 \xB7 \u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \u0627\u0644\u062C\u0647\u0627\u0632",study:"\u062F\u0631\u0627\u0633\u0629 \u0645\u0643\u0627\u0646\u064A\u0629 \u0644\u0645\u0627 \u0642\u0628\u0644 \u0627\u0644\u0628\u064A\u0639",layoutTitle:"\u062A\u0648\u0632\u064A\u0639 \u0627\u0644\u0646\u0638\u0627\u0645",layoutDesc:"\u0645\u0648\u0627\u0636\u0639 \u062A\u0631\u0643\u064A\u0628 \u062A\u0648\u0636\u064A\u062D\u064A\u0629 \u0648\u0641\u0642 \u0642\u0648\u0627\u0639\u062F \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062D\u0633\u0627\u0628 \u0627\u0644\u062B\u0646\u0627\u0626\u064A\u0629.",width:"\u0627\u0644\u0639\u0631\u0636 (\u0645)",depth:"\u0627\u0644\u0639\u0645\u0642 (\u0645)",height:"\u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639 (\u0645)",devices:"\u0627\u0644\u0623\u062C\u0647\u0632\u0629",selected:"\u0627\u0644\u062C\u0647\u0627\u0632 \u0627\u0644\u0645\u062D\u062F\u062F",settings:"\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0634\u0647\u062F",equipment:"\u062A\u0643\u0648\u064A\u0646 \u0627\u0644\u0623\u062C\u0647\u0632\u0629",ifpSize:"\u062D\u062C\u0645 \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u064A\u0629",ifpCount:"\u0639\u062F\u062F \u0627\u0644\u0634\u0627\u0634\u0627\u062A \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u064A\u0629",displaySize:"\u062D\u062C\u0645 \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629",cameraPackage:"\u062D\u0632\u0645\u0629 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627\u062A",teacherModel:"\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u0645\u0639\u0644\u0645",studentModel:"\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u0637\u0644\u0627\u0628",studentQty:"\u0639\u062F\u062F \u0643\u0627\u0645\u064A\u0631\u0627\u062A \u0627\u0644\u0637\u0644\u0627\u0628",applyRecommendation:"\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627\u062A \u0627\u0644\u0645\u0642\u062A\u0631\u062D\u0629",applyEquipment:"\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0623\u062C\u0647\u0632\u0629",mountingHeights:"\u0627\u0631\u062A\u0641\u0627\u0639\u0627\u062A \u062A\u0631\u0643\u064A\u0628 \u062A\u0648\u0636\u064A\u062D\u064A\u0629",doorSide:"\u062C\u0647\u0629 \u0627\u0644\u0628\u0627\u0628",doorRight:"\u0627\u0644\u062C\u062F\u0627\u0631 \u0627\u0644\u0623\u064A\u0645\u0646",doorLeft:"\u0627\u0644\u062C\u062F\u0627\u0631 \u0627\u0644\u0623\u064A\u0633\u0631",visibility:"\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0639\u0631\u0636",showLabels:"\u0623\u0633\u0645\u0627\u0621 \u0627\u0644\u0623\u062C\u0647\u0632\u0629",showFurniture:"\u0623\u062B\u0627\u062B \u0645\u0631\u062C\u0639\u064A",showCoverage:"\u0625\u0633\u0642\u0627\u0637 \u0627\u0644\u062A\u063A\u0637\u064A\u0629 \u0639\u0644\u0649 \u0627\u0644\u0623\u0631\u0636",coverageNote:"\u064A\u0633\u062A\u062E\u062F\u0645 S210 \u0627\u0644\u0625\u0633\u0642\u0627\u0637 \u0627\u0644\u0623\u0631\u0636\u064A \u0627\u0644\u062B\u0646\u0627\u0626\u064A. \u062A\u062A\u0628\u0639 \u0645\u0633\u0627\u062D\u0629 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u0623\u0631\u0636\u064A\u0629 \u0645\u062C\u0627\u0644 16:9 \u0648\u0627\u062A\u062C\u0627\u0647\u0647\u0627 \u0627\u0644\u062D\u0627\u0644\u064A\u064A\u0646.",reset:"\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629",assumption:"\u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639\u0627\u062A \u0648\u0627\u0644\u0623\u0634\u0643\u0627\u0644 \u0627\u0644\u0645\u0628\u0633\u0637\u0629 \u062A\u0648\u0636\u064A\u062D\u064A\u0629. \u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0645\u0648\u0627\u0636\u0639 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629 \u0641\u064A \u0627\u0644\u0645\u0648\u0642\u0639.",fromLeft:"\u0645\u0646 \u0627\u0644\u062C\u062F\u0627\u0631 \u0627\u0644\u0623\u064A\u0633\u0631",fromFront:"\u0645\u0646 \u0627\u0644\u062C\u062F\u0627\u0631 \u0627\u0644\u0623\u0645\u0627\u0645\u064A",aboveFloor:"\u0641\u0648\u0642 \u0627\u0644\u0623\u0631\u0636",planSymbol:"\u0645\u0648\u0636\u0639 \u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u062B\u0646\u0627\u0626\u064A",wallAnchor:"\u062A\u062B\u0628\u064A\u062A \u062C\u062F\u0627\u0631\u064A",facesStage:"\u0628\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0645\u0646\u0635\u0629",facesAudience:"\u0628\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0637\u0644\u0627\u0628",facesRoom:"\u0628\u0627\u062A\u062C\u0627\u0647 \u062F\u0627\u062E\u0644 \u0627\u0644\u0641\u0635\u0644",facesLeft:"\u0628\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u064A\u0633\u0627\u0631",facesRight:"\u0628\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u064A\u0645\u064A\u0646",heightWarning:"\u0627\u0631\u062A\u0641\u0627\u0639 \u0627\u0644\u063A\u0631\u0641\u0629 3.5 \u0645 \u0623\u0648 \u0623\u0643\u062B\u0631. \u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0631\u062A\u0641\u0627\u0639 \u0627\u0644\u062A\u062B\u0628\u064A\u062A \u0648\u0627\u0644\u062D\u0627\u062C\u0629 \u0625\u0644\u0649 \u062D\u0627\u0645\u0644 \u0645\u0639\u0644\u0642.",cameraRange:"\u062A\u062A\u062C\u0627\u0648\u0632 \u0625\u062D\u062F\u0649 \u0643\u0627\u0645\u064A\u0631\u0627\u062A CV \u0645\u062F\u0649 \u0627\u0644\u062A\u062A\u0628\u0639 \u0627\u0644\u0628\u0627\u0644\u063A 10 \u0645. \u0631\u0627\u062C\u0639 \u0627\u0644\u062A\u0648\u0632\u064A\u0639.",roomSize:"\u0623\u062F\u062E\u0644 \u0639\u0631\u0636\u064B\u0627 4\u201330 \u0645 \u0648\u0639\u0645\u0642\u064B\u0627 5\u201350 \u0645 \u0648\u0627\u0631\u062A\u0641\u0627\u0639\u064B\u0627 2.4\u20136 \u0645.",screenSpace:"\u062A\u062D\u062A\u0627\u062C \u0627\u0644\u0634\u0627\u0634\u0627\u062A \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u0629 \u0625\u0644\u0649 \u0639\u0631\u0636 \u0623\u0643\u0628\u0631 \u0644\u0644\u062C\u062F\u0627\u0631 \u0627\u0644\u0623\u0645\u0627\u0645\u064A.",screenHeight:"\u0627\u0631\u062A\u0641\u0627\u0639 \u0627\u0644\u0634\u0627\u0634\u0629 \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u0645\u0633\u0627\u062D\u0629 \u0627\u0644\u0645\u062A\u0627\u062D\u0629 \u0644\u0644\u062A\u0631\u0643\u064A\u0628.",pngReady:"\u062A\u0645 \u062A\u0635\u062F\u064A\u0631 PNG",webglError:"\u062A\u0639\u0630\u0631 \u0628\u062F\u0621 \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062B\u0644\u0627\u062B\u064A. \u0641\u0639\u0651\u0644 \u062A\u0633\u0631\u064A\u0639 \u0627\u0644\u0623\u062C\u0647\u0632\u0629 \u0623\u0648 \u0627\u0633\u062A\u062E\u062F\u0645 \u0645\u062A\u0635\u0641\u062D\u064B\u0627 \u064A\u062F\u0639\u0645 WebGL.",demoNote:"\u0627\u0631\u062A\u0641\u0627\u0639 \u062A\u0648\u0636\u064A\u062D\u064A\u061B \u062A\u062D\u0642\u0642 \u0641\u064A \u0627\u0644\u0645\u0648\u0642\u0639",recommendation:"\u0627\u0644\u0645\u0642\u062A\u0631\u062D \u0644\u0647\u0630\u0647 \u0627\u0644\u063A\u0631\u0641\u0629",s210:"\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646 \u0633\u0642\u0641\u064A S210",teacher:"\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u0645\u0639\u0644\u0645",student:"\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u0637\u0644\u0627\u0628",station:"\u0645\u062D\u0637\u0629 LCS",ndp:"\u0645\u0646\u0635\u0629 NDP600",ifp:"\u0634\u0627\u0634\u0629 \u062A\u0641\u0627\u0639\u0644\u064A\u0629 IFP",display:"\u0627\u0644\u0634\u0627\u0634\u0627\u062A \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629",speaker:"\u0645\u0643\u0628\u0631 \u0635\u0648\u062A PS610"};var Xo={en:{importedPlan:"From 2D plan",importedDesc:"Current 2D deployment with illustrative wall mounts. Return to 2D to change the room or equipment.",resetImported:"Restore imported view and heights",title:"LCS 810 \xB7 3D Room Demo",eyebrow:"INTERACTIVE ROOM STUDY",export:"Export PNG",preset:"Preset",standard:"Standard 8 \xD7 10",large:"Large 10 \xD7 20",lecture:"Lecture 12 \xD7 15",ultra:"Auditorium 17 \xD7 37",custom:"Custom",recalculate:"Recalculate",overview:"Overview",top:"Top",stageView:"Stage",audienceView:"Audience",gestureHint:"Drag to orbit \xB7 Scroll to zoom \xB7 Right drag to pan \xB7 Click a device",study:"PRESALES SPATIAL STUDY",layoutTitle:"System layout",layoutDesc:"Illustrative installation positions from the 2D Recalculate rules.",width:"WIDTH (m)",depth:"DEPTH (m)",height:"HEIGHT (m)",devices:"Devices",selected:"Selected device",settings:"Scene settings",equipment:"Equipment configuration",ifpSize:"IFP size",ifpCount:"IFP panels",displaySize:"Auxiliary Display size",cameraPackage:"Camera package",teacherModel:"Teacher camera",studentModel:"Student camera",studentQty:"Student cameras",applyRecommendation:"Apply recommended cameras",applyEquipment:"Apply equipment",mountingHeights:"Illustrative mounting heights",doorSide:"Door side",doorRight:"Right wall",doorLeft:"Left wall",visibility:"Visibility",showLabels:"Device names",showFurniture:"Reference furniture",showCoverage:"Floor coverage projection",coverageNote:"S210 uses the 2D floor projection. Camera floor areas follow the current 16:9 field and viewing direction.",reset:"Restore demo defaults",assumption:"Mounting heights and simplified shapes are presentation assumptions. Confirm on site.",fromLeft:"from left wall",fromFront:"from front wall",aboveFloor:"above floor",planSymbol:"2D symbol",wallAnchor:"Wall mount",facesStage:"Faces stage",facesAudience:"Faces audience",facesRoom:"Faces into the classroom",facesLeft:"Faces left",facesRight:"Faces right",heightWarning:"Room height is 3.5 m or more. Check mounting height and use a drop mount where needed.",cameraRange:"At least one CV camera exceeds its 10 m tracking range. Check the camera plan.",roomSize:"Enter width 4\u201330 m, depth 5\u201350 m, and height 2.4\u20136 m.",screenSpace:"The selected IFP panels need more front-wall width.",screenHeight:"The IFP is too tall for this room height.",pngReady:"PNG ready",webglError:"3D could not start. Enable hardware acceleration or use a browser with WebGL support.",demoNote:"Illustrative height \u2014 confirm on site",recommendation:"Suggested for this room",s210:"S210",teacher:"Teacher camera",student:"Student camera",station:"LCS Station",ndp:"NDP600",ifp:"IFP",display:"Auxiliary Displays",speaker:"PS610"},zh:{importedPlan:"\u6765\u81EA 2D \u65B9\u6848",importedDesc:"\u5C55\u793A\u4E8C\u7EF4\u90E8\u7F72\u53CA\u58C1\u6302\u5B89\u88C5\u793A\u610F\uFF1B\u4FEE\u6539\u623F\u95F4\u6216\u8BBE\u5907\u8BF7\u8FD4\u56DE\u4E8C\u7EF4\u9875\u9762\u3002",resetImported:"\u6062\u590D\u5BFC\u5165\u65B9\u6848\u89C6\u89D2\u4E0E\u9AD8\u5EA6",title:"LCS 810 \xB7 \u4E09\u7EF4\u6559\u5BA4\u6F14\u793A",eyebrow:"\u4EA4\u4E92\u5F0F\u6559\u5BA4\u7A7A\u95F4\u793A\u610F",export:"\u5BFC\u51FA PNG",preset:"\u623F\u95F4\u9884\u8BBE",standard:"\u6807\u51C6\u6559\u5BA4 8 \xD7 10",large:"\u5927\u6559\u5BA4 10 \xD7 20",lecture:"\u9636\u68AF\u6559\u5BA4 12 \xD7 15",ultra:"\u793C\u5802 17 \xD7 37",custom:"\u81EA\u5B9A\u4E49",recalculate:"\u91CD\u65B0\u8BA1\u7B97",overview:"\u5168\u666F",top:"\u4FEF\u89C6",stageView:"\u8BB2\u53F0\u65B9\u5411",audienceView:"\u89C2\u4F17\u65B9\u5411",gestureHint:"\u62D6\u52A8\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u53F3\u952E\u62D6\u52A8\u5E73\u79FB \xB7 \u70B9\u51FB\u8BBE\u5907",study:"\u552E\u524D\u7A7A\u95F4\u793A\u610F",layoutTitle:"\u7CFB\u7EDF\u5E03\u5C40",layoutDesc:"\u6839\u636E\u4E8C\u7EF4\u201C\u91CD\u65B0\u8BA1\u7B97\u201D\u89C4\u5219\u751F\u6210\u7684\u5B89\u88C5\u793A\u610F\u3002",width:"\u5BBD\u5EA6\uFF08\u7C73\uFF09",depth:"\u6DF1\u5EA6\uFF08\u7C73\uFF09",height:"\u9AD8\u5EA6\uFF08\u7C73\uFF09",devices:"\u8BBE\u5907",selected:"\u5F53\u524D\u8BBE\u5907",settings:"\u573A\u666F\u8BBE\u7F6E",equipment:"\u8BBE\u5907\u914D\u7F6E",ifpSize:"IFP\u5C3A\u5BF8",ifpCount:"IFP\u6570\u91CF",displaySize:"\u8F85\u52A9\u5C4F\u5C3A\u5BF8",cameraPackage:"\u6444\u50CF\u5934\u5957\u88C5",teacherModel:"\u6559\u5E08\u6444\u50CF\u5934",studentModel:"\u5B66\u751F\u6444\u50CF\u5934",studentQty:"\u5B66\u751F\u673A\u6570\u91CF",applyRecommendation:"\u5E94\u7528\u63A8\u8350\u6444\u50CF\u5934",applyEquipment:"\u5E94\u7528\u8BBE\u5907\u914D\u7F6E",mountingHeights:"\u6F14\u793A\u5B89\u88C5\u9AD8\u5EA6",doorSide:"\u95E8\u7684\u4F4D\u7F6E",doorRight:"\u53F3\u4FA7\u5899",doorLeft:"\u5DE6\u4FA7\u5899",visibility:"\u663E\u793A\u5F00\u5173",showLabels:"\u8BBE\u5907\u540D\u79F0",showFurniture:"\u53C2\u8003\u684C\u6905",showCoverage:"\u5730\u9762\u8986\u76D6\u6295\u5F71",coverageNote:"S210 \u6CBF\u7528\u4E8C\u7EF4\u5730\u9762\u6295\u5F71\uFF1B\u6444\u50CF\u5934\u5730\u9762\u8303\u56F4\u968F\u5F53\u524D 16:9 \u89C6\u573A\u548C\u671D\u5411\u53D8\u5316\u3002",reset:"\u6062\u590D\u6F14\u793A\u9ED8\u8BA4\u503C",assumption:"\u5B89\u88C5\u9AD8\u5EA6\u548C\u7B80\u5316\u5916\u5F62\u4EC5\u4F5C\u6F14\u793A\uFF0C\u6700\u7EC8\u9700\u73B0\u573A\u590D\u6838\u3002",fromLeft:"\u8DDD\u5DE6\u5899",fromFront:"\u8DDD\u524D\u5899",aboveFloor:"\u79BB\u5730",planSymbol:"\u4E8C\u7EF4\u56FE\u6807\u4F4D\u7F6E",wallAnchor:"\u58C1\u6302\u5B89\u88C5",facesStage:"\u671D\u5411\u8BB2\u53F0",facesAudience:"\u671D\u5411\u89C2\u4F17",facesRoom:"\u671D\u5411\u6559\u5BA4\u5185\u90E8",facesLeft:"\u671D\u5DE6",facesRight:"\u671D\u53F3",heightWarning:"\u623F\u95F4\u9AD8\u5EA6\u8FBE\u52303.5\u7C73\uFF1A\u8BF7\u6838\u5BF9\u8BBE\u5907\u5B89\u88C5\u9AD8\u5EA6\uFF0C\u5FC5\u8981\u65F6\u4F7F\u7528\u4E0B\u5782\u652F\u67B6\u3002",cameraRange:"\u81F3\u5C11\u4E00\u53F0CV\u6444\u50CF\u5934\u8D85\u51FA10\u7C73\u8DDF\u8E2A\u8DDD\u79BB\uFF0C\u8BF7\u590D\u6838\u6444\u50CF\u5934\u65B9\u6848\u3002",roomSize:"\u8BF7\u8F93\u5165\u5BBD4\u201330\u7C73\u3001\u6DF15\u201350\u7C73\u3001\u9AD82.4\u20136\u7C73\u3002",screenSpace:"\u6240\u9009IFP\u7EC4\u5408\u5728\u524D\u5899\u653E\u4E0D\u4E0B\u3002",screenHeight:"IFP\u9AD8\u5EA6\u8D85\u8FC7\u623F\u95F4\u53EF\u5B89\u88C5\u7A7A\u95F4\u3002",pngReady:"PNG\u5DF2\u5BFC\u51FA",webglError:"\u65E0\u6CD5\u542F\u52A8\u4E09\u7EF4\u753B\u9762\u3002\u8BF7\u5F00\u542F\u786C\u4EF6\u52A0\u901F\u6216\u4F7F\u7528\u652F\u6301WebGL\u7684\u6D4F\u89C8\u5668\u3002",demoNote:"\u6F14\u793A\u9AD8\u5EA6\uFF0C\u73B0\u573A\u590D\u6838",recommendation:"\u6B64\u623F\u95F4\u63A8\u8350",s210:"S210\u540A\u9EA6",teacher:"\u6559\u5E08\u6444\u50CF\u5934",student:"\u5B66\u751F\u6444\u50CF\u5934",station:"LCS\u63A7\u5236\u53F0",ndp:"NDP600\u8BB2\u53F0",ifp:"IFP",display:"Auxiliary Displays",speaker:"PS610\u97F3\u7BB1"}};Object.assign(Xo,{ko:c_,mn:h_,ja:u_,es:d_,fr:l_,ar:f_});var rw={en:["S210 3D pickup ripples","Animate pickup ripples","Cardioid illustration based on 6 m and 8 m planning ranges. Verify pickup on site."],zh:["S210 \u4E09\u7EF4\u62FE\u97F3\u6CE2\u7EB9","\u64AD\u653E\u62FE\u97F3\u6CE2\u7EB9","\u6309 6 \u7C73\u63A8\u8350\u30018 \u7C73\u8FB9\u754C\u7684\u89C4\u5212\u5C3A\u5EA6\u7ED8\u5236\u5FC3\u5F62\u62FE\u97F3\u793A\u610F\u3002\u5B9E\u9645\u62FE\u97F3\u9700\u73B0\u573A\u590D\u6838\u3002"],ko:["S210 3D \uC218\uC74C \uD30C\uD615","\uC218\uC74C \uD30C\uD615 \uC7AC\uC0DD","6 m \uBC0F 8 m \uC124\uACC4 \uBC94\uC704\uB85C \uADF8\uB9B0 \uCE74\uB514\uC624\uC774\uB4DC \uC218\uC74C \uC608\uC2DC\uC785\uB2C8\uB2E4. \uD604\uC7A5\uC5D0\uC11C \uD655\uC778\uD558\uC138\uC694."],mn:["S210 \u0434\u0443\u0443 \u0445\u04AF\u043B\u044D\u044D\u043D \u0430\u0432\u0430\u0445 3D \u0434\u043E\u043B\u0433\u0438\u043E\u043D","\u0414\u043E\u043B\u0433\u0438\u043E\u043D\u044B \u0445\u04E9\u0434\u04E9\u043B\u0433\u04E9\u04E9\u043D\u0438\u0439\u0433 \u0442\u043E\u0433\u043B\u0443\u0443\u043B\u0430\u0445","6 \u043C, 8 \u043C \u0442\u04E9\u043B\u04E9\u0432\u043B\u04E9\u043B\u0442\u0438\u0439\u043D \u0437\u0430\u0439\u0434 \u0441\u0443\u0443\u0440\u0438\u043B\u0441\u0430\u043D \u043A\u0430\u0440\u0434\u0438\u043E\u0438\u0434 \u0434\u04AF\u0440\u0441\u043B\u044D\u043B. \u0425\u04AF\u043B\u044D\u044D\u043D \u0430\u0432\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D\u0433 \u0433\u0430\u0437\u0430\u0440 \u0434\u044D\u044D\u0440 \u043D\u044C \u0448\u0430\u043B\u0433\u0430\u043D\u0430."],ja:["S210 3D\u96C6\u97F3\u6CE2\u7D0B","\u96C6\u97F3\u6CE2\u7D0B\u3092\u52D5\u304B\u3059","\u8A2D\u8A08\u4E0A\u306E6 m\u30FB8 m\u3092\u4F7F\u3063\u305F\u30AB\u30FC\u30C7\u30A3\u30AA\u30A4\u30C9\u306E\u6A21\u5F0F\u56F3\u3067\u3059\u3002\u5B9F\u969B\u306E\u96C6\u97F3\u306F\u73FE\u5730\u3067\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"],es:["Ondas de captaci\xF3n 3D del S210","Animar ondas de captaci\xF3n","Esquema cardioide con alcances de dise\xF1o de 6 m y 8 m. Compruebe la captaci\xF3n in situ."],fr:["Ondes de captation 3D du S210","Animer les ondes de captation","Sch\xE9ma cardio\xEFde bas\xE9 sur les port\xE9es de conception de 6 m et 8 m. V\xE9rifier la captation sur site."],ar:["\u0645\u0648\u062C\u0627\u062A \u0627\u0644\u062A\u0642\u0627\u0637 S210 \u062B\u0644\u0627\u062B\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F","\u062A\u062D\u0631\u064A\u0643 \u0645\u0648\u062C\u0627\u062A \u0627\u0644\u0627\u0644\u062A\u0642\u0627\u0637","\u0631\u0633\u0645 \u062A\u0642\u0631\u064A\u0628\u064A \u0644\u0644\u0627\u0644\u062A\u0642\u0627\u0637 \u0627\u0644\u0642\u0644\u0628\u064A \u0648\u0641\u0642 \u0646\u0637\u0627\u0642\u064A \u0627\u0644\u062A\u062E\u0637\u064A\u0637 6 \u06488 \u0623\u0645\u062A\u0627\u0631. \u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0627\u0644\u062A\u0642\u0627\u0637 \u0641\u064A \u0627\u0644\u0645\u0648\u0642\u0639."]};for(let[s,[e,t,n]]of Object.entries(rw))Object.assign(Xo[s],{s210Ripples:e,animateS210Ripples:t,s210RipplesNote:n});var p_={en:["This 2D plan could not be imported. Open 3D again from the 2D page.","This plan version is unsupported. Open it from the updated 2D page."],zh:["\u65E0\u6CD5\u5BFC\u5165\u6B64\u4E8C\u7EF4\u65B9\u6848\uFF0C\u8BF7\u4ECE\u4E8C\u7EF4\u9875\u9762\u91CD\u65B0\u6253\u5F00 3D\u3002","\u4E0D\u652F\u6301\u6B64\u65B9\u6848\u7248\u672C\uFF0C\u8BF7\u4ECE\u66F4\u65B0\u540E\u7684\u4E8C\u7EF4\u9875\u9762\u91CD\u65B0\u6253\u5F00\u3002"],ko:["2D \uACC4\uD68D\uC744 \uAC00\uC838\uC62C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. 2D \uD398\uC774\uC9C0\uC5D0\uC11C 3D\uB97C \uB2E4\uC2DC \uC5EC\uC138\uC694.","\uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uBC84\uC804\uC785\uB2C8\uB2E4. \uC5C5\uB370\uC774\uD2B8\uB41C 2D \uD398\uC774\uC9C0\uC5D0\uC11C \uB2E4\uC2DC \uC5EC\uC138\uC694."],mn:["2D \u0442\u04E9\u043B\u04E9\u0432\u043B\u04E9\u0433\u04E9\u04E9\u0433 \u0438\u043C\u043F\u043E\u0440\u0442\u043B\u043E\u0445 \u0431\u043E\u043B\u043E\u043C\u0436\u0433\u04AF\u0439. 2D \u0445\u0443\u0443\u0434\u0430\u0441\u043D\u0430\u0430\u0441 3D-\u0433 \u0434\u0430\u0445\u0438\u043D \u043D\u044D\u044D\u043D\u044D \u04AF\u04AF.","\u042D\u043D\u044D \u0445\u0443\u0432\u0438\u043B\u0431\u0430\u0440\u044B\u0433 \u0434\u044D\u043C\u0436\u0438\u0445\u0433\u04AF\u0439. \u0428\u0438\u043D\u044D\u0447\u0438\u043B\u0441\u044D\u043D 2D \u0445\u0443\u0443\u0434\u0430\u0441\u043D\u0430\u0430\u0441 \u043D\u044D\u044D\u043D\u044D \u04AF\u04AF."],ja:["2D \u30D7\u30E9\u30F3\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u30022D \u30DA\u30FC\u30B8\u304B\u3089 3D \u3092\u958B\u304D\u76F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002","\u672A\u5BFE\u5FDC\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3067\u3059\u3002\u66F4\u65B0\u3057\u305F 2D \u30DA\u30FC\u30B8\u304B\u3089\u958B\u304D\u76F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002"],es:["No se pudo importar el plan 2D. Abra 3D de nuevo desde la p\xE1gina 2D.","Versi\xF3n no compatible. Abra el plan desde la p\xE1gina 2D actualizada."],ar:["\u062A\u0639\u0630\u0631 \u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0627\u0644\u0645\u062E\u0637\u0637 \u0627\u0644\u062B\u0646\u0627\u0626\u064A. \u0627\u0641\u062A\u062D \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062B\u0644\u0627\u062B\u064A \u0645\u062C\u062F\u062F\u064B\u0627 \u0645\u0646 \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062B\u0646\u0627\u0626\u064A\u0629.","\u0625\u0635\u062F\u0627\u0631 \u063A\u064A\u0631 \u0645\u062F\u0639\u0648\u0645. \u0627\u0641\u062A\u062D \u0627\u0644\u0645\u062E\u0637\u0637 \u0645\u0646 \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062B\u0646\u0627\u0626\u064A\u0629 \u0627\u0644\u0645\u062D\u062F\u062B\u0629."],fr:["Impossible d\u2019importer ce plan 2D. Ouvrez \xE0 nouveau la vue 3D depuis la page 2D.","Cette version du plan n\u2019est pas prise en charge. Rouvrez-la depuis la page 2D mise \xE0 jour."]},m_=(s,e,t)=>e==="snapshotInvalid"?p_[s][0]:e==="snapshotVersion"?p_[s][1]:t(e);function g_(s,e){return["teacher","student"].includes(s.kind)?`${s.model} \xB7 ${e(s.kind)}${s.kind==="student"?" "+(s.name.match(/Student (\d+)/)?.[1]||"1"):""}`:s.kind==="ifp"?`${e("ifp")}${s.size?" "+s.size+"\u2033":""} \xB7 ${s.id.split("-").at(-1)}`:s.kind==="display"?`${e("display")} \xB7 ${s.size}\u2033 \xB7 ${s.id.split("-").at(-1)}`:s.kind==="station"?e("station"):s.name}var j=s=>document.querySelector(s),qf=m0(window.location.hash),gt=qf.snapshot,__=gt?{...gt.room,preset:"custom",ifpSize:gt.layout.largeScreen.width*Math.sqrt(337)/(.0254*16),ifpCount:gt.visibility.ifp?1:0,displaySize:gt.displaySize,cameraPlan:gt.cameraPlan}:null,J={lang:fp(gt?.lang),config:{width:8,depth:10,height:3,preset:"standard",ifpSize:86,ifpCount:2,displaySize:"55",cameraPlan:{...Id}},data:null,mountHeights:{},selectedId:"teacher-camera",visibility:{},showLabels:!0,showFurniture:!0,showCoverage:!1};J.s210Request=gt?gt.s210Request||{mode:"fixed",count:gt.layout.s210s.length}:{mode:"auto"};J.s210Draft=null;J.localSnapshot=null;var st,fa,Xf=mp("lcs-3d-theme","light",s=>st?.setTheme(s)),$f=_p(j("#scene-sidebar"),980),Rt=s=>Xo[J.lang][s]||Xo.en[s]||s,gn=s=>Number(s).toFixed(1),pa=s=>g_(s,Rt),on=s=>!!s&&J.visibility[s.kind]!==!1,ln=()=>J.data.devices,x_=()=>ln().find(s=>s.id===J.selectedId),Ss=new Zh({devices:()=>J.data?.devices||[],title:pa,language:()=>J.lang,onSelect:Kh,scene:()=>st}),Zf=H0({devices:()=>(J.data?.devices||[]).filter(s=>s.kind==="s210"&&on(s)),title:pa,scene:()=>st,onSelect:Kh,showCoverage:()=>$f.showCoverage(),showRipples(){j("#s210-ripples").checked||j("#s210-ripples").click()}});function Jh(){let s=x_(),e=j("#device-detail");if(e.replaceChildren(),j("#adjust-camera-field").hidden=!on(s)||!kn(s),j("#adjust-s210-aim").hidden=!on(s)||s.kind!=="s210",j("#open-av-matrix").hidden=!on(s)||s.kind!=="ndp",!s||!on(s))return;let t=document.createElement("div");t.className="detail-heading",t.style.setProperty("--device-accent",s.color);let n=document.createElement("span");n.className="device-swatch";let i=document.createElement("strong");i.textContent=pa(s),t.append(n,i);let r=document.createElement("div");r.className="detail-grid";for(let[l,c]of[[`${gn(s.x)} m`,Rt("fromLeft")],[`${gn(s.depth)} m`,Rt("fromFront")],[`${gn(J.mountHeights[s.id])} m`,Rt("aboveFloor")]]){let h=document.createElement("div"),u=document.createElement("strong");u.textContent=l;let p=document.createElement("small");p.textContent=c,h.append(u,p),r.append(h)}let a=document.createElement("p");a.className="detail-direction";let o={front:"facesStage",rear:"facesAudience",left:"facesLeft",right:"facesRight"}[s.direction];if(a.textContent=`${Rt(s.kind==="speaker"?"facesRoom":o)} \xB7 ${s.mount?.includes("wall")?`${Rt("wallAnchor")} \xB7 `:""}${Rt("demoNote")}`,kn(s)&&(a.textContent=qo(J.lang).poseNote),e.append(t,r,a),s.planX!==void 0&&(gt||s.planX!==s.x||s.planDepth!==s.depth)){let l=document.createElement("p");l.className="detail-direction",l.textContent=`${Rt("planSymbol")}: ${gn(s.planX)} \xD7 ${gn(s.planDepth)} m`,e.append(l)}}function aw(){let s=j("#height-controls");s.replaceChildren();for(let e of ln()){let t=document.createElement("div");t.className="height-control";let n=document.createElement("label");n.htmlFor=`height-${e.id}`;let i=document.createElement("span");i.textContent=pa(e);let r=document.createElement("output");r.textContent=`${gn(J.mountHeights[e.id])} m`,n.append(i,r);let a=document.createElement("input");a.type="range",a.id=`height-${e.id}`,a.min=String(Mo(e,0,J.config.height)),a.max=String(Mo(e,100,J.config.height)),a.step="0.05",a.value=String(J.mountHeights[e.id]),a.addEventListener("input",()=>{let o=Mo(e,a.value,J.config.height);J.mountHeights[e.id]=o,r.textContent=`${gn(o)} m`,st?.setMountHeight(e.id,o),Jh()}),t.append(n,a),s.append(t)}}function ow(){let s=j("#visibility-controls");if(s.replaceChildren(),!gt)for(let e of["station","ndp","ifp","teacher","student","s210","speaker","display"]){if(!ln().some(r=>r.kind===e))continue;let t=document.createElement("label");t.className="check-row";let n=document.createElement("input");n.type="checkbox",n.checked=J.visibility[e]!==!1,n.dataset.kind=e,n.addEventListener("change",()=>{J.visibility[e]=n.checked,st?.setVisibility(e,n.checked),on(x_())||(J.selectedId=ln().find(on)?.id),st?.setSelected(J.selectedId,!1),document.querySelectorAll(".device-label").forEach(r=>r.classList.toggle("selected",r.dataset.deviceId===J.selectedId)),Ss.sync(),jh(),Jh(),v_()});let i=document.createElement("span");i.textContent=Rt(e),t.append(n,i),s.append(t)}}function jh(){let s=j("#s210-ripples"),e=j("#animate-s210-ripples");s.disabled=!ln().some(t=>t.kind==="s210"&&on(t)),e.disabled=s.disabled||!s.checked,st?.setS210Ripples(!s.disabled&&s.checked,e.checked),Zf.sync()}function lw(){let s=j("#device-labels");s.replaceChildren();for(let e of ln()){let t=document.createElement("button");t.type="button",t.className="device-label",t.dataset.deviceId=e.id,t.style.setProperty("--device-accent",e.color),t.classList.toggle("selected",e.id===J.selectedId),t.textContent=pa(e),t.addEventListener("click",()=>Kh(e.id)),s.append(t)}s.hidden=!J.showLabels}function cw(s){if(!J.showLabels)return;let e=j("#scene-canvas").getBoundingClientRect(),t=[...document.querySelectorAll(".scene-tools,.scene-topline")].map(i=>{let r=i.getBoundingClientRect();return{left:r.left-e.left,right:r.right-e.left,top:r.top-e.top,bottom:r.bottom-e.top}}),n=[...s].sort((i,r)=>+(r.device.id===J.selectedId)-+(i.device.id===J.selectedId));for(let{device:i,x:r,y:a,visible:o}of n){let l=document.querySelector(`.device-label[data-device-id="${i.id}"]`);if(!l||(l.hidden=!o||!on(i),l.hidden))continue;let c=l.offsetWidth,h=l.offsetHeight,u;for(let[p,d]of[[0,0],[0,-32],[0,32],[-70,-12],[70,-12],[-70,25],[70,25]]){let _=Math.max(c/2+5,Math.min(e.width-c/2-5,r+p)),g=Math.max(38,Math.min(e.height-88,a+d)),m={left:_-c/2,right:_+c/2,top:g-h,bottom:g};if(t.every(f=>m.right+5<f.left||m.left-5>f.right||m.bottom+5<f.top||m.top-5>f.bottom)){u={px:_,py:g,rect:m};break}}u?(t.push(u.rect),l.style.left=`${u.px}px`,l.style.top=`${u.py}px`):l.hidden=!0}}function Kh(s){if(fa?.select(s)){document.querySelectorAll(".device-label").forEach(e=>e.classList.toggle("selected",e.dataset.deviceId===s));return}ln().some(e=>e.id===s&&on(e))&&(J.selectedId=s,st?.setSelected(s,!1),Ss.select(s),Jh(),Zf.select(s),$f.showDevice(),document.querySelectorAll(".device-label").forEach(e=>e.classList.toggle("selected",e.dataset.deviceId===s)))}function v_(){let{width:s,depth:e,height:t}=J.config;j("#width-metric").innerHTML=`${gn(s)} <small>m</small>`,j("#depth-metric").innerHTML=`${gn(e)} <small>m</small>`,j("#height-metric").innerHTML=`${gn(t)} <small>m</small>`,j("#scene-caption").textContent=`${gn(s)} \xD7 ${gn(e)} m`;let n=j("#height-warning"),i=[t>=3.5?Rt("heightWarning"):null,...J.data.warnings.map(u=>Gf(J.lang)[u]||Rt(u))].filter(Boolean);n.hidden=!i.length,n.textContent=i.map(u=>`\u26A0 ${u}`).join("  "),j("#long-camera-settings").hidden=!(e>12&&j("#camera-package").value==="CV870");let r=J.data.recommendation;j("#recommendation-note").textContent=`${Rt("recommendation")}: ${r.teacher} / ${r.student} \xD7 ${r.studentQty}`,j("#student-qty").disabled=!Vt[j("#student-model").value].projectOnly;let a=j("#audio-plan-summary");a||(a=document.createElement("div"),a.id="audio-plan-summary",a.style.cssText="font-size:12px;line-height:1.5;margin:10px 0",j("#s210-controls").after(a));let o=J.localSnapshot||gt,l=_a({width:s,depth:e,s210Count:ln().filter(u=>u.kind==="s210"&&on(u)).length,speakerCount:ln().filter(u=>u.kind==="speaker"&&on(u)).length,qnexModel:o?.qnexModel||"NDP600",audioConfig:o?.audioConfig,minimum:J.data.audioPlan.minimum});a.replaceChildren();let c=[l.a3006Required?"A3006 \xD71":"",l.purchaseFeedback?"FE-224N \xD71":"",l.purchaseAmplifiers?`EKA-415 \xD7${l.purchaseAmplifiers}`:""].filter(Boolean),h=[c.length?`${J.lang==="zh"?"\u5FC5\u914D\u91C7\u8D2D":"Required purchases"}: ${c.join(" \xB7 ")}`:"",...cp(l,o?.audioConfig,J.lang)].filter(Boolean);for(let u of h){let p=document.createElement("p");p.textContent=u,a.append(p)}}function jf(){iu(J.lang),document.title=Rt("title"),Xf.setLanguage(J.lang),$f.setLanguage(J.lang),k0(J.lang),Zf.setLanguage(J.lang),fa?.setLanguage(J.lang),document.querySelectorAll("[data-i18n]").forEach(e=>{e.textContent=Rt(e.dataset.i18n)}),j("#language-button").value=J.lang;let s=Gf(J.lang);if(j("#reset-plan").textContent=s.resetPlan,j("#reset-plan").title=s.resetPlanHint,j("#s210-count-label").textContent=s.quantity,j("#s210-count").value=J.s210Draft??J.data.plan.s210s.length,j("#s210-count-status").textContent=J.s210Draft!==null?s.pending:s[J.s210Request.mode==="fixed"?"fixed":"automatic"],j("#s210-controls").dataset.mode=J.s210Request.mode,j("#s210-controls").dataset.pending=String(J.s210Draft!==null),gt){let e=gt.projectTitle;document.title=`${e} \xB7 3D`,j('[data-i18n="title"]').textContent=`${e} \xB7 3D`,j('[data-i18n="layoutDesc"]').textContent=s.importHint,j("#reset-button").textContent=Rt("resetImported"),j("#imported-plan-banner").textContent=`${J.localSnapshot?s.adjusted:Rt("importedPlan")} \xB7 ${e} \xB7 ${gn(J.config.width)} \xD7 ${gn(J.config.depth)} \xD7 ${gn(J.config.height)} m`}lw(),Jh(),aw(),ow(),v_(),Ss.render(),jh()}function Yo(){let s=j("#camera-package").value,e=Number(j("#room-depth").value),t=s==="CV870"&&(e>12||Vt[J.config.cameraPlan.student].projectOnly);return{width:Number(j("#room-width").value),depth:e,height:Number(j("#room-height-input").value),preset:j("#preset").value,ifpSize:Number(j("#ifp-size").value),ifpCount:Number(j("#ifp-count").value),displaySize:j("#display-size").value,cameraPlan:t?{teacher:j("#teacher-model").value,student:j("#student-model").value,studentQty:Number(j("#student-qty").value)}:{teacher:s,student:s,studentQty:1}}}function cr(s,{request:e=J.s210Request,commit:t=!1,reset:n=!1}={}){s={...s,cameraPlan:{...s.cameraPlan}},n&&Vt[s.cameraPlan.student].projectOnly&&(s.cameraPlan.studentQty=Zr(s.depth,s.width,s.width*s.depth,{}).studentQty);let i=gt&&t?y0(J.localSnapshot||gt,e,n):J.localSnapshot,r=gt?x0(i||gt):_0({...s,s210Request:e}),a=j("#input-error");if(a.hidden=!r.error,a.textContent=r.error?Rt(r.error):"",r.error)return!1;t&&(J.s210Request={...e},J.s210Draft=null,i&&(J.localSnapshot=i)),n&&(Ss.state.settings.clear(),j("#student-qty").value=s.cameraPlan.studentQty),J.config=s,J.data=r,Ss.state.sync(ln());let o=J.mountHeights;return J.mountHeights=Object.fromEntries(ln().map(l=>[l.id,Mo(l,o[l.id]??l.height,s.height)])),ln().some(l=>l.id===J.selectedId&&on(l))||(J.selectedId=ln().find(on)?.id),st&&(st.visibleKinds={...J.visibility},st.updateData(r,J.mountHeights),st.furniture.visible=J.showFurniture,st.coverage.visible=J.showCoverage,st.setSelected(J.selectedId,!1),fa?.syncLayout()),Ss.sync(),jf(),!0}function y_(s){j("#preset").value=s.preset,j("#room-width").value=s.width,j("#room-depth").value=s.depth,j("#room-height-input").value=s.height,j("#ifp-size").value=s.ifpSize,j("#ifp-count").value=s.ifpCount,j("#display-size").value=s.displaySize,j("#camera-package").value=s.cameraPlan.teacher==="CV210"?"CV210":"CV870",j("#teacher-model").value=s.cameraPlan.teacher==="CV210"?"CV870":s.cameraPlan.teacher,j("#student-model").value=s.cameraPlan.student==="CV210"?"CV870":s.cameraPlan.student,j("#student-qty").value=s.cameraPlan.studentQty}function Yf(s){let e=st.setQuality(s),t=st.quality;j("#render-quality").value=t,fa?.syncQuality(),j("#quality-warning").hidden=e,document.documentElement.dataset.renderQuality=t;let n=new URL(location.href);if(n.searchParams.has("quality")||t==="high"){n.searchParams.set("quality",t);try{history.replaceState(null,"",n)}catch{}}}function hw(){j("#render-quality").addEventListener("change",s=>Yf(s.target.value)),j("#door-side").addEventListener("change",s=>st?.setDoorSide(s.target.value)),j("#export-button").addEventListener("click",()=>o_({roomScene:st,state:J,devices:ln,visible:on,title:pa,t:Rt})),document.querySelectorAll("[data-view]").forEach(s=>s.addEventListener("click",()=>{st?.setView(s.dataset.view),document.querySelectorAll("[data-view]").forEach(e=>e.classList.toggle("active",e===s))})),j("#preset").addEventListener("change",s=>{let e=oh(s.target.value);e&&(j("#room-width").value=e.width,j("#room-depth").value=e.length,j("#display-size").value=e.displaySize,cr(Yo()))});for(let s of["room-width","room-depth","room-height-input"])j(`#${s}`).addEventListener("input",()=>{j("#preset").value="custom"});j("#s210-count").replaceChildren(...Array.from({length:pi+1},(s,e)=>new Option(String(e),String(e)))),j("#s210-count").value=J.data.plan.s210s.length,j("#s210-count").addEventListener("change",s=>{J.s210Draft=Number(s.target.value),jf()}),j("#recalculate-button").addEventListener("click",()=>cr(gt?J.config:Yo(),{request:J.s210Draft!==null?{mode:"fixed",count:J.s210Draft}:J.s210Request,commit:!0})),j("#reset-plan").addEventListener("click",()=>cr(gt?J.config:Yo(),{request:{mode:"auto"},commit:!0,reset:!0})),j("#apply-equipment").addEventListener("click",()=>cr(Yo())),j("#camera-package").addEventListener("change",()=>{j("#long-camera-settings").hidden=!(j("#room-depth").value>12&&j("#camera-package").value==="CV870")}),j("#student-model").addEventListener("change",()=>{j("#student-qty").disabled=!Vt[j("#student-model").value].projectOnly}),j("#apply-recommendation").addEventListener("click",()=>{let{teacher:s,student:e,studentQty:t}=J.data.recommendation;j("#teacher-model").value=s,j("#student-model").value=e,j("#student-qty").value=t,cr(Yo())}),j("#show-labels").addEventListener("change",s=>{J.showLabels=s.target.checked,j("#device-labels").hidden=!J.showLabels}),j("#show-furniture").addEventListener("change",s=>{J.showFurniture=s.target.checked,st.furniture.visible=J.showFurniture}),j("#show-coverage").addEventListener("change",s=>{J.showCoverage=s.target.checked,st.coverage.visible=J.showCoverage}),j("#s210-ripples").addEventListener("change",jh),j("#animate-s210-ripples").addEventListener("change",jh),j("#reset-button").addEventListener("click",()=>{j("#door-side").value="right",st?.setDoorSide("right");let s=__||{width:lh.width,depth:lh.depth,height:lh.defaultHeight,preset:"standard",ifpSize:86,ifpCount:2,displaySize:"55",cameraPlan:{...Id}};J.localSnapshot=null,J.s210Draft=null,J.s210Request=gt?gt.s210Request||{mode:"fixed",count:gt.layout.s210s.length}:{mode:"auto"},J.mountHeights={},J.visibility={},J.selectedId="teacher-camera",Ss.state.resetAll(),st?.s210Aim.clear(),J.showLabels=!0,J.showFurniture=!0,J.showCoverage=!1,j("#device-labels").hidden=!1,y_(s);for(let e of["show-labels","show-furniture"])j(`#${e}`).checked=!0;for(let e of["show-coverage","s210-ripples","animate-s210-ripples"])j(`#${e}`).checked=!1;cr(s),st.setView("overview"),document.querySelectorAll("[data-view]").forEach(e=>e.classList.toggle("active",e.dataset.view==="overview"))})}function uw(){let s=()=>{iu(J.lang),Xf.setLanguage(J.lang),document.title=Rt("title"),document.querySelectorAll("[data-i18n]").forEach(e=>{e.textContent=Rt(e.dataset.i18n)}),j("#scene-error").textContent=m_(J.lang,qf.error,Rt)};if(pp(j("#language-button"),J.lang,e=>{J.lang=e,J.data?jf():s()}),qf.error){let e=j("#scene-error");s(),e.hidden=!1,j(".room-toolbar:not(#imported-plan-banner)").hidden=!0,j(".sidebar").hidden=!0,j("#export-button").disabled=!0,document.documentElement.dataset.sceneReady="false";return}if(gt){J.config=__,document.documentElement.dataset.importedPlan="true",j("#imported-plan-banner").hidden=!1,document.querySelectorAll(".room-controls input,.room-controls select").forEach(e=>{e.disabled=!0});for(let e of["#equipment-controls","#visibility-controls"])j(e).hidden=!0}y_(J.config),cr(J.config),hw();try{st=new wh(j("#scene-canvas"),j("#device-labels"),Kh,cw,J.data,J.mountHeights),st.setTheme(Xf.theme),Ss.sync(),j("#render-quality").disabled=!1,Yf(new URLSearchParams(location.search).get("quality")==="high"?"high":"standard"),fa=t_({room:st,sidebar:j("#scene-sidebar"),devices:ln,visible:on,setQuality:Yf,restorePlanningSelection(){st.setSelected(J.selectedId,!1),document.querySelectorAll(".device-label").forEach(e=>e.classList.toggle("selected",e.dataset.deviceId===J.selectedId))}}),fa.setLanguage(J.lang),document.documentElement.dataset.sceneReady="true"}catch(e){console.error(e);let t=j("#scene-error");t.textContent=Rt("webglError"),t.hidden=!1,document.documentElement.dataset.sceneReady="false",j("#frame-status").textContent="WebGL"}}uw();hp(s=>{if(document.documentElement.dataset.sceneReady!=="true")throw new Error("Invalid or unavailable 3D plan");if(s.qnexModel!=="NDP600")for(let e of ln().filter(t=>t.kind==="ndp")){let t=st.models.get(e.id);t&&(t.visible=!1)}for(let e of st.models.values())e.userData.halo&&(e.userData.halo.visible=!1);return up(st,`LCS GEN2 Hybrid Learning \xB7 ${s.qnexModel} \xB7 ${J.config.width} \xD7 ${J.config.depth} m`)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
