// 2D workspace shell: resizing panels changes presentation, never device positions.
(function (App) {
    const settingsLabels = {
        en: ['Room', 'Audio', 'Displays & recording', 'Coverage'],
        zh: ['房间', '音频', '显示与录播', '覆盖'],
        es: ['Sala', 'Audio', 'Pantallas y grabación', 'Cobertura'],
        ja: ['教室', '音声', '画面・録画', 'カバー範囲'],
        ko: ['강의실', '오디오', '화면 및 녹화', '커버리지'],
        it: ['Aula', 'Audio', 'Schermi e registrazione', 'Copertura'],
        hu: ['Terem', 'Hang', 'Kijelzők és felvétel', 'Lefedettség'],
        ar: ['الغرفة', 'الصوت', 'الشاشات والتسجيل', 'التغطية']
    };

    window.addEventListener('DOMContentLoaded', () => {
        const $ = selector => document.querySelector(selector);
        const sidebar = $('.sidebar'), nav = $('.top-nav'), main = $('.main-area');
        const rail = document.createElement('aside'); rail.className = 'workspace-rail';
        rail.append($('.planner-views'));
        const contents = document.createElement('div'); contents.className = 'workspace-panels';
        const settings = document.createElement('section');
        const instruction = $('.instruction'), reference = $('#specsPanel'), bom = $('#bomPanel');
        const exportButton = $('#export-quotation'), restore = $('#restore-recommended');
        restore.hidden = true;
        instruction.querySelector('summary').after($('#t_h1').parentElement);
        const categoryNav = document.createElement('div');
        categoryNav.className = 'settings-categories'; categoryNav.setAttribute('role','group');
        settings.append(categoryNav);
        const categories = ['room','audio','display','coverage'].map(key => {
            const button = document.createElement('button');
            button.type = 'button'; button.id = `settings-${key}-button`;
            const pane = document.createElement('section'); pane.id = `settings-${key}`;
            pane.className = 'settings-category'; pane.setAttribute('aria-labelledby', button.id);
            button.setAttribute('aria-controls', pane.id);
            pane.append(...sidebar.querySelectorAll(`[data-settings-category="${key}"]`));
            categoryNav.append(button); settings.append(pane);
            button.onclick = () => selectCategory(key);
            return { key, button, pane };
        });
        function selectCategory(key) {
            for (const category of categories) {
                category.pane.hidden = category.key !== key;
                category.button.setAttribute('aria-pressed', String(category.key === key));
            }
            sidebar.scrollTop = 0;
        }
        selectCategory('room');
        const quotation = document.createElement('section'); quotation.append(bom,exportButton);
        instruction.open = reference.open = true;
        const panels = {settings, instructions:instruction, reference, bom:quotation};
        Object.entries(panels).forEach(([key,panel]) => { panel.dataset.workspacePanel = key; contents.append(panel); });
        const close = document.createElement('button'); close.type = 'button'; close.className = 'workspace-close';
        sidebar.replaceChildren(close,contents); sidebar.setAttribute('aria-label','Dante settings');
        const toggle = $('#dante-options-toggle'), language = $('#langSelect');
        const more = document.createElement('details'), summary = document.createElement('summary');
        more.className = 'workspace-more'; more.append(summary,nav.querySelector('a'),$('#t_themeBtn'));
        const brand = document.createElement('strong'); brand.className = 'workspace-brand'; brand.textContent = 'Dante · 2D';
        nav.replaceChildren(brand,toggle,$('#t_recalculate'),language,more);
        document.body.insertBefore(rail,sidebar);
        rail.after($('#handoff-error'));
        const keys = ['bom','settings','instructions','reference'], buttons = [];
        let active = null;
        function showPanel(key) {
            active = active === key ? null : key;
            sidebar.hidden = !active; document.body.classList.toggle('workspace-open',Boolean(active));
            toggle.setAttribute('aria-expanded',String(Boolean(active)));
            for (const [name,panel] of Object.entries(panels)) panel.hidden = name !== active;
            buttons.forEach((button,i) => button.setAttribute('aria-pressed',String(keys[i] === active)));
            sidebar.scrollTop = 0;
        }
        keys.forEach((key,index) => {
            const button = key === 'bom' ? $('#bom-shortcut') : document.createElement('button');
            button.type = 'button'; button.id = `workspace-${key}`; button.onclick = () => showPanel(key);
            const icon = document.createElement('span'), label = document.createElement('span');
            icon.textContent = ['☷','⚙','ⓘ','▤'][index]; icon.setAttribute('aria-hidden','true');
            button.replaceChildren(icon,label); rail.append(button); buttons.push(button);
        });
        toggle.onclick = () => showPanel('settings'); close.onclick = () => { if(active) showPanel(active); };
        document.addEventListener('keydown',event => { if(event.key === 'Escape' && active) close.click(); });
        App.refreshWorkspace = () => {
            const t = App.audioUIWords(language.value);
            toggle.textContent = t[7]; close.textContent = '× ' + t[12]; summary.textContent = t[11];
            const categoryLabels = settingsLabels[language.value] || settingsLabels.en;
            categoryNav.setAttribute('aria-label', t[7]);
            categories.forEach(({button}, i) => { button.textContent = categoryLabels[i]; });
            const labels = [App.configurationCopy(language.value).devices, t[7], t[8], t[9]];
            buttons.forEach((button,i) => {
                button.lastChild.textContent = language.value === 'en' ? ['Devices','Settings','Help','Specs'][i] : labels[i];
                button.title = labels[i];
            });
        };
        App.refreshAudioUI = App.createAudioControls($('#audio-count-controls'), {
            state:() => App.state, language:() => language.value,
            name:type => App.audioName(type,language.value,App.state.showModels),
            restore:() => App.restoreRecommended(), clear:() => App.clearAllDevices()
        });
        language.addEventListener('change',() => { App.refreshWorkspace(); App.refreshAudioUI(); });
        App.refreshWorkspace(); showPanel(null);
        // Keep the applied plan inspectable in tests and avoid relying on rendered pixel sizes.
        main.setAttribute('aria-label','Dante classroom plan');
    });
})(window.AISpeech);
