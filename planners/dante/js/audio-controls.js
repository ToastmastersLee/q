// Shared quantity editor. Draft values never mutate the applied drawing or BOM.
(function (App) {
    const words = {
        en:['Audio device quantities','Automatic recommendation','Specified quantities','Pending · click Recalculate','Restore automatic recommendation','Clear audio devices','Placement conflict: review microphone/speaker spacing.','Settings','Instructions','Device reference','BOM / quotation','More','Close','Drawing, BOM and export use the applied quantities.'],
        zh:['音频设备数量','自动推荐','指定数量','待重新计算','恢复自动推荐','清空音频设备','布置冲突：请检查麦克风与音箱间距。','设置','操作说明','设备参考','BOM／报价','更多','关闭','图形、BOM 与导出使用已应用数量。'],
        ko:['오디오 장치 수','자동 추천','지정 수량','다시 계산 필요','자동 추천 복원','오디오 장치 지우기','배치 충돌: 마이크와 스피커 간격을 확인하세요.','설정','사용 안내','장치 참고','BOM / 견적','더 보기','닫기','도면, BOM 및 내보내기는 적용된 수량을 사용합니다.'],
        ja:['音声機器の台数','自動推奨','指定台数','再計算してください','自動推奨に戻す','音声機器をクリア','配置の競合：マイクとスピーカーの間隔を確認してください。','設定','操作説明','機器の参考','BOM／見積','その他','閉じる','図、BOM、出力には適用済みの台数を使用します。'],
        es:['Cantidades de audio','Recomendación automática','Cantidades fijadas','Pendiente: recalcular','Restaurar recomendación automática','Borrar equipos de audio','Conflicto: revise la separación entre micrófonos y altavoces.','Ajustes','Instrucciones','Referencia de equipos','BOM / presupuesto','Más','Cerrar','El plano, BOM y exportación usan las cantidades aplicadas.'],
        fr:['Quantités audio','Recommandation automatique','Quantités imposées','En attente : recalculer','Rétablir la recommandation','Effacer les appareils audio','Conflit : vérifier les distances entre microphones et enceintes.','Réglages','Instructions','Références','BOM / devis','Plus','Fermer','Le plan, la nomenclature et les exports utilisent les quantités appliquées.'],
        mn:['Аудио төхөөрөмжийн тоо','Автомат санал','Тогтсон тоо','Дахин тооцоолно уу','Автомат саналыг сэргээх','Аудио төхөөрөмжийг арилгах','Байрлалын зөрчил: микрофон ба чанга яригчийн зайг шалгана уу.','Тохиргоо','Заавар','Төхөөрөмжийн лавлагаа','BOM / Үнийн санал','Бусад','Хаах','Зураг, BOM, экспорт нь хэрэгжүүлсэн тоог ашиглана.'],
        ar:['أعداد أجهزة الصوت','اقتراح تلقائي','أعداد محددة','بانتظار إعادة الحساب','استعادة الاقتراح التلقائي','مسح أجهزة الصوت','تعارض في المواضع: تحقق من المسافة بين الميكروفونات ومكبرات الصوت.','الإعدادات','التعليمات','مرجع الأجهزة','قائمة المعدات / عرض السعر','المزيد','إغلاق','يستخدم الرسم وقائمة المعدات والتصدير الأعداد المطبقة.'],
        it:['Quantità audio','Consiglio automatico','Quantità fisse','In attesa: ricalcolare','Ripristina consiglio automatico','Cancella dispositivi audio','Conflitto: verificare la distanza tra microfoni e altoparlanti.','Impostazioni','Istruzioni','Riferimenti','BOM / preventivo','Altro','Chiudi','Disegno, BOM ed esportazione usano le quantità applicate.'],
        hu:['Audioeszközök száma','Automatikus ajánlás','Rögzített mennyiség','Újraszámítás szükséges','Automatikus ajánlás visszaállítása','Audioeszközök törlése','Elhelyezési ütközés: ellenőrizze a mikrofonok és hangszórók távolságát.','Beállítások','Útmutató','Eszközreferencia','BOM / árajánlat','Továbbiak','Bezárás','A rajz, BOM és export az alkalmazott mennyiségeket használja.']
    };
    App.audioUIWords = lang => words[lang] || words.en;
    App.createAudioControls = function (root, options) {
        const heading = document.createElement('h3'), status = document.createElement('p');
        const note = document.createElement('p'), warning = document.createElement('p');
        const actions = document.createElement('div'), restore = document.createElement('button'), clear = document.createElement('button');
        root.classList.add('audio-count-card'); root.append(heading, status);
        status.className = 'audio-count-status'; status.setAttribute('aria-live','polite');
        const selects = App.audioTypes.map(type => {
            const row = document.createElement('label'), name = document.createElement('span'), select = document.createElement('select');
            row.className = 'audio-count-row'; select.dataset.audioCount = type;
            select.addEventListener('change', () => {
                App.stageAudioCount(options.state(), type, Number(select.value)); refresh(); options.staged?.();
            });
            row.append(name,select); root.append(row); return {type,name,select};
        });
        note.className = warning.className = 'microcopy'; warning.classList.add('audio-layout-warning');
        note.setAttribute('role','note'); actions.className = 'audio-count-actions';
        restore.dataset.audioAction = 'restore'; clear.dataset.audioAction = 'clear';
        restore.type = clear.type = 'button'; restore.onclick = options.restore; clear.onclick = options.clear;
        actions.append(restore,clear); root.append(note,warning,actions);
        function refresh() {
            const state = options.state(); if (!state) return;
            const t = App.audioUIWords(options.language()), counts = state.audioDraft || App.audioCounts(state.devices);
            heading.textContent = t[0]; status.textContent = state.audioDraft ? t[3] : t[App.audioRequest(state).mode === 'fixed' ? 2 : 1];
            root.dataset.pending = String(Boolean(state.audioDraft)); root.dataset.mode = App.audioRequest(state).mode;
            for (const {type,name,select} of selects) {
                name.textContent = options.name(type) + (type === 'm100' ? ' · A' : type === 'm40' ? ' · B' : '');
                const values = Array.from({length:App.audioLimits[type]+1},(_,i)=>i);
                if (counts[type] > App.audioLimits[type]) values.push(counts[type]);
                select.replaceChildren(...values.map(n => new Option(String(n),String(n))));
                select.value = counts[type]; select.setAttribute('aria-label',name.textContent);
            }
            restore.textContent = t[4]; clear.textContent = t[5]; note.textContent = t[13];
            warning.textContent = t[6]; warning.hidden = !App.layoutConflict(state.devices);
        }
        refresh(); return refresh;
    };
})(window.AISpeech = window.AISpeech || {});
