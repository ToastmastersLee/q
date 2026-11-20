(function (App) {
    const state = App.state;
    const PPM = App.PPM;
    const calculateCoverage = (...args) => App.calculateCoverage(...args);
    const updateBOM = (...args) => App.updateBOM(...args);

    function addDevice(type, x, y) {
        if (x === undefined || y === undefined) {
            // Default: center of the classroom
            x = state.roomLength / 2;
            y = state.roomWidth / 2;
        }
        
        state.manualAudio = true;
        state.devices.push({
            id: App.idCounter++,
            type: type,
            x: x,
            y: y
        });
        
        App.lockAudioCounts(state);
        state.audioDraft = null;
        renderDevices();
        calculateCoverage();
    }

    function clearAllDevices() {
        state.manualAudio = true;
        state.devices = [];
        App.lockAudioCounts(state);
        state.audioDraft = null;
        renderDevices();
        calculateCoverage();
        document.getElementById('presetSelect').value = 'custom';
    }

    const overlayControls = [...document.querySelectorAll('[data-visibility]')];
    const legendControls = document.querySelectorAll('[data-legend]');
    const overlayLayers = document.querySelectorAll('#audioCoverageLayer > g');

    function toggleVisibility(key, visible) {
        for (const control of overlayControls) {
            if (key !== 'all' && key !== control.dataset.overlayFamily && key !== control.dataset.visibility) continue;
            control.checked = visible;
            const layer = document.getElementById('overlay-' + control.dataset.visibility);
            layer.setAttribute('display', visible ? 'inline' : 'none');
        }
        for (const control of legendControls) {
            const group = control.dataset.legend === 'all' ? overlayControls :
                overlayControls.filter(input => input.dataset.overlayFamily === control.dataset.legend);
            const checked = group.filter(input => input.checked).length;
            control.checked = checked === group.length;
            control.indeterminate = checked > 0 && checked < group.length;
        }
    }

    const markers = {
        m100: { radius: 8, fill: '#166534', text: '#22c55e', fontSize: 11, labelY: -12 },
        m40:  { radius: 7, fill: '#7e22ce', text: '#a855f7', fontSize: 10, labelY: -10 },
        dc20: { radius: 6, fill: '#2563eb', text: '#3b82f6', fontSize: 9, labelY: -10 }
    };

    function renderDevices() {
        const layer = document.getElementById('devicesLayer');
        layer.replaceChildren();
        for (const overlay of overlayLayers) overlay.replaceChildren();
        const language = document.getElementById('langSelect').value;
        let microphones = 0, speakers = 0;
        for (const device of state.devices) {
            const x = device.x * PPM, y = device.y * PPM;
            const radii = App.radiiForDevice(device, state.radii, state.heightProfile, state.roomWidth);
            for (const overlay of overlayLayers) {
                if (overlay.dataset.kind !== device.type) continue;
                const circle = document.createElementNS(layer.namespaceURI, 'circle');
                circle.setAttribute('cx', x);
                circle.setAttribute('cy', y);
                circle.setAttribute('r', radii[overlay.dataset.radius] * PPM);
                overlay.append(circle);
            }

            const marker = markers[device.type];
            const group = document.createElementNS(layer.namespaceURI, 'g');
            group.setAttribute('class', 'device');
            group.dataset.id = device.id;
            group.setAttribute('transform', `translate(${x}, ${y})`);
            const core = document.createElementNS(layer.namespaceURI, 'circle');
            core.setAttribute('class', 'core');
            core.setAttribute('r', marker.radius);
            core.setAttribute('fill', marker.fill);
            const label = document.createElementNS(layer.namespaceURI, 'text');
            label.setAttribute('y', marker.labelY);
            label.setAttribute('text-anchor', 'middle');
            label.setAttribute('font-size', marker.fontSize);
            label.setAttribute('font-weight', 'bold');
            label.setAttribute('fill', marker.text);
            const number = device.type === 'dc20' ? ++speakers : ++microphones;
            label.textContent = `${App.audioName(device.type, language, state.showModels)} #${number}`;
            group.append(core, label);
            layer.append(group);
        }
        App.renderTeachingDevices();
        updateBOM();
    }

    App.addDevice = addDevice;
    App.clearAllDevices = clearAllDevices;
    App.toggleVisibility = toggleVisibility;
    App.renderDevices = renderDevices;
})(window.AISpeech);
