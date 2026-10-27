/** Arrival-driven teaching sequence. A cycle is illustrative, not a live stream session. */
(function (app, Simulator) {
    const ENDPOINTS = [
        { id: 'ndp600', branch: 'ndp600', screen: 'ifp_a', speaker: 'spk_a' },
        { id: 'nmp', branch: 'nmp', screen: 'ifp_b', speaker: 'spk_b' },
        { id: 'ndp200', branch: 'ndp200', screen: 'ifp_h', speaker: 'spk_h' },
        { id: 'mbx_library', branch: 'mbx_l', screen: 'disp_l', speaker: 'spk_l' }
    ];
    Object.assign(Simulator.prototype, {
        updateBroadcastGuide() {
            const card = document.getElementById('broadcast-guide');
            card.hidden = this.view !== 'media';
            const t = this.getTranslations().broadcast;
            card.querySelector('h3').textContent = t.heading;
            card.querySelector('.broadcast-description').textContent =
                this.currentScenario === 'bell_music' ? t.schedule : t.description;
            card.querySelector('.broadcast-key-control').textContent = t.control;
            card.querySelector('.broadcast-key-media').textContent = t.media;
            card.querySelector('.broadcast-key-output').textContent = t.output;
            card.querySelector('.broadcast-loop-note').textContent = t.loop;
            const phase = this.broadcast?.phase;
            card.querySelectorAll('[data-phase]').forEach((item, index) => {
                item.textContent = `${index + 1}. ${t.steps[index]}`;
                item.classList.toggle('active', item.dataset.phase === phase);
                item.setAttribute('aria-current', item.dataset.phase === phase ? 'step' : 'false');
            });
            card.querySelector('.broadcast-source').textContent = this.broadcast
                ? `${t.source}: ${this.broadcast.source === 'console' ? 'Web Console' : 'Q-NEX App'}` : t.overview;
        },

        setBroadcastPhase(phase) {
            this.broadcast.phase = phase;
            this.updateBroadcastGuide();
        },

        startBroadcastCycle(cycle = 0) {
            this.broadcast = { cycle, source: cycle % 2 ? 'app' : 'console', phase: 'control',
                received: new Set(), completed: 0 };
            this.updateScreensAndSpeakers(this.currentScenario);
            document.getElementById('node-mediaserver')?.classList.remove('broadcast-received');
            this.updateBroadcastGuide();
            const route = [
                { pathId: `link_${this.broadcast.source}_cloud` },
                { pathId: 'link_cloud_router' }, { pathId: 'link_router_switch' },
                { pathId: 'link_mediaserver_switch', reverse: true }
            ];
            this.runParticleRoute(route, '#38bdf8', 5, () => {
                this.setBroadcastPhase('distribution');
                document.getElementById('node-mediaserver')?.classList.add('broadcast-received');
                this.sendParticle('link_mediaserver_switch', '#f97316', 5, false, () => {
                    ENDPOINTS.forEach(endpoint => this.distributeToEndpoint(endpoint));
                });
            });
        },

        distributeToEndpoint(endpoint) {
            // Each finite packet follows the physical server uplink and endpoint branch.
            this.sendParticle(`link_switch_${endpoint.branch}`, '#f97316', 5, false, () => {
                this.broadcast.received.add(endpoint.id);
                this.setBroadcastPhase('playback');
                this.updateScreensAndSpeakers(this.currentScenario);
                if (this.broadcast.received.size === 1) this.playBroadcastSound();
                this.playEndpointOutput(endpoint);
            });
        },

        playEndpointOutput(endpoint) {
            const routes = [`link_${endpoint.branch}_${endpoint.speaker}`];
            if (this.currentScenario === 'live_broadcast') routes.push(`link_${endpoint.branch}_${endpoint.screen}`);
            // Four packets make the output readable, then allow the cycle to finish naturally.
            let pending = routes.length * 4;
            routes.forEach(pathId => {
                for (let index = 0; index < 4; index++) this.scheduleAnimation(index * 220, () => {
                    this.sendParticle(pathId, pathId.endsWith(endpoint.speaker) ? '#2ECC40' : '#FF4136',
                        3, false, () => { if (--pending === 0) this.finishBroadcastEndpoint(); });
                });
            });
        },

        finishBroadcastEndpoint() {
            if (++this.broadcast.completed !== ENDPOINTS.length) return;
            this.scheduleAnimation(1000, () => {
                window.soundSys?.stopAll();
                this.startBroadcastCycle(this.broadcast.cycle + 1);
            });
        },

        playBroadcastSound() {
            if (this.currentScenario === 'live_broadcast') window.soundSys?.playLiveBroadcastTone();
            else {
                window.soundSys?.playBellChime();
                this.scheduleAnimation(2300, () => window.soundSys?.playMusicTune());
            }
        },

        hasBroadcastReached(deviceId) {
            if (!this.broadcast) return true;
            const endpoint = ENDPOINTS.find(item => [item.id, item.screen, item.speaker].includes(deviceId));
            return Boolean(endpoint && this.broadcast.received.has(endpoint.id));
        }
    });
})(window.QnexApp, window.QnexApp.services.QnexSimulator);
