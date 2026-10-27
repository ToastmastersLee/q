(function (App) {
    const state = App.state;
    const PPM = App.PPM;
    const svgCanvas = App.svgCanvas;
    const renderDevices = (...args) => App.renderDevices(...args);
    const calculateCoverage = (...args) => App.calculateCoverage(...args);

    let draggingDevice = null;

    function getMousePosition(evt) {
        var CTM = svgCanvas.getScreenCTM();
        return {
            x: (evt.clientX - CTM.e) / CTM.a,
            y: (evt.clientY - CTM.f) / CTM.d
        };
    }

    svgCanvas.addEventListener('mousedown', (e) => {
        let target = e.target;
        while (target && target.nodeName !== 'g' && !target.classList?.contains('device')) {
            target = target.parentNode;
            if (target === svgCanvas) return; 
        }
        if (target && target.classList?.contains('device')) {
            const id = parseInt(target.getAttribute('data-id'));
            draggingDevice = target.dataset.teachingId ? state.teachingDevices.find(d => d.id === target.dataset.teachingId) : target.dataset.auxId ? state.auxDisplays.find(d => d.id === target.dataset.auxId) : state.devices.find(d => d.id === id);
            if (target.dataset.auxId) state.manualAux = true;
            else if (!target.dataset.teachingId) App.lockAudioCounts(state);
        }
    });

    svgCanvas.addEventListener('mousemove', (e) => {
        if (draggingDevice) {
            const pos = getMousePosition(e);
            let tx = pos.x / PPM;
            let ty = pos.y / PPM;
            
            // Boundary collision prevention
            tx = Math.max(0, Math.min(state.roomLength, tx));
            ty = Math.max(0, Math.min(state.roomWidth, ty));
            
            draggingDevice.x = tx;
            draggingDevice.y = ty;
            
            App.renderRoom();
        }
    });

    svgCanvas.addEventListener('dblclick', (e) => {
        let target = e.target;
        while (target && target.nodeName !== 'g' && !target.classList?.contains('device')) {
            target = target.parentNode;
            if (target === svgCanvas) return; 
        }
        if (target && target.classList?.contains('device')) {
            const id = parseInt(target.getAttribute('data-id'));
            if (target.dataset.teachingId) {
                const d = state.teachingDevices.find(v => v.id === target.dataset.teachingId);
                const key = {qnex:'qnexCount',ifp:'ifpCount',station:'lcsCount',camera:'cameraCount'}[d.type];
                state.teachingDevices = state.teachingDevices.filter(v => v !== d);
                state.equipment[key]--; App.renderRoom(); return;
            }
            if (target.dataset.auxId) {
                state.manualAux = true;
                state.auxDisplays = state.auxDisplays.filter(d => d.id !== target.dataset.auxId);
                App.renderRoom(); return;
            }
            const idx = state.devices.findIndex(d => d.id === id);
            if (idx > -1) {
                state.manualAudio = true;
                state.devices.splice(idx, 1);
                App.lockAudioCounts(state); state.audioDraft = null;
                renderDevices();
                calculateCoverage();
                document.getElementById('presetSelect').value = 'custom';
            }
        }
    });

    window.addEventListener('mouseup', () => { draggingDevice = null; });
    svgCanvas.addEventListener('mouseleave', () => { draggingDevice = null; });

    App.getMousePosition = getMousePosition;
})(window.AISpeech);
