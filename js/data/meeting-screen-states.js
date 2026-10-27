/** Meeting display states: local AV and cloud control, no Media Server playback. */
(function (app) {
    const states = {
        fr: {
            standby: {"title": "Salle de réunion en veille", "desc": "Commande cloud, état en ligne et annonces textuelles disponibles.", "badge": "EN VEILLE", "color": "#1e293b"},
            live_broadcast: {"title": "Salle de réunion en veille", "desc": "Aucune vidéo en direct, sonnerie ni musique de fond du Media Server.", "badge": "EN VEILLE", "color": "#1e293b"},
            bell_music: {"title": "Salle de réunion en veille", "desc": "Aucune vidéo en direct, sonnerie ni musique de fond du Media Server.", "badge": "EN VEILLE", "color": "#1e293b"},
            local_teaching: {"title": "Présentation locale en réunion", "desc": "Commande locale et sélection des sources ; vidéo HDMI et sortie ligne vers une enceinte active.", "badge": "AV LOCAL", "color": "#1d4ed8"},
            cloud_control: {"title": "Commande cloud de la salle", "desc": "Commande cloud, état en ligne et annonces textuelles disponibles.", "badge": "COMMANDE À DISTANCE", "color": "#0369a1"},
            emergency_alert: {"title": "Annonce textuelle en réunion", "desc": "Commande cloud, état en ligne et annonces textuelles disponibles.", "badge": "ALERTE TEXTE", "color": "#1e293b"}
        },
        es: {
            standby: {"title": "Sala de reuniones en espera", "desc": "Control en la nube, estado en línea y avisos de texto disponibles.", "badge": "EN ESPERA", "color": "#1e293b"},
            live_broadcast: {"title": "Sala de reuniones en espera", "desc": "Sin vídeo en directo, timbres programados ni música de fondo de Media Server.", "badge": "EN ESPERA", "color": "#1e293b"},
            bell_music: {"title": "Sala de reuniones en espera", "desc": "Sin vídeo en directo, timbres programados ni música de fondo de Media Server.", "badge": "EN ESPERA", "color": "#1e293b"},
            local_teaching: {"title": "Presentación local de reunión", "desc": "Control local y selección de fuentes; vídeo HDMI y Line Out a un altavoz activo.", "badge": "AV LOCAL", "color": "#1d4ed8"},
            cloud_control: {"title": "Control de sala en la nube", "desc": "Control en la nube, estado en línea y avisos de texto disponibles.", "badge": "CONTROL REMOTO", "color": "#0369a1"},
            emergency_alert: {"title": "Aviso de texto en la sala", "desc": "Control en la nube, estado en línea y avisos de texto disponibles.", "badge": "AVISO DE TEXTO", "color": "#1e293b"}
        },
        ja: {
            standby: {"title": "会議室待機中", "desc": "クラウド制御、オンライン状態確認とクラウドテキスト通知に対応します。", "badge": "待機", "color": "#1e293b"},
            live_broadcast: {"title": "会議室待機中", "desc": "Media Serverのライブ配信、定時チャイム、BGMには対応しません。", "badge": "待機", "color": "#1e293b"},
            bell_music: {"title": "会議室待機中", "desc": "Media Serverのライブ配信、定時チャイム、BGMには対応しません。", "badge": "待機", "color": "#1e293b"},
            local_teaching: {"title": "ローカル会議プレゼンテーション", "desc": "ローカル制御と入力切替。HDMIで映像を出力し、Line Outにアクティブスピーカーを接続します。", "badge": "ローカルAV", "color": "#1d4ed8"},
            cloud_control: {"title": "会議室クラウド制御", "desc": "クラウド制御、オンライン状態確認とクラウドテキスト通知に対応します。", "badge": "クラウド制御", "color": "#0369a1"},
            emergency_alert: {"title": "会議室テキスト通知", "desc": "クラウド制御、オンライン状態確認とクラウドテキスト通知に対応します。", "badge": "テキスト通知", "color": "#1e293b"}
        },
        ko: {
            standby: {"title": "회의실 대기", "desc": "클라우드 제어, 온라인 상태 및 클라우드 문자 알림을 지원합니다.", "badge": "대기", "color": "#1e293b"},
            live_broadcast: {"title": "회의실 대기", "desc": "Media Server 실시간 영상, 예약 종소리 및 배경 음악은 지원하지 않습니다.", "badge": "대기", "color": "#1e293b"},
            bell_music: {"title": "회의실 대기", "desc": "Media Server 실시간 영상, 예약 종소리 및 배경 음악은 지원하지 않습니다.", "badge": "대기", "color": "#1e293b"},
            local_teaching: {"title": "로컬 회의 발표", "desc": "로컬 회의 제어와 입력 전환, HDMI 영상 출력 및 Line Out 액티브 스피커 연결.", "badge": "로컬 AV", "color": "#1d4ed8"},
            cloud_control: {"title": "회의실 클라우드 제어", "desc": "클라우드 제어, 온라인 상태 및 클라우드 문자 알림을 지원합니다.", "badge": "클라우드 제어", "color": "#0369a1"},
            emergency_alert: {"title": "회의실 문자 알림", "desc": "클라우드 제어, 온라인 상태 및 클라우드 문자 알림을 지원합니다.", "badge": "문자 알림", "color": "#1e293b"}
        },
        mn: {
            standby: {"title": "Хурлын өрөө хүлээлтэд", "desc": "Үүлэн удирдлага, онлайн төлөв, үүлэн бичвэрийн мэдэгдэл дэмжинэ.", "badge": "ХҮЛЭЭЛТ", "color": "#1e293b"},
            live_broadcast: {"title": "Хурлын өрөө хүлээлтэд", "desc": "Media Server-ийн шууд дүрс, хуваарьт хонх, дэвсгэр хөгжим дэмжихгүй.", "badge": "ХҮЛЭЭЛТ", "color": "#1e293b"},
            bell_music: {"title": "Хурлын өрөө хүлээлтэд", "desc": "Media Server-ийн шууд дүрс, хуваарьт хонх, дэвсгэр хөгжим дэмжихгүй.", "badge": "ХҮЛЭЭЛТ", "color": "#1e293b"},
            local_teaching: {"title": "Дотоод хурлын танилцуулга", "desc": "Хурлын дотоод удирдлага, эх үүсвэр сонголт; HDMI дүрс, идэвхтэй чанга яригчийн Line Out.", "badge": "ЛОКАЛ AV", "color": "#1d4ed8"},
            cloud_control: {"title": "Хурлын өрөөний үүлэн удирдлага", "desc": "Үүлэн удирдлага, онлайн төлөв, үүлэн бичвэрийн мэдэгдэл дэмжинэ.", "badge": "ҮҮЛЭН УДИРДЛАГА", "color": "#0369a1"},
            emergency_alert: {"title": "Хурлын өрөөний бичвэр мэдэгдэл", "desc": "Үүлэн удирдлага, онлайн төлөв, үүлэн бичвэрийн мэдэгдэл дэмжинэ.", "badge": "ТЕКСТ МЭДЭГДЭЛ", "color": "#1e293b"}
        },
        ar: {
            standby: {"title": "غرفة الاجتماعات في الانتظار", "desc": "يدعم التحكم السحابي وحالة الاتصال والتنبيهات النصية السحابية.", "badge": "استعداد", "color": "#1e293b"},
            live_broadcast: {"title": "غرفة الاجتماعات في الانتظار", "desc": "لا يدعم الفيديو المباشر أو الأجراس المجدولة أو موسيقى الخلفية من Media Server.", "badge": "استعداد", "color": "#1e293b"},
            bell_music: {"title": "غرفة الاجتماعات في الانتظار", "desc": "لا يدعم الفيديو المباشر أو الأجراس المجدولة أو موسيقى الخلفية من Media Server.", "badge": "استعداد", "color": "#1e293b"},
            local_teaching: {"title": "عرض اجتماع محلي", "desc": "تحكم محلي وتبديل المصادر؛ فيديو HDMI ومخرج Line Out إلى مكبر صوت نشط.", "badge": "عرض محلي", "color": "#1d4ed8"},
            cloud_control: {"title": "التحكم السحابي بالغرفة", "desc": "يدعم التحكم السحابي وحالة الاتصال والتنبيهات النصية السحابية.", "badge": "تحكم سحابي", "color": "#0369a1"},
            emergency_alert: {"title": "تنبيه نصي لغرفة الاجتماعات", "desc": "يدعم التحكم السحابي وحالة الاتصال والتنبيهات النصية السحابية.", "badge": "إشعار نصي", "color": "#1e293b"}
        }
    };
    Object.entries(states).forEach(([lang, scenarios]) => {
        Object.entries(scenarios).forEach(([key, state]) => { app.data.screenStates[lang][key].disp_c = state; });
    });
})(window.QnexApp);
