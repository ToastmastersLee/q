/** Session-only deployment presentation. Never rebuild paths or restart playback. */
(function (app, Simulator) {
    const LINK_IDS = ['link_console_cloud', 'link_app_cloud', 'link_cloud_router'];
    const mapText = (value, resolve) => {
        if (typeof value === 'string') return resolve(value);
        if (Array.isArray(value)) return value.map(item => mapText(item, resolve));
        if (value && typeof value === 'object') return Object.fromEntries(
            Object.entries(value).map(([key, item]) => [key, mapText(item, resolve)]));
        return value;
    };
    Object.assign(Simulator.prototype, {
        getDeploymentCopy() { return app.data.deploymentCopy[this.lang] || app.data.deploymentCopy.en; },
        getDeploymentZone() {
            const copy = this.getDeploymentCopy();
            return this.deployment === 'campus' ? copy.campusZone : copy.regionalZone;
        },
        resolveDeploymentText(value) {
            if (this.deployment === 'public' || value == null) return value;
            const copy = this.getDeploymentCopy();
            return mapText(value, text => text.replace(new RegExp(copy.cloudPattern, 'gi'), copy.serverWord)
                .replace(/\b(?:public cloud|cloud)(?:-based)?\b/gi, copy.serverWord));
        },
        resolveDeploymentTranslations(base) {
            if (this.deployment === 'public') return base;
            const key = `${this.lang}:${this.deployment}`;
            if (this.deploymentTranslations?.key === key) return this.deploymentTranslations.value;
            const t = this.resolveDeploymentText(base), copy = this.getDeploymentCopy();
            t.zones.cloud_plane = this.getDeploymentZone();
            t.scenarios.standby.desc = this.getDeploymentNote();
            Object.assign(t.scenarios.cloud_control, {
                btn: `⚡ ${copy.control}`, title: copy.control, badge: copy.control, desc: copy.command
            });
            t.scenarios.emergency_alert.desc = copy.notice;
            t.mediaTour[0] = { title: this.getDeploymentZone(),
                description: `<p class="tour-text">${copy.command}</p><p class="tour-text">${this.getDeploymentNote()}</p>` };
            this.deploymentTranslations = { key, value: t };
            return t;
        },
        getDeploymentNote() {
            const copy = this.getDeploymentCopy();
            return copy[`${this.deployment}Note`];
        },
        resolveDeploymentDeviceValue(device, property, base) {
            if (this.deployment === 'public') return base;
            const copy = this.getDeploymentCopy(), campus = this.deployment === 'campus';
            if (device.id === 'cloud') {
                if (['name', 'model', 'genericName'].includes(property)) return campus ? copy.campusServer : copy.regionalServer;
                if (property === 'zone') return this.getDeploymentZone();
                if (property === 'role') return `${copy.management} ${this.getDeploymentNote()}`;
            }
            if (['console', 'app'].includes(device.id)) {
                const connection = copy.links[(campus ? 3 : 0) + (device.id === 'app' ? 1 : 0)];
                if (property === 'zone') return connection;
                if (property === 'ports') return device.id === 'console' ? ['Web Browser (Chrome / Edge)', connection] : [connection];
            }
            if (device.id === 'router' && property === 'role' && campus) return copy.gateway;
            if (device.id === 'mediaserver' && property === 'role') return copy.media;
            return this.resolveDeploymentText(base);
        },
        resolveDeploymentScreen(state, scenario) {
            const result = this.resolveDeploymentText(state);
            if (this.deployment === 'public') return result;
            const copy = this.getDeploymentCopy();
            if (scenario === 'cloud_control') return { ...result, badge: copy.control, desc: copy.command };
            if (scenario === 'emergency_alert') return { ...result, desc: copy.notice };
            return result;
        },
        resolveDeploymentTour(steps) {
            if (this.deployment === 'public') return steps;
            const copy = this.getDeploymentCopy();
            return steps.map(step => step.targetNodes.includes('cloud')
                ? { ...step, title: this.getDeploymentZone(),
                    description: `<p class="tour-text">${copy.command}</p><p class="tour-text">${this.getDeploymentNote()}</p>` }
                : { ...step, title: this.resolveDeploymentText(step.title), description: this.resolveDeploymentText(step.description) });
        },
        getDeploymentConnection(connection) {
            const index = LINK_IDS.indexOf(connection.id);
            if (this.deployment === 'public' || index < 0) return connection;
            return { ...connection, label: this.getDeploymentCopy().links[index + (this.deployment === 'campus' ? 3 : 0)] };
        },
        bindDeploymentControls() {
            document.getElementById('deployment-private').addEventListener('change', event => {
                this.setDeployment(event.target.checked ? this.privateDeployment : 'public');
            });
            document.getElementById('deployment-location').addEventListener('change', event => {
                this.setDeployment(event.target.value);
            });
        },
        setDeployment(mode) {
            if (this.isExporting || !['public', 'regional', 'campus'].includes(mode) || this.deployment === mode) return;
            this.deployment = mode;
            if (mode !== 'public') this.privateDeployment = mode;
            const t = this.getTranslations();
            this.updateDeploymentControls();
            this.updateTopologyLanguage(t);
            this.updateScenarioLanguage(t);
            this.updateInspectorLanguage(t);
            this.updateScreenPreviews(this.currentScenario);
            this.updateBroadcastGuide();
            this.updateTourLanguage(t);
        },
        updateDeploymentControls() {
            const copy = this.getDeploymentCopy();
            const text = { 'deployment-heading': copy.heading, 'deployment-toggle-label': copy.toggle,
                'deployment-location-label': copy.location, 'deployment-current': this.deployment === 'public' ? copy.public : copy[this.deployment],
                'deployment-note': this.getDeploymentNote(), 'deployment-diagram-help': copy.diagramNote };
            Object.entries(text).forEach(([id, value]) => { document.getElementById(id).textContent = value; });
            const toggle = document.getElementById('deployment-private');
            toggle.checked = this.deployment !== 'public';
            toggle.disabled = Boolean(this.isExporting);
            document.getElementById('deployment-location-field').hidden = !toggle.checked;
            document.getElementById('deployment-diagram-help').hidden = !toggle.checked;
            const select = document.getElementById('deployment-location');
            select.value = this.privateDeployment;
            select.disabled = !toggle.checked || Boolean(this.isExporting);
            [...select.options].forEach(option => { option.textContent = copy[option.value]; });
        },
        updateDeploymentCanvas() {
            const board = document.getElementById('topology-board');
            board.dataset.deployment = this.deployment;
            for (const device of Object.values(app.data.topology.devices)) {
                const node = document.getElementById(`node-${device.id}`);
                if (!node) continue;
                const model = node.querySelector('.node-model-badge');
                model.textContent = this.localizedDeviceValue(device, 'model');
                model.title = model.textContent;
                node.querySelector('img').alt = this.localizedDeviceValue(device, 'name');
            }
            this.getTopology().connections.forEach(connection => {
                const resolved = this.getDeploymentConnection(connection);
                const path = document.getElementById(`path-${connection.id}`);
                if (path) path.querySelector('title').textContent = `${resolved.label} (${resolved.type.toUpperCase()})`;
                const group = document.querySelector(`[data-connection-label="${connection.id}"]`);
                if (!group) return;
                const label = group.querySelector('text');
                label.textContent = resolved.label;
                // Measure actual glyph widths, including CJK and Arabic, instead of character count.
                const width = Math.max(76, label.getComputedTextLength() + 12);
                group.querySelector('rect').setAttribute('width', width);
                group.querySelector('rect').setAttribute('x', -width / 2);
            });
            this.updateDeploymentDiagramNote();
        },
        updateDeploymentDiagramNote() {
            let note = document.getElementById('deployment-diagram-note');
            if (!note) {
                note = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                Object.entries({ id: 'deployment-diagram-note', x: 48, y: 20, class: 'deployment-diagram-note' })
                    .forEach(([key, value]) => note.setAttribute(key, value));
                document.getElementById('bg-group').appendChild(note);
            }
            note.textContent = this.deployment === 'public' ? '' : this.getDeploymentCopy().diagramNote;
            note.removeAttribute('textLength');
            if (note.getComputedTextLength() > 620) {
                note.setAttribute('textLength', 620);
                note.setAttribute('lengthAdjust', 'spacingAndGlyphs');
            }
        }
    });
})(window.QnexApp, window.QnexApp.services.QnexSimulator);
