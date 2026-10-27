/** Device inspector and wiring filter interactions. */
(function (Simulator) {
    Object.assign(Simulator.prototype, {
    selectDevice(deviceId, { openSidebar = true } = {}) {
        if (!this.isDeviceVisible(deviceId)) deviceId = 'switch';
        const changedDevice = this.selectedDevice !== deviceId;
        this.selectedDevice = deviceId;
        const dev = TOPOLOGY_DATA.devices[deviceId];
        if (!dev) return;

        if (openSidebar && this.isSidebarCollapsed) {
            this.toggleSidebar(false);
        }

        // Highlight selected node
        document.querySelectorAll('.topology-node').forEach(n => {
            n.classList.toggle('selected-device', n.id === `node-${deviceId}`);
        });

        // Populate Inspector Card
        const inspector = document.getElementById('device-inspector');
        if (!inspector) return;

        const zoneText = this.localizedDeviceValue(dev, 'zone');
        const roleText = this.localizedDeviceValue(dev, 'role');

        document.getElementById('inspector-title').textContent = this.getDeviceTranslation(dev, 'name') || dev.name;
        document.getElementById('inspector-model').textContent = dev.model;
        document.getElementById('inspector-img').src = dev.image;
        document.getElementById('inspector-zone').textContent = zoneText;
        document.getElementById('inspector-role').textContent = roleText;

        this.updateProductVideo(deviceId);
        if (changedDevice) {
            document.getElementById('inspector-ports-section').open = false;
            document.getElementById('sidebar-panel').scrollTop = 0;
        }

        // Ports
        const portsList = document.getElementById('inspector-ports');
        const portsSection = portsList?.closest('.inspector-section');
        if (portsSection) {
            const ports = this.getDeviceTranslation(dev, 'ports') || dev.ports;
            if (ports && ports.length > 0) {
                portsSection.style.display = '';
                portsList.innerHTML = ports.map(p => `<li>${p}</li>`).join('');
            } else {
                portsSection.style.display = 'none';
            }
        }

        // Scenarios
        const scenariosBox = document.getElementById('inspector-scenarios');
        const scenariosSection = scenariosBox?.closest('.inspector-section');
        if (scenariosSection) {
            if (dev.scenarios) {
                scenariosSection.style.display = '';
                const isEn = this.lang === 'en';
                const t = (window.I18N_DATA && window.I18N_DATA[this.lang]) || window.I18N_DATA?.zh;
                const labels = {
                    teaching: t?.inspector?.scenario_teaching || (isEn ? 'Teaching' : '教学场景'),
                    control: t?.inspector?.scenario_control || (isEn ? 'Control' : '设备集控'),
                    cascading: t?.inspector?.scenario_cascading || (isEn ? 'Cascading' : '全校级联')
                };
                const s = dev.scenarios;
                const b1 = this.localizedScenarioValue(dev, 'badge1') || labels.teaching;
                const i1 = s.icon1 || '🎓';
                const b2 = this.localizedScenarioValue(dev, 'badge2') || labels.control;
                const i2 = s.icon2 || '🎛️';
                const b3 = this.localizedScenarioValue(dev, 'badge3') || labels.cascading;
                const i3 = s.icon3 || '🌐';
                scenariosBox.innerHTML = [
                    ['teaching', i1, b1], ['control', i2, b2], ['cascading', i3, b3]
                ].map(([key, icon, badge]) => {
                    const description = this.localizedScenarioValue(dev, key);
                    return description ? `<div class="scenario-item"><span class="scenario-badge scenario-badge-${key}">${icon} ${badge}</span><div class="scenario-desc">${description}</div></div>` : '';
                }).join('');
            } else {
                scenariosSection.style.display = 'none';
            }
        }

        // Test action button title
        const t = (window.I18N_DATA && window.I18N_DATA[this.lang]) || window.I18N_DATA?.zh;
        const testBtn = document.getElementById('inspector-test-btn');
        if (testBtn && t) {
            testBtn.textContent = `${t.inspector.test_btn_prefix} ${dev.model} ${t.inspector.test_btn_suffix}`;
        }
    },
    triggerDeviceSelfTest() {
        if (!this.selectedDevice) return;
        const dev = TOPOLOGY_DATA.devices[this.selectedDevice];
        if (!dev) return;

        if (window.soundSys) window.soundSys.playClick();

        const nodeEl = document.getElementById(`node-${dev.id}`);
        if (nodeEl) {
            nodeEl.classList.add('node-pinging');
            setTimeout(() => nodeEl.classList.remove('node-pinging'), 1000);
        }

        const bannerDesc = document.getElementById('scenario-banner-desc');
        if (bannerDesc) {
            const orig = bannerDesc.textContent;
            const msg = `${dev.model}: ${this.getTranslations().inspector.ping_success}`;
            bannerDesc.innerHTML = `<span style="color:#38bdf8;">${msg}</span>`;
            setTimeout(() => { bannerDesc.textContent = orig; }, 3000);
        }
    },
    toggleCableFilter(type, isVisible) {
        this.cableFilters[type] = isVisible;
        document.querySelectorAll(`.cable-${type}`).forEach(el => {
            el.style.display = isVisible ? 'block' : 'none';
        });
        document.querySelectorAll(`.cable-label-${type}`).forEach(el => {
            el.style.display = isVisible ? 'block' : 'none';
        });
        this.particles.forEach(particle => {
            particle.element.style.display = particle.pathEl.style.display === 'none' ? 'none' : '';
        });
    }
    });
})(window.QnexApp.services.QnexSimulator);
