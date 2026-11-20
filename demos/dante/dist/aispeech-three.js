(()=>{function Th(n){window.addEventListener("message",async e=>{if(window.parent===window||e.source!==window.parent||location.protocol!=="file:"&&e.origin!==location.origin||e.data?.type!=="qnex-quotation-capture"||typeof e.data.id!="string")return;let t={type:"qnex-quotation-image",id:e.data.id};try{Object.assign(t,await n(e.data))}catch(i){t.error=i.message||"3D capture failed"}e.source.postMessage(t,e.origin==="null"?"*":e.origin)})}function Tc(n,e){if(!n?.renderer)throw new Error("3D scene is not ready");n.setTheme("light"),n.renderer.setPixelRatio(1),n.renderer.setSize(1440,1e3,!1),n.camera.aspect=1440/1e3,n.camera.up.set(0,1,0),n.camera.updateProjectionMatrix(),n.viewTween=null,n.setView("overview",!0),n.controls.update(),n.renderer.render(n.scene,n.camera);let t=document.createElement("canvas");t.width=1440,t.height=1e3;let i=t.getContext("2d");return i.drawImage(n.canvas,0,0,1440,1e3),i.fillStyle="rgba(255,255,255,.94)",i.fillRect(16,16,1408,44),i.fillStyle="#17324d",i.font="bold 20px Arial",i.fillText(e,30,46),{data:t.toDataURL("image/png"),width:1440,height:1e3,view:"overview",upright:!0}}var Ff=["resetPlan","resetPlanHint","quantity","automatic","fixed","pending","adjusted","pickupUnmet","importHint"],Ah={en:["Reset","Recommend quantities and layout for the current room","S210 quantities","Automatic recommendation","Specified quantities","Pending \xB7 click Recalculate","From 2D \xB7 adjusted in 3D","Pickup coverage is below target; specified quantities are retained.","Recalculate or reset this 3D view locally. Refresh restores the original 2D snapshot."],zh:["\u91CD\u7F6E","\u6309\u5F53\u524D\u623F\u95F4\u91CD\u65B0\u63A8\u8350\u6570\u91CF\u4E0E\u5E03\u5C40","S210 \u6570\u91CF","\u81EA\u52A8\u63A8\u8350","\u6307\u5B9A\u6570\u91CF","\u5F85\u5E94\u7528 \xB7 \u70B9\u51FB\u91CD\u65B0\u8BA1\u7B97","\u6765\u81EA 2D \xB7 \u5DF2\u5728 3D \u8C03\u6574","\u62FE\u97F3\u8986\u76D6\u672A\u8FBE\u5230\u76EE\u6807\uFF0C\u4FDD\u7559\u6307\u5B9A\u6570\u91CF\u3002","\u53EF\u5728\u5F53\u524D 3D \u91CD\u65B0\u8BA1\u7B97\u6216\u91CD\u7F6E\uFF1B\u5237\u65B0\u6062\u590D\u539F\u59CB 2D \u5FEB\u7167\u3002"],ko:["\uC7AC\uC124\uC815","\uD604\uC7AC \uBC29\uC758 \uC218\uB7C9\uACFC \uBC30\uCE58\uB97C \uB2E4\uC2DC \uCD94\uCC9C","S210 \uC218\uB7C9","\uC790\uB3D9 \uCD94\uCC9C","\uC9C0\uC815 \uC218\uB7C9","\uB300\uAE30 \uC911 \xB7 \uB2E4\uC2DC \uACC4\uC0B0 \uD074\uB9AD","2D\uC5D0\uC11C \uAC00\uC838\uC634 \xB7 3D\uC5D0\uC11C \uC870\uC815\uB428","\uC218\uC74C \uBC94\uC704\uAC00 \uBAA9\uD45C \uBBF8\uB9CC\uC785\uB2C8\uB2E4. \uC9C0\uC815 \uC218\uB7C9\uC740 \uC720\uC9C0\uB429\uB2C8\uB2E4.","\uC774 3D\uC5D0\uC11C \uB2E4\uC2DC \uACC4\uC0B0\uD558\uAC70\uB098 \uC7AC\uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0C8\uB85C \uACE0\uCE58\uBA74 \uC6D0\uB798 2D \uBC30\uCE58\uB85C \uB3CC\uC544\uAC11\uB2C8\uB2E4."],mn:["\u0414\u0430\u0445\u0438\u043D \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u0430\u0445","\u041E\u0434\u043E\u043E\u0433\u0438\u0439\u043D \u04E9\u0440\u04E9\u04E9\u043D\u0434 \u0442\u043E\u043E, \u0431\u0430\u0439\u0440\u043B\u0430\u043B\u044B\u0433 \u0441\u0430\u043D\u0430\u043B \u0431\u043E\u043B\u0433\u043E\u0445","S210 \u0442\u043E\u043E","\u0410\u0432\u0442\u043E\u043C\u0430\u0442 \u0441\u0430\u043D\u0430\u043B","\u0417\u0430\u0430\u0441\u0430\u043D \u0442\u043E\u043E","\u0425\u04AF\u043B\u044D\u044D\u0433\u0434\u044D\u0436 \u0431\u0430\u0439\u043D\u0430 \xB7 \u0414\u0430\u0445\u0438\u043D \u0442\u043E\u043E\u0446\u043E\u043E\u043B\u043E\u0445","2D-\u044D\u044D\u0441 \xB7 3D-\u0434 \u04E9\u04E9\u0440\u0447\u0438\u043B\u0441\u04E9\u043D","\u0414\u0443\u0443 \u0445\u04AF\u043B\u044D\u044D\u043D \u0430\u0432\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D \u0437\u043E\u0440\u0438\u043B\u0442\u043E\u0434 \u0445\u04AF\u0440\u044D\u044D\u0433\u04AF\u0439. \u0417\u0430\u0430\u0441\u0430\u043D \u0442\u043E\u043E\u0433 \u0445\u0430\u0434\u0433\u0430\u043B\u043D\u0430.","\u042D\u043D\u044D 3D-\u0434 \u0434\u0430\u0445\u0438\u043D \u0442\u043E\u043E\u0446\u043E\u043E\u043B\u0436 \u0431\u043E\u043B\u043D\u043E. \u0428\u0438\u043D\u044D\u0447\u043B\u044D\u0445\u044D\u0434 \u0430\u043D\u0445\u043D\u044B 2D \u0431\u0430\u0439\u0440\u043B\u0430\u043B \u0441\u044D\u0440\u0433\u044D\u043D\u044D."],ja:["\u30EA\u30BB\u30C3\u30C8","\u73FE\u5728\u306E\u90E8\u5C4B\u3067\u6570\u91CF\u3068\u914D\u7F6E\u3092\u518D\u63D0\u6848","S210 \u6570\u91CF","\u81EA\u52D5\u63D0\u6848","\u6307\u5B9A\u6570\u91CF","\u672A\u9069\u7528 \xB7 \u518D\u8A08\u7B97\u3092\u30AF\u30EA\u30C3\u30AF","2D\u304B\u3089 \xB7 3D\u3067\u8ABF\u6574\u6E08\u307F","\u96C6\u97F3\u7BC4\u56F2\u304C\u76EE\u6A19\u672A\u6E80\u3067\u3059\u3002\u6307\u5B9A\u6570\u91CF\u3092\u4FDD\u6301\u3057\u307E\u3059\u3002","\u3053\u306E3D\u3067\u518D\u8A08\u7B97\u30FB\u30EA\u30BB\u30C3\u30C8\u3067\u304D\u307E\u3059\u3002\u66F4\u65B0\u3059\u308B\u3068\u5143\u306E2D\u914D\u7F6E\u306B\u623B\u308A\u307E\u3059\u3002"],es:["Restablecer","Recomendar cantidades y distribuci\xF3n para la sala actual","Cantidad S210","Recomendaci\xF3n autom\xE1tica","Cantidades especificadas","Pendiente \xB7 pulse Recalcular","Desde 2D \xB7 ajustado en 3D","Cobertura de captaci\xF3n inferior al objetivo; se conservan las cantidades.","Recalcule o restablezca este 3D. Al recargar se recupera el plano 2D original."],fr:["R\xE9initialiser","Recommander les quantit\xE9s et positions pour la salle actuelle","Quantit\xE9 S210","Recommandation automatique","Quantit\xE9s d\xE9finies","En attente \xB7 cliquer sur Recalculer","Depuis la 2D \xB7 ajust\xE9 en 3D","Couverture de captation insuffisante ; les quantit\xE9s d\xE9finies sont conserv\xE9es.","Recalculez ou r\xE9initialisez cette vue 3D. Un rechargement restaure le plan 2D initial."],ar:["\u0625\u0639\u0627\u062F\u0629 \u0636\u0628\u0637","\u0627\u0642\u062A\u0631\u0627\u062D \u0627\u0644\u0643\u0645\u064A\u0627\u062A \u0648\u0627\u0644\u062A\u0648\u0632\u064A\u0639 \u0644\u0644\u063A\u0631\u0641\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629","\u0639\u062F\u062F S210","\u0627\u0642\u062A\u0631\u0627\u062D \u062A\u0644\u0642\u0627\u0626\u064A","\u0643\u0645\u064A\u0627\u062A \u0645\u062D\u062F\u062F\u0629","\u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \xB7 \u0627\u0636\u063A\u0637 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062D\u0633\u0627\u0628","\u0645\u0646 2D \xB7 \u062A\u0645 \u0627\u0644\u062A\u0639\u062F\u064A\u0644 \u0641\u064A 3D","\u062A\u063A\u0637\u064A\u0629 \u0627\u0644\u0627\u0644\u062A\u0642\u0627\u0637 \u0623\u0642\u0644 \u0645\u0646 \u0627\u0644\u0647\u062F\u0641\u061B \u064A\u062A\u0645 \u0627\u0644\u0627\u062D\u062A\u0641\u0627\u0638 \u0628\u0627\u0644\u0643\u0645\u064A\u0627\u062A \u0627\u0644\u0645\u062D\u062F\u062F\u0629.","\u064A\u0645\u0643\u0646 \u0625\u0639\u0627\u062F\u0629 \u062D\u0633\u0627\u0628 \u0647\u0630\u0627 \u0627\u0644\u0639\u0631\u0636 \u0623\u0648 \u0636\u0628\u0637\u0647 \u0645\u062D\u0644\u064A\u0627\u064B. \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0635\u0641\u062D\u0629 \u064A\u0639\u064A\u062F \u0645\u062E\u0637\u0637 2D \u0627\u0644\u0623\u0635\u0644\u064A."]},Ch=n=>Object.fromEntries(Ff.map((e,t)=>[e,(Ah[n]||Ah.en)[t]]));var Ac={en:"English",zh:"\u7B80\u4F53\u4E2D\u6587",ko:"\uD55C\uAD6D\uC5B4",mn:"\u041C\u043E\u043D\u0433\u043E\u043B",ja:"\u65E5\u672C\u8A9E",es:"Espa\xF1ol",fr:"Fran\xE7ais",ar:"\u0627\u0644\u0639\u0631\u0628\u064A\u0629"},Of=["light","dark","theme","showSidebar","hideSidebar","language","left","right","types","tabletop","scene","views","devices"],Rh={en:["Light","Dark","Switch light / dark theme","Show sidebar","Hide sidebar","Language","Left","Right","types","tabletop","Interactive 3D room","Camera views","Device names"],zh:["\u660E\u4EAE","\u6DF1\u8272","\u5207\u6362\u660E\u4EAE\uFF0F\u6DF1\u8272\u4E3B\u9898","\u5C55\u5F00\u4FA7\u680F","\u6536\u8D77\u4FA7\u680F","\u8BED\u8A00","\u5DE6","\u53F3","\u7C7B","\u684C\u9762","\u4EA4\u4E92\u5F0F\u4E09\u7EF4\u6559\u5BA4","\u89C2\u5BDF\u89C6\u89D2","\u8BBE\u5907\u540D\u79F0"],ko:["\uBC1D\uAC8C","\uC5B4\uB461\uAC8C","\uBC1D\uC740/\uC5B4\uB450\uC6B4 \uD14C\uB9C8 \uC804\uD658","\uC0AC\uC774\uB4DC\uBC14 \uD45C\uC2DC","\uC0AC\uC774\uB4DC\uBC14 \uC228\uAE30\uAE30","\uC5B8\uC5B4","\uC67C\uCABD","\uC624\uB978\uCABD","\uC720\uD615","\uCC45\uC0C1 \uC0C1\uD310","\uC778\uD130\uB799\uD2F0\uBE0C 3D \uAD50\uC2E4","\uCE74\uBA54\uB77C \uC2DC\uC810","\uC7A5\uBE44 \uC774\uB984"],mn:["\u0426\u0430\u0439\u0432\u0430\u0440","\u0411\u0430\u0440\u0430\u0430\u043D","\u0426\u0430\u0439\u0432\u0430\u0440 / \u0431\u0430\u0440\u0430\u0430\u043D \u04E9\u043D\u0433\u04E9 \u0441\u043E\u043B\u0438\u0445","\u0425\u0430\u0436\u0443\u0443\u0433\u0438\u0439\u043D \u0441\u0430\u043C\u0431\u0430\u0440\u044B\u0433 \u0445\u0430\u0440\u0443\u0443\u043B\u0430\u0445","\u0425\u0430\u0436\u0443\u0443\u0433\u0438\u0439\u043D \u0441\u0430\u043C\u0431\u0430\u0440\u044B\u0433 \u043D\u0443\u0443\u0445","\u0425\u044D\u043B","\u0417\u04AF\u04AF\u043D","\u0411\u0430\u0440\u0443\u0443\u043D","\u0442\u04E9\u0440\u04E9\u043B","\u0448\u0438\u0440\u044D\u044D\u043D\u0438\u0439 \u0442\u0430\u0432\u0446\u0430\u043D","\u0418\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432 3D \u04E9\u0440\u04E9\u04E9","\u041A\u0430\u043C\u0435\u0440\u044B\u043D \u0445\u0430\u0440\u0430\u0433\u0434\u0430\u0446","\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u043D \u043D\u044D\u0440"],ja:["\u30E9\u30A4\u30C8","\u30C0\u30FC\u30AF","\u30E9\u30A4\u30C8\uFF0F\u30C0\u30FC\u30AF\u5207\u66FF","\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u8868\u793A","\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u96A0\u3059","\u8A00\u8A9E","\u5DE6","\u53F3","\u7A2E\u985E","\u5929\u677F","\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D63D\u6559\u5BA4","\u8996\u70B9","\u6A5F\u5668\u540D"],es:["Claro","Oscuro","Cambiar tema claro / oscuro","Mostrar panel","Ocultar panel","Idioma","Izquierda","Derecha","tipos","superficie","Aula 3D interactiva","Vistas de c\xE1mara","Nombres de equipos"],fr:["Clair","Sombre","Changer de th\xE8me clair / sombre","Afficher le panneau","Masquer le panneau","Langue","Gauche","Droite","types","plateau","Salle 3D interactive","Points de vue","Noms des \xE9quipements"],ar:["\u0641\u0627\u062A\u062D","\u062F\u0627\u0643\u0646","\u062A\u0628\u062F\u064A\u0644 \u0627\u0644\u0645\u0638\u0647\u0631 \u0627\u0644\u0641\u0627\u062A\u062D \u0648\u0627\u0644\u062F\u0627\u0643\u0646","\u0625\u0638\u0647\u0627\u0631 \u0627\u0644\u0644\u0648\u062D\u0629","\u0625\u062E\u0641\u0627\u0621 \u0627\u0644\u0644\u0648\u062D\u0629","\u0627\u0644\u0644\u063A\u0629","\u064A\u0633\u0627\u0631","\u064A\u0645\u064A\u0646","\u0623\u0646\u0648\u0627\u0639","\u0633\u0637\u062D \u0627\u0644\u0637\u0627\u0648\u0644\u0629","\u063A\u0631\u0641\u0629 \u062A\u0641\u0627\u0639\u0644\u064A\u0629 \u062B\u0644\u0627\u062B\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F","\u0632\u0648\u0627\u064A\u0627 \u0627\u0644\u0639\u0631\u0636","\u0623\u0633\u0645\u0627\u0621 \u0627\u0644\u0623\u062C\u0647\u0632\u0629"]},An=n=>Object.fromEntries(Of.map((e,t)=>[e,(Rh[n]||Rh.en)[t]]));function Cc(n){let e=new URLSearchParams(location.search).get("lang");return Object.hasOwn(Ac,e)?e:Object.hasOwn(Ac,n)?n:"en"}function Bf(n){try{localStorage.setItem("qnex_arch_lang_v2",n)}catch{}}function Ph(n){document.documentElement.lang=n==="zh"?"zh-CN":n,document.documentElement.dir=n==="ar"?"rtl":"ltr";let e=An(n);for(let[t,i]of[[".scene-panel","scene"],["#scene-canvas","scene"],["[role=group]","views"],["#device-labels","devices"]])document.querySelector(t)?.setAttribute("aria-label",e[i])}function Rc(n,e,t){n.replaceChildren(...Object.entries(Ac).map(([i,s])=>{let r=document.createElement("option");return r.value=i,r.textContent=s,r})),n.value=e,n.setAttribute("aria-label",An(e).language),n.addEventListener("change",()=>{Bf(n.value);try{let i=new URL(location.href);i.searchParams.set("lang",n.value),history.replaceState(null,"",i)}catch{}t(n.value),n.setAttribute("aria-label",An(n.value).language)})}var ks={light:{background:"#eaf0f5",floor:"#e3e5df",platform:"#d1ae89",front:"#e3ebf0",glass:"#9fc5d1",base:"#d5e2e8",trim:"#829eaa",door:"#637e8b",doorPanel:"#a6c5cf",window:"#9fbfcc",handle:"#456578",grid:"#bdc8c8",gridCenter:"#9aafb9",sky:"#f8fdff",ground:"#b6cad1",exposure:1.35},dark:{background:"#0c1729",floor:"#172940",platform:"#385873",front:"#102239",glass:"#27415a",base:"#20354b",trim:"#3d6984",door:"#385873",doorPanel:"#345367",window:"#4a6b80",handle:"#83aabd",grid:"#30475d",gridCenter:"#45647a",sky:"#c9e8ff",ground:"#26374c",exposure:1}};function Dh(n,e,t){let i=e;try{let u=localStorage.getItem(n);Object.hasOwn(ks,u)&&(i=u)}catch{}let s=!1,r="en",o=document.querySelector("#theme-toggle"),a=document.querySelector("#sidebar-toggle"),l=document.querySelector(".sidebar");function c(){let u=An(r);o.textContent=i==="dark"?u.light:u.dark,o.title=o.ariaLabel=u.theme,o.setAttribute("aria-pressed",String(i==="dark")),a.textContent=s?u.showSidebar:u.hideSidebar,a.setAttribute("aria-expanded",String(!s)),a.setAttribute("aria-controls",l.id)}function h(){document.documentElement.dataset.theme=i,document.querySelector('meta[name="theme-color"]')?.setAttribute("content",ks[i].background),t(i),c()}return o.addEventListener("click",()=>{i=i==="dark"?"light":"dark";try{localStorage.setItem(n,i)}catch{}h()}),a.addEventListener("click",()=>{s=!s,l.hidden=s,document.documentElement.classList.toggle("sidebar-collapsed",s),c()}),h(),{setLanguage(u){r=u,c()},get theme(){return i}}}var Ih={en:["Scene settings","Setup","Devices","Coverage","Display","Acoustic coverage","Adjust field of view"],zh:["\u573A\u666F\u8BBE\u7F6E","\u914D\u7F6E","\u8BBE\u5907","\u8986\u76D6","\u663E\u793A","\u58F0\u5B66\u8986\u76D6","\u8C03\u6574\u89C6\u573A"],ko:["\uC7A5\uBA74 \uC124\uC815","\uC124\uC815","\uC7A5\uBE44","\uCEE4\uBC84\uB9AC\uC9C0","\uD45C\uC2DC","\uC74C\uD5A5 \uCEE4\uBC84\uB9AC\uC9C0","\uC2DC\uC57C\uAC01 \uC870\uC815"],mn:["\u041E\u0440\u0447\u043D\u044B \u0442\u043E\u0445\u0438\u0440\u0433\u043E\u043E","\u0422\u043E\u0445\u0438\u0440\u0433\u043E\u043E","\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436","\u0425\u0430\u043C\u0440\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D","\u0414\u044D\u043B\u0433\u044D\u0446","\u0414\u0443\u0443\u043D\u044B \u0445\u0430\u043C\u0440\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D","\u0425\u0430\u0440\u0430\u0445 \u04E9\u043D\u0446\u04E9\u0433 \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u0430\u0445"],ja:["\u30B7\u30FC\u30F3\u8A2D\u5B9A","\u69CB\u6210","\u6A5F\u5668","\u30AB\u30D0\u30FC\u7BC4\u56F2","\u8868\u793A","\u97F3\u97FF\u30AB\u30D0\u30FC\u7BC4\u56F2","\u753B\u89D2\u3092\u8ABF\u6574"],es:["Ajustes de escena","Configurar","Equipos","Cobertura","Mostrar","Cobertura ac\xFAstica","Ajustar campo de visi\xF3n"],fr:["R\xE9glages de la sc\xE8ne","Configurer","\xC9quipements","Couverture","Affichage","Couverture acoustique","R\xE9gler le champ de vision"],ar:["\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0634\u0647\u062F","\u0627\u0644\u0625\u0639\u062F\u0627\u062F","\u0627\u0644\u0623\u062C\u0647\u0632\u0629","\u0627\u0644\u062A\u063A\u0637\u064A\u0629","\u0627\u0644\u0639\u0631\u0636","\u0627\u0644\u062A\u063A\u0637\u064A\u0629 \u0627\u0644\u0635\u0648\u062A\u064A\u0629","\u0636\u0628\u0637 \u0645\u062C\u0627\u0644 \u0627\u0644\u0631\u0624\u064A\u0629"]};function zf(n,e){let t=[...n.querySelectorAll('[role="tab"]')],i=t.map(l=>document.getElementById(l.getAttribute("aria-controls"))),s=new Map,r=matchMedia(`(max-width: ${e}px)`),o=0;function a(l,c=!1){if(l===o)return;let h=i[o],u=n.offsetHeight-h.getBoundingClientRect().top,d=!r.matches;d?s.set(h,h.scrollTop):c&&s.set(h,Math.max(0,u)),h.hidden=!0,t[o].ariaSelected="false",t[o].tabIndex=-1,o=l;let f=i[o];f.hidden=!1,t[o].ariaSelected="true",t[o].tabIndex=0;let g=s.get(f)||0;d?f.scrollTop=g:c&&(u>=0||g>0)&&window.scrollBy(0,f.getBoundingClientRect().top-n.offsetHeight+g)}return t.forEach((l,c)=>{l.addEventListener("click",()=>a(c,!0)),l.addEventListener("keydown",h=>{let u=getComputedStyle(n).direction==="rtl"?-1:1,d={Home:0,End:t.length-1,ArrowLeft:c-u,ArrowRight:c+u};if(!Object.hasOwn(d,h.key))return;h.preventDefault();let f=(d[h.key]+t.length)%t.length;a(f,!0),t[f].focus({preventScroll:!0})})}),{activate:a,get active(){return o}}}function Lh(n,e){let t=n.querySelector('[role="tablist"]'),i=zf(t,e);return n.querySelector("#adjust-camera-field").addEventListener("click",()=>{i.activate(2);let s=n.querySelector("#camera-field-panel"),r=s.closest("details");r&&(r.open=!0);let o=s.querySelector("#camera-field-enabled");o.checked||o.click();let a=s.querySelector("#camera-field-select");a.focus({preventScroll:!0}),a.scrollIntoView({block:"nearest"})}),{showCoverage(){i.activate(2)},showDevice(){i.active!==2&&(i.activate(1),matchMedia(`(max-width: ${e}px)`).matches||(n.querySelector("#sidebar-devices").scrollTop=0))},setLanguage(s){let[r,o,a,l,c,h,u]=Ih[s]||Ih.en,d={config:o,devices:a,coverage:l,display:c,acoustic:h,adjustCamera:u};t.setAttribute("aria-label",r),n.querySelectorAll("[data-sidebar-copy]").forEach(f=>{f.textContent=d[f.dataset.sidebarCopy]})}}}(function(n){let t=73*Math.PI/180,i=[{size:55,maxDistance:4.1},{size:65,maxDistance:5},{size:75,maxDistance:5.6}];function s(d,f=0){let g=Math.max(0,d-f-1.2),_=Math.min(8,g*Math.tan(t));return{m100Pickup:_,m100PA:_*5/8}}function r(d){let f=Math.min(1.16,(d-.36)/2),g=Math.max(f/2+.08,Math.min(1.45,d*.2));return{width:f,centers:[g,d-g]}}function o(d,f,g){if(!d||d.mode!=="split")return d?.front??d?.height??3;let _=Math.min(Math.max(d.split,0),g);return f<_?d.front:d.rear}function a(d,f,g,_){if(d.type!=="m100"||!g||g.legacy)return f;let m=s(o(g,d.y,_),g.drop||0);return{...f,m100Pickup:g.manualPickup??m.m100Pickup,m100PA:g.manualPA??m.m100PA}}function l(d,f=0){let g=Math.max(.1,d-1.2),_=g/(3-1.2);return{...s(d,f),m40Pickup:5*_,m40PA:3*_,dc20:g*1.73205}}function c(d,f){let g=d-2,_=[],m=i[2];for(let p=6;p<g-.001;p+=m.maxDistance){let S=g-p,y=i.find(T=>S<=T.maxDistance+.001)||m,b=(y.size*.0254*16/Math.sqrt(337)+.07)/2+.18;for(let T of["left","right"])_.push({id:`aux-${_.length+1}`,side:T,x:T==="left"?b:f-b,size:y.size,maxDistance:y.maxDistance,y:p,coverageEnd:Math.min(p+y.maxDistance,g)})}return _}function h(d,f,g,_){let m={m100:0,m40:0,dc20:0,55:0,65:0,75:0};g.forEach(y=>{m[y.type]++}),_.forEach(y=>{m[y.size]++});let p=m.m100+m.m40,S=p*2+(m.dc20>0?1:0);return{counts:m,du11:p||m.dc20?d*f>100||p>=2?2:1:0,channels:S,processor:S===0?null:S<=4?{type:"DP44",count:1}:{type:"DP88",count:Math.ceil(S/8)}}}function u(d,f,g,_,m={},p=null){let y=0,x=0,b=0,T=0;for(let C=0;C<=d;C+=.25)for(let I=0;I<=f;I+=.25){y++;let w=!1,M=!1,D=!1;g.forEach(F=>{let k=C-F.x,G=I-F.y,W=k*k+G*G;if(F.type==="m100"){let H=a(F,_,p,f);w=w||m.m100_pickup!==!1&&W<=H.m100Pickup*H.m100Pickup,M=M||m.m100_pa!==!1&&W<=H.m100PA*H.m100PA}else F.type==="m40"?(w=w||m.m40_pickup!==!1&&W<=_.m40Pickup*_.m40Pickup,M=M||m.m40_pa!==!1&&W<=_.m40PA*_.m40PA):F.type==="dc20"&&(D=D||m.dc20!==!1&&W<=_.dc20*_.dc20)}),w&&x++,M&&b++,D&&T++}return{mic:y>0?Math.round(x/y*100):0,pa:y>0?Math.round(b/y*100):0,speaker:y>0?Math.round(T/y*100):0}}n.coverageForPlan=u,n.DISPLAY_RULES=i,n.radiiForHeight=l,n.m100RadiiForHeight=s,n.radiiForDevice=a,n.heightAt=o,n.sideWallDoors=r,n.auxiliaryDisplaysForWidth=c,n.bomForPlan=h})(window.AISpeech=window.AISpeech||{});(function(n){let i={roomLength:10,roomWidth:8,height:3,heightProfile:{mode:"uniform",front:3,rear:3,split:5,drop:0,manualPickup:null,manualPA:null},devices:[],auxDisplays:[],show:{m100_pickup:!0,m100_pa:!0,m40_pickup:!0,m40_pa:!0,dc20:!0},radii:{m100Pickup:5.89,m100PA:3.68,m40Pickup:5,m40PA:3,dc20:3.12},showModels:!1,theme:"dark"},s=document.getElementById("canvas"),r={m100PickupInput:"m100Pickup",m100PAInput:"m100PA",m40PickupInput:"m40Pickup",m40PAInput:"m40PA",dc20Input:"dc20"};n.PPM=50,n.EAR_HEIGHT=1.2,n.state=i,n.idCounter=0,n.svgCanvas=s,n.inputMapping=r})(window.AISpeech=window.AISpeech||{});(function(n){n.qnexModels=Object.freeze(["NDP600","NDP200","SL100","NMP311"]);let e=()=>({qnexModel:"NDP600",qnexCount:1,ifpCount:1,lcsEnabled:!1,lcsCount:1,cameraCount:2,processorModel:"DP88",processorCount:null,du11Count:null});n.defaultEquipment=e;let t=n.state;t.auxDisplays=[],t.equipment=e(),t.teachingDevices=[],t.manualAudio=!1,t.manualAux=!1,t.showIFP=!0,t.showAuxDisplays=!0;let i=(l,c)=>Math.max(.15,Math.min(c-.15,l)),s=l=>l!==""&&l!==null&&Number.isInteger(Number(l))&&Number(l)>=0&&Number(l)<=99;n.validQuantity=s;function r(l,c,h,u){return Array.from({length:100},(f,g)=>({x:c*(g%10+.5)/10,y:h*(Math.floor(g/10)+.5)/10})).sort((f,g)=>{let _=m=>u.length?Math.min(...u.map(p=>(p.x-m.x)**2+(p.y-m.y)**2)):-((m.x-c/2)**2+(m.y-h/2)**2);return _(g)-_(f)})[0]}function o(l,c,h){let u=l==="ifp"?1:.36,d=[...c,...t.teachingDevices.filter(m=>m.type!==l&&["ifp","station"].includes(m.type)&&m.y<.8)],f=[h/2,...Array.from({length:41},(m,p)=>u+.05+(h-2*u-.1)*p/40),...d.flatMap(m=>{let p=u+(m.type==="ifp"?1:.36)+.08;return[m.x-p,m.x+p]})].filter(m=>m>=u&&m<=h-u),g=f.filter(m=>d.every(p=>Math.abs(m-p.x)>=u+(p.type==="ifp"?1:.36)+.079)),_=m=>c.length?Math.min(...c.map(p=>Math.abs(p.x-m))):l==="ifp"?-Math.abs(m-h/2):-m;return(g.length?g:f).sort((m,p)=>_(p)-_(m))[0]??h/2}n.reconcileInstances=function(l,c,h,u){let d=l.filter(f=>f.type===c).slice(0,h);for(;d.length<h;)d.push(u(d.length,d));return[...l.filter(f=>f.type!==c),...d]};function a(l){if(l.x=i(l.x,t.roomLength),l.y=i(l.y,t.roomWidth),l.type==="ifp"){let c=(34.9504/Math.sqrt(337)+.07)/2;l.x=t.roomLength>2*c+.02?Math.max(c+.01,Math.min(t.roomLength-c-.01,l.x)):t.roomLength/2}}n.fitConfiguration=function(){for(let l of[...t.devices,...t.auxDisplays,...t.teachingDevices])a(l),l.coverageEnd!==void 0&&(l.coverageEnd=Math.max(l.y,Math.min(t.roomWidth,l.coverageEnd)))},n.syncTeachingDevices=function(){let l=t.equipment,c=t.roomLength,h=t.roomWidth,u=[["qnex",l.qnexCount],["ifp",t.showIFP?l.ifpCount:0],["station",l.lcsEnabled?l.lcsCount:0],["camera",l.lcsEnabled?l.cameraCount:0]];for(let[d,f]of u)t.teachingDevices=n.reconcileInstances(t.teachingDevices,d,f,(g,_)=>{let m=n.idCounter++,p=d==="camera"?{x:c/2+Math.floor(g/2)*.45,y:g%2?h-.3:.3}:d==="ifp"?{x:o(d,_,c),y:.15}:d==="station"?{x:o(d,_,c),y:.3}:{x:c*.32+g*1.7,y:1.2};return{id:`teaching-${m}`,type:d,...p,role:g%2?"teacher":"student"}});for(let d of t.teachingDevices)d.model=d.type==="qnex"?l.qnexModel:d.type==="ifp"?"QA1400 Pro":d.type==="camera"?"CV870":"LCS810 GEN2",d.type==="ifp"&&(d.size=86);t.qnexModel=l.qnexModel;for(let d of t.teachingDevices)a(d)},n.configuredBOM=function(l=t){let c=n.bomForPlan(l.roomLength,l.roomWidth,l.devices,l.showAuxDisplays===!1?[]:l.auxDisplays),h=l.equipment;c.du11=h.du11Count??c.du11;let u=h.processorCount??(c.channels?Math.ceil(c.channels/(h.processorModel==="DP44"?4:8)):0);return c.processor=u?{type:h.processorModel,count:u}:null,c},n.setAudioCount=function(l,c){s(c)&&(n.stageAudioCount(t,l,Number(c)),n.refreshAudioUI?.())},n.setAuxCount=function(l,c){if(!s(c))return;t.manualAux=!0,t.showAuxDisplays=!0;let h=t.auxDisplays.filter(d=>d.size===l).slice(0,Number(c)),u=n.DISPLAY_RULES.find(d=>d.size===l);for(;h.length<Number(c);){let d=h.length,f=Math.min(t.roomWidth-.4,3+Math.floor(d/2)*2),g=(l*.0254*16/Math.sqrt(337)+.07)/2+.18;h.push({id:`aux-manual-${n.idCounter++}`,size:l,side:d%2?"right":"left",x:d%2?t.roomLength-g:g,y:f,maxDistance:u.maxDistance,coverageEnd:Math.min(t.roomWidth,f+u.maxDistance)})}t.auxDisplays=[...t.auxDisplays.filter(d=>d.size!==l),...h],n.renderRoom()},n.restoreRecommended=function(){t.audioDraft=null,t.devices=n.buildProductRecommendation({mode:"auto"}),n.commitAudioLayout(t,{mode:"auto"}),n.renderRoom()},n.renderTeachingDevices=function(){n.syncTeachingDevices();let l=document.getElementById("canvas");if(!l)return;let c=document.getElementById("teachingLayer");c||(c=document.createElementNS(l.namespaceURI,"g"),c.id="teachingLayer",l.append(c)),c.replaceChildren();let h=u=>t.teachingDevices.filter(d=>d.type===u).length;for(let u of t.teachingDevices){let d=document.createElementNS(l.namespaceURI,"g");d.setAttribute("class","device teaching-device"),d.dataset.teachingId=u.id,d.setAttribute("transform",`translate(${u.x*n.PPM},${u.y*n.PPM})`);let f=document.createElementNS(l.namespaceURI,"rect"),g=-12;if(u.type==="qnex"&&u.model==="NDP200"){let m=n.PPM/1e3,p=document.createElementNS(l.namespaceURI,"image");p.setAttribute("href","assets/ndp200/ndp200-plan.svg");for(let[S,y]of Object.entries({x:-902,y:-329,width:2210,height:658}))p.setAttribute(S,y*m);p.setAttribute("pointer-events","none"),d.append(p);for(let[S,y]of Object.entries({x:-435,y:-304.5,width:870,height:609,rx:18}))f.setAttribute(S,y*m);f.setAttribute("fill","transparent"),g=-304.5*m-5}else{let m=u.type==="ifp"?90:u.type==="camera"?32:65;for(let[p,S]of Object.entries({x:-m/2,y:-7,width:m,height:14,rx:3,fill:u.type==="camera"?"#7c3aed":"#0072ce"}))f.setAttribute(p,S)}let _=document.createElementNS(l.namespaceURI,"text");_.setAttribute("y",g),_.setAttribute("text-anchor","middle"),_.setAttribute("font-size","10"),_.setAttribute("fill","var(--text)"),_.textContent=u.type==="qnex"?`Q-NEX ${u.model}${h(u.type)>1?" #"+(t.teachingDevices.filter(m=>m.type===u.type).indexOf(u)+1):""}`:`${u.model}${u.size?" 86\u2033":""} #${t.teachingDevices.filter(m=>m.type===u.type).indexOf(u)+1}`,d.append(f,_),c.append(d)}}})(window.AISpeech);(function(n){let e=["configuration","instructions","reference","restore","includeLCS","model","quantity","capacity","manual","linked","teacher","student","projection","devices","podiumModel"],t={fr:["Configuration / devis","Instructions","R\xE9f\xE9rence des appareils","Restaurer la configuration recommand\xE9e","Inclure LCS810 + CV870","Mod\xE8le","Quantit\xE9","La capacit\xE9 DSP est inf\xE9rieure aux canaux estim\xE9s.","Le recalcul conserve les quantit\xE9s impos\xE9es et redispose les appareils audio.","Suit la quantit\xE9 de NDP600","Cam\xE9ra enseignant","Cam\xE9ra \xE9l\xE8ves","R\xE8gles 2D / projection au sol","\xC9quipements","Mod\xE8le de pupitre"],mn:["\u0422\u043E\u0445\u0438\u0440\u0433\u043E\u043E / \u04AF\u043D\u0438\u0439\u043D \u0441\u0430\u043D\u0430\u043B","\u0410\u0448\u0438\u0433\u043B\u0430\u0445 \u0437\u0430\u0430\u0432\u0430\u0440","\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u043D \u043B\u0430\u0432\u043B\u0430\u0433\u0430\u0430","\u0417\u04E9\u0432\u043B\u04E9\u043C\u0436\u0438\u0442 \u0442\u043E\u0445\u0438\u0440\u0433\u043E\u043E\u0433 \u0441\u044D\u0440\u0433\u044D\u044D\u0445","LCS810 + CV870 \u043D\u044D\u043C\u044D\u0445","\u0417\u0430\u0433\u0432\u0430\u0440","\u0422\u043E\u043E","DSP \u0431\u0430\u0433\u0442\u0430\u0430\u043C\u0436 \u0442\u043E\u043E\u0446\u043E\u043E\u043B\u0441\u043E\u043D \u0441\u0443\u0432\u0433\u0430\u0430\u0441 \u0431\u0430\u0433\u0430 \u0431\u0430\u0439\u043D\u0430.","\u0414\u0430\u0445\u0438\u043D \u0442\u043E\u043E\u0446\u043E\u0445\u043E\u0434 \u0442\u043E\u0433\u0442\u0441\u043E\u043D \u0442\u043E\u043E\u0433 \u0445\u0430\u0434\u0433\u0430\u043B\u0436 \u0430\u0443\u0434\u0438\u043E \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u0433 \u0434\u0430\u0445\u0438\u043D \u0431\u0430\u0439\u0440\u043B\u0443\u0443\u043B\u043D\u0430.","NDP600 \u0442\u043E\u043E\u0433 \u0434\u0430\u0433\u0430\u043D\u0430","\u0411\u0430\u0433\u0448\u0438\u0439\u043D \u043A\u0430\u043C\u0435\u0440","\u0421\u0443\u0440\u0430\u0433\u0447\u0438\u0439\u043D \u043A\u0430\u043C\u0435\u0440","2D \u0434\u04AF\u0440\u044D\u043C / \u0448\u0430\u043B\u043D\u044B \u0442\u0443\u0441\u0433\u0430\u043B","\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436","\u0418\u043D\u0434\u0440\u0438\u0439\u043D \u0437\u0430\u0433\u0432\u0430\u0440"],en:["Configuration / quotation","Operating instructions","Device reference","Restore recommended configuration","Include LCS810 + CV870","Model","Quantity","Configured DSP capacity is below the estimated channel count.","Recalculate preserves specified quantities and rearranges audio devices.","Follows NDP600 quantity","Teacher camera","Student camera","2D rules / ground projection","Devices","Podium model"],zh:["\u914D\u7F6E\u4E0E\u62A5\u4EF7","\u64CD\u4F5C\u8BF4\u660E","\u8BBE\u5907\u53C2\u6570\u53C2\u8003","\u6062\u590D\u63A8\u8350\u914D\u7F6E","\u52A0\u5165 LCS810 + CV870","\u578B\u53F7","\u6570\u91CF","\u5F53\u524D DSP \u5BB9\u91CF\u4F4E\u4E8E\u4F30\u7B97\u901A\u9053\u6570\u3002","\u91CD\u65B0\u8BA1\u7B97\u4FDD\u7559\u6307\u5B9A\u6570\u91CF\uFF0C\u5E76\u91CD\u65B0\u5E03\u7F6E\u97F3\u9891\u8BBE\u5907\u3002","\u968F NDP600 \u6570\u91CF\u8054\u52A8","\u6559\u5E08\u6444\u50CF\u673A","\u5B66\u751F\u6444\u50CF\u673A","\u4E8C\u7EF4\u89C4\u5219\uFF0F\u5730\u9762\u6295\u5F71","\u8BBE\u5907","\u8BB2\u53F0\u578B\u53F7"],es:["Configuraci\xF3n / cotizaci\xF3n","Instrucciones","Referencia de equipos","Restaurar configuraci\xF3n recomendada","Incluir LCS810 + CV870","Modelo","Cantidad","La capacidad DSP es inferior a los canales estimados.","Recalcular conserva las cantidades fijadas y redistribuye los equipos de audio.","Sigue la cantidad de NDP600","C\xE1mara del profesor","C\xE1mara del alumnado","Reglas 2D / proyecci\xF3n del suelo","Equipos","Modelo de atril"],ja:["\u69CB\u6210\u30FB\u898B\u7A4D","\u64CD\u4F5C\u8AAC\u660E","\u6A5F\u5668\u4ED5\u69D8\u306E\u53C2\u8003","\u63A8\u5968\u69CB\u6210\u306B\u623B\u3059","LCS810 + CV870 \u3092\u8FFD\u52A0","\u578B\u756A","\u6570\u91CF","DSP \u306E\u5BB9\u91CF\u304C\u63A8\u5B9A\u30C1\u30E3\u30F3\u30CD\u30EB\u6570\u3092\u4E0B\u56DE\u3063\u3066\u3044\u307E\u3059\u3002","\u518D\u8A08\u7B97\u3067\u306F\u6307\u5B9A\u53F0\u6570\u3092\u4FDD\u6301\u3057\u3001\u97F3\u58F0\u6A5F\u5668\u3092\u518D\u914D\u7F6E\u3057\u307E\u3059\u3002","NDP600 \u306E\u6570\u91CF\u306B\u9023\u52D5","\u6559\u5E2B\u30AB\u30E1\u30E9","\u5B66\u751F\u30AB\u30E1\u30E9","2D \u30EB\u30FC\u30EB\uFF0F\u5E8A\u9762\u6295\u5F71","\u6A5F\u5668","\u6F14\u53F0\u306E\u578B\u756A"],ko:["\uAD6C\uC131 / \uACAC\uC801","\uC0AC\uC6A9 \uC548\uB0B4","\uC7A5\uBE44 \uCC38\uACE0 \uC0AC\uC591","\uAD8C\uC7A5 \uAD6C\uC131 \uBCF5\uC6D0","LCS810 + CV870 \uCD94\uAC00","\uBAA8\uB378","\uC218\uB7C9","DSP \uC6A9\uB7C9\uC774 \uCD94\uC815 \uCC44\uB110 \uC218\uBCF4\uB2E4 \uC791\uC2B5\uB2C8\uB2E4.","\uC7AC\uACC4\uC0B0 \uC2DC \uC9C0\uC815 \uC218\uB7C9\uC744 \uC720\uC9C0\uD558\uACE0 \uC624\uB514\uC624 \uC7A5\uCE58\uB97C \uC7AC\uBC30\uCE58\uD569\uB2C8\uB2E4.","NDP600 \uC218\uB7C9\uACFC \uC5F0\uB3D9","\uAD50\uC0AC \uCE74\uBA54\uB77C","\uD559\uC0DD \uCE74\uBA54\uB77C","2D \uADDC\uCE59 / \uBC14\uB2E5 \uD22C\uC601","\uC7A5\uBE44","\uAC15\uC5F0\uB300 \uBAA8\uB378"],hu:["Konfigur\xE1ci\xF3 / \xE1raj\xE1nlat","Haszn\xE1lati \xFAtmutat\xF3","Eszk\xF6zreferencia","Aj\xE1nlott konfigur\xE1ci\xF3 vissza\xE1ll\xEDt\xE1sa","LCS810 + CV870 hozz\xE1ad\xE1sa","Modell","Mennyis\xE9g","A DSP kapacit\xE1sa kisebb a becs\xFClt csatornasz\xE1mn\xE1l.","Az \xFAjrasz\xE1m\xEDt\xE1s megtartja a megadott mennyis\xE9geket \xE9s \xE1trendezi az audioeszk\xF6z\xF6ket.","Az NDP600 mennyis\xE9g\xE9t k\xF6veti","Tan\xE1ri kamera","Di\xE1kkamera","2D szab\xE1lyok / padl\xF3vet\xFClet","Eszk\xF6z\xF6k","Pult t\xEDpusa"],it:["Configurazione / preventivo","Istruzioni","Riferimenti dispositivi","Ripristina configurazione consigliata","Includi LCS810 + CV870","Modello","Quantit\xE0","La capacit\xE0 DSP \xE8 inferiore ai canali stimati.","Il ricalcolo mantiene le quantit\xE0 specificate e riposiziona i dispositivi audio.","Segue la quantit\xE0 di NDP600","Telecamera docente","Telecamera studenti","Regole 2D / proiezione a terra","Dispositivi","Modello di podio"],ar:["\u0627\u0644\u062A\u0643\u0648\u064A\u0646 / \u0639\u0631\u0636 \u0627\u0644\u0633\u0639\u0631","\u0625\u0631\u0634\u0627\u062F\u0627\u062A \u0627\u0644\u062A\u0634\u063A\u064A\u0644","\u0645\u0631\u062C\u0639 \u0627\u0644\u0623\u062C\u0647\u0632\u0629","\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0643\u0648\u064A\u0646 \u0627\u0644\u0645\u0648\u0635\u0649 \u0628\u0647","\u0625\u0636\u0627\u0641\u0629 LCS810 + CV870","\u0627\u0644\u0637\u0631\u0627\u0632","\u0627\u0644\u0643\u0645\u064A\u0629","\u0633\u0639\u0629 DSP \u0623\u0642\u0644 \u0645\u0646 \u0639\u062F\u062F \u0627\u0644\u0642\u0646\u0648\u0627\u062A \u0627\u0644\u0645\u0642\u062F\u0631.","\u062A\u062D\u0627\u0641\u0638 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062D\u0633\u0627\u0628 \u0639\u0644\u0649 \u0627\u0644\u0623\u0639\u062F\u0627\u062F \u0627\u0644\u0645\u062D\u062F\u062F\u0629 \u0648\u062A\u0639\u064A\u062F \u062A\u0648\u0632\u064A\u0639 \u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0635\u0648\u062A.","\u064A\u062A\u0628\u0639 \u0643\u0645\u064A\u0629 NDP600","\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u0645\u0639\u0644\u0645","\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u0637\u0644\u0627\u0628","\u0642\u0648\u0627\u0639\u062F \u062B\u0646\u0627\u0626\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F / \u0625\u0633\u0642\u0627\u0637 \u0623\u0631\u0636\u064A","\u0627\u0644\u0623\u062C\u0647\u0632\u0629","\u0637\u0631\u0627\u0632 \u0627\u0644\u0645\u0646\u0635\u0629"]};n.configurationCopy=i=>Object.fromEntries(e.map((s,r)=>[s,(t[i]||t.en)[r]]))})(window.AISpeech);(function(n){let e=["m100","m40","dc20"],t={m100:10,m40:10,dc20:30},i=u=>Object.fromEntries(e.map(d=>[d,u.filter(f=>f.type===d).length]));function s(u){return{mode:u.audioLayout?.mode||(u.manualAudio?"fixed":"auto"),counts:i(u.devices)}}function r(u){return u.audioDraft?{mode:"fixed",counts:{...u.audioDraft}}:s(u)}function o(u,d){u.audioLayout={mode:d.mode,counts:i(u.devices)},u.manualAudio=d.mode==="fixed",u.audioDraft=null}function a(u,d,f){return!e.includes(d)||!Number.isInteger(f)||f<0||f>t[d]?!1:(u.audioDraft={...u.audioDraft||i(u.devices),[d]:f},!0)}function l(u){u.audioLayout={mode:"fixed",counts:i(u.devices)},u.manualAudio=!0}function c(u){let d=u.filter(f=>f.type!=="dc20");return u.some((f,g)=>u.some((_,m)=>m<g&&Math.hypot(f.x-_.x,f.y-_.y)<.1))||u.some(f=>f.type==="dc20"&&!n.isFarEnoughFromMicrophones(f,d,2))}function h(u){let d=n.state,f=[...Array(u.m100).fill("m100"),...Array(u.m40).fill("m40")],g=n.createGridPositions(f.length,d.roomLength,d.roomWidth),_=n.createGridPositions(f.length,d.roomWidth,d.roomLength).map(M=>({x:M.y,y:M.x})),m=[g,_].map(M=>M.map((D,F)=>({type:f[F],...D}))),p=m.map(M=>n.estimateCoverageForDevices(M).mic),y=m[p[1]>p[0]?1:0].map(M=>({...M,id:n.idCounter++})),x=n.createGridPositions(u.dc20,d.roomLength,d.roomWidth).map(M=>n.keepSpeakerAwayFromMicrophones(M,y)),b=u.dc20?n.optimizeSpeakerPositions(u.dc20,y):[];b.length!==u.dc20&&(b=x);let T=M=>M.map(D=>({type:"dc20",...D})),C=n.estimateCoverageForDevices([...y,...T(b)]).speaker,w=n.estimateCoverageForDevices([...y,...T(x)]).speaker>=C?x:b;return[...y,...n.makeDevices("dc20",w)]}Object.assign(n,{audioTypes:e,audioLimits:t,audioCounts:i,audioRequest:r,appliedAudioRequest:s,commitAudioLayout:o,stageAudioCount:a,lockAudioCounts:l,fixedAudioDevices:h,layoutConflict:c})})(window.AISpeech=window.AISpeech||{});(function(n){let e={en:["Audio device quantities","Automatic recommendation","Specified quantities","Pending \xB7 click Recalculate","Restore automatic recommendation","Clear audio devices","Placement conflict: review microphone/speaker spacing.","Settings","Instructions","Device reference","BOM / quotation","More","Close","Drawing, BOM and export use the applied quantities."],zh:["\u97F3\u9891\u8BBE\u5907\u6570\u91CF","\u81EA\u52A8\u63A8\u8350","\u6307\u5B9A\u6570\u91CF","\u5F85\u91CD\u65B0\u8BA1\u7B97","\u6062\u590D\u81EA\u52A8\u63A8\u8350","\u6E05\u7A7A\u97F3\u9891\u8BBE\u5907","\u5E03\u7F6E\u51B2\u7A81\uFF1A\u8BF7\u68C0\u67E5\u9EA6\u514B\u98CE\u4E0E\u97F3\u7BB1\u95F4\u8DDD\u3002","\u8BBE\u7F6E","\u64CD\u4F5C\u8BF4\u660E","\u8BBE\u5907\u53C2\u8003","BOM\uFF0F\u62A5\u4EF7","\u66F4\u591A","\u5173\u95ED","\u56FE\u5F62\u3001BOM \u4E0E\u5BFC\u51FA\u4F7F\u7528\u5DF2\u5E94\u7528\u6570\u91CF\u3002"],ko:["\uC624\uB514\uC624 \uC7A5\uCE58 \uC218","\uC790\uB3D9 \uCD94\uCC9C","\uC9C0\uC815 \uC218\uB7C9","\uB2E4\uC2DC \uACC4\uC0B0 \uD544\uC694","\uC790\uB3D9 \uCD94\uCC9C \uBCF5\uC6D0","\uC624\uB514\uC624 \uC7A5\uCE58 \uC9C0\uC6B0\uAE30","\uBC30\uCE58 \uCDA9\uB3CC: \uB9C8\uC774\uD06C\uC640 \uC2A4\uD53C\uCEE4 \uAC04\uACA9\uC744 \uD655\uC778\uD558\uC138\uC694.","\uC124\uC815","\uC0AC\uC6A9 \uC548\uB0B4","\uC7A5\uCE58 \uCC38\uACE0","BOM / \uACAC\uC801","\uB354 \uBCF4\uAE30","\uB2EB\uAE30","\uB3C4\uBA74, BOM \uBC0F \uB0B4\uBCF4\uB0B4\uAE30\uB294 \uC801\uC6A9\uB41C \uC218\uB7C9\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4."],ja:["\u97F3\u58F0\u6A5F\u5668\u306E\u53F0\u6570","\u81EA\u52D5\u63A8\u5968","\u6307\u5B9A\u53F0\u6570","\u518D\u8A08\u7B97\u3057\u3066\u304F\u3060\u3055\u3044","\u81EA\u52D5\u63A8\u5968\u306B\u623B\u3059","\u97F3\u58F0\u6A5F\u5668\u3092\u30AF\u30EA\u30A2","\u914D\u7F6E\u306E\u7AF6\u5408\uFF1A\u30DE\u30A4\u30AF\u3068\u30B9\u30D4\u30FC\u30AB\u30FC\u306E\u9593\u9694\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002","\u8A2D\u5B9A","\u64CD\u4F5C\u8AAC\u660E","\u6A5F\u5668\u306E\u53C2\u8003","BOM\uFF0F\u898B\u7A4D","\u305D\u306E\u4ED6","\u9589\u3058\u308B","\u56F3\u3001BOM\u3001\u51FA\u529B\u306B\u306F\u9069\u7528\u6E08\u307F\u306E\u53F0\u6570\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"],es:["Cantidades de audio","Recomendaci\xF3n autom\xE1tica","Cantidades fijadas","Pendiente: recalcular","Restaurar recomendaci\xF3n autom\xE1tica","Borrar equipos de audio","Conflicto: revise la separaci\xF3n entre micr\xF3fonos y altavoces.","Ajustes","Instrucciones","Referencia de equipos","BOM / presupuesto","M\xE1s","Cerrar","El plano, BOM y exportaci\xF3n usan las cantidades aplicadas."],fr:["Quantit\xE9s audio","Recommandation automatique","Quantit\xE9s impos\xE9es","En attente : recalculer","R\xE9tablir la recommandation","Effacer les appareils audio","Conflit : v\xE9rifier les distances entre microphones et enceintes.","R\xE9glages","Instructions","R\xE9f\xE9rences","BOM / devis","Plus","Fermer","Le plan, la nomenclature et les exports utilisent les quantit\xE9s appliqu\xE9es."],mn:["\u0410\u0443\u0434\u0438\u043E \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u043D \u0442\u043E\u043E","\u0410\u0432\u0442\u043E\u043C\u0430\u0442 \u0441\u0430\u043D\u0430\u043B","\u0422\u043E\u0433\u0442\u0441\u043E\u043D \u0442\u043E\u043E","\u0414\u0430\u0445\u0438\u043D \u0442\u043E\u043E\u0446\u043E\u043E\u043B\u043D\u043E \u0443\u0443","\u0410\u0432\u0442\u043E\u043C\u0430\u0442 \u0441\u0430\u043D\u0430\u043B\u044B\u0433 \u0441\u044D\u0440\u0433\u044D\u044D\u0445","\u0410\u0443\u0434\u0438\u043E \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u0433 \u0430\u0440\u0438\u043B\u0433\u0430\u0445","\u0411\u0430\u0439\u0440\u043B\u0430\u043B\u044B\u043D \u0437\u04E9\u0440\u0447\u0438\u043B: \u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D \u0431\u0430 \u0447\u0430\u043D\u0433\u0430 \u044F\u0440\u0438\u0433\u0447\u0438\u0439\u043D \u0437\u0430\u0439\u0433 \u0448\u0430\u043B\u0433\u0430\u043D\u0430 \u0443\u0443.","\u0422\u043E\u0445\u0438\u0440\u0433\u043E\u043E","\u0417\u0430\u0430\u0432\u0430\u0440","\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u043D \u043B\u0430\u0432\u043B\u0430\u0433\u0430\u0430","BOM / \u04AE\u043D\u0438\u0439\u043D \u0441\u0430\u043D\u0430\u043B","\u0411\u0443\u0441\u0430\u0434","\u0425\u0430\u0430\u0445","\u0417\u0443\u0440\u0430\u0433, BOM, \u044D\u043A\u0441\u043F\u043E\u0440\u0442 \u043D\u044C \u0445\u044D\u0440\u044D\u0433\u0436\u04AF\u04AF\u043B\u0441\u044D\u043D \u0442\u043E\u043E\u0433 \u0430\u0448\u0438\u0433\u043B\u0430\u043D\u0430."],ar:["\u0623\u0639\u062F\u0627\u062F \u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0635\u0648\u062A","\u0627\u0642\u062A\u0631\u0627\u062D \u062A\u0644\u0642\u0627\u0626\u064A","\u0623\u0639\u062F\u0627\u062F \u0645\u062D\u062F\u062F\u0629","\u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062D\u0633\u0627\u0628","\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0627\u0642\u062A\u0631\u0627\u062D \u0627\u0644\u062A\u0644\u0642\u0627\u0626\u064A","\u0645\u0633\u062D \u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0635\u0648\u062A","\u062A\u0639\u0627\u0631\u0636 \u0641\u064A \u0627\u0644\u0645\u0648\u0627\u0636\u0639: \u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0628\u064A\u0646 \u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646\u0627\u062A \u0648\u0645\u0643\u0628\u0631\u0627\u062A \u0627\u0644\u0635\u0648\u062A.","\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A","\u0627\u0644\u062A\u0639\u0644\u064A\u0645\u0627\u062A","\u0645\u0631\u062C\u0639 \u0627\u0644\u0623\u062C\u0647\u0632\u0629","\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0639\u062F\u0627\u062A / \u0639\u0631\u0636 \u0627\u0644\u0633\u0639\u0631","\u0627\u0644\u0645\u0632\u064A\u062F","\u0625\u063A\u0644\u0627\u0642","\u064A\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0631\u0633\u0645 \u0648\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0639\u062F\u0627\u062A \u0648\u0627\u0644\u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u0623\u0639\u062F\u0627\u062F \u0627\u0644\u0645\u0637\u0628\u0642\u0629."],it:["Quantit\xE0 audio","Consiglio automatico","Quantit\xE0 fisse","In attesa: ricalcolare","Ripristina consiglio automatico","Cancella dispositivi audio","Conflitto: verificare la distanza tra microfoni e altoparlanti.","Impostazioni","Istruzioni","Riferimenti","BOM / preventivo","Altro","Chiudi","Disegno, BOM ed esportazione usano le quantit\xE0 applicate."],hu:["Audioeszk\xF6z\xF6k sz\xE1ma","Automatikus aj\xE1nl\xE1s","R\xF6gz\xEDtett mennyis\xE9g","\xDAjrasz\xE1m\xEDt\xE1s sz\xFCks\xE9ges","Automatikus aj\xE1nl\xE1s vissza\xE1ll\xEDt\xE1sa","Audioeszk\xF6z\xF6k t\xF6rl\xE9se","Elhelyez\xE9si \xFCtk\xF6z\xE9s: ellen\u0151rizze a mikrofonok \xE9s hangsz\xF3r\xF3k t\xE1vols\xE1g\xE1t.","Be\xE1ll\xEDt\xE1sok","\xDAtmutat\xF3","Eszk\xF6zreferencia","BOM / \xE1raj\xE1nlat","Tov\xE1bbiak","Bez\xE1r\xE1s","A rajz, BOM \xE9s export az alkalmazott mennyis\xE9geket haszn\xE1lja."]};n.audioUIWords=t=>e[t]||e.en,n.createAudioControls=function(t,i){let s=document.createElement("h3"),r=document.createElement("p"),o=document.createElement("p"),a=document.createElement("p"),l=document.createElement("div"),c=document.createElement("button"),h=document.createElement("button");t.classList.add("audio-count-card"),t.append(s,r),r.className="audio-count-status",r.setAttribute("aria-live","polite");let u=n.audioTypes.map(f=>{let g=document.createElement("label"),_=document.createElement("span"),m=document.createElement("select");return g.className="audio-count-row",m.dataset.audioCount=f,m.addEventListener("change",()=>{n.stageAudioCount(i.state(),f,Number(m.value)),d(),i.staged?.()}),g.append(_,m),t.append(g),{type:f,name:_,select:m}});o.className=a.className="microcopy",a.classList.add("audio-layout-warning"),o.setAttribute("role","note"),l.className="audio-count-actions",c.dataset.audioAction="restore",h.dataset.audioAction="clear",c.type=h.type="button",c.onclick=i.restore,h.onclick=i.clear,l.append(c,h),t.append(o,a,l);function d(){let f=i.state();if(!f)return;let g=n.audioUIWords(i.language()),_=f.audioDraft||n.audioCounts(f.devices);s.textContent=g[0],r.textContent=f.audioDraft?g[3]:g[n.audioRequest(f).mode==="fixed"?2:1],t.dataset.pending=String(!!f.audioDraft),t.dataset.mode=n.audioRequest(f).mode;for(let{type:m,name:p,select:S}of u){p.textContent=i.name(m)+(m==="m100"?" \xB7 A":m==="m40"?" \xB7 B":"");let y=Array.from({length:n.audioLimits[m]+1},(x,b)=>b);_[m]>n.audioLimits[m]&&y.push(_[m]),S.replaceChildren(...y.map(x=>new Option(String(x),String(x)))),S.value=_[m],S.setAttribute("aria-label",p.textContent)}c.textContent=g[4],h.textContent=g[5],o.textContent=g[13],a.textContent=g[6],a.hidden=!n.layoutConflict(f.devices)}return d(),d}})(window.AISpeech=window.AISpeech||{});(function(n){let e=["m100Pickup","m100PA","m40Pickup","m40PA","dc20"],t=["m100_pickup","m100_pa","m40_pickup","m40_pa","dc20"];function i(c="invalidSnapshot"){let h=new Error(c);throw h.code=c,h}let s=(c,h,u)=>typeof c=="number"&&Number.isFinite(c)&&c>=h&&c<=u;function r(c){(!c||typeof c!="object")&&i(),[1,2,3,4].includes(c.version)||i("snapshotVersion");let{length:h,width:u,height:d}=c;(!s(h,2,40)||!s(u,2,40)||!s(d,2,4))&&i(),(!Array.isArray(c.devices)||!Array.isArray(c.displays))&&i();let f=new Set;function g(b){(!b||!["string","number"].includes(typeof b.id))&&i(),typeof b.id=="number"&&!Number.isSafeInteger(b.id)&&i();let T=String(b.id);return(!T||T.length>100||f.has(T)||/^(ifp-|podium$|station$)/.test(T))&&i(),f.add(T),(!s(b.x,0,h)||!s(b.y,0,u))&&i("snapshotBounds"),{id:T,x:b.x,y:b.y}}let _=c.devices.map(b=>{let T=g(b);return["m100","m40","dc20"].includes(b.type)||i(),{...T,type:b.type}}),m=c.displays.map(b=>{let T=g(b);return(!["left","right"].includes(b.side)||![55,65,75].includes(b.size)||!s(b.maxDistance,0,40)||!s(b.coverageEnd,b.y,u))&&i(),{...T,side:b.side,size:b.size,maxDistance:b.maxDistance,coverageEnd:b.coverageEnd}});(!c.radii||e.some(b=>!s(c.radii[b],0,Number.MAX_VALUE)))&&i(),(!c.show||t.some(b=>typeof c.show[b]!="boolean")||typeof c.showModels!="boolean")&&i(),["en","zh","hu","it","es","ja","ko","ar"].includes(c.language)||i();let p;if(c.version>=2){let b=c.heightProfile;(!b||!["uniform","split"].includes(b.mode)||!s(b.front,2,4)||!s(b.rear,2,4)||!s(b.split,0,u)||!s(b.drop,0,.7)||b.manualPickup!==null&&!s(b.manualPickup,0,100)||b.manualPA!==null&&!s(b.manualPA,0,100))&&i(),p={mode:b.mode,front:b.front,rear:b.rear,split:b.split,drop:b.drop,manualPickup:b.manualPickup,manualPA:b.manualPA}}let S,y;if(c.version===3||c.version===4&&c.equipment){let b=c.equipment,T=C=>Number.isInteger(C)&&s(C,0,99);(!b||!n.qnexModels.includes(b.qnexModel)||!["DP44","DP88"].includes(b.processorModel)||!["qnexCount","ifpCount","lcsCount","cameraCount"].every(C=>T(b[C]))||typeof b.lcsEnabled!="boolean"||!["processorCount","du11Count"].every(C=>b[C]===null||T(b[C]))||!Array.isArray(c.teachingDevices))&&i(),S=Object.fromEntries(["qnexModel","qnexCount","ifpCount","lcsEnabled","lcsCount","cameraCount","processorModel","processorCount","du11Count"].map(C=>[C,b[C]])),y=c.teachingDevices.map(C=>{let I=g(C);["qnex","ifp","station","camera"].includes(C.type)||i();let w=C.type==="qnex"?b.qnexModel:C.type==="ifp"?"QA1400 Pro":C.type==="camera"?"CV870":"LCS810 GEN2";return(C.model!==w||C.type==="ifp"&&C.size!==86||C.type==="camera"&&!["teacher","student"].includes(C.role))&&i(),{...I,type:C.type,model:w,...C.type==="ifp"?{size:86}:{},...C.type==="camera"?{role:C.role}:{}}});for(let[C,I]of[["qnex",b.qnexCount],["ifp",b.ifpCount],["station",b.lcsEnabled?b.lcsCount:0],["camera",b.lcsEnabled?b.cameraCount:0]])y.filter(w=>w.type===C).length!==I&&i()}let x;if(c.version===4){let b=c.audioLayout,T=n.audioCounts(_);(!b||!["auto","fixed"].includes(b.mode)||!b.counts||n.audioTypes.some(C=>!Number.isInteger(b.counts[C])||b.counts[C]!==T[C]))&&i(),!S&&c.teachingDevices?.length&&i(),x={mode:b.mode,counts:T}}return{version:c.version,length:h,width:u,height:d,devices:_,displays:m,radii:Object.fromEntries(e.map(b=>[b,c.radii[b]])),show:Object.fromEntries(t.map(b=>[b,c.show[b]])),language:c.language,showModels:c.showModels,...p?{heightProfile:p}:{},...S?{equipment:S,teachingDevices:y}:{},...x?{audioLayout:x}:{}}}function o(c,h){return c===n.state&&c.equipment&&n.syncTeachingDevices(),r({version:4,audioLayout:n.appliedAudioRequest(c),length:c.roomLength,width:c.roomWidth,height:c.height,devices:c.devices,displays:c.showAuxDisplays===!1?[]:c.auxDisplays,radii:c.radii,show:c.show,language:h,showModels:c.showModels===!0,heightProfile:c.heightProfile||{mode:"uniform",front:c.height,rear:c.height,split:c.roomWidth/2,drop:0,manualPickup:null,manualPA:null},equipment:c.equipment?{...c.equipment,ifpCount:c.showIFP===!1?0:c.equipment.ifpCount}:void 0,teachingDevices:c.teachingDevices})}function a(c){return"#plan="+encodeURIComponent(JSON.stringify(r(c)))}function l(c){if(!c)return null;c.startsWith("#plan=")||i();let h;try{h=JSON.parse(decodeURIComponent(c.slice(6)))}catch{i()}return r(h)}Object.assign(n,{validateSnapshot:r,snapshotFromState:o,encodeSnapshot:a,decodeSnapshot:l})})(window.AISpeech=window.AISpeech||{});(function(n){let e={en:["Dante Ceiling Microphone","Dante Ceiling Microphone","Dante Ceiling Speaker","Dante Interface Adapter","4-channel Dante Audio Processor","8-channel Dante Audio Processor","Show model numbers","View 3D","Reference configuration. Adjust parameters for customer-owned equipment.","No devices","channels used","The plan is invalid. Check room dimensions, devices and coverage radii.","A device is outside the room. Move it inside in 2D before opening 3D.","This plan version is unsupported. Open it again from the updated 2D page."],zh:["Dante \u5438\u9876\u9EA6\u514B\u98CE","Dante \u5438\u9876\u9EA6\u514B\u98CE","Dante \u5438\u9876\u97F3\u7BB1","Dante \u63A5\u53E3\u9002\u914D\u5668","4 \u901A\u9053 Dante \u97F3\u9891\u5904\u7406\u5668","8 \u901A\u9053 Dante \u97F3\u9891\u5904\u7406\u5668","\u663E\u793A\u578B\u53F7","\u67E5\u770B 3D","\u5F53\u524D\u53C2\u8003\u914D\u7F6E\uFF1B\u5BA2\u6237\u81EA\u6709\u8BBE\u5907\u8BF7\u6309\u5B9E\u9645\u53C2\u6570\u8C03\u6574\u3002","\u65E0\u8BBE\u5907","\u5DF2\u5360\u7528\u901A\u9053","\u65B9\u6848\u6570\u636E\u65E0\u6548\uFF0C\u8BF7\u68C0\u67E5\u623F\u95F4\u5C3A\u5BF8\u3001\u8BBE\u5907\u4E0E\u8986\u76D6\u534A\u5F84\u3002","\u6709\u8BBE\u5907\u4F4D\u4E8E\u623F\u95F4\u5916\uFF0C\u8BF7\u5148\u5728 2D \u4E2D\u79FB\u56DE\u623F\u95F4\u5185\u518D\u6253\u5F00 3D\u3002","\u4E0D\u652F\u6301\u6B64\u65B9\u6848\u7248\u672C\uFF0C\u8BF7\u4ECE\u66F4\u65B0\u540E\u7684 2D \u9875\u9762\u91CD\u65B0\u6253\u5F00\u3002"],hu:["Dante mennyezeti mikrofon","Dante mennyezeti mikrofon","Dante mennyezeti hangsz\xF3r\xF3","Dante interf\xE9szadapter","4 csatorn\xE1s Dante audioprocesszor","8 csatorn\xE1s Dante audioprocesszor","Modellsz\xE1mok megjelen\xEDt\xE9se","3D n\xE9zet","Referencia-konfigur\xE1ci\xF3. Saj\xE1t eszk\xF6z\xF6kn\xE9l m\xF3dos\xEDtsa a param\xE9tereket.","Nincs eszk\xF6z","foglalt csatorna","\xC9rv\xE9nytelen terv. Ellen\u0151rizze a m\xE9reteket, eszk\xF6z\xF6ket \xE9s sugarakat.","Egy eszk\xF6z a termen k\xEDv\xFCl van. Helyezze vissza a 2D n\xE9zetben.","Nem t\xE1mogatott tervverzi\xF3. Nyissa meg a friss\xEDtett 2D oldalr\xF3l."],it:["Microfono Dante a soffitto","Microfono Dante a soffitto","Altoparlante Dante a soffitto","Adattatore di interfaccia Dante","Processore audio Dante a 4 canali","Processore audio Dante a 8 canali","Mostra modelli","Vista 3D","Configurazione di riferimento. Adeguare i parametri ai dispositivi del cliente.","Nessun dispositivo","canali occupati","Piano non valido. Verificare dimensioni, dispositivi e raggi.","Un dispositivo \xE8 fuori dalla stanza. Spostarlo nel piano 2D.","Versione del piano non supportata. Riaprire dalla pagina 2D aggiornata."],es:["Micr\xF3fono Dante de techo","Micr\xF3fono Dante de techo","Altavoz Dante de techo","Adaptador de interfaz Dante","Procesador de audio Dante de 4 canales","Procesador de audio Dante de 8 canales","Mostrar modelos","Ver 3D","Configuraci\xF3n de referencia. Ajuste los par\xE1metros para los equipos del cliente.","Sin dispositivos","canales ocupados","Plan no v\xE1lido. Compruebe dimensiones, equipos y radios.","Hay un equipo fuera de la sala. Mu\xE9valo dentro en 2D.","Versi\xF3n no compatible. Abra el plan desde la p\xE1gina 2D actualizada."],ja:["Dante \u5929\u4E95\u30DE\u30A4\u30AF","Dante \u5929\u4E95\u30DE\u30A4\u30AF","Dante \u5929\u4E95\u30B9\u30D4\u30FC\u30AB\u30FC","Dante \u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u30A2\u30C0\u30D7\u30BF\u30FC","4\u30C1\u30E3\u30F3\u30CD\u30EB Dante \u97F3\u58F0\u30D7\u30ED\u30BB\u30C3\u30B5\u30FC","8\u30C1\u30E3\u30F3\u30CD\u30EB Dante \u97F3\u58F0\u30D7\u30ED\u30BB\u30C3\u30B5\u30FC","\u578B\u756A\u3092\u8868\u793A","3D \u3092\u8868\u793A","\u53C2\u8003\u69CB\u6210\u3067\u3059\u3002\u304A\u5BA2\u69D8\u306E\u6A5F\u5668\u306B\u5408\u308F\u305B\u3066\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3092\u8ABF\u6574\u3057\u3066\u304F\u3060\u3055\u3044\u3002","\u30C7\u30D0\u30A4\u30B9\u306A\u3057","\u4F7F\u7528\u30C1\u30E3\u30F3\u30CD\u30EB","\u7121\u52B9\u306A\u30D7\u30E9\u30F3\u3067\u3059\u3002\u5BF8\u6CD5\u3001\u6A5F\u5668\u3001\u534A\u5F84\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002","\u5BA4\u5916\u306B\u6A5F\u5668\u304C\u3042\u308A\u307E\u3059\u30022D \u3067\u5BA4\u5185\u306B\u623B\u3057\u3066\u304F\u3060\u3055\u3044\u3002","\u672A\u5BFE\u5FDC\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3067\u3059\u3002\u66F4\u65B0\u3057\u305F 2D \u30DA\u30FC\u30B8\u304B\u3089\u958B\u304D\u76F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002"],ko:["Dante \uCC9C\uC7A5 \uB9C8\uC774\uD06C","Dante \uCC9C\uC7A5 \uB9C8\uC774\uD06C","Dante \uCC9C\uC7A5 \uC2A4\uD53C\uCEE4","Dante \uC778\uD130\uD398\uC774\uC2A4 \uC5B4\uB311\uD130","4\uCC44\uB110 Dante \uC624\uB514\uC624 \uD504\uB85C\uC138\uC11C","8\uCC44\uB110 Dante \uC624\uB514\uC624 \uD504\uB85C\uC138\uC11C","\uBAA8\uB378\uBA85 \uD45C\uC2DC","3D \uBCF4\uAE30","\uCC38\uACE0 \uAD6C\uC131\uC785\uB2C8\uB2E4. \uACE0\uAC1D \uC7A5\uBE44\uC758 \uC2E4\uC81C \uC0AC\uC591\uC5D0 \uB9DE\uAC8C \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC870\uC815\uD558\uC138\uC694.","\uC7A5\uCE58 \uC5C6\uC74C","\uC0AC\uC6A9 \uCC44\uB110","\uC798\uBABB\uB41C \uACC4\uD68D\uC785\uB2C8\uB2E4. \uD06C\uAE30, \uC7A5\uBE44, \uBC18\uACBD\uC744 \uD655\uC778\uD558\uC138\uC694.","\uBC29 \uBC16\uC5D0 \uC7A5\uBE44\uAC00 \uC788\uC2B5\uB2C8\uB2E4. 2D\uC5D0\uC11C \uC548\uC73C\uB85C \uC774\uB3D9\uD558\uC138\uC694.","\uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uBC84\uC804\uC785\uB2C8\uB2E4. \uC5C5\uB370\uC774\uD2B8\uB41C 2D \uD398\uC774\uC9C0\uC5D0\uC11C \uB2E4\uC2DC \uC5EC\uC138\uC694."],ar:["\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646 \u0633\u0642\u0641\u064A Dante","\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646 \u0633\u0642\u0641\u064A Dante","\u0645\u0643\u0628\u0631 \u0635\u0648\u062A \u0633\u0642\u0641\u064A Dante","\u0645\u062D\u0648\u0644 \u0648\u0627\u062C\u0647\u0629 Dante","\u0645\u0639\u0627\u0644\u062C \u0635\u0648\u062A Dante \u0628\u0623\u0631\u0628\u0639 \u0642\u0646\u0648\u0627\u062A","\u0645\u0639\u0627\u0644\u062C \u0635\u0648\u062A Dante \u0628\u062B\u0645\u0627\u0646\u064A \u0642\u0646\u0648\u0627\u062A","\u0625\u0638\u0647\u0627\u0631 \u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0637\u0631\u0627\u0632","\u0639\u0631\u0636 \u062B\u0644\u0627\u062B\u064A \u0627\u0644\u0623\u0628\u0639\u0627\u062F","\u062A\u0643\u0648\u064A\u0646 \u0645\u0631\u062C\u0639\u064A. \u0627\u0636\u0628\u0637 \u0627\u0644\u0645\u0639\u0644\u0645\u0627\u062A \u062D\u0633\u0628 \u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0639\u0645\u064A\u0644 \u0627\u0644\u0641\u0639\u0644\u064A\u0629.","\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u062C\u0647\u0632\u0629","\u0627\u0644\u0642\u0646\u0648\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0629","\u0627\u0644\u0645\u062E\u0637\u0637 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D. \u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0623\u0628\u0639\u0627\u062F \u0648\u0627\u0644\u0623\u062C\u0647\u0632\u0629 \u0648\u0623\u0646\u0635\u0627\u0641 \u0627\u0644\u0623\u0642\u0637\u0627\u0631.","\u064A\u0648\u062C\u062F \u062C\u0647\u0627\u0632 \u062E\u0627\u0631\u062C \u0627\u0644\u063A\u0631\u0641\u0629. \u0627\u0646\u0642\u0644\u0647 \u0625\u0644\u0649 \u0627\u0644\u062F\u0627\u062E\u0644 \u0641\u064A \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062B\u0646\u0627\u0626\u064A.","\u0625\u0635\u062F\u0627\u0631 \u063A\u064A\u0631 \u0645\u062F\u0639\u0648\u0645. \u0627\u0641\u062A\u062D \u0627\u0644\u0645\u062E\u0637\u0637 \u0645\u0646 \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062B\u0646\u0627\u0626\u064A\u0629 \u0627\u0644\u0645\u062D\u062F\u062B\u0629."]},t=["m100","m40","dc20","du11","dp44","dp88","showModels","open3d","reference","noDevices","channels","invalidSnapshot","snapshotBounds","snapshotVersion"],i={en:"One ceiling microphone can feed both remote audio and local PA. The PA circle covers talkers; ceiling speakers serve listeners. PA area alone does not determine microphone quantity.",zh:"\u540C\u4E00\u53F0\u5438\u9876\u9EA6\u53EF\u540C\u65F6\u7528\u4E8E\u8FDC\u7AEF\u62FE\u97F3\u548C\u672C\u5730\u6269\u58F0\u3002\u6269\u58F0\u62FE\u97F3\u5708\u5BF9\u5E94\u8BB2\u8BDD\u8005\u4F4D\u7F6E\uFF1B\u5B66\u751F\u542C\u97F3\u7531\u5438\u9876\u97F3\u7BB1\u8986\u76D6\u3002\u6269\u58F0\u62FE\u97F3\u9762\u79EF\u4E0D\u5355\u72EC\u51B3\u5B9A\u9EA6\u514B\u98CE\u6570\u91CF\u3002",hu:"A mikrofonok nem adnak ki hangot. A helyi hangos\xEDt\xE1shoz mennyezeti hangsz\xF3r\xF3k kellenek.",it:"I microfoni non emettono suono. La diffusione locale richiede altoparlanti a soffitto.",es:"Los micr\xF3fonos no emiten sonido. La amplificaci\xF3n local requiere altavoces de techo.",ja:"\u30DE\u30A4\u30AF\u81EA\u4F53\u306F\u97F3\u3092\u51FA\u3057\u307E\u305B\u3093\u3002\u5BA4\u5185\u62E1\u58F0\u306B\u306F\u5929\u4E95\u30B9\u30D4\u30FC\u30AB\u30FC\u304C\u5FC5\u8981\u3067\u3059\u3002",ko:"\uB9C8\uC774\uD06C \uC790\uCCB4\uB294 \uC18C\uB9AC\uB97C \uB0B4\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC2E4\uB0B4 \uD655\uC131\uC5D0\uB294 \uCC9C\uC7A5 \uC2A4\uD53C\uCEE4\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.",ar:"\u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646\u0627\u062A \u0644\u0627 \u062A\u0635\u062F\u0631 \u0635\u0648\u062A\u064B\u0627. \u064A\u062A\u0637\u0644\u0628 \u0627\u0644\u062A\u0636\u062E\u064A\u0645 \u0627\u0644\u0645\u062D\u0644\u064A \u0645\u0643\u0628\u0631\u0627\u062A \u0635\u0648\u062A \u0633\u0642\u0641\u064A\u0629."};n.presentationCopy=s=>Object.fromEntries(t.map((r,o)=>[r,(e[s]||e.en)[o]])),n.audioName=(s,r="en",o=!1)=>{let a=s.toLowerCase();return n.presentationCopy(r)[a]+(o?` (${a.toUpperCase()})`:"")},n.presentText=(s,r,o=!1)=>String(s).replace(/AISpeech|AI Speech|思必驰/gi,"Dante").replace(/\b(M100|M40|DC20|DU11|DP44|DP88)(?:s)?\b/g,(a,l)=>n.audioName(l,r,o)),n.presentCopy=(s,r,o)=>Object.fromEntries(Object.entries(s).map(([a,l])=>[a,["warnTitle","paNote"].includes(a)?i[r]||i.en:typeof l=="string"?n.presentText(l,r,o):l]))})(window.AISpeech=window.AISpeech||{});(function(n){let e=n.state;function t(a,l,c){return Math.max(l,Math.min(c,a))}function i(a,l,c){if(a<=0)return[];if(a===1)return[{x:l/2,y:c/2}];let h=Math.max(1,Math.round(Math.sqrt(a*(l/Math.max(c,.1))))),u=Math.max(1,Math.ceil(a/h)),d=[];for(let f=0;f<u&&d.length<a;f++){let g=a-d.length,_=Math.min(h,g),m=_/h*l,p=(l-m)/2;for(let S=0;S<_&&d.length<a;S++)d.push({x:p+(S+.5)*l/h,y:(f+.5)*c/u})}return d}function s(a,l){return l.map(c=>({id:n.idCounter++,type:a,x:t(c.x,0,e.roomLength),y:t(c.y,0,e.roomWidth)}))}function r(a){return n.coverageForPlan(e.roomLength,e.roomWidth,a,e.radii,{},e.heightProfile)}function o(){let a=e.roomLength,l=e.roomWidth,h=a*l<=35&&Math.max(a,l)<=7,u=75,d=[],f=-1;if(h){for(let g=1;g<=2;g++){let _=s("m40",i(g,a,l)),m=r(_),p=m.mic*2+m.pa;if(p>f&&(f=p,d=_),m.mic>=u&&m.pa>=75)return _}return d}for(let g=1;g<=8;g++){let _=s("m100",i(g,a,l)),m=r(_),p=m.mic*2-(g-1)*35;if(p>f&&(f=p,d=_),m.mic>=u)return _}return d}n.clamp=t,n.createGridPositions=i,n.makeDevices=s,n.estimateCoverageForDevices=r,n.planMicrophoneDevices=o})(window.AISpeech);(function(n){let e=n.state,t=(...d)=>n.clamp(...d),i=(...d)=>n.createGridPositions(...d),s=(...d)=>n.makeDevices(...d),r=(...d)=>n.estimateCoverageForDevices(...d);function o(d,f){let _=d.x,m=d.y;for(let p=0;p<8;p++){let S=null,y=1/0;if(f.forEach(C=>{let I=_-C.x,w=m-C.y,M=Math.sqrt(I*I+w*w);M<y&&(S=C,y=M)}),!S||y>=2)break;let x=_-S.x,b=m-S.y;y<.01&&(x=_-e.roomLength/2||1,b=m-e.roomWidth/2||1,y=Math.sqrt(x*x+b*b));let T=2-y+.15;_+=x/y*T,m+=b/y*T,_=t(_,.3,Math.max(.3,e.roomLength-.3)),m=t(m,.3,Math.max(.3,e.roomWidth-.3))}return{x:_,y:m}}function a(d){let f=[];for(let g=0;g<=e.roomLength;g+=d)for(let _=0;_<=e.roomWidth;_+=d)f.push({x:g,y:_,covered:!1});return f}function l(d,f,g){return f.every(_=>{let m=d.x-_.x,p=d.y-_.y;return Math.sqrt(m*m+p*p)>=g})}function c(d){let g=Math.max(.5,Math.min(1,Math.max(e.roomLength,e.roomWidth)/24)),_=Math.min(.5,e.roomLength/4,e.roomWidth/4),m=[];for(let p=_;p<=e.roomLength-_+.001;p+=g)for(let S=_;S<=e.roomWidth-_+.001;S+=g){let y={x:p,y:S};l(y,d,2)&&m.push(y)}for(let p=1;p<=30;p++)i(p,e.roomLength,e.roomWidth).forEach(S=>{let y=o(S,d);m.push(y)});return m}function h(d,f){let g=a(.5),_=c(f),m=[],p=new Set,S=e.radii.dc20*e.radii.dc20;for(let y=0;y<d;y++){let x=null,b=-1,T="";if(_.forEach(C=>{let I=`${C.x.toFixed(2)},${C.y.toFixed(2)}`;if(p.has(I))return;let w=0;g.forEach(M=>{if(M.covered)return;let D=M.x-C.x,F=M.y-C.y;D*D+F*F<=S&&w++}),w>b&&(b=w,x=C,T=I)}),!x)break;m.push(x),p.add(T),g.forEach(C=>{if(C.covered)return;let I=C.x-x.x,w=C.y-x.y;I*I+w*w<=S&&(C.covered=!0)})}return m}function u(d){let f=e.roomLength*e.roomWidth,g=Math.max(1,Math.ceil(f/30)),_=f>=70&&f<=110&&Math.min(e.roomLength,e.roomWidth)>=8?4:0,m=Math.max(1,g-1,_),p=80,S=[],y=-1;for(let x=m;x<=30;x++){let b=h(x,d),T=s("dc20",b),C=r([...d,...T]),I=i(x,e.roomLength,e.roomWidth).map(D=>o(D,d)),w=s("dc20",I),M=r([...d,...w]);if(M.speaker>=C.speaker&&(T=w,C=M),C.speaker>y&&(y=C.speaker,S=T),C.speaker>=p)return T}return S}n.keepSpeakerAwayFromMicrophones=o,n.createCoverageSamples=a,n.isFarEnoughFromMicrophones=l,n.createSpeakerCandidates=c,n.optimizeSpeakerPositions=h,n.planSpeakerDevices=u})(window.AISpeech);(function(n){let e=n.state,t=(...a)=>n.renderRoom(...a),i=(...a)=>n.planMicrophoneDevices(...a),s=(...a)=>n.planSpeakerDevices(...a);function r(a=n.audioRequest(e)){if(a.mode==="fixed")return n.fixedAudioDevices(a.counts);let l=i(),c=s(l);return[...l,...c]}function o(){let a=n.audioRequest(e);e.devices=r(a),n.commitAudioLayout(e,a),document.getElementById("presetSelect").value="custom",t()}n.buildProductRecommendation=r,n.recalculateProductPlan=o})(window.AISpeech);var at=window.AISpeech,Nh=Object.freeze({medium:[8,10,3],standard:[10,10,3],large:[10,14,3.4],step:[10,20,3.6],small:[5,6,2.8]});function Uh(n,e,t,i=null,s={mode:"auto"},r=null){let o=i||{mode:"uniform",front:t,rear:t,split:e/2,drop:0,manualPickup:null,manualPA:null};Object.assign(at.state,{roomLength:n,roomWidth:e,height:t,heightProfile:o}),Object.assign(at.state.radii,at.radiiForHeight(o.front,o.drop),r||{}),o.manualPickup!==null&&(at.state.radii.m100Pickup=o.manualPickup),o.manualPA!==null&&(at.state.radii.m100PA=o.manualPA),at.idCounter=0;let a=at.buildProductRecommendation(s).map(({type:u,x:d,y:f},g)=>({id:`${u}-${g+1}`,type:u,x:d,y:f}));a.forEach((u,d)=>{Object.defineProperty(u,"number",{value:a.slice(0,d+1).filter(f=>["m100","m40"].includes(u.type)?["m100","m40"].includes(f.type):f.type===u.type).length})}),at.state.devices=a,at.commitAudioLayout(at.state,s);let l=at.auxiliaryDisplaysForWidth(e,n),c=at.estimateCoverageForDevices(a),h=at.configuredBOM({...at.state,roomLength:n,roomWidth:e,devices:a,auxDisplays:l});return{length:n,width:e,height:t,audioLayout:at.state.audioLayout,heightProfile:{...o},devices:a,displays:l,coverage:c,bom:h,radii:{...at.state.radii}}}function Fh(n){let e=at.validateSnapshot(n);e.devices.forEach((i,s)=>{Object.defineProperty(i,"number",{value:e.devices.slice(0,s+1).filter(r=>["m100","m40"].includes(i.type)?["m100","m40"].includes(r.type):r.type===i.type).length})});let t=e.heightProfile||{mode:"uniform",front:e.height,rear:e.height,split:e.width/2,drop:0,manualPickup:null,manualPA:null,legacy:!0};return{...e,audioLayout:e.audioLayout||{mode:"fixed",counts:at.audioCounts(e.devices)},heightProfile:t,coverage:at.coverageForPlan(e.length,e.width,e.devices,e.radii,e.show,t),bom:e.equipment?at.configuredBOM({...e,roomLength:e.length,roomWidth:e.width,auxDisplays:e.displays}):at.bomForPlan(e.length,e.width,e.devices,e.displays)}}function Kr(n,e,t,i=0){return[e-n.length/2,i,t-n.width/2]}function Oh(n,e,t=!1){if(t){let s=at.auxiliaryDisplaysForWidth(n.width,n.length),r=n.teachingDevices?.map(o=>o.type!=="camera"?o:{...o,x:n.length/2,y:o.role==="teacher"?Math.min(n.width,10):.3});n={...n,displays:s,...r?{teachingDevices:r}:{}}}Object.assign(at.state,{roomLength:n.length,roomWidth:n.width,height:n.height,heightProfile:n.heightProfile,radii:{...n.radii}}),at.idCounter=0;let i=at.buildProductRecommendation(e).map((s,r)=>({...s,id:`audio-${r+1}`}));return i.forEach((s,r)=>Object.defineProperty(s,"number",{value:i.slice(0,r+1).filter(o=>s.type==="dc20"?o.type==="dc20":o.type!=="dc20").length})),{...n,devices:i,audioDraft:null,audioLayout:{mode:e.mode,counts:at.audioCounts(i)},coverage:at.coverageForPlan(n.length,n.width,i,n.radii,n.show,n.heightProfile),bom:n.equipment?at.configuredBOM({...n,devices:i,roomLength:n.length,roomWidth:n.width,auxDisplays:n.displays}):at.bomForPlan(n.length,n.width,i,n.displays)}}var fi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gu=0,gl=1,_u=2;var _l=1,xu=2,Ln=3,Xn=0,Yt=1,vt=2,jn=0,Pi=1,xl=2,vl=3,yl=4,vu=5,ci=100,yu=101,Mu=102,Su=103,bu=104,Eu=200,wu=201,Tu=202,Au=203,Co=204,Ro=205,Cu=206,Ru=207,Pu=208,Du=209,Iu=210,Lu=211,Nu=212,Uu=213,Fu=214,sa=0,ra=1,oa=2,Di=3,aa=4,ca=5,la=6,ha=7,Ml=0,Ou=1,Bu=2,Jn=0,zu=1,ku=2,Hu=3,ua=4,Vu=5,Gu=6,Wu=7;var Sl=300,zi=301,ki=302,da=303,fa=304,Nr=306,Po=1e3,ai=1001,Do=1002,Kt=1003,qu=1004;var Ur=1005;var cn=1006,pa=1007;var Nn=1008;var bn=1009,bl=1010,El=1011,Ts=1012,ma=1013,mi=1014,En=1015,As=1016,ga=1017,_a=1018,Cs=1020,wl=35902,Tl=35899,Al=1021,Cl=1022,en=1023,ps=1026,Rs=1027,xa=1028,va=1029,Rl=1030,ya=1031;var Ma=1033,Fr=33776,Or=33777,Br=33778,zr=33779,Sa=35840,ba=35841,Ea=35842,wa=35843,Ta=36196,Aa=37492,Ca=37496,Ra=37808,Pa=37809,Da=37810,Ia=37811,La=37812,Na=37813,Ua=37814,Fa=37815,Oa=37816,Ba=37817,za=37818,ka=37819,Ha=37820,Va=37821,Ga=36492,Wa=36494,qa=36495,Xa=36283,Ya=36284,$a=36285,Za=36286;var Ks=2300,Io=2301,Ao=2302,il=2400,sl=2401,rl=2402;var Xu=3200,Yu=3201;var Pl=0,$u=1,Kn="",Ct="srgb",Ii="srgb-linear",Qs="linear",ct="srgb";var Ri=7680;var ol=519,Zu=512,ju=513,Ju=514,Dl=515,Ku=516,Qu=517,ed=518,td=519,al=35044;var Il="300 es",yn=2e3,er=2001;var Rn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bh=1234567,ds=Math.PI/180,ms=180/Math.PI;function Hi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Xe(n,e,t){return Math.max(e,Math.min(t,n))}function Ll(n,e){return(n%e+e)%e}function kf(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Hf(n,e,t){return n!==e?(t-n)/(e-n):0}function Zs(n,e,t){return(1-t)*n+t*e}function Vf(n,e,t,i){return Zs(n,e,1-Math.exp(-t*i))}function Gf(n,e=1){return e-Math.abs(Ll(n,e*2)-e)}function Wf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function qf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Xf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Yf(n,e){return n+Math.random()*(e-n)}function $f(n){return n*(.5-Math.random())}function Zf(n){n!==void 0&&(Bh=n);let e=Bh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jf(n){return n*ds}function Jf(n){return n*ms}function Kf(n){return(n&n-1)===0&&n!==0}function Qf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ep(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function tp(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function us(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var kr={DEG2RAD:ds,RAD2DEG:ms,generateUUID:Hi,clamp:Xe,euclideanModulo:Ll,mapLinear:kf,inverseLerp:Hf,lerp:Zs,damp:Vf,pingpong:Gf,smoothstep:Wf,smootherstep:qf,randInt:Xf,randFloat:Yf,randFloatSpread:$f,seededRandom:Zf,degToRad:jf,radToDeg:Jf,isPowerOfTwo:Kf,ceilPowerOfTwo:Qf,floorPowerOfTwo:ep,setQuaternionFromProperEuler:tp,normalize:qt,denormalize:us},ie=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*_,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let b=Math.sqrt(y),T=Math.atan2(b,p*S);m=Math.sin(m*T)/b,a=Math.sin(a*T)/b}let x=a*S;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){let b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pc.copy(this).projectOnVector(e),this.sub(Pc)}reflect(e){return this.sub(Pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pc=new R,zh=new Qt,Ge=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],S=s[1],y=s[4],x=s[7],b=s[2],T=s[5],C=s[8];return r[0]=o*_+a*S+l*b,r[3]=o*m+a*y+l*T,r[6]=o*p+a*x+l*C,r[1]=c*_+h*S+u*b,r[4]=c*m+h*y+u*T,r[7]=c*p+h*x+u*C,r[2]=d*_+f*S+g*b,r[5]=d*m+f*y+g*T,r[8]=d*p+f*x+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*c-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Dc.makeScale(e,t)),this}rotate(e){return this.premultiply(Dc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Dc=new Ge;function Nl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function tr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nd(){let n=tr("canvas");return n.style.display="block",n}var kh={};function gs(n){n in kh||(kh[n]=!0,console.warn(n))}function id(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Hh=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vh=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function np(){let n={enabled:!0,workingColorSpace:Ii,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ct&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Kn?Qs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return gs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return gs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ii]:{primaries:e,whitePoint:i,transfer:Qs,toXYZ:Hh,fromXYZ:Vh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:Hh,fromXYZ:Vh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),n}var et=np();function qn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ki,Lo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ki===void 0&&(Ki=tr("canvas")),Ki.width=e.width,Ki.height=e.height;let s=Ki.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ki}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=tr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=qn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qn(t[i]/255)*255):t[i]=qn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ip=0,_s=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=Hi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ic(s[o].image)):r.push(Ic(s[o]))}else r=Ic(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ic(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Lo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var sp=0,Lc=new R,Xt=class n extends Rn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ai,s=ai,r=cn,o=Nn,a=en,l=bn,c=n.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Hi(),this.name="",this.source=new _s(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Lc).x}get height(){return this.source.getSize(Lc).y}get depth(){return this.source.getSize(Lc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Po:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case Do:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Po:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case Do:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Sl;Xt.DEFAULT_ANISOTROPY=1;var Et=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,x=(f+1)/2,b=(p+1)/2,T=(h+d)/4,C=(u+_)/4,I=(g+m)/4;return y>x&&y>b?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=T/i,r=C/i):x>b?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=T/s,r=I/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=C/r,s=I/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},No=class extends Rn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new Xt(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new _s(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends No{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},nr=class extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Uo=class extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dn=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qr.copy(i.boundingBox)),Qr.applyMatrix4(e.matrixWorld),this.union(Qr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),eo.subVectors(this.max,Hs),Qi.subVectors(e.a,Hs),es.subVectors(e.b,Hs),ts.subVectors(e.c,Hs),ti.subVectors(es,Qi),ni.subVectors(ts,es),wi.subVectors(Qi,ts);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-wi.z,wi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,wi.z,0,-wi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-wi.y,wi.x,0];return!Nc(t,Qi,es,ts,eo)||(t=[1,0,0,0,1,0,0,0,1],!Nc(t,Qi,es,ts,eo))?!1:(to.crossVectors(ti,ni),t=[to.x,to.y,to.z],Nc(t,Qi,es,ts,eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},zn=[new R,new R,new R,new R,new R,new R,new R,new R],_n=new R,Qr=new Dn,Qi=new R,es=new R,ts=new R,ti=new R,ni=new R,wi=new R,Hs=new R,eo=new R,to=new R,Ti=new R;function Nc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ti.fromArray(n,r);let a=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),l=e.dot(Ti),c=t.dot(Ti),h=i.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var rp=new Dn,Vs=new R,Uc=new R,Yn=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):rp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);let t=Vs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Vs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(Uc)),this.expandByPoint(Vs.copy(e.center).sub(Uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},kn=new R,Fc=new R,no=new R,ii=new R,Oc=new R,io=new R,Bc=new R,li=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Fc.copy(e).add(t).multiplyScalar(.5),no.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(Fc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(no),a=ii.dot(this.direction),l=-ii.dot(no),c=ii.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Fc).addScaledVector(no,d),f}intersectSphere(e,t){kn.subVectors(e.center,this.origin);let i=kn.dot(this.direction),s=kn.dot(kn)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,i,s,r){Oc.subVectors(t,e),io.subVectors(i,e),Bc.crossVectors(Oc,io);let o=this.direction.dot(Bc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,e);let l=a*this.direction.dot(io.crossVectors(ii,io));if(l<0)return null;let c=a*this.direction.dot(Oc.cross(ii));if(c<0||l+c>o)return null;let h=-a*ii.dot(Bc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nt=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,d,f,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,d,f,g,_,m)}set(e,t,i,s,r,o,a,l,c,h,u,d,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/ns.setFromMatrixColumn(e,0).length(),r=1/ns.setFromMatrixColumn(e,1).length(),o=1/ns.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(op,e,ap)}lookAt(e,t,i){let s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),si.crossVectors(i,on),si.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),si.crossVectors(i,on)),si.normalize(),so.crossVectors(on,si),s[0]=si.x,s[4]=so.x,s[8]=on.x,s[1]=si.y,s[5]=so.y,s[9]=on.y,s[2]=si.z,s[6]=so.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],S=i[3],y=i[7],x=i[11],b=i[15],T=s[0],C=s[4],I=s[8],w=s[12],M=s[1],D=s[5],F=s[9],k=s[13],G=s[2],W=s[6],H=s[10],ne=s[14],q=s[3],de=s[7],xe=s[11],Me=s[15];return r[0]=o*T+a*M+l*G+c*q,r[4]=o*C+a*D+l*W+c*de,r[8]=o*I+a*F+l*H+c*xe,r[12]=o*w+a*k+l*ne+c*Me,r[1]=h*T+u*M+d*G+f*q,r[5]=h*C+u*D+d*W+f*de,r[9]=h*I+u*F+d*H+f*xe,r[13]=h*w+u*k+d*ne+f*Me,r[2]=g*T+_*M+m*G+p*q,r[6]=g*C+_*D+m*W+p*de,r[10]=g*I+_*F+m*H+p*xe,r[14]=g*w+_*k+m*ne+p*Me,r[3]=S*T+y*M+x*G+b*q,r[7]=S*C+y*D+x*W+b*de,r[11]=S*I+y*F+x*H+b*xe,r[15]=S*w+y*k+x*ne+b*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+_*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+t*c*u-t*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-t*l*u+t*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,y=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,x=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,b=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,T=t*S+i*y+s*x+r*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return e[0]=S*C,e[1]=(_*d*r-u*m*r-_*s*f+i*m*f+u*s*p-i*d*p)*C,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*C,e[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*C,e[4]=y*C,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*C,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*C,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*C,e[8]=x*C,e[9]=(g*u*r-h*_*r-g*i*f+t*_*f+h*i*p-t*u*p)*C,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*p+t*a*p)*C,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*f-t*a*f)*C,e[12]=b*C,e[13]=(h*_*s-g*u*s+g*i*d-t*_*d-h*i*m+t*u*m)*C,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*m-t*a*m)*C,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*d+t*a*d)*C,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,S=l*c,y=l*h,x=l*u,b=i.x,T=i.y,C=i.z;return s[0]=(1-(_+p))*b,s[1]=(f+x)*b,s[2]=(g-y)*b,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(d+p))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+y)*C,s[9]=(m-S)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=ns.set(s[0],s[1],s[2]).length(),o=ns.set(s[4],s[5],s[6]).length(),a=ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],xn.copy(this);let c=1/r,h=1/o,u=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,t.setFromRotationMatrix(xn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=yn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===yn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===er)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=yn,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===yn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===er)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ns=new R,xn=new nt,op=new R(0,0,0),ap=new R(1,1,1),si=new R,so=new R,on=new R,Gh=new nt,Wh=new Qt,ln=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wh.setFromEuler(this),this.setFromQuaternion(Wh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ln.DEFAULT_ORDER="XYZ";var xs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},cp=0,qh=new R,is=new Qt,Hn=new nt,ro=new R,Gs=new R,lp=new R,hp=new Qt,Xh=new R(1,0,0),Yh=new R(0,1,0),$h=new R(0,0,1),Zh={type:"added"},up={type:"removed"},ss={type:"childadded",child:null},zc={type:"childremoved",child:null},Ot=class n extends Rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new R,t=new ln,i=new Qt,s=new R(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new Ge}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(Xh,e)}rotateY(e){return this.rotateOnAxis(Yh,e)}rotateZ(e){return this.rotateOnAxis($h,e)}translateOnAxis(e,t){return qh.copy(e).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xh,e)}translateY(e){return this.translateOnAxis(Yh,e)}translateZ(e){return this.translateOnAxis($h,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ro.copy(e):ro.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Gs,ro,this.up):Hn.lookAt(ro,Gs,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(Hn),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zh),ss.child=e,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(up),zc.child=e,this.dispatchEvent(zc),zc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zh),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,lp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,hp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ot.DEFAULT_UP=new R(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vn=new R,Vn=new R,kc=new R,Gn=new R,rs=new R,os=new R,jh=new R,Hc=new R,Vc=new R,Gc=new R,Wc=new Et,qc=new Et,Xc=new Et,Wn=class n{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),vn.subVectors(e,t),s.cross(vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){vn.subVectors(s,t),Vn.subVectors(i,t),kc.subVectors(e,t);let o=vn.dot(vn),a=vn.dot(Vn),l=vn.dot(kc),c=Vn.dot(Vn),h=Vn.dot(kc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Wc.setScalar(0),qc.setScalar(0),Xc.setScalar(0),Wc.fromBufferAttribute(e,t),qc.fromBufferAttribute(e,i),Xc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Wc,r.x),o.addScaledVector(qc,r.y),o.addScaledVector(Xc,r.z),o}static isFrontFacing(e,t,i,s){return vn.subVectors(i,t),Vn.subVectors(e,t),vn.cross(Vn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),vn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;rs.subVectors(s,i),os.subVectors(r,i),Hc.subVectors(e,i);let l=rs.dot(Hc),c=os.dot(Hc);if(l<=0&&c<=0)return t.copy(i);Vc.subVectors(e,s);let h=rs.dot(Vc),u=os.dot(Vc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(rs,o);Gc.subVectors(e,r);let f=rs.dot(Gc),g=os.dot(Gc);if(g>=0&&f<=g)return t.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(os,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return jh.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(jh,a);let p=1/(m+_+d);return o=_*p,a=d*p,t.copy(i).addScaledVector(rs,o).addScaledVector(os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},oo={h:0,s:0,l:0};function Yc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var He=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=et.workingColorSpace){if(e=Ll(e,1),t=Xe(t,0,1),i=Xe(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Yc(o,r,e+1/3),this.g=Yc(o,r,e),this.b=Yc(o,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=Ct){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){let i=sd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return et.workingToColorSpace(zt.copy(this),e),Math.round(Xe(zt.r*255,0,255))*65536+Math.round(Xe(zt.g*255,0,255))*256+Math.round(Xe(zt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(zt.copy(this),t);let i=zt.r,s=zt.g,r=zt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Ct){et.workingToColorSpace(zt.copy(this),e);let t=zt.r,i=zt.g,s=zt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(oo);let i=Zs(ri.h,oo.h,t),s=Zs(ri.s,oo.s,t),r=Zs(ri.l,oo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new He;He.NAMES=sd;var dp=0,$n=class extends Rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=Pi,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Co,this.blendDst=Ro,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ol,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(i.blending=this.blending),this.side!==Xn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Co&&(i.blendSrc=this.blendSrc),this.blendDst!==Ro&&(i.blendDst=this.blendDst),this.blendEquation!==ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Di&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ol&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Nt=class extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var At=new R,ao=new ie,fp=0,Jt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=al,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ao.fromBufferAttribute(this,t),ao.applyMatrix3(e),this.setXY(t,ao.x,ao.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=us(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=us(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=us(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=us(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=us(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),s=qt(s,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==al&&(e.usage=this.usage),e}};var ir=class extends Jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var sr=class extends Jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var je=class extends Jt{constructor(e,t,i){super(new Float32Array(e),t,i)}},pp=0,pn=new nt,$c=new Ot,as=new R,an=new Dn,Ws=new Dn,Lt=new R,xt=class n extends Rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nl(e)?sr:ir)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,i){return pn.makeTranslation(e,t,i),this.applyMatrix4(pn),this}scale(e,t,i){return pn.makeScale(e,t,i),this.applyMatrix4(pn),this}lookAt(e){return $c.lookAt(e),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new je(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ws.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(an.min,Ws.min),an.expandByPoint(Lt),Lt.addVectors(an.max,Ws.max),an.expandByPoint(Lt)):(an.expandByPoint(Ws.min),an.expandByPoint(Ws.max))}an.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Lt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Lt.fromBufferAttribute(a,c),l&&(as.fromBufferAttribute(e,c),Lt.add(as)),s=Math.max(s,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new R,l[I]=new R;let c=new R,h=new R,u=new R,d=new ie,f=new ie,g=new ie,_=new R,m=new R;function p(I,w,M){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,M),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),a[I].add(_),a[w].add(_),a[M].add(_),l[I].add(m),l[w].add(m),l[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let I=0,w=S.length;I<w;++I){let M=S[I],D=M.start,F=M.count;for(let k=D,G=D+F;k<G;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let y=new R,x=new R,b=new R,T=new R;function C(I){b.fromBufferAttribute(s,I),T.copy(b);let w=a[I];y.copy(w),y.sub(b.multiplyScalar(b.dot(w))).normalize(),x.crossVectors(T,w);let D=x.dot(l[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,D)}for(let I=0,w=S.length;I<w;++I){let M=S[I],D=M.start,F=M.count;for(let k=D,G=D+F;k<G;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Jt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jh=new nt,Ai=new li,co=new Yn,Kh=new R,lo=new R,ho=new R,uo=new R,Zc=new R,fo=new R,Qh=new R,po=new R,Oe=class extends Ot{constructor(e=new xt,t=new Nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){fo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Zc.fromBufferAttribute(u,e),o?fo.addScaledVector(Zc,h):fo.addScaledVector(Zc.sub(t),h))}t.add(fo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),co.copy(i.boundingSphere),co.applyMatrix4(r),Ai.copy(e.ray).recast(e.near),!(co.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(co,Kh)===null||Ai.origin.distanceToSquared(Kh)>(e.far-e.near)**2))&&(Jh.copy(r).invert(),Ai.copy(e.ray).applyMatrix4(Jh),!(i.boundingBox!==null&&Ai.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,b=y;x<b;x+=3){let T=a.getX(x),C=a.getX(x+1),I=a.getX(x+2);s=mo(this,p,e,i,c,h,u,T,C,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let S=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=mo(this,o,e,i,c,h,u,S,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,b=y;x<b;x+=3){let T=x,C=x+1,I=x+2;s=mo(this,p,e,i,c,h,u,T,C,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let S=m,y=m+1,x=m+2;s=mo(this,o,e,i,c,h,u,S,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function mp(n,e,t,i,s,r,o,a){let l;if(e.side===Yt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Xn,a),l===null)return null;po.copy(a),po.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(po);return c<t.near||c>t.far?null:{distance:c,point:po.clone(),object:n}}function mo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,lo),n.getVertexPosition(l,ho),n.getVertexPosition(c,uo);let h=mp(n,e,t,i,lo,ho,uo,Qh);if(h){let u=new R;Wn.getBarycoord(Qh,lo,ho,uo,u),s&&(h.uv=Wn.getInterpolatedAttribute(s,a,l,c,u,new ie)),r&&(h.uv1=Wn.getInterpolatedAttribute(r,a,l,c,u,new ie)),o&&(h.normal=Wn.getInterpolatedAttribute(o,a,l,c,u,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new R,materialIndex:0};Wn.getNormal(lo,ho,uo,d.normal),h.face=d,h.barycoord=u}return h}var dt=class n extends xt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(u,2));function g(_,m,p,S,y,x,b,T,C,I,w){let M=x/C,D=b/I,F=x/2,k=b/2,G=T/2,W=C+1,H=I+1,ne=0,q=0,de=new R;for(let xe=0;xe<H;xe++){let Me=xe*D-k;for(let Ve=0;Ve<W;Ve++){let Je=Ve*M-F;de[_]=Je*S,de[m]=Me*y,de[p]=G,c.push(de.x,de.y,de.z),de[_]=0,de[m]=0,de[p]=T>0?1:-1,h.push(de.x,de.y,de.z),u.push(Ve/C),u.push(1-xe/I),ne+=1}}for(let xe=0;xe<I;xe++)for(let Me=0;Me<C;Me++){let Ve=d+Me+W*xe,Je=d+Me+W*(xe+1),ot=d+(Me+1)+W*(xe+1),Qe=d+(Me+1)+W*xe;l.push(Ve,Je,Qe),l.push(Je,ot,Qe),q+=6}a.addGroup(f,q,w),f+=q,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Vi(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Vt(n){let e={};for(let t=0;t<n.length;t++){let i=Vi(n[t]);for(let s in i)e[s]=i[s]}return e}function gp(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ul(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var rd={clone:Vi,merge:Vt},_p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_p,this.fragmentShader=xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vi(e.uniforms),this.uniformsGroups=gp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},rr=class extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},oi=new R,eu=new ie,tu=new ie,kt=class extends rr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,eu,tu),t.subVectors(tu,eu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ds*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},cs=-90,ls=1,Fo=class extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(cs,ls,e,t);s.layers=this.layers,this.add(s);let r=new kt(cs,ls,e,t);r.layers=this.layers,this.add(r);let o=new kt(cs,ls,e,t);o.layers=this.layers,this.add(o);let a=new kt(cs,ls,e,t);a.layers=this.layers,this.add(a);let l=new kt(cs,ls,e,t);l.layers=this.layers,this.add(l);let c=new kt(cs,ls,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===er)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},or=class extends Xt{constructor(e=[],t=zi,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Oo=class extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new or(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dt(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Vi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:jn});r.uniforms.tEquirect.value=t;let o=new Oe(s,r),a=t.minFilter;return t.minFilter===Nn&&(t.minFilter=cn),new Fo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},qe=class extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},vp={type:"move"},vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new qe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var ar=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},cr=class extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var ys=class extends Xt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Kt,h=Kt,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var lr=class extends Jt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},hs=new nt,nu=new nt,go=[],iu=new Dn,yp=new nt,qs=new Oe,Xs=new Yn,Li=class extends Oe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new lr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,yp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,hs),iu.copy(e.boundingBox).applyMatrix4(hs),this.boundingBox.union(iu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,hs),Xs.copy(e.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(Xs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xs.copy(this.boundingSphere),Xs.applyMatrix4(i),e.ray.intersectsSphere(Xs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hs),nu.multiplyMatrices(i,hs),qs.matrixWorld=nu,qs.raycast(e,go);for(let o=0,a=go.length;o<a;o++){let l=go[o];l.instanceId=r,l.object=this,t.push(l)}go.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new lr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ys(new Float32Array(s*this.count),s,this.count,xa,En));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},jc=new R,Mp=new R,Sp=new Ge,Ft=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=jc.subVectors(i,t).cross(Mp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(jc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Sp.getNormalMatrix(e),s=this.coplanarPoint(jc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ci=new Yn,bp=new ie(.5,.5),_o=new R,Ms=class{constructor(e=new Ft,t=new Ft,i=new Ft,s=new Ft,r=new Ft,o=new Ft){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],S=r[12],y=r[13],x=r[14],b=r[15];if(s[0].setComponents(c-o,f-h,p-g,b-S).normalize(),s[1].setComponents(c+o,f+h,p+g,b+S).normalize(),s[2].setComponents(c+a,f+u,p+_,b+y).normalize(),s[3].setComponents(c-a,f-u,p-_,b-y).normalize(),i)s[4].setComponents(l,d,m,x).normalize(),s[5].setComponents(c-l,f-d,p-m,b-x).normalize();else if(s[4].setComponents(c-l,f-d,p-m,b-x).normalize(),t===yn)s[5].setComponents(c+l,f+d,p+m,b+x).normalize();else if(t===er)s[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){Ci.center.set(0,0,0);let t=bp.distanceTo(e.center);return Ci.radius=.7071067811865476+t,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(_o.x=s.normal.x>0?e.max.x:e.min.x,_o.y=s.normal.y>0?e.max.y:e.min.y,_o.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_o)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Sn=class extends $n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Bo=new R,zo=new R,su=new nt,Ys=new li,xo=new Yn,Jc=new R,ru=new R,Ni=class extends Ot{constructor(e=new xt,t=new Sn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Bo.fromBufferAttribute(t,s-1),zo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Bo.distanceTo(zo);e.setAttribute("lineDistance",new je(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(s),xo.radius+=r,e.ray.intersectsSphere(xo)===!1)return;su.copy(s).invert(),Ys.copy(e.ray).applyMatrix4(su);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){let p=h.getX(_),S=h.getX(_+1),y=vo(this,e,Ys,l,p,S,_);y&&t.push(y)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(f),p=vo(this,e,Ys,l,_,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){let p=vo(this,e,Ys,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=vo(this,e,Ys,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function vo(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Bo.fromBufferAttribute(a,s),zo.fromBufferAttribute(a,r),t.distanceSqToSegment(Bo,zo,Jc,ru)>i)return;Jc.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Jc);if(!(c<e.near||c>e.far))return{distance:c,point:ru.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var ou=new R,au=new R,hi=class extends Ni{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)ou.fromBufferAttribute(t,s),au.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ou.distanceTo(au);e.setAttribute("lineDistance",new je(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ui=class extends Ni{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};var hr=class extends Xt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ur=class extends Xt{constructor(e,t,i=mi,s,r,o,a=Kt,l=Kt,c,h=ps,u=1){if(h!==ps&&h!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _s(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},dr=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var fr=class n extends xt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new R,h=new ie;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(a,3)),this.setAttribute("uv",new je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},In=class n extends xt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],m=i/2,p=0;S(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new je(u,3)),this.setAttribute("normal",new je(d,3)),this.setAttribute("uv",new je(f,2));function S(){let x=new R,b=new R,T=0,C=(t-e)/i;for(let I=0;I<=r;I++){let w=[],M=I/r,D=M*(t-e)+e;for(let F=0;F<=s;F++){let k=F/s,G=k*l+a,W=Math.sin(G),H=Math.cos(G);b.x=D*W,b.y=-M*i+m,b.z=D*H,u.push(b.x,b.y,b.z),x.set(W,C,H).normalize(),d.push(x.x,x.y,x.z),f.push(k,1-M),w.push(g++)}_.push(w)}for(let I=0;I<s;I++)for(let w=0;w<r;w++){let M=_[w][I],D=_[w+1][I],F=_[w+1][I+1],k=_[w][I+1];(e>0||w!==0)&&(h.push(M,D,k),T+=3),(t>0||w!==r-1)&&(h.push(D,F,k),T+=3)}c.addGroup(p,T,0),p+=T}function y(x){let b=g,T=new ie,C=new R,I=0,w=x===!0?e:t,M=x===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;let D=g;for(let F=0;F<=s;F++){let G=F/s*l+a,W=Math.cos(G),H=Math.sin(G);C.x=w*H,C.y=m*M,C.z=w*W,u.push(C.x,C.y,C.z),d.push(0,M,0),T.x=W*.5+.5,T.y=H*.5*M+.5,f.push(T.x,T.y),g++}for(let F=0;F<s;F++){let k=b+F,G=D+F;x===!0?h.push(G,G+1,k):h.push(G+1,G,k),I+=3}c.addGroup(p,I,x===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},pr=class n extends In{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var yo=new R,Mo=new R,Kc=new R,So=new Wn,mr=class extends xt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(ds*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:_,b:m,c:p}=So;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),So.getNormal(Kc),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let S=0;S<3;S++){let y=(S+1)%3,x=u[S],b=u[y],T=So[h[S]],C=So[h[y]],I=`${x}_${b}`,w=`${b}_${x}`;w in d&&d[w]?(Kc.dot(d[w].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(C.x,C.y,C.z)),d[w]=null):I in d||(d[I]={index0:c[S],index1:c[y],normal:Kc.clone()})}}for(let g in d)if(d[g]){let{index0:_,index1:m}=d[g];yo.fromBufferAttribute(a,_),Mo.fromBufferAttribute(a,m),f.push(yo.x,yo.y,yo.z),f.push(Mo.x,Mo.y,Mo.z)}this.setAttribute("position",new je(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ie:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new R,s=[],r=[],o=[],a=new R,l=new nt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Xe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Xe(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ss=class extends hn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ie){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ko=class extends Ss{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Fl(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var bo=new R,Qc=new Fl,el=new Fl,tl=new Fl,Ho=class extends hn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new R){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(bo.subVectors(s[0],s[1]).add(s[0]),c=bo);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(bo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=bo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Qc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),el.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),tl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Qc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),el.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),tl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Qc.calc(l),el.calc(l),tl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function cu(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Ep(n,e){let t=1-n;return t*t*e}function wp(n,e){return 2*(1-n)*n*e}function Tp(n,e){return n*n*e}function js(n,e,t,i){return Ep(n,e)+wp(n,t)+Tp(n,i)}function Ap(n,e){let t=1-n;return t*t*t*e}function Cp(n,e){let t=1-n;return 3*t*t*n*e}function Rp(n,e){return 3*(1-n)*n*n*e}function Pp(n,e){return n*n*n*e}function Js(n,e,t,i,s){return Ap(n,e)+Cp(n,t)+Rp(n,i)+Pp(n,s)}var gr=class extends hn{constructor(e=new ie,t=new ie,i=new ie,s=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ie){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Js(e,s.x,r.x,o.x,a.x),Js(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Vo=class extends hn{constructor(e=new R,t=new R,i=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new R){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Js(e,s.x,r.x,o.x,a.x),Js(e,s.y,r.y,o.y,a.y),Js(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_r=class extends hn{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Go=class extends hn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xr=class extends hn{constructor(e=new ie,t=new ie,i=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ie){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(js(e,s.x,r.x,o.x),js(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wo=class extends hn{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(js(e,s.x,r.x,o.x),js(e,s.y,r.y,o.y),js(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vr=class extends hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(cu(a,l.x,c.x,h.x,u.x),cu(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ie().fromArray(s))}return this}},cl=Object.freeze({__proto__:null,ArcCurve:ko,CatmullRomCurve3:Ho,CubicBezierCurve:gr,CubicBezierCurve3:Vo,EllipseCurve:Ss,LineCurve:_r,LineCurve3:Go,QuadraticBezierCurve:xr,QuadraticBezierCurve3:Wo,SplineCurve:vr}),qo=class extends hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cl[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new cl[s.type]().fromJSON(s))}return this}},Fi=class extends qo{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new _r(this.currentPoint.clone(),new ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new xr(this.currentPoint.clone(),new ie(e,t),new ie(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new gr(this.currentPoint.clone(),new ie(e,t),new ie(i,s),new ie(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new vr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Ss(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Zn=class extends Fi{constructor(e){super(e),this.uuid=Hi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Fi().fromJSON(s))}return this}};function Dp(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=od(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Fp(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<s;d+=t){let f=n[d],g=n[d+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return yr(r,o,t,a,l,c,0),o}function od(n,e,t,i,s){let r;if(s===Yp(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=lu(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=lu(o/i|0,n[o],n[o+1],r);return r&&bs(r,r.next)&&(Sr(r),r=r.next),r}function Oi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(bs(t,t.next)||bt(t.prev,t,t.next)===0)){if(Sr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function yr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Hp(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Lp(n,i,s,r):Ip(n)){e.push(l.i,n.i,c.i),Sr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Np(Oi(n),e),yr(n,e,t,i,s,r,2)):o===2&&Up(n,e,t,i,s,r):yr(Oi(n),e,t,i,s,r,1);break}}}function Ip(n){let e=n.prev,t=n,i=n.next;if(bt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&$s(s,a,r,l,o,c,g.x,g.y)&&bt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Lp(n,e,t,i){let s=n.prev,r=n,o=n.next;if(bt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),g=Math.min(h,u,d),_=Math.max(a,l,c),m=Math.max(h,u,d),p=ll(f,g,e,t,i),S=ll(_,m,e,t,i),y=n.prevZ,x=n.nextZ;for(;y&&y.z>=p&&x&&x.z<=S;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&$s(a,h,l,u,c,d,y.x,y.y)&&bt(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&$s(a,h,l,u,c,d,x.x,x.y)&&bt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&$s(a,h,l,u,c,d,y.x,y.y)&&bt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=S;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&$s(a,h,l,u,c,d,x.x,x.y)&&bt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Np(n,e){let t=n;do{let i=t.prev,s=t.next.next;!bs(i,s)&&cd(i,t,t.next,s)&&Mr(i,s)&&Mr(s,i)&&(e.push(i.i,t.i,s.i),Sr(t),Sr(t.next),t=n=s),t=t.next}while(t!==n);return Oi(t)}function Up(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Wp(o,a)){let l=ld(o,a);o=Oi(o,o.next),l=Oi(l,l.next),yr(o,e,t,i,s,r,0),yr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Fp(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=od(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Gp(c))}s.sort(Op);for(let r=0;r<s.length;r++)t=Bp(s[r],t);return t}function Op(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Bp(n,e){let t=zp(n,e);if(!t)return e;let i=ld(t,n);return Oi(i,i.next),Oi(t,t.next)}function zp(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(bs(n,t))return t;do{if(bs(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&ad(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);Mr(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&kp(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function kp(n,e){return bt(n.prev,n,e.prev)<0&&bt(e.next,n,n.next)<0}function Hp(n,e,t,i){let s=n;do s.z===0&&(s.z=ll(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Vp(s)}function Vp(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function ll(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Gp(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function ad(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function $s(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&ad(n,e,t,i,s,r,o,a)}function Wp(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!qp(n,e)&&(Mr(n,e)&&Mr(e,n)&&Xp(n,e)&&(bt(n.prev,n,e.prev)||bt(n,e.prev,e))||bs(n,e)&&bt(n.prev,n,n.next)>0&&bt(e.prev,e,e.next)>0)}function bt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function bs(n,e){return n.x===e.x&&n.y===e.y}function cd(n,e,t,i){let s=wo(bt(n,e,t)),r=wo(bt(n,e,i)),o=wo(bt(t,i,n)),a=wo(bt(t,i,e));return!!(s!==r&&o!==a||s===0&&Eo(n,t,e)||r===0&&Eo(n,i,e)||o===0&&Eo(t,n,i)||a===0&&Eo(t,e,i))}function Eo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function wo(n){return n>0?1:n<0?-1:0}function qp(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&cd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Mr(n,e){return bt(n.prev,n,n.next)<0?bt(n,e,n.next)>=0&&bt(n,n.prev,e)>=0:bt(n,e,n.prev)<0||bt(n,n.next,e)<0}function Xp(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function ld(n,e){let t=hl(n.i,n.x,n.y),i=hl(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function lu(n,e,t,i){let s=hl(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Sr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function hl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Yp(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var ul=class{static triangulate(e,t,i=2){return Dp(e,t,i)}},Cn=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];hu(e),uu(i,e);let o=e.length;t.forEach(hu);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,uu(i,t[l]);let a=ul.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function hu(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function uu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var br=class n extends xt{constructor(e=new Zn([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new je(s,3)),this.setAttribute("uv",new je(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:$p,y,x=!1,b,T,C,I;p&&(y=p.getSpacedPoints(h),x=!0,d=!1,b=p.computeFrenetFrames(h,!1),T=new R,C=new R,I=new R),d||(m=0,f=0,g=0,_=0);let w=a.extractPoints(c),M=w.shape,D=w.holes;if(!Cn.isClockWise(M)){M=M.reverse();for(let ee=0,j=D.length;ee<j;ee++){let Z=D[ee];Cn.isClockWise(Z)&&(D[ee]=Z.reverse())}}function k(ee){let Z=10000000000000001e-36,$=ee[0];for(let he=1;he<=ee.length;he++){let se=he%ee.length,ue=ee[se],ze=ue.x-$.x,Be=ue.y-$.y,A=ze*ze+Be*Be,v=Math.max(Math.abs(ue.x),Math.abs(ue.y),Math.abs($.x),Math.abs($.y)),O=Z*v*v;if(A<=O){ee.splice(se,1),he--;continue}$=ue}}k(M),D.forEach(k);let G=D.length,W=M;for(let ee=0;ee<G;ee++){let j=D[ee];M=M.concat(j)}function H(ee,j,Z){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(j,Z)}let ne=M.length;function q(ee,j,Z){let $,he,se,ue=ee.x-j.x,ze=ee.y-j.y,Be=Z.x-ee.x,A=Z.y-ee.y,v=ue*ue+ze*ze,O=ue*A-ze*Be;if(Math.abs(O)>Number.EPSILON){let V=Math.sqrt(v),Q=Math.sqrt(Be*Be+A*A),X=j.x-ze/V,Re=j.y+ue/V,le=Z.x-A/Q,Te=Z.y+Be/Q,Ae=((le-X)*A-(Te-Re)*Be)/(ue*A-ze*Be);$=X+ue*Ae-ee.x,he=Re+ze*Ae-ee.y;let re=$*$+he*he;if(re<=2)return new ie($,he);se=Math.sqrt(re/2)}else{let V=!1;ue>Number.EPSILON?Be>Number.EPSILON&&(V=!0):ue<-Number.EPSILON?Be<-Number.EPSILON&&(V=!0):Math.sign(ze)===Math.sign(A)&&(V=!0),V?($=-ze,he=ue,se=Math.sqrt(v)):($=ue,he=ze,se=Math.sqrt(v/2))}return new ie($/se,he/se)}let de=[];for(let ee=0,j=W.length,Z=j-1,$=ee+1;ee<j;ee++,Z++,$++)Z===j&&(Z=0),$===j&&($=0),de[ee]=q(W[ee],W[Z],W[$]);let xe=[],Me,Ve=de.concat();for(let ee=0,j=G;ee<j;ee++){let Z=D[ee];Me=[];for(let $=0,he=Z.length,se=he-1,ue=$+1;$<he;$++,se++,ue++)se===he&&(se=0),ue===he&&(ue=0),Me[$]=q(Z[$],Z[se],Z[ue]);xe.push(Me),Ve=Ve.concat(Me)}let Je;if(m===0)Je=Cn.triangulateShape(W,D);else{let ee=[],j=[];for(let Z=0;Z<m;Z++){let $=Z/m,he=f*Math.cos($*Math.PI/2),se=g*Math.sin($*Math.PI/2)+_;for(let ue=0,ze=W.length;ue<ze;ue++){let Be=H(W[ue],de[ue],se);De(Be.x,Be.y,-he),$===0&&ee.push(Be)}for(let ue=0,ze=G;ue<ze;ue++){let Be=D[ue];Me=xe[ue];let A=[];for(let v=0,O=Be.length;v<O;v++){let V=H(Be[v],Me[v],se);De(V.x,V.y,-he),$===0&&A.push(V)}$===0&&j.push(A)}}Je=Cn.triangulateShape(ee,j)}let ot=Je.length,Qe=g+_;for(let ee=0;ee<ne;ee++){let j=d?H(M[ee],Ve[ee],Qe):M[ee];x?(C.copy(b.normals[0]).multiplyScalar(j.x),T.copy(b.binormals[0]).multiplyScalar(j.y),I.copy(y[0]).add(C).add(T),De(I.x,I.y,I.z)):De(j.x,j.y,0)}for(let ee=1;ee<=h;ee++)for(let j=0;j<ne;j++){let Z=d?H(M[j],Ve[j],Qe):M[j];x?(C.copy(b.normals[ee]).multiplyScalar(Z.x),T.copy(b.binormals[ee]).multiplyScalar(Z.y),I.copy(y[ee]).add(C).add(T),De(I.x,I.y,I.z)):De(Z.x,Z.y,u/h*ee)}for(let ee=m-1;ee>=0;ee--){let j=ee/m,Z=f*Math.cos(j*Math.PI/2),$=g*Math.sin(j*Math.PI/2)+_;for(let he=0,se=W.length;he<se;he++){let ue=H(W[he],de[he],$);De(ue.x,ue.y,u+Z)}for(let he=0,se=D.length;he<se;he++){let ue=D[he];Me=xe[he];for(let ze=0,Be=ue.length;ze<Be;ze++){let A=H(ue[ze],Me[ze],$);x?De(A.x,A.y+y[h-1].y,y[h-1].x+Z):De(A.x,A.y,u+Z)}}}Y(),te();function Y(){let ee=s.length/3;if(d){let j=0,Z=ne*j;for(let $=0;$<ot;$++){let he=Je[$];we(he[2]+Z,he[1]+Z,he[0]+Z)}j=h+m*2,Z=ne*j;for(let $=0;$<ot;$++){let he=Je[$];we(he[0]+Z,he[1]+Z,he[2]+Z)}}else{for(let j=0;j<ot;j++){let Z=Je[j];we(Z[2],Z[1],Z[0])}for(let j=0;j<ot;j++){let Z=Je[j];we(Z[0]+ne*h,Z[1]+ne*h,Z[2]+ne*h)}}i.addGroup(ee,s.length/3-ee,0)}function te(){let ee=s.length/3,j=0;ye(W,j),j+=W.length;for(let Z=0,$=D.length;Z<$;Z++){let he=D[Z];ye(he,j),j+=he.length}i.addGroup(ee,s.length/3-ee,1)}function ye(ee,j){let Z=ee.length;for(;--Z>=0;){let $=Z,he=Z-1;he<0&&(he=ee.length-1);for(let se=0,ue=h+m*2;se<ue;se++){let ze=ne*se,Be=ne*(se+1),A=j+$+ze,v=j+he+ze,O=j+he+Be,V=j+$+Be;$e(A,v,O,V)}}}function De(ee,j,Z){l.push(ee),l.push(j),l.push(Z)}function we(ee,j,Z){ft(ee),ft(j),ft(Z);let $=s.length/3,he=S.generateTopUV(i,s,$-3,$-2,$-1);P(he[0]),P(he[1]),P(he[2])}function $e(ee,j,Z,$){ft(ee),ft(j),ft($),ft(j),ft(Z),ft($);let he=s.length/3,se=S.generateSideWallUV(i,s,he-6,he-3,he-2,he-1);P(se[0]),P(se[1]),P(se[3]),P(se[1]),P(se[2]),P(se[3])}function ft(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function P(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Zp(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new cl[s.type]().fromJSON(s)),new n(i,e.options)}},$p={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ie(r,o),new ie(a,l),new ie(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ie(o,1-l),new ie(c,1-u),new ie(d,1-g),new ie(_,1-p)]:[new ie(a,1-l),new ie(h,1-u),new ie(f,1-g),new ie(m,1-p)]}};function Zp(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ht=class n extends xt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let S=p*d-o;for(let y=0;y<c;y++){let x=y*u-r;g.push(x,-S,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let y=S+c*p,x=S+c*(p+1),b=S+1+c*(p+1),T=S+1+c*p;f.push(y,x,T),f.push(x,b,T)}this.setIndex(f),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(_,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Er=class n extends xt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new R,g=new ie;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){let p=r+m/i*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){let m=_*(i+1);for(let p=0;p<i;p++){let S=p+m,y=S,x=S+i+1,b=S+i+2,T=S+1;a.push(y,x,T),a.push(x,b,T)}}this.setIndex(a),this.setAttribute("position",new je(l,3)),this.setAttribute("normal",new je(c,3)),this.setAttribute("uv",new je(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},wr=class n extends xt{constructor(e=new Zn([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new je(s,3)),this.setAttribute("normal",new je(r,3)),this.setAttribute("uv",new je(o,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,g=d.holes;Cn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let S=g[m];Cn.isClockWise(S)===!0&&(g[m]=S.reverse())}let _=Cn.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let S=g[m];f=f.concat(S)}for(let m=0,p=f.length;m<p;m++){let S=f[m];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,p=_.length;m<p;m++){let S=_[m],y=S[0]+u,x=S[1]+u,b=S[2]+u;i.push(y,x,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return jp(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function jp(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Tr=class n extends xt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new R,d=new R,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){let S=[],y=p/i,x=0;p===0&&o===0?x=.5/t:p===i&&l===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){let T=b/t;u.x=-e*Math.cos(s+T*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+T*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+x,1-y),S.push(c++)}h.push(S)}for(let p=0;p<i;p++)for(let S=0;S<t;S++){let y=h[p][S+1],x=h[p][S],b=h[p+1][S],T=h[p+1][S+1];(p!==0||o>0)&&f.push(y,x,T),(p!==i-1||l<Math.PI)&&f.push(x,b,T)}this.setIndex(f),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(_,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var yt=class extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pl,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Xo=class extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Yo=class extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function To(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Jp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Bi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$o=class extends Bi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:il,endingEnd:il}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case sl:r=e,a=2*t-i;break;case rl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case sl:o=e,l=2*i-t;break;case rl:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,S=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let b=0;b!==a;++b)r[b]=p*o[h+b]+S*o[c+b]+y*o[l+b]+x*o[u+b];return r}},Zo=class extends Bi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},jo=class extends Bi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},un=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=To(t,this.TimeBufferType),this.values=To(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:To(e.times,Array),values:To(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new jo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $o(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ks:t=this.InterpolantFactoryMethodDiscrete;break;case Io:t=this.InterpolantFactoryMethodLinear;break;case Ao:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ks;case this.InterpolantFactoryMethodLinear:return Io;case this.InterpolantFactoryMethodSmooth:return Ao}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Jp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ao,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};un.prototype.ValueTypeName="";un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=Io;var ui=class extends un{constructor(e,t,i){super(e,t,i)}};ui.prototype.ValueTypeName="bool";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=Ks;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Jo=class extends un{constructor(e,t,i,s){super(e,t,i,s)}};Jo.prototype.ValueTypeName="color";var Ko=class extends un{constructor(e,t,i,s){super(e,t,i,s)}};Ko.prototype.ValueTypeName="number";var Qo=class extends Bi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Qt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ar=class extends un{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Qo(this.times,this.values,this.getValueSize(),e)}};Ar.prototype.ValueTypeName="quaternion";Ar.prototype.InterpolantFactoryMethodSmooth=void 0;var di=class extends un{constructor(e,t,i){super(e,t,i)}};di.prototype.ValueTypeName="string";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=Ks;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var ea=class extends un{constructor(e,t,i,s){super(e,t,i,s)}};ea.prototype.ValueTypeName="vector";var ta=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},hd=new ta,na=class{constructor(e){this.manager=e!==void 0?e:hd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};na.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cr=class extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Rr=class extends Cr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},nl=new nt,du=new R,fu=new R,dl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ms,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;du.setFromMatrixPosition(e.matrixWorld),t.position.copy(du),fu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fu),t.updateMatrixWorld(),nl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(nl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Pr=class extends rr{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},fl=class extends dl{constructor(){super(new Pr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Es=class extends Cr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new fl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ia=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ol="\\[\\]\\.:\\/",Kp=new RegExp("["+Ol+"]","g"),Bl="[^"+Ol+"]",Qp="[^"+Ol.replace("\\.","")+"]",em=/((?:WC+[\/:])*)/.source.replace("WC",Bl),tm=/(WCOD+)?/.source.replace("WCOD",Qp),nm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bl),im=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bl),sm=new RegExp("^"+em+tm+nm+im+"$"),rm=["material","materials","bones","map"],pl=class{constructor(e,t,i){let s=i||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},_t=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Kp,"")}static parseTrackName(e){let t=sm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);rm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=pl;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zv=new Float32Array(1);var pu=new nt,Dr=class{constructor(e,t,i=0,s=1/0){this.ray=new li(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new xs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return pu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pu),this}intersectObject(e,t=!0,i=[]){return ml(e,this,i,t),i.sort(mu),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)ml(e[s],this,i,t);return i.sort(mu),i}};function mu(n,e){return n.distance-e.distance}function ml(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)ml(r[o],e,t,!0)}}var ws=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Xe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ir=class extends hi{constructor(e=10,t=10,i=4473924,s=8947848){i=new He(i),s=new He(s);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,g=-a;d<=t;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);let _=d===r?i:s;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}let h=new xt;h.setAttribute("position",new je(l,3)),h.setAttribute("color",new je(c,3));let u=new Sn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Lr=class extends Rn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function zl(n,e,t,i){let s=om(i);switch(t){case Al:return n*e;case xa:return n*e/s.components*s.byteLength;case va:return n*e/s.components*s.byteLength;case Rl:return n*e*2/s.components*s.byteLength;case ya:return n*e*2/s.components*s.byteLength;case Cl:return n*e*3/s.components*s.byteLength;case en:return n*e*4/s.components*s.byteLength;case Ma:return n*e*4/s.components*s.byteLength;case Fr:case Or:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Br:case zr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ba:case wa:return Math.max(n,16)*Math.max(e,8)/4;case Sa:case Ea:return Math.max(n,8)*Math.max(e,8)/2;case Ta:case Aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Da:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case La:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Na:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Fa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Oa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case za:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ka:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ha:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Va:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ga:case Wa:case qa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Xa:case Ya:return Math.ceil(n/4)*Math.ceil(e/4)*8;case $a:case Za:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function om(n){switch(n){case bn:case bl:return{byteLength:1,components:1};case Ts:case El:case As:return{byteLength:2,components:1};case ga:case _a:return{byteLength:2,components:4};case mi:case ma:case En:return{byteLength:4,components:1};case wl:case Tl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Nd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function cm(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var lm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hm=`#ifdef USE_ALPHAHASH
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
#endif`,um=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mm=`#ifdef USE_AOMAP
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
#endif`,gm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_m=`#ifdef USE_BATCHING
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
#endif`,xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ym=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sm=`#ifdef USE_IRIDESCENCE
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
#endif`,bm=`#ifdef USE_BUMPMAP
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
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Im=`#define PI 3.141592653589793
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
} // validated`,Lm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nm=`vec3 transformedNormal = objectNormal;
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
#endif`,Um=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zm="gl_FragColor = linearToOutputTexel( gl_FragColor );",km=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ym=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$m=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jm=`#ifdef USE_GRADIENTMAP
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
}`,Jm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eg=`uniform bool receiveShadow;
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
#endif`,tg=`#ifdef USE_ENVMAP
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
#endif`,ng=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,og=`PhysicalMaterial material;
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
#endif`,ag=`struct PhysicalMaterial {
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
}`,cg=`
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
#endif`,lg=`#if defined( RE_IndirectDiffuse )
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
#endif`,hg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_g=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xg=`#if defined( USE_POINTS_UV )
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
#endif`,vg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eg=`#ifdef USE_MORPHTARGETS
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
#endif`,wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ag=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dg=`#ifdef USE_NORMALMAP
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
#endif`,Ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Og=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yg=`float getShadowMask() {
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
}`,$g=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zg=`#ifdef USE_SKINNING
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
#endif`,jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jg=`#ifdef USE_SKINNING
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
#endif`,Kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,n0=`#ifdef USE_TRANSMISSION
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
#endif`,i0=`#ifdef USE_TRANSMISSION
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,c0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l0=`uniform sampler2D t2D;
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`#include <common>
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
}`,m0=`#if DEPTH_PACKING == 3200
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
}`,g0=`#define DISTANCE
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
}`,_0=`#define DISTANCE
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`uniform float scale;
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
}`,M0=`uniform vec3 diffuse;
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
}`,S0=`#include <common>
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
}`,b0=`uniform vec3 diffuse;
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
}`,E0=`#define LAMBERT
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
}`,w0=`#define LAMBERT
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
}`,T0=`#define MATCAP
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
}`,A0=`#define MATCAP
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
}`,C0=`#define NORMAL
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
}`,R0=`#define NORMAL
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
}`,P0=`#define PHONG
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
}`,D0=`#define PHONG
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
}`,I0=`#define STANDARD
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
}`,L0=`#define STANDARD
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
}`,N0=`#define TOON
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
}`,U0=`#define TOON
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
}`,F0=`uniform float size;
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
}`,O0=`uniform vec3 diffuse;
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
}`,B0=`#include <common>
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
}`,z0=`uniform vec3 color;
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
}`,k0=`uniform float rotation;
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
}`,H0=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:lm,alphahash_pars_fragment:hm,alphamap_fragment:um,alphamap_pars_fragment:dm,alphatest_fragment:fm,alphatest_pars_fragment:pm,aomap_fragment:mm,aomap_pars_fragment:gm,batching_pars_vertex:_m,batching_vertex:xm,begin_vertex:vm,beginnormal_vertex:ym,bsdfs:Mm,iridescence_fragment:Sm,bumpmap_pars_fragment:bm,clipping_planes_fragment:Em,clipping_planes_pars_fragment:wm,clipping_planes_pars_vertex:Tm,clipping_planes_vertex:Am,color_fragment:Cm,color_pars_fragment:Rm,color_pars_vertex:Pm,color_vertex:Dm,common:Im,cube_uv_reflection_fragment:Lm,defaultnormal_vertex:Nm,displacementmap_pars_vertex:Um,displacementmap_vertex:Fm,emissivemap_fragment:Om,emissivemap_pars_fragment:Bm,colorspace_fragment:zm,colorspace_pars_fragment:km,envmap_fragment:Hm,envmap_common_pars_fragment:Vm,envmap_pars_fragment:Gm,envmap_pars_vertex:Wm,envmap_physical_pars_fragment:tg,envmap_vertex:qm,fog_vertex:Xm,fog_pars_vertex:Ym,fog_fragment:$m,fog_pars_fragment:Zm,gradientmap_pars_fragment:jm,lightmap_pars_fragment:Jm,lights_lambert_fragment:Km,lights_lambert_pars_fragment:Qm,lights_pars_begin:eg,lights_toon_fragment:ng,lights_toon_pars_fragment:ig,lights_phong_fragment:sg,lights_phong_pars_fragment:rg,lights_physical_fragment:og,lights_physical_pars_fragment:ag,lights_fragment_begin:cg,lights_fragment_maps:lg,lights_fragment_end:hg,logdepthbuf_fragment:ug,logdepthbuf_pars_fragment:dg,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:pg,map_fragment:mg,map_pars_fragment:gg,map_particle_fragment:_g,map_particle_pars_fragment:xg,metalnessmap_fragment:vg,metalnessmap_pars_fragment:yg,morphinstance_vertex:Mg,morphcolor_vertex:Sg,morphnormal_vertex:bg,morphtarget_pars_vertex:Eg,morphtarget_vertex:wg,normal_fragment_begin:Tg,normal_fragment_maps:Ag,normal_pars_fragment:Cg,normal_pars_vertex:Rg,normal_vertex:Pg,normalmap_pars_fragment:Dg,clearcoat_normal_fragment_begin:Ig,clearcoat_normal_fragment_maps:Lg,clearcoat_pars_fragment:Ng,iridescence_pars_fragment:Ug,opaque_fragment:Fg,packing:Og,premultiplied_alpha_fragment:Bg,project_vertex:zg,dithering_fragment:kg,dithering_pars_fragment:Hg,roughnessmap_fragment:Vg,roughnessmap_pars_fragment:Gg,shadowmap_pars_fragment:Wg,shadowmap_pars_vertex:qg,shadowmap_vertex:Xg,shadowmask_pars_fragment:Yg,skinbase_vertex:$g,skinning_pars_vertex:Zg,skinning_vertex:jg,skinnormal_vertex:Jg,specularmap_fragment:Kg,specularmap_pars_fragment:Qg,tonemapping_fragment:e0,tonemapping_pars_fragment:t0,transmission_fragment:n0,transmission_pars_fragment:i0,uv_pars_fragment:s0,uv_pars_vertex:r0,uv_vertex:o0,worldpos_vertex:a0,background_vert:c0,background_frag:l0,backgroundCube_vert:h0,backgroundCube_frag:u0,cube_vert:d0,cube_frag:f0,depth_vert:p0,depth_frag:m0,distanceRGBA_vert:g0,distanceRGBA_frag:_0,equirect_vert:x0,equirect_frag:v0,linedashed_vert:y0,linedashed_frag:M0,meshbasic_vert:S0,meshbasic_frag:b0,meshlambert_vert:E0,meshlambert_frag:w0,meshmatcap_vert:T0,meshmatcap_frag:A0,meshnormal_vert:C0,meshnormal_frag:R0,meshphong_vert:P0,meshphong_frag:D0,meshphysical_vert:I0,meshphysical_frag:L0,meshtoon_vert:N0,meshtoon_frag:U0,points_vert:F0,points_frag:O0,shadow_vert:B0,shadow_frag:z0,sprite_vert:k0,sprite_frag:H0},pe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Un={basic:{uniforms:Vt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Vt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new He(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Vt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Vt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Vt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new He(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Vt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Vt([pe.points,pe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Vt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Vt([pe.common,pe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Vt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Vt([pe.sprite,pe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Vt([pe.common,pe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Vt([pe.lights,pe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Un.physical={uniforms:Vt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var ja={r:0,b:0,g:0},Gi=new ln,V0=new nt;function G0(n,e,t,i,s,r,o){let a=new He(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1,b=g(y);b===null?p(a,l):b&&b.isColor&&(p(b,1),x=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,x){let b=g(x);b&&(b.isCubeTexture||b.mapping===Nr)?(h===void 0&&(h=new Oe(new dt(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Vi(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Gi.copy(x.backgroundRotation),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(V0.makeRotationFromEuler(Gi)),h.material.toneMapped=et.getTransfer(b.colorSpace)!==ct,(u!==b||d!==b.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,f=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Oe(new Ht(2,2),new Mn({name:"BackgroundMaterial",uniforms:Vi(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=et.getTransfer(b.colorSpace)!==ct,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,x){y.getRGB(ja,Ul(n)),i.buffers.color.setClear(ja.r,ja.g,ja.b,x,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:m,dispose:S}}function W0(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(M,D,F,k,G){let W=!1,H=u(k,F,D);r!==H&&(r=H,c(r.object)),W=f(M,k,F,G),W&&g(M,k,F,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,x(M,D,F,k),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,D,F){let k=F.wireframe===!0,G=i[M.id];G===void 0&&(G={},i[M.id]=G);let W=G[D.id];W===void 0&&(W={},G[D.id]=W);let H=W[k];return H===void 0&&(H=d(l()),W[k]=H),H}function d(M){let D=[],F=[],k=[];for(let G=0;G<t;G++)D[G]=0,F[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:k,object:M,attributes:{},index:null}}function f(M,D,F,k){let G=r.attributes,W=D.attributes,H=0,ne=F.getAttributes();for(let q in ne)if(ne[q].location>=0){let xe=G[q],Me=W[q];if(Me===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(Me=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(Me=M.instanceColor)),xe===void 0||xe.attribute!==Me||Me&&xe.data!==Me.data)return!0;H++}return r.attributesNum!==H||r.index!==k}function g(M,D,F,k){let G={},W=D.attributes,H=0,ne=F.getAttributes();for(let q in ne)if(ne[q].location>=0){let xe=W[q];xe===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor));let Me={};Me.attribute=xe,xe&&xe.data&&(Me.data=xe.data),G[q]=Me,H++}r.attributes=G,r.attributesNum=H,r.index=k}function _(){let M=r.newAttributes;for(let D=0,F=M.length;D<F;D++)M[D]=0}function m(M){p(M,0)}function p(M,D){let F=r.newAttributes,k=r.enabledAttributes,G=r.attributeDivisors;F[M]=1,k[M]===0&&(n.enableVertexAttribArray(M),k[M]=1),G[M]!==D&&(n.vertexAttribDivisor(M,D),G[M]=D)}function S(){let M=r.newAttributes,D=r.enabledAttributes;for(let F=0,k=D.length;F<k;F++)D[F]!==M[F]&&(n.disableVertexAttribArray(F),D[F]=0)}function y(M,D,F,k,G,W,H){H===!0?n.vertexAttribIPointer(M,D,F,G,W):n.vertexAttribPointer(M,D,F,k,G,W)}function x(M,D,F,k){_();let G=k.attributes,W=F.getAttributes(),H=D.defaultAttributeValues;for(let ne in W){let q=W[ne];if(q.location>=0){let de=G[ne];if(de===void 0&&(ne==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),ne==="instanceColor"&&M.instanceColor&&(de=M.instanceColor)),de!==void 0){let xe=de.normalized,Me=de.itemSize,Ve=e.get(de);if(Ve===void 0)continue;let Je=Ve.buffer,ot=Ve.type,Qe=Ve.bytesPerElement,Y=ot===n.INT||ot===n.UNSIGNED_INT||de.gpuType===ma;if(de.isInterleavedBufferAttribute){let te=de.data,ye=te.stride,De=de.offset;if(te.isInstancedInterleavedBuffer){for(let we=0;we<q.locationSize;we++)p(q.location+we,te.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let we=0;we<q.locationSize;we++)m(q.location+we);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let we=0;we<q.locationSize;we++)y(q.location+we,Me/q.locationSize,ot,xe,ye*Qe,(De+Me/q.locationSize*we)*Qe,Y)}else{if(de.isInstancedBufferAttribute){for(let te=0;te<q.locationSize;te++)p(q.location+te,de.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let te=0;te<q.locationSize;te++)m(q.location+te);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let te=0;te<q.locationSize;te++)y(q.location+te,Me/q.locationSize,ot,xe,Me*Qe,Me/q.locationSize*te*Qe,Y)}}else if(H!==void 0){let xe=H[ne];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(q.location,xe);break;case 3:n.vertexAttrib3fv(q.location,xe);break;case 4:n.vertexAttrib4fv(q.location,xe);break;default:n.vertexAttrib1fv(q.location,xe)}}}}S()}function b(){I();for(let M in i){let D=i[M];for(let F in D){let k=D[F];for(let G in k)h(k[G].object),delete k[G];delete D[F]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;let D=i[M.id];for(let F in D){let k=D[F];for(let G in k)h(k[G].object),delete k[G];delete D[F]}delete i[M.id]}function C(M){for(let D in i){let F=i[D];if(F[M.id]===void 0)continue;let k=F[M.id];for(let G in k)h(k[G].object),delete k[G];delete F[M.id]}}function I(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function q0(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function X0(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==en&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let I=C===As&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==bn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==En&&!I)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:b,maxSamples:T}}function Y0(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Ft,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:i,y=S*4,x=p.clippingState||null;l.value=x,x=h(g,d,y,f);for(let b=0;b!==y;++b)x[b]=t[b];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function $0(n){let e=new WeakMap;function t(o,a){return a===da?o.mapping=zi:a===fa&&(o.mapping=ki),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===da||a===fa)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Oo(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Ds=4,ud=[.125,.215,.35,.446,.526,.582],Xi=20,kl=new Pr,dd=new He,Hl=null,Vl=0,Gl=0,Wl=!1,qi=(1+Math.sqrt(5))/2,Ps=1/qi,fd=[new R(-qi,Ps,0),new R(qi,Ps,0),new R(-Ps,0,qi),new R(Ps,0,qi),new R(0,qi,-Ps),new R(0,qi,Ps),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Z0=new R,Qa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=Z0}=r;Hl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hl,Vl,Gl),this._renderer.xr.enabled=Wl,e.scissorTest=!1,Ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zi||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:As,format:en,colorSpace:Ii,depthBuffer:!1},s=pd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pd(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=j0(r)),this._blurMaterial=J0(r,e,t)}return s}_compileMaterial(e){let t=new Oe(this._lodPlanes[0],e);this._renderer.compile(t,kl)}_sceneToCubeUV(e,t,i,s,r){let l=new kt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(dd),u.toneMapping=Jn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new Nt({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),m=new Oe(new dt,_),p=!1,S=e.background;S?S.isColor&&(_.color.copy(S),e.background=null,p=!0):(_.color.copy(dd),p=!0);for(let y=0;y<6;y++){let x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));let b=this._cubeSize;Ja(s,x*b,y>2?b:0,b,b),u.setRenderTarget(s),p&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=S}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===zi||e.mapping===ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=md());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Oe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ja(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,kl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fd[(s-r-1)%fd.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Oe(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Xi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Xi;m>Xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);let p=[],S=0;for(let C=0;C<Xi;++C){let I=C/_,w=Math.exp(-I*I/2);p.push(w),C===0?S+=w:C<m&&(S+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;let x=this._sizeLods[s],b=3*x*(s>y-Ds?s-y+Ds:0),T=4*(this._cubeSize-x);Ja(t,b,T,3*x,2*x),l.setRenderTarget(t),l.render(u,kl)}};function j0(n){let e=[],t=[],i=[],s=n,r=n-Ds+1+ud.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Ds?l=ud[o-n+Ds-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let T=0;T<f;T++){let C=T%3*2/3-1,I=T>2?0:-1,w=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];S.set(w,_*g*T),y.set(d,m*g*T);let M=[T,T,T,T,T,T];x.set(M,p*g*T)}let b=new xt;b.setAttribute("position",new Jt(S,_)),b.setAttribute("uv",new Jt(y,m)),b.setAttribute("faceIndex",new Jt(x,p)),e.push(b),s>Ds&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function pd(n,e,t){let i=new Pn(n,e,t);return i.texture.mapping=Nr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ja(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function J0(n,e,t){let i=new Float32Array(Xi),s=new R(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:eh(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function md(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eh(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function gd(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function eh(){return`

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
	`}function K0(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===da||l===fa,h=l===zi||l===ki;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Qa(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Qa(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Q0(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&gs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function e_(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let S=f.array;_=f.version;for(let y=0,x=S.length;y<x;y+=3){let b=S[y+0],T=S[y+1],C=S[y+2];d.push(b,T,T,C,C,b)}}else if(g!==void 0){let S=g.array;_=g.version;for(let y=0,x=S.length/3-1;y<x;y+=3){let b=y+0,T=y+1,C=y+2;d.push(b,T,T,C,C,b)}}else return;let m=new(Nl(d)?sr:ir)(d,1);m.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function t_(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),t.update(f,i,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function u(d,f,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*_[S];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function n_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function i_(n,e,t){let i=new WeakMap,s=new Et;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let w=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,b=1;x>e.maxTextureSize&&(b=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let T=new Float32Array(x*b*4*u),C=new nr(T,x,b,u);C.type=En,C.needsUpdate=!0;let I=y*4;for(let M=0;M<u;M++){let D=m[M],F=p[M],k=S[M],G=x*b*4*M;for(let W=0;W<D.count;W++){let H=W*I;f===!0&&(s.fromBufferAttribute(D,W),T[G+H+0]=s.x,T[G+H+1]=s.y,T[G+H+2]=s.z,T[G+H+3]=0),g===!0&&(s.fromBufferAttribute(F,W),T[G+H+4]=s.x,T[G+H+5]=s.y,T[G+H+6]=s.z,T[G+H+7]=0),_===!0&&(s.fromBufferAttribute(k,W),T[G+H+8]=s.x,T[G+H+9]=s.y,T[G+H+10]=s.z,T[G+H+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new ie(x,b)},i.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function s_(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Ud=new Xt,_d=new ur(1,1),Fd=new nr,Od=new Uo,Bd=new or,xd=[],vd=[],yd=new Float32Array(16),Md=new Float32Array(9),Sd=new Float32Array(4);function Ls(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=xd[s];if(r===void 0&&(r=new Float32Array(s),xd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function tc(n,e){let t=vd[e];t===void 0&&(t=new Int32Array(e),vd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function r_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function o_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function a_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function c_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function l_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;Sd.set(i),n.uniformMatrix2fv(this.addr,!1,Sd),Pt(t,i)}}function h_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;Md.set(i),n.uniformMatrix3fv(this.addr,!1,Md),Pt(t,i)}}function u_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;yd.set(i),n.uniformMatrix4fv(this.addr,!1,yd),Pt(t,i)}}function d_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function f_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function p_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function m_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function g_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function __(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function x_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function v_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function y_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(_d.compareFunction=Dl,r=_d):r=Ud,t.setTexture2D(e||r,s)}function M_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Od,s)}function S_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Bd,s)}function b_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Fd,s)}function E_(n){switch(n){case 5126:return r_;case 35664:return o_;case 35665:return a_;case 35666:return c_;case 35674:return l_;case 35675:return h_;case 35676:return u_;case 5124:case 35670:return d_;case 35667:case 35671:return f_;case 35668:case 35672:return p_;case 35669:case 35673:return m_;case 5125:return g_;case 36294:return __;case 36295:return x_;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return y_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return S_;case 36289:case 36303:case 36311:case 36292:return b_}}function w_(n,e){n.uniform1fv(this.addr,e)}function T_(n,e){let t=Ls(e,this.size,2);n.uniform2fv(this.addr,t)}function A_(n,e){let t=Ls(e,this.size,3);n.uniform3fv(this.addr,t)}function C_(n,e){let t=Ls(e,this.size,4);n.uniform4fv(this.addr,t)}function R_(n,e){let t=Ls(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function P_(n,e){let t=Ls(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function D_(n,e){let t=Ls(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function I_(n,e){n.uniform1iv(this.addr,e)}function L_(n,e){n.uniform2iv(this.addr,e)}function N_(n,e){n.uniform3iv(this.addr,e)}function U_(n,e){n.uniform4iv(this.addr,e)}function F_(n,e){n.uniform1uiv(this.addr,e)}function O_(n,e){n.uniform2uiv(this.addr,e)}function B_(n,e){n.uniform3uiv(this.addr,e)}function z_(n,e){n.uniform4uiv(this.addr,e)}function k_(n,e,t){let i=this.cache,s=e.length,r=tc(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ud,r[o])}function H_(n,e,t){let i=this.cache,s=e.length,r=tc(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Od,r[o])}function V_(n,e,t){let i=this.cache,s=e.length,r=tc(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Bd,r[o])}function G_(n,e,t){let i=this.cache,s=e.length,r=tc(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Fd,r[o])}function W_(n){switch(n){case 5126:return w_;case 35664:return T_;case 35665:return A_;case 35666:return C_;case 35674:return R_;case 35675:return P_;case 35676:return D_;case 5124:case 35670:return I_;case 35667:case 35671:return L_;case 35668:case 35672:return N_;case 35669:case 35673:return U_;case 5125:return F_;case 36294:return O_;case 36295:return B_;case 36296:return z_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return H_;case 35680:case 36300:case 36308:case 36293:return V_;case 36289:case 36303:case 36311:case 36292:return G_}}var Xl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=E_(t.type)}},Yl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=W_(t.type)}},$l=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},ql=/(\w+)(\])?(\[|\.)?/g;function bd(n,e){n.seq.push(e),n.map[e.id]=e}function q_(n,e,t){let i=n.name,s=i.length;for(ql.lastIndex=0;;){let r=ql.exec(i),o=ql.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){bd(t,c===void 0?new Xl(a,n,e):new Yl(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new $l(a),bd(t,u)),t=u}}}var Is=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);q_(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Ed(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var X_=37297,Y_=0;function $_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var wd=new Ge;function Z_(n){et._getMatrix(wd,et.workingColorSpace,n);let e=`mat3( ${wd.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case Qs:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Td(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+$_(n.getShaderSource(e),a)}else return r}function j_(n,e){let t=Z_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function J_(n,e){let t;switch(e){case zu:t="Linear";break;case ku:t="Reinhard";break;case Hu:t="Cineon";break;case ua:t="ACESFilmic";break;case Gu:t="AgX";break;case Wu:t="Neutral";break;case Vu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ka=new R;function K_(){et.getLuminanceCoefficients(Ka);let n=Ka.x.toFixed(4),e=Ka.y.toFixed(4),t=Ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function ex(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function tx(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Hr(n){return n!==""}function Ad(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(n){return n.replace(nx,sx)}var ix=new Map;function sx(n,e){let t=Ye[e];if(t===void 0){let i=ix.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zl(t)}var rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rd(n){return n.replace(rx,ox)}function ox(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function ax(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===_l?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===xu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ln&&(e="SHADOWMAP_TYPE_VSM"),e}function cx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case zi:case ki:e="ENVMAP_TYPE_CUBE";break;case Nr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ki:e="ENVMAP_MODE_REFRACTION";break}return e}function hx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ml:e="ENVMAP_BLENDING_MULTIPLY";break;case Ou:e="ENVMAP_BLENDING_MIX";break;case Bu:e="ENVMAP_BLENDING_ADD";break}return e}function ux(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function dx(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=ax(t),c=cx(t),h=lx(t),u=hx(t),d=ux(t),f=Q_(t),g=ex(r),_=s.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hr).join(`
`),p.length>0&&(p+=`
`)):(m=[Pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),p=[Pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Jn?J_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,j_("linearToOutputTexel",t.outputColorSpace),K_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hr).join(`
`)),o=Zl(o),o=Ad(o,t),o=Cd(o,t),a=Zl(a),a=Ad(a,t),a=Cd(a,t),o=Rd(o),a=Rd(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=S+m+o,x=S+p+a,b=Ed(s,s.VERTEX_SHADER,y),T=Ed(s,s.FRAGMENT_SHADER,x);s.attachShader(_,b),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(D){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(b)||"",G=s.getShaderInfoLog(T)||"",W=F.trim(),H=k.trim(),ne=G.trim(),q=!0,de=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,b,T);else{let xe=Td(s,b,"vertex"),Me=Td(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+xe+`
`+Me)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(H===""||ne==="")&&(de=!1);de&&(D.diagnostics={runnable:q,programLog:W,vertexShader:{log:H,prefix:m},fragmentShader:{log:ne,prefix:p}})}s.deleteShader(b),s.deleteShader(T),I=new Is(s,_),w=tx(s,_)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,X_)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Y_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=T,this}var fx=0,jl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Jl(e),t.set(e,i)),i}},Jl=class{constructor(e){this.id=fx++,this.code=e,this.usedTimes=0}};function px(n,e,t,i,s,r,o){let a=new xs,l=new jl,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,D,F,k){let G=F.fog,W=k.geometry,H=w.isMeshStandardMaterial?F.environment:null,ne=(w.isMeshStandardMaterial?t:e).get(w.envMap||H),q=ne&&ne.mapping===Nr?ne.image.height:null,de=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let xe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Me=xe!==void 0?xe.length:0,Ve=0;W.morphAttributes.position!==void 0&&(Ve=1),W.morphAttributes.normal!==void 0&&(Ve=2),W.morphAttributes.color!==void 0&&(Ve=3);let Je,ot,Qe,Y;if(de){let it=Un[de];Je=it.vertexShader,ot=it.fragmentShader}else Je=w.vertexShader,ot=w.fragmentShader,l.update(w),Qe=l.getVertexShaderID(w),Y=l.getFragmentShaderID(w);let te=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),De=k.isInstancedMesh===!0,we=k.isBatchedMesh===!0,$e=!!w.map,ft=!!w.matcap,P=!!ne,ee=!!w.aoMap,j=!!w.lightMap,Z=!!w.bumpMap,$=!!w.normalMap,he=!!w.displacementMap,se=!!w.emissiveMap,ue=!!w.metalnessMap,ze=!!w.roughnessMap,Be=w.anisotropy>0,A=w.clearcoat>0,v=w.dispersion>0,O=w.iridescence>0,V=w.sheen>0,Q=w.transmission>0,X=Be&&!!w.anisotropyMap,Re=A&&!!w.clearcoatMap,le=A&&!!w.clearcoatNormalMap,Te=A&&!!w.clearcoatRoughnessMap,Ae=O&&!!w.iridescenceMap,re=O&&!!w.iridescenceThicknessMap,_e=V&&!!w.sheenColorMap,Ue=V&&!!w.sheenRoughnessMap,Pe=!!w.specularMap,me=!!w.specularColorMap,We=!!w.specularIntensityMap,L=Q&&!!w.transmissionMap,ce=Q&&!!w.thicknessMap,fe=!!w.gradientMap,Se=!!w.alphaMap,oe=w.alphaTest>0,J=!!w.alphaHash,Ce=!!w.extensions,ke=Jn;w.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ke=n.toneMapping);let pt={shaderID:de,shaderType:w.type,shaderName:w.name,vertexShader:Je,fragmentShader:ot,defines:w.defines,customVertexShaderID:Qe,customFragmentShaderID:Y,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:we,batchingColor:we&&k._colorsTexture!==null,instancing:De,instancingColor:De&&k.instanceColor!==null,instancingMorph:De&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ii,alphaToCoverage:!!w.alphaToCoverage,map:$e,matcap:ft,envMap:P,envMapMode:P&&ne.mapping,envMapCubeUVHeight:q,aoMap:ee,lightMap:j,bumpMap:Z,normalMap:$,displacementMap:d&&he,emissiveMap:se,normalMapObjectSpace:$&&w.normalMapType===$u,normalMapTangentSpace:$&&w.normalMapType===Pl,metalnessMap:ue,roughnessMap:ze,anisotropy:Be,anisotropyMap:X,clearcoat:A,clearcoatMap:Re,clearcoatNormalMap:le,clearcoatRoughnessMap:Te,dispersion:v,iridescence:O,iridescenceMap:Ae,iridescenceThicknessMap:re,sheen:V,sheenColorMap:_e,sheenRoughnessMap:Ue,specularMap:Pe,specularColorMap:me,specularIntensityMap:We,transmission:Q,transmissionMap:L,thicknessMap:ce,gradientMap:fe,opaque:w.transparent===!1&&w.blending===Pi&&w.alphaToCoverage===!1,alphaMap:Se,alphaTest:oe,alphaHash:J,combine:w.combine,mapUv:$e&&_(w.map.channel),aoMapUv:ee&&_(w.aoMap.channel),lightMapUv:j&&_(w.lightMap.channel),bumpMapUv:Z&&_(w.bumpMap.channel),normalMapUv:$&&_(w.normalMap.channel),displacementMapUv:he&&_(w.displacementMap.channel),emissiveMapUv:se&&_(w.emissiveMap.channel),metalnessMapUv:ue&&_(w.metalnessMap.channel),roughnessMapUv:ze&&_(w.roughnessMap.channel),anisotropyMapUv:X&&_(w.anisotropyMap.channel),clearcoatMapUv:Re&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&_(w.sheenRoughnessMap.channel),specularMapUv:Pe&&_(w.specularMap.channel),specularColorMapUv:me&&_(w.specularColorMap.channel),specularIntensityMapUv:We&&_(w.specularIntensityMap.channel),transmissionMapUv:L&&_(w.transmissionMap.channel),thicknessMapUv:ce&&_(w.thicknessMap.channel),alphaMapUv:Se&&_(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&($||Be),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!W.attributes.uv&&($e||Se),fog:!!G,useFog:w.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:k.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ve,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:$e&&w.map.isVideoTexture===!0&&et.getTransfer(w.map.colorSpace)===ct,decodeVideoTextureEmissive:se&&w.emissiveMap.isVideoTexture===!0&&et.getTransfer(w.emissiveMap.colorSpace)===ct,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===vt,flipSided:w.side===Yt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ce&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&w.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function p(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let D in w.defines)M.push(D),M.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(S(M,w),y(M,w),M.push(n.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function S(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function y(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){let M=g[w.type],D;if(M){let F=Un[M];D=rd.clone(F.uniforms)}else D=w.uniforms;return D}function b(w,M){let D;for(let F=0,k=h.length;F<k;F++){let G=h[F];if(G.cacheKey===M){D=G,++D.usedTimes;break}}return D===void 0&&(D=new dx(n,M,w,r),h.push(D)),D}function T(w){if(--w.usedTimes===0){let M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function C(w){l.remove(w)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:b,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:I}}function mx(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function gx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Dd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Id(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,f,g,_,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||gx),i.length>1&&i.sort(d||Dd),s.length>1&&s.sort(d||Dd)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function _x(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Id,n.set(i,[o])):s>=r.length?(o=new Id,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function xx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new He};break;case"SpotLight":t={position:new R,direction:new R,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function vx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var yx=0;function Mx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Sx(n){let e=new xx,t=vx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);let s=new R,r=new nt,o=new nt;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,S=0,y=0,x=0,b=0,T=0,C=0;c.sort(Mx);for(let w=0,M=c.length;w<M;w++){let D=c[w],F=D.color,k=D.intensity,G=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=F.r*k,u+=F.g*k,d+=F.b*k;else if(D.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(D.sh.coefficients[H],k);C++}else if(D.isDirectionalLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ne=D.shadow,q=t.get(D);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,i.directionalShadow[f]=q,i.directionalShadowMap[f]=W,i.directionalShadowMatrix[f]=D.shadow.matrix,S++}i.directional[f]=H,f++}else if(D.isSpotLight){let H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(F).multiplyScalar(k),H.distance=G,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,i.spot[_]=H;let ne=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,ne.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[_]=ne.matrix,D.castShadow){let q=t.get(D);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=W,x++}_++}else if(D.isRectAreaLight){let H=e.get(D);H.color.copy(F).multiplyScalar(k),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=H,m++}else if(D.isPointLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){let ne=D.shadow,q=t.get(D);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,q.shadowCameraNear=ne.camera.near,q.shadowCameraFar=ne.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=D.shadow.matrix,y++}i.point[g]=H,g++}else if(D.isHemisphereLight){let H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(k),H.groundColor.copy(D.groundColor).multiplyScalar(k),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let I=i.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==S||I.numPointShadows!==y||I.numSpotShadows!==x||I.numSpotMaps!==b||I.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+b-T,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=S,I.numPointShadows=y,I.numSpotShadows=x,I.numSpotMaps=b,I.numLightProbes=C,i.version=yx++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let y=c[p];if(y.isDirectionalLight){let x=i.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(y.isSpotLight){let x=i.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let x=i.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let x=i.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Ld(n){let e=new Sx(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function bx(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Ld(n),e.set(s,[a])):r>=o.length?(a=new Ld(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wx=`uniform sampler2D shadow_pass;
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
}`;function Tx(n,e,t){let i=new Ms,s=new ie,r=new ie,o=new Et,a=new Xo({depthPacking:Yu}),l=new Yo,c={},h=t.maxTextureSize,u={[Xn]:Yt,[Yt]:Xn,[vt]:vt},d=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:Ex,fragmentShader:wx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new xt;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Oe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_l;let p=this.type;this.render=function(T,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let w=n.getRenderTarget(),M=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),F=n.state;F.setBlending(jn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=p!==Ln&&this.type===Ln,G=p===Ln&&this.type!==Ln;for(let W=0,H=T.length;W<H;W++){let ne=T[W],q=ne.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let de=q.getFrameExtents();if(s.multiply(de),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/de.x),s.x=r.x*de.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/de.y),s.y=r.y*de.y,q.mapSize.y=r.y)),q.map===null||k===!0||G===!0){let Me=this.type!==Ln?{minFilter:Kt,magFilter:Kt}:{};q.map!==null&&q.map.dispose(),q.map=new Pn(s.x,s.y,Me),q.map.texture.name=ne.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let xe=q.getViewportCount();for(let Me=0;Me<xe;Me++){let Ve=q.getViewport(Me);o.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),F.viewport(o),q.updateMatrices(ne,Me),i=q.getFrustum(),x(C,I,q.camera,ne,this.type)}q.isPointLightShadow!==!0&&this.type===Ln&&S(q,I),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,M,D)};function S(T,C){let I=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Pn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(C,null,I,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(C,null,I,f,_,null)}function y(T,C,I,w){let M=null,D=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)M=D;else if(M=I.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let F=M.uuid,k=C.uuid,G=c[F];G===void 0&&(G={},c[F]=G);let W=G[k];W===void 0&&(W=M.clone(),G[k]=W,C.addEventListener("dispose",b)),M=W}if(M.visible=C.visible,M.wireframe=C.wireframe,w===Ln?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let F=n.properties.get(M);F.light=I}return M}function x(T,C,I,w,M){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Ln)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let k=e.update(T),G=T.material;if(Array.isArray(G)){let W=k.groups;for(let H=0,ne=W.length;H<ne;H++){let q=W[H],de=G[q.materialIndex];if(de&&de.visible){let xe=y(T,de,w,M);T.onBeforeShadow(n,T,C,I,k,xe,q),n.renderBufferDirect(I,null,k,xe,T,q),T.onAfterShadow(n,T,C,I,k,xe,q)}}}else if(G.visible){let W=y(T,G,w,M);T.onBeforeShadow(n,T,C,I,k,W,null),n.renderBufferDirect(I,null,k,W,T,null),T.onAfterShadow(n,T,C,I,k,W,null)}}let F=T.children;for(let k=0,G=F.length;k<G;k++)x(F[k],C,I,w,M)}function b(T){T.target.removeEventListener("dispose",b);for(let I in c){let w=c[I],M=T.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var Ax={[sa]:ra,[oa]:la,[aa]:ha,[Di]:ca,[ra]:sa,[la]:oa,[ha]:aa,[ca]:Di};function Cx(n,e){function t(){let L=!1,ce=new Et,fe=null,Se=new Et(0,0,0,0);return{setMask:function(oe){fe!==oe&&!L&&(n.colorMask(oe,oe,oe,oe),fe=oe)},setLocked:function(oe){L=oe},setClear:function(oe,J,Ce,ke,pt){pt===!0&&(oe*=ke,J*=ke,Ce*=ke),ce.set(oe,J,Ce,ke),Se.equals(ce)===!1&&(n.clearColor(oe,J,Ce,ke),Se.copy(ce))},reset:function(){L=!1,fe=null,Se.set(-1,0,0,0)}}}function i(){let L=!1,ce=!1,fe=null,Se=null,oe=null;return{setReversed:function(J){if(ce!==J){let Ce=e.get("EXT_clip_control");J?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ce=J;let ke=oe;oe=null,this.setClear(ke)}},getReversed:function(){return ce},setTest:function(J){J?te(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(J){fe!==J&&!L&&(n.depthMask(J),fe=J)},setFunc:function(J){if(ce&&(J=Ax[J]),Se!==J){switch(J){case sa:n.depthFunc(n.NEVER);break;case ra:n.depthFunc(n.ALWAYS);break;case oa:n.depthFunc(n.LESS);break;case Di:n.depthFunc(n.LEQUAL);break;case aa:n.depthFunc(n.EQUAL);break;case ca:n.depthFunc(n.GEQUAL);break;case la:n.depthFunc(n.GREATER);break;case ha:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=J}},setLocked:function(J){L=J},setClear:function(J){oe!==J&&(ce&&(J=1-J),n.clearDepth(J),oe=J)},reset:function(){L=!1,fe=null,Se=null,oe=null,ce=!1}}}function s(){let L=!1,ce=null,fe=null,Se=null,oe=null,J=null,Ce=null,ke=null,pt=null;return{setTest:function(it){L||(it?te(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(it){ce!==it&&!L&&(n.stencilMask(it),ce=it)},setFunc:function(it,Bn,Tn){(fe!==it||Se!==Bn||oe!==Tn)&&(n.stencilFunc(it,Bn,Tn),fe=it,Se=Bn,oe=Tn)},setOp:function(it,Bn,Tn){(J!==it||Ce!==Bn||ke!==Tn)&&(n.stencilOp(it,Bn,Tn),J=it,Ce=Bn,ke=Tn)},setLocked:function(it){L=it},setClear:function(it){pt!==it&&(n.clearStencil(it),pt=it)},reset:function(){L=!1,ce=null,fe=null,Se=null,oe=null,J=null,Ce=null,ke=null,pt=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,y=null,x=null,b=null,T=null,C=new He(0,0,0),I=0,w=!1,M=null,D=null,F=null,k=null,G=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,ne=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=ne>=1):q.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=ne>=2);let de=null,xe={},Me=n.getParameter(n.SCISSOR_BOX),Ve=n.getParameter(n.VIEWPORT),Je=new Et().fromArray(Me),ot=new Et().fromArray(Ve);function Qe(L,ce,fe,Se){let oe=new Uint8Array(4),J=n.createTexture();n.bindTexture(L,J),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ce=0;Ce<fe;Ce++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(ce+Ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return J}let Y={};Y[n.TEXTURE_2D]=Qe(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=Qe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=Qe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=Qe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(n.DEPTH_TEST),o.setFunc(Di),Z(!1),$(gl),te(n.CULL_FACE),ee(jn);function te(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function ye(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function De(L,ce){return u[L]!==ce?(n.bindFramebuffer(L,ce),u[L]=ce,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ce),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function we(L,ce){let fe=f,Se=!1;if(L){fe=d.get(ce),fe===void 0&&(fe=[],d.set(ce,fe));let oe=L.textures;if(fe.length!==oe.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let J=0,Ce=oe.length;J<Ce;J++)fe[J]=n.COLOR_ATTACHMENT0+J;fe.length=oe.length,Se=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,Se=!0);Se&&n.drawBuffers(fe)}function $e(L){return g!==L?(n.useProgram(L),g=L,!0):!1}let ft={[ci]:n.FUNC_ADD,[yu]:n.FUNC_SUBTRACT,[Mu]:n.FUNC_REVERSE_SUBTRACT};ft[Su]=n.MIN,ft[bu]=n.MAX;let P={[Eu]:n.ZERO,[wu]:n.ONE,[Tu]:n.SRC_COLOR,[Co]:n.SRC_ALPHA,[Iu]:n.SRC_ALPHA_SATURATE,[Pu]:n.DST_COLOR,[Cu]:n.DST_ALPHA,[Au]:n.ONE_MINUS_SRC_COLOR,[Ro]:n.ONE_MINUS_SRC_ALPHA,[Du]:n.ONE_MINUS_DST_COLOR,[Ru]:n.ONE_MINUS_DST_ALPHA,[Lu]:n.CONSTANT_COLOR,[Nu]:n.ONE_MINUS_CONSTANT_COLOR,[Uu]:n.CONSTANT_ALPHA,[Fu]:n.ONE_MINUS_CONSTANT_ALPHA};function ee(L,ce,fe,Se,oe,J,Ce,ke,pt,it){if(L===jn){_===!0&&(ye(n.BLEND),_=!1);return}if(_===!1&&(te(n.BLEND),_=!0),L!==vu){if(L!==m||it!==w){if((p!==ci||x!==ci)&&(n.blendEquation(n.FUNC_ADD),p=ci,x=ci),it)switch(L){case Pi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xl:n.blendFunc(n.ONE,n.ONE);break;case vl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Pi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case vl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,y=null,b=null,T=null,C.set(0,0,0),I=0,m=L,w=it}return}oe=oe||ce,J=J||fe,Ce=Ce||Se,(ce!==p||oe!==x)&&(n.blendEquationSeparate(ft[ce],ft[oe]),p=ce,x=oe),(fe!==S||Se!==y||J!==b||Ce!==T)&&(n.blendFuncSeparate(P[fe],P[Se],P[J],P[Ce]),S=fe,y=Se,b=J,T=Ce),(ke.equals(C)===!1||pt!==I)&&(n.blendColor(ke.r,ke.g,ke.b,pt),C.copy(ke),I=pt),m=L,w=!1}function j(L,ce){L.side===vt?ye(n.CULL_FACE):te(n.CULL_FACE);let fe=L.side===Yt;ce&&(fe=!fe),Z(fe),L.blending===Pi&&L.transparent===!1?ee(jn):ee(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let Se=L.stencilWrite;a.setTest(Se),Se&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),se(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function Z(L){M!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),M=L)}function $(L){L!==gu?(te(n.CULL_FACE),L!==D&&(L===gl?n.cullFace(n.BACK):L===_u?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),D=L}function he(L){L!==F&&(H&&n.lineWidth(L),F=L)}function se(L,ce,fe){L?(te(n.POLYGON_OFFSET_FILL),(k!==ce||G!==fe)&&(n.polygonOffset(ce,fe),k=ce,G=fe)):ye(n.POLYGON_OFFSET_FILL)}function ue(L){L?te(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function ze(L){L===void 0&&(L=n.TEXTURE0+W-1),de!==L&&(n.activeTexture(L),de=L)}function Be(L,ce,fe){fe===void 0&&(de===null?fe=n.TEXTURE0+W-1:fe=de);let Se=xe[fe];Se===void 0&&(Se={type:void 0,texture:void 0},xe[fe]=Se),(Se.type!==L||Se.texture!==ce)&&(de!==fe&&(n.activeTexture(fe),de=fe),n.bindTexture(L,ce||Y[L]),Se.type=L,Se.texture=ce)}function A(){let L=xe[de];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{n.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{n.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{n.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{n.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{n.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{n.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{n.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(L){Je.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Je.copy(L))}function Ue(L){ot.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),ot.copy(L))}function Pe(L,ce){let fe=c.get(ce);fe===void 0&&(fe=new WeakMap,c.set(ce,fe));let Se=fe.get(L);Se===void 0&&(Se=n.getUniformBlockIndex(ce,L.name),fe.set(L,Se))}function me(L,ce){let Se=c.get(ce).get(L);l.get(ce)!==Se&&(n.uniformBlockBinding(ce,Se,L.__bindingPointIndex),l.set(ce,Se))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},de=null,xe={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,y=null,x=null,b=null,T=null,C=new He(0,0,0),I=0,w=!1,M=null,D=null,F=null,k=null,G=null,Je.set(0,0,n.canvas.width,n.canvas.height),ot.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:te,disable:ye,bindFramebuffer:De,drawBuffers:we,useProgram:$e,setBlending:ee,setMaterial:j,setFlipSided:Z,setCullFace:$,setLineWidth:he,setPolygonOffset:se,setScissorTest:ue,activeTexture:ze,bindTexture:Be,unbindTexture:A,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:Ae,texImage3D:re,updateUBOMapping:Pe,uniformBlockBinding:me,texStorage2D:le,texStorage3D:Te,texSubImage2D:V,texSubImage3D:Q,compressedTexSubImage2D:X,compressedTexSubImage3D:Re,scissor:_e,viewport:Ue,reset:We}}function Rx(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return f?new OffscreenCanvas(A,v):tr("canvas")}function _(A,v,O){let V=1,Q=Be(A);if((Q.width>O||Q.height>O)&&(V=O/Math.max(Q.width,Q.height)),V<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let X=Math.floor(V*Q.width),Re=Math.floor(V*Q.height);u===void 0&&(u=g(X,Re));let le=v?g(X,Re):u;return le.width=X,le.height=Re,le.getContext("2d").drawImage(A,0,0,X,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+X+"x"+Re+")."),le}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(A,v,O,V,Q=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=v;if(v===n.RED&&(O===n.FLOAT&&(X=n.R32F),O===n.HALF_FLOAT&&(X=n.R16F),O===n.UNSIGNED_BYTE&&(X=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(X=n.R8UI),O===n.UNSIGNED_SHORT&&(X=n.R16UI),O===n.UNSIGNED_INT&&(X=n.R32UI),O===n.BYTE&&(X=n.R8I),O===n.SHORT&&(X=n.R16I),O===n.INT&&(X=n.R32I)),v===n.RG&&(O===n.FLOAT&&(X=n.RG32F),O===n.HALF_FLOAT&&(X=n.RG16F),O===n.UNSIGNED_BYTE&&(X=n.RG8)),v===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(X=n.RG8UI),O===n.UNSIGNED_SHORT&&(X=n.RG16UI),O===n.UNSIGNED_INT&&(X=n.RG32UI),O===n.BYTE&&(X=n.RG8I),O===n.SHORT&&(X=n.RG16I),O===n.INT&&(X=n.RG32I)),v===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(X=n.RGB8UI),O===n.UNSIGNED_SHORT&&(X=n.RGB16UI),O===n.UNSIGNED_INT&&(X=n.RGB32UI),O===n.BYTE&&(X=n.RGB8I),O===n.SHORT&&(X=n.RGB16I),O===n.INT&&(X=n.RGB32I)),v===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),O===n.UNSIGNED_INT&&(X=n.RGBA32UI),O===n.BYTE&&(X=n.RGBA8I),O===n.SHORT&&(X=n.RGBA16I),O===n.INT&&(X=n.RGBA32I)),v===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),v===n.RGBA){let Re=Q?Qs:et.getTransfer(V);O===n.FLOAT&&(X=n.RGBA32F),O===n.HALF_FLOAT&&(X=n.RGBA16F),O===n.UNSIGNED_BYTE&&(X=Re===ct?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(A,v){let O;return A?v===null||v===mi||v===Cs?O=n.DEPTH24_STENCIL8:v===En?O=n.DEPTH32F_STENCIL8:v===Ts&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===mi||v===Cs?O=n.DEPTH_COMPONENT24:v===En?O=n.DEPTH_COMPONENT32F:v===Ts&&(O=n.DEPTH_COMPONENT16),O}function b(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Kt&&A.minFilter!==cn?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function T(A){let v=A.target;v.removeEventListener("dispose",T),I(v),v.isVideoTexture&&h.delete(v)}function C(A){let v=A.target;v.removeEventListener("dispose",C),M(v)}function I(A){let v=i.get(A);if(v.__webglInit===void 0)return;let O=A.source,V=d.get(O);if(V){let Q=V[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(A),Object.keys(V).length===0&&d.delete(O)}i.remove(A)}function w(A){let v=i.get(A);n.deleteTexture(v.__webglTexture);let O=A.source,V=d.get(O);delete V[v.__cacheKey],o.memory.textures--}function M(A){let v=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let Q=0;Q<v.__webglFramebuffer[V].length;Q++)n.deleteFramebuffer(v.__webglFramebuffer[V][Q]);else n.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)n.deleteFramebuffer(v.__webglFramebuffer[V]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=A.textures;for(let V=0,Q=O.length;V<Q;V++){let X=i.get(O[V]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(O[V])}i.remove(A)}let D=0;function F(){D=0}function k(){let A=D;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),D+=1,A}function G(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function W(A,v){let O=i.get(A);if(A.isVideoTexture&&ue(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){let V=A.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,A,v);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function H(A,v){let O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Y(O,A,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function ne(A,v){let O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Y(O,A,v);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function q(A,v){let O=i.get(A);if(A.version>0&&O.__version!==A.version){te(O,A,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}let de={[Po]:n.REPEAT,[ai]:n.CLAMP_TO_EDGE,[Do]:n.MIRRORED_REPEAT},xe={[Kt]:n.NEAREST,[qu]:n.NEAREST_MIPMAP_NEAREST,[Ur]:n.NEAREST_MIPMAP_LINEAR,[cn]:n.LINEAR,[pa]:n.LINEAR_MIPMAP_NEAREST,[Nn]:n.LINEAR_MIPMAP_LINEAR},Me={[Zu]:n.NEVER,[td]:n.ALWAYS,[ju]:n.LESS,[Dl]:n.LEQUAL,[Ju]:n.EQUAL,[ed]:n.GEQUAL,[Ku]:n.GREATER,[Qu]:n.NOTEQUAL};function Ve(A,v){if(v.type===En&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===cn||v.magFilter===pa||v.magFilter===Ur||v.magFilter===Nn||v.minFilter===cn||v.minFilter===pa||v.minFilter===Ur||v.minFilter===Nn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,de[v.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,de[v.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,de[v.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,xe[v.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,xe[v.minFilter]),v.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Me[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Kt||v.minFilter!==Ur&&v.minFilter!==Nn||v.type===En&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Je(A,v){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",T));let V=v.source,Q=d.get(V);Q===void 0&&(Q={},d.set(V,Q));let X=G(v);if(X!==A.__cacheKey){Q[X]===void 0&&(Q[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[X].usedTimes++;let Re=Q[A.__cacheKey];Re!==void 0&&(Q[A.__cacheKey].usedTimes--,Re.usedTimes===0&&w(v)),A.__cacheKey=X,A.__webglTexture=Q[X].texture}return O}function ot(A,v,O){return Math.floor(Math.floor(A/O)/v)}function Qe(A,v,O,V){let X=A.updateRanges;if(X.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,O,V,v.data);else{X.sort((re,_e)=>re.start-_e.start);let Re=0;for(let re=1;re<X.length;re++){let _e=X[Re],Ue=X[re],Pe=_e.start+_e.count,me=ot(Ue.start,v.width,4),We=ot(_e.start,v.width,4);Ue.start<=Pe+1&&me===We&&ot(Ue.start+Ue.count-1,v.width,4)===me?_e.count=Math.max(_e.count,Ue.start+Ue.count-_e.start):(++Re,X[Re]=Ue)}X.length=Re+1;let le=n.getParameter(n.UNPACK_ROW_LENGTH),Te=n.getParameter(n.UNPACK_SKIP_PIXELS),Ae=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let re=0,_e=X.length;re<_e;re++){let Ue=X[re],Pe=Math.floor(Ue.start/4),me=Math.ceil(Ue.count/4),We=Pe%v.width,L=Math.floor(Pe/v.width),ce=me,fe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,We),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,We,L,ce,fe,O,V,v.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,le),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Te),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ae)}}function Y(A,v,O){let V=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=n.TEXTURE_3D);let Q=Je(A,v),X=v.source;t.bindTexture(V,A.__webglTexture,n.TEXTURE0+O);let Re=i.get(X);if(X.version!==Re.__version||Q===!0){t.activeTexture(n.TEXTURE0+O);let le=et.getPrimaries(et.workingColorSpace),Te=v.colorSpace===Kn?null:et.getPrimaries(v.colorSpace),Ae=v.colorSpace===Kn||le===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let re=_(v.image,!1,s.maxTextureSize);re=ze(v,re);let _e=r.convert(v.format,v.colorSpace),Ue=r.convert(v.type),Pe=y(v.internalFormat,_e,Ue,v.colorSpace,v.isVideoTexture);Ve(V,v);let me,We=v.mipmaps,L=v.isVideoTexture!==!0,ce=Re.__version===void 0||Q===!0,fe=X.dataReady,Se=b(v,re);if(v.isDepthTexture)Pe=x(v.format===Rs,v.type),ce&&(L?t.texStorage2D(n.TEXTURE_2D,1,Pe,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Pe,re.width,re.height,0,_e,Ue,null));else if(v.isDataTexture)if(We.length>0){L&&ce&&t.texStorage2D(n.TEXTURE_2D,Se,Pe,We[0].width,We[0].height);for(let oe=0,J=We.length;oe<J;oe++)me=We[oe],L?fe&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,me.width,me.height,_e,Ue,me.data):t.texImage2D(n.TEXTURE_2D,oe,Pe,me.width,me.height,0,_e,Ue,me.data);v.generateMipmaps=!1}else L?(ce&&t.texStorage2D(n.TEXTURE_2D,Se,Pe,re.width,re.height),fe&&Qe(v,re,_e,Ue)):t.texImage2D(n.TEXTURE_2D,0,Pe,re.width,re.height,0,_e,Ue,re.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Pe,We[0].width,We[0].height,re.depth);for(let oe=0,J=We.length;oe<J;oe++)if(me=We[oe],v.format!==en)if(_e!==null)if(L){if(fe)if(v.layerUpdates.size>0){let Ce=zl(me.width,me.height,v.format,v.type);for(let ke of v.layerUpdates){let pt=me.data.subarray(ke*Ce/me.data.BYTES_PER_ELEMENT,(ke+1)*Ce/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,ke,me.width,me.height,1,_e,pt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,me.width,me.height,re.depth,_e,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,Pe,me.width,me.height,re.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,me.width,me.height,re.depth,_e,Ue,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,Pe,me.width,me.height,re.depth,0,_e,Ue,me.data)}else{L&&ce&&t.texStorage2D(n.TEXTURE_2D,Se,Pe,We[0].width,We[0].height);for(let oe=0,J=We.length;oe<J;oe++)me=We[oe],v.format!==en?_e!==null?L?fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,me.width,me.height,_e,me.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,Pe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?fe&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,me.width,me.height,_e,Ue,me.data):t.texImage2D(n.TEXTURE_2D,oe,Pe,me.width,me.height,0,_e,Ue,me.data)}else if(v.isDataArrayTexture)if(L){if(ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Pe,re.width,re.height,re.depth),fe)if(v.layerUpdates.size>0){let oe=zl(re.width,re.height,v.format,v.type);for(let J of v.layerUpdates){let Ce=re.data.subarray(J*oe/re.data.BYTES_PER_ELEMENT,(J+1)*oe/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,_e,Ue,Ce)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,_e,Ue,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,re.width,re.height,re.depth,0,_e,Ue,re.data);else if(v.isData3DTexture)L?(ce&&t.texStorage3D(n.TEXTURE_3D,Se,Pe,re.width,re.height,re.depth),fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,_e,Ue,re.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,re.width,re.height,re.depth,0,_e,Ue,re.data);else if(v.isFramebufferTexture){if(ce)if(L)t.texStorage2D(n.TEXTURE_2D,Se,Pe,re.width,re.height);else{let oe=re.width,J=re.height;for(let Ce=0;Ce<Se;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,Pe,oe,J,0,_e,Ue,null),oe>>=1,J>>=1}}else if(We.length>0){if(L&&ce){let oe=Be(We[0]);t.texStorage2D(n.TEXTURE_2D,Se,Pe,oe.width,oe.height)}for(let oe=0,J=We.length;oe<J;oe++)me=We[oe],L?fe&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,_e,Ue,me):t.texImage2D(n.TEXTURE_2D,oe,Pe,_e,Ue,me);v.generateMipmaps=!1}else if(L){if(ce){let oe=Be(re);t.texStorage2D(n.TEXTURE_2D,Se,Pe,oe.width,oe.height)}fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Ue,re)}else t.texImage2D(n.TEXTURE_2D,0,Pe,_e,Ue,re);m(v)&&p(V),Re.__version=X.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function te(A,v,O){if(v.image.length!==6)return;let V=Je(A,v),Q=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+O);let X=i.get(Q);if(Q.version!==X.__version||V===!0){t.activeTexture(n.TEXTURE0+O);let Re=et.getPrimaries(et.workingColorSpace),le=v.colorSpace===Kn?null:et.getPrimaries(v.colorSpace),Te=v.colorSpace===Kn||Re===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let Ae=v.isCompressedTexture||v.image[0].isCompressedTexture,re=v.image[0]&&v.image[0].isDataTexture,_e=[];for(let J=0;J<6;J++)!Ae&&!re?_e[J]=_(v.image[J],!0,s.maxCubemapSize):_e[J]=re?v.image[J].image:v.image[J],_e[J]=ze(v,_e[J]);let Ue=_e[0],Pe=r.convert(v.format,v.colorSpace),me=r.convert(v.type),We=y(v.internalFormat,Pe,me,v.colorSpace),L=v.isVideoTexture!==!0,ce=X.__version===void 0||V===!0,fe=Q.dataReady,Se=b(v,Ue);Ve(n.TEXTURE_CUBE_MAP,v);let oe;if(Ae){L&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,We,Ue.width,Ue.height);for(let J=0;J<6;J++){oe=_e[J].mipmaps;for(let Ce=0;Ce<oe.length;Ce++){let ke=oe[Ce];v.format!==en?Pe!==null?L?fe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ce,0,0,ke.width,ke.height,Pe,ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ce,We,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ce,0,0,ke.width,ke.height,Pe,me,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ce,We,ke.width,ke.height,0,Pe,me,ke.data)}}}else{if(oe=v.mipmaps,L&&ce){oe.length>0&&Se++;let J=Be(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,We,J.width,J.height)}for(let J=0;J<6;J++)if(re){L?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_e[J].width,_e[J].height,Pe,me,_e[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,_e[J].width,_e[J].height,0,Pe,me,_e[J].data);for(let Ce=0;Ce<oe.length;Ce++){let pt=oe[Ce].image[J].image;L?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ce+1,0,0,pt.width,pt.height,Pe,me,pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ce+1,We,pt.width,pt.height,0,Pe,me,pt.data)}}else{L?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Pe,me,_e[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,Pe,me,_e[J]);for(let Ce=0;Ce<oe.length;Ce++){let ke=oe[Ce];L?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ce+1,0,0,Pe,me,ke.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ce+1,We,Pe,me,ke.image[J])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),X.__version=Q.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function ye(A,v,O,V,Q,X){let Re=r.convert(O.format,O.colorSpace),le=r.convert(O.type),Te=y(O.internalFormat,Re,le,O.colorSpace),Ae=i.get(v),re=i.get(O);if(re.__renderTarget=v,!Ae.__hasExternalTextures){let _e=Math.max(1,v.width>>X),Ue=Math.max(1,v.height>>X);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,X,Te,_e,Ue,v.depth,0,Re,le,null):t.texImage2D(Q,X,Te,_e,Ue,0,Re,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),se(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,Q,re.__webglTexture,0,he(v)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,Q,re.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(A,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,A),v.depthBuffer){let V=v.depthTexture,Q=V&&V.isDepthTexture?V.type:null,X=x(v.stencilBuffer,Q),Re=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=he(v);se(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,X,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,X,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,X,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,A)}else{let V=v.textures;for(let Q=0;Q<V.length;Q++){let X=V[Q],Re=r.convert(X.format,X.colorSpace),le=r.convert(X.type),Te=y(X.internalFormat,Re,le,X.colorSpace),Ae=he(v);O&&se(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,Te,v.width,v.height):se(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,Te,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Te,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let V=i.get(v.depthTexture);V.__renderTarget=v,(!V.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);let Q=V.__webglTexture,X=he(v);if(v.depthTexture.format===ps)se(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(v.depthTexture.format===Rs)se(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function $e(A){let v=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let V=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){let Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",Q)};V.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=V}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let V=A.texture.mipmaps;V&&V.length>0?we(v.__webglFramebuffer[0],A):we(v.__webglFramebuffer,A)}else if(O){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=n.createRenderbuffer(),De(v.__webglDepthbuffer[V],A,!1);else{let Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,X)}}else{let V=A.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),De(v.__webglDepthbuffer,A,!1);else{let Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,X)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ft(A,v,O){let V=i.get(A);v!==void 0&&ye(V.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&$e(A)}function P(A){let v=A.texture,O=i.get(A),V=i.get(v);A.addEventListener("dispose",C);let Q=A.textures,X=A.isWebGLCubeRenderTarget===!0,Re=Q.length>1;if(Re||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=v.version,o.memory.textures++),X){O.__webglFramebuffer=[];for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[le]=[];for(let Te=0;Te<v.mipmaps.length;Te++)O.__webglFramebuffer[le][Te]=n.createFramebuffer()}else O.__webglFramebuffer[le]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let le=0;le<v.mipmaps.length;le++)O.__webglFramebuffer[le]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Re)for(let le=0,Te=Q.length;le<Te;le++){let Ae=i.get(Q[le]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&se(A)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){let Te=Q[le];O.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[le]);let Ae=r.convert(Te.format,Te.colorSpace),re=r.convert(Te.type),_e=y(Te.internalFormat,Ae,re,Te.colorSpace,A.isXRRenderTarget===!0),Ue=he(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,_e,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,O.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),De(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,v);for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)ye(O.__webglFramebuffer[le][Te],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te);else ye(O.__webglFramebuffer[le],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let le=0,Te=Q.length;le<Te;le++){let Ae=Q[le],re=i.get(Ae),_e=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(_e=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,re.__webglTexture),Ve(_e,Ae),ye(O.__webglFramebuffer,A,Ae,n.COLOR_ATTACHMENT0+le,_e,0),m(Ae)&&p(_e)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(le=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,V.__webglTexture),Ve(le,v),v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)ye(O.__webglFramebuffer[Te],A,v,n.COLOR_ATTACHMENT0,le,Te);else ye(O.__webglFramebuffer,A,v,n.COLOR_ATTACHMENT0,le,0);m(v)&&p(le),t.unbindTexture()}A.depthBuffer&&$e(A)}function ee(A){let v=A.textures;for(let O=0,V=v.length;O<V;O++){let Q=v[O];if(m(Q)){let X=S(A),Re=i.get(Q).__webglTexture;t.bindTexture(X,Re),p(X),t.unbindTexture()}}}let j=[],Z=[];function $(A){if(A.samples>0){if(se(A)===!1){let v=A.textures,O=A.width,V=A.height,Q=n.COLOR_BUFFER_BIT,X=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(A),le=v.length>1;if(le)for(let Ae=0;Ae<v.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);let Te=A.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ae=0;Ae<v.length;Ae++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Ae]);let re=i.get(v[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,O,V,0,0,O,V,Q,n.NEAREST),l===!0&&(j.length=0,Z.length=0,j.push(n.COLOR_ATTACHMENT0+Ae),A.depthBuffer&&A.resolveDepthBuffer===!1&&(j.push(X),Z.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,j))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let Ae=0;Ae<v.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Ae]);let re=i.get(v[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let v=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function he(A){return Math.min(s.maxSamples,A.samples)}function se(A){let v=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ue(A){let v=o.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function ze(A,v){let O=A.colorSpace,V=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Ii&&O!==Kn&&(et.getTransfer(O)===ct?(V!==en||Q!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Be(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=W,this.setTexture2DArray=H,this.setTexture3D=ne,this.setTextureCube=q,this.rebindTextures=ft,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=se}function Px(n,e){function t(i,s=Kn){let r,o=et.getTransfer(s);if(i===bn)return n.UNSIGNED_BYTE;if(i===ga)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_a)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Tl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===bl)return n.BYTE;if(i===El)return n.SHORT;if(i===Ts)return n.UNSIGNED_SHORT;if(i===ma)return n.INT;if(i===mi)return n.UNSIGNED_INT;if(i===En)return n.FLOAT;if(i===As)return n.HALF_FLOAT;if(i===Al)return n.ALPHA;if(i===Cl)return n.RGB;if(i===en)return n.RGBA;if(i===ps)return n.DEPTH_COMPONENT;if(i===Rs)return n.DEPTH_STENCIL;if(i===xa)return n.RED;if(i===va)return n.RED_INTEGER;if(i===Rl)return n.RG;if(i===ya)return n.RG_INTEGER;if(i===Ma)return n.RGBA_INTEGER;if(i===Fr||i===Or||i===Br||i===zr)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sa||i===ba||i===Ea||i===wa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ta||i===Aa||i===Ca)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ta||i===Aa)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ca)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ra||i===Pa||i===Da||i===Ia||i===La||i===Na||i===Ua||i===Fa||i===Oa||i===Ba||i===za||i===ka||i===Ha||i===Va)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ra)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Da)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ia)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===La)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Na)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ua)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Oa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ba)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===za)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ka)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ha)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Va)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ga||i===Wa||i===qa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ga)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xa||i===Ya||i===$a||i===Za)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Xa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ix=`
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

}`,Kl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new dr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Mn({vertexShader:Dx,fragmentShader:Ix,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new Ht(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ql=class extends Rn{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new Kl,p={},S=t.getContextAttributes(),y=null,x=null,b=[],T=[],C=new ie,I=null,w=new kt;w.viewport=new Et;let M=new kt;M.viewport=new Et;let D=[w,M],F=new ia,k=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=b[Y];return te===void 0&&(te=new vs,b[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=b[Y];return te===void 0&&(te=new vs,b[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=b[Y];return te===void 0&&(te=new vs,b[Y]=te),te.getHandSpace()};function W(Y){let te=T.indexOf(Y.inputSource);if(te===-1)return;let ye=b[te];ye!==void 0&&(ye.update(Y.inputSource,Y.frame,c||o),ye.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",ne);for(let Y=0;Y<b.length;Y++){let te=T[Y];te!==null&&(T[Y]=null,b[Y].disconnect(te))}k=null,G=null,m.reset();for(let Y in p)delete p[Y];e.setRenderTarget(y),f=null,d=null,u=null,s=null,x=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",H),s.addEventListener("inputsourceschange",ne),S.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,De=null,we=null;S.depth&&(we=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=S.stencil?Rs:ps,De=S.stencil?Cs:mi);let $e={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer($e),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Pn(d.textureWidth,d.textureHeight,{format:en,type:bn,depthTexture:new ur(d.textureWidth,d.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ye={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Pn(f.framebufferWidth,f.framebufferHeight,{format:en,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Qe.setContext(s),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(Y){for(let te=0;te<Y.removed.length;te++){let ye=Y.removed[te],De=T.indexOf(ye);De>=0&&(T[De]=null,b[De].disconnect(ye))}for(let te=0;te<Y.added.length;te++){let ye=Y.added[te],De=T.indexOf(ye);if(De===-1){for(let $e=0;$e<b.length;$e++)if($e>=T.length){T.push(ye),De=$e;break}else if(T[$e]===null){T[$e]=ye,De=$e;break}if(De===-1)break}let we=b[De];we&&we.connect(ye)}}let q=new R,de=new R;function xe(Y,te,ye){q.setFromMatrixPosition(te.matrixWorld),de.setFromMatrixPosition(ye.matrixWorld);let De=q.distanceTo(de),we=te.projectionMatrix.elements,$e=ye.projectionMatrix.elements,ft=we[14]/(we[10]-1),P=we[14]/(we[10]+1),ee=(we[9]+1)/we[5],j=(we[9]-1)/we[5],Z=(we[8]-1)/we[0],$=($e[8]+1)/$e[0],he=ft*Z,se=ft*$,ue=De/(-Z+$),ze=ue*-Z;if(te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ze),Y.translateZ(ue),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),we[10]===-1)Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let Be=ft+ue,A=P+ue,v=he-ze,O=se+(De-ze),V=ee*P/A*Be,Q=j*P/A*Be;Y.projectionMatrix.makePerspective(v,O,V,Q,Be,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Me(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let te=Y.near,ye=Y.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),F.near=M.near=w.near=te,F.far=M.far=w.far=ye,(k!==F.near||G!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),k=F.near,G=F.far),F.layers.mask=Y.layers.mask|6,w.layers.mask=F.layers.mask&3,M.layers.mask=F.layers.mask&5;let De=Y.parent,we=F.cameras;Me(F,De);for(let $e=0;$e<we.length;$e++)Me(we[$e],De);we.length===2?xe(F,w,M):F.projectionMatrix.copy(w.projectionMatrix),Ve(Y,F,De)};function Ve(Y,te,ye){ye===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(ye.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ms*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Y){return p[Y]};let Je=null;function ot(Y,te){if(h=te.getViewerPose(c||o),g=te,h!==null){let ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let De=!1;ye.length!==F.cameras.length&&(F.cameras.length=0,De=!0);for(let P=0;P<ye.length;P++){let ee=ye[P],j=null;if(f!==null)j=f.getViewport(ee);else{let $=u.getViewSubImage(d,ee);j=$.viewport,P===0&&(e.setRenderTargetTextures(x,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(x))}let Z=D[P];Z===void 0&&(Z=new kt,Z.layers.enable(P),Z.viewport=new Et,D[P]=Z),Z.matrix.fromArray(ee.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(ee.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(j.x,j.y,j.width,j.height),P===0&&(F.matrix.copy(Z.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),De===!0&&F.cameras.push(Z)}let we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();let P=u.getDepthInformation(ye[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(we&&we.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let P=0;P<ye.length;P++){let ee=ye[P].camera;if(ee){let j=p[ee];j||(j=new dr,p[ee]=j);let Z=u.getCameraImage(ee);j.sourceTexture=Z}}}}for(let ye=0;ye<b.length;ye++){let De=T[ye],we=b[ye];De!==null&&we!==void 0&&we.update(De,te,c||o)}Je&&Je(Y,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}let Qe=new Nd;Qe.setAnimationLoop(ot),this.setAnimationLoop=function(Y){Je=Y},this.dispose=function(){}}},Wi=new ln,Lx=new nt;function Nx(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ul(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Yt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Yt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),y=S.envMap,x=S.envMapRotation;y&&(m.envMap.value=y,Wi.copy(x),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),m.envMapRotation.value.setFromMatrix4(Lx.makeRotationFromEuler(Wi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ux(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){let x=y.program;i.uniformBlockBinding(S,x)}function c(S,y){let x=s[S.id];x===void 0&&(g(S),x=h(S),s[S.id]=x,S.addEventListener("dispose",m));let b=y.program;i.updateUBOMapping(S,b);let T=e.render.frame;r[S.id]!==T&&(d(S),r[S.id]=T)}function h(S){let y=u();S.__bindingPointIndex=y;let x=n.createBuffer(),b=S.__size,T=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,b,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let y=s[S.id],x=S.uniforms,b=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let T=0,C=x.length;T<C;T++){let I=Array.isArray(x[T])?x[T]:[x[T]];for(let w=0,M=I.length;w<M;w++){let D=I[w];if(f(D,T,w,b)===!0){let F=D.__offset,k=Array.isArray(D.value)?D.value:[D.value],G=0;for(let W=0;W<k.length;W++){let H=k[W],ne=_(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,F+G,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,G),G+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,y,x,b){let T=S.value,C=y+"_"+x;if(b[C]===void 0)return typeof T=="number"||typeof T=="boolean"?b[C]=T:b[C]=T.clone(),!0;{let I=b[C];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return b[C]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(S){let y=S.uniforms,x=0,b=16;for(let C=0,I=y.length;C<I;C++){let w=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,D=w.length;M<D;M++){let F=w[M],k=Array.isArray(F.value)?F.value:[F.value];for(let G=0,W=k.length;G<W;G++){let H=k[G],ne=_(H),q=x%b,de=q%ne.boundary,xe=q+de;x+=de,xe!==0&&b-xe<ne.storage&&(x+=b-xe),F.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=ne.storage}}}let T=x%b;return T>0&&(x+=b-T),S.__size=x,S.__cache={},this}function _(S){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){let y=S.target;y.removeEventListener("dispose",m);let x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var ec=class{constructor(e={}){let{canvas:t=nd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,S=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,b=!1;this._outputColorSpace=Ct;let T=0,C=0,I=null,w=-1,M=null,D=new Et,F=new Et,k=null,G=new He(0),W=0,H=t.width,ne=t.height,q=1,de=null,xe=null,Me=new Et(0,0,H,ne),Ve=new Et(0,0,H,ne),Je=!1,ot=new Ms,Qe=!1,Y=!1,te=new nt,ye=new R,De=new Et,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$e=!1;function ft(){return I===null?q:1}let P=i;function ee(E,N){return t.getContext(E,N)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",oe,!1),P===null){let N="webgl2";if(P=ee(N,E),P===null)throw ee(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let j,Z,$,he,se,ue,ze,Be,A,v,O,V,Q,X,Re,le,Te,Ae,re,_e,Ue,Pe,me,We;function L(){j=new Q0(P),j.init(),Pe=new Px(P,j),Z=new X0(P,j,e,Pe),$=new Cx(P,j),Z.reversedDepthBuffer&&d&&$.buffers.depth.setReversed(!0),he=new n_(P),se=new mx,ue=new Rx(P,j,$,se,Z,Pe,he),ze=new $0(x),Be=new K0(x),A=new cm(P),me=new W0(P,A),v=new e_(P,A,he,me),O=new s_(P,v,A,he),re=new i_(P,Z,ue),le=new Y0(se),V=new px(x,ze,Be,j,Z,me,le),Q=new Nx(x,se),X=new _x,Re=new bx(j),Ae=new G0(x,ze,Be,$,O,f,l),Te=new Tx(x,O,Z),We=new Ux(P,he,Z,$),_e=new q0(P,j,he),Ue=new t_(P,j,he),he.programs=V.programs,x.capabilities=Z,x.extensions=j,x.properties=se,x.renderLists=X,x.shadowMap=Te,x.state=$,x.info=he}L();let ce=new Ql(x,P);this.xr=ce,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let E=j.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=j.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(H,ne,!1))},this.getSize=function(E){return E.set(H,ne)},this.setSize=function(E,N,B=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,ne=N,t.width=Math.floor(E*q),t.height=Math.floor(N*q),B===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(H*q,ne*q).floor()},this.setDrawingBufferSize=function(E,N,B){H=E,ne=N,q=B,t.width=Math.floor(E*B),t.height=Math.floor(N*B),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(Me)},this.setViewport=function(E,N,B,z){E.isVector4?Me.set(E.x,E.y,E.z,E.w):Me.set(E,N,B,z),$.viewport(D.copy(Me).multiplyScalar(q).round())},this.getScissor=function(E){return E.copy(Ve)},this.setScissor=function(E,N,B,z){E.isVector4?Ve.set(E.x,E.y,E.z,E.w):Ve.set(E,N,B,z),$.scissor(F.copy(Ve).multiplyScalar(q).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(E){$.setScissorTest(Je=E)},this.setOpaqueSort=function(E){de=E},this.setTransparentSort=function(E){xe=E},this.getClearColor=function(E){return E.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,B=!0){let z=0;if(E){let U=!1;if(I!==null){let ae=I.texture.format;U=ae===Ma||ae===ya||ae===va}if(U){let ae=I.texture.type,ge=ae===bn||ae===mi||ae===Ts||ae===Cs||ae===ga||ae===_a,Ee=Ae.getClearColor(),ve=Ae.getClearAlpha(),Ne=Ee.r,Fe=Ee.g,Ie=Ee.b;ge?(g[0]=Ne,g[1]=Fe,g[2]=Ie,g[3]=ve,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Ne,_[1]=Fe,_[2]=Ie,_[3]=ve,P.clearBufferiv(P.COLOR,0,_))}else z|=P.COLOR_BUFFER_BIT}N&&(z|=P.DEPTH_BUFFER_BIT),B&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),Ae.dispose(),X.dispose(),Re.dispose(),se.dispose(),ze.dispose(),Be.dispose(),O.dispose(),me.dispose(),We.dispose(),V.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Tn),ce.removeEventListener("sessionend",yh),bi.stop()};function fe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let E=he.autoReset,N=Te.enabled,B=Te.autoUpdate,z=Te.needsUpdate,U=Te.type;L(),he.autoReset=E,Te.enabled=N,Te.autoUpdate=B,Te.needsUpdate=z,Te.type=U}function oe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function J(E){let N=E.target;N.removeEventListener("dispose",J),Ce(N)}function Ce(E){ke(E),se.remove(E)}function ke(E){let N=se.get(E).programs;N!==void 0&&(N.forEach(function(B){V.releaseProgram(B)}),E.isShaderMaterial&&V.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,B,z,U,ae){N===null&&(N=we);let ge=U.isMesh&&U.matrixWorld.determinant()<0,Ee=Pf(E,N,B,z,U);$.setMaterial(z,ge);let ve=B.index,Ne=1;if(z.wireframe===!0){if(ve=v.getWireframeAttribute(B),ve===void 0)return;Ne=2}let Fe=B.drawRange,Ie=B.attributes.position,Ze=Fe.start*Ne,lt=(Fe.start+Fe.count)*Ne;ae!==null&&(Ze=Math.max(Ze,ae.start*Ne),lt=Math.min(lt,(ae.start+ae.count)*Ne)),ve!==null?(Ze=Math.max(Ze,0),lt=Math.min(lt,ve.count)):Ie!=null&&(Ze=Math.max(Ze,0),lt=Math.min(lt,Ie.count));let Tt=lt-Ze;if(Tt<0||Tt===1/0)return;me.setup(U,z,Ee,B,ve);let gt,ut=_e;if(ve!==null&&(gt=A.get(ve),ut=Ue,ut.setIndex(gt)),U.isMesh)z.wireframe===!0?($.setLineWidth(z.wireframeLinewidth*ft()),ut.setMode(P.LINES)):ut.setMode(P.TRIANGLES);else if(U.isLine){let Le=z.linewidth;Le===void 0&&(Le=1),$.setLineWidth(Le*ft()),U.isLineSegments?ut.setMode(P.LINES):U.isLineLoop?ut.setMode(P.LINE_LOOP):ut.setMode(P.LINE_STRIP)}else U.isPoints?ut.setMode(P.POINTS):U.isSprite&&ut.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)gs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))ut.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Le=U._multiDrawStarts,Mt=U._multiDrawCounts,tt=U._multiDrawCount,sn=ve?A.get(ve).bytesPerElement:1,Ji=se.get(z).currentProgram.getUniforms();for(let rn=0;rn<tt;rn++)Ji.setValue(P,"_gl_DrawID",rn),ut.render(Le[rn]/sn,Mt[rn])}else if(U.isInstancedMesh)ut.renderInstances(Ze,Tt,U.count);else if(B.isInstancedBufferGeometry){let Le=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Mt=Math.min(B.instanceCount,Le);ut.renderInstances(Ze,Tt,Mt)}else ut.render(Ze,Tt)};function pt(E,N,B){E.transparent===!0&&E.side===vt&&E.forceSinglePass===!1?(E.side=Yt,E.needsUpdate=!0,Jr(E,N,B),E.side=Xn,E.needsUpdate=!0,Jr(E,N,B),E.side=vt):Jr(E,N,B)}this.compile=function(E,N,B=null){B===null&&(B=E),p=Re.get(B),p.init(N),y.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),E!==B&&E.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let z=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let ae=U.material;if(ae)if(Array.isArray(ae))for(let ge=0;ge<ae.length;ge++){let Ee=ae[ge];pt(Ee,B,U),z.add(Ee)}else pt(ae,B,U),z.add(ae)}),p=y.pop(),z},this.compileAsync=function(E,N,B=null){let z=this.compile(E,N,B);return new Promise(U=>{function ae(){if(z.forEach(function(ge){se.get(ge).currentProgram.isReady()&&z.delete(ge)}),z.size===0){U(E);return}setTimeout(ae,10)}j.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let it=null;function Bn(E){it&&it(E)}function Tn(){bi.stop()}function yh(){bi.start()}let bi=new Nd;bi.setAnimationLoop(Bn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(E){it=E,ce.setAnimationLoop(E),E===null?bi.stop():bi.start()},ce.addEventListener("sessionstart",Tn),ce.addEventListener("sessionend",yh),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(N),N=ce.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,N,I),p=Re.get(E,y.length),p.init(N),y.push(p),te.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ot.setFromProjectionMatrix(te,yn,N.reversedDepth),Y=this.localClippingEnabled,Qe=le.init(this.clippingPlanes,Y),m=X.get(E,S.length),m.init(),S.push(m),ce.enabled===!0&&ce.isPresenting===!0){let ae=x.xr.getDepthSensingMesh();ae!==null&&Ec(ae,N,-1/0,x.sortObjects)}Ec(E,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(de,xe),$e=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,$e&&Ae.addToRenderList(m,E),this.info.render.frame++,Qe===!0&&le.beginShadows();let B=p.state.shadowsArray;Te.render(B,E,N),Qe===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=m.opaque,U=m.transmissive;if(p.setupLights(),N.isArrayCamera){let ae=N.cameras;if(U.length>0)for(let ge=0,Ee=ae.length;ge<Ee;ge++){let ve=ae[ge];Sh(z,U,E,ve)}$e&&Ae.render(E);for(let ge=0,Ee=ae.length;ge<Ee;ge++){let ve=ae[ge];Mh(m,E,ve,ve.viewport)}}else U.length>0&&Sh(z,U,E,N),$e&&Ae.render(E),Mh(m,E,N);I!==null&&C===0&&(ue.updateMultisampleRenderTarget(I),ue.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(x,E,N),me.resetDefaultState(),w=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],Qe===!0&&le.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Ec(E,N,B,z){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ot.intersectsSprite(E)){z&&De.setFromMatrixPosition(E.matrixWorld).applyMatrix4(te);let ge=O.update(E),Ee=E.material;Ee.visible&&m.push(E,ge,Ee,B,De.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ot.intersectsObject(E))){let ge=O.update(E),Ee=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),De.copy(E.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),De.copy(ge.boundingSphere.center)),De.applyMatrix4(E.matrixWorld).applyMatrix4(te)),Array.isArray(Ee)){let ve=ge.groups;for(let Ne=0,Fe=ve.length;Ne<Fe;Ne++){let Ie=ve[Ne],Ze=Ee[Ie.materialIndex];Ze&&Ze.visible&&m.push(E,ge,Ze,B,De.z,Ie)}}else Ee.visible&&m.push(E,ge,Ee,B,De.z,null)}}let ae=E.children;for(let ge=0,Ee=ae.length;ge<Ee;ge++)Ec(ae[ge],N,B,z)}function Mh(E,N,B,z){let U=E.opaque,ae=E.transmissive,ge=E.transparent;p.setupLightsView(B),Qe===!0&&le.setGlobalState(x.clippingPlanes,B),z&&$.viewport(D.copy(z)),U.length>0&&jr(U,N,B),ae.length>0&&jr(ae,N,B),ge.length>0&&jr(ge,N,B),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function Sh(E,N,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new Pn(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?As:bn,minFilter:Nn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let ae=p.state.transmissionRenderTarget[z.id],ge=z.viewport||D;ae.setSize(ge.z*x.transmissionResolutionScale,ge.w*x.transmissionResolutionScale);let Ee=x.getRenderTarget(),ve=x.getActiveCubeFace(),Ne=x.getActiveMipmapLevel();x.setRenderTarget(ae),x.getClearColor(G),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),$e&&Ae.render(B);let Fe=x.toneMapping;x.toneMapping=Jn;let Ie=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),Qe===!0&&le.setGlobalState(x.clippingPlanes,z),jr(E,B,z),ue.updateMultisampleRenderTarget(ae),ue.updateRenderTargetMipmap(ae),j.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let lt=0,Tt=N.length;lt<Tt;lt++){let gt=N[lt],ut=gt.object,Le=gt.geometry,Mt=gt.material,tt=gt.group;if(Mt.side===vt&&ut.layers.test(z.layers)){let sn=Mt.side;Mt.side=Yt,Mt.needsUpdate=!0,bh(ut,B,z,Le,Mt,tt),Mt.side=sn,Mt.needsUpdate=!0,Ze=!0}}Ze===!0&&(ue.updateMultisampleRenderTarget(ae),ue.updateRenderTargetMipmap(ae))}x.setRenderTarget(Ee,ve,Ne),x.setClearColor(G,W),Ie!==void 0&&(z.viewport=Ie),x.toneMapping=Fe}function jr(E,N,B){let z=N.isScene===!0?N.overrideMaterial:null;for(let U=0,ae=E.length;U<ae;U++){let ge=E[U],Ee=ge.object,ve=ge.geometry,Ne=ge.group,Fe=ge.material;Fe.allowOverride===!0&&z!==null&&(Fe=z),Ee.layers.test(B.layers)&&bh(Ee,N,B,ve,Fe,Ne)}}function bh(E,N,B,z,U,ae){E.onBeforeRender(x,N,B,z,U,ae),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(x,N,B,z,E,ae),U.transparent===!0&&U.side===vt&&U.forceSinglePass===!1?(U.side=Yt,U.needsUpdate=!0,x.renderBufferDirect(B,N,z,U,E,ae),U.side=Xn,U.needsUpdate=!0,x.renderBufferDirect(B,N,z,U,E,ae),U.side=vt):x.renderBufferDirect(B,N,z,U,E,ae),E.onAfterRender(x,N,B,z,U,ae)}function Jr(E,N,B){N.isScene!==!0&&(N=we);let z=se.get(E),U=p.state.lights,ae=p.state.shadowsArray,ge=U.state.version,Ee=V.getParameters(E,U.state,ae,N,B),ve=V.getProgramCacheKey(Ee),Ne=z.programs;z.environment=E.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(E.isMeshStandardMaterial?Be:ze).get(E.envMap||z.environment),z.envMapRotation=z.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Ne===void 0&&(E.addEventListener("dispose",J),Ne=new Map,z.programs=Ne);let Fe=Ne.get(ve);if(Fe!==void 0){if(z.currentProgram===Fe&&z.lightsStateVersion===ge)return wh(E,Ee),Fe}else Ee.uniforms=V.getUniforms(E),E.onBeforeCompile(Ee,x),Fe=V.acquireProgram(Ee,ve),Ne.set(ve,Fe),z.uniforms=Ee.uniforms;let Ie=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ie.clippingPlanes=le.uniform),wh(E,Ee),z.needsLights=If(E),z.lightsStateVersion=ge,z.needsLights&&(Ie.ambientLightColor.value=U.state.ambient,Ie.lightProbe.value=U.state.probe,Ie.directionalLights.value=U.state.directional,Ie.directionalLightShadows.value=U.state.directionalShadow,Ie.spotLights.value=U.state.spot,Ie.spotLightShadows.value=U.state.spotShadow,Ie.rectAreaLights.value=U.state.rectArea,Ie.ltc_1.value=U.state.rectAreaLTC1,Ie.ltc_2.value=U.state.rectAreaLTC2,Ie.pointLights.value=U.state.point,Ie.pointLightShadows.value=U.state.pointShadow,Ie.hemisphereLights.value=U.state.hemi,Ie.directionalShadowMap.value=U.state.directionalShadowMap,Ie.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ie.spotShadowMap.value=U.state.spotShadowMap,Ie.spotLightMatrix.value=U.state.spotLightMatrix,Ie.spotLightMap.value=U.state.spotLightMap,Ie.pointShadowMap.value=U.state.pointShadowMap,Ie.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Fe,z.uniformsList=null,Fe}function Eh(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=Is.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function wh(E,N){let B=se.get(E);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function Pf(E,N,B,z,U){N.isScene!==!0&&(N=we),ue.resetTextureUnits();let ae=N.fog,ge=z.isMeshStandardMaterial?N.environment:null,Ee=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ii,ve=(z.isMeshStandardMaterial?Be:ze).get(z.envMap||ge),Ne=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Fe=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ie=!!B.morphAttributes.position,Ze=!!B.morphAttributes.normal,lt=!!B.morphAttributes.color,Tt=Jn;z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Tt=x.toneMapping);let gt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ut=gt!==void 0?gt.length:0,Le=se.get(z),Mt=p.state.lights;if(Qe===!0&&(Y===!0||E!==M)){let Wt=E===M&&z.id===w;le.setState(z,E,Wt)}let tt=!1;z.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Mt.state.version||Le.outputColorSpace!==Ee||U.isBatchedMesh&&Le.batching===!1||!U.isBatchedMesh&&Le.batching===!0||U.isBatchedMesh&&Le.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Le.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Le.instancing===!1||!U.isInstancedMesh&&Le.instancing===!0||U.isSkinnedMesh&&Le.skinning===!1||!U.isSkinnedMesh&&Le.skinning===!0||U.isInstancedMesh&&Le.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Le.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Le.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Le.instancingMorph===!1&&U.morphTexture!==null||Le.envMap!==ve||z.fog===!0&&Le.fog!==ae||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==le.numPlanes||Le.numIntersection!==le.numIntersection)||Le.vertexAlphas!==Ne||Le.vertexTangents!==Fe||Le.morphTargets!==Ie||Le.morphNormals!==Ze||Le.morphColors!==lt||Le.toneMapping!==Tt||Le.morphTargetsCount!==ut)&&(tt=!0):(tt=!0,Le.__version=z.version);let sn=Le.currentProgram;tt===!0&&(sn=Jr(z,N,U));let Ji=!1,rn=!1,zs=!1,St=sn.getUniforms(),dn=Le.uniforms;if($.useProgram(sn.program)&&(Ji=!0,rn=!0,zs=!0),z.id!==w&&(w=z.id,rn=!0),Ji||M!==E){$.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),St.setValue(P,"projectionMatrix",E.projectionMatrix),St.setValue(P,"viewMatrix",E.matrixWorldInverse);let jt=St.map.cameraPosition;jt!==void 0&&jt.setValue(P,ye.setFromMatrixPosition(E.matrixWorld)),Z.logarithmicDepthBuffer&&St.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&St.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,rn=!0,zs=!0)}if(U.isSkinnedMesh){St.setOptional(P,U,"bindMatrix"),St.setOptional(P,U,"bindMatrixInverse");let Wt=U.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),St.setValue(P,"boneTexture",Wt.boneTexture,ue))}U.isBatchedMesh&&(St.setOptional(P,U,"batchingTexture"),St.setValue(P,"batchingTexture",U._matricesTexture,ue),St.setOptional(P,U,"batchingIdTexture"),St.setValue(P,"batchingIdTexture",U._indirectTexture,ue),St.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&St.setValue(P,"batchingColorTexture",U._colorsTexture,ue));let fn=B.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&re.update(U,B,sn),(rn||Le.receiveShadow!==U.receiveShadow)&&(Le.receiveShadow=U.receiveShadow,St.setValue(P,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(dn.envMap.value=ve,dn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&N.environment!==null&&(dn.envMapIntensity.value=N.environmentIntensity),rn&&(St.setValue(P,"toneMappingExposure",x.toneMappingExposure),Le.needsLights&&Df(dn,zs),ae&&z.fog===!0&&Q.refreshFogUniforms(dn,ae),Q.refreshMaterialUniforms(dn,z,q,ne,p.state.transmissionRenderTarget[E.id]),Is.upload(P,Eh(Le),dn,ue)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Is.upload(P,Eh(Le),dn,ue),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&St.setValue(P,"center",U.center),St.setValue(P,"modelViewMatrix",U.modelViewMatrix),St.setValue(P,"normalMatrix",U.normalMatrix),St.setValue(P,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Wt=z.uniformsGroups;for(let jt=0,wc=Wt.length;jt<wc;jt++){let Ei=Wt[jt];We.update(Ei,sn),We.bind(Ei,sn)}}return sn}function Df(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function If(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,N,B){let z=se.get(E);z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),se.get(E.texture).__webglTexture=N,se.get(E.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){let B=se.get(E);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0};let Lf=P.createFramebuffer();this.setRenderTarget=function(E,N=0,B=0){I=E,T=N,C=B;let z=!0,U=null,ae=!1,ge=!1;if(E){let ve=se.get(E);if(ve.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(P.FRAMEBUFFER,null),z=!1;else if(ve.__webglFramebuffer===void 0)ue.setupRenderTarget(E);else if(ve.__hasExternalTextures)ue.rebindTextures(E,se.get(E.texture).__webglTexture,se.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ie=E.depthTexture;if(ve.__boundDepthTexture!==Ie){if(Ie!==null&&se.has(Ie)&&(E.width!==Ie.image.width||E.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(E)}}let Ne=E.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ge=!0);let Fe=se.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Fe[N])?U=Fe[N][B]:U=Fe[N],ae=!0):E.samples>0&&ue.useMultisampledRTT(E)===!1?U=se.get(E).__webglMultisampledFramebuffer:Array.isArray(Fe)?U=Fe[B]:U=Fe,D.copy(E.viewport),F.copy(E.scissor),k=E.scissorTest}else D.copy(Me).multiplyScalar(q).floor(),F.copy(Ve).multiplyScalar(q).floor(),k=Je;if(B!==0&&(U=Lf),$.bindFramebuffer(P.FRAMEBUFFER,U)&&z&&$.drawBuffers(E,U),$.viewport(D),$.scissor(F),$.setScissorTest(k),ae){let ve=se.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,ve.__webglTexture,B)}else if(ge){let ve=N;for(let Ne=0;Ne<E.textures.length;Ne++){let Fe=se.get(E.textures[Ne]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ne,Fe.__webglTexture,B,ve)}}else if(E!==null&&B!==0){let ve=se.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ve.__webglTexture,B)}w=-1},this.readRenderTargetPixels=function(E,N,B,z,U,ae,ge,Ee=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(ve=ve[ge]),ve){$.bindFramebuffer(P.FRAMEBUFFER,ve);try{let Ne=E.textures[Ee],Fe=Ne.format,Ie=Ne.type;if(!Z.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-z&&B>=0&&B<=E.height-U&&(E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ee),P.readPixels(N,B,z,U,Pe.convert(Fe),Pe.convert(Ie),ae))}finally{let Ne=I!==null?se.get(I).__webglFramebuffer:null;$.bindFramebuffer(P.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(E,N,B,z,U,ae,ge,Ee=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(ve=ve[ge]),ve)if(N>=0&&N<=E.width-z&&B>=0&&B<=E.height-U){$.bindFramebuffer(P.FRAMEBUFFER,ve);let Ne=E.textures[Ee],Fe=Ne.format,Ie=Ne.type;if(!Z.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ze),P.bufferData(P.PIXEL_PACK_BUFFER,ae.byteLength,P.STREAM_READ),E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ee),P.readPixels(N,B,z,U,Pe.convert(Fe),Pe.convert(Ie),0);let lt=I!==null?se.get(I).__webglFramebuffer:null;$.bindFramebuffer(P.FRAMEBUFFER,lt);let Tt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await id(P,Tt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ze),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ae),P.deleteBuffer(Ze),P.deleteSync(Tt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,B=0){let z=Math.pow(2,-B),U=Math.floor(E.image.width*z),ae=Math.floor(E.image.height*z),ge=N!==null?N.x:0,Ee=N!==null?N.y:0;ue.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,B,0,0,ge,Ee,U,ae),$.unbindTexture()};let Nf=P.createFramebuffer(),Uf=P.createFramebuffer();this.copyTextureToTexture=function(E,N,B=null,z=null,U=0,ae=null){ae===null&&(U!==0?(gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=U,U=0):ae=0);let ge,Ee,ve,Ne,Fe,Ie,Ze,lt,Tt,gt=E.isCompressedTexture?E.mipmaps[ae]:E.image;if(B!==null)ge=B.max.x-B.min.x,Ee=B.max.y-B.min.y,ve=B.isBox3?B.max.z-B.min.z:1,Ne=B.min.x,Fe=B.min.y,Ie=B.isBox3?B.min.z:0;else{let fn=Math.pow(2,-U);ge=Math.floor(gt.width*fn),Ee=Math.floor(gt.height*fn),E.isDataArrayTexture?ve=gt.depth:E.isData3DTexture?ve=Math.floor(gt.depth*fn):ve=1,Ne=0,Fe=0,Ie=0}z!==null?(Ze=z.x,lt=z.y,Tt=z.z):(Ze=0,lt=0,Tt=0);let ut=Pe.convert(N.format),Le=Pe.convert(N.type),Mt;N.isData3DTexture?(ue.setTexture3D(N,0),Mt=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(ue.setTexture2DArray(N,0),Mt=P.TEXTURE_2D_ARRAY):(ue.setTexture2D(N,0),Mt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);let tt=P.getParameter(P.UNPACK_ROW_LENGTH),sn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ji=P.getParameter(P.UNPACK_SKIP_PIXELS),rn=P.getParameter(P.UNPACK_SKIP_ROWS),zs=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,gt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,gt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ne),P.pixelStorei(P.UNPACK_SKIP_ROWS,Fe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ie);let St=E.isDataArrayTexture||E.isData3DTexture,dn=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){let fn=se.get(E),Wt=se.get(N),jt=se.get(fn.__renderTarget),wc=se.get(Wt.__renderTarget);$.bindFramebuffer(P.READ_FRAMEBUFFER,jt.__webglFramebuffer),$.bindFramebuffer(P.DRAW_FRAMEBUFFER,wc.__webglFramebuffer);for(let Ei=0;Ei<ve;Ei++)St&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,se.get(E).__webglTexture,U,Ie+Ei),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,se.get(N).__webglTexture,ae,Tt+Ei)),P.blitFramebuffer(Ne,Fe,ge,Ee,Ze,lt,ge,Ee,P.DEPTH_BUFFER_BIT,P.NEAREST);$.bindFramebuffer(P.READ_FRAMEBUFFER,null),$.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(U!==0||E.isRenderTargetTexture||se.has(E)){let fn=se.get(E),Wt=se.get(N);$.bindFramebuffer(P.READ_FRAMEBUFFER,Nf),$.bindFramebuffer(P.DRAW_FRAMEBUFFER,Uf);for(let jt=0;jt<ve;jt++)St?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,fn.__webglTexture,U,Ie+jt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,fn.__webglTexture,U),dn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Wt.__webglTexture,ae,Tt+jt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Wt.__webglTexture,ae),U!==0?P.blitFramebuffer(Ne,Fe,ge,Ee,Ze,lt,ge,Ee,P.COLOR_BUFFER_BIT,P.NEAREST):dn?P.copyTexSubImage3D(Mt,ae,Ze,lt,Tt+jt,Ne,Fe,ge,Ee):P.copyTexSubImage2D(Mt,ae,Ze,lt,Ne,Fe,ge,Ee);$.bindFramebuffer(P.READ_FRAMEBUFFER,null),$.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else dn?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Mt,ae,Ze,lt,Tt,ge,Ee,ve,ut,Le,gt.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(Mt,ae,Ze,lt,Tt,ge,Ee,ve,ut,gt.data):P.texSubImage3D(Mt,ae,Ze,lt,Tt,ge,Ee,ve,ut,Le,gt):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ae,Ze,lt,ge,Ee,ut,Le,gt.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ae,Ze,lt,gt.width,gt.height,ut,gt.data):P.texSubImage2D(P.TEXTURE_2D,ae,Ze,lt,ge,Ee,ut,Le,gt);P.pixelStorei(P.UNPACK_ROW_LENGTH,tt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,sn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ji),P.pixelStorei(P.UNPACK_SKIP_ROWS,rn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,zs),ae===0&&N.generateMipmaps&&P.generateMipmap(Mt),$.unbindTexture()},this.initRenderTarget=function(E){se.get(E).__webglFramebuffer===void 0&&ue.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ue.setTextureCube(E,0):E.isData3DTexture?ue.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ue.setTexture2DArray(E,0):ue.setTexture2D(E,0),$.unbindTexture()},this.resetState=function(){T=0,C=0,I=null,$.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};var zd={type:"change"},nh={type:"start"},Hd={type:"end"},nc=new li,kd=new Ft,Fx=Math.cos(70*kr.DEG2RAD),Dt=new R,tn=2*Math.PI,ht={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},th=1e-6,ic=class extends Lr{constructor(e,t=null){super(e,t),this.state=ht.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fi.ROTATE,MIDDLE:fi.DOLLY,RIGHT:fi.PAN},this.touches={ONE:pi.ROTATE,TWO:pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Qt,this._lastTargetPosition=new R,this._quat=new Qt().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ws,this._sphericalDelta=new ws,this._scale=1,this._panOffset=new R,this._rotateStart=new ie,this._rotateEnd=new ie,this._rotateDelta=new ie,this._panStart=new ie,this._panEnd=new ie,this._panDelta=new ie,this._dollyStart=new ie,this._dollyEnd=new ie,this._dollyDelta=new ie,this._dollyDirection=new R,this._mouse=new ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Bx.bind(this),this._onPointerDown=Ox.bind(this),this._onPointerUp=zx.bind(this),this._onContextMenu=Xx.bind(this),this._onMouseWheel=Vx.bind(this),this._onKeyDown=Gx.bind(this),this._onTouchStart=Wx.bind(this),this._onTouchMove=qx.bind(this),this._onMouseDown=kx.bind(this),this._onMouseMove=Hx.bind(this),this._interceptControlDown=Yx.bind(this),this._interceptControlUp=$x.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(zd),this.update(),this.state=ht.NONE}update(e=null){let t=this.object.position;Dt.copy(t).sub(this.target),Dt.applyQuaternion(this._quat),this._spherical.setFromVector3(Dt),this.autoRotate&&this.state===ht.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=tn:i>Math.PI&&(i-=tn),s<-Math.PI?s+=tn:s>Math.PI&&(s-=tn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Dt.setFromSpherical(this._spherical),Dt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Dt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(nc.origin.copy(this.object.position),nc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(nc.direction))<Fx?this.object.lookAt(this.target):(kd.setFromNormalAndCoplanarPoint(this.object.up,this.target),nc.intersectPlane(kd,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>th||8*(1-this._lastQuaternion.dot(this.object.quaternion))>th||this._lastTargetPosition.distanceToSquared(this.target)>th?(this.dispatchEvent(zd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?tn/60*this.autoRotateSpeed*e:tn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Dt.setFromMatrixColumn(t,0),Dt.multiplyScalar(-e),this._panOffset.add(Dt)}_panUp(e,t){this.screenSpacePanning===!0?Dt.setFromMatrixColumn(t,1):(Dt.setFromMatrixColumn(t,0),Dt.crossVectors(this.object.up,Dt)),Dt.multiplyScalar(e),this._panOffset.add(Dt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Dt.copy(s).sub(this.target);let r=Dt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ie,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Ox(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Bx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function zx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hd),this.state=ht.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function kx(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case fi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ht.DOLLY;break;case fi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ht.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ht.ROTATE}break;case fi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ht.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ht.PAN}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(nh)}function Hx(n){switch(this.state){case ht.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ht.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ht.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Vx(n){this.enabled===!1||this.enableZoom===!1||this.state!==ht.NONE||(n.preventDefault(),this.dispatchEvent(nh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Hd))}function Gx(n){this.enabled!==!1&&this._handleKeyDown(n)}function Wx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case pi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ht.TOUCH_ROTATE;break;case pi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ht.TOUCH_PAN;break;default:this.state=ht.NONE}break;case 2:switch(this.touches.TWO){case pi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ht.TOUCH_DOLLY_PAN;break;case pi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ht.TOUCH_DOLLY_ROTATE;break;default:this.state=ht.NONE}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(nh)}function qx(n){switch(this._trackPointer(n),this.state){case ht.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ht.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ht.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ht.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ht.NONE}}function Xx(n){this.enabled!==!1&&n.preventDefault()}function Yx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $x(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var wt=(n,e={})=>new yt({color:n,roughness:.68,metalness:.05,...e});function Qn(n,e,t,i=0,s=0,r=0){let o=new Oe(e,t);return o.position.set(i,s,r),n.add(o),o}function mt(n,e,t,i,s,r=0,o=0,a=0){return Qn(n,new dt(e,t,i),s,r,o,a)}function Fn(n,e,t,i,s,r=0,o=0,a=0,l=64){return Qn(n,new In(e,t,i,l),s,r,o,a)}function sc(n,e,t=6){let s=new Uint8Array(262144);for(let o=0;o<256;o++)for(let a=0;a<256;a++){let c=(a+Math.floor(o/t)%2*Math.floor(t/2))%t<2&&o%t<2?e:n,h=(o*256+a)*4;s[h]=c[0],s[h+1]=c[1],s[h+2]=c[2],s[h+3]=255}let r=new ys(s,256,256,en);return r.colorSpace=Ct,r.magFilter=cn,r.minFilter=Nn,r.generateMipmaps=!0,r.needsUpdate=!0,r}function rc(n,e,t,i,s=96){let r=Qn(n,new fr(e,s),t,0,i);return r.rotation.x=Math.PI/2,r}var gi=Object.freeze({width:.597,depth:.597,thickness:.0535});function Vd(n){let e=new qe,t=new qe;t.name="m100-product-body",e.add(t),e.userData.productBody=t;let i=wt(15790575),s=wt(16514041),r=wt(13225163,{metalness:.45}),o=wt(7568768,{metalness:.24});mt(t,gi.width,.05275,gi.depth,i,0,375e-6);for(let f of[-.285,.285])for(let g of[-.285,.285])mt(t,.015,75e-5,.015,i,f,-.026375,g);mt(t,.563,.004,.563,s,0,-.022);let a=Fn(t,.24,.24,.001,r,0,-.0258);a.name="m100-grille-rim";let l=wt(16777215,{map:sc([157,165,166],[79,90,93],5),metalness:.27,side:vt}),c=rc(t,.231,l,-.02658);c.name="m100-downward-grille",mt(t,.019,.001,.004,wt(6087630,{emissive:557678,emissiveIntensity:.55}),.185,-.0261,.244),Fn(t,.0035,.0035,.001,o,-.181,-.0261,.244,12);let h=wt(11186352,{metalness:.82,roughness:.29}),u=wt(14211541,{metalness:.7,roughness:.22}),d=Math.max(.014,n-gi.thickness/2);mt(e,.081,.014,.081,h,0,gi.thickness/2+.007),mt(e,.038,d*.58,.038,u,0,gi.thickness/2+d*.29),mt(e,.029,d*.54,.029,h,0,gi.thickness/2+d*.73);for(let f of[-.016,.016])mt(e,.004,d*.72,.004,r,f,gi.thickness/2+d*.53);return mt(e,.062,.008,.062,h,0,gi.thickness/2+d-.004),e}var Vr=Object.freeze({diameter:.279,depth:.176}),ih=.012;function Gd(){let n=new qe,e=new qe;e.name="dc20-product-body",n.add(e),n.userData.productBody=e;let t=wt(16185075),i=wt(14146520,{metalness:.3}),s=wt(3423040,{roughness:.87}),r=wt(1514271,{metalness:.45});Fn(e,.112,.117,.159,s,0,.0085),Fn(e,.118,.118,.013,r,0,-.077);let o=Fn(e,Vr.diameter/2,Vr.diameter/2,.008,t,0,-.08);o.name="dc20-white-flange";let a=Qn(e,new Er(.122,Vr.diameter/2,96),i,0,-.088);a.rotation.x=Math.PI/2,a.name="dc20-front-rim";let l=wt(16777215,{map:sc([237,239,237],[183,190,188],5),side:vt}),c=rc(e,.122,l,-.08795);c.name="dc20-downward-grille";for(let g of[-1,1]){let _=Qn(e,new dt(.015,.026,.022),r,g*.109,.008);_.name="dc20-retention-clip"}let h=new Zn,u=.225;h.moveTo(-u,-u),h.lineTo(u,-u),h.lineTo(u,u),h.lineTo(-u,u),h.closePath();let d=new Fi;d.absarc(0,0,.121,0,Math.PI*2,!0),h.holes.push(d);let f=Qn(n,new wr(h),wt(8688283,{side:vt,transparent:!0,opacity:.72}),0,-.088+ih);return f.rotation.x=-Math.PI/2,f.name="dc20-ceiling-tile-demonstration",n}var Zx=n=>n*.0254*16/Math.sqrt(337),jx=n=>n*.0254*9/Math.sqrt(337),_i=n=>({width:Zx(n),height:jx(n)});function oc(n,e){if(n.teachingDevices&&e.visible?.display!==!1&&n.displays.some(_=>{let m=(_i(_.size).width+.07)/2;return _.x-m<.18-1e-9||_.x+m>n.length-.18+1e-9||(_.side==="left"?_.x+m>n.length/2-.05:_.x-m<n.length/2+.05)}))return{error:"auxSpace"};if(n.teachingDevices)return{entries:n.teachingDevices.map((_,m)=>({..._,type:_.type==="qnex"?_.model==="NMP311"?"controller":"podium":_.type,number:n.teachingDevices.slice(0,m+1).filter(p=>p.type===_.type).length,mountHeight:_.type==="ifp"?Math.min(e.mainHeight||1.5,n.height-.1-_i(_.size).height/2):_.type==="station"?1.5:_.type==="camera"?Math.min(n.height-.4,2.4):1.05,install:["ifp","station","camera"].includes(_.type)||_.model==="NMP311"?"wall":"floor"}))};let t=[],{length:i,width:s,height:r}=n,o=Number(e.ifpSize),a=e.visible.ifp===!1?0:Number(e.ifpCount),l=_i(o),c=l.width+.07,h=l.height+.07,u=a*c+(a-1)*.15,d=i/2-u/2;if(a>0&&d<.3||e.visible.station&&d-.15-.72<.3)return{error:"screenSpace"};let f=n.displays||window.AISpeech.auxiliaryDisplaysForWidth(s,i);if(e.visible.display!==!1&&f.some(_=>{let m=_i(_.size).width+.07;return _.x-m/2<.18-1e-9||_.x+m/2>i-.18+1e-9||_.side==="left"&&_.x+m/2>i/2-.05||_.side==="right"&&_.x-m/2<i/2+.05}))return{error:"auxSpace"};let g=Number(e.mainHeight);if(a>0&&(g-h/2<.18||g+h/2>r-.12))return{error:"screenHeight"};for(let _=0;_<a;_++)t.push({id:`ifp-${_+1}`,type:"ifp",size:o,x:d+c*(_+.5)+_*.15,y:0,mountHeight:g,install:"wall"});return e.visible.station&&t.push({id:"station",type:"station",x:d-.15-.72/2,y:0,mountHeight:1.5,install:"wall"}),e.visible.podium&&t.push({id:"podium",type:"podium",model:e.podiumModel,x:Math.max(.8,Math.min(i-.8,i*.32)),y:Math.max(.4,Math.min(s-.4,1.2)),mountHeight:1.05,install:"floor"}),{entries:t}}function Jx(){let n=document.createElement("canvas");n.width=1024,n.height=576;let e=n.getContext("2d"),t=e.createLinearGradient(0,0,1024,576);t.addColorStop(0,"#f7fdff"),t.addColorStop(1,"#bbebfa"),e.fillStyle=t,e.fillRect(0,0,1024,576),e.fillStyle="#1769a0",e.fillRect(0,0,1024,92),e.fillStyle="#fff",e.font="bold 48px Arial",e.fillText("CLASSROOM",48,62),e.fillStyle="#13446c",e.font="bold 54px Arial",e.fillText("Explore \xB7 Learn \xB7 Create",65,215),e.font="31px Arial",e.fillText("Interactive lesson display",68,275),e.fillStyle="#2ab9b4",e.fillRect(70,327,285,125),e.fillStyle="#48a4da",e.fillRect(380,327,245,125),e.fillStyle="#f2b968",e.fillRect(650,327,300,125);let i=new hr(n);return i.colorSpace=Ct,i}function sh(n,e,t=!1){let i=new qe,s=_i(n),r=t?Math.min(e*.7,s.width):s.width,o=r*9/16,a=new Oe(new dt(r+.07,o+.07,.075),new yt({color:14148587,metalness:.3,roughness:.4}));i.add(a);let l=new Oe(new Ht(r,o),new Nt({map:Jx(),toneMapped:!1}));l.position.z=.039,i.add(l);let c=new Oe(new dt(.26,.2,.12),new yt({color:8755368,metalness:.65}));return c.position.z=-.1,i.add(c),i}function Gr(n,e,t,i,s,r,o,a){let l=t/2,c=i/2,h=new Zn;h.moveTo(-l+s,-c),h.absarc(l-s,-c+s,s,-Math.PI/2,0,!1),h.absarc(l-s,c-s,s,0,Math.PI/2,!1),h.absarc(-l+s,c-s,s,Math.PI/2,Math.PI,!1),h.absarc(-l+s,-c+s,s,Math.PI,1.5*Math.PI,!1),h.closePath();let u=new br(h,{depth:1,bevelEnabled:!1,curveSegments:3});u.rotateX(-Math.PI/2);let d=u.attributes.position;for(let f=0;f<d.count;f++){let g=d.getY(f)>.5?o:r,_=(d.getZ(f)+c)/i;d.setY(f,kr.lerp(g[0],g[1],_))}u.computeVertexNormals(),Qn(n,u,a,0,0,0).name=e}function Wd(n,e,t,i,s,r,o,a,l=!1){let c=t/e,h=new Li(new Ht(c*.48,i),s,e),u=new nt;for(let d=0;d<e;d++)u.makeTranslation((d+.5)*c-t/2,0,0),h.setMatrixAt(d,u);h.name="cabinet-vents",h.rotation.y=l?-Math.PI/2:Math.PI,h.position.set(r,o,a),n.add(h)}function qd(){let n=new qe;n.name="NDP200";let e=wt(7830400,{metalness:.28,roughness:.55}),t=wt(8619402,{metalness:.2}),i=wt(5659232),s=wt(2698289),r=wt(11776949,{roughness:.63}),o=wt(12172737,{metalness:.55});mt(n,.572,.027,.518,i,0,.0135,.006),mt(n,.601,.902,.544,e,0,.475,.006),mt(n,.553,.796,.008,s,0,.48,-.269),mt(n,.545,.641,.009,t,0,.409,-.273),mt(n,.545,.139,.01,t,0,.804,-.273),mt(n,.066,.024,.004,s,0,.834,-.28);let a=Fn(n,.01,.01,.006,o,.238,.41,-.28,12);a.rotation.x=Math.PI/2,Wd(n,34,.518,.024,s,0,.059,-.267),mt(n,.012,.578,.545,i,-.308,.578,.006).name="folded-side-shelf",mt(n,.003,.566,.533,t,-.315,.578,.006);for(let c of[-.18,.18]){let h=Fn(n,.01,.01,.07,o,-.311,.87,c,12);h.rotation.x=Math.PI/2}Wd(n,25,.405,.028,s,-.301,.06,.006,!0),Gr(n,"underside-return",.846,.587,.018,[.908,.908],[.936,.936],i),Gr(n,"console-rim",.87,.609,.018,[.935,.935],[.945,.945],i),Gr(n,"console",.864,.6,.018,[.945,.945],[1.079,1.186],e),Gr(n,"slide-track",.862,.596,.016,[1.078,1.185],[1.087,1.195],s),Gr(n,"closed-sliding-cover",.87,.591,.018,[1.087,1.194],[1.105,1.212],r);let l=mt(n,.694,.013,.015,i,0,1.122,-.2315);l.rotation.x=-Math.atan2(.107,.591),mt(n,.545,.059,.002,s,0,1.001,-.301),mt(n,.532,.049,.002,t,0,1.001,-.303),mt(n,.145,.019,.001,s,0,1.001,-.304),mt(n,.0016,.054,.31,s,-.4326,1.038,.055);for(let c of[-.058,-.001,.065,.122])mt(n,.0015,.016,.032,o,-.4337,1.038,c),mt(n,5e-4,.01,.026,s,-.4347,1.038,c);return n}var oh=n=>new yt({color:n,metalness:.16,roughness:.48}),Wr=oh(14870763),ac=oh(3753555),cc=oh(1320251),rh=new Nt({color:4830693,toneMapped:!1});function Gt(n,e,t,i,s=0){let r=new Oe(new dt(...e),i.clone());return r.position.set(...t),r.rotation.x=s,n.add(r),r}function Xd(n){if(n==="NDP200")return qd();let e=new qe;if(Gt(e,[.72,.07,.48],[0,.035,0],ac),n==="SL100")Gt(e,[.59,.86,.37],[0,.48,0],Wr),Gt(e,[.45,.58,.012],[0,.47,.193],cc),Gt(e,[.39,.5,.014],[0,.47,.202],rh),Gt(e,[.77,.065,.49],[0,1.01,0],ac,-.22),Gt(e,[.61,.012,.36],[0,1.052,0],rh,-.22);else{let t=new qe;t.name="ndp600-teaching-desk",e.add(t),Gt(t,[1.6,.07,.8],[0,.865,0],Wr);for(let i of[-.57,.57])Gt(t,[.1,.79,.13],[i,.435,0],Wr),Gt(t,[.36,.045,.68],[i,.023,0],Wr),Gt(t,[.15,.035,.18],[i,.69,0],ac);Gt(t,[1.12,.32,.035],[0,.65,.29],Wr),Gt(t,[.72,.07,.43],[0,.935,.07],ac),Gt(t,[.66,.025,.39],[0,1.01,.07],cc,-.39),Gt(t,[.6,.028,.32],[0,1.024,.07],rh,-.39),Gt(t,[.46,.017,.16],[-.19,.909,-.28],cc),Gt(t,[.08,.025,.11],[.36,.912,-.28],cc)}return e}function Yd(){let n=new qe,e=(t,i,s,r,o,a,l)=>{let c=new Oe(new dt(t,i,s),l);c.position.set(r,o,a),n.add(c)};e(.72,.43,.075,0,0,0,new yt({color:14148585,metalness:.25})),e(.66,.37,.008,0,0,.041,new Nt({color:2319746,toneMapped:!1}));for(let t=0;t<3;t++)e(.15,.13,.009,(t-1)*.19,-.02,.049,new Nt({color:[5297866,10083820,16043386][t],toneMapped:!1}));return n}function $d(n){let e=new qe,t=new yt({color:14148585,metalness:.25,roughness:.5}),i=new yt({color:1516344}),s=new yt({color:1457244,metalness:.5,roughness:.15}),r=new qe;r.name="camera-head",r.position.y=.21;let o=(a,l,c,h,u,d,f)=>{let g=new Oe(new dt(l,c,h),f);g.position.set(0,u,d),a.add(g)};o(e,.51,.11,.28,.025,0,t),o(r,.29,.22,.2,-.03,0,t);for(let[a,l,c,h]of[[.105,.18,.15,i],[.07,.015,.25,s]]){let u=new Oe(new In(a,a,l,24),h);u.rotation.x=Math.PI/2,u.position.set(0,0,c),r.add(u)}return n==="teacher"&&(r.rotation.y=Math.PI),e.add(r),e}function Zd(){let n=new qe,e=new Oe(new dt(.34,.075,.22),new yt({color:14148585}));n.add(e);let t=new Oe(new dt(.28,.035,.008),new yt({color:1516344}));return t.position.z=.114,n.add(t),n}var lc=(n,e={})=>new yt({color:n,roughness:.58,metalness:.12,...e}),Kx=lc(1516344),ah=lc(9873593,{metalness:.7}),Qx=lc(593692);function jd(n,e,t,i=0,s=0,r=0){let o=new Oe(n,e.clone());return o.position.set(i,s,r),t.add(o),o}function qr(n,e,t,i,s,r=0,o=0,a=0){return jd(new In(e,t,i,24),s,n,r,o,a)}function ev(n,e){let t=lc(11828218,{metalness:.35});e>.11&&qr(n,.019,.019,e-.075,ah,0,(e-.075)/2+.075),qr(n,.22,.22,.035,Kx,0,.08),qr(n,.2,.2,.075,t,0,-.005),qr(n,.15,.15,.012,Qx,0,-.048);for(let i=0;i<6;i++){let s=i*Math.PI/3;jd(new Tr(.012,8,8),ah,n,Math.sin(s)*.11,-.055,Math.cos(s)*.11)}}function Jd(n,e,t){let i=new qe,s=["m100","m40","dc20"].includes(n.type),r=n.type==="display",o,a,l,c=e.heightProfile?.mode==="split"&&n.y>=e.heightProfile.split?e.heightProfile.rear:e.heightProfile?.front??e.height;if(n.type==="dc20")o=c-ih,l=o+Vr.depth/2,a="recessed",i=Gd();else if(s){let f=Math.min(Math.max(t.audioDrop,0),Math.max(0,c-.3));o=c-f,a="ceiling",n.type==="m100"?i=Vd(f):ev(i,f)}else if(n.type==="ifp")o=n.mountHeight,a="wall",i=sh(n.size,e.length);else if(n.type==="camera"||n.type==="controller")o=n.mountHeight,a=n.install,i=n.type==="camera"?$d(n.role):Zd();else if(n.type==="station")o=n.mountHeight,a="wall",i=Yd();else if(n.type==="podium")o=n.model==="NDP200"?0:n.mountHeight,a="floor",i=Xd(n.model);else if(r){let f=_i(n.size).height+.07;o=Math.max(f/2+.2,Math.min(c-f/2-.15,c-t.auxDrop)),a="suspended",i=sh(n.size,e.length);let g=Math.max(.08,c-o-f/2);for(let _ of[-.22,.22])qr(i,.014,.014,g,ah,_,f/2+g/2)}let[h,u,d]=Kr(e,n.x,n.y,n.type==="podium"?0:l??o);return i.position.set(h,u,!e.teachingDevices&&["ifp","station"].includes(n.type)?-e.width/2+.13:d),i.userData.device={...n,number:n.number,mountHeight:o,install:a},i.traverse(f=>{f.isMesh&&(f.userData.selectGroup=i)}),i}function Xr(n){n.traverse(e=>{if(e.isInstancedMesh&&e.dispose(),!e.geometry||!e.material)return;e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(i=>{i.map?.dispose(),i.dispose()})}),n.clear()}var tv={remote:1884027,pa:11497710,speaker:3775224};function nv(n,e,t){return e.flatMap(({userData:i})=>{let s=i.device;if(!["m100","m40","dc20"].includes(s.type))return[];let r=window.AISpeech.radiiForDevice(s,n.radii,n.heightProfile,n.width),o=s.type==="dc20";return(o?["speaker"]:["remote","pa"]).filter(a=>t[a]).map(a=>({id:s.id,kind:a,x:s.x-n.length/2,z:s.y-n.width/2,top:s.mountHeight,bottom:o?.032:1.2,radius:o?r.dc20:r[s.type+(a==="remote"?"Pickup":"PA")]})).filter(a=>a.top>a.bottom&&a.radius>0)})}var hc=class{constructor(e,t){this.root=new qe,this.root.name="audio-coverage-volumes",e.add(this.root),t.localClippingEnabled=!0,this.entries=[],this.phase=0,this.lastTime=null}sync(e,t,i,s){Xr(this.root),this.entries=[],this.settings=i;let r=[new Ft(new R(1,0,0),e.length/2),new Ft(new R(-1,0,0),e.length/2),new Ft(new R(0,0,1),e.width/2),new Ft(new R(0,0,-1),e.width/2)];for(let o of nv(e,t,i)){if(i.onlySelected&&o.id!==s)continue;let l=!s||o.id===s?1:.3,c=tv[o.kind],h=(m,p=!1)=>new(p?Sn:Nt)({color:c,transparent:!0,opacity:m*l,depthWrite:!1,clippingPlanes:r,...p?{}:{side:vt},toneMapped:!1}),u=o.top-o.bottom,d=new Oe(new pr(o.radius,u,72,1,!0),h(.055));d.position.set(o.x,(o.top+o.bottom)/2,o.z),this.root.add(d);let f=m=>{let p=Array.from({length:73},(y,x)=>{let b=x/72*Math.PI*2;return new R(Math.cos(b),0,Math.sin(b))}),S=new Ui(new xt().setFromPoints(p),h(.42,!0));return this.root.add(S),{line:S,offset:m}},g=[.25,.5,.75,1].map(f),_=new hi(new xt().setFromPoints([0,Math.PI/2,Math.PI,Math.PI*1.5].flatMap(m=>[new R(o.x,o.top,o.z),new R(o.x+o.radius*Math.cos(m),o.bottom,o.z+o.radius*Math.sin(m))])),h(.28,!0));this.root.add(_),this.entries.push({spec:o,rings:g})}this.draw()}draw(){for(let{spec:e,rings:t}of this.entries)for(let{line:i,offset:s}of t){let o=this.settings.animation&&!this.settings.reducedMotion?((s+(e.kind==="speaker"?this.phase:-this.phase))%1+1)%1:s;i.scale.setScalar(Math.max(.001,e.radius*o)),i.position.set(e.x,e.top-(e.top-e.bottom)*o,e.z)}}tick(e){this.lastTime!==null&&this.settings?.animation&&!this.settings.reducedMotion&&!this.frozen&&(this.phase=(this.phase+Math.min(.05,(e-this.lastTime)/1e3)/3)%1),this.lastTime=e,!this.frozen&&this.settings&&this.draw()}};var iv={remote:1884027,pa:11497710,speaker:3775224};function Kd(n,e,t){let i=e.devices.flatMap(l=>{let c=t==="speaker"?"dc20":`${l.type}_${t==="remote"?"pickup":"pa"}`;if(e.show?.[c]===!1)return[];if(t==="speaker")return l.type==="dc20"?[{device:l,radius:e.radii.dc20}]:[];if(l.type==="dc20")return[];let h=window.AISpeech.radiiForDevice(l,e.radii,e.heightProfile,e.width),u=t==="remote"?l.type==="m100"?h.m100Pickup:h.m40Pickup:l.type==="m100"?h.m100PA:h.m40PA;return[{device:l,radius:u}]}),s=.35,r=[];for(let l=0;l<e.length;l+=s)for(let c=0;c<e.width;c+=s){let h=Math.min(l+s/2,e.length),u=Math.min(c+s/2,e.width);if(!i.some(({device:g,radius:_})=>(h-g.x)**2+(u-g.y)**2<=_**2))continue;let d=Math.min(l+s,e.length),f=Math.min(c+s,e.width);for(let[g,_]of[[l,c],[d,c],[d,f],[l,c],[d,f],[l,f]])r.push(...Kr(e,g,_,t==="remote"?.018:t==="pa"?.025:.032))}let o=new xt;o.setAttribute("position",new je(r,3));let a=new Oe(o,new Nt({color:iv[t],transparent:!0,opacity:.32,side:vt,depthWrite:!1}));a.name=`coverage-${t}`,n.add(a)}function Qd(n,e){let t=new qe;t.name="reference-furniture";let i=[[1.2,.046,.55,0,.727,0]],s=[],r=[];for(let c of[-.53,.53])for(let h of[-.21,.21])r.push([.04,.705,.04,c,.353,h]);for(let c of[-.27,.27]){s.push([.4,.04,.4,c,.43,.58]),s.push([.4,.28,.04,c,.66,.76]);for(let h of[-.15,.15])r.push([.03,.41,.03,c+h,.205,.43]),r.push([.03,.69,.03,c+h,.345,.752])}let o=Math.max(...[...i,...s,...r].map(c=>c[5]+c[2]/2)),a=e(n,o),l=new nt;for(let[c,h]of[[i,"#c99f73"],[s,"#729baa"],[r,"#829ca9"]]){let u=new Li(new dt,new yt({color:h,roughness:.8}),a.length*c.length),d=0;for(let[f,,g]of a)for(let[_,m,p,S,y,x]of c)u.setMatrixAt(d++,l.makeScale(_,m,p).setPosition(f+S,y,g+x));u.castShadow=u.receiveShadow=!0,t.add(u)}return t}function sv({width:n,depth:e},t){let i=e-.6-t,s=Math.min(3,i);if(s-.275<1.4||n<2)return[];let r=Math.max(1,Math.floor(n/3.2)),o=Math.max(1,Math.floor((e-2.5)/2.5)),a=o>1?(i-s)/(o-1):0;return Array.from({length:o*r},(l,c)=>[(c%r+.5)*n/r,0,s+Math.floor(c/r)*a])}function ef(n){let e=Qd({width:n.length,depth:n.width},sv);return e.position.set(-n.length/2,0,-n.width/2),e}var rv=(n,e={})=>new yt({color:n,roughness:.82,...e}),uc=class{constructor(e,t){this.canvas=e,this.onSelect=t,this.deviceObjects=[],this.scene=new cr,this.scene.background=new He(792361),this.scene.fog=new ar(792361,30,78),this.camera=new kt(43,1,.05,150),this.renderer=new ec({canvas:e,antialias:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=Ct,this.renderer.toneMapping=ua,this.controls=new ic(this.camera,e),this.controls.enableDamping=!0,this.controls.minDistance=.18,this.controls.addEventListener("start",()=>{this.viewName=null,this.updateViewButtons()}),this.controls.maxDistance=95,this.controls.maxPolarAngle=Math.PI*.495,this.raycaster=new Dr,this.pointer=new ie,this.room=new qe,this.scene.add(this.room),this.ambient=new Rr(13232383,2504524,2.5),this.scene.add(this.ambient);let i=new Es(16777215,2.4);i.position.set(-9,16,-12),this.scene.add(i);let s=new Es(14873087,1.7);s.position.set(3,-7,6),this.scene.add(s);let r=()=>this.resize();this.resizeObserver=new ResizeObserver(r),this.resizeObserver.observe(e.parentElement);let o;e.addEventListener("pointerdown",a=>{o=[a.clientX,a.clientY]}),e.addEventListener("pointerup",a=>{if(!o||Math.hypot(a.clientX-o[0],a.clientY-o[1])>5)return;let l=e.getBoundingClientRect();this.pointer.set((a.clientX-l.left)/l.width*2-1,-(a.clientY-l.top)/l.height*2+1),this.raycaster.setFromCamera(this.pointer,this.camera);let c=this.raycaster.intersectObjects(this.deviceObjects,!0)[0];c&&this.onSelect(c.object.userData.selectGroup?.userData.device)}),this.volumes=new hc(this.scene,this.renderer),this.resize(),this.animate()}resize(){let e=this.canvas.parentElement.getBoundingClientRect(),t=Math.max(1,Math.floor(e.width)),i=Math.max(1,Math.floor(e.height));this.renderer.setSize(t,i,!1),this.camera.aspect=t/i,this.camera.updateProjectionMatrix(),this.plan&&this.viewName&&this.setView(this.viewName)}animate(){this.volumes?.tick(performance.now()),this.controls.update(),this.renderer.render(this.scene,this.camera),this.onFrame?.(),this.frame=requestAnimationFrame(()=>this.animate())}build(e,t,i,s){this.focusTile=null,Xr(this.room),this.plan=e,this.cameraVisible=i.camera!==!1;let r=Math.max(e.length,e.width);this.camera.far=Math.max(250,r*12),this.camera.updateProjectionMatrix(),this.controls.maxDistance=Math.max(95,r*12),this.scene.fog.near=Math.max(30,r*3),this.scene.fog.far=Math.max(78,r*8),this.deviceObjects=[];let o=new Oe(new Ht(e.length,e.width),this.shellMaterial("floor"));o.rotation.x=-Math.PI/2,this.room.add(o);let a=new Ir(Math.max(e.length,e.width),Math.ceil(Math.max(e.length,e.width)),4547706,3163997);a.scale.set(e.length/Math.max(e.length,e.width),1,e.width/Math.max(e.length,e.width)),a.position.y=.008,a.userData.themeGrid=!0;let l=new He(4547706),c=a.geometry.attributes.color;a.userData.centerIndices=new Set(Array.from({length:c.count},(S,y)=>y).filter(S=>Math.abs(c.getX(S)-l.r)<1e-6)),this.room.add(a);let h=this.shellMaterial("glass",{transparent:!0,opacity:.22,side:vt,depthWrite:!1}),u=e.heightProfile,d=u?.mode==="split"?u.split:e.width,f=u?.front??e.height,g=u?.mode==="split"?u.rear:f,_=new Oe(new Ht(e.length,g),h);_.position.set(0,g/2,e.width/2),this.room.add(_);for(let S of[-1,1])for(let[y,x,b]of[[0,d,f],[d,e.width,g]]){if(x<=y)continue;let T=new Oe(new Ht(x-y,b),h);if(T.rotation.y=Math.PI/2,T.position.set(S*e.length/2,b/2,(y+x)/2-e.width/2),this.room.add(T),S===-1){let C=new Oe(new Ht(e.length,x-y),this.shellMaterial("glass",{transparent:!0,opacity:.08,side:vt,depthWrite:!1}));C.rotation.x=-Math.PI/2,C.position.set(0,b,(y+x)/2-e.width/2),C.name="ceiling-zone",this.room.add(C);let I=new hi(new mr(new dt(e.length,b,x-y)),new Sn({color:4024708,transparent:!0,opacity:.52}));I.position.set(0,b/2,(y+x)/2-e.width/2),I.material.userData.themeRole="trim",this.room.add(I)}}if(u?.mode==="split"&&f!==g){let S=new Oe(new Ht(e.length,Math.abs(f-g)),h);S.position.set(0,(f+g)/2,d-e.width/2),this.room.add(S)}this.addDoors(e);let m=new Oe(new Ht(e.length,f),this.shellMaterial("front",{side:vt}));m.position.set(0,f/2,-e.width/2),this.room.add(m);let p=new Oe(new dt(Math.max(1,e.length*.58),.045,.7),this.shellMaterial("platform"));p.position.set(0,.023,-e.width/2+.55),this.room.add(p),this.room.add(ef(e)),this.setTheme(this.theme||"dark"),s.forEach(S=>this.addDevice(S,t,i)),e.displays.forEach(S=>this.addDevice({...S,type:"display"},t,i)),e.devices.forEach(S=>this.addDevice(S,t,i));for(let S of["remote","pa","speaker"])t.floorProjection&&i[S]&&Kd(this.room,e,S)}addDevice(e,t,i){if(i[e.type]===!1)return;let s=Jd(e,this.plan,t);this.room.add(s),this.deviceObjects.push(s)}shellMaterial(e,t={}){let i=rv(ks[this.theme||"dark"][e],t);return i.userData.themeRole=e,i}addDoors({length:e,width:t,height:i,heightProfile:s}){let r=new qe;r.name="room-doors";let{width:o,centers:a}=window.AISpeech.sideWallDoors(t),l=this.doorSide==="left"?-e/2+.09:e/2-.09;for(let[c,h]of a.entries()){let u=s?.mode==="split"&&h>=s.split?s.rear:s?.front??i,d=Math.min(2.18,u-.12),f=new qe;f.name=`room-door-${c+1}`;let g=(m,p,S)=>{let y=new Oe(new dt(...m),this.shellMaterial(S));y.position.set(...p),f.add(y)},_=h-t/2;g([.09,d,o],[l,d/2,_],"door"),g([.1,d-.14,o-.14],[l,d/2,_],"doorPanel"),g([.115,d*.22,o*.42],[l,d*.75,_],"window"),g([.15,.04,.14],[l,d*.45,_+o*.3],"handle"),r.add(f)}this.room.add(r)}setDoorSide(e){if(this.doorSide=e==="left"?"left":"right",!this.plan)return;let t=this.room.getObjectByName("room-doors");t&&(Xr(t),t.removeFromParent()),this.addDoors(this.plan)}setTheme(e){this.theme=e;let t=ks[e];this.scene.background.set(t.background),this.scene.fog.color.set(t.background),this.ambient.color.set(t.sky),this.ambient.groundColor.set(t.ground),this.renderer.toneMappingExposure=t.exposure,this.room.traverse(i=>{let s=i.material?.userData.themeRole;if(s&&i.material.color.set(t[s]),i.userData.themeGrid){let r=i.geometry.attributes.color;for(let o=0;o<r.count;o++){let a=new He(i.userData.centerIndices.has(o)?t.gridCenter:t.grid);r.setXYZ(o,a.r,a.g,a.b)}r.needsUpdate=!0}})}updateViewButtons(){document.querySelectorAll("[data-view]").forEach(e=>{let t=e.dataset.view===this.viewName;e.classList.toggle("active",t),e.setAttribute("aria-pressed",String(t))})}setView(e){this.focusTile&&(this.focusTile.visible=!0),this.focusTile=null,this.viewName=e,this.updateViewButtons(),this.controls.maxPolarAngle=Math.PI*.495;let{length:t,width:i,height:s}=this.plan,r=Math.max(t,i),o=Math.max(1,1.2/this.camera.aspect),a=new R(0,s*.34,0),l={overview:[r*.78*o,r*.78*o,r*.94*o],top:[.01,r*1.35*o,.01],stage:[0,s*.75,-i/2+Math.min(2,i*.3)],audience:[0,s*.85,i/2+Math.max(2,i*.25)]},c=l[e]||l.overview;if(this.camera.position.set(...c),e==="overview"||e==="top"){let h=this.camera.position.clone().sub(a).normalize(),u=new R(0,1,0).cross(h).normalize(),d=h.clone().cross(u),f=Math.tan(this.camera.fov*Math.PI/360)*.8,g=f*this.camera.aspect,_=1;for(let m of[-t/2,t/2])for(let p of[0,s])for(let S of[-i/2,i/2]){let y=new R(m,p,S).sub(a),x=y.dot(h);_=Math.max(_,x+Math.abs(y.dot(u))/g,x+Math.abs(y.dot(d))/f)}this.camera.position.copy(a).addScaledVector(h,_)}this.controls.target.copy(a),this.camera.lookAt(a),this.controls.update()}focusDevice(e){let t=this.deviceObjects.find(o=>o.userData.device.id===e);if(!t)return!1;this.focusTile&&(this.focusTile.visible=!0),this.focusTile=null;let i=t.userData.device;i.type==="dc20"&&(this.focusTile=t.getObjectByName("dc20-ceiling-tile-demonstration"),this.focusTile&&(this.focusTile.visible=!1)),this.viewName=null,this.updateViewButtons(),this.controls.maxPolarAngle=Math.PI*.96;let s=t.position.clone(),r=i.type==="m100"?new R(.25,-.64,.95):i.type==="dc20"?new R(.43,-.25,.52):i.type==="podium"?new R(1.7,1.65,-1.7):new R(.7,.35,1.15);if(i.model==="NDP200"){s.y+=.606;let o=i.x<1.5?Math.min(2.05,this.plan.length-i.x-.18):-Math.min(2.05,i.x-.18),a=i.y<.8?1.05:-Math.min(1.55,i.y-.25);r.set(o,.95,a)}return this.controls.target.copy(s),this.camera.position.copy(s).add(r),this.camera.lookAt(s),this.controls.update(),!0}exportPNG(e){let t=this.volumes.frozen;this.volumes.frozen=!0;try{this.renderer.render(this.scene,this.camera);let i=document.createElement("canvas");i.width=this.canvas.width,i.height=this.canvas.height;let s=i.getContext("2d");return s.drawImage(this.canvas,0,0),e?.drawOnCanvas(s),i.toDataURL("image/png")}finally{this.volumes.frozen=t}}};var tf={brandSub:"Planificateur de salle 3D",preset:"Salle",custom:"Personnalis\xE9e",length:"Longueur X",width:"Profondeur Y",height:"Hauteur",recalculate:"Recalculer",export:"Exporter en PNG",sceneCaption:"Vue interactive de la salle",overview:"Vue g\xE9n\xE9rale",top:"Vue de dessus",stage:"Estrade",audience:"\xC9l\xE8ves",sceneHint:"Glisser pour tourner \xB7 Molette pour zoomer \xB7 Glisser avec le bouton droit pour d\xE9placer",planLabel:"CONFIGURATION ACTUELLE",title:"Couverture de la salle en 3D",intro:"Les plans ind\xE9pendants utilisent les r\xE8gles de recommandation de la vue 2D.",importedIntro:"Les dimensions, \xE9quipements et positions au sol sont conserv\xE9s depuis le d\xE9ploiement 2D import\xE9.",coverage:"Projection au sol",projection:"R\xE8gles 2D",coverageNote:"Projection au sol des r\xE8gles 2D, sans validation acoustique 3D.",selection:"\xC9quipement s\xE9lectionn\xE9",demo:"D\xE9mo",selectPrompt:"Cliquez sur un \xE9quipement ou s\xE9lectionnez-le ci-dessous.",settings:"Param\xE8tres et \xE9quipements",visibility:"Visibilit\xE9",aux:"\xC9crans auxiliaires",remote:"Captation pour les participants distants",pa:"Captation pour la sonorisation locale",speaker:"Projection des haut-parleurs",showLabels:"Noms des \xE9quipements",auxSpace:"Les deux \xE9crans auxiliaires ne tiennent pas dans cette salle. Augmentez sa longueur ou masquez-les.",paNote:"Les M100/M40 n\u2019\xE9mettent pas de son. La sonorisation locale n\xE9cessite des DC20.",install:"Hauteurs de montage de la d\xE9mo",audioDrop:"M100/M40 sous le plafond",mainHeight:"Centre de l\u2019IFP",auxDrop:"\xC9crans auxiliaires sous le plafond",dc20MountNote:"La grille du DC20 se situe \xE0 12 mm sous le plafond ; son bo\xEEtier est au-dessus.",radii:"Rayons de couverture 2D \xB7 m",devices:"\xC9quipements",bom:"\xC9quipements recommand\xE9s",bomNote:"DU11 et DSP figurent dans la nomenclature ; aucun emplacement de montage dans la salle n\u2019est sp\xE9cifi\xE9.",main:"\xC9cran interactif IFP",display:"\xC9crans auxiliaires",ceiling:"Montage au plafond",suspended:"Suspendu",wall:"Fixation murale",floor:"Au sol",visualConfig:"\xC9quipements p\xE9dagogiques \xB7 D\xE9mo 3D",ifpCount:"Nombre d\u2019IFP",ifpSize:"Diagonale de l\u2019IFP",podiumModel:"Mod\xE8le du pupitre",podium:"Pupitre",station:"Station d\u2019enregistrement",screenSpace:"Les IFP et la station ne tiennent pas sur le mur avant. R\xE9duisez le nombre ou la taille des \xE9crans, ou masquez la station.",screenHeight:"L\u2019IFP ne tient pas \xE0 cette hauteur. Ajustez sa taille, sa hauteur centrale ou la hauteur de la salle.",demoEquipment:"\xC9quipements p\xE9dagogiques 3D",position:"Position 2D",demoPosition:"Position au sol de la d\xE9mo",demoDimensions:"Dimensions de la d\xE9mo",mountHeight:"Hauteur de montage",installMethod:"Montage",assumption:"Hypoth\xE8se de d\xE9monstration",recessed:"Encastr\xE9 dans le plafond",dimensions:"Dimensions du produit",focusDevice:"Voir l\u2019\xE9quipement de pr\xE8s",area:"Surface",unit:"m",du11:"DU11",channels:"canaux utilis\xE9s",invalid:"Saisissez une salle valide : X de 2\u201340 m, Y de 2\u201340 m, hauteur de 2\u20134 m.",imported:"Plan issu de la 2D \xB7 Modifiez le d\xE9ploiement en 2D, puis ouvrez \xE0 nouveau la vue 3D. Les statistiques conservent les param\xE8tres de couverture import\xE9s.",doorSide:"C\xF4t\xE9 des portes",doorRight:"Mur de droite",doorLeft:"Mur de gauche",reset:"Restaurer les valeurs de la d\xE9mo",webgl:"WebGL n\u2019est pas disponible. Activez l\u2019acc\xE9l\xE9ration mat\xE9rielle dans votre navigateur."};var nf={brandSub:"3D \uAD50\uC2E4 \uC124\uACC4",preset:"\uACF5\uAC04",custom:"\uC0AC\uC6A9\uC790 \uC9C0\uC815",length:"\uAE38\uC774 X",width:"\uAE4A\uC774 Y",height:"\uB192\uC774 (m)",recalculate:"\uB2E4\uC2DC \uACC4\uC0B0",export:"PNG \uB0B4\uBCF4\uB0B4\uAE30",sceneCaption:"\uC778\uD130\uB799\uD2F0\uBE0C \uACF5\uAC04 \uBCF4\uAE30",overview:"\uC804\uCCB4 \uBCF4\uAE30",top:"\uD3C9\uBA74 \uBCF4\uAE30",stage:"\uAD50\uB2E8",audience:"\uD559\uC0DD\uC11D",sceneHint:"\uB4DC\uB798\uADF8: \uD68C\uC804 \xB7 \uD720: \uD655\uB300/\uCD95\uC18C \xB7 \uC624\uB978\uCABD \uB4DC\uB798\uADF8: \uC774\uB3D9",planLabel:"\uD604\uC7AC \uAD6C\uC131",title:"3D \uAD50\uC2E4 \uCEE4\uBC84\uB9AC\uC9C0",intro:"\uB3C5\uB9BD \uACC4\uD68D\uC740 2D\uC640 \uAC19\uC740 \uCD94\uCC9C \uADDC\uCE59\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4.",importedIntro:"\uACF5\uAC04 \uD06C\uAE30, \uC7A5\uBE44 \uBC0F \uBC14\uB2E5 \uC704\uCE58\uB294 \uAC00\uC838\uC628 2D \uBC30\uCE58\uC640 \uAC19\uC2B5\uB2C8\uB2E4.",coverage:"\uBC14\uB2E5 \uD22C\uC601",projection:"2D \uADDC\uCE59",coverageNote:"2D \uADDC\uCE59\uC758 \uBC14\uB2E5 \uD22C\uC601\uC774\uBA70 \uAC80\uC99D\uB41C 3D \uC74C\uD5A5 \uC2DC\uBBAC\uB808\uC774\uC158\uC774 \uC544\uB2D9\uB2C8\uB2E4.",selection:"\uC120\uD0DD\uD55C \uC7A5\uBE44",demo:"\uB370\uBAA8",selectPrompt:"\uC7A5\uBE44\uB97C \uD074\uB9AD\uD558\uAC70\uB098 \uC544\uB798\uC5D0\uC11C \uC120\uD0DD\uD558\uC138\uC694.",settings:"\uC124\uC815 \uBC0F \uC7A5\uBE44",visibility:"\uD45C\uC2DC \uC124\uC815",aux:"\uBCF4\uC870 \uD654\uBA74",remote:"\uC6D0\uACA9 \uC218\uC74C",pa:"\uD604\uC7A5 \uD655\uC131 \uC218\uC74C",speaker:"\uC2A4\uD53C\uCEE4 \uD22C\uC601",showLabels:"\uC7A5\uBE44 \uC774\uB984",auxSpace:"\uBCF4\uC870 \uD654\uBA74 \uB450 \uAC1C\uAC00 \uACF5\uAC04\uC5D0 \uB9DE\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uAE38\uC774\uB97C \uB298\uB9AC\uAC70\uB098 \uD654\uBA74\uC744 \uC228\uAE30\uC138\uC694.",paNote:"\uB9C8\uC774\uD06C \uC790\uCCB4\uB294 \uC18C\uB9AC\uB97C \uB0B4\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uD604\uC7A5 \uD655\uC131\uC5D0\uB294 \uCC9C\uC7A5 \uC2A4\uD53C\uCEE4\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.",install:"\uC608\uC2DC \uC124\uCE58 \uB192\uC774",audioDrop:"\uCC9C\uC7A5 \uC544\uB798 M100/M40",mainHeight:"IFP \uC911\uC2EC \uB192\uC774",auxDrop:"\uBCF4\uC870 \uD654\uBA74 \uCC9C\uC7A5 \uC774\uACA9",dc20MountNote:"DC20 \uC804\uBA74\uC740 \uCC9C\uC7A5 \uC544\uB798 12 mm, \uBCF8\uCCB4\uB294 \uCC9C\uC7A5 \uC704\uC5D0 \uBC30\uCE58\uB429\uB2C8\uB2E4.",radii:"2D \uCEE4\uBC84\uB9AC\uC9C0 \uBC18\uACBD \xB7 m",devices:"\uC7A5\uBE44",bom:"\uAD8C\uC7A5 \uC7A5\uBE44",bomNote:"DU11\uACFC DSP\uB294 \uC7A5\uBE44 \uBAA9\uB85D\uC5D0 \uD3EC\uD568\uB418\uBA70 \uAD50\uC2E4 \uC124\uCE58 \uC704\uCE58\uB294 \uC9C0\uC815\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.",main:"IFP \uB300\uD654\uD615 \uD654\uBA74",display:"\uBCF4\uC870 \uD654\uBA74",ceiling:"\uCC9C\uC7A5 \uC124\uCE58",suspended:"\uB9E4\uB2EC\uAE30 \uC124\uCE58",wall:"\uBCBD\uBA74 \uC124\uCE58",floor:"\uBC14\uB2E5 \uBC30\uCE58",visualConfig:"\uAD50\uC721 \uC7A5\uBE44 \xB7 3D \uC2DC\uC5F0",ifpCount:"IFP \uC218\uB7C9",ifpSize:"IFP \uD06C\uAE30",podiumModel:"\uAC15\uC758\uB300 \uBAA8\uB378",podium:"\uAC15\uC758\uB300",station:"\uB179\uD654 \uC2A4\uD14C\uC774\uC158",screenSpace:"IFP\uC640 \uC2A4\uD14C\uC774\uC158\uC774 \uC804\uBA74 \uBCBD\uC5D0 \uB9DE\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uD654\uBA74 \uC218\xB7\uD06C\uAE30\uB97C \uC904\uC774\uAC70\uB098 \uC2A4\uD14C\uC774\uC158\uC744 \uC228\uAE30\uC138\uC694.",screenHeight:"IFP\uAC00 \uD604\uC7AC \uB192\uC774\uC5D0 \uB9DE\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uD06C\uAE30, \uC911\uC2EC \uB192\uC774 \uB610\uB294 \uCC9C\uC7A5 \uB192\uC774\uB97C \uC870\uC815\uD558\uC138\uC694.",demoEquipment:"3D \uAD50\uC721 \uC7A5\uBE44",position:"2D \uC704\uCE58",demoPosition:"\uC608\uC2DC \uBC14\uB2E5 \uC704\uCE58",demoDimensions:"\uC608\uC2DC \uD06C\uAE30",mountHeight:"\uC124\uCE58 \uB192\uC774",installMethod:"\uC124\uCE58 \uBC29\uC2DD",assumption:"\uC2DC\uC5F0\uC6A9 \uAC00\uC815",recessed:"\uCC9C\uC7A5 \uB9E4\uB9BD",dimensions:"\uC81C\uD488 \uD06C\uAE30",focusDevice:"\uC7A5\uBE44 \uD655\uB300 \uBCF4\uAE30",area:"\uBA74\uC801",unit:"m",du11:"DU11",channels:"\uC0AC\uC6A9 \uCC44\uB110",invalid:"\uC720\uD6A8\uD55C \uACF5\uAC04\uC744 \uC785\uB825\uD558\uC138\uC694: X 2\u201340 m, Y 2\u201340 m, \uB192\uC774 2\u20134 m.",imported:"2D \uACC4\uD68D \xB7 \uC218\uC815 \uD6C4 2D\uC5D0\uC11C 3D \uBCF4\uAE30\uB97C \uB2E4\uC2DC \uB204\uB974\uC138\uC694. \uD1B5\uACC4\uB294 \uAC00\uC838\uC628 \uCEE4\uBC84\uB9AC\uC9C0 \uC124\uC815\uC744 \uC720\uC9C0\uD569\uB2C8\uB2E4.",doorSide:"\uBB38 \uC704\uCE58",doorRight:"\uC624\uB978\uCABD \uBCBD",doorLeft:"\uC67C\uCABD \uBCBD",reset:"\uB370\uBAA8 \uAE30\uBCF8\uAC12 \uBCF5\uC6D0",webgl:"WebGL\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D\uC744 \uC9C0\uC6D0\uD558\uB294 \uBE0C\uB77C\uC6B0\uC800\uB97C \uC0AC\uC6A9\uD558\uC138\uC694."};var sf={brandSub:"3D \u0430\u043D\u0433\u0438\u0439\u043D \u0442\u04E9\u043B\u04E9\u0432\u043B\u04E9\u043B\u0442",preset:"\u04E8\u0440\u04E9\u04E9",custom:"\u0422\u0443\u0441\u0433\u0430\u0439 \u0445\u044D\u043C\u0436\u044D\u044D",length:"\u0423\u0440\u0442 X",width:"\u0413\u04AF\u043D Y",height:"\u04E8\u043D\u0434\u04E9\u0440 (\u043C)",recalculate:"\u0414\u0430\u0445\u0438\u043D \u0442\u043E\u043E\u0446\u043E\u043E\u043B\u043E\u0445",export:"PNG \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u043B\u043E\u0445",sceneCaption:"\u04E8\u0440\u04E9\u04E9\u043D\u0438\u0439 \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432 \u0445\u0430\u0440\u0430\u0433\u0434\u0430\u0446",overview:"\u0415\u0440\u04E9\u043D\u0445\u0438\u0439",top:"\u0414\u044D\u044D\u0440\u044D\u044D\u0441",stage:"\u0411\u0430\u0433\u0448\u0438\u0439\u043D \u0445\u044D\u0441\u044D\u0433",audience:"\u0421\u0443\u0440\u0430\u043B\u0446\u0430\u0433\u0447\u0438\u0434",sceneHint:"\u0427\u0438\u0440\u044D\u0445: \u044D\u0440\u0433\u04AF\u04AF\u043B\u044D\u0445 \xB7 \u0413\u04AF\u0439\u043B\u0433\u044D\u0445: \u0442\u043E\u043C\u0440\u0443\u0443\u043B\u0430\u0445 \xB7 \u0411\u0430\u0440\u0443\u0443\u043D \u0447\u0438\u0440\u044D\u043B\u0442: \u0448\u0438\u043B\u0436\u04AF\u04AF\u043B\u044D\u0445",planLabel:"\u041E\u0414\u041E\u041E\u0413\u0418\u0419\u041D \u0422\u04E8\u041B\u04E8\u0412\u041B\u04E8\u0413\u04E8\u04E8",title:"3D \u0430\u043D\u0433\u0438\u0439\u043D \u0445\u0430\u043C\u0440\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D",intro:"\u0422\u0443\u0441\u0434\u0430\u0430 \u0442\u04E9\u043B\u04E9\u0432\u043B\u04E9\u0433\u04E9\u04E9 \u043D\u044C 2D \u0441\u0430\u043D\u0430\u043B\u044B\u043D \u0434\u04AF\u0440\u043C\u0438\u0439\u0433 \u0430\u0448\u0438\u0433\u043B\u0430\u043D\u0430.",importedIntro:"\u0425\u044D\u043C\u0436\u044D\u044D, \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436, \u0448\u0430\u043B\u043D\u044B \u0431\u0430\u0439\u0440\u043B\u0430\u043B \u043D\u044C \u0438\u043C\u043F\u043E\u0440\u0442\u043E\u043B\u0441\u043E\u043D 2D \u0442\u04E9\u043B\u04E9\u0432\u043B\u04E9\u0433\u04E9\u04E9\u0442\u044D\u0439 \u0438\u0436\u0438\u043B.",coverage:"\u0428\u0430\u043B\u043D\u044B \u0442\u0443\u0441\u0433\u0430\u043B",projection:"2D \u0434\u04AF\u0440\u044D\u043C",coverageNote:"2D \u0434\u04AF\u0440\u043C\u0438\u0439\u043D \u0448\u0430\u043B\u043D\u044B \u0442\u0443\u0441\u0433\u0430\u043B \u0431\u04E9\u0433\u04E9\u04E9\u0434 \u0431\u0430\u0442\u0430\u043B\u0433\u0430\u0430\u0436\u0441\u0430\u043D 3D \u0430\u043A\u0443\u0441\u0442\u0438\u043A \u0441\u0438\u043C\u0443\u043B\u044F\u0446 \u0431\u0438\u0448.",selection:"\u0421\u043E\u043D\u0433\u043E\u0441\u043E\u043D \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436",demo:"\u04AE\u0437\u04AF\u04AF\u043B\u044D\u043D",selectPrompt:"\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436 \u0434\u044D\u044D\u0440 \u0434\u0430\u0440\u0436 \u044D\u0441\u0432\u044D\u043B \u0434\u043E\u043E\u0440\u043E\u043E\u0441 \u0441\u043E\u043D\u0433\u043E\u043D\u043E.",settings:"\u0422\u043E\u0445\u0438\u0440\u0433\u043E\u043E \u0431\u0430 \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u04AF\u04AF\u0434",visibility:"\u0425\u0430\u0440\u0430\u0433\u0434\u0430\u0446",aux:"\u0422\u0443\u0441\u043B\u0430\u0445 \u0434\u044D\u043B\u0433\u044D\u0446\u04AF\u04AF\u0434",remote:"\u0410\u043B\u0441\u044B\u043D \u043E\u0440\u043E\u043B\u0446\u043E\u043E\u043D\u044B \u0434\u0443\u0443 \u0445\u04AF\u043B\u044D\u044D\u043D \u0430\u0432\u0430\u043B\u0442",pa:"\u0414\u043E\u0442\u043E\u043E\u0434 \u04E9\u0441\u0433\u04E9\u043B\u0442\u0438\u0439\u043D \u0434\u0443\u0443 \u0445\u04AF\u043B\u044D\u044D\u043D \u0430\u0432\u0430\u043B\u0442",speaker:"\u0427\u0430\u043D\u0433\u0430 \u044F\u0440\u0438\u0433\u0447\u0438\u0439\u043D \u0442\u0443\u0441\u0433\u0430\u043B",showLabels:"\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u043D \u043D\u044D\u0440",auxSpace:"\u0425\u043E\u0451\u0440 \u0442\u0443\u0441\u043B\u0430\u0445 \u0434\u044D\u043B\u0433\u044D\u0446 \u0431\u0430\u0433\u0442\u0430\u0445\u0433\u04AF\u0439. \u04E8\u0440\u04E9\u04E9\u043D\u0438\u0439 \u0443\u0440\u0442\u044B\u0433 \u043D\u044D\u043C\u044D\u0445 \u044D\u0441\u0432\u044D\u043B \u0434\u044D\u043B\u0433\u044D\u0446\u0438\u0439\u0433 \u043D\u0443\u0443\u043D\u0430.",paNote:"\u041C\u0438\u043A\u0440\u043E\u0444\u043E\u043D \u04E9\u04E9\u0440\u04E9\u04E9 \u0434\u0443\u0443 \u0433\u0430\u0440\u0433\u0430\u0445\u0433\u04AF\u0439. \u0414\u043E\u0442\u043E\u043E\u0434 \u04E9\u0441\u0433\u04E9\u043B\u0442\u04E9\u0434 \u0442\u0430\u0430\u0437\u043D\u044B \u0447\u0430\u043D\u0433\u0430 \u044F\u0440\u0438\u0433\u0447 \u0448\u0430\u0430\u0440\u0434\u043B\u0430\u0433\u0430\u0442\u0430\u0439.",install:"\u0423\u0433\u0441\u0440\u0430\u043B\u0442\u044B\u043D \u04E9\u043D\u0434\u0440\u0438\u0439\u043D \u0436\u0438\u0448\u044D\u044D",audioDrop:"\u0422\u0430\u0430\u0437\u043D\u0430\u0430\u0441 \u0434\u043E\u043E\u0448 M100/M40",mainHeight:"IFP \u0442\u04E9\u0432\u0438\u0439\u043D \u04E9\u043D\u0434\u04E9\u0440",auxDrop:"\u0422\u0443\u0441\u043B\u0430\u0445 \u0434\u044D\u043B\u0433\u044D\u0446\u0438\u0439\u043D \u0442\u0430\u0430\u0437\u043D\u0430\u0430\u0441 \u0437\u0430\u0439",dc20MountNote:"DC20 \u043D\u04AF\u04AF\u0440 \u0442\u0430\u0430\u0437\u043D\u0430\u0430\u0441 12 \u043C\u043C \u0434\u043E\u043E\u0440, \u0438\u0445 \u0431\u0438\u0435 \u0442\u0430\u0430\u0437\u043D\u044B \u0434\u044D\u044D\u0440 \u0431\u0430\u0439\u0440\u043B\u0430\u043D\u0430.",radii:"2D \u0445\u0430\u043C\u0440\u0430\u0445 \u0440\u0430\u0434\u0438\u0443\u0441 \xB7 \u043C",devices:"\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u04AF\u04AF\u0434",bom:"\u0421\u0430\u043D\u0430\u043B \u0431\u043E\u043B\u0433\u043E\u0445 \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u04AF\u04AF\u0434",bomNote:"DU11 \u0431\u0430 DSP \u043D\u044C \u0436\u0430\u0433\u0441\u0430\u0430\u043B\u0442\u0430\u0434 \u043E\u0440\u0441\u043E\u043D; \u04E9\u0440\u04E9\u04E9\u043D\u0438\u0439 \u0443\u0433\u0441\u0440\u0430\u043B\u0442\u044B\u043D \u0431\u0430\u0439\u0440\u043B\u0430\u043B \u0437\u0430\u0430\u0433\u0430\u0430\u0433\u04AF\u0439.",main:"IFP \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432 \u0434\u044D\u043B\u0433\u044D\u0446",display:"\u0422\u0443\u0441\u043B\u0430\u0445 \u0434\u044D\u043B\u0433\u044D\u0446",ceiling:"\u0422\u0430\u0430\u0437\u043D\u044B \u0443\u0433\u0441\u0440\u0430\u043B\u0442",suspended:"\u0423\u043D\u0436\u0443\u0443\u043B\u0441\u0430\u043D \u0443\u0433\u0441\u0440\u0430\u043B\u0442",wall:"\u0425\u0430\u043D\u044B\u043D \u0443\u0433\u0441\u0440\u0430\u043B\u0442",floor:"\u0428\u0430\u043B\u0430\u043D \u0434\u044D\u044D\u0440 \u0431\u0430\u0439\u0440\u043B\u0443\u0443\u043B\u0430\u0445",visualConfig:"\u0421\u0443\u0440\u0433\u0430\u043B\u0442\u044B\u043D \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436 \xB7 3D \u04AF\u0437\u04AF\u04AF\u043B\u044D\u043D",ifpCount:"IFP \u0442\u043E\u043E",ifpSize:"IFP \u0445\u044D\u043C\u0436\u044D\u044D",podiumModel:"\u0411\u0430\u0433\u0448\u0438\u0439\u043D \u0448\u0438\u0440\u044D\u044D\u043D\u0438\u0439 \u0437\u0430\u0433\u0432\u0430\u0440",podium:"\u0411\u0430\u0433\u0448\u0438\u0439\u043D \u0448\u0438\u0440\u044D\u044D",station:"\u0411\u0438\u0447\u043B\u044D\u0433\u0438\u0439\u043D \u0441\u0442\u0430\u043D\u0446",screenSpace:"IFP \u0431\u0430 \u0441\u0442\u0430\u043D\u0446 \u0443\u0440\u0434 \u0445\u0430\u043D\u0430\u043D\u0434 \u0431\u0430\u0433\u0442\u0430\u0445\u0433\u04AF\u0439. \u0414\u044D\u043B\u0433\u044D\u0446\u0438\u0439\u043D \u0442\u043E\u043E, \u0445\u044D\u043C\u0436\u044D\u044D\u0433 \u0431\u0430\u0433\u0430\u0441\u0433\u0430\u0445 \u044D\u0441\u0432\u044D\u043B \u0441\u0442\u0430\u043D\u0446\u044B\u0433 \u043D\u0443\u0443\u043D\u0430.",screenHeight:"IFP \u044D\u043D\u044D \u04E9\u043D\u0434\u04E9\u0440\u0442 \u0431\u0430\u0433\u0442\u0430\u0445\u0433\u04AF\u0439. \u0425\u044D\u043C\u0436\u044D\u044D, \u0442\u04E9\u0432\u0438\u0439\u043D \u044D\u0441\u0432\u044D\u043B \u04E9\u0440\u04E9\u04E9\u043D\u0438\u0439 \u04E9\u043D\u0434\u0440\u0438\u0439\u0433 \u04E9\u04E9\u0440\u0447\u0438\u043B\u043D\u04E9.",demoEquipment:"3D \u0441\u0443\u0440\u0433\u0430\u043B\u0442\u044B\u043D \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436",position:"2D \u0431\u0430\u0439\u0440\u043B\u0430\u043B",demoPosition:"\u0428\u0430\u043B\u043D\u044B \u0431\u0430\u0439\u0440\u043B\u0430\u043B\u044B\u043D \u0436\u0438\u0448\u044D\u044D",demoDimensions:"\u0425\u044D\u043C\u0436\u044D\u044D\u043D\u0438\u0439 \u0436\u0438\u0448\u044D\u044D",mountHeight:"\u0423\u0433\u0441\u0440\u0430\u043B\u0442\u044B\u043D \u04E9\u043D\u0434\u04E9\u0440",installMethod:"\u0423\u0433\u0441\u0440\u0430\u043B\u0442\u044B\u043D \u0442\u04E9\u0440\u04E9\u043B",assumption:"\u04AE\u0437\u04AF\u04AF\u043B\u044D\u043D\u0433\u0438\u0439\u043D \u0442\u0430\u0430\u043C\u0430\u0433",recessed:"\u0422\u0430\u0430\u0437\u0430\u043D\u0434 \u0441\u0443\u0443\u043B\u0433\u0430\u0445",dimensions:"\u0411\u04AF\u0442\u044D\u044D\u0433\u0434\u044D\u0445\u04AF\u04AF\u043D\u0438\u0439 \u0445\u044D\u043C\u0436\u044D\u044D",focusDevice:"\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u0433 \u043E\u0439\u0440\u043E\u043E\u0441 \u0445\u0430\u0440\u0430\u0445",area:"\u0422\u0430\u043B\u0431\u0430\u0439",unit:"\u043C",du11:"DU11",channels:"\u0410\u0448\u0438\u0433\u043B\u0430\u0441\u0430\u043D \u0441\u0443\u0432\u0430\u0433",invalid:"\u0417\u04E9\u0432 \u0445\u044D\u043C\u0436\u044D\u044D \u043E\u0440\u0443\u0443\u043B\u043D\u0430: X 2\u201340 \u043C, Y 2\u201340 \u043C, \u04E9\u043D\u0434\u04E9\u0440 2\u20134 \u043C.",imported:"2D \u0442\u04E9\u043B\u04E9\u0432\u043B\u04E9\u0433\u04E9\u04E9 \xB7 2D \u0434\u044D\u044D\u0440 \u04E9\u04E9\u0440\u0447\u043B\u04E9\u04E9\u0434 3D-\u0433 \u0434\u0430\u0445\u0438\u043D \u043D\u044D\u044D\u043D\u044D. \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A \u0438\u043C\u043F\u043E\u0440\u0442\u043E\u043B\u0441\u043E\u043D \u0445\u0430\u043C\u0440\u0430\u0445 \u0442\u043E\u0445\u0438\u0440\u0433\u043E\u043E\u0433 \u0445\u0430\u0434\u0433\u0430\u043B\u043D\u0430.",doorSide:"\u0425\u0430\u0430\u043B\u0433\u0430\u043D\u044B \u0442\u0430\u043B",doorRight:"\u0411\u0430\u0440\u0443\u0443\u043D \u0445\u0430\u043D\u0430",doorLeft:"\u0417\u04AF\u04AF\u043D \u0445\u0430\u043D\u0430",reset:"\u04AE\u0437\u04AF\u04AF\u043B\u044D\u043D\u0433\u0438\u0439\u043D \u0430\u043D\u0445\u043D\u044B \u0442\u043E\u0445\u0438\u0440\u0433\u043E\u043E",webgl:"WebGL \u0430\u0448\u0438\u0433\u043B\u0430\u0445 \u0431\u043E\u043B\u043E\u043C\u0436\u0433\u04AF\u0439. \u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u043D \u0445\u0443\u0440\u0434\u0430\u0441\u0433\u0430\u043B\u0442\u0430\u0439 \u0445\u04E9\u0442\u04E9\u0447 \u0445\u044D\u0440\u044D\u0433\u043B\u044D\u043D\u044D."};var rf={brandSub:"3D\u6559\u5BA4\u30D7\u30E9\u30F3\u30CA\u30FC",preset:"\u90E8\u5C4B",custom:"\u30AB\u30B9\u30BF\u30E0",length:"\u9577\u3055 X",width:"\u5965\u884C Y",height:"\u9AD8\u3055 (m)",recalculate:"\u518D\u8A08\u7B97",export:"PNG\u3092\u66F8\u304D\u51FA\u3059",sceneCaption:"\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D6\u306A\u5BA4\u5185\u8868\u793A",overview:"\u5168\u4F53",top:"\u4E0A\u9762",stage:"\u6559\u58C7",audience:"\u5BA2\u5E2D",sceneHint:"\u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u8EE2\u30FB\u30DB\u30A4\u30FC\u30EB\u3067\u62E1\u5927\u7E2E\u5C0F\u30FB\u53F3\u30C9\u30E9\u30C3\u30B0\u3067\u79FB\u52D5",planLabel:"\u73FE\u5728\u306E\u30D7\u30E9\u30F3",title:"\u6559\u5BA4\u306E3D\u30AB\u30D0\u30FC\u7BC4\u56F2",intro:"\u72EC\u7ACB\u30D7\u30E9\u30F3\u306F2D\u3068\u540C\u3058\u63A8\u5968\u30EB\u30FC\u30EB\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002",importedIntro:"\u5BF8\u6CD5\u3001\u6A5F\u5668\u3001\u5E8A\u9762\u4F4D\u7F6E\u306F\u8AAD\u307F\u8FBC\u3093\u30602D\u914D\u7F6E\u3068\u540C\u3058\u3067\u3059\u3002",coverage:"\u5E8A\u9762\u6295\u5F71",projection:"2D\u30EB\u30FC\u30EB",coverageNote:"2D\u30EB\u30FC\u30EB\u306E\u5E8A\u9762\u6295\u5F71\u3067\u3042\u308A\u3001\u691C\u8A3C\u6E08\u307F\u306E3D\u97F3\u97FF\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002",selection:"\u9078\u629E\u3057\u305F\u6A5F\u5668",demo:"\u30C7\u30E2",selectPrompt:"\u6A5F\u5668\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u304B\u3001\u4E0B\u304B\u3089\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002",settings:"\u8A2D\u5B9A\u3068\u6A5F\u5668",visibility:"\u8868\u793A\u8A2D\u5B9A",aux:"\u88DC\u52A9\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",remote:"\u9060\u9694\u5411\u3051\u96C6\u97F3",pa:"\u5BA4\u5185\u62E1\u58F0\u7528\u96C6\u97F3",speaker:"\u30B9\u30D4\u30FC\u30AB\u30FC\u6295\u5F71",showLabels:"\u6A5F\u5668\u540D",auxSpace:"\u88DC\u52A9\u753B\u97622\u53F0\u304C\u53CE\u307E\u308A\u307E\u305B\u3093\u3002\u90E8\u5C4B\u3092\u9577\u304F\u3059\u308B\u304B\u753B\u9762\u3092\u975E\u8868\u793A\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",paNote:"\u30DE\u30A4\u30AF\u81EA\u4F53\u306F\u97F3\u3092\u51FA\u3057\u307E\u305B\u3093\u3002\u5BA4\u5185\u62E1\u58F0\u306B\u306F\u5929\u4E95\u30B9\u30D4\u30FC\u30AB\u30FC\u304C\u5FC5\u8981\u3067\u3059\u3002",install:"\u53C2\u8003\u53D6\u4ED8\u9AD8\u3055",audioDrop:"\u5929\u4E95\u304B\u3089M100/M40\u307E\u3067",mainHeight:"IFP\u4E2D\u5FC3\u9AD8\u3055",auxDrop:"\u88DC\u52A9\u753B\u9762\u306E\u5929\u4E95\u304B\u3089\u306E\u8DDD\u96E2",dc20MountNote:"DC20\u306E\u524D\u9762\u306F\u5929\u4E95\u4E0B12 mm\u3001\u672C\u4F53\u306F\u5929\u4E95\u88CF\u306B\u914D\u7F6E\u3057\u307E\u3059\u3002",radii:"2D\u30AB\u30D0\u30FC\u534A\u5F84 \xB7 m",devices:"\u6A5F\u5668",bom:"\u63A8\u5968\u6A5F\u5668",bomNote:"DU11\u3068DSP\u306F\u6A5F\u5668\u8868\u306B\u542B\u307E\u308C\u307E\u3059\u304C\u3001\u6559\u5BA4\u5185\u306E\u53D6\u4ED8\u4F4D\u7F6E\u306F\u6307\u5B9A\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002",main:"IFP\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D6\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",display:"\u88DC\u52A9\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",ceiling:"\u5929\u4E95\u53D6\u4ED8",suspended:"\u540A\u4E0B\u3052\u53D6\u4ED8",wall:"\u58C1\u9762\u53D6\u4ED8",floor:"\u5E8A\u7F6E\u304D",visualConfig:"\u6559\u5B66\u6A5F\u5668 \xB7 3D\u53C2\u8003\u8868\u793A",ifpCount:"IFP\u53F0\u6570",ifpSize:"IFP\u30B5\u30A4\u30BA",podiumModel:"\u8B1B\u5E2B\u5353\u306E\u578B\u756A",podium:"\u8B1B\u5E2B\u5353",station:"\u53CE\u9332\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3",screenSpace:"IFP\u3068\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3\u304C\u524D\u58C1\u306B\u53CE\u307E\u308A\u307E\u305B\u3093\u3002\u753B\u9762\u3092\u6E1B\u3089\u3059\u304B\u5C0F\u3055\u304F\u3059\u308B\u304B\u3001\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3\u3092\u975E\u8868\u793A\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",screenHeight:"\u3053\u306E\u9AD8\u3055\u306BIFP\u3092\u8A2D\u7F6E\u3067\u304D\u307E\u305B\u3093\u3002\u30B5\u30A4\u30BA\u3001\u4E2D\u5FC3\u9AD8\u3055\u3001\u5929\u4E95\u9AD8\u3092\u8ABF\u6574\u3057\u3066\u304F\u3060\u3055\u3044\u3002",demoEquipment:"3D\u6559\u5B66\u6A5F\u5668",position:"2D\u4F4D\u7F6E",demoPosition:"\u53C2\u8003\u5E8A\u9762\u4F4D\u7F6E",demoDimensions:"\u53C2\u8003\u5BF8\u6CD5",mountHeight:"\u53D6\u4ED8\u9AD8\u3055",installMethod:"\u53D6\u4ED8\u65B9\u5F0F",assumption:"\u53C2\u8003\u60F3\u5B9A",recessed:"\u5929\u4E95\u57CB\u8FBC",dimensions:"\u88FD\u54C1\u5BF8\u6CD5",focusDevice:"\u6A5F\u5668\u3092\u8FD1\u304F\u3067\u898B\u308B",area:"\u9762\u7A4D",unit:"m",du11:"DU11",channels:"\u4F7F\u7528\u30C1\u30E3\u30F3\u30CD\u30EB",invalid:"X 2\u201340 m\u3001Y 2\u201340 m\u3001\u9AD8\u30552\u20134 m\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",imported:"2D\u304B\u3089\u306E\u30D7\u30E9\u30F3\u3067\u3059\u3002\u5909\u66F4\u5F8C\u306F2D\u304B\u3089\u518D\u5EA63D\u3092\u958B\u3044\u3066\u304F\u3060\u3055\u3044\u3002\u7D71\u8A08\u306F\u8AAD\u8FBC\u6642\u306E\u30AB\u30D0\u30FC\u8A2D\u5B9A\u3092\u4FDD\u6301\u3057\u307E\u3059\u3002",doorSide:"\u30C9\u30A2\u306E\u4F4D\u7F6E",doorRight:"\u53F3\u306E\u58C1",doorLeft:"\u5DE6\u306E\u58C1",reset:"\u30C7\u30E2\u306E\u521D\u671F\u8A2D\u5B9A\u306B\u623B\u3059",webgl:"WebGL\u3092\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u5BFE\u5FDC\u30D6\u30E9\u30A6\u30B6\u3092\u3054\u5229\u7528\u304F\u3060\u3055\u3044\u3002"};var of={brandSub:"Planificador de aulas 3D",preset:"Sala",custom:"Personalizada",length:"Longitud X",width:"Profundidad Y",height:"Altura (m)",recalculate:"Recalcular",export:"Exportar PNG",sceneCaption:"Vista interactiva de la sala",overview:"Vista general",top:"Vista superior",stage:"Escenario",audience:"Alumnos",sceneHint:"Arrastre para rotar \xB7 Rueda para acercar \xB7 Arrastre derecho para desplazar",planLabel:"PLAN ACTUAL",title:"Cobertura del aula en 3D",intro:"Los planes independientes comparten las reglas de recomendaci\xF3n 2D.",importedIntro:"Dimensiones, equipos y posiciones coinciden con la distribuci\xF3n 2D importada.",coverage:"Proyecci\xF3n en el suelo",projection:"Regla 2D",coverageNote:"Proyecci\xF3n de reglas 2D, no una simulaci\xF3n ac\xFAstica 3D validada.",selection:"Equipo seleccionado",demo:"Demo",selectPrompt:"Pulse un equipo o selecci\xF3nelo abajo.",settings:"Ajustes y equipos",visibility:"Visibilidad",aux:"Pantallas auxiliares",remote:"Captaci\xF3n remota",pa:"Captaci\xF3n para amplificaci\xF3n local",speaker:"Proyecci\xF3n de altavoces",showLabels:"Nombres de equipos",auxSpace:"No caben las dos pantallas auxiliares. Aumente la longitud u oc\xFAltelas.",paNote:"Los micr\xF3fonos no emiten sonido. La amplificaci\xF3n requiere altavoces de techo.",install:"Alturas de montaje ilustrativas",audioDrop:"M100/M40 bajo el techo",mainHeight:"Altura central de IFP",auxDrop:"Pantallas auxiliares bajo el techo",dc20MountNote:"La cara de DC20 queda 12 mm bajo el techo; la carcasa queda encima.",radii:"Radios de cobertura 2D \xB7 m",devices:"Equipos",bom:"Equipos recomendados",bomNote:"DU11 y DSP figuran en la lista; no se especifica su ubicaci\xF3n en el aula.",main:"Pantalla interactiva IFP",display:"Pantallas auxiliares",ceiling:"Montaje en techo",suspended:"Suspendido",wall:"Montaje mural",floor:"Sobre el suelo",visualConfig:"Equipos docentes \xB7 Demostraci\xF3n 3D",ifpCount:"Cantidad de IFP",ifpSize:"Tama\xF1o de IFP",podiumModel:"Modelo de atril",podium:"Atril",station:"Estaci\xF3n de grabaci\xF3n",screenSpace:"No caben las IFP y la estaci\xF3n. Reduzca las pantallas u oculte la estaci\xF3n.",screenHeight:"La IFP no cabe a esta altura. Cambie el tama\xF1o, su altura central o la sala.",demoEquipment:"Equipos docentes 3D",position:"Posici\xF3n 2D",demoPosition:"Posici\xF3n ilustrativa",demoDimensions:"Dimensiones ilustrativas",mountHeight:"Altura de montaje",installMethod:"Montaje",assumption:"Supuesto ilustrativo",recessed:"Empotrado en techo",dimensions:"Dimensiones del producto",focusDevice:"Ver equipo de cerca",area:"\xC1rea",unit:"m",du11:"DU11",channels:"canales usados",invalid:"Introduzca X 2\u201340 m, Y 2\u201340 m y altura 2\u20134 m.",imported:"Plan de 2D. Modif\xEDquelo en 2D y vuelva a abrir 3D. Las estad\xEDsticas conservan la cobertura importada.",doorSide:"Lado de la puerta",doorRight:"Pared derecha",doorLeft:"Pared izquierda",reset:"Restaurar valores del demo",webgl:"WebGL no est\xE1 disponible. Use un navegador con aceleraci\xF3n por hardware."};var af={brandSub:"\u0645\u062E\u0637\u0637 \u0627\u0644\u0641\u0635\u0644 \u062B\u0644\u0627\u062B\u064A \u0627\u0644\u0623\u0628\u0639\u0627\u062F",preset:"\u0627\u0644\u063A\u0631\u0641\u0629",custom:"\u0645\u062E\u0635\u0635",length:"\u0627\u0644\u0637\u0648\u0644 X",width:"\u0627\u0644\u0639\u0645\u0642 Y",height:"\u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639 (\u0645)",recalculate:"\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062D\u0633\u0627\u0628",export:"\u062A\u0635\u062F\u064A\u0631 PNG",sceneCaption:"\u0645\u0646\u0638\u0648\u0631 \u062A\u0641\u0627\u0639\u0644\u064A \u0644\u0644\u063A\u0631\u0641\u0629",overview:"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629",top:"\u0645\u0646 \u0627\u0644\u0623\u0639\u0644\u0649",stage:"\u0627\u0644\u0645\u0646\u0635\u0629",audience:"\u0627\u0644\u0637\u0644\u0627\u0628",sceneHint:"\u0627\u0633\u062D\u0628 \u0644\u0644\u062F\u0648\u0631\u0627\u0646 \xB7 \u0645\u0631\u0651\u0631 \u0644\u0644\u062A\u0643\u0628\u064A\u0631 \xB7 \u0627\u0633\u062D\u0628 \u0628\u0627\u0644\u0632\u0631 \u0627\u0644\u0623\u064A\u0645\u0646 \u0644\u0644\u062A\u062D\u0631\u064A\u0643",planLabel:"\u0627\u0644\u0645\u062E\u0637\u0637 \u0627\u0644\u062D\u0627\u0644\u064A",title:"\u062A\u063A\u0637\u064A\u0629 \u0627\u0644\u0641\u0635\u0644 \u062B\u0644\u0627\u062B\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F",intro:"\u062A\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0645\u062E\u0637\u0637\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u0642\u0644\u0629 \u0642\u0648\u0627\u0639\u062F \u0627\u0644\u062A\u0648\u0635\u064A\u0629 \u0627\u0644\u062B\u0646\u0627\u0626\u064A\u0629 \u0646\u0641\u0633\u0647\u0627.",importedIntro:"\u0627\u0644\u0623\u0628\u0639\u0627\u062F \u0648\u0627\u0644\u0623\u062C\u0647\u0632\u0629 \u0648\u0627\u0644\u0645\u0648\u0627\u0636\u0639 \u062A\u0637\u0627\u0628\u0642 \u0627\u0644\u0645\u062E\u0637\u0637 \u0627\u0644\u062B\u0646\u0627\u0626\u064A \u0627\u0644\u0645\u0633\u062A\u0648\u0631\u062F.",coverage:"\u0627\u0644\u0625\u0633\u0642\u0627\u0637 \u0627\u0644\u0623\u0631\u0636\u064A",projection:"\u0642\u0627\u0639\u062F\u0629 \u062B\u0646\u0627\u0626\u064A\u0629",coverageNote:"\u0625\u0633\u0642\u0627\u0637 \u0644\u0642\u0648\u0627\u0639\u062F \u062B\u0646\u0627\u0626\u064A\u0629\u060C \u0648\u0644\u064A\u0633 \u0645\u062D\u0627\u0643\u0627\u0629 \u0635\u0648\u062A\u064A\u0629 \u062B\u0644\u0627\u062B\u064A\u0629 \u0645\u0639\u062A\u0645\u062F\u0629.",selection:"\u0627\u0644\u062C\u0647\u0627\u0632 \u0627\u0644\u0645\u062D\u062F\u062F",demo:"\u0639\u0631\u0636 \u062A\u0648\u0636\u064A\u062D\u064A",selectPrompt:"\u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \u062C\u0647\u0627\u0632 \u0623\u0648 \u0627\u062E\u062A\u0631\u0647 \u0623\u062F\u0646\u0627\u0647.",settings:"\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0648\u0627\u0644\u0623\u062C\u0647\u0632\u0629",visibility:"\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0639\u0631\u0636",aux:"\u0627\u0644\u0634\u0627\u0634\u0627\u062A \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629",remote:"\u0627\u0644\u062A\u0642\u0627\u0637 \u0627\u0644\u0635\u0648\u062A \u0644\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0644\u0628\u0639\u064A\u062F\u0629",pa:"\u0627\u0644\u062A\u0642\u0627\u0637 \u0627\u0644\u0635\u0648\u062A \u0644\u0644\u062A\u0636\u062E\u064A\u0645 \u0627\u0644\u0645\u062D\u0644\u064A",speaker:"\u0625\u0633\u0642\u0627\u0637 \u0645\u0643\u0628\u0631\u0627\u062A \u0627\u0644\u0635\u0648\u062A",showLabels:"\u0623\u0633\u0645\u0627\u0621 \u0627\u0644\u0623\u062C\u0647\u0632\u0629",auxSpace:"\u0644\u0627 \u062A\u062A\u0633\u0639 \u0627\u0644\u063A\u0631\u0641\u0629 \u0644\u0644\u0634\u0627\u0634\u062A\u064A\u0646 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u062A\u064A\u0646. \u0632\u0650\u062F \u0627\u0644\u0637\u0648\u0644 \u0623\u0648 \u0623\u062E\u0641\u0650 \u0627\u0644\u0634\u0627\u0634\u0627\u062A.",paNote:"\u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646\u0627\u062A \u0644\u0627 \u062A\u0635\u062F\u0631 \u0635\u0648\u062A\u064B\u0627. \u064A\u062A\u0637\u0644\u0628 \u0627\u0644\u062A\u0636\u062E\u064A\u0645 \u0645\u0643\u0628\u0631\u0627\u062A \u0635\u0648\u062A \u0633\u0642\u0641\u064A\u0629.",install:"\u0627\u0631\u062A\u0641\u0627\u0639\u0627\u062A \u062A\u0631\u0643\u064A\u0628 \u062A\u0648\u0636\u064A\u062D\u064A\u0629",audioDrop:"M100/M40 \u0623\u0633\u0641\u0644 \u0627\u0644\u0633\u0642\u0641",mainHeight:"\u0627\u0631\u062A\u0641\u0627\u0639 \u0645\u0631\u0643\u0632 \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u064A\u0629",auxDrop:"\u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0623\u0633\u0641\u0644 \u0627\u0644\u0633\u0642\u0641",dc20MountNote:"\u0648\u0627\u062C\u0647\u0629 DC20 \u0623\u0633\u0641\u0644 \u0627\u0644\u0633\u0642\u0641 \u0628\u064012 \u0645\u0645\u060C \u0648\u0627\u0644\u0647\u064A\u0643\u0644 \u0641\u0648\u0642\u0647.",radii:"\u0623\u0646\u0635\u0627\u0641 \u0623\u0642\u0637\u0627\u0631 \u0627\u0644\u062A\u063A\u0637\u064A\u0629 \u0627\u0644\u062B\u0646\u0627\u0626\u064A\u0629 \xB7 \u0645",devices:"\u0627\u0644\u0623\u062C\u0647\u0632\u0629",bom:"\u0627\u0644\u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0645\u0642\u062A\u0631\u062D\u0629",bomNote:"DU11 \u0648DSP \u0636\u0645\u0646 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0623\u062C\u0647\u0632\u0629\u061B \u0644\u0645 \u064A\u064F\u062D\u062F\u062F \u0645\u0648\u0636\u0639 \u062A\u0631\u0643\u064A\u0628\u0647\u0645\u0627 \u0641\u064A \u0627\u0644\u063A\u0631\u0641\u0629.",main:"\u0634\u0627\u0634\u0629 \u062A\u0641\u0627\u0639\u0644\u064A\u0629 IFP",display:"\u0627\u0644\u0634\u0627\u0634\u0627\u062A \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629",ceiling:"\u062A\u0631\u0643\u064A\u0628 \u0633\u0642\u0641\u064A",suspended:"\u062A\u0631\u0643\u064A\u0628 \u0645\u0639\u0644\u0642",wall:"\u062A\u0631\u0643\u064A\u0628 \u062C\u062F\u0627\u0631\u064A",floor:"\u062A\u0631\u0643\u064A\u0628 \u0623\u0631\u0636\u064A",visualConfig:"\u0645\u0639\u062F\u0627\u062A \u0627\u0644\u062A\u062F\u0631\u064A\u0633 \xB7 \u0639\u0631\u0636 \u062B\u0644\u0627\u062B\u064A \u0627\u0644\u0623\u0628\u0639\u0627\u062F",ifpCount:"\u0639\u062F\u062F \u0627\u0644\u0634\u0627\u0634\u0627\u062A \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u064A\u0629",ifpSize:"\u062D\u062C\u0645 \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u064A\u0629",podiumModel:"\u0637\u0631\u0627\u0632 \u0627\u0644\u0645\u0646\u0635\u0629",podium:"\u0645\u0646\u0635\u0629",station:"\u0645\u062D\u0637\u0629 \u062A\u0633\u062C\u064A\u0644",screenSpace:"\u0644\u0627 \u062A\u062A\u0633\u0639 \u0627\u0644\u0648\u0627\u062C\u0647\u0629 \u0644\u0644\u0634\u0627\u0634\u0627\u062A \u0648\u0627\u0644\u0645\u062D\u0637\u0629. \u0642\u0644\u0644 \u0639\u062F\u062F \u0627\u0644\u0634\u0627\u0634\u0627\u062A \u0623\u0648 \u062D\u062C\u0645\u0647\u0627\u060C \u0623\u0648 \u0623\u062E\u0641\u0650 \u0627\u0644\u0645\u062D\u0637\u0629.",screenHeight:"\u0644\u0627 \u062A\u0644\u0627\u0626\u0645 \u0627\u0644\u0634\u0627\u0634\u0629 \u0647\u0630\u0627 \u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639. \u0639\u062F\u0651\u0644 \u062D\u062C\u0645\u0647\u0627 \u0623\u0648 \u0627\u0631\u062A\u0641\u0627\u0639 \u0645\u0631\u0643\u0632\u0647\u0627 \u0623\u0648 \u0627\u0631\u062A\u0641\u0627\u0639 \u0627\u0644\u063A\u0631\u0641\u0629.",demoEquipment:"\u0645\u0639\u062F\u0627\u062A \u0627\u0644\u062A\u062F\u0631\u064A\u0633 \u0627\u0644\u062B\u0644\u0627\u062B\u064A\u0629",position:"\u0627\u0644\u0645\u0648\u0636\u0639 \u0627\u0644\u062B\u0646\u0627\u0626\u064A",demoPosition:"\u0645\u0648\u0636\u0639 \u0623\u0631\u0636\u064A \u062A\u0648\u0636\u064A\u062D\u064A",demoDimensions:"\u0623\u0628\u0639\u0627\u062F \u062A\u0648\u0636\u064A\u062D\u064A\u0629",mountHeight:"\u0627\u0631\u062A\u0641\u0627\u0639 \u0627\u0644\u062A\u0631\u0643\u064A\u0628",installMethod:"\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062A\u0631\u0643\u064A\u0628",assumption:"\u0627\u0641\u062A\u0631\u0627\u0636 \u062A\u0648\u0636\u064A\u062D\u064A",recessed:"\u062A\u0631\u0643\u064A\u0628 \u0645\u062F\u0645\u062C \u0641\u064A \u0627\u0644\u0633\u0642\u0641",dimensions:"\u0623\u0628\u0639\u0627\u062F \u0627\u0644\u0645\u0646\u062A\u062C",focusDevice:"\u0639\u0631\u0636 \u0627\u0644\u062C\u0647\u0627\u0632 \u0639\u0646 \u0642\u0631\u0628",area:"\u0627\u0644\u0645\u0633\u0627\u062D\u0629",unit:"\u0645",du11:"DU11",channels:"\u0627\u0644\u0642\u0646\u0648\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0629",invalid:"\u0623\u062F\u062E\u0644 X \u0645\u0646 2\u201340 \u0645 \u0648Y \u0645\u0646 2\u201340 \u0645 \u0648\u0627\u0631\u062A\u0641\u0627\u0639\u064B\u0627 2\u20134 \u0645.",imported:"\u0645\u062E\u0637\u0637 \u0645\u0633\u062A\u0648\u0631\u062F. \u0639\u062F\u0651\u0644\u0647 \u0641\u064A \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062B\u0646\u0627\u0626\u064A \u062B\u0645 \u0627\u0641\u062A\u062D \u0627\u0644\u062B\u0644\u0627\u062B\u064A \u0645\u062C\u062F\u062F\u064B\u0627. \u062A\u062D\u062A\u0641\u0638 \u0627\u0644\u0625\u062D\u0635\u0627\u0621\u0627\u062A \u0628\u0627\u0644\u062A\u063A\u0637\u064A\u0629 \u0627\u0644\u0645\u0633\u062A\u0648\u0631\u062F\u0629.",doorSide:"\u062C\u0647\u0629 \u0627\u0644\u0628\u0627\u0628",doorRight:"\u0627\u0644\u062C\u062F\u0627\u0631 \u0627\u0644\u0623\u064A\u0645\u0646",doorLeft:"\u0627\u0644\u062C\u062F\u0627\u0631 \u0627\u0644\u0623\u064A\u0633\u0631",reset:"\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629",webgl:"WebGL \u063A\u064A\u0631 \u0645\u062A\u0627\u062D. \u0627\u0633\u062A\u062E\u062F\u0645 \u0645\u062A\u0635\u0641\u062D\u064B\u0627 \u064A\u062F\u0639\u0645 \u062A\u0633\u0631\u064A\u0639 \u0627\u0644\u0623\u062C\u0647\u0632\u0629."};var mn={en:{brandSub:"3D classroom planner",preset:"Room",custom:"Custom",length:"Length X",width:"Depth Y",height:"Height",recalculate:"Recalculate",export:"Export PNG",sceneCaption:"Interactive room view",overview:"Overview",top:"Top",stage:"Stage",audience:"Audience",sceneHint:"Drag to rotate \xB7 wheel to zoom \xB7 right drag to pan",planLabel:"CURRENT PLAN",title:"Classroom coverage in 3D",intro:"Independent plans share the 2D recommendation rules.",importedIntro:"Dimensions, devices and floor positions match the imported 2D deployment.",coverage:"Ground projection",projection:"2D rule",coverageNote:"Projection of the 2D rules, not a validated 3D acoustic simulation.",selection:"Selected device",demo:"Demo",selectPrompt:"Click a device or choose one below.",settings:"Settings & devices",visibility:"Visibility",aux:"Auxiliary Displays",remote:"Remote pickup",pa:"Local PA pickup",speaker:"Speaker projection",showLabels:"Device names",auxSpace:"The two Auxiliary Displays do not fit across this room. Increase its length or hide Auxiliary Displays.",paNote:"M100/M40 do not produce sound. Local PA requires DC20.",install:"Demo mounting heights",audioDrop:"M100/M40 below ceiling",mainHeight:"IFP center",auxDrop:"Auxiliary below ceiling",dc20MountNote:"DC20 face is fixed 12 mm below the ceiling; its enclosure sits above it.",radii:"2D coverage radii \xB7 m",devices:"Devices",bom:"Recommended equipment",bomNote:"DU11 and DSP belong to the BOM; no room mounting location is specified.",main:"IFP",display:"Auxiliary Displays",ceiling:"Ceiling mount",suspended:"Suspended",wall:"Wall mount",floor:"Floor standing",visualConfig:"Teaching equipment \xB7 3D demonstration",ifpCount:"IFP panels",ifpSize:"IFP size",podiumModel:"Podium model",podium:"Podium",station:"Recording Station",screenSpace:"These IFP panels and the Station do not fit on the front wall. Choose fewer or smaller panels, or hide the Station.",screenHeight:"The IFP does not fit at this height. Change its size, center height, or room height.",demoEquipment:"3D teaching equipment",position:"2D position",demoPosition:"Demo floor position",demoDimensions:"Demo size",mountHeight:"Mounting height",installMethod:"Mounting",assumption:"Demonstration assumption",recessed:"Recessed ceiling mount",dimensions:"Product size",focusDevice:"View device close up",area:"Area",unit:"m",du11:"DU11",channels:"channels used",invalid:"Enter a valid room: X 2\u201340 m, Y 2\u201340 m, height 2\u20134 m.",imported:"Plan from 2D \xB7 Edit the deployment in 2D and click View 3D again. Statistics retain the imported coverage settings.",doorSide:"Door side",doorRight:"Right wall",doorLeft:"Left wall",reset:"Restore demo defaults",webgl:"WebGL is unavailable in this browser. Try a browser with hardware acceleration."},zh:{brandSub:"\u4E09\u7EF4\u6559\u5BA4\u65B9\u6848",preset:"\u623F\u95F4",custom:"\u81EA\u5B9A\u4E49",length:"\u957F\u5EA6 X",width:"\u6559\u5B66\u6DF1\u5EA6 Y",height:"\u5C42\u9AD8",recalculate:"\u91CD\u65B0\u8BA1\u7B97",export:"\u5BFC\u51FA PNG",sceneCaption:"\u4EA4\u4E92\u5F0F\u623F\u95F4\u89C6\u56FE",overview:"\u5168\u666F",top:"\u4FEF\u89C6",stage:"\u8BB2\u53F0",audience:"\u89C2\u4F17",sceneHint:"\u62D6\u62FD\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u53F3\u952E\u62D6\u62FD\u5E73\u79FB",planLabel:"\u5F53\u524D\u65B9\u6848",title:"\u6559\u5BA4\u4E09\u7EF4\u8986\u76D6\u6F14\u793A",intro:"\u72EC\u7ACB\u89C4\u5212\u4E0E\u4E8C\u7EF4\u9875\u9762\u5171\u7528\u63A8\u8350\u89C4\u5219\u3002",importedIntro:"\u5C3A\u5BF8\u3001\u8BBE\u5907\u6570\u91CF\u4E0E\u5E73\u9762\u4F4D\u7F6E\u5747\u4FDD\u7559\u5BFC\u5165\u7684\u4E8C\u7EF4\u90E8\u7F72\u3002",coverage:"\u5730\u9762\u6295\u5F71",projection:"\u4E8C\u7EF4\u89C4\u5219",coverageNote:"\u4EC5\u4E3A\u4E8C\u7EF4\u89C4\u5219\u5728\u5730\u9762\u7684\u6295\u5F71\uFF0C\u672A\u7ECF\u4E09\u7EF4\u58F0\u5B66\u9A8C\u8BC1\u3002",selection:"\u9009\u4E2D\u8BBE\u5907",demo:"\u6F14\u793A",selectPrompt:"\u70B9\u51FB\u6A21\u578B\u6216\u4ECE\u4E0B\u65B9\u9009\u62E9\u8BBE\u5907\u3002",settings:"\u8BBE\u7F6E\u4E0E\u8BBE\u5907",visibility:"\u663E\u793A\u5F00\u5173",aux:"\u8F85\u52A9\u663E\u793A\u5C4F",remote:"\u8FDC\u7AEF\u62FE\u97F3",pa:"\u672C\u5730\u6269\u58F0\u62FE\u97F3",speaker:"\u626C\u58F0\u5668\u6295\u5F71",showLabels:"\u8BBE\u5907\u540D\u79F0",auxSpace:"\u4E24\u4FA7\u8F85\u52A9\u5C4F\u65E0\u6CD5\u653E\u5165\u5F53\u524D\u6559\u5BA4\uFF0C\u8BF7\u589E\u5927\u623F\u95F4\u957F\u5EA6\u6216\u9690\u85CF\u8F85\u52A9\u5C4F\u3002",paNote:"M100/M40 \u672C\u8EAB\u4E0D\u53D1\u58F0\uFF1B\u672C\u5730\u6269\u58F0\u4F9D\u8D56 DC20\u3002",install:"\u6F14\u793A\u5B89\u88C5\u9AD8\u5EA6",audioDrop:"M100/M40 \u4F4E\u4E8E\u5929\u82B1",mainHeight:"IFP \u4E2D\u5FC3\u9AD8\u5EA6",auxDrop:"\u8F85\u52A9\u5C4F\u4F4E\u4E8E\u5929\u82B1",dc20MountNote:"DC20 \u9762\u7F69\u56FA\u5B9A\u5728\u5929\u82B1\u4E0B\u65B9 12mm\uFF0C\u9ED1\u8272\u540E\u8154\u4F4D\u4E8E\u5929\u82B1\u4E0A\u65B9\u3002",radii:"\u4E8C\u7EF4\u8986\u76D6\u534A\u5F84 \xB7 \u7C73",devices:"\u8BBE\u5907",bom:"\u63A8\u8350\u8BBE\u5907\u6E05\u5355",bomNote:"DU11 \u548C DSP \u5C5E\u4E8E BOM\uFF0C\u73B0\u6709\u8D44\u6599\u672A\u6307\u5B9A\u6559\u5BA4\u5B89\u88C5\u4F4D\u7F6E\u3002",main:"IFP \u4EA4\u4E92\u5E73\u677F",display:"\u8F85\u52A9\u663E\u793A\u5C4F",ceiling:"\u540A\u9876\u5B89\u88C5",suspended:"\u540A\u88C5",wall:"\u58C1\u6302",floor:"\u843D\u5730\u6446\u653E",visualConfig:"\u6559\u5B66\u8BBE\u5907 \xB7 \u4E09\u7EF4\u6F14\u793A",ifpCount:"IFP \u5C4F\u5E55\u6570\u91CF",ifpSize:"IFP \u5C3A\u5BF8",podiumModel:"\u8BB2\u53F0\u578B\u53F7",podium:"\u8BB2\u53F0",station:"\u5F55\u64AD Station",screenSpace:"IFP \u4E0E Station \u65E0\u6CD5\u653E\u5165\u524D\u5899\u3002\u8BF7\u9009\u62E9\u8F83\u5C11\u6216\u8F83\u5C0F\u7684\u5C4F\u5E55\uFF0C\u6216\u9690\u85CF Station\u3002",screenHeight:"\u5F53\u524D\u9AD8\u5EA6\u65E0\u6CD5\u5B89\u88C5 IFP\uFF0C\u8BF7\u8C03\u6574\u5C4F\u5E55\u5C3A\u5BF8\u3001\u4E2D\u5FC3\u9AD8\u5EA6\u6216\u623F\u95F4\u5C42\u9AD8\u3002",demoEquipment:"\u4E09\u7EF4\u6559\u5B66\u8BBE\u5907",position:"\u4E8C\u7EF4\u4F4D\u7F6E",demoPosition:"\u6F14\u793A\u5E73\u9762\u4F4D\u7F6E",demoDimensions:"\u6F14\u793A\u5C3A\u5BF8",mountHeight:"\u5B89\u88C5\u9AD8\u5EA6",installMethod:"\u5B89\u88C5\u65B9\u5F0F",assumption:"\u6F14\u793A\u5047\u8BBE",recessed:"\u5D4C\u5165\u5929\u82B1",dimensions:"\u4EA7\u54C1\u5C3A\u5BF8",focusDevice:"\u8FD1\u666F\u67E5\u770B\u8BBE\u5907",area:"\u9762\u79EF",unit:"\u7C73",du11:"DU11",channels:"\u5DF2\u5360\u7528\u901A\u9053",invalid:"\u8BF7\u8F93\u5165\u6709\u6548\u623F\u95F4\uFF1AX 2\u201340 \u7C73\u3001Y 2\u201340 \u7C73\u3001\u5C42\u9AD8 2\u20134 \u7C73\u3002",imported:"\u6765\u81EA 2D \u7684\u65B9\u6848 \xB7 \u8BF7\u5728 2D \u4FEE\u6539\u90E8\u7F72\u540E\u518D\u6B21\u70B9\u51FB\u201C\u67E5\u770B 3D\u201D\u3002\u7EDF\u8BA1\u4FDD\u7559\u5BFC\u5165\u65F6\u7684\u8986\u76D6\u8BBE\u7F6E\u3002",doorSide:"\u95E8\u7684\u4F4D\u7F6E",doorRight:"\u53F3\u4FA7\u5899",doorLeft:"\u5DE6\u4FA7\u5899",reset:"\u6062\u590D\u6F14\u793A\u9ED8\u8BA4\u503C",webgl:"\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u4F7F\u7528 WebGL\uFF0C\u8BF7\u542F\u7528\u786C\u4EF6\u52A0\u901F\u3002"}};Object.assign(mn,{ko:nf,mn:sf,ja:rf,es:of,fr:tf,ar:af});function ch(n,e){let t=Yi(e);return n.type==="camera"?`CV870 \xB7 ${window.AISpeech.configurationCopy(e)[n.role]}`:n.type==="controller"?"NMP311":n.type==="ifp"?`${n.model||t.main} \xB7 ${n.size}\u2033`:n.type==="podium"?`${n.model} ${t.podium}`:n.type==="station"?`${n.model||"LCS 810"} ${t.station}`:Zt(n.type,e)}function xi(n,e){if(n.type==="display")return`${Yi(e).display} ${An(e)[n.side==="left"?"left":"right"]} \xB7 ${n.size}\u2033`;let t=ch(n,e);return n.type==="ifp"&&!n.model?`${t} ${n.id.split("-")[1]}`:t+(n.number?` #${n.number}`:"")}var ov={m100:"Microphone de plafond Dante",m40:"Microphone de plafond Dante",dc20:"Haut-parleur de plafond Dante",du11:"Adaptateur d\u2019interface Dante",dp44:"Processeur audio Dante \xE0 4 canaux",dp88:"Processeur audio Dante \xE0 8 canaux",showModels:"Afficher les r\xE9f\xE9rences des mod\xE8les",reference:"Configuration de r\xE9f\xE9rence. Ajustez les param\xE8tres selon les \xE9quipements r\xE9els du client.",invalidSnapshot:"Le plan est invalide. V\xE9rifiez les dimensions, les \xE9quipements et les rayons de couverture.",snapshotBounds:"Un \xE9quipement est hors de la salle. D\xE9placez-le dans la salle en 2D avant d\u2019ouvrir la 3D.",snapshotVersion:"Version de plan non prise en charge. Rouvrez-le depuis la page 2D mise \xE0 jour."},av={m100:"Dante \u0442\u0430\u0430\u0437\u043D\u044B \u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D",m40:"Dante \u0442\u0430\u0430\u0437\u043D\u044B \u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D",dc20:"Dante \u0442\u0430\u0430\u0437\u043D\u044B \u0447\u0430\u043D\u0433\u0430 \u044F\u0440\u0438\u0433\u0447",du11:"Dante \u0438\u043D\u0442\u0435\u0440\u0444\u044D\u0439\u0441\u0438\u0439\u043D \u0430\u0434\u0430\u043F\u0442\u0435\u0440",dp44:"4 \u0441\u0443\u0432\u0433\u0438\u0439\u043D Dante \u0430\u0443\u0434\u0438\u043E \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440",dp88:"8 \u0441\u0443\u0432\u0433\u0438\u0439\u043D Dante \u0430\u0443\u0434\u0438\u043E \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440",showModels:"\u0417\u0430\u0433\u0432\u0430\u0440\u044B\u043D \u0434\u0443\u0433\u0430\u0430\u0440\u044B\u0433 \u0445\u0430\u0440\u0443\u0443\u043B\u0430\u0445",reference:"\u0416\u0438\u0448\u0438\u0433 \u0442\u043E\u0445\u0438\u0440\u0433\u043E\u043E. \u0417\u0430\u0445\u0438\u0430\u043B\u0430\u0433\u0447\u0438\u0439\u043D \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u043D \u0431\u043E\u0434\u0438\u0442 \u04AF\u0437\u04AF\u04AF\u043B\u044D\u043B\u0442\u044D\u0434 \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u043D\u0430 \u0443\u0443.",invalidSnapshot:"\u0422\u04E9\u043B\u04E9\u0432\u043B\u04E9\u0433\u04E9\u04E9 \u0431\u0443\u0440\u0443\u0443 \u0431\u0430\u0439\u043D\u0430. \u04E8\u0440\u04E9\u04E9\u043D\u0438\u0439 \u0445\u044D\u043C\u0436\u044D\u044D, \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436, \u0445\u0430\u043C\u0440\u0430\u0445 \u0440\u0430\u0434\u0438\u0443\u0441\u044B\u0433 \u0448\u0430\u043B\u0433\u0430\u043D\u0430 \u0443\u0443.",snapshotBounds:"\u04E8\u0440\u04E9\u04E9\u043D\u0438\u0439 \u0433\u0430\u0434\u043D\u0430 \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436 \u0431\u0430\u0439\u043D\u0430. 3D \u043D\u044D\u044D\u0445\u044D\u044D\u0441 \u04E9\u043C\u043D\u04E9 2D \u0434\u044D\u044D\u0440 \u0434\u043E\u0442\u043E\u0433\u0448 \u0437\u04E9\u04E9\u043D\u04E9 \u04AF\u04AF.",snapshotVersion:"\u042D\u043D\u044D \u0445\u0443\u0432\u0438\u043B\u0431\u0430\u0440\u044B\u0433 \u0434\u044D\u043C\u0436\u0438\u0445\u0433\u04AF\u0439. \u0428\u0438\u043D\u044D\u0447\u0438\u043B\u0441\u044D\u043D 2D \u0445\u0443\u0443\u0434\u0430\u0441\u043D\u0430\u0430\u0441 \u0434\u0430\u0445\u0438\u043D \u043D\u044D\u044D\u043D\u044D \u04AF\u04AF."};function Ns(n){return n==="fr"?ov:n==="mn"?av:window.AISpeech.presentationCopy(n)}function Zt(n,e){let t=n.toLowerCase();return Ns(e)[t]+(window.AISpeech.state.showModels?` (${t.toUpperCase()})`:"")}function Yi(n){return Object.fromEntries(Object.entries(mn[n]||mn.en).map(([e,t])=>[e,String(t).replace(/AISpeech|AI Speech|思必驰/gi,"Dante").replace(/\b(M100|M40|DC20|DU11|DP44|DP88)(?:s)?\b/g,(i,s)=>Zt(s,n))]))}var st=n=>document.querySelector(n),Us=n=>`${Number(n).toFixed(2)} m`,cf={en:["Front","Rear"],zh:["\u524D\u533A","\u540E\u533A"],ko:["\uC55E","\uB4A4"],mn:["\u0423\u0440\u0434","\u0410\u0440\u0434"],ja:["\u524D\u65B9","\u5F8C\u65B9"],es:["Delante","Detr\xE1s"],fr:["Avant","Arri\xE8re"],ar:["\u0623\u0645\u0627\u0645","\u062E\u0644\u0641"]},lf=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Fs(){let n=Object.fromEntries([...document.querySelectorAll("[data-kind]")].map(e=>[e.dataset.kind,e.checked]));return n.controller=n.podium,{floorProjection:st("#floor-projection").checked,audioDrop:Number(st("#audio-drop").value),mainHeight:Number(st("#main-height").value),auxDrop:Number(st("#aux-drop").value),ifpCount:Number(st("#ifp-count").value),ifpSize:Number(st("#ifp-size").value),podiumModel:st("#podium-model").value,visible:n}}function dc(n){let e=Yi(n);Ph(n),document.title=`Dante \xB7 ${e.brandSub}`;let t=Ns(n);st("#model-caption").textContent=t.showModels,st("#reference-note").textContent=t.reference,document.querySelectorAll("[data-audio-name]").forEach(i=>{i.textContent=Zt(i.dataset.audioName,n)}),st("#plan-origin").textContent=e.imported,document.querySelectorAll("[data-i18n]").forEach(i=>{i.textContent=e[i.dataset.i18n]}),st("#plan-origin").hidden||(st('[data-i18n="intro"]').textContent=e.importedIntro),document.querySelectorAll("[data-i18n-label]").forEach(i=>{let s=i.querySelector("input");i.replaceChildren(s,document.createTextNode(e[i.dataset.i18nLabel]))}),st("#language").value=n}function lh(n,e,t,i,s,r){let o=Yi(e),a=n.heightProfile;st("#room-metric").textContent=a?.mode==="split"?`${n.length} \xD7 ${n.width} m \xB7 ${a.front.toFixed(2)} / ${a.rear.toFixed(2)} m`:`${n.length} \xD7 ${n.width} \xD7 ${n.height} m`,st("#coverage-stats").innerHTML=[[o.remote,n.coverage.mic,"remote"],[o.pa,n.coverage.pa,"pa"],[o.speaker,n.coverage.speaker,"speaker"]].map(([d,f,g])=>`<div class="stat"><div><span>${d}</span><strong>${f}%</strong></div><div class="track"><i class="fill ${g}" style="width:${f}%"></i></div></div>`).join("");let l=n.radii,[c,h]=cf[e]||cf.en,u=a?.mode==="split"?[...[[c,a.front],[h,a.rear]].flatMap(([d,f])=>{let g=window.AISpeech.m100RadiiForHeight(f,a.drop);return[[`${Zt("m100",e)} \xB7 ${d} \xB7 ${o.remote}`,a.manualPickup??g.m100Pickup],[`${Zt("m100",e)} \xB7 ${d} \xB7 ${o.pa}`,a.manualPA??g.m100PA]]})]:[[Zt("m100",e)+" \xB7 "+o.remote,l.m100Pickup],[Zt("m100",e)+" \xB7 "+o.pa,l.m100PA]];st("#radii-list").innerHTML=[...u,[Zt("m40",e)+" \xB7 "+o.remote,l.m40Pickup],[Zt("m40",e)+" \xB7 "+o.pa,l.m40PA],[Zt("dc20",e)+" \xB7 "+o.speaker,l.dc20]].map(([d,f])=>`<div><span>${d}</span><strong>${Us(f)}</strong></div>`).join(""),cv(n,e,s,r,i),hh(t,n,e)}function cv(n,e,t,i,s){let r=Yi(e),o=An(e),a=st("#demo-list"),l=st("#bom-list");st("#device-list").before(st("#device-selection")),a.replaceChildren(),l.replaceChildren();let c=0;function h(m,p,S,y=[]){if(!S)return;c++;let x=document.createElement("div");if(x.className="inventory-group",x.innerHTML=`<div class="bom-row"><span>${lf(p)}</span><strong>\xD7 ${S}</strong></div>`,m===a&&!n.equipment){let T=document.createElement("small");T.className="demo-indicator",T.textContent=r.demo,x.querySelector(".bom-row span").append(T)}let b=document.createElement("div");b.className="inventory-instances",y.forEach((T,C)=>{if(i[T.type]===!1)return;let I=document.createElement("button");I.type="button",I.className="device-row",I.dataset.deviceId=T.id;let w=`${Us(T.x)} \xB7 ${Us(T.y)}`,M=T.type==="display"?o[T.side==="left"?"left":"right"]+" ":"";I.setAttribute("aria-pressed","false"),I.setAttribute("aria-label",`${xi(T,e)} \xB7 ${w}`),I.innerHTML=`<span class="device-icon ${T.type}" aria-hidden="true"></span><span>${M}#${T.number||C+1}<small>${w}</small></span>`,I.addEventListener("click",()=>s(T,!0)),b.append(I)}),b.childElementCount&&x.append(b),m.append(x)}let u=new Map;for(let m of t){let p=ch(m,e);u.has(p)||u.set(p,[]),u.get(p).push(m)}for(let[m,p]of u)h(a,m,p.length,p);n.equipment?.qnexModel==="NDP600"&&h(a,"NDP600 Height-Adjustable Stand",n.equipment.qnexCount);let{counts:d,du11:f,channels:g,processor:_}=n.bom;for(let m of["m100","m40","dc20"]){let p=m==="m100"?" \xB7 A":m==="m40"?" \xB7 B":"";h(l,Zt(m,e)+p,d[m],n.devices.filter(S=>S.type===m))}for(let m of[55,65,75]){let p=n.displays.filter(S=>S.size===m).map(S=>({...S,type:"display"}));h(l,`${r.display} \xB7 ${m}\u2033`,d[m],p)}if(h(l,r.du11,f),_){let m=(_.type==="DP44"?4:8)*_.count;h(l,`${Zt(_.type,e)} \xB7 ${g}/${m} ${r.channels}`,_.count)}st("#equipment-total").textContent=`${c} ${o.types}`,st("#bom-note").hidden=!(f||_?.count),c||(l.textContent=Ns(e).noDevices)}function hh(n,e,t,i=Fs()){let s=Yi(t);if(st("#device-selection").hidden=!n,st("#adjust-camera-field").hidden=n?.type!=="camera",!n){st("#device-detail").textContent=s.selectPrompt,st("#focus-device").hidden=!0;return}let r=n.mountHeight;r==null&&(n.type==="dc20"?r=e.height-.012:["m100","m40"].includes(n.type)?r=e.height-i.audioDrop:n.type==="ifp"?r=i.mainHeight:r=e.height-i.auxDrop);let o=n.install||(n.type==="ifp"||n.type==="station"?"wall":n.type==="podium"?"floor":n.type==="display"?"suspended":n.type==="dc20"?"recessed":"ceiling"),a=n.type==="m100"?"597 \xD7 597 \xD7 53.5 mm":n.type==="dc20"?"\xD8279 \xD7 176 mm":n.type==="ifp"?`${n.size}\u2033`:n.type==="station"?"0.72 \xD7 0.43 m":n.model==="NDP200"?"870 \xD7 609 \xD7 1,212 mm":n.type==="podium"?n.model==="NDP600"?`1.60 \xD7 0.80 m \xB7 0.90 m ${An(t).tabletop}`:"0.77 \xD7 0.49 m":null,l=["ifp","station","podium","camera","controller"].includes(n.type),c=l&&n.model!=="NDP200";st("#device-detail").innerHTML=`<strong>${lf(xi(n,t))}</strong><div>${l?s.demoPosition:s.position}: (${Us(n.x)}, ${Us(n.y)})</div>${a?`<div>${c?s.demoDimensions:s.dimensions}: ${a}${c?` <em>${s.assumption}</em>`:""}</div>`:""}<div>${s.mountHeight}: ${Us(r)} <em>${s.assumption}</em></div><div>${s.installMethod}: ${s[o]} <em>${s.assumption}</em></div>`,st("#focus-device").hidden=!["m100","dc20","ifp","station","podium","camera","controller"].includes(n.type),document.querySelectorAll(".device-row").forEach(h=>{let u=h.dataset.deviceId===n.id;h.classList.toggle("selected",u),h.setAttribute("aria-pressed",String(u)),u&&h.closest(".inventory-group").append(st("#device-selection"))})}function gn(n){let e=st("#scene-error");e.textContent=n||"",e.hidden=!n}var hf={en:["3D coverage","Remote pickup","Local PA pickup","Speaker output","Selected device only","Animate waves","Planning envelopes. Microphone rings converge; speaker rings expand. Direction illustration, not an acoustic simulation."],zh:["\u7ACB\u4F53\u8986\u76D6","\u8FDC\u7AEF\u62FE\u97F3","\u672C\u5730\u6269\u58F0\u62FE\u97F3","\u97F3\u7BB1\u64AD\u653E","\u4EC5\u9009\u4E2D\u8BBE\u5907","\u64AD\u653E\u6CE2\u7EB9","\u89C4\u5212\u8303\u56F4\u793A\u610F\uFF1A\u9EA6\u514B\u98CE\u73AF\u7EBF\u5411\u4E0A\u6C47\u805A\uFF0C\u97F3\u7BB1\u73AF\u7EBF\u5411\u4E0B\u6269\u6563\u3002\u4EC5\u8BF4\u660E\u65B9\u5411\uFF0C\u4E0D\u4EE3\u8868\u58F0\u5B66\u4EFF\u771F\u3002"],ko:["3D \uBC94\uC704","\uC6D0\uACA9 \uC218\uC74C","\uC2E4\uB0B4 \uD655\uC131 \uC218\uC74C","\uC2A4\uD53C\uCEE4 \uCD9C\uB825","\uC120\uD0DD\uD55C \uC7A5\uCE58\uB9CC","\uD30C\uB3D9 \uC560\uB2C8\uBA54\uC774\uC158","\uACC4\uD68D\uC6A9 \uBC94\uC704\uC785\uB2C8\uB2E4. \uB9C8\uC774\uD06C\uB294 \uC218\uB834\uD558\uACE0 \uC2A4\uD53C\uCEE4\uB294 \uD655\uC0B0\uD569\uB2C8\uB2E4. \uC74C\uD5A5 \uC2DC\uBBAC\uB808\uC774\uC158\uC774 \uC544\uB2D9\uB2C8\uB2E4."],mn:["3D \u0445\u0430\u043C\u0440\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D","\u0410\u043B\u0441\u044B\u043D \u0434\u0443\u0443 \u0445\u0443\u0440\u0430\u0430\u043B\u0442","\u0414\u043E\u0442\u043E\u043E\u0434 \u04E9\u0441\u0433\u04E9\u043B\u0442\u0438\u0439\u043D \u0445\u0443\u0440\u0430\u0430\u043B\u0442","\u0427\u0430\u043D\u0433\u0430 \u044F\u0440\u0438\u0433\u0447","\u0417\u04E9\u0432\u0445\u04E9\u043D \u0441\u043E\u043D\u0433\u043E\u0441\u043E\u043D \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436","\u0414\u043E\u043B\u0433\u0438\u043E\u043D \u0445\u04E9\u0434\u04E9\u043B\u0433\u04E9\u0445","\u0422\u04E9\u043B\u04E9\u0432\u043B\u04E9\u043B\u0442\u0438\u0439\u043D \u0434\u04AF\u0440\u0441\u043B\u044D\u043B. \u041C\u0438\u043A\u0440\u043E\u0444\u043E\u043D\u044B \u0446\u0430\u0433\u0438\u0440\u0430\u0433 \u0442\u04E9\u0432\u043B\u04E9\u0440\u0447, \u0447\u0430\u043D\u0433\u0430 \u044F\u0440\u0438\u0433\u0447\u0438\u0439\u043D \u0446\u0430\u0433\u0438\u0440\u0430\u0433 \u0442\u044D\u043B\u043D\u044D. \u0410\u043A\u0443\u0441\u0442\u0438\u043A \u0441\u0438\u043C\u0443\u043B\u044F\u0446\u0438 \u0431\u0438\u0448."],ja:["\u7ACB\u4F53\u30AB\u30D0\u30FC\u7BC4\u56F2","\u9060\u9694\u96C6\u97F3","\u5BA4\u5185\u62E1\u58F0\u7528\u96C6\u97F3","\u30B9\u30D4\u30FC\u30AB\u30FC\u51FA\u529B","\u9078\u629E\u6A5F\u5668\u306E\u307F","\u6CE2\u7D0B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3","\u8A08\u753B\u7528\u306E\u6A21\u5F0F\u56F3\u3002\u30DE\u30A4\u30AF\u306F\u53CE\u675F\u3001\u30B9\u30D4\u30FC\u30AB\u30FC\u306F\u62E1\u6563\u3057\u307E\u3059\u3002\u97F3\u97FF\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002"],es:["Cobertura 3D","Captaci\xF3n remota","Captaci\xF3n para PA local","Salida de altavoz","Solo dispositivo seleccionado","Animar ondas","Envolventes de planificaci\xF3n. Los anillos del micr\xF3fono convergen; los del altavoz se expanden. No es simulaci\xF3n ac\xFAstica."],fr:["Couverture 3D","Captation distante","Captation pour sonorisation","Sortie haut-parleur","Appareil s\xE9lectionn\xE9 uniquement","Animer les ondes","Enveloppes de planification. Les anneaux du microphone convergent, ceux du haut-parleur divergent. Sans simulation acoustique."],ar:["\u062A\u063A\u0637\u064A\u0629 \u062B\u0644\u0627\u062B\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F","\u0627\u0644\u062A\u0642\u0627\u0637 \u0639\u0646 \u0628\u0639\u062F","\u0627\u0644\u062A\u0642\u0627\u0637 \u0644\u0644\u062A\u0636\u062E\u064A\u0645 \u0627\u0644\u0645\u062D\u0644\u064A","\u062E\u0631\u062C \u0645\u0643\u0628\u0631 \u0627\u0644\u0635\u0648\u062A","\u0627\u0644\u062C\u0647\u0627\u0632 \u0627\u0644\u0645\u062D\u062F\u062F \u0641\u0642\u0637","\u062A\u062D\u0631\u064A\u0643 \u0627\u0644\u0645\u0648\u062C\u0627\u062A","\u0646\u0637\u0627\u0642\u0627\u062A \u062A\u062E\u0637\u064A\u0637\u064A\u0629. \u062A\u062A\u0642\u0627\u0631\u0628 \u062D\u0644\u0642\u0627\u062A \u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646 \u0648\u062A\u062A\u0648\u0633\u0639 \u062D\u0644\u0642\u0627\u062A \u0627\u0644\u0633\u0645\u0627\u0639\u0629. \u0644\u064A\u0633\u062A \u0645\u062D\u0627\u0643\u0627\u0629 \u0635\u0648\u062A\u064A\u0629."]};function uf(n){let e=hf[n]||hf.en;["title","remote-label","pa-label","speaker-label","selected-label","animation-label","note"].forEach((t,i)=>{document.getElementById(`volume-${t}`).textContent=e[i]})}function df(){let n=e=>document.getElementById(`volume-${e}`).checked;return{remote:n("remote"),pa:n("pa"),speaker:n("speaker"),onlySelected:n("selected"),animation:n("animation"),reducedMotion:window.matchMedia("(prefers-reduced-motion: reduce)").matches}}var $i={CV870:{label:"CV870 Pro",projectOnly:!1,roleHfov:{teacher:43,student:94},roleMinDistance:{teacher:0,student:0},roleMaxDistance:{teacher:10,student:10}},CV210:{label:"CV210",projectOnly:!1,budgetPair:!0,roleHfov:{teacher:40,student:120},roleMinDistance:{teacher:5,student:1},roleMaxDistance:{teacher:12,student:10}},"PVC-G530P":{label:"PVC-G530P",opticalZoom:"30x",minHfov:2,maxHfov:56.5,projectOnly:!0},"PVC-G520P":{label:"PVC-G520P",opticalZoom:"20x",minHfov:2.8,maxHfov:56.5,projectOnly:!0},"PVC-G512P":{label:"PVC-G512P",opticalZoom:"12x",minHfov:7.6,maxHfov:81,projectOnly:!0}};function ff(n){return n==="CV870"?{pivotHeight:.113,lensDepth:.073}:n==="CV210"?{pivotHeight:.035,lensDepth:.042}:{pivotHeight:.098,lensDepth:.081}}var Zi=n=>["teacher","student"].includes(n.kind),Os=n=>n*Math.PI/180,fc=n=>2*Math.atan(Math.tan(Os(n)/2)*9/16)*180/Math.PI;function uh(n,e,t,i={},s=!1){let r=(n.direction==="front"?Math.PI:0)+Os(i.pan||0),o=new Qt().setFromEuler(new ln(Os(i.tilt||0),r,0,"YXZ")),a=n.depth===0?.27:n.depth===t.depth?-.27:0,{pivotHeight:l,lensDepth:c}=s?ff(n.model):{pivotHeight:.21,lensDepth:n.model.startsWith("PVC")?.31:.2575},h=new R(n.x,e+l,n.depth+a),u=new R(0,0,c).applyQuaternion(o).add(h),d=new R(0,0,1).applyQuaternion(o),f=new R(1,0,0).applyQuaternion(o),g=new R(0,1,0).applyQuaternion(o);return{origin:u,pivot:h,quaternion:o,forward:d,right:f,up:g}}function pf(n,e,t,i,s={},r=!1){let o=n.getObjectByName("camera-head");if(o&&(o.quaternion.copy(uh(e,t,i,s,r).quaternion),r)){let a=o.getObjectByName("camera-yoke");a&&(a.rotation.x=-Os(s.tilt||0))}}function gf(n){return{model:n.model,pan:0,tilt:0,hfov:n.hfov,custom:!1}}function dh(n,e){let t=$i[n.model];return t.projectOnly?[t.minHfov,t.maxHfov]:e.custom?[2,140]:[n.hfov,n.hfov]}function mf(n,e){let t=gf(n),i={...t,...e,model:n.model},s=(a,l,c,h)=>Math.min(c,Math.max(l,Number.isFinite(Number(a))?Number(a):h));i.custom=!$i[n.model].projectOnly&&!!i.custom,i.pan=s(i.pan,-90,90,0),i.tilt=s(i.tilt,-60,60,0);let[r,o]=dh(n,i);return i.hfov=s(i.hfov,r,o,t.hfov),i}var pc=class{constructor(){this.enabled=!1,this.onlyCurrent=!1,this.activeId=null,this.settings=new Map}sync(e){let t=e.filter(Zi),i=new Set(t.map(s=>s.id));for(let s of this.settings.keys())i.has(s)||this.settings.delete(s);for(let s of t){let r=this.settings.get(s.id);this.settings.set(s.id,mf(s,r?.model===s.model?r:{}))}i.has(this.activeId)||(this.activeId=t[0]?.id||null)}change(e,t){let i=mf(e,{...this.settings.get(e.id),...t});return this.settings.set(e.id,i),i}reset(e){this.settings.set(e.id,gf(e))}resetAll(){this.enabled=!1,this.onlyCurrent=!1,this.settings.clear(),this.activeId=null}};var lv=["heading","enabled","camera","onlyCurrent","pan","tilt","hfov","custom","reset","note","tiltHint","fixedHint","zoomHint","empty","vfov","poseNote"],_f={en:["Camera field of view","Show 3D camera field","Camera","Only current camera","Pan","Tilt","Horizontal field of view","Custom demonstration","Reset this camera","16:9 field-of-view illustration \xB7 furniture occlusion is not simulated.","Positive tilt points down; negative tilt points up.","Fixed lens: use the model default, or enable a custom demonstration.","Adjust within the model\u2019s wide / tele field-of-view range.","No camera is available.","Vertical field of view","Camera direction: adjust in the field-of-view panel."],zh:["\u6444\u50CF\u5934\u89C6\u573A","\u663E\u793A\u4E09\u7EF4\u89C6\u573A","\u6444\u50CF\u5934","\u4EC5\u5F53\u524D\u6444\u50CF\u5934","\u5DE6\u53F3\u8F6C\u5411","\u4E0A\u4E0B\u4FEF\u4EF0","\u6C34\u5E73\u89C6\u573A\u89D2","\u81EA\u5B9A\u4E49\u6F14\u793A","\u6062\u590D\u5F53\u524D\u6444\u50CF\u5934","16:9 \u89C6\u573A\u793A\u610F \xB7 \u672A\u6A21\u62DF\u684C\u6905\u7B49\u7269\u4F53\u906E\u6321\u3002","\u4FEF\u4EF0\u6B63\u503C\u5411\u4E0B\uFF0C\u8D1F\u503C\u5411\u4E0A\u3002","\u56FA\u5B9A\u955C\u5934\u91C7\u7528\u578B\u53F7\u9ED8\u8BA4\u89C6\u89D2\uFF1B\u5F00\u542F\u81EA\u5B9A\u4E49\u6F14\u793A\u53EF\u8C03\u6574\u793A\u610F\u8303\u56F4\u3002","\u5728\u8BE5\u578B\u53F7\u5E7F\u89D2\u4E0E\u957F\u7126\u89C6\u573A\u8303\u56F4\u5185\u8C03\u6574\u3002","\u5F53\u524D\u6CA1\u6709\u53EF\u7528\u6444\u50CF\u5934\u3002","\u5782\u76F4\u89C6\u573A\u89D2","\u6444\u50CF\u5934\u671D\u5411\uFF1A\u53EF\u5728\u89C6\u573A\u9762\u677F\u4E2D\u8C03\u6574\u3002"],ko:["\uCE74\uBA54\uB77C \uD654\uAC01","3D \uCE74\uBA54\uB77C \uD654\uAC01 \uD45C\uC2DC","\uCE74\uBA54\uB77C","\uD604\uC7AC \uCE74\uBA54\uB77C\uB9CC","\uC88C\uC6B0 \uD68C\uC804","\uC0C1\uD558 \uAE30\uC6B8\uAE30","\uC218\uD3C9 \uD654\uAC01","\uC0AC\uC6A9\uC790 \uC9C0\uC815 \uC2DC\uC5F0","\uD604\uC7AC \uCE74\uBA54\uB77C \uCD08\uAE30\uD654","16:9 \uD654\uAC01 \uC608\uC2DC \xB7 \uAC00\uAD6C\uC5D0 \uC758\uD55C \uAC00\uB9BC\uC740 \uACC4\uC0B0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.","\uC591\uC218\uB294 \uC544\uB798\uCABD, \uC74C\uC218\uB294 \uC704\uCABD\uC785\uB2C8\uB2E4.","\uACE0\uC815 \uB80C\uC988\uB294 \uAE30\uBCF8 \uD654\uAC01\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uC9C0\uC815 \uC2DC\uC5F0\uC5D0\uC11C \uC870\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","\uBAA8\uB378\uC758 \uAD11\uAC01 / \uB9DD\uC6D0 \uD654\uAC01 \uBC94\uC704\uC5D0\uC11C \uC870\uC815\uD569\uB2C8\uB2E4.","\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uCE74\uBA54\uB77C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.","\uC218\uC9C1 \uD654\uAC01","\uCE74\uBA54\uB77C \uBC29\uD5A5: \uD654\uAC01 \uD328\uB110\uC5D0\uC11C \uC870\uC815\uD569\uB2C8\uB2E4."],mn:["\u041A\u0430\u043C\u0435\u0440\u044B\u043D \u0445\u0430\u0440\u0430\u0445 \u04E9\u043D\u0446\u04E9\u0433","\u041A\u0430\u043C\u0435\u0440\u044B\u043D 3D \u0445\u0430\u0440\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D\u0433 \u0445\u0430\u0440\u0443\u0443\u043B\u0430\u0445","\u041A\u0430\u043C\u0435\u0440","\u0417\u04E9\u0432\u0445\u04E9\u043D \u043E\u0434\u043E\u043E\u0433\u0438\u0439\u043D \u043A\u0430\u043C\u0435\u0440","\u0425\u044D\u0432\u0442\u044D\u044D \u044D\u0440\u0433\u044D\u043B\u0442","\u0411\u043E\u0441\u043E\u043E \u043D\u0430\u043B\u0430\u043B\u0442","\u0425\u044D\u0432\u0442\u044D\u044D \u0445\u0430\u0440\u0430\u0445 \u04E9\u043D\u0446\u04E9\u0433","\u04E8\u04E9\u0440\u0447\u043B\u04E9\u043D \u04AF\u0437\u04AF\u04AF\u043B\u044D\u0445","\u042D\u043D\u044D \u043A\u0430\u043C\u0435\u0440\u044B\u0433 \u0441\u044D\u0440\u0433\u044D\u044D\u0445","16:9 \u0445\u0430\u0440\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D\u043D\u0438\u0439 \u0436\u0438\u0448\u044D\u044D \xB7 \u0442\u0430\u0432\u0438\u043B\u0433\u0430\u0430\u0441 \u04AF\u04AF\u0441\u044D\u0445 \u0445\u0430\u043B\u0445\u043B\u0430\u043B\u0442\u044B\u0433 \u0442\u043E\u043E\u0446\u043E\u043E\u0433\u04AF\u0439.","\u042D\u0435\u0440\u044D\u0433 \u0443\u0442\u0433\u0430 \u0434\u043E\u043E\u0448, \u0441\u04E9\u0440\u04E9\u0433 \u0443\u0442\u0433\u0430 \u0434\u044D\u044D\u0448 \u0447\u0438\u0433\u043B\u044D\u043D\u044D.","\u0422\u043E\u0433\u0442\u043C\u043E\u043B \u043B\u0438\u043D\u0437 \u0437\u0430\u0433\u0432\u0430\u0440\u044B\u043D \u04AF\u043D\u0434\u0441\u044D\u043D \u04E9\u043D\u0446\u0433\u0438\u0439\u0433 \u0430\u0448\u0438\u0433\u043B\u0430\u043D\u0430. \u04E8\u04E9\u0440\u0447\u043B\u04E9\u043D \u04AF\u0437\u04AF\u04AF\u043B\u044D\u0445 \u0433\u043E\u0440\u0438\u043C\u0434 \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u0436 \u0431\u043E\u043B\u043D\u043E.","\u0417\u0430\u0433\u0432\u0430\u0440\u044B\u043D \u04E9\u0440\u0433\u04E9\u043D / \u043D\u0430\u0440\u0438\u0439\u043D \u0445\u0430\u0440\u0430\u0445 \u04E9\u043D\u0446\u0433\u0438\u0439\u043D \u0445\u04AF\u0440\u044D\u044D\u043D\u0434 \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u043D\u0430.","\u041A\u0430\u043C\u0435\u0440 \u0431\u0430\u0439\u0445\u0433\u04AF\u0439 \u0431\u0430\u0439\u043D\u0430.","\u0411\u043E\u0441\u043E\u043E \u0445\u0430\u0440\u0430\u0445 \u04E9\u043D\u0446\u04E9\u0433","\u041A\u0430\u043C\u0435\u0440\u044B\u043D \u0447\u0438\u0433\u043B\u044D\u043B: \u0445\u0430\u0440\u0430\u0445 \u04E9\u043D\u0446\u0433\u0438\u0439\u043D \u0441\u0430\u043C\u0431\u0430\u0440\u0442 \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u043D\u0430."],ja:["\u30AB\u30E1\u30E9\u306E\u753B\u89D2","3D\u753B\u89D2\u3092\u8868\u793A","\u30AB\u30E1\u30E9","\u73FE\u5728\u306E\u30AB\u30E1\u30E9\u306E\u307F","\u5DE6\u53F3\u306E\u5411\u304D","\u4E0A\u4E0B\u306E\u50BE\u304D","\u6C34\u5E73\u753B\u89D2","\u30AB\u30B9\u30BF\u30E0\u30C7\u30E2","\u73FE\u5728\u306E\u30AB\u30E1\u30E9\u3092\u30EA\u30BB\u30C3\u30C8","16:9\u753B\u89D2\u306E\u6A21\u5F0F\u56F3 \xB7 \u5BB6\u5177\u306A\u3069\u306E\u906E\u853D\u306F\u8A08\u7B97\u3057\u307E\u305B\u3093\u3002","\u6B63\u306E\u5024\u306F\u4E0B\u5411\u304D\u3001\u8CA0\u306E\u5024\u306F\u4E0A\u5411\u304D\u3067\u3059\u3002","\u56FA\u5B9A\u30EC\u30F3\u30BA\u306F\u65E2\u5B9A\u306E\u753B\u89D2\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\u30AB\u30B9\u30BF\u30E0\u30C7\u30E2\u3067\u6A21\u5F0F\u7684\u306B\u5909\u66F4\u3067\u304D\u307E\u3059\u3002","\u6A5F\u7A2E\u306E\u5E83\u89D2 / \u671B\u9060\u753B\u89D2\u306E\u7BC4\u56F2\u3067\u8ABF\u6574\u3057\u307E\u3059\u3002","\u4F7F\u7528\u3067\u304D\u308B\u30AB\u30E1\u30E9\u304C\u3042\u308A\u307E\u305B\u3093\u3002","\u5782\u76F4\u753B\u89D2","\u30AB\u30E1\u30E9\u306E\u5411\u304D\uFF1A\u753B\u89D2\u30D1\u30CD\u30EB\u3067\u8ABF\u6574\u3057\u307E\u3059\u3002"],es:["Campo de visi\xF3n de la c\xE1mara","Mostrar campo de visi\xF3n 3D","C\xE1mara","Solo la c\xE1mara actual","Giro horizontal","Inclinaci\xF3n","Campo horizontal","Demostraci\xF3n personalizada","Restablecer esta c\xE1mara","Esquema 16:9 \xB7 no se simulan obstrucciones de muebles.","Un valor positivo apunta abajo; uno negativo, arriba.","La lente fija usa el \xE1ngulo del modelo; active la demostraci\xF3n personalizada para ajustarlo.","Ajuste dentro del campo angular / tele del modelo.","No hay c\xE1maras disponibles.","Campo vertical","Direcci\xF3n de c\xE1mara: ajuste en el panel de campo de visi\xF3n."],fr:["Champ de vision des cam\xE9ras","Afficher le champ de vision 3D","Cam\xE9ra","Cam\xE9ra actuelle uniquement","Rotation horizontale","Inclinaison verticale","Champ de vision horizontal","D\xE9monstration personnalis\xE9e","R\xE9initialiser cette cam\xE9ra","Champ de vision 16:9 indicatif \xB7 les obstacles comme le mobilier ne sont pas simul\xE9s.","Une valeur positive incline vers le bas ; une valeur n\xE9gative vers le haut.","La lentille fixe utilise l\u2019angle du mod\xE8le. Activez la d\xE9monstration personnalis\xE9e pour modifier la repr\xE9sentation.","R\xE9glez l\u2019angle dans la plage grand-angle / t\xE9l\xE9objectif du mod\xE8le.","Aucune cam\xE9ra disponible.","Champ de vision vertical","Orientation de la cam\xE9ra : r\xE9glable dans le panneau de champ de vision."],ar:["\u0645\u062C\u0627\u0644 \u0631\u0624\u064A\u0629 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627","\u0625\u0638\u0647\u0627\u0631 \u0645\u062C\u0627\u0644 \u0631\u0624\u064A\u0629 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \u062B\u0644\u0627\u062B\u064A \u0627\u0644\u0623\u0628\u0639\u0627\u062F","\u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627","\u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u062D\u0627\u0644\u064A\u0629 \u0641\u0642\u0637","\u0627\u0644\u062F\u0648\u0631\u0627\u0646 \u0627\u0644\u0623\u0641\u0642\u064A","\u0627\u0644\u0645\u064A\u0644 \u0627\u0644\u0631\u0623\u0633\u064A","\u0645\u062C\u0627\u0644 \u0627\u0644\u0631\u0624\u064A\u0629 \u0627\u0644\u0623\u0641\u0642\u064A","\u0639\u0631\u0636 \u062A\u0648\u0636\u064A\u062D\u064A \u0645\u062E\u0635\u0635","\u0625\u0639\u0627\u062F\u0629 \u0636\u0628\u0637 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u062D\u0627\u0644\u064A\u0629","\u062A\u0645\u062B\u064A\u0644 \u0645\u062C\u0627\u0644 \u0627\u0644\u0631\u0624\u064A\u0629 \u0628\u0646\u0633\u0628\u0629 16:9 \xB7 \u0644\u0627 \u062A\u064F\u062D\u0627\u0643\u0649 \u0627\u0644\u0639\u0648\u0627\u0626\u0642 \u0645\u062B\u0644 \u0627\u0644\u0623\u062B\u0627\u062B.","\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0648\u062C\u0628\u0629 \u0644\u0644\u0623\u0633\u0641\u0644 \u0648\u0627\u0644\u0633\u0627\u0644\u0628\u0629 \u0644\u0644\u0623\u0639\u0644\u0649.","\u062A\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0639\u062F\u0633\u0629 \u0627\u0644\u062B\u0627\u0628\u062A\u0629 \u0632\u0627\u0648\u064A\u0629 \u0627\u0644\u0637\u0631\u0627\u0632 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629\u061B \u064A\u0645\u0643\u0646 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u0645\u062B\u064A\u0644 \u0641\u064A \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u0645\u062E\u0635\u0635.","\u0627\u0636\u0628\u0637 \u0636\u0645\u0646 \u0646\u0637\u0627\u0642 \u0627\u0644\u0632\u0627\u0648\u064A\u0629 \u0627\u0644\u0648\u0627\u0633\u0639\u0629 / \u0627\u0644\u0645\u0642\u0631\u0628\u0629 \u0644\u0644\u0637\u0631\u0627\u0632.","\u0644\u0627 \u062A\u0648\u062C\u062F \u0643\u0627\u0645\u064A\u0631\u0627\u062A \u0645\u062A\u0627\u062D\u0629.","\u0645\u062C\u0627\u0644 \u0627\u0644\u0631\u0624\u064A\u0629 \u0627\u0644\u0631\u0623\u0633\u064A","\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627: \u064A\u064F\u0636\u0628\u0637 \u0645\u0646 \u0644\u0648\u062D\u0629 \u0645\u062C\u0627\u0644 \u0627\u0644\u0631\u0624\u064A\u0629."]},fh=n=>Object.fromEntries(lv.map((e,t)=>[e,(_f[n]||_f.en)[t]]));var It=n=>document.querySelector(n),mc=class{constructor({devices:e,title:t,language:i,onSelect:s,scene:r}){Object.assign(this,{devices:e,title:t,language:i,onSelect:s,scene:r}),this.state=new pc,this.frame=null,It("#camera-field-enabled").addEventListener("change",o=>{this.state.enabled=o.target.checked,this.apply(),this.render()}),It("#camera-field-only").addEventListener("change",o=>{this.state.onlyCurrent=o.target.checked,this.apply()}),It("#camera-field-select").addEventListener("change",o=>{this.state.activeId=o.target.value,s(o.target.value)}),It("#camera-field-custom").addEventListener("change",o=>{let a=this.active();a&&(this.state.change(a,{custom:o.target.checked}),this.apply(),this.render())}),It("#camera-field-reset").addEventListener("click",()=>{let o=this.active();o&&(this.state.reset(o),this.apply(),this.render())});for(let o of["pan","tilt","hfov"])for(let a of["","-number"]){let l=It(`#camera-field-${o}${a}`);l.addEventListener("input",()=>this.input(o,l)),l.addEventListener("change",()=>this.renderValues())}}active(){return this.devices().find(e=>e.id===this.state.activeId)}input(e,t){let i=this.active();!i||t.value===""||!Number.isFinite(Number(t.value))||(this.state.change(i,{[e]:Number(t.value)}),this.renderValues(t),this.frame===null&&(this.frame=requestAnimationFrame(()=>{this.frame=null,this.apply()})))}apply(){this.scene()?.setCameraFrusta(this.state);let e=It("#camera-field-panel");e.dataset.enabled=String(this.state.enabled),e.dataset.camera=this.state.activeId||""}select(e){this.devices().find(t=>t.id===e&&Zi(t))&&(this.state.activeId=e),this.apply(),this.render()}sync(){this.state.sync(this.devices()),this.apply(),this.render()}resetAll(){this.state.resetAll(),this.state.sync(this.devices()),this.apply(),this.render()}renderValues(e){let t=this.active(),i=this.state.settings.get(t?.id);if(!i)return;let[s,r]=dh(t,i);for(let a of["pan","tilt","hfov"])for(let l of["","-number"]){let c=It(`#camera-field-${a}${l}`);a==="hfov"&&(c.min=s,c.max=r,c.disabled=s===r),c!==e&&(c.value=i[a])}let o=fh(this.language());It("#camera-field-vfov").textContent=`${o.vfov}: ${fc(i.hfov).toFixed(1)}\xB0`,It("#camera-field-custom").checked=i.custom}render(){let e=fh(this.language()),t=this.devices().filter(Zi);document.querySelectorAll("[data-field-i18n]").forEach(o=>{o.textContent=e[o.dataset.fieldI18n]}),It("#camera-field-enabled").checked=this.state.enabled,It("#camera-field-enabled").disabled=!t.length,It("#camera-field-only").checked=this.state.onlyCurrent;let i=It("#camera-field-select");i.replaceChildren(...t.map(o=>{let a=document.createElement("option");return a.value=o.id,a.textContent=this.title(o),a})),i.value=this.state.activeId;let s=this.active();if(It("#camera-field-empty").hidden=t.length>0,It("#camera-field-settings").hidden=!this.state.enabled||!s,!s)return;let r=$i[s.model].projectOnly;It("#camera-field-custom-row").hidden=r,It("#camera-field-hint").textContent=r?e.zoomHint:e.fixedHint;for(let o of["pan","tilt","hfov"])It(`#camera-field-${o}-number`).setAttribute("aria-label",`${e[o]} (\xB0)`);this.renderValues()}};var vi=1e-8;function vf(n){return n.filter((e,t)=>n.findIndex(i=>i.distanceToSquared(e)<vi*vi)===t)}function xf(n){if(n.length<3)return!1;let e=n[1].clone().sub(n[0]);return n.slice(2).some(t=>e.clone().cross(t.clone().sub(n[0])).lengthSq()>vi*vi)}function hv(n,e,t){let i=[];for(let s=0;s<n.length;s++){let r=n[s],o=n[(s+1)%n.length],a=e(r),l=e(o),c=a>=-vi,h=l>=-vi;if(c&&i.push(r),c!==h){let u=r.clone().lerp(o,a/(a-l));i.push(u),t.push(u)}}return vf(i)}function uv(n,e){let t=n.reduce((o,a)=>o.add(a),new R).multiplyScalar(1/n.length),s=(Math.abs(e.y)<.9?new R(0,1,0):new R(1,0,0)).cross(e).normalize(),r=e.clone().cross(s);return n.sort((o,a)=>{let l=o.clone().sub(t),c=a.clone().sub(t);return Math.atan2(l.dot(r),l.dot(s))-Math.atan2(c.dot(r),c.dot(s))})}function dv(n,e){let t=[[new R(1,0,0),0,"wall"],[new R(-1,0,0),e.width,"wall"],[new R(0,1,0),0,"floor"],[new R(0,-1,0),e.height,"ceiling"],[new R(0,0,1),0,"wall"],[new R(0,0,-1),e.depth,"wall"]],i=n;for(let[s,r,o]of t){let a=[],l=h=>s.dot(h)+r;i=i.map(h=>({...h,points:hv(h.points,l,a)})).filter(h=>xf(h.points));let c=vf(a);if(xf(c)&&i.push({kind:o,points:uv(c,s)}),!i.length)break}return i}function yf(n,e,t,i,s=!1){let r=uh(n,e,t,i,s),o=i.hfov,a=fc(o),l=Math.hypot(t.width,t.depth,t.height)*2+2,c=r.origin.clone().addScaledVector(r.forward,l),h=l*Math.tan(Os(o)/2),u=h*9/16,d=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([_,m])=>c.clone().addScaledVector(r.right,h*_).addScaledVector(r.up,u*m)),f=[{kind:"far",points:d}];for(let _=0;_<4;_++)f.push({kind:"frustum",points:[r.origin,d[_],d[(_+1)%4]]});let g=dv(f,t);return{...r,hfov:o,vfov:a,faces:g,floor:g.find(_=>_.kind==="floor")?.points||[],centerEnd:fv(r.origin,r.forward,t)}}function fv(n,e,t){let i=0,s=1/0;for(let[r,o]of[["x",t.width],["y",t.height],["z",t.depth]]){if(Math.abs(e[r])<vi){if(n[r]<0||n[r]>o)return null;continue}let a=-n[r]/e[r],l=(o-n[r])/e[r];i=Math.max(i,Math.min(a,l)),s=Math.min(s,Math.max(a,l))}return s>=i&&s>vi?n.clone().addScaledVector(e,s):null}var Mf=1;function Bs(n){n?.traverse(e=>{e.geometry?.dispose();for(let t of Array.isArray(e.material)?e.material:[e.material])t?.dispose()}),n?.parent?.remove(n)}function Sf(n,e,t){let i=[];for(let r=1;r<n.length-1;r++)for(let o of[n[0],n[r],n[r+1]])i.push(o.x,o.y,o.z);let s=new xt().setAttribute("position",new je(i,3));return new Oe(s,new Nt({color:e,transparent:!0,opacity:t,side:vt,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1}))}function ph(n,e,t=!0){let i=new xt().setFromPoints(n),s=new Sn({color:e,transparent:!0,opacity:.68,toneMapped:!1});return t?new Ui(i,s):new Ni(i,s)}function pv(n,e){let t=new qe,i=new qe;t.name="camera-view-volume",i.name="camera-floor-intersection";for(let s of n.faces)t.add(Sf(s.points,e,s.kind==="frustum"?.065:.09)),t.add(ph(s.points,e));if(n.centerEnd){let s=ph([n.origin,n.centerEnd],e,!1);s.name="camera-view-center",t.add(s)}if(n.floor.length>=3){let s=n.floor.map(r=>new R(r.x,.055,r.z));i.add(Sf(s,e,.14),ph(s,e))}return{group:t,floor:i}}var gc=class{constructor(e){this.volumeRoot=new qe,this.floorRoot=new qe,this.entries=new Map,this.volumeRoot.name="camera-frusta",this.floorRoot.name="camera-floor-coverage",e.add(this.volumeRoot,this.floorRoot)}sync(e,t,i,s,r,o=!1){let a=e.filter(Zi),l=new Set(a.map(c=>c.id));for(let[c,h]of this.entries)l.has(c)||(Bs(h.group),Bs(h.floor),this.entries.delete(c));for(let c of a){let h=s.settings.get(c.id),u=JSON.stringify([c.model,c.x,c.depth,c.direction,t[c.id],i.width,i.height,i.depth,h,o]),d=this.entries.get(c.id);if(d?.key!==u){d&&(Bs(d.group),Bs(d.floor));let _=yf(c,t[c.id],i,h,!0);if(d={...pv(_,c.kind==="teacher"?"#e87836":"#288fda"),key:u,geometry:_},o)for(let m of[d.group,d.floor])m.traverse(p=>p.layers.set(Mf));this.volumeRoot.add(d.group),this.floorRoot.add(d.floor),this.entries.set(c.id,d)}let f=c.id===s.activeId,g=r[c.kind]!==!1;d.group.visible=s.enabled&&g&&(!s.onlyCurrent||f),d.floor.visible=g&&(!s.onlyCurrent||f),d.group.traverse(_=>{_.material&&(_.material.opacity=_.isLine?f?.9:.42:f?.095:.045)})}}setFloorVisible(e){this.floorRoot.visible=e}dispose(){Bs(this.volumeRoot),Bs(this.floorRoot),this.entries.clear()}};var bf={en:["Recording cameras","Illustrative angles follow the LCS 3D presets; they are not verified CV870 specifications."],zh:["\u5F55\u64AD\u6444\u50CF\u5934","\u793A\u610F\u89C6\u89D2\u53C2\u8003 LCS 3D \u9884\u8BBE\uFF0C\u4E0D\u4EE3\u8868 CV870 \u7684\u5B9E\u6D4B\u53C2\u6570\u3002"],ko:["\uB179\uD654 \uCE74\uBA54\uB77C","\uD654\uAC01\uC740 LCS 3D \uC608\uC2DC \uC124\uC815\uC744 \uC0AC\uC6A9\uD558\uBA70 \uAC80\uC99D\uB41C CV870 \uC0AC\uC591\uC774 \uC544\uB2D9\uB2C8\uB2E4."],mn:["\u0411\u0438\u0447\u043B\u044D\u0433\u0438\u0439\u043D \u043A\u0430\u043C\u0435\u0440","\u04E8\u043D\u0446\u04E9\u0433 \u043D\u044C LCS 3D \u0436\u0438\u0448\u0438\u0433 \u0442\u043E\u0445\u0438\u0440\u0433\u043E\u043E \u0431\u04E9\u0433\u04E9\u04E9\u0434 CV870-\u0438\u0439\u043D \u0431\u0430\u0442\u0430\u043B\u0433\u0430\u0430\u0436\u0441\u0430\u043D \u04AF\u0437\u04AF\u04AF\u043B\u044D\u043B\u0442 \u0431\u0438\u0448."],ja:["\u9332\u753B\u30AB\u30E1\u30E9","LCS 3D \u306E\u6A21\u5F0F\u7684\u306A\u753B\u89D2\u3092\u4F7F\u7528\u3057\u3001CV870 \u306E\u5B9F\u6E2C\u4ED5\u69D8\u3092\u793A\u3059\u3082\u306E\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002"],es:["C\xE1maras de grabaci\xF3n","Los \xE1ngulos siguen los ejemplos de LCS 3D; no son especificaciones verificadas de CV870."],fr:["Cam\xE9ras de captation","Les angles suivent les exemples LCS 3D et ne constituent pas des caract\xE9ristiques CV870 v\xE9rifi\xE9es."],ar:["\u0643\u0627\u0645\u064A\u0631\u0627\u062A \u0627\u0644\u062A\u0633\u062C\u064A\u0644","\u062A\u062A\u0628\u0639 \u0627\u0644\u0632\u0648\u0627\u064A\u0627 \u0623\u0645\u062B\u0644\u0629 LCS 3D \u0648\u0644\u0627 \u062A\u0645\u062B\u0644 \u0645\u0648\u0627\u0635\u0641\u0627\u062A CV870 \u0645\u0639\u062A\u0645\u062F\u0629."]};function mv(n){return{...n,kind:n.role,depth:n.y,direction:n.role==="teacher"?"front":"rear",hfov:$i.CV870.roleHfov[n.role]}}var gv=n=>({width:n.length,depth:n.width,height:n.height}),_c=class extends mc{constructor({scene:e,devices:t,plan:i,language:s,onSelect:r}){super({devices:()=>t().filter(o=>o.type==="camera").map(mv),title:o=>xi(o,s()),language:s,onSelect:r,scene:()=>({setCameraFrusta:o=>this.syncScene(o)})}),this.roomScene=e,this.roomPlan=i}syncScene(e){let t=this.roomScene(),i=this.roomPlan();if(!t?.plan||!i)return;let s=this.devices(),r=gv(i),o=Object.fromEntries(s.map(c=>[c.id,c.mountHeight]));this.layer||(this.layer=new gc(t.scene));let a=[-i.length/2,0,-i.width/2];this.layer.volumeRoot.position.set(...a),this.layer.floorRoot.position.set(...a),this.layer.sync(s,o,r,e,{teacher:t.cameraVisible,student:t.cameraVisible}),this.layer.setFloorVisible(e.enabled&&document.querySelector("#floor-projection").checked);for(let c of t.deviceObjects.filter(h=>h.userData.device.type==="camera")){let h=s.find(u=>u.id===c.userData.device.id);h&&pf(c,h,o[h.id],r,e.settings.get(h.id))}let l=document.querySelector("#camera-field-panel");l.dataset.fieldCount=[...this.layer.entries.values()].filter(c=>c.group.visible).length,l.dataset.visibleCameras=t.deviceObjects.filter(c=>c.userData.device.type==="camera").length}render(){super.render();let e=bf[this.language()]||bf.en;document.querySelector("#recording-camera-label").textContent=e[0],document.querySelector("#camera-field-hint").textContent=e[1]}};var yi=new R,_v=n=>n.type==="podium"?1.45:n.type==="display"?-.65:["m100","m40","dc20"].includes(n.type)?-.38:.75,xc=class{constructor(e,t,i){this.canvas=e,this.layer=t,this.onSelect=i,this.buttons=new Map,this.enabled=!0,this.lang="en",this.selectedId=null}reset(e){this.models=e,this.layer.replaceChildren(),this.buttons.clear();for(let t of e){let i=t.userData.device,s=document.createElement("button");s.className="device-label",s.type="button",s.dataset.deviceId=i.id,s.textContent=xi(i,this.lang),s.addEventListener("click",()=>this.onSelect(i)),this.layer.append(s),this.buttons.set(i.id,s)}}setLanguage(e){this.lang=e;for(let[t,i]of this.buttons){let s=this.models?.find(r=>r.userData.device.id===t)?.userData.device;s&&(i.textContent=xi(s,e))}}setEnabled(e){this.enabled=e,this.layer.hidden=!e}setSelected(e){this.selectedId=e;for(let[t,i]of this.buttons)i.classList.toggle("selected",t===e)}render(e,t){if(this.models=e,!this.enabled)return;let i=this.canvas.getBoundingClientRect(),s=[...document.querySelectorAll(".scene-tools,.scene-caption")].map(o=>{let a=o.getBoundingClientRect();return{l:a.left-i.left,r:a.right-i.left,t:a.top-i.top,b:a.bottom-i.top}}),r=[...e].sort((o,a)=>+(a.userData.device.id===this.selectedId)-+(o.userData.device.id===this.selectedId));for(let o of r){let a=o.userData.device,l=this.buttons.get(a.id);if(!l)continue;if(yi.set(0,_v(a),0),o.localToWorld(yi).project(t),yi.z<=-1||yi.z>=1||Math.abs(yi.x)>.94||Math.abs(yi.y)>.9){l.hidden=!0;continue}let c=(yi.x*.5+.5)*i.width,h=(-yi.y*.5+.5)*i.height;l.hidden=!1;let u=l.offsetWidth,d=l.offsetHeight,f;for(let[g,_]of[[0,0],[0,-27],[-55,0],[55,0],[0,27]]){let m=Math.max(u/2+4,Math.min(i.width-u/2-4,c+g)),p=Math.max(23,Math.min(i.height-25,h+_)),S={l:m-u/2,r:m+u/2,t:p-d,b:p};if(s.every(y=>S.r+4<y.l||S.l-4>y.r||S.b+4<y.t||S.t-4>y.b)){f={px:m,py:p,rect:S};break}}l.hidden=!f,f&&(l.style.left=`${f.px}px`,l.style.top=`${f.py}px`,s.push(f.rect))}}drawOnCanvas(e){if(!this.enabled)return;let t=this.canvas.getBoundingClientRect(),i=this.canvas.width/t.width,s=this.canvas.height/t.height;e.save(),e.scale(i,s),e.font="600 12px Arial",e.textAlign="center";for(let r of this.buttons.values()){if(r.hidden)continue;let o=r.getBoundingClientRect(),a=o.left-t.left,l=o.top-t.top,c=getComputedStyle(r);e.fillStyle=c.backgroundColor,e.strokeStyle=c.borderColor,e.lineWidth=1,e.beginPath(),e.roundRect(a,l,o.width,o.height,6),e.fill(),e.stroke(),e.fillStyle=c.color,e.fillText(r.textContent,a+o.width/2,l+o.height/2+4)}e.restore()}};var K=n=>document.querySelector(n),Ke=Cc(),be,Ut,rt,Si=[],Sc,On,ji,wn=!1,Cf=!1,_h=()=>{},nn=window.AISpeech,vc=Dh("dante-3d-theme","dark",n=>rt?.setTheme(n)),$r=Lh(K("#scene-sidebar"),760),Ef={en:["Ceiling profile","Uniform","Front / rear","Front / uniform height","Rear height","Front zone depth","Front","Rear","73\xB0 geometric estimate \xB7 verify on site","Outside supplier example \xB7 verify on site","Manual microphone radii retained","Use 73\xB0 estimate"],zh:["\u5929\u82B1\u5C42\u9AD8","\u7EDF\u4E00\u5C42\u9AD8","\u524D\u540E\u5206\u533A","\u524D\u533A\uFF0F\u7EDF\u4E00\u5C42\u9AD8","\u540E\u533A\u5C42\u9AD8","\u524D\u533A\u6DF1\u5EA6","\u524D\u533A","\u540E\u533A","73\xB0 \u51E0\u4F55\u4F30\u7B97 \xB7 \u9700\u73B0\u573A\u9A8C\u8BC1","\u8D85\u51FA\u5382\u5BB6\u7B97\u4F8B \xB7 \u9700\u73B0\u573A\u9A8C\u8BC1","\u4FDD\u7559\u624B\u52A8\u9EA6\u514B\u98CE\u534A\u5F84","\u4F7F\u7528 73\xB0 \u4F30\u7B97"],ko:["\uCC9C\uC7A5 \uB192\uC774","\uB3D9\uC77C","\uC55E/\uB4A4","\uC55E/\uC804\uCCB4 \uB192\uC774","\uB4A4 \uB192\uC774","\uC55E \uAD6C\uC5ED \uAE4A\uC774","\uC55E","\uB4A4","73\xB0 \uAE30\uD558 \uCD94\uC815 \xB7 \uD604\uC7A5 \uD655\uC778 \uD544\uC694","\uC81C\uC870\uC0AC \uC0AC\uB840 \uBC94\uC704 \uBC16 \xB7 \uD604\uC7A5 \uD655\uC778","\uC218\uB3D9 \uBC18\uACBD \uC720\uC9C0","73\xB0 \uCD94\uC815 \uC0AC\uC6A9"],mn:["\u0422\u0430\u0430\u0437\u043D\u044B \u04E9\u043D\u0434\u04E9\u0440","\u0418\u0436\u0438\u043B","\u0423\u0440\u0434 / \u0430\u0440\u0434","\u0423\u0440\u0434 \u04E9\u043D\u0434\u04E9\u0440","\u0410\u0440\u0434 \u04E9\u043D\u0434\u04E9\u0440","\u0423\u0440\u0434 \u0431\u04AF\u0441\u0438\u0439\u043D \u0433\u04AF\u043D","\u0423\u0440\u0434","\u0410\u0440\u0434","73\xB0 \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u0439\u043D \u0442\u043E\u043E\u0446\u043E\u043E \xB7 \u0433\u0430\u0437\u0430\u0440 \u0434\u044D\u044D\u0440 \u0448\u0430\u043B\u0433\u0430\u043D\u0430","\u0416\u0438\u0448\u044D\u044D\u043D\u044D\u044D\u0441 \u0433\u0430\u0434\u0443\u0443\u0440 \xB7 \u0448\u0430\u043B\u0433\u0430\u043D\u0430","\u0413\u0430\u0440\u0430\u0430\u0440 \u043E\u0440\u0443\u0443\u043B\u0441\u0430\u043D \u0440\u0430\u0434\u0438\u0443\u0441 \u0445\u044D\u0432\u044D\u044D\u0440","73\xB0 \u0442\u043E\u043E\u0446\u043E\u043E\u0433 \u0430\u0448\u0438\u0433\u043B\u0430\u0445"],ja:["\u5929\u4E95\u9AD8","\u5747\u4E00","\u524D\uFF0F\u5F8C","\u524D\u65B9\u306E\u9AD8\u3055","\u5F8C\u65B9\u306E\u9AD8\u3055","\u524D\u65B9\u306E\u5965\u884C\u304D","\u524D\u65B9","\u5F8C\u65B9","73\xB0 \u5E7E\u4F55\u63A8\u5B9A \xB7 \u73FE\u5730\u78BA\u8A8D\u304C\u5FC5\u8981","\u30E1\u30FC\u30AB\u30FC\u4E8B\u4F8B\u5916 \xB7 \u73FE\u5730\u78BA\u8A8D\u304C\u5FC5\u8981","\u624B\u5165\u529B\u534A\u5F84\u3092\u4FDD\u6301","73\xB0 \u63A8\u5B9A\u3092\u4F7F\u7528"],es:["Perfil del techo","Uniforme","Delante / detr\xE1s","Altura delantera","Altura trasera","Profundidad delantera","Delante","Detr\xE1s","Estimaci\xF3n geom\xE9trica 73\xB0 \xB7 verificar in situ","Fuera del ejemplo \xB7 verificar in situ","Radio manual conservado","Usar estimaci\xF3n 73\xB0"],fr:["Profil du plafond","Uniforme","Avant / arri\xE8re","Hauteur avant","Hauteur arri\xE8re","Profondeur avant","Avant","Arri\xE8re","Estimation g\xE9om\xE9trique 73\xB0 \xB7 v\xE9rifier sur site","Hors exemple fournisseur \xB7 v\xE9rifier","Rayon manuel conserv\xE9","Utiliser estimation 73\xB0"],ar:["\u0627\u0631\u062A\u0641\u0627\u0639 \u0627\u0644\u0633\u0642\u0641","\u0645\u0648\u062D\u062F","\u0623\u0645\u0627\u0645 / \u062E\u0644\u0641","\u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639 \u0627\u0644\u0623\u0645\u0627\u0645\u064A","\u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639 \u0627\u0644\u062E\u0644\u0641\u064A","\u0639\u0645\u0642 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0623\u0645\u0627\u0645\u064A\u0629","\u0623\u0645\u0627\u0645","\u062E\u0644\u0641","\u062A\u0642\u062F\u064A\u0631 \u0647\u0646\u062F\u0633\u064A 73\xB0 \xB7 \u062A\u062D\u0642\u0642 \u0645\u064A\u062F\u0627\u0646\u064A","\u062E\u0627\u0631\u062C \u0645\u062B\u0627\u0644 \u0627\u0644\u0645\u0635\u0646\u0639 \xB7 \u062A\u062D\u0642\u0642","\u0627\u0644\u0645\u062F\u0649 \u0627\u0644\u064A\u062F\u0648\u064A \u0645\u062D\u0641\u0648\u0638","\u0627\u0633\u062A\u062E\u062F\u0645 \u062A\u0642\u062F\u064A\u0631 73\xB0"]};function yc(){let n=be?.heightProfile||nn.state.heightProfile;return{mode:K("#profile-mode").value,front:Number(K("#front-height").value),rear:Number(K("#rear-height").value),split:Number(K("#split-depth").value),drop:Number(K("#audio-drop").value),manualPickup:n?.manualPickup??null,manualPA:n?.manualPA??null}}function bc(n){let e=Ef[Ke]||Ef.en;K("#profile-heading").textContent=`${e[0]} \xB7 73\xB0`;for(let[r,o]of[["profile-mode-label",0],["front-height-label",3],["rear-height-label",4],["split-depth-label",5]])K(`#${r}`).textContent=e[o];K('#profile-mode option[value="uniform"]').textContent=e[1],K('#profile-mode option[value="split"]').textContent=e[2],K("#profile-mode").value=n.mode,K("#front-height").value=n.front.toFixed(2),K("#front-height-slider").value=n.front,K("#rear-height").value=n.rear.toFixed(2),K("#rear-height-slider").value=n.rear,K("#split-depth").value=n.split.toFixed(2),K("#audio-drop").value=n.drop.toFixed(2),K("#room-height").value=n.front.toFixed(2),K("#rear-height-controls").hidden=n.mode!=="split";let t=nn.m100RadiiForHeight(n.front,n.drop).m100Pickup.toFixed(2),i=nn.m100RadiiForHeight(n.rear,n.drop).m100Pickup.toFixed(2),s=[n.front,...n.mode==="split"?[n.rear]:[]].some(r=>r-n.drop<2.47||r-n.drop>3.2);K("#profile-estimate").textContent=`${e[6]} ${t} m${n.mode==="split"?` \xB7 ${e[7]} ${i} m`:""} \xB7 ${e[s?9:8]}${n.manualPickup!==null||n.manualPA!==null?` \xB7 ${e[10]}`:""}`,K("#profile-estimate").dataset.warning=String(s),K("#reset-m100-radii").textContent=e[11],K("#reset-m100-radii").hidden=n.manualPickup===null&&n.manualPA===null}function mh(n,e){return["uniform","split"].includes(n.mode)&&[n.front,n.rear].every(t=>Number.isFinite(t)&&t>=2&&t<=4)&&Number.isFinite(n.split)&&n.split>0&&n.split<e&&Number.isFinite(n.drop)&&n.drop>=0&&n.drop<=.7}function Yr(){if(!be)return;let n=yc();if(!mh(n,be.width)){gn(mn[Ke].invalid);return}n.mode==="uniform"&&(n.rear=n.front),be.heightProfile.legacy&&(n.manualPickup=be.radii.m100Pickup,n.manualPA=be.radii.m100PA);let e=Math.max(n.front,n.rear),t={...be.radii,...nn.m100RadiiForHeight(n.front,n.drop)};n.manualPickup!==null&&(t.m100Pickup=n.manualPickup),n.manualPA!==null&&(t.m100PA=n.manualPA),be={...be,height:e,heightProfile:n,radii:t,coverage:nn.coverageForPlan(be.length,be.width,be.devices,t,be.show,n)},bc(n),ei()}function gh(){dc(Ke),xh(),uf(Ke),_h(),vc.setLanguage(Ke),$r.setLanguage(Ke),On?.setLanguage(Ke),ji?.render(),bc(be?.heightProfile||yc()),be&&lh(be,Ke,Ut,Zr,Si,Sc?.visible||Fs().visible)}function Zr(n,e=!1){Ut=rt.deviceObjects.find(t=>t.userData.device.id===n.id)?.userData.device||n,hh(Ut,be,Ke),On.setSelected(Ut.id),ji?.select(Ut.id),e||($r.showDevice(),!K("#sidebar-devices").hidden&&!matchMedia("(max-width:760px)").matches&&K("#device-selection").scrollIntoView({block:"nearest"})),Mc()}function wf(){return[Number(K("#room-length").value),Number(K("#room-width").value),Number(K("#room-height").value)]}function Tf([n,e,t]){return Number.isFinite(n)&&n>=2&&n<=40&&Number.isFinite(e)&&e>=2&&e<=40&&Number.isFinite(t)&&t>=2&&t<=4}function xh(){let n=Ch(Ke);K("#reset-plan").textContent=n.resetPlan,K("#reset-plan").title=n.resetPlanHint,wn&&(Cf&&(K("#plan-origin").textContent=n.adjusted),K('[data-i18n="intro"]').textContent=n.importHint)}function vh(n,{reset:e=!1,selection:t=null}={}){let i=Fs(),s=oc({...n,height:n.heightProfile?.front??n.height},i);return s.error?(gn(mn[Ke][s.error]),!1):(be=n,Ut=t,Cf||(Cf=wn),e&&ji?.state.settings.clear(),Si=s.entries,Sc=i,ei(!0),xh(),!0)}function Rf(n,e=!1){be&&vh(Oh(be,n,e),{reset:e})}function Mi(n=!1,e=!1){if(wn){let c=yc();if(c.front=Number(K("#room-height").value),!Tf(wf())||!mh(c,be.width)){gn(mn[Ke].invalid);return}(n||e)&&Rf(e?{mode:"auto"}:nn.audioRequest(be),e);return}let t=wf();if(!Tf(t)){gn(mn[Ke].invalid);return}let i=yc();if(i.front=Number(K("#room-height").value),!mh(i,t[1])){gn(mn[Ke].invalid);return}i.mode==="uniform"&&(i.rear=i.front),t[2]=Math.max(i.front,i.rear);let s=Fs(),r=oc({length:t[0],width:t[1],height:i.front},s);if(r.error){gn(mn[Ke][r.error]);return}gn("");let o=e?{mode:"auto"}:be?n?nn.audioRequest(be):nn.appliedAudioRequest(be):{mode:"auto"},a=n||e?null:be?.audioDraft,l=Uh(...t,i,o,e?be?.radii:null);l.audioDraft=a,vh(l,{reset:e})&&(bc(i),rt.setView("overview"),document.documentElement.dataset.sceneReady="true")}function ei(n=!1){if(!be)return;let e=Fs(),t=n?{entries:Si}:oc({...be,height:be.heightProfile?.front??be.height},e);if(t.error){gn(mn[Ke][t.error]),rt.plan||(document.documentElement.dataset.sceneReady="error");return}gn(""),Si=t.entries,Sc=e,Ut&&![...Si,...be.displays.map(s=>({...s,type:"display"})),...be.devices].some(s=>s.id===Ut.id&&e.visible[s.type]!==!1)&&(Ut=null);let i=!rt.plan;rt.build(be,e,e.visible,Si),i&&rt.setView("overview"),K("#export").disabled=!1,document.documentElement.dataset.sceneReady="true",Ut&&(Ut=rt.deviceObjects.find(s=>s.userData.device.id===Ut.id)?.userData.device||null),On.reset(rt.deviceObjects),On.setSelected(Ut?.id??null),lh(be,Ke,Ut,Zr,Si,e.visible),Mc(),ji?.sync(),_h()}function Mc(){rt?.plan&&(rt.volumes.sync(rt.plan,rt.deviceObjects,df(),Ut?.id),K("#volume-controls").dataset.volumeCount=rt.volumes.entries.length)}function xv(n){if(!be)return;let e=n.target.value,t=be.equipment?{...be,equipment:{...be.equipment,qnexModel:e},teachingDevices:be.teachingDevices.map(r=>r.type==="qnex"?{...r,model:e}:r)}:be,i=K('[data-kind="podium"]'),s=i.checked;i.checked=!0,vh(t,{selection:Ut})||(n.target.value=be.equipment?.qnexModel??Sc?.podiumModel??"NDP600",i.checked=s)}function Af(n){let e=Nh[n];e&&(["#room-length","#room-width","#room-height"].forEach((t,i)=>{K(t).value=e[i]}),K("#front-height").value=e[2],K("#rear-height").value=e[2],K("#profile-mode").value="uniform",K("#split-depth").value=e[1]/2,K("#audio-drop").value="0",Mi())}function vv(){_h=nn.createAudioControls(K("#audio-count-controls"),{state:()=>be,language:()=>Ke,name:n=>Zt(n,Ke,nn.state.showModels),restore:()=>Mi(!0,!0),clear:()=>Rf({mode:"fixed",counts:{m100:0,m40:0,dc20:0}})}),document.querySelectorAll("#volume-controls input").forEach(n=>n.addEventListener("change",Mc)),window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",Mc),K("#preset").addEventListener("change",n=>Af(n.target.value));for(let n of["#room-length","#room-width","#room-height"])K(n).addEventListener("input",()=>{K("#preset").value="custom"});for(let[n,e]of[["#front-height-slider","#front-height"],["#rear-height-slider","#rear-height"]])K(n).addEventListener("input",()=>{K(e).value=K(n).value,e==="#front-height"&&(K("#room-height").value=K(n).value),K("#preset").value="custom",wn?Yr():Mi()});for(let n of["#front-height","#rear-height","#split-depth","#profile-mode"])K(n).addEventListener("change",()=>{n==="#front-height"&&(K("#room-height").value=K("#front-height").value),K("#preset").value="custom",wn?Yr():Mi()});K("#room-height").addEventListener("change",()=>{K("#front-height").value=K("#room-height").value,wn?Yr():Mi()}),K("#reset-m100-radii").addEventListener("click",()=>{be&&(be.heightProfile.manualPickup=null,be.heightProfile.manualPA=null,Yr())}),K("#floor-projection").addEventListener("change",()=>ei()),K("#door-side").addEventListener("change",n=>rt.setDoorSide(n.target.value)),K("#recalculate").addEventListener("click",()=>Mi(!0)),K("#reset-plan").addEventListener("click",()=>Mi(!0,!0)),K("#reset-demo").addEventListener("click",()=>{if(!wn){ji?.resetAll(),be=null,K("#floor-projection").checked=!1,K("#door-side").value="right",rt.setDoorSide("right");for(let[n,e]of Object.entries({"audio-drop":"0","main-height":"1.5","aux-drop":"0.7","ifp-count":"2","ifp-size":"75","podium-model":"NDP600"}))K(`#${n}`).value=e;document.querySelectorAll("[data-kind]").forEach(n=>{n.checked=!["remote","pa","speaker"].includes(n.dataset.kind)}),K("#show-labels").checked=!0,On.setEnabled(!0),K("#preset").value="medium",Af("medium")}}),Rc(K("#language"),Ke,n=>{Ke=n,gh(),!rt.plan&&be&&ei()}),K("#show-models").addEventListener("change",n=>{nn.state.showModels=n.target.checked,gh()}),document.querySelectorAll("[data-view]").forEach(n=>{n.addEventListener("click",()=>{rt.plan&&rt.setView(n.dataset.view)})}),K("#focus-device").addEventListener("click",()=>{Ut&&rt.focusDevice(Ut.id)}),K("#show-labels").addEventListener("change",n=>On.setEnabled(n.target.checked)),document.querySelectorAll("[data-kind]").forEach(n=>n.addEventListener("change",()=>ei())),K("#audio-drop").addEventListener("change",Yr),K("#podium-model").addEventListener("change",xv);for(let n of["#main-height","#aux-drop","#ifp-count","#ifp-size"])K(n).addEventListener("change",()=>ei());K("#export").addEventListener("click",()=>{let n=document.createElement("a");n.href=rt.exportPNG(On),n.download=`dante-${be.length}x${be.width}-3d.png`,n.click()})}function yv(){$r.showDevice();let n;try{n=nn.decodeSnapshot(window.location.hash)}catch(e){let t=e.code||"invalidSnapshot",i=()=>{dc(Ke),$r.setLanguage(Ke),gn(Ns(Ke)[t])};document.querySelectorAll("button,input,select,summary").forEach(s=>{["language","theme-toggle","sidebar-toggle"].includes(s.id)||(s.disabled=!0)}),K("#room-metric").textContent="",Rc(K("#language"),Ke,s=>{Ke=s,vc.setLanguage(Ke),i()}),i(),document.documentElement.dataset.sceneReady="error";return}if(wn=!!n,n){Ke=Cc(n.language),nn.state.showModels=n.showModels,be=Fh(n),bc(be.heightProfile),["#room-length","#room-width","#room-height"].forEach((e,t)=>{K(e).value=[be.length,be.width,be.height][t]}),K("#preset").value="custom";for(let e of["#room-length","#room-width","#preset"])K(e).disabled=!0;for(let e of["ifp","podium","station"])K(`[data-kind="${e}"]`).checked=!!n.equipment;if(n.equipment){K("#ifp-count").replaceChildren(...Array.from({length:100},(e,t)=>new Option(String(t),String(t)))),K("#ifp-count").value=n.equipment.ifpCount,K("#ifp-size").value="86",n.equipment.qnexModel==="NMP311"&&K("#podium-model").add(new Option("NMP311","NMP311")),K("#podium-model").value=n.equipment.qnexModel;for(let e of["#ifp-count","#ifp-size"])K(e).disabled=!0;K("#podium-model").disabled=n.equipment.qnexCount===0,K('[data-kind="ifp"]').checked=n.equipment.ifpCount>0,K('[data-kind="podium"]').checked=n.equipment.qnexCount>0,K('[data-kind="station"]').checked=n.equipment.lcsEnabled}K('[data-kind="dc20"]').checked=n.show.dc20;for(let e of["remote","pa","speaker"]){let t=e==="remote"?["m100_pickup","m40_pickup"]:e==="pa"?["m100_pa","m40_pa"]:["dc20"];K(`[data-kind="${e}"]`).checked=t.some(i=>n.show[i])}}K("#reset-demo").hidden=wn,K("#show-models").checked=nn.state.showModels,K("#plan-origin").hidden=!wn,K("#export").disabled=!0,dc(Ke),xh(),$r.setLanguage(Ke);try{rt=new uc(K("#scene-canvas"),Zr)}catch(e){gn(mn[Ke].webgl),document.documentElement.dataset.sceneReady="error",console.error(e);return}rt.setTheme(vc.theme),vc.setLanguage(Ke),On=new xc(K("#scene-canvas"),K("#device-labels"),Zr),On.setLanguage(Ke),rt.onFrame=()=>On.render(rt.deviceObjects||[],rt.camera),ji=new _c({scene:()=>rt,plan:()=>be,devices:()=>Si,language:()=>Ke,onSelect:e=>{let t=rt.deviceObjects.find(i=>i.userData.device.id===e);t?Zr(t.userData.device):ji.select(e)}}),vv(),wn?(gh(),ei()):Mi()}window.addEventListener("DOMContentLoaded",yv);Th(n=>{if(document.documentElement.dataset.sceneReady!=="true")throw new Error("Invalid or unavailable 3D plan");if(be.equipment)return K("#floor-projection").checked=!1,ei(),Tc(rt,`Dante Classroom \xB7 ${be.equipment.qnexModel} \xB7 ${be.length} \xD7 ${be.width} m`);let e=K("#podium-model");e.value=Array.from(e.options).some(i=>i.value===n.qnexModel)?n.qnexModel:"NDP600",K("#ifp-count").value=n.ifpCount===1?"1":"0",K("#ifp-size").value="86",document.querySelector('[data-kind="ifp"]').checked=n.ifpCount===1;let t=document.querySelector('[data-kind="podium"]');return t&&(t.checked=n.qnexModel!=="NMP311"),ei(),Tc(rt,`Dante Classroom \xB7 ${n.qnexModel} \xB7 ${be.length} \xD7 ${be.width} m`)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
