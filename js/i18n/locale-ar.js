/** Arabic interface; direction is applied separately from topology geometry. */
window.I18N_DATA.ar = {
    media_server_option: 'خادم الوسائط (اختياري)',
    export_png: 'تصدير PNG', export_busy: 'جارٍ التصدير…', export_success: 'تم حفظ PNG',
    export_error: 'تعذر تصدير PNG. أعد المحاولة أو حدّث الصفحة.',
    app_title: "نظرة عامة على بنية النظام", app_tag: 'التدريب عبر الإنترنت v3.1',
    app_subtitle: "تدفق التحكم بالأجهزة والبث متعدد الوسائط",
    theme_light: '☀️ المظهر: فاتح', theme_dark: '🌙 المظهر: داكن', lang_btn: '🌐 العربية',
    tour_btn: '🎓 دليل البدء', sound_on: '🔊 الصوت: مفعّل', sound_off: '🔇 الصوت: مكتوم',
    pause: '⏸️ إيقاف مؤقت', play: '▶️ تشغيل',
    speed_slow: '0.5x بطيء', speed_normal: '1.0x السرعة العادية', speed_fast: '2.0x سريع',
    reset: '🔄 إعادة ضبط المخطط', fullscreen_enter: '⛶ ملء الشاشة', fullscreen_exit: '🗗 إنهاء ملء الشاشة',
    settings_btn: 'الأدوات والإعدادات', settings_btn_text: 'المزيد', settings_heading: 'الأدوات والإعدادات',
    scenarios_toggle_btn: 'السيناريو: ', scenarios_collapse_btn: 'طيّ ▴',
    setting_speed_label: 'سرعة الحركة', setting_sound_label: 'المؤثرات الصوتية', setting_theme_label: 'المظهر',
    setting_lang_label: 'لغة العرض', setting_fullscreen_label: 'وضع العرض',
    sidebar_collapse_btn: '📋 إخفاء التفاصيل', sidebar_expand_btn: '📋 عرض التفاصيل',
    sidebar_heading: '📋 التفاصيل ومعايير التوصيل', sidebar_close: 'إخفاء ❯', sidebar_tab: '❮ عرض التفاصيل',
    scenario_bar_title: 'سيناريوهات التدريب:',
    scenarios: {
        standby: {
            btn: "🌐 نظرة على الشبكة", badge: 'استعداد', title: "حالة الأجهزة وبنية الشبكة",
            desc: "اعرض الاتصالات وحالة أجهزة Q-NEX على الإنترنت. تظهر أوامر الإدارة وتوزيع الوسائط عبر الشبكة المحلية بشكل منفصل."
        },
        live_broadcast: {
            btn: "📡 فيديو مباشر", badge: 'بث مباشر', title: "بث الفيديو المباشر في الحرم",
            desc: "يرسل Web Console أو التطبيق أمر البث عبر السحابة إلى Media Server داخل الحرم. يوزع الخادم الوسائط عبر الشبكة المحلية إلى NDP600 وNMP311 وNDP200 وMBX100 لإخراج الصورة والصوت."
        },
        bell_music: {
            btn: "🎵 الأجراس والموسيقى", badge: 'صوت مجدول', title: "أجراس الحرم والموسيقى",
            desc: "أعدّ مهمة البث في Web Console أو التطبيق. يصل الأمر عبر السحابة إلى Media Server ليوزع الأجراس والموسيقى. تتبع المهام المجدولة الجدول المضبوط مسبقاً."
        },
        cloud_control: {
            btn: "⚡ التحكم السحابي", badge: 'تحكم سحابي', title: "التحكم بالأجهزة عبر السحابة",
            desc: "يرسل المسؤول الأوامر من Web Console أو Q-NEX App عبر السحابة والبوابة ومبدّل الشبكة إلى الأجهزة. تتوقف الإجراءات المتاحة على الجهاز وإعداد المنصة وصلاحيات الحساب."
        },
        emergency_alert: {
            btn: "📢 إشعارات نصية", badge: "إشعارات نصية", title: "إشعارات الحرم النصية",
            desc: "ترسل Web Console أو التطبيق الإشعارات اليومية عبر السحابة إلى الأجهزة والشاشات المتصلة، دون الحاجة إلى Media Server."
        },
        local_teaching: {
            btn: "💻 التدريس والاجتماعات (صوت وفيديو محلي)", badge: 'عرض محلي', title: "التدريس والاجتماعات المحلية",
            desc: "تنتقل إشارات الحاسوب وكاميرا المستندات والميكروفون إلى الشاشات ومكبرات الصوت عبر مسارات AV المحلية في NDP600 أو NMP311 أو NDP200 أو SL100، دون استهلاك نطاق بث الشبكة المحلية. تحكم محلي وتبديل المصادر؛ فيديو HDMI ومخرج Line Out إلى مكبر صوت نشط."
        }
    },
    zones: {
        cloud_plane: '☁️ الإنترنت / إدارة السحابة العامة', campus_lan: "🏫 شبكة الحرم المحلية جيجابت",
        room_a: 'القاعة A (منصة تحكم متعددة الوظائف)', room_b: 'القاعة B (معالج الوسائط NMP)',
        room_h: 'قاعة المحاضرات (منصة NDP200)', room_sl: 'القاعة C (منصة SL100 الذكية)',
        room_c: "غرفة اجتماعات ذكية (NPS150)", room_l: 'المكتبة (الصوت والإشعارات)'
    },
    inspector: {
        role_label: 'دور الجهاز في النظام', ports_label: 'المنافذ والتوصيلات', scenarios_label: 'التطبيقات والاستخدامات',
        scenario_teaching: 'التدريس والعرض', scenario_control: 'التحكم المركزي', scenario_cascading: 'التنسيق على مستوى الحرم',
        test_btn_prefix: '🚀 إرسال', test_btn_suffix: 'فحص ذاتي', ping_success: 'استجابة الجهاز طبيعية (RTT: 4.2ms)'
    },
    legend: {
        title: 'معايير ألوان التوصيل', filter_hint: 'تصفية الطبقات', lan: '🟦 LAN / إيثرنت',
        hdmi: '🔴 HDMI / فيديو', audio: '🟢 صوت / كابل مكبر الصوت',
        usb: "USB", wireless: '📶 لاسلكي / 4G / ميكروفون UHF (خط متقطع)'
    },
    tour: { step_badge: 'الخطوة', prev_btn: 'السابق', next_btn: 'التالي', finish_btn: 'إنهاء التدريب 🎉', close_btn: '✕ إغلاق' }
};
