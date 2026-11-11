(()=>{function qc(i){window.addEventListener("message",async e=>{if(window.parent===window||e.source!==window.parent||location.protocol!=="file:"&&e.origin!==location.origin||e.data?.type!=="qnex-quotation-capture"||typeof e.data.id!="string")return;let t={type:"qnex-quotation-image",id:e.data.id};try{Object.assign(t,await i(e.data))}catch(n){t.error=n.message||"3D capture failed"}e.source.postMessage(t,e.origin==="null"?"*":e.origin)})}function Yc(i,e){if(!i?.renderer)throw new Error("3D scene is not ready");i.setTheme("light"),i.renderer.setPixelRatio(1),i.renderer.setSize(1440,1e3,!1),i.camera.aspect=1440/1e3,i.camera.up.set(0,1,0),i.camera.updateProjectionMatrix(),i.viewTween=null,i.setView("overview",!0),i.controls.update(),i.renderer.render(i.scene,i.camera);let t=document.createElement("canvas");t.width=1440,t.height=1e3;let n=t.getContext("2d");return n.drawImage(i.canvas,0,0,1440,1e3),n.fillStyle="rgba(255,255,255,.94)",n.fillRect(16,16,1408,44),n.fillStyle="#17324d",n.font="bold 20px Arial",n.fillText(e,30,46),{data:t.toDataURL("image/png"),width:1440,height:1e3,view:"overview",upright:!0}}var Jo={en:"English",zh:"\u7B80\u4F53\u4E2D\u6587",ko:"\uD55C\uAD6D\uC5B4",mn:"\u041C\u043E\u043D\u0433\u043E\u043B",ja:"\u65E5\u672C\u8A9E",es:"Espa\xF1ol",fr:"Fran\xE7ais",ar:"\u0627\u0644\u0639\u0631\u0628\u064A\u0629"},Qd=["light","dark","theme","showSidebar","hideSidebar","language","left","right","types","tabletop","scene","views","devices"],$c={en:["Light","Dark","Switch light / dark theme","Show sidebar","Hide sidebar","Language","Left","Right","types","tabletop","Interactive 3D room","Camera views","Device names"],zh:["\u660E\u4EAE","\u6DF1\u8272","\u5207\u6362\u660E\u4EAE\uFF0F\u6DF1\u8272\u4E3B\u9898","\u5C55\u5F00\u4FA7\u680F","\u6536\u8D77\u4FA7\u680F","\u8BED\u8A00","\u5DE6","\u53F3","\u7C7B","\u684C\u9762","\u4EA4\u4E92\u5F0F\u4E09\u7EF4\u6559\u5BA4","\u89C2\u5BDF\u89C6\u89D2","\u8BBE\u5907\u540D\u79F0"],ko:["\uBC1D\uAC8C","\uC5B4\uB461\uAC8C","\uBC1D\uC740/\uC5B4\uB450\uC6B4 \uD14C\uB9C8 \uC804\uD658","\uC0AC\uC774\uB4DC\uBC14 \uD45C\uC2DC","\uC0AC\uC774\uB4DC\uBC14 \uC228\uAE30\uAE30","\uC5B8\uC5B4","\uC67C\uCABD","\uC624\uB978\uCABD","\uC720\uD615","\uCC45\uC0C1 \uC0C1\uD310","\uC778\uD130\uB799\uD2F0\uBE0C 3D \uAD50\uC2E4","\uCE74\uBA54\uB77C \uC2DC\uC810","\uC7A5\uBE44 \uC774\uB984"],mn:["\u0426\u0430\u0439\u0432\u0430\u0440","\u0411\u0430\u0440\u0430\u0430\u043D","\u0426\u0430\u0439\u0432\u0430\u0440 / \u0431\u0430\u0440\u0430\u0430\u043D \u04E9\u043D\u0433\u04E9 \u0441\u043E\u043B\u0438\u0445","\u0425\u0430\u0436\u0443\u0443\u0433\u0438\u0439\u043D \u0441\u0430\u043C\u0431\u0430\u0440\u044B\u0433 \u0445\u0430\u0440\u0443\u0443\u043B\u0430\u0445","\u0425\u0430\u0436\u0443\u0443\u0433\u0438\u0439\u043D \u0441\u0430\u043C\u0431\u0430\u0440\u044B\u0433 \u043D\u0443\u0443\u0445","\u0425\u044D\u043B","\u0417\u04AF\u04AF\u043D","\u0411\u0430\u0440\u0443\u0443\u043D","\u0442\u04E9\u0440\u04E9\u043B","\u0448\u0438\u0440\u044D\u044D\u043D\u0438\u0439 \u0442\u0430\u0432\u0446\u0430\u043D","\u0418\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432 3D \u04E9\u0440\u04E9\u04E9","\u041A\u0430\u043C\u0435\u0440\u044B\u043D \u0445\u0430\u0440\u0430\u0433\u0434\u0430\u0446","\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u043D \u043D\u044D\u0440"],ja:["\u30E9\u30A4\u30C8","\u30C0\u30FC\u30AF","\u30E9\u30A4\u30C8\uFF0F\u30C0\u30FC\u30AF\u5207\u66FF","\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u8868\u793A","\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u96A0\u3059","\u8A00\u8A9E","\u5DE6","\u53F3","\u7A2E\u985E","\u5929\u677F","\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D63D\u6559\u5BA4","\u8996\u70B9","\u6A5F\u5668\u540D"],es:["Claro","Oscuro","Cambiar tema claro / oscuro","Mostrar panel","Ocultar panel","Idioma","Izquierda","Derecha","tipos","superficie","Aula 3D interactiva","Vistas de c\xE1mara","Nombres de equipos"],fr:["Clair","Sombre","Changer de th\xE8me clair / sombre","Afficher le panneau","Masquer le panneau","Langue","Gauche","Droite","types","plateau","Salle 3D interactive","Points de vue","Noms des \xE9quipements"],ar:["\u0641\u0627\u062A\u062D","\u062F\u0627\u0643\u0646","\u062A\u0628\u062F\u064A\u0644 \u0627\u0644\u0645\u0638\u0647\u0631 \u0627\u0644\u0641\u0627\u062A\u062D \u0648\u0627\u0644\u062F\u0627\u0643\u0646","\u0625\u0638\u0647\u0627\u0631 \u0627\u0644\u0644\u0648\u062D\u0629","\u0625\u062E\u0641\u0627\u0621 \u0627\u0644\u0644\u0648\u062D\u0629","\u0627\u0644\u0644\u063A\u0629","\u064A\u0633\u0627\u0631","\u064A\u0645\u064A\u0646","\u0623\u0646\u0648\u0627\u0639","\u0633\u0637\u062D \u0627\u0644\u0637\u0627\u0648\u0644\u0629","\u063A\u0631\u0641\u0629 \u062A\u0641\u0627\u0639\u0644\u064A\u0629 \u062B\u0644\u0627\u062B\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F","\u0632\u0648\u0627\u064A\u0627 \u0627\u0644\u0639\u0631\u0636","\u0623\u0633\u0645\u0627\u0621 \u0627\u0644\u0623\u062C\u0647\u0632\u0629"]},Es=i=>Object.fromEntries(Qd.map((e,t)=>[e,($c[i]||$c.en)[t]]));function Zc(i){let e=new URLSearchParams(location.search).get("lang");return Object.hasOwn(Jo,e)?e:Object.hasOwn(Jo,i)?i:"en"}function ef(i){try{localStorage.setItem("qnex_arch_lang_v2",i)}catch{}}function Ko(i){document.documentElement.lang=i==="zh"?"zh-CN":i,document.documentElement.dir=i==="ar"?"rtl":"ltr";let e=Es(i);for(let[t,n]of[[".scene-panel","scene"],["#scene-canvas","scene"],["[role=group]","views"],["#device-labels","devices"]])document.querySelector(t)?.setAttribute("aria-label",e[n])}function Jc(i,e,t){i.replaceChildren(...Object.entries(Jo).map(([n,s])=>{let r=document.createElement("option");return r.value=n,r.textContent=s,r})),i.value=e,i.setAttribute("aria-label",Es(e).language),i.addEventListener("change",()=>{ef(i.value);try{let n=new URL(location.href);n.searchParams.set("lang",i.value),history.replaceState(null,"",n)}catch{}t(i.value),i.setAttribute("aria-label",Es(i.value).language)})}var Bi={light:{background:"#eaf0f5",floor:"#e3e5df",platform:"#d1ae89",front:"#e3ebf0",glass:"#9fc5d1",base:"#d5e2e8",trim:"#829eaa",door:"#637e8b",doorPanel:"#a6c5cf",window:"#9fbfcc",handle:"#456578",grid:"#bdc8c8",gridCenter:"#9aafb9",sky:"#f8fdff",ground:"#b6cad1",exposure:1.35},dark:{background:"#0c1729",floor:"#172940",platform:"#385873",front:"#102239",glass:"#27415a",base:"#20354b",trim:"#3d6984",door:"#385873",doorPanel:"#345367",window:"#4a6b80",handle:"#83aabd",grid:"#30475d",gridCenter:"#45647a",sky:"#c9e8ff",ground:"#26374c",exposure:1}};function Kc(i,e,t){let n=e;try{let u=localStorage.getItem(i);Object.hasOwn(Bi,u)&&(n=u)}catch{}let s=!1,r="en",a=document.querySelector("#theme-toggle"),o=document.querySelector("#sidebar-toggle"),l=document.querySelector(".sidebar");function c(){let u=Es(r);a.textContent=n==="dark"?u.light:u.dark,a.title=a.ariaLabel=u.theme,a.setAttribute("aria-pressed",String(n==="dark")),o.textContent=s?u.showSidebar:u.hideSidebar,o.setAttribute("aria-expanded",String(!s)),o.setAttribute("aria-controls",l.id)}function h(){document.documentElement.dataset.theme=n,document.querySelector('meta[name="theme-color"]')?.setAttribute("content",Bi[n].background),t(n),c()}return a.addEventListener("click",()=>{n=n==="dark"?"light":"dark";try{localStorage.setItem(i,n)}catch{}h()}),o.addEventListener("click",()=>{s=!s,l.hidden=s,document.documentElement.classList.toggle("sidebar-collapsed",s),c()}),h(),{setLanguage(u){r=u,c()},get theme(){return n}}}var jc={en:["Scene settings","Setup","Devices","Coverage","Display","Acoustic coverage","Adjust field of view"],zh:["\u573A\u666F\u8BBE\u7F6E","\u914D\u7F6E","\u8BBE\u5907","\u8986\u76D6","\u663E\u793A","\u58F0\u5B66\u8986\u76D6","\u8C03\u6574\u89C6\u573A"],ko:["\uC7A5\uBA74 \uC124\uC815","\uC124\uC815","\uC7A5\uBE44","\uCEE4\uBC84\uB9AC\uC9C0","\uD45C\uC2DC","\uC74C\uD5A5 \uCEE4\uBC84\uB9AC\uC9C0","\uC2DC\uC57C\uAC01 \uC870\uC815"],mn:["\u041E\u0440\u0447\u043D\u044B \u0442\u043E\u0445\u0438\u0440\u0433\u043E\u043E","\u0422\u043E\u0445\u0438\u0440\u0433\u043E\u043E","\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436","\u0425\u0430\u043C\u0440\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D","\u0414\u044D\u043B\u0433\u044D\u0446","\u0414\u0443\u0443\u043D\u044B \u0445\u0430\u043C\u0440\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D","\u0425\u0430\u0440\u0430\u0445 \u04E9\u043D\u0446\u04E9\u0433 \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u0430\u0445"],ja:["\u30B7\u30FC\u30F3\u8A2D\u5B9A","\u69CB\u6210","\u6A5F\u5668","\u30AB\u30D0\u30FC\u7BC4\u56F2","\u8868\u793A","\u97F3\u97FF\u30AB\u30D0\u30FC\u7BC4\u56F2","\u753B\u89D2\u3092\u8ABF\u6574"],es:["Ajustes de escena","Configurar","Equipos","Cobertura","Mostrar","Cobertura ac\xFAstica","Ajustar campo de visi\xF3n"],fr:["R\xE9glages de la sc\xE8ne","Configurer","\xC9quipements","Couverture","Affichage","Couverture acoustique","R\xE9gler le champ de vision"],ar:["\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0634\u0647\u062F","\u0627\u0644\u0625\u0639\u062F\u0627\u062F","\u0627\u0644\u0623\u062C\u0647\u0632\u0629","\u0627\u0644\u062A\u063A\u0637\u064A\u0629","\u0627\u0644\u0639\u0631\u0636","\u0627\u0644\u062A\u063A\u0637\u064A\u0629 \u0627\u0644\u0635\u0648\u062A\u064A\u0629","\u0636\u0628\u0637 \u0645\u062C\u0627\u0644 \u0627\u0644\u0631\u0624\u064A\u0629"]};function Qc(i,e){let t=i.querySelector('[role="tablist"]'),n=[...t.querySelectorAll('[role="tab"]')],s=n.map(c=>document.getElementById(c.getAttribute("aria-controls"))),r=new Map,a=matchMedia(`(max-width: ${e}px)`),o=0;function l(c,h=!1){if(c===o)return;let u=s[o],f=t.offsetHeight-u.getBoundingClientRect().top,d=!a.matches;d?r.set(u,u.scrollTop):h&&r.set(u,Math.max(0,f)),u.hidden=!0,n[o].ariaSelected="false",n[o].tabIndex=-1,o=c;let g=s[o];g.hidden=!1,n[o].ariaSelected="true",n[o].tabIndex=0;let _=r.get(g)||0;d?g.scrollTop=_:h&&(f>=0||_>0)&&window.scrollBy(0,g.getBoundingClientRect().top-t.offsetHeight+_)}return n.forEach((c,h)=>{c.addEventListener("click",()=>l(h,!0)),c.addEventListener("keydown",u=>{let f=getComputedStyle(t).direction==="rtl"?-1:1,d={Home:0,End:n.length-1,ArrowLeft:h-f,ArrowRight:h+f};if(!Object.hasOwn(d,u.key))return;u.preventDefault();let g=(d[u.key]+n.length)%n.length;l(g,!0),n[g].focus({preventScroll:!0})})}),i.querySelector("#adjust-camera-field").addEventListener("click",()=>{l(2);let c=i.querySelector("#camera-field-panel"),h=c.closest("details");h&&(h.open=!0);let u=c.querySelector("#camera-field-enabled");u.checked||u.click();let f=c.querySelector("#camera-field-select");f.focus({preventScroll:!0}),f.scrollIntoView({block:"nearest"})}),{showDevice(){o!==2&&(l(1),a.matches||(s[o].scrollTop=0))},setLanguage(c){let[h,u,f,d,g,_,m]=jc[c]||jc.en,p={config:u,devices:f,coverage:d,display:g,acoustic:_,adjustCamera:m};t.setAttribute("aria-label",h),i.querySelectorAll("[data-sidebar-copy]").forEach(b=>{b.textContent=p[b.dataset.sidebarCopy]})}}}var Qn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ih=0,Fl=1,Dh=2;var Ol=1,La=2,Mn=3,Ln=0,kt=1,Ut=2,Fn=0,pi=1,Bl=2,zl=3,kl=4,Lh=5,$n=100,Nh=101,Uh=102,Fh=103,Oh=104,Bh=200,zh=201,kh=202,Vh=203,ia=204,sa=205,Hh=206,Gh=207,Wh=208,Xh=209,qh=210,Yh=211,$h=212,Zh=213,Jh=214,Na=0,Ua=1,Fa=2,mi=3,Oa=4,Ba=5,za=6,ka=7,Vl=0,Kh=1,jh=2,On=0,Qh=1,eu=2,tu=3,Va=4,nu=5,iu=6,su=7;var Hl=300,bi=301,Ei=302,Ha=303,Ga=304,fr=306,ra=1e3,Yn=1001,aa=1002,an=1003,ru=1004;var pr=1005;var pn=1006,Wa=1007;var ti=1008;var gn=1009,Gl=1010,Wl=1011,us=1012,Xa=1013,ni=1014,bn=1015,ds=1016,qa=1017,Ya=1018,fs=1020,Xl=35902,ql=35899,Yl=1021,$l=1022,cn=1023,es=1026,ps=1027,Zl=1028,$a=1029,Jl=1030,Za=1031;var Ja=1033,mr=33776,gr=33777,_r=33778,xr=33779,Ka=35840,ja=35841,Qa=35842,eo=35843,to=36196,no=37492,io=37496,so=37808,ro=37809,ao=37810,oo=37811,lo=37812,co=37813,ho=37814,uo=37815,fo=37816,po=37817,mo=37818,go=37819,_o=37820,xo=37821,yo=36492,vo=36494,So=36495,Mo=36283,bo=36284,Eo=36285,wo=36286;var Us=2300,oa=2301,na=2302,El=2400,wl=2401,Tl=2402;var au=3200,ou=3201;var Kl=0,lu=1,Bn="",Ct="srgb",gi="srgb-linear",Fs="linear",$e="srgb";var fi=7680;var Al=519,cu=512,hu=513,uu=514,jl=515,du=516,fu=517,pu=518,mu=519,Cl=35044;var Ql="300 es",fn=2e3,Os=2001;var yn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eh=1234567,Is=Math.PI/180,ts=180/Math.PI;function wi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function Be(i,e,t){return Math.max(e,Math.min(t,i))}function ec(i,e){return(i%e+e)%e}function tf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function nf(i,e,t){return i!==e?(t-i)/(e-i):0}function Ds(i,e,t){return(1-t)*i+t*e}function sf(i,e,t,n){return Ds(i,e,1-Math.exp(-t*n))}function rf(i,e=1){return e-Math.abs(ec(i,e*2)-e)}function af(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function of(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function lf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function cf(i,e){return i+Math.random()*(e-i)}function hf(i){return i*(.5-Math.random())}function uf(i){i!==void 0&&(eh=i);let e=eh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function df(i){return i*Is}function ff(i){return i*ts}function pf(i){return(i&i-1)===0&&i!==0}function mf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function gf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _f(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ki(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var tc={DEG2RAD:Is,RAD2DEG:ts,generateUUID:wi,clamp:Be,euclideanModulo:ec,mapLinear:tf,inverseLerp:nf,lerp:Ds,damp:sf,pingpong:rf,smoothstep:af,smootherstep:of,randInt:lf,randFloat:cf,randFloatSpread:hf,seededRandom:uf,degToRad:df,radToDeg:ff,isPowerOfTwo:pf,ceilPowerOfTwo:mf,floorPowerOfTwo:gf,setQuaternionFromProperEuler:_f,normalize:zt,denormalize:Ki},le=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-o,p=l*f+c*d+h*g+u*_,b=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){let C=Math.sqrt(E),R=Math.atan2(C,p*b);m=Math.sin(m*R)/C,o=Math.sin(o*R)/C}let v=o*b;if(l=l*m+f*v,c=c*m+d*v,h=h*m+g*v,u=u*m+_*v,m===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-o*d,e[t+2]=c*g+h*d+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(th.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jo.copy(this).projectOnVector(e),this.sub(jo)}reflect(e){return this.sub(jo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jo=new T,th=new Gt,Ue=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],b=s[1],E=s[4],v=s[7],C=s[2],R=s[5],P=s[8];return r[0]=a*_+o*b+l*C,r[3]=a*m+o*E+l*R,r[6]=a*p+o*v+l*P,r[1]=c*_+h*b+u*C,r[4]=c*m+h*E+u*R,r[7]=c*p+h*v+u*P,r[2]=f*_+d*b+g*C,r[5]=f*m+d*E+g*R,r[8]=f*p+d*v+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=t*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Qo.makeScale(e,t)),this}rotate(e){return this.premultiply(Qo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Qo=new Ue;function nc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gu(){let i=Bs("canvas");return i.style.display="block",i}var nh={};function ns(i){i in nh||(nh[i]=!0,console.warn(i))}function _u(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ih=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sh=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xf(){let i={enabled:!0,workingColorSpace:gi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===$e&&(s.r=Dn(s.r),s.g=Dn(s.g),s.b=Dn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===$e&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bn?Fs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ns("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ns("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[gi]:{primaries:e,whitePoint:n,transfer:Fs,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:n,transfer:$e,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),i}var We=xf();function Dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ji(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var zi,la=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zi===void 0&&(zi=Bs("canvas")),zi.width=e.width,zi.height=e.height;let s=zi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=zi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Bs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Dn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Dn(t[n]/255)*255):t[n]=Dn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},yf=0,is=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=wi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(el(s[a].image)):r.push(el(s[a]))}else r=el(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function el(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?la.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var vf=0,tl=new T,Wt=class i extends yn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Yn,s=Yn,r=pn,a=ti,o=cn,l=gn,c=i.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=wi(),this.name="",this.source=new is(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(tl).x}get height(){return this.source.getSize(tl).y}get depth(){return this.source.getSize(tl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ra:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ra:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Hl;Wt.DEFAULT_ANISOTROPY=1;var dt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,v=(d+1)/2,C=(p+1)/2,R=(h+f)/4,P=(u+_)/4,N=(g+m)/4;return E>v&&E>C?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=R/n,r=P/n):v>C?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=R/s,r=N/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=P/r,s=N/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this.w=Be(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this.w=Be(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ca=class extends yn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Wt(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new is(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends ca{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},zs=class extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ha=class extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zn=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lr.copy(n.boundingBox)),Lr.applyMatrix4(e.matrixWorld),this.union(Lr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),Nr.subVectors(this.max,ws),ki.subVectors(e.a,ws),Vi.subVectors(e.b,ws),Hi.subVectors(e.c,ws),kn.subVectors(Vi,ki),Vn.subVectors(Hi,Vi),ci.subVectors(ki,Hi);let t=[0,-kn.z,kn.y,0,-Vn.z,Vn.y,0,-ci.z,ci.y,kn.z,0,-kn.x,Vn.z,0,-Vn.x,ci.z,0,-ci.x,-kn.y,kn.x,0,-Vn.y,Vn.x,0,-ci.y,ci.x,0];return!nl(t,ki,Vi,Hi,Nr)||(t=[1,0,0,0,1,0,0,0,1],!nl(t,ki,Vi,Hi,Nr))?!1:(Ur.crossVectors(kn,Vn),t=[Ur.x,Ur.y,Ur.z],nl(t,ki,Vi,Hi,Nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},An=[new T,new T,new T,new T,new T,new T,new T,new T],hn=new T,Lr=new Zn,ki=new T,Vi=new T,Hi=new T,kn=new T,Vn=new T,ci=new T,ws=new T,Nr=new T,Ur=new T,hi=new T;function nl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){hi.fromArray(i,r);let o=s.x*Math.abs(hi.x)+s.y*Math.abs(hi.y)+s.z*Math.abs(hi.z),l=e.dot(hi),c=t.dot(hi),h=n.dot(hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Sf=new Zn,Ts=new T,il=new T,_i=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Sf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ts.subVectors(e,this.center);let t=Ts.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ts,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ts.copy(e.center).add(il)),this.expandByPoint(Ts.copy(e.center).sub(il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Cn=new T,sl=new T,Fr=new T,Hn=new T,rl=new T,Or=new T,al=new T,Jn=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){sl.copy(e).add(t).multiplyScalar(.5),Fr.copy(t).sub(e).normalize(),Hn.copy(this.origin).sub(sl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Fr),o=Hn.dot(this.direction),l=-Hn.dot(Fr),c=Hn.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(sl).addScaledVector(Fr,f),d}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);let n=Cn.dot(this.direction),s=Cn.dot(Cn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,n,s,r){rl.subVectors(t,e),Or.subVectors(n,e),al.crossVectors(rl,Or);let a=this.direction.dot(al),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,e);let l=o*this.direction.dot(Or.crossVectors(Hn,Or));if(l<0)return null;let c=o*this.direction.dot(rl.cross(Hn));if(c<0||l+c>a)return null;let h=-o*Hn.dot(al);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,f,d,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,f,d,g,_,m)}set(e,t,n,s,r,a,o,l,c,h,u,f,d,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Gi.setFromMatrixColumn(e,0).length(),r=1/Gi.setFromMatrixColumn(e,1).length(),a=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,d=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f-_*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,d=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){let f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mf,e,bf)}lookAt(e,t,n){let s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Gn.crossVectors(n,$t),Gn.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Gn.crossVectors(n,$t)),Gn.normalize(),Br.crossVectors($t,Gn),s[0]=Gn.x,s[4]=Br.x,s[8]=$t.x,s[1]=Gn.y,s[5]=Br.y,s[9]=$t.y,s[2]=Gn.z,s[6]=Br.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],E=n[7],v=n[11],C=n[15],R=s[0],P=s[4],N=s[8],M=s[12],S=s[1],D=s[5],O=s[9],k=s[13],G=s[2],q=s[6],W=s[10],ie=s[14],V=s[3],oe=s[7],de=s[11],we=s[15];return r[0]=a*R+o*S+l*G+c*V,r[4]=a*P+o*D+l*q+c*oe,r[8]=a*N+o*O+l*W+c*de,r[12]=a*M+o*k+l*ie+c*we,r[1]=h*R+u*S+f*G+d*V,r[5]=h*P+u*D+f*q+d*oe,r[9]=h*N+u*O+f*W+d*de,r[13]=h*M+u*k+f*ie+d*we,r[2]=g*R+_*S+m*G+p*V,r[6]=g*P+_*D+m*q+p*oe,r[10]=g*N+_*O+m*W+p*de,r[14]=g*M+_*k+m*ie+p*we,r[3]=b*R+E*S+v*G+C*V,r[7]=b*P+E*D+v*q+C*oe,r[11]=b*N+E*O+v*W+C*de,r[15]=b*M+E*k+v*ie+C*we,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*d-n*l*d)+_*(+t*l*d-t*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+m*(+t*c*u-t*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+p*(-s*o*h-t*l*u+t*o*f+s*a*u-n*a*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],b=u*m*c-_*f*c+_*l*d-o*m*d-u*l*p+o*f*p,E=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,v=h*_*c-g*u*c+g*o*d-a*_*d-h*o*p+a*u*p,C=g*u*l-h*_*l-g*o*f+a*_*f+h*o*m-a*u*m,R=t*b+n*E+s*v+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/R;return e[0]=b*P,e[1]=(_*f*r-u*m*r-_*s*d+n*m*d+u*s*p-n*f*p)*P,e[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*p+n*l*p)*P,e[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*d-n*l*d)*P,e[4]=E*P,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*p+t*f*p)*P,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*P,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*d+t*l*d)*P,e[8]=v*P,e[9]=(g*u*r-h*_*r-g*n*d+t*_*d+h*n*p-t*u*p)*P,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*p+t*o*p)*P,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*d-t*o*d)*P,e[12]=C*P,e[13]=(h*_*s-g*u*s+g*n*f-t*_*f-h*n*m+t*u*m)*P,e[14]=(g*o*s-a*_*s-g*n*l+t*_*l+a*n*m-t*o*m)*P,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*f+t*o*f)*P,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,_=a*h,m=a*u,p=o*u,b=l*c,E=l*h,v=l*u,C=n.x,R=n.y,P=n.z;return s[0]=(1-(_+p))*C,s[1]=(d+v)*C,s[2]=(g-E)*C,s[3]=0,s[4]=(d-v)*R,s[5]=(1-(f+p))*R,s[6]=(m+b)*R,s[7]=0,s[8]=(g+E)*P,s[9]=(m-b)*P,s[10]=(1-(f+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Gi.set(s[0],s[1],s[2]).length(),a=Gi.set(s[4],s[5],s[6]).length(),o=Gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],un.copy(this);let c=1/r,h=1/a,u=1/o;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,t.setFromRotationMatrix(un),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=fn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===fn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Os)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=fn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===fn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Os)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Gi=new T,un=new lt,Mf=new T(0,0,0),bf=new T(1,1,1),Gn=new T,Br=new T,$t=new T,rh=new lt,ah=new Gt,Kt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ah.setFromEuler(this),this.setFromQuaternion(ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kt.DEFAULT_ORDER="XYZ";var ss=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ef=0,oh=new T,Wi=new Gt,Rn=new lt,zr=new T,As=new T,wf=new T,Tf=new Gt,lh=new T(1,0,0),ch=new T(0,1,0),hh=new T(0,0,1),uh={type:"added"},Af={type:"removed"},Xi={type:"childadded",child:null},ol={type:"childremoved",child:null},Rt=class i extends yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new T,t=new Kt,n=new Gt,s=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ue}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(lh,e)}rotateY(e){return this.rotateOnAxis(ch,e)}rotateZ(e){return this.rotateOnAxis(hh,e)}translateOnAxis(e,t){return oh.copy(e).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lh,e)}translateY(e){return this.translateOnAxis(ch,e)}translateZ(e){return this.translateOnAxis(hh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zr.copy(e):zr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(As,zr,this.up):Rn.lookAt(zr,As,this.up),this.quaternion.setFromRotationMatrix(Rn),s&&(Rn.extractRotation(s.matrixWorld),Wi.setFromRotationMatrix(Rn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uh),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Af),ol.child=e,this.dispatchEvent(ol),ol.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uh),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,e,wf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,Tf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Rt.DEFAULT_UP=new T(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dn=new T,Pn=new T,ll=new T,In=new T,qi=new T,Yi=new T,dh=new T,cl=new T,hl=new T,ul=new T,dl=new dt,fl=new dt,pl=new dt,qn=class i{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),dn.subVectors(e,t),s.cross(dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){dn.subVectors(s,t),Pn.subVectors(n,t),ll.subVectors(e,t);let a=dn.dot(dn),o=dn.dot(Pn),l=dn.dot(ll),c=Pn.dot(Pn),h=Pn.dot(ll),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,In.x),l.addScaledVector(a,In.y),l.addScaledVector(o,In.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return dl.setScalar(0),fl.setScalar(0),pl.setScalar(0),dl.fromBufferAttribute(e,t),fl.fromBufferAttribute(e,n),pl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(dl,r.x),a.addScaledVector(fl,r.y),a.addScaledVector(pl,r.z),a}static isFrontFacing(e,t,n,s){return dn.subVectors(n,t),Pn.subVectors(e,t),dn.cross(Pn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),dn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;qi.subVectors(s,n),Yi.subVectors(r,n),cl.subVectors(e,n);let l=qi.dot(cl),c=Yi.dot(cl);if(l<=0&&c<=0)return t.copy(n);hl.subVectors(e,s);let h=qi.dot(hl),u=Yi.dot(hl);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(qi,a);ul.subVectors(e,r);let d=qi.dot(ul),g=Yi.dot(ul);if(g>=0&&d<=g)return t.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Yi,o);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return dh.subVectors(r,s),o=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(dh,o);let p=1/(m+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(qi,a).addScaledVector(Yi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},kr={h:0,s:0,l:0};function ml(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=We.workingColorSpace){if(e=ec(e,1),t=Be(t,0,1),n=Be(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ml(a,r,e+1/3),this.g=ml(a,r,e),this.b=ml(a,r,e-1/3)}return We.colorSpaceToWorking(this,s),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){let n=xu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dn(e.r),this.g=Dn(e.g),this.b=Dn(e.b),this}copyLinearToSRGB(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return We.workingToColorSpace(Lt.copy(this),e),Math.round(Be(Lt.r*255,0,255))*65536+Math.round(Be(Lt.g*255,0,255))*256+Math.round(Be(Lt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(Lt.copy(this),t);let n=Lt.r,s=Lt.g,r=Lt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Ct){We.workingToColorSpace(Lt.copy(this),e);let t=Lt.r,n=Lt.g,s=Lt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(kr);let n=Ds(Wn.h,kr.h,t),s=Ds(Wn.s,kr.s,t),r=Ds(Wn.l,kr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Lt=new ke;ke.NAMES=xu;var Cf=0,Nn=class extends yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=pi,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ia,this.blendDst=sa,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ia&&(n.blendSrc=this.blendSrc),this.blendDst!==sa&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},on=class extends Nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var yt=new T,Vr=new le,Rf=0,Jt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cl,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.applyMatrix3(e),this.setXY(t,Vr.x,Vr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),s=zt(s,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cl&&(e.usage=this.usage),e}};var ks=class extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Vs=class extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var it=class extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Pf=0,rn=new lt,gl=new Rt,$i=new T,Zt=new Zn,Cs=new Zn,At=new T,xt=class i extends yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nc(e)?Vs:ks)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return gl.lookAt(e),gl.updateMatrix(),this.applyMatrix4(gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new it(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Zt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){let n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Cs.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(Zt.min,Cs.min),Zt.expandByPoint(At),At.addVectors(Zt.max,Cs.max),Zt.expandByPoint(At)):(Zt.expandByPoint(Cs.min),Zt.expandByPoint(Cs.max))}Zt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)At.fromBufferAttribute(o,c),l&&($i.fromBufferAttribute(e,c),At.add($i)),s=Math.max(s,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new T,l[N]=new T;let c=new T,h=new T,u=new T,f=new le,d=new le,g=new le,_=new T,m=new T;function p(N,M,S){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,N),d.fromBufferAttribute(r,M),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(D),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(D),o[N].add(_),o[M].add(_),o[S].add(_),l[N].add(m),l[M].add(m),l[S].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let N=0,M=b.length;N<M;++N){let S=b[N],D=S.start,O=S.count;for(let k=D,G=D+O;k<G;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let E=new T,v=new T,C=new T,R=new T;function P(N){C.fromBufferAttribute(s,N),R.copy(C);let M=o[N];E.copy(M),E.sub(C.multiplyScalar(C.dot(M))).normalize(),v.crossVectors(R,M);let D=v.dot(l[N])<0?-1:1;a.setXYZW(N,E.x,E.y,E.z,D)}for(let N=0,M=b.length;N<M;++N){let S=b[N],D=S.start,O=S.count;for(let k=D,G=D+O;k<G;k+=3)P(e.getX(k+0)),P(e.getX(k+1)),P(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new Jt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fh=new lt,ui=new Jn,Hr=new _i,ph=new T,Gr=new T,Wr=new T,Xr=new T,_l=new T,qr=new T,mh=new T,Yr=new T,ft=class extends Rt{constructor(e=new xt,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(_l.fromBufferAttribute(u,e),a?qr.addScaledVector(_l,h):qr.addScaledVector(_l.sub(t),h))}t.add(qr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(r),ui.copy(e.ray).recast(e.near),!(Hr.containsPoint(ui.origin)===!1&&(ui.intersectSphere(Hr,ph)===null||ui.origin.distanceToSquared(ph)>(e.far-e.near)**2))&&(fh.copy(r).invert(),ui.copy(e.ray).applyMatrix4(fh),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=b,C=E;v<C;v+=3){let R=o.getX(v),P=o.getX(v+1),N=o.getX(v+2);s=$r(this,p,e,n,c,h,u,R,P,N),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let b=o.getX(m),E=o.getX(m+1),v=o.getX(m+2);s=$r(this,a,e,n,c,h,u,b,E,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=b,C=E;v<C;v+=3){let R=v,P=v+1,N=v+2;s=$r(this,p,e,n,c,h,u,R,P,N),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let b=m,E=m+1,v=m+2;s=$r(this,a,e,n,c,h,u,b,E,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function If(i,e,t,n,s,r,a,o){let l;if(e.side===kt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ln,o),l===null)return null;Yr.copy(o),Yr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Yr);return c<t.near||c>t.far?null:{distance:c,point:Yr.clone(),object:i}}function $r(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Gr),i.getVertexPosition(l,Wr),i.getVertexPosition(c,Xr);let h=If(i,e,t,n,Gr,Wr,Xr,mh);if(h){let u=new T;qn.getBarycoord(mh,Gr,Wr,Xr,u),s&&(h.uv=qn.getInterpolatedAttribute(s,o,l,c,u,new le)),r&&(h.uv1=qn.getInterpolatedAttribute(r,o,l,c,u,new le)),a&&(h.normal=qn.getInterpolatedAttribute(a,o,l,c,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new T,materialIndex:0};qn.getNormal(Gr,Wr,Xr,f.normal),h.face=f,h.barycoord=u}return h}var Sn=class i extends xt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(u,2));function g(_,m,p,b,E,v,C,R,P,N,M){let S=v/P,D=C/N,O=v/2,k=C/2,G=R/2,q=P+1,W=N+1,ie=0,V=0,oe=new T;for(let de=0;de<W;de++){let we=de*D-k;for(let Ve=0;Ve<q;Ve++){let Qe=Ve*S-O;oe[_]=Qe*b,oe[m]=we*E,oe[p]=G,c.push(oe.x,oe.y,oe.z),oe[_]=0,oe[m]=0,oe[p]=R>0?1:-1,h.push(oe.x,oe.y,oe.z),u.push(Ve/P),u.push(1-de/N),ie+=1}}for(let de=0;de<N;de++)for(let we=0;we<P;we++){let Ve=f+we+q*de,Qe=f+we+q*(de+1),rt=f+(we+1)+q*(de+1),qe=f+(we+1)+q*de;l.push(Ve,Qe,qe),l.push(Qe,rt,qe),V+=6}o.addGroup(d,V,M),d+=V,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ti(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ft(i){let e={};for(let t=0;t<i.length;t++){let n=Ti(i[t]);for(let s in n)e[s]=n[s]}return e}function Df(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ic(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}var yu={clone:Ti,merge:Ft},Lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends Nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lf,this.fragmentShader=Nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=Df(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Hs=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xn=new T,gh=new le,_h=new le,Nt=class extends Hs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ts*2*Math.atan(Math.tan(Is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,gh,_h),t.subVectors(_h,gh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Is*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Zi=-90,Ji=1,ua=class extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Nt(Zi,Ji,e,t);s.layers=this.layers,this.add(s);let r=new Nt(Zi,Ji,e,t);r.layers=this.layers,this.add(r);let a=new Nt(Zi,Ji,e,t);a.layers=this.layers,this.add(a);let o=new Nt(Zi,Ji,e,t);o.layers=this.layers,this.add(o);let l=new Nt(Zi,Ji,e,t);l.layers=this.layers,this.add(l);let c=new Nt(Zi,Ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Os)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Gs=class extends Wt{constructor(e=[],t=bi,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},da=class extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Gs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Sn(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:Fn});r.uniforms.tEquirect.value=t;let a=new ft(s,r),o=t.minFilter;return t.minFilter===ti&&(t.minFilter=pn),new ua(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Je=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Uf={type:"move"},rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Uf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Je;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Ws=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kt,this.environmentIntensity=1,this.environmentRotation=new Kt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var xl=new T,Ff=new T,Of=new Ue,vt=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=xl.subVectors(n,t).cross(Ff.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(xl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Of.getNormalMatrix(e),s=this.coplanarPoint(xl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},di=new _i,Bf=new le(.5,.5),Zr=new T,as=class{constructor(e=new vt,t=new vt,n=new vt,s=new vt,r=new vt,a=new vt){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],b=r[12],E=r[13],v=r[14],C=r[15];if(s[0].setComponents(c-a,d-h,p-g,C-b).normalize(),s[1].setComponents(c+a,d+h,p+g,C+b).normalize(),s[2].setComponents(c+o,d+u,p+_,C+E).normalize(),s[3].setComponents(c-o,d-u,p-_,C-E).normalize(),n)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,d-f,p-m,C-v).normalize();else if(s[4].setComponents(c-l,d-f,p-m,C-v).normalize(),t===fn)s[5].setComponents(c+l,d+f,p+m,C+v).normalize();else if(t===Os)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(e){di.center.set(0,0,0);let t=Bf.distanceTo(e.center);return di.radius=.7071067811865476+t,di.applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Zr.x=s.normal.x>0?e.max.x:e.min.x,Zr.y=s.normal.y>0?e.max.y:e.min.y,Zr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ln=class extends Nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},fa=new T,pa=new T,xh=new lt,Rs=new Jn,Jr=new _i,yl=new T,yh=new T,xi=class extends Rt{constructor(e=new xt,t=new ln){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)fa.fromBufferAttribute(t,s-1),pa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=fa.distanceTo(pa);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(s),Jr.radius+=r,e.ray.intersectsSphere(Jr)===!1)return;xh.copy(s).invert(),Rs.copy(e.ray).applyMatrix4(xh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){let p=h.getX(_),b=h.getX(_+1),E=Kr(this,e,Rs,l,p,b,_);E&&t.push(E)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(d),p=Kr(this,e,Rs,l,_,m,g-1);p&&t.push(p)}}else{let d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){let p=Kr(this,e,Rs,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=Kr(this,e,Rs,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Kr(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(fa.fromBufferAttribute(o,s),pa.fromBufferAttribute(o,r),t.distanceSqToSegment(fa,pa,yl,yh)>n)return;yl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(yl);if(!(c<e.near||c>e.far))return{distance:c,point:yh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var vh=new T,Sh=new T,Xs=class extends xi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)vh.fromBufferAttribute(t,s),Sh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+vh.distanceTo(Sh);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Un=class extends xi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};var qs=class extends Wt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ys=class extends Wt{constructor(e,t,n=ni,s,r,a,o=an,l=an,c,h=es,u=1){if(h!==es&&h!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new is(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},$s=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Zs=class i extends xt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,_=[],m=n/2,p=0;b(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(f,3)),this.setAttribute("uv",new it(d,2));function b(){let v=new T,C=new T,R=0,P=(t-e)/n;for(let N=0;N<=r;N++){let M=[],S=N/r,D=S*(t-e)+e;for(let O=0;O<=s;O++){let k=O/s,G=k*l+o,q=Math.sin(G),W=Math.cos(G);C.x=D*q,C.y=-S*n+m,C.z=D*W,u.push(C.x,C.y,C.z),v.set(q,P,W).normalize(),f.push(v.x,v.y,v.z),d.push(k,1-S),M.push(g++)}_.push(M)}for(let N=0;N<s;N++)for(let M=0;M<r;M++){let S=_[M][N],D=_[M+1][N],O=_[M+1][N+1],k=_[M][N+1];(e>0||M!==0)&&(h.push(S,D,k),R+=3),(t>0||M!==r-1)&&(h.push(D,O,k),R+=3)}c.addGroup(p,R,0),p+=R}function E(v){let C=g,R=new le,P=new T,N=0,M=v===!0?e:t,S=v===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*S,0),f.push(0,S,0),d.push(.5,.5),g++;let D=g;for(let O=0;O<=s;O++){let G=O/s*l+o,q=Math.cos(G),W=Math.sin(G);P.x=M*W,P.y=m*S,P.z=M*q,u.push(P.x,P.y,P.z),f.push(0,S,0),R.x=q*.5+.5,R.y=W*.5*S+.5,d.push(R.x,R.y),g++}for(let O=0;O<s;O++){let k=C+O,G=D+O;v===!0?h.push(G,G+1,k):h.push(G+1,G,k),N+=3}c.addGroup(p,N,v===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var jt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new le:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new T,s=[],r=[],a=[],o=new T,l=new lt;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new T)}r[0]=new T,a[0]=new T;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Be(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Be(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},os=class extends jt{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new le){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ma=class extends os{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function sc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var jr=new T,vl=new sc,Sl=new sc,Ml=new sc,ga=class extends jt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new T){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(jr.subVectors(s[0],s[1]).add(s[0]),c=jr);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(jr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=jr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),vl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),Sl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),Ml.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(vl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Sl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ml.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(vl.calc(l),Sl.calc(l),Ml.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new T().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Mh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function zf(i,e){let t=1-i;return t*t*e}function kf(i,e){return 2*(1-i)*i*e}function Vf(i,e){return i*i*e}function Ls(i,e,t,n){return zf(i,e)+kf(i,t)+Vf(i,n)}function Hf(i,e){let t=1-i;return t*t*t*e}function Gf(i,e){let t=1-i;return 3*t*t*i*e}function Wf(i,e){return 3*(1-i)*i*i*e}function Xf(i,e){return i*i*i*e}function Ns(i,e,t,n,s){return Hf(i,e)+Gf(i,t)+Wf(i,n)+Xf(i,s)}var Js=class extends jt{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ns(e,s.x,r.x,a.x,o.x),Ns(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_a=class extends jt{constructor(e=new T,t=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new T){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ns(e,s.x,r.x,a.x,o.x),Ns(e,s.y,r.y,a.y,o.y),Ns(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ks=class extends jt{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends jt{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},js=class extends jt{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ls(e,s.x,r.x,a.x),Ls(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ya=class extends jt{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ls(e,s.x,r.x,a.x),Ls(e,s.y,r.y,a.y),Ls(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qs=class extends jt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Mh(o,l.x,c.x,h.x,u.x),Mh(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},bh=Object.freeze({__proto__:null,ArcCurve:ma,CatmullRomCurve3:ga,CubicBezierCurve:Js,CubicBezierCurve3:_a,EllipseCurve:os,LineCurve:Ks,LineCurve3:xa,QuadraticBezierCurve:js,QuadraticBezierCurve3:ya,SplineCurve:Qs}),va=class extends jt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new bh[s.type]().fromJSON(s))}return this}},er=class extends va{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ks(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new js(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Js(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Qs(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new os(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ls=class extends er{constructor(e){super(e),this.uuid=wi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new er().fromJSON(s))}return this}};function qf(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=vu(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Kf(i,e,r,t)),i.length>80*t){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=t;f<s;f+=t){let d=i[f],g=i[f+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return tr(r,a,t,o,l,c,0),a}function vu(i,e,t,n,s){let r;if(s===lp(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Eh(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Eh(a/n|0,i[a],i[a+1],r);return r&&cs(r,r.next)&&(ir(r),r=r.next),r}function yi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(cs(t,t.next)||ut(t.prev,t,t.next)===0)){if(ir(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function tr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&np(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?$f(i,n,s,r):Yf(i)){e.push(l.i,i.i,c.i),ir(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Zf(yi(i),e),tr(i,e,t,n,s,r,2)):a===2&&Jf(i,e,t,n,s,r):tr(yi(i),e,t,n,s,r,1);break}}}function Yf(i){let e=i.prev,t=i,n=i.next;if(ut(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),d=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Ps(s,o,r,l,a,c,g.x,g.y)&&ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $f(i,e,t,n){let s=i.prev,r=i,a=i.next;if(ut(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=Math.min(o,l,c),g=Math.min(h,u,f),_=Math.max(o,l,c),m=Math.max(h,u,f),p=Rl(d,g,e,t,n),b=Rl(_,m,e,t,n),E=i.prevZ,v=i.nextZ;for(;E&&E.z>=p&&v&&v.z<=b;){if(E.x>=d&&E.x<=_&&E.y>=g&&E.y<=m&&E!==s&&E!==a&&Ps(o,h,l,u,c,f,E.x,E.y)&&ut(E.prev,E,E.next)>=0||(E=E.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Ps(o,h,l,u,c,f,v.x,v.y)&&ut(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;E&&E.z>=p;){if(E.x>=d&&E.x<=_&&E.y>=g&&E.y<=m&&E!==s&&E!==a&&Ps(o,h,l,u,c,f,E.x,E.y)&&ut(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;v&&v.z<=b;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Ps(o,h,l,u,c,f,v.x,v.y)&&ut(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Zf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!cs(n,s)&&Mu(n,t,t.next,s)&&nr(n,s)&&nr(s,n)&&(e.push(n.i,t.i,s.i),ir(t),ir(t.next),t=i=s),t=t.next}while(t!==i);return yi(t)}function Jf(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&rp(a,o)){let l=bu(a,o);a=yi(a,a.next),l=yi(l,l.next),tr(a,e,t,n,s,r,0),tr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Kf(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=vu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(sp(c))}s.sort(jf);for(let r=0;r<s.length;r++)t=Qf(s[r],t);return t}function jf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Qf(i,e){let t=ep(i,e);if(!t)return e;let n=bu(t,i);return yi(n,n.next),yi(t,t.next)}function ep(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(cs(i,t))return t;do{if(cs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Su(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);nr(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&tp(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function tp(i,e){return ut(i.prev,i,e.prev)<0&&ut(e.next,i,i.next)<0}function np(i,e,t,n){let s=i;do s.z===0&&(s.z=Rl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ip(s)}function ip(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Rl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function sp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Su(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ps(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Su(i,e,t,n,s,r,a,o)}function rp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ap(i,e)&&(nr(i,e)&&nr(e,i)&&op(i,e)&&(ut(i.prev,i,e.prev)||ut(i,e.prev,e))||cs(i,e)&&ut(i.prev,i,i.next)>0&&ut(e.prev,e,e.next)>0)}function ut(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function cs(i,e){return i.x===e.x&&i.y===e.y}function Mu(i,e,t,n){let s=ea(ut(i,e,t)),r=ea(ut(i,e,n)),a=ea(ut(t,n,i)),o=ea(ut(t,n,e));return!!(s!==r&&a!==o||s===0&&Qr(i,t,e)||r===0&&Qr(i,n,e)||a===0&&Qr(t,i,n)||o===0&&Qr(t,e,n))}function Qr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ea(i){return i>0?1:i<0?-1:0}function ap(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Mu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function nr(i,e){return ut(i.prev,i,i.next)<0?ut(i,e,i.next)>=0&&ut(i,i.prev,e)>=0:ut(i,e,i.prev)<0||ut(i,i.next,e)<0}function op(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function bu(i,e){let t=Pl(i.i,i.x,i.y),n=Pl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Eh(i,e,t,n){let s=Pl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ir(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Pl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function lp(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Il=class{static triangulate(e,t,n=2){return qf(e,t,n)}},Qi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];wh(e),Th(n,e);let a=e.length;t.forEach(wh);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Th(n,t[l]);let o=Il.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function wh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Th(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var vi=class i extends xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let b=p*f-a;for(let E=0;E<c;E++){let v=E*u-r;g.push(v,-b,0),_.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let E=b+c*p,v=b+c*(p+1),C=b+1+c*(p+1),R=b+1+c*p;d.push(E,v,R),d.push(v,C,R)}this.setIndex(d),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var sr=class i extends xt{constructor(e=new ls([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new it(s,3)),this.setAttribute("normal",new it(r,3)),this.setAttribute("uv",new it(a,2));function c(h){let u=s.length/3,f=h.extractPoints(t),d=f.shape,g=f.holes;Qi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let b=g[m];Qi.isClockWise(b)===!0&&(g[m]=b.reverse())}let _=Qi.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let b=g[m];d=d.concat(b)}for(let m=0,p=d.length;m<p;m++){let b=d[m];s.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let m=0,p=_.length;m<p;m++){let b=_[m],E=b[0]+u,v=b[1]+u,C=b[2]+u;n.push(E,v,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return cp(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function cp(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var rr=class i extends xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new T,u=new T,f=new T;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let _=g/s*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,b=(s+1)*d+g;a.push(_,m,b),a.push(m,p,b)}this.setIndex(a),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Si=class extends Nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kl,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Sa=class extends Nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ma=class extends Nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ta(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function hp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Mi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ba=class extends Mi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:El,endingEnd:El}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case wl:r=e,o=2*t-n;break;case Tl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wl:a=e,l=2*n-t;break;case Tl:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,b=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,E=(-1-d)*m+(1.5+d)*_+.5*g,v=d*m-d*_;for(let C=0;C!==o;++C)r[C]=p*a[h+C]+b*a[c+C]+E*a[l+C]+v*a[u+C];return r}},Ea=class extends Mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},wa=class extends Mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Qt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ta(t,this.TimeBufferType),this.values=ta(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ta(e.times,Array),values:ta(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ea(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ba(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Us:t=this.InterpolantFactoryMethodDiscrete;break;case oa:t=this.InterpolantFactoryMethodLinear;break;case na:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Us;case this.InterpolantFactoryMethodLinear:return oa;case this.InterpolantFactoryMethodSmooth:return na}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&hp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===na,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Qt.prototype.ValueTypeName="";Qt.prototype.TimeBufferType=Float32Array;Qt.prototype.ValueBufferType=Float32Array;Qt.prototype.DefaultInterpolation=oa;var Kn=class extends Qt{constructor(e,t,n){super(e,t,n)}};Kn.prototype.ValueTypeName="bool";Kn.prototype.ValueBufferType=Array;Kn.prototype.DefaultInterpolation=Us;Kn.prototype.InterpolantFactoryMethodLinear=void 0;Kn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ta=class extends Qt{constructor(e,t,n,s){super(e,t,n,s)}};Ta.prototype.ValueTypeName="color";var Aa=class extends Qt{constructor(e,t,n,s){super(e,t,n,s)}};Aa.prototype.ValueTypeName="number";var Ca=class extends Mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Gt.slerpFlat(r,0,a,c-o,a,c,l);return r}},ar=class extends Qt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ca(this.times,this.values,this.getValueSize(),e)}};ar.prototype.ValueTypeName="quaternion";ar.prototype.InterpolantFactoryMethodSmooth=void 0;var jn=class extends Qt{constructor(e,t,n){super(e,t,n)}};jn.prototype.ValueTypeName="string";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=Us;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends Qt{constructor(e,t,n,s){super(e,t,n,s)}};Ra.prototype.ValueTypeName="vector";var Pa=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Eu=new Pa,Ia=class{constructor(e){this.manager=e!==void 0?e:Eu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ia.DEFAULT_MATERIAL_NAME="__DEFAULT";var or=class extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},lr=class extends or{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},bl=new lt,Ah=new T,Ch=new T,Dl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new as,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ah.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ah),Ch.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ch),t.updateMatrixWorld(),bl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var cr=class extends Hs{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ll=class extends Dl{constructor(){super(new cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hr=class extends or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new Ll}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Da=class extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var rc="\\[\\]\\.:\\/",up=new RegExp("["+rc+"]","g"),ac="[^"+rc+"]",dp="[^"+rc.replace("\\.","")+"]",fp=/((?:WC+[\/:])*)/.source.replace("WC",ac),pp=/(WCOD+)?/.source.replace("WCOD",dp),mp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ac),gp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ac),_p=new RegExp("^"+fp+pp+mp+gp+"$"),xp=["material","materials","bones","map"],Nl=class{constructor(e,t,n){let s=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},nt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(up,"")}static parseTrackName(e){let t=_p.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);xp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};nt.Composite=Nl;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qx=new Float32Array(1);var Rh=new lt,ur=class{constructor(e,t,n=0,s=1/0){this.ray=new Jn(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ss,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Rh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rh),this}intersectObject(e,t=!0,n=[]){return Ul(e,this,n,t),n.sort(Ph),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ul(e[s],this,n,t);return n.sort(Ph),n}};function Ph(i,e){return i.distance-e.distance}function Ul(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Ul(r[a],e,t,!0)}}var hs=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Be(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Be(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var dr=class extends yn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function oc(i,e,t,n){let s=yp(n);switch(t){case Yl:return i*e;case Zl:return i*e/s.components*s.byteLength;case $a:return i*e/s.components*s.byteLength;case Jl:return i*e*2/s.components*s.byteLength;case Za:return i*e*2/s.components*s.byteLength;case $l:return i*e*3/s.components*s.byteLength;case cn:return i*e*4/s.components*s.byteLength;case Ja:return i*e*4/s.components*s.byteLength;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _r:case xr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ja:case eo:return Math.max(i,16)*Math.max(e,8)/4;case Ka:case Qa:return Math.max(i,8)*Math.max(e,8)/2;case to:case no:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case so:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ro:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ao:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case oo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case lo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case co:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ho:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case uo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case fo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case po:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case mo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case go:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case _o:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case yo:case vo:case So:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Mo:case bo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Eo:case wo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yp(i){switch(i){case gn:case Gl:return{byteLength:1,components:1};case us:case Wl:case ds:return{byteLength:2,components:1};case qa:case Ya:return{byteLength:2,components:4};case ni:case Xa:case bn:return{byteLength:4,components:1};case Xl:case ql:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function $u(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Sp(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let _=u[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bp=`#ifdef USE_ALPHAHASH
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
#endif`,Ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cp=`#ifdef USE_AOMAP
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
#endif`,Rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pp=`#ifdef USE_BATCHING
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
#endif`,Ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Np=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Up=`#ifdef USE_IRIDESCENCE
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
#endif`,Fp=`#ifdef USE_BUMPMAP
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
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Xp=`#define PI 3.141592653589793
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
} // validated`,qp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yp=`vec3 transformedNormal = objectNormal;
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
#endif`,$p=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,em=`#ifdef USE_ENVMAP
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
#endif`,tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,am=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cm=`#ifdef USE_GRADIENTMAP
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
}`,hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,um=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fm=`uniform bool receiveShadow;
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
#endif`,pm=`#ifdef USE_ENVMAP
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
#endif`,mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ym=`PhysicalMaterial material;
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
#endif`,vm=`struct PhysicalMaterial {
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
}`,Sm=`
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
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
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
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Em=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Im=`#if defined( USE_POINTS_UV )
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
#endif`,Dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Um=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Om=`#ifdef USE_MORPHTARGETS
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
#endif`,Bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,km=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wm=`#ifdef USE_NORMALMAP
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
#endif`,Xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Km=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ng=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ag=`float getShadowMask() {
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
}`,og=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lg=`#ifdef USE_SKINNING
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
#endif`,cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hg=`#ifdef USE_SKINNING
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
#endif`,ug=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mg=`#ifdef USE_TRANSMISSION
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
#endif`,gg=`#ifdef USE_TRANSMISSION
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
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mg=`uniform sampler2D t2D;
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
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`#include <common>
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
}`,Cg=`#if DEPTH_PACKING == 3200
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
}`,Rg=`#define DISTANCE
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
}`,Pg=`#define DISTANCE
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
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`uniform float scale;
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Ug=`#include <common>
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
}`,Fg=`uniform vec3 diffuse;
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
}`,Og=`#define LAMBERT
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
}`,Bg=`#define LAMBERT
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
}`,zg=`#define MATCAP
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
}`,kg=`#define MATCAP
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
}`,Vg=`#define NORMAL
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
}`,Hg=`#define NORMAL
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
}`,Gg=`#define PHONG
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
}`,Wg=`#define PHONG
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
}`,Xg=`#define STANDARD
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
}`,qg=`#define STANDARD
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
}`,Yg=`#define TOON
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
}`,$g=`#define TOON
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
}`,Zg=`uniform float size;
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
}`,Jg=`uniform vec3 diffuse;
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
}`,Kg=`#include <common>
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
}`,jg=`uniform vec3 color;
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
}`,Qg=`uniform float rotation;
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
}`,e0=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Mp,alphahash_pars_fragment:bp,alphamap_fragment:Ep,alphamap_pars_fragment:wp,alphatest_fragment:Tp,alphatest_pars_fragment:Ap,aomap_fragment:Cp,aomap_pars_fragment:Rp,batching_pars_vertex:Pp,batching_vertex:Ip,begin_vertex:Dp,beginnormal_vertex:Lp,bsdfs:Np,iridescence_fragment:Up,bumpmap_pars_fragment:Fp,clipping_planes_fragment:Op,clipping_planes_pars_fragment:Bp,clipping_planes_pars_vertex:zp,clipping_planes_vertex:kp,color_fragment:Vp,color_pars_fragment:Hp,color_pars_vertex:Gp,color_vertex:Wp,common:Xp,cube_uv_reflection_fragment:qp,defaultnormal_vertex:Yp,displacementmap_pars_vertex:$p,displacementmap_vertex:Zp,emissivemap_fragment:Jp,emissivemap_pars_fragment:Kp,colorspace_fragment:jp,colorspace_pars_fragment:Qp,envmap_fragment:em,envmap_common_pars_fragment:tm,envmap_pars_fragment:nm,envmap_pars_vertex:im,envmap_physical_pars_fragment:pm,envmap_vertex:sm,fog_vertex:rm,fog_pars_vertex:am,fog_fragment:om,fog_pars_fragment:lm,gradientmap_pars_fragment:cm,lightmap_pars_fragment:hm,lights_lambert_fragment:um,lights_lambert_pars_fragment:dm,lights_pars_begin:fm,lights_toon_fragment:mm,lights_toon_pars_fragment:gm,lights_phong_fragment:_m,lights_phong_pars_fragment:xm,lights_physical_fragment:ym,lights_physical_pars_fragment:vm,lights_fragment_begin:Sm,lights_fragment_maps:Mm,lights_fragment_end:bm,logdepthbuf_fragment:Em,logdepthbuf_pars_fragment:wm,logdepthbuf_pars_vertex:Tm,logdepthbuf_vertex:Am,map_fragment:Cm,map_pars_fragment:Rm,map_particle_fragment:Pm,map_particle_pars_fragment:Im,metalnessmap_fragment:Dm,metalnessmap_pars_fragment:Lm,morphinstance_vertex:Nm,morphcolor_vertex:Um,morphnormal_vertex:Fm,morphtarget_pars_vertex:Om,morphtarget_vertex:Bm,normal_fragment_begin:zm,normal_fragment_maps:km,normal_pars_fragment:Vm,normal_pars_vertex:Hm,normal_vertex:Gm,normalmap_pars_fragment:Wm,clearcoat_normal_fragment_begin:Xm,clearcoat_normal_fragment_maps:qm,clearcoat_pars_fragment:Ym,iridescence_pars_fragment:$m,opaque_fragment:Zm,packing:Jm,premultiplied_alpha_fragment:Km,project_vertex:jm,dithering_fragment:Qm,dithering_pars_fragment:eg,roughnessmap_fragment:tg,roughnessmap_pars_fragment:ng,shadowmap_pars_fragment:ig,shadowmap_pars_vertex:sg,shadowmap_vertex:rg,shadowmask_pars_fragment:ag,skinbase_vertex:og,skinning_pars_vertex:lg,skinning_vertex:cg,skinnormal_vertex:hg,specularmap_fragment:ug,specularmap_pars_fragment:dg,tonemapping_fragment:fg,tonemapping_pars_fragment:pg,transmission_fragment:mg,transmission_pars_fragment:gg,uv_pars_fragment:_g,uv_pars_vertex:xg,uv_vertex:yg,worldpos_vertex:vg,background_vert:Sg,background_frag:Mg,backgroundCube_vert:bg,backgroundCube_frag:Eg,cube_vert:wg,cube_frag:Tg,depth_vert:Ag,depth_frag:Cg,distanceRGBA_vert:Rg,distanceRGBA_frag:Pg,equirect_vert:Ig,equirect_frag:Dg,linedashed_vert:Lg,linedashed_frag:Ng,meshbasic_vert:Ug,meshbasic_frag:Fg,meshlambert_vert:Og,meshlambert_frag:Bg,meshmatcap_vert:zg,meshmatcap_frag:kg,meshnormal_vert:Vg,meshnormal_frag:Hg,meshphong_vert:Gg,meshphong_frag:Wg,meshphysical_vert:Xg,meshphysical_frag:qg,meshtoon_vert:Yg,meshtoon_frag:$g,points_vert:Zg,points_frag:Jg,shadow_vert:Kg,shadow_frag:jg,sprite_vert:Qg,sprite_frag:e0},ae={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},En={basic:{uniforms:Ft([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Ft([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ke(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Ft([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Ft([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Ft([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new ke(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Ft([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Ft([ae.points,ae.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Ft([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Ft([ae.common,ae.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Ft([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Ft([ae.sprite,ae.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Ft([ae.common,ae.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Ft([ae.lights,ae.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};En.physical={uniforms:Ft([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var To={r:0,b:0,g:0},Ai=new Kt,t0=new lt;function n0(i,e,t,n,s,r,a){let o=new ke(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?t:e).get(v)),v}function _(E){let v=!1,C=g(E);C===null?p(o,l):C&&C.isColor&&(p(C,1),v=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,v){let C=g(v);C&&(C.isCubeTexture||C.mapping===fr)?(h===void 0&&(h=new ft(new Sn(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:Ti(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,P,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ai.copy(v.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(t0.makeRotationFromEuler(Ai)),h.material.toneMapped=We.getTransfer(C.colorSpace)!==$e,(u!==C||f!==C.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=C,f=C.version,d=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new ft(new vi(2,2),new mn({name:"BackgroundMaterial",uniforms:Ti(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=We.getTransfer(C.colorSpace)!==$e,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||f!==C.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=C,f=C.version,d=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,v){E.getRGB(To,ic(i)),n.buffers.color.setClear(To.r,To.g,To.b,v,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,v=1){o.set(E),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:_,addToRenderList:m,dispose:b}}function i0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(S,D,O,k,G){let q=!1,W=u(k,O,D);r!==W&&(r=W,c(r.object)),q=d(S,k,O,G),q&&g(S,k,O,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(S,D,O,k),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,D,O){let k=O.wireframe===!0,G=n[S.id];G===void 0&&(G={},n[S.id]=G);let q=G[D.id];q===void 0&&(q={},G[D.id]=q);let W=q[k];return W===void 0&&(W=f(l()),q[k]=W),W}function f(S){let D=[],O=[],k=[];for(let G=0;G<t;G++)D[G]=0,O[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:k,object:S,attributes:{},index:null}}function d(S,D,O,k){let G=r.attributes,q=D.attributes,W=0,ie=O.getAttributes();for(let V in ie)if(ie[V].location>=0){let de=G[V],we=q[V];if(we===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(we=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(we=S.instanceColor)),de===void 0||de.attribute!==we||we&&de.data!==we.data)return!0;W++}return r.attributesNum!==W||r.index!==k}function g(S,D,O,k){let G={},q=D.attributes,W=0,ie=O.getAttributes();for(let V in ie)if(ie[V].location>=0){let de=q[V];de===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(de=S.instanceColor));let we={};we.attribute=de,de&&de.data&&(we.data=de.data),G[V]=we,W++}r.attributes=G,r.attributesNum=W,r.index=k}function _(){let S=r.newAttributes;for(let D=0,O=S.length;D<O;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){let O=r.newAttributes,k=r.enabledAttributes,G=r.attributeDivisors;O[S]=1,k[S]===0&&(i.enableVertexAttribArray(S),k[S]=1),G[S]!==D&&(i.vertexAttribDivisor(S,D),G[S]=D)}function b(){let S=r.newAttributes,D=r.enabledAttributes;for(let O=0,k=D.length;O<k;O++)D[O]!==S[O]&&(i.disableVertexAttribArray(O),D[O]=0)}function E(S,D,O,k,G,q,W){W===!0?i.vertexAttribIPointer(S,D,O,G,q):i.vertexAttribPointer(S,D,O,k,G,q)}function v(S,D,O,k){_();let G=k.attributes,q=O.getAttributes(),W=D.defaultAttributeValues;for(let ie in q){let V=q[ie];if(V.location>=0){let oe=G[ie];if(oe===void 0&&(ie==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),ie==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),oe!==void 0){let de=oe.normalized,we=oe.itemSize,Ve=e.get(oe);if(Ve===void 0)continue;let Qe=Ve.buffer,rt=Ve.type,qe=Ve.bytesPerElement,Y=rt===i.INT||rt===i.UNSIGNED_INT||oe.gpuType===Xa;if(oe.isInterleavedBufferAttribute){let j=oe.data,me=j.stride,De=oe.offset;if(j.isInstancedInterleavedBuffer){for(let Ee=0;Ee<V.locationSize;Ee++)p(V.location+Ee,j.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ee=0;Ee<V.locationSize;Ee++)m(V.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let Ee=0;Ee<V.locationSize;Ee++)E(V.location+Ee,we/V.locationSize,rt,de,me*qe,(De+we/V.locationSize*Ee)*qe,Y)}else{if(oe.isInstancedBufferAttribute){for(let j=0;j<V.locationSize;j++)p(V.location+j,oe.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let j=0;j<V.locationSize;j++)m(V.location+j);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let j=0;j<V.locationSize;j++)E(V.location+j,we/V.locationSize,rt,de,we*qe,we/V.locationSize*j*qe,Y)}}else if(W!==void 0){let de=W[ie];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(V.location,de);break;case 3:i.vertexAttrib3fv(V.location,de);break;case 4:i.vertexAttrib4fv(V.location,de);break;default:i.vertexAttrib1fv(V.location,de)}}}}b()}function C(){N();for(let S in n){let D=n[S];for(let O in D){let k=D[O];for(let G in k)h(k[G].object),delete k[G];delete D[O]}delete n[S]}}function R(S){if(n[S.id]===void 0)return;let D=n[S.id];for(let O in D){let k=D[O];for(let G in k)h(k[G].object),delete k[G];delete D[O]}delete n[S.id]}function P(S){for(let D in n){let O=n[D];if(O[S.id]===void 0)continue;let k=O[S.id];for(let G in k)h(k[G].object),delete k[G];delete O[S.id]}}function N(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function s0(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function r0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==cn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let N=P===ds&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==gn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==bn&&!N)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:C,maxSamples:R}}function a0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new vt,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,E=b*4,v=p.clippingState||null;l.value=v,v=h(g,f,E,d);for(let C=0;C!==E;++C)v[C]=t[C];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=d+_*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,v=d;E!==_;++E,v+=4)a.copy(u[E]).applyMatrix4(b,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function o0(i){let e=new WeakMap;function t(a,o){return o===Ha?a.mapping=bi:o===Ga&&(a.mapping=Ei),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ha||o===Ga)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new da(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var gs=4,wu=[.125,.215,.35,.446,.526,.582],Pi=20,lc=new cr,Tu=new ke,cc=null,hc=0,uc=0,dc=!1,Ri=(1+Math.sqrt(5))/2,ms=1/Ri,Au=[new T(-Ri,ms,0),new T(Ri,ms,0),new T(-ms,0,Ri),new T(ms,0,Ri),new T(0,Ri,-ms),new T(0,Ri,ms),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],l0=new T,Ro=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=l0}=r;cc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cc,hc,uc),this._renderer.xr.enabled=dc,e.scissorTest=!1,Ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bi||e.mapping===Ei?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:ds,format:cn,colorSpace:gi,depthBuffer:!1},s=Cu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=c0(r)),this._blurMaterial=h0(r,e,t)}return s}_compileMaterial(e){let t=new ft(this._lodPlanes[0],e);this._renderer.compile(t,lc)}_sceneToCubeUV(e,t,n,s,r){let l=new Nt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Tu),u.toneMapping=On,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new on({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),m=new ft(new Sn,_),p=!1,b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,p=!0):(_.color.copy(Tu),p=!0);for(let E=0;E<6;E++){let v=E%3;v===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):v===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let C=this._cubeSize;Ao(s,v*C,E>2?C:0,C,C),u.setRenderTarget(s),p&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===bi||e.mapping===Ei;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ru());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ft(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ao(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,lc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Au[(s-r-1)%Au.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ft(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Pi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Pi;m>Pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pi}`);let p=[],b=0;for(let P=0;P<Pi;++P){let N=P/_,M=Math.exp(-N*N/2);p.push(M),P===0?b+=M:P<m&&(b+=2*M)}for(let P=0;P<p.length;P++)p[P]=p[P]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;let v=this._sizeLods[s],C=3*v*(s>E-gs?s-E+gs:0),R=4*(this._cubeSize-v);Ao(t,C,R,3*v,2*v),l.setRenderTarget(t),l.render(u,lc)}};function c0(i){let e=[],t=[],n=[],s=i,r=i-gs+1+wu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-gs?l=wu[a-i+gs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*d),E=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let R=0;R<d;R++){let P=R%3*2/3-1,N=R>2?0:-1,M=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];b.set(M,_*g*R),E.set(f,m*g*R);let S=[R,R,R,R,R,R];v.set(S,p*g*R)}let C=new xt;C.setAttribute("position",new Jt(b,_)),C.setAttribute("uv",new Jt(E,m)),C.setAttribute("faceIndex",new Jt(v,p)),e.push(C),s>gs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Cu(i,e,t){let n=new vn(i,e,t);return n.texture.mapping=fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ao(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function h0(i,e,t){let n=new Float32Array(Pi),s=new T(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Ru(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Pu(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Mc(){return`

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
	`}function u0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Ha||l===Ga,h=l===bi||l===Ei;if(c||h){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Ro(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Ro(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function d0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ns("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function f0(i,e,t,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,g=u.attributes.position,_=0;if(d!==null){let b=d.array;_=d.version;for(let E=0,v=b.length;E<v;E+=3){let C=b[E+0],R=b[E+1],P=b[E+2];f.push(C,R,R,P,P,C)}}else if(g!==void 0){let b=g.array;_=g.version;for(let E=0,v=b.length/3-1;E<v;E+=3){let C=E+0,R=E+1,P=E+2;f.push(C,R,R,P,P,C)}}else return;let m=new(nc(f)?Vs:ks)(f,1);m.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function p0(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*a,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function u(f,d,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=d[b]*_[b];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function m0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function g0(i,e,t){let n=new WeakMap,s=new dt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let M=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],E=0;d===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let v=o.attributes.position.count*E,C=1;v>e.maxTextureSize&&(C=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let R=new Float32Array(v*C*4*u),P=new zs(R,v,C,u);P.type=bn,P.needsUpdate=!0;let N=E*4;for(let S=0;S<u;S++){let D=m[S],O=p[S],k=b[S],G=v*C*4*S;for(let q=0;q<D.count;q++){let W=q*N;d===!0&&(s.fromBufferAttribute(D,q),R[G+W+0]=s.x,R[G+W+1]=s.y,R[G+W+2]=s.z,R[G+W+3]=0),g===!0&&(s.fromBufferAttribute(O,q),R[G+W+4]=s.x,R[G+W+5]=s.y,R[G+W+6]=s.z,R[G+W+7]=0),_===!0&&(s.fromBufferAttribute(k,q),R[G+W+8]=s.x,R[G+W+9]=s.y,R[G+W+10]=s.z,R[G+W+11]=k.itemSize===4?s.w:1)}}f={count:u,texture:P,size:new le(v,C)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function _0(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Zu=new Wt,Iu=new Ys(1,1),Ju=new zs,Ku=new ha,ju=new Gs,Du=[],Lu=[],Nu=new Float32Array(16),Uu=new Float32Array(9),Fu=new Float32Array(4);function xs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Du[s];if(r===void 0&&(r=new Float32Array(s),Du[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function St(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Io(i,e){let t=Lu[e];t===void 0&&(t=new Int32Array(e),Lu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function x0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function y0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function v0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function S0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function M0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,n))return;Fu.set(n),i.uniformMatrix2fv(this.addr,!1,Fu),Mt(t,n)}}function b0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,n))return;Uu.set(n),i.uniformMatrix3fv(this.addr,!1,Uu),Mt(t,n)}}function E0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,n))return;Nu.set(n),i.uniformMatrix4fv(this.addr,!1,Nu),Mt(t,n)}}function w0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function T0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function A0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function C0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function R0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function P0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function I0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function D0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function L0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Iu.compareFunction=jl,r=Iu):r=Zu,t.setTexture2D(e||r,s)}function N0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ku,s)}function U0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ju,s)}function F0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ju,s)}function O0(i){switch(i){case 5126:return x0;case 35664:return y0;case 35665:return v0;case 35666:return S0;case 35674:return M0;case 35675:return b0;case 35676:return E0;case 5124:case 35670:return w0;case 35667:case 35671:return T0;case 35668:case 35672:return A0;case 35669:case 35673:return C0;case 5125:return R0;case 36294:return P0;case 36295:return I0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return L0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return U0;case 36289:case 36303:case 36311:case 36292:return F0}}function B0(i,e){i.uniform1fv(this.addr,e)}function z0(i,e){let t=xs(e,this.size,2);i.uniform2fv(this.addr,t)}function k0(i,e){let t=xs(e,this.size,3);i.uniform3fv(this.addr,t)}function V0(i,e){let t=xs(e,this.size,4);i.uniform4fv(this.addr,t)}function H0(i,e){let t=xs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function G0(i,e){let t=xs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function W0(i,e){let t=xs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function X0(i,e){i.uniform1iv(this.addr,e)}function q0(i,e){i.uniform2iv(this.addr,e)}function Y0(i,e){i.uniform3iv(this.addr,e)}function $0(i,e){i.uniform4iv(this.addr,e)}function Z0(i,e){i.uniform1uiv(this.addr,e)}function J0(i,e){i.uniform2uiv(this.addr,e)}function K0(i,e){i.uniform3uiv(this.addr,e)}function j0(i,e){i.uniform4uiv(this.addr,e)}function Q0(i,e,t){let n=this.cache,s=e.length,r=Io(t,s);St(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Zu,r[a])}function e_(i,e,t){let n=this.cache,s=e.length,r=Io(t,s);St(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ku,r[a])}function t_(i,e,t){let n=this.cache,s=e.length,r=Io(t,s);St(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||ju,r[a])}function n_(i,e,t){let n=this.cache,s=e.length,r=Io(t,s);St(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ju,r[a])}function i_(i){switch(i){case 5126:return B0;case 35664:return z0;case 35665:return k0;case 35666:return V0;case 35674:return H0;case 35675:return G0;case 35676:return W0;case 5124:case 35670:return X0;case 35667:case 35671:return q0;case 35668:case 35672:return Y0;case 35669:case 35673:return $0;case 5125:return Z0;case 36294:return J0;case 36295:return K0;case 36296:return j0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return n_}}var pc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=O0(t.type)}},mc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=i_(t.type)}},gc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},fc=/(\w+)(\])?(\[|\.)?/g;function Ou(i,e){i.seq.push(e),i.map[e.id]=e}function s_(i,e,t){let n=i.name,s=n.length;for(fc.lastIndex=0;;){let r=fc.exec(n),a=fc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ou(t,c===void 0?new pc(o,i,e):new mc(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new gc(o),Ou(t,u)),t=u}}}var _s=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);s_(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Bu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var r_=37297,a_=0;function o_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var zu=new Ue;function l_(i){We._getMatrix(zu,We.workingColorSpace,i);let e=`mat3( ${zu.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(i)){case Fs:return[e,"LinearTransferOETF"];case $e:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ku(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+o_(i.getShaderSource(e),o)}else return r}function c_(i,e){let t=l_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function h_(i,e){let t;switch(e){case Qh:t="Linear";break;case eu:t="Reinhard";break;case tu:t="Cineon";break;case Va:t="ACESFilmic";break;case iu:t="AgX";break;case su:t="Neutral";break;case nu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Co=new T;function u_(){We.getLuminanceCoefficients(Co);let i=Co.x.toFixed(4),e=Co.y.toFixed(4),t=Co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function f_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function p_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function yr(i){return i!==""}function Vu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var m_=/^[ \t]*#include +<([\w\d./]+)>/gm;function _c(i){return i.replace(m_,__)}var g_=new Map;function __(i,e){let t=ze[e];if(t===void 0){let n=g_.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _c(t)}var x_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gu(i){return i.replace(x_,y_)}function y_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function v_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ol?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===La?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mn&&(e="SHADOWMAP_TYPE_VSM"),e}function S_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bi:case Ei:e="ENVMAP_TYPE_CUBE";break;case fr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function M_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ei:e="ENVMAP_MODE_REFRACTION";break}return e}function b_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vl:e="ENVMAP_BLENDING_MULTIPLY";break;case Kh:e="ENVMAP_BLENDING_MIX";break;case jh:e="ENVMAP_BLENDING_ADD";break}return e}function E_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function w_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=v_(t),c=S_(t),h=M_(t),u=b_(t),f=E_(t),d=d_(t),g=f_(r),_=s.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(yr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(yr).join(`
`),p.length>0&&(p+=`
`)):(m=[Wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),p=[Wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?ze.tonemapping_pars_fragment:"",t.toneMapping!==On?h_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,c_("linearToOutputTexel",t.outputColorSpace),u_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yr).join(`
`)),a=_c(a),a=Vu(a,t),a=Hu(a,t),o=_c(o),o=Vu(o,t),o=Hu(o,t),a=Gu(a),o=Gu(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=b+m+a,v=b+p+o,C=Bu(s,s.VERTEX_SHADER,E),R=Bu(s,s.FRAGMENT_SHADER,v);s.attachShader(_,C),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(D){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(C)||"",G=s.getShaderInfoLog(R)||"",q=O.trim(),W=k.trim(),ie=G.trim(),V=!0,oe=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,R);else{let de=ku(s,C,"vertex"),we=ku(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+q+`
`+de+`
`+we)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(W===""||ie==="")&&(oe=!1);oe&&(D.diagnostics={runnable:V,programLog:q,vertexShader:{log:W,prefix:m},fragmentShader:{log:ie,prefix:p}})}s.deleteShader(C),s.deleteShader(R),N=new _s(s,_),M=p_(s,_)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,r_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=a_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=R,this}var T_=0,xc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new yc(e),t.set(e,n)),n}},yc=class{constructor(e){this.id=T_++,this.code=e,this.usedTimes=0}};function A_(i,e,t,n,s,r,a){let o=new ss,l=new xc,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,D,O,k){let G=O.fog,q=k.geometry,W=M.isMeshStandardMaterial?O.environment:null,ie=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),V=ie&&ie.mapping===fr?ie.image.height:null,oe=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let de=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,we=de!==void 0?de.length:0,Ve=0;q.morphAttributes.position!==void 0&&(Ve=1),q.morphAttributes.normal!==void 0&&(Ve=2),q.morphAttributes.color!==void 0&&(Ve=3);let Qe,rt,qe,Y;if(oe){let Ye=En[oe];Qe=Ye.vertexShader,rt=Ye.fragmentShader}else Qe=M.vertexShader,rt=M.fragmentShader,l.update(M),qe=l.getVertexShaderID(M),Y=l.getFragmentShaderID(M);let j=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),De=k.isInstancedMesh===!0,Ee=k.isBatchedMesh===!0,Ge=!!M.map,It=!!M.matcap,A=!!ie,at=!!M.aoMap,Ne=!!M.lightMap,Pe=!!M.bumpMap,xe=!!M.normalMap,ot=!!M.displacementMap,ye=!!M.emissiveMap,Oe=!!M.metalnessMap,Tt=!!M.roughnessMap,_t=M.anisotropy>0,w=M.clearcoat>0,x=M.dispersion>0,F=M.iridescence>0,X=M.sheen>0,K=M.transmission>0,H=_t&&!!M.anisotropyMap,be=w&&!!M.clearcoatMap,se=w&&!!M.clearcoatNormalMap,ve=w&&!!M.clearcoatRoughnessMap,Se=F&&!!M.iridescenceMap,te=F&&!!M.iridescenceThicknessMap,ue=X&&!!M.sheenColorMap,Re=X&&!!M.sheenRoughnessMap,Me=!!M.specularMap,ce=!!M.specularColorMap,Fe=!!M.specularIntensityMap,I=K&&!!M.transmissionMap,ne=K&&!!M.thicknessMap,re=!!M.gradientMap,pe=!!M.alphaMap,Q=M.alphaTest>0,$=!!M.alphaHash,_e=!!M.extensions,Le=On;M.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Le=i.toneMapping);let et={shaderID:oe,shaderType:M.type,shaderName:M.name,vertexShader:Qe,fragmentShader:rt,defines:M.defines,customVertexShaderID:qe,customFragmentShaderID:Y,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Ee,batchingColor:Ee&&k._colorsTexture!==null,instancing:De,instancingColor:De&&k.instanceColor!==null,instancingMorph:De&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:gi,alphaToCoverage:!!M.alphaToCoverage,map:Ge,matcap:It,envMap:A,envMapMode:A&&ie.mapping,envMapCubeUVHeight:V,aoMap:at,lightMap:Ne,bumpMap:Pe,normalMap:xe,displacementMap:f&&ot,emissiveMap:ye,normalMapObjectSpace:xe&&M.normalMapType===lu,normalMapTangentSpace:xe&&M.normalMapType===Kl,metalnessMap:Oe,roughnessMap:Tt,anisotropy:_t,anisotropyMap:H,clearcoat:w,clearcoatMap:be,clearcoatNormalMap:se,clearcoatRoughnessMap:ve,dispersion:x,iridescence:F,iridescenceMap:Se,iridescenceThicknessMap:te,sheen:X,sheenColorMap:ue,sheenRoughnessMap:Re,specularMap:Me,specularColorMap:ce,specularIntensityMap:Fe,transmission:K,transmissionMap:I,thicknessMap:ne,gradientMap:re,opaque:M.transparent===!1&&M.blending===pi&&M.alphaToCoverage===!1,alphaMap:pe,alphaTest:Q,alphaHash:$,combine:M.combine,mapUv:Ge&&_(M.map.channel),aoMapUv:at&&_(M.aoMap.channel),lightMapUv:Ne&&_(M.lightMap.channel),bumpMapUv:Pe&&_(M.bumpMap.channel),normalMapUv:xe&&_(M.normalMap.channel),displacementMapUv:ot&&_(M.displacementMap.channel),emissiveMapUv:ye&&_(M.emissiveMap.channel),metalnessMapUv:Oe&&_(M.metalnessMap.channel),roughnessMapUv:Tt&&_(M.roughnessMap.channel),anisotropyMapUv:H&&_(M.anisotropyMap.channel),clearcoatMapUv:be&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:te&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(M.sheenRoughnessMap.channel),specularMapUv:Me&&_(M.specularMap.channel),specularColorMapUv:ce&&_(M.specularColorMap.channel),specularIntensityMapUv:Fe&&_(M.specularIntensityMap.channel),transmissionMapUv:I&&_(M.transmissionMap.channel),thicknessMapUv:ne&&_(M.thicknessMap.channel),alphaMapUv:pe&&_(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(xe||_t),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(Ge||pe),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:me,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Ve,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:Ge&&M.map.isVideoTexture===!0&&We.getTransfer(M.map.colorSpace)===$e,decodeVideoTextureEmissive:ye&&M.emissiveMap.isVideoTexture===!0&&We.getTransfer(M.emissiveMap.colorSpace)===$e,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ut,flipSided:M.side===kt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:_e&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&M.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return et.vertexUv1s=c.has(1),et.vertexUv2s=c.has(2),et.vertexUv3s=c.has(3),c.clear(),et}function p(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let D in M.defines)S.push(D),S.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(b(S,M),E(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function b(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function E(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){let S=g[M.type],D;if(S){let O=En[S];D=yu.clone(O.uniforms)}else D=M.uniforms;return D}function C(M,S){let D;for(let O=0,k=h.length;O<k;O++){let G=h[O];if(G.cacheKey===S){D=G,++D.usedTimes;break}}return D===void 0&&(D=new w_(i,S,M,r),h.push(D)),D}function R(M){if(--M.usedTimes===0){let S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function P(M){l.remove(M)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:C,releaseProgram:R,releaseShaderCache:P,programs:h,dispose:N}}function C_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function R_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Xu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,d,g,_,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,f,d,g,_,m){let p=a(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(u,f,d,g,_,m){let p=a(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||R_),n.length>1&&n.sort(f||Xu),s.length>1&&s.sort(f||Xu)}function h(){for(let u=e,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function P_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new qu,i.set(n,[a])):s>=r.length?(a=new qu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function I_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new ke};break;case"SpotLight":t={position:new T,direction:new T,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new T,halfWidth:new T,halfHeight:new T};break}return i[e.id]=t,t}}}function D_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var L_=0;function N_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function U_(i){let e=new I_,t=D_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);let s=new T,r=new lt,a=new lt;function o(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,b=0,E=0,v=0,C=0,R=0,P=0;c.sort(N_);for(let M=0,S=c.length;M<S;M++){let D=c[M],O=D.color,k=D.intensity,G=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=O.r*k,u+=O.g*k,f+=O.b*k;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],k);P++}else if(D.isDirectionalLight){let W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ie=D.shadow,V=t.get(D);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=D.shadow.matrix,b++}n.directional[d]=W,d++}else if(D.isSpotLight){let W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(O).multiplyScalar(k),W.distance=G,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[_]=W;let ie=D.shadow;if(D.map&&(n.spotLightMap[C]=D.map,C++,ie.updateMatrices(D),D.castShadow&&R++),n.spotLightMatrix[_]=ie.matrix,D.castShadow){let V=t.get(D);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=q,v++}_++}else if(D.isRectAreaLight){let W=e.get(D);W.color.copy(O).multiplyScalar(k),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=W,m++}else if(D.isPointLight){let W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){let ie=D.shadow,V=t.get(D);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,V.shadowCameraNear=ie.camera.near,V.shadowCameraFar=ie.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=D.shadow.matrix,E++}n.point[g]=W,g++}else if(D.isHemisphereLight){let W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(k),W.groundColor.copy(D.groundColor).multiplyScalar(k),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let N=n.hash;(N.directionalLength!==d||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==b||N.numPointShadows!==E||N.numSpotShadows!==v||N.numSpotMaps!==C||N.numLightProbes!==P)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+C-R,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=P,N.directionalLength=d,N.pointLength=g,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=b,N.numPointShadows=E,N.numSpotShadows=v,N.numSpotMaps=C,N.numLightProbes=P,n.version=L_++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let E=c[p];if(E.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(E.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(E.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Yu(i){let e=new U_(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function F_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Yu(i),e.set(s,[o])):r>=a.length?(o=new Yu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var O_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B_=`uniform sampler2D shadow_pass;
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
}`;function z_(i,e,t){let n=new as,s=new le,r=new le,a=new dt,o=new Sa({depthPacking:ou}),l=new Ma,c={},h=t.maxTextureSize,u={[Ln]:kt,[kt]:Ln,[Ut]:Ut},f=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:O_,fragmentShader:B_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new xt;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ft(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ol;let p=this.type;this.render=function(R,P,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let M=i.getRenderTarget(),S=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Fn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let k=p!==Mn&&this.type===Mn,G=p===Mn&&this.type!==Mn;for(let q=0,W=R.length;q<W;q++){let ie=R[q],V=ie.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let oe=V.getFrameExtents();if(s.multiply(oe),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,V.mapSize.y=r.y)),V.map===null||k===!0||G===!0){let we=this.type!==Mn?{minFilter:an,magFilter:an}:{};V.map!==null&&V.map.dispose(),V.map=new vn(s.x,s.y,we),V.map.texture.name=ie.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let de=V.getViewportCount();for(let we=0;we<de;we++){let Ve=V.getViewport(we);a.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),O.viewport(a),V.updateMatrices(ie,we),n=V.getFrustum(),v(P,N,V.camera,ie,this.type)}V.isPointLightShadow!==!0&&this.type===Mn&&b(V,N),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,S,D)};function b(R,P){let N=e.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new vn(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(P,null,N,f,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(P,null,N,d,_,null)}function E(R,P,N,M){let S=null,D=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)S=D;else if(S=N.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let O=S.uuid,k=P.uuid,G=c[O];G===void 0&&(G={},c[O]=G);let q=G[k];q===void 0&&(q=S.clone(),G[k]=q,P.addEventListener("dispose",C)),S=q}if(S.visible=P.visible,S.wireframe=P.wireframe,M===Mn?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:u[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let O=i.properties.get(S);O.light=N}return S}function v(R,P,N,M,S){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===Mn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);let k=e.update(R),G=R.material;if(Array.isArray(G)){let q=k.groups;for(let W=0,ie=q.length;W<ie;W++){let V=q[W],oe=G[V.materialIndex];if(oe&&oe.visible){let de=E(R,oe,M,S);R.onBeforeShadow(i,R,P,N,k,de,V),i.renderBufferDirect(N,null,k,de,R,V),R.onAfterShadow(i,R,P,N,k,de,V)}}}else if(G.visible){let q=E(R,G,M,S);R.onBeforeShadow(i,R,P,N,k,q,null),i.renderBufferDirect(N,null,k,q,R,null),R.onAfterShadow(i,R,P,N,k,q,null)}}let O=R.children;for(let k=0,G=O.length;k<G;k++)v(O[k],P,N,M,S)}function C(R){R.target.removeEventListener("dispose",C);for(let N in c){let M=c[N],S=R.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}var k_={[Na]:Ua,[Fa]:za,[Oa]:ka,[mi]:Ba,[Ua]:Na,[za]:Fa,[ka]:Oa,[Ba]:mi};function V_(i,e){function t(){let I=!1,ne=new dt,re=null,pe=new dt(0,0,0,0);return{setMask:function(Q){re!==Q&&!I&&(i.colorMask(Q,Q,Q,Q),re=Q)},setLocked:function(Q){I=Q},setClear:function(Q,$,_e,Le,et){et===!0&&(Q*=Le,$*=Le,_e*=Le),ne.set(Q,$,_e,Le),pe.equals(ne)===!1&&(i.clearColor(Q,$,_e,Le),pe.copy(ne))},reset:function(){I=!1,re=null,pe.set(-1,0,0,0)}}}function n(){let I=!1,ne=!1,re=null,pe=null,Q=null;return{setReversed:function($){if(ne!==$){let _e=e.get("EXT_clip_control");$?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),ne=$;let Le=Q;Q=null,this.setClear(Le)}},getReversed:function(){return ne},setTest:function($){$?j(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function($){re!==$&&!I&&(i.depthMask($),re=$)},setFunc:function($){if(ne&&($=k_[$]),pe!==$){switch($){case Na:i.depthFunc(i.NEVER);break;case Ua:i.depthFunc(i.ALWAYS);break;case Fa:i.depthFunc(i.LESS);break;case mi:i.depthFunc(i.LEQUAL);break;case Oa:i.depthFunc(i.EQUAL);break;case Ba:i.depthFunc(i.GEQUAL);break;case za:i.depthFunc(i.GREATER);break;case ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=$}},setLocked:function($){I=$},setClear:function($){Q!==$&&(ne&&($=1-$),i.clearDepth($),Q=$)},reset:function(){I=!1,re=null,pe=null,Q=null,ne=!1}}}function s(){let I=!1,ne=null,re=null,pe=null,Q=null,$=null,_e=null,Le=null,et=null;return{setTest:function(Ye){I||(Ye?j(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(Ye){ne!==Ye&&!I&&(i.stencilMask(Ye),ne=Ye)},setFunc:function(Ye,Tn,xn){(re!==Ye||pe!==Tn||Q!==xn)&&(i.stencilFunc(Ye,Tn,xn),re=Ye,pe=Tn,Q=xn)},setOp:function(Ye,Tn,xn){($!==Ye||_e!==Tn||Le!==xn)&&(i.stencilOp(Ye,Tn,xn),$=Ye,_e=Tn,Le=xn)},setLocked:function(Ye){I=Ye},setClear:function(Ye){et!==Ye&&(i.clearStencil(Ye),et=Ye)},reset:function(){I=!1,ne=null,re=null,pe=null,Q=null,$=null,_e=null,Le=null,et=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,b=null,E=null,v=null,C=null,R=null,P=new ke(0,0,0),N=0,M=!1,S=null,D=null,O=null,k=null,G=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ie=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=ie>=1):V.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=ie>=2);let oe=null,de={},we=i.getParameter(i.SCISSOR_BOX),Ve=i.getParameter(i.VIEWPORT),Qe=new dt().fromArray(we),rt=new dt().fromArray(Ve);function qe(I,ne,re,pe){let Q=new Uint8Array(4),$=i.createTexture();i.bindTexture(I,$),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _e=0;_e<re;_e++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(ne+_e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return $}let Y={};Y[i.TEXTURE_2D]=qe(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(mi),Pe(!1),xe(Fl),j(i.CULL_FACE),at(Fn);function j(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function me(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function De(I,ne){return u[I]!==ne?(i.bindFramebuffer(I,ne),u[I]=ne,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ne),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ee(I,ne){let re=d,pe=!1;if(I){re=f.get(ne),re===void 0&&(re=[],f.set(ne,re));let Q=I.textures;if(re.length!==Q.length||re[0]!==i.COLOR_ATTACHMENT0){for(let $=0,_e=Q.length;$<_e;$++)re[$]=i.COLOR_ATTACHMENT0+$;re.length=Q.length,pe=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,pe=!0);pe&&i.drawBuffers(re)}function Ge(I){return g!==I?(i.useProgram(I),g=I,!0):!1}let It={[$n]:i.FUNC_ADD,[Nh]:i.FUNC_SUBTRACT,[Uh]:i.FUNC_REVERSE_SUBTRACT};It[Fh]=i.MIN,It[Oh]=i.MAX;let A={[Bh]:i.ZERO,[zh]:i.ONE,[kh]:i.SRC_COLOR,[ia]:i.SRC_ALPHA,[qh]:i.SRC_ALPHA_SATURATE,[Wh]:i.DST_COLOR,[Hh]:i.DST_ALPHA,[Vh]:i.ONE_MINUS_SRC_COLOR,[sa]:i.ONE_MINUS_SRC_ALPHA,[Xh]:i.ONE_MINUS_DST_COLOR,[Gh]:i.ONE_MINUS_DST_ALPHA,[Yh]:i.CONSTANT_COLOR,[$h]:i.ONE_MINUS_CONSTANT_COLOR,[Zh]:i.CONSTANT_ALPHA,[Jh]:i.ONE_MINUS_CONSTANT_ALPHA};function at(I,ne,re,pe,Q,$,_e,Le,et,Ye){if(I===Fn){_===!0&&(me(i.BLEND),_=!1);return}if(_===!1&&(j(i.BLEND),_=!0),I!==Lh){if(I!==m||Ye!==M){if((p!==$n||v!==$n)&&(i.blendEquation(i.FUNC_ADD),p=$n,v=$n),Ye)switch(I){case pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bl:i.blendFunc(i.ONE,i.ONE);break;case zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,E=null,C=null,R=null,P.set(0,0,0),N=0,m=I,M=Ye}return}Q=Q||ne,$=$||re,_e=_e||pe,(ne!==p||Q!==v)&&(i.blendEquationSeparate(It[ne],It[Q]),p=ne,v=Q),(re!==b||pe!==E||$!==C||_e!==R)&&(i.blendFuncSeparate(A[re],A[pe],A[$],A[_e]),b=re,E=pe,C=$,R=_e),(Le.equals(P)===!1||et!==N)&&(i.blendColor(Le.r,Le.g,Le.b,et),P.copy(Le),N=et),m=I,M=!1}function Ne(I,ne){I.side===Ut?me(i.CULL_FACE):j(i.CULL_FACE);let re=I.side===kt;ne&&(re=!re),Pe(re),I.blending===pi&&I.transparent===!1?at(Fn):at(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let pe=I.stencilWrite;o.setTest(pe),pe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ye(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(I){S!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),S=I)}function xe(I){I!==Ih?(j(i.CULL_FACE),I!==D&&(I===Fl?i.cullFace(i.BACK):I===Dh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),D=I}function ot(I){I!==O&&(W&&i.lineWidth(I),O=I)}function ye(I,ne,re){I?(j(i.POLYGON_OFFSET_FILL),(k!==ne||G!==re)&&(i.polygonOffset(ne,re),k=ne,G=re)):me(i.POLYGON_OFFSET_FILL)}function Oe(I){I?j(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function Tt(I){I===void 0&&(I=i.TEXTURE0+q-1),oe!==I&&(i.activeTexture(I),oe=I)}function _t(I,ne,re){re===void 0&&(oe===null?re=i.TEXTURE0+q-1:re=oe);let pe=de[re];pe===void 0&&(pe={type:void 0,texture:void 0},de[re]=pe),(pe.type!==I||pe.texture!==ne)&&(oe!==re&&(i.activeTexture(re),oe=re),i.bindTexture(I,ne||Y[I]),pe.type=I,pe.texture=ne)}function w(){let I=de[oe];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(I){Qe.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Qe.copy(I))}function Re(I){rt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),rt.copy(I))}function Me(I,ne){let re=c.get(ne);re===void 0&&(re=new WeakMap,c.set(ne,re));let pe=re.get(I);pe===void 0&&(pe=i.getUniformBlockIndex(ne,I.name),re.set(I,pe))}function ce(I,ne){let pe=c.get(ne).get(I);l.get(ne)!==pe&&(i.uniformBlockBinding(ne,pe,I.__bindingPointIndex),l.set(ne,pe))}function Fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},oe=null,de={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,b=null,E=null,v=null,C=null,R=null,P=new ke(0,0,0),N=0,M=!1,S=null,D=null,O=null,k=null,G=null,Qe.set(0,0,i.canvas.width,i.canvas.height),rt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:me,bindFramebuffer:De,drawBuffers:Ee,useProgram:Ge,setBlending:at,setMaterial:Ne,setFlipSided:Pe,setCullFace:xe,setLineWidth:ot,setPolygonOffset:ye,setScissorTest:Oe,activeTexture:Tt,bindTexture:_t,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:Se,texImage3D:te,updateUBOMapping:Me,uniformBlockBinding:ce,texStorage2D:se,texStorage3D:ve,texSubImage2D:X,texSubImage3D:K,compressedTexSubImage2D:H,compressedTexSubImage3D:be,scissor:ue,viewport:Re,reset:Fe}}function H_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return d?new OffscreenCanvas(w,x):Bs("canvas")}function _(w,x,F){let X=1,K=_t(w);if((K.width>F||K.height>F)&&(X=F/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let H=Math.floor(X*K.width),be=Math.floor(X*K.height);u===void 0&&(u=g(H,be));let se=x?g(H,be):u;return se.width=H,se.height=be,se.getContext("2d").drawImage(w,0,0,H,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+H+"x"+be+")."),se}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,x,F,X,K=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let H=x;if(x===i.RED&&(F===i.FLOAT&&(H=i.R32F),F===i.HALF_FLOAT&&(H=i.R16F),F===i.UNSIGNED_BYTE&&(H=i.R8)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(H=i.R8UI),F===i.UNSIGNED_SHORT&&(H=i.R16UI),F===i.UNSIGNED_INT&&(H=i.R32UI),F===i.BYTE&&(H=i.R8I),F===i.SHORT&&(H=i.R16I),F===i.INT&&(H=i.R32I)),x===i.RG&&(F===i.FLOAT&&(H=i.RG32F),F===i.HALF_FLOAT&&(H=i.RG16F),F===i.UNSIGNED_BYTE&&(H=i.RG8)),x===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(H=i.RG8UI),F===i.UNSIGNED_SHORT&&(H=i.RG16UI),F===i.UNSIGNED_INT&&(H=i.RG32UI),F===i.BYTE&&(H=i.RG8I),F===i.SHORT&&(H=i.RG16I),F===i.INT&&(H=i.RG32I)),x===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(H=i.RGB8UI),F===i.UNSIGNED_SHORT&&(H=i.RGB16UI),F===i.UNSIGNED_INT&&(H=i.RGB32UI),F===i.BYTE&&(H=i.RGB8I),F===i.SHORT&&(H=i.RGB16I),F===i.INT&&(H=i.RGB32I)),x===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(H=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(H=i.RGBA16UI),F===i.UNSIGNED_INT&&(H=i.RGBA32UI),F===i.BYTE&&(H=i.RGBA8I),F===i.SHORT&&(H=i.RGBA16I),F===i.INT&&(H=i.RGBA32I)),x===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(H=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(H=i.R11F_G11F_B10F)),x===i.RGBA){let be=K?Fs:We.getTransfer(X);F===i.FLOAT&&(H=i.RGBA32F),F===i.HALF_FLOAT&&(H=i.RGBA16F),F===i.UNSIGNED_BYTE&&(H=be===$e?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(H=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(H=i.RGB5_A1)}return(H===i.R16F||H===i.R32F||H===i.RG16F||H===i.RG32F||H===i.RGBA16F||H===i.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function v(w,x){let F;return w?x===null||x===ni||x===fs?F=i.DEPTH24_STENCIL8:x===bn?F=i.DEPTH32F_STENCIL8:x===us&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ni||x===fs?F=i.DEPTH_COMPONENT24:x===bn?F=i.DEPTH_COMPONENT32F:x===us&&(F=i.DEPTH_COMPONENT16),F}function C(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==an&&w.minFilter!==pn?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function R(w){let x=w.target;x.removeEventListener("dispose",R),N(x),x.isVideoTexture&&h.delete(x)}function P(w){let x=w.target;x.removeEventListener("dispose",P),S(x)}function N(w){let x=n.get(w);if(x.__webglInit===void 0)return;let F=w.source,X=f.get(F);if(X){let K=X[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(w),Object.keys(X).length===0&&f.delete(F)}n.remove(w)}function M(w){let x=n.get(w);i.deleteTexture(x.__webglTexture);let F=w.source,X=f.get(F);delete X[x.__cacheKey],a.memory.textures--}function S(w){let x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let K=0;K<x.__webglFramebuffer[X].length;K++)i.deleteFramebuffer(x.__webglFramebuffer[X][K]);else i.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)i.deleteFramebuffer(x.__webglFramebuffer[X]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let F=w.textures;for(let X=0,K=F.length;X<K;X++){let H=n.get(F[X]);H.__webglTexture&&(i.deleteTexture(H.__webglTexture),a.memory.textures--),n.remove(F[X])}n.remove(w)}let D=0;function O(){D=0}function k(){let w=D;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),D+=1,w}function G(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function q(w,x){let F=n.get(w);if(w.isVideoTexture&&Oe(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){let X=w.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,w,x);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function W(w,x){let F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){Y(F,w,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function ie(w,x){let F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){Y(F,w,x);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function V(w,x){let F=n.get(w);if(w.version>0&&F.__version!==w.version){j(F,w,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}let oe={[ra]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[aa]:i.MIRRORED_REPEAT},de={[an]:i.NEAREST,[ru]:i.NEAREST_MIPMAP_NEAREST,[pr]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[Wa]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},we={[cu]:i.NEVER,[mu]:i.ALWAYS,[hu]:i.LESS,[jl]:i.LEQUAL,[uu]:i.EQUAL,[pu]:i.GEQUAL,[du]:i.GREATER,[fu]:i.NOTEQUAL};function Ve(w,x){if(x.type===bn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===pn||x.magFilter===Wa||x.magFilter===pr||x.magFilter===ti||x.minFilter===pn||x.minFilter===Wa||x.minFilter===pr||x.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,oe[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,oe[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,oe[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,de[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,de[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,we[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===an||x.minFilter!==pr&&x.minFilter!==ti||x.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Qe(w,x){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",R));let X=x.source,K=f.get(X);K===void 0&&(K={},f.set(X,K));let H=G(x);if(H!==w.__cacheKey){K[H]===void 0&&(K[H]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),K[H].usedTimes++;let be=K[w.__cacheKey];be!==void 0&&(K[w.__cacheKey].usedTimes--,be.usedTimes===0&&M(x)),w.__cacheKey=H,w.__webglTexture=K[H].texture}return F}function rt(w,x,F){return Math.floor(Math.floor(w/F)/x)}function qe(w,x,F,X){let H=w.updateRanges;if(H.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,F,X,x.data);else{H.sort((te,ue)=>te.start-ue.start);let be=0;for(let te=1;te<H.length;te++){let ue=H[be],Re=H[te],Me=ue.start+ue.count,ce=rt(Re.start,x.width,4),Fe=rt(ue.start,x.width,4);Re.start<=Me+1&&ce===Fe&&rt(Re.start+Re.count-1,x.width,4)===ce?ue.count=Math.max(ue.count,Re.start+Re.count-ue.start):(++be,H[be]=Re)}H.length=be+1;let se=i.getParameter(i.UNPACK_ROW_LENGTH),ve=i.getParameter(i.UNPACK_SKIP_PIXELS),Se=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let te=0,ue=H.length;te<ue;te++){let Re=H[te],Me=Math.floor(Re.start/4),ce=Math.ceil(Re.count/4),Fe=Me%x.width,I=Math.floor(Me/x.width),ne=ce,re=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Fe),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,Fe,I,ne,re,F,X,x.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,se),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function Y(w,x,F){let X=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=i.TEXTURE_3D);let K=Qe(w,x),H=x.source;t.bindTexture(X,w.__webglTexture,i.TEXTURE0+F);let be=n.get(H);if(H.version!==be.__version||K===!0){t.activeTexture(i.TEXTURE0+F);let se=We.getPrimaries(We.workingColorSpace),ve=x.colorSpace===Bn?null:We.getPrimaries(x.colorSpace),Se=x.colorSpace===Bn||se===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let te=_(x.image,!1,s.maxTextureSize);te=Tt(x,te);let ue=r.convert(x.format,x.colorSpace),Re=r.convert(x.type),Me=E(x.internalFormat,ue,Re,x.colorSpace,x.isVideoTexture);Ve(X,x);let ce,Fe=x.mipmaps,I=x.isVideoTexture!==!0,ne=be.__version===void 0||K===!0,re=H.dataReady,pe=C(x,te);if(x.isDepthTexture)Me=v(x.format===ps,x.type),ne&&(I?t.texStorage2D(i.TEXTURE_2D,1,Me,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Me,te.width,te.height,0,ue,Re,null));else if(x.isDataTexture)if(Fe.length>0){I&&ne&&t.texStorage2D(i.TEXTURE_2D,pe,Me,Fe[0].width,Fe[0].height);for(let Q=0,$=Fe.length;Q<$;Q++)ce=Fe[Q],I?re&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ce.width,ce.height,ue,Re,ce.data):t.texImage2D(i.TEXTURE_2D,Q,Me,ce.width,ce.height,0,ue,Re,ce.data);x.generateMipmaps=!1}else I?(ne&&t.texStorage2D(i.TEXTURE_2D,pe,Me,te.width,te.height),re&&qe(x,te,ue,Re)):t.texImage2D(i.TEXTURE_2D,0,Me,te.width,te.height,0,ue,Re,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Me,Fe[0].width,Fe[0].height,te.depth);for(let Q=0,$=Fe.length;Q<$;Q++)if(ce=Fe[Q],x.format!==cn)if(ue!==null)if(I){if(re)if(x.layerUpdates.size>0){let _e=oc(ce.width,ce.height,x.format,x.type);for(let Le of x.layerUpdates){let et=ce.data.subarray(Le*_e/ce.data.BYTES_PER_ELEMENT,(Le+1)*_e/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Le,ce.width,ce.height,1,ue,et)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ce.width,ce.height,te.depth,ue,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Me,ce.width,ce.height,te.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?re&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ce.width,ce.height,te.depth,ue,Re,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Me,ce.width,ce.height,te.depth,0,ue,Re,ce.data)}else{I&&ne&&t.texStorage2D(i.TEXTURE_2D,pe,Me,Fe[0].width,Fe[0].height);for(let Q=0,$=Fe.length;Q<$;Q++)ce=Fe[Q],x.format!==cn?ue!==null?I?re&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ce.width,ce.height,ue,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Me,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?re&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ce.width,ce.height,ue,Re,ce.data):t.texImage2D(i.TEXTURE_2D,Q,Me,ce.width,ce.height,0,ue,Re,ce.data)}else if(x.isDataArrayTexture)if(I){if(ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Me,te.width,te.height,te.depth),re)if(x.layerUpdates.size>0){let Q=oc(te.width,te.height,x.format,x.type);for(let $ of x.layerUpdates){let _e=te.data.subarray($*Q/te.data.BYTES_PER_ELEMENT,($+1)*Q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,te.width,te.height,1,ue,Re,_e)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ue,Re,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,te.width,te.height,te.depth,0,ue,Re,te.data);else if(x.isData3DTexture)I?(ne&&t.texStorage3D(i.TEXTURE_3D,pe,Me,te.width,te.height,te.depth),re&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ue,Re,te.data)):t.texImage3D(i.TEXTURE_3D,0,Me,te.width,te.height,te.depth,0,ue,Re,te.data);else if(x.isFramebufferTexture){if(ne)if(I)t.texStorage2D(i.TEXTURE_2D,pe,Me,te.width,te.height);else{let Q=te.width,$=te.height;for(let _e=0;_e<pe;_e++)t.texImage2D(i.TEXTURE_2D,_e,Me,Q,$,0,ue,Re,null),Q>>=1,$>>=1}}else if(Fe.length>0){if(I&&ne){let Q=_t(Fe[0]);t.texStorage2D(i.TEXTURE_2D,pe,Me,Q.width,Q.height)}for(let Q=0,$=Fe.length;Q<$;Q++)ce=Fe[Q],I?re&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ue,Re,ce):t.texImage2D(i.TEXTURE_2D,Q,Me,ue,Re,ce);x.generateMipmaps=!1}else if(I){if(ne){let Q=_t(te);t.texStorage2D(i.TEXTURE_2D,pe,Me,Q.width,Q.height)}re&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Re,te)}else t.texImage2D(i.TEXTURE_2D,0,Me,ue,Re,te);m(x)&&p(X),be.__version=H.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function j(w,x,F){if(x.image.length!==6)return;let X=Qe(w,x),K=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+F);let H=n.get(K);if(K.version!==H.__version||X===!0){t.activeTexture(i.TEXTURE0+F);let be=We.getPrimaries(We.workingColorSpace),se=x.colorSpace===Bn?null:We.getPrimaries(x.colorSpace),ve=x.colorSpace===Bn||be===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Se=x.isCompressedTexture||x.image[0].isCompressedTexture,te=x.image[0]&&x.image[0].isDataTexture,ue=[];for(let $=0;$<6;$++)!Se&&!te?ue[$]=_(x.image[$],!0,s.maxCubemapSize):ue[$]=te?x.image[$].image:x.image[$],ue[$]=Tt(x,ue[$]);let Re=ue[0],Me=r.convert(x.format,x.colorSpace),ce=r.convert(x.type),Fe=E(x.internalFormat,Me,ce,x.colorSpace),I=x.isVideoTexture!==!0,ne=H.__version===void 0||X===!0,re=K.dataReady,pe=C(x,Re);Ve(i.TEXTURE_CUBE_MAP,x);let Q;if(Se){I&&ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Fe,Re.width,Re.height);for(let $=0;$<6;$++){Q=ue[$].mipmaps;for(let _e=0;_e<Q.length;_e++){let Le=Q[_e];x.format!==cn?Me!==null?I?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,0,0,Le.width,Le.height,Me,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,Fe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,0,0,Le.width,Le.height,Me,ce,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,Fe,Le.width,Le.height,0,Me,ce,Le.data)}}}else{if(Q=x.mipmaps,I&&ne){Q.length>0&&pe++;let $=_t(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Fe,$.width,$.height)}for(let $=0;$<6;$++)if(te){I?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ue[$].width,ue[$].height,Me,ce,ue[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Fe,ue[$].width,ue[$].height,0,Me,ce,ue[$].data);for(let _e=0;_e<Q.length;_e++){let et=Q[_e].image[$].image;I?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,0,0,et.width,et.height,Me,ce,et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,Fe,et.width,et.height,0,Me,ce,et.data)}}else{I?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Me,ce,ue[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Fe,Me,ce,ue[$]);for(let _e=0;_e<Q.length;_e++){let Le=Q[_e];I?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,0,0,Me,ce,Le.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,Fe,Me,ce,Le.image[$])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),H.__version=K.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function me(w,x,F,X,K,H){let be=r.convert(F.format,F.colorSpace),se=r.convert(F.type),ve=E(F.internalFormat,be,se,F.colorSpace),Se=n.get(x),te=n.get(F);if(te.__renderTarget=x,!Se.__hasExternalTextures){let ue=Math.max(1,x.width>>H),Re=Math.max(1,x.height>>H);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,H,ve,ue,Re,x.depth,0,be,se,null):t.texImage2D(K,H,ve,ue,Re,0,be,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ye(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,K,te.__webglTexture,0,ot(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,K,te.__webglTexture,H),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(w,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){let X=x.depthTexture,K=X&&X.isDepthTexture?X.type:null,H=v(x.stencilBuffer,K),be=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=ot(x);ye(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,H,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,H,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,H,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,w)}else{let X=x.textures;for(let K=0;K<X.length;K++){let H=X[K],be=r.convert(H.format,H.colorSpace),se=r.convert(H.type),ve=E(H.internalFormat,be,se,H.colorSpace),Se=ot(x);F&&ye(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,ve,x.width,x.height):ye(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,ve,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ve,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let X=n.get(x.depthTexture);X.__renderTarget=x,(!X.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q(x.depthTexture,0);let K=X.__webglTexture,H=ot(x);if(x.depthTexture.format===es)ye(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(x.depthTexture.format===ps)ye(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ge(w){let x=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let X=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=X}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let X=w.texture.mipmaps;X&&X.length>0?Ee(x.__webglFramebuffer[0],w):Ee(x.__webglFramebuffer,w)}else if(F){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=i.createRenderbuffer(),De(x.__webglDepthbuffer[X],w,!1);else{let K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=x.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,H)}}else{let X=w.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),De(x.__webglDepthbuffer,w,!1);else{let K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,H)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function It(w,x,F){let X=n.get(w);x!==void 0&&me(X.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ge(w)}function A(w){let x=w.texture,F=n.get(w),X=n.get(x);w.addEventListener("dispose",P);let K=w.textures,H=w.isWebGLCubeRenderTarget===!0,be=K.length>1;if(be||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=x.version,a.memory.textures++),H){F.__webglFramebuffer=[];for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[se]=[];for(let ve=0;ve<x.mipmaps.length;ve++)F.__webglFramebuffer[se][ve]=i.createFramebuffer()}else F.__webglFramebuffer[se]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let se=0;se<x.mipmaps.length;se++)F.__webglFramebuffer[se]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(be)for(let se=0,ve=K.length;se<ve;se++){let Se=n.get(K[se]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&ye(w)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let se=0;se<K.length;se++){let ve=K[se];F.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[se]);let Se=r.convert(ve.format,ve.colorSpace),te=r.convert(ve.type),ue=E(ve.internalFormat,Se,te,ve.colorSpace,w.isXRRenderTarget===!0),Re=ot(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,ue,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,F.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),De(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(H){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,x);for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0)for(let ve=0;ve<x.mipmaps.length;ve++)me(F.__webglFramebuffer[se][ve],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve);else me(F.__webglFramebuffer[se],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(x)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let se=0,ve=K.length;se<ve;se++){let Se=K[se],te=n.get(Se),ue=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ue=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,te.__webglTexture),Ve(ue,Se),me(F.__webglFramebuffer,w,Se,i.COLOR_ATTACHMENT0+se,ue,0),m(Se)&&p(ue)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(se=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,X.__webglTexture),Ve(se,x),x.mipmaps&&x.mipmaps.length>0)for(let ve=0;ve<x.mipmaps.length;ve++)me(F.__webglFramebuffer[ve],w,x,i.COLOR_ATTACHMENT0,se,ve);else me(F.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,se,0);m(x)&&p(se),t.unbindTexture()}w.depthBuffer&&Ge(w)}function at(w){let x=w.textures;for(let F=0,X=x.length;F<X;F++){let K=x[F];if(m(K)){let H=b(w),be=n.get(K).__webglTexture;t.bindTexture(H,be),p(H),t.unbindTexture()}}}let Ne=[],Pe=[];function xe(w){if(w.samples>0){if(ye(w)===!1){let x=w.textures,F=w.width,X=w.height,K=i.COLOR_BUFFER_BIT,H=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(w),se=x.length>1;if(se)for(let Se=0;Se<x.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);let ve=w.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Se=0;Se<x.length;Se++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[Se]);let te=n.get(x[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,F,X,0,0,F,X,K,i.NEAREST),l===!0&&(Ne.length=0,Pe.length=0,Ne.push(i.COLOR_ATTACHMENT0+Se),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ne.push(H),Pe.push(H),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Pe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let Se=0;Se<x.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,be.__webglColorRenderbuffer[Se]);let te=n.get(x[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ot(w){return Math.min(s.maxSamples,w.samples)}function ye(w){let x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Oe(w){let x=a.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function Tt(w,x){let F=w.colorSpace,X=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==gi&&F!==Bn&&(We.getTransfer(F)===$e?(X!==cn||K!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function _t(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=O,this.setTexture2D=q,this.setTexture2DArray=W,this.setTexture3D=ie,this.setTextureCube=V,this.rebindTextures=It,this.setupRenderTarget=A,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ye}function G_(i,e){function t(n,s=Bn){let r,a=We.getTransfer(s);if(n===gn)return i.UNSIGNED_BYTE;if(n===qa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ya)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ql)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gl)return i.BYTE;if(n===Wl)return i.SHORT;if(n===us)return i.UNSIGNED_SHORT;if(n===Xa)return i.INT;if(n===ni)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===ds)return i.HALF_FLOAT;if(n===Yl)return i.ALPHA;if(n===$l)return i.RGB;if(n===cn)return i.RGBA;if(n===es)return i.DEPTH_COMPONENT;if(n===ps)return i.DEPTH_STENCIL;if(n===Zl)return i.RED;if(n===$a)return i.RED_INTEGER;if(n===Jl)return i.RG;if(n===Za)return i.RG_INTEGER;if(n===Ja)return i.RGBA_INTEGER;if(n===mr||n===gr||n===_r||n===xr)if(a===$e)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ka||n===ja||n===Qa||n===eo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===eo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===to||n===no||n===io)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===to||n===no)return a===$e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===io)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===xo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===so)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ro)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ao)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oo)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lo)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===co)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ho)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uo)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fo)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===po)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mo)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===go)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_o)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xo)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yo||n===vo||n===So)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===yo)return a===$e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===So)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mo||n===bo||n===Eo||n===wo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Mo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var W_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X_=`
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

}`,vc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new $s(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new mn({vertexShader:W_,fragmentShader:X_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sc=class extends yn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,_=typeof XRWebGLBinding<"u",m=new vc,p={},b=t.getContextAttributes(),E=null,v=null,C=[],R=[],P=new le,N=null,M=new Nt;M.viewport=new dt;let S=new Nt;S.viewport=new dt;let D=[M,S],O=new Da,k=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=C[Y];return j===void 0&&(j=new rs,C[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=C[Y];return j===void 0&&(j=new rs,C[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=C[Y];return j===void 0&&(j=new rs,C[Y]=j),j.getHandSpace()};function q(Y){let j=R.indexOf(Y.inputSource);if(j===-1)return;let me=C[j];me!==void 0&&(me.update(Y.inputSource,Y.frame,c||a),me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ie);for(let Y=0;Y<C.length;Y++){let j=R[Y];j!==null&&(R[Y]=null,C[Y].disconnect(j))}k=null,G=null,m.reset();for(let Y in p)delete p[Y];e.setRenderTarget(E),d=null,f=null,u=null,s=null,v=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ie),b.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,De=null,Ee=null;b.depth&&(Ee=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=b.stencil?ps:es,De=b.stencil?fs:ni);let Ge={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ge),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new vn(f.textureWidth,f.textureHeight,{format:cn,type:gn,depthTexture:new Ys(f.textureWidth,f.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new vn(d.framebufferWidth,d.framebufferHeight,{format:cn,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),qe.setContext(s),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(Y){for(let j=0;j<Y.removed.length;j++){let me=Y.removed[j],De=R.indexOf(me);De>=0&&(R[De]=null,C[De].disconnect(me))}for(let j=0;j<Y.added.length;j++){let me=Y.added[j],De=R.indexOf(me);if(De===-1){for(let Ge=0;Ge<C.length;Ge++)if(Ge>=R.length){R.push(me),De=Ge;break}else if(R[Ge]===null){R[Ge]=me,De=Ge;break}if(De===-1)break}let Ee=C[De];Ee&&Ee.connect(me)}}let V=new T,oe=new T;function de(Y,j,me){V.setFromMatrixPosition(j.matrixWorld),oe.setFromMatrixPosition(me.matrixWorld);let De=V.distanceTo(oe),Ee=j.projectionMatrix.elements,Ge=me.projectionMatrix.elements,It=Ee[14]/(Ee[10]-1),A=Ee[14]/(Ee[10]+1),at=(Ee[9]+1)/Ee[5],Ne=(Ee[9]-1)/Ee[5],Pe=(Ee[8]-1)/Ee[0],xe=(Ge[8]+1)/Ge[0],ot=It*Pe,ye=It*xe,Oe=De/(-Pe+xe),Tt=Oe*-Pe;if(j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Tt),Y.translateZ(Oe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ee[10]===-1)Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let _t=It+Oe,w=A+Oe,x=ot-Tt,F=ye+(De-Tt),X=at*A/w*_t,K=Ne*A/w*_t;Y.projectionMatrix.makePerspective(x,F,X,K,_t,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function we(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let j=Y.near,me=Y.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(me=m.depthFar)),O.near=S.near=M.near=j,O.far=S.far=M.far=me,(k!==O.near||G!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,G=O.far),O.layers.mask=Y.layers.mask|6,M.layers.mask=O.layers.mask&3,S.layers.mask=O.layers.mask&5;let De=Y.parent,Ee=O.cameras;we(O,De);for(let Ge=0;Ge<Ee.length;Ge++)we(Ee[Ge],De);Ee.length===2?de(O,M,S):O.projectionMatrix.copy(M.projectionMatrix),Ve(Y,O,De)};function Ve(Y,j,me){me===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ts*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Y){return p[Y]};let Qe=null;function rt(Y,j){if(h=j.getViewerPose(c||a),g=j,h!==null){let me=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let De=!1;me.length!==O.cameras.length&&(O.cameras.length=0,De=!0);for(let A=0;A<me.length;A++){let at=me[A],Ne=null;if(d!==null)Ne=d.getViewport(at);else{let xe=u.getViewSubImage(f,at);Ne=xe.viewport,A===0&&(e.setRenderTargetTextures(v,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(v))}let Pe=D[A];Pe===void 0&&(Pe=new Nt,Pe.layers.enable(A),Pe.viewport=new dt,D[A]=Pe),Pe.matrix.fromArray(at.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(at.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),A===0&&(O.matrix.copy(Pe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),De===!0&&O.cameras.push(Pe)}let Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let A=u.getDepthInformation(me[0]);A&&A.isValid&&A.texture&&m.init(A,s.renderState)}if(Ee&&Ee.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let A=0;A<me.length;A++){let at=me[A].camera;if(at){let Ne=p[at];Ne||(Ne=new $s,p[at]=Ne);let Pe=u.getCameraImage(at);Ne.sourceTexture=Pe}}}}for(let me=0;me<C.length;me++){let De=R[me],Ee=C[me];De!==null&&Ee!==void 0&&Ee.update(De,j,c||a)}Qe&&Qe(Y,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let qe=new $u;qe.setAnimationLoop(rt),this.setAnimationLoop=function(Y){Qe=Y},this.dispose=function(){}}},Ci=new Kt,q_=new lt;function Y_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ic(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,E,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),E=b.envMap,v=b.envMapRotation;E&&(m.envMap.value=E,Ci.copy(v),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),m.envMapRotation.value.setFromMatrix4(q_.makeRotationFromEuler(Ci)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $_(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){let v=E.program;n.uniformBlockBinding(b,v)}function c(b,E){let v=s[b.id];v===void 0&&(g(b),v=h(b),s[b.id]=v,b.addEventListener("dispose",m));let C=E.program;n.updateUBOMapping(b,C);let R=e.render.frame;r[b.id]!==R&&(f(b),r[b.id]=R)}function h(b){let E=u();b.__bindingPointIndex=E;let v=i.createBuffer(),C=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,C,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,v),v}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let E=s[b.id],v=b.uniforms,C=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let R=0,P=v.length;R<P;R++){let N=Array.isArray(v[R])?v[R]:[v[R]];for(let M=0,S=N.length;M<S;M++){let D=N[M];if(d(D,R,M,C)===!0){let O=D.__offset,k=Array.isArray(D.value)?D.value:[D.value],G=0;for(let q=0;q<k.length;q++){let W=k[q],ie=_(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,O+G,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,G),G+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,E,v,C){let R=b.value,P=E+"_"+v;if(C[P]===void 0)return typeof R=="number"||typeof R=="boolean"?C[P]=R:C[P]=R.clone(),!0;{let N=C[P];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return C[P]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function g(b){let E=b.uniforms,v=0,C=16;for(let P=0,N=E.length;P<N;P++){let M=Array.isArray(E[P])?E[P]:[E[P]];for(let S=0,D=M.length;S<D;S++){let O=M[S],k=Array.isArray(O.value)?O.value:[O.value];for(let G=0,q=k.length;G<q;G++){let W=k[G],ie=_(W),V=v%C,oe=V%ie.boundary,de=V+oe;v+=oe,de!==0&&C-de<ie.storage&&(v+=C-de),O.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=ie.storage}}}let R=v%C;return R>0&&(v+=C-R),b.__size=v,b.__cache={},this}function _(b){let E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function m(b){let E=b.target;E.removeEventListener("dispose",m);let v=a.indexOf(E.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Po=class{constructor(e={}){let{canvas:t=gu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,b=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,C=!1;this._outputColorSpace=Ct;let R=0,P=0,N=null,M=-1,S=null,D=new dt,O=new dt,k=null,G=new ke(0),q=0,W=t.width,ie=t.height,V=1,oe=null,de=null,we=new dt(0,0,W,ie),Ve=new dt(0,0,W,ie),Qe=!1,rt=new as,qe=!1,Y=!1,j=new lt,me=new T,De=new dt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function It(){return N===null?V:1}let A=n;function at(y,L){return t.getContext(y,L)}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",Q,!1),A===null){let L="webgl2";if(A=at(L,y),A===null)throw at(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ne,Pe,xe,ot,ye,Oe,Tt,_t,w,x,F,X,K,H,be,se,ve,Se,te,ue,Re,Me,ce,Fe;function I(){Ne=new d0(A),Ne.init(),Me=new G_(A,Ne),Pe=new r0(A,Ne,e,Me),xe=new V_(A,Ne),Pe.reversedDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),ot=new m0(A),ye=new C_,Oe=new H_(A,Ne,xe,ye,Pe,Me,ot),Tt=new o0(v),_t=new u0(v),w=new Sp(A),ce=new i0(A,w),x=new f0(A,w,ot,ce),F=new _0(A,x,w,ot),te=new g0(A,Pe,Oe),se=new a0(ye),X=new A_(v,Tt,_t,Ne,Pe,ce,se),K=new Y_(v,ye),H=new P_,be=new F_(Ne),Se=new n0(v,Tt,_t,xe,F,d,l),ve=new z_(v,F,Pe),Fe=new $_(A,ot,Pe,xe),ue=new s0(A,Ne,ot),Re=new p0(A,Ne,ot),ot.programs=X.programs,v.capabilities=Pe,v.extensions=Ne,v.properties=ye,v.renderLists=H,v.shadowMap=ve,v.state=xe,v.info=ot}I();let ne=new Sc(v,A);this.xr=ne,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let y=Ne.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Ne.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(W,ie,!1))},this.getSize=function(y){return y.set(W,ie)},this.setSize=function(y,L,B=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,ie=L,t.width=Math.floor(y*V),t.height=Math.floor(L*V),B===!0&&(t.style.width=y+"px",t.style.height=L+"px"),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(W*V,ie*V).floor()},this.setDrawingBufferSize=function(y,L,B){W=y,ie=L,V=B,t.width=Math.floor(y*B),t.height=Math.floor(L*B),this.setViewport(0,0,y,L)},this.getCurrentViewport=function(y){return y.copy(D)},this.getViewport=function(y){return y.copy(we)},this.setViewport=function(y,L,B,z){y.isVector4?we.set(y.x,y.y,y.z,y.w):we.set(y,L,B,z),xe.viewport(D.copy(we).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(Ve)},this.setScissor=function(y,L,B,z){y.isVector4?Ve.set(y.x,y.y,y.z,y.w):Ve.set(y,L,B,z),xe.scissor(O.copy(Ve).multiplyScalar(V).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(y){xe.setScissorTest(Qe=y)},this.setOpaqueSort=function(y){oe=y},this.setTransparentSort=function(y){de=y},this.getClearColor=function(y){return y.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(y=!0,L=!0,B=!0){let z=0;if(y){let U=!1;if(N!==null){let ee=N.texture.format;U=ee===Ja||ee===Za||ee===$a}if(U){let ee=N.texture.type,he=ee===gn||ee===ni||ee===us||ee===fs||ee===qa||ee===Ya,ge=Se.getClearColor(),fe=Se.getClearAlpha(),Ce=ge.r,Ie=ge.g,Te=ge.b;he?(g[0]=Ce,g[1]=Ie,g[2]=Te,g[3]=fe,A.clearBufferuiv(A.COLOR,0,g)):(_[0]=Ce,_[1]=Ie,_[2]=Te,_[3]=fe,A.clearBufferiv(A.COLOR,0,_))}else z|=A.COLOR_BUFFER_BIT}L&&(z|=A.DEPTH_BUFFER_BIT),B&&(z|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),Se.dispose(),H.dispose(),be.dispose(),ye.dispose(),Tt.dispose(),_t.dispose(),F.dispose(),ce.dispose(),Fe.dispose(),X.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",xn),ne.removeEventListener("sessionend",kc),oi.stop()};function re(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let y=ot.autoReset,L=ve.enabled,B=ve.autoUpdate,z=ve.needsUpdate,U=ve.type;I(),ot.autoReset=y,ve.enabled=L,ve.autoUpdate=B,ve.needsUpdate=z,ve.type=U}function Q(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function $(y){let L=y.target;L.removeEventListener("dispose",$),_e(L)}function _e(y){Le(y),ye.remove(y)}function Le(y){let L=ye.get(y).programs;L!==void 0&&(L.forEach(function(B){X.releaseProgram(B)}),y.isShaderMaterial&&X.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,B,z,U,ee){L===null&&(L=Ee);let he=U.isMesh&&U.matrixWorld.determinant()<0,ge=Yd(y,L,B,z,U);xe.setMaterial(z,he);let fe=B.index,Ce=1;if(z.wireframe===!0){if(fe=x.getWireframeAttribute(B),fe===void 0)return;Ce=2}let Ie=B.drawRange,Te=B.attributes.position,He=Ie.start*Ce,Ze=(Ie.start+Ie.count)*Ce;ee!==null&&(He=Math.max(He,ee.start*Ce),Ze=Math.min(Ze,(ee.start+ee.count)*Ce)),fe!==null?(He=Math.max(He,0),Ze=Math.min(Ze,fe.count)):Te!=null&&(He=Math.max(He,0),Ze=Math.min(Ze,Te.count));let pt=Ze-He;if(pt<0||pt===1/0)return;ce.setup(U,z,ge,B,fe);let tt,je=ue;if(fe!==null&&(tt=w.get(fe),je=Re,je.setIndex(tt)),U.isMesh)z.wireframe===!0?(xe.setLineWidth(z.wireframeLinewidth*It()),je.setMode(A.LINES)):je.setMode(A.TRIANGLES);else if(U.isLine){let Ae=z.linewidth;Ae===void 0&&(Ae=1),xe.setLineWidth(Ae*It()),U.isLineSegments?je.setMode(A.LINES):U.isLineLoop?je.setMode(A.LINE_LOOP):je.setMode(A.LINE_STRIP)}else U.isPoints?je.setMode(A.POINTS):U.isSprite&&je.setMode(A.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ns("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),je.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))je.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Ae=U._multiDrawStarts,ct=U._multiDrawCounts,Xe=U._multiDrawCount,qt=fe?w.get(fe).bytesPerElement:1,Oi=ye.get(z).currentProgram.getUniforms();for(let Yt=0;Yt<Xe;Yt++)Oi.setValue(A,"_gl_DrawID",Yt),je.render(Ae[Yt]/qt,ct[Yt])}else if(U.isInstancedMesh)je.renderInstances(He,pt,U.count);else if(B.isInstancedBufferGeometry){let Ae=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ct=Math.min(B.instanceCount,Ae);je.renderInstances(He,pt,ct)}else je.render(He,pt)};function et(y,L,B){y.transparent===!0&&y.side===Ut&&y.forceSinglePass===!1?(y.side=kt,y.needsUpdate=!0,Dr(y,L,B),y.side=Ln,y.needsUpdate=!0,Dr(y,L,B),y.side=Ut):Dr(y,L,B)}this.compile=function(y,L,B=null){B===null&&(B=y),p=be.get(B),p.init(L),E.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),y!==B&&y.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let z=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let ee=U.material;if(ee)if(Array.isArray(ee))for(let he=0;he<ee.length;he++){let ge=ee[he];et(ge,B,U),z.add(ge)}else et(ee,B,U),z.add(ee)}),p=E.pop(),z},this.compileAsync=function(y,L,B=null){let z=this.compile(y,L,B);return new Promise(U=>{function ee(){if(z.forEach(function(he){ye.get(he).currentProgram.isReady()&&z.delete(he)}),z.size===0){U(y);return}setTimeout(ee,10)}Ne.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Ye=null;function Tn(y){Ye&&Ye(y)}function xn(){oi.stop()}function kc(){oi.start()}let oi=new $u;oi.setAnimationLoop(Tn),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(y){Ye=y,ne.setAnimationLoop(y),y===null?oi.stop():oi.start()},ne.addEventListener("sessionstart",xn),ne.addEventListener("sessionend",kc),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(L),L=ne.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,L,N),p=be.get(y,E.length),p.init(L),E.push(p),j.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),rt.setFromProjectionMatrix(j,fn,L.reversedDepth),Y=this.localClippingEnabled,qe=se.init(this.clippingPlanes,Y),m=H.get(y,b.length),m.init(),b.push(m),ne.enabled===!0&&ne.isPresenting===!0){let ee=v.xr.getDepthSensingMesh();ee!==null&&$o(ee,L,-1/0,v.sortObjects)}$o(y,L,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(oe,de),Ge=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Ge&&Se.addToRenderList(m,y),this.info.render.frame++,qe===!0&&se.beginShadows();let B=p.state.shadowsArray;ve.render(B,y,L),qe===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=m.opaque,U=m.transmissive;if(p.setupLights(),L.isArrayCamera){let ee=L.cameras;if(U.length>0)for(let he=0,ge=ee.length;he<ge;he++){let fe=ee[he];Hc(z,U,y,fe)}Ge&&Se.render(y);for(let he=0,ge=ee.length;he<ge;he++){let fe=ee[he];Vc(m,y,fe,fe.viewport)}}else U.length>0&&Hc(z,U,y,L),Ge&&Se.render(y),Vc(m,y,L);N!==null&&P===0&&(Oe.updateMultisampleRenderTarget(N),Oe.updateRenderTargetMipmap(N)),y.isScene===!0&&y.onAfterRender(v,y,L),ce.resetDefaultState(),M=-1,S=null,E.pop(),E.length>0?(p=E[E.length-1],qe===!0&&se.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function $o(y,L,B,z){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||rt.intersectsSprite(y)){z&&De.setFromMatrixPosition(y.matrixWorld).applyMatrix4(j);let he=F.update(y),ge=y.material;ge.visible&&m.push(y,he,ge,B,De.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||rt.intersectsObject(y))){let he=F.update(y),ge=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),De.copy(y.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),De.copy(he.boundingSphere.center)),De.applyMatrix4(y.matrixWorld).applyMatrix4(j)),Array.isArray(ge)){let fe=he.groups;for(let Ce=0,Ie=fe.length;Ce<Ie;Ce++){let Te=fe[Ce],He=ge[Te.materialIndex];He&&He.visible&&m.push(y,he,He,B,De.z,Te)}}else ge.visible&&m.push(y,he,ge,B,De.z,null)}}let ee=y.children;for(let he=0,ge=ee.length;he<ge;he++)$o(ee[he],L,B,z)}function Vc(y,L,B,z){let U=y.opaque,ee=y.transmissive,he=y.transparent;p.setupLightsView(B),qe===!0&&se.setGlobalState(v.clippingPlanes,B),z&&xe.viewport(D.copy(z)),U.length>0&&Ir(U,L,B),ee.length>0&&Ir(ee,L,B),he.length>0&&Ir(he,L,B),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Hc(y,L,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new vn(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?ds:gn,minFilter:ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));let ee=p.state.transmissionRenderTarget[z.id],he=z.viewport||D;ee.setSize(he.z*v.transmissionResolutionScale,he.w*v.transmissionResolutionScale);let ge=v.getRenderTarget(),fe=v.getActiveCubeFace(),Ce=v.getActiveMipmapLevel();v.setRenderTarget(ee),v.getClearColor(G),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),Ge&&Se.render(B);let Ie=v.toneMapping;v.toneMapping=On;let Te=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),qe===!0&&se.setGlobalState(v.clippingPlanes,z),Ir(y,B,z),Oe.updateMultisampleRenderTarget(ee),Oe.updateRenderTargetMipmap(ee),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ze=0,pt=L.length;Ze<pt;Ze++){let tt=L[Ze],je=tt.object,Ae=tt.geometry,ct=tt.material,Xe=tt.group;if(ct.side===Ut&&je.layers.test(z.layers)){let qt=ct.side;ct.side=kt,ct.needsUpdate=!0,Gc(je,B,z,Ae,ct,Xe),ct.side=qt,ct.needsUpdate=!0,He=!0}}He===!0&&(Oe.updateMultisampleRenderTarget(ee),Oe.updateRenderTargetMipmap(ee))}v.setRenderTarget(ge,fe,Ce),v.setClearColor(G,q),Te!==void 0&&(z.viewport=Te),v.toneMapping=Ie}function Ir(y,L,B){let z=L.isScene===!0?L.overrideMaterial:null;for(let U=0,ee=y.length;U<ee;U++){let he=y[U],ge=he.object,fe=he.geometry,Ce=he.group,Ie=he.material;Ie.allowOverride===!0&&z!==null&&(Ie=z),ge.layers.test(B.layers)&&Gc(ge,L,B,fe,Ie,Ce)}}function Gc(y,L,B,z,U,ee){y.onBeforeRender(v,L,B,z,U,ee),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(v,L,B,z,y,ee),U.transparent===!0&&U.side===Ut&&U.forceSinglePass===!1?(U.side=kt,U.needsUpdate=!0,v.renderBufferDirect(B,L,z,U,y,ee),U.side=Ln,U.needsUpdate=!0,v.renderBufferDirect(B,L,z,U,y,ee),U.side=Ut):v.renderBufferDirect(B,L,z,U,y,ee),y.onAfterRender(v,L,B,z,U,ee)}function Dr(y,L,B){L.isScene!==!0&&(L=Ee);let z=ye.get(y),U=p.state.lights,ee=p.state.shadowsArray,he=U.state.version,ge=X.getParameters(y,U.state,ee,L,B),fe=X.getProgramCacheKey(ge),Ce=z.programs;z.environment=y.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(y.isMeshStandardMaterial?_t:Tt).get(y.envMap||z.environment),z.envMapRotation=z.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Ce===void 0&&(y.addEventListener("dispose",$),Ce=new Map,z.programs=Ce);let Ie=Ce.get(fe);if(Ie!==void 0){if(z.currentProgram===Ie&&z.lightsStateVersion===he)return Xc(y,ge),Ie}else ge.uniforms=X.getUniforms(y),y.onBeforeCompile(ge,v),Ie=X.acquireProgram(ge,fe),Ce.set(fe,Ie),z.uniforms=ge.uniforms;let Te=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Te.clippingPlanes=se.uniform),Xc(y,ge),z.needsLights=Zd(y),z.lightsStateVersion=he,z.needsLights&&(Te.ambientLightColor.value=U.state.ambient,Te.lightProbe.value=U.state.probe,Te.directionalLights.value=U.state.directional,Te.directionalLightShadows.value=U.state.directionalShadow,Te.spotLights.value=U.state.spot,Te.spotLightShadows.value=U.state.spotShadow,Te.rectAreaLights.value=U.state.rectArea,Te.ltc_1.value=U.state.rectAreaLTC1,Te.ltc_2.value=U.state.rectAreaLTC2,Te.pointLights.value=U.state.point,Te.pointLightShadows.value=U.state.pointShadow,Te.hemisphereLights.value=U.state.hemi,Te.directionalShadowMap.value=U.state.directionalShadowMap,Te.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Te.spotShadowMap.value=U.state.spotShadowMap,Te.spotLightMatrix.value=U.state.spotLightMatrix,Te.spotLightMap.value=U.state.spotLightMap,Te.pointShadowMap.value=U.state.pointShadowMap,Te.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Ie,z.uniformsList=null,Ie}function Wc(y){if(y.uniformsList===null){let L=y.currentProgram.getUniforms();y.uniformsList=_s.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function Xc(y,L){let B=ye.get(y);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.batchingColor=L.batchingColor,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.instancingMorph=L.instancingMorph,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function Yd(y,L,B,z,U){L.isScene!==!0&&(L=Ee),Oe.resetTextureUnits();let ee=L.fog,he=z.isMeshStandardMaterial?L.environment:null,ge=N===null?v.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:gi,fe=(z.isMeshStandardMaterial?_t:Tt).get(z.envMap||he),Ce=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ie=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Te=!!B.morphAttributes.position,He=!!B.morphAttributes.normal,Ze=!!B.morphAttributes.color,pt=On;z.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(pt=v.toneMapping);let tt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,je=tt!==void 0?tt.length:0,Ae=ye.get(z),ct=p.state.lights;if(qe===!0&&(Y===!0||y!==S)){let Bt=y===S&&z.id===M;se.setState(z,y,Bt)}let Xe=!1;z.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==ct.state.version||Ae.outputColorSpace!==ge||U.isBatchedMesh&&Ae.batching===!1||!U.isBatchedMesh&&Ae.batching===!0||U.isBatchedMesh&&Ae.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ae.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ae.instancing===!1||!U.isInstancedMesh&&Ae.instancing===!0||U.isSkinnedMesh&&Ae.skinning===!1||!U.isSkinnedMesh&&Ae.skinning===!0||U.isInstancedMesh&&Ae.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ae.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ae.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ae.instancingMorph===!1&&U.morphTexture!==null||Ae.envMap!==fe||z.fog===!0&&Ae.fog!==ee||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==se.numPlanes||Ae.numIntersection!==se.numIntersection)||Ae.vertexAlphas!==Ce||Ae.vertexTangents!==Ie||Ae.morphTargets!==Te||Ae.morphNormals!==He||Ae.morphColors!==Ze||Ae.toneMapping!==pt||Ae.morphTargetsCount!==je)&&(Xe=!0):(Xe=!0,Ae.__version=z.version);let qt=Ae.currentProgram;Xe===!0&&(qt=Dr(z,L,U));let Oi=!1,Yt=!1,bs=!1,ht=qt.getUniforms(),nn=Ae.uniforms;if(xe.useProgram(qt.program)&&(Oi=!0,Yt=!0,bs=!0),z.id!==M&&(M=z.id,Yt=!0),Oi||S!==y){xe.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ht.setValue(A,"projectionMatrix",y.projectionMatrix),ht.setValue(A,"viewMatrix",y.matrixWorldInverse);let Ht=ht.map.cameraPosition;Ht!==void 0&&Ht.setValue(A,me.setFromMatrixPosition(y.matrixWorld)),Pe.logarithmicDepthBuffer&&ht.setValue(A,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ht.setValue(A,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,Yt=!0,bs=!0)}if(U.isSkinnedMesh){ht.setOptional(A,U,"bindMatrix"),ht.setOptional(A,U,"bindMatrixInverse");let Bt=U.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),ht.setValue(A,"boneTexture",Bt.boneTexture,Oe))}U.isBatchedMesh&&(ht.setOptional(A,U,"batchingTexture"),ht.setValue(A,"batchingTexture",U._matricesTexture,Oe),ht.setOptional(A,U,"batchingIdTexture"),ht.setValue(A,"batchingIdTexture",U._indirectTexture,Oe),ht.setOptional(A,U,"batchingColorTexture"),U._colorsTexture!==null&&ht.setValue(A,"batchingColorTexture",U._colorsTexture,Oe));let sn=B.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&te.update(U,B,qt),(Yt||Ae.receiveShadow!==U.receiveShadow)&&(Ae.receiveShadow=U.receiveShadow,ht.setValue(A,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(nn.envMap.value=fe,nn.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&L.environment!==null&&(nn.envMapIntensity.value=L.environmentIntensity),Yt&&(ht.setValue(A,"toneMappingExposure",v.toneMappingExposure),Ae.needsLights&&$d(nn,bs),ee&&z.fog===!0&&K.refreshFogUniforms(nn,ee),K.refreshMaterialUniforms(nn,z,V,ie,p.state.transmissionRenderTarget[y.id]),_s.upload(A,Wc(Ae),nn,Oe)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(_s.upload(A,Wc(Ae),nn,Oe),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ht.setValue(A,"center",U.center),ht.setValue(A,"modelViewMatrix",U.modelViewMatrix),ht.setValue(A,"normalMatrix",U.normalMatrix),ht.setValue(A,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Bt=z.uniformsGroups;for(let Ht=0,Zo=Bt.length;Ht<Zo;Ht++){let li=Bt[Ht];Fe.update(li,qt),Fe.bind(li,qt)}}return qt}function $d(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function Zd(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(y,L,B){let z=ye.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),ye.get(y.texture).__webglTexture=L,ye.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,L){let B=ye.get(y);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0};let Jd=A.createFramebuffer();this.setRenderTarget=function(y,L=0,B=0){N=y,R=L,P=B;let z=!0,U=null,ee=!1,he=!1;if(y){let fe=ye.get(y);if(fe.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(A.FRAMEBUFFER,null),z=!1;else if(fe.__webglFramebuffer===void 0)Oe.setupRenderTarget(y);else if(fe.__hasExternalTextures)Oe.rebindTextures(y,ye.get(y.texture).__webglTexture,ye.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Te=y.depthTexture;if(fe.__boundDepthTexture!==Te){if(Te!==null&&ye.has(Te)&&(y.width!==Te.image.width||y.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(y)}}let Ce=y.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(he=!0);let Ie=ye.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ie[L])?U=Ie[L][B]:U=Ie[L],ee=!0):y.samples>0&&Oe.useMultisampledRTT(y)===!1?U=ye.get(y).__webglMultisampledFramebuffer:Array.isArray(Ie)?U=Ie[B]:U=Ie,D.copy(y.viewport),O.copy(y.scissor),k=y.scissorTest}else D.copy(we).multiplyScalar(V).floor(),O.copy(Ve).multiplyScalar(V).floor(),k=Qe;if(B!==0&&(U=Jd),xe.bindFramebuffer(A.FRAMEBUFFER,U)&&z&&xe.drawBuffers(y,U),xe.viewport(D),xe.scissor(O),xe.setScissorTest(k),ee){let fe=ye.get(y.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+L,fe.__webglTexture,B)}else if(he){let fe=L;for(let Ce=0;Ce<y.textures.length;Ce++){let Ie=ye.get(y.textures[Ce]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Ce,Ie.__webglTexture,B,fe)}}else if(y!==null&&B!==0){let fe=ye.get(y.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,fe.__webglTexture,B)}M=-1},this.readRenderTargetPixels=function(y,L,B,z,U,ee,he,ge=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=ye.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&he!==void 0&&(fe=fe[he]),fe){xe.bindFramebuffer(A.FRAMEBUFFER,fe);try{let Ce=y.textures[ge],Ie=Ce.format,Te=Ce.type;if(!Pe.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-z&&B>=0&&B<=y.height-U&&(y.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ge),A.readPixels(L,B,z,U,Me.convert(Ie),Me.convert(Te),ee))}finally{let Ce=N!==null?ye.get(N).__webglFramebuffer:null;xe.bindFramebuffer(A.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(y,L,B,z,U,ee,he,ge=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=ye.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&he!==void 0&&(fe=fe[he]),fe)if(L>=0&&L<=y.width-z&&B>=0&&B<=y.height-U){xe.bindFramebuffer(A.FRAMEBUFFER,fe);let Ce=y.textures[ge],Ie=Ce.format,Te=Ce.type;if(!Pe.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let He=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,He),A.bufferData(A.PIXEL_PACK_BUFFER,ee.byteLength,A.STREAM_READ),y.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ge),A.readPixels(L,B,z,U,Me.convert(Ie),Me.convert(Te),0);let Ze=N!==null?ye.get(N).__webglFramebuffer:null;xe.bindFramebuffer(A.FRAMEBUFFER,Ze);let pt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await _u(A,pt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,He),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ee),A.deleteBuffer(He),A.deleteSync(pt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,L=null,B=0){let z=Math.pow(2,-B),U=Math.floor(y.image.width*z),ee=Math.floor(y.image.height*z),he=L!==null?L.x:0,ge=L!==null?L.y:0;Oe.setTexture2D(y,0),A.copyTexSubImage2D(A.TEXTURE_2D,B,0,0,he,ge,U,ee),xe.unbindTexture()};let Kd=A.createFramebuffer(),jd=A.createFramebuffer();this.copyTextureToTexture=function(y,L,B=null,z=null,U=0,ee=null){ee===null&&(U!==0?(ns("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=U,U=0):ee=0);let he,ge,fe,Ce,Ie,Te,He,Ze,pt,tt=y.isCompressedTexture?y.mipmaps[ee]:y.image;if(B!==null)he=B.max.x-B.min.x,ge=B.max.y-B.min.y,fe=B.isBox3?B.max.z-B.min.z:1,Ce=B.min.x,Ie=B.min.y,Te=B.isBox3?B.min.z:0;else{let sn=Math.pow(2,-U);he=Math.floor(tt.width*sn),ge=Math.floor(tt.height*sn),y.isDataArrayTexture?fe=tt.depth:y.isData3DTexture?fe=Math.floor(tt.depth*sn):fe=1,Ce=0,Ie=0,Te=0}z!==null?(He=z.x,Ze=z.y,pt=z.z):(He=0,Ze=0,pt=0);let je=Me.convert(L.format),Ae=Me.convert(L.type),ct;L.isData3DTexture?(Oe.setTexture3D(L,0),ct=A.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Oe.setTexture2DArray(L,0),ct=A.TEXTURE_2D_ARRAY):(Oe.setTexture2D(L,0),ct=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,L.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,L.unpackAlignment);let Xe=A.getParameter(A.UNPACK_ROW_LENGTH),qt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Oi=A.getParameter(A.UNPACK_SKIP_PIXELS),Yt=A.getParameter(A.UNPACK_SKIP_ROWS),bs=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,tt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,tt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ce),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ie),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Te);let ht=y.isDataArrayTexture||y.isData3DTexture,nn=L.isDataArrayTexture||L.isData3DTexture;if(y.isDepthTexture){let sn=ye.get(y),Bt=ye.get(L),Ht=ye.get(sn.__renderTarget),Zo=ye.get(Bt.__renderTarget);xe.bindFramebuffer(A.READ_FRAMEBUFFER,Ht.__webglFramebuffer),xe.bindFramebuffer(A.DRAW_FRAMEBUFFER,Zo.__webglFramebuffer);for(let li=0;li<fe;li++)ht&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ye.get(y).__webglTexture,U,Te+li),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ye.get(L).__webglTexture,ee,pt+li)),A.blitFramebuffer(Ce,Ie,he,ge,He,Ze,he,ge,A.DEPTH_BUFFER_BIT,A.NEAREST);xe.bindFramebuffer(A.READ_FRAMEBUFFER,null),xe.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(U!==0||y.isRenderTargetTexture||ye.has(y)){let sn=ye.get(y),Bt=ye.get(L);xe.bindFramebuffer(A.READ_FRAMEBUFFER,Kd),xe.bindFramebuffer(A.DRAW_FRAMEBUFFER,jd);for(let Ht=0;Ht<fe;Ht++)ht?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,sn.__webglTexture,U,Te+Ht):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,sn.__webglTexture,U),nn?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Bt.__webglTexture,ee,pt+Ht):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Bt.__webglTexture,ee),U!==0?A.blitFramebuffer(Ce,Ie,he,ge,He,Ze,he,ge,A.COLOR_BUFFER_BIT,A.NEAREST):nn?A.copyTexSubImage3D(ct,ee,He,Ze,pt+Ht,Ce,Ie,he,ge):A.copyTexSubImage2D(ct,ee,He,Ze,Ce,Ie,he,ge);xe.bindFramebuffer(A.READ_FRAMEBUFFER,null),xe.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else nn?y.isDataTexture||y.isData3DTexture?A.texSubImage3D(ct,ee,He,Ze,pt,he,ge,fe,je,Ae,tt.data):L.isCompressedArrayTexture?A.compressedTexSubImage3D(ct,ee,He,Ze,pt,he,ge,fe,je,tt.data):A.texSubImage3D(ct,ee,He,Ze,pt,he,ge,fe,je,Ae,tt):y.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,ee,He,Ze,he,ge,je,Ae,tt.data):y.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,ee,He,Ze,tt.width,tt.height,je,tt.data):A.texSubImage2D(A.TEXTURE_2D,ee,He,Ze,he,ge,je,Ae,tt);A.pixelStorei(A.UNPACK_ROW_LENGTH,Xe),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,qt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Oi),A.pixelStorei(A.UNPACK_SKIP_ROWS,Yt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,bs),ee===0&&L.generateMipmaps&&A.generateMipmap(ct),xe.unbindTexture()},this.initRenderTarget=function(y){ye.get(y).__webglFramebuffer===void 0&&Oe.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Oe.setTextureCube(y,0):y.isData3DTexture?Oe.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Oe.setTexture2DArray(y,0):Oe.setTexture2D(y,0),xe.unbindTexture()},this.resetState=function(){R=0,P=0,N=null,xe.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}};var Qu={type:"change"},Ec={type:"start"},td={type:"end"},Do=new Jn,ed=new vt,Z_=Math.cos(70*tc.DEG2RAD),bt=new T,Xt=2*Math.PI,Ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bc=1e-6,Lo=class extends dr{constructor(e,t=null){super(e,t),this.state=Ke.NONE,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qn.ROTATE,MIDDLE:Qn.DOLLY,RIGHT:Qn.PAN},this.touches={ONE:ei.ROTATE,TWO:ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new Gt,this._lastTargetPosition=new T,this._quat=new Gt().setFromUnitVectors(e.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new hs,this._sphericalDelta=new hs,this._scale=1,this._panOffset=new T,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new T,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=K_.bind(this),this._onPointerDown=J_.bind(this),this._onPointerUp=j_.bind(this),this._onContextMenu=rx.bind(this),this._onMouseWheel=tx.bind(this),this._onKeyDown=nx.bind(this),this._onTouchStart=ix.bind(this),this._onTouchMove=sx.bind(this),this._onMouseDown=Q_.bind(this),this._onMouseMove=ex.bind(this),this._interceptControlDown=ax.bind(this),this._interceptControlUp=ox.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Qu),this.update(),this.state=Ke.NONE}update(e=null){let t=this.object.position;bt.copy(t).sub(this.target),bt.applyQuaternion(this._quat),this._spherical.setFromVector3(bt),this.autoRotate&&this.state===Ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Xt:n>Math.PI&&(n-=Xt),s<-Math.PI?s+=Xt:s>Math.PI&&(s-=Xt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(bt.setFromSpherical(this._spherical),bt.applyQuaternion(this._quatInverse),t.copy(this.target).add(bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=bt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new T(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new T(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Do.origin.copy(this.object.position),Do.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Do.direction))<Z_?this.object.lookAt(this.target):(ed.setFromNormalAndCoplanarPoint(this.object.up,this.target),Do.intersectPlane(ed,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>bc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bc||this._lastTargetPosition.distanceToSquared(this.target)>bc?(this.dispatchEvent(Qu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Xt/60*this.autoRotateSpeed*e:Xt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){bt.setFromMatrixColumn(t,0),bt.multiplyScalar(-e),this._panOffset.add(bt)}_panUp(e,t){this.screenSpacePanning===!0?bt.setFromMatrixColumn(t,1):(bt.setFromMatrixColumn(t,0),bt.crossVectors(this.object.up,bt)),bt.multiplyScalar(e),this._panOffset.add(bt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;bt.copy(s).sub(this.target);let r=bt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new le,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function J_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function K_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function j_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(td),this.state=Ke.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Q_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Qn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ke.DOLLY;break;case Qn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ke.ROTATE}break;case Qn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ke.PAN}break;default:this.state=Ke.NONE}this.state!==Ke.NONE&&this.dispatchEvent(Ec)}function ex(i){switch(this.state){case Ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function tx(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ke.NONE||(i.preventDefault(),this.dispatchEvent(Ec),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(td))}function nx(i){this.enabled!==!1&&this._handleKeyDown(i)}function ix(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ei.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ke.TOUCH_ROTATE;break;case ei.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ke.TOUCH_PAN;break;default:this.state=Ke.NONE}break;case 2:switch(this.touches.TWO){case ei.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ke.TOUCH_DOLLY_PAN;break;case ei.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ke.TOUCH_DOLLY_ROTATE;break;default:this.state=Ke.NONE}break;default:this.state=Ke.NONE}this.state!==Ke.NONE&&this.dispatchEvent(Ec)}function sx(i){switch(this._trackPointer(i),this.state){case Ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ke.NONE}}function rx(i){this.enabled!==!1&&i.preventDefault()}function ax(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ox(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var nd=(i,e,t,n,s,r="up")=>{let a=i-t,o=e-n,l=Math.sqrt(a*a+o*o);if(l===0)return!0;let c=Math.atan2(o,a),h=s/2,u=r==="down"?h*(1+Math.sin(c)):h*(1-Math.sin(c));return l<=u},Sr=(i,e,t,n=30)=>{if(!i||i.length===0||e<=0||t<=0)return{best:0,limit:0};let s=Math.round(n*(t/e));if(isNaN(s)||s<=0)return{best:0,limit:0};let r=0,a=0,o=n*s;for(let l=0;l<s;l++){let c=(l+.5)*(t/s);for(let h=0;h<n;h++){let u=(h+.5)*(e/n),f=!1,d=!1;for(let g of i)if(!f&&nd(u,c,g.x,g.y,6,g.facing)&&(f=!0,d=!0),!d&&nd(u,c,g.x,g.y,8,g.facing)&&(d=!0),f&&d)break;f&&r++,d&&a++}}return{best:r/o*100,limit:a/o*100}};function lx(i,e){return[{axis:"x",value:0,keepGreater:!0},{axis:"x",value:e.width,keepGreater:!1},{axis:"z",value:0,keepGreater:!0},{axis:"z",value:e.depth,keepGreater:!1}].reduce((n,s)=>{if(!n.length)return n;let r=l=>s.keepGreater?l[s.axis]>=s.value:l[s.axis]<=s.value,a=(l,c)=>{let h=c[s.axis]-l[s.axis],u=h===0?0:(s.value-l[s.axis])/h;return{x:l.x+(c.x-l.x)*u,z:l.z+(c.z-l.z)*u}},o=[];for(let l=0;l<n.length;l++){let c=n[l],h=n[(l+n.length-1)%n.length];r(c)?(r(h)||o.push(a(h,c)),o.push(c)):r(h)&&o.push(a(h,c))}return o},i)}function cx(i,e,t,n,s,r){let a=lx(e,r);if(a.length<3)return;let o=new ls;o.moveTo(a[0].x,a[0].z);for(let u of a.slice(1))o.lineTo(u.x,u.z);o.closePath();let l=new ft(new sr(o),new on({color:t,transparent:!0,opacity:n,side:Ut,depthWrite:!1}));l.rotation.x=Math.PI/2,l.position.y=s,l.renderOrder=2+s*100,i.add(l);let c=a.map(u=>new T(u.x,s+.006,u.z)),h=new Un(new xt().setFromPoints(c),new ln({color:t,transparent:!0,opacity:.75,depthTest:!1}));h.renderOrder=l.renderOrder+.1,i.add(h)}function id(i,e){let t=new Je;for(let n of e)if(n.kind==="s210"){let s=n.direction==="rear"?1:-1;for(let[r,a,o]of[[8,.075,.025],[6,.13,.03]]){let l=[];for(let c=0;c<360;c+=4){let h=c*Math.PI/180,u=r/2*(1+s*Math.sin(h));l.push({x:n.x+u*Math.cos(h),z:n.depth+u*Math.sin(h)})}cx(t,l,"#16a589",a,o,i)}}return t.visible=!1,t}var _n=(i,e,t)=>Math.max(e,Math.min(t,i)),sd={best:80,limit:95},hx=8,ux=2,br=hx+ux,Uo=(i,e,t)=>{if(i.length===0)return i;let n=Math.min(...i.map(o=>o.y)),s=i.filter(o=>Math.abs(o.y-n)<1e-6),r=new Set(s.map(o=>o.id)),a=_n(.8,.3,t-.3);return i.map(o=>{if(!r.has(o.id))return{...o,facing:"up"};let l=s.findIndex(h=>h.id===o.id),c=s.length===1?e/2:e*(.3+.4*l/(s.length-1));return{...o,x:_n(c,.3,e-.3),y:a,facing:"down"}})},ad=(i,e,t)=>{if(i<=8&&e<=10)return[];let n=4.1;t==="65"&&(n=5),t==="75"&&(n=5.6);let s=e-6,r=[];if(s>0){let a=Math.ceil(s/n);for(let o=0;o<a;o++){let l=6+o*n;l<e-2&&(r.push({id:`L${o}`,x:.5,y:l}),r.push({id:`R${o}`,x:i-.5,y:l}))}}return r},Ii=i=>({x:i/2,y:.35,width:86*.0254*16/Math.sqrt(337)}),Mr=(i,e,t,n,s=!0)=>{let r=Math.ceil(t/n),a=[];for(let o=0;o<r;o++){let l=Math.min(n,t-a.length);for(let c=0;c<l;c++){let h=a.length,u=l===1?i/2:(c+.5)*i/l,f=_n(e-.5,1.2,e-.3),d=Math.min(.8+12,f),g=r===1?.5:.32+.58*o/(r-1),_=r===1?e/2:s?o===0?.8:d+(f-d)*(o-1)/Math.max(1,r-2):_n(e*g,1.2,e-.5);a.push({id:h,x:u,y:_,label:`S${h+1}`,facing:"up"})}}return Uo(a,i,e)},ys=(i,e,t)=>{let n=Sr(i,e,t);return{...n,score:n.best+n.limit}},Tc=(i,e,t)=>{let n=i.map(a=>({...a})),s=ys(n,e,t).score,r=[...new Set(n.map(a=>a.y))].sort((a,o)=>a-o);if(r.length<2)return n;for(let a of[.5,.1])for(let o=0;o<4;o++){let l=!1;for(let c=1;c<r.length;c++){let h=r[c],u=Math.max(r[c-1]+1.2,1.2),f=Math.min(c+1<r.length?r[c+1]-1.2:t-.3,t-.3),d=h,g=s;for(let _ of[-2,-1,0,1,2]){let m=_n(h+_*a,u,f);if(Math.abs(m-d)<1e-8)continue;let p=n.map(E=>Math.abs(E.y-h)<1e-8?{...E,y:m}:E),b=ys(p,e,t).score;b>g+1e-8&&(d=m,g=b)}d!==h&&(n=n.map(_=>Math.abs(_.y-h)<1e-8?{..._,y:d}:_),r[c]=d,s=g,l=!0)}if(!l)break}return n},dx=(i,e)=>{let t={best:75,limit:85},n=null,s=3*Math.PI*6**2/8,r=Math.ceil(t.best*i*e/(s*100)),a=Math.max(3,Math.min(br,r));for(let o=a;o<=br;o++){let l=i>=9?[2,1]:[1],c=null,h=-1/0;for(let u of l){if(u>o)continue;let d=[Mr(i,e,o,u,!1),Mr(i,e,o,u,!0)].map(m=>({layout:m,...ys(m,i,e)})).sort((m,p)=>p.score-m.score)[0];(!n||d.score>n.score)&&(n={layout:d.layout,score:d.score});let g=Tc(d.layout,i,e),_=ys(g,i,e);(!n||_.score>n.score)&&(n={layout:g,score:_.score}),_.best>=t.best&&_.limit>=t.limit&&_.score>h&&(c=g,h=_.score)}if(c)return c}return n?n.layout:Tc(Mr(i,e,3,1),i,e)},fx=(i,e)=>{if(i>=13)return Uo([{id:0,x:i*.3,y:e*.5,label:"S1",facing:"up"},{id:1,x:i*.7,y:e*.5,label:"S2",facing:"up"}],i,e);let t=_n(Math.min(e*.46,6),1.2,e-1.2),n=_n(e-.5,t+1.2,e-.3);return Uo([{id:0,x:i/2,y:t,label:"S1",facing:"up"},{id:1,x:i/2,y:n,label:"S2",facing:"up"}],i,e)},No=(i,e,t)=>{let n=Sr(i,e,t);return n.best>=sd.best&&n.limit>=sd.limit},rd=(i,e,t)=>{if(!Number.isInteger(t)||t<0||t>br)throw new RangeError("Invalid S210 count");return t===0?[]:(i>=9?[1,2]:[1]).filter(s=>s<=t).flatMap(s=>[!1,!0].map(r=>Tc(Mr(i,e,t,s,r),i,e))).sort((s,r)=>ys(r,i,e).score-ys(s,i,e).score)[0]},od=(i,e,t,n=null)=>{if(n!==null)return rd(i,e,n);let s=e<=6;if(s){let o=Mr(i,e,1,1);if(No(o,i,e))return o}let r=t.length===2?Uo(t.map((o,l)=>({...o,id:l,x:_n(o.x,.3,i-.3),y:_n(o.y,.3,e-.3),label:o.label||`S${l+1}`})),i,e):null;if(r&&No(r,i,e))return r;let a=fx(i,e);if(No(a,i,e))return a;if(s){let o=rd(i,e,2);if(No(o,i,e))return o}return dx(i,e)},ld=(i,e)=>{let t=Math.max(2,Math.ceil(e/9.5)),n=_n(.8,.3,i/2),s=_n(i-.8,i/2,i-.3),r=[];for(let a=0;a<t;a++){let o=t===1?e/2:1.5+a*(e-3)/(t-1);r.push({id:r.length,x:n,y:o}),r.push({id:r.length,x:s,y:o})}return r};function Fo(i){return i==="standard"?{width:8,length:10,teacherCam:{x:8/2,y:5},studentCams:[{id:0,x:8/2,y:1}],speakers:[{id:0,x:.8,y:1.5},{id:1,x:8-.8,y:1.5},{id:2,x:.8,y:10-1.5},{id:3,x:8-.8,y:10-1.5}],largeScreen:Ii(8),hub:{x:1.5,y:1},displaySize:"55"}:i==="large"?{width:10,length:20,teacherCam:{x:10/2,y:7},studentCams:[{id:0,x:10/2,y:1}],speakers:[{id:0,x:1,y:2},{id:1,x:9,y:2},{id:2,x:1,y:9},{id:3,x:9,y:9},{id:4,x:1,y:16},{id:5,x:9,y:16}],largeScreen:Ii(10),hub:{x:1.5,y:1},displaySize:"65"}:i==="lecture"?{width:12,length:15,teacherCam:{x:12/2,y:7},studentCams:[{id:0,x:12/2,y:1}],speakers:[{id:0,x:1,y:2},{id:1,x:11,y:2},{id:2,x:1,y:13},{id:3,x:11,y:13}],largeScreen:Ii(12),hub:{x:1.5,y:1},displaySize:"65"}:i==="ultra"?{width:17,length:37,teacherCam:{x:17/2,y:9},studentCams:[{id:0,x:17/2,y:1}],speakers:[{id:0,x:1.5,y:3},{id:1,x:17-1.5,y:3},{id:2,x:1.5,y:15},{id:3,x:17-1.5,y:15},{id:4,x:1.5,y:27},{id:5,x:17-1.5,y:27},{id:6,x:1.5,y:34},{id:7,x:17-1.5,y:34}],largeScreen:Ii(17),hub:{x:2,y:1.5},displaySize:"75"}:null}function cd({width:i,depth:e,teacher:t,students:n,teacherModel:s,studentModel:r}){let a=i/2;return{teacher:s==="CV870"?{x:a,y:Math.min(e,10)}:t,students:r==="CV870"?[{id:0,x:a,y:0}]:n}}function Ac({width:i,depth:e,teacher:t,students:n,teacherModel:s="CV870",studentModel:r="CV870",s210s:a=[],displaySize:o="55",s210Count:l=null}){let c=cd({width:i,depth:e,teacher:t,students:n,teacherModel:s,studentModel:r});return{teacherCam:c.teacher,studentCams:c.students,s210s:od(i,e,a,l),speakers:ld(i,e),displays:ad(i,e,o),largeScreen:Ii(i)}}var Et={CV870:{label:"CV870 Pro",projectOnly:!1,roleHfov:{teacher:43,student:94},roleMinDistance:{teacher:0,student:0},roleMaxDistance:{teacher:10,student:10}},CV210:{label:"CV210",projectOnly:!1,budgetPair:!0,roleHfov:{teacher:40,student:120},roleMinDistance:{teacher:5,student:1},roleMaxDistance:{teacher:12,student:10}},"PVC-G530P":{label:"PVC-G530P",opticalZoom:"30x",minHfov:2,maxHfov:56.5,projectOnly:!0},"PVC-G520P":{label:"PVC-G520P",opticalZoom:"20x",minHfov:2.8,maxHfov:56.5,projectOnly:!0},"PVC-G512P":{label:"PVC-G512P",opticalZoom:"12x",minHfov:7.6,maxHfov:81,projectOnly:!0}};var vs=(i,e,t,n)=>{let s=t>500||e>16?3:t>300||e>12?2:1;return i>30?{teacher:"PVC-G530P",student:"PVC-G530P",studentQty:s,reason:n.longReasonFar}:i>20?{teacher:"PVC-G520P",student:"PVC-G530P",studentQty:s,reason:n.longReasonMid}:{teacher:"PVC-G520P",student:"PVC-G520P",studentQty:1,reason:n.longReasonNear}};var px=1;var mx=(i,e)=>i&&Number.isFinite(i.x)&&Number.isFinite(i.y)&&i.x>=0&&i.x<=e.width&&i.y>=0&&i.y<=e.depth;function Cc(i){if(!i||i.version!==px)return"snapshotVersion";let{room:e,layout:t,cameraPlan:n,visibility:s}=i;if(!e||![e.width,e.depth,e.height].every(Number.isFinite)||e.width<4||e.width>30||e.depth<5||e.depth>50||e.height<2.4||e.height>6)return"roomSize";if(!t||!n||!Object.hasOwn(Et,n.teacher)||!Object.hasOwn(Et,n.student)||!s||["teacher","student","s210","speaker","display","ifp"].some(r=>typeof s[r]!="boolean")||typeof i.projectTitle!="string"||typeof i.lang!="string"||typeof i.hubName!="string"||typeof i.displayName!="string"||!["55","65","75"].includes(String(i.displaySize))||!["studentCams","s210s","speakers","displays"].every(r=>Array.isArray(t[r]))||t.studentCams.length<1||t.studentCams.length>3||t.s210s.length>10||t.speakers.length>100||t.displays.length>100||![t.teacherCam,t.hub,t.largeScreen,...t.studentCams,...t.s210s,...t.speakers,...t.displays].every(r=>mx(r,e))||t.s210s.some(r=>!["up","down"].includes(r.facing))||!Number.isFinite(t.largeScreen.width)||t.largeScreen.width<=0||!Number.isInteger(n.studentQty)||n.studentQty!==t.studentCams.length||!Et[n.student].projectOnly&&n.studentQty!==1)return"snapshotInvalid";if(s.ifp){let{x:r,width:a}=t.largeScreen;if(a+1.3>e.width||r-a/2<0||r+a/2>e.width)return"screenSpace";let o=a*9/32;if(Math.max(1.2,o+.08)>e.height-o-.08)return"screenHeight"}return null}function hd(i){if(!i)return{snapshot:null,error:null};try{if(!i.startsWith("#plan=")||i.length>2e5)return{error:"snapshotInvalid"};let e=JSON.parse(decodeURIComponent(i.slice(6))),t=Cc(e);return t?{error:t}:{snapshot:e,error:null}}catch{return{error:"snapshotInvalid"}}}var Oo=Object.freeze({width:8,depth:10,defaultHeight:3}),gM=Object.freeze(["standard","large","lecture","ultra"]),Rc=Object.freeze({teacher:"CV870",student:"CV870",studentQty:1}),ud={s210:"#1ca78d",teacher:"#e87836",student:"#288fda",station:"#5576c7",ndp:"#b9783c",ifp:"#488cbe",display:"#6e7cda",speaker:"#75879b"},si=i=>Number(i)*.0254*16/Math.sqrt(337),Ss=i=>Number(i)*.0254*9/Math.sqrt(337);function gx({width:i,depth:e,height:t,ifpSize:n,ifpCount:s}){return![i,e,t].every(Number.isFinite)||i<4||e<5||t<2.4||i>30||e>50||t>6?"roomSize":si(n)*s+(s-1)*.15+1.3>i?"screenSpace":1.65+Ss(n)/2+.1>t?"screenHeight":null}function dd(i){let{width:e,depth:t,height:n,ifpSize:s,ifpCount:r,displaySize:a,cameraPlan:o}=i,l=gx(i);if(l)return{error:l};let c=Fo(i.preset),h=c&&c.width===e&&c.length===t?c:{teacherCam:{x:e/2,y:Math.min(t,10)},studentCams:[{id:0,x:e/2,y:0}],s210s:[]},u=Ac({width:e,depth:t,teacher:h.teacherCam,students:h.studentCams,teacherModel:o.teacher,studentModel:o.student,s210s:i.s210Request?[]:h.s210s,s210Count:i.s210Request?.mode==="fixed"?i.s210Request.count:null,displaySize:a}),f=[],d=(b,E,v,C,R,P,N={})=>f.push({id:b,kind:E,name:N.name||b,x:v,depth:C,height:R,direction:P,color:ud[E],...N});u.s210s.forEach((b,E)=>d(`s210-${E+1}`,"s210",b.x,b.y,2.7,b.facing==="down"?"rear":"front",{name:`S210 S${E+1}`,planX:b.x,planDepth:b.y}));for(let[b,E,v]of[["teacher",o.teacher,1],["student",o.student,Et[o.student].projectOnly?o.studentQty:1]])for(let C=0;C<v;C++){let R=b==="teacher"?u.teacherCam:u.studentCams[0],P=v===1?R.x:e*(C+1)/(v+1),N=b==="teacher"?"teacher-camera":`student-camera-${C+1}`,M=Et[E];d(N,b,P,R.y,2.4,b==="teacher"?"front":"rear",{model:E,name:`${M.label} \xB7 ${b==="teacher"?"Teacher":`Student ${C+1}`}`,planX:P,planDepth:R.y,hfov:M.roleHfov?.[b]||M.maxHfov,teleHfov:M.minHfov,maxDistance:M.roleMaxDistance?.[b]})}let g=si(s)*r+(r-1)*.15,_=e/2-g/2,m=Math.max(.5,Math.min(1.5,_-.55));d("lcs-station","station",m,0,1.5,"rear",{name:"LCS 810 Station",planX:c?.hub.x??1.5,planDepth:c?.hub.y??1,mount:"front-wall"}),d("ndp600","ndp",Math.max(1.1,e*.32),1.2,1.05,"front",{name:"NDP600",mount:"floor"});for(let b=0;b<r;b++){let E=_+si(s)*(b+.5)+.15*b;d(`ifp-${b+1}`,"ifp",E,0,1.65,"rear",{name:`IFP ${s}" ${b+1}`,size:s,mount:"front-wall"})}u.displays.forEach(b=>d(`display-${b.id}`,"display",b.id.startsWith("L")?0:e,b.y,2.1,"rear",{name:`Auxiliary Display ${b.id} \xB7 ${a}"`,size:a,planX:b.x,planDepth:b.y,mount:"side-wall",wallSide:b.id.startsWith("L")?"left":"right"})),u.speakers.forEach((b,E)=>{let v=E<2,C=E>=u.speakers.length-2,R=v||C?b.x:b.x<e/2?0:e,P=v?0:C?t:b.y,N=v?"rear":C?"front":b.x<e/2?"right":"left";d(`ps610-${b.id+1}`,"speaker",R,P,2.5,N,{name:`PS610 ${b.id+1}`,planX:b.x,planDepth:b.y,mount:v?"front-wall":C?"rear-wall":"side-wall"})});let p=pd(u.s210s,e,t);return f.some(b=>b.maxDistance&&(b.kind==="teacher"?b.depth:t-b.depth)>b.maxDistance)&&p.push("cameraRange"),{room:{width:e,depth:t,height:n},devices:f,plan:u,warnings:p,recommendation:vs(t,e,e*t,{longReasonFar:"",longReasonMid:"",longReasonNear:""})}}function fd(i){let e=Cc(i);if(e)return{error:e};let{room:t,layout:n,cameraPlan:s,visibility:r,displaySize:a}=i,{width:o,depth:l}=t,c=[],h=(g,_,m,p,b,E,v,C={})=>c.push({id:g,kind:_,name:g,x:p,depth:b,height:E,direction:v,color:ud[_],planX:m.x,planDepth:m.y,...C});r.s210&&n.s210s.forEach((g,_)=>h(`s210-${_+1}`,"s210",g,g.x,g.y,2.7,g.facing==="down"?"rear":"front",{name:`S210 ${g.label||`S${_+1}`}`}));for(let g of["teacher","student"]){if(!r[g])continue;let _=s[g],m=Et[_];(g==="teacher"?[n.teacherCam]:n.studentCams).forEach((b,E)=>h(g==="teacher"?"teacher-camera":`student-camera-${E+1}`,g,b,b.x,b.y,2.4,g==="teacher"?"front":"rear",{model:_,name:`${m.label} \xB7 ${g==="teacher"?"Teacher":`Student ${E+1}`}`,hfov:m.roleHfov?.[g]||m.maxHfov,teleHfov:m.minHfov,maxDistance:m.roleMaxDistance?.[g]}))}let u=n.largeScreen,f=r.ifp?Math.max(.5,Math.min(n.hub.x,u.x-u.width/2-.55)):n.hub.x;h("lcs-station","station",n.hub,f,0,1.5,"rear",{name:i.hubName,mount:"front-wall"}),r.ifp&&h("ifp-1","ifp",u,u.x,0,1.65,"rear",{name:i.lang==="zh"?"\u4E3B\u5C4F / IFP":"Main Screen / IFP",mount:"front-wall",size:u.width*Math.sqrt(337)/(.0254*16)}),r.display&&n.displays.forEach((g,_)=>{let m=String(g.id).startsWith("L");h(`display-${_+1}`,"display",g,m?0:o,g.y,2.1,"rear",{name:`${i.displayName} ${g.id} \xB7 ${a}"`,size:Number(a),mount:"side-wall",wallSide:m?"left":"right"})}),r.speaker&&n.speakers.forEach((g,_)=>{let m=_<2,p=!m&&_>=n.speakers.length-2,b=g.x<o/2;h(`ps610-${_+1}`,"speaker",g,m||p?g.x:b?0:o,m?0:p?l:g.y,2.5,m?"rear":p?"front":b?"right":"left",{name:`PS610 ${_+1}`,mount:m?"front-wall":p?"rear-wall":"side-wall"})});let d=c.some(g=>g.maxDistance&&(g.kind==="teacher"?g.depth:l-g.depth)>g.maxDistance)?["cameraRange"]:[];return d.push(...pd(n.s210s,o,l)),{room:{...t},devices:c,plan:n,warnings:d,recommendation:vs(l,o,o*l,{longReasonFar:"",longReasonMid:"",longReasonNear:""})}}function pd(i,e,t){if(!i.length)return[];let n=Sr(i,e,t),s=i.length<=2?[80,95]:[75,85];return n.best<s[0]||n.limit<s[1]?["pickupUnmet"]:[]}function md(i,e,t=!1){let n=structuredClone(i),{width:s,depth:r}=n.room;t&&Et[n.cameraPlan.student].projectOnly&&(n.cameraPlan.studentQty=vs(r,s,s*r,{}).studentQty);let a=Ac({width:s,depth:r,teacher:t?{x:s/2,y:Math.min(r,10)}:n.layout.teacherCam,students:t?[{id:0,x:s/2,y:0}]:n.layout.studentCams,teacherModel:n.cameraPlan.teacher,studentModel:n.cameraPlan.student,displaySize:n.displaySize,s210Count:e.mode==="fixed"?e.count:null}),o=n.cameraPlan.studentQty,l=a.studentCams[0];return a.studentCams=Array.from({length:o},(c,h)=>({...l,id:h,x:o===1?l.x:s*(h+1)/(o+1)})),n.layout={...n.layout,...a,largeScreen:n.layout.largeScreen},n}function Er(i,e,t){let n={s210:1.5,teacher:1.5,student:1.5,station:.55,ndp:.9,ifp:1.2,display:1.2,speaker:1.2}[i.kind],s={s210:.1,teacher:.38,student:.38,station:.26,ndp:.16,ifp:Ss(i.size)/2+.08,display:Ss(i.size)/2+.08,speaker:.29}[i.kind],r=i.kind==="ndp"?.9:["ifp","display"].includes(i.kind)?Ss(i.size)/2+.08:0,a=["station","ndp"].includes(i.kind)?20:10,o=Math.max(n,r);return Math.max(o,Math.floor(Math.min(Math.max(Number(e)||o,o),t-s)*a+1e-8)/a)}var Li=(i,e=0,t=.5)=>new Si({color:i,metalness:e,roughness:t}),Di=Li("#172536",.18),Ni=Li("#748895",.55),wr=Li("#e0e7e9",.22),Bo=Li("#22638b",.05,.2);function _x(){let i=document.createElement("canvas");i.width=1024,i.height=576;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,1024,576);t.addColorStop(0,"#f7fdff"),t.addColorStop(1,"#bbebfa"),e.fillStyle=t,e.fillRect(0,0,1024,576),e.fillStyle="#1769a0",e.fillRect(0,0,1024,92),e.fillStyle="#fff",e.font="bold 48px Arial",e.fillText("CLASSROOM",48,62),e.fillStyle="#13446c",e.font="bold 54px Arial",e.fillText("Explore \xB7 Learn \xB7 Create",65,215),e.font="31px Arial",e.fillText("Interactive lesson display",68,275),e.fillStyle="#2ab9b4",e.fillRect(70,327,285,125),e.fillStyle="#48a4da",e.fillRect(380,327,245,125),e.fillStyle="#f2b968",e.fillRect(650,327,300,125);let n=new qs(i);return n.colorSpace=Ct,new on({map:n,toneMapped:!1})}var xx=_x();function Ot(i,e,t,n){let s=new ft(new Sn(...e),n);return s.position.set(...t),s.castShadow=!0,s.receiveShadow=!0,i.add(s),s}function zn(i,e,t,n,s){let r=new ft(new Zs(e,e,Math.max(.01,t),16),s);return r.position.set(...n),r.castShadow=!0,i.add(r),r}function gd(i,e,t,n=.12){let s=Math.max(.02,e-t-.05);zn(i,.025,s,[0,s/2+.025,0],Ni),zn(i,n,.04,[0,s+.025,0],wr)}function yx(i,e,t,n){i.rotation.y=n==="rear"?Math.PI:0,gd(i,e,t);let s=zn(i,.023,.34,[0,-.14,-.04],Ni);s.rotation.x=.27;let r=zn(i,.065,.39,[0,-.38,-.11],Di);r.rotation.x=.27;let a=zn(i,.058,.027,[0,-.58,-.16],Bo);a.rotation.x=.27,i.userData.pickupOrigin=a}function vx(i,e,t,n){gd(i,t.height,n);let s=new Je;s.position.z=e.depth===0?.27:e.depth===t.depth?-.27:0,i.add(s),Ot(s,[.51,.11,.28],[0,.025,0],wr);let r=new Je;r.name="camera-head",r.position.y=.21,r.rotation.y=e.direction==="front"?Math.PI:0,s.add(r),e.model.startsWith("PVC")?(Ot(r,[.44,.27,.28],[0,-.01,0],Di),zn(r,.1,.2,[0,0,.21],Bo).rotation.x=Math.PI/2):(Ot(r,[.29,.22,.2],[0,-.03,0],e.model==="CV210"?Di:wr),zn(r,.105,.18,[0,0,.15],Di).rotation.x=Math.PI/2,zn(r,.07,.015,[0,0,.25],Bo).rotation.x=Math.PI/2)}function Sx(i,e,t=!1,n=!1,s=null){let r=n?.72:si(e),a=n?.43:Ss(e),o=t?new Je:i;if(t){let l=(s==="left"?1:-1)*(r/2+.18);Ot(i,[Math.abs(l),.055,.055],[l/2,0,.05],Ni),o.position.x=l,i.add(o)}if(Ot(o,[.22,.17,.1],[0,0,.05],Ni),Ot(o,[r,a,.07],[0,0,.18],Di),n)Ot(o,[r-.07,a-.07,.008],[0,0,.224],Li("#24506a",0,.23));else{let l=new ft(new vi(r-.07,a-.07),xx);l.position.set(0,0,.229),l.receiveShadow=!0,o.add(l)}if(n)for(let l=0;l<3;l++)Ot(o,[.1,.1,.01],[-.18+l*.17,-.02,.234],Li(["#2da6aa","#80b8d3","#e1b36b"][l]))}function Mx(i,e){let t=Li("#bb8b59");Ot(i,[.74,.05,.5],[0,-.07,0],t),Ot(i,[.68,.42,.3],[0,-.36,.02],wr),Ot(i,[.48,Math.max(.22,e-.52),.29],[0,-e/2-.1,.03],wr),Ot(i,[.7,.055,.45],[0,-e+.04,.02],Ni);let n=new Je;n.rotation.x=-.22,n.position.set(0,.02,-.035),i.add(n),Ot(n,[.64,.035,.37],[0,0,0],Di),Ot(n,[.59,.008,.32],[0,.024,0],Bo)}function bx(i,e){i.rotation.y={rear:0,front:Math.PI,right:Math.PI/2,left:-Math.PI/2}[e],Ot(i,[.14,.12,.16],[0,0,.08],Ni),Ot(i,[.43,.55,.28],[0,0,.28],Di),zn(i,.115,.025,[0,-.08,.43],Ni).rotation.x=Math.PI/2}function _d(i,e,t){let n=new Je;n.name=i.name,n.userData.deviceId=i.id,n.userData.direction=i.direction,n.position.set(i.x,e,i.depth),i.kind==="s210"?yx(n,t.height,e,i.direction):["teacher","student"].includes(i.kind)?vx(n,i,t,e):["ifp","display","station"].includes(i.kind)?Sx(n,i.size,i.kind==="display",i.kind==="station",i.wallSide):i.kind==="speaker"?bx(n,i.direction):i.kind==="ndp"&&Mx(n,e);let s=new ft(new rr(i.kind==="ifp"?.7:.38,.016,8,48),new on({color:i.color,transparent:!0,opacity:.88,depthTest:!1}));return s.rotation.x=Math.PI/2,s.position.y=i.kind==="ndp"?.12:0,i.kind==="display"&&(s.position.x=(i.wallSide==="left"?1:-1)*(si(i.size)/2+.18)),i.kind==="speaker"&&(s.position.z=.28),s.visible=!1,n.userData.halo=s,n.add(s),n}var en=i=>["teacher","student"].includes(i.kind),Tr=i=>i*Math.PI/180,zo=i=>2*Math.atan(Math.tan(Tr(i)/2)*9/16)*180/Math.PI;function Pc(i,e,t,n={}){let s=(i.direction==="front"?Math.PI:0)+Tr(n.pan||0),r=new Gt().setFromEuler(new Kt(Tr(n.tilt||0),s,0,"YXZ")),a=i.depth===0?.27:i.depth===t.depth?-.27:0,o=new T(i.x,e+.21,i.depth+a),l=new T(0,0,i.model.startsWith("PVC")?.31:.2575).applyQuaternion(r).add(o),c=new T(0,0,1).applyQuaternion(r),h=new T(1,0,0).applyQuaternion(r),u=new T(0,1,0).applyQuaternion(r);return{origin:l,pivot:o,quaternion:r,forward:c,right:h,up:u}}function Ic(i,e,t,n,s){let r=i.getObjectByName("camera-head");r&&r.quaternion.copy(Pc(e,t,n,s).quaternion)}var ri=1e-8;function yd(i){return i.filter((e,t)=>i.findIndex(n=>n.distanceToSquared(e)<ri*ri)===t)}function xd(i){if(i.length<3)return!1;let e=i[1].clone().sub(i[0]);return i.slice(2).some(t=>e.clone().cross(t.clone().sub(i[0])).lengthSq()>ri*ri)}function Ex(i,e,t){let n=[];for(let s=0;s<i.length;s++){let r=i[s],a=i[(s+1)%i.length],o=e(r),l=e(a),c=o>=-ri,h=l>=-ri;if(c&&n.push(r),c!==h){let u=r.clone().lerp(a,o/(o-l));n.push(u),t.push(u)}}return yd(n)}function wx(i,e){let t=i.reduce((a,o)=>a.add(o),new T).multiplyScalar(1/i.length),s=(Math.abs(e.y)<.9?new T(0,1,0):new T(1,0,0)).cross(e).normalize(),r=e.clone().cross(s);return i.sort((a,o)=>{let l=a.clone().sub(t),c=o.clone().sub(t);return Math.atan2(l.dot(r),l.dot(s))-Math.atan2(c.dot(r),c.dot(s))})}function Tx(i,e){let t=[[new T(1,0,0),0,"wall"],[new T(-1,0,0),e.width,"wall"],[new T(0,1,0),0,"floor"],[new T(0,-1,0),e.height,"ceiling"],[new T(0,0,1),0,"wall"],[new T(0,0,-1),e.depth,"wall"]],n=i;for(let[s,r,a]of t){let o=[],l=h=>s.dot(h)+r;n=n.map(h=>({...h,points:Ex(h.points,l,o)})).filter(h=>xd(h.points));let c=yd(o);if(xd(c)&&n.push({kind:a,points:wx(c,s)}),!n.length)break}return n}function vd(i,e,t,n){let s=Pc(i,e,t,n),r=n.hfov,a=zo(r),o=Math.hypot(t.width,t.depth,t.height)*2+2,l=s.origin.clone().addScaledVector(s.forward,o),c=o*Math.tan(Tr(r)/2),h=c*9/16,u=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([g,_])=>l.clone().addScaledVector(s.right,c*g).addScaledVector(s.up,h*_)),f=[{kind:"far",points:u}];for(let g=0;g<4;g++)f.push({kind:"frustum",points:[s.origin,u[g],u[(g+1)%4]]});let d=Tx(f,t);return{...s,hfov:r,vfov:a,faces:d,floor:d.find(g=>g.kind==="floor")?.points||[],centerEnd:Ax(s.origin,s.forward,t)}}function Ax(i,e,t){let n=0,s=1/0;for(let[r,a]of[["x",t.width],["y",t.height],["z",t.depth]]){if(Math.abs(e[r])<ri){if(i[r]<0||i[r]>a)return null;continue}let o=-i[r]/e[r],l=(a-i[r])/e[r];n=Math.max(n,Math.min(o,l)),s=Math.min(s,Math.max(o,l))}return s>=n&&s>ri?i.clone().addScaledVector(e,s):null}function Ms(i){i?.traverse(e=>{e.geometry?.dispose();for(let t of Array.isArray(e.material)?e.material:[e.material])t?.dispose()}),i?.parent?.remove(i)}function Sd(i,e,t){let n=[];for(let r=1;r<i.length-1;r++)for(let a of[i[0],i[r],i[r+1]])n.push(a.x,a.y,a.z);let s=new xt().setAttribute("position",new it(n,3));return new ft(s,new on({color:e,transparent:!0,opacity:t,side:Ut,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1}))}function Dc(i,e,t=!0){let n=new xt().setFromPoints(i),s=new ln({color:e,transparent:!0,opacity:.68,toneMapped:!1});return t?new Un(n,s):new xi(n,s)}function Cx(i,e){let t=new Je,n=new Je;t.name="camera-view-volume",n.name="camera-floor-intersection";for(let s of i.faces)t.add(Sd(s.points,e,s.kind==="frustum"?.065:.09)),t.add(Dc(s.points,e));if(i.centerEnd){let s=Dc([i.origin,i.centerEnd],e,!1);s.name="camera-view-center",t.add(s)}if(i.floor.length>=3){let s=i.floor.map(r=>new T(r.x,.055,r.z));n.add(Sd(s,e,.14),Dc(s,e))}return{group:t,floor:n}}var ko=class{constructor(e){this.volumeRoot=new Je,this.floorRoot=new Je,this.entries=new Map,this.volumeRoot.name="camera-frusta",this.floorRoot.name="camera-floor-coverage",e.add(this.volumeRoot,this.floorRoot)}sync(e,t,n,s,r){let a=e.filter(en),o=new Set(a.map(l=>l.id));for(let[l,c]of this.entries)o.has(l)||(Ms(c.group),Ms(c.floor),this.entries.delete(l));for(let l of a){let c=s.settings.get(l.id),h=JSON.stringify([l.model,l.x,l.depth,l.direction,t[l.id],n.width,n.height,n.depth,c]),u=this.entries.get(l.id);if(u?.key!==h){u&&(Ms(u.group),Ms(u.floor));let g=vd(l,t[l.id],n,c);u={...Cx(g,l.kind==="teacher"?"#e87836":"#288fda"),key:h,geometry:g},this.volumeRoot.add(u.group),this.floorRoot.add(u.floor),this.entries.set(l.id,u)}let f=l.id===s.activeId,d=r[l.kind]!==!1;u.group.visible=s.enabled&&d&&(!s.onlyCurrent||f),u.floor.visible=d&&(!s.onlyCurrent||f),u.group.traverse(g=>{g.material&&(g.material.opacity=g.isLine?f?.9:.42:f?.095:.045)})}}setFloorVisible(e){this.floorRoot.visible=e}dispose(){Ms(this.volumeRoot),Ms(this.floorRoot),this.entries.clear()}};var Vo=72,bd=[.24,.48,.72,.96],Rx="#128d78";function Md(i,e,t){let n=Math.cos(e),s=i*(1+n)/2,r=s*Math.sin(e);return new T(r*Math.cos(t),-s*n,r*Math.sin(t))}function Lc({width:i,depth:e,height:t}){return[new vt(new T(1,0,0),0),new vt(new T(-1,0,0),i),new vt(new T(0,0,1),0),new vt(new T(0,0,-1),e),new vt(new T(0,1,0),0),new vt(new T(0,-1,0),t)]}function Ed(i){let e=new Je,t=(s,r)=>{let a=new Un(new xt().setFromPoints(s),new ln({color:Rx,opacity:r,transparent:!0,depthWrite:!1,toneMapped:!1,clippingPlanes:i}));return a.raycast=()=>{},e.add(a),a};for(let[s,r]of[[8,.25],[6,.48]])for(let a of[0,Math.PI/2])t(Array.from({length:Vo},(o,l)=>Md(s,l/Vo*2*Math.PI,a)),r);let n=Array.from({length:Vo},(s,r)=>Md(6,Math.PI/3,r/Vo*2*Math.PI));return e.userData.waves=bd.map(()=>t(n,.78)),e.visible=!1,Ho(e,0),e}function Ho(i,e){i.userData.waves.forEach((t,n)=>{let s=(bd[n]+1-e)%1;t.scale.setScalar(s),t.material.opacity=.78*Math.min(1,s*9,(1-s)*12)})}var Td=.08;function Pt(i,e,t,n,s=!1){let r=new ft(new Sn(...e),new Si({color:Bi.light[n]||n,roughness:.85,transparent:s,opacity:s?.13:1,depthWrite:!s,side:Ut}));Object.hasOwn(Bi.light,n)&&(r.material.userData.themeRole=n),r.position.set(...t),r.castShadow=!s&&n!=="floor",r.receiveShadow=!0,i.add(r)}function Ui(i){i&&(i.traverse(e=>{e.geometry?.dispose(),e.material&&!Array.isArray(e.material)&&e.material.dispose()}),i.parent?.remove(i))}function Ad({width:i,depth:e,height:t},n){let s=new Je;s.name="room-doors";let r=n==="left"?.09:i-.09,a=Math.min(1.16,(e-.36)/2),o=Math.min(2.18,t-.12),l=Math.max(a/2+.08,Math.min(1.45,e*.2));for(let[c,h]of[l,e-l].entries()){let u=new Je;u.name=`room-door-${c+1}`,Pt(u,[.09,o,a],[r,o/2,h],"door"),Pt(u,[.1,o-.14,a-.14],[r,o/2,h],"doorPanel"),Pt(u,[.115,o*.22,a*.42],[r,o*.75,h],"window"),Pt(u,[.15,.04,.14],[r,o*.45,h+a*.3],"handle"),s.add(u)}return s}function wd(i,e="right"){let t=new Je,{width:n,depth:s,height:r}=i;Pt(t,[n,.12,s],[n/2,-.06,s/2],"floor"),Pt(t,[Math.min(n-.8,n*.82),.09,Math.min(2.1,s*.22)],[n/2,.04,Math.min(1.08,s*.12)],"platform"),Pt(t,[n,r,.12],[n/2,r/2,-.07],"front");for(let l of[0,n])Pt(t,[.045,r,s],[l,r/2,s/2],"glass",!0),Pt(t,[.08,.5,s],[l,.25,s/2],"base"),Pt(t,[.065,.06,s],[l,r-.02,s/2],"trim"),Pt(t,[.065,r,.065],[l,r/2,s],"trim");Pt(t,[n,r,.045],[n/2,r/2,s],"glass",!0),Pt(t,[n,.5,Td],[n/2,.25,s],"base"),t.add(Ad(i,e)),Pt(t,[n,.06,.065],[n/2,r-.02,s],"trim");let a=[];for(let l=1;l<n;l++)a.push(l,.015,0,l,.015,s);for(let l=1;l<s;l++)a.push(0,.015,l,n,.015,l);let o=new Xs(new xt().setAttribute("position",new it(a,3)),new ln({color:"#bdc8c8",transparent:!0,opacity:.43}));return o.material.userData.themeRole="grid",t.add(o),t}function Px(i){let e=new Je,{width:t,depth:n}=i,s=Math.max(1,Math.floor(t/3.2)),r=Math.max(1,Math.floor((n-2.5)/2.5)),a=3,o=.8,l=.08,h=n-Td/2-.6-o-l/2,u=r>1?(h-a)/(r-1):0;for(let f=0;f<r;f++)for(let d=0;d<s;d++){let g=(d+.5)*t/s,_=a+f*u;Pt(e,[1.3,.07,.55],[g,.73,_],"#c99f73");for(let m of[-.5,.5])Pt(e,[.05,.7,.05],[g+m,.36,_],"#8aa1ac");Pt(e,[.56,.6,l],[g,.67,_+o],"#87a8bc")}return e}var Go=class{constructor(e,t,n,s,r,a){this.canvas=e,this.labelContainer=t,this.onSelect=n,this.onFrame=s,this.scene=new Ws,this.scene.background=new ke("#eaf0f5"),this.renderer=new Po({canvas:e,antialias:!0,preserveDrawingBuffer:!0}),this.renderer.localClippingEnabled=!0,this.reducedMotion=matchMedia("(prefers-reduced-motion: reduce)"),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=Ct,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=La,this.renderer.toneMapping=Va,this.renderer.toneMappingExposure=1.35,this.camera=new Nt(43,1,.1,250),this.controls=new Lo(this.camera,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=2.2,this.controls.maxPolarAngle=Math.PI*.495,this.controls.addEventListener("start",()=>{this.viewTween=null,this.currentView=null,this.updateViewButtons()}),this.ambient=new lr("#f8fdff","#b6cad1",2.3),this.scene.add(this.ambient);let o=new hr("#fff7e8",2.1);o.position.set(8,18,18),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),Object.assign(o.shadow.camera,{left:-45,right:45,top:45,bottom:-45,near:.5,far:100}),o.shadow.bias=-3e-4,o.shadow.normalBias=.025,this.scene.add(o),this.models=new Map,this.visibleKinds={},this.updateData(r,a,!0),this.raycaster=new ur,this.pointer=new le,this.pointerStart=null,e.addEventListener("pointerdown",l=>{this.pointerStart={x:l.clientX,y:l.clientY}}),e.addEventListener("pointerup",l=>this.pick(l)),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e.parentElement),this.resize(),this.tick=this.tick.bind(this),requestAnimationFrame(this.tick)}updateData(e,t,n=!1){this.room=e.room,this.devicesData=e.devices,this.mountHeights={...t},this.ripplePlanes=Lc(this.room),Ui(this.shell),Ui(this.furniture),Ui(this.coverage),Ui(this.devices),this.models.clear(),this.shell=wd(this.room,this.doorSide),this.scene.add(this.shell),this.furniture=Px(this.room),this.scene.add(this.furniture),this.coverage=id(this.room,this.devicesData),this.coverage.visible=!1,this.scene.add(this.coverage),this.devices=new Je,this.scene.add(this.devices);for(let s of this.devicesData)this.rebuildDevice(s);(n||!this.models.has(this.selectedId))&&(this.selectedId=this.models.has("teacher-camera")?"teacher-camera":this.devicesData[0].id),this.setSelected(this.selectedId,!1),this.camera.far=Math.max(250,this.room.depth*6),this.camera.updateProjectionMatrix(),this.controls.maxDistance=Math.max(42,this.room.depth*6,this.room.width*6),this.setTheme(this.theme||"light"),this.setView("overview",n),this.cameraFieldState&&this.setCameraFrusta(this.cameraFieldState)}rebuildDevice(e){let t=this.models.get(e.id);t&&Ui(t);let n=_d(e,this.mountHeights[e.id],this.room),s=n.userData.pickupOrigin;if(s){let r=Ed(this.ripplePlanes);r.position.y=-s.geometry.parameters.height/2,r.visible=!!this.showS210Ripples,s.add(r),n.userData.pickupRipples=r}n.visible=this.visibleKinds[e.kind]!==!1,this.models.set(e.id,n),this.devices.add(n),n.userData.halo.visible=e.id===this.selectedId,en(e)&&this.cameraFieldState&&Ic(n,e,this.mountHeights[e.id],this.room,this.cameraFieldState.settings.get(e.id))}setRoomHeight(e,t){this.room={...this.room,height:e},this.mountHeights={...t},this.ripplePlanes=Lc(this.room),Ui(this.shell),this.shell=wd(this.room,this.doorSide),this.scene.add(this.shell),this.setTheme(this.theme||"light");for(let n of this.devicesData)this.rebuildDevice(n);this.cameraFieldState&&this.setCameraFrusta(this.cameraFieldState)}setMountHeight(e,t){let n=this.devicesData.find(s=>s.id===e);n&&(this.mountHeights[e]=t,this.rebuildDevice(n),this.cameraFieldState&&this.setCameraFrusta(this.cameraFieldState))}setVisibility(e,t){this.visibleKinds[e]=t;for(let n of this.devicesData)n.kind===e&&(this.models.get(n.id).visible=t);this.cameraFieldState&&this.setCameraFrusta(this.cameraFieldState)}setCameraFrusta(e){this.cameraFieldState=e,this.cameraFields||(this.cameraFields=new ko(this.scene));for(let t of this.devicesData.filter(en))Ic(this.models.get(t.id),t,this.mountHeights[t.id],this.room,e.settings.get(t.id));this.cameraFields.sync(this.devicesData,this.mountHeights,this.room,e,this.visibleKinds),this.cameraFields.setFloorVisible(this.coverage.visible)}setS210Ripples(e,t){this.showS210Ripples=e,this.animateS210Ripples=t;for(let n of this.models.values()){let s=n.userData.pickupRipples;s&&(s.visible=e,Ho(s,0))}}setSelected(e,t=!0){if(this.models.has(e)){this.selectedId=e;for(let[n,s]of this.models)s.userData.halo.visible=n===e;t&&this.onSelect(e)}}setDoorSide(e){this.doorSide=e==="left"?"left":"right",this.shell&&(Ui(this.shell.getObjectByName("room-doors")),this.shell.add(Ad(this.room,this.doorSide)),this.setTheme(this.theme||"light"))}setTheme(e){this.theme=e;let t=Bi[e];this.scene.background.set(t.background),this.ambient.color.set(t.sky),this.ambient.groundColor.set(t.ground),this.renderer.toneMappingExposure=t.exposure,this.shell?.traverse(n=>{let s=n.material?.userData.themeRole;s&&n.material.color.set(t[s])})}updateViewButtons(){document.querySelectorAll("[data-view]").forEach(e=>{let t=e.dataset.view===this.currentView;e.classList.toggle("active",t),e.setAttribute("aria-pressed",String(t))})}viewTarget(){return new T(this.room.width/2,this.room.height*.34,this.room.depth/2)}presetPosition(e){let{width:t,depth:n,height:s}=this.room;if(e==="stage")return new T(t/2,s*.75,Math.min(2,n*.3));if(e==="audience")return new T(t*.72,s*.85,n+Math.max(2,n*.25));let r=this.viewTarget(),a=new T(...e==="top"?[.001,1,.001]:[.78,.78,.94]).normalize(),o=new T(0,1,0).cross(a).normalize(),l=a.clone().cross(o),c=Math.tan(this.camera.fov*Math.PI/360)*.8,h=c*this.camera.aspect,u=1;for(let f of[0,t])for(let d of[0,s])for(let g of[0,n]){let _=new T(f,d,g).sub(r),m=_.dot(a);u=Math.max(u,m+Math.abs(_.dot(o))/h,m+Math.abs(_.dot(l))/c)}return r.clone().addScaledVector(a,u)}setView(e,t=!1){this.currentView=e,this.updateViewButtons();let n=this.presetPosition(e),s=this.viewTarget();if(t){this.camera.position.copy(n),this.controls.target.copy(s),this.controls.update();return}this.viewTween={started:performance.now(),fromPosition:this.camera.position.clone(),fromTarget:this.controls.target.clone(),toPosition:n,toTarget:s}}pick(e){if(!this.pointerStart||Math.hypot(e.clientX-this.pointerStart.x,e.clientY-this.pointerStart.y)>5)return;let t=this.canvas.getBoundingClientRect();this.pointer.set((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1),this.raycaster.setFromCamera(this.pointer,this.camera);for(let n of this.raycaster.intersectObjects(this.devices.children.filter(s=>s.visible),!0)){let s=n.object;for(;s&&!s.userData.deviceId;)s=s.parent;if(s?.userData.deviceId){this.setSelected(s.userData.deviceId);return}}}resize(){let e=this.canvas.parentElement.getBoundingClientRect(),t=Math.max(1,Math.floor(e.width)),n=Math.max(1,Math.floor(e.height));this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.currentView&&(this.viewTween=null,this.camera.position.copy(this.presetPosition(this.currentView)),this.controls.target.copy(this.viewTarget())),this.renderer.setSize(t,n,!1)}labelPositions(){let e=this.canvas.getBoundingClientRect();return this.devicesData.map(t=>{let n=this.models.get(t.id);if(!n?.visible)return{device:t,visible:!1};let s=t.kind==="display"?(t.wallSide==="left"?1:-1)*(si(t.size)/2+.18):0,r=n.localToWorld(new T(s,t.kind==="ndp"?.3:.4,0)).project(this.camera);return{device:t,x:(r.x*.5+.5)*e.width,y:(-r.y*.5+.5)*e.height,visible:r.z>-1&&r.z<1&&Math.abs(r.x)<.96&&Math.abs(r.y)<.94}})}tick(e){if(this.cameraFields?.setFloorVisible(this.coverage.visible),this.showS210Ripples&&this.animateS210Ripples){let t=this.reducedMotion.matches?0:e%3200/3200;for(let n of this.models.values())n.visible&&n.userData.pickupRipples&&Ho(n.userData.pickupRipples,t)}if(this.viewTween){let t=this.viewTween,n=Math.min(1,(e-t.started)/650),s=1-(1-n)**3;this.camera.position.lerpVectors(t.fromPosition,t.toPosition,s),this.controls.target.lerpVectors(t.fromTarget,t.toTarget,s),n>=1&&(this.viewTween=null)}this.controls.update(),this.renderer.render(this.scene,this.camera),this.onFrame(this.labelPositions()),requestAnimationFrame(this.tick)}};var Ix=["resetPlan","resetPlanHint","quantity","automatic","fixed","pending","adjusted","pickupUnmet","importHint"],Cd={en:["Reset","Recommend quantities and layout for the current room","S210 quantities","Automatic recommendation","Specified quantities","Pending \xB7 click Recalculate","From 2D \xB7 adjusted in 3D","Pickup coverage is below target; specified quantities are retained.","Recalculate or reset this 3D view locally. Refresh restores the original 2D snapshot."],zh:["\u91CD\u7F6E","\u6309\u5F53\u524D\u623F\u95F4\u91CD\u65B0\u63A8\u8350\u6570\u91CF\u4E0E\u5E03\u5C40","S210 \u6570\u91CF","\u81EA\u52A8\u63A8\u8350","\u6307\u5B9A\u6570\u91CF","\u5F85\u5E94\u7528 \xB7 \u70B9\u51FB\u91CD\u65B0\u8BA1\u7B97","\u6765\u81EA 2D \xB7 \u5DF2\u5728 3D \u8C03\u6574","\u62FE\u97F3\u8986\u76D6\u672A\u8FBE\u5230\u76EE\u6807\uFF0C\u4FDD\u7559\u6307\u5B9A\u6570\u91CF\u3002","\u53EF\u5728\u5F53\u524D 3D \u91CD\u65B0\u8BA1\u7B97\u6216\u91CD\u7F6E\uFF1B\u5237\u65B0\u6062\u590D\u539F\u59CB 2D \u5FEB\u7167\u3002"],ko:["\uC7AC\uC124\uC815","\uD604\uC7AC \uBC29\uC758 \uC218\uB7C9\uACFC \uBC30\uCE58\uB97C \uB2E4\uC2DC \uCD94\uCC9C","S210 \uC218\uB7C9","\uC790\uB3D9 \uCD94\uCC9C","\uC9C0\uC815 \uC218\uB7C9","\uB300\uAE30 \uC911 \xB7 \uB2E4\uC2DC \uACC4\uC0B0 \uD074\uB9AD","2D\uC5D0\uC11C \uAC00\uC838\uC634 \xB7 3D\uC5D0\uC11C \uC870\uC815\uB428","\uC218\uC74C \uBC94\uC704\uAC00 \uBAA9\uD45C \uBBF8\uB9CC\uC785\uB2C8\uB2E4. \uC9C0\uC815 \uC218\uB7C9\uC740 \uC720\uC9C0\uB429\uB2C8\uB2E4.","\uC774 3D\uC5D0\uC11C \uB2E4\uC2DC \uACC4\uC0B0\uD558\uAC70\uB098 \uC7AC\uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0C8\uB85C \uACE0\uCE58\uBA74 \uC6D0\uB798 2D \uBC30\uCE58\uB85C \uB3CC\uC544\uAC11\uB2C8\uB2E4."],mn:["\u0414\u0430\u0445\u0438\u043D \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u0430\u0445","\u041E\u0434\u043E\u043E\u0433\u0438\u0439\u043D \u04E9\u0440\u04E9\u04E9\u043D\u0434 \u0442\u043E\u043E, \u0431\u0430\u0439\u0440\u043B\u0430\u043B\u044B\u0433 \u0441\u0430\u043D\u0430\u043B \u0431\u043E\u043B\u0433\u043E\u0445","S210 \u0442\u043E\u043E","\u0410\u0432\u0442\u043E\u043C\u0430\u0442 \u0441\u0430\u043D\u0430\u043B","\u0417\u0430\u0430\u0441\u0430\u043D \u0442\u043E\u043E","\u0425\u04AF\u043B\u044D\u044D\u0433\u0434\u044D\u0436 \u0431\u0430\u0439\u043D\u0430 \xB7 \u0414\u0430\u0445\u0438\u043D \u0442\u043E\u043E\u0446\u043E\u043E\u043B\u043E\u0445","2D-\u044D\u044D\u0441 \xB7 3D-\u0434 \u04E9\u04E9\u0440\u0447\u0438\u043B\u0441\u04E9\u043D","\u0414\u0443\u0443 \u0445\u04AF\u043B\u044D\u044D\u043D \u0430\u0432\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D \u0437\u043E\u0440\u0438\u043B\u0442\u043E\u0434 \u0445\u04AF\u0440\u044D\u044D\u0433\u04AF\u0439. \u0417\u0430\u0430\u0441\u0430\u043D \u0442\u043E\u043E\u0433 \u0445\u0430\u0434\u0433\u0430\u043B\u043D\u0430.","\u042D\u043D\u044D 3D-\u0434 \u0434\u0430\u0445\u0438\u043D \u0442\u043E\u043E\u0446\u043E\u043E\u043B\u0436 \u0431\u043E\u043B\u043D\u043E. \u0428\u0438\u043D\u044D\u0447\u043B\u044D\u0445\u044D\u0434 \u0430\u043D\u0445\u043D\u044B 2D \u0431\u0430\u0439\u0440\u043B\u0430\u043B \u0441\u044D\u0440\u0433\u044D\u043D\u044D."],ja:["\u30EA\u30BB\u30C3\u30C8","\u73FE\u5728\u306E\u90E8\u5C4B\u3067\u6570\u91CF\u3068\u914D\u7F6E\u3092\u518D\u63D0\u6848","S210 \u6570\u91CF","\u81EA\u52D5\u63D0\u6848","\u6307\u5B9A\u6570\u91CF","\u672A\u9069\u7528 \xB7 \u518D\u8A08\u7B97\u3092\u30AF\u30EA\u30C3\u30AF","2D\u304B\u3089 \xB7 3D\u3067\u8ABF\u6574\u6E08\u307F","\u96C6\u97F3\u7BC4\u56F2\u304C\u76EE\u6A19\u672A\u6E80\u3067\u3059\u3002\u6307\u5B9A\u6570\u91CF\u3092\u4FDD\u6301\u3057\u307E\u3059\u3002","\u3053\u306E3D\u3067\u518D\u8A08\u7B97\u30FB\u30EA\u30BB\u30C3\u30C8\u3067\u304D\u307E\u3059\u3002\u66F4\u65B0\u3059\u308B\u3068\u5143\u306E2D\u914D\u7F6E\u306B\u623B\u308A\u307E\u3059\u3002"],es:["Restablecer","Recomendar cantidades y distribuci\xF3n para la sala actual","Cantidad S210","Recomendaci\xF3n autom\xE1tica","Cantidades especificadas","Pendiente \xB7 pulse Recalcular","Desde 2D \xB7 ajustado en 3D","Cobertura de captaci\xF3n inferior al objetivo; se conservan las cantidades.","Recalcule o restablezca este 3D. Al recargar se recupera el plano 2D original."],fr:["R\xE9initialiser","Recommander les quantit\xE9s et positions pour la salle actuelle","Quantit\xE9 S210","Recommandation automatique","Quantit\xE9s d\xE9finies","En attente \xB7 cliquer sur Recalculer","Depuis la 2D \xB7 ajust\xE9 en 3D","Couverture de captation insuffisante ; les quantit\xE9s d\xE9finies sont conserv\xE9es.","Recalculez ou r\xE9initialisez cette vue 3D. Un rechargement restaure le plan 2D initial."],ar:["\u0625\u0639\u0627\u062F\u0629 \u0636\u0628\u0637","\u0627\u0642\u062A\u0631\u0627\u062D \u0627\u0644\u0643\u0645\u064A\u0627\u062A \u0648\u0627\u0644\u062A\u0648\u0632\u064A\u0639 \u0644\u0644\u063A\u0631\u0641\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629","\u0639\u062F\u062F S210","\u0627\u0642\u062A\u0631\u0627\u062D \u062A\u0644\u0642\u0627\u0626\u064A","\u0643\u0645\u064A\u0627\u062A \u0645\u062D\u062F\u062F\u0629","\u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \xB7 \u0627\u0636\u063A\u0637 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062D\u0633\u0627\u0628","\u0645\u0646 2D \xB7 \u062A\u0645 \u0627\u0644\u062A\u0639\u062F\u064A\u0644 \u0641\u064A 3D","\u062A\u063A\u0637\u064A\u0629 \u0627\u0644\u0627\u0644\u062A\u0642\u0627\u0637 \u0623\u0642\u0644 \u0645\u0646 \u0627\u0644\u0647\u062F\u0641\u061B \u064A\u062A\u0645 \u0627\u0644\u0627\u062D\u062A\u0641\u0627\u0638 \u0628\u0627\u0644\u0643\u0645\u064A\u0627\u062A \u0627\u0644\u0645\u062D\u062F\u062F\u0629.","\u064A\u0645\u0643\u0646 \u0625\u0639\u0627\u062F\u0629 \u062D\u0633\u0627\u0628 \u0647\u0630\u0627 \u0627\u0644\u0639\u0631\u0636 \u0623\u0648 \u0636\u0628\u0637\u0647 \u0645\u062D\u0644\u064A\u0627\u064B. \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0635\u0641\u062D\u0629 \u064A\u0639\u064A\u062F \u0645\u062E\u0637\u0637 2D \u0627\u0644\u0623\u0635\u0644\u064A."]},Nc=i=>Object.fromEntries(Ix.map((e,t)=>[e,(Cd[i]||Cd.en)[t]]));function Pd(i){return{model:i.model,pan:0,tilt:0,hfov:i.hfov,custom:!1}}function Uc(i,e){let t=Et[i.model];return t.projectOnly?[t.minHfov,t.maxHfov]:e.custom?[2,140]:[i.hfov,i.hfov]}function Rd(i,e){let t=Pd(i),n={...t,...e,model:i.model},s=(o,l,c,h)=>Math.min(c,Math.max(l,Number.isFinite(Number(o))?Number(o):h));n.custom=!Et[i.model].projectOnly&&!!n.custom,n.pan=s(n.pan,-90,90,0),n.tilt=s(n.tilt,-60,60,0);let[r,a]=Uc(i,n);return n.hfov=s(n.hfov,r,a,t.hfov),n}var Wo=class{constructor(){this.enabled=!1,this.onlyCurrent=!1,this.activeId=null,this.settings=new Map}sync(e){let t=e.filter(en),n=new Set(t.map(s=>s.id));for(let s of this.settings.keys())n.has(s)||this.settings.delete(s);for(let s of t){let r=this.settings.get(s.id);this.settings.set(s.id,Rd(s,r?.model===s.model?r:{}))}n.has(this.activeId)||(this.activeId=t[0]?.id||null)}change(e,t){let n=Rd(e,{...this.settings.get(e.id),...t});return this.settings.set(e.id,n),n}reset(e){this.settings.set(e.id,Pd(e))}resetAll(){this.enabled=!1,this.onlyCurrent=!1,this.settings.clear(),this.activeId=null}};var Dx=["heading","enabled","camera","onlyCurrent","pan","tilt","hfov","custom","reset","note","tiltHint","fixedHint","zoomHint","empty","vfov","poseNote"],Id={en:["Camera field of view","Show 3D camera field","Camera","Only current camera","Pan","Tilt","Horizontal field of view","Custom demonstration","Reset this camera","16:9 field-of-view illustration \xB7 furniture occlusion is not simulated.","Positive tilt points down; negative tilt points up.","Fixed lens: use the model default, or enable a custom demonstration.","Adjust within the model\u2019s wide / tele field-of-view range.","No camera is available.","Vertical field of view","Camera direction: adjust in the field-of-view panel."],zh:["\u6444\u50CF\u5934\u89C6\u573A","\u663E\u793A\u4E09\u7EF4\u89C6\u573A","\u6444\u50CF\u5934","\u4EC5\u5F53\u524D\u6444\u50CF\u5934","\u5DE6\u53F3\u8F6C\u5411","\u4E0A\u4E0B\u4FEF\u4EF0","\u6C34\u5E73\u89C6\u573A\u89D2","\u81EA\u5B9A\u4E49\u6F14\u793A","\u6062\u590D\u5F53\u524D\u6444\u50CF\u5934","16:9 \u89C6\u573A\u793A\u610F \xB7 \u672A\u6A21\u62DF\u684C\u6905\u7B49\u7269\u4F53\u906E\u6321\u3002","\u4FEF\u4EF0\u6B63\u503C\u5411\u4E0B\uFF0C\u8D1F\u503C\u5411\u4E0A\u3002","\u56FA\u5B9A\u955C\u5934\u91C7\u7528\u578B\u53F7\u9ED8\u8BA4\u89C6\u89D2\uFF1B\u5F00\u542F\u81EA\u5B9A\u4E49\u6F14\u793A\u53EF\u8C03\u6574\u793A\u610F\u8303\u56F4\u3002","\u5728\u8BE5\u578B\u53F7\u5E7F\u89D2\u4E0E\u957F\u7126\u89C6\u573A\u8303\u56F4\u5185\u8C03\u6574\u3002","\u5F53\u524D\u6CA1\u6709\u53EF\u7528\u6444\u50CF\u5934\u3002","\u5782\u76F4\u89C6\u573A\u89D2","\u6444\u50CF\u5934\u671D\u5411\uFF1A\u53EF\u5728\u89C6\u573A\u9762\u677F\u4E2D\u8C03\u6574\u3002"],ko:["\uCE74\uBA54\uB77C \uD654\uAC01","3D \uCE74\uBA54\uB77C \uD654\uAC01 \uD45C\uC2DC","\uCE74\uBA54\uB77C","\uD604\uC7AC \uCE74\uBA54\uB77C\uB9CC","\uC88C\uC6B0 \uD68C\uC804","\uC0C1\uD558 \uAE30\uC6B8\uAE30","\uC218\uD3C9 \uD654\uAC01","\uC0AC\uC6A9\uC790 \uC9C0\uC815 \uC2DC\uC5F0","\uD604\uC7AC \uCE74\uBA54\uB77C \uCD08\uAE30\uD654","16:9 \uD654\uAC01 \uC608\uC2DC \xB7 \uAC00\uAD6C\uC5D0 \uC758\uD55C \uAC00\uB9BC\uC740 \uACC4\uC0B0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.","\uC591\uC218\uB294 \uC544\uB798\uCABD, \uC74C\uC218\uB294 \uC704\uCABD\uC785\uB2C8\uB2E4.","\uACE0\uC815 \uB80C\uC988\uB294 \uAE30\uBCF8 \uD654\uAC01\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uC9C0\uC815 \uC2DC\uC5F0\uC5D0\uC11C \uC870\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","\uBAA8\uB378\uC758 \uAD11\uAC01 / \uB9DD\uC6D0 \uD654\uAC01 \uBC94\uC704\uC5D0\uC11C \uC870\uC815\uD569\uB2C8\uB2E4.","\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uCE74\uBA54\uB77C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.","\uC218\uC9C1 \uD654\uAC01","\uCE74\uBA54\uB77C \uBC29\uD5A5: \uD654\uAC01 \uD328\uB110\uC5D0\uC11C \uC870\uC815\uD569\uB2C8\uB2E4."],mn:["\u041A\u0430\u043C\u0435\u0440\u044B\u043D \u0445\u0430\u0440\u0430\u0445 \u04E9\u043D\u0446\u04E9\u0433","\u041A\u0430\u043C\u0435\u0440\u044B\u043D 3D \u0445\u0430\u0440\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D\u0433 \u0445\u0430\u0440\u0443\u0443\u043B\u0430\u0445","\u041A\u0430\u043C\u0435\u0440","\u0417\u04E9\u0432\u0445\u04E9\u043D \u043E\u0434\u043E\u043E\u0433\u0438\u0439\u043D \u043A\u0430\u043C\u0435\u0440","\u0425\u044D\u0432\u0442\u044D\u044D \u044D\u0440\u0433\u044D\u043B\u0442","\u0411\u043E\u0441\u043E\u043E \u043D\u0430\u043B\u0430\u043B\u0442","\u0425\u044D\u0432\u0442\u044D\u044D \u0445\u0430\u0440\u0430\u0445 \u04E9\u043D\u0446\u04E9\u0433","\u04E8\u04E9\u0440\u0447\u043B\u04E9\u043D \u04AF\u0437\u04AF\u04AF\u043B\u044D\u0445","\u042D\u043D\u044D \u043A\u0430\u043C\u0435\u0440\u044B\u0433 \u0441\u044D\u0440\u0433\u044D\u044D\u0445","16:9 \u0445\u0430\u0440\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D\u043D\u0438\u0439 \u0436\u0438\u0448\u044D\u044D \xB7 \u0442\u0430\u0432\u0438\u043B\u0433\u0430\u0430\u0441 \u04AF\u04AF\u0441\u044D\u0445 \u0445\u0430\u043B\u0445\u043B\u0430\u043B\u0442\u044B\u0433 \u0442\u043E\u043E\u0446\u043E\u043E\u0433\u04AF\u0439.","\u042D\u0435\u0440\u044D\u0433 \u0443\u0442\u0433\u0430 \u0434\u043E\u043E\u0448, \u0441\u04E9\u0440\u04E9\u0433 \u0443\u0442\u0433\u0430 \u0434\u044D\u044D\u0448 \u0447\u0438\u0433\u043B\u044D\u043D\u044D.","\u0422\u043E\u0433\u0442\u043C\u043E\u043B \u043B\u0438\u043D\u0437 \u0437\u0430\u0433\u0432\u0430\u0440\u044B\u043D \u04AF\u043D\u0434\u0441\u044D\u043D \u04E9\u043D\u0446\u0433\u0438\u0439\u0433 \u0430\u0448\u0438\u0433\u043B\u0430\u043D\u0430. \u04E8\u04E9\u0440\u0447\u043B\u04E9\u043D \u04AF\u0437\u04AF\u04AF\u043B\u044D\u0445 \u0433\u043E\u0440\u0438\u043C\u0434 \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u0436 \u0431\u043E\u043B\u043D\u043E.","\u0417\u0430\u0433\u0432\u0430\u0440\u044B\u043D \u04E9\u0440\u0433\u04E9\u043D / \u043D\u0430\u0440\u0438\u0439\u043D \u0445\u0430\u0440\u0430\u0445 \u04E9\u043D\u0446\u0433\u0438\u0439\u043D \u0445\u04AF\u0440\u044D\u044D\u043D\u0434 \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u043D\u0430.","\u041A\u0430\u043C\u0435\u0440 \u0431\u0430\u0439\u0445\u0433\u04AF\u0439 \u0431\u0430\u0439\u043D\u0430.","\u0411\u043E\u0441\u043E\u043E \u0445\u0430\u0440\u0430\u0445 \u04E9\u043D\u0446\u04E9\u0433","\u041A\u0430\u043C\u0435\u0440\u044B\u043D \u0447\u0438\u0433\u043B\u044D\u043B: \u0445\u0430\u0440\u0430\u0445 \u04E9\u043D\u0446\u0433\u0438\u0439\u043D \u0441\u0430\u043C\u0431\u0430\u0440\u0442 \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u043D\u0430."],ja:["\u30AB\u30E1\u30E9\u306E\u753B\u89D2","3D\u753B\u89D2\u3092\u8868\u793A","\u30AB\u30E1\u30E9","\u73FE\u5728\u306E\u30AB\u30E1\u30E9\u306E\u307F","\u5DE6\u53F3\u306E\u5411\u304D","\u4E0A\u4E0B\u306E\u50BE\u304D","\u6C34\u5E73\u753B\u89D2","\u30AB\u30B9\u30BF\u30E0\u30C7\u30E2","\u73FE\u5728\u306E\u30AB\u30E1\u30E9\u3092\u30EA\u30BB\u30C3\u30C8","16:9\u753B\u89D2\u306E\u6A21\u5F0F\u56F3 \xB7 \u5BB6\u5177\u306A\u3069\u306E\u906E\u853D\u306F\u8A08\u7B97\u3057\u307E\u305B\u3093\u3002","\u6B63\u306E\u5024\u306F\u4E0B\u5411\u304D\u3001\u8CA0\u306E\u5024\u306F\u4E0A\u5411\u304D\u3067\u3059\u3002","\u56FA\u5B9A\u30EC\u30F3\u30BA\u306F\u65E2\u5B9A\u306E\u753B\u89D2\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\u30AB\u30B9\u30BF\u30E0\u30C7\u30E2\u3067\u6A21\u5F0F\u7684\u306B\u5909\u66F4\u3067\u304D\u307E\u3059\u3002","\u6A5F\u7A2E\u306E\u5E83\u89D2 / \u671B\u9060\u753B\u89D2\u306E\u7BC4\u56F2\u3067\u8ABF\u6574\u3057\u307E\u3059\u3002","\u4F7F\u7528\u3067\u304D\u308B\u30AB\u30E1\u30E9\u304C\u3042\u308A\u307E\u305B\u3093\u3002","\u5782\u76F4\u753B\u89D2","\u30AB\u30E1\u30E9\u306E\u5411\u304D\uFF1A\u753B\u89D2\u30D1\u30CD\u30EB\u3067\u8ABF\u6574\u3057\u307E\u3059\u3002"],es:["Campo de visi\xF3n de la c\xE1mara","Mostrar campo de visi\xF3n 3D","C\xE1mara","Solo la c\xE1mara actual","Giro horizontal","Inclinaci\xF3n","Campo horizontal","Demostraci\xF3n personalizada","Restablecer esta c\xE1mara","Esquema 16:9 \xB7 no se simulan obstrucciones de muebles.","Un valor positivo apunta abajo; uno negativo, arriba.","La lente fija usa el \xE1ngulo del modelo; active la demostraci\xF3n personalizada para ajustarlo.","Ajuste dentro del campo angular / tele del modelo.","No hay c\xE1maras disponibles.","Campo vertical","Direcci\xF3n de c\xE1mara: ajuste en el panel de campo de visi\xF3n."],fr:["Champ de vision des cam\xE9ras","Afficher le champ de vision 3D","Cam\xE9ra","Cam\xE9ra actuelle uniquement","Rotation horizontale","Inclinaison verticale","Champ de vision horizontal","D\xE9monstration personnalis\xE9e","R\xE9initialiser cette cam\xE9ra","Champ de vision 16:9 indicatif \xB7 les obstacles comme le mobilier ne sont pas simul\xE9s.","Une valeur positive incline vers le bas ; une valeur n\xE9gative vers le haut.","La lentille fixe utilise l\u2019angle du mod\xE8le. Activez la d\xE9monstration personnalis\xE9e pour modifier la repr\xE9sentation.","R\xE9glez l\u2019angle dans la plage grand-angle / t\xE9l\xE9objectif du mod\xE8le.","Aucune cam\xE9ra disponible.","Champ de vision vertical","Orientation de la cam\xE9ra : r\xE9glable dans le panneau de champ de vision."],ar:["\u0645\u062C\u0627\u0644 \u0631\u0624\u064A\u0629 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627","\u0625\u0638\u0647\u0627\u0631 \u0645\u062C\u0627\u0644 \u0631\u0624\u064A\u0629 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \u062B\u0644\u0627\u062B\u064A \u0627\u0644\u0623\u0628\u0639\u0627\u062F","\u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627","\u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u062D\u0627\u0644\u064A\u0629 \u0641\u0642\u0637","\u0627\u0644\u062F\u0648\u0631\u0627\u0646 \u0627\u0644\u0623\u0641\u0642\u064A","\u0627\u0644\u0645\u064A\u0644 \u0627\u0644\u0631\u0623\u0633\u064A","\u0645\u062C\u0627\u0644 \u0627\u0644\u0631\u0624\u064A\u0629 \u0627\u0644\u0623\u0641\u0642\u064A","\u0639\u0631\u0636 \u062A\u0648\u0636\u064A\u062D\u064A \u0645\u062E\u0635\u0635","\u0625\u0639\u0627\u062F\u0629 \u0636\u0628\u0637 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u062D\u0627\u0644\u064A\u0629","\u062A\u0645\u062B\u064A\u0644 \u0645\u062C\u0627\u0644 \u0627\u0644\u0631\u0624\u064A\u0629 \u0628\u0646\u0633\u0628\u0629 16:9 \xB7 \u0644\u0627 \u062A\u064F\u062D\u0627\u0643\u0649 \u0627\u0644\u0639\u0648\u0627\u0626\u0642 \u0645\u062B\u0644 \u0627\u0644\u0623\u062B\u0627\u062B.","\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0648\u062C\u0628\u0629 \u0644\u0644\u0623\u0633\u0641\u0644 \u0648\u0627\u0644\u0633\u0627\u0644\u0628\u0629 \u0644\u0644\u0623\u0639\u0644\u0649.","\u062A\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0639\u062F\u0633\u0629 \u0627\u0644\u062B\u0627\u0628\u062A\u0629 \u0632\u0627\u0648\u064A\u0629 \u0627\u0644\u0637\u0631\u0627\u0632 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629\u061B \u064A\u0645\u0643\u0646 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u0645\u062B\u064A\u0644 \u0641\u064A \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u0645\u062E\u0635\u0635.","\u0627\u0636\u0628\u0637 \u0636\u0645\u0646 \u0646\u0637\u0627\u0642 \u0627\u0644\u0632\u0627\u0648\u064A\u0629 \u0627\u0644\u0648\u0627\u0633\u0639\u0629 / \u0627\u0644\u0645\u0642\u0631\u0628\u0629 \u0644\u0644\u0637\u0631\u0627\u0632.","\u0644\u0627 \u062A\u0648\u062C\u062F \u0643\u0627\u0645\u064A\u0631\u0627\u062A \u0645\u062A\u0627\u062D\u0629.","\u0645\u062C\u0627\u0644 \u0627\u0644\u0631\u0624\u064A\u0629 \u0627\u0644\u0631\u0623\u0633\u064A","\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627: \u064A\u064F\u0636\u0628\u0637 \u0645\u0646 \u0644\u0648\u062D\u0629 \u0645\u062C\u0627\u0644 \u0627\u0644\u0631\u0624\u064A\u0629."]},Ar=i=>Object.fromEntries(Dx.map((e,t)=>[e,(Id[i]||Id.en)[t]]));var wt=i=>document.querySelector(i),Xo=class{constructor({devices:e,title:t,language:n,onSelect:s,scene:r}){Object.assign(this,{devices:e,title:t,language:n,onSelect:s,scene:r}),this.state=new Wo,this.frame=null,wt("#camera-field-enabled").addEventListener("change",a=>{this.state.enabled=a.target.checked,this.apply(),this.render()}),wt("#camera-field-only").addEventListener("change",a=>{this.state.onlyCurrent=a.target.checked,this.apply()}),wt("#camera-field-select").addEventListener("change",a=>{this.state.activeId=a.target.value,s(a.target.value)}),wt("#camera-field-custom").addEventListener("change",a=>{let o=this.active();o&&(this.state.change(o,{custom:a.target.checked}),this.apply(),this.render())}),wt("#camera-field-reset").addEventListener("click",()=>{let a=this.active();a&&(this.state.reset(a),this.apply(),this.render())});for(let a of["pan","tilt","hfov"])for(let o of["","-number"]){let l=wt(`#camera-field-${a}${o}`);l.addEventListener("input",()=>this.input(a,l)),l.addEventListener("change",()=>this.renderValues())}}active(){return this.devices().find(e=>e.id===this.state.activeId)}input(e,t){let n=this.active();!n||t.value===""||!Number.isFinite(Number(t.value))||(this.state.change(n,{[e]:Number(t.value)}),this.renderValues(t),this.frame===null&&(this.frame=requestAnimationFrame(()=>{this.frame=null,this.apply()})))}apply(){this.scene()?.setCameraFrusta(this.state);let e=wt("#camera-field-panel");e.dataset.enabled=String(this.state.enabled),e.dataset.camera=this.state.activeId||""}select(e){this.devices().find(t=>t.id===e&&en(t))&&(this.state.activeId=e),this.apply(),this.render()}sync(){this.state.sync(this.devices()),this.apply(),this.render()}resetAll(){this.state.resetAll(),this.state.sync(this.devices()),this.apply(),this.render()}renderValues(e){let t=this.active(),n=this.state.settings.get(t?.id);if(!n)return;let[s,r]=Uc(t,n);for(let o of["pan","tilt","hfov"])for(let l of["","-number"]){let c=wt(`#camera-field-${o}${l}`);o==="hfov"&&(c.min=s,c.max=r,c.disabled=s===r),c!==e&&(c.value=n[o])}let a=Ar(this.language());wt("#camera-field-vfov").textContent=`${a.vfov}: ${zo(n.hfov).toFixed(1)}\xB0`,wt("#camera-field-custom").checked=n.custom}render(){let e=Ar(this.language()),t=this.devices().filter(en);document.querySelectorAll("[data-field-i18n]").forEach(a=>{a.textContent=e[a.dataset.fieldI18n]}),wt("#camera-field-enabled").checked=this.state.enabled,wt("#camera-field-enabled").disabled=!t.length,wt("#camera-field-only").checked=this.state.onlyCurrent;let n=wt("#camera-field-select");n.replaceChildren(...t.map(a=>{let o=document.createElement("option");return o.value=a.id,o.textContent=this.title(a),o})),n.value=this.state.activeId;let s=this.active();if(wt("#camera-field-empty").hidden=t.length>0,wt("#camera-field-settings").hidden=!this.state.enabled||!s,!s)return;let r=Et[s.model].projectOnly;wt("#camera-field-custom-row").hidden=r,wt("#camera-field-hint").textContent=r?e.zoomHint:e.fixedHint;for(let a of["pan","tilt","hfov"])wt(`#camera-field-${a}-number`).setAttribute("aria-label",`${e[a]} (\xB0)`);this.renderValues()}};var Dd=i=>document.querySelector(i);async function Ld({roomScene:i,state:e,devices:t,visible:n,title:s,t:r}){if(!i)return;i.renderer.render(i.scene,i.camera);let a=i.canvas,o=a.width/Math.max(1,a.clientWidth),l=document.createElement("canvas");l.width=a.width,l.height=a.height;let c=l.getContext("2d");if(c.drawImage(a,0,0),c.save(),c.scale(o,o),c.fillStyle="rgba(15,34,49,.82)",c.fillRect(16,16,300,39),c.fillStyle="#fff",c.font="700 15px Arial",c.fillText(r("title"),27,42),e.showLabels){let f=a.getBoundingClientRect();for(let d of t().filter(n)){let g=document.querySelector(`.device-label[data-device-id="${d.id}"]`);if(!g||g.hidden)continue;let _=g.getBoundingClientRect(),m=_.left+_.width/2-f.left,p=_.bottom-f.top,b=s(d);c.font="600 11px Arial";let E=c.measureText(b).width+18,v=getComputedStyle(g);c.fillStyle=v.backgroundColor,c.beginPath(),c.roundRect(m-E/2,p-31,E,23,7),c.fill(),c.fillStyle=d.color,c.fillRect(m-E/2,p-31,3,23),c.fillStyle=v.color,c.fillText(b,m-E/2+10,p-15)}}c.restore();let h=await new Promise(f=>l.toBlob(f,"image/png")),u=document.createElement("a");u.href=h?URL.createObjectURL(h):l.toDataURL("image/png"),u.download="lcs-810-3d-room-demo.png",document.body.append(u),u.click(),u.remove(),h&&setTimeout(()=>URL.revokeObjectURL(u.href),3e4),Dd("#frame-status").textContent=r("pngReady"),setTimeout(()=>{Dd("#frame-status").textContent="3D"},2800)}var Nd={importedPlan:"Depuis le plan 2D",importedDesc:"D\xE9ploiement 2D import\xE9 avec fixations murales indicatives. Modifiez la salle et les \xE9quipements dans la vue 2D.",resetImported:"Restaurer la vue et les hauteurs import\xE9es",title:"LCS 810 \xB7 D\xE9mo de salle 3D",eyebrow:"\xC9TUDE INTERACTIVE DE LA SALLE",export:"Exporter en PNG",preset:"Salle pr\xE9d\xE9finie",standard:"Standard 8 \xD7 10",large:"Grande salle 10 \xD7 20",lecture:"Salle de conf\xE9rence 12 \xD7 15",ultra:"Amphith\xE9\xE2tre 17 \xD7 37",custom:"Personnalis\xE9e",recalculate:"Recalculer",overview:"Vue g\xE9n\xE9rale",top:"Vue de dessus",stageView:"Vers l\u2019estrade",audienceView:"Vers les \xE9l\xE8ves",gestureHint:"Glisser pour tourner \xB7 Molette pour zoomer \xB7 Glisser avec le bouton droit pour d\xE9placer \xB7 Cliquer sur un \xE9quipement",study:"\xC9TUDE SPATIALE AVANT-VENTE",layoutTitle:"Implantation du syst\xE8me",layoutDesc:"Positions d\u2019installation indicatives issues des r\xE8gles de recalcul 2D.",width:"Largeur (m)",depth:"Profondeur (m)",height:"Hauteur (m)",devices:"\xC9quipements",selected:"\xC9quipement s\xE9lectionn\xE9",settings:"Param\xE8tres de la sc\xE8ne",equipment:"Configuration des \xE9quipements",ifpSize:"Diagonale de l\u2019IFP",ifpCount:"Nombre d\u2019IFP",displaySize:"Diagonale des \xE9crans auxiliaires",cameraPackage:"Ensemble de cam\xE9ras",teacherModel:"Cam\xE9ra enseignant",studentModel:"Cam\xE9ra \xE9l\xE8ves",studentQty:"Nombre de cam\xE9ras \xE9l\xE8ves",applyRecommendation:"Appliquer les cam\xE9ras recommand\xE9es",applyEquipment:"Appliquer la configuration",mountingHeights:"Hauteurs de montage indicatives",doorSide:"C\xF4t\xE9 des portes",doorRight:"Mur de droite",doorLeft:"Mur de gauche",visibility:"Visibilit\xE9",showLabels:"Noms des \xE9quipements",showFurniture:"Mobilier de r\xE9f\xE9rence",showCoverage:"Projection de couverture au sol",coverageNote:"S210 utilise la projection 2D au sol. La zone au sol des cam\xE9ras suit le champ 16:9 et l\u2019orientation actuels.",reset:"Restaurer les valeurs de la d\xE9mo",assumption:"Les hauteurs et formes simplifi\xE9es sont indicatives. Confirmez l\u2019installation sur site.",fromLeft:"Depuis le mur gauche",fromFront:"Depuis le mur avant",aboveFloor:"Au-dessus du sol",planSymbol:"Symbole 2D",wallAnchor:"Fixation murale",facesStage:"Vers l\u2019estrade",facesAudience:"Vers les \xE9l\xE8ves",facesRoom:"Vers l\u2019int\xE9rieur de la salle",facesLeft:"Vers la gauche",facesRight:"Vers la droite",heightWarning:"La salle mesure au moins 3,5 m de haut. V\xE9rifiez la hauteur de montage et le besoin de suspension.",cameraRange:"Au moins une cam\xE9ra CV d\xE9passe sa port\xE9e de suivi de 10 m. V\xE9rifiez la configuration.",roomSize:"Saisissez une largeur de 4\u201330 m, une profondeur de 5\u201350 m et une hauteur de 2,4\u20136 m.",screenSpace:"Les IFP s\xE9lectionn\xE9s n\xE9cessitent un mur avant plus large.",screenHeight:"L\u2019IFP est trop haut pour cette salle.",pngReady:"PNG export\xE9",webglError:"Impossible de d\xE9marrer la 3D. Activez l\u2019acc\xE9l\xE9ration mat\xE9rielle ou utilisez un navigateur compatible WebGL.",demoNote:"Hauteur indicative ; \xE0 confirmer sur site",recommendation:"Recommandation pour cette salle",s210:"Microphone de plafond S210",teacher:"Cam\xE9ra enseignant",student:"Cam\xE9ra \xE9l\xE8ves",station:"Station LCS",ndp:"Pupitre NDP600",ifp:"\xC9cran interactif IFP",display:"\xC9crans auxiliaires",speaker:"Haut-parleur PS610"};var Ud={importedPlan:"2D \uACC4\uD68D\uC5D0\uC11C \uAC00\uC838\uC634",importedDesc:"\uAC00\uC838\uC628 2D \uBC30\uCE58\uC640 \uBCBD\uBA74 \uC124\uCE58 \uC608\uC2DC\uC785\uB2C8\uB2E4. \uACF5\uAC04\uACFC \uC7A5\uBE44\uB294 2D\uC5D0\uC11C \uC218\uC815\uD558\uC138\uC694.",resetImported:"\uAC00\uC838\uC628 \uBCF4\uAE30\uC640 \uB192\uC774 \uBCF5\uC6D0",title:"LCS 810 \xB7 3D \uAD50\uC2E4 \uB370\uBAA8",eyebrow:"\uAD50\uC2E4 \uACF5\uAC04 \uC778\uD130\uB799\uD2F0\uBE0C \uC5F0\uAD6C",export:"PNG \uB0B4\uBCF4\uB0B4\uAE30",preset:"\uACF5\uAC04 \uD504\uB9AC\uC14B",standard:"\uD45C\uC900 8 \xD7 10",large:"\uB300\uD615 10 \xD7 20",lecture:"\uAC15\uC758\uC2E4 12 \xD7 15",ultra:"\uB300\uAC15\uB2F9 17 \xD7 37",custom:"\uC0AC\uC6A9\uC790 \uC9C0\uC815",recalculate:"\uB2E4\uC2DC \uACC4\uC0B0",overview:"\uC804\uCCB4 \uBCF4\uAE30",top:"\uD3C9\uBA74 \uBCF4\uAE30",stageView:"\uAD50\uB2E8 \uBC29\uD5A5",audienceView:"\uD559\uC0DD \uBC29\uD5A5",gestureHint:"\uB4DC\uB798\uADF8: \uD68C\uC804 \xB7 \uC2A4\uD06C\uB864: \uD655\uB300/\uCD95\uC18C \xB7 \uC624\uB978\uCABD \uB4DC\uB798\uADF8: \uC774\uB3D9 \xB7 \uC7A5\uBE44 \uD074\uB9AD",study:"\uD504\uB9AC\uC138\uC77C\uC988 \uACF5\uAC04 \uC5F0\uAD6C",layoutTitle:"\uC2DC\uC2A4\uD15C \uBC30\uCE58",layoutDesc:"2D \uC7AC\uACC4\uC0B0 \uADDC\uCE59\uC5D0 \uB530\uB978 \uC124\uCE58 \uC704\uCE58 \uC608\uC2DC\uC785\uB2C8\uB2E4.",width:"\uB108\uBE44 (m)",depth:"\uAE4A\uC774 (m)",height:"\uB192\uC774 (m)",devices:"\uC7A5\uBE44",selected:"\uC120\uD0DD\uD55C \uC7A5\uBE44",settings:"\uC7A5\uBA74 \uC124\uC815",equipment:"\uC7A5\uBE44 \uAD6C\uC131",ifpSize:"IFP \uD06C\uAE30",ifpCount:"IFP \uC218\uB7C9",displaySize:"\uBCF4\uC870 \uD654\uBA74 \uD06C\uAE30",cameraPackage:"\uCE74\uBA54\uB77C \uAD6C\uC131",teacherModel:"\uAD50\uC0AC \uCE74\uBA54\uB77C",studentModel:"\uD559\uC0DD \uCE74\uBA54\uB77C",studentQty:"\uD559\uC0DD \uCE74\uBA54\uB77C \uC218\uB7C9",applyRecommendation:"\uCD94\uCC9C \uCE74\uBA54\uB77C \uC801\uC6A9",applyEquipment:"\uC7A5\uBE44 \uC801\uC6A9",mountingHeights:"\uC608\uC2DC \uC124\uCE58 \uB192\uC774",doorSide:"\uBB38 \uC704\uCE58",doorRight:"\uC624\uB978\uCABD \uBCBD",doorLeft:"\uC67C\uCABD \uBCBD",visibility:"\uD45C\uC2DC \uC124\uC815",showLabels:"\uC7A5\uBE44 \uC774\uB984",showFurniture:"\uCC38\uACE0 \uAC00\uAD6C",showCoverage:"\uBC14\uB2E5 \uCEE4\uBC84\uB9AC\uC9C0 \uD22C\uC601",coverageNote:"S210\uC740 2D \uBC14\uB2E5 \uD22C\uC601\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uCE74\uBA54\uB77C \uBC14\uB2E5 \uBC94\uC704\uB294 \uD604\uC7AC 16:9 \uD654\uAC01\uACFC \uBC29\uD5A5\uC744 \uB530\uB985\uB2C8\uB2E4.",reset:"\uB370\uBAA8 \uAE30\uBCF8\uAC12 \uBCF5\uC6D0",assumption:"\uC124\uCE58 \uB192\uC774\uC640 \uB2E8\uC21C\uD654\uB41C \uC678\uD615\uC740 \uC2DC\uC5F0\uC6A9\uC785\uB2C8\uB2E4. \uD604\uC7A5\uC5D0\uC11C \uCD5C\uC885 \uD655\uC778\uD558\uC138\uC694.",fromLeft:"\uC67C\uCABD \uBCBD\uC5D0\uC11C",fromFront:"\uC55E\uCABD \uBCBD\uC5D0\uC11C",aboveFloor:"\uBC14\uB2E5\uC5D0\uC11C",planSymbol:"2D \uAE30\uD638",wallAnchor:"\uBCBD\uBA74 \uC124\uCE58",facesStage:"\uAD50\uB2E8 \uBC29\uD5A5",facesAudience:"\uD559\uC0DD \uBC29\uD5A5",facesRoom:"\uAD50\uC2E4 \uC548\uCABD \uBC29\uD5A5",facesLeft:"\uC67C\uCABD \uBC29\uD5A5",facesRight:"\uC624\uB978\uCABD \uBC29\uD5A5",heightWarning:"\uCC9C\uC7A5 \uB192\uC774\uAC00 3.5 m \uC774\uC0C1\uC785\uB2C8\uB2E4. \uC124\uCE58 \uB192\uC774\uC640 \uD558\uAC15 \uBE0C\uB798\uD0B7 \uD544\uC694 \uC5EC\uBD80\uB97C \uD655\uC778\uD558\uC138\uC694.",cameraRange:"CV \uCE74\uBA54\uB77C\uAC00 10 m \uCD94\uC801 \uBC94\uC704\uB97C \uCD08\uACFC\uD569\uB2C8\uB2E4. \uCE74\uBA54\uB77C \uAD6C\uC131\uC744 \uD655\uC778\uD558\uC138\uC694.",roomSize:"\uB108\uBE44 4\u201330 m, \uAE4A\uC774 5\u201350 m, \uB192\uC774 2.4\u20136 m\uB97C \uC785\uB825\uD558\uC138\uC694.",screenSpace:"\uC120\uD0DD\uD55C IFP \uC870\uD569\uC5D0 \uD544\uC694\uD55C \uC804\uBA74 \uBCBD \uB108\uBE44\uAC00 \uBD80\uC871\uD569\uB2C8\uB2E4.",screenHeight:"IFP \uB192\uC774\uAC00 \uD604\uC7AC \uACF5\uAC04\uC5D0 \uB9DE\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",pngReady:"PNG \uB0B4\uBCF4\uB0B4\uAE30 \uC644\uB8CC",webglError:"3D\uB97C \uC2DC\uC791\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D \uB610\uB294 WebGL \uC9C0\uC6D0 \uBE0C\uB77C\uC6B0\uC800\uB97C \uC0AC\uC6A9\uD558\uC138\uC694.",demoNote:"\uC608\uC2DC \uB192\uC774 \u2014 \uD604\uC7A5 \uD655\uC778",recommendation:"\uC774 \uACF5\uAC04\uC5D0 \uB300\uD55C \uAD8C\uC7A5 \uAD6C\uC131",s210:"S210 \uCC9C\uC7A5 \uB9C8\uC774\uD06C",teacher:"\uAD50\uC0AC \uCE74\uBA54\uB77C",student:"\uD559\uC0DD \uCE74\uBA54\uB77C",station:"LCS \uC2A4\uD14C\uC774\uC158",ndp:"NDP600 \uAC15\uC758\uB300",ifp:"IFP \uB300\uD654\uD615 \uD654\uBA74",display:"\uBCF4\uC870 \uD654\uBA74",speaker:"PS610 \uC2A4\uD53C\uCEE4"};var Fd={importedPlan:"2D \u0442\u04E9\u043B\u04E9\u0432\u043B\u04E9\u0433\u04E9\u04E9\u043D\u04E9\u04E9\u0441",importedDesc:"\u0418\u043C\u043F\u043E\u0440\u0442\u043E\u043B\u0441\u043E\u043D 2D \u0431\u0430\u0439\u0440\u043B\u0430\u043B \u0431\u0430 \u0445\u0430\u043D\u044B\u043D \u0443\u0433\u0441\u0440\u0430\u043B\u0442\u044B\u043D \u0436\u0438\u0448\u044D\u044D. \u04E8\u0440\u04E9\u04E9, \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u0433 2D \u0434\u044D\u044D\u0440 \u04E9\u04E9\u0440\u0447\u0438\u043B\u043D\u04E9.",resetImported:"\u0418\u043C\u043F\u043E\u0440\u0442\u043E\u043B\u0441\u043E\u043D \u0445\u0430\u0440\u0430\u0433\u0434\u0430\u0446, \u04E9\u043D\u0434\u0440\u0438\u0439\u0433 \u0441\u044D\u0440\u0433\u044D\u044D\u0445",title:"LCS 810 \xB7 3D \u0430\u043D\u0433\u0438\u0439\u043D \u04AF\u0437\u04AF\u04AF\u043B\u044D\u043D",eyebrow:"\u0410\u041D\u0413\u0418\u0419\u041D \u041E\u0420\u041E\u041D \u0417\u0410\u0419\u041D \u0418\u041D\u0422\u0415\u0420\u0410\u041A\u0422\u0418\u0412 \u04AE\u0417\u04AE\u04AE\u041B\u042D\u041D",export:"PNG \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u043B\u043E\u0445",preset:"\u04E8\u0440\u04E9\u04E9\u043D\u0438\u0439 \u0437\u0430\u0433\u0432\u0430\u0440",standard:"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442 8 \xD7 10",large:"\u0422\u043E\u043C 10 \xD7 20",lecture:"\u041B\u0435\u043A\u0446\u0438\u0439\u043D \u0442\u0430\u043D\u0445\u0438\u043C 12 \xD7 15",ultra:"\u0418\u0445 \u0442\u0430\u043D\u0445\u0438\u043C 17 \xD7 37",custom:"\u0422\u0443\u0441\u0433\u0430\u0439 \u0445\u044D\u043C\u0436\u044D\u044D",recalculate:"\u0414\u0430\u0445\u0438\u043D \u0442\u043E\u043E\u0446\u043E\u043E\u043B\u043E\u0445",overview:"\u0415\u0440\u04E9\u043D\u0445\u0438\u0439",top:"\u0414\u044D\u044D\u0440\u044D\u044D\u0441",stageView:"\u0411\u0430\u0433\u0448\u0438\u0439\u043D \u0445\u044D\u0441\u044D\u0433",audienceView:"\u0421\u0443\u0440\u0430\u043B\u0446\u0430\u0433\u0447\u0434\u044B\u043D \u0445\u044D\u0441\u044D\u0433",gestureHint:"\u0427\u0438\u0440\u044D\u0445: \u044D\u0440\u0433\u04AF\u04AF\u043B\u044D\u0445 \xB7 \u0413\u04AF\u0439\u043B\u0433\u044D\u0445: \u0442\u043E\u043C\u0440\u0443\u0443\u043B\u0430\u0445 \xB7 \u0411\u0430\u0440\u0443\u0443\u043D \u0447\u0438\u0440\u044D\u043B\u0442: \u0448\u0438\u043B\u0436\u04AF\u04AF\u043B\u044D\u0445 \xB7 \u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436 \u0434\u044D\u044D\u0440 \u0434\u0430\u0440\u043D\u0430",study:"\u0411\u041E\u0420\u041B\u0423\u0423\u041B\u0410\u041B\u0422\u042B\u041D \u04E8\u041C\u041D\u04E8\u0425 \u041E\u0420\u041E\u041D \u0417\u0410\u0419\u041D \u0421\u0423\u0414\u0410\u041B\u0413\u0410\u0410",layoutTitle:"\u0421\u0438\u0441\u0442\u0435\u043C\u0438\u0439\u043D \u0431\u0430\u0439\u0440\u043B\u0430\u043B",layoutDesc:"2D \u0434\u0430\u0445\u0438\u043D \u0442\u043E\u043E\u0446\u043E\u043E\u043B\u043B\u044B\u043D \u0434\u04AF\u0440\u044D\u043C\u0434 \u0442\u0443\u043B\u0433\u0443\u0443\u0440\u043B\u0430\u0441\u0430\u043D \u0443\u0433\u0441\u0440\u0430\u043B\u0442\u044B\u043D \u0431\u0430\u0439\u0440\u043B\u0430\u043B\u044B\u043D \u0436\u0438\u0448\u044D\u044D.",width:"\u04E8\u0440\u0433\u04E9\u043D (\u043C)",depth:"\u0413\u04AF\u043D (\u043C)",height:"\u04E8\u043D\u0434\u04E9\u0440 (\u043C)",devices:"\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u04AF\u04AF\u0434",selected:"\u0421\u043E\u043D\u0433\u043E\u0441\u043E\u043D \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436",settings:"\u0414\u04AF\u0440\u0441\u043B\u044D\u043B\u0438\u0439\u043D \u0442\u043E\u0445\u0438\u0440\u0433\u043E\u043E",equipment:"\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u043D \u0442\u043E\u0445\u0438\u0440\u0433\u043E\u043E",ifpSize:"IFP \u0445\u044D\u043C\u0436\u044D\u044D",ifpCount:"IFP \u0442\u043E\u043E",displaySize:"\u0422\u0443\u0441\u043B\u0430\u0445 \u0434\u044D\u043B\u0433\u044D\u0446\u0438\u0439\u043D \u0445\u044D\u043C\u0436\u044D\u044D",cameraPackage:"\u041A\u0430\u043C\u0435\u0440\u044B\u043D \u0431\u0430\u0433\u0446",teacherModel:"\u0411\u0430\u0433\u0448\u0438\u0439\u043D \u043A\u0430\u043C\u0435\u0440",studentModel:"\u0421\u0443\u0440\u0430\u043B\u0446\u0430\u0433\u0447\u0434\u044B\u043D \u043A\u0430\u043C\u0435\u0440",studentQty:"\u0421\u0443\u0440\u0430\u043B\u0446\u0430\u0433\u0447\u0434\u044B\u043D \u043A\u0430\u043C\u0435\u0440\u044B\u043D \u0442\u043E\u043E",applyRecommendation:"\u0421\u0430\u043D\u0430\u043B \u0431\u043E\u043B\u0433\u043E\u0441\u043E\u043D \u043A\u0430\u043C\u0435\u0440\u044B\u0433 \u0445\u044D\u0440\u044D\u0433\u043B\u044D\u0445",applyEquipment:"\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u0433 \u0445\u044D\u0440\u044D\u0433\u043B\u044D\u0445",mountingHeights:"\u0423\u0433\u0441\u0440\u0430\u043B\u0442\u044B\u043D \u04E9\u043D\u0434\u0440\u0438\u0439\u043D \u0436\u0438\u0448\u044D\u044D",doorSide:"\u0425\u0430\u0430\u043B\u0433\u0430\u043D\u044B \u0442\u0430\u043B",doorRight:"\u0411\u0430\u0440\u0443\u0443\u043D \u0445\u0430\u043D\u0430",doorLeft:"\u0417\u04AF\u04AF\u043D \u0445\u0430\u043D\u0430",visibility:"\u0425\u0430\u0440\u0430\u0433\u0434\u0430\u0446",showLabels:"\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u043D \u043D\u044D\u0440",showFurniture:"\u0416\u0438\u0448\u0438\u0433 \u0442\u0430\u0432\u0438\u043B\u0433\u0430",showCoverage:"\u0428\u0430\u043B\u043D\u044B \u0445\u0430\u043C\u0440\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D\u043D\u0438\u0439 \u0442\u0443\u0441\u0433\u0430\u043B",coverageNote:"S210 \u043D\u044C 2D \u0448\u0430\u043B\u043D\u044B \u0442\u0443\u0441\u0433\u0430\u043B\u044B\u0433 \u0430\u0448\u0438\u0433\u043B\u0430\u043D\u0430. \u041A\u0430\u043C\u0435\u0440\u044B\u043D \u0448\u0430\u043B\u043D\u044B \u0445\u04AF\u0440\u044D\u044D \u043E\u0434\u043E\u043E\u0433\u0438\u0439\u043D 16:9 \u04E9\u043D\u0446\u04E9\u0433 \u0431\u0430 \u0447\u0438\u0433\u043B\u044D\u043B\u0438\u0439\u0433 \u0434\u0430\u0433\u0430\u043D\u0430.",reset:"\u04AE\u0437\u04AF\u04AF\u043B\u044D\u043D\u0433\u0438\u0439\u043D \u0430\u043D\u0445\u043D\u044B \u0442\u043E\u0445\u0438\u0440\u0433\u043E\u043E",assumption:"\u0423\u0433\u0441\u0440\u0430\u043B\u0442\u044B\u043D \u04E9\u043D\u0434\u04E9\u0440, \u0445\u044F\u043B\u0431\u0430\u0440\u0448\u0443\u0443\u043B\u0441\u0430\u043D \u0445\u044D\u043B\u0431\u044D\u0440 \u043D\u044C \u04AF\u0437\u04AF\u04AF\u043B\u044D\u043D\u0433\u0438\u0439\u043D \u0442\u0430\u0430\u043C\u0430\u0433. \u0422\u0430\u043B\u0431\u0430\u0439 \u0434\u044D\u044D\u0440 \u0431\u0430\u0442\u0430\u043B\u0433\u0430\u0430\u0436\u0443\u0443\u043B\u043D\u0430.",fromLeft:"\u0417\u04AF\u04AF\u043D \u0445\u0430\u043D\u0430\u043D\u0430\u0430\u0441",fromFront:"\u0423\u0440\u0434 \u0445\u0430\u043D\u0430\u043D\u0430\u0430\u0441",aboveFloor:"\u0428\u0430\u043B\u043D\u0430\u0430\u0441 \u0434\u044D\u044D\u0448",planSymbol:"2D \u0442\u044D\u043C\u0434\u044D\u0433\u043B\u044D\u0433\u044D\u044D",wallAnchor:"\u0425\u0430\u043D\u044B\u043D \u0443\u0433\u0441\u0440\u0430\u043B\u0442",facesStage:"\u0411\u0430\u0433\u0448\u0438\u0439\u043D \u0445\u044D\u0441\u044D\u0433 \u0440\u04AF\u04AF",facesAudience:"\u0421\u0443\u0440\u0430\u043B\u0446\u0430\u0433\u0447\u0438\u0434 \u0440\u0443\u0443",facesRoom:"\u04E8\u0440\u04E9\u04E9\u043D\u0438\u0439 \u0434\u043E\u0442\u043E\u0440 \u0442\u0430\u043B \u0440\u0443\u0443",facesLeft:"\u0417\u04AF\u04AF\u043D \u0442\u0438\u0439\u0448",facesRight:"\u0411\u0430\u0440\u0443\u0443\u043D \u0442\u0438\u0439\u0448",heightWarning:"\u04E8\u0440\u04E9\u04E9\u043D\u0438\u0439 \u04E9\u043D\u0434\u04E9\u0440 3.5 \u043C-\u044D\u044D\u0441 \u0434\u044D\u044D\u0448. \u0423\u0433\u0441\u0440\u0430\u043B\u0442\u044B\u043D \u04E9\u043D\u0434\u04E9\u0440 \u0431\u043E\u043B\u043E\u043D \u0443\u043D\u0436\u0443\u0443\u043B\u0430\u0445 \u0431\u044D\u0445\u044D\u043B\u0433\u044D\u044D\u0433 \u0448\u0430\u043B\u0433\u0430\u043D\u0430.",cameraRange:"CV \u043A\u0430\u043C\u0435\u0440\u044B\u043D 10 \u043C \u0434\u0430\u0433\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D \u0445\u044D\u0442\u044D\u0440\u0441\u044D\u043D. \u041A\u0430\u043C\u0435\u0440\u044B\u043D \u0431\u0430\u0439\u0440\u043B\u0430\u043B\u044B\u0433 \u0448\u0430\u043B\u0433\u0430\u043D\u0430.",roomSize:"\u04E8\u0440\u0433\u04E9\u043D 4\u201330 \u043C, \u0433\u04AF\u043D 5\u201350 \u043C, \u04E9\u043D\u0434\u04E9\u0440 2.4\u20136 \u043C \u043E\u0440\u0443\u0443\u043B\u043D\u0430.",screenSpace:"\u0421\u043E\u043D\u0433\u043E\u0441\u043E\u043D IFP \u0445\u043E\u0441\u043B\u043E\u043B\u0434 \u0443\u0440\u0434 \u0445\u0430\u043D\u044B\u043D \u04E9\u0440\u0433\u04E9\u043D \u0445\u04AF\u0440\u044D\u043B\u0446\u044D\u0445\u0433\u04AF\u0439.",screenHeight:"IFP \u0434\u044D\u043B\u0433\u044D\u0446\u0438\u0439\u043D \u04E9\u043D\u0434\u04E9\u0440 \u044D\u043D\u044D \u04E9\u0440\u04E9\u04E9\u043D\u0434 \u0442\u043E\u0445\u0438\u0440\u043E\u0445\u0433\u04AF\u0439.",pngReady:"PNG \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u043B\u043E\u0433\u0434\u043B\u043E\u043E",webglError:"3D \u044D\u0445\u043B\u04AF\u04AF\u043B\u044D\u0445 \u0431\u043E\u043B\u043E\u043C\u0436\u0433\u04AF\u0439. \u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u043D \u0445\u0443\u0440\u0434\u0430\u0441\u0433\u0430\u043B \u044D\u0441\u0432\u044D\u043B WebGL \u0434\u044D\u043C\u0436\u0434\u044D\u0433 \u0445\u04E9\u0442\u04E9\u0447 \u0445\u044D\u0440\u044D\u0433\u043B\u044D\u043D\u044D.",demoNote:"\u04E8\u043D\u0434\u0440\u0438\u0439\u043D \u0436\u0438\u0448\u044D\u044D \u2014 \u0442\u0430\u043B\u0431\u0430\u0439 \u0434\u044D\u044D\u0440 \u0448\u0430\u043B\u0433\u0430\u043D\u0430",recommendation:"\u042D\u043D\u044D \u04E9\u0440\u04E9\u04E9\u043D\u0434 \u0441\u0430\u043D\u0430\u043B \u0431\u043E\u043B\u0433\u043E\u0445",s210:"S210 \u0442\u0430\u0430\u0437\u043D\u044B \u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D",teacher:"\u0411\u0430\u0433\u0448\u0438\u0439\u043D \u043A\u0430\u043C\u0435\u0440",student:"\u0421\u0443\u0440\u0430\u043B\u0446\u0430\u0433\u0447\u0434\u044B\u043D \u043A\u0430\u043C\u0435\u0440",station:"LCS \u0441\u0442\u0430\u043D\u0446",ndp:"NDP600 \u0431\u0430\u0433\u0448\u0438\u0439\u043D \u0448\u0438\u0440\u044D\u044D",ifp:"IFP \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432 \u0434\u044D\u043B\u0433\u044D\u0446",display:"\u0422\u0443\u0441\u043B\u0430\u0445 \u0434\u044D\u043B\u0433\u044D\u0446",speaker:"PS610 \u0447\u0430\u043D\u0433\u0430 \u044F\u0440\u0438\u0433\u0447"};var Od={importedPlan:"2D\u30D7\u30E9\u30F3\u304B\u3089",importedDesc:"\u8AAD\u307F\u8FBC\u3093\u30602D\u914D\u7F6E\u3068\u58C1\u9762\u53D6\u4ED8\u306E\u53C2\u8003\u8868\u793A\u3067\u3059\u3002\u90E8\u5C4B\u3084\u6A5F\u5668\u306E\u5909\u66F4\u306F2D\u3067\u884C\u3063\u3066\u304F\u3060\u3055\u3044\u3002",resetImported:"\u8AAD\u8FBC\u6642\u306E\u8996\u70B9\u3068\u9AD8\u3055\u306B\u623B\u3059",title:"LCS 810 \xB7 3D\u6559\u5BA4\u30C7\u30E2",eyebrow:"\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D6\u306A\u6559\u5BA4\u7A7A\u9593",export:"PNG\u3092\u66F8\u304D\u51FA\u3059",preset:"\u90E8\u5C4B\u30D7\u30EA\u30BB\u30C3\u30C8",standard:"\u6A19\u6E96 8 \xD7 10",large:"\u5927\u578B 10 \xD7 20",lecture:"\u8B1B\u7FA9\u5BA4 12 \xD7 15",ultra:"\u8B1B\u5802 17 \xD7 37",custom:"\u30AB\u30B9\u30BF\u30E0",recalculate:"\u518D\u8A08\u7B97",overview:"\u5168\u4F53",top:"\u4E0A\u9762",stageView:"\u6559\u58C7\u5074",audienceView:"\u5BA2\u5E2D\u5074",gestureHint:"\u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u8EE2\u30FB\u30B9\u30AF\u30ED\u30FC\u30EB\u3067\u62E1\u5927\u7E2E\u5C0F\u30FB\u53F3\u30C9\u30E9\u30C3\u30B0\u3067\u79FB\u52D5\u30FB\u6A5F\u5668\u3092\u30AF\u30EA\u30C3\u30AF",study:"\u63D0\u6848\u7528\u306E\u7A7A\u9593\u691C\u8A0E",layoutTitle:"\u30B7\u30B9\u30C6\u30E0\u914D\u7F6E",layoutDesc:"2D\u306E\u518D\u8A08\u7B97\u30EB\u30FC\u30EB\u306B\u57FA\u3065\u304F\u53D6\u4ED8\u4F4D\u7F6E\u306E\u53C2\u8003\u8868\u793A\u3067\u3059\u3002",width:"\u5E45 (m)",depth:"\u5965\u884C (m)",height:"\u9AD8\u3055 (m)",devices:"\u6A5F\u5668",selected:"\u9078\u629E\u3057\u305F\u6A5F\u5668",settings:"\u30B7\u30FC\u30F3\u8A2D\u5B9A",equipment:"\u6A5F\u5668\u69CB\u6210",ifpSize:"IFP\u30B5\u30A4\u30BA",ifpCount:"IFP\u53F0\u6570",displaySize:"\u88DC\u52A9\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30B5\u30A4\u30BA",cameraPackage:"\u30AB\u30E1\u30E9\u69CB\u6210",teacherModel:"\u8B1B\u5E2B\u7528\u30AB\u30E1\u30E9",studentModel:"\u53D7\u8B1B\u8005\u7528\u30AB\u30E1\u30E9",studentQty:"\u53D7\u8B1B\u8005\u7528\u30AB\u30E1\u30E9\u53F0\u6570",applyRecommendation:"\u63A8\u5968\u30AB\u30E1\u30E9\u3092\u9069\u7528",applyEquipment:"\u6A5F\u5668\u69CB\u6210\u3092\u9069\u7528",mountingHeights:"\u53C2\u8003\u53D6\u4ED8\u9AD8\u3055",doorSide:"\u30C9\u30A2\u306E\u4F4D\u7F6E",doorRight:"\u53F3\u306E\u58C1",doorLeft:"\u5DE6\u306E\u58C1",visibility:"\u8868\u793A\u8A2D\u5B9A",showLabels:"\u6A5F\u5668\u540D",showFurniture:"\u53C2\u8003\u5BB6\u5177",showCoverage:"\u5E8A\u9762\u30AB\u30D0\u30FC\u7BC4\u56F2",coverageNote:"S210\u306F2D\u5E8A\u9762\u6295\u5F71\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\u30AB\u30E1\u30E9\u306E\u5E8A\u9762\u7BC4\u56F2\u306F\u73FE\u5728\u306E16:9\u753B\u89D2\u3068\u5411\u304D\u306B\u9023\u52D5\u3057\u307E\u3059\u3002",reset:"\u30C7\u30E2\u306E\u521D\u671F\u8A2D\u5B9A\u306B\u623B\u3059",assumption:"\u53D6\u4ED8\u9AD8\u3055\u3068\u7C21\u7565\u5F62\u72B6\u306F\u53C2\u8003\u3067\u3059\u3002\u6700\u7D42\u4F4D\u7F6E\u306F\u73FE\u5730\u3067\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",fromLeft:"\u5DE6\u58C1\u304B\u3089",fromFront:"\u524D\u58C1\u304B\u3089",aboveFloor:"\u5E8A\u9762\u304B\u3089",planSymbol:"2D\u8A18\u53F7\u4F4D\u7F6E",wallAnchor:"\u58C1\u9762\u53D6\u4ED8",facesStage:"\u6559\u58C7\u5411\u304D",facesAudience:"\u5BA2\u5E2D\u5411\u304D",facesRoom:"\u6559\u5BA4\u5185\u5411\u304D",facesLeft:"\u5DE6\u5411\u304D",facesRight:"\u53F3\u5411\u304D",heightWarning:"\u5929\u4E95\u9AD8\u304C3.5 m\u4EE5\u4E0A\u3067\u3059\u3002\u53D6\u4ED8\u9AD8\u3055\u3068\u540A\u4E0B\u3052\u91D1\u5177\u306E\u5FC5\u8981\u6027\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",cameraRange:"CV\u30AB\u30E1\u30E9\u306E\u8FFD\u5C3E\u8DDD\u96E210 m\u3092\u8D85\u3048\u3066\u3044\u307E\u3059\u3002\u69CB\u6210\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",roomSize:"\u5E454\u201330 m\u3001\u5965\u884C5\u201350 m\u3001\u9AD8\u30552.4\u20136 m\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",screenSpace:"\u9078\u629E\u3057\u305FIFP\u3092\u7F6E\u304F\u524D\u58C1\u306E\u5E45\u304C\u4E0D\u8DB3\u3057\u3066\u3044\u307E\u3059\u3002",screenHeight:"IFP\u306E\u9AD8\u3055\u304C\u5BA4\u5185\u306E\u8A2D\u7F6E\u53EF\u80FD\u7BC4\u56F2\u3092\u8D85\u3048\u3066\u3044\u307E\u3059\u3002",pngReady:"PNG\u3092\u66F8\u304D\u51FA\u3057\u307E\u3057\u305F",webglError:"3D\u3092\u958B\u59CB\u3067\u304D\u307E\u305B\u3093\u3002\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u304BWebGL\u5BFE\u5FDC\u30D6\u30E9\u30A6\u30B6\u3092\u3054\u5229\u7528\u304F\u3060\u3055\u3044\u3002",demoNote:"\u53C2\u8003\u9AD8\u3055\u30FB\u73FE\u5730\u78BA\u8A8D",recommendation:"\u3053\u306E\u90E8\u5C4B\u306E\u63A8\u5968\u69CB\u6210",s210:"S210\u5929\u4E95\u30DE\u30A4\u30AF",teacher:"\u8B1B\u5E2B\u7528\u30AB\u30E1\u30E9",student:"\u53D7\u8B1B\u8005\u7528\u30AB\u30E1\u30E9",station:"LCS\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3",ndp:"NDP600\u8B1B\u5E2B\u5353",ifp:"IFP\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D6\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",display:"\u88DC\u52A9\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",speaker:"PS610\u30B9\u30D4\u30FC\u30AB\u30FC"};var Bd={importedPlan:"Desde el plan 2D",importedDesc:"Distribuci\xF3n 2D importada con montaje mural ilustrativo. Modifique la sala y los equipos en 2D.",resetImported:"Restaurar vista y alturas importadas",title:"LCS 810 \xB7 Demo de aula 3D",eyebrow:"ESTUDIO INTERACTIVO DEL AULA",export:"Exportar PNG",preset:"Sala predefinida",standard:"Est\xE1ndar 8 \xD7 10",large:"Grande 10 \xD7 20",lecture:"Sala de conferencias 12 \xD7 15",ultra:"Auditorio 17 \xD7 37",custom:"Personalizada",recalculate:"Recalcular",overview:"Vista general",top:"Vista superior",stageView:"Hacia el escenario",audienceView:"Hacia los alumnos",gestureHint:"Arrastre para orbitar \xB7 Rueda para acercar \xB7 Arrastre derecho para desplazar \xB7 Pulse un equipo",study:"ESTUDIO ESPACIAL DE PREVENTA",layoutTitle:"Distribuci\xF3n del sistema",layoutDesc:"Posiciones ilustrativas seg\xFAn las reglas de rec\xE1lculo 2D.",width:"Ancho (m)",depth:"Fondo (m)",height:"Altura (m)",devices:"Equipos",selected:"Equipo seleccionado",settings:"Ajustes de escena",equipment:"Configuraci\xF3n de equipos",ifpSize:"Tama\xF1o de IFP",ifpCount:"Cantidad de IFP",displaySize:"Tama\xF1o de pantalla auxiliar",cameraPackage:"Paquete de c\xE1maras",teacherModel:"C\xE1mara del docente",studentModel:"C\xE1mara de alumnos",studentQty:"Cantidad de c\xE1maras de alumnos",applyRecommendation:"Aplicar c\xE1maras recomendadas",applyEquipment:"Aplicar equipos",mountingHeights:"Alturas ilustrativas de montaje",doorSide:"Lado de la puerta",doorRight:"Pared derecha",doorLeft:"Pared izquierda",visibility:"Visibilidad",showLabels:"Nombres de equipos",showFurniture:"Mobiliario de referencia",showCoverage:"Proyecci\xF3n de cobertura",coverageNote:"S210 usa la proyecci\xF3n 2D. El \xE1rea de c\xE1mara en el suelo sigue el campo 16:9 y la direcci\xF3n actuales.",reset:"Restaurar valores del demo",assumption:"Alturas y formas simplificadas son ilustrativas. Confirme en obra.",fromLeft:"Desde la pared izquierda",fromFront:"Desde la pared frontal",aboveFloor:"Sobre el suelo",planSymbol:"S\xEDmbolo 2D",wallAnchor:"Montaje mural",facesStage:"Hacia el escenario",facesAudience:"Hacia los alumnos",facesRoom:"Hacia el aula",facesLeft:"Hacia la izquierda",facesRight:"Hacia la derecha",heightWarning:"La altura es de 3,5 m o m\xE1s. Revise el montaje y el soporte suspendido.",cameraRange:"Alguna c\xE1mara CV supera su alcance de seguimiento de 10 m. Revise el plan.",roomSize:"Introduzca ancho 4\u201330 m, fondo 5\u201350 m y altura 2,4\u20136 m.",screenSpace:"Las pantallas IFP requieren m\xE1s ancho en la pared frontal.",screenHeight:"La pantalla IFP es demasiado alta para esta sala.",pngReady:"PNG exportado",webglError:"No se pudo iniciar 3D. Active la aceleraci\xF3n o use un navegador con WebGL.",demoNote:"Altura ilustrativa; confirmar en obra",recommendation:"Recomendado para esta sala",s210:"Micr\xF3fono de techo S210",teacher:"C\xE1mara del docente",student:"C\xE1mara de alumnos",station:"Estaci\xF3n LCS",ndp:"Atril NDP600",ifp:"Pantalla interactiva IFP",display:"Pantallas auxiliares",speaker:"Altavoz PS610"};var zd={importedPlan:"\u0645\u0646 \u0627\u0644\u0645\u062E\u0637\u0637 \u0627\u0644\u062B\u0646\u0627\u0626\u064A",importedDesc:"\u0627\u0644\u0645\u062E\u0637\u0637 \u0627\u0644\u062B\u0646\u0627\u0626\u064A \u0627\u0644\u0645\u0633\u062A\u0648\u0631\u062F \u0645\u0639 \u0623\u0645\u062B\u0644\u0629 \u0644\u0644\u062A\u062B\u0628\u064A\u062A \u0627\u0644\u062C\u062F\u0627\u0631\u064A. \u0639\u062F\u0651\u0644 \u0627\u0644\u063A\u0631\u0641\u0629 \u0648\u0627\u0644\u0623\u062C\u0647\u0632\u0629 \u0641\u064A \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062B\u0646\u0627\u0626\u064A.",resetImported:"\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u0646\u0638\u0648\u0631 \u0648\u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u0648\u0631\u062F\u0629",title:"LCS 810 \xB7 \u0639\u0631\u0636 \u0627\u0644\u0641\u0635\u0644 \u062B\u0644\u0627\u062B\u064A \u0627\u0644\u0623\u0628\u0639\u0627\u062F",eyebrow:"\u062F\u0631\u0627\u0633\u0629 \u062A\u0641\u0627\u0639\u0644\u064A\u0629 \u0644\u0645\u0633\u0627\u062D\u0629 \u0627\u0644\u0641\u0635\u0644",export:"\u062A\u0635\u062F\u064A\u0631 PNG",preset:"\u0646\u0645\u0648\u0630\u062C \u0627\u0644\u063A\u0631\u0641\u0629",standard:"\u0642\u064A\u0627\u0633\u064A 8 \xD7 10",large:"\u0643\u0628\u064A\u0631 10 \xD7 20",lecture:"\u0642\u0627\u0639\u0629 \u0645\u062D\u0627\u0636\u0631\u0627\u062A 12 \xD7 15",ultra:"\u0645\u062F\u0631\u062C 17 \xD7 37",custom:"\u0645\u062E\u0635\u0635",recalculate:"\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062D\u0633\u0627\u0628",overview:"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629",top:"\u0645\u0646 \u0627\u0644\u0623\u0639\u0644\u0649",stageView:"\u062C\u0647\u0629 \u0627\u0644\u0645\u0646\u0635\u0629",audienceView:"\u062C\u0647\u0629 \u0627\u0644\u0637\u0644\u0627\u0628",gestureHint:"\u0627\u0633\u062D\u0628 \u0644\u0644\u062F\u0648\u0631\u0627\u0646 \xB7 \u0645\u0631\u0651\u0631 \u0644\u0644\u062A\u0643\u0628\u064A\u0631 \xB7 \u0627\u0633\u062D\u0628 \u0628\u0627\u0644\u0632\u0631 \u0627\u0644\u0623\u064A\u0645\u0646 \u0644\u0644\u062A\u062D\u0631\u064A\u0643 \xB7 \u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \u0627\u0644\u062C\u0647\u0627\u0632",study:"\u062F\u0631\u0627\u0633\u0629 \u0645\u0643\u0627\u0646\u064A\u0629 \u0644\u0645\u0627 \u0642\u0628\u0644 \u0627\u0644\u0628\u064A\u0639",layoutTitle:"\u062A\u0648\u0632\u064A\u0639 \u0627\u0644\u0646\u0638\u0627\u0645",layoutDesc:"\u0645\u0648\u0627\u0636\u0639 \u062A\u0631\u0643\u064A\u0628 \u062A\u0648\u0636\u064A\u062D\u064A\u0629 \u0648\u0641\u0642 \u0642\u0648\u0627\u0639\u062F \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062D\u0633\u0627\u0628 \u0627\u0644\u062B\u0646\u0627\u0626\u064A\u0629.",width:"\u0627\u0644\u0639\u0631\u0636 (\u0645)",depth:"\u0627\u0644\u0639\u0645\u0642 (\u0645)",height:"\u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639 (\u0645)",devices:"\u0627\u0644\u0623\u062C\u0647\u0632\u0629",selected:"\u0627\u0644\u062C\u0647\u0627\u0632 \u0627\u0644\u0645\u062D\u062F\u062F",settings:"\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0634\u0647\u062F",equipment:"\u062A\u0643\u0648\u064A\u0646 \u0627\u0644\u0623\u062C\u0647\u0632\u0629",ifpSize:"\u062D\u062C\u0645 \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u064A\u0629",ifpCount:"\u0639\u062F\u062F \u0627\u0644\u0634\u0627\u0634\u0627\u062A \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u064A\u0629",displaySize:"\u062D\u062C\u0645 \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629",cameraPackage:"\u062D\u0632\u0645\u0629 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627\u062A",teacherModel:"\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u0645\u0639\u0644\u0645",studentModel:"\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u0637\u0644\u0627\u0628",studentQty:"\u0639\u062F\u062F \u0643\u0627\u0645\u064A\u0631\u0627\u062A \u0627\u0644\u0637\u0644\u0627\u0628",applyRecommendation:"\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627\u062A \u0627\u0644\u0645\u0642\u062A\u0631\u062D\u0629",applyEquipment:"\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0623\u062C\u0647\u0632\u0629",mountingHeights:"\u0627\u0631\u062A\u0641\u0627\u0639\u0627\u062A \u062A\u0631\u0643\u064A\u0628 \u062A\u0648\u0636\u064A\u062D\u064A\u0629",doorSide:"\u062C\u0647\u0629 \u0627\u0644\u0628\u0627\u0628",doorRight:"\u0627\u0644\u062C\u062F\u0627\u0631 \u0627\u0644\u0623\u064A\u0645\u0646",doorLeft:"\u0627\u0644\u062C\u062F\u0627\u0631 \u0627\u0644\u0623\u064A\u0633\u0631",visibility:"\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0639\u0631\u0636",showLabels:"\u0623\u0633\u0645\u0627\u0621 \u0627\u0644\u0623\u062C\u0647\u0632\u0629",showFurniture:"\u0623\u062B\u0627\u062B \u0645\u0631\u062C\u0639\u064A",showCoverage:"\u0625\u0633\u0642\u0627\u0637 \u0627\u0644\u062A\u063A\u0637\u064A\u0629 \u0639\u0644\u0649 \u0627\u0644\u0623\u0631\u0636",coverageNote:"\u064A\u0633\u062A\u062E\u062F\u0645 S210 \u0627\u0644\u0625\u0633\u0642\u0627\u0637 \u0627\u0644\u0623\u0631\u0636\u064A \u0627\u0644\u062B\u0646\u0627\u0626\u064A. \u062A\u062A\u0628\u0639 \u0645\u0633\u0627\u062D\u0629 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u0623\u0631\u0636\u064A\u0629 \u0645\u062C\u0627\u0644 16:9 \u0648\u0627\u062A\u062C\u0627\u0647\u0647\u0627 \u0627\u0644\u062D\u0627\u0644\u064A\u064A\u0646.",reset:"\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629",assumption:"\u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639\u0627\u062A \u0648\u0627\u0644\u0623\u0634\u0643\u0627\u0644 \u0627\u0644\u0645\u0628\u0633\u0637\u0629 \u062A\u0648\u0636\u064A\u062D\u064A\u0629. \u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0645\u0648\u0627\u0636\u0639 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629 \u0641\u064A \u0627\u0644\u0645\u0648\u0642\u0639.",fromLeft:"\u0645\u0646 \u0627\u0644\u062C\u062F\u0627\u0631 \u0627\u0644\u0623\u064A\u0633\u0631",fromFront:"\u0645\u0646 \u0627\u0644\u062C\u062F\u0627\u0631 \u0627\u0644\u0623\u0645\u0627\u0645\u064A",aboveFloor:"\u0641\u0648\u0642 \u0627\u0644\u0623\u0631\u0636",planSymbol:"\u0645\u0648\u0636\u0639 \u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u062B\u0646\u0627\u0626\u064A",wallAnchor:"\u062A\u062B\u0628\u064A\u062A \u062C\u062F\u0627\u0631\u064A",facesStage:"\u0628\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0645\u0646\u0635\u0629",facesAudience:"\u0628\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0637\u0644\u0627\u0628",facesRoom:"\u0628\u0627\u062A\u062C\u0627\u0647 \u062F\u0627\u062E\u0644 \u0627\u0644\u0641\u0635\u0644",facesLeft:"\u0628\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u064A\u0633\u0627\u0631",facesRight:"\u0628\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u064A\u0645\u064A\u0646",heightWarning:"\u0627\u0631\u062A\u0641\u0627\u0639 \u0627\u0644\u063A\u0631\u0641\u0629 3.5 \u0645 \u0623\u0648 \u0623\u0643\u062B\u0631. \u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0631\u062A\u0641\u0627\u0639 \u0627\u0644\u062A\u062B\u0628\u064A\u062A \u0648\u0627\u0644\u062D\u0627\u062C\u0629 \u0625\u0644\u0649 \u062D\u0627\u0645\u0644 \u0645\u0639\u0644\u0642.",cameraRange:"\u062A\u062A\u062C\u0627\u0648\u0632 \u0625\u062D\u062F\u0649 \u0643\u0627\u0645\u064A\u0631\u0627\u062A CV \u0645\u062F\u0649 \u0627\u0644\u062A\u062A\u0628\u0639 \u0627\u0644\u0628\u0627\u0644\u063A 10 \u0645. \u0631\u0627\u062C\u0639 \u0627\u0644\u062A\u0648\u0632\u064A\u0639.",roomSize:"\u0623\u062F\u062E\u0644 \u0639\u0631\u0636\u064B\u0627 4\u201330 \u0645 \u0648\u0639\u0645\u0642\u064B\u0627 5\u201350 \u0645 \u0648\u0627\u0631\u062A\u0641\u0627\u0639\u064B\u0627 2.4\u20136 \u0645.",screenSpace:"\u062A\u062D\u062A\u0627\u062C \u0627\u0644\u0634\u0627\u0634\u0627\u062A \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u0629 \u0625\u0644\u0649 \u0639\u0631\u0636 \u0623\u0643\u0628\u0631 \u0644\u0644\u062C\u062F\u0627\u0631 \u0627\u0644\u0623\u0645\u0627\u0645\u064A.",screenHeight:"\u0627\u0631\u062A\u0641\u0627\u0639 \u0627\u0644\u0634\u0627\u0634\u0629 \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u0645\u0633\u0627\u062D\u0629 \u0627\u0644\u0645\u062A\u0627\u062D\u0629 \u0644\u0644\u062A\u0631\u0643\u064A\u0628.",pngReady:"\u062A\u0645 \u062A\u0635\u062F\u064A\u0631 PNG",webglError:"\u062A\u0639\u0630\u0631 \u0628\u062F\u0621 \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062B\u0644\u0627\u062B\u064A. \u0641\u0639\u0651\u0644 \u062A\u0633\u0631\u064A\u0639 \u0627\u0644\u0623\u062C\u0647\u0632\u0629 \u0623\u0648 \u0627\u0633\u062A\u062E\u062F\u0645 \u0645\u062A\u0635\u0641\u062D\u064B\u0627 \u064A\u062F\u0639\u0645 WebGL.",demoNote:"\u0627\u0631\u062A\u0641\u0627\u0639 \u062A\u0648\u0636\u064A\u062D\u064A\u061B \u062A\u062D\u0642\u0642 \u0641\u064A \u0627\u0644\u0645\u0648\u0642\u0639",recommendation:"\u0627\u0644\u0645\u0642\u062A\u0631\u062D \u0644\u0647\u0630\u0647 \u0627\u0644\u063A\u0631\u0641\u0629",s210:"\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646 \u0633\u0642\u0641\u064A S210",teacher:"\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u0645\u0639\u0644\u0645",student:"\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u0637\u0644\u0627\u0628",station:"\u0645\u062D\u0637\u0629 LCS",ndp:"\u0645\u0646\u0635\u0629 NDP600",ifp:"\u0634\u0627\u0634\u0629 \u062A\u0641\u0627\u0639\u0644\u064A\u0629 IFP",display:"\u0627\u0644\u0634\u0627\u0634\u0627\u062A \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629",speaker:"\u0645\u0643\u0628\u0631 \u0635\u0648\u062A PS610"};var Cr={en:{importedPlan:"From 2D plan",importedDesc:"Current 2D deployment with illustrative wall mounts. Return to 2D to change the room or equipment.",resetImported:"Restore imported view and heights",title:"LCS 810 \xB7 3D Room Demo",eyebrow:"INTERACTIVE ROOM STUDY",export:"Export PNG",preset:"Preset",standard:"Standard 8 \xD7 10",large:"Large 10 \xD7 20",lecture:"Lecture 12 \xD7 15",ultra:"Auditorium 17 \xD7 37",custom:"Custom",recalculate:"Recalculate",overview:"Overview",top:"Top",stageView:"Stage",audienceView:"Audience",gestureHint:"Drag to orbit \xB7 Scroll to zoom \xB7 Right drag to pan \xB7 Click a device",study:"PRESALES SPATIAL STUDY",layoutTitle:"System layout",layoutDesc:"Illustrative installation positions from the 2D Recalculate rules.",width:"WIDTH (m)",depth:"DEPTH (m)",height:"HEIGHT (m)",devices:"Devices",selected:"Selected device",settings:"Scene settings",equipment:"Equipment configuration",ifpSize:"IFP size",ifpCount:"IFP panels",displaySize:"Auxiliary Display size",cameraPackage:"Camera package",teacherModel:"Teacher camera",studentModel:"Student camera",studentQty:"Student cameras",applyRecommendation:"Apply recommended cameras",applyEquipment:"Apply equipment",mountingHeights:"Illustrative mounting heights",doorSide:"Door side",doorRight:"Right wall",doorLeft:"Left wall",visibility:"Visibility",showLabels:"Device names",showFurniture:"Reference furniture",showCoverage:"Floor coverage projection",coverageNote:"S210 uses the 2D floor projection. Camera floor areas follow the current 16:9 field and viewing direction.",reset:"Restore demo defaults",assumption:"Mounting heights and simplified shapes are presentation assumptions. Confirm on site.",fromLeft:"from left wall",fromFront:"from front wall",aboveFloor:"above floor",planSymbol:"2D symbol",wallAnchor:"Wall mount",facesStage:"Faces stage",facesAudience:"Faces audience",facesRoom:"Faces into the classroom",facesLeft:"Faces left",facesRight:"Faces right",heightWarning:"Room height is 3.5 m or more. Check mounting height and use a drop mount where needed.",cameraRange:"At least one CV camera exceeds its 10 m tracking range. Check the camera plan.",roomSize:"Enter width 4\u201330 m, depth 5\u201350 m, and height 2.4\u20136 m.",screenSpace:"The selected IFP panels need more front-wall width.",screenHeight:"The IFP is too tall for this room height.",pngReady:"PNG ready",webglError:"3D could not start. Enable hardware acceleration or use a browser with WebGL support.",demoNote:"Illustrative height \u2014 confirm on site",recommendation:"Suggested for this room",s210:"S210",teacher:"Teacher camera",student:"Student camera",station:"LCS Station",ndp:"NDP600",ifp:"IFP",display:"Auxiliary Displays",speaker:"PS610"},zh:{importedPlan:"\u6765\u81EA 2D \u65B9\u6848",importedDesc:"\u5C55\u793A\u4E8C\u7EF4\u90E8\u7F72\u53CA\u58C1\u6302\u5B89\u88C5\u793A\u610F\uFF1B\u4FEE\u6539\u623F\u95F4\u6216\u8BBE\u5907\u8BF7\u8FD4\u56DE\u4E8C\u7EF4\u9875\u9762\u3002",resetImported:"\u6062\u590D\u5BFC\u5165\u65B9\u6848\u89C6\u89D2\u4E0E\u9AD8\u5EA6",title:"LCS 810 \xB7 \u4E09\u7EF4\u6559\u5BA4\u6F14\u793A",eyebrow:"\u4EA4\u4E92\u5F0F\u6559\u5BA4\u7A7A\u95F4\u793A\u610F",export:"\u5BFC\u51FA PNG",preset:"\u623F\u95F4\u9884\u8BBE",standard:"\u6807\u51C6\u6559\u5BA4 8 \xD7 10",large:"\u5927\u6559\u5BA4 10 \xD7 20",lecture:"\u9636\u68AF\u6559\u5BA4 12 \xD7 15",ultra:"\u793C\u5802 17 \xD7 37",custom:"\u81EA\u5B9A\u4E49",recalculate:"\u91CD\u65B0\u8BA1\u7B97",overview:"\u5168\u666F",top:"\u4FEF\u89C6",stageView:"\u8BB2\u53F0\u65B9\u5411",audienceView:"\u89C2\u4F17\u65B9\u5411",gestureHint:"\u62D6\u52A8\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u53F3\u952E\u62D6\u52A8\u5E73\u79FB \xB7 \u70B9\u51FB\u8BBE\u5907",study:"\u552E\u524D\u7A7A\u95F4\u793A\u610F",layoutTitle:"\u7CFB\u7EDF\u5E03\u5C40",layoutDesc:"\u6839\u636E\u4E8C\u7EF4\u201C\u91CD\u65B0\u8BA1\u7B97\u201D\u89C4\u5219\u751F\u6210\u7684\u5B89\u88C5\u793A\u610F\u3002",width:"\u5BBD\u5EA6\uFF08\u7C73\uFF09",depth:"\u6DF1\u5EA6\uFF08\u7C73\uFF09",height:"\u9AD8\u5EA6\uFF08\u7C73\uFF09",devices:"\u8BBE\u5907",selected:"\u5F53\u524D\u8BBE\u5907",settings:"\u573A\u666F\u8BBE\u7F6E",equipment:"\u8BBE\u5907\u914D\u7F6E",ifpSize:"IFP\u5C3A\u5BF8",ifpCount:"IFP\u6570\u91CF",displaySize:"\u8F85\u52A9\u5C4F\u5C3A\u5BF8",cameraPackage:"\u6444\u50CF\u5934\u5957\u88C5",teacherModel:"\u6559\u5E08\u6444\u50CF\u5934",studentModel:"\u5B66\u751F\u6444\u50CF\u5934",studentQty:"\u5B66\u751F\u673A\u6570\u91CF",applyRecommendation:"\u5E94\u7528\u63A8\u8350\u6444\u50CF\u5934",applyEquipment:"\u5E94\u7528\u8BBE\u5907\u914D\u7F6E",mountingHeights:"\u6F14\u793A\u5B89\u88C5\u9AD8\u5EA6",doorSide:"\u95E8\u7684\u4F4D\u7F6E",doorRight:"\u53F3\u4FA7\u5899",doorLeft:"\u5DE6\u4FA7\u5899",visibility:"\u663E\u793A\u5F00\u5173",showLabels:"\u8BBE\u5907\u540D\u79F0",showFurniture:"\u53C2\u8003\u684C\u6905",showCoverage:"\u5730\u9762\u8986\u76D6\u6295\u5F71",coverageNote:"S210 \u6CBF\u7528\u4E8C\u7EF4\u5730\u9762\u6295\u5F71\uFF1B\u6444\u50CF\u5934\u5730\u9762\u8303\u56F4\u968F\u5F53\u524D 16:9 \u89C6\u573A\u548C\u671D\u5411\u53D8\u5316\u3002",reset:"\u6062\u590D\u6F14\u793A\u9ED8\u8BA4\u503C",assumption:"\u5B89\u88C5\u9AD8\u5EA6\u548C\u7B80\u5316\u5916\u5F62\u4EC5\u4F5C\u6F14\u793A\uFF0C\u6700\u7EC8\u9700\u73B0\u573A\u590D\u6838\u3002",fromLeft:"\u8DDD\u5DE6\u5899",fromFront:"\u8DDD\u524D\u5899",aboveFloor:"\u79BB\u5730",planSymbol:"\u4E8C\u7EF4\u56FE\u6807\u4F4D\u7F6E",wallAnchor:"\u58C1\u6302\u5B89\u88C5",facesStage:"\u671D\u5411\u8BB2\u53F0",facesAudience:"\u671D\u5411\u89C2\u4F17",facesRoom:"\u671D\u5411\u6559\u5BA4\u5185\u90E8",facesLeft:"\u671D\u5DE6",facesRight:"\u671D\u53F3",heightWarning:"\u623F\u95F4\u9AD8\u5EA6\u8FBE\u52303.5\u7C73\uFF1A\u8BF7\u6838\u5BF9\u8BBE\u5907\u5B89\u88C5\u9AD8\u5EA6\uFF0C\u5FC5\u8981\u65F6\u4F7F\u7528\u4E0B\u5782\u652F\u67B6\u3002",cameraRange:"\u81F3\u5C11\u4E00\u53F0CV\u6444\u50CF\u5934\u8D85\u51FA10\u7C73\u8DDF\u8E2A\u8DDD\u79BB\uFF0C\u8BF7\u590D\u6838\u6444\u50CF\u5934\u65B9\u6848\u3002",roomSize:"\u8BF7\u8F93\u5165\u5BBD4\u201330\u7C73\u3001\u6DF15\u201350\u7C73\u3001\u9AD82.4\u20136\u7C73\u3002",screenSpace:"\u6240\u9009IFP\u7EC4\u5408\u5728\u524D\u5899\u653E\u4E0D\u4E0B\u3002",screenHeight:"IFP\u9AD8\u5EA6\u8D85\u8FC7\u623F\u95F4\u53EF\u5B89\u88C5\u7A7A\u95F4\u3002",pngReady:"PNG\u5DF2\u5BFC\u51FA",webglError:"\u65E0\u6CD5\u542F\u52A8\u4E09\u7EF4\u753B\u9762\u3002\u8BF7\u5F00\u542F\u786C\u4EF6\u52A0\u901F\u6216\u4F7F\u7528\u652F\u6301WebGL\u7684\u6D4F\u89C8\u5668\u3002",demoNote:"\u6F14\u793A\u9AD8\u5EA6\uFF0C\u73B0\u573A\u590D\u6838",recommendation:"\u6B64\u623F\u95F4\u63A8\u8350",s210:"S210\u540A\u9EA6",teacher:"\u6559\u5E08\u6444\u50CF\u5934",student:"\u5B66\u751F\u6444\u50CF\u5934",station:"LCS\u63A7\u5236\u53F0",ndp:"NDP600\u8BB2\u53F0",ifp:"IFP",display:"Auxiliary Displays",speaker:"PS610\u97F3\u7BB1"}};Object.assign(Cr,{ko:Ud,mn:Fd,ja:Od,es:Bd,fr:Nd,ar:zd});var Lx={en:["S210 3D pickup ripples","Animate pickup ripples","Cardioid illustration based on 6 m and 8 m planning ranges. Verify pickup on site."],zh:["S210 \u4E09\u7EF4\u62FE\u97F3\u6CE2\u7EB9","\u64AD\u653E\u62FE\u97F3\u6CE2\u7EB9","\u6309 6 \u7C73\u63A8\u8350\u30018 \u7C73\u8FB9\u754C\u7684\u89C4\u5212\u5C3A\u5EA6\u7ED8\u5236\u5FC3\u5F62\u62FE\u97F3\u793A\u610F\u3002\u5B9E\u9645\u62FE\u97F3\u9700\u73B0\u573A\u590D\u6838\u3002"],ko:["S210 3D \uC218\uC74C \uD30C\uD615","\uC218\uC74C \uD30C\uD615 \uC7AC\uC0DD","6 m \uBC0F 8 m \uC124\uACC4 \uBC94\uC704\uB85C \uADF8\uB9B0 \uCE74\uB514\uC624\uC774\uB4DC \uC218\uC74C \uC608\uC2DC\uC785\uB2C8\uB2E4. \uD604\uC7A5\uC5D0\uC11C \uD655\uC778\uD558\uC138\uC694."],mn:["S210 \u0434\u0443\u0443 \u0445\u04AF\u043B\u044D\u044D\u043D \u0430\u0432\u0430\u0445 3D \u0434\u043E\u043B\u0433\u0438\u043E\u043D","\u0414\u043E\u043B\u0433\u0438\u043E\u043D\u044B \u0445\u04E9\u0434\u04E9\u043B\u0433\u04E9\u04E9\u043D\u0438\u0439\u0433 \u0442\u043E\u0433\u043B\u0443\u0443\u043B\u0430\u0445","6 \u043C, 8 \u043C \u0442\u04E9\u043B\u04E9\u0432\u043B\u04E9\u043B\u0442\u0438\u0439\u043D \u0437\u0430\u0439\u0434 \u0441\u0443\u0443\u0440\u0438\u043B\u0441\u0430\u043D \u043A\u0430\u0440\u0434\u0438\u043E\u0438\u0434 \u0434\u04AF\u0440\u0441\u043B\u044D\u043B. \u0425\u04AF\u043B\u044D\u044D\u043D \u0430\u0432\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D\u0433 \u0433\u0430\u0437\u0430\u0440 \u0434\u044D\u044D\u0440 \u043D\u044C \u0448\u0430\u043B\u0433\u0430\u043D\u0430."],ja:["S210 3D\u96C6\u97F3\u6CE2\u7D0B","\u96C6\u97F3\u6CE2\u7D0B\u3092\u52D5\u304B\u3059","\u8A2D\u8A08\u4E0A\u306E6 m\u30FB8 m\u3092\u4F7F\u3063\u305F\u30AB\u30FC\u30C7\u30A3\u30AA\u30A4\u30C9\u306E\u6A21\u5F0F\u56F3\u3067\u3059\u3002\u5B9F\u969B\u306E\u96C6\u97F3\u306F\u73FE\u5730\u3067\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"],es:["Ondas de captaci\xF3n 3D del S210","Animar ondas de captaci\xF3n","Esquema cardioide con alcances de dise\xF1o de 6 m y 8 m. Compruebe la captaci\xF3n in situ."],fr:["Ondes de captation 3D du S210","Animer les ondes de captation","Sch\xE9ma cardio\xEFde bas\xE9 sur les port\xE9es de conception de 6 m et 8 m. V\xE9rifier la captation sur site."],ar:["\u0645\u0648\u062C\u0627\u062A \u0627\u0644\u062A\u0642\u0627\u0637 S210 \u062B\u0644\u0627\u062B\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F","\u062A\u062D\u0631\u064A\u0643 \u0645\u0648\u062C\u0627\u062A \u0627\u0644\u0627\u0644\u062A\u0642\u0627\u0637","\u0631\u0633\u0645 \u062A\u0642\u0631\u064A\u0628\u064A \u0644\u0644\u0627\u0644\u062A\u0642\u0627\u0637 \u0627\u0644\u0642\u0644\u0628\u064A \u0648\u0641\u0642 \u0646\u0637\u0627\u0642\u064A \u0627\u0644\u062A\u062E\u0637\u064A\u0637 6 \u06488 \u0623\u0645\u062A\u0627\u0631. \u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0627\u0644\u062A\u0642\u0627\u0637 \u0641\u064A \u0627\u0644\u0645\u0648\u0642\u0639."]};for(let[i,[e,t,n]]of Object.entries(Lx))Object.assign(Cr[i],{s210Ripples:e,animateS210Ripples:t,s210RipplesNote:n});var kd={en:["This 2D plan could not be imported. Open 3D again from the 2D page.","This plan version is unsupported. Open it from the updated 2D page."],zh:["\u65E0\u6CD5\u5BFC\u5165\u6B64\u4E8C\u7EF4\u65B9\u6848\uFF0C\u8BF7\u4ECE\u4E8C\u7EF4\u9875\u9762\u91CD\u65B0\u6253\u5F00 3D\u3002","\u4E0D\u652F\u6301\u6B64\u65B9\u6848\u7248\u672C\uFF0C\u8BF7\u4ECE\u66F4\u65B0\u540E\u7684\u4E8C\u7EF4\u9875\u9762\u91CD\u65B0\u6253\u5F00\u3002"],ko:["2D \uACC4\uD68D\uC744 \uAC00\uC838\uC62C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. 2D \uD398\uC774\uC9C0\uC5D0\uC11C 3D\uB97C \uB2E4\uC2DC \uC5EC\uC138\uC694.","\uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uBC84\uC804\uC785\uB2C8\uB2E4. \uC5C5\uB370\uC774\uD2B8\uB41C 2D \uD398\uC774\uC9C0\uC5D0\uC11C \uB2E4\uC2DC \uC5EC\uC138\uC694."],mn:["2D \u0442\u04E9\u043B\u04E9\u0432\u043B\u04E9\u0433\u04E9\u04E9\u0433 \u0438\u043C\u043F\u043E\u0440\u0442\u043B\u043E\u0445 \u0431\u043E\u043B\u043E\u043C\u0436\u0433\u04AF\u0439. 2D \u0445\u0443\u0443\u0434\u0430\u0441\u043D\u0430\u0430\u0441 3D-\u0433 \u0434\u0430\u0445\u0438\u043D \u043D\u044D\u044D\u043D\u044D \u04AF\u04AF.","\u042D\u043D\u044D \u0445\u0443\u0432\u0438\u043B\u0431\u0430\u0440\u044B\u0433 \u0434\u044D\u043C\u0436\u0438\u0445\u0433\u04AF\u0439. \u0428\u0438\u043D\u044D\u0447\u0438\u043B\u0441\u044D\u043D 2D \u0445\u0443\u0443\u0434\u0430\u0441\u043D\u0430\u0430\u0441 \u043D\u044D\u044D\u043D\u044D \u04AF\u04AF."],ja:["2D \u30D7\u30E9\u30F3\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u30022D \u30DA\u30FC\u30B8\u304B\u3089 3D \u3092\u958B\u304D\u76F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002","\u672A\u5BFE\u5FDC\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3067\u3059\u3002\u66F4\u65B0\u3057\u305F 2D \u30DA\u30FC\u30B8\u304B\u3089\u958B\u304D\u76F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002"],es:["No se pudo importar el plan 2D. Abra 3D de nuevo desde la p\xE1gina 2D.","Versi\xF3n no compatible. Abra el plan desde la p\xE1gina 2D actualizada."],ar:["\u062A\u0639\u0630\u0631 \u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0627\u0644\u0645\u062E\u0637\u0637 \u0627\u0644\u062B\u0646\u0627\u0626\u064A. \u0627\u0641\u062A\u062D \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062B\u0644\u0627\u062B\u064A \u0645\u062C\u062F\u062F\u064B\u0627 \u0645\u0646 \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062B\u0646\u0627\u0626\u064A\u0629.","\u0625\u0635\u062F\u0627\u0631 \u063A\u064A\u0631 \u0645\u062F\u0639\u0648\u0645. \u0627\u0641\u062A\u062D \u0627\u0644\u0645\u062E\u0637\u0637 \u0645\u0646 \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062B\u0646\u0627\u0626\u064A\u0629 \u0627\u0644\u0645\u062D\u062F\u062B\u0629."],fr:["Impossible d\u2019importer ce plan 2D. Ouvrez \xE0 nouveau la vue 3D depuis la page 2D.","Cette version du plan n\u2019est pas prise en charge. Rouvrez-la depuis la page 2D mise \xE0 jour."]},Vd=(i,e,t)=>e==="snapshotInvalid"?kd[i][0]:e==="snapshotVersion"?kd[i][1]:t(e);function Hd(i,e){return["teacher","student"].includes(i.kind)?`${i.model} \xB7 ${e(i.kind)}${i.kind==="student"?" "+(i.name.match(/Student (\d+)/)?.[1]||"1"):""}`:i.kind==="ifp"?`${e("ifp")}${i.size?" "+i.size+"\u2033":""} \xB7 ${i.id.split("-").at(-1)}`:i.kind==="display"?`${e("display")} \xB7 ${i.size}\u2033 \xB7 ${i.id.split("-").at(-1)}`:i.kind==="station"?e("station"):i.name}var Z=i=>document.querySelector(i),Fc=hd(window.location.hash),gt=Fc.snapshot,Gd=gt?{...gt.room,preset:"custom",ifpSize:gt.layout.largeScreen.width*Math.sqrt(337)/(.0254*16),ifpCount:gt.visibility.ifp?1:0,displaySize:gt.displaySize,cameraPlan:gt.cameraPlan}:null,J={lang:Zc(gt?.lang),config:{width:8,depth:10,height:3,preset:"standard",ifpSize:86,ifpCount:2,displaySize:"55",cameraPlan:{...Rc}},data:null,mountHeights:{},selectedId:"teacher-camera",visibility:{},showLabels:!0,showFurniture:!0,showCoverage:!1};J.s210Request=gt?{mode:"fixed",count:gt.layout.s210s.length}:{mode:"auto"};J.s210Draft=null;J.localSnapshot=null;var st,Oc=Kc("lcs-3d-theme","light",i=>st?.setTheme(i)),Wd=Qc(Z("#scene-sidebar"),980),mt=i=>Cr[J.lang][i]||Cr.en[i]||i,Vt=i=>Number(i).toFixed(1),Pr=i=>Hd(i,mt),wn=i=>!!i&&J.visibility[i.kind]!==!1,tn=()=>J.data.devices,Xd=()=>tn().find(i=>i.id===J.selectedId),ai=new Xo({devices:()=>J.data?.devices||[],title:Pr,language:()=>J.lang,onSelect:Bc,scene:()=>st});function Yo(){let i=Xd(),e=Z("#device-detail");if(e.replaceChildren(),Z("#adjust-camera-field").hidden=!wn(i)||!en(i),!i||!wn(i))return;let t=document.createElement("div");t.className="detail-heading",t.style.setProperty("--device-accent",i.color);let n=document.createElement("span");n.className="device-swatch";let s=document.createElement("strong");s.textContent=Pr(i),t.append(n,s);let r=document.createElement("div");r.className="detail-grid";for(let[l,c]of[[`${Vt(i.x)} m`,mt("fromLeft")],[`${Vt(i.depth)} m`,mt("fromFront")],[`${Vt(J.mountHeights[i.id])} m`,mt("aboveFloor")]]){let h=document.createElement("div"),u=document.createElement("strong");u.textContent=l;let f=document.createElement("small");f.textContent=c,h.append(u,f),r.append(h)}let a=document.createElement("p");a.className="detail-direction";let o={front:"facesStage",rear:"facesAudience",left:"facesLeft",right:"facesRight"}[i.direction];if(a.textContent=`${mt(i.kind==="speaker"?"facesRoom":o)} \xB7 ${i.mount?.includes("wall")?`${mt("wallAnchor")} \xB7 `:""}${mt("demoNote")}`,en(i)&&(a.textContent=Ar(J.lang).poseNote),e.append(t,r,a),i.planX!==void 0&&(gt||i.planX!==i.x||i.planDepth!==i.depth)){let l=document.createElement("p");l.className="detail-direction",l.textContent=`${mt("planSymbol")}: ${Vt(i.planX)} \xD7 ${Vt(i.planDepth)} m`,e.append(l)}}function Nx(){let i=Z("#height-controls");i.replaceChildren();for(let e of tn()){let t=document.createElement("div");t.className="height-control";let n=document.createElement("label");n.htmlFor=`height-${e.id}`;let s=document.createElement("span");s.textContent=Pr(e);let r=document.createElement("output");r.textContent=`${Vt(J.mountHeights[e.id])} m`,n.append(s,r);let a=document.createElement("input");a.type="range",a.id=`height-${e.id}`,a.min=String(Er(e,0,J.config.height)),a.max=String(Er(e,100,J.config.height)),a.step="0.05",a.value=String(J.mountHeights[e.id]),a.addEventListener("input",()=>{let o=Er(e,a.value,J.config.height);J.mountHeights[e.id]=o,r.textContent=`${Vt(o)} m`,st?.setMountHeight(e.id,o),Yo()}),t.append(n,a),i.append(t)}}function Ux(){let i=Z("#visibility-controls");if(i.replaceChildren(),!gt)for(let e of["station","ndp","ifp","teacher","student","s210","speaker","display"]){if(!tn().some(r=>r.kind===e))continue;let t=document.createElement("label");t.className="check-row";let n=document.createElement("input");n.type="checkbox",n.checked=J.visibility[e]!==!1,n.dataset.kind=e,n.addEventListener("change",()=>{J.visibility[e]=n.checked,st?.setVisibility(e,n.checked),wn(Xd())||(J.selectedId=tn().find(wn)?.id),st?.setSelected(J.selectedId,!1),document.querySelectorAll(".device-label").forEach(r=>r.classList.toggle("selected",r.dataset.deviceId===J.selectedId)),ai.sync(),qo(),Yo()});let s=document.createElement("span");s.textContent=mt(e),t.append(n,s),i.append(t)}}function qo(){let i=Z("#s210-ripples"),e=Z("#animate-s210-ripples");i.disabled=!tn().some(t=>t.kind==="s210"&&wn(t)),e.disabled=i.disabled||!i.checked,st?.setS210Ripples(!i.disabled&&i.checked,e.checked)}function Fx(){let i=Z("#device-labels");i.replaceChildren();for(let e of tn()){let t=document.createElement("button");t.type="button",t.className="device-label",t.dataset.deviceId=e.id,t.style.setProperty("--device-accent",e.color),t.classList.toggle("selected",e.id===J.selectedId),t.textContent=Pr(e),t.addEventListener("click",()=>Bc(e.id)),i.append(t)}i.hidden=!J.showLabels}function Ox(i){if(!J.showLabels)return;let e=Z("#scene-canvas").getBoundingClientRect(),t=[...document.querySelectorAll(".scene-tools,.scene-topline")].map(s=>{let r=s.getBoundingClientRect();return{left:r.left-e.left,right:r.right-e.left,top:r.top-e.top,bottom:r.bottom-e.top}}),n=[...i].sort((s,r)=>+(r.device.id===J.selectedId)-+(s.device.id===J.selectedId));for(let{device:s,x:r,y:a,visible:o}of n){let l=document.querySelector(`.device-label[data-device-id="${s.id}"]`);if(!l||(l.hidden=!o||!wn(s),l.hidden))continue;let c=l.offsetWidth,h=l.offsetHeight,u;for(let[f,d]of[[0,0],[0,-32],[0,32],[-70,-12],[70,-12],[-70,25],[70,25]]){let g=Math.max(c/2+5,Math.min(e.width-c/2-5,r+f)),_=Math.max(38,Math.min(e.height-88,a+d)),m={left:g-c/2,right:g+c/2,top:_-h,bottom:_};if(t.every(p=>m.right+5<p.left||m.left-5>p.right||m.bottom+5<p.top||m.top-5>p.bottom)){u={px:g,py:_,rect:m};break}}u?(t.push(u.rect),l.style.left=`${u.px}px`,l.style.top=`${u.py}px`):l.hidden=!0}}function Bc(i){tn().some(e=>e.id===i&&wn(e))&&(J.selectedId=i,st?.setSelected(i,!1),ai.select(i),Yo(),Wd.showDevice(),document.querySelectorAll(".device-label").forEach(e=>e.classList.toggle("selected",e.dataset.deviceId===i)))}function Bx(){let{width:i,depth:e,height:t}=J.config;Z("#width-metric").innerHTML=`${Vt(i)} <small>m</small>`,Z("#depth-metric").innerHTML=`${Vt(e)} <small>m</small>`,Z("#height-metric").innerHTML=`${Vt(t)} <small>m</small>`,Z("#scene-caption").textContent=`${Vt(i)} \xD7 ${Vt(e)} m`;let n=Z("#height-warning"),s=[t>=3.5?mt("heightWarning"):null,...J.data.warnings.map(a=>Nc(J.lang)[a]||mt(a))].filter(Boolean);n.hidden=!s.length,n.textContent=s.map(a=>`\u26A0 ${a}`).join("  "),Z("#long-camera-settings").hidden=!(e>12&&Z("#camera-package").value==="CV870");let r=J.data.recommendation;Z("#recommendation-note").textContent=`${mt("recommendation")}: ${r.teacher} / ${r.student} \xD7 ${r.studentQty}`,Z("#student-qty").disabled=!Et[Z("#student-model").value].projectOnly}function zc(){Ko(J.lang),document.title=mt("title"),Oc.setLanguage(J.lang),Wd.setLanguage(J.lang),document.querySelectorAll("[data-i18n]").forEach(e=>{e.textContent=mt(e.dataset.i18n)}),Z("#language-button").value=J.lang;let i=Nc(J.lang);if(Z("#reset-plan").textContent=i.resetPlan,Z("#reset-plan").title=i.resetPlanHint,Z("#s210-count-label").textContent=i.quantity,Z("#s210-count").value=J.s210Draft??J.data.plan.s210s.length,Z("#s210-count-status").textContent=J.s210Draft!==null?i.pending:i[J.s210Request.mode==="fixed"?"fixed":"automatic"],Z("#s210-controls").dataset.mode=J.s210Request.mode,Z("#s210-controls").dataset.pending=String(J.s210Draft!==null),gt){let e=gt.projectTitle;document.title=`${e} \xB7 3D`,Z('[data-i18n="title"]').textContent=`${e} \xB7 3D`,Z('[data-i18n="layoutDesc"]').textContent=i.importHint,Z("#reset-button").textContent=mt("resetImported"),Z("#imported-plan-banner").textContent=`${J.localSnapshot?i.adjusted:mt("importedPlan")} \xB7 ${e} \xB7 ${Vt(J.config.width)} \xD7 ${Vt(J.config.depth)} \xD7 ${Vt(J.config.height)} m`}Fx(),Yo(),Nx(),Ux(),Bx(),ai.render(),qo()}function Rr(){let i=Z("#camera-package").value,e=Number(Z("#room-depth").value),t=i==="CV870"&&(e>12||Et[J.config.cameraPlan.student].projectOnly);return{width:Number(Z("#room-width").value),depth:e,height:Number(Z("#room-height-input").value),preset:Z("#preset").value,ifpSize:Number(Z("#ifp-size").value),ifpCount:Number(Z("#ifp-count").value),displaySize:Z("#display-size").value,cameraPlan:t?{teacher:Z("#teacher-model").value,student:Z("#student-model").value,studentQty:Number(Z("#student-qty").value)}:{teacher:i,student:i,studentQty:1}}}function Fi(i,{request:e=J.s210Request,commit:t=!1,reset:n=!1}={}){i={...i,cameraPlan:{...i.cameraPlan}},n&&Et[i.cameraPlan.student].projectOnly&&(i.cameraPlan.studentQty=vs(i.depth,i.width,i.width*i.depth,{}).studentQty);let s=gt&&t?md(J.localSnapshot||gt,e,n):J.localSnapshot,r=gt?fd(s||gt):dd({...i,s210Request:e}),a=Z("#input-error");if(a.hidden=!r.error,a.textContent=r.error?mt(r.error):"",r.error)return!1;t&&(J.s210Request={...e},J.s210Draft=null,s&&(J.localSnapshot=s)),n&&(ai.state.settings.clear(),Z("#student-qty").value=i.cameraPlan.studentQty),J.config=i,J.data=r,ai.state.sync(tn());let o=J.mountHeights;return J.mountHeights=Object.fromEntries(tn().map(l=>[l.id,Er(l,o[l.id]??l.height,i.height)])),tn().some(l=>l.id===J.selectedId&&wn(l))||(J.selectedId=tn().find(wn)?.id),st&&(st.visibleKinds={...J.visibility},st.updateData(r,J.mountHeights),st.furniture.visible=J.showFurniture,st.coverage.visible=J.showCoverage,st.setSelected(J.selectedId,!1)),ai.sync(),zc(),!0}function qd(i){Z("#preset").value=i.preset,Z("#room-width").value=i.width,Z("#room-depth").value=i.depth,Z("#room-height-input").value=i.height,Z("#ifp-size").value=i.ifpSize,Z("#ifp-count").value=i.ifpCount,Z("#display-size").value=i.displaySize,Z("#camera-package").value=i.cameraPlan.teacher==="CV210"?"CV210":"CV870",Z("#teacher-model").value=i.cameraPlan.teacher==="CV210"?"CV870":i.cameraPlan.teacher,Z("#student-model").value=i.cameraPlan.student==="CV210"?"CV870":i.cameraPlan.student,Z("#student-qty").value=i.cameraPlan.studentQty}function zx(){Z("#door-side").addEventListener("change",i=>st?.setDoorSide(i.target.value)),Z("#export-button").addEventListener("click",()=>Ld({roomScene:st,state:J,devices:tn,visible:wn,title:Pr,t:mt})),document.querySelectorAll("[data-view]").forEach(i=>i.addEventListener("click",()=>{st?.setView(i.dataset.view),document.querySelectorAll("[data-view]").forEach(e=>e.classList.toggle("active",e===i))})),Z("#preset").addEventListener("change",i=>{let e=Fo(i.target.value);e&&(Z("#room-width").value=e.width,Z("#room-depth").value=e.length,Z("#display-size").value=e.displaySize,Fi(Rr()))});for(let i of["room-width","room-depth","room-height-input"])Z(`#${i}`).addEventListener("input",()=>{Z("#preset").value="custom"});Z("#s210-count").replaceChildren(...Array.from({length:br+1},(i,e)=>new Option(String(e),String(e)))),Z("#s210-count").value=J.data.plan.s210s.length,Z("#s210-count").addEventListener("change",i=>{J.s210Draft=Number(i.target.value),zc()}),Z("#recalculate-button").addEventListener("click",()=>Fi(gt?J.config:Rr(),{request:J.s210Draft!==null?{mode:"fixed",count:J.s210Draft}:J.s210Request,commit:!0})),Z("#reset-plan").addEventListener("click",()=>Fi(gt?J.config:Rr(),{request:{mode:"auto"},commit:!0,reset:!0})),Z("#apply-equipment").addEventListener("click",()=>Fi(Rr())),Z("#camera-package").addEventListener("change",()=>{Z("#long-camera-settings").hidden=!(Z("#room-depth").value>12&&Z("#camera-package").value==="CV870")}),Z("#student-model").addEventListener("change",()=>{Z("#student-qty").disabled=!Et[Z("#student-model").value].projectOnly}),Z("#apply-recommendation").addEventListener("click",()=>{let{teacher:i,student:e,studentQty:t}=J.data.recommendation;Z("#teacher-model").value=i,Z("#student-model").value=e,Z("#student-qty").value=t,Fi(Rr())}),Z("#show-labels").addEventListener("change",i=>{J.showLabels=i.target.checked,Z("#device-labels").hidden=!J.showLabels}),Z("#show-furniture").addEventListener("change",i=>{J.showFurniture=i.target.checked,st.furniture.visible=J.showFurniture}),Z("#show-coverage").addEventListener("change",i=>{J.showCoverage=i.target.checked,st.coverage.visible=J.showCoverage}),Z("#s210-ripples").addEventListener("change",qo),Z("#animate-s210-ripples").addEventListener("change",qo),Z("#reset-button").addEventListener("click",()=>{Z("#door-side").value="right",st?.setDoorSide("right");let i=Gd||{width:Oo.width,depth:Oo.depth,height:Oo.defaultHeight,preset:"standard",ifpSize:86,ifpCount:2,displaySize:"55",cameraPlan:{...Rc}};J.localSnapshot=null,J.s210Draft=null,J.s210Request=gt?{mode:"fixed",count:gt.layout.s210s.length}:{mode:"auto"},J.mountHeights={},J.visibility={},J.selectedId="teacher-camera",ai.state.resetAll(),J.showLabels=!0,J.showFurniture=!0,J.showCoverage=!1,qd(i);for(let e of["show-labels","show-furniture"])Z(`#${e}`).checked=!0;for(let e of["show-coverage","s210-ripples","animate-s210-ripples"])Z(`#${e}`).checked=!1;Fi(i),st.setView("overview"),document.querySelectorAll("[data-view]").forEach(e=>e.classList.toggle("active",e.dataset.view==="overview"))})}function kx(){let i=()=>{Ko(J.lang),Oc.setLanguage(J.lang),document.title=mt("title"),document.querySelectorAll("[data-i18n]").forEach(e=>{e.textContent=mt(e.dataset.i18n)}),Z("#scene-error").textContent=Vd(J.lang,Fc.error,mt)};if(Jc(Z("#language-button"),J.lang,e=>{J.lang=e,J.data?zc():i()}),Fc.error){let e=Z("#scene-error");i(),e.hidden=!1,Z(".room-toolbar:not(#imported-plan-banner)").hidden=!0,Z(".sidebar").hidden=!0,Z("#export-button").disabled=!0,document.documentElement.dataset.sceneReady="false";return}if(gt){J.config=Gd,document.documentElement.dataset.importedPlan="true",Z("#imported-plan-banner").hidden=!1,document.querySelectorAll(".room-controls input,.room-controls select").forEach(e=>{e.disabled=!0});for(let e of["#equipment-controls","#visibility-controls"])Z(e).hidden=!0}qd(J.config),Fi(J.config),zx();try{st=new Go(Z("#scene-canvas"),Z("#device-labels"),Bc,Ox,J.data,J.mountHeights),st.setTheme(Oc.theme),ai.sync(),document.documentElement.dataset.sceneReady="true"}catch(e){console.error(e);let t=Z("#scene-error");t.textContent=mt("webglError"),t.hidden=!1,document.documentElement.dataset.sceneReady="false",Z("#frame-status").textContent="WebGL"}}kx();qc(i=>{if(document.documentElement.dataset.sceneReady!=="true")throw new Error("Invalid or unavailable 3D plan");if(i.qnexModel!=="NDP600")for(let e of tn().filter(t=>t.kind==="ndp")){let t=st.models.get(e.id);t&&(t.visible=!1)}for(let e of st.models.values())e.userData.halo&&(e.userData.halo.visible=!1);return Yc(st,`LCS GEN2 Hybrid Learning \xB7 ${i.qnexModel} \xB7 ${J.config.width} \xD7 ${J.config.depth} m`)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
