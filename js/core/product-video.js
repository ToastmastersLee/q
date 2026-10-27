/** Localized inspector video link. No player, thumbnail or runtime network lookup. */
(function (app, Simulator) {
    const labels = {
        en: ['Product introduction', 'Series reference', 'Solution overview', 'Watch on YouTube', 'Product details'],
        zh: ['产品介绍', '系列参考', '方案概览', '在 YouTube 观看', '产品详情'],
        ko: ['제품 소개', '시리즈 참고', '솔루션 개요', 'YouTube에서 보기', '제품 상세'],
        mn: ['Бүтээгдэхүүний танилцуулга', 'Цувралын жишээ', 'Шийдлийн тойм', 'YouTube дээр үзэх', 'Бүтээгдэхүүний дэлгэрэнгүй'],
        ja: ['製品紹介', 'シリーズ参考', 'ソリューション概要', 'YouTube で見る', '製品詳細'],
        es: ['Presentación del producto', 'Referencia de la serie', 'Resumen de la solución', 'Ver en YouTube', 'Detalles del producto'],
        fr: ['Présentation du produit', 'Référence de la gamme', 'Aperçu de la solution', 'Regarder sur YouTube', 'Détails du produit'],
        ar: ['مقدمة المنتج', 'مرجع السلسلة', 'نظرة عامة على الحل', 'شاهد على YouTube', 'تفاصيل المنتج']
    };
    // Extend the existing locale interface so the normal language pass updates the heading.
    Object.entries(labels).forEach(([language, words]) => {
        app.data.i18n[language].sidebar_heading = `📋 ${words[4]}`;
    });
    Object.assign(Simulator.prototype, {
        updateProductVideo(deviceId) {
            const link = document.getElementById('inspector-video');
            const tooltip = document.getElementById('inspector-video-tooltip');
            const table = app.data.productVideos;
            const video = table.videos[table.devices[deviceId]];
            link.hidden = !video?.enabled || video.visibility !== 'public';
            link.removeAttribute('href');
            link.removeAttribute('aria-label');
            tooltip.textContent = '';
            if (link.hidden) return;
            const words = labels[this.lang] || labels.en;
            const scope = words[{ product: 0, series: 1, solution: 2 }[video.scope]];
            const description = `${scope} · ${video.reference}\n${video.title}`;
            link.href = `https://www.youtube.com/watch?v=${video.videoId}`;
            link.setAttribute('aria-label', `${words[3]}: ${description}`);
            tooltip.textContent = description;
            tooltip.dir = 'auto';
        }
    });
})(window.QnexApp, window.QnexApp.services.QnexSimulator);
