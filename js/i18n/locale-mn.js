/** Mongolian (Cyrillic) interface and scenario descriptions. */
window.I18N_DATA.mn = {
    media_server_option: 'Медиа сервер (сонголтоор)',
    export_png: 'PNG экспортлох', export_busy: 'Экспортолж байна…', export_success: 'PNG хадгалагдлаа',
    export_error: 'PNG экспортлох боломжгүй байна. Дахин оролдох эсвэл хуудсыг шинэчилнэ үү.',
    app_title: "Системийн архитектурын тойм", app_tag: 'Онлайн сургалт v3.1',
    app_subtitle: "Төхөөрөмжийн удирдлага ба мультимедиа түгээлтийн урсгал",
    theme_light: '☀️ Загвар: цайвар', theme_dark: '🌙 Загвар: бараан', lang_btn: '🌐 Монгол',
    tour_btn: '🎓 Эхлэгчийн гарын авлага', sound_on: '🔊 Дуу: асаалттай', sound_off: '🔇 Дуу: хаалттай',
    pause: '⏸️ Түр зогсоох', play: '▶️ Тоглуулах',
    speed_slow: '0.5x Удаан', speed_normal: '1.0x Хэвийн хурд', speed_fast: '2.0x Хурдан',
    reset: '🔄 Схемийг сэргээх', fullscreen_enter: '⛶ Бүтэн дэлгэц', fullscreen_exit: '🗗 Бүтэн дэлгэцээс гарах',
    settings_btn: 'Хэрэгсэл ба тохиргоо', settings_btn_text: 'Бусад', settings_heading: 'Хэрэгсэл ба тохиргоо',
    scenarios_toggle_btn: 'Горим: ', scenarios_collapse_btn: 'Хураах ▴',
    setting_speed_label: 'Хөдөлгөөний хурд', setting_sound_label: 'Дууны эффект', setting_theme_label: 'Өнгөний загвар',
    setting_lang_label: 'Дэлгэцийн хэл', setting_fullscreen_label: 'Дэлгэцийн горим',
    sidebar_collapse_btn: '📋 Тайлбарыг нуух', sidebar_expand_btn: '📋 Тайлбарыг харуулах',
    sidebar_heading: '📋 Дэлгэрэнгүй тайлбар ба стандарт', sidebar_close: 'Нуух ❯', sidebar_tab: '❮ Тайлбар харуулах',
    scenario_bar_title: 'Сургалтын горимууд:',
    scenarios: {
        standby: {
            btn: "🌐 Топологийн тойм", badge: 'ХҮЛЭЭЛТ', title: "Төхөөрөмжийн төлөв ба топологи",
            desc: "Q-NEX төхөөрөмж ба үүлэн платформын холболт, онлайн төлөвийг харна. Удирдлагын команд ба дотоод сүлжээний медиа түгээлтийг тусад нь үзүүлнэ."
        },
        live_broadcast: {
            btn: "📡 Шууд дүрс", badge: 'ШУУД ДАМЖУУЛАЛТ', title: "Кампусын шууд дүрс түгээлт",
            desc: "Web Console эсвэл апп-ын команд үүлээр дамжин кампусын Media Server-д хүрнэ. Сервер LAN-аар NDP600, NMP311, NDP200, MBX100-д медиа түгээж, төхөөрөмж дүрс ба дуу гаргана."
        },
        bell_music: {
            btn: "🎵 Хонх ба хөгжим", badge: 'ХУВААРЬТ АУДИО', title: "Кампусын хонх ба хөгжим",
            desc: "Web Console эсвэл апп дээр түгээлтийн даалгавар тохируулна. Команд үүлээр Media Server-д хүрч, сервер хонх ба хөгжим түгээнэ. Товлосон даалгавар тохируулсан хуваарийг дагана."
        },
        cloud_control: {
            btn: "⚡ Үүлэн удирдлага", badge: 'ҮҮЛЭН УДИРДЛАГА', title: "Үүлэн төхөөрөмжийн удирдлага",
            desc: "Web Console эсвэл Q-NEX App-ын команд үүлэн систем, гарц, свичээр дамжин төхөөрөмжид хүрнэ. Боломжит үйлдэл нь төхөөрөмж, платформын тохиргоо, эрхээс хамаарна."
        },
        emergency_alert: {
            btn: "📢 Бичвэр мэдэгдэл", badge: "Бичвэр мэдэгдэл", title: "Кампусын бичвэр мэдэгдэл",
            desc: "Web Console эсвэл апп өдөр тутмын зарлалыг үүлээр дамжуулан төхөөрөмж болон дэлгэцэд илгээнэ. Media Server шаардлагагүй."
        },
        local_teaching: {
            btn: "💻 Дотоод хичээл ба хурал (AV)", badge: 'ЛОКАЛ AV', title: "Дотоод хичээл ба хурал",
            desc: "Зөөврийн компьютер, баримтын камер, микрофоны дохио NDP600, NMP311, NDP200 эсвэл SL100-ийн локал AV замаар дэлгэц болон чанга яригчид хүрнэ. Кампусын сүлжээний дамжуулалтын зурвас ашиглахгүй. Хурлын дотоод удирдлага, эх үүсвэр сонголт; HDMI дүрс, идэвхтэй чанга яригчийн Line Out."
        }
    },
    zones: {
        cloud_plane: '☁️ Интернэт / Нийтийн үүлэн удирдлага', campus_lan: "🏫 Кампусын гигабит LAN",
        room_a: 'Танхим A (олон үйлдэлт удирдлагын индэр)', room_b: 'Танхим B (NMP медиа процессор)',
        room_h: 'Лекцийн танхим (NDP200 индэр)', room_sl: 'Танхим C (SL100 ухаалаг индэр)',
        room_c: "Ухаалаг хурлын өрөө (NPS150)", room_l: 'Номын сан (аудио ба мэдэгдэл)'
    },
    inspector: {
        role_label: 'СИСТЕМ ДЭХ ҮҮРЭГ', ports_label: 'ПОРТ БА ХОЛБОЛТ', scenarios_label: 'ХЭРЭГЛЭЭНИЙ ГОРИМУУД',
        scenario_teaching: 'Хичээл ба AV', scenario_control: 'Нэгдсэн удирдлага', scenario_cascading: 'Кампусын уялдаа',
        test_btn_prefix: '🚀 Илгээх:', test_btn_suffix: 'өөрийн оношилгоо', ping_success: 'Төхөөрөмж хэвийн хариулав (RTT: 4.2ms)'
    },
    legend: {
        title: 'ХОЛБОЛТЫН ӨНГӨНИЙ СТАНДАРТ', filter_hint: 'Давхаргыг шүүх', lan: '🟦 LAN / Ethernet',
        hdmi: '🔴 HDMI / Видео', audio: '🟢 Аудио / Чанга яригчийн кабель',
        usb: "USB", wireless: '📶 Утасгүй / 4G / UHF микрофон (тасархай)'
    },
    tour: { step_badge: 'Алхам', prev_btn: '← Өмнөх', next_btn: 'Дараах →', finish_btn: 'Сургалт дуусгах 🎉', close_btn: '✕ Хаах' }
};
