// Customer-facing names are separate from model IDs and planning parameters.
(function (App) {
    const rows = {
        en: ['Dante Ceiling Microphone', 'Dante Ceiling Microphone', 'Dante Ceiling Speaker', 'Dante Interface Adapter', '4-channel Dante Audio Processor', '8-channel Dante Audio Processor', 'Show model numbers', 'View 3D', 'Reference configuration. Adjust parameters for customer-owned equipment.', 'No devices', 'channels used', 'The plan is invalid. Check room dimensions, devices and coverage radii.', 'A device is outside the room. Move it inside in 2D before opening 3D.', 'This plan version is unsupported. Open it again from the updated 2D page.'],
        zh: ['Dante 吸顶麦克风', 'Dante 吸顶麦克风', 'Dante 吸顶音箱', 'Dante 接口适配器', '4 通道 Dante 音频处理器', '8 通道 Dante 音频处理器', '显示型号', '查看 3D', '当前参考配置；客户自有设备请按实际参数调整。', '无设备', '已占用通道', '方案数据无效，请检查房间尺寸、设备与覆盖半径。', '有设备位于房间外，请先在 2D 中移回房间内再打开 3D。', '不支持此方案版本，请从更新后的 2D 页面重新打开。'],
        hu: ['Dante mennyezeti mikrofon', 'Dante mennyezeti mikrofon', 'Dante mennyezeti hangszóró', 'Dante interfészadapter', '4 csatornás Dante audioprocesszor', '8 csatornás Dante audioprocesszor', 'Modellszámok megjelenítése', '3D nézet', 'Referencia-konfiguráció. Saját eszközöknél módosítsa a paramétereket.', 'Nincs eszköz', 'foglalt csatorna', 'Érvénytelen terv. Ellenőrizze a méreteket, eszközöket és sugarakat.', 'Egy eszköz a termen kívül van. Helyezze vissza a 2D nézetben.', 'Nem támogatott tervverzió. Nyissa meg a frissített 2D oldalról.'],
        it: ['Microfono Dante a soffitto', 'Microfono Dante a soffitto', 'Altoparlante Dante a soffitto', 'Adattatore di interfaccia Dante', 'Processore audio Dante a 4 canali', 'Processore audio Dante a 8 canali', 'Mostra modelli', 'Vista 3D', 'Configurazione di riferimento. Adeguare i parametri ai dispositivi del cliente.', 'Nessun dispositivo', 'canali occupati', 'Piano non valido. Verificare dimensioni, dispositivi e raggi.', 'Un dispositivo è fuori dalla stanza. Spostarlo nel piano 2D.', 'Versione del piano non supportata. Riaprire dalla pagina 2D aggiornata.'],
        es: ['Micrófono Dante de techo', 'Micrófono Dante de techo', 'Altavoz Dante de techo', 'Adaptador de interfaz Dante', 'Procesador de audio Dante de 4 canales', 'Procesador de audio Dante de 8 canales', 'Mostrar modelos', 'Ver 3D', 'Configuración de referencia. Ajuste los parámetros para los equipos del cliente.', 'Sin dispositivos', 'canales ocupados', 'Plan no válido. Compruebe dimensiones, equipos y radios.', 'Hay un equipo fuera de la sala. Muévalo dentro en 2D.', 'Versión no compatible. Abra el plan desde la página 2D actualizada.'],
        ja: ['Dante 天井マイク', 'Dante 天井マイク', 'Dante 天井スピーカー', 'Dante インターフェースアダプター', '4チャンネル Dante 音声プロセッサー', '8チャンネル Dante 音声プロセッサー', '型番を表示', '3D を表示', '参考構成です。お客様の機器に合わせてパラメーターを調整してください。', 'デバイスなし', '使用チャンネル', '無効なプランです。寸法、機器、半径を確認してください。', '室外に機器があります。2D で室内に戻してください。', '未対応のバージョンです。更新した 2D ページから開き直してください。'],
        ko: ['Dante 천장 마이크', 'Dante 천장 마이크', 'Dante 천장 스피커', 'Dante 인터페이스 어댑터', '4채널 Dante 오디오 프로세서', '8채널 Dante 오디오 프로세서', '모델명 표시', '3D 보기', '참고 구성입니다. 고객 장비의 실제 사양에 맞게 매개변수를 조정하세요.', '장치 없음', '사용 채널', '잘못된 계획입니다. 크기, 장비, 반경을 확인하세요.', '방 밖에 장비가 있습니다. 2D에서 안으로 이동하세요.', '지원하지 않는 버전입니다. 업데이트된 2D 페이지에서 다시 여세요.'],
        ar: ['ميكروفون سقفي Dante', 'ميكروفون سقفي Dante', 'مكبر صوت سقفي Dante', 'محول واجهة Dante', 'معالج صوت Dante بأربع قنوات', 'معالج صوت Dante بثماني قنوات', 'إظهار أرقام الطراز', 'عرض ثلاثي الأبعاد', 'تكوين مرجعي. اضبط المعلمات حسب أجهزة العميل الفعلية.', 'لا توجد أجهزة', 'القنوات المستخدمة', 'المخطط غير صالح. تحقق من الأبعاد والأجهزة وأنصاف الأقطار.', 'يوجد جهاز خارج الغرفة. انقله إلى الداخل في العرض الثنائي.', 'إصدار غير مدعوم. افتح المخطط من الصفحة الثنائية المحدثة.']
    };
    const keys = ['m100', 'm40', 'dc20', 'du11', 'dp44', 'dp88', 'showModels', 'open3d', 'reference', 'noDevices', 'channels', 'invalidSnapshot', 'snapshotBounds', 'snapshotVersion'];
    const paNotes = {
        en: 'One ceiling microphone can feed both remote audio and local PA. The PA circle covers talkers; ceiling speakers serve listeners. PA area alone does not determine microphone quantity.',
        zh: '同一台吸顶麦可同时用于远端拾音和本地扩声。扩声拾音圈对应讲话者位置；学生听音由吸顶音箱覆盖。扩声拾音面积不单独决定麦克风数量。',
        hu: 'A mikrofonok nem adnak ki hangot. A helyi hangosításhoz mennyezeti hangszórók kellenek.',
        it: 'I microfoni non emettono suono. La diffusione locale richiede altoparlanti a soffitto.',
        es: 'Los micrófonos no emiten sonido. La amplificación local requiere altavoces de techo.',
        ja: 'マイク自体は音を出しません。室内拡声には天井スピーカーが必要です。',
        ko: '마이크 자체는 소리를 내지 않습니다. 실내 확성에는 천장 스피커가 필요합니다.',
        ar: 'الميكروفونات لا تصدر صوتًا. يتطلب التضخيم المحلي مكبرات صوت سقفية.'
    };
    App.presentationCopy = lang => Object.fromEntries(keys.map((key, i) => [key, (rows[lang] || rows.en)[i]]));
    App.audioName = (type, lang = 'en', showModels = false) => {
        const key = type.toLowerCase();
        return App.presentationCopy(lang)[key] + (showModels ? ` (${key.toUpperCase()})` : '');
    };
    App.presentText = (text, lang, showModels = false) => String(text)
        .replace(/AISpeech|AI Speech|思必驰/gi, 'Dante')
        .replace(/\b(M100|M40|DC20|DU11|DP44|DP88)(?:s)?\b/g, (_, model) => App.audioName(model, lang, showModels));
    App.presentCopy = (copy, lang, showModels) => Object.fromEntries(Object.entries(copy).map(([key, value]) =>
        [key, ['warnTitle', 'paNote'].includes(key) ? paNotes[lang] || paNotes.en
            : typeof value === 'string' ? App.presentText(value, lang, showModels) : value]));
})(window.AISpeech = window.AISpeech || {});
