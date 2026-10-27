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

    function toggleVisibility(type, isVisible) {
        state.show[type] = isVisible;
        App.lockAudioCounts(state);
        state.audioDraft = null;
        renderDevices();
        calculateCoverage();
    }

    function renderDevices() {
        const layer = document.getElementById('devicesLayer');
        layer.innerHTML = ''; // Clear previous devices
        const radii = state.radii;

        state.devices.forEach(device => {
            const localRadii = App.radiiForDevice(device, radii, state.heightProfile, state.roomWidth);
            // Hide DC20 nodes entirely if unchecked
            if (device.type === 'dc20' && !state.show.dc20) {
                return;
            }

            const pxX = device.x * PPM;
            const pxY = device.y * PPM;

            const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            g.setAttribute('class', 'device');
            g.setAttribute('data-id', device.id);
            g.setAttribute('transform', `translate(${pxX}, ${pxY})`);

            if (device.type === 'm100') {
                // M100 Remote Pickup (Solid Circle with Transparency)
                if (state.show.m100_pickup) {
                    const pickup = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                    pickup.setAttribute('r', localRadii.m100Pickup * PPM);
                    pickup.setAttribute('fill', 'rgba(34, 197, 94, 0.15)');
                    pickup.setAttribute('stroke', '#22c55e');
                    pickup.setAttribute('stroke-width', '1.5');
                    g.appendChild(pickup);
                }

                // M100 Local PA (Dashed Circle)
                if (state.show.m100_pa) {
                    const pa = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                    pa.setAttribute('r', localRadii.m100PA * PPM);
                    pa.setAttribute('fill', 'none');
                    pa.setAttribute('stroke', '#166534');
                    pa.setAttribute('stroke-width', '1.5');
                    pa.setAttribute('stroke-dasharray', '8,5');
                    g.appendChild(pa);
                }

                // Central Node
                const core = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                core.setAttribute('class', 'core');
                core.setAttribute('r', 8);
                core.setAttribute('fill', '#166534');
                g.appendChild(core);

                const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                label.setAttribute('y', -12);
                label.setAttribute('text-anchor', 'middle');
                label.setAttribute('font-size', '11');
                label.setAttribute('font-weight', 'bold');
                label.setAttribute('fill', '#22c55e');
                label.textContent = App.audioName('m100', document.getElementById('langSelect').value, state.showModels) + ' #' + (state.devices.filter(item => ['m100','m40'].includes(device.type) ? ['m100','m40'].includes(item.type) : item.type === device.type).findIndex(item => item.id === device.id) + 1);
                g.appendChild(label);
            } 
            else if (device.type === 'm40') {
                // M40 Remote Pickup
                if (state.show.m40_pickup) {
                    const pickup = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                    pickup.setAttribute('r', radii.m40Pickup * PPM);
                    pickup.setAttribute('fill', 'rgba(168, 85, 247, 0.15)');
                    pickup.setAttribute('stroke', '#a855f7');
                    pickup.setAttribute('stroke-width', '1.5');
                    g.appendChild(pickup);
                }

                // M40 Local PA (Dashed Circle)
                if (state.show.m40_pa) {
                    const pa = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                    pa.setAttribute('r', radii.m40PA * PPM);
                    pa.setAttribute('fill', 'none');
                    pa.setAttribute('stroke', '#7e22ce');
                    pa.setAttribute('stroke-width', '1.5');
                    pa.setAttribute('stroke-dasharray', '6,4');
                    g.appendChild(pa);
                }

                const core = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                core.setAttribute('class', 'core');
                core.setAttribute('r', 7);
                core.setAttribute('fill', '#7e22ce');
                g.appendChild(core);

                const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                label.setAttribute('y', -10);
                label.setAttribute('text-anchor', 'middle');
                label.setAttribute('font-size', '10');
                label.setAttribute('font-weight', 'bold');
                label.setAttribute('fill', '#a855f7');
                label.textContent = App.audioName('m40', document.getElementById('langSelect').value, state.showModels) + ' #' + (state.devices.filter(item => ['m100','m40'].includes(device.type) ? ['m100','m40'].includes(item.type) : item.type === device.type).findIndex(item => item.id === device.id) + 1);
                g.appendChild(label);
            }
            else if (device.type === 'dc20') {
                // DC20 Speaker Coverage
                if (state.show.dc20) {
                    const cover = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                    cover.setAttribute('r', radii.dc20 * PPM);
                    cover.setAttribute('fill', 'rgba(147, 197, 253, 0.3)');
                    cover.setAttribute('stroke', '#3b82f6');
                    cover.setAttribute('stroke-width', '1.5');
                    g.appendChild(cover);
                }

                const core = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                core.setAttribute('class', 'core');
                core.setAttribute('r', 6);
                core.setAttribute('fill', '#2563eb');
                g.appendChild(core);

                const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                label.setAttribute('y', -10);
                label.setAttribute('text-anchor', 'middle');
                label.setAttribute('font-size', '9');
                label.setAttribute('font-weight', 'bold');
                label.setAttribute('fill', '#3b82f6');
                label.textContent = App.audioName('dc20', document.getElementById('langSelect').value, state.showModels) + ' #' + (state.devices.filter(item => ['m100','m40'].includes(device.type) ? ['m100','m40'].includes(item.type) : item.type === device.type).findIndex(item => item.id === device.id) + 1);
                g.appendChild(label);
            }

            layer.appendChild(g);
        });
        App.renderTeachingDevices();
        updateBOM();
    }

    App.addDevice = addDevice;
    App.clearAllDevices = clearAllDevices;
    App.toggleVisibility = toggleVisibility;
    App.renderDevices = renderDevices;
})(window.AISpeech);
