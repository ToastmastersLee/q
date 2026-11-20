(()=>{(function(){let i=["front","left","right"],e={65:[1490,920,100],75:[1710,1050,100],86:[1960,1190,100],98:[2220,1340,105],110:[2500,1450,110]},t={55:[1226,699,63],65:[1447,823,63],75:[1668,948,67]},n=x=>Math.round(x*1e3),s=x=>x==="front"?e:t;function r(x,v,y,S,M){let[w,A,b]=s(x)[v];return{id:String(y),zone:x,size:Number(v),name:x==="front"?"QA1400 Pro":"Auxiliary Display",widthMm:w,heightMm:A,depthMm:b,offsetMm:x==="front"?0:180,x:S,y:M}}function a(x){let v=S=>Number.isSafeInteger(S)&&S>0&&S<=1e5;if(!x||!v(x.stageMm)||!Array.isArray(x.screens)||x.screens.length>300)return!1;let y=new Set;return x.screens.every(S=>{if(!S||!i.includes(S.zone)||typeof S.id!="string"||!S.id||S.id.length>100||y.has(S.id)||typeof S.name!="string"||!S.name.trim()||S.name.length>100||![S.widthMm,S.heightMm,S.depthMm].every(v)||!Number.isSafeInteger(S.offsetMm)||S.offsetMm<0||S.offsetMm>1e5||!Number.isFinite(S.x)||!Number.isFinite(S.y))return!1;y.add(S.id);let M=s(S.zone)[S.size];return S.size===null||Array.isArray(M)&&M.every((w,A)=>w===[S.widthMm,S.heightMm,S.depthMm][A])})}function o(x){return x.size?x.name+" "+x.size+"\u2033":x.name}function l(x){return x.size===null?x.name:(x.zone==="front"?x.name:"Auxiliary Display / TV")+" "+x.size+"-inch"}function c(x){return x<=5?[[1,65]]:x<=6?[[1,75]]:x<=8?[[1,86]]:x<=10?[[1,98],[2,75]]:[[1,110],[2,86]]}let h={65:.8,75:.93,86:1.07,98:1.22,110:1.37};function u(x){let v=new Map;for(let y of x){let S=JSON.stringify([y.zone==="front",y.name,y.size,y.widthMm,y.heightMm,y.depthMm]);v.has(S)||v.set(S,{screen:y,count:0}),v.get(S).count++}return[...v.values()]}function p(x){let v=Math.min(1.16,(x-.36)/2),y=Math.max(v/2+.08,Math.min(1.45,x*.2));return[y,x-y].map(S=>[n(S-v/2),n(S+v/2)])}function f(x,v,y){let S=[],M=x;for(let[w,A]of y.sort((b,E)=>b[0]-E[0]))A<=M||w>=v||(w>M&&S.push([M,w]),M=Math.max(M,A));return M<v&&S.push([M,v]),S}function _(x,v,y,S,M,w){let A=y?"x":"y",b=H=>y?H.widthMm:H.depthMm,E=new Map,D=[...x].sort((H,O)=>H[A]-O[A]),R=-1/0;if(D.every(H=>{let O=H[A]*1e3,W=O-b(H)/2,K=O+b(H)/2,ae=W>=R+M-.001&&v.some(([re,we])=>W>=re+S-.001&&K<=we-S+.001);return R=K,E.set(H.id,O),ae}))return E;if(w)return null;let N=v.map(([H,O])=>({a:H,b:O,left:O-H-S*2,items:[]})),F=[...x].sort((H,O)=>b(O)-b(H));if(F.reduce((H,O)=>H+b(O),0)+Math.max(0,F.length-N.length)*M>N.reduce((H,O)=>H+Math.max(0,O.left),0))return null;function B(H){if(H===F.length)return!0;let O=new Set,W=F[H];for(let K of N){let ae=K.left-(K.items.length?M:0);if(O.has(ae)||b(W)>ae)continue;O.add(ae);let re=K.left;if(K.items.push(W),K.left=ae-b(W),B(H+1))return!0;K.items.pop(),K.left=re}return!1}if(!B(0))return null;for(let H of N){let O=H.a+S+H.left/2;H.items.sort((W,K)=>W[A]-K[A]);for(let W of H.items)E.set(W.id,O+b(W)/2),O+=b(W)+M}return E}function g(x,v,{fixed:y=!1}={}){let S=(R,N,F=0)=>({status:"blocked",zone:R,reason:N,missing:F});if(!a(x)||![v.width,v.depth,v.height].every(R=>Number.isFinite(R)&&R>0))return S("front","dimensions");if(x.stageMm>n(v.width))return S("front","stage",x.stageMm-n(v.width));let M=R=>v.profile?.mode==="split"&&R>=v.profile.split?v.profile.rear:v.height,w=x.screens.map(R=>({...R})),A=[];for(let R of i){let N=R==="front",F=w.filter(re=>re.zone===R),z=N?(n(v.width)-x.stageMm)/2:0,B=N?(v.stations||[]).filter(re=>re.y<.8).map(re=>[n(re.x)-360,n(re.x)+360]):R===(v.doorSide||"right")?p(v.depth):[],H=f(z,N?z+x.stageMm:n(v.depth),B),W=H.reduce((re,[we,Le])=>re+Le-we,0)-F.reduce((re,we)=>re+(N?we.widthMm:we.depthMm),0);if(W<0)return S(R,"width",-W);for(let re of F){let we=n(N?M(re.y):Math.max(v.height,v.profile?.rear||0));if(N&&(re.y<0||Math.max(re.depthMm,re.y*1e3+re.depthMm/2)>n(v.depth)))return S(R,"projection");let Le=v.mainHeight;if(re.heightMm>we)return S(R,"height",re.heightMm-we);if(N&&Le!=null&&(re.heightMm/2>n(Le)||re.heightMm/2+n(Le)>we))return S(R,"height",Math.ceil(Math.max(re.heightMm/2-n(Le),re.heightMm/2+n(Le)-we)));if(!N&&re.offsetMm+re.widthMm>n(v.width))return S(R,"projection",re.offsetMm+re.widthMm-n(v.width))}let K=_(F,H,N,300,150,y),ae=K||_(F,H,N,0,0,y);if(!ae)return S(R,"obstacle");for(let re of F)if(N)re.x=ae.get(re.id)/1e3;else{re.y=ae.get(re.id)/1e3;let we=(re.offsetMm+re.widthMm/2)/1e3;re.x=R==="left"?we:v.width-we}A.push({zone:R,slack:W,tight:F.length>0&&(!K||W<=600+(F.length-1)*150)})}let b=w.filter(R=>R.zone==="left"),E=w.filter(R=>R.zone==="right"),D=(R,N)=>R.offsetMm+R.widthMm+N.offsetMm+N.widthMm>n(v.width);for(let R of E){let N=b.filter(W=>D(W,R));if(!N.some(W=>Math.abs(W.y-R.y)*1e3<(W.depthMm+R.depthMm)/2))continue;if(y)return S("right","opposite");let z=[...N,...E.filter(W=>W!==R)].map(W=>[W.y*1e3-W.depthMm/2,W.y*1e3+W.depthMm/2]);(v.doorSide||"right")==="right"&&z.push(...p(v.depth));let B=f(0,n(v.depth),z),H=_([R],B,!1,300,150,!1),O=H||_([R],B,!1,0,0,!1);if(!O)return S("right","opposite");R.y=O.get(R.id)/1e3,H||(A.find(W=>W.zone==="right").tight=!0)}for(let R of w.filter(N=>N.zone==="left"))for(let N of w.filter(F=>F.zone==="right"))if(Math.abs(R.y-N.y)*1e3<(R.depthMm+N.depthMm)/2&&R.offsetMm+R.widthMm+N.offsetMm+N.widthMm>n(v.width))return S("right","opposite");for(let R of w)if(R.heightMm>n(M(R.y)))return S(R.zone,"height",R.heightMm-n(M(R.y)));return{status:A.some(R=>R.tight)?"tight":"ok",plan:{stageMm:x.stageMm,screens:w},results:A}}function m(x){let v=1;for(;x.some(y=>y.id==="lcd-"+v);)v++;return"lcd-"+v}function d(x,v,y,S,M){if(!Number.isInteger(y)||y<0||y>99)return null;let w=x.screens.filter(b=>b.zone===v),A=x.screens.filter(b=>b.zone!==v||w.indexOf(b)<y);for(let b=w.length;b<y;b++)A.push(r(v,M||(v==="front"?86:55),m(A),S.width/2,v==="front"?.15:S.depth/2));return{...x,screens:A}}globalThis.DisplayFit={catalog:s,standard:r,valid:a,label:o,quotationName:l,viewingGuide:c,viewingHeight:h,groups:u,doorSpans:p,fit:g,counts:d,nextId:m}})();(function(){let i=globalThis.DisplayFit,e={en:["Display layout","Stage width (m)","Confirm width","Stage","Left wall","Right wall","Installation area","Screen count","Custom dimensions","Device name","Width (mm)","Height (mm)","Thickness (mm)","Bracket offset (mm)","Apply","Cancel","Remove","Remaining","Tight \xB7 not recommended","Cannot install","Stage exceeds room width","Insufficient width","Insufficient mounting height","Insufficient inward space","No continuous space at this position","Opposite side panels overlap","Enter valid dimensions","Confirm the measured stage width to configure screens","Add custom screen","Change dimensions","Locked for this plan","Available","Select fewer or smaller screens"],zh:["\u6DB2\u6676\u5C4F\u5E03\u5C40","\u821E\u53F0\u603B\u5BBD\uFF08\u7C73\uFF09","\u786E\u8BA4\u5BBD\u5EA6","\u821E\u53F0","\u5DE6\u4FA7\u5899","\u53F3\u4FA7\u5899","\u5B89\u88C5\u533A\u57DF","\u5C4F\u5E55\u6570\u91CF","\u81EA\u5B9A\u4E49\u5C3A\u5BF8","\u8BBE\u5907\u540D\u79F0","\u6574\u673A\u5BBD\uFF08\u6BEB\u7C73\uFF09","\u6574\u673A\u9AD8\uFF08\u6BEB\u7C73\uFF09","\u6574\u673A\u539A\uFF08\u6BEB\u7C73\uFF09","\u652F\u67B6\u79BB\u5899\u8DDD\u79BB\uFF08\u6BEB\u7C73\uFF09","\u5E94\u7528","\u53D6\u6D88","\u79FB\u9664","\u5269\u4F59","\u7D27\u51D1 \xB7 \u4E0D\u63A8\u8350","\u65E0\u6CD5\u5B89\u88C5","\u821E\u53F0\u6BD4\u623F\u95F4\u5BBD","\u53EF\u5B89\u88C5\u5BBD\u5EA6\u4E0D\u8DB3","\u53EF\u5B89\u88C5\u9AD8\u5EA6\u4E0D\u8DB3","\u5411\u5BA4\u5185\u4F38\u51FA\u7A7A\u95F4\u4E0D\u8DB3","\u5F53\u524D\u4F4D\u7F6E\u6CA1\u6709\u8FDE\u7EED\u5B89\u88C5\u7A7A\u95F4","\u4E24\u4FA7\u5C4F\u4F53\u76F8\u4EA4","\u8BF7\u8F93\u5165\u6709\u6548\u5C3A\u5BF8","\u8BF7\u5148\u786E\u8BA4\u5B9E\u6D4B\u821E\u53F0\u5BBD\u5EA6\uFF0C\u518D\u914D\u7F6E\u5C4F\u5E55","\u6DFB\u52A0\u81EA\u5B9A\u4E49\u5C4F","\u4FEE\u6539\u5C3A\u5BF8","\u672C\u65B9\u6848\u5DF2\u9501\u5B9A","\u53EF\u5B89\u88C5","\u5EFA\u8BAE\u51CF\u5C0F\u5C3A\u5BF8\u6216\u51CF\u5C11\u53F0\u6570"]},t={front:3,left:4,right:5},n={stage:20,width:21,height:22,projection:23,obstacle:24,opposite:25,dimensions:26};function s(a,o,l="front"){let c=e[o]||e.en;if(a.status==="blocked")return[c[19],c[t[a.zone]],c[n[a.reason]],a.missing?Math.ceil(a.missing)+" mm":""].filter(Boolean).join(" \xB7 ");let h=a.results.find(u=>u.zone===l);return[c[h.tight?18:31],c[17]+" "+Math.round(h.slack)+" mm",h.tight?c[32]:""].filter(Boolean).join(" \xB7 ")}function r(a,o,l){let c=a.shadowRoot||a.attachShadow({mode:"open"}),h={front:86,left:55,right:55},u="front",p=null,f="",_="",g=null,m=null,d=(v,y)=>{let S=document.createElement(v);return y!=null&&(S.textContent=y),S};function x(v=!1){let{plan:y,locked:S,room:M,lang:w}=o(),A=e[w]||e.en,b=JSON.stringify([y,S,M,w,u,p,f]);if(!v&&_===b)return;_=b;let E=S?y.stageMm/1e3:g??y.stageMm/1e3,D={...m||y,stageMm:Math.round(Number(E)*1e3)},R=i.fit(D,M),N=D.screens.filter($=>$.zone===u);c.replaceChildren();let F=d("style");F.textContent=":host{display:block;min-width:0;color:inherit;font:inherit}section{padding:12px;border:1px solid #8295a755;border-radius:8px;display:grid;gap:9px}h3,p{margin:0}h3{font-size:14px}label,.row{display:flex;gap:6px;align-items:center;justify-content:space-between;flex-wrap:wrap;font-size:12px}input,select,button{font:inherit;color:inherit;background:transparent;border:1px solid #8295a788;border-radius:5px;padding:5px;max-width:100%;box-sizing:border-box}input[type=number]{width:85px}option{background:Canvas;color:CanvasText}button{cursor:pointer}button:disabled,select:disabled{opacity:.55}output{font-size:12px;line-height:1.45}output[data-state=tight]{color:#b6790c}output[data-state=blocked]{color:#dc5549}fieldset{margin:0;padding:9px;display:grid;gap:6px;border:1px solid #8295a755}",c.append(F);let z=d("section");c.append(z),z.append(d("h3",A[0]));function B($,Se,pe=z){let xe=d("label");return Se.setAttribute("aria-label",$),xe.append(d("span",$),Se),pe.append(xe),Se}function H($,Se,pe=z){let xe=d("button",$);return xe.type="button",xe.onclick=Se,pe.append(xe),xe}function O($,Se,pe,xe,$e=z){let et=d("select");for(let[P,T,G,Z]of $){let ie=new Option(T,P);ie.disabled=!!G,Z&&(ie.title=Z),et.add(ie)}return et.value=String(Se),et.onchange=()=>pe(et.value),B(xe,et,$e)}function W($){let Se=i.fit($,M);if(Se.status==="blocked"){R.status==="blocked"&&i.valid($)&&(m=$,p=null),f=s(Se,w),x(!0);return}f="",p=null,g=null,m=null,l(Se.plan),x(!0)}let K=d("input");K.type="number",K.step="0.001",K.min="0.001",K.max=M.width,K.value=E,K.disabled=S;let ae=d("div");ae.className="row",z.append(ae),B(A[1],K,ae),K.oninput=()=>{g=K.value,f=""},S?ae.append(d("small",A[30])):H(A[2],()=>{let $={...D,stageMm:Math.round(Number(K.value)*1e3)};if(!K.reportValidity()||!i.valid($))return;let Se=i.fit($,M);if(Se.status==="blocked"&&Se.reason!=="stage"){f=s(Se,w),g=K.value,x(!0);return}W($)},ae),O(Object.entries(t).map(([$,Se])=>[$,A[Se]]),u,$=>{u=$,p=null,f="",x(!0)},A[6]);let re=Object.keys(i.catalog(u)).map(Number),we=h[u],Le=O(re.map($=>[$,$+"\u2033"]),we,$=>{h[u]=Number($),x(!0)},w==="zh"?"\u65B0\u589E\u5C4F\u5E55\u5C3A\u5BF8":"Size for additional screens");Le.disabled=!S;let Oe=Math.min(99,Math.max(N.length+1,Math.floor((u==="front"?D.stageMm:M.depth*1e3)/Math.min(...Object.values(i.catalog(u)).map($=>u==="front"?$[0]:$[2])))+1)),Q=[],te;for(let $=0;$<=Oe;$++){let Se=i.counts(D,u,$,M,we),pe=$>N.length?i.fit(Se,M):null,xe=pe?.status==="blocked";xe&&!te&&(te={n:$,trial:pe}),Q.push([$,String($),xe,xe?s(pe,w,u):""])}let j=O(Q,N.length,$=>W(i.counts(D,u,Number($),M,we)),A[7]),me=S||g!==null&&R.status==="blocked"&&R.reason!=="stage";j.disabled=!me;for(let[$,Se]of N.entries()){let pe=d("div");pe.className="row",z.append(pe);let xe=P=>({...D,screens:D.screens.map(T=>T.id===Se.id?i.standard(u,P,Se.id,Se.x,Se.y):T)}),$e=re.map(P=>{let T=i.fit(xe(P),M);return[P,P+"\u2033",T.status==="blocked"&&R.status!=="blocked",s(T,w,u)]});$e.push(["custom",Se.size===null?Se.name:A[8]]);let et=O($e,Se.size??"custom",P=>{P==="custom"?(p=Se.id,f="",x(!0)):W(xe(Number(P)))},"#"+($+1),pe);et.disabled=!me,Se.size===null&&(H(A[29],()=>{p=Se.id,x(!0)},pe).disabled=!me),H(A[16],()=>W({...D,screens:D.screens.filter(P=>P.id!==Se.id)}),pe).disabled=!me}H(A[28],()=>{p="new",f="",x(!0)}).disabled=!me;let se=d("output");if(se.setAttribute("role","status"),z.append(se),se.dataset.state=f?"blocked":R.status,se.textContent=f||(!S&&R.status!=="blocked"?A[27]:s(R,w,u)),te&&S&&!p){let $=d("small",A[7]+" "+te.n+" ("+(w==="zh"?"\u65B0\u589E":"add")+" "+we+"\u2033) \xB7 "+s(te.trial,w,u));z.append($)}if(u==="front"&&M.depth>0&&!p){let $=w==="zh",Se=i.viewingGuide(M.depth),pe=Se.map(([$e,et])=>$e+" \xD7 "+et+"\u2033").join($?" \u6216 ":" or "),xe=[...new Set(N.map($e=>$e.size).filter($e=>i.viewingHeight[$e]))].map($e=>$e+"\u2033 \u2264 "+(6*i.viewingHeight[$e]).toFixed(2)+" m").join(" \xB7 ");z.append(d("small",($?"\u6309\u6559\u5BA4\u6DF1\u5EA6\u9009\u578B":"Room-depth guide")+" ("+M.depth+" m) \xB7 "+pe+(xe?" \xB7 "+($?"\u6587\u5B57\u89C2\u770B\u8DDD\u79BB\uFF086H\uFF09":"Text viewing distance (6H)")+" "+xe:""))),N.length&&N.every($e=>$e.size!==null)&&N.some($e=>Se.some(([et,P])=>$e.size===P&&N.filter(T=>T.size===P).length>et))&&z.append(d("small",$?"\u667A\u6167\u63A8\u8350\uFF1A\u53EF\u6309\u4E0A\u65B9\u5EFA\u8BAE\u8C03\u6574\u5C3A\u5BF8\u6216\u51CF\u5C11\u53F0\u6570\u3002":"Consider the recommended screen sizes and counts above."))}if(!p)return;let Me=N.find($=>$.id===p),Ye=d("fieldset");Ye.append(d("legend",A[8])),z.insertBefore(Ye,se);let L={};for(let[$,Se,pe]of[["name",9,""],["widthMm",10,""],["heightMm",11,""],["depthMm",12,u==="front"?70:""],["offsetMm",13,u==="front"?null:180]]){if(pe===null)continue;let xe=d("input");xe.type=$==="name"?"text":"number",xe.required=!0,xe.maxLength=100,xe.type==="number"&&(xe.min=$==="offsetMm"?"0":"1",xe.max=1e5,xe.step="1"),xe.value=Me?.[$]??pe,L[$]=B(A[Se],xe,Ye)}function We(){let $={id:Me?.id||i.nextId(D.screens),zone:u,size:null,name:L.name.value.trim(),widthMm:Number(L.widthMm.value),heightMm:Number(L.heightMm.value),depthMm:Number(L.depthMm?.value??Me?.depthMm??70),offsetMm:Number(L.offsetMm?.value??0),x:Me?.x??M.width/2,y:Me?.y??(u==="front"?.15:M.depth/2)};return{...D,screens:Me?D.screens.map(Se=>Se.id===Me.id?$:Se):[...D.screens,$]}}let Ne=H(A[14],()=>W(We()),Ye);function Te(){let $=i.fit(We(),M);Ne.disabled=$.status==="blocked"&&!(R.status==="blocked"&&i.valid(We())),se.dataset.state=$.status,se.textContent=s($,w,u)}Ye.oninput=Te,Te(),H(A[15],()=>{p=null,f="",x(!0)},Ye)}return x(),{refresh:x,report(v){f=v,x(!0)}}}globalThis.DisplayEditor={bind:r,message:s}})();var ou=globalThis.DisplayFit;function Ts(i,e,t,n,s="right"){return{width:i,depth:e,height:t,stations:n?[n]:[],doorSide:s}}function xa(i,e,t,n,s){let r=[];if(t&&e){let a=ou.standard("front",86,"ifp-1",e.x,e.y),o=86*.0254*16/Math.sqrt(337);Math.abs(e.width-o)>.015&&Object.assign(a,{size:null,name:"IFP",widthMm:Math.round(e.width*1e3),heightMm:Math.round(e.width*9e3/16)}),r.push(a)}for(let a of n){let o=String(a.id).startsWith("L")?"left":"right";r.push(ou.standard(o,Number(s),"display-"+a.id,a.x,a.y))}return{stageMm:Math.round(i*1e3),screens:r}}function up(i,e,t={}){if(!e||i.error)return i;let n=i.devices.filter(s=>s.kind!=="ifp"&&s.kind!=="display");for(let s of e.screens){let r=s.zone==="front",a=r?"ifp":"display";t[a]!==!1&&n.push({id:s.id,kind:a,name:ou.label(s),size:s.size,panel:s,color:r?"#488cbe":"#6e7cda",x:r?s.x:s.zone==="left"?0:i.room.width,depth:s.y,planX:s.x,planDepth:s.y,height:r?1.65:2.1,direction:"rear",wallSide:s.zone,mount:r?"front-wall":"side-wall"})}return{...i,room:{...i.room,stageWidth:e.stageMm/1e3},devices:n}}var dp=(i,e,t,n,s,r="up")=>{let a=i-t,o=e-n,l=Math.sqrt(a*a+o*o);if(l===0)return!0;let c=Math.atan2(o,a),h=s/2,u=r==="down"?h*(1+Math.sin(c)):h*(1-Math.sin(c));return l<=u},As=(i,e,t,n=30)=>{if(!i||i.length===0||e<=0||t<=0)return{best:0,limit:0};let s=Math.round(n*(t/e));if(isNaN(s)||s<=0)return{best:0,limit:0};let r=0,a=0,o=n*s;for(let l=0;l<s;l++){let c=(l+.5)*(t/s);for(let h=0;h<n;h++){let u=(h+.5)*(e/n),p=!1,f=!1;for(let _ of i)if(!p&&dp(u,c,_.x,_.y,6,_.facing)&&(p=!0,f=!0),!f&&dp(u,c,_.x,_.y,8,_.facing)&&(f=!0),p&&f)break;p&&r++,f&&a++}}return{best:r/o*100,limit:a/o*100}};var ai=(i,e,t)=>Math.max(e,Math.min(t,i)),fp={best:80,limit:95},F_=8,O_=2,gi=F_+O_,il=(i,e,t)=>{if(i.length===0)return i;let n=Math.min(...i.map(o=>o.y)),s=i.filter(o=>Math.abs(o.y-n)<1e-6),r=new Set(s.map(o=>o.id)),a=ai(.8,.3,t-.3);return i.map(o=>{if(!r.has(o.id))return{...o,facing:"up"};let l=s.findIndex(h=>h.id===o.id),c=s.length===1?e/2:e*(.3+.4*l/(s.length-1));return{...o,x:ai(c,.3,e-.3),y:a,facing:"down"}})},mp=(i,e,t)=>{if(i<=8&&e<=10)return[];let n=4.1;t==="65"&&(n=5),t==="75"&&(n=5.6);let s=e-6,r=[];if(s>0){let a=Math.ceil(s/n);for(let o=0;o<a;o++){let l=6+o*n;l<e-2&&(r.push({id:`L${o}`,x:.5,y:l}),r.push({id:`R${o}`,x:i-.5,y:l}))}}return r},Cs=i=>({x:i/2,y:.35,width:86*.0254*16/Math.sqrt(337)}),va=(i,e,t,n,s=!0)=>{let r=Math.ceil(t/n),a=[];for(let o=0;o<r;o++){let l=Math.min(n,t-a.length);for(let c=0;c<l;c++){let h=a.length,u=l===1?i/2:(c+.5)*i/l,p=ai(e-.5,1.2,e-.3),f=Math.min(.8+12,p),_=r===1?.5:.32+.58*o/(r-1),g=r===1?e/2:s?o===0?.8:f+(p-f)*(o-1)/Math.max(1,r-2):ai(e*_,1.2,e-.5);a.push({id:h,x:u,y:g,label:`S${h+1}`,facing:"up"})}}return il(a,i,e)},fr=(i,e,t)=>{let n=As(i,e,t);return{...n,score:n.best+n.limit}},lu=(i,e,t)=>{let n=i.map(a=>({...a})),s=fr(n,e,t).score,r=[...new Set(n.map(a=>a.y))].sort((a,o)=>a-o);if(r.length<2)return n;for(let a of[.5,.1])for(let o=0;o<4;o++){let l=!1;for(let c=1;c<r.length;c++){let h=r[c],u=Math.max(r[c-1]+1.2,1.2),p=Math.min(c+1<r.length?r[c+1]-1.2:t-.3,t-.3),f=h,_=s;for(let g of[-2,-1,0,1,2]){let m=ai(h+g*a,u,p);if(Math.abs(m-f)<1e-8)continue;let d=n.map(v=>Math.abs(v.y-h)<1e-8?{...v,y:m}:v),x=fr(d,e,t).score;x>_+1e-8&&(f=m,_=x)}f!==h&&(n=n.map(g=>Math.abs(g.y-h)<1e-8?{...g,y:f}:g),r[c]=f,s=_,l=!0)}if(!l)break}return n},B_=(i,e)=>{let t={best:75,limit:85},n=null,s=3*Math.PI*6**2/8,r=Math.ceil(t.best*i*e/(s*100)),a=Math.max(3,Math.min(gi,r));for(let o=a;o<=gi;o++){let l=i>=9?[2,1]:[1],c=null,h=-1/0;for(let u of l){if(u>o)continue;let f=[va(i,e,o,u,!1),va(i,e,o,u,!0)].map(m=>({layout:m,...fr(m,i,e)})).sort((m,d)=>d.score-m.score)[0];(!n||f.score>n.score)&&(n={layout:f.layout,score:f.score});let _=lu(f.layout,i,e),g=fr(_,i,e);(!n||g.score>n.score)&&(n={layout:_,score:g.score}),g.best>=t.best&&g.limit>=t.limit&&g.score>h&&(c=_,h=g.score)}if(c)return c}return n?n.layout:lu(va(i,e,3,1),i,e)},z_=(i,e)=>{if(i>=13)return il([{id:0,x:i*.3,y:e*.5,label:"S1",facing:"up"},{id:1,x:i*.7,y:e*.5,label:"S2",facing:"up"}],i,e);let t=ai(Math.min(e*.46,6),1.2,e-1.2),n=ai(e-.5,t+1.2,e-.3);return il([{id:0,x:i/2,y:t,label:"S1",facing:"up"},{id:1,x:i/2,y:n,label:"S2",facing:"up"}],i,e)},nl=(i,e,t)=>{let n=As(i,e,t);return n.best>=fp.best&&n.limit>=fp.limit},pp=(i,e,t)=>{if(!Number.isInteger(t)||t<0||t>gi)throw new RangeError("Invalid S210 count");return t===0?[]:(i>=9?[1,2]:[1]).filter(s=>s<=t).flatMap(s=>[!1,!0].map(r=>lu(va(i,e,t,s,r),i,e))).sort((s,r)=>fr(r,i,e).score-fr(s,i,e).score)[0]},sl=(i,e,t,n=null)=>{if(n!==null)return pp(i,e,n);let s=e<=6;if(s){let o=va(i,e,1,1);if(nl(o,i,e))return o}let r=t.length===2?il(t.map((o,l)=>({...o,id:l,x:ai(o.x,.3,i-.3),y:ai(o.y,.3,e-.3),label:o.label||`S${l+1}`})),i,e):null;if(r&&nl(r,i,e))return r;let a=z_(i,e);if(nl(a,i,e))return a;if(s){let o=pp(i,e,2);if(nl(o,i,e))return o}return B_(i,e)},gp=(i,e)=>{let t=Math.max(2,Math.ceil(e/9.5)),n=ai(.8,.3,i/2),s=ai(i-.8,i/2,i-.3),r=[];for(let a=0;a<t;a++){let o=t===1?e/2:1.5+a*(e-3)/(t-1);r.push({id:r.length,x:n,y:o}),r.push({id:r.length,x:s,y:o})}return r};var k_="2026-11-13",V_=["NDP600","NDP200","NMP311","SL100"];function _p(i,e){return i?.confirmed===!0&&typeof i.model=="string"&&i.model.trim().length>0&&typeof i.notes=="string"&&i.notes.trim().length>0&&Number.isInteger(i.capacity)&&i.capacity>=e}function H_(i,e){if(![i,e].every(r=>Number.isFinite(r)&&r>0))return null;let t=sl(i,e,[]),n=As(t,i,e),s=t.length<=2?{best:80,limit:95}:{best:75,limit:85};return{count:t.length,coverage:n,unmet:n.best<s.best||n.limit<s.limit}}function ya({width:i,depth:e,s210Count:t,speakerCount:n,qnexModel:s="NDP600",audioConfig:r={},minimum:a=H_(i,e)}){let o=r.useBuiltInAmp!==!1&&V_.includes(s)?Math.min(2,n):0,l=Math.max(0,n-o),c=n>0&&(n>=6||i*e>150),h=t>0&&n>0,u=c&&_p(r.amplifier,l||1),p=h&&_p(r.feedback,1),f=c?Math.max(1,Math.ceil(l/4)):0;return{policyVersion:k_,minimum:a,actualCount:t,reviewSuggested:t>0&&a?.count>=4,suggestedCount:a?Math.min(gi,a.count+2):null,engineeringReview:!!a&&(a.unmet||a.count>=gi||t>=gi),a3006Required:t>=3,overCapacity:t>gi,amplifierRequired:c,amplifierQuantity:f,amplifierProvided:u,feedbackRequired:h,feedbackProvided:p,purchaseAmplifiers:u?0:f,purchaseFeedback:h&&!p?1:0,builtInSpeakers:o,externalSpeakers:l,amplifierDeclarationInvalid:c&&r.amplifier?.confirmed===!0&&!u,feedbackDeclarationInvalid:h&&r.feedback?.confirmed===!0&&!p}}function xp(i,e={},t="en"){let n=t==="zh",s=[];i.actualCount>0&&i.minimum&&(s.push(n?`S210\uFF1A\u7B97\u6CD5\u6700\u4F4E ${i.minimum.count} \u652F\uFF1B\u5F53\u524D\u91C7\u7528 ${i.actualCount} \u652F\u3002`:`S210: calculated minimum ${i.minimum.count}; selected ${i.actualCount}.`),i.reviewSuggested&&i.suggestedCount>i.minimum.count&&s.push(n?`\u5EFA\u8BAE\u4EBA\u5DE5\u6BD4\u8F83 ${i.minimum.count} \u4E0E ${i.suggestedCount} \u652F\u65B9\u6848\uFF1B\u589E\u52A0\u6570\u91CF\u987B\u7ECF\u4E1A\u52A1\u786E\u8BA4\u3002`:`Manually compare ${i.minimum.count} versus ${i.suggestedCount} microphones; extra units require project confirmation.`),i.engineeringReview&&s.push(n?"\u5DF2\u8FBE\u5230\u5BB9\u91CF\u4E0A\u9650\u6216\u6700\u4F4E\u8986\u76D6\u672A\u8FBE\u6807\uFF0C\u8BF7\u5DE5\u7A0B\u590D\u6838\u3002":"Engineering review required: capacity limit reached or minimum coverage target unmet."),s.push(n?"\u8986\u76D6\u4E3A\u51E0\u4F55\u4F30\u7B97\uFF0C\u9700\u73B0\u573A\u6838\u5B9E\u6DF7\u54CD\u3001\u566A\u58F0\u548C\u5B89\u88C5\u6761\u4EF6\u3002":"Coverage is a geometric estimate; verify reverberation, noise and mounting on site.")),i.amplifierRequired&&(s.push(n?`\u529F\u653E\u5206\u914D\uFF1AQ-NEX \u5185\u7F6E\u529F\u653E\uFF082\xD740W\uFF09\u5E26 ${i.builtInSpeakers} \u53EA\uFF1B\u5916\u7F6E\u529F\u653E\u5E26 ${i.externalSpeakers} \u53EA PS610\u3002`:`Amplifier routing: Q-NEX built-in amplifier (2 x 40W) serves ${i.builtInSpeakers}; external amplification serves ${i.externalSpeakers} PS610 speakers.`),i.amplifierProvided||s.push(n?"EKA-415\uFF1A\u6BCF\u901A\u9053\u4E00\u53EAPS610\uFF1B\u987B\u786E\u8BA4\u9650\u5E45/\u589E\u76CA\u8C03\u8BD5\u53CAAC220V/50Hz\u7535\u6E90\u3002\u516D\u53EA\u5168\u90E8\u63A5\u4E00\u53F0\u4EC5\u4F5C\u4E3A\u5DF2\u6838\u5B9E\u8D1F\u8F7D\u4E0E\u63A5\u7EBF\u7684\u4EBA\u5DE5\u5DE5\u7A0B\u5907\u9009\u3002":"EKA-415: one PS610 per channel; confirm limiter/gain commissioning and AC220V/50Hz supply. Six speakers on one EKA-415 is a manual engineering alternative only after load and wiring verification."));for(let[r,a,o]of[["amplifier",i.amplifierProvided,i.amplifierDeclarationInvalid],["feedback",i.feedbackProvided,i.feedbackDeclarationInvalid]]){let l=r==="amplifier"?n?"\u529F\u653E":"Amplifier":n?"\u53CD\u9988\u6291\u5236\u5668":"Feedback suppressor";a&&s.push(`${n?"\u5BA2\u6237\u63D0\u4F9B":"Customer provided"} \u2014 ${l}: ${e[r].model}; ${n?"\u5BB9\u91CF":"capacity"} ${e[r].capacity}; ${e[r].notes}`),o&&s.push(n?`${l}\u7684\u5DF2\u6709\u8BBE\u5907\u786E\u8BA4\u4E0D\u5B8C\u6574\u6216\u5BB9\u91CF\u4E0D\u8DB3\uFF0C\u4ECD\u8BA1\u5165\u91C7\u8D2D\u3002`:`${l} declaration is incomplete or capacity is insufficient; purchase remains included.`)}return s}function vp(i){window.addEventListener("message",async e=>{if(window.parent===window||e.source!==window.parent||location.protocol!=="file:"&&e.origin!==location.origin||e.data?.type!=="qnex-quotation-capture"||typeof e.data.id!="string")return;let t={type:"qnex-quotation-image",id:e.data.id};try{Object.assign(t,await i(e.data))}catch(n){t.error=n.message||"3D capture failed"}e.source.postMessage(t,e.origin==="null"?"*":e.origin)})}function yp(i,e){if(!i?.renderer)throw new Error("3D scene is not ready");i.setTheme("light"),i.renderer.setPixelRatio(1),i.renderer.setSize(1440,1e3,!1),i.camera.aspect=1440/1e3,i.camera.up.set(0,1,0),i.camera.updateProjectionMatrix(),i.viewTween=null,i.setView("overview",!0),i.controls.update(),i.renderer.render(i.scene,i.camera);let t=document.createElement("canvas");t.width=1440,t.height=1e3;let n=t.getContext("2d");return n.drawImage(i.canvas,0,0,1440,1e3),n.fillStyle="rgba(255,255,255,.94)",n.fillRect(16,16,1408,44),n.fillStyle="#17324d",n.font="bold 20px Arial",n.fillText(e,30,46),{data:t.toDataURL("image/png"),width:1440,height:1e3,view:"overview",upright:!0}}var cu={en:"English",zh:"\u7B80\u4F53\u4E2D\u6587",ko:"\uD55C\uAD6D\uC5B4",mn:"\u041C\u043E\u043D\u0433\u043E\u043B",ja:"\u65E5\u672C\u8A9E",es:"Espa\xF1ol",fr:"Fran\xE7ais",ar:"\u0627\u0644\u0639\u0631\u0628\u064A\u0629"},G_=["light","dark","theme","showSidebar","hideSidebar","language","left","right","types","tabletop","scene","views","devices"],Sp={en:["Light","Dark","Switch light / dark theme","Show sidebar","Hide sidebar","Language","Left","Right","types","tabletop","Interactive 3D room","Camera views","Device names"],zh:["\u660E\u4EAE","\u6DF1\u8272","\u5207\u6362\u660E\u4EAE\uFF0F\u6DF1\u8272\u4E3B\u9898","\u5C55\u5F00\u4FA7\u680F","\u6536\u8D77\u4FA7\u680F","\u8BED\u8A00","\u5DE6","\u53F3","\u7C7B","\u684C\u9762","\u4EA4\u4E92\u5F0F\u4E09\u7EF4\u6559\u5BA4","\u89C2\u5BDF\u89C6\u89D2","\u8BBE\u5907\u540D\u79F0"],ko:["\uBC1D\uAC8C","\uC5B4\uB461\uAC8C","\uBC1D\uC740/\uC5B4\uB450\uC6B4 \uD14C\uB9C8 \uC804\uD658","\uC0AC\uC774\uB4DC\uBC14 \uD45C\uC2DC","\uC0AC\uC774\uB4DC\uBC14 \uC228\uAE30\uAE30","\uC5B8\uC5B4","\uC67C\uCABD","\uC624\uB978\uCABD","\uC720\uD615","\uCC45\uC0C1 \uC0C1\uD310","\uC778\uD130\uB799\uD2F0\uBE0C 3D \uAD50\uC2E4","\uCE74\uBA54\uB77C \uC2DC\uC810","\uC7A5\uBE44 \uC774\uB984"],mn:["\u0426\u0430\u0439\u0432\u0430\u0440","\u0411\u0430\u0440\u0430\u0430\u043D","\u0426\u0430\u0439\u0432\u0430\u0440 / \u0431\u0430\u0440\u0430\u0430\u043D \u04E9\u043D\u0433\u04E9 \u0441\u043E\u043B\u0438\u0445","\u0425\u0430\u0436\u0443\u0443\u0433\u0438\u0439\u043D \u0441\u0430\u043C\u0431\u0430\u0440\u044B\u0433 \u0445\u0430\u0440\u0443\u0443\u043B\u0430\u0445","\u0425\u0430\u0436\u0443\u0443\u0433\u0438\u0439\u043D \u0441\u0430\u043C\u0431\u0430\u0440\u044B\u0433 \u043D\u0443\u0443\u0445","\u0425\u044D\u043B","\u0417\u04AF\u04AF\u043D","\u0411\u0430\u0440\u0443\u0443\u043D","\u0442\u04E9\u0440\u04E9\u043B","\u0448\u0438\u0440\u044D\u044D\u043D\u0438\u0439 \u0442\u0430\u0432\u0446\u0430\u043D","\u0418\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432 3D \u04E9\u0440\u04E9\u04E9","\u041A\u0430\u043C\u0435\u0440\u044B\u043D \u0445\u0430\u0440\u0430\u0433\u0434\u0430\u0446","\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u043D \u043D\u044D\u0440"],ja:["\u30E9\u30A4\u30C8","\u30C0\u30FC\u30AF","\u30E9\u30A4\u30C8\uFF0F\u30C0\u30FC\u30AF\u5207\u66FF","\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u8868\u793A","\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u96A0\u3059","\u8A00\u8A9E","\u5DE6","\u53F3","\u7A2E\u985E","\u5929\u677F","\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D63D\u6559\u5BA4","\u8996\u70B9","\u6A5F\u5668\u540D"],es:["Claro","Oscuro","Cambiar tema claro / oscuro","Mostrar panel","Ocultar panel","Idioma","Izquierda","Derecha","tipos","superficie","Aula 3D interactiva","Vistas de c\xE1mara","Nombres de equipos"],fr:["Clair","Sombre","Changer de th\xE8me clair / sombre","Afficher le panneau","Masquer le panneau","Langue","Gauche","Droite","types","plateau","Salle 3D interactive","Points de vue","Noms des \xE9quipements"],ar:["\u0641\u0627\u062A\u062D","\u062F\u0627\u0643\u0646","\u062A\u0628\u062F\u064A\u0644 \u0627\u0644\u0645\u0638\u0647\u0631 \u0627\u0644\u0641\u0627\u062A\u062D \u0648\u0627\u0644\u062F\u0627\u0643\u0646","\u0625\u0638\u0647\u0627\u0631 \u0627\u0644\u0644\u0648\u062D\u0629","\u0625\u062E\u0641\u0627\u0621 \u0627\u0644\u0644\u0648\u062D\u0629","\u0627\u0644\u0644\u063A\u0629","\u064A\u0633\u0627\u0631","\u064A\u0645\u064A\u0646","\u0623\u0646\u0648\u0627\u0639","\u0633\u0637\u062D \u0627\u0644\u0637\u0627\u0648\u0644\u0629","\u063A\u0631\u0641\u0629 \u062A\u0641\u0627\u0639\u0644\u064A\u0629 \u062B\u0644\u0627\u062B\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F","\u0632\u0648\u0627\u064A\u0627 \u0627\u0644\u0639\u0631\u0636","\u0623\u0633\u0645\u0627\u0621 \u0627\u0644\u0623\u062C\u0647\u0632\u0629"]},Sa=i=>Object.fromEntries(G_.map((e,t)=>[e,(Sp[i]||Sp.en)[t]]));function Mp(i){let e=new URLSearchParams(location.search).get("lang");return Object.hasOwn(cu,e)?e:Object.hasOwn(cu,i)?i:"en"}function W_(i){try{localStorage.setItem("qnex_arch_lang_v2",i)}catch{}}function hu(i){document.documentElement.lang=i==="zh"?"zh-CN":i,document.documentElement.dir=i==="ar"?"rtl":"ltr";let e=Sa(i);for(let[t,n]of[[".scene-panel","scene"],["#scene-canvas","scene"],["[role=group]","views"],["#device-labels","devices"]])document.querySelector(t)?.setAttribute("aria-label",e[n])}function bp(i,e,t){i.replaceChildren(...Object.entries(cu).map(([n,s])=>{let r=document.createElement("option");return r.value=n,r.textContent=s,r})),i.value=e,i.setAttribute("aria-label",Sa(e).language),i.addEventListener("change",()=>{W_(i.value);try{let n=new URL(location.href);n.searchParams.set("lang",i.value),history.replaceState(null,"",n)}catch{}t(i.value),i.setAttribute("aria-label",Sa(i.value).language)})}var pr={light:{background:"#eaf0f5",floor:"#e3e5df",platform:"#d1ae89",front:"#e3ebf0",glass:"#9fc5d1",base:"#d5e2e8",trim:"#829eaa",door:"#637e8b",doorPanel:"#a6c5cf",window:"#9fbfcc",handle:"#456578",grid:"#bdc8c8",gridCenter:"#9aafb9",sky:"#f8fdff",ground:"#b6cad1",exposure:1.35},dark:{background:"#0c1729",floor:"#172940",platform:"#385873",front:"#102239",glass:"#27415a",base:"#20354b",trim:"#3d6984",door:"#385873",doorPanel:"#345367",window:"#4a6b80",handle:"#83aabd",grid:"#30475d",gridCenter:"#45647a",sky:"#c9e8ff",ground:"#26374c",exposure:1}};function wp(i,e,t){let n=e;try{let u=localStorage.getItem(i);Object.hasOwn(pr,u)&&(n=u)}catch{}let s=!1,r="en",a=document.querySelector("#theme-toggle"),o=document.querySelector("#sidebar-toggle"),l=document.querySelector(".sidebar");function c(){let u=Sa(r);a.textContent=n==="dark"?u.light:u.dark,a.title=a.ariaLabel=u.theme,a.setAttribute("aria-pressed",String(n==="dark")),o.textContent=s?u.showSidebar:u.hideSidebar,o.setAttribute("aria-expanded",String(!s)),o.setAttribute("aria-controls",l.id)}function h(){document.documentElement.dataset.theme=n,document.querySelector('meta[name="theme-color"]')?.setAttribute("content",pr[n].background),t(n),c()}return a.addEventListener("click",()=>{n=n==="dark"?"light":"dark";try{localStorage.setItem(i,n)}catch{}h()}),o.addEventListener("click",()=>{s=!s,l.hidden=s,document.documentElement.classList.toggle("sidebar-collapsed",s),c()}),h(),{setLanguage(u){r=u,c()},get theme(){return n}}}var Ep={en:["Scene settings","Setup","Devices","Coverage","Display","Acoustic coverage","Adjust field of view"],zh:["\u573A\u666F\u8BBE\u7F6E","\u914D\u7F6E","\u8BBE\u5907","\u8986\u76D6","\u663E\u793A","\u58F0\u5B66\u8986\u76D6","\u8C03\u6574\u89C6\u573A"],ko:["\uC7A5\uBA74 \uC124\uC815","\uC124\uC815","\uC7A5\uBE44","\uCEE4\uBC84\uB9AC\uC9C0","\uD45C\uC2DC","\uC74C\uD5A5 \uCEE4\uBC84\uB9AC\uC9C0","\uC2DC\uC57C\uAC01 \uC870\uC815"],mn:["\u041E\u0440\u0447\u043D\u044B \u0442\u043E\u0445\u0438\u0440\u0433\u043E\u043E","\u0422\u043E\u0445\u0438\u0440\u0433\u043E\u043E","\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436","\u0425\u0430\u043C\u0440\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D","\u0414\u044D\u043B\u0433\u044D\u0446","\u0414\u0443\u0443\u043D\u044B \u0445\u0430\u043C\u0440\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D","\u0425\u0430\u0440\u0430\u0445 \u04E9\u043D\u0446\u04E9\u0433 \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u0430\u0445"],ja:["\u30B7\u30FC\u30F3\u8A2D\u5B9A","\u69CB\u6210","\u6A5F\u5668","\u30AB\u30D0\u30FC\u7BC4\u56F2","\u8868\u793A","\u97F3\u97FF\u30AB\u30D0\u30FC\u7BC4\u56F2","\u753B\u89D2\u3092\u8ABF\u6574"],es:["Ajustes de escena","Configurar","Equipos","Cobertura","Mostrar","Cobertura ac\xFAstica","Ajustar campo de visi\xF3n"],fr:["R\xE9glages de la sc\xE8ne","Configurer","\xC9quipements","Couverture","Affichage","Couverture acoustique","R\xE9gler le champ de vision"],ar:["\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0634\u0647\u062F","\u0627\u0644\u0625\u0639\u062F\u0627\u062F","\u0627\u0644\u0623\u062C\u0647\u0632\u0629","\u0627\u0644\u062A\u063A\u0637\u064A\u0629","\u0627\u0644\u0639\u0631\u0636","\u0627\u0644\u062A\u063A\u0637\u064A\u0629 \u0627\u0644\u0635\u0648\u062A\u064A\u0629","\u0636\u0628\u0637 \u0645\u062C\u0627\u0644 \u0627\u0644\u0631\u0624\u064A\u0629"]};function uu(i,e){let t=[...i.querySelectorAll('[role="tab"]')],n=t.map(l=>document.getElementById(l.getAttribute("aria-controls"))),s=new Map,r=matchMedia(`(max-width: ${e}px)`),a=0;function o(l,c=!1){if(l===a)return;let h=n[a],u=i.offsetHeight-h.getBoundingClientRect().top,p=!r.matches;p?s.set(h,h.scrollTop):c&&s.set(h,Math.max(0,u)),h.hidden=!0,t[a].ariaSelected="false",t[a].tabIndex=-1,a=l;let f=n[a];f.hidden=!1,t[a].ariaSelected="true",t[a].tabIndex=0;let _=s.get(f)||0;p?f.scrollTop=_:c&&(u>=0||_>0)&&window.scrollBy(0,f.getBoundingClientRect().top-i.offsetHeight+_)}return t.forEach((l,c)=>{l.addEventListener("click",()=>o(c,!0)),l.addEventListener("keydown",h=>{let u=getComputedStyle(i).direction==="rtl"?-1:1,p={Home:0,End:t.length-1,ArrowLeft:c-u,ArrowRight:c+u};if(!Object.hasOwn(p,h.key))return;h.preventDefault();let f=(p[h.key]+t.length)%t.length;o(f,!0),t[f].focus({preventScroll:!0})})}),{activate:o,get active(){return a}}}function Tp(i,e){let t=i.querySelector('[role="tablist"]'),n=uu(t,e);return i.querySelector("#adjust-camera-field").addEventListener("click",()=>{n.activate(2);let s=i.querySelector("#camera-field-panel"),r=s.closest("details");r&&(r.open=!0);let a=s.querySelector("#camera-field-enabled");a.checked||a.click();let o=s.querySelector("#camera-field-select");o.focus({preventScroll:!0}),o.scrollIntoView({block:"nearest"})}),{showCoverage(){n.activate(2)},showDevice(){n.active!==2&&(n.activate(1),matchMedia(`(max-width: ${e}px)`).matches||(i.querySelector("#sidebar-devices").scrollTop=0))},setLanguage(s){let[r,a,o,l,c,h,u]=Ep[s]||Ep.en,p={config:a,devices:o,coverage:l,display:c,acoustic:h,adjustCamera:u};t.setAttribute("aria-label",r),i.querySelectorAll("[data-sidebar-copy]").forEach(f=>{f.textContent=p[f.dataset.sidebarCopy]})}}}var rs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},as={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},om=0,Ju=1,lm=2;var Ku=1,ac=2,xi=3,Ii=0,Yt=1,nn=2,Ut=0,Ns=1,Qu=2,ed=3,td=4,oc=5,Fn=100,cm=101,hm=102,um=103,dm=104,Ws=200,fm=201,pm=202,mm=203,Pl=204,Dl=205,mo=206,gm=207,go=208,_m=209,xm=210,vm=211,ym=212,Sm=213,Mm=214,lc=0,cc=1,hc=2,Us=3,uc=4,dc=5,fc=6,pc=7,mc=0,bm=1,wm=2,Oi=0,gc=1,_c=2,xc=3,Gr=4,vc=5,yc=6,Sc=7;var nd=300,qs=301,Xs=302,Mc=303,bc=304,_o=306,Jn=1e3,es=1001,Il=1002,Xt=1003,Em=1004;var xo=1005;var ui=1006,wc=1007;var os=1008;var kn=1009,id=1010,sd=1011,Wr=1012,Ec=1013,ls=1014,fi=1015,pi=1016,Tc=1017,Ac=1018,cs=1020,rd=35902,ad=35899,od=1021,ld=1022,bn=1023,Dr=1026,hs=1027,Cc=1028,Rc=1029,cd=1030,Pc=1031;var Dc=1033,vo=33776,yo=33777,So=33778,Mo=33779,Ic=35840,Lc=35841,Nc=35842,Uc=35843,Fc=36196,Oc=37492,Bc=37496,zc=37808,kc=37809,Vc=37810,Hc=37811,Gc=37812,Wc=37813,qc=37814,Xc=37815,Yc=37816,$c=37817,Zc=37818,jc=37819,Jc=37820,Kc=37821,Qc=36492,eh=36494,th=36495,nh=36283,ih=36284,sh=36285,rh=36286;var Ua=2300,Ll=2301,Rl=2302,zu=2400,ku=2401,Vu=2402;var Tm=3200,Am=3201;var bo=0,Cm=1,Bi="",Pt="srgb",Fs="srgb-linear",Fa="linear",at="srgb";var Ls=7680;var Hu=519,Rm=512,Pm=513,Dm=514,hd=515,Im=516,Lm=517,Nm=518,Um=519,Gu=35044;var ud="300 es",hi=2e3,Oa=2001;var _i=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ap=1234567,Da=Math.PI/180,Ir=180/Math.PI;function Ys(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function dd(i,e){return(i%e+e)%e}function q_(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function X_(i,e,t){return i!==e?(t-i)/(e-i):0}function Ia(i,e,t){return(1-t)*i+t*e}function Y_(i,e,t,n){return Ia(i,e,1-Math.exp(-t*n))}function $_(i,e=1){return e-Math.abs(dd(i,e*2)-e)}function Z_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function j_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function J_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function K_(i,e){return i+Math.random()*(e-i)}function Q_(i){return i*(.5-Math.random())}function ex(i){i!==void 0&&(Ap=i);let e=Ap+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tx(i){return i*Da}function nx(i){return i*Ir}function ix(i){return(i&i-1)===0&&i!==0}function sx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function rx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ax(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),p=a((e-n)/2),f=r((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*p,o*c);break;case"YZY":i.set(l*p,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*p,o*h,o*c);break;case"XZX":i.set(o*h,l*_,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*_,o*c);break;case"ZYZ":i.set(l*_,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function hn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var qr={DEG2RAD:Da,RAD2DEG:Ir,generateUUID:Ys,clamp:Ze,euclideanModulo:dd,mapLinear:q_,inverseLerp:X_,lerp:Ia,damp:Y_,pingpong:$_,smoothstep:Z_,smootherstep:j_,randInt:J_,randFloat:K_,randFloatSpread:Q_,seededRandom:ex,degToRad:tx,radToDeg:nx,isPowerOfTwo:ix,ceilPowerOfTwo:sx,floorPowerOfTwo:rx,setQuaternionFromProperEuler:ax,normalize:hn,denormalize:Cr},de=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},yn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],p=r[a+0],f=r[a+1],_=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=p,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(u!==g||l!==p||c!==f||h!==_){let m=1-o,d=l*p+c*f+h*_+u*g,x=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){let S=Math.sqrt(v),M=Math.atan2(S,d*x);m=Math.sin(m*M)/S,o=Math.sin(o*M)/S}let y=o*x;if(l=l*m+p*y,c=c*m+f*y,h=h*m+_*y,u=u*m+g*y,m===1-o){let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],p=r[a+1],f=r[a+2],_=r[a+3];return e[t]=o*_+h*u+l*f-c*p,e[t+1]=l*_+h*p+c*u-o*f,e[t+2]=c*_+h*f+o*p-l*u,e[t+3]=h*_-o*u-l*p-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),p=l(n/2),f=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=p*h*u+c*f*_,this._y=c*f*u-p*h*_,this._z=c*h*_+p*f*u,this._w=c*h*u-p*f*_;break;case"YXZ":this._x=p*h*u+c*f*_,this._y=c*f*u-p*h*_,this._z=c*h*_-p*f*u,this._w=c*h*u+p*f*_;break;case"ZXY":this._x=p*h*u-c*f*_,this._y=c*f*u+p*h*_,this._z=c*h*_+p*f*u,this._w=c*h*u-p*f*_;break;case"ZYX":this._x=p*h*u-c*f*_,this._y=c*f*u+p*h*_,this._z=c*h*_-p*f*u,this._w=c*h*u+p*f*_;break;case"YZX":this._x=p*h*u+c*f*_,this._y=c*f*u+p*h*_,this._z=c*h*_-p*f*u,this._w=c*h*u-p*f*_;break;case"XZY":this._x=p*h*u-c*f*_,this._y=c*f*u-p*h*_,this._z=c*h*_+p*f*u,this._w=c*h*u+p*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],p=n+o+u;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=a*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return du.copy(this).projectOnVector(e),this.sub(du)}reflect(e){return this.sub(du.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},du=new I,Cp=new yn,Xe=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],p=n[2],f=n[5],_=n[8],g=s[0],m=s[3],d=s[6],x=s[1],v=s[4],y=s[7],S=s[2],M=s[5],w=s[8];return r[0]=a*g+o*x+l*S,r[3]=a*m+o*v+l*M,r[6]=a*d+o*y+l*w,r[1]=c*g+h*x+u*S,r[4]=c*m+h*v+u*M,r[7]=c*d+h*y+u*w,r[2]=p*g+f*x+_*S,r[5]=p*m+f*v+_*M,r[8]=p*d+f*y+_*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,p=o*l-h*r,f=c*r-a*l,_=t*u+n*p+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return e[0]=u*g,e[1]=(s*c-h*n)*g,e[2]=(o*n-s*a)*g,e[3]=p*g,e[4]=(h*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(fu.makeScale(e,t)),this}rotate(e){return this.premultiply(fu.makeRotation(-e)),this}translate(e,t){return this.premultiply(fu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},fu=new Xe;function fd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ba(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fm(){let i=Ba("canvas");return i.style.display="block",i}var Rp={};function Lr(i){i in Rp||(Rp[i]=!0,console.warn(i))}function Om(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Pp=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dp=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ox(){let i={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===at&&(s.r=Di(s.r),s.g=Di(s.g),s.b=Di(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(s.r=Rr(s.r),s.g=Rr(s.g),s.b=Rr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bi?Fa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Lr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Lr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fs]:{primaries:e,whitePoint:n,transfer:Fa,toXYZ:Pp,fromXYZ:Dp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:at,toXYZ:Pp,fromXYZ:Dp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),i}var nt=ox();function Di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var mr,Nl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{mr===void 0&&(mr=Ba("canvas")),mr.width=e.width,mr.height=e.height;let s=mr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=mr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ba("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Di(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Di(t[n]/255)*255):t[n]=Di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},lx=0,Nr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=Ys(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(pu(s[a].image)):r.push(pu(s[a]))}else r=pu(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function pu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var cx=0,mu=new I,un=class i extends _i{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=es,s=es,r=ui,a=os,o=bn,l=kn,c=i.DEFAULT_ANISOTROPY,h=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Ys(),this.name="",this.source=new Nr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(mu).x}get height(){return this.source.getSize(mu).y}get depth(){return this.source.getSize(mu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jn:e.x=e.x-Math.floor(e.x);break;case es:e.x=e.x<0?0:1;break;case Il:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jn:e.y=e.y-Math.floor(e.y);break;case es:e.y=e.y<0?0:1;break;case Il:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=nd;un.DEFAULT_ANISOTROPY=1;var ct=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],p=l[1],f=l[5],_=l[9],g=l[2],m=l[6],d=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,y=(f+1)/2,S=(d+1)/2,M=(h+p)/4,w=(u+g)/4,A=(_+m)/4;return v>y&&v>S?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=M/n,r=w/n):y>S?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=M/s,r=A/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=w/r,s=A/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(p-h)*(p-h));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(u-g)/x,this.z=(p-h)/x,this.w=Math.acos((c+f+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ul=class extends _i{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new un(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:ui,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Nr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},dn=class extends Ul{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},za=class extends un{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fl=class extends un{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,oi):oi.fromBufferAttribute(r,a),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rl.copy(n.boundingBox)),rl.applyMatrix4(e.matrixWorld),this.union(rl)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),al.subVectors(this.max,Ma),gr.subVectors(e.a,Ma),_r.subVectors(e.b,Ma),xr.subVectors(e.c,Ma),Yi.subVectors(_r,gr),$i.subVectors(xr,_r),Rs.subVectors(gr,xr);let t=[0,-Yi.z,Yi.y,0,-$i.z,$i.y,0,-Rs.z,Rs.y,Yi.z,0,-Yi.x,$i.z,0,-$i.x,Rs.z,0,-Rs.x,-Yi.y,Yi.x,0,-$i.y,$i.x,0,-Rs.y,Rs.x,0];return!gu(t,gr,_r,xr,al)||(t=[1,0,0,0,1,0,0,0,1],!gu(t,gr,_r,xr,al))?!1:(ol.crossVectors(Yi,$i),t=[ol.x,ol.y,ol.z],gu(t,gr,_r,xr,al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ti=[new I,new I,new I,new I,new I,new I,new I,new I],oi=new I,rl=new fn,gr=new I,_r=new I,xr=new I,Yi=new I,$i=new I,Rs=new I,Ma=new I,al=new I,ol=new I,Ps=new I;function gu(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ps.fromArray(i,r);let o=s.x*Math.abs(Ps.x)+s.y*Math.abs(Ps.y)+s.z*Math.abs(Ps.z),l=e.dot(Ps),c=t.dot(Ps),h=n.dot(Ps);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var hx=new fn,ba=new I,_u=new I,Li=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):hx.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ba.subVectors(e,this.center);let t=ba.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ba,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_u.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ba.copy(e.center).add(_u)),this.expandByPoint(ba.copy(e.center).sub(_u))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ai=new I,xu=new I,ll=new I,Zi=new I,vu=new I,cl=new I,yu=new I,ts=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){xu.copy(e).add(t).multiplyScalar(.5),ll.copy(t).sub(e).normalize(),Zi.copy(this.origin).sub(xu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ll),o=Zi.dot(this.direction),l=-Zi.dot(ll),c=Zi.lengthSq(),h=Math.abs(1-a*a),u,p,f,_;if(h>0)if(u=a*l-o,p=a*o-l,_=r*h,u>=0)if(p>=-_)if(p<=_){let g=1/h;u*=g,p*=g,f=u*(u+a*p+2*o)+p*(a*u+p+2*l)+c}else p=r,u=Math.max(0,-(a*p+o)),f=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(a*p+o)),f=-u*u+p*(p+2*l)+c;else p<=-_?(u=Math.max(0,-(-a*r+o)),p=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+p*(p+2*l)+c):p<=_?(u=0,p=Math.min(Math.max(-r,-l),r),f=p*(p+2*l)+c):(u=Math.max(0,-(a*r+o)),p=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+p*(p+2*l)+c);else p=a>0?-r:r,u=Math.max(0,-(a*p+o)),f=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(xu).addScaledVector(ll,p),f}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);let n=Ai.dot(this.direction),s=Ai.dot(Ai)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(o=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,n,s,r){vu.subVectors(t,e),cl.subVectors(n,e),yu.crossVectors(vu,cl);let a=this.direction.dot(yu),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zi.subVectors(this.origin,e);let l=o*this.direction.dot(cl.crossVectors(Zi,cl));if(l<0)return null;let c=o*this.direction.dot(vu.cross(Zi));if(c<0||l+c>a)return null;let h=-o*Zi.dot(yu);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qe=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,p,f,_,g,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,p,f,_,g,m)}set(e,t,n,s,r,a,o,l,c,h,u,p,f,_,g,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=p,d[3]=f,d[7]=_,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/vr.setFromMatrixColumn(e,0).length(),r=1/vr.setFromMatrixColumn(e,1).length(),a=1/vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let p=a*h,f=a*u,_=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+_*c,t[5]=p-g*c,t[9]=-o*l,t[2]=g-p*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*h,f=l*u,_=c*h,g=c*u;t[0]=p+g*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-_,t[6]=g+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*h,f=l*u,_=c*h,g=c*u;t[0]=p-g*o,t[4]=-a*u,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*h,t[9]=g-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*h,f=a*u,_=o*h,g=o*u;t[0]=l*h,t[4]=_*c-f,t[8]=p*c+g,t[1]=l*u,t[5]=g*c+p,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*h,t[4]=g-p*u,t[8]=_*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+_,t[10]=p-g*u}else if(e.order==="XZY"){let p=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=p*u+g,t[5]=a*h,t[9]=f*u-_,t[2]=_*u-f,t[6]=o*h,t[10]=g*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ux,e,dx)}lookAt(e,t,n){let s=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),ji.crossVectors(n,Nn),ji.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),ji.crossVectors(n,Nn)),ji.normalize(),hl.crossVectors(Nn,ji),s[0]=ji.x,s[4]=hl.x,s[8]=Nn.x,s[1]=ji.y,s[5]=hl.y,s[9]=Nn.y,s[2]=ji.z,s[6]=hl.z,s[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],p=n[9],f=n[13],_=n[2],g=n[6],m=n[10],d=n[14],x=n[3],v=n[7],y=n[11],S=n[15],M=s[0],w=s[4],A=s[8],b=s[12],E=s[1],D=s[5],R=s[9],N=s[13],F=s[2],z=s[6],B=s[10],H=s[14],O=s[3],W=s[7],K=s[11],ae=s[15];return r[0]=a*M+o*E+l*F+c*O,r[4]=a*w+o*D+l*z+c*W,r[8]=a*A+o*R+l*B+c*K,r[12]=a*b+o*N+l*H+c*ae,r[1]=h*M+u*E+p*F+f*O,r[5]=h*w+u*D+p*z+f*W,r[9]=h*A+u*R+p*B+f*K,r[13]=h*b+u*N+p*H+f*ae,r[2]=_*M+g*E+m*F+d*O,r[6]=_*w+g*D+m*z+d*W,r[10]=_*A+g*R+m*B+d*K,r[14]=_*b+g*N+m*H+d*ae,r[3]=x*M+v*E+y*F+S*O,r[7]=x*w+v*D+y*z+S*W,r[11]=x*A+v*R+y*B+S*K,r[15]=x*b+v*N+y*H+S*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],p=e[10],f=e[14],_=e[3],g=e[7],m=e[11],d=e[15];return _*(+r*l*u-s*c*u-r*o*p+n*c*p+s*o*f-n*l*f)+g*(+t*l*f-t*c*p+r*a*p-s*a*f+s*c*h-r*l*h)+m*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+d*(-s*o*h-t*l*u+t*o*p+s*a*u-n*a*p+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],p=e[10],f=e[11],_=e[12],g=e[13],m=e[14],d=e[15],x=u*m*c-g*p*c+g*l*f-o*m*f-u*l*d+o*p*d,v=_*p*c-h*m*c-_*l*f+a*m*f+h*l*d-a*p*d,y=h*g*c-_*u*c+_*o*f-a*g*f-h*o*d+a*u*d,S=_*u*l-h*g*l-_*o*p+a*g*p+h*o*m-a*u*m,M=t*x+n*v+s*y+r*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/M;return e[0]=x*w,e[1]=(g*p*r-u*m*r-g*s*f+n*m*f+u*s*d-n*p*d)*w,e[2]=(o*m*r-g*l*r+g*s*c-n*m*c-o*s*d+n*l*d)*w,e[3]=(u*l*r-o*p*r-u*s*c+n*p*c+o*s*f-n*l*f)*w,e[4]=v*w,e[5]=(h*m*r-_*p*r+_*s*f-t*m*f-h*s*d+t*p*d)*w,e[6]=(_*l*r-a*m*r-_*s*c+t*m*c+a*s*d-t*l*d)*w,e[7]=(a*p*r-h*l*r+h*s*c-t*p*c-a*s*f+t*l*f)*w,e[8]=y*w,e[9]=(_*u*r-h*g*r-_*n*f+t*g*f+h*n*d-t*u*d)*w,e[10]=(a*g*r-_*o*r+_*n*c-t*g*c-a*n*d+t*o*d)*w,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*w,e[12]=S*w,e[13]=(h*g*s-_*u*s+_*n*p-t*g*p-h*n*m+t*u*m)*w,e[14]=(_*o*s-a*g*s-_*n*l+t*g*l+a*n*m-t*o*m)*w,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*p+t*o*p)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,p=r*c,f=r*h,_=r*u,g=a*h,m=a*u,d=o*u,x=l*c,v=l*h,y=l*u,S=n.x,M=n.y,w=n.z;return s[0]=(1-(g+d))*S,s[1]=(f+y)*S,s[2]=(_-v)*S,s[3]=0,s[4]=(f-y)*M,s[5]=(1-(p+d))*M,s[6]=(m+x)*M,s[7]=0,s[8]=(_+v)*w,s[9]=(m-x)*w,s[10]=(1-(p+g))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=vr.set(s[0],s[1],s[2]).length(),a=vr.set(s[4],s[5],s[6]).length(),o=vr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],li.copy(this);let c=1/r,h=1/a,u=1/o;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=h,li.elements[5]*=h,li.elements[6]*=h,li.elements[8]*=u,li.elements[9]*=u,li.elements[10]*=u,t.setFromRotationMatrix(li),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=hi,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),p=(t+e)/(t-e),f=(n+s)/(n-s),_,g;if(l)_=r/(a-r),g=a*r/(a-r);else if(o===hi)_=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Oa)_=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=hi,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),p=-(t+e)/(t-e),f=-(n+s)/(n-s),_,g;if(l)_=1/(a-r),g=a/(a-r);else if(o===hi)_=-2/(a-r),g=-(a+r)/(a-r);else if(o===Oa)_=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},vr=new I,li=new Qe,ux=new I(0,0,0),dx=new I(1,1,1),ji=new I,hl=new I,Nn=new I,Ip=new Qe,Lp=new yn,Sn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],p=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ip.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ip,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lp.setFromEuler(this),this.setFromQuaternion(Lp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var Ur=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},fx=0,Np=new I,yr=new yn,Ci=new Qe,ul=new I,wa=new I,px=new I,mx=new yn,Up=new I(1,0,0),Fp=new I(0,1,0),Op=new I(0,0,1),Bp={type:"added"},gx={type:"removed"},Sr={type:"childadded",child:null},Su={type:"childremoved",child:null},Dt=class i extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new Sn,n=new yn,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Xe}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(Up,e)}rotateY(e){return this.rotateOnAxis(Fp,e)}rotateZ(e){return this.rotateOnAxis(Op,e)}translateOnAxis(e,t){return Np.copy(e).applyQuaternion(this.quaternion),this.position.add(Np.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Up,e)}translateY(e){return this.translateOnAxis(Fp,e)}translateZ(e){return this.translateOnAxis(Op,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ul.copy(e):ul.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(wa,ul,this.up):Ci.lookAt(ul,wa,this.up),this.quaternion.setFromRotationMatrix(Ci),s&&(Ci.extractRotation(s.matrixWorld),yr.setFromRotationMatrix(Ci),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bp),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gx),Su.child=e,this.dispatchEvent(Su),Su.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bp),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,px),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,mx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),p=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Dt.DEFAULT_UP=new I(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ci=new I,Ri=new I,Mu=new I,Pi=new I,Mr=new I,br=new I,zp=new I,bu=new I,wu=new I,Eu=new I,Tu=new ct,Au=new ct,Cu=new ct,Qi=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ci.subVectors(e,t),s.cross(ci);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ci.subVectors(s,t),Ri.subVectors(n,t),Mu.subVectors(e,t);let a=ci.dot(ci),o=ci.dot(Ri),l=ci.dot(Mu),c=Ri.dot(Ri),h=Ri.dot(Mu),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let p=1/u,f=(c*l-o*h)*p,_=(a*h-o*l)*p;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(a,Pi.y),l.addScaledVector(o,Pi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Tu.setScalar(0),Au.setScalar(0),Cu.setScalar(0),Tu.fromBufferAttribute(e,t),Au.fromBufferAttribute(e,n),Cu.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Tu,r.x),a.addScaledVector(Au,r.y),a.addScaledVector(Cu,r.z),a}static isFrontFacing(e,t,n,s){return ci.subVectors(n,t),Ri.subVectors(e,t),ci.cross(Ri).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),ci.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Mr.subVectors(s,n),br.subVectors(r,n),bu.subVectors(e,n);let l=Mr.dot(bu),c=br.dot(bu);if(l<=0&&c<=0)return t.copy(n);wu.subVectors(e,s);let h=Mr.dot(wu),u=br.dot(wu);if(h>=0&&u<=h)return t.copy(s);let p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Mr,a);Eu.subVectors(e,r);let f=Mr.dot(Eu),_=br.dot(Eu);if(_>=0&&f<=_)return t.copy(r);let g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(br,o);let m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return zp.subVectors(r,s),o=(u-h)/(u-h+(f-_)),t.copy(s).addScaledVector(zp,o);let d=1/(m+g+p);return a=g*d,o=p*d,t.copy(n).addScaledVector(Mr,a).addScaledVector(br,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Bm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},dl={h:0,s:0,l:0};function Ru(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=dd(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ru(a,r,e+1/3),this.g=Ru(a,r,e),this.b=Ru(a,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=Pt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){let n=Bm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return nt.workingToColorSpace(en.copy(this),e),Math.round(Ze(en.r*255,0,255))*65536+Math.round(Ze(en.g*255,0,255))*256+Math.round(Ze(en.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(en.copy(this),t);let n=en.r,s=en.g,r=en.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Pt){nt.workingToColorSpace(en.copy(this),e);let t=en.r,n=en.g,s=en.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(dl);let n=Ia(Ji.h,dl.h,t),s=Ia(Ji.s,dl.s,t),r=Ia(Ji.l,dl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Ge;Ge.NAMES=Bm;var _x=0,di=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Ys(),this.name="",this.type="Material",this.blending=Ns,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pl,this.blendDst=Dl,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(n.blending=this.blending),this.side!==Ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pl&&(n.blendSrc=this.blendSrc),this.blendDst!==Dl&&(n.blendDst=this.blendDst),this.blendEquation!==Fn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Mn=class extends di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Nt=new I,fl=new de,xx=0,vn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gu,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fl.fromBufferAttribute(this,t),fl.applyMatrix3(e),this.setXY(t,fl.x,fl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cr(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cr(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cr(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),s=hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),s=hn(s,this.array),r=hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gu&&(e.usage=this.usage),e}};var ka=class extends vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Va=class extends vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ot=class extends vn{constructor(e,t,n){super(new Float32Array(e),t,n)}},vx=0,jn=new Qe,Pu=new Dt,wr=new I,Un=new fn,Ea=new fn,Wt=new I,xt=class i extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=Ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fd(e)?Va:ka)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return Pu.lookAt(e),Pu.updateMatrix(),this.applyMatrix4(Pu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ot(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ea.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(Un.min,Ea.min),Un.expandByPoint(Wt),Wt.addVectors(Un.max,Ea.max),Un.expandByPoint(Wt)):(Un.expandByPoint(Ea.min),Un.expandByPoint(Ea.max))}Un.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Wt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Wt.fromBufferAttribute(o,c),l&&(wr.fromBufferAttribute(e,c),Wt.add(wr)),s=Math.max(s,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<n.count;A++)o[A]=new I,l[A]=new I;let c=new I,h=new I,u=new I,p=new de,f=new de,_=new de,g=new I,m=new I;function d(A,b,E){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,E),p.fromBufferAttribute(r,A),f.fromBufferAttribute(r,b),_.fromBufferAttribute(r,E),h.sub(c),u.sub(c),f.sub(p),_.sub(p);let D=1/(f.x*_.y-_.x*f.y);isFinite(D)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(D),o[A].add(g),o[b].add(g),o[E].add(g),l[A].add(m),l[b].add(m),l[E].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let A=0,b=x.length;A<b;++A){let E=x[A],D=E.start,R=E.count;for(let N=D,F=D+R;N<F;N+=3)d(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let v=new I,y=new I,S=new I,M=new I;function w(A){S.fromBufferAttribute(s,A),M.copy(S);let b=o[A];v.copy(b),v.sub(S.multiplyScalar(S.dot(b))).normalize(),y.crossVectors(M,b);let D=y.dot(l[A])<0?-1:1;a.setXYZW(A,v.x,v.y,v.z,D)}for(let A=0,b=x.length;A<b;++A){let E=x[A],D=E.start,R=E.count;for(let N=D,F=D+R;N<F;N+=3)w(e.getX(N+0)),w(e.getX(N+1)),w(e.getX(N+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let p=0,f=e.count;p<f;p+=3){let _=e.getX(p+0),g=e.getX(p+1),m=e.getX(p+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=t.count;p<f;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,p=new c.constructor(l.length*h),f=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let d=0;d<h;d++)p[_++]=c[f++]}return new vn(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let p=c[h],f=e(p,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let p=0,f=u.length;p<f;p++)h.push(u[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},kp=new Qe,Ds=new ts,pl=new Li,Vp=new I,ml=new I,gl=new I,_l=new I,Du=new I,xl=new I,Hp=new I,vl=new I,je=class extends Dt{constructor(e=new xt,t=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){xl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Du.fromBufferAttribute(u,e),a?xl.addScaledVector(Du,h):xl.addScaledVector(Du.sub(t),h))}t.add(xl)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pl.copy(n.boundingSphere),pl.applyMatrix4(r),Ds.copy(e.ray).recast(e.near),!(pl.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(pl,Vp)===null||Ds.origin.distanceToSquared(Vp)>(e.far-e.near)**2))&&(kp.copy(r).invert(),Ds.copy(e.ray).applyMatrix4(kp),!(n.boundingBox!==null&&Ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=p.length;_<g;_++){let m=p[_],d=a[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,S=v;y<S;y+=3){let M=o.getX(y),w=o.getX(y+1),A=o.getX(y+2);s=yl(this,d,e,n,c,h,u,M,w,A),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,d=g;m<d;m+=3){let x=o.getX(m),v=o.getX(m+1),y=o.getX(m+2);s=yl(this,a,e,n,c,h,u,x,v,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=p.length;_<g;_++){let m=p[_],d=a[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,S=v;y<S;y+=3){let M=y,w=y+1,A=y+2;s=yl(this,d,e,n,c,h,u,M,w,A),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,d=g;m<d;m+=3){let x=m,v=m+1,y=m+2;s=yl(this,a,e,n,c,h,u,x,v,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function yx(i,e,t,n,s,r,a,o){let l;if(e.side===Yt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ii,o),l===null)return null;vl.copy(o),vl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(vl);return c<t.near||c>t.far?null:{distance:c,point:vl.clone(),object:i}}function yl(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ml),i.getVertexPosition(l,gl),i.getVertexPosition(c,_l);let h=yx(i,e,t,n,ml,gl,_l,Hp);if(h){let u=new I;Qi.getBarycoord(Hp,ml,gl,_l,u),s&&(h.uv=Qi.getInterpolatedAttribute(s,o,l,c,u,new de)),r&&(h.uv1=Qi.getInterpolatedAttribute(r,o,l,c,u,new de)),a&&(h.normal=Qi.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:l,c,normal:new I,materialIndex:0};Qi.getNormal(ml,gl,_l,p.normal),h.face=p,h.barycoord=u}return h}var At=class i extends xt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],p=0,f=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(u,2));function _(g,m,d,x,v,y,S,M,w,A,b){let E=y/w,D=S/A,R=y/2,N=S/2,F=M/2,z=w+1,B=A+1,H=0,O=0,W=new I;for(let K=0;K<B;K++){let ae=K*D-N;for(let re=0;re<z;re++){let we=re*E-R;W[g]=we*x,W[m]=ae*v,W[d]=F,c.push(W.x,W.y,W.z),W[g]=0,W[m]=0,W[d]=M>0?1:-1,h.push(W.x,W.y,W.z),u.push(re/w),u.push(1-K/A),H+=1}}for(let K=0;K<A;K++)for(let ae=0;ae<w;ae++){let re=p+ae+z*K,we=p+ae+z*(K+1),Le=p+(ae+1)+z*(K+1),Oe=p+(ae+1)+z*K;l.push(re,we,Oe),l.push(we,Le,Oe),O+=6}o.addGroup(f,O,b),f+=O,p+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function $s(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function sn(i){let e={};for(let t=0;t<i.length;t++){let n=$s(i[t]);for(let s in n)e[s]=n[s]}return e}function Sx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function pd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var Qn={clone:$s,merge:sn},Mx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,It=class extends di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mx,this.fragmentShader=bx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=Sx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ha=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ki=new I,Gp=new de,Wp=new de,qt=class extends Ha{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(Da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,Gp,Wp),t.subVectors(Wp,Gp)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Da*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Er=-90,Tr=1,Ol=class extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qt(Er,Tr,e,t);s.layers=this.layers,this.add(s);let r=new qt(Er,Tr,e,t);r.layers=this.layers,this.add(r);let a=new qt(Er,Tr,e,t);a.layers=this.layers,this.add(a);let o=new qt(Er,Tr,e,t);o.layers=this.layers,this.add(o);let l=new qt(Er,Tr,e,t);l.layers=this.layers,this.add(l);let c=new qt(Er,Tr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===hi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,p,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Ga=class extends un{constructor(e=[],t=qs,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Bl=class extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ga(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new At(5,5,5),r=new It({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:Ut});r.uniforms.tEquirect.value=t;let a=new je(s,r),o=t.minFilter;return t.minFilter===os&&(t.minFilter=ui),new Ol(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},He=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},wx={type:"move"},Fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new He,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new He,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new He,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),d=this._getHandJoint(c,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&p>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new He;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Os=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var ns=class extends un{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Xt,h=Xt,u,p){super(null,a,o,l,c,h,s,r,u,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wa=class extends vn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ar=new Qe,qp=new Qe,Sl=[],Xp=new fn,Ex=new Qe,Ta=new je,Aa=new Li,Ni=class extends je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ex)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ar),Xp.copy(e.boundingBox).applyMatrix4(Ar),this.boundingBox.union(Xp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Li),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ar),Aa.copy(e.boundingSphere).applyMatrix4(Ar),this.boundingSphere.union(Aa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ta.geometry=this.geometry,Ta.material=this.material,Ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Aa.copy(this.boundingSphere),Aa.applyMatrix4(n),e.ray.intersectsSphere(Aa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ar),qp.multiplyMatrices(n,Ar),Ta.matrixWorld=qp,Ta.raycast(e,Sl);for(let a=0,o=Sl.length;a<o;a++){let l=Sl[a];l.instanceId=r,l.object=this,t.push(l)}Sl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Wa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ns(new Float32Array(s*this.count),s,this.count,Cc,fi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Iu=new I,Tx=new I,Ax=new Xe,Ot=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Iu.subVectors(n,t).cross(Tx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Iu),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ax.getNormalMatrix(e),s=this.coplanarPoint(Iu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Is=new Li,Cx=new de(.5,.5),Ml=new I,Or=class{constructor(e=new Ot,t=new Ot,n=new Ot,s=new Ot,r=new Ot,a=new Ot){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hi,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],p=r[6],f=r[7],_=r[8],g=r[9],m=r[10],d=r[11],x=r[12],v=r[13],y=r[14],S=r[15];if(s[0].setComponents(c-a,f-h,d-_,S-x).normalize(),s[1].setComponents(c+a,f+h,d+_,S+x).normalize(),s[2].setComponents(c+o,f+u,d+g,S+v).normalize(),s[3].setComponents(c-o,f-u,d-g,S-v).normalize(),n)s[4].setComponents(l,p,m,y).normalize(),s[5].setComponents(c-l,f-p,d-m,S-y).normalize();else if(s[4].setComponents(c-l,f-p,d-m,S-y).normalize(),t===hi)s[5].setComponents(c+l,f+p,d+m,S+y).normalize();else if(t===Oa)s[5].setComponents(l,p,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(e){Is.center.set(0,0,0);let t=Cx.distanceTo(e.center);return Is.radius=.7071067811865476+t,Is.applyMatrix4(e.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ml.x=s.normal.x>0?e.max.x:e.min.x,Ml.y=s.normal.y>0?e.max.y:e.min.y,Ml.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Kn=class extends di{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},zl=new I,kl=new I,Yp=new Qe,Ca=new ts,bl=new Li,Lu=new I,$p=new I,Bs=class extends Dt{constructor(e=new xt,t=new Kn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)zl.fromBufferAttribute(t,s-1),kl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=zl.distanceTo(kl);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bl.copy(n.boundingSphere),bl.applyMatrix4(s),bl.radius+=r,e.ray.intersectsSphere(bl)===!1)return;Yp.copy(s).invert(),Ca.copy(e.ray).applyMatrix4(Yp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=c){let d=h.getX(g),x=h.getX(g+1),v=wl(this,e,Ca,l,d,x,g);v&&t.push(v)}if(this.isLineLoop){let g=h.getX(_-1),m=h.getX(f),d=wl(this,e,Ca,l,g,m,_-1);d&&t.push(d)}}else{let f=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=c){let d=wl(this,e,Ca,l,g,g+1,g);d&&t.push(d)}if(this.isLineLoop){let g=wl(this,e,Ca,l,_-1,f,_-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function wl(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(zl.fromBufferAttribute(o,s),kl.fromBufferAttribute(o,r),t.distanceSqToSegment(zl,kl,Lu,$p)>n)return;Lu.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Lu);if(!(c<e.near||c>e.far))return{distance:c,point:$p.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Zp=new I,jp=new I,qa=class extends Bs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Zp.fromBufferAttribute(t,s),jp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Zp.distanceTo(jp);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ui=class extends Bs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};var Fi=class extends un{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},zs=class extends un{constructor(e,t,n=ls,s,r,a,o=Xt,l=Xt,c,h=Dr,u=1){if(h!==Dr&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:u};super(p,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Xa=class extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var ks=class i extends xt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],p=[],f=[],_=0,g=[],m=n/2,d=0;x(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ot(u,3)),this.setAttribute("normal",new ot(p,3)),this.setAttribute("uv",new ot(f,2));function x(){let y=new I,S=new I,M=0,w=(t-e)/n;for(let A=0;A<=r;A++){let b=[],E=A/r,D=E*(t-e)+e;for(let R=0;R<=s;R++){let N=R/s,F=N*l+o,z=Math.sin(F),B=Math.cos(F);S.x=D*z,S.y=-E*n+m,S.z=D*B,u.push(S.x,S.y,S.z),y.set(z,w,B).normalize(),p.push(y.x,y.y,y.z),f.push(N,1-E),b.push(_++)}g.push(b)}for(let A=0;A<s;A++)for(let b=0;b<r;b++){let E=g[b][A],D=g[b+1][A],R=g[b+1][A+1],N=g[b][A+1];(e>0||b!==0)&&(h.push(E,D,N),M+=3),(t>0||b!==r-1)&&(h.push(D,R,N),M+=3)}c.addGroup(d,M,0),d+=M}function v(y){let S=_,M=new de,w=new I,A=0,b=y===!0?e:t,E=y===!0?1:-1;for(let R=1;R<=s;R++)u.push(0,m*E,0),p.push(0,E,0),f.push(.5,.5),_++;let D=_;for(let R=0;R<=s;R++){let F=R/s*l+o,z=Math.cos(F),B=Math.sin(F);w.x=b*B,w.y=m*E,w.z=b*z,u.push(w.x,w.y,w.z),p.push(0,E,0),M.x=z*.5+.5,M.y=B*.5*E+.5,f.push(M.x,M.y),_++}for(let R=0;R<s;R++){let N=S+R,F=D+R;y===!0?h.push(F,F+1,N):h.push(F+1,F,N),A+=3}c.addGroup(d,A,y===!0?1:2),d+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var On=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],p=n[s+1]-h,f=(a-h)/p;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new de:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,s=[],r=[],a=[],o=new I,l=new Qe;for(let f=0;f<=e;f++){let _=f/e;s[f]=this.getTangentAt(_,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(Ze(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ze(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],f*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Br=class extends On{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new de){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,f=c-this.aY;l=p*h-f*u+this.aX,c=p*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Vl=class extends Br{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function md(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let p=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;p*=h,f*=h,s(a,o,p,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var El=new I,Nu=new md,Uu=new md,Fu=new md,Hl=class extends On{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(El.subVectors(s[0],s[1]).add(s[0]),c=El);let u=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(El.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=El),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(p),f),m=Math.pow(p.distanceToSquared(h),f);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),Nu.initNonuniformCatmullRom(c.x,u.x,p.x,h.x,_,g,m),Uu.initNonuniformCatmullRom(c.y,u.y,p.y,h.y,_,g,m),Fu.initNonuniformCatmullRom(c.z,u.z,p.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(Nu.initCatmullRom(c.x,u.x,p.x,h.x,this.tension),Uu.initCatmullRom(c.y,u.y,p.y,h.y,this.tension),Fu.initCatmullRom(c.z,u.z,p.z,h.z,this.tension));return n.set(Nu.calc(l),Uu.calc(l),Fu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Jp(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Rx(i,e){let t=1-i;return t*t*e}function Px(i,e){return 2*(1-i)*i*e}function Dx(i,e){return i*i*e}function La(i,e,t,n){return Rx(i,e)+Px(i,t)+Dx(i,n)}function Ix(i,e){let t=1-i;return t*t*t*e}function Lx(i,e){let t=1-i;return 3*t*t*i*e}function Nx(i,e){return 3*(1-i)*i*i*e}function Ux(i,e){return i*i*i*e}function Na(i,e,t,n,s){return Ix(i,e)+Lx(i,t)+Nx(i,n)+Ux(i,s)}var Ya=class extends On{constructor(e=new de,t=new de,n=new de,s=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new de){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Na(e,s.x,r.x,a.x,o.x),Na(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Gl=class extends On{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Na(e,s.x,r.x,a.x,o.x),Na(e,s.y,r.y,a.y,o.y),Na(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$a=class extends On{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wl=class extends On{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Za=class extends On{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(La(e,s.x,r.x,a.x),La(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ql=class extends On{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(La(e,s.x,r.x,a.x),La(e,s.y,r.y,a.y),La(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ja=class extends On{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Jp(o,l.x,c.x,h.x,u.x),Jp(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new de().fromArray(s))}return this}},Kp=Object.freeze({__proto__:null,ArcCurve:Vl,CatmullRomCurve3:Hl,CubicBezierCurve:Ya,CubicBezierCurve3:Gl,EllipseCurve:Br,LineCurve:$a,LineCurve3:Wl,QuadraticBezierCurve:Za,QuadraticBezierCurve3:ql,SplineCurve:ja}),Xl=class extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kp[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Kp[s.type]().fromJSON(s))}return this}},Ja=class extends Xl{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new $a(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Za(this.currentPoint.clone(),new de(e,t),new de(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ya(this.currentPoint.clone(),new de(e,t),new de(n,s),new de(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ja(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Br(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},zr=class extends Ja{constructor(e){super(e),this.uuid=Ys(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ja().fromJSON(s))}return this}};function Fx(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=zm(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Vx(i,e,r,t)),i.length>80*t){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let p=t;p<s;p+=t){let f=i[p],_=i[p+1];f<o&&(o=f),_<l&&(l=_),f>h&&(h=f),_>u&&(u=_)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Ka(r,a,t,o,l,c,0),a}function zm(i,e,t,n,s){let r;if(s===Kx(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Qp(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Qp(a/n|0,i[a],i[a+1],r);return r&&kr(r,r.next)&&(eo(r),r=r.next),r}function Vs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(kr(t,t.next)||Mt(t.prev,t,t.next)===0)){if(eo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ka(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Xx(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Bx(i,n,s,r):Ox(i)){e.push(l.i,i.i,c.i),eo(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=zx(Vs(i),e),Ka(i,e,t,n,s,r,2)):a===2&&kx(i,e,t,n,s,r):Ka(Vs(i),e,t,n,s,r,1);break}}}function Ox(i){let e=i.prev,t=i,n=i.next;if(Mt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),p=Math.max(s,r,a),f=Math.max(o,l,c),_=n.next;for(;_!==e;){if(_.x>=h&&_.x<=p&&_.y>=u&&_.y<=f&&Pa(s,o,r,l,a,c,_.x,_.y)&&Mt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Bx(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Mt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,p=a.y,f=Math.min(o,l,c),_=Math.min(h,u,p),g=Math.max(o,l,c),m=Math.max(h,u,p),d=Wu(f,_,e,t,n),x=Wu(g,m,e,t,n),v=i.prevZ,y=i.nextZ;for(;v&&v.z>=d&&y&&y.z<=x;){if(v.x>=f&&v.x<=g&&v.y>=_&&v.y<=m&&v!==s&&v!==a&&Pa(o,h,l,u,c,p,v.x,v.y)&&Mt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=g&&y.y>=_&&y.y<=m&&y!==s&&y!==a&&Pa(o,h,l,u,c,p,y.x,y.y)&&Mt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=d;){if(v.x>=f&&v.x<=g&&v.y>=_&&v.y<=m&&v!==s&&v!==a&&Pa(o,h,l,u,c,p,v.x,v.y)&&Mt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=f&&y.x<=g&&y.y>=_&&y.y<=m&&y!==s&&y!==a&&Pa(o,h,l,u,c,p,y.x,y.y)&&Mt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function zx(i,e){let t=i;do{let n=t.prev,s=t.next.next;!kr(n,s)&&Vm(n,t,t.next,s)&&Qa(n,s)&&Qa(s,n)&&(e.push(n.i,t.i,s.i),eo(t),eo(t.next),t=i=s),t=t.next}while(t!==i);return Vs(t)}function kx(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Zx(a,o)){let l=Hm(a,o);a=Vs(a,a.next),l=Vs(l,l.next),Ka(a,e,t,n,s,r,0),Ka(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Vx(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=zm(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push($x(c))}s.sort(Hx);for(let r=0;r<s.length;r++)t=Gx(s[r],t);return t}function Hx(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Gx(i,e){let t=Wx(i,e);if(!t)return e;let n=Hm(t,i);return Vs(n,n.next),Vs(t,t.next)}function Wx(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(kr(i,t))return t;do{if(kr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&km(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Qa(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&qx(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function qx(i,e){return Mt(i.prev,i,e.prev)<0&&Mt(e.next,i,i.next)<0}function Xx(i,e,t,n){let s=i;do s.z===0&&(s.z=Wu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Yx(s)}function Yx(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Wu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function $x(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function km(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Pa(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&km(i,e,t,n,s,r,a,o)}function Zx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!jx(i,e)&&(Qa(i,e)&&Qa(e,i)&&Jx(i,e)&&(Mt(i.prev,i,e.prev)||Mt(i,e.prev,e))||kr(i,e)&&Mt(i.prev,i,i.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function kr(i,e){return i.x===e.x&&i.y===e.y}function Vm(i,e,t,n){let s=Al(Mt(i,e,t)),r=Al(Mt(i,e,n)),a=Al(Mt(t,n,i)),o=Al(Mt(t,n,e));return!!(s!==r&&a!==o||s===0&&Tl(i,t,e)||r===0&&Tl(i,n,e)||a===0&&Tl(t,i,n)||o===0&&Tl(t,e,n))}function Tl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Al(i){return i>0?1:i<0?-1:0}function jx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Vm(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Qa(i,e){return Mt(i.prev,i,i.next)<0?Mt(i,e,i.next)>=0&&Mt(i,i.prev,e)>=0:Mt(i,e,i.prev)<0||Mt(i,i.next,e)<0}function Jx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Hm(i,e){let t=qu(i.i,i.x,i.y),n=qu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Qp(i,e,t,n){let s=qu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function eo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function qu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Kx(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Xu=class{static triangulate(e,t,n=2){return Fx(e,t,n)}},Pr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];em(e),tm(n,e);let a=e.length;t.forEach(em);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,tm(n,t[l]);let o=Xu.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function em(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function tm(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Bn=class i extends xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,p=t/l,f=[],_=[],g=[],m=[];for(let d=0;d<h;d++){let x=d*p-a;for(let v=0;v<c;v++){let y=v*u-r;_.push(y,-x,0),g.push(0,0,1),m.push(v/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<o;x++){let v=x+c*d,y=x+c*(d+1),S=x+1+c*(d+1),M=x+1+c*d;f.push(v,y,M),f.push(y,S,M)}this.setIndex(f),this.setAttribute("position",new ot(_,3)),this.setAttribute("normal",new ot(g,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var to=class i extends xt{constructor(e=new zr([new de(0,.5),new de(-.5,-.5),new de(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ot(s,3)),this.setAttribute("normal",new ot(r,3)),this.setAttribute("uv",new ot(a,2));function c(h){let u=s.length/3,p=h.extractPoints(t),f=p.shape,_=p.holes;Pr.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,d=_.length;m<d;m++){let x=_[m];Pr.isClockWise(x)===!0&&(_[m]=x.reverse())}let g=Pr.triangulateShape(f,_);for(let m=0,d=_.length;m<d;m++){let x=_[m];f=f.concat(x)}for(let m=0,d=f.length;m<d;m++){let x=f[m];s.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let m=0,d=g.length;m<d;m++){let x=g[m],v=x[0]+u,y=x[1]+u,S=x[2]+u;n.push(v,y,S),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Qx(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function Qx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var no=class i extends xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new I,p=new I,f=[],_=[],g=[],m=[];for(let d=0;d<=n;d++){let x=[],v=d/n,y=0;d===0&&a===0?y=.5/t:d===n&&l===Math.PI&&(y=-.5/t);for(let S=0;S<=t;S++){let M=S/t;u.x=-e*Math.cos(s+M*r)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(s+M*r)*Math.sin(a+v*o),_.push(u.x,u.y,u.z),p.copy(u).normalize(),g.push(p.x,p.y,p.z),m.push(M+y,1-v),x.push(c++)}h.push(x)}for(let d=0;d<n;d++)for(let x=0;x<t;x++){let v=h[d][x+1],y=h[d][x],S=h[d+1][x],M=h[d+1][x+1];(d!==0||a>0)&&f.push(v,y,M),(d!==n-1||l<Math.PI)&&f.push(y,S,M)}this.setIndex(f),this.setAttribute("position",new ot(_,3)),this.setAttribute("normal",new ot(g,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var io=class i extends xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new I,u=new I,p=new I;for(let f=0;f<=n;f++)for(let _=0;_<=s;_++){let g=_/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(g),u.y=(e+t*Math.cos(m))*Math.sin(g),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),p.subVectors(u,h).normalize(),l.push(p.x,p.y,p.z),c.push(_/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=s;_++){let g=(s+1)*f+_-1,m=(s+1)*(f-1)+_-1,d=(s+1)*(f-1)+_,x=(s+1)*f+_;a.push(g,m,x),a.push(m,d,x)}this.setIndex(a),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var so=class extends It{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},tn=class extends di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ro=class extends di{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},ao=class extends di{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yl=class extends di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$l=class extends di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Cl(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ev(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Hs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Zl=class extends Hs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zu,endingEnd:zu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ku:r=e,o=2*t-n;break;case Vu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ku:a=e,l=2*n-t;break;case Vu:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,f=this._weightNext,_=(n-t)/(s-t),g=_*_,m=g*_,d=-p*m+2*p*g-p*_,x=(1+p)*m+(-1.5-2*p)*g+(-.5+p)*_+1,v=(-1-f)*m+(1.5+f)*g+.5*_,y=f*m-f*g;for(let S=0;S!==o;++S)r[S]=d*a[h+S]+x*a[c+S]+v*a[l+S]+y*a[u+S];return r}},jl=class extends Hs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let p=0;p!==o;++p)r[p]=a[c+p]*u+a[l+p]*h;return r}},Jl=class extends Hs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},zn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Cl(t,this.TimeBufferType),this.values=Cl(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Cl(e.times,Array),values:Cl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ua:t=this.InterpolantFactoryMethodDiscrete;break;case Ll:t=this.InterpolantFactoryMethodLinear;break;case Rl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ua;case this.InterpolantFactoryMethodLinear:return Ll;case this.InterpolantFactoryMethodSmooth:return Rl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&ev(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Rl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,p=u-n,f=u+n;for(let _=0;_!==n;++_){let g=t[u+_];if(g!==t[p+_]||g!==t[f+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,p=a*n;for(let f=0;f!==n;++f)t[p+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=Ll;var is=class extends zn{constructor(e,t,n){super(e,t,n)}};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Ua;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Kl=class extends zn{constructor(e,t,n,s){super(e,t,n,s)}};Kl.prototype.ValueTypeName="color";var Ql=class extends zn{constructor(e,t,n,s){super(e,t,n,s)}};Ql.prototype.ValueTypeName="number";var ec=class extends Hs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)yn.slerpFlat(r,0,a,c-o,a,c,l);return r}},oo=class extends zn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ec(this.times,this.values,this.getValueSize(),e)}};oo.prototype.ValueTypeName="quaternion";oo.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends zn{constructor(e,t,n){super(e,t,n)}};ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Ua;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var tc=class extends zn{constructor(e,t,n,s){super(e,t,n,s)}};tc.prototype.ValueTypeName="vector";var nc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){let f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Gm=new nc,ic=class{constructor(e){this.manager=e!==void 0?e:Gm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ic.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vr=class extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},lo=class extends Vr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ou=new Qe,nm=new I,im=new I,sc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Or,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;nm.setFromMatrixPosition(e.matrixWorld),t.position.copy(nm),im.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(im),t.updateMatrixWorld(),Ou.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ou,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ou)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var sm=new Qe,Ra=new I,Bu=new I,Yu=class extends sc{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new de(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ra.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ra),Bu.copy(n.position),Bu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Bu),n.updateMatrixWorld(),s.makeTranslation(-Ra.x,-Ra.y,-Ra.z),sm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sm,n.coordinateSystem,n.reversedDepth)}},co=class extends Vr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Yu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Gs=class extends Ha{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$u=class extends sc{constructor(){super(new Gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ho=class extends Vr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new $u}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var rc=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},uo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var gd="\\[\\]\\.:\\/",tv=new RegExp("["+gd+"]","g"),_d="[^"+gd+"]",nv="[^"+gd.replace("\\.","")+"]",iv=/((?:WC+[\/:])*)/.source.replace("WC",_d),sv=/(WCOD+)?/.source.replace("WCOD",nv),rv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_d),av=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_d),ov=new RegExp("^"+iv+sv+rv+av+"$"),lv=["material","materials","bones","map"],Zu=class{constructor(e,t,n){let s=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},_t=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tv,"")}static parseTrackName(e){let t=ov.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);lv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=Zu;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var UE=new Float32Array(1);var rm=new Qe,fo=class{constructor(e,t,n=0,s=1/0){this.ray=new ts(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ur,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return rm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rm),this}intersectObject(e,t=!0,n=[]){return ju(e,this,n,t),n.sort(am),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ju(e[s],this,n,t);return n.sort(am),n}};function am(i,e){return i.distance-e.distance}function ju(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)ju(r[a],e,t,!0)}}var Hr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var po=class extends _i{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function xd(i,e,t,n){let s=cv(n);switch(t){case od:return i*e;case Cc:return i*e/s.components*s.byteLength;case Rc:return i*e/s.components*s.byteLength;case cd:return i*e*2/s.components*s.byteLength;case Pc:return i*e*2/s.components*s.byteLength;case ld:return i*e*3/s.components*s.byteLength;case bn:return i*e*4/s.components*s.byteLength;case Dc:return i*e*4/s.components*s.byteLength;case vo:case yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case So:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lc:case Uc:return Math.max(i,16)*Math.max(e,8)/4;case Ic:case Nc:return Math.max(i,8)*Math.max(e,8)/2;case Fc:case Oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Vc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case qc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case $c:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case jc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Jc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Kc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Qc:case eh:case th:return Math.ceil(i/4)*Math.ceil(e/4)*16;case nh:case ih:return Math.ceil(i/4)*Math.ceil(e/4)*8;case sh:case rh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cv(i){switch(i){case kn:case id:return{byteLength:1,components:1};case Wr:case sd:case pi:return{byteLength:2,components:1};case Tc:case Ac:return{byteLength:2,components:4};case ls:case Ec:case fi:return{byteLength:4,components:1};case rd:case ad:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function f0(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function uv(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let p=0;for(let f=1;f<u.length;f++){let _=u[p],g=u[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++p,u[p]=g)}u.length=p+1;for(let f=0,_=u.length;f<_;f++){let g=u[f];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var dv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fv=`#ifdef USE_ALPHAHASH
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
#endif`,pv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_v=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xv=`#ifdef USE_AOMAP
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
#endif`,vv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yv=`#ifdef USE_BATCHING
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
#endif`,Sv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ev=`#ifdef USE_IRIDESCENCE
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
#endif`,Tv=`#ifdef USE_BUMPMAP
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
#endif`,Av=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Iv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Uv=`#define PI 3.141592653589793
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
} // validated`,Fv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ov=`vec3 transformedNormal = objectNormal;
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
#endif`,Bv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wv=`#ifdef USE_ENVMAP
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
#endif`,qv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xv=`#ifdef USE_ENVMAP
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
#endif`,Yv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$v=`#ifdef USE_ENVMAP
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
#endif`,Zv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qv=`#ifdef USE_GRADIENTMAP
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
}`,ey=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ty=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ny=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iy=`uniform bool receiveShadow;
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
#endif`,sy=`#ifdef USE_ENVMAP
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
#endif`,ry=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cy=`PhysicalMaterial material;
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
#endif`,hy=`struct PhysicalMaterial {
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
}`,uy=`
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
#endif`,dy=`#if defined( RE_IndirectDiffuse )
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
#endif`,fy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,py=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,my=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_y=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sy=`#if defined( USE_POINTS_UV )
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
#endif`,My=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,by=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ey=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ty=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ay=`#ifdef USE_MORPHTARGETS
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
#endif`,Cy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ry=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Py=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ly=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ny=`#ifdef USE_NORMALMAP
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
#endif`,Uy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Oy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,By=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ky=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$y=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jy=`float getShadowMask() {
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
}`,Jy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ky=`#ifdef USE_SKINNING
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
#endif`,Qy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eS=`#ifdef USE_SKINNING
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
#endif`,tS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rS=`#ifdef USE_TRANSMISSION
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
#endif`,aS=`#ifdef USE_TRANSMISSION
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
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,uS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dS=`uniform sampler2D t2D;
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
}`,fS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_S=`#include <common>
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
}`,xS=`#if DEPTH_PACKING == 3200
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
}`,vS=`#define DISTANCE
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
}`,yS=`#define DISTANCE
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
}`,SS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bS=`uniform float scale;
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
}`,wS=`uniform vec3 diffuse;
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
}`,ES=`#include <common>
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
}`,TS=`uniform vec3 diffuse;
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
}`,AS=`#define LAMBERT
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
}`,CS=`#define LAMBERT
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
}`,RS=`#define MATCAP
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
}`,PS=`#define MATCAP
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
}`,DS=`#define NORMAL
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
}`,IS=`#define NORMAL
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
}`,LS=`#define PHONG
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
}`,NS=`#define PHONG
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
}`,US=`#define STANDARD
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
}`,FS=`#define STANDARD
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
}`,OS=`#define TOON
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
}`,BS=`#define TOON
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
}`,zS=`uniform float size;
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
}`,kS=`uniform vec3 diffuse;
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
}`,VS=`#include <common>
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
}`,HS=`uniform vec3 color;
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
}`,GS=`uniform float rotation;
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
}`,WS=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:dv,alphahash_pars_fragment:fv,alphamap_fragment:pv,alphamap_pars_fragment:mv,alphatest_fragment:gv,alphatest_pars_fragment:_v,aomap_fragment:xv,aomap_pars_fragment:vv,batching_pars_vertex:yv,batching_vertex:Sv,begin_vertex:Mv,beginnormal_vertex:bv,bsdfs:wv,iridescence_fragment:Ev,bumpmap_pars_fragment:Tv,clipping_planes_fragment:Av,clipping_planes_pars_fragment:Cv,clipping_planes_pars_vertex:Rv,clipping_planes_vertex:Pv,color_fragment:Dv,color_pars_fragment:Iv,color_pars_vertex:Lv,color_vertex:Nv,common:Uv,cube_uv_reflection_fragment:Fv,defaultnormal_vertex:Ov,displacementmap_pars_vertex:Bv,displacementmap_vertex:zv,emissivemap_fragment:kv,emissivemap_pars_fragment:Vv,colorspace_fragment:Hv,colorspace_pars_fragment:Gv,envmap_fragment:Wv,envmap_common_pars_fragment:qv,envmap_pars_fragment:Xv,envmap_pars_vertex:Yv,envmap_physical_pars_fragment:sy,envmap_vertex:$v,fog_vertex:Zv,fog_pars_vertex:jv,fog_fragment:Jv,fog_pars_fragment:Kv,gradientmap_pars_fragment:Qv,lightmap_pars_fragment:ey,lights_lambert_fragment:ty,lights_lambert_pars_fragment:ny,lights_pars_begin:iy,lights_toon_fragment:ry,lights_toon_pars_fragment:ay,lights_phong_fragment:oy,lights_phong_pars_fragment:ly,lights_physical_fragment:cy,lights_physical_pars_fragment:hy,lights_fragment_begin:uy,lights_fragment_maps:dy,lights_fragment_end:fy,logdepthbuf_fragment:py,logdepthbuf_pars_fragment:my,logdepthbuf_pars_vertex:gy,logdepthbuf_vertex:_y,map_fragment:xy,map_pars_fragment:vy,map_particle_fragment:yy,map_particle_pars_fragment:Sy,metalnessmap_fragment:My,metalnessmap_pars_fragment:by,morphinstance_vertex:wy,morphcolor_vertex:Ey,morphnormal_vertex:Ty,morphtarget_pars_vertex:Ay,morphtarget_vertex:Cy,normal_fragment_begin:Ry,normal_fragment_maps:Py,normal_pars_fragment:Dy,normal_pars_vertex:Iy,normal_vertex:Ly,normalmap_pars_fragment:Ny,clearcoat_normal_fragment_begin:Uy,clearcoat_normal_fragment_maps:Fy,clearcoat_pars_fragment:Oy,iridescence_pars_fragment:By,opaque_fragment:zy,packing:ky,premultiplied_alpha_fragment:Vy,project_vertex:Hy,dithering_fragment:Gy,dithering_pars_fragment:Wy,roughnessmap_fragment:qy,roughnessmap_pars_fragment:Xy,shadowmap_pars_fragment:Yy,shadowmap_pars_vertex:$y,shadowmap_vertex:Zy,shadowmask_pars_fragment:jy,skinbase_vertex:Jy,skinning_pars_vertex:Ky,skinning_vertex:Qy,skinnormal_vertex:eS,specularmap_fragment:tS,specularmap_pars_fragment:nS,tonemapping_fragment:iS,tonemapping_pars_fragment:sS,transmission_fragment:rS,transmission_pars_fragment:aS,uv_pars_fragment:oS,uv_pars_vertex:lS,uv_vertex:cS,worldpos_vertex:hS,background_vert:uS,background_frag:dS,backgroundCube_vert:fS,backgroundCube_frag:pS,cube_vert:mS,cube_frag:gS,depth_vert:_S,depth_frag:xS,distanceRGBA_vert:vS,distanceRGBA_frag:yS,equirect_vert:SS,equirect_frag:MS,linedashed_vert:bS,linedashed_frag:wS,meshbasic_vert:ES,meshbasic_frag:TS,meshlambert_vert:AS,meshlambert_frag:CS,meshmatcap_vert:RS,meshmatcap_frag:PS,meshnormal_vert:DS,meshnormal_frag:IS,meshphong_vert:LS,meshphong_frag:NS,meshphysical_vert:US,meshphysical_frag:FS,meshtoon_vert:OS,meshtoon_frag:BS,points_vert:zS,points_frag:kS,shadow_vert:VS,shadow_frag:HS,sprite_vert:GS,sprite_frag:WS},_e={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},vi={basic:{uniforms:sn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:sn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:sn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:sn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:sn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:sn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:sn([_e.points,_e.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:sn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:sn([_e.common,_e.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:sn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:sn([_e.sprite,_e.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:sn([_e.common,_e.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:sn([_e.lights,_e.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};vi.physical={uniforms:sn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var ah={r:0,b:0,g:0},Zs=new Sn,qS=new Qe;function XS(i,e,t,n,s,r,a){let o=new Ge(0),l=r===!0?0:1,c,h,u=null,p=0,f=null;function _(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function g(v){let y=!1,S=_(v);S===null?d(o,l):S&&S.isColor&&(d(S,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,y){let S=_(y);S&&(S.isCubeTexture||S.mapping===_o)?(h===void 0&&(h=new je(new At(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:$s(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Zs.copy(y.backgroundRotation),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qS.makeRotationFromEuler(Zs)),h.material.toneMapped=nt.getTransfer(S.colorSpace)!==at,(u!==S||p!==S.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,p=S.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new je(new Bn(2,2),new It({name:"BackgroundMaterial",uniforms:$s(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=nt.getTransfer(S.colorSpace)!==at,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||p!==S.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,p=S.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function d(v,y){v.getRGB(ah,pd(i)),n.buffers.color.setClear(ah.r,ah.g,ah.b,y,a)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),l=y,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(o,l)},render:g,addToRenderList:m,dispose:x}}function YS(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(E,D,R,N,F){let z=!1,B=u(N,R,D);r!==B&&(r=B,c(r.object)),z=f(E,N,R,F),z&&_(E,N,R,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,y(E,D,R,N),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function u(E,D,R){let N=R.wireframe===!0,F=n[E.id];F===void 0&&(F={},n[E.id]=F);let z=F[D.id];z===void 0&&(z={},F[D.id]=z);let B=z[N];return B===void 0&&(B=p(l()),z[N]=B),B}function p(E){let D=[],R=[],N=[];for(let F=0;F<t;F++)D[F]=0,R[F]=0,N[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:R,attributeDivisors:N,object:E,attributes:{},index:null}}function f(E,D,R,N){let F=r.attributes,z=D.attributes,B=0,H=R.getAttributes();for(let O in H)if(H[O].location>=0){let K=F[O],ae=z[O];if(ae===void 0&&(O==="instanceMatrix"&&E.instanceMatrix&&(ae=E.instanceMatrix),O==="instanceColor"&&E.instanceColor&&(ae=E.instanceColor)),K===void 0||K.attribute!==ae||ae&&K.data!==ae.data)return!0;B++}return r.attributesNum!==B||r.index!==N}function _(E,D,R,N){let F={},z=D.attributes,B=0,H=R.getAttributes();for(let O in H)if(H[O].location>=0){let K=z[O];K===void 0&&(O==="instanceMatrix"&&E.instanceMatrix&&(K=E.instanceMatrix),O==="instanceColor"&&E.instanceColor&&(K=E.instanceColor));let ae={};ae.attribute=K,K&&K.data&&(ae.data=K.data),F[O]=ae,B++}r.attributes=F,r.attributesNum=B,r.index=N}function g(){let E=r.newAttributes;for(let D=0,R=E.length;D<R;D++)E[D]=0}function m(E){d(E,0)}function d(E,D){let R=r.newAttributes,N=r.enabledAttributes,F=r.attributeDivisors;R[E]=1,N[E]===0&&(i.enableVertexAttribArray(E),N[E]=1),F[E]!==D&&(i.vertexAttribDivisor(E,D),F[E]=D)}function x(){let E=r.newAttributes,D=r.enabledAttributes;for(let R=0,N=D.length;R<N;R++)D[R]!==E[R]&&(i.disableVertexAttribArray(R),D[R]=0)}function v(E,D,R,N,F,z,B){B===!0?i.vertexAttribIPointer(E,D,R,F,z):i.vertexAttribPointer(E,D,R,N,F,z)}function y(E,D,R,N){g();let F=N.attributes,z=R.getAttributes(),B=D.defaultAttributeValues;for(let H in z){let O=z[H];if(O.location>=0){let W=F[H];if(W===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(W=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(W=E.instanceColor)),W!==void 0){let K=W.normalized,ae=W.itemSize,re=e.get(W);if(re===void 0)continue;let we=re.buffer,Le=re.type,Oe=re.bytesPerElement,Q=Le===i.INT||Le===i.UNSIGNED_INT||W.gpuType===Ec;if(W.isInterleavedBufferAttribute){let te=W.data,j=te.stride,me=W.offset;if(te.isInstancedInterleavedBuffer){for(let se=0;se<O.locationSize;se++)d(O.location+se,te.meshPerAttribute);E.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let se=0;se<O.locationSize;se++)m(O.location+se);i.bindBuffer(i.ARRAY_BUFFER,we);for(let se=0;se<O.locationSize;se++)v(O.location+se,ae/O.locationSize,Le,K,j*Oe,(me+ae/O.locationSize*se)*Oe,Q)}else{if(W.isInstancedBufferAttribute){for(let te=0;te<O.locationSize;te++)d(O.location+te,W.meshPerAttribute);E.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let te=0;te<O.locationSize;te++)m(O.location+te);i.bindBuffer(i.ARRAY_BUFFER,we);for(let te=0;te<O.locationSize;te++)v(O.location+te,ae/O.locationSize,Le,K,ae*Oe,ae/O.locationSize*te*Oe,Q)}}else if(B!==void 0){let K=B[H];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(O.location,K);break;case 3:i.vertexAttrib3fv(O.location,K);break;case 4:i.vertexAttrib4fv(O.location,K);break;default:i.vertexAttrib1fv(O.location,K)}}}}x()}function S(){A();for(let E in n){let D=n[E];for(let R in D){let N=D[R];for(let F in N)h(N[F].object),delete N[F];delete D[R]}delete n[E]}}function M(E){if(n[E.id]===void 0)return;let D=n[E.id];for(let R in D){let N=D[R];for(let F in N)h(N[F].object),delete N[F];delete D[R]}delete n[E.id]}function w(E){for(let D in n){let R=n[D];if(R[E.id]===void 0)continue;let N=R[E.id];for(let F in N)h(N[F].object),delete N[F];delete R[E.id]}}function A(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:b,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function $S(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];t.update(f,n,1)}function l(c,h,u,p){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],h[_],p[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*p[g];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ZS(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==bn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let A=w===pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==kn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==fi&&!A)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=_>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:S,maxSamples:M}}function jS(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Ot,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let f=u.length!==0||p||n!==0||s;return s=p,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,f){let _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{let x=r?0:n,v=x*4,y=d.clippingState||null;l.value=y,y=h(_,p,v,f);for(let S=0;S!==v;++S)y[S]=t[S];d.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,p,f,_){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let d=f+g*4,x=p.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,y=f;v!==g;++v,y+=4)a.copy(u[v]).applyMatrix4(x,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function JS(i){let e=new WeakMap;function t(a,o){return o===Mc?a.mapping=qs:o===bc&&(a.mapping=Xs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Mc||o===bc)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Bl(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Yr=4,Wm=[.125,.215,.35,.446,.526,.582],Ks=20,vd=new Gs,qm=new Ge,yd=null,Sd=0,Md=0,bd=!1,Js=(1+Math.sqrt(5))/2,Xr=1/Js,Xm=[new I(-Js,Xr,0),new I(Js,Xr,0),new I(-Xr,0,Js),new I(Xr,0,Js),new I(0,Js,-Xr),new I(0,Js,Xr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],KS=new I,Zr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=KS}=r;yd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$m(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yd,Sd,Md),this._renderer.xr.enabled=bd,e.scissorTest=!1,oh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:pi,format:bn,colorSpace:Fs,depthBuffer:!1},s=Ym(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ym(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=QS(r)),this._blurMaterial=eM(r,e,t)}return s}_compileMaterial(e){let t=new je(this._lodPlanes[0],e);this._renderer.compile(t,vd)}_sceneToCubeUV(e,t,n,s,r){let l=new qt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,f=u.toneMapping;u.getClearColor(qm),u.toneMapping=Oi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let g=new Mn({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),m=new je(new At,g),d=!1,x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,d=!0):(g.color.copy(qm),d=!0);for(let v=0;v<6;v++){let y=v%3;y===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[v],r.y,r.z)):y===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[v]));let S=this._cubeSize;oh(s,y*S,v>2?S:0,S,S),u.setRenderTarget(s),d&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=p,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===qs||e.mapping===Xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$m());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new je(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;oh(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,vd)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Xm[(s-r-1)%Xm.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new je(this._lodPlanes[s],c),p=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ks-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):Ks;m>Ks&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ks}`);let d=[],x=0;for(let w=0;w<Ks;++w){let A=w/g,b=Math.exp(-A*A/2);d.push(b),w===0?x+=b:w<m&&(x+=2*b)}for(let w=0;w<d.length;w++)d[w]=d[w]/x;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:v}=this;p.dTheta.value=_,p.mipInt.value=v-n;let y=this._sizeLods[s],S=3*y*(s>v-Yr?s-v+Yr:0),M=4*(this._cubeSize-y);oh(t,S,M,3*y,2*y),l.setRenderTarget(t),l.render(u,vd)}};function QS(i){let e=[],t=[],n=[],s=i,r=i-Yr+1+Wm.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Yr?l=Wm[a-i+Yr-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,m=2,d=1,x=new Float32Array(g*_*f),v=new Float32Array(m*_*f),y=new Float32Array(d*_*f);for(let M=0;M<f;M++){let w=M%3*2/3-1,A=M>2?0:-1,b=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];x.set(b,g*_*M),v.set(p,m*_*M);let E=[M,M,M,M,M,M];y.set(E,d*_*M)}let S=new xt;S.setAttribute("position",new vn(x,g)),S.setAttribute("uv",new vn(v,m)),S.setAttribute("faceIndex",new vn(y,d)),e.push(S),s>Yr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ym(i,e,t){let n=new dn(i,e,t);return n.texture.mapping=_o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oh(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function eM(i,e,t){let n=new Float32Array(Ks),s=new I(0,1,0);return new It({name:"SphericalGaussianBlur",defines:{n:Ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ld(),fragmentShader:`

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
		`,blending:Ut,depthTest:!1,depthWrite:!1})}function $m(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ld(),fragmentShader:`

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
		`,blending:Ut,depthTest:!1,depthWrite:!1})}function Zm(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ut,depthTest:!1,depthWrite:!1})}function Ld(){return`

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
	`}function tM(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Mc||l===bc,h=l===qs||l===Xs;if(c||h){let u=e.get(o),p=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new Zr(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Zr(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function nM(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Lr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function iM(i,e,t,n){let s={},r=new WeakMap;function a(u){let p=u.target;p.index!==null&&e.remove(p.index);for(let _ in p.attributes)e.remove(p.attributes[_]);p.removeEventListener("dispose",a),delete s[p.id];let f=r.get(p);f&&(e.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(u,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(u){let p=u.attributes;for(let f in p)e.update(p[f],i.ARRAY_BUFFER)}function c(u){let p=[],f=u.index,_=u.attributes.position,g=0;if(f!==null){let x=f.array;g=f.version;for(let v=0,y=x.length;v<y;v+=3){let S=x[v+0],M=x[v+1],w=x[v+2];p.push(S,M,M,w,w,S)}}else if(_!==void 0){let x=_.array;g=_.version;for(let v=0,y=x.length/3-1;v<y;v+=3){let S=v+0,M=v+1,w=v+2;p.push(S,M,M,w,w,S)}}else return;let m=new(fd(p)?Va:ka)(p,1);m.version=g;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let p=r.get(u);if(p){let f=u.index;f!==null&&p.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function sM(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,f){i.drawElements(n,f,r,p*a),t.update(f,n,1)}function c(p,f,_){_!==0&&(i.drawElementsInstanced(n,f,r,p*a,_),t.update(f,n,_))}function h(p,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,_);let m=0;for(let d=0;d<_;d++)m+=f[d];t.update(m,n,1)}function u(p,f,_,g){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<p.length;d++)c(p[d]/a,f[d],g[d]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,p,0,g,0,_);let d=0;for(let x=0;x<_;x++)d+=f[x]*g[x];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function rM(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function aM(i,e,t){let n=new WeakMap,s=new ct;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,p=n.get(o);if(p===void 0||p.count!==u){let b=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",b)};p!==void 0&&p.texture.dispose();let f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],v=0;f===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let y=o.attributes.position.count*v,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let M=new Float32Array(y*S*4*u),w=new za(M,y,S,u);w.type=fi,w.needsUpdate=!0;let A=v*4;for(let E=0;E<u;E++){let D=m[E],R=d[E],N=x[E],F=y*S*4*E;for(let z=0;z<D.count;z++){let B=z*A;f===!0&&(s.fromBufferAttribute(D,z),M[F+B+0]=s.x,M[F+B+1]=s.y,M[F+B+2]=s.z,M[F+B+3]=0),_===!0&&(s.fromBufferAttribute(R,z),M[F+B+4]=s.x,M[F+B+5]=s.y,M[F+B+6]=s.z,M[F+B+7]=0),g===!0&&(s.fromBufferAttribute(N,z),M[F+B+8]=s.x,M[F+B+9]=s.y,M[F+B+10]=s.z,M[F+B+11]=N.itemSize===4?s.w:1)}}p={count:u,texture:w,size:new de(y,S)},n.set(o,p),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function oM(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var p0=new un,jm=new zs(1,1),m0=new za,g0=new Fl,_0=new Ga,Jm=[],Km=[],Qm=new Float32Array(16),e0=new Float32Array(9),t0=new Float32Array(4);function jr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Jm[s];if(r===void 0&&(r=new Float32Array(s),Jm[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function hh(i,e){let t=Km[e];t===void 0&&(t=new Int32Array(e),Km[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function lM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function cM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function hM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function uM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function dM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;t0.set(n),i.uniformMatrix2fv(this.addr,!1,t0),zt(t,n)}}function fM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;e0.set(n),i.uniformMatrix3fv(this.addr,!1,e0),zt(t,n)}}function pM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;Qm.set(n),i.uniformMatrix4fv(this.addr,!1,Qm),zt(t,n)}}function mM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function gM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function _M(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function xM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function vM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function yM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function SM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function MM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function bM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(jm.compareFunction=hd,r=jm):r=p0,t.setTexture2D(e||r,s)}function wM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||g0,s)}function EM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||_0,s)}function TM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||m0,s)}function AM(i){switch(i){case 5126:return lM;case 35664:return cM;case 35665:return hM;case 35666:return uM;case 35674:return dM;case 35675:return fM;case 35676:return pM;case 5124:case 35670:return mM;case 35667:case 35671:return gM;case 35668:case 35672:return _M;case 35669:case 35673:return xM;case 5125:return vM;case 36294:return yM;case 36295:return SM;case 36296:return MM;case 35678:case 36198:case 36298:case 36306:case 35682:return bM;case 35679:case 36299:case 36307:return wM;case 35680:case 36300:case 36308:case 36293:return EM;case 36289:case 36303:case 36311:case 36292:return TM}}function CM(i,e){i.uniform1fv(this.addr,e)}function RM(i,e){let t=jr(e,this.size,2);i.uniform2fv(this.addr,t)}function PM(i,e){let t=jr(e,this.size,3);i.uniform3fv(this.addr,t)}function DM(i,e){let t=jr(e,this.size,4);i.uniform4fv(this.addr,t)}function IM(i,e){let t=jr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function LM(i,e){let t=jr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function NM(i,e){let t=jr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function UM(i,e){i.uniform1iv(this.addr,e)}function FM(i,e){i.uniform2iv(this.addr,e)}function OM(i,e){i.uniform3iv(this.addr,e)}function BM(i,e){i.uniform4iv(this.addr,e)}function zM(i,e){i.uniform1uiv(this.addr,e)}function kM(i,e){i.uniform2uiv(this.addr,e)}function VM(i,e){i.uniform3uiv(this.addr,e)}function HM(i,e){i.uniform4uiv(this.addr,e)}function GM(i,e,t){let n=this.cache,s=e.length,r=hh(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||p0,r[a])}function WM(i,e,t){let n=this.cache,s=e.length,r=hh(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||g0,r[a])}function qM(i,e,t){let n=this.cache,s=e.length,r=hh(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||_0,r[a])}function XM(i,e,t){let n=this.cache,s=e.length,r=hh(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||m0,r[a])}function YM(i){switch(i){case 5126:return CM;case 35664:return RM;case 35665:return PM;case 35666:return DM;case 35674:return IM;case 35675:return LM;case 35676:return NM;case 5124:case 35670:return UM;case 35667:case 35671:return FM;case 35668:case 35672:return OM;case 35669:case 35673:return BM;case 5125:return zM;case 36294:return kM;case 36295:return VM;case 36296:return HM;case 35678:case 36198:case 36298:case 36306:case 35682:return GM;case 35679:case 36299:case 36307:return WM;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return XM}}var Ed=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=AM(t.type)}},Td=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YM(t.type)}},Ad=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},wd=/(\w+)(\])?(\[|\.)?/g;function n0(i,e){i.seq.push(e),i.map[e.id]=e}function $M(i,e,t){let n=i.name,s=n.length;for(wd.lastIndex=0;;){let r=wd.exec(n),a=wd.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){n0(t,c===void 0?new Ed(o,i,e):new Td(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Ad(o),n0(t,u)),t=u}}}var $r=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);$M(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function i0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ZM=37297,jM=0;function JM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var s0=new Xe;function KM(i){nt._getMatrix(s0,nt.workingColorSpace,i);let e=`mat3( ${s0.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case Fa:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function r0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+JM(i.getShaderSource(e),o)}else return r}function QM(i,e){let t=KM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function eb(i,e){let t;switch(e){case gc:t="Linear";break;case _c:t="Reinhard";break;case xc:t="Cineon";break;case Gr:t="ACESFilmic";break;case yc:t="AgX";break;case Sc:t="Neutral";break;case vc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var lh=new I;function tb(){nt.getLuminanceCoefficients(lh);let i=lh.x.toFixed(4),e=lh.y.toFixed(4),t=lh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function ib(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function wo(i){return i!==""}function a0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function o0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var rb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cd(i){return i.replace(rb,ob)}var ab=new Map;function ob(i,e){let t=Je[e];if(t===void 0){let n=ab.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Cd(t)}var lb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function l0(i){return i.replace(lb,cb)}function cb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function c0(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function hb(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ku?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ac?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function ub(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qs:case Xs:e="ENVMAP_TYPE_CUBE";break;case _o:e="ENVMAP_TYPE_CUBE_UV";break}return e}function db(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Xs:e="ENVMAP_MODE_REFRACTION";break}return e}function fb(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case mc:e="ENVMAP_BLENDING_MULTIPLY";break;case bm:e="ENVMAP_BLENDING_MIX";break;case wm:e="ENVMAP_BLENDING_ADD";break}return e}function pb(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function mb(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=hb(t),c=ub(t),h=db(t),u=fb(t),p=pb(t),f=nb(t),_=ib(r),g=s.createProgram(),m,d,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(wo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(wo).join(`
`),d.length>0&&(d+=`
`)):(m=[c0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),d=[c0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?Je.tonemapping_pars_fragment:"",t.toneMapping!==Oi?eb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,QM("linearToOutputTexel",t.outputColorSpace),tb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wo).join(`
`)),a=Cd(a),a=a0(a,t),a=o0(a,t),o=Cd(o),o=a0(o,t),o=o0(o,t),a=l0(a),o=l0(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===ud?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ud?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let v=x+m+a,y=x+d+o,S=i0(s,s.VERTEX_SHADER,v),M=i0(s,s.FRAGMENT_SHADER,y);s.attachShader(g,S),s.attachShader(g,M),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(D){if(i.debug.checkShaderErrors){let R=s.getProgramInfoLog(g)||"",N=s.getShaderInfoLog(S)||"",F=s.getShaderInfoLog(M)||"",z=R.trim(),B=N.trim(),H=F.trim(),O=!0,W=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,S,M);else{let K=r0(s,S,"vertex"),ae=r0(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+K+`
`+ae)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||H==="")&&(W=!1);W&&(D.diagnostics={runnable:O,programLog:z,vertexShader:{log:B,prefix:m},fragmentShader:{log:H,prefix:d}})}s.deleteShader(S),s.deleteShader(M),A=new $r(s,g),b=sb(s,g)}let A;this.getUniforms=function(){return A===void 0&&w(this),A};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(g,ZM)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jM++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=M,this}var gb=0,Rd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Pd(e),t.set(e,n)),n}},Pd=class{constructor(e){this.id=gb++,this.code=e,this.usedTimes=0}};function _b(i,e,t,n,s,r,a){let o=new Ur,l=new Rd,c=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures,f=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,E,D,R,N){let F=R.fog,z=N.geometry,B=b.isMeshStandardMaterial?R.environment:null,H=(b.isMeshStandardMaterial?t:e).get(b.envMap||B),O=H&&H.mapping===_o?H.image.height:null,W=_[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let K=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ae=K!==void 0?K.length:0,re=0;z.morphAttributes.position!==void 0&&(re=1),z.morphAttributes.normal!==void 0&&(re=2),z.morphAttributes.color!==void 0&&(re=3);let we,Le,Oe,Q;if(W){let lt=vi[W];we=lt.vertexShader,Le=lt.fragmentShader}else we=b.vertexShader,Le=b.fragmentShader,l.update(b),Oe=l.getVertexShaderID(b),Q=l.getFragmentShaderID(b);let te=i.getRenderTarget(),j=i.state.buffers.depth.getReversed(),me=N.isInstancedMesh===!0,se=N.isBatchedMesh===!0,Me=!!b.map,Ye=!!b.matcap,L=!!H,We=!!b.aoMap,Ne=!!b.lightMap,Te=!!b.bumpMap,$=!!b.normalMap,Se=!!b.displacementMap,pe=!!b.emissiveMap,xe=!!b.metalnessMap,$e=!!b.roughnessMap,et=b.anisotropy>0,P=b.clearcoat>0,T=b.dispersion>0,G=b.iridescence>0,Z=b.sheen>0,ie=b.transmission>0,Y=et&&!!b.anisotropyMap,Ce=P&&!!b.clearcoatMap,ue=P&&!!b.clearcoatNormalMap,Ee=P&&!!b.clearcoatRoughnessMap,De=G&&!!b.iridescenceMap,ce=G&&!!b.iridescenceThicknessMap,ve=Z&&!!b.sheenColorMap,Be=Z&&!!b.sheenRoughnessMap,Ie=!!b.specularMap,ge=!!b.specularColorMap,ke=!!b.specularIntensityMap,U=ie&&!!b.transmissionMap,oe=ie&&!!b.thicknessMap,fe=!!b.gradientMap,Ae=!!b.alphaMap,le=b.alphaTest>0,ne=!!b.alphaHash,Pe=!!b.extensions,qe=Oi;b.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(qe=i.toneMapping);let mt={shaderID:W,shaderType:b.type,shaderName:b.name,vertexShader:we,fragmentShader:Le,defines:b.defines,customVertexShaderID:Oe,customFragmentShaderID:Q,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:se,batchingColor:se&&N._colorsTexture!==null,instancing:me,instancingColor:me&&N.instanceColor!==null,instancingMorph:me&&N.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Fs,alphaToCoverage:!!b.alphaToCoverage,map:Me,matcap:Ye,envMap:L,envMapMode:L&&H.mapping,envMapCubeUVHeight:O,aoMap:We,lightMap:Ne,bumpMap:Te,normalMap:$,displacementMap:p&&Se,emissiveMap:pe,normalMapObjectSpace:$&&b.normalMapType===Cm,normalMapTangentSpace:$&&b.normalMapType===bo,metalnessMap:xe,roughnessMap:$e,anisotropy:et,anisotropyMap:Y,clearcoat:P,clearcoatMap:Ce,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ee,dispersion:T,iridescence:G,iridescenceMap:De,iridescenceThicknessMap:ce,sheen:Z,sheenColorMap:ve,sheenRoughnessMap:Be,specularMap:Ie,specularColorMap:ge,specularIntensityMap:ke,transmission:ie,transmissionMap:U,thicknessMap:oe,gradientMap:fe,opaque:b.transparent===!1&&b.blending===Ns&&b.alphaToCoverage===!1,alphaMap:Ae,alphaTest:le,alphaHash:ne,combine:b.combine,mapUv:Me&&g(b.map.channel),aoMapUv:We&&g(b.aoMap.channel),lightMapUv:Ne&&g(b.lightMap.channel),bumpMapUv:Te&&g(b.bumpMap.channel),normalMapUv:$&&g(b.normalMap.channel),displacementMapUv:Se&&g(b.displacementMap.channel),emissiveMapUv:pe&&g(b.emissiveMap.channel),metalnessMapUv:xe&&g(b.metalnessMap.channel),roughnessMapUv:$e&&g(b.roughnessMap.channel),anisotropyMapUv:Y&&g(b.anisotropyMap.channel),clearcoatMapUv:Ce&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Be&&g(b.sheenRoughnessMap.channel),specularMapUv:Ie&&g(b.specularMap.channel),specularColorMapUv:ge&&g(b.specularColorMap.channel),specularIntensityMapUv:ke&&g(b.specularIntensityMap.channel),transmissionMapUv:U&&g(b.transmissionMap.channel),thicknessMapUv:oe&&g(b.thicknessMap.channel),alphaMapUv:Ae&&g(b.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&($||et),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(Me||Ae),fog:!!F,useFog:b.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:j,skinning:N.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:re,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:qe,decodeVideoTexture:Me&&b.map.isVideoTexture===!0&&nt.getTransfer(b.map.colorSpace)===at,decodeVideoTextureEmissive:pe&&b.emissiveMap.isVideoTexture===!0&&nt.getTransfer(b.emissiveMap.colorSpace)===at,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===nn,flipSided:b.side===Yt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Pe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&b.extensions.multiDraw===!0||se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function d(b){let E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(let D in b.defines)E.push(D),E.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(x(E,b),v(E,b),E.push(i.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function x(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function v(b,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),E.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),b.push(o.mask)}function y(b){let E=_[b.type],D;if(E){let R=vi[E];D=Qn.clone(R.uniforms)}else D=b.uniforms;return D}function S(b,E){let D;for(let R=0,N=h.length;R<N;R++){let F=h[R];if(F.cacheKey===E){D=F,++D.usedTimes;break}}return D===void 0&&(D=new mb(i,E,b,r),h.push(D)),D}function M(b){if(--b.usedTimes===0){let E=h.indexOf(b);h[E]=h[h.length-1],h.pop(),b.destroy()}}function w(b){l.remove(b)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:S,releaseProgram:M,releaseShaderCache:w,programs:h,dispose:A}}function xb(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function vb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function h0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function u0(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,p,f,_,g,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:p,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=f,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=g,d.group=m),e++,d}function o(u,p,f,_,g,m){let d=a(u,p,f,_,g,m);f.transmission>0?n.push(d):f.transparent===!0?s.push(d):t.push(d)}function l(u,p,f,_,g,m){let d=a(u,p,f,_,g,m);f.transmission>0?n.unshift(d):f.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,p){t.length>1&&t.sort(u||vb),n.length>1&&n.sort(p||h0),s.length>1&&s.sort(p||h0)}function h(){for(let u=e,p=i.length;u<p;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function yb(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new u0,i.set(n,[a])):s>=r.length?(a=new u0,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Sb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ge};break;case"SpotLight":t={position:new I,direction:new I,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Mb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var bb=0;function wb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Eb(i){let e=new Sb,t=Mb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new Qe,a=new Qe;function o(c){let h=0,u=0,p=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,_=0,g=0,m=0,d=0,x=0,v=0,y=0,S=0,M=0,w=0;c.sort(wb);for(let b=0,E=c.length;b<E;b++){let D=c[b],R=D.color,N=D.intensity,F=D.distance,z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=R.r*N,u+=R.g*N,p+=R.b*N;else if(D.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(D.sh.coefficients[B],N);w++}else if(D.isDirectionalLight){let B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let H=D.shadow,O=t.get(D);O.shadowIntensity=H.intensity,O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,n.directionalShadow[f]=O,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=D.shadow.matrix,x++}n.directional[f]=B,f++}else if(D.isSpotLight){let B=e.get(D);B.position.setFromMatrixPosition(D.matrixWorld),B.color.copy(R).multiplyScalar(N),B.distance=F,B.coneCos=Math.cos(D.angle),B.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),B.decay=D.decay,n.spot[g]=B;let H=D.shadow;if(D.map&&(n.spotLightMap[S]=D.map,S++,H.updateMatrices(D),D.castShadow&&M++),n.spotLightMatrix[g]=H.matrix,D.castShadow){let O=t.get(D);O.shadowIntensity=H.intensity,O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,n.spotShadow[g]=O,n.spotShadowMap[g]=z,y++}g++}else if(D.isRectAreaLight){let B=e.get(D);B.color.copy(R).multiplyScalar(N),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=B,m++}else if(D.isPointLight){let B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),B.distance=D.distance,B.decay=D.decay,D.castShadow){let H=D.shadow,O=t.get(D);O.shadowIntensity=H.intensity,O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,O.shadowCameraNear=H.camera.near,O.shadowCameraFar=H.camera.far,n.pointShadow[_]=O,n.pointShadowMap[_]=z,n.pointShadowMatrix[_]=D.shadow.matrix,v++}n.point[_]=B,_++}else if(D.isHemisphereLight){let B=e.get(D);B.skyColor.copy(D.color).multiplyScalar(N),B.groundColor.copy(D.groundColor).multiplyScalar(N),n.hemi[d]=B,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;let A=n.hash;(A.directionalLength!==f||A.pointLength!==_||A.spotLength!==g||A.rectAreaLength!==m||A.hemiLength!==d||A.numDirectionalShadows!==x||A.numPointShadows!==v||A.numSpotShadows!==y||A.numSpotMaps!==S||A.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+S-M,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=w,A.directionalLength=f,A.pointLength=_,A.spotLength=g,A.rectAreaLength=m,A.hemiLength=d,A.numDirectionalShadows=x,A.numPointShadows=v,A.numSpotShadows=y,A.numSpotMaps=S,A.numLightProbes=w,n.version=bb++)}function l(c,h){let u=0,p=0,f=0,_=0,g=0,m=h.matrixWorldInverse;for(let d=0,x=c.length;d<x;d++){let v=c[d];if(v.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(v.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let y=n.rectArea[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let y=n.point[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),p++}else if(v.isHemisphereLight){let y=n.hemi[g];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function d0(i){let e=new Eb(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Tb(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new d0(i),e.set(s,[o])):r>=a.length?(o=new d0(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ab=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cb=`uniform sampler2D shadow_pass;
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
}`;function Rb(i,e,t){let n=new Or,s=new de,r=new de,a=new ct,o=new Yl({depthPacking:Am}),l=new $l,c={},h=t.maxTextureSize,u={[Ii]:Yt,[Yt]:Ii,[nn]:nn},p=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:Ab,fragmentShader:Cb}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let _=new xt;_.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new je(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ku;let d=this.type;this.render=function(M,w,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;let b=i.getRenderTarget(),E=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),R=i.state;R.setBlending(Ut),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let N=d!==xi&&this.type===xi,F=d===xi&&this.type!==xi;for(let z=0,B=M.length;z<B;z++){let H=M[z],O=H.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let W=O.getFrameExtents();if(s.multiply(W),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,O.mapSize.y=r.y)),O.map===null||N===!0||F===!0){let ae=this.type!==xi?{minFilter:Xt,magFilter:Xt}:{};O.map!==null&&O.map.dispose(),O.map=new dn(s.x,s.y,ae),O.map.texture.name=H.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();let K=O.getViewportCount();for(let ae=0;ae<K;ae++){let re=O.getViewport(ae);a.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),R.viewport(a),O.updateMatrices(H,ae),n=O.getFrustum(),y(w,A,O.camera,H,this.type)}O.isPointLightShadow!==!0&&this.type===xi&&x(O,A),O.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(b,E,D)};function x(M,w){let A=e.update(g);p.defines.VSM_SAMPLES!==M.blurSamples&&(p.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new dn(s.x,s.y)),p.uniforms.shadow_pass.value=M.map.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(w,null,A,p,g,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(w,null,A,f,g,null)}function v(M,w,A,b){let E=null,D=A.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)E=D;else if(E=A.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let R=E.uuid,N=w.uuid,F=c[R];F===void 0&&(F={},c[R]=F);let z=F[N];z===void 0&&(z=E.clone(),F[N]=z,w.addEventListener("dispose",S)),E=z}if(E.visible=w.visible,E.wireframe=w.wireframe,b===xi?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:u[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,A.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let R=i.properties.get(E);R.light=A}return E}function y(M,w,A,b,E){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&E===xi)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);let N=e.update(M),F=M.material;if(Array.isArray(F)){let z=N.groups;for(let B=0,H=z.length;B<H;B++){let O=z[B],W=F[O.materialIndex];if(W&&W.visible){let K=v(M,W,b,E);M.onBeforeShadow(i,M,w,A,N,K,O),i.renderBufferDirect(A,null,N,K,M,O),M.onAfterShadow(i,M,w,A,N,K,O)}}}else if(F.visible){let z=v(M,F,b,E);M.onBeforeShadow(i,M,w,A,N,z,null),i.renderBufferDirect(A,null,N,z,M,null),M.onAfterShadow(i,M,w,A,N,z,null)}}let R=M.children;for(let N=0,F=R.length;N<F;N++)y(R[N],w,A,b,E)}function S(M){M.target.removeEventListener("dispose",S);for(let A in c){let b=c[A],E=M.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}var Pb={[lc]:cc,[hc]:fc,[uc]:pc,[Us]:dc,[cc]:lc,[fc]:hc,[pc]:uc,[dc]:Us};function Db(i,e){function t(){let U=!1,oe=new ct,fe=null,Ae=new ct(0,0,0,0);return{setMask:function(le){fe!==le&&!U&&(i.colorMask(le,le,le,le),fe=le)},setLocked:function(le){U=le},setClear:function(le,ne,Pe,qe,mt){mt===!0&&(le*=qe,ne*=qe,Pe*=qe),oe.set(le,ne,Pe,qe),Ae.equals(oe)===!1&&(i.clearColor(le,ne,Pe,qe),Ae.copy(oe))},reset:function(){U=!1,fe=null,Ae.set(-1,0,0,0)}}}function n(){let U=!1,oe=!1,fe=null,Ae=null,le=null;return{setReversed:function(ne){if(oe!==ne){let Pe=e.get("EXT_clip_control");ne?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),oe=ne;let qe=le;le=null,this.setClear(qe)}},getReversed:function(){return oe},setTest:function(ne){ne?te(i.DEPTH_TEST):j(i.DEPTH_TEST)},setMask:function(ne){fe!==ne&&!U&&(i.depthMask(ne),fe=ne)},setFunc:function(ne){if(oe&&(ne=Pb[ne]),Ae!==ne){switch(ne){case lc:i.depthFunc(i.NEVER);break;case cc:i.depthFunc(i.ALWAYS);break;case hc:i.depthFunc(i.LESS);break;case Us:i.depthFunc(i.LEQUAL);break;case uc:i.depthFunc(i.EQUAL);break;case dc:i.depthFunc(i.GEQUAL);break;case fc:i.depthFunc(i.GREATER);break;case pc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=ne}},setLocked:function(ne){U=ne},setClear:function(ne){le!==ne&&(oe&&(ne=1-ne),i.clearDepth(ne),le=ne)},reset:function(){U=!1,fe=null,Ae=null,le=null,oe=!1}}}function s(){let U=!1,oe=null,fe=null,Ae=null,le=null,ne=null,Pe=null,qe=null,mt=null;return{setTest:function(lt){U||(lt?te(i.STENCIL_TEST):j(i.STENCIL_TEST))},setMask:function(lt){oe!==lt&&!U&&(i.stencilMask(lt),oe=lt)},setFunc:function(lt,Ei,mi){(fe!==lt||Ae!==Ei||le!==mi)&&(i.stencilFunc(lt,Ei,mi),fe=lt,Ae=Ei,le=mi)},setOp:function(lt,Ei,mi){(ne!==lt||Pe!==Ei||qe!==mi)&&(i.stencilOp(lt,Ei,mi),ne=lt,Pe=Ei,qe=mi)},setLocked:function(lt){U=lt},setClear:function(lt){mt!==lt&&(i.clearStencil(lt),mt=lt)},reset:function(){U=!1,oe=null,fe=null,Ae=null,le=null,ne=null,Pe=null,qe=null,mt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},p=new WeakMap,f=[],_=null,g=!1,m=null,d=null,x=null,v=null,y=null,S=null,M=null,w=new Ge(0,0,0),A=0,b=!1,E=null,D=null,R=null,N=null,F=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,H=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(O)[1]),B=H>=1):O.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),B=H>=2);let W=null,K={},ae=i.getParameter(i.SCISSOR_BOX),re=i.getParameter(i.VIEWPORT),we=new ct().fromArray(ae),Le=new ct().fromArray(re);function Oe(U,oe,fe,Ae){let le=new Uint8Array(4),ne=i.createTexture();i.bindTexture(U,ne),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<fe;Pe++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(oe+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return ne}let Q={};Q[i.TEXTURE_2D]=Oe(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(i.DEPTH_TEST),a.setFunc(Us),Te(!1),$(Ju),te(i.CULL_FACE),We(Ut);function te(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function j(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function me(U,oe){return u[U]!==oe?(i.bindFramebuffer(U,oe),u[U]=oe,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=oe),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function se(U,oe){let fe=f,Ae=!1;if(U){fe=p.get(oe),fe===void 0&&(fe=[],p.set(oe,fe));let le=U.textures;if(fe.length!==le.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Pe=le.length;ne<Pe;ne++)fe[ne]=i.COLOR_ATTACHMENT0+ne;fe.length=le.length,Ae=!0}}else fe[0]!==i.BACK&&(fe[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(fe)}function Me(U){return _!==U?(i.useProgram(U),_=U,!0):!1}let Ye={[Fn]:i.FUNC_ADD,[cm]:i.FUNC_SUBTRACT,[hm]:i.FUNC_REVERSE_SUBTRACT};Ye[um]=i.MIN,Ye[dm]=i.MAX;let L={[Ws]:i.ZERO,[fm]:i.ONE,[pm]:i.SRC_COLOR,[Pl]:i.SRC_ALPHA,[xm]:i.SRC_ALPHA_SATURATE,[go]:i.DST_COLOR,[mo]:i.DST_ALPHA,[mm]:i.ONE_MINUS_SRC_COLOR,[Dl]:i.ONE_MINUS_SRC_ALPHA,[_m]:i.ONE_MINUS_DST_COLOR,[gm]:i.ONE_MINUS_DST_ALPHA,[vm]:i.CONSTANT_COLOR,[ym]:i.ONE_MINUS_CONSTANT_COLOR,[Sm]:i.CONSTANT_ALPHA,[Mm]:i.ONE_MINUS_CONSTANT_ALPHA};function We(U,oe,fe,Ae,le,ne,Pe,qe,mt,lt){if(U===Ut){g===!0&&(j(i.BLEND),g=!1);return}if(g===!1&&(te(i.BLEND),g=!0),U!==oc){if(U!==m||lt!==b){if((d!==Fn||y!==Fn)&&(i.blendEquation(i.FUNC_ADD),d=Fn,y=Fn),lt)switch(U){case Ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qu:i.blendFunc(i.ONE,i.ONE);break;case ed:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case td:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ed:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case td:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}x=null,v=null,S=null,M=null,w.set(0,0,0),A=0,m=U,b=lt}return}le=le||oe,ne=ne||fe,Pe=Pe||Ae,(oe!==d||le!==y)&&(i.blendEquationSeparate(Ye[oe],Ye[le]),d=oe,y=le),(fe!==x||Ae!==v||ne!==S||Pe!==M)&&(i.blendFuncSeparate(L[fe],L[Ae],L[ne],L[Pe]),x=fe,v=Ae,S=ne,M=Pe),(qe.equals(w)===!1||mt!==A)&&(i.blendColor(qe.r,qe.g,qe.b,mt),w.copy(qe),A=mt),m=U,b=!1}function Ne(U,oe){U.side===nn?j(i.CULL_FACE):te(i.CULL_FACE);let fe=U.side===Yt;oe&&(fe=!fe),Te(fe),U.blending===Ns&&U.transparent===!1?We(Ut):We(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let Ae=U.stencilWrite;o.setTest(Ae),Ae&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),pe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):j(i.SAMPLE_ALPHA_TO_COVERAGE)}function Te(U){E!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),E=U)}function $(U){U!==om?(te(i.CULL_FACE),U!==D&&(U===Ju?i.cullFace(i.BACK):U===lm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):j(i.CULL_FACE),D=U}function Se(U){U!==R&&(B&&i.lineWidth(U),R=U)}function pe(U,oe,fe){U?(te(i.POLYGON_OFFSET_FILL),(N!==oe||F!==fe)&&(i.polygonOffset(oe,fe),N=oe,F=fe)):j(i.POLYGON_OFFSET_FILL)}function xe(U){U?te(i.SCISSOR_TEST):j(i.SCISSOR_TEST)}function $e(U){U===void 0&&(U=i.TEXTURE0+z-1),W!==U&&(i.activeTexture(U),W=U)}function et(U,oe,fe){fe===void 0&&(W===null?fe=i.TEXTURE0+z-1:fe=W);let Ae=K[fe];Ae===void 0&&(Ae={type:void 0,texture:void 0},K[fe]=Ae),(Ae.type!==U||Ae.texture!==oe)&&(W!==fe&&(i.activeTexture(fe),W=fe),i.bindTexture(U,oe||Q[U]),Ae.type=U,Ae.texture=oe)}function P(){let U=K[W];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(U){we.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),we.copy(U))}function Be(U){Le.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Le.copy(U))}function Ie(U,oe){let fe=c.get(oe);fe===void 0&&(fe=new WeakMap,c.set(oe,fe));let Ae=fe.get(U);Ae===void 0&&(Ae=i.getUniformBlockIndex(oe,U.name),fe.set(U,Ae))}function ge(U,oe){let Ae=c.get(oe).get(U);l.get(oe)!==Ae&&(i.uniformBlockBinding(oe,Ae,U.__bindingPointIndex),l.set(oe,Ae))}function ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},W=null,K={},u={},p=new WeakMap,f=[],_=null,g=!1,m=null,d=null,x=null,v=null,y=null,S=null,M=null,w=new Ge(0,0,0),A=0,b=!1,E=null,D=null,R=null,N=null,F=null,we.set(0,0,i.canvas.width,i.canvas.height),Le.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:j,bindFramebuffer:me,drawBuffers:se,useProgram:Me,setBlending:We,setMaterial:Ne,setFlipSided:Te,setCullFace:$,setLineWidth:Se,setPolygonOffset:pe,setScissorTest:xe,activeTexture:$e,bindTexture:et,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:G,texImage2D:De,texImage3D:ce,updateUBOMapping:Ie,uniformBlockBinding:ge,texStorage2D:ue,texStorage3D:Ee,texSubImage2D:Z,texSubImage3D:ie,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ce,scissor:ve,viewport:Be,reset:ke}}function Ib(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,h=new WeakMap,u,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,T){return f?new OffscreenCanvas(P,T):Ba("canvas")}function g(P,T,G){let Z=1,ie=et(P);if((ie.width>G||ie.height>G)&&(Z=G/Math.max(ie.width,ie.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Y=Math.floor(Z*ie.width),Ce=Math.floor(Z*ie.height);u===void 0&&(u=_(Y,Ce));let ue=T?_(Y,Ce):u;return ue.width=Y,ue.height=Ce,ue.getContext("2d").drawImage(P,0,0,Y,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Y+"x"+Ce+")."),ue}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),P;return P}function m(P){return P.generateMipmaps}function d(P){i.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(P,T,G,Z,ie=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Y=T;if(T===i.RED&&(G===i.FLOAT&&(Y=i.R32F),G===i.HALF_FLOAT&&(Y=i.R16F),G===i.UNSIGNED_BYTE&&(Y=i.R8)),T===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.R8UI),G===i.UNSIGNED_SHORT&&(Y=i.R16UI),G===i.UNSIGNED_INT&&(Y=i.R32UI),G===i.BYTE&&(Y=i.R8I),G===i.SHORT&&(Y=i.R16I),G===i.INT&&(Y=i.R32I)),T===i.RG&&(G===i.FLOAT&&(Y=i.RG32F),G===i.HALF_FLOAT&&(Y=i.RG16F),G===i.UNSIGNED_BYTE&&(Y=i.RG8)),T===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.RG8UI),G===i.UNSIGNED_SHORT&&(Y=i.RG16UI),G===i.UNSIGNED_INT&&(Y=i.RG32UI),G===i.BYTE&&(Y=i.RG8I),G===i.SHORT&&(Y=i.RG16I),G===i.INT&&(Y=i.RG32I)),T===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),G===i.UNSIGNED_INT&&(Y=i.RGB32UI),G===i.BYTE&&(Y=i.RGB8I),G===i.SHORT&&(Y=i.RGB16I),G===i.INT&&(Y=i.RGB32I)),T===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),G===i.UNSIGNED_INT&&(Y=i.RGBA32UI),G===i.BYTE&&(Y=i.RGBA8I),G===i.SHORT&&(Y=i.RGBA16I),G===i.INT&&(Y=i.RGBA32I)),T===i.RGB&&(G===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),T===i.RGBA){let Ce=ie?Fa:nt.getTransfer(Z);G===i.FLOAT&&(Y=i.RGBA32F),G===i.HALF_FLOAT&&(Y=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Y=Ce===at?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(P,T){let G;return P?T===null||T===ls||T===cs?G=i.DEPTH24_STENCIL8:T===fi?G=i.DEPTH32F_STENCIL8:T===Wr&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ls||T===cs?G=i.DEPTH_COMPONENT24:T===fi?G=i.DEPTH_COMPONENT32F:T===Wr&&(G=i.DEPTH_COMPONENT16),G}function S(P,T){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Xt&&P.minFilter!==ui?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function M(P){let T=P.target;T.removeEventListener("dispose",M),A(T),T.isVideoTexture&&h.delete(T)}function w(P){let T=P.target;T.removeEventListener("dispose",w),E(T)}function A(P){let T=n.get(P);if(T.__webglInit===void 0)return;let G=P.source,Z=p.get(G);if(Z){let ie=Z[T.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&b(P),Object.keys(Z).length===0&&p.delete(G)}n.remove(P)}function b(P){let T=n.get(P);i.deleteTexture(T.__webglTexture);let G=P.source,Z=p.get(G);delete Z[T.__cacheKey],a.memory.textures--}function E(P){let T=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(T.__webglFramebuffer[Z]))for(let ie=0;ie<T.__webglFramebuffer[Z].length;ie++)i.deleteFramebuffer(T.__webglFramebuffer[Z][ie]);else i.deleteFramebuffer(T.__webglFramebuffer[Z]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Z])}else{if(Array.isArray(T.__webglFramebuffer))for(let Z=0;Z<T.__webglFramebuffer.length;Z++)i.deleteFramebuffer(T.__webglFramebuffer[Z]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Z=0;Z<T.__webglColorRenderbuffer.length;Z++)T.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Z]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let G=P.textures;for(let Z=0,ie=G.length;Z<ie;Z++){let Y=n.get(G[Z]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(G[Z])}n.remove(P)}let D=0;function R(){D=0}function N(){let P=D;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),D+=1,P}function F(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function z(P,T){let G=n.get(P);if(P.isVideoTexture&&xe(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){let Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(G,P,T);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+T)}function B(P,T){let G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){Q(G,P,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+T)}function H(P,T){let G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){Q(G,P,T);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+T)}function O(P,T){let G=n.get(P);if(P.version>0&&G.__version!==P.version){te(G,P,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+T)}let W={[Jn]:i.REPEAT,[es]:i.CLAMP_TO_EDGE,[Il]:i.MIRRORED_REPEAT},K={[Xt]:i.NEAREST,[Em]:i.NEAREST_MIPMAP_NEAREST,[xo]:i.NEAREST_MIPMAP_LINEAR,[ui]:i.LINEAR,[wc]:i.LINEAR_MIPMAP_NEAREST,[os]:i.LINEAR_MIPMAP_LINEAR},ae={[Rm]:i.NEVER,[Um]:i.ALWAYS,[Pm]:i.LESS,[hd]:i.LEQUAL,[Dm]:i.EQUAL,[Nm]:i.GEQUAL,[Im]:i.GREATER,[Lm]:i.NOTEQUAL};function re(P,T){if(T.type===fi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===ui||T.magFilter===wc||T.magFilter===xo||T.magFilter===os||T.minFilter===ui||T.minFilter===wc||T.minFilter===xo||T.minFilter===os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,W[T.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,W[T.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,W[T.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,K[T.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,K[T.minFilter]),T.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ae[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Xt||T.minFilter!==xo&&T.minFilter!==os||T.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function we(P,T){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",M));let Z=T.source,ie=p.get(Z);ie===void 0&&(ie={},p.set(Z,ie));let Y=F(T);if(Y!==P.__cacheKey){ie[Y]===void 0&&(ie[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ie[Y].usedTimes++;let Ce=ie[P.__cacheKey];Ce!==void 0&&(ie[P.__cacheKey].usedTimes--,Ce.usedTimes===0&&b(T)),P.__cacheKey=Y,P.__webglTexture=ie[Y].texture}return G}function Le(P,T,G){return Math.floor(Math.floor(P/G)/T)}function Oe(P,T,G,Z){let Y=P.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,G,Z,T.data);else{Y.sort((ce,ve)=>ce.start-ve.start);let Ce=0;for(let ce=1;ce<Y.length;ce++){let ve=Y[Ce],Be=Y[ce],Ie=ve.start+ve.count,ge=Le(Be.start,T.width,4),ke=Le(ve.start,T.width,4);Be.start<=Ie+1&&ge===ke&&Le(Be.start+Be.count-1,T.width,4)===ge?ve.count=Math.max(ve.count,Be.start+Be.count-ve.start):(++Ce,Y[Ce]=Be)}Y.length=Ce+1;let ue=i.getParameter(i.UNPACK_ROW_LENGTH),Ee=i.getParameter(i.UNPACK_SKIP_PIXELS),De=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let ce=0,ve=Y.length;ce<ve;ce++){let Be=Y[ce],Ie=Math.floor(Be.start/4),ge=Math.ceil(Be.count/4),ke=Ie%T.width,U=Math.floor(Ie/T.width),oe=ge,fe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ke),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,ke,U,oe,fe,G,Z,T.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ue),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ee),i.pixelStorei(i.UNPACK_SKIP_ROWS,De)}}function Q(P,T,G){let Z=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Z=i.TEXTURE_3D);let ie=we(P,T),Y=T.source;t.bindTexture(Z,P.__webglTexture,i.TEXTURE0+G);let Ce=n.get(Y);if(Y.version!==Ce.__version||ie===!0){t.activeTexture(i.TEXTURE0+G);let ue=nt.getPrimaries(nt.workingColorSpace),Ee=T.colorSpace===Bi?null:nt.getPrimaries(T.colorSpace),De=T.colorSpace===Bi||ue===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ce=g(T.image,!1,s.maxTextureSize);ce=$e(T,ce);let ve=r.convert(T.format,T.colorSpace),Be=r.convert(T.type),Ie=v(T.internalFormat,ve,Be,T.colorSpace,T.isVideoTexture);re(Z,T);let ge,ke=T.mipmaps,U=T.isVideoTexture!==!0,oe=Ce.__version===void 0||ie===!0,fe=Y.dataReady,Ae=S(T,ce);if(T.isDepthTexture)Ie=y(T.format===hs,T.type),oe&&(U?t.texStorage2D(i.TEXTURE_2D,1,Ie,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,Ie,ce.width,ce.height,0,ve,Be,null));else if(T.isDataTexture)if(ke.length>0){U&&oe&&t.texStorage2D(i.TEXTURE_2D,Ae,Ie,ke[0].width,ke[0].height);for(let le=0,ne=ke.length;le<ne;le++)ge=ke[le],U?fe&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,ge.width,ge.height,ve,Be,ge.data):t.texImage2D(i.TEXTURE_2D,le,Ie,ge.width,ge.height,0,ve,Be,ge.data);T.generateMipmaps=!1}else U?(oe&&t.texStorage2D(i.TEXTURE_2D,Ae,Ie,ce.width,ce.height),fe&&Oe(T,ce,ve,Be)):t.texImage2D(i.TEXTURE_2D,0,Ie,ce.width,ce.height,0,ve,Be,ce.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){U&&oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Ie,ke[0].width,ke[0].height,ce.depth);for(let le=0,ne=ke.length;le<ne;le++)if(ge=ke[le],T.format!==bn)if(ve!==null)if(U){if(fe)if(T.layerUpdates.size>0){let Pe=xd(ge.width,ge.height,T.format,T.type);for(let qe of T.layerUpdates){let mt=ge.data.subarray(qe*Pe/ge.data.BYTES_PER_ELEMENT,(qe+1)*Pe/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,qe,ge.width,ge.height,1,ve,mt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,ge.width,ge.height,ce.depth,ve,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,Ie,ge.width,ge.height,ce.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?fe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,ge.width,ge.height,ce.depth,ve,Be,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,Ie,ge.width,ge.height,ce.depth,0,ve,Be,ge.data)}else{U&&oe&&t.texStorage2D(i.TEXTURE_2D,Ae,Ie,ke[0].width,ke[0].height);for(let le=0,ne=ke.length;le<ne;le++)ge=ke[le],T.format!==bn?ve!==null?U?fe&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,ge.width,ge.height,ve,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,le,Ie,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?fe&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,ge.width,ge.height,ve,Be,ge.data):t.texImage2D(i.TEXTURE_2D,le,Ie,ge.width,ge.height,0,ve,Be,ge.data)}else if(T.isDataArrayTexture)if(U){if(oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Ie,ce.width,ce.height,ce.depth),fe)if(T.layerUpdates.size>0){let le=xd(ce.width,ce.height,T.format,T.type);for(let ne of T.layerUpdates){let Pe=ce.data.subarray(ne*le/ce.data.BYTES_PER_ELEMENT,(ne+1)*le/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,ce.width,ce.height,1,ve,Be,Pe)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ve,Be,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,ce.width,ce.height,ce.depth,0,ve,Be,ce.data);else if(T.isData3DTexture)U?(oe&&t.texStorage3D(i.TEXTURE_3D,Ae,Ie,ce.width,ce.height,ce.depth),fe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ve,Be,ce.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,ce.width,ce.height,ce.depth,0,ve,Be,ce.data);else if(T.isFramebufferTexture){if(oe)if(U)t.texStorage2D(i.TEXTURE_2D,Ae,Ie,ce.width,ce.height);else{let le=ce.width,ne=ce.height;for(let Pe=0;Pe<Ae;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,Ie,le,ne,0,ve,Be,null),le>>=1,ne>>=1}}else if(ke.length>0){if(U&&oe){let le=et(ke[0]);t.texStorage2D(i.TEXTURE_2D,Ae,Ie,le.width,le.height)}for(let le=0,ne=ke.length;le<ne;le++)ge=ke[le],U?fe&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,ve,Be,ge):t.texImage2D(i.TEXTURE_2D,le,Ie,ve,Be,ge);T.generateMipmaps=!1}else if(U){if(oe){let le=et(ce);t.texStorage2D(i.TEXTURE_2D,Ae,Ie,le.width,le.height)}fe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Be,ce)}else t.texImage2D(i.TEXTURE_2D,0,Ie,ve,Be,ce);m(T)&&d(Z),Ce.__version=Y.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function te(P,T,G){if(T.image.length!==6)return;let Z=we(P,T),ie=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+G);let Y=n.get(ie);if(ie.version!==Y.__version||Z===!0){t.activeTexture(i.TEXTURE0+G);let Ce=nt.getPrimaries(nt.workingColorSpace),ue=T.colorSpace===Bi?null:nt.getPrimaries(T.colorSpace),Ee=T.colorSpace===Bi||Ce===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let De=T.isCompressedTexture||T.image[0].isCompressedTexture,ce=T.image[0]&&T.image[0].isDataTexture,ve=[];for(let ne=0;ne<6;ne++)!De&&!ce?ve[ne]=g(T.image[ne],!0,s.maxCubemapSize):ve[ne]=ce?T.image[ne].image:T.image[ne],ve[ne]=$e(T,ve[ne]);let Be=ve[0],Ie=r.convert(T.format,T.colorSpace),ge=r.convert(T.type),ke=v(T.internalFormat,Ie,ge,T.colorSpace),U=T.isVideoTexture!==!0,oe=Y.__version===void 0||Z===!0,fe=ie.dataReady,Ae=S(T,Be);re(i.TEXTURE_CUBE_MAP,T);let le;if(De){U&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,ke,Be.width,Be.height);for(let ne=0;ne<6;ne++){le=ve[ne].mipmaps;for(let Pe=0;Pe<le.length;Pe++){let qe=le[Pe];T.format!==bn?Ie!==null?U?fe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,0,0,qe.width,qe.height,Ie,qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,ke,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,0,0,qe.width,qe.height,Ie,ge,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,ke,qe.width,qe.height,0,Ie,ge,qe.data)}}}else{if(le=T.mipmaps,U&&oe){le.length>0&&Ae++;let ne=et(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,ke,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(ce){U?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ve[ne].width,ve[ne].height,Ie,ge,ve[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ke,ve[ne].width,ve[ne].height,0,Ie,ge,ve[ne].data);for(let Pe=0;Pe<le.length;Pe++){let mt=le[Pe].image[ne].image;U?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,0,0,mt.width,mt.height,Ie,ge,mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,ke,mt.width,mt.height,0,Ie,ge,mt.data)}}else{U?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ie,ge,ve[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ke,Ie,ge,ve[ne]);for(let Pe=0;Pe<le.length;Pe++){let qe=le[Pe];U?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,0,0,Ie,ge,qe.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,ke,Ie,ge,qe.image[ne])}}}m(T)&&d(i.TEXTURE_CUBE_MAP),Y.__version=ie.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function j(P,T,G,Z,ie,Y){let Ce=r.convert(G.format,G.colorSpace),ue=r.convert(G.type),Ee=v(G.internalFormat,Ce,ue,G.colorSpace),De=n.get(T),ce=n.get(G);if(ce.__renderTarget=T,!De.__hasExternalTextures){let ve=Math.max(1,T.width>>Y),Be=Math.max(1,T.height>>Y);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,Y,Ee,ve,Be,T.depth,0,Ce,ue,null):t.texImage2D(ie,Y,Ee,ve,Be,0,Ce,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),pe(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ie,ce.__webglTexture,0,Se(T)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ie,ce.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(P,T,G){if(i.bindRenderbuffer(i.RENDERBUFFER,P),T.depthBuffer){let Z=T.depthTexture,ie=Z&&Z.isDepthTexture?Z.type:null,Y=y(T.stencilBuffer,ie),Ce=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=Se(T);pe(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,Y,T.width,T.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,Y,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Y,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,P)}else{let Z=T.textures;for(let ie=0;ie<Z.length;ie++){let Y=Z[ie],Ce=r.convert(Y.format,Y.colorSpace),ue=r.convert(Y.type),Ee=v(Y.internalFormat,Ce,ue,Y.colorSpace),De=Se(T);G&&pe(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,De,Ee,T.width,T.height):pe(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De,Ee,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function se(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(T.depthTexture);Z.__renderTarget=T,(!Z.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),z(T.depthTexture,0);let ie=Z.__webglTexture,Y=Se(T);if(T.depthTexture.format===Dr)pe(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(T.depthTexture.format===hs)pe(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Me(P){let T=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let Z=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Z){let ie=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Z.removeEventListener("dispose",ie)};Z.addEventListener("dispose",ie),T.__depthDisposeCallback=ie}T.__boundDepthTexture=Z}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");let Z=P.texture.mipmaps;Z&&Z.length>0?se(T.__webglFramebuffer[0],P):se(T.__webglFramebuffer,P)}else if(G){T.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Z]),T.__webglDepthbuffer[Z]===void 0)T.__webglDepthbuffer[Z]=i.createRenderbuffer(),me(T.__webglDepthbuffer[Z],P,!1);else{let ie=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=T.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,Y)}}else{let Z=P.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),me(T.__webglDepthbuffer,P,!1);else{let ie=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(P,T,G){let Z=n.get(P);T!==void 0&&j(Z.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Me(P)}function L(P){let T=P.texture,G=n.get(P),Z=n.get(T);P.addEventListener("dispose",w);let ie=P.textures,Y=P.isWebGLCubeRenderTarget===!0,Ce=ie.length>1;if(Ce||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=T.version,a.memory.textures++),Y){G.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[ue]=[];for(let Ee=0;Ee<T.mipmaps.length;Ee++)G.__webglFramebuffer[ue][Ee]=i.createFramebuffer()}else G.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let ue=0;ue<T.mipmaps.length;ue++)G.__webglFramebuffer[ue]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let ue=0,Ee=ie.length;ue<Ee;ue++){let De=n.get(ie[ue]);De.__webglTexture===void 0&&(De.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&pe(P)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ue=0;ue<ie.length;ue++){let Ee=ie[ue];G.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ue]);let De=r.convert(Ee.format,Ee.colorSpace),ce=r.convert(Ee.type),ve=v(Ee.internalFormat,De,ce,Ee.colorSpace,P.isXRRenderTarget===!0),Be=Se(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,ve,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,G.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),me(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),re(i.TEXTURE_CUBE_MAP,T);for(let ue=0;ue<6;ue++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ee=0;Ee<T.mipmaps.length;Ee++)j(G.__webglFramebuffer[ue][Ee],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee);else j(G.__webglFramebuffer[ue],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(T)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let ue=0,Ee=ie.length;ue<Ee;ue++){let De=ie[ue],ce=n.get(De),ve=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ve=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,ce.__webglTexture),re(ve,De),j(G.__webglFramebuffer,P,De,i.COLOR_ATTACHMENT0+ue,ve,0),m(De)&&d(ve)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ue=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,Z.__webglTexture),re(ue,T),T.mipmaps&&T.mipmaps.length>0)for(let Ee=0;Ee<T.mipmaps.length;Ee++)j(G.__webglFramebuffer[Ee],P,T,i.COLOR_ATTACHMENT0,ue,Ee);else j(G.__webglFramebuffer,P,T,i.COLOR_ATTACHMENT0,ue,0);m(T)&&d(ue),t.unbindTexture()}P.depthBuffer&&Me(P)}function We(P){let T=P.textures;for(let G=0,Z=T.length;G<Z;G++){let ie=T[G];if(m(ie)){let Y=x(P),Ce=n.get(ie).__webglTexture;t.bindTexture(Y,Ce),d(Y),t.unbindTexture()}}}let Ne=[],Te=[];function $(P){if(P.samples>0){if(pe(P)===!1){let T=P.textures,G=P.width,Z=P.height,ie=i.COLOR_BUFFER_BIT,Y=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(P),ue=T.length>1;if(ue)for(let De=0;De<T.length;De++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);let Ee=P.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let De=0;De<T.length;De++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[De]);let ce=n.get(T[De]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,G,Z,0,0,G,Z,ie,i.NEAREST),l===!0&&(Ne.length=0,Te.length=0,Ne.push(i.COLOR_ATTACHMENT0+De),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ne.push(Y),Te.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let De=0;De<T.length;De++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[De]);let ce=n.get(T[De]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let T=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Se(P){return Math.min(s.maxSamples,P.samples)}function pe(P){let T=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function xe(P){let T=a.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function $e(P,T){let G=P.colorSpace,Z=P.format,ie=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Fs&&G!==Bi&&(nt.getTransfer(G)===at?(Z!==bn||ie!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),T}function et(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=R,this.setTexture2D=z,this.setTexture2DArray=B,this.setTexture3D=H,this.setTextureCube=O,this.rebindTextures=Ye,this.setupRenderTarget=L,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=j,this.useMultisampledRTT=pe}function Lb(i,e){function t(n,s=Bi){let r,a=nt.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===Tc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ac)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ad)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===id)return i.BYTE;if(n===sd)return i.SHORT;if(n===Wr)return i.UNSIGNED_SHORT;if(n===Ec)return i.INT;if(n===ls)return i.UNSIGNED_INT;if(n===fi)return i.FLOAT;if(n===pi)return i.HALF_FLOAT;if(n===od)return i.ALPHA;if(n===ld)return i.RGB;if(n===bn)return i.RGBA;if(n===Dr)return i.DEPTH_COMPONENT;if(n===hs)return i.DEPTH_STENCIL;if(n===Cc)return i.RED;if(n===Rc)return i.RED_INTEGER;if(n===cd)return i.RG;if(n===Pc)return i.RG_INTEGER;if(n===Dc)return i.RGBA_INTEGER;if(n===vo||n===yo||n===So||n===Mo)if(a===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ic||n===Lc||n===Nc||n===Uc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ic)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fc||n===Oc||n===Bc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fc||n===Oc)return a===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Bc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zc||n===kc||n===Vc||n===Hc||n===Gc||n===Wc||n===qc||n===Xc||n===Yc||n===$c||n===Zc||n===jc||n===Jc||n===Kc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$c)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Kc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qc||n===eh||n===th)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Qc)return a===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===eh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===th)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nh||n===ih||n===sh||n===rh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===nh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ih)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Nb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ub=`
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

}`,Dd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Xa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new It({vertexShader:Nb,fragmentShader:Ub,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new Bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Id=class extends _i{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,p=null,f=null,_=null,g=typeof XRWebGLBinding<"u",m=new Dd,d={},x=t.getContextAttributes(),v=null,y=null,S=[],M=[],w=new de,A=null,b=new qt;b.viewport=new ct;let E=new qt;E.viewport=new ct;let D=[b,E],R=new rc,N=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let te=S[Q];return te===void 0&&(te=new Fr,S[Q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Q){let te=S[Q];return te===void 0&&(te=new Fr,S[Q]=te),te.getGripSpace()},this.getHand=function(Q){let te=S[Q];return te===void 0&&(te=new Fr,S[Q]=te),te.getHandSpace()};function z(Q){let te=M.indexOf(Q.inputSource);if(te===-1)return;let j=S[te];j!==void 0&&(j.update(Q.inputSource,Q.frame,c||a),j.dispatchEvent({type:Q.type,data:Q.inputSource}))}function B(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",H);for(let Q=0;Q<S.length;Q++){let te=M[Q];te!==null&&(M[Q]=null,S[Q].disconnect(te))}N=null,F=null,m.reset();for(let Q in d)delete d[Q];e.setRenderTarget(v),f=null,p=null,u=null,s=null,y=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",B),s.addEventListener("inputsourceschange",H),x.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(w),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,me=null,se=null;x.depth&&(se=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=x.stencil?hs:Dr,me=x.stencil?cs:ls);let Me={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};u=this.getBinding(),p=u.createProjectionLayer(Me),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new dn(p.textureWidth,p.textureHeight,{format:bn,type:kn,depthTexture:new zs(p.textureWidth,p.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let j={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new dn(f.framebufferWidth,f.framebufferHeight,{format:bn,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Oe.setContext(s),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(Q){for(let te=0;te<Q.removed.length;te++){let j=Q.removed[te],me=M.indexOf(j);me>=0&&(M[me]=null,S[me].disconnect(j))}for(let te=0;te<Q.added.length;te++){let j=Q.added[te],me=M.indexOf(j);if(me===-1){for(let Me=0;Me<S.length;Me++)if(Me>=M.length){M.push(j),me=Me;break}else if(M[Me]===null){M[Me]=j,me=Me;break}if(me===-1)break}let se=S[me];se&&se.connect(j)}}let O=new I,W=new I;function K(Q,te,j){O.setFromMatrixPosition(te.matrixWorld),W.setFromMatrixPosition(j.matrixWorld);let me=O.distanceTo(W),se=te.projectionMatrix.elements,Me=j.projectionMatrix.elements,Ye=se[14]/(se[10]-1),L=se[14]/(se[10]+1),We=(se[9]+1)/se[5],Ne=(se[9]-1)/se[5],Te=(se[8]-1)/se[0],$=(Me[8]+1)/Me[0],Se=Ye*Te,pe=Ye*$,xe=me/(-Te+$),$e=xe*-Te;if(te.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX($e),Q.translateZ(xe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),se[10]===-1)Q.projectionMatrix.copy(te.projectionMatrix),Q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let et=Ye+xe,P=L+xe,T=Se-$e,G=pe+(me-$e),Z=We*L/P*et,ie=Ne*L/P*et;Q.projectionMatrix.makePerspective(T,G,Z,ie,et,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ae(Q,te){te===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(te.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let te=Q.near,j=Q.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(j=m.depthFar)),R.near=E.near=b.near=te,R.far=E.far=b.far=j,(N!==R.near||F!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),N=R.near,F=R.far),R.layers.mask=Q.layers.mask|6,b.layers.mask=R.layers.mask&3,E.layers.mask=R.layers.mask&5;let me=Q.parent,se=R.cameras;ae(R,me);for(let Me=0;Me<se.length;Me++)ae(se[Me],me);se.length===2?K(R,b,E):R.projectionMatrix.copy(b.projectionMatrix),re(Q,R,me)};function re(Q,te,j){j===null?Q.matrix.copy(te.matrixWorld):(Q.matrix.copy(j.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(te.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(te.projectionMatrix),Q.projectionMatrixInverse.copy(te.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ir*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(Q){l=Q,p!==null&&(p.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(R)},this.getCameraTexture=function(Q){return d[Q]};let we=null;function Le(Q,te){if(h=te.getViewerPose(c||a),_=te,h!==null){let j=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let me=!1;j.length!==R.cameras.length&&(R.cameras.length=0,me=!0);for(let L=0;L<j.length;L++){let We=j[L],Ne=null;if(f!==null)Ne=f.getViewport(We);else{let $=u.getViewSubImage(p,We);Ne=$.viewport,L===0&&(e.setRenderTargetTextures(y,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(y))}let Te=D[L];Te===void 0&&(Te=new qt,Te.layers.enable(L),Te.viewport=new ct,D[L]=Te),Te.matrix.fromArray(We.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(We.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),L===0&&(R.matrix.copy(Te.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),me===!0&&R.cameras.push(Te)}let se=s.enabledFeatures;if(se&&se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){u=n.getBinding();let L=u.getDepthInformation(j[0]);L&&L.isValid&&L.texture&&m.init(L,s.renderState)}if(se&&se.includes("camera-access")&&g){e.state.unbindTexture(),u=n.getBinding();for(let L=0;L<j.length;L++){let We=j[L].camera;if(We){let Ne=d[We];Ne||(Ne=new Xa,d[We]=Ne);let Te=u.getCameraImage(We);Ne.sourceTexture=Te}}}}for(let j=0;j<S.length;j++){let me=M[j],se=S[j];me!==null&&se!==void 0&&se.update(me,te,c||a)}we&&we(Q,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),_=null}let Oe=new f0;Oe.setAnimationLoop(Le),this.setAnimationLoop=function(Q){we=Q},this.dispose=function(){}}},js=new Sn,Fb=new Qe;function Ob(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,pd(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,x,v,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),p(m,d),d.isMeshPhysicalMaterial&&f(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,x,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Yt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Yt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let x=e.get(d),v=x.envMap,y=x.envMapRotation;v&&(m.envMap.value=v,js.copy(y),js.x*=-1,js.y*=-1,js.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),m.envMapRotation.value.setFromMatrix4(Fb.makeRotationFromEuler(js)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,x,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=v*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Yt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){let x=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Bb(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){let y=v.program;n.uniformBlockBinding(x,y)}function c(x,v){let y=s[x.id];y===void 0&&(_(x),y=h(x),s[x.id]=y,x.addEventListener("dispose",m));let S=v.program;n.updateUBOMapping(x,S);let M=e.render.frame;r[x.id]!==M&&(p(x),r[x.id]=M)}function h(x){let v=u();x.__bindingPointIndex=v;let y=i.createBuffer(),S=x.__size,M=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,S,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){let v=s[x.id],y=x.uniforms,S=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let M=0,w=y.length;M<w;M++){let A=Array.isArray(y[M])?y[M]:[y[M]];for(let b=0,E=A.length;b<E;b++){let D=A[b];if(f(D,M,b,S)===!0){let R=D.__offset,N=Array.isArray(D.value)?D.value:[D.value],F=0;for(let z=0;z<N.length;z++){let B=N[z],H=g(B);typeof B=="number"||typeof B=="boolean"?(D.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,R+F,D.__data)):B.isMatrix3?(D.__data[0]=B.elements[0],D.__data[1]=B.elements[1],D.__data[2]=B.elements[2],D.__data[3]=0,D.__data[4]=B.elements[3],D.__data[5]=B.elements[4],D.__data[6]=B.elements[5],D.__data[7]=0,D.__data[8]=B.elements[6],D.__data[9]=B.elements[7],D.__data[10]=B.elements[8],D.__data[11]=0):(B.toArray(D.__data,F),F+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,R,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,v,y,S){let M=x.value,w=v+"_"+y;if(S[w]===void 0)return typeof M=="number"||typeof M=="boolean"?S[w]=M:S[w]=M.clone(),!0;{let A=S[w];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return S[w]=M,!0}else if(A.equals(M)===!1)return A.copy(M),!0}return!1}function _(x){let v=x.uniforms,y=0,S=16;for(let w=0,A=v.length;w<A;w++){let b=Array.isArray(v[w])?v[w]:[v[w]];for(let E=0,D=b.length;E<D;E++){let R=b[E],N=Array.isArray(R.value)?R.value:[R.value];for(let F=0,z=N.length;F<z;F++){let B=N[F],H=g(B),O=y%S,W=O%H.boundary,K=O+W;y+=W,K!==0&&S-K<H.storage&&(y+=S-K),R.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=y,y+=H.storage}}}let M=y%S;return M>0&&(y+=S-M),x.__size=y,x.__cache={},this}function g(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){let v=x.target;v.removeEventListener("dispose",m);let y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function d(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var ch=class{constructor(e={}){let{canvas:t=Fm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let _=new Uint32Array(4),g=new Int32Array(4),m=null,d=null,x=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,S=!1;this._outputColorSpace=Pt;let M=0,w=0,A=null,b=-1,E=null,D=new ct,R=new ct,N=null,F=new Ge(0),z=0,B=t.width,H=t.height,O=1,W=null,K=null,ae=new ct(0,0,B,H),re=new ct(0,0,B,H),we=!1,Le=new Or,Oe=!1,Q=!1,te=new Qe,j=new I,me=new ct,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Ye(){return A===null?O:1}let L=n;function We(C,k){return t.getContext(C,k)}try{let C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",le,!1),L===null){let k="webgl2";if(L=We(k,C),L===null)throw We(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ne,Te,$,Se,pe,xe,$e,et,P,T,G,Z,ie,Y,Ce,ue,Ee,De,ce,ve,Be,Ie,ge,ke;function U(){Ne=new nM(L),Ne.init(),Ie=new Lb(L,Ne),Te=new ZS(L,Ne,e,Ie),$=new Db(L,Ne),Te.reversedDepthBuffer&&p&&$.buffers.depth.setReversed(!0),Se=new rM(L),pe=new xb,xe=new Ib(L,Ne,$,pe,Te,Ie,Se),$e=new JS(y),et=new tM(y),P=new uv(L),ge=new YS(L,P),T=new iM(L,P,Se,ge),G=new oM(L,T,P,Se),ce=new aM(L,Te,xe),ue=new jS(pe),Z=new _b(y,$e,et,Ne,Te,ge,ue),ie=new Ob(y,pe),Y=new yb,Ce=new Tb(Ne),De=new XS(y,$e,et,$,G,f,l),Ee=new Rb(y,G,Te),ke=new Bb(L,Se,Te,$),ve=new $S(L,Ne,Se),Be=new sM(L,Ne,Se),Se.programs=Z.programs,y.capabilities=Te,y.extensions=Ne,y.properties=pe,y.renderLists=Y,y.shadowMap=Ee,y.state=$,y.info=Se}U();let oe=new Id(y,L);this.xr=oe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let C=Ne.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Ne.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(C){C!==void 0&&(O=C,this.setSize(B,H,!1))},this.getSize=function(C){return C.set(B,H)},this.setSize=function(C,k,q=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=C,H=k,t.width=Math.floor(C*O),t.height=Math.floor(k*O),q===!0&&(t.style.width=C+"px",t.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(B*O,H*O).floor()},this.setDrawingBufferSize=function(C,k,q){B=C,H=k,O=q,t.width=Math.floor(C*q),t.height=Math.floor(k*q),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(D)},this.getViewport=function(C){return C.copy(ae)},this.setViewport=function(C,k,q,X){C.isVector4?ae.set(C.x,C.y,C.z,C.w):ae.set(C,k,q,X),$.viewport(D.copy(ae).multiplyScalar(O).round())},this.getScissor=function(C){return C.copy(re)},this.setScissor=function(C,k,q,X){C.isVector4?re.set(C.x,C.y,C.z,C.w):re.set(C,k,q,X),$.scissor(R.copy(re).multiplyScalar(O).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(C){$.setScissorTest(we=C)},this.setOpaqueSort=function(C){W=C},this.setTransparentSort=function(C){K=C},this.getClearColor=function(C){return C.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(C=!0,k=!0,q=!0){let X=0;if(C){let V=!1;if(A!==null){let he=A.texture.format;V=he===Dc||he===Pc||he===Rc}if(V){let he=A.texture.type,ye=he===kn||he===ls||he===Wr||he===cs||he===Tc||he===Ac,Re=De.getClearColor(),be=De.getClearAlpha(),ze=Re.r,Ve=Re.g,Ue=Re.b;ye?(_[0]=ze,_[1]=Ve,_[2]=Ue,_[3]=be,L.clearBufferuiv(L.COLOR,0,_)):(g[0]=ze,g[1]=Ve,g[2]=Ue,g[3]=be,L.clearBufferiv(L.COLOR,0,g))}else X|=L.COLOR_BUFFER_BIT}k&&(X|=L.DEPTH_BUFFER_BIT),q&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",le,!1),De.dispose(),Y.dispose(),Ce.dispose(),pe.dispose(),$e.dispose(),et.dispose(),G.dispose(),ge.dispose(),ke.dispose(),Z.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",mi),oe.removeEventListener("sessionend",rp),ws.stop()};function fe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let C=Se.autoReset,k=Ee.enabled,q=Ee.autoUpdate,X=Ee.needsUpdate,V=Ee.type;U(),Se.autoReset=C,Ee.enabled=k,Ee.autoUpdate=q,Ee.needsUpdate=X,Ee.type=V}function le(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ne(C){let k=C.target;k.removeEventListener("dispose",ne),Pe(k)}function Pe(C){qe(C),pe.remove(C)}function qe(C){let k=pe.get(C).programs;k!==void 0&&(k.forEach(function(q){Z.releaseProgram(q)}),C.isShaderMaterial&&Z.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,q,X,V,he){k===null&&(k=se);let ye=V.isMesh&&V.matrixWorld.determinant()<0,Re=P_(C,k,q,X,V);$.setMaterial(X,ye);let be=q.index,ze=1;if(X.wireframe===!0){if(be=T.getWireframeAttribute(q),be===void 0)return;ze=2}let Ve=q.drawRange,Ue=q.attributes.position,tt=Ve.start*ze,ht=(Ve.start+Ve.count)*ze;he!==null&&(tt=Math.max(tt,he.start*ze),ht=Math.min(ht,(he.start+he.count)*ze)),be!==null?(tt=Math.max(tt,0),ht=Math.min(ht,be.count)):Ue!=null&&(tt=Math.max(tt,0),ht=Math.min(ht,Ue.count));let Tt=ht-tt;if(Tt<0||Tt===1/0)return;ge.setup(V,X,Re,q,be);let gt,dt=ve;if(be!==null&&(gt=P.get(be),dt=Be,dt.setIndex(gt)),V.isMesh)X.wireframe===!0?($.setLineWidth(X.wireframeLinewidth*Ye()),dt.setMode(L.LINES)):dt.setMode(L.TRIANGLES);else if(V.isLine){let Fe=X.linewidth;Fe===void 0&&(Fe=1),$.setLineWidth(Fe*Ye()),V.isLineSegments?dt.setMode(L.LINES):V.isLineLoop?dt.setMode(L.LINE_LOOP):dt.setMode(L.LINE_STRIP)}else V.isPoints?dt.setMode(L.POINTS):V.isSprite&&dt.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Lr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))dt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Fe=V._multiDrawStarts,yt=V._multiDrawCounts,rt=V._multiDrawCount,In=be?P.get(be).bytesPerElement:1,dr=pe.get(X).currentProgram.getUniforms();for(let Ln=0;Ln<rt;Ln++)dr.setValue(L,"_gl_DrawID",Ln),dt.render(Fe[Ln]/In,yt[Ln])}else if(V.isInstancedMesh)dt.renderInstances(tt,Tt,V.count);else if(q.isInstancedBufferGeometry){let Fe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,yt=Math.min(q.instanceCount,Fe);dt.renderInstances(tt,Tt,yt)}else dt.render(tt,Tt)};function mt(C,k,q){C.transparent===!0&&C.side===nn&&C.forceSinglePass===!1?(C.side=Yt,C.needsUpdate=!0,tl(C,k,q),C.side=Ii,C.needsUpdate=!0,tl(C,k,q),C.side=nn):tl(C,k,q)}this.compile=function(C,k,q=null){q===null&&(q=C),d=Ce.get(q),d.init(k),v.push(d),q.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),C!==q&&C.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),d.setupLights();let X=new Set;return C.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let he=V.material;if(he)if(Array.isArray(he))for(let ye=0;ye<he.length;ye++){let Re=he[ye];mt(Re,q,V),X.add(Re)}else mt(he,q,V),X.add(he)}),d=v.pop(),X},this.compileAsync=function(C,k,q=null){let X=this.compile(C,k,q);return new Promise(V=>{function he(){if(X.forEach(function(ye){pe.get(ye).currentProgram.isReady()&&X.delete(ye)}),X.size===0){V(C);return}setTimeout(he,10)}Ne.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let lt=null;function Ei(C){lt&&lt(C)}function mi(){ws.stop()}function rp(){ws.start()}let ws=new f0;ws.setAnimationLoop(Ei),typeof self<"u"&&ws.setContext(self),this.setAnimationLoop=function(C){lt=C,oe.setAnimationLoop(C),C===null?ws.stop():ws.start()},oe.addEventListener("sessionstart",mi),oe.addEventListener("sessionend",rp),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(k),k=oe.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,k,A),d=Ce.get(C,v.length),d.init(k),v.push(d),te.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Le.setFromProjectionMatrix(te,hi,k.reversedDepth),Q=this.localClippingEnabled,Oe=ue.init(this.clippingPlanes,Q),m=Y.get(C,x.length),m.init(),x.push(m),oe.enabled===!0&&oe.isPresenting===!0){let he=y.xr.getDepthSensingMesh();he!==null&&ru(he,k,-1/0,y.sortObjects)}ru(C,k,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(W,K),Me=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Me&&De.addToRenderList(m,C),this.info.render.frame++,Oe===!0&&ue.beginShadows();let q=d.state.shadowsArray;Ee.render(q,C,k),Oe===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=m.opaque,V=m.transmissive;if(d.setupLights(),k.isArrayCamera){let he=k.cameras;if(V.length>0)for(let ye=0,Re=he.length;ye<Re;ye++){let be=he[ye];op(X,V,C,be)}Me&&De.render(C);for(let ye=0,Re=he.length;ye<Re;ye++){let be=he[ye];ap(m,C,be,be.viewport)}}else V.length>0&&op(X,V,C,k),Me&&De.render(C),ap(m,C,k);A!==null&&w===0&&(xe.updateMultisampleRenderTarget(A),xe.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(y,C,k),ge.resetDefaultState(),b=-1,E=null,v.pop(),v.length>0?(d=v[v.length-1],Oe===!0&&ue.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function ru(C,k,q,X){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)d.pushLight(C),C.castShadow&&d.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Le.intersectsSprite(C)){X&&me.setFromMatrixPosition(C.matrixWorld).applyMatrix4(te);let ye=G.update(C),Re=C.material;Re.visible&&m.push(C,ye,Re,q,me.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Le.intersectsObject(C))){let ye=G.update(C),Re=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),me.copy(C.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),me.copy(ye.boundingSphere.center)),me.applyMatrix4(C.matrixWorld).applyMatrix4(te)),Array.isArray(Re)){let be=ye.groups;for(let ze=0,Ve=be.length;ze<Ve;ze++){let Ue=be[ze],tt=Re[Ue.materialIndex];tt&&tt.visible&&m.push(C,ye,tt,q,me.z,Ue)}}else Re.visible&&m.push(C,ye,Re,q,me.z,null)}}let he=C.children;for(let ye=0,Re=he.length;ye<Re;ye++)ru(he[ye],k,q,X)}function ap(C,k,q,X){let V=C.opaque,he=C.transmissive,ye=C.transparent;d.setupLightsView(q),Oe===!0&&ue.setGlobalState(y.clippingPlanes,q),X&&$.viewport(D.copy(X)),V.length>0&&el(V,k,q),he.length>0&&el(he,k,q),ye.length>0&&el(ye,k,q),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function op(C,k,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[X.id]===void 0&&(d.state.transmissionRenderTarget[X.id]=new dn(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?pi:kn,minFilter:os,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));let he=d.state.transmissionRenderTarget[X.id],ye=X.viewport||D;he.setSize(ye.z*y.transmissionResolutionScale,ye.w*y.transmissionResolutionScale);let Re=y.getRenderTarget(),be=y.getActiveCubeFace(),ze=y.getActiveMipmapLevel();y.setRenderTarget(he),y.getClearColor(F),z=y.getClearAlpha(),z<1&&y.setClearColor(16777215,.5),y.clear(),Me&&De.render(q);let Ve=y.toneMapping;y.toneMapping=Oi;let Ue=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),d.setupLightsView(X),Oe===!0&&ue.setGlobalState(y.clippingPlanes,X),el(C,q,X),xe.updateMultisampleRenderTarget(he),xe.updateRenderTargetMipmap(he),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let ht=0,Tt=k.length;ht<Tt;ht++){let gt=k[ht],dt=gt.object,Fe=gt.geometry,yt=gt.material,rt=gt.group;if(yt.side===nn&&dt.layers.test(X.layers)){let In=yt.side;yt.side=Yt,yt.needsUpdate=!0,lp(dt,q,X,Fe,yt,rt),yt.side=In,yt.needsUpdate=!0,tt=!0}}tt===!0&&(xe.updateMultisampleRenderTarget(he),xe.updateRenderTargetMipmap(he))}y.setRenderTarget(Re,be,ze),y.setClearColor(F,z),Ue!==void 0&&(X.viewport=Ue),y.toneMapping=Ve}function el(C,k,q){let X=k.isScene===!0?k.overrideMaterial:null;for(let V=0,he=C.length;V<he;V++){let ye=C[V],Re=ye.object,be=ye.geometry,ze=ye.group,Ve=ye.material;Ve.allowOverride===!0&&X!==null&&(Ve=X),Re.layers.test(q.layers)&&lp(Re,k,q,be,Ve,ze)}}function lp(C,k,q,X,V,he){C.onBeforeRender(y,k,q,X,V,he),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),V.onBeforeRender(y,k,q,X,C,he),V.transparent===!0&&V.side===nn&&V.forceSinglePass===!1?(V.side=Yt,V.needsUpdate=!0,y.renderBufferDirect(q,k,X,V,C,he),V.side=Ii,V.needsUpdate=!0,y.renderBufferDirect(q,k,X,V,C,he),V.side=nn):y.renderBufferDirect(q,k,X,V,C,he),C.onAfterRender(y,k,q,X,V,he)}function tl(C,k,q){k.isScene!==!0&&(k=se);let X=pe.get(C),V=d.state.lights,he=d.state.shadowsArray,ye=V.state.version,Re=Z.getParameters(C,V.state,he,k,q),be=Z.getProgramCacheKey(Re),ze=X.programs;X.environment=C.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(C.isMeshStandardMaterial?et:$e).get(C.envMap||X.environment),X.envMapRotation=X.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,ze===void 0&&(C.addEventListener("dispose",ne),ze=new Map,X.programs=ze);let Ve=ze.get(be);if(Ve!==void 0){if(X.currentProgram===Ve&&X.lightsStateVersion===ye)return hp(C,Re),Ve}else Re.uniforms=Z.getUniforms(C),C.onBeforeCompile(Re,y),Ve=Z.acquireProgram(Re,be),ze.set(be,Ve),X.uniforms=Re.uniforms;let Ue=X.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ue.clippingPlanes=ue.uniform),hp(C,Re),X.needsLights=I_(C),X.lightsStateVersion=ye,X.needsLights&&(Ue.ambientLightColor.value=V.state.ambient,Ue.lightProbe.value=V.state.probe,Ue.directionalLights.value=V.state.directional,Ue.directionalLightShadows.value=V.state.directionalShadow,Ue.spotLights.value=V.state.spot,Ue.spotLightShadows.value=V.state.spotShadow,Ue.rectAreaLights.value=V.state.rectArea,Ue.ltc_1.value=V.state.rectAreaLTC1,Ue.ltc_2.value=V.state.rectAreaLTC2,Ue.pointLights.value=V.state.point,Ue.pointLightShadows.value=V.state.pointShadow,Ue.hemisphereLights.value=V.state.hemi,Ue.directionalShadowMap.value=V.state.directionalShadowMap,Ue.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ue.spotShadowMap.value=V.state.spotShadowMap,Ue.spotLightMatrix.value=V.state.spotLightMatrix,Ue.spotLightMap.value=V.state.spotLightMap,Ue.pointShadowMap.value=V.state.pointShadowMap,Ue.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=Ve,X.uniformsList=null,Ve}function cp(C){if(C.uniformsList===null){let k=C.currentProgram.getUniforms();C.uniformsList=$r.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function hp(C,k){let q=pe.get(C);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function P_(C,k,q,X,V){k.isScene!==!0&&(k=se),xe.resetTextureUnits();let he=k.fog,ye=X.isMeshStandardMaterial?k.environment:null,Re=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Fs,be=(X.isMeshStandardMaterial?et:$e).get(X.envMap||ye),ze=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ve=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ue=!!q.morphAttributes.position,tt=!!q.morphAttributes.normal,ht=!!q.morphAttributes.color,Tt=Oi;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Tt=y.toneMapping);let gt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,dt=gt!==void 0?gt.length:0,Fe=pe.get(X),yt=d.state.lights;if(Oe===!0&&(Q===!0||C!==E)){let cn=C===E&&X.id===b;ue.setState(X,C,cn)}let rt=!1;X.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==yt.state.version||Fe.outputColorSpace!==Re||V.isBatchedMesh&&Fe.batching===!1||!V.isBatchedMesh&&Fe.batching===!0||V.isBatchedMesh&&Fe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Fe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Fe.instancing===!1||!V.isInstancedMesh&&Fe.instancing===!0||V.isSkinnedMesh&&Fe.skinning===!1||!V.isSkinnedMesh&&Fe.skinning===!0||V.isInstancedMesh&&Fe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Fe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Fe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Fe.instancingMorph===!1&&V.morphTexture!==null||Fe.envMap!==be||X.fog===!0&&Fe.fog!==he||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ue.numPlanes||Fe.numIntersection!==ue.numIntersection)||Fe.vertexAlphas!==ze||Fe.vertexTangents!==Ve||Fe.morphTargets!==Ue||Fe.morphNormals!==tt||Fe.morphColors!==ht||Fe.toneMapping!==Tt||Fe.morphTargetsCount!==dt)&&(rt=!0):(rt=!0,Fe.__version=X.version);let In=Fe.currentProgram;rt===!0&&(In=tl(X,k,V));let dr=!1,Ln=!1,_a=!1,St=In.getUniforms(),$n=Fe.uniforms;if($.useProgram(In.program)&&(dr=!0,Ln=!0,_a=!0),X.id!==b&&(b=X.id,Ln=!0),dr||E!==C){$.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),St.setValue(L,"projectionMatrix",C.projectionMatrix),St.setValue(L,"viewMatrix",C.matrixWorldInverse);let xn=St.map.cameraPosition;xn!==void 0&&xn.setValue(L,j.setFromMatrixPosition(C.matrixWorld)),Te.logarithmicDepthBuffer&&St.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&St.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),E!==C&&(E=C,Ln=!0,_a=!0)}if(V.isSkinnedMesh){St.setOptional(L,V,"bindMatrix"),St.setOptional(L,V,"bindMatrixInverse");let cn=V.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),St.setValue(L,"boneTexture",cn.boneTexture,xe))}V.isBatchedMesh&&(St.setOptional(L,V,"batchingTexture"),St.setValue(L,"batchingTexture",V._matricesTexture,xe),St.setOptional(L,V,"batchingIdTexture"),St.setValue(L,"batchingIdTexture",V._indirectTexture,xe),St.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&St.setValue(L,"batchingColorTexture",V._colorsTexture,xe));let Zn=q.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&ce.update(V,q,In),(Ln||Fe.receiveShadow!==V.receiveShadow)&&(Fe.receiveShadow=V.receiveShadow,St.setValue(L,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&($n.envMap.value=be,$n.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&($n.envMapIntensity.value=k.environmentIntensity),Ln&&(St.setValue(L,"toneMappingExposure",y.toneMappingExposure),Fe.needsLights&&D_($n,_a),he&&X.fog===!0&&ie.refreshFogUniforms($n,he),ie.refreshMaterialUniforms($n,X,O,H,d.state.transmissionRenderTarget[C.id]),$r.upload(L,cp(Fe),$n,xe)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&($r.upload(L,cp(Fe),$n,xe),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&St.setValue(L,"center",V.center),St.setValue(L,"modelViewMatrix",V.modelViewMatrix),St.setValue(L,"normalMatrix",V.normalMatrix),St.setValue(L,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let cn=X.uniformsGroups;for(let xn=0,au=cn.length;xn<au;xn++){let Es=cn[xn];ke.update(Es,In),ke.bind(Es,In)}}return In}function D_(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function I_(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,k,q){let X=pe.get(C);X.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),pe.get(C.texture).__webglTexture=k,pe.get(C.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,k){let q=pe.get(C);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0};let L_=L.createFramebuffer();this.setRenderTarget=function(C,k=0,q=0){A=C,M=k,w=q;let X=!0,V=null,he=!1,ye=!1;if(C){let be=pe.get(C);if(be.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(L.FRAMEBUFFER,null),X=!1;else if(be.__webglFramebuffer===void 0)xe.setupRenderTarget(C);else if(be.__hasExternalTextures)xe.rebindTextures(C,pe.get(C.texture).__webglTexture,pe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Ue=C.depthTexture;if(be.__boundDepthTexture!==Ue){if(Ue!==null&&pe.has(Ue)&&(C.width!==Ue.image.width||C.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");xe.setupDepthRenderbuffer(C)}}let ze=C.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(ye=!0);let Ve=pe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ve[k])?V=Ve[k][q]:V=Ve[k],he=!0):C.samples>0&&xe.useMultisampledRTT(C)===!1?V=pe.get(C).__webglMultisampledFramebuffer:Array.isArray(Ve)?V=Ve[q]:V=Ve,D.copy(C.viewport),R.copy(C.scissor),N=C.scissorTest}else D.copy(ae).multiplyScalar(O).floor(),R.copy(re).multiplyScalar(O).floor(),N=we;if(q!==0&&(V=L_),$.bindFramebuffer(L.FRAMEBUFFER,V)&&X&&$.drawBuffers(C,V),$.viewport(D),$.scissor(R),$.setScissorTest(N),he){let be=pe.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,be.__webglTexture,q)}else if(ye){let be=k;for(let ze=0;ze<C.textures.length;ze++){let Ve=pe.get(C.textures[ze]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ze,Ve.__webglTexture,q,be)}}else if(C!==null&&q!==0){let be=pe.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,be.__webglTexture,q)}b=-1},this.readRenderTargetPixels=function(C,k,q,X,V,he,ye,Re=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=pe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ye!==void 0&&(be=be[ye]),be){$.bindFramebuffer(L.FRAMEBUFFER,be);try{let ze=C.textures[Re],Ve=ze.format,Ue=ze.type;if(!Te.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-X&&q>=0&&q<=C.height-V&&(C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Re),L.readPixels(k,q,X,V,Ie.convert(Ve),Ie.convert(Ue),he))}finally{let ze=A!==null?pe.get(A).__webglFramebuffer:null;$.bindFramebuffer(L.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(C,k,q,X,V,he,ye,Re=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=pe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ye!==void 0&&(be=be[ye]),be)if(k>=0&&k<=C.width-X&&q>=0&&q<=C.height-V){$.bindFramebuffer(L.FRAMEBUFFER,be);let ze=C.textures[Re],Ve=ze.format,Ue=ze.type;if(!Te.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Te.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let tt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,tt),L.bufferData(L.PIXEL_PACK_BUFFER,he.byteLength,L.STREAM_READ),C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Re),L.readPixels(k,q,X,V,Ie.convert(Ve),Ie.convert(Ue),0);let ht=A!==null?pe.get(A).__webglFramebuffer:null;$.bindFramebuffer(L.FRAMEBUFFER,ht);let Tt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Om(L,Tt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,tt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,he),L.deleteBuffer(tt),L.deleteSync(Tt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,k=null,q=0){let X=Math.pow(2,-q),V=Math.floor(C.image.width*X),he=Math.floor(C.image.height*X),ye=k!==null?k.x:0,Re=k!==null?k.y:0;xe.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,ye,Re,V,he),$.unbindTexture()};let N_=L.createFramebuffer(),U_=L.createFramebuffer();this.copyTextureToTexture=function(C,k,q=null,X=null,V=0,he=null){he===null&&(V!==0?(Lr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=V,V=0):he=0);let ye,Re,be,ze,Ve,Ue,tt,ht,Tt,gt=C.isCompressedTexture?C.mipmaps[he]:C.image;if(q!==null)ye=q.max.x-q.min.x,Re=q.max.y-q.min.y,be=q.isBox3?q.max.z-q.min.z:1,ze=q.min.x,Ve=q.min.y,Ue=q.isBox3?q.min.z:0;else{let Zn=Math.pow(2,-V);ye=Math.floor(gt.width*Zn),Re=Math.floor(gt.height*Zn),C.isDataArrayTexture?be=gt.depth:C.isData3DTexture?be=Math.floor(gt.depth*Zn):be=1,ze=0,Ve=0,Ue=0}X!==null?(tt=X.x,ht=X.y,Tt=X.z):(tt=0,ht=0,Tt=0);let dt=Ie.convert(k.format),Fe=Ie.convert(k.type),yt;k.isData3DTexture?(xe.setTexture3D(k,0),yt=L.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(xe.setTexture2DArray(k,0),yt=L.TEXTURE_2D_ARRAY):(xe.setTexture2D(k,0),yt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);let rt=L.getParameter(L.UNPACK_ROW_LENGTH),In=L.getParameter(L.UNPACK_IMAGE_HEIGHT),dr=L.getParameter(L.UNPACK_SKIP_PIXELS),Ln=L.getParameter(L.UNPACK_SKIP_ROWS),_a=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,gt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ze),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ve),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ue);let St=C.isDataArrayTexture||C.isData3DTexture,$n=k.isDataArrayTexture||k.isData3DTexture;if(C.isDepthTexture){let Zn=pe.get(C),cn=pe.get(k),xn=pe.get(Zn.__renderTarget),au=pe.get(cn.__renderTarget);$.bindFramebuffer(L.READ_FRAMEBUFFER,xn.__webglFramebuffer),$.bindFramebuffer(L.DRAW_FRAMEBUFFER,au.__webglFramebuffer);for(let Es=0;Es<be;Es++)St&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pe.get(C).__webglTexture,V,Ue+Es),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pe.get(k).__webglTexture,he,Tt+Es)),L.blitFramebuffer(ze,Ve,ye,Re,tt,ht,ye,Re,L.DEPTH_BUFFER_BIT,L.NEAREST);$.bindFramebuffer(L.READ_FRAMEBUFFER,null),$.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||C.isRenderTargetTexture||pe.has(C)){let Zn=pe.get(C),cn=pe.get(k);$.bindFramebuffer(L.READ_FRAMEBUFFER,N_),$.bindFramebuffer(L.DRAW_FRAMEBUFFER,U_);for(let xn=0;xn<be;xn++)St?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Zn.__webglTexture,V,Ue+xn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Zn.__webglTexture,V),$n?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,cn.__webglTexture,he,Tt+xn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,cn.__webglTexture,he),V!==0?L.blitFramebuffer(ze,Ve,ye,Re,tt,ht,ye,Re,L.COLOR_BUFFER_BIT,L.NEAREST):$n?L.copyTexSubImage3D(yt,he,tt,ht,Tt+xn,ze,Ve,ye,Re):L.copyTexSubImage2D(yt,he,tt,ht,ze,Ve,ye,Re);$.bindFramebuffer(L.READ_FRAMEBUFFER,null),$.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else $n?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(yt,he,tt,ht,Tt,ye,Re,be,dt,Fe,gt.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(yt,he,tt,ht,Tt,ye,Re,be,dt,gt.data):L.texSubImage3D(yt,he,tt,ht,Tt,ye,Re,be,dt,Fe,gt):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,he,tt,ht,ye,Re,dt,Fe,gt.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,he,tt,ht,gt.width,gt.height,dt,gt.data):L.texSubImage2D(L.TEXTURE_2D,he,tt,ht,ye,Re,dt,Fe,gt);L.pixelStorei(L.UNPACK_ROW_LENGTH,rt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,In),L.pixelStorei(L.UNPACK_SKIP_PIXELS,dr),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ln),L.pixelStorei(L.UNPACK_SKIP_IMAGES,_a),he===0&&k.generateMipmaps&&L.generateMipmap(yt),$.unbindTexture()},this.initRenderTarget=function(C){pe.get(C).__webglFramebuffer===void 0&&xe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?xe.setTextureCube(C,0):C.isData3DTexture?xe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?xe.setTexture2DArray(C,0):xe.setTexture2D(C,0),$.unbindTexture()},this.resetState=function(){M=0,w=0,A=null,$.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};function x0(i,e){let t=new He;t.name="reference-furniture";let n=[[1.2,.046,.55,0,.727,0]],s=[],r=[];for(let c of[-.53,.53])for(let h of[-.21,.21])r.push([.04,.705,.04,c,.353,h]);for(let c of[-.27,.27]){s.push([.4,.04,.4,c,.43,.58]),s.push([.4,.28,.04,c,.66,.76]);for(let h of[-.15,.15])r.push([.03,.41,.03,c+h,.205,.43]),r.push([.03,.69,.03,c+h,.345,.752])}let a=Math.max(...[...n,...s,...r].map(c=>c[5]+c[2]/2)),o=e(i,a),l=new Qe;for(let[c,h]of[[n,"#c99f73"],[s,"#729baa"],[r,"#829ca9"]]){let u=new Ni(new At,new tn({color:h,roughness:.8}),o.length*c.length),p=0;for(let[f,,_]of o)for(let[g,m,d,x,v,y]of c)u.setMatrixAt(p++,l.makeScale(g,m,d).setPosition(f+x,v,_+y));u.castShadow=u.receiveShadow=!0,t.add(u)}return t}var v0={type:"change"},Ud={type:"start"},S0={type:"end"},uh=new ts,y0=new Ot,zb=Math.cos(70*qr.DEG2RAD),kt=new I,wn=2*Math.PI,ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Nd=1e-6,dh=class extends po{constructor(e,t=null){super(e,t),this.state=ut.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:rs.ROTATE,MIDDLE:rs.DOLLY,RIGHT:rs.PAN},this.touches={ONE:as.ROTATE,TWO:as.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new yn,this._lastTargetPosition=new I,this._quat=new yn().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hr,this._sphericalDelta=new Hr,this._scale=1,this._panOffset=new I,this._rotateStart=new de,this._rotateEnd=new de,this._rotateDelta=new de,this._panStart=new de,this._panEnd=new de,this._panDelta=new de,this._dollyStart=new de,this._dollyEnd=new de,this._dollyDelta=new de,this._dollyDirection=new I,this._mouse=new de,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Vb.bind(this),this._onPointerDown=kb.bind(this),this._onPointerUp=Hb.bind(this),this._onContextMenu=Zb.bind(this),this._onMouseWheel=qb.bind(this),this._onKeyDown=Xb.bind(this),this._onTouchStart=Yb.bind(this),this._onTouchMove=$b.bind(this),this._onMouseDown=Gb.bind(this),this._onMouseMove=Wb.bind(this),this._interceptControlDown=jb.bind(this),this._interceptControlUp=Jb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(v0),this.update(),this.state=ut.NONE}update(e=null){let t=this.object.position;kt.copy(t).sub(this.target),kt.applyQuaternion(this._quat),this._spherical.setFromVector3(kt),this.autoRotate&&this.state===ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=wn:n>Math.PI&&(n-=wn),s<-Math.PI?s+=wn:s>Math.PI&&(s-=wn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(kt.setFromSpherical(this._spherical),kt.applyQuaternion(this._quatInverse),t.copy(this.target).add(kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=kt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(uh.origin.copy(this.object.position),uh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(uh.direction))<zb?this.object.lookAt(this.target):(y0.setFromNormalAndCoplanarPoint(this.object.up,this.target),uh.intersectPlane(y0,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Nd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Nd||this._lastTargetPosition.distanceToSquared(this.target)>Nd?(this.dispatchEvent(v0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?wn/60*this.autoRotateSpeed*e:wn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){kt.setFromMatrixColumn(t,0),kt.multiplyScalar(-e),this._panOffset.add(kt)}_panUp(e,t){this.screenSpacePanning===!0?kt.setFromMatrixColumn(t,1):(kt.setFromMatrixColumn(t,0),kt.crossVectors(this.object.up,kt)),kt.multiplyScalar(e),this._panOffset.add(kt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;kt.copy(s).sub(this.target);let r=kt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(wn*this._rotateDelta.x/t.clientHeight),this._rotateUp(wn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(wn*this._rotateDelta.x/t.clientHeight),this._rotateUp(wn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new de,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function kb(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Vb(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Hb(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(S0),this.state=ut.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Gb(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case rs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ut.DOLLY;break;case rs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ut.ROTATE}break;case rs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ut.PAN}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(Ud)}function Wb(i){switch(this.state){case ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function qb(i){this.enabled===!1||this.enableZoom===!1||this.state!==ut.NONE||(i.preventDefault(),this.dispatchEvent(Ud),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(S0))}function Xb(i){this.enabled!==!1&&this._handleKeyDown(i)}function Yb(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case as.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ut.TOUCH_ROTATE;break;case as.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ut.TOUCH_PAN;break;default:this.state=ut.NONE}break;case 2:switch(this.touches.TWO){case as.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ut.TOUCH_DOLLY_PAN;break;case as.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ut.TOUCH_DOLLY_ROTATE;break;default:this.state=ut.NONE}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(Ud)}function $b(i){switch(this._trackPointer(i),this.state){case ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ut.NONE}}function Zb(i){this.enabled!==!1&&i.preventDefault()}function jb(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Jb(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Kb(i,e){return[{axis:"x",value:0,keepGreater:!0},{axis:"x",value:e.width,keepGreater:!1},{axis:"z",value:0,keepGreater:!0},{axis:"z",value:e.depth,keepGreater:!1}].reduce((n,s)=>{if(!n.length)return n;let r=l=>s.keepGreater?l[s.axis]>=s.value:l[s.axis]<=s.value,a=(l,c)=>{let h=c[s.axis]-l[s.axis],u=h===0?0:(s.value-l[s.axis])/h;return{x:l.x+(c.x-l.x)*u,z:l.z+(c.z-l.z)*u}},o=[];for(let l=0;l<n.length;l++){let c=n[l],h=n[(l+n.length-1)%n.length];r(c)?(r(h)||o.push(a(h,c)),o.push(c)):r(h)&&o.push(a(h,c))}return o},i)}function Qb(i,e,t,n,s,r){let a=Kb(e,r);if(a.length<3)return;let o=new zr;o.moveTo(a[0].x,a[0].z);for(let u of a.slice(1))o.lineTo(u.x,u.z);o.closePath();let l=new je(new to(o),new Mn({color:t,transparent:!0,opacity:n,side:nn,depthWrite:!1}));l.rotation.x=Math.PI/2,l.position.y=s,l.renderOrder=2+s*100,i.add(l);let c=a.map(u=>new I(u.x,s+.006,u.z)),h=new Ui(new xt().setFromPoints(c),new Kn({color:t,transparent:!0,opacity:.75,depthTest:!1}));h.renderOrder=l.renderOrder+.1,i.add(h)}function M0(i,e){let t=new He;for(let n of e)if(n.kind==="s210"){let s=n.direction==="rear"?1:-1;for(let[r,a,o]of[[8,.075,.025],[6,.13,.03]]){let l=[];for(let c=0;c<360;c+=4){let h=c*Math.PI/180,u=r/2*(1+s*Math.sin(h));l.push({x:n.x+u*Math.cos(h),z:n.depth+u*Math.sin(h)})}Qb(t,l,"#16a589",a,o,i)}}return t.visible=!1,t}function fh(i){return i==="standard"?{width:8,length:10,teacherCam:{x:8/2,y:5},studentCams:[{id:0,x:8/2,y:1}],speakers:[{id:0,x:.8,y:1.5},{id:1,x:8-.8,y:1.5},{id:2,x:.8,y:10-1.5},{id:3,x:8-.8,y:10-1.5}],largeScreen:Cs(8),hub:{x:1.5,y:1},displaySize:"55"}:i==="large"?{width:10,length:20,teacherCam:{x:10/2,y:7},studentCams:[{id:0,x:10/2,y:1}],speakers:[{id:0,x:1,y:2},{id:1,x:9,y:2},{id:2,x:1,y:9},{id:3,x:9,y:9},{id:4,x:1,y:16},{id:5,x:9,y:16}],largeScreen:Cs(10),hub:{x:1.5,y:1},displaySize:"65"}:i==="lecture"?{width:12,length:15,teacherCam:{x:12/2,y:7},studentCams:[{id:0,x:12/2,y:1}],speakers:[{id:0,x:1,y:2},{id:1,x:11,y:2},{id:2,x:1,y:13},{id:3,x:11,y:13}],largeScreen:Cs(12),hub:{x:1.5,y:1},displaySize:"65"}:i==="ultra"?{width:17,length:37,teacherCam:{x:17/2,y:9},studentCams:[{id:0,x:17/2,y:1}],speakers:[{id:0,x:1.5,y:3},{id:1,x:17-1.5,y:3},{id:2,x:1.5,y:15},{id:3,x:17-1.5,y:15},{id:4,x:1.5,y:27},{id:5,x:17-1.5,y:27},{id:6,x:1.5,y:34},{id:7,x:17-1.5,y:34}],largeScreen:Cs(17),hub:{x:2,y:1.5},displaySize:"75"}:null}function b0({width:i,depth:e,teacher:t,students:n,teacherModel:s,studentModel:r}){let a=i/2;return{teacher:s==="CV870"?{x:a,y:Math.min(e,10)}:t,students:r==="CV870"?[{id:0,x:a,y:0}]:n}}function Od({width:i,depth:e,teacher:t,students:n,teacherModel:s="CV870",studentModel:r="CV870",s210s:a=[],displaySize:o="55",s210Count:l=null}){let c=b0({width:i,depth:e,teacher:t,students:n,teacherModel:s,studentModel:r});return{teacherCam:c.teacher,studentCams:c.students,s210s:sl(i,e,a,l),speakers:gp(i,e),displays:mp(i,e,o),largeScreen:Cs(i)}}var Vt={CV870:{label:"CV870 Pro",projectOnly:!1,roleHfov:{teacher:43,student:94},roleMinDistance:{teacher:0,student:0},roleMaxDistance:{teacher:10,student:10}},CV210:{label:"CV210",projectOnly:!1,budgetPair:!0,roleHfov:{teacher:40,student:120},roleMinDistance:{teacher:5,student:1},roleMaxDistance:{teacher:12,student:10}},"PVC-G530P":{label:"PVC-G530P",opticalZoom:"30x",minHfov:2,maxHfov:56.5,projectOnly:!0},"PVC-G520P":{label:"PVC-G520P",opticalZoom:"20x",minHfov:2.8,maxHfov:56.5,projectOnly:!0},"PVC-G512P":{label:"PVC-G512P",opticalZoom:"12x",minHfov:7.6,maxHfov:81,projectOnly:!0}};var Jr=(i,e,t,n)=>{let s=t>500||e>16?3:t>300||e>12?2:1;return i>30?{teacher:"PVC-G530P",student:"PVC-G530P",studentQty:s,reason:n.longReasonFar}:i>20?{teacher:"PVC-G520P",student:"PVC-G530P",studentQty:s,reason:n.longReasonMid}:{teacher:"PVC-G520P",student:"PVC-G520P",studentQty:1,reason:n.longReasonNear}};var e1=(i,e)=>i&&Number.isFinite(i.x)&&Number.isFinite(i.y)&&i.x>=0&&i.x<=e.width&&i.y>=0&&i.y<=e.depth;function Bd(i,{geometry:e=!0}={}){if(!i||![1,2].includes(i.version))return"snapshotVersion";let{room:t,layout:n,cameraPlan:s,visibility:r}=i;if(!t||![t.width,t.depth,t.height].every(Number.isFinite)||t.width<4||t.width>30||t.depth<5||t.depth>50||t.height<2.4||t.height>6)return"roomSize";if(!n||!s||!Object.hasOwn(Vt,s.teacher)||!Object.hasOwn(Vt,s.student)||!r||["teacher","student","s210","speaker","display","ifp"].some(a=>typeof r[a]!="boolean")||typeof i.projectTitle!="string"||typeof i.lang!="string"||typeof i.hubName!="string"||typeof i.displayName!="string"||!["55","65","75"].includes(String(i.displaySize))||!["studentCams","s210s","speakers","displays"].every(a=>Array.isArray(n[a]))||n.studentCams.length<1||n.studentCams.length>3||n.s210s.length>10||n.speakers.length>100||n.displays.length>100||![n.teacherCam,n.hub,n.largeScreen,...n.studentCams,...n.s210s,...n.speakers,...n.displays].every(a=>e1(a,t))||n.s210s.some(a=>!["up","down"].includes(a.facing))||!Number.isFinite(n.largeScreen.width)||n.largeScreen.width<=0||!Number.isInteger(s.studentQty)||s.studentQty!==n.studentCams.length||!Vt[s.student].projectOnly&&s.studentQty!==1||i.qnexModel!==void 0&&!["NDP600","SL100","NMP311","NDP200"].includes(i.qnexModel)||i.s210Request!==void 0&&(!i.s210Request||!["auto","fixed"].includes(i.s210Request.mode)||i.s210Request.mode==="fixed"&&(!Number.isInteger(i.s210Request.count)||i.s210Request.count<0||i.s210Request.count>10)))return"snapshotInvalid";if(i.audioConfig!==void 0){let a=i.audioConfig;if(!a||typeof a!="object"||Array.isArray(a)||a.useBuiltInAmp!==void 0&&typeof a.useBuiltInAmp!="boolean")return"snapshotInvalid";for(let o of["amplifier","feedback"]){let l=a[o];if(l!==void 0&&(!l||typeof l!="object"||Array.isArray(l)||l.confirmed!==void 0&&typeof l.confirmed!="boolean"||l.model!==void 0&&(typeof l.model!="string"||l.model.length>120)||l.notes!==void 0&&(typeof l.notes!="string"||l.notes.length>1e3)||l.capacity!==void 0&&(!Number.isFinite(l.capacity)||l.capacity<0||l.capacity>100)))return"snapshotInvalid"}}if(i.version===2){if(!DisplayFit.valid(i.displayPlan))return"snapshotInvalid";if(e){let a=DisplayFit.fit(i.displayPlan,Ts(t.width,t.depth,t.height,n.hub),{fixed:!0});if(a.status==="blocked")return a.reason==="height"?"screenHeight":"screenSpace"}return null}if(e&&r.ifp){let a=xa(t.width,n.largeScreen,!0,[],i.displaySize),o=DisplayFit.fit(a,Ts(t.width,t.depth,t.height,n.hub),{fixed:!0});if(o.status==="blocked")return o.reason==="height"?"screenHeight":"screenSpace"}return null}function w0(i){if(!i)return{snapshot:null,error:null};try{if(!i.startsWith("#plan=")||i.length>2e5)return{error:"snapshotInvalid"};let e=JSON.parse(decodeURIComponent(i.slice(6))),t=Bd(e);return t==="screenSpace"||t==="screenHeight"?{snapshot:e,error:null,fitIssue:t}:t?{error:t}:{snapshot:e,error:null}}catch{return{error:"snapshotInvalid"}}}var ph=Object.freeze({width:8,depth:10,defaultHeight:3}),K2=Object.freeze(["standard","large","lecture","ultra"]),zd=Object.freeze({teacher:"CV870",student:"CV870",studentQty:1}),E0={s210:"#1ca78d",teacher:"#e87836",student:"#288fda",station:"#5576c7",ndp:"#b9783c",ifp:"#488cbe",display:"#6e7cda",speaker:"#75879b"},zi=i=>Number(i)*.0254*16/Math.sqrt(337),Eo=i=>Number(i)*.0254*9/Math.sqrt(337);function T0(i,e,t){return{stageMm:Math.round(i*1e3),screens:Array.from({length:e},(n,s)=>DisplayFit.standard("front",t,"ifp-"+(s+1),i/2,0))}}function t1({width:i,depth:e,height:t,ifpSize:n,ifpCount:s,displayPlan:r}){if(![i,e,t].every(Number.isFinite)||i<4||e<5||t<2.4||i>30||e>50||t>6)return"roomSize";if(r)return null;let a=DisplayFit.fit(T0(i,s,n),{width:i,depth:e,height:t,mainHeight:1.65,stations:[{x:.41,y:0}]});return a.status==="blocked"?a.reason==="height"?"screenHeight":"screenSpace":null}function A0(i){let{width:e,depth:t,height:n,ifpSize:s,ifpCount:r,displaySize:a,cameraPlan:o}=i,l=t1(i);if(l)return{error:l};let c=fh(i.preset),h=c&&c.width===e&&c.length===t?c:{teacherCam:{x:e/2,y:Math.min(t,10)},studentCams:[{id:0,x:e/2,y:0}],s210s:[]},u=Od({width:e,depth:t,teacher:h.teacherCam,students:h.studentCams,teacherModel:o.teacher,studentModel:o.student,s210s:i.s210Request?[]:h.s210s,s210Count:i.s210Request?.mode==="fixed"?i.s210Request.count:null,displaySize:a}),p=[],f=(d,x,v,y,S,M,w={})=>p.push({id:d,kind:x,name:w.name||d,x:v,depth:y,height:S,direction:M,color:E0[x],...w});u.s210s.forEach((d,x)=>f(`s210-${x+1}`,"s210",d.x,d.y,2.7,d.facing==="down"?"rear":"front",{name:`S210 S${x+1}`,planX:d.x,planDepth:d.y}));for(let[d,x,v]of[["teacher",o.teacher,1],["student",o.student,Vt[o.student].projectOnly?o.studentQty:1]])for(let y=0;y<v;y++){let S=d==="teacher"?u.teacherCam:u.studentCams[0],M=v===1?S.x:e*(y+1)/(v+1),w=d==="teacher"?"teacher-camera":`student-camera-${y+1}`,A=Vt[x];f(w,d,M,S.y,2.4,d==="teacher"?"front":"rear",{model:x,name:`${A.label} \xB7 ${d==="teacher"?"Teacher":`Student ${y+1}`}`,planX:M,planDepth:S.y,hfov:A.roleHfov?.[d]||A.maxHfov,teleHfov:A.minHfov,maxDistance:A.roleMaxDistance?.[d]})}let _=.41,g=i.displayPlan?[]:DisplayFit.fit(T0(e,r,s),{width:e,depth:t,height:n,mainHeight:1.65,stations:[{x:_,y:0}]}).plan.screens;f("lcs-station","station",_,0,1.5,"rear",{name:"LCS 810 Station",planX:c?.hub.x??1.5,planDepth:c?.hub.y??1,mount:"front-wall"}),f("ndp600","ndp",Math.max(1.1,e*.32),1.2,1.05,"front",{name:"NDP600",mount:"floor"});for(let[d,x]of g.entries()){let v=x.x;f(`ifp-${d+1}`,"ifp",v,0,1.65,"rear",{name:`IFP ${s}" ${d+1}`,size:s,panel:x,mount:"front-wall"})}u.displays.forEach(d=>f(`display-${d.id}`,"display",d.id.startsWith("L")?0:e,d.y,2.1,"rear",{name:`Auxiliary Display ${d.id} \xB7 ${a}"`,size:a,planX:d.x,planDepth:d.y,mount:"side-wall",wallSide:d.id.startsWith("L")?"left":"right"})),u.speakers.forEach((d,x)=>{let v=x<2,y=x>=u.speakers.length-2,S=v||y?d.x:d.x<e/2?0:e,M=v?0:y?t:d.y,w=v?"rear":y?"front":d.x<e/2?"right":"left";f(`ps610-${d.id+1}`,"speaker",S,M,2.5,w,{name:`PS610 ${d.id+1}`,planX:d.x,planDepth:d.y,mount:v?"front-wall":y?"rear-wall":"side-wall"})});let m=R0(u.s210s,e,t);return p.some(d=>d.maxDistance&&(d.kind==="teacher"?d.depth:t-d.depth)>d.maxDistance)&&m.push("cameraRange"),{room:{width:e,depth:t,height:n},devices:p,plan:u,warnings:m,audioPlan:ya({width:e,depth:t,s210Count:u.s210s.length,speakerCount:u.speakers.length,qnexModel:"NDP600"}),recommendation:Jr(t,e,e*t,{longReasonFar:"",longReasonMid:"",longReasonNear:""})}}function C0(i,e){let t=Bd(i,e);if(t)return{error:t};let{room:n,layout:s,cameraPlan:r,visibility:a,displaySize:o}=i,{width:l,depth:c}=n,h=[],u=(g,m,d,x,v,y,S,M={})=>h.push({id:g,kind:m,name:g,x,depth:v,height:y,direction:S,color:E0[m],planX:d.x,planDepth:d.y,...M});a.s210&&s.s210s.forEach((g,m)=>u(`s210-${m+1}`,"s210",g,g.x,g.y,2.7,g.facing==="down"?"rear":"front",{name:`S210 ${g.label||`S${m+1}`}`}));for(let g of["teacher","student"]){if(!a[g])continue;let m=r[g],d=Vt[m];(g==="teacher"?[s.teacherCam]:s.studentCams).forEach((v,y)=>u(g==="teacher"?"teacher-camera":`student-camera-${y+1}`,g,v,v.x,v.y,2.4,g==="teacher"?"front":"rear",{model:m,name:`${d.label} \xB7 ${g==="teacher"?"Teacher":`Student ${y+1}`}`,hfov:d.roleHfov?.[g]||d.maxHfov,teleHfov:d.minHfov,maxDistance:d.roleMaxDistance?.[g]}))}let p=s.largeScreen,f=a.ifp?Math.max(.5,Math.min(s.hub.x,p.x-p.width/2-.55)):s.hub.x;u("lcs-station","station",s.hub,f,0,1.5,"rear",{name:i.hubName,mount:"front-wall"}),a.ifp&&u("ifp-1","ifp",p,p.x,0,1.65,"rear",{name:i.lang==="zh"?"\u4E3B\u5C4F / IFP":"Main Screen / IFP",mount:"front-wall",size:p.width*Math.sqrt(337)/(.0254*16)}),a.display&&s.displays.forEach((g,m)=>{let d=String(g.id).startsWith("L");u(`display-${m+1}`,"display",g,d?0:l,g.y,2.1,"rear",{name:`${i.displayName} ${g.id} \xB7 ${o}"`,size:Number(o),mount:"side-wall",wallSide:d?"left":"right"})}),a.speaker&&s.speakers.forEach((g,m)=>{let d=m<2,x=!d&&m>=s.speakers.length-2,v=g.x<l/2;u(`ps610-${m+1}`,"speaker",g,d||x?g.x:v?0:l,d?0:x?c:g.y,2.5,d?"rear":x?"front":v?"right":"left",{name:`PS610 ${m+1}`,mount:d?"front-wall":x?"rear-wall":"side-wall"})});let _=h.some(g=>g.maxDistance&&(g.kind==="teacher"?g.depth:c-g.depth)>g.maxDistance)?["cameraRange"]:[];return _.push(...R0(s.s210s,l,c)),{room:{...n},devices:h,plan:s,warnings:_,audioPlan:ya({width:l,depth:c,s210Count:a.s210?s.s210s.length:0,speakerCount:a.speaker?s.speakers.length:0,qnexModel:i.qnexModel||"NDP600",audioConfig:i.audioConfig}),recommendation:Jr(c,l,l*c,{longReasonFar:"",longReasonMid:"",longReasonNear:""})}}function R0(i,e,t){if(!i.length)return[];let n=As(i,e,t),s=i.length<=2?[80,95]:[75,85];return n.best<s[0]||n.limit<s[1]?["pickupUnmet"]:[]}function P0(i,e,t=!1){let n=structuredClone(i),{width:s,depth:r}=n.room;t&&Vt[n.cameraPlan.student].projectOnly&&(n.cameraPlan.studentQty=Jr(r,s,s*r,{}).studentQty);let a=Od({width:s,depth:r,teacher:t?{x:s/2,y:Math.min(r,10)}:n.layout.teacherCam,students:t?[{id:0,x:s/2,y:0}]:n.layout.studentCams,teacherModel:n.cameraPlan.teacher,studentModel:n.cameraPlan.student,displaySize:n.displaySize,s210Count:e.mode==="fixed"?e.count:null}),o=n.cameraPlan.studentQty,l=a.studentCams[0];return a.studentCams=Array.from({length:o},(c,h)=>({...l,id:h,x:o===1?l.x:s*(h+1)/(o+1)})),n.layout={...n.layout,...a,largeScreen:n.layout.largeScreen},n.s210Request={...e},n}function To(i,e,t){let n={s210:1.5,teacher:1.5,student:1.5,station:.55,ndp:.9,ifp:1.2,display:1.2,speaker:1.2}[i.kind],s=i.panel?i.panel.heightMm/1e3:Eo(i.size),r={s210:.1,teacher:.38,student:.38,station:.26,ndp:.16,ifp:s/2+.08,display:s/2+.08,speaker:.29}[i.kind],a=i.kind==="ndp"?.9:["ifp","display"].includes(i.kind)?s/2+.08:0,o=["station","ndp"].includes(i.kind)?20:10;if(i.panel){let c=s/2;return Math.max(c,Math.min(Number(e)||i.height,t-c))}let l=Math.max(n,a);return Math.max(l,Math.floor(Math.min(Math.max(Number(e)||l,l),t-r)*o+1e-8)/o)}var pn={CV870:[.245,.165,.145],CV210:[.196,.052,.082],PVC:[.205,.16,.16],PS610:[.23,.35,.23],NDP600:[.716,.242,.35],station:[.36,.235,.055],s210:{foamLength:.245,foamRadius:.018,stemLength:.125},ifp:{bezel:.012,chin:.032,depth:.069},display:{bezel:.009,chin:.012,depth:.05}};function mh(i){return i==="CV870"?{pivotHeight:.113,lensDepth:.073}:i==="CV210"?{pivotHeight:.035,lensDepth:.042}:{pivotHeight:.098,lensDepth:.081}}var gh=72,I0=[.24,.48,.72,.96],n1="#128d78",kd=Object.freeze({pan:0,tilt:15});function Ao(i,{pan:e,tilt:t}=kd){let n=i.userData.pickupJoint;n&&n.rotation.set(qr.degToRad(t),qr.degToRad(e),0,"YXZ")}function D0(i,e,t){let n=Math.cos(e),s=i*(1+n)/2,r=s*Math.sin(e);return new I(r*Math.cos(t),-s*n,r*Math.sin(t))}function Vd({width:i,depth:e,height:t}){return[new Ot(new I(1,0,0),0),new Ot(new I(-1,0,0),i),new Ot(new I(0,0,1),0),new Ot(new I(0,0,-1),e),new Ot(new I(0,1,0),0),new Ot(new I(0,-1,0),t)]}function L0(i){let e=new He,t=(s,r)=>{let a=new Ui(new xt().setFromPoints(s),new Kn({color:n1,opacity:r,transparent:!0,depthWrite:!1,toneMapped:!1,clippingPlanes:i}));return a.raycast=()=>{},e.add(a),a};for(let[s,r]of[[8,.25],[6,.48]])for(let a of[0,Math.PI/2])t(Array.from({length:gh},(o,l)=>D0(s,l/gh*2*Math.PI,a)),r);let n=Array.from({length:gh},(s,r)=>D0(6,Math.PI/3,r/gh*2*Math.PI));return e.userData.waves=I0.map(()=>t(n,.78)),e.visible=!1,_h(e,0),e}function _h(i,e){i.userData.waves.forEach((t,n)=>{let s=(I0[n]+1-e)%1;t.scale.setScalar(s),t.material.opacity=.78*Math.min(1,s*9,(1-s)*12)})}function Hd(i,e){let t=i.texture("screen:"+e,512,288,(n,s,r)=>{if(e==="station"||e==="control"){n.fillStyle="#16242c",n.fillRect(0,0,s,r),n.fillStyle="#e4eef2",n.font="bold 26px Arial",n.fillText(e==="station"?"LECTURE CAPTURE":"Q-NEX",24,43),n.fillStyle="#274759",n.fillRect(24,64,s-48,156);for(let o=0;o<4;o++)n.fillStyle=o===1?"#da8051":"#458688",n.fillRect(31+o*116,244,94,18);return}let a=n.createLinearGradient(0,0,s,r);a.addColorStop(0,"#113e50"),a.addColorStop(1,"#216a69"),n.fillStyle=a,n.fillRect(0,0,s,r),n.fillStyle="#d5e8de",n.font="16px Arial",n.fillText("CLASSROOM",35,45),n.fillStyle="#fff3dc",n.font="bold 44px Georgia",n.fillText("Explore. Learn.",35,118);for(let o=0;o<3;o++)n.fillStyle=["#d4b985","#78b9ac","#6997bc"][o],n.fillRect(35+o*151,162,129,68)});return i.surface("screen:"+e,"#58616a",.32,{map:t,emissive:"#ffffff",emissiveMap:t,emissiveIntensity:.74})}function N0(i,e,t,n,s,r,a=0){let o=Math.max(.012,t-e-a);n.round(i,.012,1,[0,a+o/2,0],s).scale.y=o,n.round(i,.055,.014,[0,a+o-.007,0],r)}function i1(i,e,t,n,s,r,a,o){i.rotation.y=e.direction==="rear"?Math.PI:0,N0(i,t,n.height,s,a,o);let l=new He;l.position.set(0,-.025,0),i.add(l);let{stemLength:c,foamLength:h,foamRadius:u}=pn.s210;s.box(l,[.04,.038,.052],[0,.008,.008],r,.01),s.round(l,.013,c,[0,-c/2,0],r),s.round(l,u,h,[0,-c-h/2,0],s.foam,24);let p=s.geometry("s210 cap",()=>new no(u,24,12));s.mesh(l,p,s.foam,[0,-c-h,0]);let f=new Dt;f.position.y=-c-h-u,l.add(f),i.userData.pickupOrigin=f,i.userData.pickupJoint=l,Ao(i)}function s1(i,e,t,n,s,r,a,o,l){let c=e.model.startsWith("PVC")?"PVC":e.model,[h,u,p]=pn[c],{pivotHeight:f,lensDepth:_}=mh(e.model),g=e.depth===0?.27:e.depth===n.depth?-.27:0,m=new He;m.position.z=g,i.add(m);let d=u+.025,x=e.direction==="front"?Math.PI:0,v=g-Math.cos(x)*(p/2+.024);N0(i,t,n.height,s,a,o,d),s.box(i,[.025,.021,Math.abs(v)],[0,d,v/2],a),s.box(i,[.025,d+.014,.022],[0,(d-.014)/2,v],a),s.box(i,[h*.66,.012,Math.abs(v-g)+.035],[0,c==="CV210"?-.006:-.007,(v+g)/2],a,.004);let y=new He;y.rotation.y=x,m.add(y);let S=new He;S.name="camera-head",S.position.y=f,S.rotation.y=x,m.add(S);function M(b,E,D,R){let N=s.round(b,E,.015,[0,R,D-.011],r,28);N.rotation.x=Math.PI/2;let F=s.round(b,E*.66,.006,[0,R,D-.003],l,28);F.rotation.x=Math.PI/2}if(c==="CV210"){s.box(S,[h,u,p-.01],[0,-.009,-.005],r,.024),M(S,.019,_,0);return}s.box(y,[h,.039,p],[0,.0195,0],c==="CV870"?o:r,.008),c==="CV870"&&M(y,.013,p/2+.006,.021);let w=new He;S.add(w),w.name="camera-yoke";for(let b of[-1,1]){s.box(w,[.019,.082,.042],[b*.064,-.027,0],a,.009);let E=s.box(w,[.046,.021,.043],[b*.046,-.068,0],a,.008);E.rotation.z=b*.29}s.box(w,[.081,.024,.06],[0,-.066,0],a,.01);let A=s.round(S,u-f,_+.04,[0,0,(_-.048)/2],c==="CV870"?o:r,28);A.rotation.x=Math.PI/2,M(S,.047,_,0)}function r1(i,e,t,n,s){let{kind:r,size:a,wallSide:o}=e,l=r==="station",c=r==="display",h=e.panel?Math.min(1,e.panel.widthMm/1e3/(4*pn[r].bezel),e.panel.heightMm/1e3/(2*(pn[r].bezel+pn[r].chin))):1,u=e.panel?e.panel.widthMm/1e3-2*pn[r].bezel*h:l?pn.station[0]-.028:zi(a),p=e.panel?e.panel.heightMm/1e3-(pn[r].bezel+pn[r].chin)*h:l?pn.station[1]-.032:Eo(a),{bezel:f,chin:_,depth:g}=l?{bezel:.014,chin:.018,depth:pn.station[2]}:pn[r],m=f*h,d=_*h,x=e.panel?e.panel.depthMm/1e3:g,v=new He;c&&(v.position.x=(o==="left"?1:-1)*(e.panel?e.panel.widthMm/2e3+e.panel.offsetMm/1e3:u/2+.18),t.box(i,[Math.abs(v.position.x),.048,.052],[v.position.x/2,0,.055],s,.006)),i.add(v),t.box(v,[.18,.13,.07],[0,0,.04],s,.007);let y=.112+x;t.box(v,[u+2*m,p+m+d,x],[0,(m-d)/2,y-x/2],n,.007);let S=t.mesh(v,t.geometry(["panel",u,p].join("/"),()=>new Bn(u,p)),Hd(t,l?"station":"lesson"),[0,0,y+.001]);S.castShadow=!1,(r==="ifp"||l)&&(i.userData.avScreen=S),r==="ifp"&&t.box(v,[.28,.012,.027],[0,-p/2-.02,y+.009],s,.005)}function a1(i,e,t,n,s,r){let[a,o,l]=pn.NDP600,c=-o;n.box(i,[a,.044,l],[0,c+.022,0],s,.012);let h=new He;h.position.set(0,-.117,0),h.rotation.x=-.59,i.add(h),n.box(h,[a-.006,.027,.366],[0,0,0],s,.013),i.userData.avScreen=n.box(h,[.523,.002,.294],[-.068,.015,.009],Hd(n,"lesson"),.001),i.userData.avControl=n.box(h,[.111,.002,.22],[.265,.015,-.018],Hd(n,"control"),.001),n.box(i,[.88,.038,.52],[0,c-.019,0],n.wood,.009);let u=(t.stageWidth??t.width)/2,p=Math.min(1.8,t.depth*.2);for(let f of[-.37,.37])for(let _ of[-.202,.202]){let m=(Math.abs(i.position.x+f-t.width/2)<u&&i.position.z+_<p?.08:0)-e,d=Math.max(.01,c-.038-m);n.box(i,[.04,1,.04],[f,m+d/2,_],r).scale.y=d}}function Gd(i,e,t,n,s){let r=s.surface("device body","#262e35",.43,{metalness:.24}),a=s.surface("mount hardware","#768488",.36,{metalness:.54}),o=s.surface("camera silver","#d4dadd",.32,{metalness:.31}),l=s.surface("lens glass","#1e485c",.14,{metalness:.42});if(e.kind==="s210")i1(i,e,t,n,s,r,a,o);else if(e.kind==="teacher"||e.kind==="student")s1(i,e,t,n,s,r,a,o,l);else if(e.kind==="ndp")a1(i,t,n,s,r,a);else if(e.kind==="speaker"){i.rotation.y={rear:0,front:Math.PI,right:Math.PI/2,left:-Math.PI/2}[e.direction];let[c,h,u]=pn.PS610;s.box(i,[.095,.13,.11],[0,0,.055],a,.008),s.box(i,[c,h,u],[0,0,.092+u/2],r,.025),s.box(i,[c-.022,h-.02,.017],[0,0,.09+u],s.grille,.008)}else r1(i,e,s,r,a)}var Co=new I;function ti(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Co.copy(e),Co[n]=0,Co.normalize();let c=.5*a/(a+o),h=1-Co.angleTo(i)/l;return Math.sign(Co[t])===1?h*c:o/(a+o)+c+c*(1-h)}var xh=class i extends At{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new I,c=new I,h=new I(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,p=this.attributes.normal.array,f=this.attributes.uv.array,_=u.length/6,g=new I,m=.5/a;for(let d=0,x=0;d<u.length;d+=3,x+=2)switch(l.fromArray(u,d),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[d+0]=h.x*Math.sign(l.x)+c.x*r,u[d+1]=h.y*Math.sign(l.y)+c.y*r,u[d+2]=h.z*Math.sign(l.z)+c.z*r,p[d+0]=c.x,p[d+1]=c.y,p[d+2]=c.z,Math.floor(d/_)){case 0:g.set(1,0,0),f[x+0]=ti(g,c,"z","y",r,n),f[x+1]=1-ti(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),f[x+0]=1-ti(g,c,"z","y",r,n),f[x+1]=1-ti(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),f[x+0]=1-ti(g,c,"x","z",r,e),f[x+1]=ti(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),f[x+0]=1-ti(g,c,"x","z",r,e),f[x+1]=1-ti(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),f[x+0]=1-ti(g,c,"x","y",r,e),f[x+1]=1-ti(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),f[x+0]=ti(g,c,"x","y",r,e),f[x+1]=1-ti(g,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function vh(){let i=new Map,e=new Map,t=new Map;function n(f,_,g,m){if(!t.has(f)){let d=document.createElement("canvas");d.width=_,d.height=g,m(d.getContext("2d"),_,g);let x=new Fi(d);x.colorSpace=Pt,x.wrapS=x.wrapT=Jn,x.anisotropy=4,t.set(f,x)}return t.get(f)}function s(f,_){return n(f,128,128,(g,m,d)=>{let x=g.createImageData(m,d),v=19;for(let y=0;y<d;y++)for(let S=0;S<m;S++){v=Math.imul(v,1664525)+1013904223>>>0;let M=_(S,y,v/4294967296),w=(y*m+S)*4;x.data[w]=x.data[w+1]=x.data[w+2]=M,x.data[w+3]=255}g.putImageData(x,0,0)})}function r(f,_,g=.65,m={}){if(!e.has(f)){let d=new tn({color:_,roughness:g,...m});d.userData.fidelityShared=!0,e.set(f,d)}return e.get(f)}function a(f,_){if(!i.has(f)){let g=_();g.userData.fidelityShared=!0,i.set(f,g)}return i.get(f)}let o=(f,_=0)=>a([_,...f].join("/"),()=>_?new xh(...f,2,_):new At(...f)),l=(f,_,g=16)=>a(["cylinder",f,_,g].join("/"),()=>new ks(f,f,_,g));function c(f,_,g,m){let d=new je(_,g);return d.position.set(...m),d.castShadow=d.receiveShadow=!0,f.add(d),d}let h=s("wood",(f,_,g)=>{let m=_+2.6*Math.sin(f/30)+1.6*Math.sin(f/12+_/18);return 192+13*Math.sin(m*.72)+12*Math.sin(m*.24)+16*g}),u=s("grille",(f,_,g)=>(f%4===1&&_%4===1?82:156)+g*32),p=s("foam",(f,_,g)=>139+g*92);return{surface:r,texture:n,geometry:a,cube:o,cylinder:l,mesh:c,box:(f,_,g,m,d)=>c(f,o(_,d),m,g),round:(f,_,g,m,d,x)=>c(f,l(_,g,x),d,m),wood:r("oak","#e4b686",.57,{map:h,bumpMap:h,bumpScale:9e-4}),grille:r("speaker grille","#2b3035",.94,{map:u,bumpMap:u,bumpScale:.0015}),foam:r("microphone foam","#252b2e",.95,{map:p,bumpMap:p,bumpScale:8e-4}),releaseRoomGeometry(){for(let[f,_]of i)f.startsWith("room:")&&(_.dispose(),i.delete(f))},dispose(){for(let f of[i,e,t]){for(let _ of f.values())_.dispose();f.clear()}}}}var U0,Qs=(i,e=0,t=.5)=>new tn({color:i,metalness:e,roughness:t}),yh=Qs("#172536",.18),Kr=Qs("#748895",.55),Wd=Qs("#e0e7e9",.22),qd=Qs("#22638b",.05,.2);function o1(){let i=document.createElement("canvas");i.width=1024,i.height=576;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,1024,576);t.addColorStop(0,"#f7fdff"),t.addColorStop(1,"#bbebfa"),e.fillStyle=t,e.fillRect(0,0,1024,576),e.fillStyle="#1769a0",e.fillRect(0,0,1024,92),e.fillStyle="#fff",e.font="bold 48px Arial",e.fillText("CLASSROOM",48,62),e.fillStyle="#13446c",e.font="bold 54px Arial",e.fillText("Explore \xB7 Learn \xB7 Create",65,215),e.font="31px Arial",e.fillText("Interactive lesson display",68,275),e.fillStyle="#2ab9b4",e.fillRect(70,327,285,125),e.fillStyle="#48a4da",e.fillRect(380,327,245,125),e.fillStyle="#f2b968",e.fillRect(650,327,300,125);let n=new Fi(i);return n.colorSpace=Pt,new Mn({map:n,toneMapped:!1})}var F0=o1();for(let i of[yh,Kr,Wd,qd,F0])i.userData.fidelityShared=!0;function En(i,e,t,n){let s=new je(new At(...e),n);return s.position.set(...t),s.castShadow=!0,s.receiveShadow=!0,i.add(s),s}function l1(i,e,t,n,s){let r=new je(new ks(e,e,Math.max(.01,t),16),s);return r.position.set(...n),r.castShadow=!0,i.add(r),r}function c1(i,e,t=!1,n=!1,s=null,r=null){let a=r?r.widthMm/1e3:n?.72:zi(e),o=r?r.heightMm/1e3:n?.43:Eo(e),l=t?new He:i;if(t){let c=(s==="left"?1:-1)*(a/2+(r?r.offsetMm/1e3:.18));En(i,[Math.abs(c),.055,.055],[c/2,0,.05],Kr),l.position.x=c,i.add(l)}if(En(l,[.22,.17,.1],[0,0,.05],Kr),En(l,[a,o,r?r.depthMm/1e3:.07],[0,0,.18],yh),n)i.userData.avScreen=En(l,[a-.07,o-.07,.008],[0,0,.224],Qs("#24506a",0,.23));else{let c=new je(new Bn(a-Math.min(.07,a*.1),o-Math.min(.07,o*.1)),F0);c.position.set(0,0,r?.181+r.depthMm/2e3:.229),c.receiveShadow=!0,l.add(c),t||(i.userData.avScreen=c)}n&&(i.userData.avDecorations=["#2da6aa","#80b8d3","#e1b36b"].map((c,h)=>En(l,[.1,.1,.01],[-.18+h*.17,-.02,.234],Qs(c))))}function h1(i,e){let t=Qs("#bb8b59");En(i,[.74,.05,.5],[0,-.07,0],t),En(i,[.68,.42,.3],[0,-.36,.02],Wd),En(i,[.48,Math.max(.22,e-.52),.29],[0,-e/2-.1,.03],Wd),En(i,[.7,.055,.45],[0,-e+.04,.02],Kr);let n=new He;n.rotation.x=-.22,n.position.set(0,.02,-.035),i.add(n),En(n,[.64,.035,.37],[0,0,0],yh),i.userData.avScreen=En(n,[.46,.008,.26],[-.058,.024,0],qd),i.userData.avControl=En(n,[.098,.008,.197],[.239,.024,0],qd)}function u1(i,e){i.rotation.y={rear:0,front:Math.PI,right:Math.PI/2,left:-Math.PI/2}[e],En(i,[.14,.12,.16],[0,0,.08],Kr),En(i,[.43,.55,.28],[0,0,.28],yh),l1(i,.115,.025,[0,-.08,.43],Kr).rotation.x=Math.PI/2}function O0(i,e,t,n){let s=new He;s.name=i.name,s.userData.deviceId=i.id,s.userData.direction=i.direction,s.position.set(i.x,e,i.depth),n?Gd(s,i,e,t,n):["s210","teacher","student"].includes(i.kind)?(U0??(U0=vh()),Gd(s,i,e,t,U0)):["ifp","display","station"].includes(i.kind)?c1(s,i.size,i.kind==="display",i.kind==="station",i.wallSide,i.panel):i.kind==="speaker"?u1(s,i.direction):i.kind==="ndp"&&h1(s,e);let r=new je(new io(i.kind==="ifp"?.7:.38,.016,8,48),new Mn({color:i.color,transparent:!0,opacity:.88,depthTest:!1}));return r.rotation.x=Math.PI/2,r.position.y=i.kind==="ndp"?.12:0,i.kind==="display"&&(r.position.x=(i.wallSide==="left"?1:-1)*(i.panel?i.panel.widthMm/2e3+i.panel.offsetMm/1e3:zi(i.size)/2+.18)),i.kind==="speaker"&&(r.position.z=n?.21:.28),r.raycast=()=>{},r.visible=!1,s.userData.halo=r,s.add(r),s}var Vn=i=>["teacher","student"].includes(i.kind),Qr=i=>i*Math.PI/180,Sh=i=>2*Math.atan(Math.tan(Qr(i)/2)*9/16)*180/Math.PI;function Xd(i,e,t,n={},s=!1){let r=(i.direction==="front"?Math.PI:0)+Qr(n.pan||0),a=new yn().setFromEuler(new Sn(Qr(n.tilt||0),r,0,"YXZ")),o=i.depth===0?.27:i.depth===t.depth?-.27:0,{pivotHeight:l,lensDepth:c}=s?mh(i.model):{pivotHeight:.21,lensDepth:i.model.startsWith("PVC")?.31:.2575},h=new I(i.x,e+l,i.depth+o),u=new I(0,0,c).applyQuaternion(a).add(h),p=new I(0,0,1).applyQuaternion(a),f=new I(1,0,0).applyQuaternion(a),_=new I(0,1,0).applyQuaternion(a);return{origin:u,pivot:h,quaternion:a,forward:p,right:f,up:_}}function Yd(i,e,t,n,s={},r=!1){let a=i.getObjectByName("camera-head");if(a&&(a.quaternion.copy(Xd(e,t,n,s,r).quaternion),r)){let o=a.getObjectByName("camera-yoke");o&&(o.rotation.x=-Qr(s.tilt||0))}}var us=1e-8;function z0(i){return i.filter((e,t)=>i.findIndex(n=>n.distanceToSquared(e)<us*us)===t)}function B0(i){if(i.length<3)return!1;let e=i[1].clone().sub(i[0]);return i.slice(2).some(t=>e.clone().cross(t.clone().sub(i[0])).lengthSq()>us*us)}function d1(i,e,t){let n=[];for(let s=0;s<i.length;s++){let r=i[s],a=i[(s+1)%i.length],o=e(r),l=e(a),c=o>=-us,h=l>=-us;if(c&&n.push(r),c!==h){let u=r.clone().lerp(a,o/(o-l));n.push(u),t.push(u)}}return z0(n)}function f1(i,e){let t=i.reduce((a,o)=>a.add(o),new I).multiplyScalar(1/i.length),s=(Math.abs(e.y)<.9?new I(0,1,0):new I(1,0,0)).cross(e).normalize(),r=e.clone().cross(s);return i.sort((a,o)=>{let l=a.clone().sub(t),c=o.clone().sub(t);return Math.atan2(l.dot(r),l.dot(s))-Math.atan2(c.dot(r),c.dot(s))})}function p1(i,e){let t=[[new I(1,0,0),0,"wall"],[new I(-1,0,0),e.width,"wall"],[new I(0,1,0),0,"floor"],[new I(0,-1,0),e.height,"ceiling"],[new I(0,0,1),0,"wall"],[new I(0,0,-1),e.depth,"wall"]],n=i;for(let[s,r,a]of t){let o=[],l=h=>s.dot(h)+r;n=n.map(h=>({...h,points:d1(h.points,l,o)})).filter(h=>B0(h.points));let c=z0(o);if(B0(c)&&n.push({kind:a,points:f1(c,s)}),!n.length)break}return n}function k0(i,e,t,n,s=!1){let r=Xd(i,e,t,n,s),a=n.hfov,o=Sh(a),l=Math.hypot(t.width,t.depth,t.height)*2+2,c=r.origin.clone().addScaledVector(r.forward,l),h=l*Math.tan(Qr(a)/2),u=h*9/16,p=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([g,m])=>c.clone().addScaledVector(r.right,h*g).addScaledVector(r.up,u*m)),f=[{kind:"far",points:p}];for(let g=0;g<4;g++)f.push({kind:"frustum",points:[r.origin,p[g],p[(g+1)%4]]});let _=p1(f,t);return{...r,hfov:a,vfov:o,faces:_,floor:_.find(g=>g.kind==="floor")?.points||[],centerEnd:m1(r.origin,r.forward,t)}}function m1(i,e,t){let n=0,s=1/0;for(let[r,a]of[["x",t.width],["y",t.height],["z",t.depth]]){if(Math.abs(e[r])<us){if(i[r]<0||i[r]>a)return null;continue}let o=-i[r]/e[r],l=(a-i[r])/e[r];n=Math.max(n,Math.min(o,l)),s=Math.min(s,Math.max(o,l))}return s>=n&&s>us?i.clone().addScaledVector(e,s):null}var Mh=class extends Os{constructor(){super();let e=new At;e.deleteAttribute("uv");let t=new tn({side:Yt}),n=new tn,s=new co(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new je(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Ni(e,n,6),o=new Dt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new je(e,ea(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new je(e,ea(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new je(e,ea(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new je(e,ea(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let p=new je(e,ea(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let f=new je(e,ea(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ea(i){return new ao({color:0,emissive:16777215,emissiveIntensity:i})}var ta={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Hn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},g1=new Gs(-1,1,1,-1,0,1),$d=class extends xt{constructor(){super(),this.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ot([0,2,0,0,2,0],2))}},_1=new $d,ds=class{constructor(e){this._mesh=new je(_1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,g1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var na=class extends Hn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof It?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Qn.clone(e.uniforms),this.material=new It({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ds(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ro=class extends Hn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},bh=class extends Hn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var wh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new de);this._width=n.width,this._height=n.height,t=new dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new na(ta),this.copyPass.material.blending=Ut,this.clock=new uo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ro!==void 0&&(a instanceof Ro?n=!0:a instanceof bh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new de);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Eh=class extends Hn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ge}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Po={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new de},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Qe},cameraProjectionMatrixInverse:{value:new Qe},cameraWorldMatrix:{value:new Qe},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new I(-1,-1,-1)},sceneBoxMax:{value:new I(1,1,1)}},vertexShader:`

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
		}`},Do={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Th={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function V0(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=x1(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new I(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new ns(s,e,e);return r.wrapS=Jn,r.wrapT=Jn,r.needsUpdate=!0,r}function x1(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var Io={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Zd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new de},cameraProjectionMatrixInverse:{value:new Qe},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Zd(i,e,t){let n=v1(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function v1(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new I(Math.cos(r),Math.sin(r),a))}return n}var Ah=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,p=l-u,f=c-u,_=e-p,g=t-f,m,d;_>g?(m=1,d=0):(m=0,d=1);let x=_-m+h,v=g-d+h,y=_-1+2*h,S=g-1+2*h,M=l&255,w=c&255,A=this.perm[M+this.perm[w]]%12,b=this.perm[M+m+this.perm[w+d]]%12,E=this.perm[M+1+this.perm[w+1]]%12,D=.5-_*_-g*g;D<0?n=0:(D*=D,n=D*D*this._dot(this.grad3[A],_,g));let R=.5-x*x-v*v;R<0?s=0:(R*=R,s=R*R*this._dot(this.grad3[b],x,v));let N=.5-y*y-S*S;return N<0?r=0:(N*=N,r=N*N*this._dot(this.grad3[E],y,S)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),p=Math.floor(n+c),f=1/6,_=(h+u+p)*f,g=h-_,m=u-_,d=p-_,x=e-g,v=t-m,y=n-d,S,M,w,A,b,E;x>=v?v>=y?(S=1,M=0,w=0,A=1,b=1,E=0):x>=y?(S=1,M=0,w=0,A=1,b=0,E=1):(S=0,M=0,w=1,A=1,b=0,E=1):v<y?(S=0,M=0,w=1,A=0,b=1,E=1):x<y?(S=0,M=1,w=0,A=0,b=1,E=1):(S=0,M=1,w=0,A=1,b=1,E=0);let D=x-S+f,R=v-M+f,N=y-w+f,F=x-A+2*f,z=v-b+2*f,B=y-E+2*f,H=x-1+3*f,O=v-1+3*f,W=y-1+3*f,K=h&255,ae=u&255,re=p&255,we=this.perm[K+this.perm[ae+this.perm[re]]]%12,Le=this.perm[K+S+this.perm[ae+M+this.perm[re+w]]]%12,Oe=this.perm[K+A+this.perm[ae+b+this.perm[re+E]]]%12,Q=this.perm[K+1+this.perm[ae+1+this.perm[re+1]]]%12,te=.6-x*x-v*v-y*y;te<0?s=0:(te*=te,s=te*te*this._dot3(this.grad3[we],x,v,y));let j=.6-D*D-R*R-N*N;j<0?r=0:(j*=j,r=j*j*this._dot3(this.grad3[Le],D,R,N));let me=.6-F*F-z*z-B*B;me<0?a=0:(me*=me,a=me*me*this._dot3(this.grad3[Oe],F,z,B));let se=.6-H*H-O*O-W*W;return se<0?o=0:(se*=se,o=se*se*this._dot3(this.grad3[Q],H,O,W)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,p,f,_,g=(e+t+n+s)*l,m=Math.floor(e+g),d=Math.floor(t+g),x=Math.floor(n+g),v=Math.floor(s+g),y=(m+d+x+v)*c,S=m-y,M=d-y,w=x-y,A=v-y,b=e-S,E=t-M,D=n-w,R=s-A,N=b>E?32:0,F=b>D?16:0,z=E>D?8:0,B=b>R?4:0,H=E>R?2:0,O=D>R?1:0,W=N+F+z+B+H+O,K=a[W][0]>=3?1:0,ae=a[W][1]>=3?1:0,re=a[W][2]>=3?1:0,we=a[W][3]>=3?1:0,Le=a[W][0]>=2?1:0,Oe=a[W][1]>=2?1:0,Q=a[W][2]>=2?1:0,te=a[W][3]>=2?1:0,j=a[W][0]>=1?1:0,me=a[W][1]>=1?1:0,se=a[W][2]>=1?1:0,Me=a[W][3]>=1?1:0,Ye=b-K+c,L=E-ae+c,We=D-re+c,Ne=R-we+c,Te=b-Le+2*c,$=E-Oe+2*c,Se=D-Q+2*c,pe=R-te+2*c,xe=b-j+3*c,$e=E-me+3*c,et=D-se+3*c,P=R-Me+3*c,T=b-1+4*c,G=E-1+4*c,Z=D-1+4*c,ie=R-1+4*c,Y=m&255,Ce=d&255,ue=x&255,Ee=v&255,De=o[Y+o[Ce+o[ue+o[Ee]]]]%32,ce=o[Y+K+o[Ce+ae+o[ue+re+o[Ee+we]]]]%32,ve=o[Y+Le+o[Ce+Oe+o[ue+Q+o[Ee+te]]]]%32,Be=o[Y+j+o[Ce+me+o[ue+se+o[Ee+Me]]]]%32,Ie=o[Y+1+o[Ce+1+o[ue+1+o[Ee+1]]]]%32,ge=.6-b*b-E*E-D*D-R*R;ge<0?h=0:(ge*=ge,h=ge*ge*this._dot4(r[De],b,E,D,R));let ke=.6-Ye*Ye-L*L-We*We-Ne*Ne;ke<0?u=0:(ke*=ke,u=ke*ke*this._dot4(r[ce],Ye,L,We,Ne));let U=.6-Te*Te-$*$-Se*Se-pe*pe;U<0?p=0:(U*=U,p=U*U*this._dot4(r[ve],Te,$,Se,pe));let oe=.6-xe*xe-$e*$e-et*et-P*P;oe<0?f=0:(oe*=oe,f=oe*oe*this._dot4(r[Be],xe,$e,et,P));let fe=.6-T*T-G*G-Z*Z-ie*ie;return fe<0?_=0:(fe*=fe,_=fe*fe*this._dot4(r[Ie],T,G,Z,ie)),27*(h+u+p+f+_)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var Lo=class i extends Hn{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=V0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new dn(this.width,this.height,{type:pi}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new It({defines:Object.assign({},Po.defines),uniforms:Qn.clone(Po.uniforms),vertexShader:Po.vertexShader,fragmentShader:Po.fragmentShader,blending:Ut,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ro,this.normalMaterial.blending=Ut,this.pdMaterial=new It({defines:Object.assign({},Io.defines),uniforms:Qn.clone(Io.uniforms),vertexShader:Io.vertexShader,fragmentShader:Io.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new It({defines:Object.assign({},Do.defines),uniforms:Qn.clone(Do.uniforms),vertexShader:Do.vertexShader,fragmentShader:Do.fragmentShader,blending:Ut}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new It({uniforms:Qn.clone(ta.uniforms),vertexShader:ta.vertexShader,fragmentShader:ta.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:go,blendDst:Ws,blendEquation:Fn,blendSrcAlpha:mo,blendDstAlpha:Ws,blendEquationAlpha:Fn}),this.blendMaterial=new It({uniforms:Qn.clone(Th.uniforms),vertexShader:Th.vertexShader,fragmentShader:Th.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:oc,blendSrc:go,blendDst:Ws,blendEquation:Fn,blendSrcAlpha:mo,blendDstAlpha:Ws,blendEquationAlpha:Fn}),this._fsQuad=new ds(null),this._originalClearColor=new Ge,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new zs,this.depthTexture.format=hs,this.depthTexture.type=cs,this.normalRenderTarget=new dn(this.width,this.height,{minFilter:Xt,magFilter:Xt,type:pi,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Zd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ut,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ut,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ut,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ut,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ut,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Ah,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new ns(s,e,e,bn,kn);return r.wrapS=Jn,r.wrapT=Jn,r.needsUpdate=!0,r}};Lo.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var No={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ch=class extends Hn{constructor(){super(),this.uniforms=Qn.clone(No.uniforms),this.material=new so({name:No.name,uniforms:this.uniforms,vertexShader:No.vertexShader,fragmentShader:No.fragmentShader}),this._fsQuad=new ds(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},nt.getTransfer(this._outputColorSpace)===at&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===gc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_c?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===xc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Gr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===yc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Sc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===vc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var H0={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new de(1/1024,1/512)}},vertexShader:`

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

		}`};var ki=1,jd=class extends Lo{render(...e){let t=this.camera.layers.mask;this.camera.layers.disable(ki);try{super.render(...e)}finally{this.camera.layers.mask=t}}};function G0({renderer:i,scene:e,camera:t,ambient:n,sun:s}){if(!i.extensions.has("EXT_color_buffer_float"))throw new Error("Floating point color attachments are unavailable");let r=i.getPixelRatio(),a=s.shadow.camera.clone(),o=s.shadow.autoUpdate,l=s.position.clone(),c=n.intensity,h=s.intensity,u,p,f,_,g;function m(){e.environment=null,e.environmentIntensity=1,e.overrideMaterial=null,t.layers.disable(ki),s.shadow.autoUpdate=o,s.shadow.camera.copy(a),s.shadow.camera.updateProjectionMatrix(),s.position.copy(l),s.target.position.set(0,0,0),s.target.removeFromParent(),s.intensity=h,n.intensity=c,i.setRenderTarget(null),i.setPixelRatio(r),f?.gtaoMaterial.dispose(),f?.blendMaterial.dispose(),f?.dispose(),_?.dispose(),g?.dispose(),p?.dispose(),u?.dispose()}try{let d=new Mh,x=new Zr(i);try{u=x.fromScene(d,.04)}finally{d.traverse(v=>{v.isInstancedMesh&&v.dispose()}),d.dispose(),x.dispose()}e.environment=u.texture,e.environmentIntensity=.44,n.intensity=1.04,s.intensity=2.55,s.shadow.autoUpdate=!1,e.add(s.target),t.layers.enable(ki),i.setPixelRatio(Math.min(r,1.25)),p=new wh(i),p.addPass(new Eh(e,t)),f=new jd(e,t,1,1,void 0,{radius:.24,distanceExponent:1,samples:8},{radius:5,samples:8}),f.blendIntensity=.48,p.addPass(f),_=new Ch,p.addPass(_),g=new na(H0),p.addPass(g)}catch(d){throw m(),d}return{resize(d,x){p.setSize(d,x);let v=Math.min(.55,720/Math.max(d,x));f.setSize(Math.max(1,Math.round(d*v)),Math.max(1,Math.round(x*v))),g.uniforms.resolution.value.set(1/i.domElement.width,1/i.domElement.height)},fitLights({width:d,depth:x,height:v}){let y=Math.hypot(d,x)/2+v;s.position.set(d/2-8,v+15,x/2+5),s.target.position.set(d/2,0,x/2),Object.assign(s.shadow.camera,{left:-y,right:y,top:y,bottom:-y,near:.25,far:y*2+30}),s.shadow.camera.updateProjectionMatrix()},render(){p.render()},invalidateShadows(){s.shadow.needsUpdate=!0},dispose:m}}function ia(i){i?.traverse(e=>{e.geometry?.dispose();for(let t of Array.isArray(e.material)?e.material:[e.material])t?.dispose()}),i?.parent?.remove(i)}function W0(i,e,t){let n=[];for(let r=1;r<i.length-1;r++)for(let a of[i[0],i[r],i[r+1]])n.push(a.x,a.y,a.z);let s=new xt().setAttribute("position",new ot(n,3));return new je(s,new Mn({color:e,transparent:!0,opacity:t,side:nn,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1}))}function Jd(i,e,t=!0){let n=new xt().setFromPoints(i),s=new Kn({color:e,transparent:!0,opacity:.68,toneMapped:!1});return t?new Ui(n,s):new Bs(n,s)}function y1(i,e){let t=new He,n=new He;t.name="camera-view-volume",n.name="camera-floor-intersection";for(let s of i.faces)t.add(W0(s.points,e,s.kind==="frustum"?.065:.09)),t.add(Jd(s.points,e));if(i.centerEnd){let s=Jd([i.origin,i.centerEnd],e,!1);s.name="camera-view-center",t.add(s)}if(i.floor.length>=3){let s=i.floor.map(r=>new I(r.x,.055,r.z));n.add(W0(s,e,.14),Jd(s,e))}return{group:t,floor:n}}var Rh=class{constructor(e){this.volumeRoot=new He,this.floorRoot=new He,this.entries=new Map,this.volumeRoot.name="camera-frusta",this.floorRoot.name="camera-floor-coverage",e.add(this.volumeRoot,this.floorRoot)}sync(e,t,n,s,r,a=!1){let o=e.filter(Vn),l=new Set(o.map(c=>c.id));for(let[c,h]of this.entries)l.has(c)||(ia(h.group),ia(h.floor),this.entries.delete(c));for(let c of o){let h=s.settings.get(c.id),u=JSON.stringify([c.model,c.x,c.depth,c.direction,t[c.id],n.width,n.height,n.depth,h,a]),p=this.entries.get(c.id);if(p?.key!==u){p&&(ia(p.group),ia(p.floor));let g=k0(c,t[c.id],n,h,!0);if(p={...y1(g,c.kind==="teacher"?"#e87836":"#288fda"),key:u,geometry:g},a)for(let m of[p.group,p.floor])m.traverse(d=>d.layers.set(ki));this.volumeRoot.add(p.group),this.floorRoot.add(p.floor),this.entries.set(c.id,p)}let f=c.id===s.activeId,_=r[c.kind]!==!1;p.group.visible=s.enabled&&_&&(!s.onlyCurrent||f),p.floor.visible=_&&(!s.onlyCurrent||f),p.group.traverse(g=>{g.material&&(g.material.opacity=g.isLine?f?.9:.42:f?.095:.045)})}}setFloorVisible(e){this.floorRoot.visible=e}dispose(){ia(this.volumeRoot),ia(this.floorRoot),this.entries.clear()}};var Ph=.08,S1=1.2,M1=.55,b1=.75,q0=3,w1=.6;function Kd({width:i,depth:e},t){let n=Math.max(1,Math.floor(i/3.2)),s=Math.max(1,Math.floor((e-2.5)/2.5)),r=e-Ph/2-w1-t,a=s>1?(r-q0)/(s-1):0;return Array.from({length:s*n},(o,l)=>[(l%n+.5)*i/n,0,q0+Math.floor(l/n)*a])}function X0(i,e){let t=new He;t.name="reference-furniture";let n=new He,s=e.surface("furniture steel","#646e70",.38,{metalness:.53}),r=e.surface("rubber","#30363a",.96),a=e.surface("chair shell","#547c7a",.59),{box:o,round:l,mesh:c,geometry:h}=e,u=.032;o(n,[S1,u,M1],[0,b1-u/2,0],e.wood,.014),o(n,[1.06,.043,.037],[0,.69,-.18],s,.006);for(let d of[-.54,.54]){o(n,[.038,.038,.44],[d,.68,0],s,.006);for(let x of[-.21,.21])o(n,[.038,.71,.038],[d,.361,x],s,.007),o(n,[.045,.014,.045],[d,.007,x],r,.005)}let p=h("chair back",()=>{let d=e.cube([.4,.27,.032],.015).clone(),{position:x,normal:v}=d.attributes,y=new I;for(let S=0;S<x.count;S++){let M=x.getX(S),w=x.getY(S);x.setZ(S,x.getZ(S)+.14*w-.46*M*M);let A=v.getZ(S);y.set(v.getX(S)+.92*M*A,v.getY(S)-.14*A,A).normalize(),v.setXYZ(S,y.x,y.y,y.z)}return d});for(let d of[-.27,.27]){o(n,[.4,.037,.4],[d,.432,.58],a,.018),c(n,p,a,[d,.665,.755]);for(let x of[-.15,.15]){for(let v of[.43,.73])l(n,.014,.42,[d+x,.219,v],s).rotation.set(v<.58?.1:-.1,0,x<0?-.1:.1),l(n,.018,.02,[d+x*1.14,.01,v<.58?v-.021:v+.021],r);l(n,.013,.31,[d+x,.57,.748],s).rotation.x=.07}}let f=new fn().setFromObject(n,!0),_=Kd(i,f.max.z),g=new Map;for(let d of n.children){let x=[d.geometry.id,d.material.id].join("/");g.has(x)||g.set(x,[]),g.get(x).push(d)}let m=new Qe;for(let d of g.values()){let[x]=d,v=new Ni(x.geometry,x.material,_.length*d.length),y=0;for(let[S,M,w]of _)for(let A of d)v.setMatrixAt(y++,m.copy(A.matrix).setPosition(S+A.position.x,M+A.position.y,w+A.position.z));v.castShadow=v.receiveShadow=!0,t.add(v)}return t}function Y0({width:i,depth:e,height:t,stageWidth:n=i},s,r){let a=new He;a.name="fidelity-room";let o=r.surface("plaster","#ede9df",.94),l=r.surface("skirting","#c5c2b8",.69),c=r.surface("door frame","#526568",.56),h=r.surface("door window","#a5bbc4",.26,{metalness:.26}),u=r.surface("door handle","#8a979d",.31,{metalness:.7}),p=r.texture("tile",128,128,(y,S,M)=>{y.fillStyle="#a3a09a",y.fillRect(0,0,S,M),y.fillStyle="#e2dfd7",y.fillRect(1,1,S-2,M-2);for(let w=0;w<240;w++)y.fillStyle=w%2?"#d9d6d0":"#ebe7e0",y.fillRect(w*43%S,w*67%M,1,1)}),f=r.surface("tile","#d8d3c9",.82,{map:p,bumpMap:p,bumpScale:.0014});function _(y,S,M,w){let A=r.geometry("room:"+S.join("/"),()=>new At(...S));return r.mesh(y,A,w,M)}let g=r.geometry("room:floor",()=>{let y=new Bn(i,e),S=y.attributes.uv;for(let M=0;M<S.count;M++)S.setXY(M,S.getX(M)*i/.6,S.getY(M)*e/.6);return y}),m=_(a,[i,.12,e],[i/2,-.061,e/2],l),d=r.mesh(a,g,f,[i/2,0,e/2]);d.rotation.x=-Math.PI/2,m.castShadow=d.castShadow=!1;let x=Math.min(1.8,e*.2);_(a,[n,.08,x],[i/2,.04,x/2],r.wood);let v={};for(let y of["front","rear","left","right"]){let b=function(F,z,B=0){let H=z-F;if(H<=0||B>=t)return;let O=(F+z)/2;_(S,[H,t-B,.07],[O,(t+B)/2,-A*.018],o).castShadow=!1,!B&&y!==s&&(_(S,[H,.083,Ph],[O,.0415,0],l).castShadow=!1)},S=v[y]=new He;a.add(S);let M=y==="left"||y==="right",w=M?e:i;S.position.set(y==="right"?i:0,0,y==="rear"||M?e:0),S.rotation.y=M?Math.PI/2:0;let A=y==="front"||y==="left"?1:-1;if(y!==s){let F=_(a,[w,.075,.065],[0,.0375,0],l);F.rotation.y=S.rotation.y,F.position.add(S.position).add(new I(w/2,0,0).applyEuler(S.rotation)),F.castShadow=!1,S.userData.cutEdge=F}if(y!==s){b(0,w);continue}let E=Math.min(1.16,(e-.36)/2),D=Math.min(2.18,t-.12),R=Math.max(E/2+.08,Math.min(1.45,e*.2)),N=0;for(let F of[R,w-R]){let z=F-E/2,B=F+E/2;b(N,z),b(z,B,D);for(let H of[z+.026,B-.026])_(S,[.052,D,.105],[H,D/2,0],c).castShadow=!1;_(S,[E,.052,.105],[F,D-.026,0],c).castShadow=!1,_(S,[E-.112,D-.06,.045],[F,(D-.05)/2,A*.017],r.wood).castShadow=!1,_(S,[.18,.52,.049],[F,D*.73,A*.017],h).castShadow=!1,_(S,[.1,.026,.035],[B-.16,.95,A*.055],u).castShadow=!1,N=B}b(N,w)}return a.userData.walls=v,a}function $0(i,e,t){let{front:n,rear:s,left:r,right:a}=i.userData.walls,{x:o,z:l}=e.position;n.visible=l>=0,s.visible=l<t.depth*.46,r.visible=o>t.width*.54,a.visible=o<t.width*.46;for(let c of[n,s,r,a])c.userData.cutEdge&&(c.userData.cutEdge.visible=!c.visible)}function Tn(i,e,t,n,s=!1){let r=new je(new At(...e),new tn({color:pr.light[n]||n,roughness:.85,transparent:s,opacity:s?.13:1,depthWrite:!s,side:nn}));Object.hasOwn(pr.light,n)&&(r.material.userData.themeRole=n),r.position.set(...t),r.castShadow=!s&&n!=="floor",r.receiveShadow=!0,i.add(r)}function Uo(i){i&&(i.traverse(e=>{e.isInstancedMesh&&e.dispose(),e.geometry&&!e.geometry.userData.fidelityShared&&e.geometry.dispose(),e.material&&!e.material.userData.fidelityShared&&e.material.dispose()}),i.parent?.remove(i))}function E1({width:i,depth:e,height:t},n){let s=new He;s.name="room-doors";let r=n==="left"?.09:i-.09,a=Math.min(1.16,(e-.36)/2),o=Math.min(2.18,t-.12),l=Math.max(a/2+.08,Math.min(1.45,e*.2));for(let[c,h]of[l,e-l].entries()){let u=new He;u.name=`room-door-${c+1}`,Tn(u,[.09,o,a],[r,o/2,h],"door"),Tn(u,[.1,o-.14,a-.14],[r,o/2,h],"doorPanel"),Tn(u,[.115,o*.22,a*.42],[r,o*.75,h],"window"),Tn(u,[.15,.04,.14],[r,o*.45,h+a*.3],"handle"),s.add(u)}return s}function T1(i,e="right"){let t=new He,{width:n,depth:s,height:r}=i;Tn(t,[n,.12,s],[n/2,-.06,s/2],"floor"),Tn(t,[i.stageWidth??n,.09,Math.min(2.1,s*.22)],[n/2,.04,Math.min(1.08,s*.12)],"platform"),Tn(t,[n,r,.12],[n/2,r/2,-.07],"front");for(let l of[0,n])Tn(t,[.045,r,s],[l,r/2,s/2],"glass",!0),(l===0?"left":"right")!==e&&Tn(t,[.08,.5,s],[l,.25,s/2],"base"),Tn(t,[.065,.06,s],[l,r-.02,s/2],"trim"),Tn(t,[.065,r,.065],[l,r/2,s],"trim");Tn(t,[n,r,.045],[n/2,r/2,s],"glass",!0),Tn(t,[n,.5,Ph],[n/2,.25,s],"base"),t.add(E1(i,e)),Tn(t,[n,.06,.065],[n/2,r-.02,s],"trim");let a=[];for(let l=1;l<n;l++)a.push(l,.015,0,l,.015,s);for(let l=1;l<s;l++)a.push(0,.015,l,n,.015,l);let o=new qa(new xt().setAttribute("position",new ot(a,3)),new Kn({color:"#bdc8c8",transparent:!0,opacity:.43}));return o.material.userData.themeRole="grid",t.add(o),t}var Dh=class{constructor(e,t,n,s,r,a){this.canvas=e,this.labelContainer=t,this.onSelect=n,this.onFrame=s,this.scene=new Os,this.scene.background=new Ge("#eaf0f5"),this.renderer=new ch({canvas:e,antialias:!0,preserveDrawingBuffer:!0}),this.renderer.localClippingEnabled=!0,this.reducedMotion=matchMedia("(prefers-reduced-motion: reduce)"),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=Pt,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ac,this.renderer.toneMapping=Gr,this.renderer.toneMappingExposure=1.35,this.camera=new qt(43,1,.1,250),this.controls=new dh(this.camera,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=2.2,this.controls.maxPolarAngle=Math.PI*.495,this.controls.addEventListener("start",()=>{this.viewTween=null,this.currentView=null,this.updateViewButtons()}),this.ambient=new lo("#f8fdff","#b6cad1",2.3),this.scene.add(this.ambient);let o=this.sun=new ho("#fff7e8",2.1);o.position.set(8,18,18),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),Object.assign(o.shadow.camera,{left:-45,right:45,top:45,bottom:-45,near:.5,far:100}),o.shadow.bias=-3e-4,o.shadow.normalBias=.025,this.scene.add(o),this.models=new Map,this.s210Aim=new Map,this.visibleKinds={},this.doorSide="right",this.updateData(r,a,!0),this.raycaster=new fo,this.pointer=new de,this.pointerStart=null,e.addEventListener("pointerdown",l=>{this.pointerStart=l.isPrimary&&l.button===0?{id:l.pointerId,x:l.clientX,y:l.clientY}:null}),e.addEventListener("pointerup",l=>this.pick(l)),e.addEventListener("pointercancel",()=>{this.pointerStart=null}),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e.parentElement),this.resize(),this.tick=this.tick.bind(this),requestAnimationFrame(this.tick)}updateData(e,t,n=!1){this.room=e.room,this.devicesData=e.devices,this.mountHeights={...t};let s=new Set(e.devices.filter(r=>r.kind==="s210").map(r=>r.id));for(let r of this.s210Aim.keys())s.has(r)||this.s210Aim.delete(r);this.ripplePlanes=Vd(this.room),this.rebuildVisuals(),(n||!this.models.has(this.selectedId))&&(this.selectedId=this.models.has("teacher-camera")?"teacher-camera":this.devicesData[0].id),this.setSelected(this.selectedId,!1),this.camera.far=Math.max(250,this.room.depth*6),this.camera.updateProjectionMatrix(),this.controls.maxDistance=Math.max(42,this.room.depth*6,this.room.width*6),this.setTheme(this.theme||"light"),this.setView("overview",n),this.cameraFieldState&&this.setCameraFrusta(this.cameraFieldState)}rebuildRoom(){Uo(this.shell),this.assets?.releaseRoomGeometry(),this.shell=this.assets?Y0(this.room,this.doorSide,this.assets):T1(this.room,this.doorSide),this.scene.add(this.shell),this.fidelity?.fitLights(this.room),this.invalidateShadows()}rebuildVisuals(){this.simulation?.clear();let e=this.furniture?.visible??!0,t=this.coverage?.visible??!1;this.rebuildRoom(),Uo(this.furniture),Uo(this.coverage),Uo(this.devices),this.models.clear(),this.furniture=this.assets?X0(this.room,this.assets):x0(this.room,Kd),this.furniture.visible=e,this.coverage=M0(this.room,this.devicesData),this.coverage.visible=t,this.fidelity&&this.coverage.traverse(n=>n.layers.set(ki)),this.devices=new He,this.scene.add(this.furniture,this.coverage,this.devices);for(let n of this.devicesData)this.rebuildDevice(n);this.simulation?.refresh()}get quality(){return this.fidelity?"high":"standard"}setQuality(e){if(e===this.quality)return!0;this.simulation?.clear();let t=this.renderer.debug.onShaderError;try{if(e==="high"){let n=!1;if(this.renderer.debug.onShaderError=(...s)=>{n=!0,t?.(...s)},this.fidelity=G0(this),this.assets=vh(),this.refreshQuality(),this.renderFrame(),n||this.renderer.getContext().isContextLost())throw new Error("High fidelity render failed")}else this.releaseFidelity(),this.refreshQuality(),this.renderFrame();return!0}catch(n){return console.warn("LCS high fidelity:",n),this.releaseFidelity(),this.refreshQuality(),this.renderFrame(),!1}finally{this.renderer.debug.onShaderError=t}}releaseFidelity(){this.simulation?.clear(),this.fidelity?.dispose(),this.assets?.dispose(),this.fidelity=this.assets=null}refreshQuality(){this.rebuildVisuals(),this.setTheme(this.theme||"light"),this.cameraFieldState&&this.setCameraFrusta(this.cameraFieldState),this.resize(!1)}invalidateShadows(){this.fidelity?.invalidateShadows(),this.frameDirty=!0}renderFrame(){this.cameraFields?.setFloorVisible(this.coverage.visible),this.fidelity?($0(this.shell,this.camera,this.room),this.fidelity.render()):this.renderer.render(this.scene,this.camera),this.frameDirty=!1}rebuildDevice(e){this.simulation?.unbind(e.id);let t=this.models.get(e.id);t&&Uo(t);let n=O0(e,this.mountHeights[e.id],this.room,this.assets);this.fidelity&&n.userData.halo.layers.set(ki);let s=n.userData.pickupOrigin;if(s){Ao(n,this.s210Aim.get(e.id));let r=L0(this.ripplePlanes);this.fidelity&&r.traverse(a=>a.layers.set(ki)),r.visible=!!this.showS210Ripples,s.add(r),n.userData.pickupRipples=r}n.visible=this.visibleKinds[e.kind]!==!1,this.models.set(e.id,n),this.devices.add(n),n.userData.halo.visible=e.id===this.selectedId,Vn(e)&&this.cameraFieldState&&Yd(n,e,this.mountHeights[e.id],this.room,this.cameraFieldState.settings.get(e.id),!0),this.invalidateShadows()}setRoomHeight(e,t){this.room={...this.room,height:e},this.mountHeights={...t},this.ripplePlanes=Vd(this.room),this.rebuildRoom(),this.setTheme(this.theme||"light");for(let n of this.devicesData)this.rebuildDevice(n);this.simulation?.refresh(),this.cameraFieldState&&this.setCameraFrusta(this.cameraFieldState)}setMountHeight(e,t){let n=this.devicesData.find(s=>s.id===e);n&&(this.mountHeights[e]=t,this.rebuildDevice(n),this.simulation?.refresh(),this.cameraFieldState&&this.setCameraFrusta(this.cameraFieldState))}setVisibility(e,t){this.visibleKinds[e]=t;for(let n of this.devicesData)n.kind===e&&(this.models.get(n.id).visible=t&&!this.simulation?.hides(n.id));this.invalidateShadows(),this.cameraFieldState&&this.setCameraFrusta(this.cameraFieldState)}setCameraFrusta(e){this.cameraFieldState=e,this.cameraFields||(this.cameraFields=new Rh(this.scene));for(let t of this.devicesData.filter(Vn))Yd(this.models.get(t.id),t,this.mountHeights[t.id],this.room,e.settings.get(t.id),!0);this.cameraFields.sync(this.devicesData,this.mountHeights,this.room,e,this.visibleKinds,!!this.fidelity),this.invalidateShadows(),this.cameraFields.setFloorVisible(this.coverage.visible)}setS210Aim(e,t){let n=this.models.get(e);n?.userData.pickupJoint&&(t?this.s210Aim.set(e,t):this.s210Aim.delete(e),Ao(n,t),this.invalidateShadows())}setS210Ripples(e,t){this.showS210Ripples=e,this.animateS210Ripples=t,this.frameDirty=!0;for(let n of this.models.values()){let s=n.userData.pickupRipples;s&&(s.visible=e,_h(s,0))}}setSelected(e,t=!0){if(!(e!==null&&!this.models.has(e))){this.selectedId=e,this.frameDirty=!0;for(let[n,s]of this.models)s.userData.halo.visible=n===e;e&&t&&this.onSelect(e)}}setDoorSide(e){this.doorSide=e==="left"?"left":"right",this.shell&&(this.rebuildRoom(),this.setTheme(this.theme||"light"),this.simulation?.refresh())}setTheme(e){this.theme=e;let t=pr[e];this.scene.background.set(this.fidelity?e==="dark"?"#17242c":"#e8e7e1":t.background),this.ambient.color.set(t.sky),this.ambient.groundColor.set(t.ground),this.renderer.toneMappingExposure=this.fidelity?e==="dark"?.78:1.05:t.exposure,this.frameDirty=!0,this.shell?.traverse(n=>{let s=n.material?.userData.themeRole;s&&n.material.color.set(t[s])})}updateViewButtons(){document.querySelectorAll("[data-view]").forEach(e=>{let t=e.dataset.view===this.currentView;e.classList.toggle("active",t),e.setAttribute("aria-pressed",String(t))})}viewTarget(){return new I(this.room.width/2,this.room.height*.34,this.room.depth/2)}presetPosition(e){let{width:t,depth:n,height:s}=this.room;if(e==="stage")return new I(t/2,s*.75,Math.min(2,n*.3));if(e==="audience")return new I(t*.72,s*.85,n+Math.max(2,n*.25));let r=this.viewTarget(),a=new I(...e==="top"?[.001,1,.001]:[.78,.78,.94]).normalize(),o=new I(0,1,0).cross(a).normalize(),l=a.clone().cross(o),c=Math.tan(this.camera.fov*Math.PI/360)*.8,h=c*this.camera.aspect,u=1;for(let p of[0,t])for(let f of[0,s])for(let _ of[0,n]){let g=new I(p,f,_).sub(r),m=g.dot(a);u=Math.max(u,m+Math.abs(g.dot(o))/h,m+Math.abs(g.dot(l))/c)}return r.clone().addScaledVector(a,u)}setView(e,t=!1){this.currentView=e,this.updateViewButtons();let n=this.presetPosition(e),s=this.viewTarget();if(t){this.camera.position.copy(n),this.controls.target.copy(s),this.controls.update();return}this.viewTween={started:performance.now(),fromPosition:this.camera.position.clone(),fromTarget:this.controls.target.clone(),toPosition:n,toTarget:s}}pick(e){let t=this.pointerStart;if(this.pointerStart=null,!t||t.id!==e.pointerId||Math.hypot(e.clientX-t.x,e.clientY-t.y)>5)return;let n=this.canvas.getBoundingClientRect();if(!n.width||!n.height)return;this.pointer.set((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height)*2+1),this.raycaster.setFromCamera(this.pointer,this.camera);let s=this.devices.children.filter(r=>r.visible).concat(this.simulation?.roots||[]);for(let r of this.raycaster.intersectObjects(s,!0)){let a=r.object;for(;a&&!a.userData.deviceId&&a.visible;)a=a.parent;let o=a?.userData.deviceId;if(o){this.models.has(o)?this.setSelected(o):this.onSelect(o);return}}}resize(e=!0){let t=this.canvas.parentElement.getBoundingClientRect(),n=Math.max(1,Math.floor(t.width)),s=Math.max(1,Math.floor(t.height));this.camera.aspect=n/s,this.camera.updateProjectionMatrix(),e&&this.currentView&&(this.viewTween=null,this.camera.position.copy(this.presetPosition(this.currentView)),this.controls.target.copy(this.viewTarget())),this.renderer.setSize(n,s,!1),this.fidelity?.resize(n,s),this.frameDirty=!0}labelPositions(){let e=this.canvas.getBoundingClientRect();return this.devicesData.map(t=>{let n=this.models.get(t.id);if(!n?.visible)return{device:t,visible:!1};let s=t.kind==="display"?(t.wallSide==="left"?1:-1)*(t.panel?t.panel.widthMm/2e3+t.panel.offsetMm/1e3:zi(t.size)/2+.18):0,r=n.localToWorld(new I(s,t.kind==="ndp"?.3:.4,0)).project(this.camera);return{device:t,x:(r.x*.5+.5)*e.width,y:(-r.y*.5+.5)*e.height,visible:r.z>-1&&r.z<1&&Math.abs(r.x)<.96&&Math.abs(r.y)<.94}})}tick(e){if(this.cameraFields?.setFloorVisible(this.coverage.visible),this.showS210Ripples&&this.animateS210Ripples){let t=this.reducedMotion.matches?0:e%3200/3200;for(let n of this.models.values())n.visible&&n.userData.pickupRipples&&_h(n.userData.pickupRipples,t)}if(this.viewTween){let t=this.viewTween,n=Math.min(1,(e-t.started)/650),s=1-(1-n)**3;this.camera.position.lerpVectors(t.fromPosition,t.toPosition,s),this.controls.target.lerpVectors(t.fromTarget,t.toTarget,s),n>=1&&(this.viewTween=null)}if(this.controls.update(),this.fidelity){let t=[...this.camera.position,...this.camera.quaternion,this.furniture.visible,this.coverage.visible].join("/");this.previousFurnitureVisibility!==this.furniture.visible&&this.invalidateShadows(),this.previousFurnitureVisibility=this.furniture.visible;let n=this.showS210Ripples&&this.animateS210Ripples&&!this.reducedMotion.matches;(this.frameDirty||t!==this.frameSignature||n)&&this.renderFrame(),this.frameSignature=t}else this.renderFrame();this.onFrame(this.labelPositions()),requestAnimationFrame(this.tick)}};var Z0={en:["Render quality","Standard","High fidelity","High fidelity is unavailable on this device. Standard rendering is active."],zh:["\u6E32\u67D3\u753B\u8D28","\u6807\u51C6","\u9AD8\u4FDD\u771F","\u5F53\u524D\u8BBE\u5907\u65E0\u6CD5\u542F\u7528\u9AD8\u4FDD\u771F\uFF0C\u5DF2\u5207\u56DE\u6807\u51C6\u753B\u8D28\u3002"],ko:["\uB80C\uB354\uB9C1 \uD488\uC9C8","\uD45C\uC900","\uACE0\uD488\uC9C8","\uC774 \uAE30\uAE30\uC5D0\uC11C \uACE0\uD488\uC9C8 \uBAA8\uB4DC\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC5B4 \uD45C\uC900\uC73C\uB85C \uC804\uD658\uD588\uC2B5\uB2C8\uB2E4."],mn:["\u0414\u04AF\u0440\u0441\u043B\u044D\u043B\u0438\u0439\u043D \u0447\u0430\u043D\u0430\u0440","\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442","\u04E8\u043D\u0434\u04E9\u0440 \u0447\u0430\u043D\u0430\u0440","\u042D\u043D\u044D \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0434 \u04E9\u043D\u0434\u04E9\u0440 \u0447\u0430\u043D\u0430\u0440\u044B\u043D \u0433\u043E\u0440\u0438\u043C \u0431\u043E\u043B\u043E\u043C\u0436\u0433\u04AF\u0439 \u0442\u0443\u043B \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442 \u0433\u043E\u0440\u0438\u043C\u0434 \u0448\u0438\u043B\u0436\u043B\u044D\u044D."],ja:["\u63CF\u753B\u54C1\u8CEA","\u6A19\u6E96","\u9AD8\u54C1\u8CEA","\u3053\u306E\u7AEF\u672B\u3067\u306F\u9AD8\u54C1\u8CEA\u30E2\u30FC\u30C9\u3092\u5229\u7528\u3067\u304D\u306A\u3044\u305F\u3081\u3001\u6A19\u6E96\u8868\u793A\u306B\u5207\u308A\u66FF\u3048\u307E\u3057\u305F\u3002"],es:["Calidad de renderizado","Est\xE1ndar","Alta fidelidad","La alta fidelidad no est\xE1 disponible en este dispositivo. Se ha activado el modo est\xE1ndar."],fr:["Qualit\xE9 de rendu","Standard","Haute fid\xE9lit\xE9","La haute fid\xE9lit\xE9 est indisponible sur cet appareil. Le rendu standard est actif."],ar:["\u062C\u0648\u062F\u0629 \u0627\u0644\u0639\u0631\u0636","\u0642\u064A\u0627\u0633\u064A\u0629","\u0639\u0627\u0644\u064A\u0629 \u0627\u0644\u062F\u0642\u0629","\u0627\u0644\u0639\u0631\u0636 \u0639\u0627\u0644\u064A \u0627\u0644\u062F\u0642\u0629 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u062C\u0647\u0627\u0632. \u062A\u0645 \u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u0642\u064A\u0627\u0633\u064A."]};function j0(i){let[e,t,n,s]=Z0[i]||Z0.en;document.querySelector("#quality-label").textContent=e,document.querySelector('#render-quality option[value="standard"]').textContent=t,document.querySelector('#render-quality option[value="high"]').textContent=n,document.querySelector("#quality-warning").textContent=s}var J0={en:["Aim S210","Microphone","Azimuth","Tilt from vertical","Reset angle","Azimuth is relative to the planned heading. Tilt is measured from straight down. Preview angles are for visualization."],zh:["\u8C03\u6574 S210 \u62FE\u97F3\u89D2\u5EA6","\u540A\u9EA6","\u65B9\u4F4D\u89D2","\u79BB\u5782\u76F4\u65B9\u5411\u7684\u503E\u89D2","\u6062\u590D\u9ED8\u8BA4\u89D2\u5EA6","\u65B9\u4F4D\u89D2\u4EE5\u65B9\u6848\u671D\u5411\u4E3A\u96F6\u70B9\u3002\u503E\u89D2\u4ECE\u5782\u76F4\u5411\u4E0B\u7B97\u8D77\u3002\u89D2\u5EA6\u7528\u4E8E\u89C2\u5BDF\u6CE2\u7EB9\u3002"],ko:["S210 \uBC29\uD5A5 \uC870\uC815","\uB9C8\uC774\uD06C","\uBC29\uC704\uAC01","\uC218\uC9C1 \uAE30\uC900 \uAE30\uC6B8\uAE30","\uAC01\uB3C4 \uCD08\uAE30\uD654","\uBC29\uC704\uAC01\uC740 \uBC30\uCE58 \uBC29\uD5A5 \uAE30\uC900\uC785\uB2C8\uB2E4. \uAE30\uC6B8\uAE30\uB294 \uC218\uC9C1 \uC544\uB798 \uBC29\uD5A5\uC5D0\uC11C \uCE21\uC815\uD569\uB2C8\uB2E4. \uC2DC\uAC01\uD654\uC6A9 \uAC01\uB3C4\uC785\uB2C8\uB2E4."],mn:["S210 \u0447\u0438\u0433\u043B\u044D\u043B \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u0430\u0445","\u041C\u0438\u043A\u0440\u043E\u0444\u043E\u043D","\u0410\u0437\u0438\u043C\u0443\u0442","\u0411\u043E\u0441\u043E\u043E \u0442\u044D\u043D\u0445\u043B\u044D\u0433\u0438\u0439\u043D \u043D\u0430\u043B\u0443\u0443","\u04E8\u043D\u0446\u04E9\u0433 \u0441\u044D\u0440\u0433\u044D\u044D\u0445","\u0410\u0437\u0438\u043C\u0443\u0442 \u043D\u044C \u0442\u04E9\u043B\u04E9\u0432\u043B\u04E9\u0441\u04E9\u043D \u0447\u0438\u0433\u043B\u044D\u043B\u044D\u044D\u0441, \u043D\u0430\u043B\u0443\u0443 \u043D\u044C \u044D\u0433\u0446 \u0434\u043E\u043E\u0448 \u0447\u0438\u0433\u043B\u044D\u043B\u044D\u044D\u0441 \u0445\u044D\u043C\u0436\u0438\u0433\u0434\u044D\u043D\u044D. \u0417\u04E9\u0432\u0445\u04E9\u043D \u0434\u04AF\u0440\u0441\u043B\u044D\u043B\u0438\u0439\u043D \u04E9\u043D\u0446\u04E9\u0433."],ja:["S210 \u306E\u53CE\u97F3\u65B9\u5411\u3092\u8ABF\u6574","\u30DE\u30A4\u30AF","\u65B9\u4F4D\u89D2","\u925B\u76F4\u304B\u3089\u306E\u50BE\u304D","\u89D2\u5EA6\u3092\u30EA\u30BB\u30C3\u30C8","\u65B9\u4F4D\u89D2\u306F\u914D\u7F6E\u65B9\u5411\u304C\u57FA\u6E96\u3067\u3059\u3002\u50BE\u304D\u306F\u771F\u4E0B\u304B\u3089\u6E2C\u308A\u307E\u3059\u3002\u8868\u793A\u78BA\u8A8D\u7528\u306E\u89D2\u5EA6\u3067\u3059\u3002"],es:["Orientar S210","Micr\xF3fono","Azimut","Inclinaci\xF3n desde la vertical","Restablecer \xE1ngulo","El azimut parte de la orientaci\xF3n prevista. La inclinaci\xF3n se mide desde la vertical hacia abajo. \xC1ngulos para visualizaci\xF3n."],fr:["Orienter le S210","Microphone","Azimut","Inclinaison depuis la verticale","R\xE9initialiser l\u2019angle","L\u2019azimut part de l\u2019orientation pr\xE9vue. L\u2019inclinaison se mesure depuis la verticale descendante. Angles de visualisation."],ar:["\u0636\u0628\u0637 \u0627\u062A\u062C\u0627\u0647 S210","\u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646","\u0627\u0644\u0633\u0645\u062A","\u0627\u0644\u0645\u064A\u0644 \u0639\u0646 \u0627\u0644\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0631\u0623\u0633\u064A","\u0625\u0639\u0627\u062F\u0629 \u0636\u0628\u0637 \u0627\u0644\u0632\u0627\u0648\u064A\u0629","\u064A\u0628\u062F\u0623 \u0627\u0644\u0633\u0645\u062A \u0645\u0646 \u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0645\u062E\u0637\u0637 \u0648\u064A\u064F\u0642\u0627\u0633 \u0627\u0644\u0645\u064A\u0644 \u0645\u0646 \u0627\u0644\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0631\u0623\u0633\u064A \u0646\u062D\u0648 \u0627\u0644\u0623\u0633\u0641\u0644. \u0627\u0644\u0632\u0648\u0627\u064A\u0627 \u0644\u0644\u0639\u0631\u0636."]};function K0({devices:i,title:e,scene:t,onSelect:n,showRipples:s,showCoverage:r}){let a=document.querySelector("#s210-aim"),o=document.querySelector("#adjust-s210-aim"),l=a.querySelector("select"),c=a.querySelector("button"),h,p=Object.entries({pan:[-180,180],tilt:[0,75]}).map(([m,[d,x]])=>{let v=a.querySelector(`[data-aim-axis="${m}"]`),[y,S]=v.querySelectorAll("input");for(let M of[y,S])M.min=d,M.max=x,M.addEventListener("input",()=>{let w=M.valueAsNumber;if(!Number.isFinite(w)||!h)return;let A=Math.min(x,Math.max(d,Math.round(w)));t()?.setS210Aim(h,{...f(),[m]:A}),_(),s()}),M.addEventListener("change",_);return{key:m,slider:y,number:S}});function f(){return t()?.s210Aim.get(h)||kd}function _(){let m=f();for(let{key:d,slider:x,number:v}of p)x.value=v.value=m[d]}function g(){let m=i();m.some(d=>d.id===h)||(h=m[0]?.id),a.hidden=!h,l.replaceChildren(...m.map(d=>new Option(e(d),d.id))),h&&(l.value=h),_()}return l.addEventListener("change",()=>n(l.value)),c.addEventListener("click",()=>{t()?.setS210Aim(h),_()}),o.addEventListener("click",()=>{r(),s(),l.focus({preventScroll:!0}),l.scrollIntoView({block:"nearest"})}),{sync:g,select(m){i().some(d=>d.id===m)&&(h=l.value=m,_())},setLanguage(m){let[d,x,v,y,S,M]=J0[m]||J0.en;o.textContent=d,c.textContent=S,a.querySelector('[data-aim-copy="mic"]').textContent=x,a.querySelector('[data-aim-copy="note"]').textContent=M;for(let[w,{slider:A,number:b}]of p.entries()){let E=w?y:v;a.querySelector(`label[for="${A.id}"]`).textContent=E,b.setAttribute("aria-label",E)}}}}function Vi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function ag(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}var Pn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ra={duration:.5,overwrite:!1,delay:0},xf,Zt,vt,ii=1e8,pt=1/ii,of=Math.PI*2,A1=of/4,C1=0,og=Math.sqrt,R1=Math.cos,P1=Math.sin,Ht=function(e){return typeof e=="string"},Ct=function(e){return typeof e=="function"},Gi=function(e){return typeof e=="number"},Vh=function(e){return typeof e>"u"},Mi=function(e){return typeof e=="object"},Rn=function(e){return e!==!1},vf=function(){return typeof window<"u"},Ih=function(e){return Ct(e)||Ht(e)},lg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},rn=Array.isArray,lf=/(?:-?\.?\d|\.)+/gi,yf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ir=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Qd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Sf=/[+-]=-?[.\d]+/,cg=/[^,'"\[\]\s]+/gi,D1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,bt,yi,cf,Mf,Wn={},Fh={},hg,ug=function(e){return(Fh=aa(e,Wn))&&an},Hh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Vo=function(e,t){return!t&&console.warn(e)},dg=function(e,t){return e&&(Wn[e]=t)&&Fh&&(Fh[e]=t)||Wn},Ho=function(){return 0},I1={suppressEvents:!0,isStart:!0,kill:!1},Lh={suppressEvents:!0,kill:!1},L1={suppressEvents:!0},bf={},ps=[],hf={},fg,An={},ef={},Q0=30,Nh=[],wf="",Ef=function(e){var t=e[0],n,s;if(Mi(t)||Ct(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(s=Nh.length;s--&&!Nh[s].targetTest(t););n=Nh[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new Rf(e[s],n)))||e.splice(s,1);return e},ms=function(e){return e._gsap||Ef(si(e))[0]._gsap},Tf=function(e,t,n){return(n=e[t])&&Ct(n)?e[t]():Vh(n)&&e.getAttribute&&e.getAttribute(t)||n},mn=function(e,t){return(e=e.split(",")).forEach(t)||e},Rt=function(e){return Math.round(e*1e5)/1e5||0},Ft=function(e){return Math.round(e*1e7)/1e7||0},sr=function(e,t){var n=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+s:n==="-"?e-s:n==="*"?e*s:e/s},N1=function(e,t){for(var n=t.length,s=0;e.indexOf(t[s])<0&&++s<n;);return s<n},Oh=function(){var e=ps.length,t=ps.slice(0),n,s;for(hf={},ps.length=0,n=0;n<e;n++)s=t[n],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Af=function(e){return!!(e._initted||e._startAt||e.add)},pg=function(e,t,n,s){ps.length&&!Zt&&Oh(),e.render(t,n,s||!!(Zt&&t<0&&Af(e))),ps.length&&!Zt&&Oh()},mg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(cg).length<2?t:Ht(e)?e.trim():e},gg=function(e){return e},qn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},U1=function(e){return function(t,n){for(var s in n)s in t||s==="duration"&&e||s==="ease"||(t[s]=n[s])}},aa=function(e,t){for(var n in t)e[n]=t[n];return e},eg=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Mi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Bh=function(e,t){var n={},s;for(s in e)s in t||(n[s]=e[s]);return n},Bo=function(e){var t=e.parent||bt,n=e.keyframes?U1(rn(e.keyframes)):qn;if(Rn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},F1=function(e,t){for(var n=e.length,s=n===t.length;s&&n--&&e[n]===t[n];);return n<0},_g=function(e,t,n,s,r){n===void 0&&(n="_first"),s===void 0&&(s="_last");var a=e[s],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[s]=t,t._prev=a,t.parent=t._dp=e,t},Gh=function(e,t,n,s){n===void 0&&(n="_first"),s===void 0&&(s="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[s]===t&&(e[s]=r),t._next=t._prev=t.parent=null},gs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},er=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},O1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},uf=function(e,t,n,s){return e._startAt&&(Zt?e._startAt.revert(Lh):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},B1=function i(e){return!e||e._ts&&i(e.parent)},tg=function(e){return e._repeat?oa(e._tTime,e=e.duration()+e._rDelay)*e:0},oa=function(e,t){var n=Math.floor(e=Ft(e/t));return e&&n===e?n-1:n},zh=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Wh=function(e){return e._end=Ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||pt)||0))},qh=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ft(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Wh(e),n._dirty||er(n,e)),e},xg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=zh(e.rawTime(),t),(!t._dur||qo(0,t.totalDuration(),n)-t._tTime>pt)&&t.render(n,!0)),er(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-pt}},Si=function(e,t,n,s){return t.parent&&gs(t),t._start=Ft((Gi(n)?n:n||e!==bt?ni(e,n,t):e._time)+t._delay),t._end=Ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),_g(e,t,"_first","_last",e._sort?"_start":0),df(t)||(e._recent=t),s||xg(e,t),e._ts<0&&qh(e,e._tTime),e},vg=function(e,t){return(Wn.ScrollTrigger||Hh("scrollTrigger",t))&&Wn.ScrollTrigger.create(t,e)},yg=function(e,t,n,s,r){if(If(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Zt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&fg!==Cn.frame)return ps.push(e),e._lazy=[r,s],1},z1=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},df=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},k1=function(e,t,n,s){var r=e.ratio,a=t<0||!t&&(!e._start&&z1(e)&&!(!e._initted&&df(e))||(e._ts<0||e._dp._ts<0)&&!df(e))?0:1,o=e._rDelay,l=0,c,h,u;if(o&&e._repeat&&(l=qo(0,e._tDur,t),h=oa(l,o),e._yoyo&&h&1&&(a=1-a),h!==oa(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Zt||s||e._zTime===pt||!t&&e._zTime){if(!e._initted&&yg(e,t,s,n,l))return;for(u=e._zTime,e._zTime=t||(n?pt:0),n||(n=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&uf(e,t,n,!0),e._onUpdate&&!n&&Gn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Gn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&gs(e,1),!n&&!Zt&&(Gn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},V1=function(e,t,n){var s;if(n>t)for(s=e._first;s&&s._start<=n;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=n;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},la=function(e,t,n,s){var r=e._repeat,a=Ft(t)||0,o=e._tTime/e._tDur;return o&&!s&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:Ft(a*(r+1)+e._rDelay*r):a,o>0&&!s&&qh(e,e._tTime=e._tDur*o),e.parent&&Wh(e),n||er(e.parent,e),e},ng=function(e){return e instanceof $t?er(e):la(e,e._dur)},H1={_start:0,endTime:Ho,totalDuration:Ho},ni=function i(e,t,n){var s=e.labels,r=e._recent||H1,a=e.duration()>=ii?r.endTime(!1):e._dur,o,l,c;return Ht(t)&&(isNaN(t)||t in s)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in s||(s[t]=a),s[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(rn(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},zo=function(e,t,n){var s=Gi(t[1]),r=(s?2:1)+(e<2?0:1),a=t[r],o,l;if(s&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Rn(l.vars.inherit)&&l.parent;a.immediateRender=Rn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new Lt(t[0],a,t[r+1])},_s=function(e,t){return e||e===0?t(e):t},qo=function(e,t,n){return n<e?e:n>t?t:n},jt=function(e,t){return!Ht(e)||!(t=D1.exec(e))?"":t[1]},G1=function(e,t,n){return _s(n,function(s){return qo(e,t,s)})},ff=[].slice,Sg=function(e,t){return e&&Mi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Mi(e[0]))&&!e.nodeType&&e!==yi},W1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(s){var r;return Ht(s)&&!t||Sg(s,1)?(r=n).push.apply(r,si(s)):n.push(s)})||n},si=function(e,t,n){return vt&&!t&&vt.selector?vt.selector(e):Ht(e)&&!n&&(cf||!ca())?ff.call((t||Mf).querySelectorAll(e),0):rn(e)?W1(e,n):Sg(e)?ff.call(e,0):e?[e]:[]},pf=function(e){return e=si(e)[0]||Vo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return si(t,n.querySelectorAll?n:n===e?Vo("Invalid scope")||Mf.createElement("div"):e)}},Mg=function(e){return e.sort(function(){return .5-Math.random()})},bg=function(e){if(Ct(e))return e;var t=Mi(e)?e:{each:e},n=tr(t.ease),s=t.from||0,r=parseFloat(t.base)||0,a={},o=s>0&&s<1,l=isNaN(s)||o,c=t.axis,h=s,u=s;return Ht(s)?h=u={center:.5,edges:.5,end:1}[s]||0:!o&&l&&(h=s[0],u=s[1]),function(p,f,_){var g=(_||t).length,m=a[g],d,x,v,y,S,M,w,A,b;if(!m){if(b=t.grid==="auto"?0:(t.grid||[1,ii])[1],!b){for(w=-ii;w<(w=_[b++].getBoundingClientRect().left)&&b<g;);b<g&&b--}for(m=a[g]=[],d=l?Math.min(b,g)*h-.5:s%b,x=b===ii?0:l?g*u/b-.5:s/b|0,w=0,A=ii,M=0;M<g;M++)v=M%b-d,y=x-(M/b|0),m[M]=S=c?Math.abs(c==="y"?y:v):og(v*v+y*y),S>w&&(w=S),S<A&&(A=S);s==="random"&&Mg(m),m.max=w-A,m.min=A,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(b>g?g-1:c?c==="y"?g/b:b:Math.max(b,g/b))||0)*(s==="edges"?-1:1),m.b=g<0?r-g:r,m.u=jt(t.amount||t.each)||0,n=n&&g<0?Ig(n):n}return g=(m[p]-m.min)/m.max||0,Ft(m.b+(n?n(g):g)*m.v)+m.u}},mf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var s=Ft(Math.round(parseFloat(n)/e)*e*t);return(s-s%1)/t+(Gi(n)?0:jt(n))}},wg=function(e,t){var n=rn(e),s,r;return!n&&Mi(e)&&(s=n=e.radius||ii,e.values?(e=si(e.values),(r=!Gi(e[0]))&&(s*=s)):e=mf(e.increment)),_s(t,n?Ct(e)?function(a){return r=e(a),Math.abs(r-a)<=s?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=ii,h=0,u=e.length,p,f;u--;)r?(p=e[u].x-o,f=e[u].y-l,p=p*p+f*f):p=Math.abs(e[u]-o),p<c&&(c=p,h=u);return h=!s||c<=s?e[h]:a,r||h===a||Gi(a)?h:h+jt(a)}:mf(e))},Eg=function(e,t,n,s){return _s(rn(e)?!t:n===!0?!!(n=0):!s,function(){return rn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(s=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*s)/s})},q1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(s){return t.reduce(function(r,a){return a(r)},s)}},X1=function(e,t){return function(n){return e(parseFloat(n))+(t||jt(n))}},Y1=function(e,t,n){return Ag(e,t,0,1,n)},Tg=function(e,t,n){return _s(n,function(s){return e[~~t(s)]})},$1=function i(e,t,n){var s=t-e;return rn(e)?Tg(e,i(0,e.length),t):_s(n,function(r){return(s+(r-e)%s)%s+e})},Z1=function i(e,t,n){var s=t-e,r=s*2;return rn(e)?Tg(e,i(0,e.length-1),t):_s(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>s?r-a:a)})},ha=function(e){for(var t=0,n="",s,r,a,o;~(s=e.indexOf("random(",t));)a=e.indexOf(")",s),o=e.charAt(s+7)==="[",r=e.substr(s+7,a-s-7).match(o?cg:lf),n+=e.substr(t,s-t)+Eg(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Ag=function(e,t,n,s,r){var a=t-e,o=s-n;return _s(r,function(l){return n+((l-e)/a*o||0)})},j1=function i(e,t,n,s){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var a=Ht(e),o={},l,c,h,u,p;if(n===!0&&(s=1)&&(n=null),a)e={p:e},t={p:t};else if(rn(e)&&!rn(t)){for(h=[],u=e.length,p=u-2,c=1;c<u;c++)h.push(i(e[c-1],e[c]));u--,r=function(_){_*=u;var g=Math.min(p,~~_);return h[g](_-g)},n=t}else s||(e=aa(rn(e)?[]:{},e));if(!h){for(l in t)Pf.call(o,e,l,"get",t[l]);r=function(_){return Uf(_,o)||(a?e.p:e)}}}return _s(n,r)},ig=function(e,t,n){var s=e.labels,r=ii,a,o,l;for(a in s)o=s[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},Gn=function(e,t,n){var s=e.vars,r=s[t],a=vt,o=e._ctx,l,c,h;if(r)return l=s[t+"Params"],c=s.callbackScope||e,n&&ps.length&&Oh(),o&&(vt=o),h=l?r.apply(c,l):r.call(c),vt=a,h},Fo=function(e){return gs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Zt),e.progress()<1&&Gn(e,"onInterrupt"),e},sa,Cg=[],Rg=function(e){if(e)if(e=!e.name&&e.default||e,vf()||e.headless){var t=e.name,n=Ct(e),s=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Ho,render:Uf,add:Pf,kill:dw,modifier:uw,rawVars:0},a={targetTest:0,get:0,getSetter:Xh,aliases:{},register:0};if(ca(),e!==s){if(An[t])return;qn(s,qn(Bh(e,r),a)),aa(s.prototype,aa(r,Bh(e,a))),An[s.prop=t]=s,e.targetTest&&(Nh.push(s),bf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}dg(t,s),e.register&&e.register(an,s,gn)}else Cg.push(e)},ft=255,Oo={aqua:[0,ft,ft],lime:[0,ft,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ft],navy:[0,0,128],white:[ft,ft,ft],olive:[128,128,0],yellow:[ft,ft,0],orange:[ft,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ft,0,0],pink:[ft,192,203],cyan:[0,ft,ft],transparent:[ft,ft,ft,0]},tf=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ft+.5|0},Pg=function(e,t,n){var s=e?Gi(e)?[e>>16,e>>8&ft,e&ft]:0:Oo.black,r,a,o,l,c,h,u,p,f,_;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Oo[e])s=Oo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&ft,s&ft,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&ft,e&ft]}else if(e.substr(0,3)==="hsl"){if(s=_=e.match(lf),!t)l=+s[0]%360/360,c=+s[1]/100,h=+s[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,s.length>3&&(s[3]*=1),s[0]=tf(l+1/3,r,a),s[1]=tf(l,r,a),s[2]=tf(l-1/3,r,a);else if(~e.indexOf("="))return s=e.match(yf),n&&s.length<4&&(s[3]=1),s}else s=e.match(lf)||Oo.transparent;s=s.map(Number)}return t&&!_&&(r=s[0]/ft,a=s[1]/ft,o=s[2]/ft,u=Math.max(r,a,o),p=Math.min(r,a,o),h=(u+p)/2,u===p?l=c=0:(f=u-p,c=h>.5?f/(2-u-p):f/(u+p),l=u===r?(a-o)/f+(a<o?6:0):u===a?(o-r)/f+2:(r-a)/f+4,l*=60),s[0]=~~(l+.5),s[1]=~~(c*100+.5),s[2]=~~(h*100+.5)),n&&s.length<4&&(s[3]=1),s},Dg=function(e){var t=[],n=[],s=-1;return e.split(Hi).forEach(function(r){var a=r.match(ir)||[];t.push.apply(t,a),n.push(s+=a.length+1)}),t.c=n,t},sg=function(e,t,n){var s="",r=(e+s).match(Hi),a=t?"hsla(":"rgba(",o=0,l,c,h,u;if(!r)return e;if(r=r.map(function(p){return(p=Pg(p,t,1))&&a+(t?p[0]+","+p[1]+"%,"+p[2]+"%,"+p[3]:p.join(","))+")"}),n&&(h=Dg(e),l=n.c,l.join(s)!==h.c.join(s)))for(c=e.replace(Hi,"1").split(ir),u=c.length-1;o<u;o++)s+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=e.split(Hi),u=c.length-1;o<u;o++)s+=c[o]+r[o];return s+c[u]},Hi=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Oo)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),J1=/hsl[a]?\(/,Cf=function(e){var t=e.join(" "),n;if(Hi.lastIndex=0,Hi.test(t))return n=J1.test(t),e[1]=sg(e[1],n),e[0]=sg(e[0],n,Dg(e[1])),!0},Go,Cn=(function(){var i=Date.now,e=500,t=33,n=i(),s=n,r=1e3/240,a=r,o=[],l,c,h,u,p,f,_=function g(m){var d=i()-s,x=m===!0,v,y,S,M;if((d>e||d<0)&&(n+=d-t),s+=d,S=s-n,v=S-a,(v>0||x)&&(M=++u.frame,p=S-u.time*1e3,u.time=S=S/1e3,a+=v+(v>=r?4:r-v),y=1),x||(l=c(g)),y)for(f=0;f<o.length;f++)o[f](S,p,M,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return p/(1e3/(m||60))},wake:function(){hg&&(!cf&&vf()&&(yi=cf=window,Mf=yi.document||{},Wn.gsap=an,(yi.gsapVersions||(yi.gsapVersions=[])).push(an.version),ug(Fh||yi.GreenSockGlobals||!yi.gsap&&yi||{}),Cg.forEach(Rg)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},Go=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Go=0,c=Ho},lagSmoothing:function(m,d){e=m||1/0,t=Math.min(d||33,e)},fps:function(m){r=1e3/(m||240),a=u.time*1e3+r},add:function(m,d,x){var v=d?function(y,S,M,w){m(y,S,M,w),u.remove(v)}:m;return u.remove(m),o[x?"unshift":"push"](v),ca(),v},remove:function(m,d){~(d=o.indexOf(m))&&o.splice(d,1)&&f>=d&&f--},_listeners:o},u})(),ca=function(){return!Go&&Cn.wake()},it={},K1=/^[\d.\-M][\d.\-,\s]/,Q1=/["']/g,ew=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),s=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[s]=isNaN(c)?c.replace(Q1,"").trim():+c,s=l.substr(o+1).trim();return t},tw=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<n?e.indexOf(")",n+1):n)},nw=function(e){var t=(e+"").split("("),n=it[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[ew(t[1])]:tw(e).split(",").map(mg)):it._CE&&K1.test(e)?it._CE("",e):n},Ig=function(e){return function(t){return 1-e(1-t)}},Lg=function i(e,t){for(var n=e._first,s;n;)n instanceof $t?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(s=n._ease,n._ease=n._yEase,n._yEase=s,n._yoyo=t)),n=n._next},tr=function(e,t){return e&&(Ct(e)?e:it[e]||nw(e))||t},rr=function(e,t,n,s){n===void 0&&(n=function(l){return 1-t(1-l)}),s===void 0&&(s=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:s},a;return mn(e,function(o){it[o]=Wn[o]=r,it[a=o.toLowerCase()]=n;for(var l in r)it[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=it[o+"."+l]=r[l]}),r},Ng=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},nf=function i(e,t,n){var s=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/of*(Math.asin(1/s)||0),o=function(h){return h===1?1:s*Math.pow(2,-10*h)*P1((h-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Ng(o);return r=of/r,l.config=function(c,h){return i(e,c,h)},l},sf=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},s=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Ng(n);return s.config=function(r){return i(e,r)},s};mn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;rr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});it.Linear.easeNone=it.none=it.Linear.easeIn;rr("Elastic",nf("in"),nf("out"),nf());(function(i,e){var t=1/e,n=2*t,s=2.5*t,r=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<s?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};rr("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);rr("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});rr("Circ",function(i){return-(og(1-i*i)-1)});rr("Sine",function(i){return i===1?1:-R1(i*A1)+1});rr("Back",sf("in"),sf("out"),sf());it.SteppedEase=it.steps=Wn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,s=e+(t?0:1),r=t?1:0,a=1-pt;return function(o){return((s*qo(0,a,o)|0)+r)*n}}};ra.ease=it["quad.out"];mn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return wf+=i+","+i+"Params,"});var Rf=function(e,t){this.id=C1++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Tf,this.set=t?t.getSetter:Xh},Wo=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,la(this,+t.duration,1,1),this.data=t.data,vt&&(this._ctx=vt,vt.data.push(this)),Go||Cn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,la(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,s){if(ca(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(qh(this,n),!r._dp||r.parent||xg(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Si(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===pt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),pg(this,n,s)),this},e.time=function(n,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+tg(this))%(this._dur+this._rDelay)||(n?this._dur:0),s):this._time},e.totalProgress=function(n,s){return arguments.length?this.totalTime(this.totalDuration()*n,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+tg(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,s){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,s):this._repeat?oa(this._tTime,r)+1:1},e.timeScale=function(n,s){if(!arguments.length)return this._rts===-pt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?zh(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-pt?0:this._rts,this.totalTime(qo(-Math.abs(this._delay),this.totalDuration(),r),s!==!1),Wh(this),O1(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ca(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==pt&&(this._tTime-=pt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&Si(s,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Rn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var s=this.parent||this._dp;return s?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?zh(s.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=L1);var s=Zt;return Zt=n,Af(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Zt=s,this},e.globalTime=function(n){for(var s=this,r=arguments.length?n:s.rawTime();s;)r=s._start+r/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ng(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var s=this._time;return this._rDelay=n,ng(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,s){return this.totalTime(ni(this,n),Rn(s))},e.restart=function(n,s){return this.play().totalTime(n?-this._delay:0,Rn(s)),this._dur||(this._zTime=-pt),this},e.play=function(n,s){return n!=null&&this.seek(n,s),this.reversed(!1).paused(!1)},e.reverse=function(n,s){return n!=null&&this.seek(n||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(n,s){return n!=null&&this.seek(n,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-pt,this},e.isActive=function(){var n=this.parent||this._dp,s=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=s&&r<this.endTime(!0)-pt)},e.eventCallback=function(n,s,r){var a=this.vars;return arguments.length>1?(s?(a[n]=s,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=s)):delete a[n],this):a[n]},e.then=function(n){var s=this;return new Promise(function(r){var a=Ct(n)?n:gg,o=function(){var c=s.then;s.then=null,Ct(a)&&(a=a(s))&&(a.then||a===s)&&(s.then=c),r(a),s.then=c};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?o():s._prom=o})},e.kill=function(){Fo(this)},i})();qn(Wo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-pt,_prom:0,_ps:!1,_rts:1});var $t=(function(i){ag(e,i);function e(n,s){var r;return n===void 0&&(n={}),r=i.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Rn(n.sortChildren),bt&&Si(n.parent||bt,Vi(r),s),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&vg(Vi(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(s,r,a){return zo(0,arguments,this),this},t.from=function(s,r,a){return zo(1,arguments,this),this},t.fromTo=function(s,r,a,o){return zo(2,arguments,this),this},t.set=function(s,r,a){return r.duration=0,r.parent=this,Bo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Lt(s,r,ni(this,a),1),this},t.call=function(s,r,a){return Si(this,Lt.delayedCall(0,s,r),a)},t.staggerTo=function(s,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Lt(s,a,ni(this,l)),this},t.staggerFrom=function(s,r,a,o,l,c,h){return a.runBackwards=1,Bo(a).immediateRender=Rn(a.immediateRender),this.staggerTo(s,r,a,o,l,c,h)},t.staggerFromTo=function(s,r,a,o,l,c,h,u){return o.startAt=a,Bo(o).immediateRender=Rn(o.immediateRender),this.staggerTo(s,r,o,l,c,h,u)},t.render=function(s,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=s<=0?0:Ft(s),u=this._zTime<0!=s<0&&(this._initted||!c),p,f,_,g,m,d,x,v,y,S,M,w;if(this!==bt&&h>l&&s>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,s+=this._time-o),p=h,y=this._start,v=this._ts,d=!v,u&&(c||(o=this._zTime),(s||!r)&&(this._zTime=s)),this._repeat){if(M=this._yoyo,m=c+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(m*100+s,r,a);if(p=Ft(h%m),h===l?(g=this._repeat,p=c):(S=Ft(h/m),g=~~S,g&&g===S&&(p=c,g--),p>c&&(p=c)),S=oa(this._tTime,m),!o&&this._tTime&&S!==g&&this._tTime-S*m-this._dur<=0&&(S=g),M&&g&1&&(p=c-p,w=1),g!==S&&!this._lock){var A=M&&S&1,b=A===(M&&g&1);if(g<S&&(A=!A),o=A?0:h%c?c:h,this._lock=1,this.render(o||(w?0:Ft(g*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Gn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,o=A?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;Lg(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=V1(this,Ft(o),Ft(p)),x&&(h-=p-(p=x._start))),this._tTime=h,this._time=p,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,o=0),!o&&h&&!r&&!S&&(Gn(this,"onStart"),this._tTime!==h))return this;if(p>=o&&s>=0)for(f=this._first;f;){if(_=f._next,(f._act||p>=f._start)&&f._ts&&x!==f){if(f.parent!==this)return this.render(s,r,a);if(f.render(f._ts>0?(p-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(p-f._start)*f._ts,r,a),p!==this._time||!this._ts&&!d){x=0,_&&(h+=this._zTime=-pt);break}}f=_}else{f=this._last;for(var E=s<0?s:p;f;){if(_=f._prev,(f._act||E<=f._end)&&f._ts&&x!==f){if(f.parent!==this)return this.render(s,r,a);if(f.render(f._ts>0?(E-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(E-f._start)*f._ts,r,a||Zt&&Af(f)),p!==this._time||!this._ts&&!d){x=0,_&&(h+=this._zTime=E?-pt:pt);break}}f=_}}if(x&&!r&&(this.pause(),x.render(p>=o?0:-pt)._zTime=p>=o?1:-1,this._ts))return this._start=y,Wh(this),this.render(s,r,a);this._onUpdate&&!r&&Gn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((s||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&gs(this,1),!r&&!(s<0&&!o)&&(h||o||!l)&&(Gn(this,h===l&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,r){var a=this;if(Gi(r)||(r=ni(this,r,s)),!(s instanceof Wo)){if(rn(s))return s.forEach(function(o){return a.add(o,r)}),this;if(Ht(s))return this.addLabel(s,r);if(Ct(s))s=Lt.delayedCall(0,s);else return this}return this!==s?Si(this,s,r):this},t.getChildren=function(s,r,a,o){s===void 0&&(s=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-ii);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Lt?r&&l.push(c):(a&&l.push(c),s&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(s){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===s)return r[a]},t.remove=function(s){return Ht(s)?this.removeLabel(s):Ct(s)?this.killTweensOf(s):(s.parent===this&&Gh(this,s),s===this._recent&&(this._recent=this._last),er(this))},t.totalTime=function(s,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ft(Cn.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),i.prototype.totalTime.call(this,s,r),this._forcing=0,this):this._tTime},t.addLabel=function(s,r){return this.labels[s]=ni(this,r),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,r,a){var o=Lt.delayedCall(0,r||Ho,a);return o.data="isPause",this._hasPause=1,Si(this,o,ni(this,s))},t.removePause=function(s){var r=this._first;for(s=ni(this,s);r;)r._start===s&&r.data==="isPause"&&gs(r),r=r._next},t.killTweensOf=function(s,r,a){for(var o=this.getTweensOf(s,a),l=o.length;l--;)fs!==o[l]&&o[l].kill(s,r);return this},t.getTweensOf=function(s,r){for(var a=[],o=si(s),l=this._first,c=Gi(r),h;l;)l instanceof Lt?N1(l._targets,o)&&(c?(!fs||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(s,r){r=r||{};var a=this,o=ni(a,s),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,p=l.immediateRender,f,_=Lt.to(a,qn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||pt,onStart:function(){if(a.pause(),!f){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&la(_,m,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},r));return p?_.render(0):_},t.tweenFromTo=function(s,r,a){return this.tweenTo(r,qn({startAt:{time:ni(this,s)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),ig(this,ni(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),ig(this,ni(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+pt)},t.shiftChildren=function(s,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=s,o._end+=s),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=s);return er(this)},t.invalidate=function(s){var r=this._first;for(this._lock=0;r;)r.invalidate(s),r=r._next;return i.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),er(this)},t.totalDuration=function(s){var r=0,a=this,o=a._last,l=ii,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-s:s));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Si(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;la(a,a===bt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(s){if(bt._ts&&(pg(bt,zh(s,bt)),fg=Cn.frame),Cn.frame>=Q0){Q0+=Pn.autoSleep||120;var r=bt._first;if((!r||!r._ts)&&Pn.autoSleep&&Cn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Cn.sleep()}}},e})(Wo);qn($t.prototype,{_lock:0,_hasPause:0,_forcing:0});var iw=function(e,t,n,s,r,a,o){var l=new gn(this._pt,e,t,0,1,Nf,null,r),c=0,h=0,u,p,f,_,g,m,d,x;for(l.b=n,l.e=s,n+="",s+="",(d=~s.indexOf("random("))&&(s=ha(s)),a&&(x=[n,s],a(x,e,t),n=x[0],s=x[1]),p=n.match(Qd)||[];u=Qd.exec(s);)_=u[0],g=s.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==p[h++]&&(m=parseFloat(p[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?sr(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=Qd.lastIndex);return l.c=c<s.length?s.substring(c,s.length):"",l.fp=o,(Sf.test(s)||d)&&(l.e=0),this._pt=l,l},Pf=function(e,t,n,s,r,a,o,l,c,h){Ct(s)&&(s=s(r||0,e,a));var u=e[t],p=n!=="get"?n:Ct(u)?c?e[t.indexOf("set")||!Ct(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,f=Ct(u)?c?lw:Og:Lf,_;if(Ht(s)&&(~s.indexOf("random(")&&(s=ha(s)),s.charAt(1)==="="&&(_=sr(p,s)+(jt(p)||0),(_||_===0)&&(s=_))),!h||p!==s||gf)return!isNaN(p*s)&&s!==""?(_=new gn(this._pt,e,t,+p||0,s-(p||0),typeof u=="boolean"?hw:Bg,0,f),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!u&&!(t in e)&&Hh(t,s),iw.call(this,e,t,p,s,f,l||Pn.stringFilter,c))},sw=function(e,t,n,s,r){if(Ct(e)&&(e=ko(e,r,t,n,s)),!Mi(e)||e.style&&e.nodeType||rn(e)||lg(e))return Ht(e)?ko(e,r,t,n,s):e;var a={},o;for(o in e)a[o]=ko(e[o],r,t,n,s);return a},Df=function(e,t,n,s,r,a){var o,l,c,h;if(An[e]&&(o=new An[e]).init(r,o.rawVars?t[e]:sw(t[e],s,r,a,n),n,s,a)!==!1&&(n._pt=l=new gn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==sa))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},fs,gf,If=function i(e,t,n){var s=e.vars,r=s.ease,a=s.startAt,o=s.immediateRender,l=s.lazy,c=s.onUpdate,h=s.runBackwards,u=s.yoyoEase,p=s.keyframes,f=s.autoRevert,_=e._dur,g=e._startAt,m=e._targets,d=e.parent,x=d&&d.data==="nested"?d.vars.targets:m,v=e._overwrite==="auto"&&!xf,y=e.timeline,S,M,w,A,b,E,D,R,N,F,z,B,H;if(y&&(!p||!r)&&(r="none"),e._ease=tr(r,ra.ease),e._yEase=u?Ig(tr(u===!0?r:u,ra.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!y&&!!s.runBackwards,!y||p&&!s.stagger){if(R=m[0]?ms(m[0]).harness:0,B=R&&s[R.prop],S=Bh(s,bf),g&&(g._zTime<0&&g.progress(1),t<0&&h&&o&&!f?g.render(-1,!0):g.revert(h&&_?Lh:I1),g._lazy=0),a){if(gs(e._startAt=Lt.set(m,qn({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!g&&Rn(l),startAt:null,delay:0,onUpdate:c&&function(){return Gn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Zt||!o&&!f)&&e._startAt.revert(Lh),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&_&&!g){if(t&&(o=!1),w=qn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Rn(l),immediateRender:o,stagger:0,parent:d},S),B&&(w[R.prop]=B),gs(e._startAt=Lt.set(m,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Zt?e._startAt.revert(Lh):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,pt,pt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Rn(l)||l&&!_,M=0;M<m.length;M++){if(b=m[M],D=b._gsap||Ef(m)[M]._gsap,e._ptLookup[M]=F={},hf[D.id]&&ps.length&&Oh(),z=x===m?M:x.indexOf(b),R&&(N=new R).init(b,B||S,e,z,x)!==!1&&(e._pt=A=new gn(e._pt,b,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(O){F[O]=A}),N.priority&&(E=1)),!R||B)for(w in S)An[w]&&(N=Df(w,S,e,z,b,x))?N.priority&&(E=1):F[w]=A=Pf.call(e,b,w,"get",S[w],z,x,0,s.stringFilter);e._op&&e._op[M]&&e.kill(b,e._op[M]),v&&e._pt&&(fs=e,bt.killTweensOf(b,F,e.globalTime(t)),H=!e.parent,fs=0),e._pt&&l&&(hf[D.id]=1)}E&&Ff(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!H,p&&t<=0&&y.render(ii,!0,!0)},rw=function(e,t,n,s,r,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,p,f;if(!c)for(c=e._ptCache[t]=[],p=e._ptLookup,f=e._targets.length;f--;){if(h=p[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return gf=1,e.vars[t]="+=0",If(e,o),gf=0,l?Vo(t+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(s||s===0)&&!r?s:h.s+(s||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=Rt(n)+jt(u.e)),u.b&&(u.b=h.s+jt(u.b))},aw=function(e,t){var n=e[0]?ms(e[0]).harness:0,s=n&&n.aliases,r,a,o,l;if(!s)return t;r=aa({},t);for(a in s)if(a in r)for(l=s[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},ow=function(e,t,n,s){var r=t.ease||s||"power1.inOut",a,o;if(rn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},ko=function(e,t,n,s,r){return Ct(e)?e.call(t,n,s,r):Ht(e)&&~e.indexOf("random(")?ha(e):e},Ug=wf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Fg={};mn(Ug+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Fg[i]=1});var Lt=(function(i){ag(e,i);function e(n,s,r,a){var o;typeof s=="number"&&(r.duration=s,s=r,r=null),o=i.call(this,a?s:Bo(s))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,p=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,x=s.parent||bt,v=(rn(n)||lg(n)?Gi(n[0]):"length"in s)?[n]:si(n),y,S,M,w,A,b,E,D;if(o._targets=v.length?Ef(v):Vo("GSAP target "+n+" not found. https://gsap.com",!Pn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||p||Ih(c)||Ih(h)){if(s=o.vars,y=o.timeline=new $t({data:"nested",defaults:g||{},targets:x&&x.data==="nested"?x.vars.targets:v}),y.kill(),y.parent=y._dp=Vi(o),y._start=0,p||Ih(c)||Ih(h)){if(w=v.length,E=p&&bg(p),Mi(p))for(A in p)~Ug.indexOf(A)&&(D||(D={}),D[A]=p[A]);for(S=0;S<w;S++)M=Bh(s,Fg),M.stagger=0,d&&(M.yoyoEase=d),D&&aa(M,D),b=v[S],M.duration=+ko(c,Vi(o),S,b,v),M.delay=(+ko(h,Vi(o),S,b,v)||0)-o._delay,!p&&w===1&&M.delay&&(o._delay=h=M.delay,o._start+=h,M.delay=0),y.to(b,M,E?E(S,b,v):0),y._ease=it.none;y.duration()?c=h=0:o.timeline=0}else if(_){Bo(qn(y.vars.defaults,{ease:"none"})),y._ease=tr(_.ease||s.ease||"none");var R=0,N,F,z;if(rn(_))_.forEach(function(B){return y.to(v,B,">")}),y.duration();else{M={};for(A in _)A==="ease"||A==="easeEach"||ow(A,_[A],M,_.easeEach);for(A in M)for(N=M[A].sort(function(B,H){return B.t-H.t}),R=0,S=0;S<N.length;S++)F=N[S],z={ease:F.e,duration:(F.t-(S?N[S-1].t:0))/100*c},z[A]=F.v,y.to(v,z,R),R+=z.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return f===!0&&!xf&&(fs=Vi(o),bt.killTweensOf(v),fs=0),Si(x,Vi(o),r),s.reversed&&o.reverse(),s.paused&&o.paused(!0),(u||!c&&!_&&o._start===Ft(x._time)&&Rn(u)&&B1(Vi(o))&&x.data!=="nested")&&(o._tTime=-pt,o.render(Math.max(0,-h)||0)),m&&vg(Vi(o),m),o}var t=e.prototype;return t.render=function(s,r,a){var o=this._time,l=this._tDur,c=this._dur,h=s<0,u=s>l-pt&&!h?l:s<pt?0:s,p,f,_,g,m,d,x,v,y;if(!c)k1(this,s,r,a);else if(u!==this._tTime||!s||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(p=u,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+s,r,a);if(p=Ft(u%g),u===l?(_=this._repeat,p=c):(m=Ft(u/g),_=~~m,_&&_===m?(p=c,_--):p>c&&(p=c)),d=this._yoyo&&_&1,d&&(y=this._yEase,p=c-p),m=oa(this._tTime,g),p===o&&!a&&this._initted&&_===m)return this._tTime=u,this;_!==m&&(v&&this._yEase&&Lg(v,d),this.vars.repeatRefresh&&!d&&!this._lock&&p!==g&&this._initted&&(this._lock=a=1,this.render(Ft(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(yg(this,h?s:p,a,r,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(s,r,a)}if(this._tTime=u,this._time=p,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(y||this._ease)(p/c),this._from&&(this.ratio=x=1-x),!o&&u&&!r&&!m&&(Gn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(x,f.d),f=f._next;v&&v.render(s<0?s:v._dur*v._ease(p/this._dur),r,a)||this._startAt&&(this._zTime=s),this._onUpdate&&!r&&(h&&uf(this,s,r,a),Gn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&Gn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&uf(this,s,!0,!0),(s||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&gs(this,1),!r&&!(h&&!o)&&(u||o||d)&&(Gn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),i.prototype.invalidate.call(this,s)},t.resetTo=function(s,r,a,o,l){Go||Cn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||If(this,c),h=this._ease(c/this._dur),rw(this,s,r,a,o,h,c,l)?this.resetTo(s,r,a,o,1):(qh(this,0),this.parent||_g(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,r){if(r===void 0&&(r="all"),!s&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Fo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Zt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(s,r,fs&&fs.vars.overwrite!==!0)._first||Fo(this),this.parent&&a!==this.timeline.totalDuration()&&la(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=s?si(s):o,c=this._ptLookup,h=this._pt,u,p,f,_,g,m,d;if((!r||r==="all")&&F1(o,l))return r==="all"&&(this._pt=0),Fo(this);for(u=this._op=this._op||[],r!=="all"&&(Ht(r)&&(g={},mn(r,function(x){return g[x]=1}),r=g),r=aw(o,r)),d=o.length;d--;)if(~l.indexOf(o[d])){p=c[d],r==="all"?(u[d]=r,_=p,f={}):(f=u[d]=u[d]||{},_=r);for(g in _)m=p&&p[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Gh(this,m,"_pt"),delete p[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&Fo(this),this},e.to=function(s,r){return new e(s,r,arguments[2])},e.from=function(s,r){return zo(1,arguments)},e.delayedCall=function(s,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(s,r,a){return zo(2,arguments)},e.set=function(s,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(s,r)},e.killTweensOf=function(s,r,a){return bt.killTweensOf(s,r,a)},e})(Wo);qn(Lt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});mn("staggerTo,staggerFrom,staggerFromTo",function(i){Lt[i]=function(){var e=new $t,t=ff.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Lf=function(e,t,n){return e[t]=n},Og=function(e,t,n){return e[t](n)},lw=function(e,t,n,s){return e[t](s.fp,n)},cw=function(e,t,n){return e.setAttribute(t,n)},Xh=function(e,t){return Ct(e[t])?Og:Vh(e[t])&&e.setAttribute?cw:Lf},Bg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},hw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Nf=function(e,t){var n=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;n;)s=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+s,n=n._next;s+=t.c}t.set(t.t,t.p,s,t)},Uf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},uw=function(e,t,n,s){for(var r=this._pt,a;r;)a=r._next,r.p===s&&r.modifier(e,t,n),r=a},dw=function(e){for(var t=this._pt,n,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?Gh(this,t,"_pt"):t.dep||(n=1),t=s;return!n},fw=function(e,t,n,s){s.mSet(e,t,s.m.call(s.tween,n,s.mt),s)},Ff=function(e){for(var t=e._pt,n,s,r,a;t;){for(n=t._next,s=r;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:a)?t._prev._next=t:r=t,(t._next=s)?s._prev=t:a=t,t=n}e._pt=r},gn=(function(){function i(t,n,s,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=s,this.r=o||Bg,this.d=l||this,this.set=c||Lf,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,s,r){this.mSet=this.mSet||this.set,this.set=fw,this.m=n,this.mt=r,this.tween=s},i})();mn(wf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return bf[i]=1});Wn.TweenMax=Wn.TweenLite=Lt;Wn.TimelineLite=Wn.TimelineMax=$t;bt=new $t({sortChildren:!1,defaults:ra,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Pn.stringFilter=Cf;var nr=[],Uh={},pw=[],rg=0,mw=0,rf=function(e){return(Uh[e]||pw).map(function(t){return t()})},_f=function(){var e=Date.now(),t=[];e-rg>2&&(rf("matchMediaInit"),nr.forEach(function(n){var s=n.queries,r=n.conditions,a,o,l,c;for(o in s)a=yi.matchMedia(s[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),rf("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(s){return n.add(null,s)})}),rg=e,rf("matchMedia"))},zg=(function(){function i(t,n){this.selector=n&&pf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=mw++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,s,r){Ct(n)&&(r=s,s=n,n=Ct);var a=this,o=function(){var c=vt,h=a.selector,u;return c&&c!==a&&c.data.push(a),r&&(a.selector=pf(r)),vt=a,u=s.apply(a,arguments),Ct(u)&&a._r.push(u),vt=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===Ct?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var s=vt;vt=null,n(this),vt=s},e.getTweens=function(){var n=[];return this.data.forEach(function(s){return s instanceof i?n.push.apply(n,s.getTweens()):s instanceof Lt&&!(s.parent&&s.parent.data==="nested")&&n.push(s)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,s){var r=this;if(n?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof $t?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Lt)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),s)for(var a=nr.length;a--;)nr[a].id===this.id&&nr.splice(a,1)},e.revert=function(n){this.kill(n||{})},i})(),gw=(function(){function i(t){this.contexts=[],this.scope=t,vt&&vt.data.push(this)}var e=i.prototype;return e.add=function(n,s,r){Mi(n)||(n={matches:n});var a=new zg(0,r||this.scope),o=a.conditions={},l,c,h;vt&&!a.selector&&(a.selector=vt.selector),this.contexts.push(a),s=a.add("onMatch",s),a.queries=n;for(c in n)c==="all"?h=1:(l=yi.matchMedia(n[c]),l&&(nr.indexOf(a)<0&&nr.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(_f):l.addEventListener("change",_f)));return h&&s(a,function(u){return a.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(s){return s.kill(n,!0)})},i})(),kh={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(s){return Rg(s)})},timeline:function(e){return new $t(e)},getTweensOf:function(e,t){return bt.getTweensOf(e,t)},getProperty:function(e,t,n,s){Ht(e)&&(e=si(e)[0]);var r=ms(e||{}).get,a=n?gg:mg;return n==="native"&&(n=""),e&&(t?a((An[t]&&An[t].get||r)(e,t,n,s)):function(o,l,c){return a((An[o]&&An[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=si(e),e.length>1){var s=e.map(function(h){return an.quickSetter(h,t,n)}),r=s.length;return function(h){for(var u=r;u--;)s[u](h)}}e=e[0]||{};var a=An[t],o=ms(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var u=new a;sa._pt=0,u.init(e,n?h+n:h,sa,0,[e]),u.render(1,u),sa._pt&&Uf(1,sa)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var s,r=an.to(e,qn((s={},s[t]="+=0.1",s.paused=!0,s.stagger=0,s),n||{})),a=function(l,c,h){return r.resetTo(t,l,c,h)};return a.tween=r,a},isTweening:function(e){return bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=tr(e.ease,ra.ease)),eg(ra,e||{})},config:function(e){return eg(Pn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,s=e.plugins,r=e.defaults,a=e.extendTimeline;(s||"").split(",").forEach(function(o){return o&&!An[o]&&!Wn[o]&&Vo(t+" effect requires "+o+" plugin.")}),ef[t]=function(o,l,c){return n(si(o),qn(l||{},r),c)},a&&($t.prototype[t]=function(o,l,c){return this.add(ef[t](o,Mi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){it[e]=tr(t)},parseEase:function(e,t){return arguments.length?tr(e,t):it},getById:function(e){return bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new $t(e),s,r;for(n.smoothChildTiming=Rn(e.smoothChildTiming),bt.remove(n),n._dp=0,n._time=n._tTime=bt._time,s=bt._first;s;)r=s._next,(t||!(!s._dur&&s instanceof Lt&&s.vars.onComplete===s._targets[0]))&&Si(n,s,s._start-s._delay),s=r;return Si(bt,n,0),n},context:function(e,t){return e?new zg(e,t):vt},matchMedia:function(e){return new gw(e)},matchMediaRefresh:function(){return nr.forEach(function(e){var t=e.conditions,n,s;for(s in t)t[s]&&(t[s]=!1,n=1);n&&e.revert()})||_f()},addEventListener:function(e,t){var n=Uh[e]||(Uh[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Uh[e],s=n&&n.indexOf(t);s>=0&&n.splice(s,1)},utils:{wrap:$1,wrapYoyo:Z1,distribute:bg,random:Eg,snap:wg,normalize:Y1,getUnit:jt,clamp:G1,splitColor:Pg,toArray:si,selector:pf,mapRange:Ag,pipe:q1,unitize:X1,interpolate:j1,shuffle:Mg},install:ug,effects:ef,ticker:Cn,updateRoot:$t.updateRoot,plugins:An,globalTimeline:bt,core:{PropTween:gn,globals:dg,Tween:Lt,Timeline:$t,Animation:Wo,getCache:ms,_removeLinkedListItem:Gh,reverting:function(){return Zt},context:function(e){return e&&vt&&(vt.data.push(e),e._ctx=vt),vt},suppressOverwrites:function(e){return xf=e}}};mn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return kh[i]=Lt[i]});Cn.add($t.updateRoot);sa=kh.to({},{duration:0});var _w=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},xw=function(e,t){var n=e._targets,s,r,a;for(s in t)for(r=n.length;r--;)a=e._ptLookup[r][s],a&&(a=a.d)&&(a._pt&&(a=_w(a,s)),a&&a.modifier&&a.modifier(t[s],e,n[r],s))},af=function(e,t){return{name:e,headless:1,rawVars:1,init:function(s,r,a){a._onInit=function(o){var l,c;if(Ht(r)&&(l={},mn(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}xw(o,r)}}}},an=kh.registerPlugin({name:"attr",init:function(e,t,n,s,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],s,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Zt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},af("roundProps",mf),af("modifiers"),af("snap",wg))||kh;Lt.version=$t.version=an.version="3.13.0";hg=1;vf()&&ca();var vw=it.Power0,yw=it.Power1,Sw=it.Power2,Mw=it.Power3,bw=it.Power4,ww=it.Linear,Ew=it.Quad,Tw=it.Cubic,Aw=it.Quart,Cw=it.Quint,Rw=it.Strong,Pw=it.Elastic,Dw=it.Back,Iw=it.SteppedEase,Lw=it.Bounce,Nw=it.Sine,Uw=it.Expo,Fw=it.Circ;var kg,xs,da,Hf,cr,Ow,Vg,Gf,Bw=function(){return typeof window<"u"},qi={},lr=180/Math.PI,fa=Math.PI/180,ua=Math.atan2,Hg=1e8,Wf=/([A-Z])/g,zw=/(left|right|width|margin|padding|x)/i,kw=/[\s,\(]\S/,bi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Bf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Vw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Hw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Gw=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},jg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Jg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Ww=function(e,t,n){return e.style[t]=n},qw=function(e,t,n){return e.style.setProperty(t,n)},Xw=function(e,t,n){return e._gsap[t]=n},Yw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},$w=function(e,t,n,s,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},Zw=function(e,t,n,s,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},wt="transform",Dn=wt+"Origin",jw=function i(e,t){var n=this,s=this.target,r=s.style,a=s._gsap;if(e in qi&&r){if(this.tfm=this.tfm||{},e!=="transform")e=bi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Wi(s,o)}):this.tfm[e]=a.x?a[e]:Wi(s,e),e===Dn&&(this.tfm.zOrigin=a.zOrigin);else return bi.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(wt)>=0)return;a.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(Dn,t,"")),e=wt}(r||t)&&this.props.push(e,t,r[e])},Kg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Jw=function(){var e=this.props,t=this.target,n=t.style,s=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Wf,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)s[a]=this.tfm[a];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Gf(),(!r||!r.isStart)&&!n[wt]&&(Kg(n),s.zOrigin&&n[Dn]&&(n[Dn]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},Qg=function(e,t){var n={target:e,props:[],revert:Jw,save:jw};return e._gsap||an.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(s){return n.save(s)}),n},e_,zf=function(e,t){var n=xs.createElementNS?xs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):xs.createElement(e);return n&&n.style?n:xs.createElement(e)},ri=function i(e,t,n){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(Wf,"-$1").toLowerCase())||s.getPropertyValue(t)||!n&&i(e,pa(t)||t,1)||""},Gg="O,Moz,ms,Ms,Webkit".split(","),pa=function(e,t,n){var s=t||cr,r=s.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Gg[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Gg[a]:"")+e},kf=function(){Bw()&&window.document&&(kg=window,xs=kg.document,da=xs.documentElement,cr=zf("div")||{style:{}},Ow=zf("div"),wt=pa(wt),Dn=wt+"Origin",cr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",e_=!!pa("perspective"),Gf=an.core.reverting,Hf=1)},Wg=function(e){var t=e.ownerSVGElement,n=zf("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),r;s.style.display="block",n.appendChild(s),da.appendChild(n);try{r=s.getBBox()}catch{}return n.removeChild(s),da.removeChild(n),r},qg=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},t_=function(e){var t,n;try{t=e.getBBox()}catch{t=Wg(e),n=1}return t&&(t.width||t.height)||n||(t=Wg(e)),t&&!t.width&&!t.x&&!t.y?{x:+qg(e,["x","cx","x1"])||0,y:+qg(e,["y","cy","y1"])||0,width:0,height:0}:t},n_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&t_(e))},hr=function(e,t){if(t){var n=e.style,s;t in qi&&t!==Dn&&(t=wt),n.removeProperty?(s=t.substr(0,2),(s==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(s==="--"?t:t.replace(Wf,"-$1").toLowerCase())):n.removeAttribute(t)}},vs=function(e,t,n,s,r,a){var o=new gn(e._pt,t,n,0,1,a?Jg:jg);return e._pt=o,o.b=s,o.e=r,e._props.push(n),o},Xg={deg:1,rad:1,turn:1},Kw={grid:1,flex:1},ys=function i(e,t,n,s){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=cr.style,l=zw.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,p=s==="px",f=s==="%",_,g,m,d;if(s===a||!r||Xg[s]||Xg[a])return r;if(a!=="px"&&!p&&(r=i(e,t,n,"px")),d=e.getCTM&&n_(e),(f||a==="%")&&(qi[t]||~t.indexOf("adius")))return _=d?e.getBBox()[l?"width":"height"]:e[h],Rt(f?r/_*u:r/100*_);if(o[l?"width":"height"]=u+(p?a:s),g=s!=="rem"&&~t.indexOf("adius")||s==="em"&&e.appendChild&&!c?e:e.parentNode,d&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===xs||!g.appendChild)&&(g=xs.body),m=g._gsap,m&&f&&m.width&&l&&m.time===Cn.time&&!m.uncache)return Rt(r/m.width*u);if(f&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=u+s,_=e[h],x?e.style[t]=x:hr(e,t)}else(f||a==="%")&&!Kw[ri(g,"display")]&&(o.position=ri(e,"position")),g===e&&(o.position="static"),g.appendChild(cr),_=cr[h],g.removeChild(cr),o.position="absolute";return l&&f&&(m=ms(g),m.time=Cn.time,m.width=g[h]),Rt(p?_*r/u:_&&r?u/_*r:0)},Wi=function(e,t,n,s){var r;return Hf||kf(),t in bi&&t!=="transform"&&(t=bi[t],~t.indexOf(",")&&(t=t.split(",")[0])),qi[t]&&t!=="transform"?(r=$o(e,s),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:$h(ri(e,Dn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||s||~(r+"").indexOf("calc("))&&(r=Yh[t]&&Yh[t](e,t,n)||ri(e,t)||Tf(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?ys(e,t,r,n)+n:r},Qw=function(e,t,n,s){if(!n||n==="none"){var r=pa(t,e,1),a=r&&ri(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=ri(e,"borderTopColor"))}var o=new gn(this._pt,e.style,t,0,1,Nf),l=0,c=0,h,u,p,f,_,g,m,d,x,v,y,S;if(o.b=n,o.e=s,n+="",s+="",s.substring(0,6)==="var(--"&&(s=ri(e,s.substring(4,s.indexOf(")")))),s==="auto"&&(g=e.style[t],e.style[t]=s,s=ri(e,t)||s,g?e.style[t]=g:hr(e,t)),h=[n,s],Cf(h),n=h[0],s=h[1],p=n.match(ir)||[],S=s.match(ir)||[],S.length){for(;u=ir.exec(s);)m=u[0],x=s.substring(l,u.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),m!==(g=p[c++]||"")&&(f=parseFloat(g)||0,y=g.substr((f+"").length),m.charAt(1)==="="&&(m=sr(f,m)+y),d=parseFloat(m),v=m.substr((d+"").length),l=ir.lastIndex-v.length,v||(v=v||Pn.units[t]||y,l===s.length&&(s+=v,o.e+=v)),y!==v&&(f=ys(e,t,g,v)||0),o._pt={_next:o._pt,p:x||c===1?x:",",s:f,c:d-f,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<s.length?s.substring(l,s.length):""}else o.r=t==="display"&&s==="none"?Jg:jg;return Sf.test(s)&&(o.e=0),this._pt=o,o},Yg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},eE=function(e){var t=e.split(" "),n=t[0],s=t[1]||"50%";return(n==="top"||n==="bottom"||s==="left"||s==="right")&&(e=n,n=s,s=e),t[0]=Yg[n]||n,t[1]=Yg[s]||s,t.join(" ")},tE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,s=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)s.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],qi[o]&&(l=1,o=o==="transformOrigin"?Dn:wt),hr(n,o);l&&(hr(n,wt),a&&(a.svg&&n.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",$o(n,1),a.uncache=1,Kg(s)))}},Yh={clearProps:function(e,t,n,s,r){if(r.data!=="isFromStart"){var a=e._pt=new gn(e._pt,t,n,0,0,tE);return a.u=s,a.pr=-10,a.tween=r,e._props.push(n),1}}},Yo=[1,0,0,1,0,0],i_={},s_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},$g=function(e){var t=ri(e,wt);return s_(t)?Yo:t.substr(7).match(yf).map(Rt)},qf=function(e,t){var n=e._gsap||ms(e),s=e.style,r=$g(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Yo:r):(r===Yo&&!e.offsetParent&&e!==da&&!n.svg&&(l=s.display,s.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,da.appendChild(e)),r=$g(e),l?s.display=l:hr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):da.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Vf=function(e,t,n,s,r,a){var o=e._gsap,l=r||qf(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,p=o.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],d=l[4],x=l[5],v=t.split(" "),y=parseFloat(v[0])||0,S=parseFloat(v[1])||0,M,w,A,b;n?l!==Yo&&(w=f*m-_*g)&&(A=y*(m/w)+S*(-g/w)+(g*x-m*d)/w,b=y*(-_/w)+S*(f/w)-(f*x-_*d)/w,y=A,S=b):(M=t_(e),y=M.x+(~v[0].indexOf("%")?y/100*M.width:y),S=M.y+(~(v[1]||v[0]).indexOf("%")?S/100*M.height:S)),s||s!==!1&&o.smooth?(d=y-c,x=S-h,o.xOffset=u+(d*f+x*g)-d,o.yOffset=p+(d*_+x*m)-x):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=S,o.smooth=!!s,o.origin=t,o.originIsAbsolute=!!n,e.style[Dn]="0px 0px",a&&(vs(a,o,"xOrigin",c,y),vs(a,o,"yOrigin",h,S),vs(a,o,"xOffset",u,o.xOffset),vs(a,o,"yOffset",p,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+S)},$o=function(e,t){var n=e._gsap||new Rf(e);if("x"in n&&!t&&!n.uncache)return n;var s=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=ri(e,Dn)||"0",h,u,p,f,_,g,m,d,x,v,y,S,M,w,A,b,E,D,R,N,F,z,B,H,O,W,K,ae,re,we,Le,Oe;return h=u=p=g=m=d=x=v=y=0,f=_=1,n.svg=!!(e.getCTM&&n_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(s[wt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[wt]!=="none"?l[wt]:"")),s.scale=s.rotate=s.translate="none"),w=qf(e,n.svg),n.svg&&(n.uncache?(O=e.getBBox(),c=n.xOrigin-O.x+"px "+(n.yOrigin-O.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),Vf(e,H||c,!!H||n.originIsAbsolute,n.smooth!==!1,w)),S=n.xOrigin||0,M=n.yOrigin||0,w!==Yo&&(D=w[0],R=w[1],N=w[2],F=w[3],h=z=w[4],u=B=w[5],w.length===6?(f=Math.sqrt(D*D+R*R),_=Math.sqrt(F*F+N*N),g=D||R?ua(R,D)*lr:0,x=N||F?ua(N,F)*lr+g:0,x&&(_*=Math.abs(Math.cos(x*fa))),n.svg&&(h-=S-(S*D+M*N),u-=M-(S*R+M*F))):(Oe=w[6],we=w[7],K=w[8],ae=w[9],re=w[10],Le=w[11],h=w[12],u=w[13],p=w[14],A=ua(Oe,re),m=A*lr,A&&(b=Math.cos(-A),E=Math.sin(-A),H=z*b+K*E,O=B*b+ae*E,W=Oe*b+re*E,K=z*-E+K*b,ae=B*-E+ae*b,re=Oe*-E+re*b,Le=we*-E+Le*b,z=H,B=O,Oe=W),A=ua(-N,re),d=A*lr,A&&(b=Math.cos(-A),E=Math.sin(-A),H=D*b-K*E,O=R*b-ae*E,W=N*b-re*E,Le=F*E+Le*b,D=H,R=O,N=W),A=ua(R,D),g=A*lr,A&&(b=Math.cos(A),E=Math.sin(A),H=D*b+R*E,O=z*b+B*E,R=R*b-D*E,B=B*b-z*E,D=H,z=O),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,d=180-d),f=Rt(Math.sqrt(D*D+R*R+N*N)),_=Rt(Math.sqrt(B*B+Oe*Oe)),A=ua(z,B),x=Math.abs(A)>2e-4?A*lr:0,y=Le?1/(Le<0?-Le:Le):0),n.svg&&(H=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!s_(ri(e,wt)),H&&e.setAttribute("transform",H))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(f*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=p+a,n.scaleX=Rt(f),n.scaleY=Rt(_),n.rotation=Rt(g)+o,n.rotationX=Rt(m)+o,n.rotationY=Rt(d)+o,n.skewX=x+o,n.skewY=v+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(s[Dn]=$h(c)),n.xOffset=n.yOffset=0,n.force3D=Pn.force3D,n.renderTransform=n.svg?iE:e_?r_:nE,n.uncache=0,n},$h=function(e){return(e=e.split(" "))[0]+" "+e[1]},Of=function(e,t,n){var s=jt(t);return Rt(parseFloat(t)+parseFloat(ys(e,"x",n+"px",s)))+s},nE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,r_(e,t)},ar="0deg",Xo="0px",or=") ",r_=function(e,t){var n=t||this,s=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,p=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,d=n.force3D,x=n.target,v=n.zOrigin,y="",S=d==="auto"&&e&&e!==1||d===!0;if(v&&(u!==ar||h!==ar)){var M=parseFloat(h)*fa,w=Math.sin(M),A=Math.cos(M),b;M=parseFloat(u)*fa,b=Math.cos(M),a=Of(x,a,w*b*-v),o=Of(x,o,-Math.sin(M)*-v),l=Of(x,l,A*b*-v+v)}m!==Xo&&(y+="perspective("+m+or),(s||r)&&(y+="translate("+s+"%, "+r+"%) "),(S||a!==Xo||o!==Xo||l!==Xo)&&(y+=l!==Xo||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+or),c!==ar&&(y+="rotate("+c+or),h!==ar&&(y+="rotateY("+h+or),u!==ar&&(y+="rotateX("+u+or),(p!==ar||f!==ar)&&(y+="skew("+p+", "+f+or),(_!==1||g!==1)&&(y+="scale("+_+", "+g+or),x.style[wt]=y||"translate(0, 0)"},iE=function(e,t){var n=t||this,s=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,p=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,d=n.yOffset,x=n.forceCSS,v=parseFloat(a),y=parseFloat(o),S,M,w,A,b;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=fa,c*=fa,S=Math.cos(l)*u,M=Math.sin(l)*u,w=Math.sin(l-c)*-p,A=Math.cos(l-c)*p,c&&(h*=fa,b=Math.tan(c-h),b=Math.sqrt(1+b*b),w*=b,A*=b,h&&(b=Math.tan(h),b=Math.sqrt(1+b*b),S*=b,M*=b)),S=Rt(S),M=Rt(M),w=Rt(w),A=Rt(A)):(S=u,A=p,M=w=0),(v&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(v=ys(f,"x",a,"px"),y=ys(f,"y",o,"px")),(_||g||m||d)&&(v=Rt(v+_-(_*S+g*w)+m),y=Rt(y+g-(_*M+g*A)+d)),(s||r)&&(b=f.getBBox(),v=Rt(v+s/100*b.width),y=Rt(y+r/100*b.height)),b="matrix("+S+","+M+","+w+","+A+","+v+","+y+")",f.setAttribute("transform",b),x&&(f.style[wt]=b)},sE=function(e,t,n,s,r){var a=360,o=Ht(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?lr:1),c=l-s,h=s+c+"deg",u,p;return o&&(u=r.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*Hg)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*Hg)%a-~~(c/a)*a)),e._pt=p=new gn(e._pt,t,n,s,c,Vw),p.e=h,p.u="deg",e._props.push(n),p},Zg=function(e,t){for(var n in t)e[n]=t[n];return e},rE=function(e,t,n){var s=Zg({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,p,f,_;s.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[wt]=t,o=$o(n,1),hr(n,wt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[wt],a[wt]=t,o=$o(n,1),a[wt]=c);for(l in qi)c=s[l],h=o[l],c!==h&&r.indexOf(l)<0&&(f=jt(c),_=jt(h),u=f!==_?ys(n,l,c,_):parseFloat(c),p=parseFloat(h),e._pt=new gn(e._pt,o,l,u,p-u,Bf),e._pt.u=_||0,e._props.push(l));Zg(o,s)};mn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",s="Bottom",r="Left",a=(e<3?[t,n,s,r]:[t+r,t+n,s+n,s+r]).map(function(o){return e<2?i+o:"border"+o+i});Yh[e>1?"border"+i:i]=function(o,l,c,h,u){var p,f;if(arguments.length<4)return p=a.map(function(_){return Wi(o,_,c)}),f=p.join(" "),f.split(p[0]).length===5?p[0]:f;p=(h+"").split(" "),f={},a.forEach(function(_,g){return f[_]=p[g]=p[g]||p[(g-1)/2|0]}),o.init(l,f,u)}});var Xf={name:"css",register:kf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,s,r){var a=this._props,o=e.style,l=n.vars.startAt,c,h,u,p,f,_,g,m,d,x,v,y,S,M,w,A;Hf||kf(),this.styles=this.styles||Qg(e),A=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(h=t[g],!(An[g]&&Df(g,t,n,s,e,r)))){if(f=typeof h,_=Yh[g],f==="function"&&(h=h.call(n,s,e,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=ha(h)),_)_(this,e,g,h,n)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",Hi.lastIndex=0,Hi.test(c)||(m=jt(c),d=jt(h)),d?m!==d&&(c=ys(e,g,c,d)+d):m&&(h+=m),this.add(o,"setProperty",c,h,s,r,0,0,g),a.push(g),A.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,s,e,r):l[g],Ht(c)&&~c.indexOf("random(")&&(c=ha(c)),jt(c+"")||c==="auto"||(c+=Pn.units[g]||jt(Wi(e,g))||""),(c+"").charAt(1)==="="&&(c=Wi(e,g))):c=Wi(e,g),p=parseFloat(c),x=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),u=parseFloat(h),g in bi&&(g==="autoAlpha"&&(p===1&&Wi(e,"visibility")==="hidden"&&u&&(p=0),A.push("visibility",0,o.visibility),vs(this,o,"visibility",p?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=bi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in qi,v){if(this.styles.save(g),f==="string"&&h.substring(0,6)==="var(--"&&(h=ri(e,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),y||(S=e._gsap,S.renderTransform&&!t.parseTransform||$o(e,t.parseTransform),M=t.smoothOrigin!==!1&&S.smooth,y=this._pt=new gn(this._pt,o,wt,0,1,S.renderTransform,S,0,-1),y.dep=1),g==="scale")this._pt=new gn(this._pt,S,"scaleY",S.scaleY,(x?sr(S.scaleY,x+u):u)-S.scaleY||0,Bf),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){A.push(Dn,0,o[Dn]),h=eE(h),S.svg?Vf(e,h,0,M,0,this):(d=parseFloat(h.split(" ")[2])||0,d!==S.zOrigin&&vs(this,S,"zOrigin",S.zOrigin,d),vs(this,o,g,$h(c),$h(h)));continue}else if(g==="svgOrigin"){Vf(e,h,1,M,0,this);continue}else if(g in i_){sE(this,S,g,p,x?sr(p,x+h):h);continue}else if(g==="smoothOrigin"){vs(this,S,"smooth",S.smooth,h);continue}else if(g==="force3D"){S[g]=h;continue}else if(g==="transform"){rE(this,h,e);continue}}else g in o||(g=pa(g)||g);if(v||(u||u===0)&&(p||p===0)&&!kw.test(h)&&g in o)m=(c+"").substr((p+"").length),u||(u=0),d=jt(h)||(g in Pn.units?Pn.units[g]:m),m!==d&&(p=ys(e,g,c,d)),this._pt=new gn(this._pt,v?S:o,g,p,(x?sr(p,x+u):u)-p,!v&&(d==="px"||g==="zIndex")&&t.autoRound!==!1?Gw:Bf),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=Hw);else if(g in o)Qw.call(this,e,g,c,x?x+h:h);else if(g in e)this.add(e,g,c||e[g],x?x+h:h,s,r);else if(g!=="parseTransform"){Hh(g,h);continue}v||(g in o?A.push(g,0,o[g]):typeof e[g]=="function"?A.push(g,2,e[g]()):A.push(g,1,c||e[g])),a.push(g)}}w&&Ff(this)},render:function(e,t){if(t.tween._time||!Gf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Wi,aliases:bi,getSetter:function(e,t,n){var s=bi[t];return s&&s.indexOf(",")<0&&(t=s),t in qi&&t!==Dn&&(e._gsap.x||Wi(e,"x"))?n&&Vg===n?t==="scale"?Yw:Xw:(Vg=n||{})&&(t==="scale"?$w:Zw):e.style&&!Vh(e.style[t])?Ww:~t.indexOf("-")?qw:Xh(e,t)},core:{_removeProperty:hr,_getMatrix:qf}};an.utils.checkPrefix=pa;an.core.getStyleSaver=Qg;(function(i,e,t,n){var s=mn(i+","+e+","+t,function(r){qi[r]=1});mn(e,function(r){Pn.units[r]="deg",i_[r]=1}),bi[s[13]]=i+","+e,mn(n,function(r){var a=r.split(":");bi[a[1]]=s[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");mn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Pn.units[i]="px"});an.registerPlugin(Xf);var Yf=an.registerPlugin(Xf)||an,kR=Yf.core.Tween;function a_({from:i,target:e,seconds:t,delay:n,update:s,complete:r}){let a={value:i};return Yf.timeline({paused:!0,onComplete:r}).to(a,{value:e,duration:t,ease:"power1.inOut",onUpdate:()=>s(a.value)},n)}var Ss=[{id:"ops",port:"OPS",label:"teacherPc"},{id:"hdmi1",port:"HDMI IN 1",label:"laptop"},{id:"hdmi2",port:"HDMI IN 2",label:"wireless"}],Jt={A:"ifp-1",B:"ifp-2",C:"sim-screen"},Kt="ndp600",wi="lcs-station",Zh={"sim-lights":"lights","sim-blind":"blind","sim-screen":"screen","sim-ac":"ac"};function jh(i){return i.width===8&&i.depth===10}function Jh(i){let s=i-.64,r=Math.ceil((s+.08)/(2+.08)),a=(s-.08*(r-1))/r;return Array.from({length:r},(o,l)=>({x:.32+a/2+l*(a+.08),span:a}))}var aE={lights:0,blind:3.6,screen:2.6,ac:.35,ifp:.32,station:0},Kh=Object.fromEntries(Object.entries({start:1,end:0}).map(([i,e])=>[i,Object.fromEntries(Object.entries(aE).map(([t,n])=>[t,{target:e,duration:n,delay:0}]))]));var oE={planning:"Planning",simulation:"Simulation",mode:"Classroom mode",matrix:"AV Matrix",room:"Room devices",openMatrix:"Open AV Matrix",classStart:"Start class",classEnd:"End class",controls:"Simulated classroom controls",duplicate:"Duplicate",duplicateHint:"Send one source to every output.",common:"Shared source",notConnected:"Not connected",penSync:"Pen display follows OUT A.",receiverNote:"Wireless Presentation uses a simulated external HDMI receiver.",teacherPc:"Teacher PC",laptop:"Laptop",wireless:"Wireless Presentation",lights:"Lighting",blind:"Rear window blinds",screen:"Projection screen",ac:"Air conditioning",dualIfp:"Dual IFP demo",stop:"Stop",stopped:"Stopped",station:"LCS recording",recording:"Recording",standby:"Standby",startRecording:"Start recording",stopRecording:"Stop recording",blindTopology:i=>`1 CBX \u2192 RS232 \u2192 remote \u2192 ${i} blinds`,on:"On",off:"Off",raise:"Raise",lower:"Lower",raised:"Raised",lowered:"Lowered",moving:"Moving",signal:"Assigned input",lesson:"Today\u2019s lesson",workspace:"Presentation workspace",sharing:"Screen sharing",lessonTopic:"Explore, learn, create",selectDevice:"Select device",matrixUnavailable:"NDP600 is not installed in this layout.",quality:"Render quality"},lE={planning:"\u89C4\u5212",simulation:"\u4EFF\u771F",mode:"\u6559\u5BA4\u6A21\u5F0F",matrix:"AV \u77E9\u9635",room:"\u6559\u5BA4\u8BBE\u5907",openMatrix:"\u6253\u5F00 AV \u77E9\u9635",classStart:"\u4E00\u952E\u4E0A\u8BFE",classEnd:"\u4E00\u952E\u4E0B\u8BFE",controls:"\u6559\u5BA4\u4EFF\u771F\u63A7\u5236",duplicate:"\u540C\u5C4F\u6A21\u5F0F",duplicateHint:"\u5C06\u540C\u4E00\u4E2A\u8F93\u5165\u5206\u914D\u7ED9\u6240\u6709\u8F93\u51FA\u3002",common:"\u7EDF\u4E00\u8F93\u5165",notConnected:"\u672A\u8FDE\u63A5",penSync:"\u624B\u5199\u5C4F\u8DDF\u968F OUT A\u3002",receiverNote:"\u65E0\u7EBF\u6295\u5C4F\u901A\u8FC7\u6A21\u62DF\u7684\u5916\u63A5 HDMI \u63A5\u6536\u5668\u63A5\u5165\u3002",teacherPc:"\u6559\u5E08\u7535\u8111",laptop:"\u7B14\u8BB0\u672C",wireless:"\u65E0\u7EBF\u6295\u5C4F",lights:"\u706F\u5149",blind:"\u540E\u5899\u7535\u52A8\u7A97\u5E18",screen:"\u6295\u5F71\u5E55\u5E03",ac:"\u7A7A\u8C03",dualIfp:"\u53CC IFP \u6F14\u793A",stop:"\u505C\u6B62",stopped:"\u5DF2\u505C\u6B62",station:"LCS \u5F55\u64AD",recording:"\u5F55\u5236\u4E2D",standby:"\u5F85\u673A",startRecording:"\u5F00\u59CB\u5F55\u5236",stopRecording:"\u505C\u6B62\u5F55\u5236",blindTopology:i=>`1 \u53F0 CBX \u2192 RS232 \u2192 \u9065\u63A7\u5668 \u2192 ${i} \u5757\u7A97\u5E18`,on:"\u5F00\u542F",off:"\u5173\u95ED",raise:"\u5347\u8D77",lower:"\u653E\u4E0B",raised:"\u5DF2\u5347\u8D77",lowered:"\u5DF2\u653E\u4E0B",moving:"\u8FD0\u884C\u4E2D",signal:"\u5DF2\u5206\u914D\u8F93\u5165",lesson:"\u4ECA\u65E5\u8BFE\u7A0B",workspace:"\u6F14\u793A\u5DE5\u4F5C\u533A",sharing:"\u5C4F\u5E55\u5171\u4EAB",lessonTopic:"\u63A2\u7D22\u3001\u5B66\u4E60\u3001\u521B\u9020",selectDevice:"\u9009\u4E2D\u8BBE\u5907",matrixUnavailable:"\u5F53\u524D\u5E03\u5C40\u672A\u5B89\u88C5 NDP600\u3002",quality:"\u6E32\u67D3\u753B\u8D28"},ur=i=>i==="zh"?lE:oE;function $f(i,e,t){return`<section class="simulation-card" data-sim-device="${i}">
    <h3><button type="button" class="simulation-device-name" data-sim-select="${i}" ${t?"":`data-sim-copy="${e}"`}>${t||""}</button></h3>
    <div class="simulation-device-controls">
      <output data-sim-status aria-live="polite"></output>
      ${e==="blind"?`<div class="simulation-blind-controls">${["raise","lower","stop"].map(n=>`<button type="button" class="quiet-button" data-blind-action="${n}" data-sim-copy="${n}"></button>`).join("")}</div>`:'<button type="button" class="quiet-button" data-sim-toggle></button>'}
    </div>
    ${["ifp","screen"].includes(e)?'<p class="settings-note" data-sim-signal></p>':""}
    ${e==="blind"?'<p class="settings-note" data-blind-topology></p>':""}
  </section>`}function o_({sidebar:i,model:e,select:t,setQuality:n}){let s=i.querySelector("#simulation-controls");s.innerHTML=`
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
      ${Object.entries(Zh).map(([S,M])=>$f(S,M)).join("")}
      ${$f(wi,"station")}
      ${["A","B"].map((S,M)=>$f(Jt[S],"ifp",`IFP ${M+1}`)).join("")}
    </div>
    <div class="simulation-footer">
      <label for="simulation-quality" data-sim-copy="quality"></label>
      <select id="simulation-quality"></select>
    </div>`;let r=S=>s.querySelector(S),a=uu(r('[role="tablist"]'),980),o=r("#matrix-duplicate"),l=r("#sim-dual-ifp"),c=r("#matrix-source"),h=r('[data-sim-device="ndp600"]'),u=r("#simulation-quality"),p=document.querySelector("#render-quality"),f=ur("en"),_,g=Object.entries(Jt).map(([S,M])=>{let w=r(`[data-matrix-output="${S}"]`);return{output:S,id:M,label:w.querySelector("label"),input:w.querySelector("select"),status:w.querySelector("span")}}),m=[...s.querySelectorAll("[data-sim-device]")].filter(S=>S!==h).map(S=>({card:S,id:S.dataset.simDevice,status:S.querySelector("[data-sim-status]"),toggle:S.querySelector("[data-sim-toggle]"),signal:S.querySelector("[data-sim-signal]")})),d=e.dispatch;l.addEventListener("change",()=>d({type:"dual-ifp",enabled:l.checked})),o.addEventListener("change",()=>d({type:"duplicate",enabled:o.checked})),c.addEventListener("change",()=>d({type:"route",output:"all",input:c.value}));for(let{output:S,input:M}of g)M?.addEventListener("change",()=>d({type:"route",output:S,input:M.value}));r("#class-start").addEventListener("click",()=>d({type:"preset",id:"start"})),r("#class-end").addEventListener("click",()=>d({type:"preset",id:"end"}));for(let S of s.querySelectorAll("[data-sim-select]"))S.addEventListener("click",()=>t(S.dataset.simSelect,!1));for(let{id:S,toggle:M}of m)M?.addEventListener("click",()=>{t(S,!1),d({type:"device",id:S,target:+(e.state.devices.get(S).target===0)})});for(let S of s.querySelectorAll("[data-blind-action]"))S.addEventListener("click",()=>{t("sim-blind",!1);let M=S.dataset.blindAction;d(M==="stop"?{type:"stop-blinds"}:{type:"device",id:"sim-blind",target:+(M==="raise")})});u.addEventListener("change",()=>n(u.value));function x(S){let M=Ss.find(w=>w.id===S);return`${f[M.label]} \xB7 ${M.port}`}function v(S,M){S.textContent!==M&&(S.textContent=M)}function y({duplicate:S,routes:M,devices:w,dualIfp:A,hasSecondIfp:b,blindCount:E}){l.parentElement.hidden=!b,l.checked=A,v(r("[data-blind-topology]"),f.blindTopology(E)),h.hidden=!w.has(Kt),r("[data-sim-unavailable]").hidden=!h.hidden,o.checked=S,c.parentElement.hidden=!S,c.value=M.A;for(let{id:D,output:R,label:N,input:F,status:z}of g){let B=w.has(D),H=R==="C"?f.screen:`IFP ${R==="A"?1:2}`;v(N,`OUT ${R}${B?` \u2192 ${H}`:""}`),F&&(F.hidden=S||!B,F.value=M[R]),z.hidden=B&&!S,v(z,B?x(M[R]):f.notConnected)}for(let{id:D,card:R,toggle:N,status:F,signal:z}of m){let B=w.get(D);if(R.hidden=!B,!B)continue;let{actual:H,target:O,moving:W,kind:K,power:ae}=B;if(R.classList.toggle("simulation-selected",_===D),R.dataset.moving=String(W),v(F,f[W?"moving":K==="screen"?ae?"lowered":"raised":K==="station"?ae?"recording":"standby":K==="blind"?H===1?"raised":H===0?"lowered":"stopped":ae?"on":"off"]),K==="blind")for(let we of R.querySelectorAll("[data-blind-action]")){let Le=we.dataset.blindAction;we.disabled=Le==="stop"?!W:O===+(Le==="raise")}if(N){let we=K==="screen"?O?"raise":"lower":K==="station"?O?"stopRecording":"startRecording":O?"off":"on";v(N,f[we]),N.setAttribute("aria-label",`${f[K]||R.querySelector("h3").textContent} \xB7 ${f[we]}`)}if(z){let we=K==="screen"?"C":D===Jt.A?"A":"B";v(z,`${f.signal} \xB7 ${w.has(Kt)?x(M[we]):f.notConnected}`)}}}return e.subscribe(y),{setLanguage(S){f=ur(S),s.querySelectorAll("[data-sim-copy]").forEach(M=>v(M,f[M.dataset.simCopy])),s.querySelector('[role="tablist"]').ariaLabel=f.controls;for(let M of[c,...g.map(w=>w.input).filter(Boolean)])M.replaceChildren(...Ss.map(({id:w})=>new Option(x(w),w)));for(let{output:M,input:w,status:A}of g)w&&w.setAttribute("aria-label",`OUT ${M} \xB7 ${f.signal}`),A.dir="auto";this.syncQuality(),y(e.state)},syncQuality(){let S=[...p.options].map(M=>new Option(M.text,M.value));u.replaceChildren(...S),u.value=p.value},select(S,M){_=S,a.activate(S===Kt?0:1),y(e.state);let w=s.querySelector(`[data-sim-device="${S}"]`);!w||!M||i.hidden||(w.querySelector("h3 button").focus({preventScroll:!0}),w.scrollIntoView({block:"nearest"}))}}}function Zf(i,e,t){let n=i-.4,s=[],r=.4;for(let[c,h]of e.sort((u,p)=>u[0]-p[0]))if(c>r&&s.push([r,Math.min(n,c)]),r=Math.max(r,h),r>=n)break;r<n&&s.push([r,n]),s.sort((c,h)=>h[1]-h[0]-(c[1]-c[0]));let[a,o]=s.find(([c,h])=>h-c>=t)||s[0]||[0,0],l=Math.min(t,o-a);return l<.42?null:{center:a+l/2,span:l}}function cE(i,e,t,n,s){let r=e==="left"?0:i.width,a=n.filter(l=>l.min.x<r+.35&&l.max.x>r-.35).map(l=>[l.min.z-.16,l.max.z+.16]);if(e===t){let l=Math.min(1.16,(i.depth-.36)/2),c=Math.max(l/2+.08,Math.min(1.45,i.depth*.2));for(let h of[c,i.depth-c])a.push([h-l/2-.14,h+l/2+.14])}let o=Zf(i.depth,a,s);return o&&{x:r,z:o.center,span:o.span,angle:e==="left"?Math.PI/2:-Math.PI/2}}function l_(i,e){let t=new He,n=new Map,{room:s}=i,r=new At,a,o=(j,me)=>new tn({color:j,roughness:.72,...me}),l=o("#d7e1e5"),c=o("#748589",{metalness:.45}),h=o("#dad5bb"),u=o("#f1f0e6"),p=o("#78b6c9",{roughness:.29,transparent:!0,opacity:.32,depthWrite:!1}),f=o("#fff1d2",{emissive:"#ffe6ad"}),_=o("#335263",{emissive:"#36d6a7"}),g=o("#334553"),m=[l,c,h,u,p,f,_,g];function d(j,me,se,Me,Ye=!1){let L=new je(r,Me);return L.scale.set(...me),L.position.set(...se),L.castShadow=Ye,L.receiveShadow=!0,j.add(L),L}function x(j,me,se){let Me=new He;return Me.userData.deviceId=j,Me.position.set(...me),t.add(Me),n.set(j,{root:Me,update:se}),Me}let v=[],y=new fn;for(let j of i.models.values()){if(i.simulation?.hides(j.userData.deviceId))continue;j.updateWorldMatrix(!0,!0);let me=new fn;j.traverse(se=>{!se.isMesh||se===j.userData.halo||(se.geometry.boundingBox||se.geometry.computeBoundingBox(),me.union(y.copy(se.geometry.boundingBox).applyMatrix4(se.matrixWorld)))}),v.push(me)}function S(j,me,se,Me,Ye=.17){d(j,[me+.04,.085,.12],[0,0,Ye],l);let L=d(j,[me,se,.021],[0,-se/2,Ye+.01],Me,!0),We=d(j,[me+.01,.037,.045],[0,-se,Ye+.01],c,!0);return Ne=>{let Te=se*Ne;L.visible=Te>.005,L.scale.y=Math.max(Te,.005),L.position.y=-.05-Te/2,We.position.y=-.055-Te}}let M=i.devicesData.find(j=>j.id==="ifp-2"),w=v.filter(j=>j.min.z<.35&&j.max.y>1.1).map(j=>[j.min.x-.14,j.max.x+.14]),A=Zf(s.width,[...w,[0,s.width/2]],2.2),b=M?{x:M.x,z:0,span:zi(M.size),angle:0}:A&&{x:A.center,z:0,span:A.span,angle:0},E=cE(s,i.doorSide==="right"?"left":"right",i.doorSide,v,2.45),D=(!e&&b?.span>=.85?b:E)||b;if(D){let{x:j,z:me,span:se,angle:Me}=D,Ye=Me===0?(i.mountHeights["ifp-1"]??1.65)+se*9/32+.05:2.8,L=Math.min(s.height-.16,Ye),We,Ne=Math.min(se*9/16,L-.91),Te=x("sim-screen",[j,L,me],Se=>{We(Se),a.visible=Se>=.995&&i.models.has("ndp600")});Te.rotation.y=Me,We=S(Te,se,Ne,u);let $=Math.min(se-.1,(Ne-.09)*16/9);a=new je(new Bn($,$*9/16),u),a.name="projected-image",a.position.set(0,-.05-Ne/2,.192),Te.add(a)}let R=jh(s),N=v.filter(j=>j.max.z>s.depth-.32&&j.min.y>1.3),F=R?Math.min(2.58,s.height-.42):Math.min(2.16,s.height-.53,...N.map(j=>j.min.y-.08)),z=R?F-.635:Math.min(1.28,F-.66),B=R?.051:.109,H=B+.003,O=[],W=x("sim-blind",[0,F,s.depth],j=>{for(let me of O)me(1-j)});W.rotation.y=Math.PI;for(let[j,{x:me,span:se}]of Jh(s.width).entries()){let Me=new He;Me.name=`rear-blind-${j+1}`,Me.position.x=-me,W.add(Me),d(Me,[se-.036,z,.025],[0,-.05-z/2,B],p);for(let Ye of[-1,1])d(Me,[.034,z,.055],[Ye*(se/2-.017),-.05-z/2,H],c);d(Me,[se,.034,.06],[0,-.06-z,H],c),O.push(S(Me,se-.02,z,h,R?.084:void 0))}let K=Math.max(.32,F-z-.21)-F;d(W,[.12,.085,.055],[-.42,K,.085],g).name="CBX",d(W,[.08,.11,.045],[-.62,K,.085],l).name="Curtain remote",d(W,[.1,.01,.012],[-.53,K,.077],g).name="RS232";let ae=x("sim-lights",[s.width/2,s.height-.08,s.depth/2],j=>{f.emissiveIntensity=j*1.4});for(let j of[-s.width*.24,s.width*.24])for(let me of[-s.depth*.1,s.depth*.24]){let se=Math.min(1.15,s.width*.23),Me=ae.position.x+j,Ye=[me,me-.35,me+.35].find(L=>!v.some(We=>We.max.y>s.height-.18&&We.min.x<Me+se/2+.04&&We.max.x>Me-se/2-.04&&We.min.z<ae.position.z+L+.17&&We.max.z>ae.position.z+L-.17));Ye!==void 0&&(d(ae,[se,.065,.24],[j,0,Ye],l),d(ae,[se-.07,.018,.19],[j,-.042,Ye],f))}let re=s.height-.21,we=v.filter(j=>j.max.z>s.depth-.33&&j.max.y>re-.18).map(j=>[j.min.x-.12,j.max.x+.12]),Le=Zf(s.width,we,Math.min(.94,s.width*.2)),Oe=Le?.span??.55,Q,te=x("sim-ac",[Le?.center??s.width/2,re,s.depth-.17],j=>{Q.rotation.x=j*.52,_.emissiveIntensity=j*1.6});return d(te,[Oe,.26,.2],[0,0,0],l),d(te,[Oe*.9,.068,.026],[0,-.073,-.104],c),Q=d(te,[Oe*.86,.016,.061],[0,-.08,-.126],l),d(te,[.035,.018,.012],[Oe*.36,.028,-.104],_),{group:t,models:n,projection:a,dispose(){t.removeFromParent(),r.dispose(),a?.geometry.dispose();for(let j of m)j.dispose()}}}var hE={ops:{background:"#e8f3fb",ink:"#153552",accent:"#176f9f",title:"lesson"},hdmi1:{background:"#28203f",ink:"#fff3ff",accent:"#8756c4",title:"workspace"},hdmi2:{background:"#083d39",ink:"#e3fff4",accent:"#128873",title:"sharing"}};function Qh(i,e,t=[]){let n=i.material,s=document.createElement("canvas");s.width=e==="control"?256:640,s.height=e==="control"?512:360;let r=s.getContext("2d"),a=new Fi(s);a.colorSpace=Pt;let o=new Mn({map:a,toneMapped:!1,...e==="projection"?{transparent:!0,opacity:.9,depthWrite:!1}:{}});i.material=o;for(let h of t)h.visible=!1;let l;function c({powered:h,level:u=1,source:p,routes:f,duplicate:_,lang:g}){let m=h?u:1,d=o.color.r!==m;d&&o.color.setScalar(m);let x=[h,p,f?.A,f?.B,f?.C,_,g].join("/");if(x===l)return d;l=x;let v=ur(g),{width:y,height:S}=s;if(r.fillStyle="#111820",r.fillRect(0,0,y,S),e==="recording")r.fillStyle="#1b2b3c",r.fillRect(0,0,y,S),r.fillStyle="#0d1928",r.fillRect(0,0,y,86),r.fillStyle="#eaf4fa",r.font="bold 46px sans-serif",r.fillText("LCS 810",32,60),r.fillStyle=h?"#ff555d":"#93a7b8",r.beginPath(),r.arc(62,182,25,0,2*Math.PI),r.fill(),r.font="bold 57px sans-serif",r.fillText(h?v.recording:v.standby,108,200,y-145);else if(h&&e==="control")r.fillStyle="#0d615c",r.fillRect(0,0,y,125),r.fillStyle="#efffff",r.font="bold 26px sans-serif",r.fillText("NDP600",18,40),r.font="20px sans-serif",r.fillText(v.matrix,18,78),_&&r.fillText(v.duplicate,18,109),Object.entries(f).forEach(([M,w],A)=>{let b=145+A*112;r.fillStyle="#233544",r.fillRect(12,b,y-24,90),r.fillStyle="#f0f9ff",r.font="bold 22px sans-serif",r.fillText("OUT "+M,24,b+32),r.font="19px sans-serif",r.fillText(Ss.find(E=>E.id===w).port,24,b+65)});else if(h&&p){let M=Ss.find(A=>A.id===p),w=hE[p];if(r.fillStyle=w.background,r.fillRect(0,0,y,S),r.fillStyle=w.accent,r.fillRect(0,0,y,68),r.fillStyle="#fff",r.font="bold 30px sans-serif",r.fillText(v[M.label],28,45),r.textAlign="right",r.font="22px sans-serif",r.fillText(M.port,y-24,45),r.textAlign="left",r.fillStyle=w.ink,r.font="bold 40px sans-serif",r.fillText(v[w.title],32,137,y-64),p==="ops")r.font="25px sans-serif",r.fillText(v.lessonTopic,32,183),["#258f87","#3e97c1","#c98836"].forEach((A,b)=>{r.fillStyle=A,r.fillRect(32+b*195,223,177,84)});else if(p==="hdmi1"){r.fillStyle="#634b8a",r.fillRect(32,169,120,153),r.fillStyle="#e6d9f6",r.fillRect(169,169,438,153),r.fillStyle="#8756c4";for(let A=0;A<4;A++)r.fillRect(201+87*A,278-A*19,57,22+A*19)}else r.strokeStyle="#91e7c3",r.lineWidth=9,r.strokeRect(205,181,230,121),r.beginPath(),r.arc(208,298,47,-Math.PI/2,0),r.stroke(),r.fillStyle="#91e7c3",r.fillRect(205,291,12,12)}else h&&(r.fillStyle="#d7e2ec",r.font="28px sans-serif",r.fillText(v.notConnected,28,S/2));return a.needsUpdate=!0,!0}return{render:c,dispose(){i.material=n;for(let h of t)h.visible=!0;o.dispose(),a.dispose()}}}function c_(i){let e=!1,t,n,s,r="en",a,o,l=new Map,c=new Map,h=new Map;function u(m){for(let d of c.get(m)||[])d.dispose();c.delete(m)}function p(){for(let m of c.keys())u(m);a?.dispose(),a=null,t?.dispose(),t=null,h.clear();for(let{model:m,kind:d}of l.values())m.visible=i.visibleKinds[d]!==!1;l.clear(),n&&(i.ambient.intensity=n.ambient,i.sun.intensity=n.sun,i.scene.environmentIntensity=n.environment,n=null),i.invalidateShadows()}function f(m){if(!e||c.has(m))return;let d=i.models.get(m),x=d?.userData.avScreen;if(!x)return;let v=[Qh(x,m===wi?"recording":"content",d.userData.avDecorations)];d.userData.avControl&&v.push(Qh(d.userData.avControl,"control")),c.set(m,v)}function _(){if(!e)return;p(),o=s?.dualIfp??!1;let m=jh(i.room);for(let{id:d,kind:x,mount:v}of i.devicesData){if(!(!o&&d===Jt.B)&&!(m&&x==="speaker"&&v==="rear-wall"))continue;let M=i.models.get(d);M.visible=!1,l.set(d,{model:M,kind:x})}n={ambient:i.ambient.intensity,sun:i.sun.intensity,environment:i.scene.environmentIntensity},t=l_(i,o),i.scene.add(t.group),t.projection&&(a=Qh(t.projection,"projection"));for(let d of[Kt,wi,Jt.A,...o?[Jt.B]:[]])f(d);g(s,r)}function g(m,d){if(s=m,r=d,!e||!t||!m)return;if(o!==m.dualIfp){_();return}let x=!1;for(let[M,{update:w}]of t.models){let A=m.devices.get(M)?.actual??1;h.get(M)!==A&&(w(A),h.set(M,A),x||(x=M==="sim-blind"||M==="sim-screen"),M==="sim-lights"&&(i.ambient.intensity=n.ambient*(.29+.71*A),i.sun.intensity=n.sun*(.27+.73*A),i.scene.environmentIntensity=n.environment*(.45+.55*A)),i.frameDirty=!0)}for(let M of["A","B"]){let w=Jt[M],[A]=c.get(w)||[],b=m.devices.has(Kt)?m.routes[M]:null,E=m.devices.get(w)?.actual??0;A?.render({powered:E>0,level:E,source:b,lang:d})&&(i.frameDirty=!0)}let[v,y]=c.get(Kt)||[];v?.render({powered:!0,source:m.routes.A,lang:d})&&(i.frameDirty=!0),y?.render({powered:!0,routes:m.routes,duplicate:m.duplicate,lang:d})&&(i.frameDirty=!0);let[S]=c.get(wi)||[];S?.render({powered:m.devices.get(wi)?.power,lang:d})&&(i.frameDirty=!0),a&&m.devices.has(Kt)&&m.devices.get(Jt.C)?.actual>=.995&&a.render({powered:!0,source:m.routes.C,lang:d})&&(i.frameDirty=!0),x&&i.invalidateShadows()}return{clear:p,unbind:u,refresh:_,render:g,setActive(m){e!==m&&(e=m,e?_():p())},hides(m){return l.has(m)},get roots(){return t?[...t.models.values()].map(({root:m})=>m):[]}}}function h_({animate:i,reducedMotion:e}){let t=new Map,n={A:"ops",B:"ops",C:"ops"},s=new Set,r=new Map,a={devices:t,routes:n,duplicate:!0,dualIfp:!1,hasSecondIfp:!1,blindCount:0},o=[],l=!0;function c(){for(let g of s)g(a)}function h(g){let m=r.get(g);r.delete(g),m?.kill()}function u(g,m){o=g,a.hasSecondIfp=g.some(d=>d.id===Jt.B),a.blindCount=Jh(m).length,p(),c()}function p(){let g=new Map(Object.entries(Zh));for(let{id:m,kind:d}of o)(m===Kt||m===wi||m===Jt.A||m===Jt.B&&a.dualIfp)&&g.set(m,d);for(let m of t.keys())g.has(m)||(h(m),t.delete(m));for(let[m,d]of g){if(t.has(m))continue;let x=+(m!==wi);t.set(m,{id:m,kind:d,actual:x,target:x,power:!!x,moving:!1})}}function f(g,{target:m,duration:d,delay:x}){if(g.target===m)return;h(g.id),g.target=m;let v=g.actual,y=d*Math.abs(m-v);if(!y||e()){Object.assign(g,{actual:m,power:m>0,moving:!1});return}g.moving=!0;let S=i({from:v,target:m,seconds:y,delay:x,update(M){r.get(g.id)===S&&(g.actual=M,g.power=M>0,c())},complete(){r.get(g.id)===S&&(r.delete(g.id),Object.assign(g,{actual:m,power:m>0,moving:!1}),c())}});r.set(g.id,S),l||S.resume()}function _(g){switch(g.type){case"duplicate":if(!t.has(Kt))return;a.duplicate=!!g.enabled,a.duplicate&&(n.B=n.C=n.A);break;case"route":if(!t.has(Kt)||!Ss.some(m=>m.id===g.input))return;if(a.duplicate&&g.output==="all")n.A=n.B=n.C=g.input;else if(!a.duplicate&&Object.hasOwn(Jt,g.output)&&t.has(Jt[g.output]))n[g.output]=g.input;else return;break;case"dual-ifp":a.dualIfp=!!g.enabled,p();break;case"preset":{let m=Object.hasOwn(Kh,g.id)&&Kh[g.id];if(!m)return;for(let d of t.values())m[d.kind]&&f(d,m[d.kind]);break}case"device":{let m=t.get(g.id),d=m&&Kh.start[m.kind];if(!d||!Number.isFinite(g.target))return;f(m,{...d,target:+(g.target>0)});break}case"stop-blinds":{let m=t.get("sim-blind");if(!m?.moving)return;h(m.id),m.target=m.actual,m.moving=!1;break}default:return}c()}return{state:a,dispatch:_,reconcile:u,subscribe(g){return s.add(g),()=>s.delete(g)},setPaused(g){if(l!==g){l=g;for(let m of r.values())l?m.pause():m.resume()}},finishMotion(){for(let g of t.values())g.moving&&(h(g.id),Object.assign(g,{actual:g.target,power:g.target>0,moving:!1}));c()}}}function u_({room:i,sidebar:e,devices:t,visible:n,setQuality:s,restorePlanningSelection:r}){let a=[...document.querySelectorAll("[data-classroom-mode]")],o=document.querySelector("#classroom-mode"),l=i.reducedMotion,c=h_({animate:a_,reducedMotion:()=>l.matches}),h=c_(i);i.simulation=h;let u=!1,p,f="en",_=o_({sidebar:e,model:c,select:m,setQuality:s});function g(){c.setPaused(!u||document.hidden)}function m(x,v=!0){if(!u||!c.state.devices.has(x))return!1;v&&e.hidden&&document.querySelector("#sidebar-toggle").click(),p=x;let y=t().find(S=>S.id===x);return y&&n(y)?i.setSelected(x,!1):y||i.setSelected(null,!1),_.select(x,v),!0}function d(x){u=x==="simulation",e.dataset.mode=x,document.documentElement.dataset.classroomMode=x;for(let y of a)y.ariaPressed=String(y.dataset.classroomMode===x);h.setActive(u),g(),u?p&&m(p,!1):r();let v=new URL(location.href);if(u?v.searchParams.set("mode","simulation"):v.searchParams.get("mode")==="simulation"&&v.searchParams.delete("mode"),v.href!==location.href)try{history.replaceState(null,"",v)}catch{}}return a.forEach(x=>x.addEventListener("click",()=>d(x.dataset.classroomMode))),document.querySelector("#open-av-matrix").addEventListener("click",()=>{d("simulation"),m(Kt)}),document.addEventListener("visibilitychange",g),l.addEventListener("change",()=>{l.matches&&c.finishMotion()}),c.subscribe(x=>h.render(x,f)),c.reconcile(t(),i.room.width),o.hidden=!1,d(new URLSearchParams(location.search).get("mode")==="simulation"?"simulation":"planning"),{select:m,get active(){return u},syncLayout(){c.reconcile(t(),i.room.width),p&&!c.state.devices.has(p)&&(p=void 0),p&&m(p,!1)},syncQuality(){_.syncQuality()},setLanguage(x){f=x;let v=ur(x);o.setAttribute("aria-label",v.mode);for(let y of a)y.textContent=v[y.dataset.classroomMode];document.querySelector("#open-av-matrix").textContent=v.openMatrix,_.setLanguage(x),h.render(c.state,x)}}}var uE=["resetPlan","resetPlanHint","quantity","automatic","fixed","pending","adjusted","pickupUnmet","importHint"],d_={en:["Reset","Recommend quantities and layout for the current room","S210 quantities","Automatic recommendation","Specified quantities","Pending \xB7 click Recalculate","From 2D \xB7 adjusted in 3D","Pickup coverage is below target; specified quantities are retained.","Recalculate or reset this 3D view locally. Refresh restores the original 2D snapshot."],zh:["\u91CD\u7F6E","\u6309\u5F53\u524D\u623F\u95F4\u91CD\u65B0\u63A8\u8350\u6570\u91CF\u4E0E\u5E03\u5C40","S210 \u6570\u91CF","\u81EA\u52A8\u63A8\u8350","\u6307\u5B9A\u6570\u91CF","\u5F85\u5E94\u7528 \xB7 \u70B9\u51FB\u91CD\u65B0\u8BA1\u7B97","\u6765\u81EA 2D \xB7 \u5DF2\u5728 3D \u8C03\u6574","\u62FE\u97F3\u8986\u76D6\u672A\u8FBE\u5230\u76EE\u6807\uFF0C\u4FDD\u7559\u6307\u5B9A\u6570\u91CF\u3002","\u53EF\u5728\u5F53\u524D 3D \u91CD\u65B0\u8BA1\u7B97\u6216\u91CD\u7F6E\uFF1B\u5237\u65B0\u6062\u590D\u539F\u59CB 2D \u5FEB\u7167\u3002"],ko:["\uC7AC\uC124\uC815","\uD604\uC7AC \uBC29\uC758 \uC218\uB7C9\uACFC \uBC30\uCE58\uB97C \uB2E4\uC2DC \uCD94\uCC9C","S210 \uC218\uB7C9","\uC790\uB3D9 \uCD94\uCC9C","\uC9C0\uC815 \uC218\uB7C9","\uB300\uAE30 \uC911 \xB7 \uB2E4\uC2DC \uACC4\uC0B0 \uD074\uB9AD","2D\uC5D0\uC11C \uAC00\uC838\uC634 \xB7 3D\uC5D0\uC11C \uC870\uC815\uB428","\uC218\uC74C \uBC94\uC704\uAC00 \uBAA9\uD45C \uBBF8\uB9CC\uC785\uB2C8\uB2E4. \uC9C0\uC815 \uC218\uB7C9\uC740 \uC720\uC9C0\uB429\uB2C8\uB2E4.","\uC774 3D\uC5D0\uC11C \uB2E4\uC2DC \uACC4\uC0B0\uD558\uAC70\uB098 \uC7AC\uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0C8\uB85C \uACE0\uCE58\uBA74 \uC6D0\uB798 2D \uBC30\uCE58\uB85C \uB3CC\uC544\uAC11\uB2C8\uB2E4."],mn:["\u0414\u0430\u0445\u0438\u043D \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u0430\u0445","\u041E\u0434\u043E\u043E\u0433\u0438\u0439\u043D \u04E9\u0440\u04E9\u04E9\u043D\u0434 \u0442\u043E\u043E, \u0431\u0430\u0439\u0440\u043B\u0430\u043B\u044B\u0433 \u0441\u0430\u043D\u0430\u043B \u0431\u043E\u043B\u0433\u043E\u0445","S210 \u0442\u043E\u043E","\u0410\u0432\u0442\u043E\u043C\u0430\u0442 \u0441\u0430\u043D\u0430\u043B","\u0417\u0430\u0430\u0441\u0430\u043D \u0442\u043E\u043E","\u0425\u04AF\u043B\u044D\u044D\u0433\u0434\u044D\u0436 \u0431\u0430\u0439\u043D\u0430 \xB7 \u0414\u0430\u0445\u0438\u043D \u0442\u043E\u043E\u0446\u043E\u043E\u043B\u043E\u0445","2D-\u044D\u044D\u0441 \xB7 3D-\u0434 \u04E9\u04E9\u0440\u0447\u0438\u043B\u0441\u04E9\u043D","\u0414\u0443\u0443 \u0445\u04AF\u043B\u044D\u044D\u043D \u0430\u0432\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D \u0437\u043E\u0440\u0438\u043B\u0442\u043E\u0434 \u0445\u04AF\u0440\u044D\u044D\u0433\u04AF\u0439. \u0417\u0430\u0430\u0441\u0430\u043D \u0442\u043E\u043E\u0433 \u0445\u0430\u0434\u0433\u0430\u043B\u043D\u0430.","\u042D\u043D\u044D 3D-\u0434 \u0434\u0430\u0445\u0438\u043D \u0442\u043E\u043E\u0446\u043E\u043E\u043B\u0436 \u0431\u043E\u043B\u043D\u043E. \u0428\u0438\u043D\u044D\u0447\u043B\u044D\u0445\u044D\u0434 \u0430\u043D\u0445\u043D\u044B 2D \u0431\u0430\u0439\u0440\u043B\u0430\u043B \u0441\u044D\u0440\u0433\u044D\u043D\u044D."],ja:["\u30EA\u30BB\u30C3\u30C8","\u73FE\u5728\u306E\u90E8\u5C4B\u3067\u6570\u91CF\u3068\u914D\u7F6E\u3092\u518D\u63D0\u6848","S210 \u6570\u91CF","\u81EA\u52D5\u63D0\u6848","\u6307\u5B9A\u6570\u91CF","\u672A\u9069\u7528 \xB7 \u518D\u8A08\u7B97\u3092\u30AF\u30EA\u30C3\u30AF","2D\u304B\u3089 \xB7 3D\u3067\u8ABF\u6574\u6E08\u307F","\u96C6\u97F3\u7BC4\u56F2\u304C\u76EE\u6A19\u672A\u6E80\u3067\u3059\u3002\u6307\u5B9A\u6570\u91CF\u3092\u4FDD\u6301\u3057\u307E\u3059\u3002","\u3053\u306E3D\u3067\u518D\u8A08\u7B97\u30FB\u30EA\u30BB\u30C3\u30C8\u3067\u304D\u307E\u3059\u3002\u66F4\u65B0\u3059\u308B\u3068\u5143\u306E2D\u914D\u7F6E\u306B\u623B\u308A\u307E\u3059\u3002"],es:["Restablecer","Recomendar cantidades y distribuci\xF3n para la sala actual","Cantidad S210","Recomendaci\xF3n autom\xE1tica","Cantidades especificadas","Pendiente \xB7 pulse Recalcular","Desde 2D \xB7 ajustado en 3D","Cobertura de captaci\xF3n inferior al objetivo; se conservan las cantidades.","Recalcule o restablezca este 3D. Al recargar se recupera el plano 2D original."],fr:["R\xE9initialiser","Recommander les quantit\xE9s et positions pour la salle actuelle","Quantit\xE9 S210","Recommandation automatique","Quantit\xE9s d\xE9finies","En attente \xB7 cliquer sur Recalculer","Depuis la 2D \xB7 ajust\xE9 en 3D","Couverture de captation insuffisante ; les quantit\xE9s d\xE9finies sont conserv\xE9es.","Recalculez ou r\xE9initialisez cette vue 3D. Un rechargement restaure le plan 2D initial."],ar:["\u0625\u0639\u0627\u062F\u0629 \u0636\u0628\u0637","\u0627\u0642\u062A\u0631\u0627\u062D \u0627\u0644\u0643\u0645\u064A\u0627\u062A \u0648\u0627\u0644\u062A\u0648\u0632\u064A\u0639 \u0644\u0644\u063A\u0631\u0641\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629","\u0639\u062F\u062F S210","\u0627\u0642\u062A\u0631\u0627\u062D \u062A\u0644\u0642\u0627\u0626\u064A","\u0643\u0645\u064A\u0627\u062A \u0645\u062D\u062F\u062F\u0629","\u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \xB7 \u0627\u0636\u063A\u0637 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062D\u0633\u0627\u0628","\u0645\u0646 2D \xB7 \u062A\u0645 \u0627\u0644\u062A\u0639\u062F\u064A\u0644 \u0641\u064A 3D","\u062A\u063A\u0637\u064A\u0629 \u0627\u0644\u0627\u0644\u062A\u0642\u0627\u0637 \u0623\u0642\u0644 \u0645\u0646 \u0627\u0644\u0647\u062F\u0641\u061B \u064A\u062A\u0645 \u0627\u0644\u0627\u062D\u062A\u0641\u0627\u0638 \u0628\u0627\u0644\u0643\u0645\u064A\u0627\u062A \u0627\u0644\u0645\u062D\u062F\u062F\u0629.","\u064A\u0645\u0643\u0646 \u0625\u0639\u0627\u062F\u0629 \u062D\u0633\u0627\u0628 \u0647\u0630\u0627 \u0627\u0644\u0639\u0631\u0636 \u0623\u0648 \u0636\u0628\u0637\u0647 \u0645\u062D\u0644\u064A\u0627\u064B. \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0635\u0641\u062D\u0629 \u064A\u0639\u064A\u062F \u0645\u062E\u0637\u0637 2D \u0627\u0644\u0623\u0635\u0644\u064A."]},jf=i=>Object.fromEntries(uE.map((e,t)=>[e,(d_[i]||d_.en)[t]]));function p_(i){return{model:i.model,pan:0,tilt:0,hfov:i.hfov,custom:!1}}function Jf(i,e){let t=Vt[i.model];return t.projectOnly?[t.minHfov,t.maxHfov]:e.custom?[2,140]:[i.hfov,i.hfov]}function f_(i,e){let t=p_(i),n={...t,...e,model:i.model},s=(o,l,c,h)=>Math.min(c,Math.max(l,Number.isFinite(Number(o))?Number(o):h));n.custom=!Vt[i.model].projectOnly&&!!n.custom,n.pan=s(n.pan,-90,90,0),n.tilt=s(n.tilt,-60,60,0);let[r,a]=Jf(i,n);return n.hfov=s(n.hfov,r,a,t.hfov),n}var eu=class{constructor(){this.enabled=!1,this.onlyCurrent=!1,this.activeId=null,this.settings=new Map}sync(e){let t=e.filter(Vn),n=new Set(t.map(s=>s.id));for(let s of this.settings.keys())n.has(s)||this.settings.delete(s);for(let s of t){let r=this.settings.get(s.id);this.settings.set(s.id,f_(s,r?.model===s.model?r:{}))}n.has(this.activeId)||(this.activeId=t[0]?.id||null)}change(e,t){let n=f_(e,{...this.settings.get(e.id),...t});return this.settings.set(e.id,n),n}reset(e){this.settings.set(e.id,p_(e))}resetAll(){this.enabled=!1,this.onlyCurrent=!1,this.settings.clear(),this.activeId=null}};var dE=["heading","enabled","camera","onlyCurrent","pan","tilt","hfov","custom","reset","note","tiltHint","fixedHint","zoomHint","empty","vfov","poseNote"],m_={en:["Camera field of view","Show 3D camera field","Camera","Only current camera","Pan","Tilt","Horizontal field of view","Custom demonstration","Reset this camera","16:9 field-of-view illustration \xB7 furniture occlusion is not simulated.","Positive tilt points down; negative tilt points up.","Fixed lens: use the model default, or enable a custom demonstration.","Adjust within the model\u2019s wide / tele field-of-view range.","No camera is available.","Vertical field of view","Camera direction: adjust in the field-of-view panel."],zh:["\u6444\u50CF\u5934\u89C6\u573A","\u663E\u793A\u4E09\u7EF4\u89C6\u573A","\u6444\u50CF\u5934","\u4EC5\u5F53\u524D\u6444\u50CF\u5934","\u5DE6\u53F3\u8F6C\u5411","\u4E0A\u4E0B\u4FEF\u4EF0","\u6C34\u5E73\u89C6\u573A\u89D2","\u81EA\u5B9A\u4E49\u6F14\u793A","\u6062\u590D\u5F53\u524D\u6444\u50CF\u5934","16:9 \u89C6\u573A\u793A\u610F \xB7 \u672A\u6A21\u62DF\u684C\u6905\u7B49\u7269\u4F53\u906E\u6321\u3002","\u4FEF\u4EF0\u6B63\u503C\u5411\u4E0B\uFF0C\u8D1F\u503C\u5411\u4E0A\u3002","\u56FA\u5B9A\u955C\u5934\u91C7\u7528\u578B\u53F7\u9ED8\u8BA4\u89C6\u89D2\uFF1B\u5F00\u542F\u81EA\u5B9A\u4E49\u6F14\u793A\u53EF\u8C03\u6574\u793A\u610F\u8303\u56F4\u3002","\u5728\u8BE5\u578B\u53F7\u5E7F\u89D2\u4E0E\u957F\u7126\u89C6\u573A\u8303\u56F4\u5185\u8C03\u6574\u3002","\u5F53\u524D\u6CA1\u6709\u53EF\u7528\u6444\u50CF\u5934\u3002","\u5782\u76F4\u89C6\u573A\u89D2","\u6444\u50CF\u5934\u671D\u5411\uFF1A\u53EF\u5728\u89C6\u573A\u9762\u677F\u4E2D\u8C03\u6574\u3002"],ko:["\uCE74\uBA54\uB77C \uD654\uAC01","3D \uCE74\uBA54\uB77C \uD654\uAC01 \uD45C\uC2DC","\uCE74\uBA54\uB77C","\uD604\uC7AC \uCE74\uBA54\uB77C\uB9CC","\uC88C\uC6B0 \uD68C\uC804","\uC0C1\uD558 \uAE30\uC6B8\uAE30","\uC218\uD3C9 \uD654\uAC01","\uC0AC\uC6A9\uC790 \uC9C0\uC815 \uC2DC\uC5F0","\uD604\uC7AC \uCE74\uBA54\uB77C \uCD08\uAE30\uD654","16:9 \uD654\uAC01 \uC608\uC2DC \xB7 \uAC00\uAD6C\uC5D0 \uC758\uD55C \uAC00\uB9BC\uC740 \uACC4\uC0B0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.","\uC591\uC218\uB294 \uC544\uB798\uCABD, \uC74C\uC218\uB294 \uC704\uCABD\uC785\uB2C8\uB2E4.","\uACE0\uC815 \uB80C\uC988\uB294 \uAE30\uBCF8 \uD654\uAC01\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uC9C0\uC815 \uC2DC\uC5F0\uC5D0\uC11C \uC870\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","\uBAA8\uB378\uC758 \uAD11\uAC01 / \uB9DD\uC6D0 \uD654\uAC01 \uBC94\uC704\uC5D0\uC11C \uC870\uC815\uD569\uB2C8\uB2E4.","\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uCE74\uBA54\uB77C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.","\uC218\uC9C1 \uD654\uAC01","\uCE74\uBA54\uB77C \uBC29\uD5A5: \uD654\uAC01 \uD328\uB110\uC5D0\uC11C \uC870\uC815\uD569\uB2C8\uB2E4."],mn:["\u041A\u0430\u043C\u0435\u0440\u044B\u043D \u0445\u0430\u0440\u0430\u0445 \u04E9\u043D\u0446\u04E9\u0433","\u041A\u0430\u043C\u0435\u0440\u044B\u043D 3D \u0445\u0430\u0440\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D\u0433 \u0445\u0430\u0440\u0443\u0443\u043B\u0430\u0445","\u041A\u0430\u043C\u0435\u0440","\u0417\u04E9\u0432\u0445\u04E9\u043D \u043E\u0434\u043E\u043E\u0433\u0438\u0439\u043D \u043A\u0430\u043C\u0435\u0440","\u0425\u044D\u0432\u0442\u044D\u044D \u044D\u0440\u0433\u044D\u043B\u0442","\u0411\u043E\u0441\u043E\u043E \u043D\u0430\u043B\u0430\u043B\u0442","\u0425\u044D\u0432\u0442\u044D\u044D \u0445\u0430\u0440\u0430\u0445 \u04E9\u043D\u0446\u04E9\u0433","\u04E8\u04E9\u0440\u0447\u043B\u04E9\u043D \u04AF\u0437\u04AF\u04AF\u043B\u044D\u0445","\u042D\u043D\u044D \u043A\u0430\u043C\u0435\u0440\u044B\u0433 \u0441\u044D\u0440\u0433\u044D\u044D\u0445","16:9 \u0445\u0430\u0440\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D\u043D\u0438\u0439 \u0436\u0438\u0448\u044D\u044D \xB7 \u0442\u0430\u0432\u0438\u043B\u0433\u0430\u0430\u0441 \u04AF\u04AF\u0441\u044D\u0445 \u0445\u0430\u043B\u0445\u043B\u0430\u043B\u0442\u044B\u0433 \u0442\u043E\u043E\u0446\u043E\u043E\u0433\u04AF\u0439.","\u042D\u0435\u0440\u044D\u0433 \u0443\u0442\u0433\u0430 \u0434\u043E\u043E\u0448, \u0441\u04E9\u0440\u04E9\u0433 \u0443\u0442\u0433\u0430 \u0434\u044D\u044D\u0448 \u0447\u0438\u0433\u043B\u044D\u043D\u044D.","\u0422\u043E\u0433\u0442\u043C\u043E\u043B \u043B\u0438\u043D\u0437 \u0437\u0430\u0433\u0432\u0430\u0440\u044B\u043D \u04AF\u043D\u0434\u0441\u044D\u043D \u04E9\u043D\u0446\u0433\u0438\u0439\u0433 \u0430\u0448\u0438\u0433\u043B\u0430\u043D\u0430. \u04E8\u04E9\u0440\u0447\u043B\u04E9\u043D \u04AF\u0437\u04AF\u04AF\u043B\u044D\u0445 \u0433\u043E\u0440\u0438\u043C\u0434 \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u0436 \u0431\u043E\u043B\u043D\u043E.","\u0417\u0430\u0433\u0432\u0430\u0440\u044B\u043D \u04E9\u0440\u0433\u04E9\u043D / \u043D\u0430\u0440\u0438\u0439\u043D \u0445\u0430\u0440\u0430\u0445 \u04E9\u043D\u0446\u0433\u0438\u0439\u043D \u0445\u04AF\u0440\u044D\u044D\u043D\u0434 \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u043D\u0430.","\u041A\u0430\u043C\u0435\u0440 \u0431\u0430\u0439\u0445\u0433\u04AF\u0439 \u0431\u0430\u0439\u043D\u0430.","\u0411\u043E\u0441\u043E\u043E \u0445\u0430\u0440\u0430\u0445 \u04E9\u043D\u0446\u04E9\u0433","\u041A\u0430\u043C\u0435\u0440\u044B\u043D \u0447\u0438\u0433\u043B\u044D\u043B: \u0445\u0430\u0440\u0430\u0445 \u04E9\u043D\u0446\u0433\u0438\u0439\u043D \u0441\u0430\u043C\u0431\u0430\u0440\u0442 \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u043D\u0430."],ja:["\u30AB\u30E1\u30E9\u306E\u753B\u89D2","3D\u753B\u89D2\u3092\u8868\u793A","\u30AB\u30E1\u30E9","\u73FE\u5728\u306E\u30AB\u30E1\u30E9\u306E\u307F","\u5DE6\u53F3\u306E\u5411\u304D","\u4E0A\u4E0B\u306E\u50BE\u304D","\u6C34\u5E73\u753B\u89D2","\u30AB\u30B9\u30BF\u30E0\u30C7\u30E2","\u73FE\u5728\u306E\u30AB\u30E1\u30E9\u3092\u30EA\u30BB\u30C3\u30C8","16:9\u753B\u89D2\u306E\u6A21\u5F0F\u56F3 \xB7 \u5BB6\u5177\u306A\u3069\u306E\u906E\u853D\u306F\u8A08\u7B97\u3057\u307E\u305B\u3093\u3002","\u6B63\u306E\u5024\u306F\u4E0B\u5411\u304D\u3001\u8CA0\u306E\u5024\u306F\u4E0A\u5411\u304D\u3067\u3059\u3002","\u56FA\u5B9A\u30EC\u30F3\u30BA\u306F\u65E2\u5B9A\u306E\u753B\u89D2\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\u30AB\u30B9\u30BF\u30E0\u30C7\u30E2\u3067\u6A21\u5F0F\u7684\u306B\u5909\u66F4\u3067\u304D\u307E\u3059\u3002","\u6A5F\u7A2E\u306E\u5E83\u89D2 / \u671B\u9060\u753B\u89D2\u306E\u7BC4\u56F2\u3067\u8ABF\u6574\u3057\u307E\u3059\u3002","\u4F7F\u7528\u3067\u304D\u308B\u30AB\u30E1\u30E9\u304C\u3042\u308A\u307E\u305B\u3093\u3002","\u5782\u76F4\u753B\u89D2","\u30AB\u30E1\u30E9\u306E\u5411\u304D\uFF1A\u753B\u89D2\u30D1\u30CD\u30EB\u3067\u8ABF\u6574\u3057\u307E\u3059\u3002"],es:["Campo de visi\xF3n de la c\xE1mara","Mostrar campo de visi\xF3n 3D","C\xE1mara","Solo la c\xE1mara actual","Giro horizontal","Inclinaci\xF3n","Campo horizontal","Demostraci\xF3n personalizada","Restablecer esta c\xE1mara","Esquema 16:9 \xB7 no se simulan obstrucciones de muebles.","Un valor positivo apunta abajo; uno negativo, arriba.","La lente fija usa el \xE1ngulo del modelo; active la demostraci\xF3n personalizada para ajustarlo.","Ajuste dentro del campo angular / tele del modelo.","No hay c\xE1maras disponibles.","Campo vertical","Direcci\xF3n de c\xE1mara: ajuste en el panel de campo de visi\xF3n."],fr:["Champ de vision des cam\xE9ras","Afficher le champ de vision 3D","Cam\xE9ra","Cam\xE9ra actuelle uniquement","Rotation horizontale","Inclinaison verticale","Champ de vision horizontal","D\xE9monstration personnalis\xE9e","R\xE9initialiser cette cam\xE9ra","Champ de vision 16:9 indicatif \xB7 les obstacles comme le mobilier ne sont pas simul\xE9s.","Une valeur positive incline vers le bas ; une valeur n\xE9gative vers le haut.","La lentille fixe utilise l\u2019angle du mod\xE8le. Activez la d\xE9monstration personnalis\xE9e pour modifier la repr\xE9sentation.","R\xE9glez l\u2019angle dans la plage grand-angle / t\xE9l\xE9objectif du mod\xE8le.","Aucune cam\xE9ra disponible.","Champ de vision vertical","Orientation de la cam\xE9ra : r\xE9glable dans le panneau de champ de vision."],ar:["\u0645\u062C\u0627\u0644 \u0631\u0624\u064A\u0629 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627","\u0625\u0638\u0647\u0627\u0631 \u0645\u062C\u0627\u0644 \u0631\u0624\u064A\u0629 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \u062B\u0644\u0627\u062B\u064A \u0627\u0644\u0623\u0628\u0639\u0627\u062F","\u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627","\u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u062D\u0627\u0644\u064A\u0629 \u0641\u0642\u0637","\u0627\u0644\u062F\u0648\u0631\u0627\u0646 \u0627\u0644\u0623\u0641\u0642\u064A","\u0627\u0644\u0645\u064A\u0644 \u0627\u0644\u0631\u0623\u0633\u064A","\u0645\u062C\u0627\u0644 \u0627\u0644\u0631\u0624\u064A\u0629 \u0627\u0644\u0623\u0641\u0642\u064A","\u0639\u0631\u0636 \u062A\u0648\u0636\u064A\u062D\u064A \u0645\u062E\u0635\u0635","\u0625\u0639\u0627\u062F\u0629 \u0636\u0628\u0637 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u062D\u0627\u0644\u064A\u0629","\u062A\u0645\u062B\u064A\u0644 \u0645\u062C\u0627\u0644 \u0627\u0644\u0631\u0624\u064A\u0629 \u0628\u0646\u0633\u0628\u0629 16:9 \xB7 \u0644\u0627 \u062A\u064F\u062D\u0627\u0643\u0649 \u0627\u0644\u0639\u0648\u0627\u0626\u0642 \u0645\u062B\u0644 \u0627\u0644\u0623\u062B\u0627\u062B.","\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0648\u062C\u0628\u0629 \u0644\u0644\u0623\u0633\u0641\u0644 \u0648\u0627\u0644\u0633\u0627\u0644\u0628\u0629 \u0644\u0644\u0623\u0639\u0644\u0649.","\u062A\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0639\u062F\u0633\u0629 \u0627\u0644\u062B\u0627\u0628\u062A\u0629 \u0632\u0627\u0648\u064A\u0629 \u0627\u0644\u0637\u0631\u0627\u0632 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629\u061B \u064A\u0645\u0643\u0646 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062A\u0645\u062B\u064A\u0644 \u0641\u064A \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u0645\u062E\u0635\u0635.","\u0627\u0636\u0628\u0637 \u0636\u0645\u0646 \u0646\u0637\u0627\u0642 \u0627\u0644\u0632\u0627\u0648\u064A\u0629 \u0627\u0644\u0648\u0627\u0633\u0639\u0629 / \u0627\u0644\u0645\u0642\u0631\u0628\u0629 \u0644\u0644\u0637\u0631\u0627\u0632.","\u0644\u0627 \u062A\u0648\u062C\u062F \u0643\u0627\u0645\u064A\u0631\u0627\u062A \u0645\u062A\u0627\u062D\u0629.","\u0645\u062C\u0627\u0644 \u0627\u0644\u0631\u0624\u064A\u0629 \u0627\u0644\u0631\u0623\u0633\u064A","\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627: \u064A\u064F\u0636\u0628\u0637 \u0645\u0646 \u0644\u0648\u062D\u0629 \u0645\u062C\u0627\u0644 \u0627\u0644\u0631\u0624\u064A\u0629."]},Zo=i=>Object.fromEntries(dE.map((e,t)=>[e,(m_[i]||m_.en)[t]]));var Gt=i=>document.querySelector(i),tu=class{constructor({devices:e,title:t,language:n,onSelect:s,scene:r}){Object.assign(this,{devices:e,title:t,language:n,onSelect:s,scene:r}),this.state=new eu,this.frame=null,Gt("#camera-field-enabled").addEventListener("change",a=>{this.state.enabled=a.target.checked,this.apply(),this.render()}),Gt("#camera-field-only").addEventListener("change",a=>{this.state.onlyCurrent=a.target.checked,this.apply()}),Gt("#camera-field-select").addEventListener("change",a=>{this.state.activeId=a.target.value,s(a.target.value)}),Gt("#camera-field-custom").addEventListener("change",a=>{let o=this.active();o&&(this.state.change(o,{custom:a.target.checked}),this.apply(),this.render())}),Gt("#camera-field-reset").addEventListener("click",()=>{let a=this.active();a&&(this.state.reset(a),this.apply(),this.render())});for(let a of["pan","tilt","hfov"])for(let o of["","-number"]){let l=Gt(`#camera-field-${a}${o}`);l.addEventListener("input",()=>this.input(a,l)),l.addEventListener("change",()=>this.renderValues())}}active(){return this.devices().find(e=>e.id===this.state.activeId)}input(e,t){let n=this.active();!n||t.value===""||!Number.isFinite(Number(t.value))||(this.state.change(n,{[e]:Number(t.value)}),this.renderValues(t),this.frame===null&&(this.frame=requestAnimationFrame(()=>{this.frame=null,this.apply()})))}apply(){this.scene()?.setCameraFrusta(this.state);let e=Gt("#camera-field-panel");e.dataset.enabled=String(this.state.enabled),e.dataset.camera=this.state.activeId||""}select(e){this.devices().find(t=>t.id===e&&Vn(t))&&(this.state.activeId=e),this.apply(),this.render()}sync(){this.state.sync(this.devices()),this.apply(),this.render()}resetAll(){this.state.resetAll(),this.state.sync(this.devices()),this.apply(),this.render()}renderValues(e){let t=this.active(),n=this.state.settings.get(t?.id);if(!n)return;let[s,r]=Jf(t,n);for(let o of["pan","tilt","hfov"])for(let l of["","-number"]){let c=Gt(`#camera-field-${o}${l}`);o==="hfov"&&(c.min=s,c.max=r,c.disabled=s===r),c!==e&&(c.value=n[o])}let a=Zo(this.language());Gt("#camera-field-vfov").textContent=`${a.vfov}: ${Sh(n.hfov).toFixed(1)}\xB0`,Gt("#camera-field-custom").checked=n.custom}render(){let e=Zo(this.language()),t=this.devices().filter(Vn);document.querySelectorAll("[data-field-i18n]").forEach(a=>{a.textContent=e[a.dataset.fieldI18n]}),Gt("#camera-field-enabled").checked=this.state.enabled,Gt("#camera-field-enabled").disabled=!t.length,Gt("#camera-field-only").checked=this.state.onlyCurrent;let n=Gt("#camera-field-select");n.replaceChildren(...t.map(a=>{let o=document.createElement("option");return o.value=a.id,o.textContent=this.title(a),o})),n.value=this.state.activeId;let s=this.active();if(Gt("#camera-field-empty").hidden=t.length>0,Gt("#camera-field-settings").hidden=!this.state.enabled||!s,!s)return;let r=Vt[s.model].projectOnly;Gt("#camera-field-custom-row").hidden=r,Gt("#camera-field-hint").textContent=r?e.zoomHint:e.fixedHint;for(let a of["pan","tilt","hfov"])Gt(`#camera-field-${a}-number`).setAttribute("aria-label",`${e[a]} (\xB0)`);this.renderValues()}};var g_=i=>document.querySelector(i);async function __({roomScene:i,state:e,devices:t,visible:n,title:s,t:r}){if(!i)return;i.renderFrame();let a=i.canvas,o=a.width/Math.max(1,a.clientWidth),l=document.createElement("canvas");l.width=a.width,l.height=a.height;let c=l.getContext("2d");if(c.drawImage(a,0,0),c.save(),c.scale(o,o),c.fillStyle="rgba(15,34,49,.82)",c.fillRect(16,16,300,39),c.fillStyle="#fff",c.font="700 15px Arial",c.fillText(r("title"),27,42),e.showLabels){let p=a.getBoundingClientRect();for(let f of t().filter(n)){let _=document.querySelector(`.device-label[data-device-id="${f.id}"]`);if(!_||_.hidden)continue;let g=_.getBoundingClientRect(),m=g.left+g.width/2-p.left,d=g.bottom-p.top,x=s(f);c.font="600 11px Arial";let v=c.measureText(x).width+18,y=getComputedStyle(_);c.fillStyle=y.backgroundColor,c.beginPath(),c.roundRect(m-v/2,d-31,v,23,7),c.fill(),c.fillStyle=f.color,c.fillRect(m-v/2,d-31,3,23),c.fillStyle=y.color,c.fillText(x,m-v/2+10,d-15)}}c.restore();let h=await new Promise(p=>l.toBlob(p,"image/png")),u=document.createElement("a");u.href=h?URL.createObjectURL(h):l.toDataURL("image/png"),u.download="lcs-810-3d-room-demo.png",document.body.append(u),u.click(),u.remove(),h&&setTimeout(()=>URL.revokeObjectURL(u.href),3e4),g_("#frame-status").textContent=r("pngReady"),setTimeout(()=>{g_("#frame-status").textContent="3D"},2800)}var x_={importedPlan:"Depuis le plan 2D",importedDesc:"D\xE9ploiement 2D import\xE9 avec fixations murales indicatives. Modifiez la salle et les \xE9quipements dans la vue 2D.",resetImported:"Restaurer la vue et les hauteurs import\xE9es",title:"LCS 810 \xB7 D\xE9mo de salle 3D",eyebrow:"\xC9TUDE INTERACTIVE DE LA SALLE",export:"Exporter en PNG",preset:"Salle pr\xE9d\xE9finie",standard:"Standard 8 \xD7 10",large:"Grande salle 10 \xD7 20",lecture:"Salle de conf\xE9rence 12 \xD7 15",ultra:"Amphith\xE9\xE2tre 17 \xD7 37",custom:"Personnalis\xE9e",recalculate:"Recalculer",overview:"Vue g\xE9n\xE9rale",top:"Vue de dessus",stageView:"Vers l\u2019estrade",audienceView:"Vers les \xE9l\xE8ves",gestureHint:"Glisser pour tourner \xB7 Molette pour zoomer \xB7 Glisser avec le bouton droit pour d\xE9placer \xB7 Cliquer sur un \xE9quipement",study:"\xC9TUDE SPATIALE AVANT-VENTE",layoutTitle:"Implantation du syst\xE8me",layoutDesc:"Positions d\u2019installation indicatives issues des r\xE8gles de recalcul 2D.",width:"Largeur (m)",depth:"Profondeur (m)",height:"Hauteur (m)",devices:"\xC9quipements",selected:"\xC9quipement s\xE9lectionn\xE9",settings:"Param\xE8tres de la sc\xE8ne",equipment:"Configuration des \xE9quipements",ifpSize:"Diagonale de l\u2019IFP",ifpCount:"Nombre d\u2019IFP",displaySize:"Diagonale des \xE9crans auxiliaires",cameraPackage:"Ensemble de cam\xE9ras",teacherModel:"Cam\xE9ra enseignant",studentModel:"Cam\xE9ra \xE9l\xE8ves",studentQty:"Nombre de cam\xE9ras \xE9l\xE8ves",applyRecommendation:"Appliquer les cam\xE9ras recommand\xE9es",applyEquipment:"Appliquer la configuration",mountingHeights:"Hauteurs de montage indicatives",doorSide:"C\xF4t\xE9 des portes",doorRight:"Mur de droite",doorLeft:"Mur de gauche",visibility:"Visibilit\xE9",showLabels:"Noms des \xE9quipements",showFurniture:"Mobilier de r\xE9f\xE9rence",showCoverage:"Projection de couverture au sol",coverageNote:"S210 utilise la projection 2D au sol. La zone au sol des cam\xE9ras suit le champ 16:9 et l\u2019orientation actuels.",reset:"Restaurer les valeurs de la d\xE9mo",assumption:"Les hauteurs et formes simplifi\xE9es sont indicatives. Confirmez l\u2019installation sur site.",fromLeft:"Depuis le mur gauche",fromFront:"Depuis le mur avant",aboveFloor:"Au-dessus du sol",planSymbol:"Symbole 2D",wallAnchor:"Fixation murale",facesStage:"Vers l\u2019estrade",facesAudience:"Vers les \xE9l\xE8ves",facesRoom:"Vers l\u2019int\xE9rieur de la salle",facesLeft:"Vers la gauche",facesRight:"Vers la droite",heightWarning:"La salle mesure au moins 3,5 m de haut. V\xE9rifiez la hauteur de montage et le besoin de suspension.",cameraRange:"Au moins une cam\xE9ra CV d\xE9passe sa port\xE9e de suivi de 10 m. V\xE9rifiez la configuration.",roomSize:"Saisissez une largeur de 4\u201330 m, une profondeur de 5\u201350 m et une hauteur de 2,4\u20136 m.",screenSpace:"Les IFP s\xE9lectionn\xE9s n\xE9cessitent un mur avant plus large.",screenHeight:"L\u2019IFP est trop haut pour cette salle.",pngReady:"PNG export\xE9",webglError:"Impossible de d\xE9marrer la 3D. Activez l\u2019acc\xE9l\xE9ration mat\xE9rielle ou utilisez un navigateur compatible WebGL.",demoNote:"Hauteur indicative ; \xE0 confirmer sur site",recommendation:"Recommandation pour cette salle",s210:"Microphone de plafond S210",teacher:"Cam\xE9ra enseignant",student:"Cam\xE9ra \xE9l\xE8ves",station:"Station LCS",ndp:"Pupitre NDP600",ifp:"\xC9cran interactif IFP",display:"\xC9crans auxiliaires",speaker:"Haut-parleur PS610"};var v_={importedPlan:"2D \uACC4\uD68D\uC5D0\uC11C \uAC00\uC838\uC634",importedDesc:"\uAC00\uC838\uC628 2D \uBC30\uCE58\uC640 \uBCBD\uBA74 \uC124\uCE58 \uC608\uC2DC\uC785\uB2C8\uB2E4. \uACF5\uAC04\uACFC \uC7A5\uBE44\uB294 2D\uC5D0\uC11C \uC218\uC815\uD558\uC138\uC694.",resetImported:"\uAC00\uC838\uC628 \uBCF4\uAE30\uC640 \uB192\uC774 \uBCF5\uC6D0",title:"LCS 810 \xB7 3D \uAD50\uC2E4 \uB370\uBAA8",eyebrow:"\uAD50\uC2E4 \uACF5\uAC04 \uC778\uD130\uB799\uD2F0\uBE0C \uC5F0\uAD6C",export:"PNG \uB0B4\uBCF4\uB0B4\uAE30",preset:"\uACF5\uAC04 \uD504\uB9AC\uC14B",standard:"\uD45C\uC900 8 \xD7 10",large:"\uB300\uD615 10 \xD7 20",lecture:"\uAC15\uC758\uC2E4 12 \xD7 15",ultra:"\uB300\uAC15\uB2F9 17 \xD7 37",custom:"\uC0AC\uC6A9\uC790 \uC9C0\uC815",recalculate:"\uB2E4\uC2DC \uACC4\uC0B0",overview:"\uC804\uCCB4 \uBCF4\uAE30",top:"\uD3C9\uBA74 \uBCF4\uAE30",stageView:"\uAD50\uB2E8 \uBC29\uD5A5",audienceView:"\uD559\uC0DD \uBC29\uD5A5",gestureHint:"\uB4DC\uB798\uADF8: \uD68C\uC804 \xB7 \uC2A4\uD06C\uB864: \uD655\uB300/\uCD95\uC18C \xB7 \uC624\uB978\uCABD \uB4DC\uB798\uADF8: \uC774\uB3D9 \xB7 \uC7A5\uBE44 \uD074\uB9AD",study:"\uD504\uB9AC\uC138\uC77C\uC988 \uACF5\uAC04 \uC5F0\uAD6C",layoutTitle:"\uC2DC\uC2A4\uD15C \uBC30\uCE58",layoutDesc:"2D \uC7AC\uACC4\uC0B0 \uADDC\uCE59\uC5D0 \uB530\uB978 \uC124\uCE58 \uC704\uCE58 \uC608\uC2DC\uC785\uB2C8\uB2E4.",width:"\uB108\uBE44 (m)",depth:"\uAE4A\uC774 (m)",height:"\uB192\uC774 (m)",devices:"\uC7A5\uBE44",selected:"\uC120\uD0DD\uD55C \uC7A5\uBE44",settings:"\uC7A5\uBA74 \uC124\uC815",equipment:"\uC7A5\uBE44 \uAD6C\uC131",ifpSize:"IFP \uD06C\uAE30",ifpCount:"IFP \uC218\uB7C9",displaySize:"\uBCF4\uC870 \uD654\uBA74 \uD06C\uAE30",cameraPackage:"\uCE74\uBA54\uB77C \uAD6C\uC131",teacherModel:"\uAD50\uC0AC \uCE74\uBA54\uB77C",studentModel:"\uD559\uC0DD \uCE74\uBA54\uB77C",studentQty:"\uD559\uC0DD \uCE74\uBA54\uB77C \uC218\uB7C9",applyRecommendation:"\uCD94\uCC9C \uCE74\uBA54\uB77C \uC801\uC6A9",applyEquipment:"\uC7A5\uBE44 \uC801\uC6A9",mountingHeights:"\uC608\uC2DC \uC124\uCE58 \uB192\uC774",doorSide:"\uBB38 \uC704\uCE58",doorRight:"\uC624\uB978\uCABD \uBCBD",doorLeft:"\uC67C\uCABD \uBCBD",visibility:"\uD45C\uC2DC \uC124\uC815",showLabels:"\uC7A5\uBE44 \uC774\uB984",showFurniture:"\uCC38\uACE0 \uAC00\uAD6C",showCoverage:"\uBC14\uB2E5 \uCEE4\uBC84\uB9AC\uC9C0 \uD22C\uC601",coverageNote:"S210\uC740 2D \uBC14\uB2E5 \uD22C\uC601\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uCE74\uBA54\uB77C \uBC14\uB2E5 \uBC94\uC704\uB294 \uD604\uC7AC 16:9 \uD654\uAC01\uACFC \uBC29\uD5A5\uC744 \uB530\uB985\uB2C8\uB2E4.",reset:"\uB370\uBAA8 \uAE30\uBCF8\uAC12 \uBCF5\uC6D0",assumption:"\uC124\uCE58 \uB192\uC774\uC640 \uB2E8\uC21C\uD654\uB41C \uC678\uD615\uC740 \uC2DC\uC5F0\uC6A9\uC785\uB2C8\uB2E4. \uD604\uC7A5\uC5D0\uC11C \uCD5C\uC885 \uD655\uC778\uD558\uC138\uC694.",fromLeft:"\uC67C\uCABD \uBCBD\uC5D0\uC11C",fromFront:"\uC55E\uCABD \uBCBD\uC5D0\uC11C",aboveFloor:"\uBC14\uB2E5\uC5D0\uC11C",planSymbol:"2D \uAE30\uD638",wallAnchor:"\uBCBD\uBA74 \uC124\uCE58",facesStage:"\uAD50\uB2E8 \uBC29\uD5A5",facesAudience:"\uD559\uC0DD \uBC29\uD5A5",facesRoom:"\uAD50\uC2E4 \uC548\uCABD \uBC29\uD5A5",facesLeft:"\uC67C\uCABD \uBC29\uD5A5",facesRight:"\uC624\uB978\uCABD \uBC29\uD5A5",heightWarning:"\uCC9C\uC7A5 \uB192\uC774\uAC00 3.5 m \uC774\uC0C1\uC785\uB2C8\uB2E4. \uC124\uCE58 \uB192\uC774\uC640 \uD558\uAC15 \uBE0C\uB798\uD0B7 \uD544\uC694 \uC5EC\uBD80\uB97C \uD655\uC778\uD558\uC138\uC694.",cameraRange:"CV \uCE74\uBA54\uB77C\uAC00 10 m \uCD94\uC801 \uBC94\uC704\uB97C \uCD08\uACFC\uD569\uB2C8\uB2E4. \uCE74\uBA54\uB77C \uAD6C\uC131\uC744 \uD655\uC778\uD558\uC138\uC694.",roomSize:"\uB108\uBE44 4\u201330 m, \uAE4A\uC774 5\u201350 m, \uB192\uC774 2.4\u20136 m\uB97C \uC785\uB825\uD558\uC138\uC694.",screenSpace:"\uC120\uD0DD\uD55C IFP \uC870\uD569\uC5D0 \uD544\uC694\uD55C \uC804\uBA74 \uBCBD \uB108\uBE44\uAC00 \uBD80\uC871\uD569\uB2C8\uB2E4.",screenHeight:"IFP \uB192\uC774\uAC00 \uD604\uC7AC \uACF5\uAC04\uC5D0 \uB9DE\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",pngReady:"PNG \uB0B4\uBCF4\uB0B4\uAE30 \uC644\uB8CC",webglError:"3D\uB97C \uC2DC\uC791\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D \uB610\uB294 WebGL \uC9C0\uC6D0 \uBE0C\uB77C\uC6B0\uC800\uB97C \uC0AC\uC6A9\uD558\uC138\uC694.",demoNote:"\uC608\uC2DC \uB192\uC774 \u2014 \uD604\uC7A5 \uD655\uC778",recommendation:"\uC774 \uACF5\uAC04\uC5D0 \uB300\uD55C \uAD8C\uC7A5 \uAD6C\uC131",s210:"S210 \uCC9C\uC7A5 \uB9C8\uC774\uD06C",teacher:"\uAD50\uC0AC \uCE74\uBA54\uB77C",student:"\uD559\uC0DD \uCE74\uBA54\uB77C",station:"LCS \uC2A4\uD14C\uC774\uC158",ndp:"NDP600 \uAC15\uC758\uB300",ifp:"IFP \uB300\uD654\uD615 \uD654\uBA74",display:"\uBCF4\uC870 \uD654\uBA74",speaker:"PS610 \uC2A4\uD53C\uCEE4"};var y_={importedPlan:"2D \u0442\u04E9\u043B\u04E9\u0432\u043B\u04E9\u0433\u04E9\u04E9\u043D\u04E9\u04E9\u0441",importedDesc:"\u0418\u043C\u043F\u043E\u0440\u0442\u043E\u043B\u0441\u043E\u043D 2D \u0431\u0430\u0439\u0440\u043B\u0430\u043B \u0431\u0430 \u0445\u0430\u043D\u044B\u043D \u0443\u0433\u0441\u0440\u0430\u043B\u0442\u044B\u043D \u0436\u0438\u0448\u044D\u044D. \u04E8\u0440\u04E9\u04E9, \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u0433 2D \u0434\u044D\u044D\u0440 \u04E9\u04E9\u0440\u0447\u0438\u043B\u043D\u04E9.",resetImported:"\u0418\u043C\u043F\u043E\u0440\u0442\u043E\u043B\u0441\u043E\u043D \u0445\u0430\u0440\u0430\u0433\u0434\u0430\u0446, \u04E9\u043D\u0434\u0440\u0438\u0439\u0433 \u0441\u044D\u0440\u0433\u044D\u044D\u0445",title:"LCS 810 \xB7 3D \u0430\u043D\u0433\u0438\u0439\u043D \u04AF\u0437\u04AF\u04AF\u043B\u044D\u043D",eyebrow:"\u0410\u041D\u0413\u0418\u0419\u041D \u041E\u0420\u041E\u041D \u0417\u0410\u0419\u041D \u0418\u041D\u0422\u0415\u0420\u0410\u041A\u0422\u0418\u0412 \u04AE\u0417\u04AE\u04AE\u041B\u042D\u041D",export:"PNG \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u043B\u043E\u0445",preset:"\u04E8\u0440\u04E9\u04E9\u043D\u0438\u0439 \u0437\u0430\u0433\u0432\u0430\u0440",standard:"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442 8 \xD7 10",large:"\u0422\u043E\u043C 10 \xD7 20",lecture:"\u041B\u0435\u043A\u0446\u0438\u0439\u043D \u0442\u0430\u043D\u0445\u0438\u043C 12 \xD7 15",ultra:"\u0418\u0445 \u0442\u0430\u043D\u0445\u0438\u043C 17 \xD7 37",custom:"\u0422\u0443\u0441\u0433\u0430\u0439 \u0445\u044D\u043C\u0436\u044D\u044D",recalculate:"\u0414\u0430\u0445\u0438\u043D \u0442\u043E\u043E\u0446\u043E\u043E\u043B\u043E\u0445",overview:"\u0415\u0440\u04E9\u043D\u0445\u0438\u0439",top:"\u0414\u044D\u044D\u0440\u044D\u044D\u0441",stageView:"\u0411\u0430\u0433\u0448\u0438\u0439\u043D \u0445\u044D\u0441\u044D\u0433",audienceView:"\u0421\u0443\u0440\u0430\u043B\u0446\u0430\u0433\u0447\u0434\u044B\u043D \u0445\u044D\u0441\u044D\u0433",gestureHint:"\u0427\u0438\u0440\u044D\u0445: \u044D\u0440\u0433\u04AF\u04AF\u043B\u044D\u0445 \xB7 \u0413\u04AF\u0439\u043B\u0433\u044D\u0445: \u0442\u043E\u043C\u0440\u0443\u0443\u043B\u0430\u0445 \xB7 \u0411\u0430\u0440\u0443\u0443\u043D \u0447\u0438\u0440\u044D\u043B\u0442: \u0448\u0438\u043B\u0436\u04AF\u04AF\u043B\u044D\u0445 \xB7 \u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436 \u0434\u044D\u044D\u0440 \u0434\u0430\u0440\u043D\u0430",study:"\u0411\u041E\u0420\u041B\u0423\u0423\u041B\u0410\u041B\u0422\u042B\u041D \u04E8\u041C\u041D\u04E8\u0425 \u041E\u0420\u041E\u041D \u0417\u0410\u0419\u041D \u0421\u0423\u0414\u0410\u041B\u0413\u0410\u0410",layoutTitle:"\u0421\u0438\u0441\u0442\u0435\u043C\u0438\u0439\u043D \u0431\u0430\u0439\u0440\u043B\u0430\u043B",layoutDesc:"2D \u0434\u0430\u0445\u0438\u043D \u0442\u043E\u043E\u0446\u043E\u043E\u043B\u043B\u044B\u043D \u0434\u04AF\u0440\u044D\u043C\u0434 \u0442\u0443\u043B\u0433\u0443\u0443\u0440\u043B\u0430\u0441\u0430\u043D \u0443\u0433\u0441\u0440\u0430\u043B\u0442\u044B\u043D \u0431\u0430\u0439\u0440\u043B\u0430\u043B\u044B\u043D \u0436\u0438\u0448\u044D\u044D.",width:"\u04E8\u0440\u0433\u04E9\u043D (\u043C)",depth:"\u0413\u04AF\u043D (\u043C)",height:"\u04E8\u043D\u0434\u04E9\u0440 (\u043C)",devices:"\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u04AF\u04AF\u0434",selected:"\u0421\u043E\u043D\u0433\u043E\u0441\u043E\u043D \u0442\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436",settings:"\u0414\u04AF\u0440\u0441\u043B\u044D\u043B\u0438\u0439\u043D \u0442\u043E\u0445\u0438\u0440\u0433\u043E\u043E",equipment:"\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u043D \u0442\u043E\u0445\u0438\u0440\u0433\u043E\u043E",ifpSize:"IFP \u0445\u044D\u043C\u0436\u044D\u044D",ifpCount:"IFP \u0442\u043E\u043E",displaySize:"\u0422\u0443\u0441\u043B\u0430\u0445 \u0434\u044D\u043B\u0433\u044D\u0446\u0438\u0439\u043D \u0445\u044D\u043C\u0436\u044D\u044D",cameraPackage:"\u041A\u0430\u043C\u0435\u0440\u044B\u043D \u0431\u0430\u0433\u0446",teacherModel:"\u0411\u0430\u0433\u0448\u0438\u0439\u043D \u043A\u0430\u043C\u0435\u0440",studentModel:"\u0421\u0443\u0440\u0430\u043B\u0446\u0430\u0433\u0447\u0434\u044B\u043D \u043A\u0430\u043C\u0435\u0440",studentQty:"\u0421\u0443\u0440\u0430\u043B\u0446\u0430\u0433\u0447\u0434\u044B\u043D \u043A\u0430\u043C\u0435\u0440\u044B\u043D \u0442\u043E\u043E",applyRecommendation:"\u0421\u0430\u043D\u0430\u043B \u0431\u043E\u043B\u0433\u043E\u0441\u043E\u043D \u043A\u0430\u043C\u0435\u0440\u044B\u0433 \u0445\u044D\u0440\u044D\u0433\u043B\u044D\u0445",applyEquipment:"\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u0433 \u0445\u044D\u0440\u044D\u0433\u043B\u044D\u0445",mountingHeights:"\u0423\u0433\u0441\u0440\u0430\u043B\u0442\u044B\u043D \u04E9\u043D\u0434\u0440\u0438\u0439\u043D \u0436\u0438\u0448\u044D\u044D",doorSide:"\u0425\u0430\u0430\u043B\u0433\u0430\u043D\u044B \u0442\u0430\u043B",doorRight:"\u0411\u0430\u0440\u0443\u0443\u043D \u0445\u0430\u043D\u0430",doorLeft:"\u0417\u04AF\u04AF\u043D \u0445\u0430\u043D\u0430",visibility:"\u0425\u0430\u0440\u0430\u0433\u0434\u0430\u0446",showLabels:"\u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u043D \u043D\u044D\u0440",showFurniture:"\u0416\u0438\u0448\u0438\u0433 \u0442\u0430\u0432\u0438\u043B\u0433\u0430",showCoverage:"\u0428\u0430\u043B\u043D\u044B \u0445\u0430\u043C\u0440\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D\u043D\u0438\u0439 \u0442\u0443\u0441\u0433\u0430\u043B",coverageNote:"S210 \u043D\u044C 2D \u0448\u0430\u043B\u043D\u044B \u0442\u0443\u0441\u0433\u0430\u043B\u044B\u0433 \u0430\u0448\u0438\u0433\u043B\u0430\u043D\u0430. \u041A\u0430\u043C\u0435\u0440\u044B\u043D \u0448\u0430\u043B\u043D\u044B \u0445\u04AF\u0440\u044D\u044D \u043E\u0434\u043E\u043E\u0433\u0438\u0439\u043D 16:9 \u04E9\u043D\u0446\u04E9\u0433 \u0431\u0430 \u0447\u0438\u0433\u043B\u044D\u043B\u0438\u0439\u0433 \u0434\u0430\u0433\u0430\u043D\u0430.",reset:"\u04AE\u0437\u04AF\u04AF\u043B\u044D\u043D\u0433\u0438\u0439\u043D \u0430\u043D\u0445\u043D\u044B \u0442\u043E\u0445\u0438\u0440\u0433\u043E\u043E",assumption:"\u0423\u0433\u0441\u0440\u0430\u043B\u0442\u044B\u043D \u04E9\u043D\u0434\u04E9\u0440, \u0445\u044F\u043B\u0431\u0430\u0440\u0448\u0443\u0443\u043B\u0441\u0430\u043D \u0445\u044D\u043B\u0431\u044D\u0440 \u043D\u044C \u04AF\u0437\u04AF\u04AF\u043B\u044D\u043D\u0433\u0438\u0439\u043D \u0442\u0430\u0430\u043C\u0430\u0433. \u0422\u0430\u043B\u0431\u0430\u0439 \u0434\u044D\u044D\u0440 \u0431\u0430\u0442\u0430\u043B\u0433\u0430\u0430\u0436\u0443\u0443\u043B\u043D\u0430.",fromLeft:"\u0417\u04AF\u04AF\u043D \u0445\u0430\u043D\u0430\u043D\u0430\u0430\u0441",fromFront:"\u0423\u0440\u0434 \u0445\u0430\u043D\u0430\u043D\u0430\u0430\u0441",aboveFloor:"\u0428\u0430\u043B\u043D\u0430\u0430\u0441 \u0434\u044D\u044D\u0448",planSymbol:"2D \u0442\u044D\u043C\u0434\u044D\u0433\u043B\u044D\u0433\u044D\u044D",wallAnchor:"\u0425\u0430\u043D\u044B\u043D \u0443\u0433\u0441\u0440\u0430\u043B\u0442",facesStage:"\u0411\u0430\u0433\u0448\u0438\u0439\u043D \u0445\u044D\u0441\u044D\u0433 \u0440\u04AF\u04AF",facesAudience:"\u0421\u0443\u0440\u0430\u043B\u0446\u0430\u0433\u0447\u0438\u0434 \u0440\u0443\u0443",facesRoom:"\u04E8\u0440\u04E9\u04E9\u043D\u0438\u0439 \u0434\u043E\u0442\u043E\u0440 \u0442\u0430\u043B \u0440\u0443\u0443",facesLeft:"\u0417\u04AF\u04AF\u043D \u0442\u0438\u0439\u0448",facesRight:"\u0411\u0430\u0440\u0443\u0443\u043D \u0442\u0438\u0439\u0448",heightWarning:"\u04E8\u0440\u04E9\u04E9\u043D\u0438\u0439 \u04E9\u043D\u0434\u04E9\u0440 3.5 \u043C-\u044D\u044D\u0441 \u0434\u044D\u044D\u0448. \u0423\u0433\u0441\u0440\u0430\u043B\u0442\u044B\u043D \u04E9\u043D\u0434\u04E9\u0440 \u0431\u043E\u043B\u043E\u043D \u0443\u043D\u0436\u0443\u0443\u043B\u0430\u0445 \u0431\u044D\u0445\u044D\u043B\u0433\u044D\u044D\u0433 \u0448\u0430\u043B\u0433\u0430\u043D\u0430.",cameraRange:"CV \u043A\u0430\u043C\u0435\u0440\u044B\u043D 10 \u043C \u0434\u0430\u0433\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D \u0445\u044D\u0442\u044D\u0440\u0441\u044D\u043D. \u041A\u0430\u043C\u0435\u0440\u044B\u043D \u0431\u0430\u0439\u0440\u043B\u0430\u043B\u044B\u0433 \u0448\u0430\u043B\u0433\u0430\u043D\u0430.",roomSize:"\u04E8\u0440\u0433\u04E9\u043D 4\u201330 \u043C, \u0433\u04AF\u043D 5\u201350 \u043C, \u04E9\u043D\u0434\u04E9\u0440 2.4\u20136 \u043C \u043E\u0440\u0443\u0443\u043B\u043D\u0430.",screenSpace:"\u0421\u043E\u043D\u0433\u043E\u0441\u043E\u043D IFP \u0445\u043E\u0441\u043B\u043E\u043B\u0434 \u0443\u0440\u0434 \u0445\u0430\u043D\u044B\u043D \u04E9\u0440\u0433\u04E9\u043D \u0445\u04AF\u0440\u044D\u043B\u0446\u044D\u0445\u0433\u04AF\u0439.",screenHeight:"IFP \u0434\u044D\u043B\u0433\u044D\u0446\u0438\u0439\u043D \u04E9\u043D\u0434\u04E9\u0440 \u044D\u043D\u044D \u04E9\u0440\u04E9\u04E9\u043D\u0434 \u0442\u043E\u0445\u0438\u0440\u043E\u0445\u0433\u04AF\u0439.",pngReady:"PNG \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u043B\u043E\u0433\u0434\u043B\u043E\u043E",webglError:"3D \u044D\u0445\u043B\u04AF\u04AF\u043B\u044D\u0445 \u0431\u043E\u043B\u043E\u043C\u0436\u0433\u04AF\u0439. \u0422\u04E9\u0445\u04E9\u04E9\u0440\u04E9\u043C\u0436\u0438\u0439\u043D \u0445\u0443\u0440\u0434\u0430\u0441\u0433\u0430\u043B \u044D\u0441\u0432\u044D\u043B WebGL \u0434\u044D\u043C\u0436\u0434\u044D\u0433 \u0445\u04E9\u0442\u04E9\u0447 \u0445\u044D\u0440\u044D\u0433\u043B\u044D\u043D\u044D.",demoNote:"\u04E8\u043D\u0434\u0440\u0438\u0439\u043D \u0436\u0438\u0448\u044D\u044D \u2014 \u0442\u0430\u043B\u0431\u0430\u0439 \u0434\u044D\u044D\u0440 \u0448\u0430\u043B\u0433\u0430\u043D\u0430",recommendation:"\u042D\u043D\u044D \u04E9\u0440\u04E9\u04E9\u043D\u0434 \u0441\u0430\u043D\u0430\u043B \u0431\u043E\u043B\u0433\u043E\u0445",s210:"S210 \u0442\u0430\u0430\u0437\u043D\u044B \u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D",teacher:"\u0411\u0430\u0433\u0448\u0438\u0439\u043D \u043A\u0430\u043C\u0435\u0440",student:"\u0421\u0443\u0440\u0430\u043B\u0446\u0430\u0433\u0447\u0434\u044B\u043D \u043A\u0430\u043C\u0435\u0440",station:"LCS \u0441\u0442\u0430\u043D\u0446",ndp:"NDP600 \u0431\u0430\u0433\u0448\u0438\u0439\u043D \u0448\u0438\u0440\u044D\u044D",ifp:"IFP \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432 \u0434\u044D\u043B\u0433\u044D\u0446",display:"\u0422\u0443\u0441\u043B\u0430\u0445 \u0434\u044D\u043B\u0433\u044D\u0446",speaker:"PS610 \u0447\u0430\u043D\u0433\u0430 \u044F\u0440\u0438\u0433\u0447"};var S_={importedPlan:"2D\u30D7\u30E9\u30F3\u304B\u3089",importedDesc:"\u8AAD\u307F\u8FBC\u3093\u30602D\u914D\u7F6E\u3068\u58C1\u9762\u53D6\u4ED8\u306E\u53C2\u8003\u8868\u793A\u3067\u3059\u3002\u90E8\u5C4B\u3084\u6A5F\u5668\u306E\u5909\u66F4\u306F2D\u3067\u884C\u3063\u3066\u304F\u3060\u3055\u3044\u3002",resetImported:"\u8AAD\u8FBC\u6642\u306E\u8996\u70B9\u3068\u9AD8\u3055\u306B\u623B\u3059",title:"LCS 810 \xB7 3D\u6559\u5BA4\u30C7\u30E2",eyebrow:"\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D6\u306A\u6559\u5BA4\u7A7A\u9593",export:"PNG\u3092\u66F8\u304D\u51FA\u3059",preset:"\u90E8\u5C4B\u30D7\u30EA\u30BB\u30C3\u30C8",standard:"\u6A19\u6E96 8 \xD7 10",large:"\u5927\u578B 10 \xD7 20",lecture:"\u8B1B\u7FA9\u5BA4 12 \xD7 15",ultra:"\u8B1B\u5802 17 \xD7 37",custom:"\u30AB\u30B9\u30BF\u30E0",recalculate:"\u518D\u8A08\u7B97",overview:"\u5168\u4F53",top:"\u4E0A\u9762",stageView:"\u6559\u58C7\u5074",audienceView:"\u5BA2\u5E2D\u5074",gestureHint:"\u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u8EE2\u30FB\u30B9\u30AF\u30ED\u30FC\u30EB\u3067\u62E1\u5927\u7E2E\u5C0F\u30FB\u53F3\u30C9\u30E9\u30C3\u30B0\u3067\u79FB\u52D5\u30FB\u6A5F\u5668\u3092\u30AF\u30EA\u30C3\u30AF",study:"\u63D0\u6848\u7528\u306E\u7A7A\u9593\u691C\u8A0E",layoutTitle:"\u30B7\u30B9\u30C6\u30E0\u914D\u7F6E",layoutDesc:"2D\u306E\u518D\u8A08\u7B97\u30EB\u30FC\u30EB\u306B\u57FA\u3065\u304F\u53D6\u4ED8\u4F4D\u7F6E\u306E\u53C2\u8003\u8868\u793A\u3067\u3059\u3002",width:"\u5E45 (m)",depth:"\u5965\u884C (m)",height:"\u9AD8\u3055 (m)",devices:"\u6A5F\u5668",selected:"\u9078\u629E\u3057\u305F\u6A5F\u5668",settings:"\u30B7\u30FC\u30F3\u8A2D\u5B9A",equipment:"\u6A5F\u5668\u69CB\u6210",ifpSize:"IFP\u30B5\u30A4\u30BA",ifpCount:"IFP\u53F0\u6570",displaySize:"\u88DC\u52A9\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30B5\u30A4\u30BA",cameraPackage:"\u30AB\u30E1\u30E9\u69CB\u6210",teacherModel:"\u8B1B\u5E2B\u7528\u30AB\u30E1\u30E9",studentModel:"\u53D7\u8B1B\u8005\u7528\u30AB\u30E1\u30E9",studentQty:"\u53D7\u8B1B\u8005\u7528\u30AB\u30E1\u30E9\u53F0\u6570",applyRecommendation:"\u63A8\u5968\u30AB\u30E1\u30E9\u3092\u9069\u7528",applyEquipment:"\u6A5F\u5668\u69CB\u6210\u3092\u9069\u7528",mountingHeights:"\u53C2\u8003\u53D6\u4ED8\u9AD8\u3055",doorSide:"\u30C9\u30A2\u306E\u4F4D\u7F6E",doorRight:"\u53F3\u306E\u58C1",doorLeft:"\u5DE6\u306E\u58C1",visibility:"\u8868\u793A\u8A2D\u5B9A",showLabels:"\u6A5F\u5668\u540D",showFurniture:"\u53C2\u8003\u5BB6\u5177",showCoverage:"\u5E8A\u9762\u30AB\u30D0\u30FC\u7BC4\u56F2",coverageNote:"S210\u306F2D\u5E8A\u9762\u6295\u5F71\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\u30AB\u30E1\u30E9\u306E\u5E8A\u9762\u7BC4\u56F2\u306F\u73FE\u5728\u306E16:9\u753B\u89D2\u3068\u5411\u304D\u306B\u9023\u52D5\u3057\u307E\u3059\u3002",reset:"\u30C7\u30E2\u306E\u521D\u671F\u8A2D\u5B9A\u306B\u623B\u3059",assumption:"\u53D6\u4ED8\u9AD8\u3055\u3068\u7C21\u7565\u5F62\u72B6\u306F\u53C2\u8003\u3067\u3059\u3002\u6700\u7D42\u4F4D\u7F6E\u306F\u73FE\u5730\u3067\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",fromLeft:"\u5DE6\u58C1\u304B\u3089",fromFront:"\u524D\u58C1\u304B\u3089",aboveFloor:"\u5E8A\u9762\u304B\u3089",planSymbol:"2D\u8A18\u53F7\u4F4D\u7F6E",wallAnchor:"\u58C1\u9762\u53D6\u4ED8",facesStage:"\u6559\u58C7\u5411\u304D",facesAudience:"\u5BA2\u5E2D\u5411\u304D",facesRoom:"\u6559\u5BA4\u5185\u5411\u304D",facesLeft:"\u5DE6\u5411\u304D",facesRight:"\u53F3\u5411\u304D",heightWarning:"\u5929\u4E95\u9AD8\u304C3.5 m\u4EE5\u4E0A\u3067\u3059\u3002\u53D6\u4ED8\u9AD8\u3055\u3068\u540A\u4E0B\u3052\u91D1\u5177\u306E\u5FC5\u8981\u6027\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",cameraRange:"CV\u30AB\u30E1\u30E9\u306E\u8FFD\u5C3E\u8DDD\u96E210 m\u3092\u8D85\u3048\u3066\u3044\u307E\u3059\u3002\u69CB\u6210\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",roomSize:"\u5E454\u201330 m\u3001\u5965\u884C5\u201350 m\u3001\u9AD8\u30552.4\u20136 m\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",screenSpace:"\u9078\u629E\u3057\u305FIFP\u3092\u7F6E\u304F\u524D\u58C1\u306E\u5E45\u304C\u4E0D\u8DB3\u3057\u3066\u3044\u307E\u3059\u3002",screenHeight:"IFP\u306E\u9AD8\u3055\u304C\u5BA4\u5185\u306E\u8A2D\u7F6E\u53EF\u80FD\u7BC4\u56F2\u3092\u8D85\u3048\u3066\u3044\u307E\u3059\u3002",pngReady:"PNG\u3092\u66F8\u304D\u51FA\u3057\u307E\u3057\u305F",webglError:"3D\u3092\u958B\u59CB\u3067\u304D\u307E\u305B\u3093\u3002\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u304BWebGL\u5BFE\u5FDC\u30D6\u30E9\u30A6\u30B6\u3092\u3054\u5229\u7528\u304F\u3060\u3055\u3044\u3002",demoNote:"\u53C2\u8003\u9AD8\u3055\u30FB\u73FE\u5730\u78BA\u8A8D",recommendation:"\u3053\u306E\u90E8\u5C4B\u306E\u63A8\u5968\u69CB\u6210",s210:"S210\u5929\u4E95\u30DE\u30A4\u30AF",teacher:"\u8B1B\u5E2B\u7528\u30AB\u30E1\u30E9",student:"\u53D7\u8B1B\u8005\u7528\u30AB\u30E1\u30E9",station:"LCS\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3",ndp:"NDP600\u8B1B\u5E2B\u5353",ifp:"IFP\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D6\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",display:"\u88DC\u52A9\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",speaker:"PS610\u30B9\u30D4\u30FC\u30AB\u30FC"};var M_={importedPlan:"Desde el plan 2D",importedDesc:"Distribuci\xF3n 2D importada con montaje mural ilustrativo. Modifique la sala y los equipos en 2D.",resetImported:"Restaurar vista y alturas importadas",title:"LCS 810 \xB7 Demo de aula 3D",eyebrow:"ESTUDIO INTERACTIVO DEL AULA",export:"Exportar PNG",preset:"Sala predefinida",standard:"Est\xE1ndar 8 \xD7 10",large:"Grande 10 \xD7 20",lecture:"Sala de conferencias 12 \xD7 15",ultra:"Auditorio 17 \xD7 37",custom:"Personalizada",recalculate:"Recalcular",overview:"Vista general",top:"Vista superior",stageView:"Hacia el escenario",audienceView:"Hacia los alumnos",gestureHint:"Arrastre para orbitar \xB7 Rueda para acercar \xB7 Arrastre derecho para desplazar \xB7 Pulse un equipo",study:"ESTUDIO ESPACIAL DE PREVENTA",layoutTitle:"Distribuci\xF3n del sistema",layoutDesc:"Posiciones ilustrativas seg\xFAn las reglas de rec\xE1lculo 2D.",width:"Ancho (m)",depth:"Fondo (m)",height:"Altura (m)",devices:"Equipos",selected:"Equipo seleccionado",settings:"Ajustes de escena",equipment:"Configuraci\xF3n de equipos",ifpSize:"Tama\xF1o de IFP",ifpCount:"Cantidad de IFP",displaySize:"Tama\xF1o de pantalla auxiliar",cameraPackage:"Paquete de c\xE1maras",teacherModel:"C\xE1mara del docente",studentModel:"C\xE1mara de alumnos",studentQty:"Cantidad de c\xE1maras de alumnos",applyRecommendation:"Aplicar c\xE1maras recomendadas",applyEquipment:"Aplicar equipos",mountingHeights:"Alturas ilustrativas de montaje",doorSide:"Lado de la puerta",doorRight:"Pared derecha",doorLeft:"Pared izquierda",visibility:"Visibilidad",showLabels:"Nombres de equipos",showFurniture:"Mobiliario de referencia",showCoverage:"Proyecci\xF3n de cobertura",coverageNote:"S210 usa la proyecci\xF3n 2D. El \xE1rea de c\xE1mara en el suelo sigue el campo 16:9 y la direcci\xF3n actuales.",reset:"Restaurar valores del demo",assumption:"Alturas y formas simplificadas son ilustrativas. Confirme en obra.",fromLeft:"Desde la pared izquierda",fromFront:"Desde la pared frontal",aboveFloor:"Sobre el suelo",planSymbol:"S\xEDmbolo 2D",wallAnchor:"Montaje mural",facesStage:"Hacia el escenario",facesAudience:"Hacia los alumnos",facesRoom:"Hacia el aula",facesLeft:"Hacia la izquierda",facesRight:"Hacia la derecha",heightWarning:"La altura es de 3,5 m o m\xE1s. Revise el montaje y el soporte suspendido.",cameraRange:"Alguna c\xE1mara CV supera su alcance de seguimiento de 10 m. Revise el plan.",roomSize:"Introduzca ancho 4\u201330 m, fondo 5\u201350 m y altura 2,4\u20136 m.",screenSpace:"Las pantallas IFP requieren m\xE1s ancho en la pared frontal.",screenHeight:"La pantalla IFP es demasiado alta para esta sala.",pngReady:"PNG exportado",webglError:"No se pudo iniciar 3D. Active la aceleraci\xF3n o use un navegador con WebGL.",demoNote:"Altura ilustrativa; confirmar en obra",recommendation:"Recomendado para esta sala",s210:"Micr\xF3fono de techo S210",teacher:"C\xE1mara del docente",student:"C\xE1mara de alumnos",station:"Estaci\xF3n LCS",ndp:"Atril NDP600",ifp:"Pantalla interactiva IFP",display:"Pantallas auxiliares",speaker:"Altavoz PS610"};var b_={importedPlan:"\u0645\u0646 \u0627\u0644\u0645\u062E\u0637\u0637 \u0627\u0644\u062B\u0646\u0627\u0626\u064A",importedDesc:"\u0627\u0644\u0645\u062E\u0637\u0637 \u0627\u0644\u062B\u0646\u0627\u0626\u064A \u0627\u0644\u0645\u0633\u062A\u0648\u0631\u062F \u0645\u0639 \u0623\u0645\u062B\u0644\u0629 \u0644\u0644\u062A\u062B\u0628\u064A\u062A \u0627\u0644\u062C\u062F\u0627\u0631\u064A. \u0639\u062F\u0651\u0644 \u0627\u0644\u063A\u0631\u0641\u0629 \u0648\u0627\u0644\u0623\u062C\u0647\u0632\u0629 \u0641\u064A \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062B\u0646\u0627\u0626\u064A.",resetImported:"\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u0646\u0638\u0648\u0631 \u0648\u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u0648\u0631\u062F\u0629",title:"LCS 810 \xB7 \u0639\u0631\u0636 \u0627\u0644\u0641\u0635\u0644 \u062B\u0644\u0627\u062B\u064A \u0627\u0644\u0623\u0628\u0639\u0627\u062F",eyebrow:"\u062F\u0631\u0627\u0633\u0629 \u062A\u0641\u0627\u0639\u0644\u064A\u0629 \u0644\u0645\u0633\u0627\u062D\u0629 \u0627\u0644\u0641\u0635\u0644",export:"\u062A\u0635\u062F\u064A\u0631 PNG",preset:"\u0646\u0645\u0648\u0630\u062C \u0627\u0644\u063A\u0631\u0641\u0629",standard:"\u0642\u064A\u0627\u0633\u064A 8 \xD7 10",large:"\u0643\u0628\u064A\u0631 10 \xD7 20",lecture:"\u0642\u0627\u0639\u0629 \u0645\u062D\u0627\u0636\u0631\u0627\u062A 12 \xD7 15",ultra:"\u0645\u062F\u0631\u062C 17 \xD7 37",custom:"\u0645\u062E\u0635\u0635",recalculate:"\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062D\u0633\u0627\u0628",overview:"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629",top:"\u0645\u0646 \u0627\u0644\u0623\u0639\u0644\u0649",stageView:"\u062C\u0647\u0629 \u0627\u0644\u0645\u0646\u0635\u0629",audienceView:"\u062C\u0647\u0629 \u0627\u0644\u0637\u0644\u0627\u0628",gestureHint:"\u0627\u0633\u062D\u0628 \u0644\u0644\u062F\u0648\u0631\u0627\u0646 \xB7 \u0645\u0631\u0651\u0631 \u0644\u0644\u062A\u0643\u0628\u064A\u0631 \xB7 \u0627\u0633\u062D\u0628 \u0628\u0627\u0644\u0632\u0631 \u0627\u0644\u0623\u064A\u0645\u0646 \u0644\u0644\u062A\u062D\u0631\u064A\u0643 \xB7 \u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \u0627\u0644\u062C\u0647\u0627\u0632",study:"\u062F\u0631\u0627\u0633\u0629 \u0645\u0643\u0627\u0646\u064A\u0629 \u0644\u0645\u0627 \u0642\u0628\u0644 \u0627\u0644\u0628\u064A\u0639",layoutTitle:"\u062A\u0648\u0632\u064A\u0639 \u0627\u0644\u0646\u0638\u0627\u0645",layoutDesc:"\u0645\u0648\u0627\u0636\u0639 \u062A\u0631\u0643\u064A\u0628 \u062A\u0648\u0636\u064A\u062D\u064A\u0629 \u0648\u0641\u0642 \u0642\u0648\u0627\u0639\u062F \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062D\u0633\u0627\u0628 \u0627\u0644\u062B\u0646\u0627\u0626\u064A\u0629.",width:"\u0627\u0644\u0639\u0631\u0636 (\u0645)",depth:"\u0627\u0644\u0639\u0645\u0642 (\u0645)",height:"\u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639 (\u0645)",devices:"\u0627\u0644\u0623\u062C\u0647\u0632\u0629",selected:"\u0627\u0644\u062C\u0647\u0627\u0632 \u0627\u0644\u0645\u062D\u062F\u062F",settings:"\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0634\u0647\u062F",equipment:"\u062A\u0643\u0648\u064A\u0646 \u0627\u0644\u0623\u062C\u0647\u0632\u0629",ifpSize:"\u062D\u062C\u0645 \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u064A\u0629",ifpCount:"\u0639\u062F\u062F \u0627\u0644\u0634\u0627\u0634\u0627\u062A \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u064A\u0629",displaySize:"\u062D\u062C\u0645 \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629",cameraPackage:"\u062D\u0632\u0645\u0629 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627\u062A",teacherModel:"\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u0645\u0639\u0644\u0645",studentModel:"\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u0637\u0644\u0627\u0628",studentQty:"\u0639\u062F\u062F \u0643\u0627\u0645\u064A\u0631\u0627\u062A \u0627\u0644\u0637\u0644\u0627\u0628",applyRecommendation:"\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627\u062A \u0627\u0644\u0645\u0642\u062A\u0631\u062D\u0629",applyEquipment:"\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0623\u062C\u0647\u0632\u0629",mountingHeights:"\u0627\u0631\u062A\u0641\u0627\u0639\u0627\u062A \u062A\u0631\u0643\u064A\u0628 \u062A\u0648\u0636\u064A\u062D\u064A\u0629",doorSide:"\u062C\u0647\u0629 \u0627\u0644\u0628\u0627\u0628",doorRight:"\u0627\u0644\u062C\u062F\u0627\u0631 \u0627\u0644\u0623\u064A\u0645\u0646",doorLeft:"\u0627\u0644\u062C\u062F\u0627\u0631 \u0627\u0644\u0623\u064A\u0633\u0631",visibility:"\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0639\u0631\u0636",showLabels:"\u0623\u0633\u0645\u0627\u0621 \u0627\u0644\u0623\u062C\u0647\u0632\u0629",showFurniture:"\u0623\u062B\u0627\u062B \u0645\u0631\u062C\u0639\u064A",showCoverage:"\u0625\u0633\u0642\u0627\u0637 \u0627\u0644\u062A\u063A\u0637\u064A\u0629 \u0639\u0644\u0649 \u0627\u0644\u0623\u0631\u0636",coverageNote:"\u064A\u0633\u062A\u062E\u062F\u0645 S210 \u0627\u0644\u0625\u0633\u0642\u0627\u0637 \u0627\u0644\u0623\u0631\u0636\u064A \u0627\u0644\u062B\u0646\u0627\u0626\u064A. \u062A\u062A\u0628\u0639 \u0645\u0633\u0627\u062D\u0629 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u0623\u0631\u0636\u064A\u0629 \u0645\u062C\u0627\u0644 16:9 \u0648\u0627\u062A\u062C\u0627\u0647\u0647\u0627 \u0627\u0644\u062D\u0627\u0644\u064A\u064A\u0646.",reset:"\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629",assumption:"\u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639\u0627\u062A \u0648\u0627\u0644\u0623\u0634\u0643\u0627\u0644 \u0627\u0644\u0645\u0628\u0633\u0637\u0629 \u062A\u0648\u0636\u064A\u062D\u064A\u0629. \u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0645\u0648\u0627\u0636\u0639 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629 \u0641\u064A \u0627\u0644\u0645\u0648\u0642\u0639.",fromLeft:"\u0645\u0646 \u0627\u0644\u062C\u062F\u0627\u0631 \u0627\u0644\u0623\u064A\u0633\u0631",fromFront:"\u0645\u0646 \u0627\u0644\u062C\u062F\u0627\u0631 \u0627\u0644\u0623\u0645\u0627\u0645\u064A",aboveFloor:"\u0641\u0648\u0642 \u0627\u0644\u0623\u0631\u0636",planSymbol:"\u0645\u0648\u0636\u0639 \u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u062B\u0646\u0627\u0626\u064A",wallAnchor:"\u062A\u062B\u0628\u064A\u062A \u062C\u062F\u0627\u0631\u064A",facesStage:"\u0628\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0645\u0646\u0635\u0629",facesAudience:"\u0628\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0637\u0644\u0627\u0628",facesRoom:"\u0628\u0627\u062A\u062C\u0627\u0647 \u062F\u0627\u062E\u0644 \u0627\u0644\u0641\u0635\u0644",facesLeft:"\u0628\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u064A\u0633\u0627\u0631",facesRight:"\u0628\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u064A\u0645\u064A\u0646",heightWarning:"\u0627\u0631\u062A\u0641\u0627\u0639 \u0627\u0644\u063A\u0631\u0641\u0629 3.5 \u0645 \u0623\u0648 \u0623\u0643\u062B\u0631. \u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0631\u062A\u0641\u0627\u0639 \u0627\u0644\u062A\u062B\u0628\u064A\u062A \u0648\u0627\u0644\u062D\u0627\u062C\u0629 \u0625\u0644\u0649 \u062D\u0627\u0645\u0644 \u0645\u0639\u0644\u0642.",cameraRange:"\u062A\u062A\u062C\u0627\u0648\u0632 \u0625\u062D\u062F\u0649 \u0643\u0627\u0645\u064A\u0631\u0627\u062A CV \u0645\u062F\u0649 \u0627\u0644\u062A\u062A\u0628\u0639 \u0627\u0644\u0628\u0627\u0644\u063A 10 \u0645. \u0631\u0627\u062C\u0639 \u0627\u0644\u062A\u0648\u0632\u064A\u0639.",roomSize:"\u0623\u062F\u062E\u0644 \u0639\u0631\u0636\u064B\u0627 4\u201330 \u0645 \u0648\u0639\u0645\u0642\u064B\u0627 5\u201350 \u0645 \u0648\u0627\u0631\u062A\u0641\u0627\u0639\u064B\u0627 2.4\u20136 \u0645.",screenSpace:"\u062A\u062D\u062A\u0627\u062C \u0627\u0644\u0634\u0627\u0634\u0627\u062A \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u0629 \u0625\u0644\u0649 \u0639\u0631\u0636 \u0623\u0643\u0628\u0631 \u0644\u0644\u062C\u062F\u0627\u0631 \u0627\u0644\u0623\u0645\u0627\u0645\u064A.",screenHeight:"\u0627\u0631\u062A\u0641\u0627\u0639 \u0627\u0644\u0634\u0627\u0634\u0629 \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u0645\u0633\u0627\u062D\u0629 \u0627\u0644\u0645\u062A\u0627\u062D\u0629 \u0644\u0644\u062A\u0631\u0643\u064A\u0628.",pngReady:"\u062A\u0645 \u062A\u0635\u062F\u064A\u0631 PNG",webglError:"\u062A\u0639\u0630\u0631 \u0628\u062F\u0621 \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062B\u0644\u0627\u062B\u064A. \u0641\u0639\u0651\u0644 \u062A\u0633\u0631\u064A\u0639 \u0627\u0644\u0623\u062C\u0647\u0632\u0629 \u0623\u0648 \u0627\u0633\u062A\u062E\u062F\u0645 \u0645\u062A\u0635\u0641\u062D\u064B\u0627 \u064A\u062F\u0639\u0645 WebGL.",demoNote:"\u0627\u0631\u062A\u0641\u0627\u0639 \u062A\u0648\u0636\u064A\u062D\u064A\u061B \u062A\u062D\u0642\u0642 \u0641\u064A \u0627\u0644\u0645\u0648\u0642\u0639",recommendation:"\u0627\u0644\u0645\u0642\u062A\u0631\u062D \u0644\u0647\u0630\u0647 \u0627\u0644\u063A\u0631\u0641\u0629",s210:"\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646 \u0633\u0642\u0641\u064A S210",teacher:"\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u0645\u0639\u0644\u0645",student:"\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u0637\u0644\u0627\u0628",station:"\u0645\u062D\u0637\u0629 LCS",ndp:"\u0645\u0646\u0635\u0629 NDP600",ifp:"\u0634\u0627\u0634\u0629 \u062A\u0641\u0627\u0639\u0644\u064A\u0629 IFP",display:"\u0627\u0644\u0634\u0627\u0634\u0627\u062A \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629",speaker:"\u0645\u0643\u0628\u0631 \u0635\u0648\u062A PS610"};var jo={en:{importedPlan:"From 2D plan",importedDesc:"Current 2D deployment with illustrative wall mounts. Return to 2D to change the room or equipment.",resetImported:"Restore imported view and heights",title:"LCS 810 \xB7 3D Room Demo",eyebrow:"INTERACTIVE ROOM STUDY",export:"Export PNG",preset:"Preset",standard:"Standard 8 \xD7 10",large:"Large 10 \xD7 20",lecture:"Lecture 12 \xD7 15",ultra:"Auditorium 17 \xD7 37",custom:"Custom",recalculate:"Recalculate",overview:"Overview",top:"Top",stageView:"Stage",audienceView:"Audience",gestureHint:"Drag to orbit \xB7 Scroll to zoom \xB7 Right drag to pan \xB7 Click a device",study:"PRESALES SPATIAL STUDY",layoutTitle:"System layout",layoutDesc:"Illustrative installation positions from the 2D Recalculate rules.",width:"WIDTH (m)",depth:"DEPTH (m)",height:"HEIGHT (m)",devices:"Devices",selected:"Selected device",settings:"Scene settings",equipment:"Equipment configuration",ifpSize:"IFP size",ifpCount:"IFP panels",displaySize:"Auxiliary Display size",cameraPackage:"Camera package",teacherModel:"Teacher camera",studentModel:"Student camera",studentQty:"Student cameras",applyRecommendation:"Apply recommended cameras",applyEquipment:"Apply equipment",mountingHeights:"Illustrative mounting heights",doorSide:"Door side",doorRight:"Right wall",doorLeft:"Left wall",visibility:"Visibility",showLabels:"Device names",showFurniture:"Reference furniture",showCoverage:"Floor coverage projection",coverageNote:"S210 uses the 2D floor projection. Camera floor areas follow the current 16:9 field and viewing direction.",reset:"Restore demo defaults",assumption:"Mounting heights and simplified shapes are presentation assumptions. Confirm on site.",fromLeft:"from left wall",fromFront:"from front wall",aboveFloor:"above floor",planSymbol:"2D symbol",wallAnchor:"Wall mount",facesStage:"Faces stage",facesAudience:"Faces audience",facesRoom:"Faces into the classroom",facesLeft:"Faces left",facesRight:"Faces right",heightWarning:"Room height is 3.5 m or more. Check mounting height and use a drop mount where needed.",cameraRange:"At least one CV camera exceeds its 10 m tracking range. Check the camera plan.",roomSize:"Enter width 4\u201330 m, depth 5\u201350 m, and height 2.4\u20136 m.",screenSpace:"The selected IFP panels need more front-wall width.",screenHeight:"The IFP is too tall for this room height.",pngReady:"PNG ready",webglError:"3D could not start. Enable hardware acceleration or use a browser with WebGL support.",demoNote:"Illustrative height \u2014 confirm on site",recommendation:"Suggested for this room",s210:"S210",teacher:"Teacher camera",student:"Student camera",station:"LCS Station",ndp:"NDP600",ifp:"IFP",display:"Auxiliary Displays",speaker:"PS610"},zh:{importedPlan:"\u6765\u81EA 2D \u65B9\u6848",importedDesc:"\u5C55\u793A\u4E8C\u7EF4\u90E8\u7F72\u53CA\u58C1\u6302\u5B89\u88C5\u793A\u610F\uFF1B\u4FEE\u6539\u623F\u95F4\u6216\u8BBE\u5907\u8BF7\u8FD4\u56DE\u4E8C\u7EF4\u9875\u9762\u3002",resetImported:"\u6062\u590D\u5BFC\u5165\u65B9\u6848\u89C6\u89D2\u4E0E\u9AD8\u5EA6",title:"LCS 810 \xB7 \u4E09\u7EF4\u6559\u5BA4\u6F14\u793A",eyebrow:"\u4EA4\u4E92\u5F0F\u6559\u5BA4\u7A7A\u95F4\u793A\u610F",export:"\u5BFC\u51FA PNG",preset:"\u623F\u95F4\u9884\u8BBE",standard:"\u6807\u51C6\u6559\u5BA4 8 \xD7 10",large:"\u5927\u6559\u5BA4 10 \xD7 20",lecture:"\u9636\u68AF\u6559\u5BA4 12 \xD7 15",ultra:"\u793C\u5802 17 \xD7 37",custom:"\u81EA\u5B9A\u4E49",recalculate:"\u91CD\u65B0\u8BA1\u7B97",overview:"\u5168\u666F",top:"\u4FEF\u89C6",stageView:"\u8BB2\u53F0\u65B9\u5411",audienceView:"\u89C2\u4F17\u65B9\u5411",gestureHint:"\u62D6\u52A8\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u53F3\u952E\u62D6\u52A8\u5E73\u79FB \xB7 \u70B9\u51FB\u8BBE\u5907",study:"\u552E\u524D\u7A7A\u95F4\u793A\u610F",layoutTitle:"\u7CFB\u7EDF\u5E03\u5C40",layoutDesc:"\u6839\u636E\u4E8C\u7EF4\u201C\u91CD\u65B0\u8BA1\u7B97\u201D\u89C4\u5219\u751F\u6210\u7684\u5B89\u88C5\u793A\u610F\u3002",width:"\u5BBD\u5EA6\uFF08\u7C73\uFF09",depth:"\u6DF1\u5EA6\uFF08\u7C73\uFF09",height:"\u9AD8\u5EA6\uFF08\u7C73\uFF09",devices:"\u8BBE\u5907",selected:"\u5F53\u524D\u8BBE\u5907",settings:"\u573A\u666F\u8BBE\u7F6E",equipment:"\u8BBE\u5907\u914D\u7F6E",ifpSize:"IFP\u5C3A\u5BF8",ifpCount:"IFP\u6570\u91CF",displaySize:"\u8F85\u52A9\u5C4F\u5C3A\u5BF8",cameraPackage:"\u6444\u50CF\u5934\u5957\u88C5",teacherModel:"\u6559\u5E08\u6444\u50CF\u5934",studentModel:"\u5B66\u751F\u6444\u50CF\u5934",studentQty:"\u5B66\u751F\u673A\u6570\u91CF",applyRecommendation:"\u5E94\u7528\u63A8\u8350\u6444\u50CF\u5934",applyEquipment:"\u5E94\u7528\u8BBE\u5907\u914D\u7F6E",mountingHeights:"\u6F14\u793A\u5B89\u88C5\u9AD8\u5EA6",doorSide:"\u95E8\u7684\u4F4D\u7F6E",doorRight:"\u53F3\u4FA7\u5899",doorLeft:"\u5DE6\u4FA7\u5899",visibility:"\u663E\u793A\u5F00\u5173",showLabels:"\u8BBE\u5907\u540D\u79F0",showFurniture:"\u53C2\u8003\u684C\u6905",showCoverage:"\u5730\u9762\u8986\u76D6\u6295\u5F71",coverageNote:"S210 \u6CBF\u7528\u4E8C\u7EF4\u5730\u9762\u6295\u5F71\uFF1B\u6444\u50CF\u5934\u5730\u9762\u8303\u56F4\u968F\u5F53\u524D 16:9 \u89C6\u573A\u548C\u671D\u5411\u53D8\u5316\u3002",reset:"\u6062\u590D\u6F14\u793A\u9ED8\u8BA4\u503C",assumption:"\u5B89\u88C5\u9AD8\u5EA6\u548C\u7B80\u5316\u5916\u5F62\u4EC5\u4F5C\u6F14\u793A\uFF0C\u6700\u7EC8\u9700\u73B0\u573A\u590D\u6838\u3002",fromLeft:"\u8DDD\u5DE6\u5899",fromFront:"\u8DDD\u524D\u5899",aboveFloor:"\u79BB\u5730",planSymbol:"\u4E8C\u7EF4\u56FE\u6807\u4F4D\u7F6E",wallAnchor:"\u58C1\u6302\u5B89\u88C5",facesStage:"\u671D\u5411\u8BB2\u53F0",facesAudience:"\u671D\u5411\u89C2\u4F17",facesRoom:"\u671D\u5411\u6559\u5BA4\u5185\u90E8",facesLeft:"\u671D\u5DE6",facesRight:"\u671D\u53F3",heightWarning:"\u623F\u95F4\u9AD8\u5EA6\u8FBE\u52303.5\u7C73\uFF1A\u8BF7\u6838\u5BF9\u8BBE\u5907\u5B89\u88C5\u9AD8\u5EA6\uFF0C\u5FC5\u8981\u65F6\u4F7F\u7528\u4E0B\u5782\u652F\u67B6\u3002",cameraRange:"\u81F3\u5C11\u4E00\u53F0CV\u6444\u50CF\u5934\u8D85\u51FA10\u7C73\u8DDF\u8E2A\u8DDD\u79BB\uFF0C\u8BF7\u590D\u6838\u6444\u50CF\u5934\u65B9\u6848\u3002",roomSize:"\u8BF7\u8F93\u5165\u5BBD4\u201330\u7C73\u3001\u6DF15\u201350\u7C73\u3001\u9AD82.4\u20136\u7C73\u3002",screenSpace:"\u6240\u9009IFP\u7EC4\u5408\u5728\u524D\u5899\u653E\u4E0D\u4E0B\u3002",screenHeight:"IFP\u9AD8\u5EA6\u8D85\u8FC7\u623F\u95F4\u53EF\u5B89\u88C5\u7A7A\u95F4\u3002",pngReady:"PNG\u5DF2\u5BFC\u51FA",webglError:"\u65E0\u6CD5\u542F\u52A8\u4E09\u7EF4\u753B\u9762\u3002\u8BF7\u5F00\u542F\u786C\u4EF6\u52A0\u901F\u6216\u4F7F\u7528\u652F\u6301WebGL\u7684\u6D4F\u89C8\u5668\u3002",demoNote:"\u6F14\u793A\u9AD8\u5EA6\uFF0C\u73B0\u573A\u590D\u6838",recommendation:"\u6B64\u623F\u95F4\u63A8\u8350",s210:"S210\u540A\u9EA6",teacher:"\u6559\u5E08\u6444\u50CF\u5934",student:"\u5B66\u751F\u6444\u50CF\u5934",station:"LCS\u63A7\u5236\u53F0",ndp:"NDP600\u8BB2\u53F0",ifp:"IFP",display:"Auxiliary Displays",speaker:"PS610\u97F3\u7BB1"}};Object.assign(jo,{ko:v_,mn:y_,ja:S_,es:M_,fr:x_,ar:b_});var fE={en:["S210 3D pickup ripples","Animate pickup ripples","Cardioid illustration based on 6 m and 8 m planning ranges. Verify pickup on site."],zh:["S210 \u4E09\u7EF4\u62FE\u97F3\u6CE2\u7EB9","\u64AD\u653E\u62FE\u97F3\u6CE2\u7EB9","\u6309 6 \u7C73\u63A8\u8350\u30018 \u7C73\u8FB9\u754C\u7684\u89C4\u5212\u5C3A\u5EA6\u7ED8\u5236\u5FC3\u5F62\u62FE\u97F3\u793A\u610F\u3002\u5B9E\u9645\u62FE\u97F3\u9700\u73B0\u573A\u590D\u6838\u3002"],ko:["S210 3D \uC218\uC74C \uD30C\uD615","\uC218\uC74C \uD30C\uD615 \uC7AC\uC0DD","6 m \uBC0F 8 m \uC124\uACC4 \uBC94\uC704\uB85C \uADF8\uB9B0 \uCE74\uB514\uC624\uC774\uB4DC \uC218\uC74C \uC608\uC2DC\uC785\uB2C8\uB2E4. \uD604\uC7A5\uC5D0\uC11C \uD655\uC778\uD558\uC138\uC694."],mn:["S210 \u0434\u0443\u0443 \u0445\u04AF\u043B\u044D\u044D\u043D \u0430\u0432\u0430\u0445 3D \u0434\u043E\u043B\u0433\u0438\u043E\u043D","\u0414\u043E\u043B\u0433\u0438\u043E\u043D\u044B \u0445\u04E9\u0434\u04E9\u043B\u0433\u04E9\u04E9\u043D\u0438\u0439\u0433 \u0442\u043E\u0433\u043B\u0443\u0443\u043B\u0430\u0445","6 \u043C, 8 \u043C \u0442\u04E9\u043B\u04E9\u0432\u043B\u04E9\u043B\u0442\u0438\u0439\u043D \u0437\u0430\u0439\u0434 \u0441\u0443\u0443\u0440\u0438\u043B\u0441\u0430\u043D \u043A\u0430\u0440\u0434\u0438\u043E\u0438\u0434 \u0434\u04AF\u0440\u0441\u043B\u044D\u043B. \u0425\u04AF\u043B\u044D\u044D\u043D \u0430\u0432\u0430\u0445 \u0445\u04AF\u0440\u044D\u044D\u0433 \u0433\u0430\u0437\u0430\u0440 \u0434\u044D\u044D\u0440 \u043D\u044C \u0448\u0430\u043B\u0433\u0430\u043D\u0430."],ja:["S210 3D\u96C6\u97F3\u6CE2\u7D0B","\u96C6\u97F3\u6CE2\u7D0B\u3092\u52D5\u304B\u3059","\u8A2D\u8A08\u4E0A\u306E6 m\u30FB8 m\u3092\u4F7F\u3063\u305F\u30AB\u30FC\u30C7\u30A3\u30AA\u30A4\u30C9\u306E\u6A21\u5F0F\u56F3\u3067\u3059\u3002\u5B9F\u969B\u306E\u96C6\u97F3\u306F\u73FE\u5730\u3067\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"],es:["Ondas de captaci\xF3n 3D del S210","Animar ondas de captaci\xF3n","Esquema cardioide con alcances de dise\xF1o de 6 m y 8 m. Compruebe la captaci\xF3n in situ."],fr:["Ondes de captation 3D du S210","Animer les ondes de captation","Sch\xE9ma cardio\xEFde bas\xE9 sur les port\xE9es de conception de 6 m et 8 m. V\xE9rifier la captation sur site."],ar:["\u0645\u0648\u062C\u0627\u062A \u0627\u0644\u062A\u0642\u0627\u0637 S210 \u062B\u0644\u0627\u062B\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F","\u062A\u062D\u0631\u064A\u0643 \u0645\u0648\u062C\u0627\u062A \u0627\u0644\u0627\u0644\u062A\u0642\u0627\u0637","\u0631\u0633\u0645 \u062A\u0642\u0631\u064A\u0628\u064A \u0644\u0644\u0627\u0644\u062A\u0642\u0627\u0637 \u0627\u0644\u0642\u0644\u0628\u064A \u0648\u0641\u0642 \u0646\u0637\u0627\u0642\u064A \u0627\u0644\u062A\u062E\u0637\u064A\u0637 6 \u06488 \u0623\u0645\u062A\u0627\u0631. \u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0627\u0644\u062A\u0642\u0627\u0637 \u0641\u064A \u0627\u0644\u0645\u0648\u0642\u0639."]};for(let[i,[e,t,n]]of Object.entries(fE))Object.assign(jo[i],{s210Ripples:e,animateS210Ripples:t,s210RipplesNote:n});var w_={en:["This 2D plan could not be imported. Open 3D again from the 2D page.","This plan version is unsupported. Open it from the updated 2D page."],zh:["\u65E0\u6CD5\u5BFC\u5165\u6B64\u4E8C\u7EF4\u65B9\u6848\uFF0C\u8BF7\u4ECE\u4E8C\u7EF4\u9875\u9762\u91CD\u65B0\u6253\u5F00 3D\u3002","\u4E0D\u652F\u6301\u6B64\u65B9\u6848\u7248\u672C\uFF0C\u8BF7\u4ECE\u66F4\u65B0\u540E\u7684\u4E8C\u7EF4\u9875\u9762\u91CD\u65B0\u6253\u5F00\u3002"],ko:["2D \uACC4\uD68D\uC744 \uAC00\uC838\uC62C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. 2D \uD398\uC774\uC9C0\uC5D0\uC11C 3D\uB97C \uB2E4\uC2DC \uC5EC\uC138\uC694.","\uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uBC84\uC804\uC785\uB2C8\uB2E4. \uC5C5\uB370\uC774\uD2B8\uB41C 2D \uD398\uC774\uC9C0\uC5D0\uC11C \uB2E4\uC2DC \uC5EC\uC138\uC694."],mn:["2D \u0442\u04E9\u043B\u04E9\u0432\u043B\u04E9\u0433\u04E9\u04E9\u0433 \u0438\u043C\u043F\u043E\u0440\u0442\u043B\u043E\u0445 \u0431\u043E\u043B\u043E\u043C\u0436\u0433\u04AF\u0439. 2D \u0445\u0443\u0443\u0434\u0430\u0441\u043D\u0430\u0430\u0441 3D-\u0433 \u0434\u0430\u0445\u0438\u043D \u043D\u044D\u044D\u043D\u044D \u04AF\u04AF.","\u042D\u043D\u044D \u0445\u0443\u0432\u0438\u043B\u0431\u0430\u0440\u044B\u0433 \u0434\u044D\u043C\u0436\u0438\u0445\u0433\u04AF\u0439. \u0428\u0438\u043D\u044D\u0447\u0438\u043B\u0441\u044D\u043D 2D \u0445\u0443\u0443\u0434\u0430\u0441\u043D\u0430\u0430\u0441 \u043D\u044D\u044D\u043D\u044D \u04AF\u04AF."],ja:["2D \u30D7\u30E9\u30F3\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u30022D \u30DA\u30FC\u30B8\u304B\u3089 3D \u3092\u958B\u304D\u76F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002","\u672A\u5BFE\u5FDC\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3067\u3059\u3002\u66F4\u65B0\u3057\u305F 2D \u30DA\u30FC\u30B8\u304B\u3089\u958B\u304D\u76F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002"],es:["No se pudo importar el plan 2D. Abra 3D de nuevo desde la p\xE1gina 2D.","Versi\xF3n no compatible. Abra el plan desde la p\xE1gina 2D actualizada."],ar:["\u062A\u0639\u0630\u0631 \u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0627\u0644\u0645\u062E\u0637\u0637 \u0627\u0644\u062B\u0646\u0627\u0626\u064A. \u0627\u0641\u062A\u062D \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062B\u0644\u0627\u062B\u064A \u0645\u062C\u062F\u062F\u064B\u0627 \u0645\u0646 \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062B\u0646\u0627\u0626\u064A\u0629.","\u0625\u0635\u062F\u0627\u0631 \u063A\u064A\u0631 \u0645\u062F\u0639\u0648\u0645. \u0627\u0641\u062A\u062D \u0627\u0644\u0645\u062E\u0637\u0637 \u0645\u0646 \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062B\u0646\u0627\u0626\u064A\u0629 \u0627\u0644\u0645\u062D\u062F\u062B\u0629."],fr:["Impossible d\u2019importer ce plan 2D. Ouvrez \xE0 nouveau la vue 3D depuis la page 2D.","Cette version du plan n\u2019est pas prise en charge. Rouvrez-la depuis la page 2D mise \xE0 jour."]},E_=(i,e,t)=>e==="snapshotInvalid"?w_[i][0]:e==="snapshotVersion"?w_[i][1]:t(e);function T_(i,e){return i.panel?DisplayFit.label(i.panel):["teacher","student"].includes(i.kind)?`${i.model} \xB7 ${e(i.kind)}${i.kind==="student"?" "+(i.name.match(/Student (\d+)/)?.[1]||"1"):""}`:i.kind==="ifp"?`${e("ifp")}${i.size?" "+i.size+"\u2033":""} \xB7 ${i.id.split("-").at(-1)}`:i.kind==="display"?`${e("display")} \xB7 ${i.size}\u2033 \xB7 ${i.id.split("-").at(-1)}`:i.kind==="station"?e("station"):i.name}var ee=i=>document.querySelector(i),Qo=w0(window.location.hash),Ke=Qo.snapshot,tp=Ke?{...Ke.room,preset:"custom",ifpSize:Ke.layout.largeScreen.width*Math.sqrt(337)/(.0254*16),ifpCount:Ke.visibility.ifp?1:0,displaySize:Ke.displaySize,cameraPlan:Ke.cameraPlan}:null,J={lang:Mp(Ke?.lang),config:{width:8,depth:10,height:3,preset:"standard",ifpSize:86,ifpCount:2,displaySize:"55",cameraPlan:{...zd}},data:null,mountHeights:{},selectedId:"teacher-camera",visibility:{},showLabels:!0,showFurniture:!0,showCoverage:!1};J.s210Request=Ke?Ke.s210Request||{mode:"fixed",count:Ke.layout.s210s.length}:{mode:"auto"};J.s210Draft=null;J.localSnapshot=null;var st,Ko,Xn=Ke?.displayPlan||null,Yn=Qo.fitIssue?Xn||xa(tp.width,Ke.layout.largeScreen,Ke.visibility.ifp,Ke.visibility.display?Ke.layout.displays:[],Ke.displaySize):null;Yn&&(Xn=null);Ke?.displayPlan&&(J.visibility={ifp:Ke.visibility.ifp,display:Ke.visibility.display});function A_(){let i=J.config,e=J.data,t=J.localSnapshot||Ke,n=e?.devices.find(a=>a.kind==="station"),s=Ts(i.width,i.depth,i.height,t?.layout.hub||(n?{x:n.x,y:n.depth}:null),ee("#door-side").value);return{room:s,plan:Yn||Xn||(t?xa(i.width,t.layout.largeScreen,t.visibility.ifp,t.visibility.display?t.layout.displays:[],t.displaySize):{stageMm:Math.round(i.width*1e3),screens:(e?.devices||[]).filter(a=>["ifp","display"].includes(a.kind)).map(a=>DisplayFit.standard(a.kind==="ifp"?"front":a.wallSide,Number(a.size),a.id,a.planX??a.x,a.planDepth??a.depth))}),locked:!!(Xn||Yn&&Yn.stageMm<=s.width*1e3),lang:J.lang}}function pE(i){let e=Xn,t=Yn;Xn=i,Yn=null,Ms(J.config)||(Xn=e,Yn=t),ee("#export-button").disabled=!!Yn}var ma,Kf=wp("lcs-3d-theme","light",i=>st?.setTheme(i)),np=Tp(ee("#scene-sidebar"),980),Et=i=>jo[J.lang][i]||jo.en[i]||i,_n=i=>Number(i).toFixed(1),ga=i=>T_(i,Et),on=i=>!!i&&J.visibility[i.kind]!==!1,ln=()=>J.data.devices,C_=()=>ln().find(i=>i.id===J.selectedId),bs=new tu({devices:()=>J.data?.devices||[],title:ga,language:()=>J.lang,onSelect:su,scene:()=>st}),ip=K0({devices:()=>(J.data?.devices||[]).filter(i=>i.kind==="s210"&&on(i)),title:ga,scene:()=>st,onSelect:su,showCoverage:()=>np.showCoverage(),showRipples(){ee("#s210-ripples").checked||ee("#s210-ripples").click()}});function iu(){let i=C_(),e=ee("#device-detail");if(e.replaceChildren(),ee("#adjust-camera-field").hidden=!on(i)||!Vn(i),ee("#adjust-s210-aim").hidden=!on(i)||i.kind!=="s210",ee("#open-av-matrix").hidden=!on(i)||i.kind!=="ndp",!i||!on(i))return;let t=document.createElement("div");t.className="detail-heading",t.style.setProperty("--device-accent",i.color);let n=document.createElement("span");n.className="device-swatch";let s=document.createElement("strong");s.textContent=ga(i),t.append(n,s);let r=document.createElement("div");r.className="detail-grid";for(let[l,c]of[[`${_n(i.x)} m`,Et("fromLeft")],[`${_n(i.depth)} m`,Et("fromFront")],[`${_n(J.mountHeights[i.id])} m`,Et("aboveFloor")]]){let h=document.createElement("div"),u=document.createElement("strong");u.textContent=l;let p=document.createElement("small");p.textContent=c,h.append(u,p),r.append(h)}let a=document.createElement("p");a.className="detail-direction";let o={front:"facesStage",rear:"facesAudience",left:"facesLeft",right:"facesRight"}[i.direction];if(a.textContent=`${Et(i.kind==="speaker"?"facesRoom":o)} \xB7 ${i.mount?.includes("wall")?`${Et("wallAnchor")} \xB7 `:""}${Et("demoNote")}`,Vn(i)&&(a.textContent=Zo(J.lang).poseNote),e.append(t,r,a),i.planX!==void 0&&(Ke||i.planX!==i.x||i.planDepth!==i.depth)){let l=document.createElement("p");l.className="detail-direction",l.textContent=`${Et("planSymbol")}: ${_n(i.planX)} \xD7 ${_n(i.planDepth)} m`,e.append(l)}}function mE(){let i=ee("#height-controls");i.replaceChildren();for(let e of ln()){let t=document.createElement("div");t.className="height-control";let n=document.createElement("label");n.htmlFor=`height-${e.id}`;let s=document.createElement("span");s.textContent=ga(e);let r=document.createElement("output");r.textContent=`${_n(J.mountHeights[e.id])} m`,n.append(s,r);let a=document.createElement("input");a.type="range",a.id=`height-${e.id}`,a.min=String(To(e,0,J.config.height)),a.max=String(To(e,100,J.config.height)),a.step="0.05",a.value=String(J.mountHeights[e.id]),a.addEventListener("input",()=>{let o=To(e,a.value,J.config.height);J.mountHeights[e.id]=o,r.textContent=`${_n(o)} m`,st?.setMountHeight(e.id,o),iu()}),t.append(n,a),i.append(t)}}function gE(){let i=ee("#visibility-controls");if(i.replaceChildren(),!Ke)for(let e of["station","ndp","ifp","teacher","student","s210","speaker","display"]){if(!ln().some(r=>r.kind===e))continue;let t=document.createElement("label");t.className="check-row";let n=document.createElement("input");n.type="checkbox",n.checked=J.visibility[e]!==!1,n.dataset.kind=e,n.addEventListener("change",()=>{J.visibility[e]=n.checked,st?.setVisibility(e,n.checked),on(C_())||(J.selectedId=ln().find(on)?.id),st?.setSelected(J.selectedId,!1),document.querySelectorAll(".device-label").forEach(r=>r.classList.toggle("selected",r.dataset.deviceId===J.selectedId)),bs.sync(),nu(),iu(),R_()});let s=document.createElement("span");s.textContent=Et(e),t.append(n,s),i.append(t)}}function nu(){let i=ee("#s210-ripples"),e=ee("#animate-s210-ripples");i.disabled=!ln().some(t=>t.kind==="s210"&&on(t)),e.disabled=i.disabled||!i.checked,st?.setS210Ripples(!i.disabled&&i.checked,e.checked),ip.sync()}function _E(){let i=ee("#device-labels");i.replaceChildren();for(let e of ln()){let t=document.createElement("button");t.type="button",t.className="device-label",t.dataset.deviceId=e.id,t.style.setProperty("--device-accent",e.color),t.classList.toggle("selected",e.id===J.selectedId),t.textContent=ga(e),t.addEventListener("click",()=>su(e.id)),i.append(t)}i.hidden=!J.showLabels}function xE(i){if(!J.showLabels)return;let e=ee("#scene-canvas").getBoundingClientRect(),t=[...document.querySelectorAll(".scene-tools,.scene-topline")].map(s=>{let r=s.getBoundingClientRect();return{left:r.left-e.left,right:r.right-e.left,top:r.top-e.top,bottom:r.bottom-e.top}}),n=[...i].sort((s,r)=>+(r.device.id===J.selectedId)-+(s.device.id===J.selectedId));for(let{device:s,x:r,y:a,visible:o}of n){let l=document.querySelector(`.device-label[data-device-id="${s.id}"]`);if(!l||(l.hidden=!o||!on(s),l.hidden))continue;let c=l.offsetWidth,h=l.offsetHeight,u;for(let[p,f]of[[0,0],[0,-32],[0,32],[-70,-12],[70,-12],[-70,25],[70,25]]){let _=Math.max(c/2+5,Math.min(e.width-c/2-5,r+p)),g=Math.max(38,Math.min(e.height-88,a+f)),m={left:_-c/2,right:_+c/2,top:g-h,bottom:g};if(t.every(d=>m.right+5<d.left||m.left-5>d.right||m.bottom+5<d.top||m.top-5>d.bottom)){u={px:_,py:g,rect:m};break}}u?(t.push(u.rect),l.style.left=`${u.px}px`,l.style.top=`${u.py}px`):l.hidden=!0}}function su(i){if(ma?.select(i)){document.querySelectorAll(".device-label").forEach(e=>e.classList.toggle("selected",e.dataset.deviceId===i));return}ln().some(e=>e.id===i&&on(e))&&(J.selectedId=i,st?.setSelected(i,!1),bs.select(i),iu(),ip.select(i),np.showDevice(),document.querySelectorAll(".device-label").forEach(e=>e.classList.toggle("selected",e.dataset.deviceId===i)))}function R_(){let{width:i,depth:e,height:t}=J.config;ee("#width-metric").innerHTML=`${_n(i)} <small>m</small>`,ee("#depth-metric").innerHTML=`${_n(e)} <small>m</small>`,ee("#height-metric").innerHTML=`${_n(t)} <small>m</small>`,ee("#scene-caption").textContent=`${_n(i)} \xD7 ${_n(e)} m`;let n=ee("#height-warning"),s=[t>=3.5?Et("heightWarning"):null,...J.data.warnings.map(u=>jf(J.lang)[u]||Et(u))].filter(Boolean);n.hidden=!s.length,n.textContent=s.map(u=>`\u26A0 ${u}`).join("  "),ee("#long-camera-settings").hidden=!(e>12&&ee("#camera-package").value==="CV870");let r=J.data.recommendation;ee("#recommendation-note").textContent=`${Et("recommendation")}: ${r.teacher} / ${r.student} \xD7 ${r.studentQty}`,ee("#student-qty").disabled=!Vt[ee("#student-model").value].projectOnly;let a=ee("#audio-plan-summary");a||(a=document.createElement("div"),a.id="audio-plan-summary",a.style.cssText="font-size:12px;line-height:1.5;margin:10px 0",ee("#s210-controls").after(a));let o=J.localSnapshot||Ke,l=ya({width:i,depth:e,s210Count:ln().filter(u=>u.kind==="s210"&&on(u)).length,speakerCount:ln().filter(u=>u.kind==="speaker"&&on(u)).length,qnexModel:o?.qnexModel||"NDP600",audioConfig:o?.audioConfig,minimum:J.data.audioPlan.minimum});a.replaceChildren();let c=[l.a3006Required?"A3006 \xD71":"",l.purchaseFeedback?"FE-224N \xD71":"",l.purchaseAmplifiers?`EKA-415 \xD7${l.purchaseAmplifiers}`:""].filter(Boolean),h=[c.length?`${J.lang==="zh"?"\u5FC5\u914D\u91C7\u8D2D":"Required purchases"}: ${c.join(" \xB7 ")}`:"",...xp(l,o?.audioConfig,J.lang)].filter(Boolean);for(let u of h){let p=document.createElement("p");p.textContent=u,a.append(p)}}function sp(){Ko?.refresh(),hu(J.lang),document.title=Et("title"),Kf.setLanguage(J.lang),np.setLanguage(J.lang),j0(J.lang),ip.setLanguage(J.lang),ma?.setLanguage(J.lang),document.querySelectorAll("[data-i18n]").forEach(e=>{e.textContent=Et(e.dataset.i18n)}),ee("#language-button").value=J.lang;let i=jf(J.lang);if(ee("#reset-plan").textContent=i.resetPlan,ee("#reset-plan").title=i.resetPlanHint,ee("#s210-count-label").textContent=i.quantity,ee("#s210-count").value=J.s210Draft??J.data.plan.s210s.length,ee("#s210-count-status").textContent=J.s210Draft!==null?i.pending:i[J.s210Request.mode==="fixed"?"fixed":"automatic"],ee("#s210-controls").dataset.mode=J.s210Request.mode,ee("#s210-controls").dataset.pending=String(J.s210Draft!==null),Ke){let e=Ke.projectTitle;document.title=`${e} \xB7 3D`,ee('[data-i18n="title"]').textContent=`${e} \xB7 3D`,ee('[data-i18n="layoutDesc"]').textContent=i.importHint,ee("#reset-button").textContent=Et("resetImported"),ee("#imported-plan-banner").textContent=`${J.localSnapshot?i.adjusted:Et("importedPlan")} \xB7 ${e} \xB7 ${_n(J.config.width)} \xD7 ${_n(J.config.depth)} \xD7 ${_n(J.config.height)} m`}_E(),iu(),mE(),gE(),R_(),bs.render(),nu()}function Jo(){let i=ee("#camera-package").value,e=Number(ee("#room-depth").value),t=i==="CV870"&&(e>12||Vt[J.config.cameraPlan.student].projectOnly);return{width:Number(ee("#room-width").value),depth:e,height:Number(ee("#room-height-input").value),preset:ee("#preset").value,ifpSize:Number(ee("#ifp-size").value),ifpCount:Number(ee("#ifp-count").value),displaySize:ee("#display-size").value,cameraPlan:t?{teacher:ee("#teacher-model").value,student:ee("#student-model").value,studentQty:Number(ee("#student-qty").value)}:{teacher:i,student:i,studentQty:1}}}function Ms(i,{request:e=J.s210Request,commit:t=!1,reset:n=!1}={}){i={...i,cameraPlan:{...i.cameraPlan}},n&&Vt[i.cameraPlan.student].projectOnly&&(i.cameraPlan.studentQty=Jr(i.depth,i.width,i.width*i.depth,{}).studentQty);let s=Ke&&t?P0(J.localSnapshot||Ke,e,n):J.localSnapshot,r=s||Ke,a=Yn?{stageMm:Math.min(Yn.stageMm,Math.round(i.width*1e3)),screens:[]}:null,o=Xn||a,l=Ke?C0(o?{...r,version:2,displayPlan:o}:r,{geometry:!o}):A0({...i,displayPlan:Xn,s210Request:e});if(o&&!l.error){let u=l.devices.find(_=>_.kind==="station");r&&u&&(u.x=r.layout.hub.x,u.depth=r.layout.hub.y);let p=Ts(i.width,i.depth,i.height,u?{x:u.x,y:u.depth}:null,ee("#door-side").value),f=DisplayFit.fit(o,p,{fixed:!0});if(f.status==="blocked"){let _=ee("#input-error");return _.hidden=!1,_.textContent=DisplayEditor.message(f,J.lang),!1}l=up(l,o)}let c=ee("#input-error");if(c.hidden=!l.error,c.textContent=l.error?Et(l.error):"",l.error)return!1;Yn&&(c.hidden=!1,c.textContent=Et(Qo.fitIssue)),ee("#export-button").disabled=!!Yn,t&&(J.s210Request={...e},J.s210Draft=null,s&&(J.localSnapshot=s)),n&&(bs.state.settings.clear(),ee("#student-qty").value=i.cameraPlan.studentQty),J.config=i,J.data=l,bs.state.sync(ln());let h=J.mountHeights;return J.mountHeights=Object.fromEntries(ln().map(u=>[u.id,To(u,h[u.id]??u.height,i.height)])),ln().some(u=>u.id===J.selectedId&&on(u))||(J.selectedId=ln().find(on)?.id),st&&(st.visibleKinds={...J.visibility},st.updateData(l,J.mountHeights),st.furniture.visible=J.showFurniture,st.coverage.visible=J.showCoverage,st.setSelected(J.selectedId,!1),ma?.syncLayout()),bs.sync(),sp(),!0}function Qf(i){ee("#preset").value=i.preset,ee("#room-width").value=i.width,ee("#room-depth").value=i.depth,ee("#room-height-input").value=i.height,ee("#ifp-size").value=i.ifpSize,ee("#ifp-count").value=i.ifpCount,ee("#display-size").value=i.displaySize,ee("#camera-package").value=i.cameraPlan.teacher==="CV210"?"CV210":"CV870",ee("#teacher-model").value=i.cameraPlan.teacher==="CV210"?"CV870":i.cameraPlan.teacher,ee("#student-model").value=i.cameraPlan.student==="CV210"?"CV870":i.cameraPlan.student,ee("#student-qty").value=i.cameraPlan.studentQty}function ep(i){let e=st.setQuality(i),t=st.quality;ee("#render-quality").value=t,ma?.syncQuality(),ee("#quality-warning").hidden=e,document.documentElement.dataset.renderQuality=t;let n=new URL(location.href);if(n.searchParams.has("quality")||t==="high"){n.searchParams.set("quality",t);try{history.replaceState(null,"",n)}catch{}}}function vE(){ee("#render-quality").addEventListener("change",i=>ep(i.target.value)),ee("#door-side").addEventListener("change",i=>{if(Xn){let e=DisplayFit.fit(Xn,A_().room,{fixed:!0});if(e.status==="blocked"){i.target.value=st.doorSide,Ko.report(DisplayEditor.message(e,J.lang));return}}st?.setDoorSide(i.target.value),Ko?.refresh()}),ee("#export-button").addEventListener("click",()=>__({roomScene:st,state:J,devices:ln,visible:on,title:ga,t:Et})),document.querySelectorAll("[data-view]").forEach(i=>i.addEventListener("click",()=>{st?.setView(i.dataset.view),document.querySelectorAll("[data-view]").forEach(e=>e.classList.toggle("active",e===i))})),ee("#preset").addEventListener("change",i=>{let e=fh(i.target.value);e&&(ee("#room-width").value=e.width,ee("#room-depth").value=e.length,ee("#display-size").value=e.displaySize,Ms(Jo())||Qf(J.config))});for(let i of["room-width","room-depth","room-height-input"])ee(`#${i}`).addEventListener("input",()=>{ee("#preset").value="custom"});ee("#s210-count").replaceChildren(...Array.from({length:gi+1},(i,e)=>new Option(String(e),String(e)))),ee("#s210-count").value=J.data.plan.s210s.length,ee("#s210-count").addEventListener("change",i=>{J.s210Draft=Number(i.target.value),sp()}),ee("#recalculate-button").addEventListener("click",()=>Ms(Ke?J.config:Jo(),{request:J.s210Draft!==null?{mode:"fixed",count:J.s210Draft}:J.s210Request,commit:!0})),ee("#reset-plan").addEventListener("click",()=>Ms(Ke?J.config:Jo(),{request:{mode:"auto"},commit:!0,reset:!0})),ee("#apply-equipment").addEventListener("click",()=>Ms(Jo())),ee("#camera-package").addEventListener("change",()=>{ee("#long-camera-settings").hidden=!(ee("#room-depth").value>12&&ee("#camera-package").value==="CV870")}),ee("#student-model").addEventListener("change",()=>{ee("#student-qty").disabled=!Vt[ee("#student-model").value].projectOnly}),ee("#apply-recommendation").addEventListener("click",()=>{let{teacher:i,student:e,studentQty:t}=J.data.recommendation;ee("#teacher-model").value=i,ee("#student-model").value=e,ee("#student-qty").value=t,Ms(Jo())}),ee("#show-labels").addEventListener("change",i=>{J.showLabels=i.target.checked,ee("#device-labels").hidden=!J.showLabels}),ee("#show-furniture").addEventListener("change",i=>{J.showFurniture=i.target.checked,st.furniture.visible=J.showFurniture}),ee("#show-coverage").addEventListener("change",i=>{J.showCoverage=i.target.checked,st.coverage.visible=J.showCoverage}),ee("#s210-ripples").addEventListener("change",nu),ee("#animate-s210-ripples").addEventListener("change",nu),ee("#reset-button").addEventListener("click",()=>{let i=tp||{width:ph.width,depth:ph.depth,height:ph.defaultHeight,preset:"standard",ifpSize:86,ifpCount:2,displaySize:"55",cameraPlan:{...zd}};if(Xn){let e=Ts(i.width,i.depth,i.height,Ke?.layout.hub||{x:.41,y:0},"right"),t=DisplayFit.fit(Xn,e,{fixed:!0});if(t.status==="blocked"){Ko.report(DisplayEditor.message(t,J.lang));return}}ee("#door-side").value="right",st?.setDoorSide("right"),J.localSnapshot=null,J.s210Draft=null,J.s210Request=Ke?Ke.s210Request||{mode:"fixed",count:Ke.layout.s210s.length}:{mode:"auto"},J.mountHeights={},J.visibility=Ke?.displayPlan?{ifp:Ke.visibility.ifp,display:Ke.visibility.display}:{},J.selectedId="teacher-camera",bs.state.resetAll(),st?.s210Aim.clear(),J.showLabels=!0,J.showFurniture=!0,J.showCoverage=!1,ee("#device-labels").hidden=!1,Qf(i);for(let e of["show-labels","show-furniture"])ee(`#${e}`).checked=!0;for(let e of["show-coverage","s210-ripples","animate-s210-ripples"])ee(`#${e}`).checked=!1;Ms(i),st.setView("overview"),document.querySelectorAll("[data-view]").forEach(e=>e.classList.toggle("active",e.dataset.view==="overview"))})}function yE(){let i=()=>{hu(J.lang),Kf.setLanguage(J.lang),document.title=Et("title"),document.querySelectorAll("[data-i18n]").forEach(e=>{e.textContent=Et(e.dataset.i18n)}),ee("#scene-error").textContent=E_(J.lang,Qo.error,Et)};if(bp(ee("#language-button"),J.lang,e=>{J.lang=e,J.data?sp():i()}),Qo.error){let e=ee("#scene-error");i(),e.hidden=!1,ee(".room-toolbar:not(#imported-plan-banner)").hidden=!0,ee(".sidebar").hidden=!0,ee("#export-button").disabled=!0,document.documentElement.dataset.sceneReady="false";return}if(Ke){J.config=tp,document.documentElement.dataset.importedPlan="true",ee("#imported-plan-banner").hidden=!1,document.querySelectorAll(".room-controls input,.room-controls select").forEach(e=>{e.disabled=!0});for(let e of["#equipment-controls","#visibility-controls"])ee(e).hidden=!0}Qf(J.config),Ms(J.config),vE(),Ko=DisplayEditor.bind(ee("#display-layout"),A_,pE);try{st=new Dh(ee("#scene-canvas"),ee("#device-labels"),su,xE,J.data,J.mountHeights),st.setTheme(Kf.theme);for(let[e,t]of Object.entries(J.visibility))st.setVisibility(e,t);bs.sync(),ee("#render-quality").disabled=!1,ep(new URLSearchParams(location.search).get("quality")==="high"?"high":"standard"),ma=u_({room:st,sidebar:ee("#scene-sidebar"),devices:ln,visible:on,setQuality:ep,restorePlanningSelection(){st.setSelected(J.selectedId,!1),document.querySelectorAll(".device-label").forEach(e=>e.classList.toggle("selected",e.dataset.deviceId===J.selectedId))}}),ma.setLanguage(J.lang),document.documentElement.dataset.sceneReady="true"}catch(e){console.error(e);let t=ee("#scene-error");t.textContent=Et("webglError"),t.hidden=!1,document.documentElement.dataset.sceneReady="false",ee("#frame-status").textContent="WebGL"}}yE();vp(i=>{if(Yn||document.documentElement.dataset.sceneReady!=="true")throw new Error("Invalid or unavailable 3D plan");if(i.qnexModel!=="NDP600")for(let e of ln().filter(t=>t.kind==="ndp")){let t=st.models.get(e.id);t&&(t.visible=!1)}for(let e of st.models.values())e.userData.halo&&(e.userData.halo.visible=!1);return yp(st,`LCS GEN2 Hybrid Learning \xB7 ${i.qnexModel} \xB7 ${J.config.width} \xD7 ${J.config.depth} m`)});})();
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
