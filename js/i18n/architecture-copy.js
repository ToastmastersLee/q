/** View labels, broadcast explanation and focused training in eight languages. */
(function (app) {
    const copy = {
        zh: {
            views: {"label": "架构视图", "control": "设备控制", "media": "多媒体广播"},
            broadcast: {"heading": "广播如何到达教室", "description": "先发送控制指令，再由校园内网 Media Server 分发媒体。", "schedule": "演示广播任务的设置与执行；定时任务按已配置的排期播放。", "steps": ["下发指令", "服务器分发", "终端播放"], "control": "蓝点：控制指令", "media": "橙点：内网媒体", "output": "红／绿点：显示／音频输出", "loop": "流程循环演示 · 用于讲解先后关系", "source": "指令入口", "overview": "选择场景，查看完整广播流程"},
            notice_sample: "校园通知：今日 15:00 在报告厅举行活动。",
            mediaTour: [
                {"title": "管理端与云端", "description": "<p class=\"tour-text\">Web Console 或 Q-NEX App 发起广播任务，指令经云端、校园网关与交换机到达 Media Server。</p>"},
                {"title": "Media Server 接收与分发", "description": "<p class=\"tour-text\">服务器先接收指令，再经校园交换机向支持的终端分发媒体；媒体不从云端直达屏幕。</p>"},
                {"title": "四类广播终端", "description": "<p class=\"tour-text\">NDP600、NMP311、NDP200 和 MBX100 接收内网媒体。此视图只展示参与广播的终端。</p>"},
                {"title": "屏幕与音响", "description": "<p class=\"tour-text\">媒体到达终端后，终端通过 HDMI 输出画面、通过音频连接输出声音。</p>"},
                {"title": "线缆与粒子图例", "description": "<p class=\"tour-text\">实体线缆按 LAN、HDMI、音频分类。蓝色粒子表示控制指令，橙色粒子表示网络媒体；红色与绿色粒子分别表示显示与音频输出。</p>"},
            ]
        },
        en: {
            views: {"label": "Architecture views", "control": "Device Control", "media": "Multimedia Broadcast"},
            broadcast: {"heading": "How broadcasting reaches a room", "description": "Send the command first; the campus Media Server then distributes media over the LAN.", "schedule": "Shows task setup and execution. Scheduled playback follows the configured timetable.", "steps": ["Send command", "Server distributes", "Endpoints play"], "control": "Blue: control commands", "media": "Orange: LAN media", "output": "Red / green: display / audio", "loop": "Repeating flow demonstration · Sequence illustration", "source": "Command source", "overview": "Choose a scenario to follow the broadcast flow"},
            notice_sample: "Campus notice: An event starts at 15:00 today in the auditorium.",
            mediaTour: [
                {"title": "Management & cloud", "description": "<p class=\"tour-text\">Web Console or Q-NEX App starts a broadcast task. The command travels through the cloud, campus gateway and switch to Media Server.</p>"},
                {"title": "Media Server reception & distribution", "description": "<p class=\"tour-text\">The server receives the command, then distributes media through the campus switch to supported endpoints. Screens receive output from their endpoints.</p>"},
                {"title": "Four broadcast endpoint types", "description": "<p class=\"tour-text\">NDP600, NMP311, NDP200 and MBX100 receive LAN media. This view focuses on endpoints participating in broadcasting.</p>"},
                {"title": "Displays & speakers", "description": "<p class=\"tour-text\">After media reaches an endpoint, it outputs video over HDMI and sound over its audio connection.</p>"},
                {"title": "Cable and particle keys", "description": "<p class=\"tour-text\">Physical cables are grouped as LAN, HDMI and audio. Blue particles mean control commands; orange means network media. Red and green mean display and audio output.</p>"},
            ]
        },
        fr: {
            views: {"label": "Vues de l’architecture", "control": "Commande des équipements", "media": "Diffusion multimédia"},
            broadcast: {"heading": "De la commande à la salle", "description": "La commande arrive d’abord ; Media Server distribue ensuite le contenu sur le LAN.", "schedule": "Configuration et exécution d’une tâche ; la lecture programmée suit le calendrier défini.", "steps": ["Envoyer la commande", "Distribution du serveur", "Lecture des terminaux"], "control": "Bleu : commandes", "media": "Orange : contenu sur le LAN", "output": "Rouge / vert : image / son", "loop": "Démonstration en boucle · Illustration des étapes", "source": "Origine de la commande", "overview": "Choisissez un scénario de diffusion"},
            notice_sample: "Annonce : un événement aura lieu aujourd’hui à 15 h dans l’amphithéâtre.",
            mediaTour: [
                {"title": "Gestion et cloud", "description": "<p class=\"tour-text\">Web Console ou Q-NEX App lance la tâche. La commande passe par le cloud, la passerelle et le commutateur pour atteindre Media Server.</p>"},
                {"title": "Réception et distribution", "description": "<p class=\"tour-text\">Media Server reçoit la commande, puis distribue le contenu via le commutateur du campus aux terminaux compatibles.</p>"},
                {"title": "Quatre types de terminaux", "description": "<p class=\"tour-text\">NDP600, NMP311, NDP200 et MBX100 reçoivent le contenu du LAN. Cette vue présente les terminaux de diffusion.</p>"},
                {"title": "Écrans et enceintes", "description": "<p class=\"tour-text\">Après réception, le terminal fournit l’image par HDMI et le son par sa connexion audio.</p>"},
                {"title": "Câbles et particules", "description": "<p class=\"tour-text\">Les câbles représentent LAN, HDMI et audio. Les particules bleues indiquent les commandes, les orange le contenu réseau, les rouges et vertes les sorties image et son.</p>"},
            ]
        },
        es: {
            views: {"label": "Vistas de arquitectura", "control": "Control de equipos", "media": "Distribución multimedia"},
            broadcast: {"heading": "De la orden al aula", "description": "Primero llega la orden; después Media Server distribuye contenido por la LAN.", "schedule": "Configuración y ejecución de tareas. La reproducción programada sigue el horario establecido.", "steps": ["Enviar orden", "Distribuir contenido", "Reproducir en terminales"], "control": "Azul: órdenes de control", "media": "Naranja: contenido de la LAN", "output": "Rojo / verde: imagen / audio", "loop": "Demostración en bucle · Secuencia ilustrativa", "source": "Origen de la orden", "overview": "Elija un escenario de distribución"},
            notice_sample: "Aviso: hoy a las 15:00 habrá una actividad en el auditorio.",
            mediaTour: [
                {"title": "Gestión y nube", "description": "<p class=\"tour-text\">Web Console o Q-NEX App inicia la tarea. La orden atraviesa la nube, la puerta de enlace y el conmutador hasta Media Server.</p>"},
                {"title": "Recepción y distribución", "description": "<p class=\"tour-text\">Media Server recibe la orden y distribuye contenido por el conmutador a los terminales compatibles.</p>"},
                {"title": "Cuatro tipos de terminal", "description": "<p class=\"tour-text\">NDP600, NMP311, NDP200 y MBX100 reciben contenido de la LAN. Esta vista muestra los terminales que participan en la distribución.</p>"},
                {"title": "Pantallas y altavoces", "description": "<p class=\"tour-text\">Tras recibir contenido, el terminal emite vídeo por HDMI y sonido por su conexión de audio.</p>"},
                {"title": "Cables y partículas", "description": "<p class=\"tour-text\">Los cables indican LAN, HDMI y audio. Las partículas azules son órdenes; las naranjas, contenido de red; las rojas y verdes, salidas de imagen y audio.</p>"},
            ]
        },
        ja: {
            views: {"label": "構成ビュー", "control": "機器制御", "media": "マルチメディア配信"},
            broadcast: {"heading": "教室に届くまでの流れ", "description": "先に制御指示を送り、その後Media Serverが学内LANでメディアを配信します。", "schedule": "タスク設定と実行の例です。予約再生は設定済みの時刻表に従います。", "steps": ["指示を送信", "サーバーから配信", "端末で再生"], "control": "青：制御指示", "media": "オレンジ：LANメディア", "output": "赤／緑：映像／音声出力", "loop": "繰り返しデモ・処理順序の説明", "source": "指示の送信元", "overview": "シナリオを選択して配信の流れを確認"},
            notice_sample: "学内のお知らせ：本日15:00から講堂でイベントを開催します。",
            mediaTour: [
                {"title": "管理画面とクラウド", "description": "<p class=\"tour-text\">Web ConsoleまたはQ-NEX Appでタスクを開始します。指示はクラウド、学内ゲートウェイ、スイッチ経由でMedia Serverに届きます。</p>"},
                {"title": "受信と配信", "description": "<p class=\"tour-text\">Media Serverは指示を受けた後、学内スイッチ経由で対応端末にメディアを配信します。</p>"},
                {"title": "4種類の配信端末", "description": "<p class=\"tour-text\">NDP600、NMP311、NDP200、MBX100がLANメディアを受信します。このビューには配信に参加する端末を表示します。</p>"},
                {"title": "画面とスピーカー", "description": "<p class=\"tour-text\">受信した端末はHDMIで映像を、音声接続で音を出力します。</p>"},
                {"title": "ケーブルと粒子", "description": "<p class=\"tour-text\">ケーブルはLAN、HDMI、音声を示します。青い粒子は制御指示、オレンジはネットワークメディア、赤と緑は映像と音声出力です。</p>"},
            ]
        },
        ko: {
            views: {"label": "구성 보기", "control": "장비 제어", "media": "멀티미디어 방송"},
            broadcast: {"heading": "교실까지 전달되는 과정", "description": "먼저 제어 명령을 보내고 Media Server가 교내 LAN으로 미디어를 배포합니다.", "schedule": "작업 설정과 실행 예시입니다. 예약 재생은 설정된 시간표를 따릅니다.", "steps": ["명령 전송", "서버 배포", "단말 재생"], "control": "파랑: 제어 명령", "media": "주황: LAN 미디어", "output": "빨강 / 초록: 영상 / 음성", "loop": "반복 흐름 시연 · 처리 순서 설명", "source": "명령 시작점", "overview": "방송 시나리오를 선택하세요"},
            notice_sample: "교내 공지: 오늘 15:00에 강당에서 행사가 열립니다.",
            mediaTour: [
                {"title": "관리 화면과 클라우드", "description": "<p class=\"tour-text\">Web Console 또는 Q-NEX App에서 작업을 시작합니다. 명령은 클라우드, 교내 게이트웨이와 스위치를 거쳐 Media Server에 도착합니다.</p>"},
                {"title": "서버 수신과 배포", "description": "<p class=\"tour-text\">Media Server는 명령을 받은 후 교내 스위치를 통해 지원 단말에 미디어를 배포합니다.</p>"},
                {"title": "네 가지 방송 단말", "description": "<p class=\"tour-text\">NDP600, NMP311, NDP200, MBX100이 LAN 미디어를 수신합니다. 이 보기에는 방송에 참여하는 단말을 표시합니다.</p>"},
                {"title": "화면과 스피커", "description": "<p class=\"tour-text\">미디어 수신 후 단말은 HDMI로 영상, 오디오 연결로 소리를 출력합니다.</p>"},
                {"title": "케이블과 입자", "description": "<p class=\"tour-text\">케이블은 LAN, HDMI, 오디오를 나타냅니다. 파란 입자는 제어 명령, 주황은 네트워크 미디어, 빨강과 초록은 영상과 음성 출력입니다.</p>"},
            ]
        },
        mn: {
            views: {"label": "Архитектурын харагдац", "control": "Төхөөрөмжийн удирдлага", "media": "Мультимедиа түгээлт"},
            broadcast: {"heading": "Танхимд хүрэх дараалал", "description": "Эхлээд команд илгээнэ. Дараа нь Media Server дотоод сүлжээгээр медиа түгээнэ.", "schedule": "Даалгаврын тохиргоо ба гүйцэтгэлийн жишээ. Товлосон тоглуулалт хуваарийг дагана.", "steps": ["Команд илгээх", "Сервер түгээх", "Төхөөрөмж тоглуулах"], "control": "Цэнхэр: удирдах команд", "media": "Улбар шар: LAN медиа", "output": "Улаан / ногоон: дүрс / дуу", "loop": "Давталттай үзүүлэн · Үйлдлийн дараалал", "source": "Командын эхлэл", "overview": "Түгээлтийн горим сонгоно уу"},
            notice_sample: "Зарлал: өнөөдөр 15:00 цагт хурлын танхимд арга хэмжээ болно.",
            mediaTour: [
                {"title": "Удирдлага ба үүл", "description": "<p class=\"tour-text\">Web Console эсвэл Q-NEX App даалгавар эхлүүлнэ. Команд үүл, кампусын гарц, свичээр дамжин Media Server-д хүрнэ.</p>"},
                {"title": "Хүлээн авах ба түгээх", "description": "<p class=\"tour-text\">Media Server команд хүлээн авсны дараа кампусын свичээр дэмжигдэх төхөөрөмжид медиа түгээнэ.</p>"},
                {"title": "Дөрвөн төрлийн төхөөрөмж", "description": "<p class=\"tour-text\">NDP600, NMP311, NDP200, MBX100 нь LAN медиа хүлээн авна. Энэ харагдац түгээлтэд оролцох төхөөрөмжийг үзүүлнэ.</p>"},
                {"title": "Дэлгэц ба чанга яригч", "description": "<p class=\"tour-text\">Медиа хүрсний дараа төхөөрөмж HDMI-ээр дүрс, аудио холболтоор дуу гаргана.</p>"},
                {"title": "Кабель ба бөөмийн тайлбар", "description": "<p class=\"tour-text\">Кабель нь LAN, HDMI, аудиог илэрхийлнэ. Цэнхэр бөөм нь команд, улбар шар нь сүлжээний медиа, улаан ба ногоон нь дүрс ба дууны гаралт.</p>"},
            ]
        },
        ar: {
            views: {"label": "طرق عرض البنية", "control": "التحكم بالأجهزة", "media": "بث الوسائط"},
            broadcast: {"heading": "كيف يصل البث إلى القاعة", "description": "يُرسل أمر التحكم أولاً، ثم يوزع Media Server الوسائط عبر شبكة الحرم المحلية.", "schedule": "مثال لإعداد المهمة وتنفيذها؛ يتبع التشغيل المجدول الجدول المضبوط مسبقاً.", "steps": ["إرسال الأمر", "توزيع الخادم", "تشغيل الأجهزة"], "control": "الأزرق: أوامر التحكم", "media": "البرتقالي: وسائط الشبكة", "output": "الأحمر / الأخضر: الصورة / الصوت", "loop": "عرض متكرر للتدفق · توضيح ترتيب الخطوات", "source": "مصدر الأمر", "overview": "اختر سيناريو لمتابعة مسار البث"},
            notice_sample: "إشعار: تقام فعالية اليوم الساعة 15:00 في قاعة المحاضرات.",
            mediaTour: [
                {"title": "الإدارة والسحابة", "description": "<p class=\"tour-text\">يبدأ Web Console أو Q-NEX App المهمة. يمر الأمر بالسحابة وبوابة الحرم ومبدّل الشبكة وصولاً إلى Media Server.</p>"},
                {"title": "استقبال الخادم وتوزيعه", "description": "<p class=\"tour-text\">يستقبل Media Server الأمر ثم يوزع الوسائط عبر مبدّل الحرم إلى الأجهزة المتوافقة.</p>"},
                {"title": "أربعة أنواع من الأجهزة", "description": "<p class=\"tour-text\">تستقبل NDP600 وNMP311 وNDP200 وMBX100 وسائط الشبكة المحلية. يعرض هذا المشهد الأجهزة المشاركة في البث.</p>"},
                {"title": "الشاشات والسماعات", "description": "<p class=\"tour-text\">بعد وصول الوسائط يخرج الجهاز الصورة عبر HDMI والصوت عبر وصلة الصوت.</p>"},
                {"title": "دليل الكابلات والنقاط", "description": "<p class=\"tour-text\">تمثل الكابلات الشبكة المحلية وHDMI والصوت. النقاط الزرقاء للأوامر والبرتقالية لوسائط الشبكة والحمراء والخضراء للصورة والصوت.</p>"},
            ]
        },
    };
    Object.entries(copy).forEach(([lang, fields]) => {
        Object.assign(app.data.i18n[lang], fields);
        Object.values(app.data.screenStates[lang].emergency_alert).forEach(state => {
            state.title = fields.notice_sample;
            state.desc = app.data.i18n[lang].scenarios.emergency_alert.desc;
            state.badge = app.data.i18n[lang].scenarios.emergency_alert.badge;
        });
    });
})(window.QnexApp);
