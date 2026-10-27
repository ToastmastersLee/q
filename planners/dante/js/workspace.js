// 2D workspace shell: resizing panels changes presentation, never device positions.
(function (App) {
    window.addEventListener('DOMContentLoaded', () => {
        const $ = selector => document.querySelector(selector);
        const sidebar = $('.sidebar'), nav = $('.top-nav'), main = $('.main-area');
        const rail = document.createElement('nav'); rail.className = 'workspace-rail';
        const contents = document.createElement('div'); contents.className = 'workspace-panels';
        const settings = document.createElement('section');
        const instruction = $('.instruction'), reference = $('#specsPanel'), bom = $('#bomPanel');
        const exportButton = $('#export-quotation'), restore = $('#restore-recommended');
        restore.hidden = true;
        for (const child of [...sidebar.children]) {
            if (![bom,exportButton].includes(child)) settings.append(child);
        }
        settings.prepend(settings.querySelector('#audio-count-controls').closest('.control-group'));
        settings.prepend(settings.querySelector('#t_h1').parentElement);
        const quotation = document.createElement('section'); quotation.append(exportButton,bom);
        instruction.open = reference.open = true;
        const panels = {settings, instructions:instruction, reference, bom:quotation};
        Object.entries(panels).forEach(([key,panel]) => { panel.dataset.workspacePanel = key; contents.append(panel); });
        const close = document.createElement('button'); close.type = 'button'; close.className = 'workspace-close';
        sidebar.replaceChildren(close,contents); sidebar.setAttribute('aria-label','Dante settings');
        const toggle = $('#dante-options-toggle'), language = $('#langSelect');
        const more = document.createElement('details'), summary = document.createElement('summary');
        more.className = 'workspace-more'; more.append(summary,nav.querySelector('a'),$('#t_themeBtn'));
        const brand = document.createElement('strong'); brand.className = 'workspace-brand'; brand.textContent = 'Dante · 2D';
        nav.replaceChildren(brand,toggle,$('#t_recalculate'),$('#t_open3d'),language,more);
        document.body.insertBefore(rail,sidebar);
        const keys = ['settings','instructions','reference','bom'], buttons = [];
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
            icon.textContent = ['⚙','ⓘ','▤','☷'][index]; icon.setAttribute('aria-hidden','true');
            button.replaceChildren(icon,label); rail.append(button); buttons.push(button);
        });
        toggle.onclick = () => showPanel('settings'); close.onclick = () => { if(active) showPanel(active); };
        document.addEventListener('keydown',event => { if(event.key === 'Escape' && active) close.click(); });
        App.refreshWorkspace = () => {
            const t = App.audioUIWords(language.value);
            toggle.textContent = t[7]; close.textContent = '× ' + t[12]; summary.textContent = t[11];
            buttons.forEach((button,i) => { button.lastChild.textContent = language.value === 'en' ? ['Settings','Help','Specs','BOM'][i] : t[7+i]; button.title = t[7+i]; });
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
