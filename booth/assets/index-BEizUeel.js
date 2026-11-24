(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Vc={展位空间实验室:["Booth Planner","Planificador de stands","Planificateur de stand","ブースプランナー","부스 플래너","Үзэсгэлэнгийн талбай төлөвлөгч","مخطط الجناح"],"迪拜展位 · 空间实验室":["Dubai Booth Planner","Planificador del stand de Dubái","Plan du stand de Dubaï","ドバイ展示ブースプランナー","두바이 부스 플래너","Дубайн үзэсгэлэнгийн талбайн төлөвлөгч","مخطط جناح دبي"],"迪拜展会 5×5m 三维布局与安装高度验证工具":["3D layout and mounting heights for the 5 × 5 m Dubai booth","Distribución 3D y alturas de montaje del stand de Dubái de 5 × 5 m","Agencement 3D et hauteurs de montage du stand de Dubaï de 5 × 5 m","ドバイの5 × 5 mブースの3D配置と取付高さ","두바이 5 × 5 m 부스의 3D 배치와 설치 높이","Дубайн 5 × 5 м талбайн 3D зохион байгуулалт ба угсралтын өндөр","تخطيط جناح دبي 5 × 5 م ثلاثي الأبعاد وارتفاعات التركيب"],"DUBAI / EXHIBITION PLANNER":["DUBAI / EXHIBITION PLANNER","DUBÁI / EXPOSICIÓN","DUBAÏ / EXPOSITION","ドバイ / 展示計画","두바이 / 전시 계획","ДУБАЙ / ҮЗЭСГЭЛЭН","دبي / تخطيط المعرض"],语言:["Language","Idioma","Langue","言語","언어","Хэл","اللغة"],撤销:["Undo","Deshacer","Annuler","元に戻す","실행 취소","Буцаах","تراجع"],重做:["Redo","Rehacer","Rétablir","やり直す","다시 실행","Сэргээх","إعادة"],"导出方案 ↗":["Export ↗","Exportar ↗","Exporter ↗","書き出し ↗","내보내기 ↗","Экспортлох ↗","تصدير ↗"],更多:["More","Más","Plus","その他","더 보기","Бусад","المزيد"],视图与显示设置:["Display settings","Ajustes de visualización","Réglages d’affichage","表示設定","표시 설정","Дэлгэцийн тохиргоо","إعدادات العرض"],视角:["Camera views","Vistas","Vues","視点","시점","Харах өнцөг","زوايا العرض"],空间视图:["3D view","Vista 3D","Vue 3D","3D表示","3D 보기","3D харагдац","عرض ثلاثي الأبعاد"],正视:["Front","Frontal","Face","正面","정면","Урдаас","أمامي"],俯视:["Top","Superior","Dessus","上面","평면","Дээрээс","علوي"],左墙:["Left wall","Pared izquierda","Mur gauche","左壁","왼쪽 벽","Зүүн хана","الجدار الأيسر"],右墙:["Right wall","Pared derecha","Mur droit","右壁","오른쪽 벽","Баруун хана","الجدار الأيمن"],"⌖ 全景":["⌖ Fit all","⌖ Encuadrar","⌖ Vue globale","⌖ 全体表示","⌖ 전체 보기","⌖ Бүхэлд нь","⌖ عرض الكل"],回到完整展位:["Fit the whole booth","Encuadrar todo el stand","Cadrer tout le stand","ブース全体を表示","전체 부스 보기","Талбайг бүтнээр харуулах","إظهار الجناح كاملاً"],走线:["Cable routes","Cableado","Câblage","配線","배선","Кабелийн зам","مسارات الكابلات"],走线显示范围:["Visible routes","Rutas visibles","Liaisons visibles","配線表示範囲","배선 표시 범위","Харагдах кабелиуд","نطاق عرض المسارات"],仅相关:["Related","Relacionadas","Associées","関連のみ","관련 항목","Холбоотой","المرتبطة"],全部:["All","Todas","Toutes","すべて","전체","Бүгд","الكل"],关闭:["Off","Desactivado","Masquer","非表示","끄기","Унтраах","إيقاف"],取电点:["Power outlets","Tomas de corriente","Prises électriques","電源取出口","전원 연결점","Цахилгааны залгуур","مآخذ الكهرباء"],场景与编辑:["Scene and editing","Escena y edición","Scène et édition","シーンと編集","장면 및 편집","Орчин ба засвар","المشهد والتحرير"],尺寸网格:["Measurement grid","Cuadrícula de medidas","Grille de mesure","寸法グリッド","치수 격자","Хэмжээсийн тор","شبكة القياس"],透视墙体:["See-through walls","Paredes translúcidas","Murs translucides","壁を透過表示","벽 투명 표시","Нэвт харагдах хана","جدران شفافة"],门头框架:["Entrance frame","Marco de entrada","Portique d’entrée","入口フレーム","입구 프레임","Орцны хүрээ","إطار المدخل"],"50 mm 吸附":["Snap to 50 mm","Ajuste a 50 mm","Pas de 50 mm","50 mm刻み","50 mm 단위 맞춤","50 мм алхам","محاذاة كل 50 مم"],三维展位场景:["3D booth scene","Escena 3D del stand","Scène 3D du stand","ブースの3Dシーン","3D 부스 장면","Талбайн 3D орчин","مشهد الجناح ثلاثي الأبعاد"],双击物件查看属性:["Double-click an object to inspect it","Haz doble clic para ver las propiedades","Double-cliquez sur un objet pour voir ses propriétés","物件をダブルクリックしてプロパティを表示","물체를 두 번 눌러 속성 보기","Объект дээр хоёр товшиж шинжийг харна","انقر مرتين على عنصر لعرض خصائصه"],"拖动旋转 · 滚轮缩放 · 右键平移":["Drag to orbit · Scroll to zoom · Right-drag to pan","Arrastra para girar · Rueda para zoom · Arrastra con el botón derecho para desplazar","Glisser pour pivoter · Molette pour zoomer · Glisser avec le bouton droit pour déplacer","ドラッグで回転 · ホイールでズーム · 右ドラッグで平行移動","드래그로 회전 · 휠로 확대 · 우클릭 드래그로 이동","Чирж эргүүлнэ · Дугуйгаар томруулна · Баруун товчоор чирж зөөнө","اسحب للتدوير · مرّر للتكبير · اسحب بالزر الأيمن للتحريك"],"当前浏览器无法创建 WebGL 场景。请开启浏览器硬件加速后重新打开。":["WebGL is unavailable. Enable hardware acceleration and reopen the page.","WebGL no está disponible. Activa la aceleración por hardware y vuelve a abrir la página.","WebGL est indisponible. Activez l’accélération matérielle et rouvrez la page.","WebGLを利用できません。ハードウェアアクセラレーションを有効にして開き直してください。","WebGL을 사용할 수 없습니다. 하드웨어 가속을 켠 뒤 페이지를 다시 여세요.","WebGL ажиллахгүй байна. Техник хангамжийн хурдасгалтыг идэвхжүүлээд хуудсыг дахин нээнэ үү.","تعذر تشغيل WebGL. فعّل تسريع الأجهزة ثم أعد فتح الصفحة."],"‹ 展位面板":["‹ Booth panel","‹ Panel del stand","‹ Panneau du stand","‹ ブースパネル","‹ 부스 패널","‹ Талбайн самбар","لوحة الجناح ‹"],展位面板:["Booth panel","Panel del stand","Panneau du stand","ブースパネル","부스 패널","Талбайн самбар","لوحة الجناح"],关闭展位面板:["Close booth panel","Cerrar panel","Fermer le panneau","パネルを閉じる","부스 패널 닫기","Самбарыг хаах","إغلاق لوحة الجناح"],收起展位面板:["Collapse booth panel","Contraer panel","Replier le panneau","パネルを折りたたむ","부스 패널 접기","Самбарыг хураах","طي لوحة الجناح"],展位工具:["Booth tools","Herramientas del stand","Outils du stand","ブースツール","부스 도구","Талбайн хэрэгслүүд","أدوات الجناح"],迪拜展会:["Dubai exhibition","Exposición de Dubái","Salon de Dubaï","ドバイ展示会","두바이 전시회","Дубайн үзэсгэлэн","معرض دبي"],"5 × 5 m · 墙高 4 m":["5 × 5 m · Walls 4 m high","5 × 5 m · Paredes de 4 m","5 × 5 m · Murs de 4 m","5 × 5 m · 壁高4 m","5 × 5 m · 벽 높이 4 m","5 × 5 м · Хана 4 м өндөр","5 × 5 م · ارتفاع الجدران 4 م"],物件:["Objects","Objetos","Objets","物件","물체","Объект","العناصر"],属性:["Properties","Propiedades","Propriétés","属性","속성","Шинж чанар","الخصائص"],接线:["Connections","Conexiones","Connexions","接続","연결","Холболт","التوصيلات"],检查:["Checks","Revisión","Contrôles","チェック","검사","Шалгалт","الفحص"],"搜索名称、型号或 ID":["Search name, model or ID","Buscar nombre, modelo o ID","Chercher par nom, modèle ou ID","名称、型番、IDで検索","이름, 모델 또는 ID 검색","Нэр, загвар эсвэл ID-аар хайх","ابحث بالاسم أو الطراز أو المعرّف"],搜索物件:["Search objects","Buscar objetos","Rechercher des objets","物件を検索","물체 검색","Объект хайх","بحث عن عنصر"],清空搜索:["Clear search","Borrar búsqueda","Effacer la recherche","検索をクリア","검색 지우기","Хайлтыг арилгах","مسح البحث"],场景物件:["Scene objects","Objetos de la escena","Objets de la scène","シーンの物件","장면 물체","Орчны объектууд","عناصر المشهد"],项目说明与操作:["Project notes and actions","Notas y acciones","Notes et actions","プロジェクト情報と操作","프로젝트 정보 및 작업","Төслийн тайлбар ба үйлдлүүд","ملاحظات المشروع وإجراءاته"],恢复1030施工图调整方案:["Restore Oct 30 drawing layout","Restaurar plano del 30 de octubre","Rétablir le plan du 30 octobre","10月30日の図面配置に戻す","10월 30일 도면 배치 복원","10-р сарын 30-ны зургийн байрлалыг сэргээх","استعادة مخطط 30 أكتوبر"],"在「更多 → 走线」中切换显示范围和线缆类型。":["Choose route scope and cable types in More → Cable routes.","Elige el alcance y los tipos en Más → Cableado.","Réglez la portée et les types dans Plus → Câblage.","「その他 → 配線」で表示範囲と種類を変更できます。","더 보기 → 배선에서 범위와 종류를 선택하세요.","Бусад → Кабелийн зам хэсгээс хүрээ, төрлийг сонгоно.","اختر نطاق العرض وأنواع الكابلات من المزيد ← مسارات الكابلات."],"无法自动保存，请导出方案":["Autosave unavailable. Export your layout.","No se pudo guardar. Exporta el diseño.","Enregistrement impossible. Exportez le plan.","自動保存できません。プランを書き出してください。","자동 저장이 안 됩니다. 배치를 내보내세요.","Автоматаар хадгалах боломжгүй. Байрлалаа экспортолно уу.","تعذر الحفظ التلقائي. صدّر المخطط."],保存当前布局:["Save layout","Guardar diseño","Enregistrer le plan","レイアウトを保存","배치 저장","Байрлалыг хадгалах","حفظ المخطط"],已保存到此浏览器:["Saved in this browser","Guardado en este navegador","Enregistré dans ce navigateur","このブラウザーに保存しました","이 브라우저에 저장했습니다","Энэ хөтөчид хадгаллаа","تم الحفظ في هذا المتصفح"],"保存失败，请导出方案":["Couldn’t save. Export your layout.","No se pudo guardar. Exporta el diseño.","Échec de l’enregistrement. Exportez le plan.","保存できませんでした。レイアウトを書き出してください。","저장하지 못했습니다. 배치를 내보내세요.","Хадгалж чадсангүй. Байрлалаа экспортолно уу.","تعذّر الحفظ. صدّر المخطط."],位置:["Position","Posición","Position","位置","위치","Байрлал","الموضع"],"左右位置 X":["X position","Posición X","Position X","左右位置 X","좌우 위치 X","X байрлал","الموضع X"],"前后位置 Z":["Z position","Posición Z","Position Z","前後位置 Z","앞뒤 위치 Z","Z байрлал","الموضع Z"],下沿离地:["Bottom above floor","Altura del borde inferior","Hauteur du bord inférieur","床から下端まで","바닥에서 하단까지","Доод ирмэгийн өндөр","ارتفاع الحافة السفلية"],"↓ 下移 50 mm":["↓ Lower 50 mm","↓ Bajar 50 mm","↓ Descendre de 50 mm","↓ 50 mm下げる","↓ 50 mm 내리기","↓ 50 мм доош","↓ خفض 50 مم"],"↑ 上移 50 mm":["↑ Raise 50 mm","↑ Subir 50 mm","↑ Monter de 50 mm","↑ 50 mm上げる","↑ 50 mm 올리기","↑ 50 мм дээш","↑ رفع 50 مم"],上沿离地:["Top above floor","Altura del borde superior","Hauteur du bord supérieur","床から上端まで","바닥에서 상단까지","Дээд ирмэгийн өндөр","ارتفاع الحافة العلوية"],外形尺寸:["Dimensions","Dimensiones","Dimensions","外形寸法","외형 치수","Овор хэмжээ","الأبعاد"],宽度:["Width","Ancho","Largeur","幅","너비","Өргөн","العرض"],高度:["Height","Altura","Hauteur","高さ","높이","Өндөр","الارتفاع"],"厚度 / 深度":["Thickness / depth","Grosor / fondo","Épaisseur / profondeur","厚み / 奥行き","두께 / 깊이","Зузаан / гүн","السماكة / العمق"],"调整开口高度 ↕":["Resize opening ↕","Ajustar abertura ↕","Ajuster l’ouverture ↕","開口高を調整 ↕","개구부 높이 조정 ↕","Нүхний өндрийг өөрчлөх ↕","ضبط ارتفاع الفتحة ↕"],"拖动顶部绿色手柄，下沿保持不变。":["Drag the green top handle. The bottom stays fixed.","Arrastra el tirador verde superior. El borde inferior queda fijo.","Glissez la poignée verte du haut. Le bord inférieur reste fixe.","上の緑のハンドルをドラッグします。下端は固定されます。","위쪽 녹색 핸들을 드래그하세요. 하단은 고정됩니다.","Дээд ногоон бариулыг чирнэ. Доод ирмэг хэвээр үлдэнэ.","اسحب المقبض الأخضر العلوي. تبقى الحافة السفلية ثابتة."],参数依据与操作说明:["Sources and editing notes","Fuentes y edición","Sources et consignes","数値の根拠と操作","근거 및 조작 방법","Эх сурвалж ба заавар","المصادر وتعليمات التحرير"],"数值输入单位为毫米；50 mm 吸附仅作用于拖动。":["Enter values in mm. The 50 mm snap applies when dragging.","Introduce valores en mm. El ajuste de 50 mm se aplica al arrastrar.","Saisissez les valeurs en mm. Le pas de 50 mm s’applique au glissement.","数値入力はmm単位です。50 mm刻みはドラッグ時のみ有効です。","수치는 mm 단위입니다. 50 mm 맞춤은 드래그할 때 적용됩니다.","Утгыг мм-ээр оруулна. Чирэх үед 50 мм алхам үйлчилнэ.","أدخل القيم بالملليمتر. تنطبق محاذاة 50 مم عند السحب."],附属物件:["Attached object","Objeto asociado","Objet rattaché","付属物件","부속 물체","Дагалдах объект","عنصر تابع"],地面物件:["Floor-standing","De suelo","Au sol","床置き","바닥 설치","Шалан дээр","مثبّت على الأرض"],壁挂物件:["Wall-mounted","De pared","Mural","壁掛け","벽면 설치","Хананд бэхэлсэн","مثبّت على الجدار"],"含暂估 / 待核对":["Estimate / to be confirmed","Estimado / por confirmar","Estimation / à confirmer","概算 / 要確認","추정 / 확인 필요","Тооцоо / нягтлах","تقديري / قيد التأكيد"],"跟随 {name}":["Moves with {name}","Se mueve con {name}","Se déplace avec {name}","{name} に追従","{name}에 따라 이동","{name} дагаж хөдөлнө","يتحرك مع {name}"],"可在台面范围内移动。":["Movable on the work surface.","Puede moverse sobre la encimera.","Déplaçable sur le plateau.","天板の範囲内で移動できます。","상판 범위에서 이동할 수 있습니다.","Тавцангийн хүрээнд зөөж болно.","يمكن تحريكه ضمن سطح العمل."],"位置与尺寸由附属关系确定。":["Its attachment determines its position and size.","Su montaje determina la posición y el tamaño.","La fixation définit sa position et ses dimensions.","位置と寸法は取付関係で決まります。","부착 관계에 따라 위치와 크기가 정해집니다.","Бэхэлгээ нь байрлал, хэмжээг тодорхойлно.","يحدد التثبيت موضعه وحجمه."],"开口可沿墙移动、升降；调整高度保持下沿不变。":["Slide or lift the opening along the wall. Resizing keeps its lower edge fixed.","Desplaza la abertura por la pared. Al cambiar su altura se fija el borde inferior.","Déplacez l’ouverture le long du mur. Son bord inférieur reste fixe au redimensionnement.","開口は壁面上を移動できます。高さ調整時は下端が固定されます。","벽을 따라 개구부를 움직일 수 있습니다. 높이 조정 시 하단은 고정됩니다.","Нүхийг хана дагуу зөөж болно. Өндөр өөрчлөхөд доод ирмэг тогтмол байна.","حرّك الفتحة على الجدار. عند تغيير الارتفاع تبقى الحافة السفلية ثابتة."],"附属设备随所属物件更新位置。":["Attached equipment follows its parent object.","El equipo se mueve con el objeto principal.","L’équipement suit son objet parent.","付属機器は親物件に追従します。","부속 장비는 상위 물체를 따라갑니다.","Дагалдах төхөөрөмж үндсэн объектоо дагана.","يتحرك الجهاز التابع مع العنصر الرئيسي."],"物件保持落地，拖动彩色轴沿地面移动。":["Drag a colored axis to move the object along the floor.","Arrastra un eje de color para moverlo por el suelo.","Glissez un axe coloré pour déplacer l’objet au sol.","色付きの軸をドラッグして床面上で移動します。","색상 축을 드래그해 바닥을 따라 이동하세요.","Өнгөт тэнхлэгийг чирч шалан дээгүүр зөөнө.","اسحب محوراً ملوناً لتحريك العنصر على الأرض."],"物件保持贴墙，拖动彩色轴沿墙移动或升降。":["Drag a colored axis to slide or lift the object along the wall.","Arrastra un eje de color para moverlo por la pared.","Glissez un axe coloré pour déplacer l’objet sur le mur.","色付きの軸をドラッグして壁面上で移動します。","색상 축을 드래그해 벽면을 따라 이동하세요.","Өнгөт тэнхлэгийг чирч хана дагуу зөөнө.","اسحب محوراً ملوناً لتحريك العنصر على الجدار."],"{n} 条关联线路":["Connections: {n}","Conexiones: {n}","Connexions : {n}","関連配線：{n} 本","관련 배선 {n}개","Холболт: {n}","عدد التوصيلات: {n}"],视频:["Video","Vídeo","Vidéo","映像","영상","Видео","فيديو"],供电:["Power supply","Alimentación","Alimentation","給電","전원 공급","Тэжээл","تغذية كهربائية"],网络:["Network","Red","Réseau","ネットワーク","네트워크","Сүлжээ","شبكة"],"↓ 接至":["↓ To","↓ A","↓ Vers","↓ 接続先","↓ 연결 대상","↓ Холбох","↓ إلى"],当前物件未配置关联线路:["No connections configured for this object.","Este objeto no tiene conexiones configuradas.","Aucune connexion configurée pour cet objet.","この物件に関連配線はありません。","이 물체에 설정된 배선이 없습니다.","Энэ объектод холболт тохируулаагүй.","لا توجد توصيلات معدّة لهذا العنصر."],"{n} 项提醒":["Alerts: {n}","Avisos: {n}","Alertes : {n}","注意：{n} 件","알림 {n}건","Анхааруулга: {n}","عدد التنبيهات: {n}"],暂无提醒:["No alerts","Sin avisos","Aucune alerte","注意事項なし","알림 없음","Анхааруулгагүй","لا توجد تنبيهات"],当前物件:["Selected object","Objeto seleccionado","Objet sélectionné","選択中の物件","선택한 물체","Сонгосон объект","العنصر المحدد"],"当前物件没有空间提醒。":["No clearance alerts for this object.","Sin avisos de espacio para este objeto.","Aucune alerte d’encombrement pour cet objet.","この物件に干渉の警告はありません。","이 물체에 공간 경고가 없습니다.","Энэ объектод зай талбайн анхааруулга алга.","لا توجد تنبيهات تتعلق بمساحة هذا العنصر."],全场其他提醒:["Elsewhere in the booth","Otros avisos del stand","Autres alertes du stand","ブース内のその他の注意","부스 내 다른 알림","Талбайн бусад анхааруулга","تنبيهات أخرى في الجناح"],"仅按简化包围盒检查，部分附属物不参与检测；不代表承重、支架、走线或施工验收。":["Checks use bounding boxes and omit some attachments. Load capacity, brackets, cabling and installation require separate review.","La comprobación usa cajas envolventes y omite algunos accesorios. Revisa aparte cargas, soportes, cableado e instalación.","Le contrôle utilise des volumes simplifiés et exclut certains accessoires. Vérifiez séparément les charges, supports, câbles et travaux.","簡易外形で確認し、一部の付属品は対象外です。耐荷重、金具、配線、施工は別途確認してください。","단순 경계 상자로 검사하며 일부 부속품은 제외합니다. 하중, 브래킷, 배선, 시공은 별도로 확인하세요.","Хялбаршуулсан хүрээгээр шалгаж, зарим дагалдах хэрэгслийг хассан. Даац, бэхэлгээ, кабель, угсралтыг тусад нь шалгана.","يستخدم الفحص حدوداً مبسطة ويستثني بعض الملحقات. تُراجع الأحمال والحوامل والتمديدات والتركيب بصورة منفصلة."],与:["and","y","et","と","및","ба","و"],占用空间重叠:["overlap","se solapan","se chevauchent","が干渉しています","공간이 겹칩니다","давхцаж байна","يتداخلان"],超出展位边界:["extends outside the booth","sobrepasa el límite del stand","dépasse des limites du stand","がブースの外にはみ出しています","부스 경계를 벗어납니다","талбайн хилээс хэтэрсэн","يتجاوز حدود الجناح"],仅相关线路:["Related routes only","Solo rutas relacionadas","Liaisons associées uniquement","関連配線のみ","관련 배선만","Зөвхөн холбоотой шугам","المسارات المرتبطة فقط"],全部线路:["All routes","Todas las rutas","Toutes les liaisons","すべての配線","모든 배선","Бүх шугам","كل المسارات"],走线已关闭:["Routes hidden","Rutas ocultas","Liaisons masquées","配線は非表示","배선 숨김","Шугамыг нуусан","المسارات مخفية"],"虚线为隐藏段 · 接口及孔径示意":["Dashed lines are concealed runs. Ports and holes are schematic.","Las líneas discontinuas son tramos ocultos. Puertos y orificios son orientativos.","Les pointillés indiquent les passages cachés. Ports et perçages sont indicatifs.","破線は隠蔽区間です。端子と穴径は参考です。","점선은 매립 구간입니다. 단자와 구멍은 예시입니다.","Тасархай зураас нь далд хэсэг. Порт, нүхийг тоймлон үзүүлэв.","الخطوط المتقطعة مسارات مخفية. المنافذ والفتحات توضيحية."],"没有匹配的物件，请尝试型号或名称。":["No matches. Try a model or name.","Sin resultados. Prueba un modelo o nombre.","Aucun résultat. Essayez un modèle ou un nom.","該当なし。型番や名称で検索してください。","결과가 없습니다. 모델이나 이름으로 검색하세요.","Олдсонгүй. Загвар эсвэл нэрээр хайна уу.","لا توجد نتائج. جرّب الطراز أو الاسم."],"展开 {name} 的附属物件":["Expand attachments for {name}","Ver accesorios de {name}","Afficher les accessoires de {name}","{name} の付属物件を展開","{name}의 부속 물체 펼치기","{name} дагалдах объектыг дэлгэх","عرض ملحقات {name}"],可旋转和调整物件的展位三维视图:["Interactive 3D booth","Stand 3D interactivo","Stand 3D interactif","操作可能な3Dブース","대화형 3D 부스","Интерактив 3D талбай","جناح تفاعلي ثلاثي الأبعاد"],已按展位边界或尺寸范围调整数值:["Value adjusted to the booth or size limits.","Valor ajustado a los límites del stand o de tamaño.","Valeur ajustée aux limites du stand ou des dimensions.","ブースの境界または寸法範囲に合わせました。","부스 경계 또는 치수 범위에 맞춰 조정했습니다.","Утгыг талбай, хэмжээний хязгаарт тааруулав.","عُدّلت القيمة لتلائم حدود الجناح أو الأبعاد."],"已恢复图纸布局，可用撤销返回。":["Drawing layout restored. Undo to go back.","Plano restaurado. Puedes deshacerlo.","Plan rétabli. Annulez pour revenir en arrière.","図面の配置に戻しました。元に戻すことができます。","도면 배치를 복원했습니다. 실행 취소할 수 있습니다.","Зургийн байрлалыг сэргээв. Буцаах боломжтой.","تمت استعادة المخطط. يمكنك التراجع."],"已导出方案，包含全部位置和尺寸。":["Layout exported with all positions and dimensions.","Diseño exportado con posiciones y dimensiones.","Plan exporté avec les positions et dimensions.","全位置と寸法を含むプランを書き出しました。","모든 위치와 치수를 포함한 배치를 내보냈습니다.","Бүх байрлал, хэмжээг экспортлов.","صُدّر المخطط بكل المواضع والأبعاد."],"拖动绿色手柄调整高度；下沿固定":["Drag the green handle to resize. The bottom stays fixed.","Arrastra el tirador verde. El borde inferior queda fijo.","Glissez la poignée verte. Le bord inférieur reste fixe.","緑のハンドルで高さを調整します。下端は固定です。","녹색 핸들로 높이를 조정하세요. 하단은 고정됩니다.","Ногоон бариулаар өндрийг өөрчилнө. Доод ирмэг тогтмол.","اسحب المقبض الأخضر لضبط الارتفاع. الحافة السفلية ثابتة."],后墙:["Back wall","Pared trasera","Mur du fond","後壁","뒷벽","Арын хана","الجدار الخلفي"],中央:["Center","Centro","Centre","中央","중앙","Төв","الوسط"],门头:["Entrance","Entrada","Entrée","入口","입구","Орц","المدخل"],左侧:["Left side","Lado izquierdo","Côté gauche","左側","왼쪽","Зүүн тал","الجانب الأيسر"],右侧:["Right side","Lado derecho","Côté droit","右側","오른쪽","Баруун тал","الجانب الأيمن"],展示柜:["Display cabinet","Vitrina","Meuble d’exposition","展示台","전시 수납장","Үзүүлэнгийн шүүгээ","خزانة عرض"],设备托板:["Equipment shelf","Estante para equipos","Tablette d’équipement","機器棚","장비 선반","Төхөөрөмжийн тавиур","رف الأجهزة"],检修口:["Access opening","Registro","Trappe de visite","点検口","점검구","Үзлэгийн нээлхий","فتحة صيانة"],左柜顶:["Left cabinet top","Sobre el mueble izquierdo","Dessus du meuble gauche","左展示台の天板","왼쪽 수납장 상판","Зүүн шүүгээний тавцан","سطح الخزانة اليسرى"],右柜顶:["Right cabinet top","Sobre el mueble derecho","Dessus du meuble droit","右展示台の天板","오른쪽 수납장 상판","Баруун шүүгээний тавцан","سطح الخزانة اليمنى"],左柜内:["Inside left cabinet","Dentro del mueble izquierdo","Dans le meuble gauche","左展示台内","왼쪽 수납장 내부","Зүүн шүүгээний дотор","داخل الخزانة اليسرى"],右柜内:["Inside right cabinet","Dentro del mueble derecho","Dans le meuble droit","右展示台内","오른쪽 수납장 내부","Баруун шүүгээний дотор","داخل الخزانة اليمنى"],笔记本:["Laptop","Portátil","Ordinateur portable","ノートPC","노트북","Зөөврийн компьютер","حاسوب محمول"],排插:["Power strip","Regleta","Multiprise","電源タップ","멀티탭","Олон залгуур","مشترك كهربائي"],后墙检修口:["Back wall access opening","Registro trasero","Trappe du mur du fond","後壁の点検口","뒷벽 점검구","Арын ханын үзлэгийн нээлхий","فتحة صيانة الجدار الخلفي"],下层板:["Lower shelf","Estante inferior","Tablette inférieure","下段棚","하단 선반","Доод тавиур","الرف السفلي"],内嵌齐平插座:["Flush socket","Toma empotrada","Prise encastrée","埋込コンセント","매립 콘센트","Далд суурилуулсан залгуур","مقبس غاطس"],门头右外框:["Right entrance upright","Montante derecho de entrada","Montant droit de l’entrée","入口右側の支柱","입구 오른쪽 기둥","Орцны баруун багана","قائم المدخل الأيمن"],左柜:["Left cabinet","Mueble izquierdo","Meuble gauche","左展示台","왼쪽 수납장","Зүүн шүүгээ","الخزانة اليسرى"],"PoE交换机（型号待确认）":["PoE switch (model pending)","Switch PoE (modelo por confirmar)","Switch PoE (modèle à confirmer)","PoEスイッチ（型番未確認）","PoE 스위치(모델 미확정)","PoE свич (загвар тодорхойгүй)","مبدّل PoE (الطراز قيد التأكيد)"],路由器:["Router","Router","Routeur","ルーター","라우터","Чиглүүлэгч","موجّه"],服务器:["Server","Servidor","Serveur","サーバー","서버","Сервер","خادم"],SL100下方:["Under SL100","Debajo de SL100","Sous le SL100","SL100の下","SL100 하부","SL100 доор","أسفل SL100"],英规排插:["UK power strip","Regleta británica","Multiprise britannique","英国規格の電源タップ","영국식 멀티탭","Британийн олон залгуур","مشترك بمقابس بريطانية"],穿线孔:["Cable entry","Paso de cable","Passage de câble","配線穴","배선 구멍","Кабелийн нүх","فتحة تمرير الكابل"],"PD150（上）":["PD150 (upper)","PD150 (superior)","PD150 (haut)","PD150（上段）","PD150(상단)","PD150 (дээд)","PD150 (علوي)"],"PD150（下）":["PD150 (lower)","PD150 (inferior)","PD150 (bas)","PD150（下段）","PD150(하단)","PD150 (доод)","PD150 (سفلي)"],"LDP100（内置OPS）":["LDP100 (built-in OPS)","LDP100 (OPS integrado)","LDP100 (OPS intégré)","LDP100（OPS内蔵）","LDP100(OPS 내장)","LDP100 (суурилуулсан OPS)","LDP100 (وحدة OPS مدمجة)"],电源:["Power","Alimentación","Alimentation","電源","전원","Тэжээл","الكهرباء"],"HDMI（视频）":["HDMI (video)","HDMI (vídeo)","HDMI (vidéo)","HDMI（映像）","HDMI(영상)","HDMI (видео)","HDMI (فيديو)"],"IR 控制线（发射器）":["IR emitter","Emisor IR","Émetteur IR","IR送信機","IR 송신기","IR дамжуулагч","مرسل الأشعة تحت الحمراء"],"Relay 控制线":["Relay control","Control de relé","Commande relais","リレー制御","릴레이 제어","Релений удирдлага","تحكم المرحّل"],"ENTRANCE  /  入口":["ENTRANCE","ENTRADA","ENTRÉE","入口","입구","ОРЦ","المدخل"],墙内:["In wall","En pared","Dans le mur","壁内","벽 내부","Ханан дотор","داخل الجدار"],PoE来源待确认:["PoE source unconfirmed","Origen PoE por confirmar","Source PoE à confirmer","PoE給電元は要確認","PoE 공급원 미확정","PoE эх үүсвэрийг нягтална","مصدر PoE قيد التأكيد"],"地板下 · HDMI × 2 + USB × 2":["Underfloor · HDMI × 2 + USB × 2","Bajo el suelo · HDMI × 2 + USB × 2","Sous le plancher · HDMI × 2 + USB × 2","床下 · HDMI × 2 + USB × 2","바닥 아래 · HDMI × 2 + USB × 2","Шалан доор · HDMI × 2 + USB × 2","تحت الأرضية · HDMI × 2 + USB × 2"],"柜内排插 / 台面笔记本":["Cabinet power strip / laptop","Regleta del mueble / portátil","Multiprise du meuble / portable","展示台内タップ / ノートPC","수납장 멀티탭 / 노트북","Шүүгээний залгуур / зөөврийн компьютер","مشترك الخزانة / الحاسوب المحمول"],"柜内排插 / LDP100":["Cabinet power strip / LDP100","Regleta del mueble / LDP100","Multiprise du meuble / LDP100","展示台内タップ / LDP100","수납장 멀티탭 / LDP100","Шүүгээний залгуур / LDP100","مشترك الخزانة / LDP100"],"主屏与柜体按图纸标注，其余设备含暂估占位。单位 mm。":["Main displays and cabinets follow the drawing. Other equipment includes estimates. Units: mm.","Las pantallas principales y los muebles siguen el plano. Otros equipos incluyen estimaciones. Unidad: mm.","Écrans principaux et meubles suivent le plan. Certains autres équipements sont estimés. Unité : mm.","主画面と展示台は図面準拠です。他の機器は概算を含みます。単位：mm。","주 화면과 수납장은 도면 기준이며 다른 장비는 추정치를 포함합니다. 단위: mm.","Үндсэн дэлгэц, шүүгээг зургийн дагуу байрлуулав. Бусад төхөөрөмжид ойролцоо утга орсон. Нэгж: мм.","الشاشات الرئيسية والخزائن وفق الرسم. تتضمن بقية الأجهزة قيماً تقديرية. الوحدة مم."],"外轮廓 5,000 × 5,000，墙厚 200，侧墙延伸至入口。门头为简化示意。":["Footprint 5,000 × 5,000, wall thickness 200. Side walls reach the entrance. The entrance frame is schematic.","Planta de 5.000 × 5.000, paredes de 200. Las paredes laterales llegan a la entrada. El marco es esquemático.","Emprise de 5 000 × 5 000, murs de 200. Les murs latéraux vont jusqu’à l’entrée. Portique schématique.","外寸5,000 × 5,000、壁厚200。側壁は入口まで延びます。入口フレームは略図です。","외곽 5,000 × 5,000, 벽 두께 200. 측벽은 입구까지 이어집니다. 입구 프레임은 개략도입니다.","Гадна хэмжээ 5,000 × 5,000, ханын зузаан 200. Хажуу хана орц хүрнэ. Орцны хүрээг тоймлов.","الأبعاد الخارجية 5,000 × 5,000 وسماكة الجدار 200. يمتد الجداران الجانبيان إلى المدخل وإطاره توضيحي."],"地面中心为原点，X 左右、Z 前后，离地高度以下沿为准。测量不含支架与线缆。":["Origin at floor center. X runs left to right and Z front to back. Height uses the lower edge. Measurements exclude brackets and cables.","Origen en el centro del suelo. X es lateral y Z longitudinal. La altura se mide al borde inferior. No incluye soportes ni cables.","Origine au centre du sol. X est latéral et Z longitudinal. Hauteur mesurée au bord inférieur, hors supports et câbles.","原点は床中央。Xは左右、Zは前後。高さは下端基準で、金具とケーブルは含みません。","바닥 중앙이 원점입니다. X는 좌우, Z는 앞뒤이며 높이는 하단 기준입니다. 브래킷과 케이블은 제외합니다.","Шалны төв нь эхлэл. X зүүн-баруун, Z урд-хойд. Өндрийг доод ирмэгээр хэмжинэ. Бэхэлгээ, кабель ороогүй.","نقطة الأصل وسط الأرضية. المحور X عرضي وZ طولي. يُقاس الارتفاع حتى الحافة السفلية دون الحوامل والكابلات."],"宽高、离地高度按图纸；厚度暂估":["Width, height and mounting height from drawing. Thickness estimated.","Ancho, alto y altura de montaje según plano. Grosor estimado.","Largeur, hauteur et pose selon plan. Épaisseur estimée.","幅・高さ・取付高は図面準拠。厚みは概算。","너비, 높이, 설치 높이는 도면 기준. 두께는 추정.","Өргөн, өндөр, угсралтын өндөр зургийн дагуу. Зузаан ойролцоо.","العرض والارتفاع وارتفاع التركيب حسب الرسم. السماكة تقديرية."],"宽高、离地高度按图纸；沿墙位置示意":["Width, height and mounting height from drawing. Position along wall is indicative.","Ancho, alto y altura de montaje según plano. Posición en pared orientativa.","Largeur, hauteur et pose selon plan. Position sur le mur indicative.","幅・高さ・取付高は図面準拠。壁に沿う位置は参考。","너비, 높이, 설치 높이는 도면 기준. 벽면 위치는 예시.","Өргөн, өндөр, угсралтын өндөр зургийн дагуу. Ханан дээрх байрлал тойм.","العرض والارتفاع وارتفاع التركيب حسب الرسم. الموضع على الجدار توضيحي."],"宽度按图纸；高度、厚度与位置暂估":["Width from drawing. Height, thickness and position estimated.","Ancho según plano. Alto, grosor y posición estimados.","Largeur selon plan. Hauteur, épaisseur et position estimées.","幅は図面準拠。高さ・厚み・位置は概算。","너비는 도면 기준. 높이, 두께, 위치는 추정.","Өргөн зургийн дагуу. Өндөр, зузаан, байрлал ойролцоо.","العرض حسب الرسم. الارتفاع والسماكة والموضع تقديرية."],"{size} 按1030图纸":["{size} per Oct 30 drawing.","{size} según plano del 30 de octubre.","{size} selon le plan du 30 octobre.","10月30日の図面による {size}。","10월 30일 도면 기준 {size}.","10-р сарын 30-ны зургаар {size}.","{size} وفق رسم 30 أكتوبر."],"750 × 30 × 200 mm 按图纸；高度示意":["750 × 30 × 200 mm per drawing. Mounting height indicative.","750 × 30 × 200 mm según plano. Altura de montaje orientativa.","750 × 30 × 200 mm selon plan. Hauteur de pose indicative.","750 × 30 × 200 mmは図面準拠。取付高は参考。","750 × 30 × 200 mm는 도면 기준. 설치 높이는 예시.","750 × 30 × 200 мм зургийн дагуу. Суурилуулах өндөр тойм.","750 × 30 × 200 مم حسب الرسم. ارتفاع التركيب توضيحي."],"占位模型：尺寸暂估":["Placeholder with estimated dimensions.","Modelo provisional con dimensiones estimadas.","Modèle provisoire aux dimensions estimées.","仮モデル。寸法は概算。","임시 모델. 치수는 추정.","Түр загвар. Хэмжээ ойролцоо.","نموذج مؤقت بأبعاد تقديرية."],"占位模型：尺寸与位置暂估":["Placeholder with estimated dimensions and position.","Modelo provisional, dimensiones y posición estimadas.","Modèle provisoire, dimensions et position estimées.","仮モデル。寸法と位置は概算。","임시 모델. 치수와 위치는 추정.","Түр загвар. Хэмжээ, байрлал ойролцоо.","نموذج مؤقت بأبعاد وموضع تقديريين."],"按用户最新要求：侧墙1500×450，主墙500×250；下沿150 mm，侧墙柜背须贯通，工厂修图待确认":["Requested side openings 1500 × 450, back opening 500 × 250, lower edge 150 mm. Side cabinets need through access. Factory drawing pending.","Aberturas laterales de 1500 × 450, trasera de 500 × 250, borde inferior a 150 mm. Se requiere acceso por detrás de los muebles. Plano de fábrica pendiente.","Ouvertures latérales demandées de 1500 × 450, arrière de 500 × 250, bord bas à 150 mm. Passage requis au dos des meubles latéraux. Plan usine à confirmer.","指定開口は側壁1500 × 450、後壁500 × 250、下端150 mm。側面展示台の背面を貫通させます。工場図面は要確認。","요청 개구부는 측벽 1500 × 450, 뒷벽 500 × 250, 하단 150 mm입니다. 측면 수납장 뒤를 관통해야 하며 공장 도면은 확인 중입니다.","Хажуу нээлхий 1500 × 450, арынх 500 × 250, доод ирмэг 150 мм. Хажуу шүүгээний ард нэвт гарах шаардлагатай. Үйлдвэрийн зургийг нягтална.","الفتحات المطلوبة جانبياً 1500 × 450 وخلفياً 500 × 250، والحافة السفلى عند 150 مم. يلزم ممر نافذ خلف الخزائن الجانبية. رسم المصنع قيد التأكيد."],"笔记本占位；位置相对于柜顶":["Laptop placeholder, positioned relative to the cabinet top.","Portátil provisional, posición relativa a la encimera.","Portable provisoire, position relative au plateau.","ノートPCの仮配置。展示台天板が位置の基準。","임시 노트북 모델. 수납장 상판 기준 위치.","Зөөврийн компьютерийн түр загвар. Байрлал нь тавцангаас хамаарна.","نموذج للحاسوب المحمول. موضعه نسبي لسطح الخزانة."],"柜内电源终点，随柜体移动":["Power endpoint inside the cabinet. Moves with the cabinet.","Punto de alimentación interior. Se mueve con el mueble.","Arrivée électrique intérieure, solidaire du meuble.","展示台内の電源終端。展示台に追従。","수납장 내부 전원 종단. 수납장과 함께 이동.","Шүүгээ доторх тэжээлийн төгсгөл. Шүүгээг дагаж хөдөлнө.","نقطة التغذية داخل الخزانة وتتحرك معها."],"照片估算650 × 150 × 500 mm；内置OPS；接口及深度待实测":["650 × 150 × 500 mm estimated from photos. Built-in OPS. Verify ports and depth on site.","650 × 150 × 500 mm estimados en fotos. OPS integrado. Verificar puertos y fondo.","650 × 150 × 500 mm estimés sur photo. OPS intégré. Ports et profondeur à vérifier sur place.","写真による概算650 × 150 × 500 mm。OPS内蔵。端子と奥行きは要実測。","사진 추정 650 × 150 × 500 mm. OPS 내장. 포트와 깊이는 실측 필요.","Зургаар 650 × 150 × 500 мм гэж тооцов. OPS суурилсан. Порт, гүнийг газар дээр шалгана.","تقدير من الصور 650 × 150 × 500 مم مع OPS مدمج. تُراجع المنافذ والعمق ميدانياً."],"后墙两块 IFP 电源终点":["Power endpoint for both back wall IFPs.","Alimentación de las dos IFP traseras.","Arrivée électrique des deux IFP du fond.","後壁のIFP 2台の給電先。","뒷벽 IFP 두 대의 전원 종단.","Арын ханын хоёр IFP-ийн тэжээлийн цэг.","نقطة تغذية شاشتي IFP على الجدار الخلفي."],"1000 × 30 × 200；与上层板净距350 mm":["1000 × 30 × 200, with 350 mm clearance to the upper shelf.","1000 × 30 × 200, separación libre de 350 mm al estante superior.","1000 × 30 × 200, espace libre de 350 mm jusqu’à la tablette supérieure.","1000 × 30 × 200。上段棚との有効間隔350 mm。","1000 × 30 × 200. 상단 선반까지 순 간격 350 mm.","1000 × 30 × 200. Дээд тавиур хүртэлх цэвэр зай 350 мм.","1000 × 30 × 200، والخلوص إلى الرف العلوي 350 مم."],"外形暂估；墙内齐平插座，接口待确认":["Dimensions estimated. Flush wall socket. Connector pending confirmation.","Dimensiones estimadas. Toma empotrada. Conector por confirmar.","Dimensions estimées. Prise murale encastrée. Connecteur à confirmer.","外形は概算。壁に埋込コンセント。端子は要確認。","외형은 추정. 매립 콘센트 사용. 커넥터 확인 필요.","Овор ойролцоо. Хананд далд залгууртай. Холбогчийг нягтална.","الأبعاد تقديرية. مقبس غاطس في الجدار، والموصل قيد التأكيد."],"墙面齐平插座；位置及实际供电待核对":["Flush wall socket. Verify its location and power feed.","Toma empotrada. Verificar ubicación y alimentación.","Prise encastrée. Position et alimentation à vérifier.","壁面埋込コンセント。位置と電源系統は要確認。","벽면 매립 콘센트. 위치 및 전원 인입 확인 필요.","Далд залгуур. Байрлал, тэжээлийг нягтална.","مقبس غاطس بالجدار. يُراجع الموضع ومصدر الكهرباء."],"外形及高度示意，孔径待确认":["Outline and height indicative. Hole diameter unconfirmed.","Forma y altura orientativas. Diámetro por confirmar.","Forme et hauteur indicatives. Diamètre à confirmer.","外形と高さは参考。穴径は要確認。","외형과 높이는 예시. 구멍 지름은 확인 필요.","Овор, өндөр тойм. Нүхний диаметрийг нягтална.","الشكل والارتفاع توضيحيان. قطر الفتحة قيد التأكيد."],"下沿1400 mm；尺寸暂估；PoE线终点待确认":["Lower edge 1400 mm. Dimensions estimated. PoE endpoint unconfirmed.","Borde inferior a 1400 mm. Dimensiones estimadas. Destino PoE por confirmar.","Bord bas à 1400 mm. Dimensions estimées. Terminaison PoE à confirmer.","下端1400 mm。寸法は概算。PoE終端は要確認。","하단 1400 mm. 치수 추정. PoE 종단 확인 필요.","Доод ирмэг 1400 мм. Хэмжээ ойролцоо. PoE төгсгөлийг нягтална.","الحافة السفلية عند 1400 مم. الأبعاد تقديرية ونقطة توصيل PoE قيد التأكيد."],PoE能力和实际端口待确认:["PoE capability and ports to be confirmed.","Capacidad PoE y puertos por confirmar.","Capacité PoE et ports à confirmer.","PoE給電能力と端子は要確認。","PoE 용량과 포트 확인 필요.","PoE боломж ба портыг нягтална.","قدرة PoE والمنافذ قيد التأكيد."],"型号、端口及联网来源待确认":["Model, ports and network uplink to be confirmed.","Modelo, puertos y enlace de red por confirmar.","Modèle, ports et liaison réseau à confirmer.","型番、端子、ネットワーク接続元は要確認。","모델, 포트, 업링크 확인 필요.","Загвар, порт, сүлжээний эх үүсвэрийг нягтална.","الطراز والمنافذ ومصدر الاتصال بالشبكة قيد التأكيد."],"型号、数量及服务待确认":["Model, quantity and services to be confirmed.","Modelo, cantidad y servicios por confirmar.","Modèle, quantité et services à confirmer.","型番、数量、サービスは要確認。","모델, 수량, 서비스 확인 필요.","Загвар, тоо, үйлчилгээг нягтална.","الطراز والعدد والخدمات قيد التأكيد."],"SL100专用取电点：位置示意，实际接入待确认":["Dedicated SL100 power outlet. Position indicative, feed unconfirmed.","Toma exclusiva del SL100. Posición orientativa, alimentación por confirmar.","Prise dédiée au SL100. Position indicative, alimentation à confirmer.","SL100専用電源。位置は参考。実際の引込先は要確認。","SL100 전용 전원. 위치는 예시이며 실제 인입 확인 필요.","SL100 тусгай тэжээл. Байрлал тойм, холболтыг нягтална.","نقطة كهرباء مخصصة لـ SL100. الموضع توضيحي والتغذية قيد التأكيد."],"孔径80 mm为示意，设备接口和施工位置待确认":["80 mm diameter is illustrative. Verify device ports and drilling location.","Diámetro de 80 mm orientativo. Verificar puertos y punto de perforación.","Diamètre de 80 mm indicatif. Connectique et emplacement du perçage à vérifier.","穴径80 mmは参考。機器端子と施工位置は要確認。","지름 80 mm는 예시. 장비 포트와 타공 위치 확인 필요.","80 мм диаметр тойм. Порт, өрөмдөх байрлалыг нягтална.","القطر 80 مم توضيحي. تُراجع منافذ الجهاز وموضع الثقب."],"透视 · 自由观察":["Perspective · Free orbit","Perspectiva · Giro libre","Perspective · Orbite libre","透視 · 自由回転","원근 · 자유 회전","Перспектив · Чөлөөт эргэлт","منظور · دوران حر"],"单指旋转 · 双指缩放":["Drag to orbit · Pinch to zoom","Arrastra para girar · Pellizca para acercar","Glisser pour pivoter · Pincer pour zoomer","1本指で回転 · ピンチでズーム","한 손가락으로 회전 · 두 손가락으로 확대","Нэг хуруугаар эргүүлнэ · Хоёр хуруугаар томруулна","اسحب للتدوير · باعد بين إصبعين للتكبير"],英规插座:["UK socket","Toma británica","Prise britannique","英国規格コンセント","영국식 콘센트","Британийн залгуур","مقبس بريطاني"],控制:["Control","Control","Commande","操作","제어","Удирдлага","تحكم"],展品示意:["Exhibit placeholder","Modelo de exposición","Modèle indicatif","展示品イメージ","전시품 예시","Үзмэрийн тойм","نموذج توضيحي للمعروض"]},tu=["en","es","fr","ja","ko","mn","ar"],Gc={en:"English",zh:"简体中文",ko:"한국어",mn:"Монгол",ja:"日本語",es:"Español",fr:"Français",ar:"العربية"},Wc="iq-booth-language";function ca(i){const e=i?.toLowerCase().split(/[-_]/)[0];return Object.hasOwn(Gc,e)?e:null}let Xc;try{Xc=localStorage.getItem(Wc)}catch{}let Zn=ca(new URL(location.href).searchParams.get("lang"))||ca(Xc)||(navigator.languages||[navigator.language]).map(ca).find(Boolean)||"en";function ze(i,e={}){return(Vc[i]?.[tu.indexOf(Zn)]??i).replace(/\{(\w+)\}/g,(n,s)=>e[s]??n)}function Nn(i){return i.split(" · ").map(e=>{const t=e.match(/^(内嵌齐平插座) ([AB])$/);return t?ze(t[1])+" "+t[2]:ze(e)}).join(" · ")}function nu(i){const e=i.match(/^(.+) 按1030图纸$/);return e?ze("{size} 按1030图纸",{size:e[1]}):ze(i)}function Yc(i){const e=[];function t(s,r){const a=s.trim(),o=a.match(/^(撤销|重做) (\(.+\))$/);!Object.hasOwn(Vc,a)&&!o||e.push(()=>r(s.replace(a,()=>o?ze(o[1])+" "+o[2]:ze(a))))}const n=document.createTreeWalker(i,NodeFilter.SHOW_TEXT);for(let s=n.nextNode();s;s=n.nextNode())s.parentElement?.closest("script,style,select")||t(s.data,r=>{s.data=r});for(const s of i.querySelectorAll("[title],[aria-label],[placeholder],meta[name=description]"))for(const r of["title","aria-label","placeholder","content"])s.hasAttribute(r)&&t(s.getAttribute(r),a=>s.setAttribute(r,a));return()=>{for(const s of e)s()}}function iu(i){const e=document.querySelector("#language");for(const[n,s]of Object.entries(Gc)){const r=new Option(s,n);r.lang=n,e.add(r)}function t(){e.value=Zn,document.documentElement.lang=Zn==="zh"?"zh-CN":Zn,document.documentElement.dir=Zn==="ar"?"rtl":"ltr",i()}e.onchange=()=>{Zn=e.value;try{localStorage.setItem(Wc,Zn)}catch{}const n=new URL(location.href);n.searchParams.set("lang",Zn),history.replaceState(history.state,"",n),t()},t()}const Ho="180",is={ROTATE:0,DOLLY:1,PAN:2},Qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},su=0,vl=1,ru=2,qc=1,jc=2,In=3,ni=0,Zt=1,tn=2,Qn=0,ss=1,xl=2,Ml=3,Sl=4,au=5,yi=100,ou=101,lu=102,cu=103,hu=104,uu=200,du=201,fu=202,pu=203,qa=204,ja=205,mu=206,gu=207,_u=208,vu=209,xu=210,Mu=211,Su=212,yu=213,Eu=214,Za=0,$a=1,Ka=2,cs=3,Ja=4,Qa=5,eo=6,to=7,Zc=0,bu=1,Tu=2,ei=0,wu=1,Au=2,Ru=3,Cu=4,Pu=5,Du=6,Lu=7,$c=300,hs=301,us=302,no=303,io=304,Qr=306,so=1e3,Ti=1001,ro=1002,gn=1003,Iu=1004,ir=1005,En=1006,ha=1007,wi=1008,Tn=1009,Kc=1010,Jc=1011,Bs=1012,Vo=1013,Ri=1014,On=1015,Zs=1016,Go=1017,Wo=1018,zs=1020,Qc=35902,eh=35899,th=1021,nh=1022,mn=1023,ks=1026,Hs=1027,ih=1028,Xo=1029,sh=1030,Yo=1031,qo=1033,Or=33776,Br=33777,zr=33778,kr=33779,ao=35840,oo=35841,lo=35842,co=35843,ho=36196,uo=37492,fo=37496,po=37808,mo=37809,go=37810,_o=37811,vo=37812,xo=37813,Mo=37814,So=37815,yo=37816,Eo=37817,bo=37818,To=37819,wo=37820,Ao=37821,Ro=36492,Co=36494,Po=36495,Do=36283,Lo=36284,Io=36285,Uo=36286,Uu=3200,Nu=3201,rh=0,Fu=1,Kn="",Vt="srgb",ds="srgb-linear",Xr="linear",rt="srgb",Ni=7680,yl=519,Ou=512,Bu=513,zu=514,ah=515,ku=516,Hu=517,Vu=518,Gu=519,No=35044,El="300 es",bn=2e3,Yr=2001;class Pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bl=1234567;const rs=Math.PI/180,Vs=180/Math.PI;function zn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function jo(i,e){return(i%e+e)%e}function Wu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Xu(i,e,t){return i!==e?(t-i)/(e-i):0}function Fs(i,e,t){return(1-t)*i+t*e}function Yu(i,e,t,n){return Fs(i,e,1-Math.exp(-t*n))}function qu(i,e=1){return e-Math.abs(jo(i,e*2)-e)}function ju(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Zu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function $u(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ku(i,e){return i+Math.random()*(e-i)}function Ju(i){return i*(.5-Math.random())}function Qu(i){i!==void 0&&(bl=i);let e=bl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ed(i){return i*rs}function td(i){return i*Vs}function nd(i){return(i&i-1)===0&&i!==0}function id(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rd(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*d,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function it(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const oh={DEG2RAD:rs,RAD2DEG:Vs,generateUUID:zn,clamp:Ye,euclideanModulo:jo,mapLinear:Wu,inverseLerp:Xu,lerp:Fs,damp:Yu,pingpong:qu,smoothstep:ju,smootherstep:Zu,randInt:$u,randFloat:Ku,randFloatSpread:Ju,seededRandom:Qu,degToRad:ed,radToDeg:td,isPowerOfTwo:nd,ceilPowerOfTwo:id,floorPowerOfTwo:sd,setQuaternionFromProperEuler:rd,normalize:it,denormalize:pn};class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const f=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==f||c!==p||h!==g){let m=1-o;const u=l*f+c*p+h*g+d*v,E=u>=0?1:-1,b=1-u*u;if(b>Number.EPSILON){const A=Math.sqrt(b),w=Math.atan2(A,u*E);m=Math.sin(m*w)/A,o=Math.sin(o*w)/A}const S=o*E;if(l=l*m+f*S,c=c*m+p*S,h=h*m+g*S,d=d*m+v*S,m===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*p-c*f,e[t+1]=l*g+h*f+c*d-o*p,e[t+2]=c*g+h*p+o*f-l*d,e[t+3]=h*g-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ua.copy(this).projectOnVector(e),this.sub(ua)}reflect(e){return this.sub(ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ua=new P,Tl=new Lt;class Ve{constructor(e,t,n,s,r,a,o,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],g=n[8],v=s[0],m=s[3],u=s[6],E=s[1],b=s[4],S=s[7],A=s[2],w=s[5],R=s[8];return r[0]=a*v+o*E+l*A,r[3]=a*m+o*b+l*w,r[6]=a*u+o*S+l*R,r[1]=c*v+h*E+d*A,r[4]=c*m+h*b+d*w,r[7]=c*u+h*S+d*R,r[2]=f*v+p*E+g*A,r[5]=f*m+p*b+g*w,r[8]=f*u+p*S+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=t*d+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(da.makeScale(e,t)),this}rotate(e){return this.premultiply(da.makeRotation(-e)),this}translate(e,t){return this.premultiply(da.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const da=new Ve;function lh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ad(){const i=qr("canvas");return i.style.display="block",i}const wl={};function Gs(i){i in wl||(wl[i]=!0,console.warn(i))}function od(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Al=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rl=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ld(){const i={enabled:!0,workingColorSpace:ds,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===rt&&(s.r=kn(s.r),s.g=kn(s.g),s.b=kn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(s.r=as(s.r),s.g=as(s.g),s.b=as(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Kn?Xr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Gs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Gs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ds]:{primaries:e,whitePoint:n,transfer:Xr,toXYZ:Al,fromXYZ:Rl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:Al,fromXYZ:Rl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),i}const Ke=ld();function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function as(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Fi;class cd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fi===void 0&&(Fi=qr("canvas")),Fi.width=e.width,Fi.height=e.height;const s=Fi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Fi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=kn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kn(t[n]/255)*255):t[n]=kn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hd=0;class Zo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(fa(s[a].image)):r.push(fa(s[a]))}else r=fa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function fa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ud=0;const pa=new P;class Wt extends Pi{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=Ti,s=Ti,r=En,a=wi,o=mn,l=Tn,c=Wt.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=zn(),this.name="",this.source=new Zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(pa).x}get height(){return this.source.getSize(pa).y}get depth(){return this.source.getSize(pa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$c)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case so:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case so:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=$c;Wt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,s=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(p+1)/2,A=(u+1)/2,w=(h+f)/4,R=(d+v)/4,L=(g+m)/4;return b>S&&b>A?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=R/n):S>A?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=L/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=L/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-v)/E,this.z=(f-h)/E,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dd extends Pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Wt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Zo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends dd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ch extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fd extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _s{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)),sr.applyMatrix4(e.matrixWorld),this.union(sr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Es),rr.subVectors(this.max,Es),Oi.subVectors(e.a,Es),Bi.subVectors(e.b,Es),zi.subVectors(e.c,Es),Vn.subVectors(Bi,Oi),Gn.subVectors(zi,Bi),hi.subVectors(Oi,zi);let t=[0,-Vn.z,Vn.y,0,-Gn.z,Gn.y,0,-hi.z,hi.y,Vn.z,0,-Vn.x,Gn.z,0,-Gn.x,hi.z,0,-hi.x,-Vn.y,Vn.x,0,-Gn.y,Gn.x,0,-hi.y,hi.x,0];return!ma(t,Oi,Bi,zi,rr)||(t=[1,0,0,0,1,0,0,0,1],!ma(t,Oi,Bi,zi,rr))?!1:(ar.crossVectors(Vn,Gn),t=[ar.x,ar.y,ar.z],ma(t,Oi,Bi,zi,rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Rn=[new P,new P,new P,new P,new P,new P,new P,new P],hn=new P,sr=new _s,Oi=new P,Bi=new P,zi=new P,Vn=new P,Gn=new P,hi=new P,Es=new P,rr=new P,ar=new P,ui=new P;function ma(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ui.fromArray(i,r);const o=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),h=n.dot(ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const pd=new _s,bs=new P,ga=new P;class ea{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):pd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bs.subVectors(e,this.center);const t=bs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(bs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bs.copy(e.center).add(ga)),this.expandByPoint(bs.copy(e.center).sub(ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Cn=new P,_a=new P,or=new P,Wn=new P,va=new P,lr=new P,xa=new P;class ta{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){_a.copy(e).add(t).multiplyScalar(.5),or.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(_a);const r=e.distanceTo(t)*.5,a=-this.direction.dot(or),o=Wn.dot(this.direction),l=-Wn.dot(or),c=Wn.lengthSq(),h=Math.abs(1-a*a);let d,f,p,g;if(h>0)if(d=a*l-o,f=a*o-l,g=r*h,d>=0)if(f>=-g)if(f<=g){const v=1/h;d*=v,f*=v,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(_a).addScaledVector(or,f),p}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const n=Cn.dot(this.direction),s=Cn.dot(Cn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,n,s,r){va.subVectors(t,e),lr.subVectors(n,e),xa.crossVectors(va,lr);let a=this.direction.dot(xa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wn.subVectors(this.origin,e);const l=o*this.direction.dot(lr.crossVectors(Wn,lr));if(l<0)return null;const c=o*this.direction.dot(va.cross(Wn));if(c<0||l+c>a)return null;const h=-o*Wn.dot(xa);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,n,s,r,a,o,l,c,h,d,f,p,g,v,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,f,p,g,v,m)}set(e,t,n,s,r,a,o,l,c,h,d,f,p,g,v,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ki.setFromMatrixColumn(e,0).length(),r=1/ki.setFromMatrixColumn(e,1).length(),a=1/ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=a*h,p=a*d,g=o*h,v=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,p=l*d,g=c*h,v=c*d;t[0]=f+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,p=l*d,g=c*h,v=c*d;t[0]=f-v*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,p=a*d,g=o*h,v=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+v,t[1]=l*d,t[5]=v*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-f*d,t[8]=g*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=f-v*d}else if(e.order==="XZY"){const f=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+v,t[5]=a*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(md,e,gd)}lookAt(e,t,n){const s=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),Xn.crossVectors(n,Qt),Xn.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),Xn.crossVectors(n,Qt)),Xn.normalize(),cr.crossVectors(Qt,Xn),s[0]=Xn.x,s[4]=cr.x,s[8]=Qt.x,s[1]=Xn.y,s[5]=cr.y,s[9]=Qt.y,s[2]=Xn.z,s[6]=cr.z,s[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],u=n[14],E=n[3],b=n[7],S=n[11],A=n[15],w=s[0],R=s[4],L=s[8],y=s[12],M=s[1],D=s[5],F=s[9],V=s[13],Y=s[2],X=s[6],j=s[10],$=s[14],W=s[3],te=s[7],O=s[11],z=s[15];return r[0]=a*w+o*M+l*Y+c*W,r[4]=a*R+o*D+l*X+c*te,r[8]=a*L+o*F+l*j+c*O,r[12]=a*y+o*V+l*$+c*z,r[1]=h*w+d*M+f*Y+p*W,r[5]=h*R+d*D+f*X+p*te,r[9]=h*L+d*F+f*j+p*O,r[13]=h*y+d*V+f*$+p*z,r[2]=g*w+v*M+m*Y+u*W,r[6]=g*R+v*D+m*X+u*te,r[10]=g*L+v*F+m*j+u*O,r[14]=g*y+v*V+m*$+u*z,r[3]=E*w+b*M+S*Y+A*W,r[7]=E*R+b*D+S*X+A*te,r[11]=E*L+b*F+S*j+A*O,r[15]=E*y+b*V+S*$+A*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],u=e[15];return g*(+r*l*d-s*c*d-r*o*f+n*c*f+s*o*p-n*l*p)+v*(+t*l*p-t*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+t*c*d-t*o*p-r*a*d+n*a*p+r*o*h-n*c*h)+u*(-s*o*h-t*l*d+t*o*f+s*a*d-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],u=e[15],E=d*m*c-v*f*c+v*l*p-o*m*p-d*l*u+o*f*u,b=g*f*c-h*m*c-g*l*p+a*m*p+h*l*u-a*f*u,S=h*v*c-g*d*c+g*o*p-a*v*p-h*o*u+a*d*u,A=g*d*l-h*v*l-g*o*f+a*v*f+h*o*m-a*d*m,w=t*E+n*b+s*S+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=E*R,e[1]=(v*f*r-d*m*r-v*s*p+n*m*p+d*s*u-n*f*u)*R,e[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*u+n*l*u)*R,e[3]=(d*l*r-o*f*r-d*s*c+n*f*c+o*s*p-n*l*p)*R,e[4]=b*R,e[5]=(h*m*r-g*f*r+g*s*p-t*m*p-h*s*u+t*f*u)*R,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*u-t*l*u)*R,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*p+t*l*p)*R,e[8]=S*R,e[9]=(g*d*r-h*v*r-g*n*p+t*v*p+h*n*u-t*d*u)*R,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*u+t*o*u)*R,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*p-t*o*p)*R,e[12]=A*R,e[13]=(h*v*s-g*d*s+g*n*f-t*v*f-h*n*m+t*d*m)*R,e[14]=(g*o*s-a*v*s-g*n*l+t*v*l+a*n*m-t*o*m)*R,e[15]=(a*d*s-h*o*s+h*n*l-t*d*l-a*n*f+t*o*f)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,f=r*c,p=r*h,g=r*d,v=a*h,m=a*d,u=o*d,E=l*c,b=l*h,S=l*d,A=n.x,w=n.y,R=n.z;return s[0]=(1-(v+u))*A,s[1]=(p+S)*A,s[2]=(g-b)*A,s[3]=0,s[4]=(p-S)*w,s[5]=(1-(f+u))*w,s[6]=(m+E)*w,s[7]=0,s[8]=(g+b)*R,s[9]=(m-E)*R,s[10]=(1-(f+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ki.set(s[0],s[1],s[2]).length();const a=ki.set(s[4],s[5],s[6]).length(),o=ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],un.copy(this);const c=1/r,h=1/a,d=1/o;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=d,un.elements[9]*=d,un.elements[10]*=d,t.setFromRotationMatrix(un),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=bn,l=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s);let g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===bn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Yr)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=bn,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s);let g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===bn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Yr)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ki=new P,un=new ht,md=new P(0,0,0),gd=new P(1,1,1),Xn=new P,cr=new P,Qt=new P,Cl=new ht,Pl=new Lt;class vn{constructor(e=0,t=0,n=0,s=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pl.setFromEuler(this),this.setFromQuaternion(Pl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class $o{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _d=0;const Dl=new P,Hi=new Lt,Pn=new ht,hr=new P,Ts=new P,vd=new P,xd=new Lt,Ll=new P(1,0,0),Il=new P(0,1,0),Ul=new P(0,0,1),Nl={type:"added"},Md={type:"removed"},Vi={type:"childadded",child:null},Ma={type:"childremoved",child:null};class _t extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new P,t=new vn,n=new Lt,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ve}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.premultiply(Hi),this}rotateX(e){return this.rotateOnAxis(Ll,e)}rotateY(e){return this.rotateOnAxis(Il,e)}rotateZ(e){return this.rotateOnAxis(Ul,e)}translateOnAxis(e,t){return Dl.copy(e).applyQuaternion(this.quaternion),this.position.add(Dl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ll,e)}translateY(e){return this.translateOnAxis(Il,e)}translateZ(e){return this.translateOnAxis(Ul,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hr.copy(e):hr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Ts,hr,this.up):Pn.lookAt(hr,Ts,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Hi.setFromRotationMatrix(Pn),this.quaternion.premultiply(Hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nl),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Md),Ma.child=e,this.dispatchEvent(Ma),Ma.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nl),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,e,vd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,xd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}_t.DEFAULT_UP=new P(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new P,Dn=new P,Sa=new P,Ln=new P,Gi=new P,Wi=new P,Fl=new P,ya=new P,Ea=new P,ba=new P,Ta=new Mt,wa=new Mt,Aa=new Mt;class nn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),dn.subVectors(e,t),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){dn.subVectors(s,t),Dn.subVectors(n,t),Sa.subVectors(e,t);const a=dn.dot(dn),o=dn.dot(Dn),l=dn.dot(Sa),c=Dn.dot(Dn),h=Dn.dot(Sa),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(o,Ln.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ta.setScalar(0),wa.setScalar(0),Aa.setScalar(0),Ta.fromBufferAttribute(e,t),wa.fromBufferAttribute(e,n),Aa.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ta,r.x),a.addScaledVector(wa,r.y),a.addScaledVector(Aa,r.z),a}static isFrontFacing(e,t,n,s){return dn.subVectors(n,t),Dn.subVectors(e,t),dn.cross(Dn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),dn.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return nn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Gi.subVectors(s,n),Wi.subVectors(r,n),ya.subVectors(e,n);const l=Gi.dot(ya),c=Wi.dot(ya);if(l<=0&&c<=0)return t.copy(n);Ea.subVectors(e,s);const h=Gi.dot(Ea),d=Wi.dot(Ea);if(h>=0&&d<=h)return t.copy(s);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Gi,a);ba.subVectors(e,r);const p=Gi.dot(ba),g=Wi.dot(ba);if(g>=0&&p<=g)return t.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Wi,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Fl.subVectors(r,s),o=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector(Fl,o);const u=1/(m+v+f);return a=v*u,o=f*u,t.copy(n).addScaledVector(Gi,a).addScaledVector(Wi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},ur={h:0,s:0,l:0};function Ra(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=jo(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ra(a,r,e+1/3),this.g=Ra(a,r,e),this.b=Ra(a,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=Vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=hh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return Ke.workingToColorSpace(Ft.copy(this),e),Math.round(Ye(Ft.r*255,0,255))*65536+Math.round(Ye(Ft.g*255,0,255))*256+Math.round(Ye(Ft.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Ft.copy(this),t);const n=Ft.r,s=Ft.g,r=Ft.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Vt){Ke.workingToColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,s=Ft.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(ur);const n=Fs(Yn.h,ur.h,t),s=Fs(Yn.s,ur.s,t),r=Fs(Yn.l,ur.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new qe;qe.NAMES=hh;let Sd=0;class Di extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=ss,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=ja,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qa&&(n.blendSrc=this.blendSrc),this.blendDst!==ja&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ti extends Di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new P,dr=new Pe;let yd=0;class cn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=No,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==No&&(e.usage=this.usage),e}}class uh extends cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class dh extends cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tt extends cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ed=0;const an=new ht,Ca=new _t,Xi=new P,en=new _s,ws=new _s,Dt=new P;class Et extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lh(e)?dh:uh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return Ca.lookAt(e),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ws.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(en.min,ws.min),en.expandByPoint(Dt),Dt.addVectors(en.max,ws.max),en.expandByPoint(Dt)):(en.expandByPoint(ws.min),en.expandByPoint(ws.max))}en.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Dt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Dt.fromBufferAttribute(o,c),l&&(Xi.fromBufferAttribute(e,c),Dt.add(Xi)),s=Math.max(s,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new P,l[L]=new P;const c=new P,h=new P,d=new P,f=new Pe,p=new Pe,g=new Pe,v=new P,m=new P;function u(L,y,M){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,y),d.fromBufferAttribute(n,M),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),h.sub(c),d.sub(c),p.sub(f),g.sub(f);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),o[L].add(v),o[y].add(v),o[M].add(v),l[L].add(m),l[y].add(m),l[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,y=E.length;L<y;++L){const M=E[L],D=M.start,F=M.count;for(let V=D,Y=D+F;V<Y;V+=3)u(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const b=new P,S=new P,A=new P,w=new P;function R(L){A.fromBufferAttribute(s,L),w.copy(A);const y=o[L];b.copy(y),b.sub(A.multiplyScalar(A.dot(y))).normalize(),S.crossVectors(w,y);const D=S.dot(l[L])<0?-1:1;a.setXYZW(L,b.x,b.y,b.z,D)}for(let L=0,y=E.length;L<y;++L){const M=E[L],D=M.start,F=M.count;for(let V=D,Y=D+F;V<Y;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let u=0;u<h;u++)f[g++]=c[p++]}return new cn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ol=new ht,di=new ta,fr=new ea,Bl=new P,pr=new P,mr=new P,gr=new P,Pa=new P,_r=new P,zl=new P,vr=new P;class ce extends _t{constructor(e=new Et,t=new ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){_r.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Pa.fromBufferAttribute(d,e),a?_r.addScaledVector(Pa,h):_r.addScaledVector(Pa.sub(t),h))}t.add(_r)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(r),di.copy(e.ray).recast(e.near),!(fr.containsPoint(di.origin)===!1&&(di.intersectSphere(fr,Bl)===null||di.origin.distanceToSquared(Bl)>(e.far-e.near)**2))&&(Ol.copy(r).invert(),di.copy(e.ray).applyMatrix4(Ol),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],u=a[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,A=b;S<A;S+=3){const w=o.getX(S),R=o.getX(S+1),L=o.getX(S+2);s=xr(this,u,e,n,c,h,d,w,R,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){const E=o.getX(m),b=o.getX(m+1),S=o.getX(m+2);s=xr(this,a,e,n,c,h,d,E,b,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],u=a[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,A=b;S<A;S+=3){const w=S,R=S+1,L=S+2;s=xr(this,u,e,n,c,h,d,w,R,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){const E=m,b=m+1,S=m+2;s=xr(this,a,e,n,c,h,d,E,b,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function bd(i,e,t,n,s,r,a,o){let l;if(e.side===Zt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ni,o),l===null)return null;vr.copy(o),vr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(vr);return c<t.near||c>t.far?null:{distance:c,point:vr.clone(),object:i}}function xr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,pr),i.getVertexPosition(l,mr),i.getVertexPosition(c,gr);const h=bd(i,e,t,n,pr,mr,gr,zl);if(h){const d=new P;nn.getBarycoord(zl,pr,mr,gr,d),s&&(h.uv=nn.getInterpolatedAttribute(s,o,l,c,d,new Pe)),r&&(h.uv1=nn.getInterpolatedAttribute(r,o,l,c,d,new Pe)),a&&(h.normal=nn.getInterpolatedAttribute(a,o,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new P,materialIndex:0};nn.getNormal(pr,mr,gr,f.normal),h.face=f,h.barycoord=d}return h}class xt extends Et{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(d,2));function g(v,m,u,E,b,S,A,w,R,L,y){const M=S/R,D=A/L,F=S/2,V=A/2,Y=w/2,X=R+1,j=L+1;let $=0,W=0;const te=new P;for(let O=0;O<j;O++){const z=O*D-V;for(let Q=0;Q<X;Q++){const _e=Q*M-F;te[v]=_e*E,te[m]=z*b,te[u]=Y,c.push(te.x,te.y,te.z),te[v]=0,te[m]=0,te[u]=w>0?1:-1,h.push(te.x,te.y,te.z),d.push(Q/R),d.push(1-O/L),$+=1}}for(let O=0;O<L;O++)for(let z=0;z<R;z++){const Q=f+z+X*O,_e=f+z+X*(O+1),Ce=f+(z+1)+X*(O+1),fe=f+(z+1)+X*O;l.push(Q,_e,fe),l.push(_e,Ce,fe),W+=6}o.addGroup(p,W,y),p+=W,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ht(i){const e={};for(let t=0;t<i.length;t++){const n=fs(i[t]);for(const s in n)e[s]=n[s]}return e}function Td(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const wd={clone:fs,merge:Ht};var Ad=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends Di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ad,this.fragmentShader=Rd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=Td(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ph extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qn=new P,kl=new Pe,Hl=new Pe;class on extends ph{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qn.x,qn.y).multiplyScalar(-e/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-e/qn.z)}getViewSize(e,t){return this.getViewBounds(e,kl,Hl),t.subVectors(Hl,kl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yi=-90,qi=1;class Cd extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(Yi,qi,e,t);s.layers=this.layers,this.add(s);const r=new on(Yi,qi,e,t);r.layers=this.layers,this.add(r);const a=new on(Yi,qi,e,t);a.layers=this.layers,this.add(a);const o=new on(Yi,qi,e,t);o.layers=this.layers,this.add(o);const l=new on(Yi,qi,e,t);l.layers=this.layers,this.add(l);const c=new on(Yi,qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class mh extends Wt{constructor(e=[],t=hs,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pd extends Ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new mh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xt(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:Qn});r.uniforms.tEquirect.value=t;const a=new ce(s,r),o=t.minFilter;return t.minFilter===wi&&(t.minFilter=En),new Cd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class Gt extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dd={type:"move"};class Da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ld extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Id{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=No,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zt=new P;class jr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new jr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class gh extends Di{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ji;const As=new P,Zi=new P,$i=new P,Ki=new Pe,Rs=new Pe,_h=new ht,Mr=new P,Cs=new P,Sr=new P,Vl=new Pe,La=new Pe,Gl=new Pe;class Ud extends _t{constructor(e=new gh){if(super(),this.isSprite=!0,this.type="Sprite",ji===void 0){ji=new Et;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Id(t,5);ji.setIndex([0,1,2,0,2,3]),ji.setAttribute("position",new jr(n,3,0,!1)),ji.setAttribute("uv",new jr(n,2,3,!1))}this.geometry=ji,this.material=e,this.center=new Pe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zi.setFromMatrixScale(this.matrixWorld),_h.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$i.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zi.multiplyScalar(-$i.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;yr(Mr.set(-.5,-.5,0),$i,a,Zi,s,r),yr(Cs.set(.5,-.5,0),$i,a,Zi,s,r),yr(Sr.set(.5,.5,0),$i,a,Zi,s,r),Vl.set(0,0),La.set(1,0),Gl.set(1,1);let o=e.ray.intersectTriangle(Mr,Cs,Sr,!1,As);if(o===null&&(yr(Cs.set(-.5,.5,0),$i,a,Zi,s,r),La.set(0,1),o=e.ray.intersectTriangle(Mr,Sr,Cs,!1,As),o===null))return;const l=e.ray.origin.distanceTo(As);l<e.near||l>e.far||t.push({distance:l,point:As.clone(),uv:nn.getInterpolation(As,Mr,Cs,Sr,Vl,La,Gl,new Pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function yr(i,e,t,n,s,r){Ki.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Rs.x=r*Ki.x-s*Ki.y,Rs.y=s*Ki.x+r*Ki.y):Rs.copy(Ki),i.copy(e),i.x+=Rs.x,i.y+=Rs.y,i.applyMatrix4(_h)}const Ia=new P,Nd=new P,Fd=new Ve;class $n{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ia.subVectors(n,t).cross(Nd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ia),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Fd.getNormalMatrix(e),s=this.coplanarPoint(Ia).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new ea,Od=new Pe(.5,.5),Er=new P;class Ko{constructor(e=new $n,t=new $n,n=new $n,s=new $n,r=new $n,a=new $n){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],p=r[7],g=r[8],v=r[9],m=r[10],u=r[11],E=r[12],b=r[13],S=r[14],A=r[15];if(s[0].setComponents(c-a,p-h,u-g,A-E).normalize(),s[1].setComponents(c+a,p+h,u+g,A+E).normalize(),s[2].setComponents(c+o,p+d,u+v,A+b).normalize(),s[3].setComponents(c-o,p-d,u-v,A-b).normalize(),n)s[4].setComponents(l,f,m,S).normalize(),s[5].setComponents(c-l,p-f,u-m,A-S).normalize();else if(s[4].setComponents(c-l,p-f,u-m,A-S).normalize(),t===bn)s[5].setComponents(c+l,p+f,u+m,A+S).normalize();else if(t===Yr)s[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){fi.center.set(0,0,0);const t=Od.distanceTo(e.center);return fi.radius=.7071067811865476+t,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Er.x=s.normal.x>0?e.max.x:e.min.x,Er.y=s.normal.y>0?e.max.y:e.min.y,Er.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ai extends Di{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zr=new P,$r=new P,Wl=new ht,Ps=new ta,br=new ea,Ua=new P,Xl=new P;class fn extends _t{constructor(e=new Et,t=new ai){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Zr.fromBufferAttribute(t,s-1),$r.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Zr.distanceTo($r);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(s),br.radius+=r,e.ray.intersectsSphere(br)===!1)return;Wl.copy(s).invert(),Ps.copy(e.ray).applyMatrix4(Wl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){const u=h.getX(v),E=h.getX(v+1),b=Tr(this,e,Ps,l,u,E,v);b&&t.push(b)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(p),u=Tr(this,e,Ps,l,v,m,g-1);u&&t.push(u)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){const u=Tr(this,e,Ps,l,v,v+1,v);u&&t.push(u)}if(this.isLineLoop){const v=Tr(this,e,Ps,l,g-1,p,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Tr(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Zr.fromBufferAttribute(o,s),$r.fromBufferAttribute(o,r),t.distanceSqToSegment(Zr,$r,Ua,Xl)>n)return;Ua.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ua);if(!(c<e.near||c>e.far))return{distance:c,point:Xl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Yl=new P,ql=new P;class Jo extends fn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Yl.fromBufferAttribute(t,s),ql.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Yl.distanceTo(ql);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vh extends Wt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xh extends Wt{constructor(e,t,n=Ri,s,r,a,o=gn,l=gn,c,h=ks,d=1){if(h!==ks&&h!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Mh extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wt extends Et{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],p=[];let g=0;const v=[],m=n/2;let u=0;E(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new tt(d,3)),this.setAttribute("normal",new tt(f,3)),this.setAttribute("uv",new tt(p,2));function E(){const S=new P,A=new P;let w=0;const R=(t-e)/n;for(let L=0;L<=r;L++){const y=[],M=L/r,D=M*(t-e)+e;for(let F=0;F<=s;F++){const V=F/s,Y=V*l+o,X=Math.sin(Y),j=Math.cos(Y);A.x=D*X,A.y=-M*n+m,A.z=D*j,d.push(A.x,A.y,A.z),S.set(X,R,j).normalize(),f.push(S.x,S.y,S.z),p.push(V,1-M),y.push(g++)}v.push(y)}for(let L=0;L<s;L++)for(let y=0;y<r;y++){const M=v[y][L],D=v[y+1][L],F=v[y+1][L+1],V=v[y][L+1];(e>0||y!==0)&&(h.push(M,D,V),w+=3),(t>0||y!==r-1)&&(h.push(D,F,V),w+=3)}c.addGroup(u,w,0),u+=w}function b(S){const A=g,w=new Pe,R=new P;let L=0;const y=S===!0?e:t,M=S===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;const D=g;for(let F=0;F<=s;F++){const Y=F/s*l+o,X=Math.cos(Y),j=Math.sin(Y);R.x=y*j,R.y=m*M,R.z=y*X,d.push(R.x,R.y,R.z),f.push(0,M,0),w.x=X*.5+.5,w.y=j*.5*M+.5,p.push(w.x,w.y),g++}for(let F=0;F<s;F++){const V=A+F,Y=D+F;S===!0?h.push(Y,Y+1,V):h.push(Y+1,Y,V),L+=3}c.addGroup(u,L,S===!0?1:2),u+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qo extends Et{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const b=new P,S=new P,A=new P;for(let w=0;w<t.length;w+=3)p(t[w+0],b),p(t[w+1],S),p(t[w+2],A),l(b,S,A,E)}function l(E,b,S,A){const w=A+1,R=[];for(let L=0;L<=w;L++){R[L]=[];const y=E.clone().lerp(S,L/w),M=b.clone().lerp(S,L/w),D=w-L;for(let F=0;F<=D;F++)F===0&&L===w?R[L][F]=y:R[L][F]=y.clone().lerp(M,F/D)}for(let L=0;L<w;L++)for(let y=0;y<2*(w-L)-1;y++){const M=Math.floor(y/2);y%2===0?(f(R[L][M+1]),f(R[L+1][M]),f(R[L][M])):(f(R[L][M+1]),f(R[L+1][M+1]),f(R[L+1][M]))}}function c(E){const b=new P;for(let S=0;S<r.length;S+=3)b.x=r[S+0],b.y=r[S+1],b.z=r[S+2],b.normalize().multiplyScalar(E),r[S+0]=b.x,r[S+1]=b.y,r[S+2]=b.z}function h(){const E=new P;for(let b=0;b<r.length;b+=3){E.x=r[b+0],E.y=r[b+1],E.z=r[b+2];const S=m(E)/2/Math.PI+.5,A=u(E)/Math.PI+.5;a.push(S,1-A)}g(),d()}function d(){for(let E=0;E<a.length;E+=6){const b=a[E+0],S=a[E+2],A=a[E+4],w=Math.max(b,S,A),R=Math.min(b,S,A);w>.9&&R<.1&&(b<.2&&(a[E+0]+=1),S<.2&&(a[E+2]+=1),A<.2&&(a[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function p(E,b){const S=E*3;b.x=e[S+0],b.y=e[S+1],b.z=e[S+2]}function g(){const E=new P,b=new P,S=new P,A=new P,w=new Pe,R=new Pe,L=new Pe;for(let y=0,M=0;y<r.length;y+=9,M+=6){E.set(r[y+0],r[y+1],r[y+2]),b.set(r[y+3],r[y+4],r[y+5]),S.set(r[y+6],r[y+7],r[y+8]),w.set(a[M+0],a[M+1]),R.set(a[M+2],a[M+3]),L.set(a[M+4],a[M+5]),A.copy(E).add(b).add(S).divideScalar(3);const D=m(A);v(w,M+0,E,D),v(R,M+2,b,D),v(L,M+4,S,D)}}function v(E,b,S,A){A<0&&E.x===1&&(a[b]=E.x-1),S.x===0&&S.z===0&&(a[b]=A/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function u(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.vertices,e.indices,e.radius,e.details)}}const wr=new P,Ar=new P,Na=new P,Rr=new nn;class Bd extends Et{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(rs*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:u}=Rr;if(v.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),u.fromBufferAttribute(o,c[2]),Rr.getNormal(Na),d[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(u.x*s)},${Math.round(u.y*s)},${Math.round(u.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let E=0;E<3;E++){const b=(E+1)%3,S=d[E],A=d[b],w=Rr[h[E]],R=Rr[h[b]],L=`${S}_${A}`,y=`${A}_${S}`;y in f&&f[y]?(Na.dot(f[y].normal)<=r&&(p.push(w.x,w.y,w.z),p.push(R.x,R.y,R.z)),f[y]=null):L in f||(f[L]={index0:c[E],index1:c[b],normal:Na.clone()})}}for(const g in f)if(f[g]){const{index0:v,index1:m}=f[g];wr.fromBufferAttribute(o,v),Ar.fromBufferAttribute(o,m),p.push(wr.x,wr.y,wr.z),p.push(Ar.x,Ar.y,Ar.z)}this.setAttribute("position",new tt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class es extends Qo{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new es(e.radius,e.detail)}}class Li extends Et{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,f=t/l,p=[],g=[],v=[],m=[];for(let u=0;u<h;u++){const E=u*f-a;for(let b=0;b<c;b++){const S=b*d-r;g.push(S,-E,0),v.push(0,0,1),m.push(b/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let E=0;E<o;E++){const b=E+c*u,S=E+c*(u+1),A=E+1+c*(u+1),w=E+1+c*u;p.push(b,S,w),p.push(S,A,w)}this.setIndex(p),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(v,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.widthSegments,e.heightSegments)}}class Kr extends Et{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let d=e;const f=(t-e)/s,p=new P,g=new Pe;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const u=r+m/n*a;p.x=d*Math.cos(u),p.y=d*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}d+=f}for(let v=0;v<s;v++){const m=v*(n+1);for(let u=0;u<n;u++){const E=u+m,b=E,S=E+n+1,A=E+n+2,w=E+1;o.push(b,S,w),o.push(S,A,w)}}this.setIndex(o),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class el extends Et{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new P,f=new P,p=[],g=[],v=[],m=[];for(let u=0;u<=n;u++){const E=[],b=u/n;let S=0;u===0&&a===0?S=.5/t:u===n&&l===Math.PI&&(S=-.5/t);for(let A=0;A<=t;A++){const w=A/t;d.x=-e*Math.cos(s+w*r)*Math.sin(a+b*o),d.y=e*Math.cos(a+b*o),d.z=e*Math.sin(s+w*r)*Math.sin(a+b*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(w+S,1-b),E.push(c++)}h.push(E)}for(let u=0;u<n;u++)for(let E=0;E<t;E++){const b=h[u][E+1],S=h[u][E],A=h[u+1][E],w=h[u+1][E+1];(u!==0||a>0)&&p.push(b,S,w),(u!==n-1||l<Math.PI)&&p.push(S,A,w)}this.setIndex(p),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(v,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ei extends Et{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new P,d=new P,f=new P;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const v=g/s*r,m=p/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const v=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,u=(s+1)*(p-1)+g,E=(s+1)*p+g;a.push(v,m,E),a.push(m,u,E)}this.setIndex(a),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class zd extends Di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rh,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kd extends Di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hd extends Di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Vd extends ai{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Sh extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Gd extends Sh{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Fa=new ht,jl=new P,Zl=new P;class Wd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ko,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;jl.setFromMatrixPosition(e.matrixWorld),t.position.copy(jl),Zl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zl),t.updateMatrixWorld(),Fa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class yh extends ph{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xd extends Wd{constructor(){super(new yh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Eh extends Sh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Xd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Yd extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const $l=new ht;class bh{constructor(e,t,n=0,s=1/0){this.ray=new ta(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new $o,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $l.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($l),this}intersectObject(e,t=!0,n=[]){return Fo(e,this,n,t),n.sort(Kl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Fo(e[s],this,n,t);return n.sort(Kl),n}}function Kl(i,e){return i.distance-e.distance}function Fo(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Fo(r[a],e,t,!0)}}class Jl{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ye(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class qd extends Jo{constructor(e=10,t=10,n=4473924,s=8947848){n=new qe(n),s=new qe(s);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,p=0,g=-o;f<=t;f++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const v=f===r?n:s;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const h=new Et;h.setAttribute("position",new tt(l,3)),h.setAttribute("color",new tt(c,3));const d=new ai({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class jd extends Jo{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Et;r.setIndex(new cn(n,1)),r.setAttribute("position",new tt(s,3)),super(r,new ai({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Th extends Pi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Ql(i,e,t,n){const s=Zd(n);switch(t){case th:return i*e;case ih:return i*e/s.components*s.byteLength;case Xo:return i*e/s.components*s.byteLength;case sh:return i*e*2/s.components*s.byteLength;case Yo:return i*e*2/s.components*s.byteLength;case nh:return i*e*3/s.components*s.byteLength;case mn:return i*e*4/s.components*s.byteLength;case qo:return i*e*4/s.components*s.byteLength;case Or:case Br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zr:case kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oo:case co:return Math.max(i,16)*Math.max(e,8)/4;case ao:case lo:return Math.max(i,8)*Math.max(e,8)/2;case ho:case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case go:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case _o:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case vo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case xo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case So:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case yo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case bo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case To:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case wo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ao:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ro:case Co:case Po:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Do:case Lo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Io:case Uo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zd(i){switch(i){case Tn:case Kc:return{byteLength:1,components:1};case Bs:case Jc:case Zs:return{byteLength:2,components:1};case Go:case Wo:return{byteLength:2,components:4};case Ri:case Vo:case On:return{byteLength:4,components:1};case Qc:case eh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ho}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ho);function wh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function $d(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const v=d[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jd=`#ifdef USE_ALPHAHASH
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
#endif`,Qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sf=`#ifdef USE_AOMAP
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
#endif`,rf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,af=`#ifdef USE_BATCHING
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
#endif`,of=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uf=`#ifdef USE_IRIDESCENCE
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
#endif`,df=`#ifdef USE_BUMPMAP
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
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sf=`#define PI 3.141592653589793
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
} // validated`,yf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ef=`vec3 transformedNormal = objectNormal;
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
#endif`,bf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pf=`#ifdef USE_ENVMAP
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
#endif`,Df=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lf=`#ifdef USE_ENVMAP
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
#endif`,If=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
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
#endif`,Nf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zf=`#ifdef USE_GRADIENTMAP
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
}`,kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gf=`uniform bool receiveShadow;
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
#endif`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zf=`PhysicalMaterial material;
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
#endif`,$f=`struct PhysicalMaterial {
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
}`,Kf=`
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
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ep=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,op=`#if defined( USE_POINTS_UV )
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
#endif`,lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,up=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fp=`#ifdef USE_MORPHTARGETS
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
#endif`,pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mp=`#ifdef USE_NORMALMAP
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
#endif`,Sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ep=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fp=`float getShadowMask() {
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
}`,Op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bp=`#ifdef USE_SKINNING
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
#endif`,zp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kp=`#ifdef USE_SKINNING
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
#endif`,Hp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xp=`#ifdef USE_TRANSMISSION
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
#endif`,Yp=`#ifdef USE_TRANSMISSION
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
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jp=`uniform sampler2D t2D;
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
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`#include <common>
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
}`,sm=`#if DEPTH_PACKING == 3200
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
}`,rm=`#define DISTANCE
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
}`,am=`#define DISTANCE
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
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`uniform float scale;
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
}`,hm=`uniform vec3 diffuse;
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
}`,um=`#include <common>
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
}`,dm=`uniform vec3 diffuse;
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
}`,fm=`#define LAMBERT
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
}`,pm=`#define LAMBERT
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
}`,mm=`#define MATCAP
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
}`,gm=`#define MATCAP
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
}`,_m=`#define NORMAL
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
}`,vm=`#define NORMAL
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
}`,xm=`#define PHONG
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
}`,Mm=`#define PHONG
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
}`,Sm=`#define STANDARD
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
}`,ym=`#define STANDARD
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
}`,Em=`#define TOON
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
}`,bm=`#define TOON
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
}`,Tm=`uniform float size;
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
}`,wm=`uniform vec3 diffuse;
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
}`,Am=`#include <common>
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
}`,Rm=`uniform vec3 color;
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
}`,Cm=`uniform float rotation;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:Kd,alphahash_pars_fragment:Jd,alphamap_fragment:Qd,alphamap_pars_fragment:ef,alphatest_fragment:tf,alphatest_pars_fragment:nf,aomap_fragment:sf,aomap_pars_fragment:rf,batching_pars_vertex:af,batching_vertex:of,begin_vertex:lf,beginnormal_vertex:cf,bsdfs:hf,iridescence_fragment:uf,bumpmap_pars_fragment:df,clipping_planes_fragment:ff,clipping_planes_pars_fragment:pf,clipping_planes_pars_vertex:mf,clipping_planes_vertex:gf,color_fragment:_f,color_pars_fragment:vf,color_pars_vertex:xf,color_vertex:Mf,common:Sf,cube_uv_reflection_fragment:yf,defaultnormal_vertex:Ef,displacementmap_pars_vertex:bf,displacementmap_vertex:Tf,emissivemap_fragment:wf,emissivemap_pars_fragment:Af,colorspace_fragment:Rf,colorspace_pars_fragment:Cf,envmap_fragment:Pf,envmap_common_pars_fragment:Df,envmap_pars_fragment:Lf,envmap_pars_vertex:If,envmap_physical_pars_fragment:Wf,envmap_vertex:Uf,fog_vertex:Nf,fog_pars_vertex:Ff,fog_fragment:Of,fog_pars_fragment:Bf,gradientmap_pars_fragment:zf,lightmap_pars_fragment:kf,lights_lambert_fragment:Hf,lights_lambert_pars_fragment:Vf,lights_pars_begin:Gf,lights_toon_fragment:Xf,lights_toon_pars_fragment:Yf,lights_phong_fragment:qf,lights_phong_pars_fragment:jf,lights_physical_fragment:Zf,lights_physical_pars_fragment:$f,lights_fragment_begin:Kf,lights_fragment_maps:Jf,lights_fragment_end:Qf,logdepthbuf_fragment:ep,logdepthbuf_pars_fragment:tp,logdepthbuf_pars_vertex:np,logdepthbuf_vertex:ip,map_fragment:sp,map_pars_fragment:rp,map_particle_fragment:ap,map_particle_pars_fragment:op,metalnessmap_fragment:lp,metalnessmap_pars_fragment:cp,morphinstance_vertex:hp,morphcolor_vertex:up,morphnormal_vertex:dp,morphtarget_pars_vertex:fp,morphtarget_vertex:pp,normal_fragment_begin:mp,normal_fragment_maps:gp,normal_pars_fragment:_p,normal_pars_vertex:vp,normal_vertex:xp,normalmap_pars_fragment:Mp,clearcoat_normal_fragment_begin:Sp,clearcoat_normal_fragment_maps:yp,clearcoat_pars_fragment:Ep,iridescence_pars_fragment:bp,opaque_fragment:Tp,packing:wp,premultiplied_alpha_fragment:Ap,project_vertex:Rp,dithering_fragment:Cp,dithering_pars_fragment:Pp,roughnessmap_fragment:Dp,roughnessmap_pars_fragment:Lp,shadowmap_pars_fragment:Ip,shadowmap_pars_vertex:Up,shadowmap_vertex:Np,shadowmask_pars_fragment:Fp,skinbase_vertex:Op,skinning_pars_vertex:Bp,skinning_vertex:zp,skinnormal_vertex:kp,specularmap_fragment:Hp,specularmap_pars_fragment:Vp,tonemapping_fragment:Gp,tonemapping_pars_fragment:Wp,transmission_fragment:Xp,transmission_pars_fragment:Yp,uv_pars_fragment:qp,uv_pars_vertex:jp,uv_vertex:Zp,worldpos_vertex:$p,background_vert:Kp,background_frag:Jp,backgroundCube_vert:Qp,backgroundCube_frag:em,cube_vert:tm,cube_frag:nm,depth_vert:im,depth_frag:sm,distanceRGBA_vert:rm,distanceRGBA_frag:am,equirect_vert:om,equirect_frag:lm,linedashed_vert:cm,linedashed_frag:hm,meshbasic_vert:um,meshbasic_frag:dm,meshlambert_vert:fm,meshlambert_frag:pm,meshmatcap_vert:mm,meshmatcap_frag:gm,meshnormal_vert:_m,meshnormal_frag:vm,meshphong_vert:xm,meshphong_frag:Mm,meshphysical_vert:Sm,meshphysical_frag:ym,meshtoon_vert:Em,meshtoon_frag:bm,points_vert:Tm,points_frag:wm,shadow_vert:Am,shadow_frag:Rm,sprite_vert:Cm,sprite_frag:Pm},ue={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},yn={basic:{uniforms:Ht([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Ht([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new qe(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Ht([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Ht([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Ht([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new qe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Ht([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Ht([ue.points,ue.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Ht([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Ht([ue.common,ue.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Ht([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Ht([ue.sprite,ue.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Ht([ue.common,ue.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Ht([ue.lights,ue.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};yn.physical={uniforms:Ht([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Cr={r:0,b:0,g:0},pi=new vn,Dm=new ht;function Lm(i,e,t,n,s,r,a){const o=new qe(0);let l=r===!0?0:1,c,h,d=null,f=0,p=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function v(b){let S=!1;const A=g(b);A===null?u(o,l):A&&A.isColor&&(u(A,1),S=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,S){const A=g(S);A&&(A.isCubeTexture||A.mapping===Qr)?(h===void 0&&(h=new ce(new xt(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:fs(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),pi.copy(S.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Dm.makeRotationFromEuler(pi)),h.material.toneMapped=Ke.getTransfer(A.colorSpace)!==rt,(d!==A||f!==A.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=A,f=A.version,p=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new ce(new Li(2,2),new ii({name:"BackgroundMaterial",uniforms:fs(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(A.colorSpace)!==rt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||f!==A.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=A,f=A.version,p=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function u(b,S){b.getRGB(Cr,fh(i)),n.buffers.color.setClear(Cr.r,Cr.g,Cr.b,S,a)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),l=S,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,u(o,l)},render:v,addToRenderList:m,dispose:E}}function Im(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(M,D,F,V,Y){let X=!1;const j=d(V,F,D);r!==j&&(r=j,c(r.object)),X=p(M,V,F,Y),X&&g(M,V,F,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,S(M,D,F,V),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function d(M,D,F){const V=F.wireframe===!0;let Y=n[M.id];Y===void 0&&(Y={},n[M.id]=Y);let X=Y[D.id];X===void 0&&(X={},Y[D.id]=X);let j=X[V];return j===void 0&&(j=f(l()),X[V]=j),j}function f(M){const D=[],F=[],V=[];for(let Y=0;Y<t;Y++)D[Y]=0,F[Y]=0,V[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:V,object:M,attributes:{},index:null}}function p(M,D,F,V){const Y=r.attributes,X=D.attributes;let j=0;const $=F.getAttributes();for(const W in $)if($[W].location>=0){const O=Y[W];let z=X[W];if(z===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(z=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(z=M.instanceColor)),O===void 0||O.attribute!==z||z&&O.data!==z.data)return!0;j++}return r.attributesNum!==j||r.index!==V}function g(M,D,F,V){const Y={},X=D.attributes;let j=0;const $=F.getAttributes();for(const W in $)if($[W].location>=0){let O=X[W];O===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(O=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(O=M.instanceColor));const z={};z.attribute=O,O&&O.data&&(z.data=O.data),Y[W]=z,j++}r.attributes=Y,r.attributesNum=j,r.index=V}function v(){const M=r.newAttributes;for(let D=0,F=M.length;D<F;D++)M[D]=0}function m(M){u(M,0)}function u(M,D){const F=r.newAttributes,V=r.enabledAttributes,Y=r.attributeDivisors;F[M]=1,V[M]===0&&(i.enableVertexAttribArray(M),V[M]=1),Y[M]!==D&&(i.vertexAttribDivisor(M,D),Y[M]=D)}function E(){const M=r.newAttributes,D=r.enabledAttributes;for(let F=0,V=D.length;F<V;F++)D[F]!==M[F]&&(i.disableVertexAttribArray(F),D[F]=0)}function b(M,D,F,V,Y,X,j){j===!0?i.vertexAttribIPointer(M,D,F,Y,X):i.vertexAttribPointer(M,D,F,V,Y,X)}function S(M,D,F,V){v();const Y=V.attributes,X=F.getAttributes(),j=D.defaultAttributeValues;for(const $ in X){const W=X[$];if(W.location>=0){let te=Y[$];if(te===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(te=M.instanceColor)),te!==void 0){const O=te.normalized,z=te.itemSize,Q=e.get(te);if(Q===void 0)continue;const _e=Q.buffer,Ce=Q.type,fe=Q.bytesPerElement,k=Ce===i.INT||Ce===i.UNSIGNED_INT||te.gpuType===Vo;if(te.isInterleavedBufferAttribute){const K=te.data,oe=K.stride,me=te.offset;if(K.isInstancedInterleavedBuffer){for(let he=0;he<W.locationSize;he++)u(W.location+he,K.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let he=0;he<W.locationSize;he++)m(W.location+he);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let he=0;he<W.locationSize;he++)b(W.location+he,z/W.locationSize,Ce,O,oe*fe,(me+z/W.locationSize*he)*fe,k)}else{if(te.isInstancedBufferAttribute){for(let K=0;K<W.locationSize;K++)u(W.location+K,te.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let K=0;K<W.locationSize;K++)m(W.location+K);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let K=0;K<W.locationSize;K++)b(W.location+K,z/W.locationSize,Ce,O,z*fe,z/W.locationSize*K*fe,k)}}else if(j!==void 0){const O=j[$];if(O!==void 0)switch(O.length){case 2:i.vertexAttrib2fv(W.location,O);break;case 3:i.vertexAttrib3fv(W.location,O);break;case 4:i.vertexAttrib4fv(W.location,O);break;default:i.vertexAttrib1fv(W.location,O)}}}}E()}function A(){L();for(const M in n){const D=n[M];for(const F in D){const V=D[F];for(const Y in V)h(V[Y].object),delete V[Y];delete D[F]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const F in D){const V=D[F];for(const Y in V)h(V[Y].object),delete V[Y];delete D[F]}delete n[M.id]}function R(M){for(const D in n){const F=n[D];if(F[M.id]===void 0)continue;const V=F[M.id];for(const Y in V)h(V[Y].object),delete V[Y];delete F[M.id]}}function L(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function Um(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,n,1)}function l(c,h,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*f[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Nm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==mn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const L=R===Zs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Tn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==On&&!L)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:A,maxSamples:w}}function Fm(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new $n,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const E=r?0:n,b=E*4;let S=u.clippingState||null;l.value=S,S=h(g,f,b,p);for(let A=0;A!==b;++A)S[A]=t[A];u.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,p,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const u=p+v*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<u)&&(m=new Float32Array(u));for(let b=0,S=p;b!==v;++b,S+=4)a.copy(d[b]).applyMatrix4(E,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Om(i){let e=new WeakMap;function t(a,o){return o===no?a.mapping=hs:o===io&&(a.mapping=us),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===no||o===io)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Pd(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const ts=4,ec=[.125,.215,.35,.446,.526,.582],bi=20,Oa=new yh,tc=new qe;let Ba=null,za=0,ka=0,Ha=!1;const _i=(1+Math.sqrt(5))/2,Ji=1/_i,nc=[new P(-_i,Ji,0),new P(_i,Ji,0),new P(-Ji,0,_i),new P(Ji,0,_i),new P(0,_i,-Ji),new P(0,_i,Ji),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Bm=new P;class ic{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Bm}=r;Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ba,za,ka),this._renderer.xr.enabled=Ha,e.scissorTest=!1,Pr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hs||e.mapping===us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:Zs,format:mn,colorSpace:ds,depthBuffer:!1},s=sc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zm(r)),this._blurMaterial=km(r,e,t)}return s}_compileMaterial(e){const t=new ce(this._lodPlanes[0],e);this._renderer.compile(t,Oa)}_sceneToCubeUV(e,t,n,s,r){const l=new on(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(tc),d.toneMapping=ei,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const v=new ti({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),m=new ce(new xt,v);let u=!1;const E=e.background;E?E.isColor&&(v.color.copy(E),e.background=null,u=!0):(v.color.copy(tc),u=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):S===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));const A=this._cubeSize;Pr(s,S*A,b>2?A:0,A,A),d.setRenderTarget(s),u&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===hs||e.mapping===us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ac()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ce(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Pr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Oa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=nc[(s-r-1)%nc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ce(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*bi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):bi;m>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);const u=[];let E=0;for(let R=0;R<bi;++R){const L=R/v,y=Math.exp(-L*L/2);u.push(y),R===0?E+=y:R<m&&(E+=2*y)}for(let R=0;R<u.length;R++)u[R]=u[R]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const S=this._sizeLods[s],A=3*S*(s>b-ts?s-b+ts:0),w=4*(this._cubeSize-S);Pr(t,A,w,3*S,2*S),l.setRenderTarget(t),l.render(d,Oa)}}function zm(i){const e=[],t=[],n=[];let s=i;const r=i-ts+1+ec.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-ts?l=ec[a-i+ts-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,v=3,m=2,u=1,E=new Float32Array(v*g*p),b=new Float32Array(m*g*p),S=new Float32Array(u*g*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,L=w>2?0:-1,y=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];E.set(y,v*g*w),b.set(f,m*g*w);const M=[w,w,w,w,w,w];S.set(M,u*g*w)}const A=new Et;A.setAttribute("position",new cn(E,v)),A.setAttribute("uv",new cn(b,m)),A.setAttribute("faceIndex",new cn(S,u)),e.push(A),s>ts&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sc(i,e,t){const n=new Ci(i,e,t);return n.texture.mapping=Qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function km(i,e,t){const n=new Float32Array(bi),s=new P(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:tl(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function rc(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tl(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function ac(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function tl(){return`

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
	`}function Hm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===no||l===io,h=l===hs||l===us;if(c||h){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new ic(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new ic(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Vm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Gs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Gm(i,e,t,n){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const E=p.array;v=p.version;for(let b=0,S=E.length;b<S;b+=3){const A=E[b+0],w=E[b+1],R=E[b+2];f.push(A,w,w,R,R,A)}}else if(g!==void 0){const E=g.array;v=g.version;for(let b=0,S=E.length/3-1;b<S;b+=3){const A=b+0,w=b+1,R=b+2;f.push(A,w,w,R,R,A)}}else return;const m=new(lh(f)?dh:uh)(f,1);m.version=v;const u=r.get(d);u&&e.remove(u),r.set(d,m)}function h(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Wm(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),t.update(p,n,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];t.update(m,n,1)}function d(f,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/a,p[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,g);let u=0;for(let E=0;E<g;E++)u+=p[E]*v[E];t.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Xm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ym(i,e,t){const n=new WeakMap,s=new Mt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let M=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let A=o.attributes.position.count*S,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const R=new Float32Array(A*w*4*d),L=new ch(R,A,w,d);L.type=On,L.needsUpdate=!0;const y=S*4;for(let D=0;D<d;D++){const F=u[D],V=E[D],Y=b[D],X=A*w*4*D;for(let j=0;j<F.count;j++){const $=j*y;g===!0&&(s.fromBufferAttribute(F,j),R[X+$+0]=s.x,R[X+$+1]=s.y,R[X+$+2]=s.z,R[X+$+3]=0),v===!0&&(s.fromBufferAttribute(V,j),R[X+$+4]=s.x,R[X+$+5]=s.y,R[X+$+6]=s.z,R[X+$+7]=0),m===!0&&(s.fromBufferAttribute(Y,j),R[X+$+8]=s.x,R[X+$+9]=s.y,R[X+$+10]=s.z,R[X+$+11]=Y.itemSize===4?s.w:1)}}f={count:d,texture:L,size:new Pe(A,w)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function qm(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Ah=new Wt,oc=new xh(1,1),Rh=new ch,Ch=new fd,Ph=new mh,lc=[],cc=[],hc=new Float32Array(16),uc=new Float32Array(9),dc=new Float32Array(4);function vs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=lc[s];if(r===void 0&&(r=new Float32Array(s),lc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function na(i,e){let t=cc[e];t===void 0&&(t=new Int32Array(e),cc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function jm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2fv(this.addr,e),Ct(t,e)}}function $m(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;i.uniform3fv(this.addr,e),Ct(t,e)}}function Km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4fv(this.addr,e),Ct(t,e)}}function Jm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;dc.set(n),i.uniformMatrix2fv(this.addr,!1,dc),Ct(t,n)}}function Qm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;uc.set(n),i.uniformMatrix3fv(this.addr,!1,uc),Ct(t,n)}}function e0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;hc.set(n),i.uniformMatrix4fv(this.addr,!1,hc),Ct(t,n)}}function t0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function n0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2iv(this.addr,e),Ct(t,e)}}function i0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3iv(this.addr,e),Ct(t,e)}}function s0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4iv(this.addr,e),Ct(t,e)}}function r0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function a0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2uiv(this.addr,e),Ct(t,e)}}function o0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3uiv(this.addr,e),Ct(t,e)}}function l0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4uiv(this.addr,e),Ct(t,e)}}function c0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(oc.compareFunction=ah,r=oc):r=Ah,t.setTexture2D(e||r,s)}function h0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ch,s)}function u0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ph,s)}function d0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Rh,s)}function f0(i){switch(i){case 5126:return jm;case 35664:return Zm;case 35665:return $m;case 35666:return Km;case 35674:return Jm;case 35675:return Qm;case 35676:return e0;case 5124:case 35670:return t0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return s0;case 5125:return r0;case 36294:return a0;case 36295:return o0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return h0;case 35680:case 36300:case 36308:case 36293:return u0;case 36289:case 36303:case 36311:case 36292:return d0}}function p0(i,e){i.uniform1fv(this.addr,e)}function m0(i,e){const t=vs(e,this.size,2);i.uniform2fv(this.addr,t)}function g0(i,e){const t=vs(e,this.size,3);i.uniform3fv(this.addr,t)}function _0(i,e){const t=vs(e,this.size,4);i.uniform4fv(this.addr,t)}function v0(i,e){const t=vs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function x0(i,e){const t=vs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function M0(i,e){const t=vs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function S0(i,e){i.uniform1iv(this.addr,e)}function y0(i,e){i.uniform2iv(this.addr,e)}function E0(i,e){i.uniform3iv(this.addr,e)}function b0(i,e){i.uniform4iv(this.addr,e)}function T0(i,e){i.uniform1uiv(this.addr,e)}function w0(i,e){i.uniform2uiv(this.addr,e)}function A0(i,e){i.uniform3uiv(this.addr,e)}function R0(i,e){i.uniform4uiv(this.addr,e)}function C0(i,e,t){const n=this.cache,s=e.length,r=na(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Ah,r[a])}function P0(i,e,t){const n=this.cache,s=e.length,r=na(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ch,r[a])}function D0(i,e,t){const n=this.cache,s=e.length,r=na(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ph,r[a])}function L0(i,e,t){const n=this.cache,s=e.length,r=na(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Rh,r[a])}function I0(i){switch(i){case 5126:return p0;case 35664:return m0;case 35665:return g0;case 35666:return _0;case 35674:return v0;case 35675:return x0;case 35676:return M0;case 5124:case 35670:return S0;case 35667:case 35671:return y0;case 35668:case 35672:return E0;case 35669:case 35673:return b0;case 5125:return T0;case 36294:return w0;case 36295:return A0;case 36296:return R0;case 35678:case 36198:case 36298:case 36306:case 35682:return C0;case 35679:case 36299:case 36307:return P0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return L0}}class U0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=f0(t.type)}}class N0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=I0(t.type)}}class F0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function fc(i,e){i.seq.push(e),i.map[e.id]=e}function O0(i,e,t){const n=i.name,s=n.length;for(Va.lastIndex=0;;){const r=Va.exec(n),a=Va.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){fc(t,c===void 0?new U0(o,i,e):new N0(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new F0(o),fc(t,d)),t=d}}}class Hr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);O0(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function pc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const B0=37297;let z0=0;function k0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const mc=new Ve;function H0(i){Ke._getMatrix(mc,Ke.workingColorSpace,i);const e=`mat3( ${mc.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case Xr:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function gc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+k0(i.getShaderSource(e),o)}else return r}function V0(i,e){const t=H0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function G0(i,e){let t;switch(e){case wu:t="Linear";break;case Au:t="Reinhard";break;case Ru:t="Cineon";break;case Cu:t="ACESFilmic";break;case Du:t="AgX";break;case Lu:t="Neutral";break;case Pu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Dr=new P;function W0(){Ke.getLuminanceCoefficients(Dr);const i=Dr.x.toFixed(4),e=Dr.y.toFixed(4),t=Dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function Y0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function q0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Is(i){return i!==""}function _c(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const j0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oo(i){return i.replace(j0,$0)}const Z0=new Map;function $0(i,e){let t=We[e];if(t===void 0){const n=Z0.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Oo(t)}const K0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xc(i){return i.replace(K0,J0)}function J0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Q0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===qc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===jc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function eg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hs:case us:e="ENVMAP_TYPE_CUBE";break;case Qr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tg(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===us&&(e="ENVMAP_MODE_REFRACTION"),e}function ng(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zc:e="ENVMAP_BLENDING_MULTIPLY";break;case bu:e="ENVMAP_BLENDING_MIX";break;case Tu:e="ENVMAP_BLENDING_ADD";break}return e}function ig(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function sg(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Q0(t),c=eg(t),h=tg(t),d=ng(t),f=ig(t),p=X0(t),g=Y0(r),v=s.createProgram();let m,u,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Is).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Is).join(`
`),u.length>0&&(u+=`
`)):(m=[Mc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),u=[Mc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?We.tonemapping_pars_fragment:"",t.toneMapping!==ei?G0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,V0("linearToOutputTexel",t.outputColorSpace),W0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Is).join(`
`)),a=Oo(a),a=_c(a,t),a=vc(a,t),o=Oo(o),o=_c(o,t),o=vc(o,t),a=xc(a),o=xc(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const b=E+m+a,S=E+u+o,A=pc(s,s.VERTEX_SHADER,b),w=pc(s,s.FRAGMENT_SHADER,S);s.attachShader(v,A),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(D){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(v)||"",V=s.getShaderInfoLog(A)||"",Y=s.getShaderInfoLog(w)||"",X=F.trim(),j=V.trim(),$=Y.trim();let W=!0,te=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,A,w);else{const O=gc(s,A,"vertex"),z=gc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+O+`
`+z)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(j===""||$==="")&&(te=!1);te&&(D.diagnostics={runnable:W,programLog:X,vertexShader:{log:j,prefix:m},fragmentShader:{log:$,prefix:u}})}s.deleteShader(A),s.deleteShader(w),L=new Hr(s,v),y=q0(s,v)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,B0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=z0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=w,this}let rg=0;class ag{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new og(e),t.set(e,n)),n}}class og{constructor(e){this.id=rg++,this.code=e,this.usedTimes=0}}function lg(i,e,t,n,s,r,a){const o=new $o,l=new ag,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,D,F,V){const Y=F.fog,X=V.geometry,j=y.isMeshStandardMaterial?F.environment:null,$=(y.isMeshStandardMaterial?t:e).get(y.envMap||j),W=$&&$.mapping===Qr?$.image.height:null,te=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const O=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,z=O!==void 0?O.length:0;let Q=0;X.morphAttributes.position!==void 0&&(Q=1),X.morphAttributes.normal!==void 0&&(Q=2),X.morphAttributes.color!==void 0&&(Q=3);let _e,Ce,fe,k;if(te){const et=yn[te];_e=et.vertexShader,Ce=et.fragmentShader}else _e=y.vertexShader,Ce=y.fragmentShader,l.update(y),fe=l.getVertexShaderID(y),k=l.getFragmentShaderID(y);const K=i.getRenderTarget(),oe=i.state.buffers.depth.getReversed(),me=V.isInstancedMesh===!0,he=V.isBatchedMesh===!0,Ue=!!y.map,Ze=!!y.matcap,C=!!$,Qe=!!y.aoMap,Be=!!y.lightMap,Le=!!y.bumpMap,Ee=!!y.normalMap,ft=!!y.displacementMap,be=!!y.emissiveMap,Ge=!!y.metalnessMap,Pt=!!y.roughnessMap,yt=y.anisotropy>0,T=y.clearcoat>0,_=y.dispersion>0,B=y.iridescence>0,Z=y.sheen>0,ee=y.transmission>0,q=yt&&!!y.anisotropyMap,Re=T&&!!y.clearcoatMap,ae=T&&!!y.clearcoatNormalMap,Te=T&&!!y.clearcoatRoughnessMap,we=B&&!!y.iridescenceMap,se=B&&!!y.iridescenceThicknessMap,ge=Z&&!!y.sheenColorMap,Fe=Z&&!!y.sheenRoughnessMap,Ae=!!y.specularMap,de=!!y.specularColorMap,He=!!y.specularIntensityMap,I=ee&&!!y.transmissionMap,re=ee&&!!y.thicknessMap,le=!!y.gradientMap,xe=!!y.alphaMap,ne=y.alphaTest>0,J=!!y.alphaHash,ye=!!y.extensions;let ke=ei;y.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ke=i.toneMapping);const ct={shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:_e,fragmentShader:Ce,defines:y.defines,customVertexShaderID:fe,customFragmentShaderID:k,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:he,batchingColor:he&&V._colorsTexture!==null,instancing:me,instancingColor:me&&V.instanceColor!==null,instancingMorph:me&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ds,alphaToCoverage:!!y.alphaToCoverage,map:Ue,matcap:Ze,envMap:C,envMapMode:C&&$.mapping,envMapCubeUVHeight:W,aoMap:Qe,lightMap:Be,bumpMap:Le,normalMap:Ee,displacementMap:f&&ft,emissiveMap:be,normalMapObjectSpace:Ee&&y.normalMapType===Fu,normalMapTangentSpace:Ee&&y.normalMapType===rh,metalnessMap:Ge,roughnessMap:Pt,anisotropy:yt,anisotropyMap:q,clearcoat:T,clearcoatMap:Re,clearcoatNormalMap:ae,clearcoatRoughnessMap:Te,dispersion:_,iridescence:B,iridescenceMap:we,iridescenceThicknessMap:se,sheen:Z,sheenColorMap:ge,sheenRoughnessMap:Fe,specularMap:Ae,specularColorMap:de,specularIntensityMap:He,transmission:ee,transmissionMap:I,thicknessMap:re,gradientMap:le,opaque:y.transparent===!1&&y.blending===ss&&y.alphaToCoverage===!1,alphaMap:xe,alphaTest:ne,alphaHash:J,combine:y.combine,mapUv:Ue&&v(y.map.channel),aoMapUv:Qe&&v(y.aoMap.channel),lightMapUv:Be&&v(y.lightMap.channel),bumpMapUv:Le&&v(y.bumpMap.channel),normalMapUv:Ee&&v(y.normalMap.channel),displacementMapUv:ft&&v(y.displacementMap.channel),emissiveMapUv:be&&v(y.emissiveMap.channel),metalnessMapUv:Ge&&v(y.metalnessMap.channel),roughnessMapUv:Pt&&v(y.roughnessMap.channel),anisotropyMapUv:q&&v(y.anisotropyMap.channel),clearcoatMapUv:Re&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:se&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&v(y.sheenRoughnessMap.channel),specularMapUv:Ae&&v(y.specularMap.channel),specularColorMapUv:de&&v(y.specularColorMap.channel),specularIntensityMapUv:He&&v(y.specularIntensityMap.channel),transmissionMapUv:I&&v(y.transmissionMap.channel),thicknessMapUv:re&&v(y.thicknessMap.channel),alphaMapUv:xe&&v(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ee||yt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!X.attributes.uv&&(Ue||xe),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:oe,skinning:V.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:Q,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ue&&y.map.isVideoTexture===!0&&Ke.getTransfer(y.map.colorSpace)===rt,decodeVideoTextureEmissive:be&&y.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(y.emissiveMap.colorSpace)===rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===tn,flipSided:y.side===Zt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ye&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&y.extensions.multiDraw===!0||he)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function u(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)M.push(D),M.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(E(M,y),b(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function E(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function b(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function S(y){const M=g[y.type];let D;if(M){const F=yn[M];D=wd.clone(F.uniforms)}else D=y.uniforms;return D}function A(y,M){let D;for(let F=0,V=h.length;F<V;F++){const Y=h[F];if(Y.cacheKey===M){D=Y,++D.usedTimes;break}}return D===void 0&&(D=new sg(i,M,y,r),h.push(D)),D}function w(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function R(y){l.remove(y)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:S,acquireProgram:A,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:L}}function cg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function hg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Sc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,f,p,g,v,m){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},i[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=v,u.group=m),e++,u}function o(d,f,p,g,v,m){const u=a(d,f,p,g,v,m);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):t.push(u)}function l(d,f,p,g,v,m){const u=a(d,f,p,g,v,m);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||hg),n.length>1&&n.sort(f||Sc),s.length>1&&s.sort(f||Sc)}function h(){for(let d=e,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function ug(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new yc,i.set(n,[a])):s>=r.length?(a=new yc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function dg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new qe};break;case"SpotLight":t={position:new P,direction:new P,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function fg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let pg=0;function mg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function gg(i){const e=new dg,t=fg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new ht,a=new ht;function o(c){let h=0,d=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,v=0,m=0,u=0,E=0,b=0,S=0,A=0,w=0,R=0;c.sort(mg);for(let y=0,M=c.length;y<M;y++){const D=c[y],F=D.color,V=D.intensity,Y=D.distance,X=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=F.r*V,d+=F.g*V,f+=F.b*V;else if(D.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(D.sh.coefficients[j],V);R++}else if(D.isDirectionalLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const $=D.shadow,W=t.get(D);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=D.shadow.matrix,E++}n.directional[p]=j,p++}else if(D.isSpotLight){const j=e.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(F).multiplyScalar(V),j.distance=Y,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,n.spot[v]=j;const $=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,$.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[v]=$.matrix,D.castShadow){const W=t.get(D);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=X,S++}v++}else if(D.isRectAreaLight){const j=e.get(D);j.color.copy(F).multiplyScalar(V),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=j,m++}else if(D.isPointLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),j.distance=D.distance,j.decay=D.decay,D.castShadow){const $=D.shadow,W=t.get(D);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=D.shadow.matrix,b++}n.point[g]=j,g++}else if(D.isHemisphereLight){const j=e.get(D);j.skyColor.copy(D.color).multiplyScalar(V),j.groundColor.copy(D.groundColor).multiplyScalar(V),n.hemi[u]=j,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==u||L.numDirectionalShadows!==E||L.numPointShadows!==b||L.numSpotShadows!==S||L.numSpotMaps!==A||L.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,L.directionalLength=p,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=u,L.numDirectionalShadows=E,L.numPointShadows=b,L.numSpotShadows=S,L.numSpotMaps=A,L.numLightProbes=R,n.version=pg++)}function l(c,h){let d=0,f=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let u=0,E=c.length;u<E;u++){const b=c[u];if(b.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(b.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Ec(i){const e=new gg(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function _g(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Ec(i),e.set(s,[o])):r>=a.length?(o=new Ec(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xg=`uniform sampler2D shadow_pass;
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
}`;function Mg(i,e,t){let n=new Ko;const s=new Pe,r=new Pe,a=new Mt,o=new kd({depthPacking:Nu}),l=new Hd,c={},h=t.maxTextureSize,d={[ni]:Zt,[Zt]:ni,[tn]:tn},f=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:vg,fragmentShader:xg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Et;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ce(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qc;let u=this.type;this.render=function(w,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Qn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=u!==In&&this.type===In,Y=u===In&&this.type!==In;for(let X=0,j=w.length;X<j;X++){const $=w[X],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const te=W.getFrameExtents();if(s.multiply(te),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,W.mapSize.y=r.y)),W.map===null||V===!0||Y===!0){const z=this.type!==In?{minFilter:gn,magFilter:gn}:{};W.map!==null&&W.map.dispose(),W.map=new Ci(s.x,s.y,z),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const O=W.getViewportCount();for(let z=0;z<O;z++){const Q=W.getViewport(z);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),F.viewport(a),W.updateMatrices($,z),n=W.getFrustum(),S(R,L,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===In&&E(W,L),W.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(y,M,D)};function E(w,R){const L=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ci(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,L,f,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,L,p,v,null)}function b(w,R,L,y){let M=null;const D=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)M=D;else if(M=L.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=M.uuid,V=R.uuid;let Y=c[F];Y===void 0&&(Y={},c[F]=Y);let X=Y[V];X===void 0&&(X=M.clone(),Y[V]=X,R.addEventListener("dispose",A)),M=X}if(M.visible=R.visible,M.wireframe=R.wireframe,y===In?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=i.properties.get(M);F.light=L}return M}function S(w,R,L,y,M){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===In)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const V=e.update(w),Y=w.material;if(Array.isArray(Y)){const X=V.groups;for(let j=0,$=X.length;j<$;j++){const W=X[j],te=Y[W.materialIndex];if(te&&te.visible){const O=b(w,te,y,M);w.onBeforeShadow(i,w,R,L,V,O,W),i.renderBufferDirect(L,null,V,O,w,W),w.onAfterShadow(i,w,R,L,V,O,W)}}}else if(Y.visible){const X=b(w,Y,y,M);w.onBeforeShadow(i,w,R,L,V,X,null),i.renderBufferDirect(L,null,V,X,w,null),w.onAfterShadow(i,w,R,L,V,X,null)}}const F=w.children;for(let V=0,Y=F.length;V<Y;V++)S(F[V],R,L,y,M)}function A(w){w.target.removeEventListener("dispose",A);for(const L in c){const y=c[L],M=w.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const Sg={[Za]:$a,[Ka]:eo,[Ja]:to,[cs]:Qa,[$a]:Za,[eo]:Ka,[to]:Ja,[Qa]:cs};function yg(i,e){function t(){let I=!1;const re=new Mt;let le=null;const xe=new Mt(0,0,0,0);return{setMask:function(ne){le!==ne&&!I&&(i.colorMask(ne,ne,ne,ne),le=ne)},setLocked:function(ne){I=ne},setClear:function(ne,J,ye,ke,ct){ct===!0&&(ne*=ke,J*=ke,ye*=ke),re.set(ne,J,ye,ke),xe.equals(re)===!1&&(i.clearColor(ne,J,ye,ke),xe.copy(re))},reset:function(){I=!1,le=null,xe.set(-1,0,0,0)}}}function n(){let I=!1,re=!1,le=null,xe=null,ne=null;return{setReversed:function(J){if(re!==J){const ye=e.get("EXT_clip_control");J?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),re=J;const ke=ne;ne=null,this.setClear(ke)}},getReversed:function(){return re},setTest:function(J){J?K(i.DEPTH_TEST):oe(i.DEPTH_TEST)},setMask:function(J){le!==J&&!I&&(i.depthMask(J),le=J)},setFunc:function(J){if(re&&(J=Sg[J]),xe!==J){switch(J){case Za:i.depthFunc(i.NEVER);break;case $a:i.depthFunc(i.ALWAYS);break;case Ka:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case Ja:i.depthFunc(i.EQUAL);break;case Qa:i.depthFunc(i.GEQUAL);break;case eo:i.depthFunc(i.GREATER);break;case to:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=J}},setLocked:function(J){I=J},setClear:function(J){ne!==J&&(re&&(J=1-J),i.clearDepth(J),ne=J)},reset:function(){I=!1,le=null,xe=null,ne=null,re=!1}}}function s(){let I=!1,re=null,le=null,xe=null,ne=null,J=null,ye=null,ke=null,ct=null;return{setTest:function(et){I||(et?K(i.STENCIL_TEST):oe(i.STENCIL_TEST))},setMask:function(et){re!==et&&!I&&(i.stencilMask(et),re=et)},setFunc:function(et,An,Mn){(le!==et||xe!==An||ne!==Mn)&&(i.stencilFunc(et,An,Mn),le=et,xe=An,ne=Mn)},setOp:function(et,An,Mn){(J!==et||ye!==An||ke!==Mn)&&(i.stencilOp(et,An,Mn),J=et,ye=An,ke=Mn)},setLocked:function(et){I=et},setClear:function(et){ct!==et&&(i.clearStencil(et),ct=et)},reset:function(){I=!1,re=null,le=null,xe=null,ne=null,J=null,ye=null,ke=null,ct=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,p=[],g=null,v=!1,m=null,u=null,E=null,b=null,S=null,A=null,w=null,R=new qe(0,0,0),L=0,y=!1,M=null,D=null,F=null,V=null,Y=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,$=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),j=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),j=$>=2);let te=null,O={};const z=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),_e=new Mt().fromArray(z),Ce=new Mt().fromArray(Q);function fe(I,re,le,xe){const ne=new Uint8Array(4),J=i.createTexture();i.bindTexture(I,J),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ye=0;ye<le;ye++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(re+ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return J}const k={};k[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),k[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),k[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(cs),Le(!1),Ee(vl),K(i.CULL_FACE),Qe(Qn);function K(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function oe(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function me(I,re){return d[I]!==re?(i.bindFramebuffer(I,re),d[I]=re,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=re),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=re),!0):!1}function he(I,re){let le=p,xe=!1;if(I){le=f.get(re),le===void 0&&(le=[],f.set(re,le));const ne=I.textures;if(le.length!==ne.length||le[0]!==i.COLOR_ATTACHMENT0){for(let J=0,ye=ne.length;J<ye;J++)le[J]=i.COLOR_ATTACHMENT0+J;le.length=ne.length,xe=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,xe=!0);xe&&i.drawBuffers(le)}function Ue(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const Ze={[yi]:i.FUNC_ADD,[ou]:i.FUNC_SUBTRACT,[lu]:i.FUNC_REVERSE_SUBTRACT};Ze[cu]=i.MIN,Ze[hu]=i.MAX;const C={[uu]:i.ZERO,[du]:i.ONE,[fu]:i.SRC_COLOR,[qa]:i.SRC_ALPHA,[xu]:i.SRC_ALPHA_SATURATE,[_u]:i.DST_COLOR,[mu]:i.DST_ALPHA,[pu]:i.ONE_MINUS_SRC_COLOR,[ja]:i.ONE_MINUS_SRC_ALPHA,[vu]:i.ONE_MINUS_DST_COLOR,[gu]:i.ONE_MINUS_DST_ALPHA,[Mu]:i.CONSTANT_COLOR,[Su]:i.ONE_MINUS_CONSTANT_COLOR,[yu]:i.CONSTANT_ALPHA,[Eu]:i.ONE_MINUS_CONSTANT_ALPHA};function Qe(I,re,le,xe,ne,J,ye,ke,ct,et){if(I===Qn){v===!0&&(oe(i.BLEND),v=!1);return}if(v===!1&&(K(i.BLEND),v=!0),I!==au){if(I!==m||et!==y){if((u!==yi||S!==yi)&&(i.blendEquation(i.FUNC_ADD),u=yi,S=yi),et)switch(I){case ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xl:i.blendFunc(i.ONE,i.ONE);break;case Ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ml:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,b=null,A=null,w=null,R.set(0,0,0),L=0,m=I,y=et}return}ne=ne||re,J=J||le,ye=ye||xe,(re!==u||ne!==S)&&(i.blendEquationSeparate(Ze[re],Ze[ne]),u=re,S=ne),(le!==E||xe!==b||J!==A||ye!==w)&&(i.blendFuncSeparate(C[le],C[xe],C[J],C[ye]),E=le,b=xe,A=J,w=ye),(ke.equals(R)===!1||ct!==L)&&(i.blendColor(ke.r,ke.g,ke.b,ct),R.copy(ke),L=ct),m=I,y=!1}function Be(I,re){I.side===tn?oe(i.CULL_FACE):K(i.CULL_FACE);let le=I.side===Zt;re&&(le=!le),Le(le),I.blending===ss&&I.transparent===!1?Qe(Qn):Qe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const xe=I.stencilWrite;o.setTest(xe),xe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),be(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Le(I){M!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),M=I)}function Ee(I){I!==su?(K(i.CULL_FACE),I!==D&&(I===vl?i.cullFace(i.BACK):I===ru?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):oe(i.CULL_FACE),D=I}function ft(I){I!==F&&(j&&i.lineWidth(I),F=I)}function be(I,re,le){I?(K(i.POLYGON_OFFSET_FILL),(V!==re||Y!==le)&&(i.polygonOffset(re,le),V=re,Y=le)):oe(i.POLYGON_OFFSET_FILL)}function Ge(I){I?K(i.SCISSOR_TEST):oe(i.SCISSOR_TEST)}function Pt(I){I===void 0&&(I=i.TEXTURE0+X-1),te!==I&&(i.activeTexture(I),te=I)}function yt(I,re,le){le===void 0&&(te===null?le=i.TEXTURE0+X-1:le=te);let xe=O[le];xe===void 0&&(xe={type:void 0,texture:void 0},O[le]=xe),(xe.type!==I||xe.texture!==re)&&(te!==le&&(i.activeTexture(le),te=le),i.bindTexture(I,re||k[I]),xe.type=I,xe.texture=re)}function T(){const I=O[te];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(I){_e.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),_e.copy(I))}function Fe(I){Ce.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Ce.copy(I))}function Ae(I,re){let le=c.get(re);le===void 0&&(le=new WeakMap,c.set(re,le));let xe=le.get(I);xe===void 0&&(xe=i.getUniformBlockIndex(re,I.name),le.set(I,xe))}function de(I,re){const xe=c.get(re).get(I);l.get(re)!==xe&&(i.uniformBlockBinding(re,xe,I.__bindingPointIndex),l.set(re,xe))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},te=null,O={},d={},f=new WeakMap,p=[],g=null,v=!1,m=null,u=null,E=null,b=null,S=null,A=null,w=null,R=new qe(0,0,0),L=0,y=!1,M=null,D=null,F=null,V=null,Y=null,_e.set(0,0,i.canvas.width,i.canvas.height),Ce.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:oe,bindFramebuffer:me,drawBuffers:he,useProgram:Ue,setBlending:Qe,setMaterial:Be,setFlipSided:Le,setCullFace:Ee,setLineWidth:ft,setPolygonOffset:be,setScissorTest:Ge,activeTexture:Pt,bindTexture:yt,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:B,texImage2D:we,texImage3D:se,updateUBOMapping:Ae,uniformBlockBinding:de,texStorage2D:ae,texStorage3D:Te,texSubImage2D:Z,texSubImage3D:ee,compressedTexSubImage2D:q,compressedTexSubImage3D:Re,scissor:ge,viewport:Fe,reset:He}}function Eg(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pe,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return p?new OffscreenCanvas(T,_):qr("canvas")}function v(T,_,B){let Z=1;const ee=yt(T);if((ee.width>B||ee.height>B)&&(Z=B/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(Z*ee.width),Re=Math.floor(Z*ee.height);d===void 0&&(d=g(q,Re));const ae=_?g(q,Re):d;return ae.width=q,ae.height=Re,ae.getContext("2d").drawImage(T,0,0,q,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+q+"x"+Re+")."),ae}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),T;return T}function m(T){return T.generateMipmaps}function u(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,_,B,Z,ee=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=_;if(_===i.RED&&(B===i.FLOAT&&(q=i.R32F),B===i.HALF_FLOAT&&(q=i.R16F),B===i.UNSIGNED_BYTE&&(q=i.R8)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.R8UI),B===i.UNSIGNED_SHORT&&(q=i.R16UI),B===i.UNSIGNED_INT&&(q=i.R32UI),B===i.BYTE&&(q=i.R8I),B===i.SHORT&&(q=i.R16I),B===i.INT&&(q=i.R32I)),_===i.RG&&(B===i.FLOAT&&(q=i.RG32F),B===i.HALF_FLOAT&&(q=i.RG16F),B===i.UNSIGNED_BYTE&&(q=i.RG8)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RG8UI),B===i.UNSIGNED_SHORT&&(q=i.RG16UI),B===i.UNSIGNED_INT&&(q=i.RG32UI),B===i.BYTE&&(q=i.RG8I),B===i.SHORT&&(q=i.RG16I),B===i.INT&&(q=i.RG32I)),_===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(q=i.RGB16UI),B===i.UNSIGNED_INT&&(q=i.RGB32UI),B===i.BYTE&&(q=i.RGB8I),B===i.SHORT&&(q=i.RGB16I),B===i.INT&&(q=i.RGB32I)),_===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),B===i.UNSIGNED_INT&&(q=i.RGBA32UI),B===i.BYTE&&(q=i.RGBA8I),B===i.SHORT&&(q=i.RGBA16I),B===i.INT&&(q=i.RGBA32I)),_===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),_===i.RGBA){const Re=ee?Xr:Ke.getTransfer(Z);B===i.FLOAT&&(q=i.RGBA32F),B===i.HALF_FLOAT&&(q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(q=Re===rt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function S(T,_){let B;return T?_===null||_===Ri||_===zs?B=i.DEPTH24_STENCIL8:_===On?B=i.DEPTH32F_STENCIL8:_===Bs&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ri||_===zs?B=i.DEPTH_COMPONENT24:_===On?B=i.DEPTH_COMPONENT32F:_===Bs&&(B=i.DEPTH_COMPONENT16),B}function A(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==gn&&T.minFilter!==En?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function w(T){const _=T.target;_.removeEventListener("dispose",w),L(_),_.isVideoTexture&&h.delete(_)}function R(T){const _=T.target;_.removeEventListener("dispose",R),M(_)}function L(T){const _=n.get(T);if(_.__webglInit===void 0)return;const B=T.source,Z=f.get(B);if(Z){const ee=Z[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&y(T),Object.keys(Z).length===0&&f.delete(B)}n.remove(T)}function y(T){const _=n.get(T);i.deleteTexture(_.__webglTexture);const B=T.source,Z=f.get(B);delete Z[_.__cacheKey],a.memory.textures--}function M(T){const _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let ee=0;ee<_.__webglFramebuffer[Z].length;ee++)i.deleteFramebuffer(_.__webglFramebuffer[Z][ee]);else i.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[Z]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=T.textures;for(let Z=0,ee=B.length;Z<ee;Z++){const q=n.get(B[Z]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(B[Z])}n.remove(T)}let D=0;function F(){D=0}function V(){const T=D;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),D+=1,T}function Y(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function X(T,_){const B=n.get(T);if(T.isVideoTexture&&Ge(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(B,T,_);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function j(T,_){const B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){k(B,T,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function $(T,_){const B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){k(B,T,_);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function W(T,_){const B=n.get(T);if(T.version>0&&B.__version!==T.version){K(B,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}const te={[so]:i.REPEAT,[Ti]:i.CLAMP_TO_EDGE,[ro]:i.MIRRORED_REPEAT},O={[gn]:i.NEAREST,[Iu]:i.NEAREST_MIPMAP_NEAREST,[ir]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[ha]:i.LINEAR_MIPMAP_NEAREST,[wi]:i.LINEAR_MIPMAP_LINEAR},z={[Ou]:i.NEVER,[Gu]:i.ALWAYS,[Bu]:i.LESS,[ah]:i.LEQUAL,[zu]:i.EQUAL,[Vu]:i.GEQUAL,[ku]:i.GREATER,[Hu]:i.NOTEQUAL};function Q(T,_){if(_.type===On&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===En||_.magFilter===ha||_.magFilter===ir||_.magFilter===wi||_.minFilter===En||_.minFilter===ha||_.minFilter===ir||_.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,te[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,te[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,te[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,O[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,O[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,z[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===gn||_.minFilter!==ir&&_.minFilter!==wi||_.type===On&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function _e(T,_){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",w));const Z=_.source;let ee=f.get(Z);ee===void 0&&(ee={},f.set(Z,ee));const q=Y(_);if(q!==T.__cacheKey){ee[q]===void 0&&(ee[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),ee[q].usedTimes++;const Re=ee[T.__cacheKey];Re!==void 0&&(ee[T.__cacheKey].usedTimes--,Re.usedTimes===0&&y(_)),T.__cacheKey=q,T.__webglTexture=ee[q].texture}return B}function Ce(T,_,B){return Math.floor(Math.floor(T/B)/_)}function fe(T,_,B,Z){const q=T.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,B,Z,_.data);else{q.sort((se,ge)=>se.start-ge.start);let Re=0;for(let se=1;se<q.length;se++){const ge=q[Re],Fe=q[se],Ae=ge.start+ge.count,de=Ce(Fe.start,_.width,4),He=Ce(ge.start,_.width,4);Fe.start<=Ae+1&&de===He&&Ce(Fe.start+Fe.count-1,_.width,4)===de?ge.count=Math.max(ge.count,Fe.start+Fe.count-ge.start):(++Re,q[Re]=Fe)}q.length=Re+1;const ae=i.getParameter(i.UNPACK_ROW_LENGTH),Te=i.getParameter(i.UNPACK_SKIP_PIXELS),we=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let se=0,ge=q.length;se<ge;se++){const Fe=q[se],Ae=Math.floor(Fe.start/4),de=Math.ceil(Fe.count/4),He=Ae%_.width,I=Math.floor(Ae/_.width),re=de,le=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,He),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,He,I,re,le,B,Z,_.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ae),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),i.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function k(T,_,B){let Z=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=i.TEXTURE_3D);const ee=_e(T,_),q=_.source;t.bindTexture(Z,T.__webglTexture,i.TEXTURE0+B);const Re=n.get(q);if(q.version!==Re.__version||ee===!0){t.activeTexture(i.TEXTURE0+B);const ae=Ke.getPrimaries(Ke.workingColorSpace),Te=_.colorSpace===Kn?null:Ke.getPrimaries(_.colorSpace),we=_.colorSpace===Kn||ae===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let se=v(_.image,!1,s.maxTextureSize);se=Pt(_,se);const ge=r.convert(_.format,_.colorSpace),Fe=r.convert(_.type);let Ae=b(_.internalFormat,ge,Fe,_.colorSpace,_.isVideoTexture);Q(Z,_);let de;const He=_.mipmaps,I=_.isVideoTexture!==!0,re=Re.__version===void 0||ee===!0,le=q.dataReady,xe=A(_,se);if(_.isDepthTexture)Ae=S(_.format===Hs,_.type),re&&(I?t.texStorage2D(i.TEXTURE_2D,1,Ae,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Ae,se.width,se.height,0,ge,Fe,null));else if(_.isDataTexture)if(He.length>0){I&&re&&t.texStorage2D(i.TEXTURE_2D,xe,Ae,He[0].width,He[0].height);for(let ne=0,J=He.length;ne<J;ne++)de=He[ne],I?le&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,de.width,de.height,ge,Fe,de.data):t.texImage2D(i.TEXTURE_2D,ne,Ae,de.width,de.height,0,ge,Fe,de.data);_.generateMipmaps=!1}else I?(re&&t.texStorage2D(i.TEXTURE_2D,xe,Ae,se.width,se.height),le&&fe(_,se,ge,Fe)):t.texImage2D(i.TEXTURE_2D,0,Ae,se.width,se.height,0,ge,Fe,se.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Ae,He[0].width,He[0].height,se.depth);for(let ne=0,J=He.length;ne<J;ne++)if(de=He[ne],_.format!==mn)if(ge!==null)if(I){if(le)if(_.layerUpdates.size>0){const ye=Ql(de.width,de.height,_.format,_.type);for(const ke of _.layerUpdates){const ct=de.data.subarray(ke*ye/de.data.BYTES_PER_ELEMENT,(ke+1)*ye/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,ke,de.width,de.height,1,ge,ct)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,se.depth,ge,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Ae,de.width,de.height,se.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?le&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,se.depth,ge,Fe,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Ae,de.width,de.height,se.depth,0,ge,Fe,de.data)}else{I&&re&&t.texStorage2D(i.TEXTURE_2D,xe,Ae,He[0].width,He[0].height);for(let ne=0,J=He.length;ne<J;ne++)de=He[ne],_.format!==mn?ge!==null?I?le&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,de.width,de.height,ge,de.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Ae,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?le&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,de.width,de.height,ge,Fe,de.data):t.texImage2D(i.TEXTURE_2D,ne,Ae,de.width,de.height,0,ge,Fe,de.data)}else if(_.isDataArrayTexture)if(I){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Ae,se.width,se.height,se.depth),le)if(_.layerUpdates.size>0){const ne=Ql(se.width,se.height,_.format,_.type);for(const J of _.layerUpdates){const ye=se.data.subarray(J*ne/se.data.BYTES_PER_ELEMENT,(J+1)*ne/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,se.width,se.height,1,ge,Fe,ye)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ge,Fe,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,se.width,se.height,se.depth,0,ge,Fe,se.data);else if(_.isData3DTexture)I?(re&&t.texStorage3D(i.TEXTURE_3D,xe,Ae,se.width,se.height,se.depth),le&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ge,Fe,se.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,se.width,se.height,se.depth,0,ge,Fe,se.data);else if(_.isFramebufferTexture){if(re)if(I)t.texStorage2D(i.TEXTURE_2D,xe,Ae,se.width,se.height);else{let ne=se.width,J=se.height;for(let ye=0;ye<xe;ye++)t.texImage2D(i.TEXTURE_2D,ye,Ae,ne,J,0,ge,Fe,null),ne>>=1,J>>=1}}else if(He.length>0){if(I&&re){const ne=yt(He[0]);t.texStorage2D(i.TEXTURE_2D,xe,Ae,ne.width,ne.height)}for(let ne=0,J=He.length;ne<J;ne++)de=He[ne],I?le&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ge,Fe,de):t.texImage2D(i.TEXTURE_2D,ne,Ae,ge,Fe,de);_.generateMipmaps=!1}else if(I){if(re){const ne=yt(se);t.texStorage2D(i.TEXTURE_2D,xe,Ae,ne.width,ne.height)}le&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Fe,se)}else t.texImage2D(i.TEXTURE_2D,0,Ae,ge,Fe,se);m(_)&&u(Z),Re.__version=q.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function K(T,_,B){if(_.image.length!==6)return;const Z=_e(T,_),ee=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const q=n.get(ee);if(ee.version!==q.__version||Z===!0){t.activeTexture(i.TEXTURE0+B);const Re=Ke.getPrimaries(Ke.workingColorSpace),ae=_.colorSpace===Kn?null:Ke.getPrimaries(_.colorSpace),Te=_.colorSpace===Kn||Re===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const we=_.isCompressedTexture||_.image[0].isCompressedTexture,se=_.image[0]&&_.image[0].isDataTexture,ge=[];for(let J=0;J<6;J++)!we&&!se?ge[J]=v(_.image[J],!0,s.maxCubemapSize):ge[J]=se?_.image[J].image:_.image[J],ge[J]=Pt(_,ge[J]);const Fe=ge[0],Ae=r.convert(_.format,_.colorSpace),de=r.convert(_.type),He=b(_.internalFormat,Ae,de,_.colorSpace),I=_.isVideoTexture!==!0,re=q.__version===void 0||Z===!0,le=ee.dataReady;let xe=A(_,Fe);Q(i.TEXTURE_CUBE_MAP,_);let ne;if(we){I&&re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,He,Fe.width,Fe.height);for(let J=0;J<6;J++){ne=ge[J].mipmaps;for(let ye=0;ye<ne.length;ye++){const ke=ne[ye];_.format!==mn?Ae!==null?I?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,0,0,ke.width,ke.height,Ae,ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,He,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,0,0,ke.width,ke.height,Ae,de,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,He,ke.width,ke.height,0,Ae,de,ke.data)}}}else{if(ne=_.mipmaps,I&&re){ne.length>0&&xe++;const J=yt(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,He,J.width,J.height)}for(let J=0;J<6;J++)if(se){I?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ge[J].width,ge[J].height,Ae,de,ge[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,He,ge[J].width,ge[J].height,0,Ae,de,ge[J].data);for(let ye=0;ye<ne.length;ye++){const ct=ne[ye].image[J].image;I?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,0,0,ct.width,ct.height,Ae,de,ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,He,ct.width,ct.height,0,Ae,de,ct.data)}}else{I?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ae,de,ge[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,He,Ae,de,ge[J]);for(let ye=0;ye<ne.length;ye++){const ke=ne[ye];I?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,0,0,Ae,de,ke.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,He,Ae,de,ke.image[J])}}}m(_)&&u(i.TEXTURE_CUBE_MAP),q.__version=ee.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function oe(T,_,B,Z,ee,q){const Re=r.convert(B.format,B.colorSpace),ae=r.convert(B.type),Te=b(B.internalFormat,Re,ae,B.colorSpace),we=n.get(_),se=n.get(B);if(se.__renderTarget=_,!we.__hasExternalTextures){const ge=Math.max(1,_.width>>q),Fe=Math.max(1,_.height>>q);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,q,Te,ge,Fe,_.depth,0,Re,ae,null):t.texImage2D(ee,q,Te,ge,Fe,0,Re,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),be(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ee,se.__webglTexture,0,ft(_)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ee,se.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(T,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){const Z=_.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,q=S(_.stencilBuffer,ee),Re=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=ft(_);be(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,q,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,q,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,q,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,T)}else{const Z=_.textures;for(let ee=0;ee<Z.length;ee++){const q=Z[ee],Re=r.convert(q.format,q.colorSpace),ae=r.convert(q.type),Te=b(q.internalFormat,Re,ae,q.colorSpace),we=ft(_);B&&be(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,Te,_.width,_.height):be(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,Te,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Te,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(_.depthTexture);Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);const ee=Z.__webglTexture,q=ft(_);if(_.depthTexture.format===ks)be(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(_.depthTexture.format===Hs)be(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ue(T){const _=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){const ee=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),_.__depthDisposeCallback=ee}_.__boundDepthTexture=Z}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const Z=T.texture.mipmaps;Z&&Z.length>0?he(_.__webglFramebuffer[0],T):he(_.__webglFramebuffer,T)}else if(B){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=i.createRenderbuffer(),me(_.__webglDepthbuffer[Z],T,!1);else{const ee=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,q)}}else{const Z=T.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),me(_.__webglDepthbuffer,T,!1);else{const ee=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(T,_,B){const Z=n.get(T);_!==void 0&&oe(Z.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ue(T)}function C(T){const _=T.texture,B=n.get(T),Z=n.get(_);T.addEventListener("dispose",R);const ee=T.textures,q=T.isWebGLCubeRenderTarget===!0,Re=ee.length>1;if(Re||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=_.version,a.memory.textures++),q){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[ae]=[];for(let Te=0;Te<_.mipmaps.length;Te++)B.__webglFramebuffer[ae][Te]=i.createFramebuffer()}else B.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let ae=0;ae<_.mipmaps.length;ae++)B.__webglFramebuffer[ae]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Re)for(let ae=0,Te=ee.length;ae<Te;ae++){const we=n.get(ee[ae]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&be(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ae=0;ae<ee.length;ae++){const Te=ee[ae];B.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ae]);const we=r.convert(Te.format,Te.colorSpace),se=r.convert(Te.type),ge=b(Te.internalFormat,we,se,Te.colorSpace,T.isXRRenderTarget===!0),Fe=ft(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,ge,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,B.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),me(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Q(i.TEXTURE_CUBE_MAP,_);for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0)for(let Te=0;Te<_.mipmaps.length;Te++)oe(B.__webglFramebuffer[ae][Te],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te);else oe(B.__webglFramebuffer[ae],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(_)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let ae=0,Te=ee.length;ae<Te;ae++){const we=ee[ae],se=n.get(we);let ge=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ge=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,se.__webglTexture),Q(ge,we),oe(B.__webglFramebuffer,T,we,i.COLOR_ATTACHMENT0+ae,ge,0),m(we)&&u(ge)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ae=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,Z.__webglTexture),Q(ae,_),_.mipmaps&&_.mipmaps.length>0)for(let Te=0;Te<_.mipmaps.length;Te++)oe(B.__webglFramebuffer[Te],T,_,i.COLOR_ATTACHMENT0,ae,Te);else oe(B.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,ae,0);m(_)&&u(ae),t.unbindTexture()}T.depthBuffer&&Ue(T)}function Qe(T){const _=T.textures;for(let B=0,Z=_.length;B<Z;B++){const ee=_[B];if(m(ee)){const q=E(T),Re=n.get(ee).__webglTexture;t.bindTexture(q,Re),u(q),t.unbindTexture()}}}const Be=[],Le=[];function Ee(T){if(T.samples>0){if(be(T)===!1){const _=T.textures,B=T.width,Z=T.height;let ee=i.COLOR_BUFFER_BIT;const q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(T),ae=_.length>1;if(ae)for(let we=0;we<_.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const Te=T.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let we=0;we<_.length;we++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[we]);const se=n.get(_[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,B,Z,0,0,B,Z,ee,i.NEAREST),l===!0&&(Be.length=0,Le.length=0,Be.push(i.COLOR_ATTACHMENT0+we),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Be.push(q),Le.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Le)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Be))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let we=0;we<_.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Re.__webglColorRenderbuffer[we]);const se=n.get(_[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ft(T){return Math.min(s.maxSamples,T.samples)}function be(T){const _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ge(T){const _=a.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function Pt(T,_){const B=T.colorSpace,Z=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==ds&&B!==Kn&&(Ke.getTransfer(B)===rt?(Z!==mn||ee!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),_}function yt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=j,this.setTexture3D=$,this.setTextureCube=W,this.rebindTextures=Ze,this.setupRenderTarget=C,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=be}function bg(i,e){function t(n,s=Kn){let r;const a=Ke.getTransfer(s);if(n===Tn)return i.UNSIGNED_BYTE;if(n===Go)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===eh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kc)return i.BYTE;if(n===Jc)return i.SHORT;if(n===Bs)return i.UNSIGNED_SHORT;if(n===Vo)return i.INT;if(n===Ri)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===Zs)return i.HALF_FLOAT;if(n===th)return i.ALPHA;if(n===nh)return i.RGB;if(n===mn)return i.RGBA;if(n===ks)return i.DEPTH_COMPONENT;if(n===Hs)return i.DEPTH_STENCIL;if(n===ih)return i.RED;if(n===Xo)return i.RED_INTEGER;if(n===sh)return i.RG;if(n===Yo)return i.RG_INTEGER;if(n===qo)return i.RGBA_INTEGER;if(n===Or||n===Br||n===zr||n===kr)if(a===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ao||n===oo||n===lo||n===co)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ao)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===co)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ho||n===uo||n===fo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ho||n===uo)return a===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===po||n===mo||n===go||n===_o||n===vo||n===xo||n===Mo||n===So||n===yo||n===Eo||n===bo||n===To||n===wo||n===Ao)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===po)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===go)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_o)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===So)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Eo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===To)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ao)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ro||n===Co||n===Po)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ro)return a===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Co)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Po)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Do||n===Lo||n===Io||n===Uo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Do)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Lo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Io)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Tg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wg=`
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

}`;class Ag{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Mh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ii({vertexShader:Tg,fragmentShader:wg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ce(new Li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rg extends Pi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Ag,u={},E=t.getContextAttributes();let b=null,S=null;const A=[],w=[],R=new Pe;let L=null;const y=new on;y.viewport=new Mt;const M=new on;M.viewport=new Mt;const D=[y,M],F=new Yd;let V=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let K=A[k];return K===void 0&&(K=new Da,A[k]=K),K.getTargetRaySpace()},this.getControllerGrip=function(k){let K=A[k];return K===void 0&&(K=new Da,A[k]=K),K.getGripSpace()},this.getHand=function(k){let K=A[k];return K===void 0&&(K=new Da,A[k]=K),K.getHandSpace()};function X(k){const K=w.indexOf(k.inputSource);if(K===-1)return;const oe=A[K];oe!==void 0&&(oe.update(k.inputSource,k.frame,c||a),oe.dispatchEvent({type:k.type,data:k.inputSource}))}function j(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",$);for(let k=0;k<A.length;k++){const K=w[k];K!==null&&(w[k]=null,A[k].disconnect(K))}V=null,Y=null,m.reset();for(const k in u)delete u[k];e.setRenderTarget(b),p=null,f=null,d=null,s=null,S=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",j),s.addEventListener("inputsourceschange",$),E.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,me=null,he=null;E.depth&&(he=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=E.stencil?Hs:ks,me=E.stencil?zs:Ri);const Ue={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Ue),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Ci(f.textureWidth,f.textureHeight,{format:mn,type:Tn,depthTexture:new xh(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const oe={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ci(p.framebufferWidth,p.framebufferHeight,{format:mn,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),fe.setContext(s),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(k){for(let K=0;K<k.removed.length;K++){const oe=k.removed[K],me=w.indexOf(oe);me>=0&&(w[me]=null,A[me].disconnect(oe))}for(let K=0;K<k.added.length;K++){const oe=k.added[K];let me=w.indexOf(oe);if(me===-1){for(let Ue=0;Ue<A.length;Ue++)if(Ue>=w.length){w.push(oe),me=Ue;break}else if(w[Ue]===null){w[Ue]=oe,me=Ue;break}if(me===-1)break}const he=A[me];he&&he.connect(oe)}}const W=new P,te=new P;function O(k,K,oe){W.setFromMatrixPosition(K.matrixWorld),te.setFromMatrixPosition(oe.matrixWorld);const me=W.distanceTo(te),he=K.projectionMatrix.elements,Ue=oe.projectionMatrix.elements,Ze=he[14]/(he[10]-1),C=he[14]/(he[10]+1),Qe=(he[9]+1)/he[5],Be=(he[9]-1)/he[5],Le=(he[8]-1)/he[0],Ee=(Ue[8]+1)/Ue[0],ft=Ze*Le,be=Ze*Ee,Ge=me/(-Le+Ee),Pt=Ge*-Le;if(K.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Pt),k.translateZ(Ge),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),he[10]===-1)k.projectionMatrix.copy(K.projectionMatrix),k.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const yt=Ze+Ge,T=C+Ge,_=ft-Pt,B=be+(me-Pt),Z=Qe*C/T*yt,ee=Be*C/T*yt;k.projectionMatrix.makePerspective(_,B,Z,ee,yt,T),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function z(k,K){K===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(K.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let K=k.near,oe=k.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),F.near=M.near=y.near=K,F.far=M.far=y.far=oe,(V!==F.near||Y!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),V=F.near,Y=F.far),F.layers.mask=k.layers.mask|6,y.layers.mask=F.layers.mask&3,M.layers.mask=F.layers.mask&5;const me=k.parent,he=F.cameras;z(F,me);for(let Ue=0;Ue<he.length;Ue++)z(he[Ue],me);he.length===2?O(F,y,M):F.projectionMatrix.copy(y.projectionMatrix),Q(k,F,me)};function Q(k,K,oe){oe===null?k.matrix.copy(K.matrixWorld):(k.matrix.copy(oe.matrixWorld),k.matrix.invert(),k.matrix.multiply(K.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(K.projectionMatrix),k.projectionMatrixInverse.copy(K.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Vs*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(k){return u[k]};let _e=null;function Ce(k,K){if(h=K.getViewerPose(c||a),g=K,h!==null){const oe=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let me=!1;oe.length!==F.cameras.length&&(F.cameras.length=0,me=!0);for(let C=0;C<oe.length;C++){const Qe=oe[C];let Be=null;if(p!==null)Be=p.getViewport(Qe);else{const Ee=d.getViewSubImage(f,Qe);Be=Ee.viewport,C===0&&(e.setRenderTargetTextures(S,Ee.colorTexture,Ee.depthStencilTexture),e.setRenderTarget(S))}let Le=D[C];Le===void 0&&(Le=new on,Le.layers.enable(C),Le.viewport=new Mt,D[C]=Le),Le.matrix.fromArray(Qe.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(Qe.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Be.x,Be.y,Be.width,Be.height),C===0&&(F.matrix.copy(Le.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),me===!0&&F.cameras.push(Le)}const he=s.enabledFeatures;if(he&&he.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const C=d.getDepthInformation(oe[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(he&&he.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let C=0;C<oe.length;C++){const Qe=oe[C].camera;if(Qe){let Be=u[Qe];Be||(Be=new Mh,u[Qe]=Be);const Le=d.getCameraImage(Qe);Be.sourceTexture=Le}}}}for(let oe=0;oe<A.length;oe++){const me=w[oe],he=A[oe];me!==null&&he!==void 0&&he.update(me,K,c||a)}_e&&_e(k,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const fe=new wh;fe.setAnimationLoop(Ce),this.setAnimationLoop=function(k){_e=k},this.dispose=function(){}}}const mi=new vn,Cg=new ht;function Pg(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,fh(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,E,b,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,S)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),v(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,E,b):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Zt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Zt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const E=e.get(u),b=E.envMap,S=E.envMapRotation;b&&(m.envMap.value=b,mi.copy(S),mi.x*=-1,mi.y*=-1,mi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),m.envMapRotation.value.setFromMatrix4(Cg.makeRotationFromEuler(mi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,E,b){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*E,m.scale.value=b*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,E){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Zt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const E=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Dg(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){const S=b.program;n.uniformBlockBinding(E,S)}function c(E,b){let S=s[E.id];S===void 0&&(g(E),S=h(E),s[E.id]=S,E.addEventListener("dispose",m));const A=b.program;n.updateUBOMapping(E,A);const w=e.render.frame;r[E.id]!==w&&(f(E),r[E.id]=w)}function h(E){const b=d();E.__bindingPointIndex=b;const S=i.createBuffer(),A=E.__size,w=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const b=s[E.id],S=E.uniforms,A=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,R=S.length;w<R;w++){const L=Array.isArray(S[w])?S[w]:[S[w]];for(let y=0,M=L.length;y<M;y++){const D=L[y];if(p(D,w,y,A)===!0){const F=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let Y=0;for(let X=0;X<V.length;X++){const j=V[X],$=v(j);typeof j=="number"||typeof j=="boolean"?(D.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,F+Y,D.__data)):j.isMatrix3?(D.__data[0]=j.elements[0],D.__data[1]=j.elements[1],D.__data[2]=j.elements[2],D.__data[3]=0,D.__data[4]=j.elements[3],D.__data[5]=j.elements[4],D.__data[6]=j.elements[5],D.__data[7]=0,D.__data[8]=j.elements[6],D.__data[9]=j.elements[7],D.__data[10]=j.elements[8],D.__data[11]=0):(j.toArray(D.__data,Y),Y+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,b,S,A){const w=E.value,R=b+"_"+S;if(A[R]===void 0)return typeof w=="number"||typeof w=="boolean"?A[R]=w:A[R]=w.clone(),!0;{const L=A[R];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return A[R]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(E){const b=E.uniforms;let S=0;const A=16;for(let R=0,L=b.length;R<L;R++){const y=Array.isArray(b[R])?b[R]:[b[R]];for(let M=0,D=y.length;M<D;M++){const F=y[M],V=Array.isArray(F.value)?F.value:[F.value];for(let Y=0,X=V.length;Y<X;Y++){const j=V[Y],$=v(j),W=S%A,te=W%$.boundary,O=W+te;S+=te,O!==0&&A-O<$.storage&&(S+=A-O),F.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=$.storage}}}const w=S%A;return w>0&&(S+=A-w),E.__size=S,E.__cache={},this}function v(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function u(){for(const E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}class Lg{constructor(e={}){const{canvas:t=ad(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,u=null;const E=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let A=!1;this._outputColorSpace=Vt;let w=0,R=0,L=null,y=-1,M=null;const D=new Mt,F=new Mt;let V=null;const Y=new qe(0);let X=0,j=t.width,$=t.height,W=1,te=null,O=null;const z=new Mt(0,0,j,$),Q=new Mt(0,0,j,$);let _e=!1;const Ce=new Ko;let fe=!1,k=!1;const K=new ht,oe=new P,me=new Mt,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function Ze(){return L===null?W:1}let C=n;function Qe(x,U){return t.getContext(x,U)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ho}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",ne,!1),C===null){const U="webgl2";if(C=Qe(U,x),C===null)throw Qe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Be,Le,Ee,ft,be,Ge,Pt,yt,T,_,B,Z,ee,q,Re,ae,Te,we,se,ge,Fe,Ae,de,He;function I(){Be=new Vm(C),Be.init(),Ae=new bg(C,Be),Le=new Nm(C,Be,e,Ae),Ee=new yg(C,Be),Le.reversedDepthBuffer&&f&&Ee.buffers.depth.setReversed(!0),ft=new Xm(C),be=new cg,Ge=new Eg(C,Be,Ee,be,Le,Ae,ft),Pt=new Om(S),yt=new Hm(S),T=new $d(C),de=new Im(C,T),_=new Gm(C,T,ft,de),B=new qm(C,_,T,ft),se=new Ym(C,Le,Ge),ae=new Fm(be),Z=new lg(S,Pt,yt,Be,Le,de,ae),ee=new Pg(S,be),q=new ug,Re=new _g(Be),we=new Lm(S,Pt,yt,Ee,B,p,l),Te=new Mg(S,B,Le),He=new Dg(C,ft,Le,Ee),ge=new Um(C,Be,ft),Fe=new Wm(C,Be,ft),ft.programs=Z.programs,S.capabilities=Le,S.extensions=Be,S.properties=be,S.renderLists=q,S.shadowMap=Te,S.state=Ee,S.info=ft}I();const re=new Rg(S,C);this.xr=re,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const x=Be.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Be.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(x){x!==void 0&&(W=x,this.setSize(j,$,!1))},this.getSize=function(x){return x.set(j,$)},this.setSize=function(x,U,H=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=x,$=U,t.width=Math.floor(x*W),t.height=Math.floor(U*W),H===!0&&(t.style.width=x+"px",t.style.height=U+"px"),this.setViewport(0,0,x,U)},this.getDrawingBufferSize=function(x){return x.set(j*W,$*W).floor()},this.setDrawingBufferSize=function(x,U,H){j=x,$=U,W=H,t.width=Math.floor(x*H),t.height=Math.floor(U*H),this.setViewport(0,0,x,U)},this.getCurrentViewport=function(x){return x.copy(D)},this.getViewport=function(x){return x.copy(z)},this.setViewport=function(x,U,H,G){x.isVector4?z.set(x.x,x.y,x.z,x.w):z.set(x,U,H,G),Ee.viewport(D.copy(z).multiplyScalar(W).round())},this.getScissor=function(x){return x.copy(Q)},this.setScissor=function(x,U,H,G){x.isVector4?Q.set(x.x,x.y,x.z,x.w):Q.set(x,U,H,G),Ee.scissor(F.copy(Q).multiplyScalar(W).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(x){Ee.setScissorTest(_e=x)},this.setOpaqueSort=function(x){te=x},this.setTransparentSort=function(x){O=x},this.getClearColor=function(x){return x.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(x=!0,U=!0,H=!0){let G=0;if(x){let N=!1;if(L!==null){const ie=L.texture.format;N=ie===qo||ie===Yo||ie===Xo}if(N){const ie=L.texture.type,pe=ie===Tn||ie===Ri||ie===Bs||ie===zs||ie===Go||ie===Wo,Me=we.getClearColor(),ve=we.getClearAlpha(),Ne=Me.r,Oe=Me.g,De=Me.b;pe?(g[0]=Ne,g[1]=Oe,g[2]=De,g[3]=ve,C.clearBufferuiv(C.COLOR,0,g)):(v[0]=Ne,v[1]=Oe,v[2]=De,v[3]=ve,C.clearBufferiv(C.COLOR,0,v))}else G|=C.COLOR_BUFFER_BIT}U&&(G|=C.DEPTH_BUFFER_BIT),H&&(G|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),we.dispose(),q.dispose(),Re.dispose(),be.dispose(),Pt.dispose(),yt.dispose(),B.dispose(),de.dispose(),He.dispose(),Z.dispose(),re.dispose(),re.removeEventListener("sessionstart",Mn),re.removeEventListener("sessionend",dl),li.stop()};function le(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const x=ft.autoReset,U=Te.enabled,H=Te.autoUpdate,G=Te.needsUpdate,N=Te.type;I(),ft.autoReset=x,Te.enabled=U,Te.autoUpdate=H,Te.needsUpdate=G,Te.type=N}function ne(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function J(x){const U=x.target;U.removeEventListener("dispose",J),ye(U)}function ye(x){ke(x),be.remove(x)}function ke(x){const U=be.get(x).programs;U!==void 0&&(U.forEach(function(H){Z.releaseProgram(H)}),x.isShaderMaterial&&Z.releaseShaderCache(x))}this.renderBufferDirect=function(x,U,H,G,N,ie){U===null&&(U=he);const pe=N.isMesh&&N.matrixWorld.determinant()<0,Me=Zh(x,U,H,G,N);Ee.setMaterial(G,pe);let ve=H.index,Ne=1;if(G.wireframe===!0){if(ve=_.getWireframeAttribute(H),ve===void 0)return;Ne=2}const Oe=H.drawRange,De=H.attributes.position;let je=Oe.start*Ne,st=(Oe.start+Oe.count)*Ne;ie!==null&&(je=Math.max(je,ie.start*Ne),st=Math.min(st,(ie.start+ie.count)*Ne)),ve!==null?(je=Math.max(je,0),st=Math.min(st,ve.count)):De!=null&&(je=Math.max(je,0),st=Math.min(st,De.count));const vt=st-je;if(vt<0||vt===1/0)return;de.setup(N,G,Me,H,ve);let ut,ot=ge;if(ve!==null&&(ut=T.get(ve),ot=Fe,ot.setIndex(ut)),N.isMesh)G.wireframe===!0?(Ee.setLineWidth(G.wireframeLinewidth*Ze()),ot.setMode(C.LINES)):ot.setMode(C.TRIANGLES);else if(N.isLine){let Ie=G.linewidth;Ie===void 0&&(Ie=1),Ee.setLineWidth(Ie*Ze()),N.isLineSegments?ot.setMode(C.LINES):N.isLineLoop?ot.setMode(C.LINE_LOOP):ot.setMode(C.LINE_STRIP)}else N.isPoints?ot.setMode(C.POINTS):N.isSprite&&ot.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Gs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))ot.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ie=N._multiDrawStarts,mt=N._multiDrawCounts,$e=N._multiDrawCount,Kt=ve?T.get(ve).bytesPerElement:1,Ui=be.get(G).currentProgram.getUniforms();for(let Jt=0;Jt<$e;Jt++)Ui.setValue(C,"_gl_DrawID",Jt),ot.render(Ie[Jt]/Kt,mt[Jt])}else if(N.isInstancedMesh)ot.renderInstances(je,vt,N.count);else if(H.isInstancedBufferGeometry){const Ie=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,mt=Math.min(H.instanceCount,Ie);ot.renderInstances(je,vt,mt)}else ot.render(je,vt)};function ct(x,U,H){x.transparent===!0&&x.side===tn&&x.forceSinglePass===!1?(x.side=Zt,x.needsUpdate=!0,nr(x,U,H),x.side=ni,x.needsUpdate=!0,nr(x,U,H),x.side=tn):nr(x,U,H)}this.compile=function(x,U,H=null){H===null&&(H=x),u=Re.get(H),u.init(U),b.push(u),H.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),x!==H&&x.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),u.setupLights();const G=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ie=N.material;if(ie)if(Array.isArray(ie))for(let pe=0;pe<ie.length;pe++){const Me=ie[pe];ct(Me,H,N),G.add(Me)}else ct(ie,H,N),G.add(ie)}),u=b.pop(),G},this.compileAsync=function(x,U,H=null){const G=this.compile(x,U,H);return new Promise(N=>{function ie(){if(G.forEach(function(pe){be.get(pe).currentProgram.isReady()&&G.delete(pe)}),G.size===0){N(x);return}setTimeout(ie,10)}Be.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let et=null;function An(x){et&&et(x)}function Mn(){li.stop()}function dl(){li.start()}const li=new wh;li.setAnimationLoop(An),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(x){et=x,re.setAnimationLoop(x),x===null?li.stop():li.start()},re.addEventListener("sessionstart",Mn),re.addEventListener("sessionend",dl),this.render=function(x,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(U),U=re.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,U,L),u=Re.get(x,b.length),u.init(U),b.push(u),K.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ce.setFromProjectionMatrix(K,bn,U.reversedDepth),k=this.localClippingEnabled,fe=ae.init(this.clippingPlanes,k),m=q.get(x,E.length),m.init(),E.push(m),re.enabled===!0&&re.isPresenting===!0){const ie=S.xr.getDepthSensingMesh();ie!==null&&oa(ie,U,-1/0,S.sortObjects)}oa(x,U,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(te,O),Ue=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ue&&we.addToRenderList(m,x),this.info.render.frame++,fe===!0&&ae.beginShadows();const H=u.state.shadowsArray;Te.render(H,x,U),fe===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,N=m.transmissive;if(u.setupLights(),U.isArrayCamera){const ie=U.cameras;if(N.length>0)for(let pe=0,Me=ie.length;pe<Me;pe++){const ve=ie[pe];pl(G,N,x,ve)}Ue&&we.render(x);for(let pe=0,Me=ie.length;pe<Me;pe++){const ve=ie[pe];fl(m,x,ve,ve.viewport)}}else N.length>0&&pl(G,N,x,U),Ue&&we.render(x),fl(m,x,U);L!==null&&R===0&&(Ge.updateMultisampleRenderTarget(L),Ge.updateRenderTargetMipmap(L)),x.isScene===!0&&x.onAfterRender(S,x,U),de.resetDefaultState(),y=-1,M=null,b.pop(),b.length>0?(u=b[b.length-1],fe===!0&&ae.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function oa(x,U,H,G){if(x.visible===!1)return;if(x.layers.test(U.layers)){if(x.isGroup)H=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(U);else if(x.isLight)u.pushLight(x),x.castShadow&&u.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Ce.intersectsSprite(x)){G&&me.setFromMatrixPosition(x.matrixWorld).applyMatrix4(K);const pe=B.update(x),Me=x.material;Me.visible&&m.push(x,pe,Me,H,me.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Ce.intersectsObject(x))){const pe=B.update(x),Me=x.material;if(G&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),me.copy(x.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),me.copy(pe.boundingSphere.center)),me.applyMatrix4(x.matrixWorld).applyMatrix4(K)),Array.isArray(Me)){const ve=pe.groups;for(let Ne=0,Oe=ve.length;Ne<Oe;Ne++){const De=ve[Ne],je=Me[De.materialIndex];je&&je.visible&&m.push(x,pe,je,H,me.z,De)}}else Me.visible&&m.push(x,pe,Me,H,me.z,null)}}const ie=x.children;for(let pe=0,Me=ie.length;pe<Me;pe++)oa(ie[pe],U,H,G)}function fl(x,U,H,G){const N=x.opaque,ie=x.transmissive,pe=x.transparent;u.setupLightsView(H),fe===!0&&ae.setGlobalState(S.clippingPlanes,H),G&&Ee.viewport(D.copy(G)),N.length>0&&tr(N,U,H),ie.length>0&&tr(ie,U,H),pe.length>0&&tr(pe,U,H),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function pl(x,U,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[G.id]===void 0&&(u.state.transmissionRenderTarget[G.id]=new Ci(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?Zs:Tn,minFilter:wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ie=u.state.transmissionRenderTarget[G.id],pe=G.viewport||D;ie.setSize(pe.z*S.transmissionResolutionScale,pe.w*S.transmissionResolutionScale);const Me=S.getRenderTarget(),ve=S.getActiveCubeFace(),Ne=S.getActiveMipmapLevel();S.setRenderTarget(ie),S.getClearColor(Y),X=S.getClearAlpha(),X<1&&S.setClearColor(16777215,.5),S.clear(),Ue&&we.render(H);const Oe=S.toneMapping;S.toneMapping=ei;const De=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),u.setupLightsView(G),fe===!0&&ae.setGlobalState(S.clippingPlanes,G),tr(x,H,G),Ge.updateMultisampleRenderTarget(ie),Ge.updateRenderTargetMipmap(ie),Be.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let st=0,vt=U.length;st<vt;st++){const ut=U[st],ot=ut.object,Ie=ut.geometry,mt=ut.material,$e=ut.group;if(mt.side===tn&&ot.layers.test(G.layers)){const Kt=mt.side;mt.side=Zt,mt.needsUpdate=!0,ml(ot,H,G,Ie,mt,$e),mt.side=Kt,mt.needsUpdate=!0,je=!0}}je===!0&&(Ge.updateMultisampleRenderTarget(ie),Ge.updateRenderTargetMipmap(ie))}S.setRenderTarget(Me,ve,Ne),S.setClearColor(Y,X),De!==void 0&&(G.viewport=De),S.toneMapping=Oe}function tr(x,U,H){const G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ie=x.length;N<ie;N++){const pe=x[N],Me=pe.object,ve=pe.geometry,Ne=pe.group;let Oe=pe.material;Oe.allowOverride===!0&&G!==null&&(Oe=G),Me.layers.test(H.layers)&&ml(Me,U,H,ve,Oe,Ne)}}function ml(x,U,H,G,N,ie){x.onBeforeRender(S,U,H,G,N,ie),x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(S,U,H,G,x,ie),N.transparent===!0&&N.side===tn&&N.forceSinglePass===!1?(N.side=Zt,N.needsUpdate=!0,S.renderBufferDirect(H,U,G,N,x,ie),N.side=ni,N.needsUpdate=!0,S.renderBufferDirect(H,U,G,N,x,ie),N.side=tn):S.renderBufferDirect(H,U,G,N,x,ie),x.onAfterRender(S,U,H,G,N,ie)}function nr(x,U,H){U.isScene!==!0&&(U=he);const G=be.get(x),N=u.state.lights,ie=u.state.shadowsArray,pe=N.state.version,Me=Z.getParameters(x,N.state,ie,U,H),ve=Z.getProgramCacheKey(Me);let Ne=G.programs;G.environment=x.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(x.isMeshStandardMaterial?yt:Pt).get(x.envMap||G.environment),G.envMapRotation=G.environment!==null&&x.envMap===null?U.environmentRotation:x.envMapRotation,Ne===void 0&&(x.addEventListener("dispose",J),Ne=new Map,G.programs=Ne);let Oe=Ne.get(ve);if(Oe!==void 0){if(G.currentProgram===Oe&&G.lightsStateVersion===pe)return _l(x,Me),Oe}else Me.uniforms=Z.getUniforms(x),x.onBeforeCompile(Me,S),Oe=Z.acquireProgram(Me,ve),Ne.set(ve,Oe),G.uniforms=Me.uniforms;const De=G.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(De.clippingPlanes=ae.uniform),_l(x,Me),G.needsLights=Kh(x),G.lightsStateVersion=pe,G.needsLights&&(De.ambientLightColor.value=N.state.ambient,De.lightProbe.value=N.state.probe,De.directionalLights.value=N.state.directional,De.directionalLightShadows.value=N.state.directionalShadow,De.spotLights.value=N.state.spot,De.spotLightShadows.value=N.state.spotShadow,De.rectAreaLights.value=N.state.rectArea,De.ltc_1.value=N.state.rectAreaLTC1,De.ltc_2.value=N.state.rectAreaLTC2,De.pointLights.value=N.state.point,De.pointLightShadows.value=N.state.pointShadow,De.hemisphereLights.value=N.state.hemi,De.directionalShadowMap.value=N.state.directionalShadowMap,De.directionalShadowMatrix.value=N.state.directionalShadowMatrix,De.spotShadowMap.value=N.state.spotShadowMap,De.spotLightMatrix.value=N.state.spotLightMatrix,De.spotLightMap.value=N.state.spotLightMap,De.pointShadowMap.value=N.state.pointShadowMap,De.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Oe,G.uniformsList=null,Oe}function gl(x){if(x.uniformsList===null){const U=x.currentProgram.getUniforms();x.uniformsList=Hr.seqWithValue(U.seq,x.uniforms)}return x.uniformsList}function _l(x,U){const H=be.get(x);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function Zh(x,U,H,G,N){U.isScene!==!0&&(U=he),Ge.resetTextureUnits();const ie=U.fog,pe=G.isMeshStandardMaterial?U.environment:null,Me=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ds,ve=(G.isMeshStandardMaterial?yt:Pt).get(G.envMap||pe),Ne=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Oe=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),De=!!H.morphAttributes.position,je=!!H.morphAttributes.normal,st=!!H.morphAttributes.color;let vt=ei;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(vt=S.toneMapping);const ut=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ot=ut!==void 0?ut.length:0,Ie=be.get(G),mt=u.state.lights;if(fe===!0&&(k===!0||x!==M)){const Bt=x===M&&G.id===y;ae.setState(G,x,Bt)}let $e=!1;G.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==mt.state.version||Ie.outputColorSpace!==Me||N.isBatchedMesh&&Ie.batching===!1||!N.isBatchedMesh&&Ie.batching===!0||N.isBatchedMesh&&Ie.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ie.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ie.instancing===!1||!N.isInstancedMesh&&Ie.instancing===!0||N.isSkinnedMesh&&Ie.skinning===!1||!N.isSkinnedMesh&&Ie.skinning===!0||N.isInstancedMesh&&Ie.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ie.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ie.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ie.instancingMorph===!1&&N.morphTexture!==null||Ie.envMap!==ve||G.fog===!0&&Ie.fog!==ie||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ae.numPlanes||Ie.numIntersection!==ae.numIntersection)||Ie.vertexAlphas!==Ne||Ie.vertexTangents!==Oe||Ie.morphTargets!==De||Ie.morphNormals!==je||Ie.morphColors!==st||Ie.toneMapping!==vt||Ie.morphTargetsCount!==ot)&&($e=!0):($e=!0,Ie.__version=G.version);let Kt=Ie.currentProgram;$e===!0&&(Kt=nr(G,U,N));let Ui=!1,Jt=!1,ys=!1;const gt=Kt.getUniforms(),sn=Ie.uniforms;if(Ee.useProgram(Kt.program)&&(Ui=!0,Jt=!0,ys=!0),G.id!==y&&(y=G.id,Jt=!0),Ui||M!==x){Ee.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),gt.setValue(C,"projectionMatrix",x.projectionMatrix),gt.setValue(C,"viewMatrix",x.matrixWorldInverse);const Yt=gt.map.cameraPosition;Yt!==void 0&&Yt.setValue(C,oe.setFromMatrixPosition(x.matrixWorld)),Le.logarithmicDepthBuffer&&gt.setValue(C,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&gt.setValue(C,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,Jt=!0,ys=!0)}if(N.isSkinnedMesh){gt.setOptional(C,N,"bindMatrix"),gt.setOptional(C,N,"bindMatrixInverse");const Bt=N.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),gt.setValue(C,"boneTexture",Bt.boneTexture,Ge))}N.isBatchedMesh&&(gt.setOptional(C,N,"batchingTexture"),gt.setValue(C,"batchingTexture",N._matricesTexture,Ge),gt.setOptional(C,N,"batchingIdTexture"),gt.setValue(C,"batchingIdTexture",N._indirectTexture,Ge),gt.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&gt.setValue(C,"batchingColorTexture",N._colorsTexture,Ge));const rn=H.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&se.update(N,H,Kt),(Jt||Ie.receiveShadow!==N.receiveShadow)&&(Ie.receiveShadow=N.receiveShadow,gt.setValue(C,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(sn.envMap.value=ve,sn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(sn.envMapIntensity.value=U.environmentIntensity),Jt&&(gt.setValue(C,"toneMappingExposure",S.toneMappingExposure),Ie.needsLights&&$h(sn,ys),ie&&G.fog===!0&&ee.refreshFogUniforms(sn,ie),ee.refreshMaterialUniforms(sn,G,W,$,u.state.transmissionRenderTarget[x.id]),Hr.upload(C,gl(Ie),sn,Ge)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Hr.upload(C,gl(Ie),sn,Ge),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&gt.setValue(C,"center",N.center),gt.setValue(C,"modelViewMatrix",N.modelViewMatrix),gt.setValue(C,"normalMatrix",N.normalMatrix),gt.setValue(C,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Bt=G.uniformsGroups;for(let Yt=0,la=Bt.length;Yt<la;Yt++){const ci=Bt[Yt];He.update(ci,Kt),He.bind(ci,Kt)}}return Kt}function $h(x,U){x.ambientLightColor.needsUpdate=U,x.lightProbe.needsUpdate=U,x.directionalLights.needsUpdate=U,x.directionalLightShadows.needsUpdate=U,x.pointLights.needsUpdate=U,x.pointLightShadows.needsUpdate=U,x.spotLights.needsUpdate=U,x.spotLightShadows.needsUpdate=U,x.rectAreaLights.needsUpdate=U,x.hemisphereLights.needsUpdate=U}function Kh(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(x,U,H){const G=be.get(x);G.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),be.get(x.texture).__webglTexture=U,be.get(x.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:H,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,U){const H=be.get(x);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0};const Jh=C.createFramebuffer();this.setRenderTarget=function(x,U=0,H=0){L=x,w=U,R=H;let G=!0,N=null,ie=!1,pe=!1;if(x){const ve=be.get(x);if(ve.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(C.FRAMEBUFFER,null),G=!1;else if(ve.__webglFramebuffer===void 0)Ge.setupRenderTarget(x);else if(ve.__hasExternalTextures)Ge.rebindTextures(x,be.get(x.texture).__webglTexture,be.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const De=x.depthTexture;if(ve.__boundDepthTexture!==De){if(De!==null&&be.has(De)&&(x.width!==De.image.width||x.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(x)}}const Ne=x.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(pe=!0);const Oe=be.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Oe[U])?N=Oe[U][H]:N=Oe[U],ie=!0):x.samples>0&&Ge.useMultisampledRTT(x)===!1?N=be.get(x).__webglMultisampledFramebuffer:Array.isArray(Oe)?N=Oe[H]:N=Oe,D.copy(x.viewport),F.copy(x.scissor),V=x.scissorTest}else D.copy(z).multiplyScalar(W).floor(),F.copy(Q).multiplyScalar(W).floor(),V=_e;if(H!==0&&(N=Jh),Ee.bindFramebuffer(C.FRAMEBUFFER,N)&&G&&Ee.drawBuffers(x,N),Ee.viewport(D),Ee.scissor(F),Ee.setScissorTest(V),ie){const ve=be.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve.__webglTexture,H)}else if(pe){const ve=U;for(let Ne=0;Ne<x.textures.length;Ne++){const Oe=be.get(x.textures[Ne]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ne,Oe.__webglTexture,H,ve)}}else if(x!==null&&H!==0){const ve=be.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ve.__webglTexture,H)}y=-1},this.readRenderTargetPixels=function(x,U,H,G,N,ie,pe,Me=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=be.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&pe!==void 0&&(ve=ve[pe]),ve){Ee.bindFramebuffer(C.FRAMEBUFFER,ve);try{const Ne=x.textures[Me],Oe=Ne.format,De=Ne.type;if(!Le.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=x.width-G&&H>=0&&H<=x.height-N&&(x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Me),C.readPixels(U,H,G,N,Ae.convert(Oe),Ae.convert(De),ie))}finally{const Ne=L!==null?be.get(L).__webglFramebuffer:null;Ee.bindFramebuffer(C.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(x,U,H,G,N,ie,pe,Me=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=be.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&pe!==void 0&&(ve=ve[pe]),ve)if(U>=0&&U<=x.width-G&&H>=0&&H<=x.height-N){Ee.bindFramebuffer(C.FRAMEBUFFER,ve);const Ne=x.textures[Me],Oe=Ne.format,De=Ne.type;if(!Le.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,je),C.bufferData(C.PIXEL_PACK_BUFFER,ie.byteLength,C.STREAM_READ),x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Me),C.readPixels(U,H,G,N,Ae.convert(Oe),Ae.convert(De),0);const st=L!==null?be.get(L).__webglFramebuffer:null;Ee.bindFramebuffer(C.FRAMEBUFFER,st);const vt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await od(C,vt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,je),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ie),C.deleteBuffer(je),C.deleteSync(vt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,U=null,H=0){const G=Math.pow(2,-H),N=Math.floor(x.image.width*G),ie=Math.floor(x.image.height*G),pe=U!==null?U.x:0,Me=U!==null?U.y:0;Ge.setTexture2D(x,0),C.copyTexSubImage2D(C.TEXTURE_2D,H,0,0,pe,Me,N,ie),Ee.unbindTexture()};const Qh=C.createFramebuffer(),eu=C.createFramebuffer();this.copyTextureToTexture=function(x,U,H=null,G=null,N=0,ie=null){ie===null&&(N!==0?(Gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=N,N=0):ie=0);let pe,Me,ve,Ne,Oe,De,je,st,vt;const ut=x.isCompressedTexture?x.mipmaps[ie]:x.image;if(H!==null)pe=H.max.x-H.min.x,Me=H.max.y-H.min.y,ve=H.isBox3?H.max.z-H.min.z:1,Ne=H.min.x,Oe=H.min.y,De=H.isBox3?H.min.z:0;else{const rn=Math.pow(2,-N);pe=Math.floor(ut.width*rn),Me=Math.floor(ut.height*rn),x.isDataArrayTexture?ve=ut.depth:x.isData3DTexture?ve=Math.floor(ut.depth*rn):ve=1,Ne=0,Oe=0,De=0}G!==null?(je=G.x,st=G.y,vt=G.z):(je=0,st=0,vt=0);const ot=Ae.convert(U.format),Ie=Ae.convert(U.type);let mt;U.isData3DTexture?(Ge.setTexture3D(U,0),mt=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ge.setTexture2DArray(U,0),mt=C.TEXTURE_2D_ARRAY):(Ge.setTexture2D(U,0),mt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const $e=C.getParameter(C.UNPACK_ROW_LENGTH),Kt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ui=C.getParameter(C.UNPACK_SKIP_PIXELS),Jt=C.getParameter(C.UNPACK_SKIP_ROWS),ys=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ut.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ut.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ne),C.pixelStorei(C.UNPACK_SKIP_ROWS,Oe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,De);const gt=x.isDataArrayTexture||x.isData3DTexture,sn=U.isDataArrayTexture||U.isData3DTexture;if(x.isDepthTexture){const rn=be.get(x),Bt=be.get(U),Yt=be.get(rn.__renderTarget),la=be.get(Bt.__renderTarget);Ee.bindFramebuffer(C.READ_FRAMEBUFFER,Yt.__webglFramebuffer),Ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,la.__webglFramebuffer);for(let ci=0;ci<ve;ci++)gt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,be.get(x).__webglTexture,N,De+ci),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,be.get(U).__webglTexture,ie,vt+ci)),C.blitFramebuffer(Ne,Oe,pe,Me,je,st,pe,Me,C.DEPTH_BUFFER_BIT,C.NEAREST);Ee.bindFramebuffer(C.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(N!==0||x.isRenderTargetTexture||be.has(x)){const rn=be.get(x),Bt=be.get(U);Ee.bindFramebuffer(C.READ_FRAMEBUFFER,Qh),Ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,eu);for(let Yt=0;Yt<ve;Yt++)gt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,rn.__webglTexture,N,De+Yt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,rn.__webglTexture,N),sn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Bt.__webglTexture,ie,vt+Yt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Bt.__webglTexture,ie),N!==0?C.blitFramebuffer(Ne,Oe,pe,Me,je,st,pe,Me,C.COLOR_BUFFER_BIT,C.NEAREST):sn?C.copyTexSubImage3D(mt,ie,je,st,vt+Yt,Ne,Oe,pe,Me):C.copyTexSubImage2D(mt,ie,je,st,Ne,Oe,pe,Me);Ee.bindFramebuffer(C.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else sn?x.isDataTexture||x.isData3DTexture?C.texSubImage3D(mt,ie,je,st,vt,pe,Me,ve,ot,Ie,ut.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(mt,ie,je,st,vt,pe,Me,ve,ot,ut.data):C.texSubImage3D(mt,ie,je,st,vt,pe,Me,ve,ot,Ie,ut):x.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ie,je,st,pe,Me,ot,Ie,ut.data):x.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ie,je,st,ut.width,ut.height,ot,ut.data):C.texSubImage2D(C.TEXTURE_2D,ie,je,st,pe,Me,ot,Ie,ut);C.pixelStorei(C.UNPACK_ROW_LENGTH,$e),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Kt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ui),C.pixelStorei(C.UNPACK_SKIP_ROWS,Jt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ys),ie===0&&U.generateMipmaps&&C.generateMipmap(mt),Ee.unbindTexture()},this.initRenderTarget=function(x){be.get(x).__webglFramebuffer===void 0&&Ge.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Ge.setTextureCube(x,0):x.isData3DTexture?Ge.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Ge.setTexture2DArray(x,0):Ge.setTexture2D(x,0),Ee.unbindTexture()},this.resetState=function(){w=0,R=0,L=null,Ee.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}const bc={type:"change"},nl={type:"start"},Dh={type:"end"},Lr=new ta,Tc=new $n,Ig=Math.cos(70*oh.DEG2RAD),Tt=new P,qt=2*Math.PI,at={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ga=1e-6;class Ug extends Th{constructor(e,t=null){super(e,t),this.state=at.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:is.ROTATE,MIDDLE:is.DOLLY,RIGHT:is.PAN},this.touches={ONE:Qi.ROTATE,TWO:Qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Lt,this._lastTargetPosition=new P,this._quat=new Lt().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jl,this._sphericalDelta=new Jl,this._scale=1,this._panOffset=new P,this._rotateStart=new Pe,this._rotateEnd=new Pe,this._rotateDelta=new Pe,this._panStart=new Pe,this._panEnd=new Pe,this._panDelta=new Pe,this._dollyStart=new Pe,this._dollyEnd=new Pe,this._dollyDelta=new Pe,this._dollyDirection=new P,this._mouse=new Pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Fg.bind(this),this._onPointerDown=Ng.bind(this),this._onPointerUp=Og.bind(this),this._onContextMenu=Wg.bind(this),this._onMouseWheel=kg.bind(this),this._onKeyDown=Hg.bind(this),this._onTouchStart=Vg.bind(this),this._onTouchMove=Gg.bind(this),this._onMouseDown=Bg.bind(this),this._onMouseMove=zg.bind(this),this._interceptControlDown=Xg.bind(this),this._interceptControlUp=Yg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(bc),this.update(),this.state=at.NONE}update(e=null){const t=this.object.position;Tt.copy(t).sub(this.target),Tt.applyQuaternion(this._quat),this._spherical.setFromVector3(Tt),this.autoRotate&&this.state===at.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=qt:n>Math.PI&&(n-=qt),s<-Math.PI?s+=qt:s>Math.PI&&(s-=qt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Tt.setFromSpherical(this._spherical),Tt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Tt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Tt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Tt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Lr.origin.copy(this.object.position),Lr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Lr.direction))<Ig?this.object.lookAt(this.target):(Tc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Lr.intersectPlane(Tc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ga||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ga||this._lastTargetPosition.distanceToSquared(this.target)>Ga?(this.dispatchEvent(bc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?qt/60*this.autoRotateSpeed*e:qt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Tt.setFromMatrixColumn(t,0),Tt.multiplyScalar(-e),this._panOffset.add(Tt)}_panUp(e,t){this.screenSpacePanning===!0?Tt.setFromMatrixColumn(t,1):(Tt.setFromMatrixColumn(t,0),Tt.crossVectors(this.object.up,Tt)),Tt.multiplyScalar(e),this._panOffset.add(Tt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Tt.copy(s).sub(this.target);let r=Tt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Pe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Ng(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Fg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Og(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Dh),this.state=at.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Bg(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=at.DOLLY;break;case is.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=at.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=at.ROTATE}break;case is.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=at.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=at.PAN}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(nl)}function zg(i){switch(this.state){case at.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case at.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case at.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function kg(i){this.enabled===!1||this.enableZoom===!1||this.state!==at.NONE||(i.preventDefault(),this.dispatchEvent(nl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Dh))}function Hg(i){this.enabled!==!1&&this._handleKeyDown(i)}function Vg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=at.TOUCH_ROTATE;break;case Qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=at.TOUCH_PAN;break;default:this.state=at.NONE}break;case 2:switch(this.touches.TWO){case Qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=at.TOUCH_DOLLY_PAN;break;case Qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=at.TOUCH_DOLLY_ROTATE;break;default:this.state=at.NONE}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(nl)}function Gg(i){switch(this._trackPointer(i),this.state){case at.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case at.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case at.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case at.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=at.NONE}}function Wg(i){this.enabled!==!1&&i.preventDefault()}function Xg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Yg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const gi=new bh,Ot=new P,jn=new P,pt=new Lt,wc={X:new P(1,0,0),Y:new P(0,1,0),Z:new P(0,0,1)},Wa={type:"change"},Ac={type:"mouseDown",mode:null},Rc={type:"mouseUp",mode:null},Cc={type:"objectChange"};class qg extends Th{constructor(e,t=null){super(void 0,t);const n=new Qg(this);this._root=n;const s=new e_;this._gizmo=s,n.add(s);const r=new t_;this._plane=r,n.add(r);const a=this;function o(b,S){let A=S;Object.defineProperty(a,b,{get:function(){return A!==void 0?A:S},set:function(w){A!==w&&(A=w,r[b]=w,s[b]=w,a.dispatchEvent({type:b+"-changed",value:w}),a.dispatchEvent(Wa))}}),a[b]=S,r[b]=S,s[b]=S}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0),o("minX",-1/0),o("maxX",1/0),o("minY",-1/0),o("maxY",1/0),o("minZ",-1/0),o("maxZ",1/0);const l=new P,c=new P,h=new Lt,d=new Lt,f=new P,p=new Lt,g=new P,v=new P,m=new P,u=0,E=new P;o("worldPosition",l),o("worldPositionStart",c),o("worldQuaternion",h),o("worldQuaternionStart",d),o("cameraPosition",f),o("cameraQuaternion",p),o("pointStart",g),o("pointEnd",v),o("rotationAxis",m),o("rotationAngle",u),o("eye",E),this._offset=new P,this._startNorm=new P,this._endNorm=new P,this._cameraScale=new P,this._parentPosition=new P,this._parentQuaternion=new Lt,this._parentQuaternionInv=new Lt,this._parentScale=new P,this._worldScaleStart=new P,this._worldQuaternionInv=new Lt,this._worldScale=new P,this._positionStart=new P,this._quaternionStart=new Lt,this._scaleStart=new P,this._getPointer=jg.bind(this),this._onPointerDown=$g.bind(this),this._onPointerHover=Zg.bind(this),this._onPointerMove=Kg.bind(this),this._onPointerUp=Jg.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&gi.setFromCamera(e,this.camera);const t=Xa(this._gizmo.picker[this.mode],gi);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&gi.setFromCamera(e,this.camera);const t=Xa(this._plane,gi,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Ac.mode=this.mode,this.dispatchEvent(Ac)}}pointerMove(e){const t=this.axis,n=this.mode,s=this.object;let r=this.space;if(n==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),s===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&gi.setFromCamera(e,this.camera);const a=Xa(this._plane,gi,!0);if(a){if(this.pointEnd.copy(a.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(pt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(Ot.setFromMatrixPosition(s.parent.matrixWorld)),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(Ot.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(t.search("XYZ")!==-1){let o=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(o*=-1),jn.set(o,o,o)}else Ot.copy(this.pointStart),jn.copy(this.pointEnd),Ot.applyQuaternion(this._worldQuaternionInv),jn.applyQuaternion(this._worldQuaternionInv),jn.divide(Ot),t.search("X")===-1&&(jn.x=1),t.search("Y")===-1&&(jn.y=1),t.search("Z")===-1&&(jn.z=1);s.scale.copy(this._scaleStart).multiply(jn),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const o=20/this.worldPosition.distanceTo(Ot.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Ot.copy(this.rotationAxis).cross(this.eye))*o):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(wc[t]),Ot.copy(wc[t]),r==="local"&&Ot.applyQuaternion(this.worldQuaternion),Ot.cross(this.eye),Ot.length()===0?l=!0:this.rotationAngle=this._offset.dot(Ot.normalize())*o),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(pt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(pt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Wa),this.dispatchEvent(Cc)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(Rc.mode=this.mode,this.dispatchEvent(Rc)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Wa),this.dispatchEvent(Cc),this.pointStart.copy(this.pointEnd))}getRaycaster(){return gi}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,n,s){const r=this._gizmo.materialLib;r.xAxis.color.set(e),r.yAxis.color.set(t),r.zAxis.color.set(n),r.active.color.set(s),r.xAxisTransparent.color.set(e),r.yAxisTransparent.color.set(t),r.zAxisTransparent.color.set(n),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(e),r.yAxis._color&&r.yAxis._color.set(t),r.zAxis._color&&r.zAxis._color.set(n),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(e),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(t),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(n),r.activeTransparent._color&&r.activeTransparent._color.set(s)}}function jg(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const e=this.domElement.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*2-1,y:-(i.clientY-e.top)/e.height*2+1,button:i.button}}}function Zg(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function $g(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function Kg(i){this.enabled&&this.pointerMove(this._getPointer(i))}function Jg(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function Xa(i,e,t){const n=e.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||t)return n[s];return!1}const Ir=new vn,lt=new P(0,1,0),Pc=new P(0,0,0),Dc=new ht,Ur=new Lt,Vr=new Lt,Sn=new P,Lc=new ht,Us=new P(1,0,0),vi=new P(0,1,0),Ns=new P(0,0,1),Nr=new P,Ds=new P,Ls=new P;class Qg extends _t{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){const t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}}class e_ extends _t{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new ti({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new ai({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const s=t.clone();s.opacity=.5;const r=e.clone();r.color.setHex(16711680);const a=e.clone();a.color.setHex(65280);const o=e.clone();o.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const h=e.clone();h.color.setHex(255),h.opacity=.5;const d=e.clone();d.opacity=.25;const f=e.clone();f.color.setHex(16776960),f.opacity=.25;const p=e.clone();p.color.setHex(16776960);const g=e.clone();g.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:a,zAxis:o,active:p,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:h,activeTransparent:f};const v=new wt(0,.04,.1,12);v.translate(0,.05,0);const m=new xt(.08,.08,.08);m.translate(0,.04,0);const u=new Et;u.setAttribute("position",new tt([0,0,0,1,0,0],3));const E=new wt(.0075,.0075,.5,3);E.translate(0,.25,0);function b(X,j){const $=new Ei(X,.0075,3,64,j*Math.PI*2);return $.rotateY(Math.PI/2),$.rotateX(Math.PI/2),$}function S(){const X=new Et;return X.setAttribute("position",new tt([0,0,0,1,1,1],3)),X}const A={X:[[new ce(v,r),[.5,0,0],[0,0,-Math.PI/2]],[new ce(v,r),[-.5,0,0],[0,0,Math.PI/2]],[new ce(E,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ce(v,a),[0,.5,0]],[new ce(v,a),[0,-.5,0],[Math.PI,0,0]],[new ce(E,a)]],Z:[[new ce(v,o),[0,0,.5],[Math.PI/2,0,0]],[new ce(v,o),[0,0,-.5],[-Math.PI/2,0,0]],[new ce(E,o),null,[Math.PI/2,0,0]]],XYZ:[[new ce(new es(.1,0),d),[0,0,0]]],XY:[[new ce(new xt(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new ce(new xt(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ce(new xt(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},w={X:[[new ce(new wt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ce(new wt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ce(new wt(.2,0,.6,4),n),[0,.3,0]],[new ce(new wt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ce(new wt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ce(new wt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ce(new es(.2,0),n)]],XY:[[new ce(new xt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ce(new xt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ce(new xt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},R={START:[[new ce(new es(.01,2),s),null,null,null,"helper"]],END:[[new ce(new es(.01,2),s),null,null,null,"helper"]],DELTA:[[new fn(S(),s),null,null,null,"helper"]],X:[[new fn(u,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new fn(u,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new fn(u,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},L={XYZE:[[new ce(b(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new ce(b(.5,.5),r)]],Y:[[new ce(b(.5,.5),a),null,[0,0,-Math.PI/2]]],Z:[[new ce(b(.5,.5),o),null,[0,Math.PI/2,0]]],E:[[new ce(b(.75,1),f),null,[0,Math.PI/2,0]]]},y={AXIS:[[new fn(u,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},M={XYZE:[[new ce(new el(.25,10,8),n)]],X:[[new ce(new Ei(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ce(new Ei(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ce(new Ei(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ce(new Ei(.75,.1,2,24),n)]]},D={X:[[new ce(m,r),[.5,0,0],[0,0,-Math.PI/2]],[new ce(E,r),[0,0,0],[0,0,-Math.PI/2]],[new ce(m,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ce(m,a),[0,.5,0]],[new ce(E,a)],[new ce(m,a),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ce(m,o),[0,0,.5],[Math.PI/2,0,0]],[new ce(E,o),[0,0,0],[Math.PI/2,0,0]],[new ce(m,o),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ce(new xt(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new ce(new xt(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ce(new xt(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ce(new xt(.1,.1,.1),d)]]},F={X:[[new ce(new wt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ce(new wt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ce(new wt(.2,0,.6,4),n),[0,.3,0]],[new ce(new wt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ce(new wt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ce(new wt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ce(new xt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ce(new xt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ce(new xt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ce(new xt(.2,.2,.2),n),[0,0,0]]]},V={X:[[new fn(u,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new fn(u,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new fn(u,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function Y(X){const j=new _t;for(const $ in X)for(let W=X[$].length;W--;){const te=X[$][W][0].clone(),O=X[$][W][1],z=X[$][W][2],Q=X[$][W][3],_e=X[$][W][4];te.name=$,te.tag=_e,O&&te.position.set(O[0],O[1],O[2]),z&&te.rotation.set(z[0],z[1],z[2]),Q&&te.scale.set(Q[0],Q[1],Q[2]),te.updateMatrix();const Ce=te.geometry.clone();Ce.applyMatrix4(te.matrix),te.geometry=Ce,te.renderOrder=1/0,te.position.set(0,0,0),te.rotation.set(0,0,0),te.scale.set(1,1,1),j.add(te)}return j}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=Y(A)),this.add(this.gizmo.rotate=Y(L)),this.add(this.gizmo.scale=Y(D)),this.add(this.picker.translate=Y(w)),this.add(this.picker.rotate=Y(M)),this.add(this.picker.scale=Y(F)),this.add(this.helper.translate=Y(R)),this.add(this.helper.rotate=Y(y)),this.add(this.helper.scale=Y(V)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Vr;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){const a=s[r];a.visible=!0,a.rotation.set(0,0,0),a.position.copy(this.worldPosition);let o;if(this.camera.isOrthographicCamera?o=(this.camera.top-this.camera.bottom)/this.camera.zoom:o=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),a.scale.set(1,1,1).multiplyScalar(o*this.size/4),a.tag==="helper"){a.visible=!1,a.name==="AXIS"?(a.visible=!!this.axis,this.axis==="X"&&(pt.setFromEuler(Ir.set(0,0,0)),a.quaternion.copy(n).multiply(pt),Math.abs(lt.copy(Us).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Y"&&(pt.setFromEuler(Ir.set(0,0,Math.PI/2)),a.quaternion.copy(n).multiply(pt),Math.abs(lt.copy(vi).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Z"&&(pt.setFromEuler(Ir.set(0,Math.PI/2,0)),a.quaternion.copy(n).multiply(pt),Math.abs(lt.copy(Ns).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="XYZE"&&(pt.setFromEuler(Ir.set(0,Math.PI/2,0)),lt.copy(this.rotationAxis),a.quaternion.setFromRotationMatrix(Dc.lookAt(Pc,lt,vi)),a.quaternion.multiply(pt),a.visible=this.dragging),this.axis==="E"&&(a.visible=!1)):a.name==="START"?(a.position.copy(this.worldPositionStart),a.visible=this.dragging):a.name==="END"?(a.position.copy(this.worldPosition),a.visible=this.dragging):a.name==="DELTA"?(a.position.copy(this.worldPositionStart),a.quaternion.copy(this.worldQuaternionStart),Ot.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Ot.applyQuaternion(this.worldQuaternionStart.clone().invert()),a.scale.copy(Ot),a.visible=this.dragging):(a.quaternion.copy(n),this.dragging?a.position.copy(this.worldPositionStart):a.position.copy(this.worldPosition),this.axis&&(a.visible=this.axis.search(a.name)!==-1));continue}a.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(a.name==="X"&&Math.abs(lt.copy(Us).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Y"&&Math.abs(lt.copy(vi).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Z"&&Math.abs(lt.copy(Ns).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XY"&&Math.abs(lt.copy(Ns).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="YZ"&&Math.abs(lt.copy(Us).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XZ"&&Math.abs(lt.copy(vi).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1)):this.mode==="rotate"&&(Ur.copy(n),lt.copy(this.eye).applyQuaternion(pt.copy(n).invert()),a.name.search("E")!==-1&&a.quaternion.setFromRotationMatrix(Dc.lookAt(this.eye,Pc,vi)),a.name==="X"&&(pt.setFromAxisAngle(Us,Math.atan2(-lt.y,lt.z)),pt.multiplyQuaternions(Ur,pt),a.quaternion.copy(pt)),a.name==="Y"&&(pt.setFromAxisAngle(vi,Math.atan2(lt.x,lt.z)),pt.multiplyQuaternions(Ur,pt),a.quaternion.copy(pt)),a.name==="Z"&&(pt.setFromAxisAngle(Ns,Math.atan2(lt.y,lt.x)),pt.multiplyQuaternions(Ur,pt),a.quaternion.copy(pt))),a.visible=a.visible&&(a.name.indexOf("X")===-1||this.showX),a.visible=a.visible&&(a.name.indexOf("Y")===-1||this.showY),a.visible=a.visible&&(a.name.indexOf("Z")===-1||this.showZ),a.visible=a.visible&&(a.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),a.material._color=a.material._color||a.material.color.clone(),a.material._opacity=a.material._opacity||a.material.opacity,a.material.color.copy(a.material._color),a.material.opacity=a.material._opacity,this.enabled&&this.axis&&(a.name===this.axis?(a.material.color.copy(this.materialLib.active.color),a.material.opacity=1):this.axis.split("").some(function(l){return a.name===l})&&(a.material.color.copy(this.materialLib.active.color),a.material.opacity=1))}super.updateMatrixWorld(e)}}class t_ extends ce{constructor(){super(new Li(1e5,1e5,2,2),new ti({visible:!1,wireframe:!0,side:tn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Nr.copy(Us).applyQuaternion(t==="local"?this.worldQuaternion:Vr),Ds.copy(vi).applyQuaternion(t==="local"?this.worldQuaternion:Vr),Ls.copy(Ns).applyQuaternion(t==="local"?this.worldQuaternion:Vr),lt.copy(Ds),this.mode){case"translate":case"scale":switch(this.axis){case"X":lt.copy(this.eye).cross(Nr),Sn.copy(Nr).cross(lt);break;case"Y":lt.copy(this.eye).cross(Ds),Sn.copy(Ds).cross(lt);break;case"Z":lt.copy(this.eye).cross(Ls),Sn.copy(Ls).cross(lt);break;case"XY":Sn.copy(Ls);break;case"YZ":Sn.copy(Nr);break;case"XZ":lt.copy(Ls),Sn.copy(Ds);break;case"XYZ":case"E":Sn.set(0,0,0);break}break;default:Sn.set(0,0,0)}Sn.length()===0?this.quaternion.copy(this.cameraQuaternion):(Lc.lookAt(Ot.set(0,0,0),Sn,lt),this.quaternion.setFromRotationMatrix(Lc)),super.updateMatrixWorld(e)}}const xi={width:5e3,depth:5e3,height:4e3,wall:200},dt=(i,e,t,n,s,r,a,o,l,c,h,d)=>({id:i,name:e,label:t,kind:n,wall:s,width:r,height:a,depth:o,x:l,bottom:c,z:h,source:d}),St=[dt("back-a","后墙 · IFP 01","IFP 01","screen","back",1501,930,90,-751,1e3,-2255,"宽高、离地高度按图纸；厚度暂估"),dt("back-b","后墙 · IFP 02","IFP 02","screen","back",1501,930,90,750,1e3,-2255,"宽高、离地高度按图纸；厚度暂估"),dt("left-ifp","左墙 · IFP 03","IFP 03","screen","left",1501,930,90,-2255,1e3,0,"宽高、离地高度按图纸；沿墙位置示意"),dt("left-small-a","左墙 · PD150（上）","PD150 A","screen","left",518,300,70,-2265,1700,1360,"宽度按图纸；高度、厚度与位置暂估"),dt("left-small-b","左墙 · PD150（下）","PD150 B","screen","left",518,300,70,-2265,1250,1360,"宽度按图纸；高度、厚度与位置暂估"),dt("right-ifp","右墙 · IFP 04","IFP 04","screen","right",1501,930,90,2255,1e3,-985,"宽高、离地高度按图纸；沿墙位置示意"),dt("left-cabinet","左侧 · 展示柜","CABINET L","cabinet","floor",2e3,800,450,-2075,0,0,"2,000 × 800 × 450 mm 按1030图纸"),dt("right-cabinet","右侧 · 展示柜","CABINET R","cabinet","floor",2e3,800,600,2e3,0,0,"2,000 × 800 × 600 mm 按1030图纸"),dt("right-shelf","右墙 · 设备托板","SHELF","shelf","right",750,30,200,2200,1680,375,"750 × 30 × 200 mm 按图纸；高度示意"),dt("right-device","右墙 · HY300","HY300","device","right",550,100,120,2240,1710,375,"占位模型：尺寸暂估"),dt("podium","中央 · SL100","SL100","podium","floor",600,1100,500,0,0,-500,"占位模型：尺寸与位置暂估")];JSON.parse(JSON.stringify(St));for(const i of["left","right","back"])St.push(dt(`${i}-hatch`,`${{left:"左墙",right:"右墙",back:"后墙"}[i]} · 检修口`,"ACCESS","hatch",i,i==="back"?500:1500,i==="back"?250:450,20,i==="left"?-2290:i==="right"?2290:0,150,i==="back"?-2290:0,"按用户最新要求：侧墙1500×450，主墙500×250；下沿150 mm，侧墙柜背须贯通，工厂修图待确认"));for(const i of["left","right"])St.push({...dt(`${i}-laptop`,`${i==="left"?"左":"右"}柜顶 · 笔记本`,"LAPTOP","laptop","floor",340,240,280,0,850,0,"笔记本占位；位置相对于柜顶"),parentId:`${i}-cabinet`,offsetX:0,offsetZ:0}),St.push({...dt(`${i}-strip`,`${i==="left"?"左":"右"}柜内 · 排插`,"POWER","strip","floor",300,40,70,0,150,0,"柜内电源终点，随柜体移动"),parentId:`${i}-cabinet`});St.push({...dt("back-strip","后墙检修口 · 排插","POWER","strip","floor",300,40,70,0,80,-2150,"后墙两块 IFP 电源终点"),parentId:"back-hatch"});const n_=St.find(i=>i.id==="right-laptop");Object.assign(n_,{name:"右柜顶 · LDP100（内置OPS）",label:"LDP100",kind:"ldp",width:650,height:150,depth:500,source:"照片估算650 × 150 × 500 mm；内置OPS；接口及深度待实测"});St.push(dt("right-shelf-lower","右墙 · 下层板","SHELF LOWER","shelf","right",1e3,30,200,2200,1300,375,"1000 × 30 × 200；与上层板净距350 mm"));for(const[i,e]of[["a",1675],["b",1225]])St.push(dt("wp55-"+i,"左墙 · WP55 "+i.toUpperCase(),"WP55","device","left",225,250,70,-2265,e,1980,"外形暂估；墙内齐平插座，接口待确认"));for(const[i,e]of[["a","left-small-a"],["b","left-small-b"]])St.push({...dt("socket-"+i,"左墙 · 内嵌齐平插座 "+i.toUpperCase(),"UK SOCKET","socket","left",85,85,20,-2290,0,0,"墙面齐平插座；位置及实际供电待核对"),parentId:e});St.push(dt("sa200","后墙 · SA200","SA200","device","back",500,80,90,0,800,-2255,"外形及高度示意，孔径待确认"));St.push(dt("cpl50","门头右外框 · CPL50","CPL50","screen","front",250,170,40,2380,1400,2500,"下沿1400 mm；尺寸暂估；PoE线终点待确认"));St.push({...dt("poe-node","左柜 · PoE交换机（型号待确认）","SWITCH","network","floor",250,45,150,-2075,260,0,"PoE能力和实际端口待确认"),parentId:"left-cabinet",offsetZ:0});St.push({...dt("router","左柜 · 路由器","ROUTER","network","floor",180,45,120,-2075,330,0,"型号、端口及联网来源待确认"),parentId:"left-cabinet",offsetZ:-350});St.push({...dt("server","左柜 · 服务器","SERVER","network","floor",220,100,180,-2075,180,0,"型号、数量及服务待确认"),parentId:"left-cabinet",offsetZ:350});St.push({...dt("podium-strip","SL100下方 · 英规排插","UK POWER","strip","floor",300,40,70,0,0,-500,"SL100专用取电点：位置示意，实际接入待确认"),parentId:"podium"});const i_=["back-a","back-b","left-ifp","right-ifp","right-device","right-shelf-lower","sa200","cpl50"];for(const i of i_){const e=St.find(t=>t.id===i);St.push({...dt("hole-"+i,e.name+" · 穿线孔","Ø80?","hole",e.wall,80,80,20,e.x,e.bottom,e.z,"孔径80 mm为示意，设备接口和施工位置待确认"),parentId:i})}const si=i=>JSON.parse(JSON.stringify(i));function Ws(i){return i.wall==="left"||i.wall==="right"||i.kind==="cabinet"||i.kind==="ldp"?[i.depth,i.height,i.width]:[i.width,i.height,i.depth]}function il(i){if(i.kind==="cabinet"&&(i.height=Math.min(i.height,3760),i.depth=Math.max(30,i.depth)),i.wall==="front")return i.x=2380,i.z=2500,i.bottom=Math.max(0,Math.min(4e3-i.height,Math.round(i.bottom))),i;const[e,t,n]=Ws(i),s=2300;return i.x=Math.max(Math.ceil(-s+e/2),Math.min(Math.floor(s-e/2),Math.round(i.x))),i.z=Math.max(Math.ceil(-s+n/2),Math.min(Math.floor(2500-n/2),Math.round(i.z))),i.bottom=i.wall==="floor"?0:Math.round(Math.max(0,Math.min(4e3-t,i.bottom))),i.wall==="back"&&(i.z=-2300+i.depth/2),i.wall==="left"&&(i.x=-2300+i.depth/2),i.wall==="right"&&(i.x=2300-i.depth/2),i}function Ic(i){const[e,t,n]=Ws(i);return{min:[i.x-e/2,i.bottom,i.z-n/2],max:[i.x+e/2,i.bottom+t,i.z+n/2]}}function s_(i){i=i.filter(t=>!["hatch","hole","socket","strip","network","laptop","ldp"].includes(t.kind)&&t.wall!=="front");const e=[];for(let t=0;t<i.length;t++){const n=i[t],s=Ic(n);(s.min[0]<-2300.1||s.max[0]>2300.1||s.min[2]<-2300.1||s.max[2]>2500.1||s.min[1]<0||s.max[1]>4000.1)&&e.push(`${n.name} 超出展位边界`);for(let r=t+1;r<i.length;r++){const a=i[r],o=Ic(a);s.min.every((l,c)=>Math.min(s.max[c],o.max[c])-Math.max(l,o.min[c])>2)&&e.push(`${n.name} 与 ${a.name} 占用空间重叠`)}}return e}function r_(i){if(![1,2,3,4].includes(i?.version)||!Array.isArray(i.items))throw Error("方案格式不匹配");const e=["back-a","back-b","left-ifp","left-small-a","left-small-b","right-ifp","left-cabinet","right-cabinet","right-shelf","right-device","podium","left-hatch","right-hatch","back-hatch","left-laptop","left-strip","right-laptop","right-strip","back-strip","left-screen-hole","left-screen-strip"],t=["hole-left-small-a","hole-left-small-b","hole-wp55-a","hole-wp55-b"],n=["router","server","podium-strip"],s=i.version===4?[...St.map(o=>o.id),...t]:e.slice(0,i.version===1?11:i.version===2?19:21);if(i.version===4){const o=new Set(i.items.map(l=>l.id));for(const l of St)if(!n.includes(l.id)&&!o.has(l.id))throw Error("物件数量不匹配")}else if(i.items.length!==s.length)throw Error("物件数量不匹配");const r=new Set,a=si(St);for(const o of i.items){if(!s.includes(o.id)||r.has(o.id))throw Error("物件 ID 无效或重复");r.add(o.id);for(const c of["x","z","bottom","width","height","depth"])if(typeof o[c]!="number"||!Number.isFinite(o[c])||Math.abs(o[c])>1e4)throw Error("方案含无效尺寸或坐标");if(o.width<20||o.height<20||o.depth<20||o.width>4600||o.height>4e3||o.depth>2e3||o.bottom<0||o.bottom>4e3)throw Error("尺寸超出范围");const l=a.find(c=>c.id===o.id);if(l&&o.id!=="poe-node"){if(i.version<4&&o.id==="right-laptop"){l.offsetX=o.offsetX||0,l.offsetZ=o.offsetZ||0;continue}for(const c of["x","z","bottom","width","height","depth"])l[c]=o[c];if(["laptop","ldp"].includes(l.kind)){if(!Number.isFinite(o.offsetX)||!Number.isFinite(o.offsetZ))throw Error("台面偏移无效");l.offsetX=o.offsetX,l.offsetZ=o.offsetZ}il(l)}}return $s(a)}function $s(i){for(const e of i.filter(t=>t.parentId)){const t=i.find(n=>n.id===e.parentId);if(t)if(["laptop","ldp"].includes(e.kind)){const[n,,s]=Ws(t),[r,,a]=Ws(e);e.offsetX=Math.max(-(n-r)/2,Math.min((n-r)/2,e.offsetX||0)),e.offsetZ=Math.max(-(s-a)/2,Math.min((s-a)/2,e.offsetZ||0)),e.x=t.x+e.offsetX,e.z=t.z+e.offsetZ,e.bottom=t.bottom+t.height,e.height=Math.min(e.height,4e3-e.bottom)}else e.kind==="network"?(e.x=t.x,e.z=t.z+(e.offsetZ||0),e.bottom=e.id==="router"?330:e.id==="server"?180:260):e.id==="podium-strip"?(e.x=t.x,e.z=t.z,e.bottom=0):e.kind==="socket"?(e.x=-2290,e.z=t.z,e.bottom=t.bottom+t.height/2-e.height/2):e.kind==="hole"?(e.bottom=t.bottom+100-e.height/2,t.wall==="back"?(e.x=t.id==="sa200"?t.x:t.x-t.width/2+100,e.z=-2290):t.wall==="front"?(e.x=t.x,e.z=2480,e.bottom=t.bottom+t.height/2-e.height/2):(e.x=t.wall==="left"?-2290:2290,e.z=t.z+(t.wall==="left"?1:-1)*(t.width/2-100))):e.id==="left-screen-strip"?(e.x=-2360,e.z=t.z,e.bottom=t.bottom+t.height/2-e.height/2):(e.x=t.x,e.z=t.kind==="hatch"?t.z+140:t.z,e.bottom=t.kind==="hatch"?80:Math.min(150,t.height/2))}return i}const Lh=[["back","后墙"],["left","左墙"],["right","右墙"],["center","中央"],["front","门头"]];function Xs(i,e){const t=new Map(i.map(a=>[a.id,a])),n=[],s=new Set([e]);let r=t.get(e)?.parentId;for(;t.has(r)&&!s.has(r);)n.push(r),s.add(r),r=t.get(r).parentId;return n}function Bo(i,e){const t=Xs(i,e).at(-1)||e,n=i.find(s=>s.id===t);return n?["back","left","right","front"].includes(n.wall)?n.wall:n.kind==="cabinet"?n.id.startsWith("right")?"right":"left":"center":"center"}function Uc(i,e="",t=n=>n){const n=e.trim().toLocaleLowerCase(),s=new Set(i.filter(a=>!n||[a.name,t(a.name),a.label,a.id].some(o=>String(o||"").toLocaleLowerCase().includes(n))).map(a=>a.id)),r=new Set(s);for(const a of s)for(const o of Xs(i,a))r.add(o);return Lh.map(([a,o])=>{const l=i.filter(c=>Bo(i,c.id)===a);return{id:a,name:o,members:l.map(c=>c.id),visible:l.filter(c=>r.has(c.id)).map(c=>c.id),matches:l.filter(c=>s.has(c.id)).map(c=>c.id)}})}function a_(i,e){const t=new Set([e,...Xs(i,e)]);for(const n of i)Xs(i,n.id).includes(e)&&t.add(n.id);return t}function sl(i,e,t){const n=a_(e,t);return[i.source,i.target,i.hatch].some(s=>n.has(s))}function o_(i,e,t,n,s={}){return n==="off"?[]:i.filter(r=>s[r.type]!==!1&&(n==="all"||sl(r,e,t)))}function os(i,e){return i.parentId?["laptop","ldp"].includes(i.kind)&&["x","z"].includes(e):i.wall==="front"&&["x","z"].includes(e)?!1:!(i.kind==="hatch"&&e==="depth")}const l_={tab:"edit",scope:"related",rightOpen:!0,groups:{},nodes:{},sections:{position:!0,size:!1,source:!1},types:{},powerPoints:!0};function c_(i){const e=structuredClone(l_);if(!i||typeof i!="object")return e;["objects","edit","connections","checks"].includes(i.tab)&&(e.tab=i.tab),["related","all","off"].includes(i.scope)&&(e.scope=i.scope),typeof i.leftOpen=="boolean"?e.rightOpen=i.leftOpen||i.rightOpen===!0:typeof i.rightOpen=="boolean"&&(e.rightOpen=i.rightOpen),i.leftOpen===!0&&i.rightOpen===!1&&(e.tab="objects"),typeof i.powerPoints=="boolean"&&(e.powerPoints=i.powerPoints);for(const t of["groups","nodes","sections","types"])if(i[t]&&typeof i[t]=="object")for(const[n,s]of Object.entries(i[t]))typeof s=="boolean"&&!["__proto__","constructor","prototype"].includes(n)&&(e[t][n]=s);return e}const Nc="iq-dubai-booth-panels-v1",Se=i=>document.querySelector(i),kt=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Fc=i=>Nn(i.name.split(" · ").slice(1).join(" · ")||i.name),h_=i=>({screen:"▣",cabinet:"▤",hatch:"□",hole:"○",socket:"⌑",strip:"▥",network:"▦",laptop:"▱",ldp:"▱",podium:"▰"})[i.kind]||"◇";function u_({getItems:i,getSelected:e,select:t,connections:n,cableTypes:s,getWarnings:r,onDisplayChange:a}){let o;try{o=JSON.parse(localStorage.getItem(Nc))}catch{}const l=c_(o),c=matchMedia("(max-width: 1099px)");let h=!1,d="",f="",p=null,g="",v="";const m=new Map,u=new Map,E=()=>{try{localStorage.setItem(Nc,JSON.stringify(l))}catch{}};function b(){const O=c.matches,z=O?h:l.rightOpen;Se("#right-panel").hidden=!z,Se("#open-right").hidden=z,Se("#open-right").setAttribute("aria-expanded",String(z)),Se("#panel-backdrop").hidden=!(O&&z),document.body.classList.toggle("panel-collapsed",!z),Se("header").inert=O&&z,Se("#viewport").inert=O&&z}function S(){c.matches?h=!0:l.rightOpen=!0,E(),b()}function A(){c.matches?h=!1:l.rightOpen=!1,E(),b(),Se("#open-right").focus()}function w(){S(),L("edit"),Se("#tab-button-edit").focus({preventScroll:!0})}Se("#open-right").onclick=()=>{S(),L(l.tab),Se("#tab-button-"+l.tab).focus()},Se("#close-right").onclick=A,Se("#panel-backdrop").onclick=A,c.addEventListener("change",()=>{h=!1,b()}),document.addEventListener("keydown",O=>{if(!(!c.matches||!h)&&(O.key==="Escape"&&(O.preventDefault(),A()),O.key==="Tab")){const z=[...Se("#right-panel").querySelectorAll('button,input,summary,[tabindex="0"]')].filter(Ce=>!Ce.disabled&&Ce.tabIndex>=0&&Ce.getClientRects().length),Q=z[0],_e=z.at(-1);O.shiftKey&&document.activeElement===Q?(O.preventDefault(),_e?.focus()):!O.shiftKey&&document.activeElement===_e&&(O.preventDefault(),Q?.focus())}},!0);const R=[...document.querySelectorAll("[data-panel-tab]")];function L(O){l.tab=O;for(const Q of R){const _e=Q.dataset.panelTab===O;Q.setAttribute("aria-selected",String(_e)),Q.tabIndex=_e?0:-1,Se("#tab-"+Q.dataset.panelTab).hidden=!_e}const z=O==="objects";Se("#selection-heading").hidden=z,Se(".inspector-scroll").hidden=z,z?(M(),F()):Se(".inspector-scroll").scrollTop=0,E()}Se(".inspector-tabs").addEventListener("click",O=>{const z=O.target.closest("[data-panel-tab]");z&&L(z.dataset.panelTab)}),Se(".inspector-tabs").addEventListener("keydown",O=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(O.key))return;O.preventDefault();const z=R.indexOf(document.activeElement),Q=O.key==="ArrowRight"!=(document.documentElement.dir==="rtl"),_e=O.key==="Home"?0:O.key==="End"?R.length-1:(z+(Q?1:-1)+R.length)%R.length;L(R[_e].dataset.panelTab),R[_e].focus()});function y(O){const z=JSON.stringify(O.map(fe=>[fe.id,fe.parentId,fe.name,fe.label,fe.wall]));if(z===f)return;f=z,m.clear(),u.clear(),Se("#objects").replaceChildren();const Q=Uc(O);function _e(fe,k,K=0){const oe=O.filter(he=>he.parentId===fe.id),me=document.createElement("div");me.className="directory-node",me.innerHTML=`<div class="directory-line" style="--depth:${K}">${oe.length?`<button class="branch-toggle" data-expand="${kt(fe.id)}" aria-label="${kt(ze("展开 {name} 的附属物件",{name:Fc(fe)}))}" aria-expanded="false">›</button>`:'<span class="branch-spacer"></span>'}<button class="object-row" data-id="${kt(fe.id)}" aria-pressed="false" title="${kt(Nn(fe.name))}"><span class="object-icon" aria-hidden="true">${h_(fe)}</span><span class="object-text">${kt(Fc(fe))}</span></button></div><div class="directory-children"></div>`,m.set(fe.id,me),k.append(me);for(const he of oe)_e(he,me.lastElementChild,K+1)}for(const fe of Q){const k=document.createElement("section");k.className="directory-group",k.innerHTML=`<button class="group-heading" data-group="${fe.id}" aria-expanded="true"><span><span class="group-arrow" aria-hidden="true">⌄</span> ${ze(fe.name)}</span><span class="group-count"></span></button><div class="group-content"></div>`,Se("#objects").append(k),u.set(fe.id,k);for(const K of O.filter(oe=>fe.members.includes(oe.id)&&!O.some(me=>me.id===oe.parentId)))_e(K,k.lastElementChild)}const Ce=document.createElement("p");Ce.id="directory-empty",Ce.className="empty-state",Ce.textContent=ze("没有匹配的物件，请尝试型号或名称。"),Se("#objects").append(Ce)}function M(){if(l.tab!=="objects")return;const O=i(),z=e();y(O);const Q=!!d.trim(),_e=Uc(O,d,Nn);let Ce=0;for(const fe of _e){Ce+=fe.matches.length;const k=u.get(fe.id),K=Q||l.groups[fe.id]!==!1;k.hidden=!fe.visible.length,k.firstElementChild.setAttribute("aria-expanded",String(K)),k.querySelector(".group-count").textContent=Q?`${fe.matches.length} / ${fe.members.length}`:fe.members.length,k.lastElementChild.hidden=!K;for(const oe of fe.members){const me=m.get(oe);me.hidden=!fe.visible.includes(oe);const he=me.querySelector(":scope > .directory-line > .object-row");he.classList.toggle("active",oe===z),he.setAttribute("aria-pressed",String(oe===z)),he.classList.toggle("search-context",Q&&!fe.matches.includes(oe));const Ue=Q||l.nodes[oe]===!0;me.lastElementChild.hidden=!Ue;const Ze=me.querySelector(":scope > .directory-line > .branch-toggle");Ze&&(Ze.setAttribute("aria-expanded",String(Ue)),Ze.disabled=Q)}}Se("#object-count").textContent=Q?`${Ce} / ${O.length}`:String(O.length),Se("#directory-empty").hidden=Ce>0,Se("#clear-search").hidden=!d}function D(O){const z=i();d&&(d="",Se("#object-search").value=""),l.groups[Bo(z,O)]=!0;for(const Q of Xs(z,O))l.nodes[Q]=!0;E(),M(),F()}function F(){const O=m.get(e())?.querySelector(".object-row");if(!O?.getClientRects().length)return;const z=Se("#objects"),Q=O.getBoundingClientRect(),_e=z.getBoundingClientRect();Q.top<_e.top?z.scrollTop-=_e.top-Q.top+8:Q.bottom>_e.bottom&&(z.scrollTop+=Q.bottom-_e.bottom+8)}Se("#objects").addEventListener("click",O=>{const z=O.target.closest("[data-group]"),Q=O.target.closest("[data-expand]"),_e=O.target.closest("[data-id]");z?(l.groups[z.dataset.group]=l.groups[z.dataset.group]===!1,E(),M()):Q?(l.nodes[Q.dataset.expand]=!l.nodes[Q.dataset.expand],E(),M()):_e&&(t(_e.dataset.id),w())}),Se("#object-search").addEventListener("input",O=>{d=O.target.value,M()}),Se("#clear-search").onclick=()=>{d="",Se("#object-search").value="",M(),Se("#object-search").focus()};const V=(O,z,Q,_e)=>`<div class="field" data-field-row="${O}"><label for="field-${O}">${z}</label><span class="input-wrap"><input id="field-${O}" aria-label="${z}" data-field="${O}" type="number" min="${Q}" max="${_e}" step="10"/><span>mm</span></span><span class="readonly-value" data-readonly="${O}" hidden></span></div>`;Se("#inspector").innerHTML=`<details data-section="position" open><summary>位置</summary><div class="section-body">${V("x","左右位置 X",-2300,2300)}${V("z","前后位置 Z",-2300,2500)}${V("bottom","下沿离地",0,4e3)}<div class="nudge"><button data-nudge="-50">↓ 下移 50 mm</button><button data-nudge="50">↑ 上移 50 mm</button></div><p class="upper-edge">上沿离地 <strong id="upper-height"></strong></p><p id="attachment-note" class="compact-note" hidden></p></div></details><details data-section="size"><summary><span>外形尺寸</span><small id="size-summary"></small></summary><div class="section-body">${V("width","宽度",30,4600)}${V("height","高度",20,4e3)}${V("depth","厚度 / 深度",20,2e3)}<button id="resize-hatch" class="primary" hidden>调整开口高度 ↕</button><p id="hatch-help" class="compact-note" hidden>拖动顶部绿色手柄，下沿保持不变。</p></div></details><details data-section="source"><summary><span>参数依据与操作说明</span><small id="source-status"></small></summary><div class="section-body"><p id="source-text" class="compact-note"></p><p id="operation-note" class="compact-note"></p><p class="compact-note">数值输入单位为毫米；50 mm 吸附仅作用于拖动。</p></div></details>`;const Y=Yc(Se("#inspector"));Y();for(const O of Se("#inspector").querySelectorAll("details"))O.open=l.sections[O.dataset.section]===!0,O.addEventListener("toggle",()=>{l.sections[O.dataset.section]=O.open,E()});function X(){const O=i(),z=O.find(Q=>Q.id===e());if(z){Se("#selected-name").textContent=Nn(z.name),Se("#selected-region").textContent=ze(Lh.find(([Q])=>Q===Bo(O,z.id))[1])+" · "+ze(z.parentId?"附属物件":z.wall==="floor"?"地面物件":"壁挂物件"),p!==z.id&&(z.kind==="hatch"&&(Se('#inspector [data-section="size"]').open=!0),p=z.id);for(const Q of["x","z","bottom","width","height","depth"]){const _e=Se(`[data-field-row="${Q}"]`),Ce=Se("#field-"+Q),fe=Se(`[data-readonly="${Q}"]`);_e.hidden=Q==="x"&&!["floor","back","front"].includes(z.wall)||Q==="z"&&z.wall==="back";const k=os(z,Q)&&!(Q==="bottom"&&z.wall==="floor"&&!z.parentId);Ce.parentElement.hidden=!k,Ce.disabled=!k,fe.hidden=k,Ce.value=Math.round(z[Q]),fe.textContent=`${Math.round(z[Q])} mm`,Q==="bottom"&&(Ce.max=4e3-z.height)}Se("#inspector .nudge").hidden=z.wall==="floor"||!os(z,"bottom"),Se("#upper-height").textContent=`${Math.round(z.bottom+z.height)} mm`,Se("#size-summary").textContent=`${z.width} × ${z.height} × ${z.depth} mm`,Se("#attachment-note").hidden=!z.parentId,Se("#attachment-note").textContent=z.parentId?ze("跟随 {name}",{name:Nn(O.find(Q=>Q.id===z.parentId)?.name||z.parentId)})+" · "+ze(["laptop","ldp"].includes(z.kind)?"可在台面范围内移动。":"位置与尺寸由附属关系确定。"):"",Se("#source-status").textContent=ze(/暂估|估算|示意|待/.test(z.source)?"含暂估 / 待核对":z.parentId?"附属物件":""),Se("#source-text").textContent=nu(z.source),Se("#operation-note").textContent=ze(z.kind==="hatch"?"开口可沿墙移动、升降；调整高度保持下沿不变。":z.parentId?"附属设备随所属物件更新位置。":z.wall==="floor"?"物件保持落地，拖动彩色轴沿地面移动。":"物件保持贴墙，拖动彩色轴沿墙移动或升降。"),Se("#resize-hatch").hidden=z.kind!=="hatch",Se("#hatch-help").hidden=z.kind!=="hatch",j()}}function j(){const O=i(),z=e(),Q=n.filter(k=>sl(k,O,z));Se("#connection-count").textContent=ze("{n} 条关联线路",{n:Q.length});const _e=JSON.stringify([z,Q,O.map(k=>[k.id,k.name])]);if(_e===g)return;g=_e;const Ce=Object.fromEntries(O.map(k=>[k.id,k])),fe=[["hdmi","视频"],["usb","USB"],["power","供电"],["lan","网络"],...Object.keys(s).filter(k=>!["hdmi","usb","power","lan"].includes(k)).map(k=>[k,s[k].name])];Se("#connection-list").innerHTML=Q.length?fe.map(([k,K])=>{const oe=Q.filter(me=>me.type===k);return oe.length?`<section class="connection-group"><h3><i style="background:${s[k].color}"></i>${kt(ze(K))}<small>${oe.length}</small></h3>${oe.map(me=>`<div class="connection-card" data-connection="${kt(me.id)}"><small>${kt(ze(s[k].name))}</small><button class="text-link" data-select="${kt(me.source)}">${kt(Nn(Ce[me.source]?.name||me.source))}</button><span class="connection-arrow">${ze("↓ 接至")}</span><button class="text-link" data-select="${kt(me.target)}">${kt(Nn(Ce[me.target]?.name||me.target))}</button></div>`).join("")}</section>`:""}).join(""):`<p class="empty-state">${ze("当前物件未配置关联线路")}</p>`}function $(){const O=i(),z=e(),Q=r(),_e=JSON.stringify([z,Q]);if(_e===v)return;v=_e,Se("#check-count").textContent=Q.length?ze("{n} 项提醒",{n:Q.length}):ze("暂无提醒");const Ce=[...O].sort((he,Ue)=>Ue.name.length-he.name.length);function fe(he){const Ue=[];let Ze=he;for(;Ze;){let C=null,Qe=1/0;for(const Be of Ce){const Le=Ze.indexOf(Be.name);Le>=0&&Le<Qe&&(C=Be,Qe=Le)}if(!C){Ue.push({text:Ze});break}Qe&&Ue.push({text:Ze.slice(0,Qe)}),Ue.push({id:C.id,text:C.name}),Ze=Ze.slice(Qe+C.name.length)}return Ue}const k=Q.map(he=>fe(he)),K=k.filter(he=>he.some(Ue=>Ue.id===z)),oe=k.filter(he=>!he.some(Ue=>Ue.id===z)),me=he=>he.map(Ue=>`<div class="warning">${Ue.map(Ze=>Ze.id?`<button class="text-link" data-select="${kt(Ze.id)}">${kt(Nn(Ze.text))}</button>`:kt(" "+ze(Ze.text.trim())+" ")).join("")}</div>`).join("");Se("#checks").innerHTML=`<h3>${ze("当前物件")}</h3>${K.length?me(K):`<p class="empty-state">${ze("当前物件没有空间提醒。")}</p>`}${oe.length?`<h3>${ze("全场其他提醒")}</h3>${me(oe)}`:""}<p class="checks-note">${ze("仅按简化包围盒检查，部分附属物不参与检测；不代表承重、支架、走线或施工验收。")}</p>`}Se(".right-panel").addEventListener("click",O=>{const z=O.target.closest("[data-select]");z&&(t(z.dataset.select),D(z.dataset.select))});function W(){for(const O of document.querySelectorAll("[data-wire-scope]"))O.setAttribute("aria-pressed",String(O.dataset.wireScope===l.scope));Se("#wire-scope-status").textContent=ze(l.scope==="related"?"仅相关线路":l.scope==="all"?"全部线路":"走线已关闭")+" · "+ze("虚线为隐藏段 · 接口及孔径示意")}for(const O of document.querySelectorAll("[data-wire-scope]"))O.onclick=()=>{l.scope=O.dataset.wireScope,E(),W(),a()};for(const[O,z]of Object.entries(s)){if(!n.some(k=>k.type===O))continue;const Q=document.createElement("label"),_e=document.createElement("input"),Ce=document.createElement("i");_e.type="checkbox",_e.id="wire-"+O,_e.checked=l.types[O]!==!1,Ce.className="cable-dot",Ce.style.backgroundColor=z.color,Ce.setAttribute("aria-hidden","true");const fe=document.createElement("span");fe.dataset.cableType=O,fe.textContent=ze(z.name),Q.append(_e,Ce,fe),Se("#cable-filters").append(Q),_e.onchange=()=>{l.types[O]=_e.checked,E(),a()}}Se("#power-points").checked=l.powerPoints,Se("#power-points").addEventListener("change",()=>{l.powerPoints=Se("#power-points").checked,E()}),b(),L(l.tab),W();function te(){f="",v="",g="",Y();for(const O of document.querySelectorAll("[data-cable-type]"))O.textContent=ze(s[O.dataset.cableType].name);M(),X(),$(),W()}return{renderList:M,renderInspector:X,renderChecks:$,refreshLanguage:te,reveal:D,openProperties:w,closeMobilePanel(){c.matches&&h&&A()},get scope(){return l.scope},get types(){return l.types}}}const ns={lan:{name:"LAN / Ethernet / PoE+",color:"#0074D9"},hdmi:{name:"HDMI（视频）",color:"#FF4136"},usb:{name:"USB",color:"#FFDC00"},rs232:{name:"RS232 / RS485",color:"#B10DC9"},audio:{name:"Audio",color:"#2ECC40"},ir:{name:"IR 控制线（发射器）",color:"#AAAAAA"},relay:{name:"Relay 控制线",color:"#FF851B"},power:{name:"电源",color:"#FF851B"}},rl=[...["back-a","back-b","left-ifp","right-ifp"].flatMap(i=>["power","hdmi","usb"].map(e=>{const t=i.startsWith("back")?"back":i.split("-")[0];return{id:i+"-"+e,source:i,type:e,hatch:t+"-hatch",target:e==="power"?t+"-strip":t==="back"?"podium":t+"-laptop"}})),...["a","b"].flatMap(i=>[{id:"wp55-"+i+"-power",source:"wp55-"+i,type:"power",hatch:"left-hatch",target:"socket-"+i},{id:"socket-"+i+"-power",source:"socket-"+i,type:"power",hatch:"left-hatch",target:"left-strip"}]),{id:"ldp-power",source:"right-laptop",type:"power",hatch:"right-hatch",target:"right-strip"},{id:"cpl50-lan",source:"cpl50",type:"lan",hatch:"right-hatch",target:"poe-node"}];function d_(i){const e=Object.fromEntries(i.map(t=>[t.id,t]));return rl.map(t=>{const n=e[t.source],s=e[t.target],r=e[t.hatch],a=e["hole-"+n.id],o=a?[a.x,a.bottom+a.height/2,a.z]:[n.x,n.bottom+n.height/2,n.z],l=[s.x,s.bottom+s.height/2,s.z],c=t.type==="hdmi"?-45:t.type==="usb"?45:0;let h;if(t.target.startsWith("socket-"))h=[o,l];else if(t.source==="cpl50")h=[o,[2380,120,2450],[2380,120,-2400],[-2380,120,-2400],[-2380,120,l[2]],[l[0],l[1],l[2]]];else if(n.wall==="back")h=[o,[o[0],r.bottom+r.height/2,-2400],[r.x,r.bottom+r.height/2,-2400],[r.x,-30,-2280],[l[0],-30,l[2]],l];else if(n.wall==="left"||n.wall==="right"){const d=n.wall==="left"?-2400:2400;h=[o,[d,o[1],o[2]],[d,r.bottom+r.height/2,o[2]],[d,r.bottom+r.height/2,r.z],l]}else h=[o,[r.x,r.bottom+r.height/2,r.z],l];return c&&(h=h.map((d,f)=>f===0?[d[0]+c,d[1],d[2]]:n.wall==="back"?[d[0]+c,d[1],d[2]]:[d[0],d[1],d[2]+c])),{...t,name:`${n.name} · ${ns[t.type].name}${t.source==="cpl50"?"（PoE来源待确认）":""}`,segments:[{zone:"示意暗线",hidden:!0,points:h}]}})}let zo=0,jt,Ih=()=>{};const f_=Yc(document);iu(()=>{f_(),Ih()});const nt=i=>document.querySelector(i),Jr=nt("#viewport"),Uh="iq-dubai-booth-v4";let Je=$s(si(St)),Hn="back-a",Ai=[],Ys=[],Fr=null,ps=null,Oc;try{const i=localStorage.getItem(Uh);i&&(Je=r_(JSON.parse(i)))}catch{}const Xt=new Ld;Xt.background=new qe("#eaf0f3");const ln=new on(40,1,.05,100);let $t;try{$t=new Lg({antialias:!0,preserveDrawingBuffer:!1})}catch(i){throw nt("#webgl-error").hidden=!1,i}$t.shadowMap.enabled=!1;$t.shadowMap.type=jc;$t.outputColorSpace=Vt;$t.setClearColor("#eaf0f3");Jr.prepend($t.domElement);$t.domElement.setAttribute("aria-label",ze("可旋转和调整物件的展位三维视图"));const It=new Ug(ln,$t.domElement);It.enableDamping=!0;It.minDistance=2;It.maxDistance=24;It.maxPolarAngle=Math.PI/2-.015;const At=new qg(ln,$t.domElement);At.setSize(.7);At.setTranslationSnap(.05);Xt.add(At.getHelper());Xt.add(new Gd(16777215,9083810,2.8));const xs=new Eh(16777215,3);xs.position.set(1,9,6);xs.castShadow=!1;xs.shadow.mapSize.set(2048,2048);Object.assign(xs.shadow.camera,{left:-6,right:6,top:6,bottom:-6});xs.shadow.normalBias=.025;Xt.add(xs);const Nh=new Eh(14215679,1.5);Nh.position.set(-6,4,-2);Xt.add(Nh);const xn=new Gt,_n=new Map,oi=[];Xt.add(xn);function Gr(i,e={}){return new zd({color:i,roughness:.8,...e})}function Xe(i,e,t,n,s,r=0,a=0,o=0,l={}){const c=new ce(new xt(i,e,t),Gr(n,l));return c.position.set(r,a,o),c.castShadow=!0,c.receiveShadow=!0,s.add(c),c}function Os(i,e,t){const n=new fn(new Et().setFromPoints(i.map(s=>new P(...s))),new ai({color:e}));return t.add(n),n}function Bn(i,e,t,n=.22,s="#486776",r=null){const a=document.createElement("canvas");a.width=1024,a.height=128;const o=a.getContext("2d"),l=new vh(a);l.colorSpace=Vt;const c=new Ud(new gh({map:l,depthTest:!0}));function h(){o.clearRect(0,0,a.width,a.height),r&&(o.fillStyle=r,o.fillRect(0,0,a.width,a.height)),o.font='500 54px "Segoe UI", "Microsoft YaHei", sans-serif',o.textAlign="center",o.textBaseline="middle",o.direction=document.documentElement.dir,o.fillStyle=s,o.fillText(typeof i=="function"?i():ze(i),512,66,1008),l.needsUpdate=!0}return c.userData.refreshLabel=h,h(),c.position.set(...t),c.scale.set(n*8,n,1),e.add(c),c}function Fn(i,e,t,n,s,r,a,o="#ecffff",l="#173c50"){const c=document.createElement("canvas");c.width=1024,c.height=512;const h=c.getContext("2d"),d=new vh(c);d.colorSpace=Vt;const f=new ce(new Li(t,n),new ti({map:d}));function p(){h.fillStyle=l,h.fillRect(0,0,1024,512),h.strokeStyle="#5f899b",h.lineWidth=2,h.strokeRect(25,25,974,462),h.fillStyle=o,h.textAlign="center",h.direction=document.documentElement.dir,h.font='500 108px "Segoe UI", sans-serif',h.fillText(ze(i),512,265,960),h.font='22px "Segoe UI", sans-serif',h.fillStyle="#85adb9",h.fillText("IQ  /  "+ze("展品示意"),512,333,960),d.needsUpdate=!0}return f.userData.refreshLabel=p,p(),f.position.set(s,r,a),e.add(f),f}const p_=Xe(5,.08,5,"#9caeb8",xn,0,-.06,0),m_=Xe(4.6,.02,4.8,"#c6d0d3",xn,0,-.01,.1),al=new qd(5,10,9545648,11649223);al.position.y=.006;xn.add(al);for(const[i,e,t]of[["back","z",-1],["left","x",-1],["right","x",1]]){const n=new Gt;xn.add(n),oi.push({mesh:n,wall:i,axis:e,sign:t})}function Fh(){for(const i of oi){ia(i.mesh),i.mesh.clear();const e=i.wall==="back",t=e?-2500:-2300,n=2500,s=Je.filter(o=>o.kind==="hatch"&&o.wall===i.wall).map(o=>({a:(e?o.x:o.z)-o.width/2,b:(e?o.x:o.z)+o.width/2,lo:o.bottom,hi:o.bottom+o.height})),r=[...new Set([t,n,...s.flatMap(o=>[Math.max(t,o.a),Math.min(n,o.b)])])].sort((o,l)=>o-l),a=[...new Set([0,4e3,...s.flatMap(o=>[o.lo,o.hi])])].sort((o,l)=>o-l);for(let o=0;o<r.length-1;o++)for(let l=0;l<a.length-1;l++){const c=r[o],h=r[o+1],d=a[l],f=a[l+1];s.some(p=>(c+h)/2>p.a&&(c+h)/2<p.b&&(d+f)/2>p.lo&&(d+f)/2<p.hi)||Xe(e?(h-c)/1e3:.2,(f-d)/1e3,e?.2:(h-c)/1e3,"#fafcfb",i.mesh,e?(c+h)/2e3:i.sign*2.4,(d+f)/2e3,e?-2.4:(c+h)/2e3)}}}const g_=Xe(4.59,.58,.012,"#214f63",xn,0,3.36,-2.292);oi[0].decor=[g_];const __=Fn("IQ  |  Q-NEX",xn,3,.49,0,3.36,-2.282,"#ffffff","#214f63");oi[0].decor.push(__);const v_=Xe(.012,.58,4.78,"#214f63",xn,-2.292,3.36,.1);oi[1].decor=[v_];const x_=Xe(.012,.58,4.78,"#82394c",xn,2.292,3.36,.1);oi[2].decor=[x_];const M_=Fn("SMART CLASSROOM",xn,2.4,.27,0,2.68,-2.285,"#536773","#fafcfb");oi[0].decor.push(M_);const Ii=new Gt;xn.add(Ii);Xe(5,.55,.12,"#ffffff",Ii,0,3.725,2.44);Xe(.12,3.45,.12,"#ffffff",Ii,-2.4,1.725,2.44);Xe(.12,3.45,.12,"#ffffff",Ii,2.4,1.725,2.44);Fn("IQ  |  Q-NEX",Ii,2.7,.45,0,3.72,2.506,"#295365","#ffffff");Ii.visible=!0;const ls=new Gt;Xt.add(ls);function ol(i,e,t,n){Os([i,e],"#829ea9",ls);for(const s of[i,e])Os([[s[0]-.06,s[1],s[2]-.06],[s[0]+.06,s[1],s[2]+.06]],"#829ea9",ls);Bn(t,ls,n,.16)}ol([-2.5,.02,2.85],[2.5,.02,2.85],"5,000 mm",[0,.02,3.08]);ol([-2.85,.02,-2.5],[-2.85,.02,2.5],"5,000 mm",[-3.12,.02,0]);ol([-2.65,0,-2.5],[-2.65,4,-2.5],"4,000 mm",[-2.85,4.15,-2.5]);Bn("ENTRANCE  /  入口",ls,[0,.04,2.55],.12,"#6a8a97");const Oh=new jd(new _s,497292);Xt.add(Oh);const Mi=new Gt;Xt.add(Mi);function ia(i){i.traverse(e=>{if(e.geometry?.dispose(),e.material)for(const t of[].concat(e.material))t.map?.dispose(),t.dispose()})}function S_(i){const e=new Gt,t=i.width/1e3,n=i.height/1e3,s=i.depth/1e3;if(e.userData.id=i.id,i.kind==="hatch"){for(const o of[-t/2,t/2])Xe(.018,n,.025,"#466773",e,o,0,0);for(const o of[-n/2,n/2])Xe(t+.018,.018,.025,"#466773",e,0,o,0);const a=new ce(new Li(t,n),new ti({visible:!1,side:tn}));e.add(a),Bn(()=>ze("检修口")+" / "+i.height+" mm",e,[0,n/2+.075,.03],.1,"#366f77")}else if(i.kind==="ldp"){Xe(t,.04,s,"#252e35",e,0,-n/2+.02,0);const a=new Gt;a.rotation.x=-.17,a.position.y=-n/2+.055,e.add(a),Xe(t*.97,.025,s*.94,"#26333b",a);const o=Fn("LDP100",a,t*.91,s*.66,0,.014,s*.08);o.rotation.x=-Math.PI/2;const l=Fn("控制",a,t*.91,s*.18,0,.015,-s*.36);l.rotation.x=-Math.PI/2}else if(i.kind==="network")Xe(t,n,s,"#344d58",e),Bn(i.name.split(" · ").at(-1),e,[0,n/2+.1,0],.09,"#294a59");else if(i.kind==="socket"){Xe(t,n,s,"#f7f7f7",e),Xe(t*.2,n*.2,.005,"#555555",e,-t*.2,0,s/2+.003),Xe(t*.2,n*.2,.005,"#555555",e,t*.2,0,s/2+.003);const a=new ce(new Kr(.035,.05,24),new ti({color:"#ff8a00",side:tn,depthTest:!1}));a.position.z=s/2+.01,a.renderOrder=32,e.add(a);const o=Bn("英规插座",e,[0,.09,.02],.09,"#ff8a00");o.material.depthTest=!1,o.renderOrder=33}else if(i.kind==="hole"){const a=new ce(new Kr(.025,.04,24),new ti({color:"#b33fa5",side:tn,depthTest:!1}));e.add(a)}else if(i.kind==="laptop"){Xe(t,.025,s,"#7c98a5",e,0,-n/2+.012,0);const a=new Gt;a.position.set(0,-n/2+.025,-s*.4),a.rotation.x=-.18,e.add(a),Xe(t,n*.85,.018,"#284552",a,0,n*.425,0),Fn("笔记本",a,t-.025,n*.75,0,n*.425,.011)}else if(i.kind==="strip"){Xe(t,n,s,"#f9fbfc",e);for(let a=0;a<4;a++)Xe(.035,.006,.035,"#3c6573",e,-t*.35+a*t*.23,n/2+.003,0);Bn("排插",e,[0,.1,0],.1,"#ad6b1b")}else if(i.kind==="screen")Xe(t,n,s,"#273b48",e),Fn(i.label,e,t-.05,n-.05,0,0,s/2+.002),Xe(.035,.007,.005,"#50d3bd",e,t/2-.07,-n/2+.012,s/2+.004);else if(i.kind==="cabinet"){Xe(t,n,s,"#f3f5f1",e),Xe(t+.015,.035,s+.015,"#ffffff",e,0,n/2-.017,0);for(let a=1;a<4;a++)Xe(.008,n-.09,.008,"#aab9bd",e,-t/2+t*a/4,-.02,s/2+.002);for(const a of[-n/2+.15,-n/2+.6])Xe(1.5,.012,.01,"#a65b6d",e,0,a,-s/2-.007);for(const a of[-.75,.75])Xe(.012,.45,.01,"#a65b6d",e,a,-n/2+.375,-s/2-.007);Xe(t,.16,.012,i.id.startsWith("right")?"#82394c":"#dbe3e2",e,0,-n/2+.08,s/2+.008);for(let a=0;a<4;a++)Xe(.055,.012,.02,"#7b8e96",e,-t/2+t*(a+.5)/4,n/2-.14,s/2+.01)}else if(i.kind==="shelf")Xe(t,n,s,"#c9b493",e);else if(i.kind==="device"){Xe(t,n,s,"#283c48",e);const a=new ce(new wt(.027,.027,.008,24),Gr("#6ca8b1"));a.rotation.x=Math.PI/2,a.position.z=s/2+.004,e.add(a)}else{Xe(t*.76,n*.68,s*.66,"#252b2e",e,0,-n*.09,0),Xe(t*.82,n*.7,.035,"#e4e8e7",e,0,-n*.08,s*.34),Xe(t*.68,n*.55,.018,"#24323a",e,0,-n*.1,s*.365),Fn("SL100",e,t*.48,n*.3,0,-n*.1,s*.378,"#edf8fb","#205471"),Xe(t,.075,s,"#292f32",e,0,-n/2+.038,0);for(const h of[-t*.35,t*.35])for(const d of[-s*.34,s*.34]){const f=new ce(new wt(.035,.035,.035,16),Gr("#171a1c"));f.rotation.z=Math.PI/2,f.position.set(h,-n/2+.025,d),e.add(f)}const a=new Gt;a.position.set(0,n*.37,0),a.rotation.x=-.18,e.add(a),Xe(t,.075,s,"#22292d",a);const o=Fn("SL100",a,t*.78,s*.66,0,.039,.02,"#e7f4f8","#163e56");o.rotation.x=-Math.PI/2,Xe(t*.31,.01,s*.13,"#34464d",a,0,.042,-s*.38);const l=new Gt;l.position.set(-t*.36,n*.43,-s*.3),e.add(l);const c=new ce(new wt(.005,.008,.2,12),Gr("#252d31"));c.position.y=.1,c.rotation.z=.16,l.add(c),Xe(.027,.04,.027,"#20272b",l,-.016,.2,0)}const r=new Jo(new Bd(new xt(t,n,s)),new ai({color:7179672,transparent:!0,opacity:.35}));return e.add(r),(i.wall==="left"||i.id==="left-cabinet")&&(e.rotation.y=Math.PI/2),(i.wall==="right"||i.id==="right-cabinet"||i.kind==="ldp")&&(e.rotation.y=-Math.PI/2),e.position.set(i.x/1e3,(i.bottom+i.height/2)/1e3,i.z/1e3),Xt.add(e),_n.set(i.id,e),e}function Ms(){$s(Je),Fh(),At.detach();for(const i of _n.values())Xt.remove(i),ia(i);_n.clear(),Je.forEach(S_);for(const i of Je.filter(e=>["socket","strip"].includes(e.kind)))_n.get(i.id).visible=nt("#power-points").checked;Ks(Hn),Ut()}function Ss(){return Je.find(i=>i.id===Hn)}function Bh(){const i=Ss(),e=_n.get(Hn);if(!e)return;const[t,n,s]=Ws(i).map(r=>r/1e3);if(Oh.box.setFromCenterAndSize(e.position,new P(t+.018,n+.018,s+.018)),ia(Mi),Mi.clear(),i.bottom>0){const r=e.position.x+(t/2+.13),a=e.position.z+s/2+.04;Os([[r,0,a],[r,i.bottom/1e3,a]],"#008c82",Mi),Os([[r-.06,0,a],[r+.06,0,a]],"#008c82",Mi),Os([[r-.06,i.bottom/1e3,a],[r+.06,i.bottom/1e3,a]],"#008c82",Mi),Bn(`${Math.round(i.bottom)} mm`,Mi,[r+.2,i.bottom/2e3,a],.12,"#087d7a")}}function Ks(i,{reveal:e=!1}={}){if(!Je.some(n=>n.id===i))return;gs=!1,Hn=i;const t=Ss();At.setMode("translate"),At.attach(_n.get(i)),At.showX=(t.wall==="floor"||t.wall==="back")&&os(t,"x"),At.showY=t.wall!=="floor"&&os(t,"bottom"),At.showZ=(t.wall==="floor"||t.wall==="left"||t.wall==="right")&&os(t,"z"),y_(),ll(),Bh(),zh(),hl(),e&&(jt.openProperties(),jt.reveal(i))}function y_(){jt?.renderList()}function ll(){jt?.renderInspector()}function zh(){jt?.renderChecks()}function Js(i){nt("#toast").textContent=ze(i),nt("#toast").classList.add("visible"),clearTimeout(Oc),Oc=setTimeout(()=>nt("#toast").classList.remove("visible"),3e3)}let Wr="";function Qs(i=!1){try{localStorage.setItem(Uh,JSON.stringify({version:4,items:Je})),Wr=i?"已保存到此浏览器":""}catch{Wr="保存失败，请导出方案",i||Js("无法自动保存，请导出方案")}nt("#layout-save-result").textContent=ze(Wr),nt("#undo").disabled=!Ai.length,nt("#redo").disabled=!Ys.length}nt("#save-layout").onclick=()=>{document.activeElement.matches("#inspector input[data-field]")&&document.activeElement.blur(),Qs(!0)};function cl(i){JSON.stringify(i)!==JSON.stringify(Je)&&(Ai.push(i),Ai.length>60&&Ai.shift(),Ys=[]),Qs()}function kh(i,e){const t=Ss();if(!os(t,i))return;const n=si(Je);if(!Number.isFinite(e)){ll();return}const s={width:[30,4600],height:[20,4e3],depth:[20,2e3],bottom:[0,4e3],x:[-1e4,1e4],z:[-1e4,1e4]},[r,a]=s[i];if(t[i]=Math.round(Math.max(r,Math.min(a,e))),t.kind==="hatch"&&i==="height"&&(t.height=Math.min(t.height,4e3-t.bottom)),il(t),["laptop","ldp"].includes(t.kind)){const o=Je.find(l=>l.id===t.parentId);t.offsetX=t.x-o.x,t.offsetZ=t.z-o.z}t[i]!==e&&Js("已按展位边界或尺寸范围调整数值"),Ms(),cl(n)}nt("#inspector").addEventListener("change",i=>{i.target.dataset.field&&kh(i.target.dataset.field,i.target.value===""?NaN:Number(i.target.value))});nt("#inspector").addEventListener("click",i=>{const e=i.target.closest("[data-nudge]");e&&kh("bottom",Ss().bottom+Number(e.dataset.nudge))});At.addEventListener("dragging-changed",i=>{It.enabled=!i.value,i.value?Fr=si(Je):Fr&&(cl(Fr),Fr=null,gs&&(gs=!1),Ms())});At.addEventListener("objectChange",()=>{const i=Ss(),e=_n.get(i.id);if(gs)i.height=Math.round(Math.max(20,Math.min(4e3-i.bottom,js.position.y*1e3-i.bottom))),js.position.y=(i.bottom+i.height)/1e3,e.scale.y=i.height/qh,e.position.y=(i.bottom+i.height/2)/1e3;else if((!i.parentId||["laptop","ldp"].includes(i.kind))&&(i.x=e.position.x*1e3,i.z=e.position.z*1e3,i.bottom=e.position.y*1e3-i.height/2,il(i),["laptop","ldp"].includes(i.kind))){const t=Je.find(n=>n.id===i.parentId);i.offsetX=i.x-t.x,i.offsetZ=i.z-t.z}$s(Je);for(const t of Je)_n.get(t.id).position.set(t.x/1e3,(t.bottom+t.height/2)/1e3,t.z/1e3);i.kind==="hatch"&&Fh(),Bh(),ll(),zh(),hl()});const wn=$t.domElement,Bc=new bh,zc=new Pe;let Jn=null,Si=null,qs=null,ms=null;function ri(){Jn=null,Si=null,qs=null,ms=null}function E_(i){const e=wn.getBoundingClientRect();zc.set((i.clientX-e.left)/e.width*2-1,1-(i.clientY-e.top)/e.height*2),Bc.setFromCamera(zc,ln);const t=Bc.intersectObjects([..._n.values()].filter(r=>r.visible),!0),n=new Set;for(const{object:r}of t){if(!r.isMesh)continue;let a=r;for(;a.visible&&!a.userData.id&&a.parent;)a=a.parent;a.visible&&a.userData.id&&n.add(a.userData.id)}const s=n.values().next().value;if(jt.scope!=="off"&&Je.find(r=>r.id===s)?.kind==="cabinet"){for(const r of n)if(Je.find(a=>a.id===r)?.parentId===s)return r}return s}wn.addEventListener("pointerdown",i=>{if(qs=null,ms=null,!i.isPrimary||i.button!==0||At.axis||At.dragging){ri();return}Jn={id:i.pointerId,x:i.clientX,y:i.clientY,tolerance:i.pointerType==="touch"?10:4}});wn.addEventListener("pointermove",i=>{Jn?.id===i.pointerId&&Math.hypot(i.clientX-Jn.x,i.clientY-Jn.y)>Jn.tolerance&&ri()});wn.addEventListener("pointercancel",ri);wn.addEventListener("pointerup",i=>{if(Jn?.id!==i.pointerId)return;Jn=null;const e=E_(i);if(!e){ri();return}const t=i.pointerType==="touch";if(Si?.id===e&&Si.type===i.pointerType){if(t&&i.timeStamp-Si.time<=450&&Math.hypot(i.clientX-Si.x,i.clientY-Si.y)<=24){ri(),ms=e;return}t||(qs=e)}Si={id:e,type:i.pointerType,time:i.timeStamp,x:i.clientX,y:i.clientY}});function Hh(){if(!ms)return;const i=ms;ri(),Ks(i,{reveal:!0}),Ut()}wn.addEventListener("touchend",i=>{ms&&i.cancelable&&(i.preventDefault(),Hh())},{passive:!1});wn.addEventListener("click",Hh);wn.addEventListener("dblclick",()=>{qs&&Ks(qs,{reveal:!0}),ri(),Ut()});wn.addEventListener("wheel",ri,{passive:!0});const Vh={perspective:{direction:[7,4.3,9],name:"空间视图"},front:{direction:[0,.02,1],name:"正视"},top:{direction:[0,1,.01],name:"俯视"},left:{direction:[1,.02,0],name:"左墙"},right:{direction:[-1,.02,0],name:"右墙"}};function sa(){const i=Jr.clientWidth,e=Jr.clientHeight;if(!i||!e)return;const t=Math.min(window.devicePixelRatio||1,2.5);$t.getPixelRatio()!==t&&$t.setPixelRatio(t),$t.setSize(i,e);const n=i/e,s=ln.aspect!==n;ln.aspect=n,ln.updateProjectionMatrix(),s&&ps&&ra(ps)}function Gh(){nt("#view-label").textContent=ze(ps?Vh[ps].name:"透视 · 自由观察"),nt("#gesture-hint").textContent=ze(matchMedia("(pointer:coarse)").matches?"单指旋转 · 双指缩放":"拖动旋转 · 滚轮缩放 · 右键平移")}function Wh(i){ps=i;for(const e of document.querySelectorAll("[data-view]"))e.setAttribute("aria-pressed",String(e.dataset.view===i));Gh()}function ra(i){It.enableDamping=!1,It.update();const e=new P(0,xi.height/1e3*.34,0),t=new P(...Vh[i].direction).normalize(),n=new P().crossVectors(ln.up,t).normalize(),s=new P().crossVectors(t,n),r=Math.tan(oh.degToRad(ln.fov/2))*.8,a=r*ln.aspect;let o=It.minDistance;for(const l of[-xi.width/2e3,xi.width/2e3])for(const c of[0,xi.height/1e3])for(const h of[-xi.depth/2e3,xi.depth/2e3]){const d=new P(l,c,h).sub(e),f=d.dot(t);o=Math.max(o,f+Math.abs(d.dot(n))/a,f+Math.abs(d.dot(s))/r)}It.maxDistance=Math.max(24,o*2),It.target.copy(e),ln.position.copy(e).addScaledVector(t,o),It.update(),It.enableDamping=!0,Wh(i),Ut()}const ko=nt("#more"),er=nt("#more-settings");function aa(i,e=!1){er.hidden=!i,ko.setAttribute("aria-expanded",String(i)),e&&ko.focus()}ko.onclick=()=>aa(er.hidden);document.addEventListener("pointerdown",i=>{!er.hidden&&!i.target.closest(".more-wrap")&&aa(!1)});document.addEventListener("focusin",i=>{!er.hidden&&!i.target.closest(".more-wrap")&&aa(!1)});document.addEventListener("keydown",i=>{i.key==="Escape"&&!er.hidden&&(i.preventDefault(),aa(!1,!0))});nt(".view-options").addEventListener("click",i=>{const e=i.target.closest("[data-view],#home");e&&ra(e.dataset.view||"perspective")});nt("#grid").onchange=i=>{al.visible=i.target.checked,ls.visible=i.target.checked};nt("#fascia").onchange=i=>Ii.visible=i.target.checked;nt("#snap").onchange=i=>At.setTranslationSnap(i.target.checked?.05:null);function Xh(){Ai.length&&(Ys.push(si(Je)),Je=Ai.pop(),Ms(),Qs())}function Yh(){Ys.length&&(Ai.push(si(Je)),Je=Ys.pop(),Ms(),Qs())}nt("#undo").onclick=Xh;nt("#redo").onclick=Yh;document.addEventListener("keydown",i=>{["INPUT","TEXTAREA"].includes(document.activeElement.tagName)||((i.ctrlKey||i.metaKey)&&i.key.toLowerCase()==="z"&&(i.preventDefault(),i.shiftKey?Yh():Xh()),i.key==="Escape"&&!i.defaultPrevented&&ra("perspective"))});nt("#reset").onclick=()=>{const i=si(Je);Je=$s(si(St)),Ms(),cl(i),Js("已恢复图纸布局，可用撤销返回。")};nt("#export").onclick=()=>{const i={version:4,project:"Dubai booth POC",unit:"mm",connections:rl,booth:xi,exportedAt:new Date().toISOString(),items:Je},e=URL.createObjectURL(new Blob([JSON.stringify(i,null,2)],{type:"application/json"})),t=document.createElement("a");t.href=e,t.download="dubai-booth-layout.json",t.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3),Js("已导出方案，包含全部位置和尺寸。")};let gs=!1,qh=250;const js=new _t;Xt.add(js);nt("#inspector").addEventListener("click",i=>{if(i.target.id!=="resize-hatch")return;if(gs){Ks(Hn);return}jt.closeMobilePanel();const e=Ss();gs=!0,qh=e.height,js.position.set(e.x/1e3,(e.bottom+e.height)/1e3,e.z/1e3),At.attach(js),At.showX=!1,At.showZ=!1,At.showY=!0,Js("拖动绿色手柄调整高度；下沿固定")});const Un=new Gt;Xt.add(Un);function kc(i,e){return sl(i,Je,e)}function hl(){ia(Un),Un.clear();const i=jt.scope!=="off";if(Un.visible=i,Un.userData.connectionIds=[],!i)return;const e=new Map(Je.map(r=>[r.id,r.name])),t=d_(Je),n=t.some(r=>kc(r,Hn)),s=o_(t,Je,Hn,jt.scope,jt.types);Un.userData.connectionIds=s.map(r=>r.id);for(const r of s){const a=kc(r,Hn),o=!n||a?1:.32;for(const l of r.segments){const c=new Et().setFromPoints(l.points.map(f=>new P(...f.map(p=>p/1e3)))),h=l.hidden?new Vd({color:ns[r.type].color,dashSize:.055,gapSize:.025,depthTest:!1,transparent:!0,opacity:o}):new ai({color:ns[r.type].color,depthTest:!1,transparent:!0,opacity:o}),d=new fn(c,h);d.computeLineDistances(),d.renderOrder=30,Un.add(d)}if(a){const l=r.segments[0].points.at(-1).map(h=>h/1e3),c=Bn(()=>[Nn(e.get(r.source)),ze(ns[r.type].name),...r.source==="cpl50"?[ze("PoE来源待确认")]:[],ze("墙内")].join(" · "),Un,[l[0]+.1,l[1]+.12,l[2]],.1,ns[r.type].color);c.material.depthTest=!1,c.renderOrder=31}}if(jt?.scope==="all")for(const[r,a]of[["地板下 · HDMI × 2 + USB × 2",[0,.06,-.85]],["柜内排插 / 台面笔记本",[-1.8,.65,.5]],["柜内排插 / LDP100",[1.8,.65,.5]]]){const o=Bn(r,Un,a,.105,"#586f88");o.material.depthTest=!1,o.renderOrder=31}}nt("#power-points").onchange=()=>{for(const i of Je.filter(e=>["socket","strip"].includes(e.kind))){const e=_n.get(i.id);e&&(e.visible=nt("#power-points").checked)}Ut()};jt=u_({getItems:()=>Je,getSelected:()=>Hn,select:Ks,connections:rl,cableTypes:ns,getWarnings:()=>s_(Je),onDisplayChange:()=>{hl(),Ut()}});new ResizeObserver(()=>{sa(),Ut()}).observe(Jr);window.addEventListener("resize",()=>{sa(),Ut()});let Ya;function jh(){Ya?.removeEventListener("change",Hc),Ya=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),Ya.addEventListener("change",Hc)}function Hc(){jh(),sa(),Ut()}jh();Ih=()=>{wn.setAttribute("aria-label",ze("可旋转和调整物件的展位三维视图")),nt("#layout-save-result").textContent=ze(Wr),nt("#toast").classList.remove("visible"),jt.refreshLanguage(),Gh(),Xt.traverse(i=>i.userData.refreshLabel?.()),Ut()};Ms();sa();ra("perspective");Qs();function Ut(){!zo&&!document.hidden&&(zo=requestAnimationFrame(b_))}function b_(){zo=0,It.update();const i=jt.scope!=="off";for(const e of oi){const t=i||nt("#walls").checked&&(It.getPolarAngle()<Math.PI/12||ln.position[e.axis]*e.sign>2.5);e.mesh.traverse(n=>{n.material&&(n.material.transparent=t,n.material.opacity=t?i?.19:.12:1,n.material.depthWrite=!t,n.castShadow=!t)});for(const n of e.decor)n.visible=!t}for(const e of[p_,m_])e.material.transparent=i,e.material.opacity=i?.22:1,e.material.depthWrite=!i;for(const e of Je.filter(t=>t.kind==="cabinet"))_n.get(e.id)?.traverse(t=>{t.material&&(t.material.transparent=i,t.material.opacity=i?.19:1,t.material.depthWrite=!i)});$t.render(Xt,ln)}let ul=!1;It.addEventListener("start",()=>{ul=!0});It.addEventListener("end",()=>{ul=!1});It.addEventListener("change",()=>{ul&&ps&&Wh(null),Ut()});At.addEventListener("change",Ut);document.addEventListener("change",Ut);document.addEventListener("click",Ut);document.addEventListener("keydown",Ut);document.addEventListener("visibilitychange",Ut);Ut();
