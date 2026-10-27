/** Scenario state, display state and signal-flow selection. */
(function (app, Simulator) {
    const SPEAKERS = ['spk_a', 'spk_b', 'spk_h', 'spk_sl', 'spk_c', 'spk_l'];

    Object.assign(Simulator.prototype, {
        setScenario(scenarioKey) {
            if (!this.isScenarioAvailable(scenarioKey)) scenarioKey = 'standby';
            clearTimeout(this.scenarioSoundTimer);
            this.scenarioSoundTimer = null;
            window.soundSys?.stopAll();
            this.currentScenario = scenarioKey;
            this.clearParticles();
            this.updateScenarioButtons(scenarioKey);
            this.updateScenarioBanner(scenarioKey);
            this.playScenarioSound(scenarioKey);
            this.updateScreensAndSpeakers(scenarioKey);
            this.setupScenarioParticles(scenarioKey);
        },

        updateScenarioButtons(scenarioKey) {
            document.querySelectorAll('.scenario-btn').forEach(button => {
                button.classList.toggle('active', button.dataset.scenario === scenarioKey);
            });
        },

        updateScenarioBanner(scenarioKey) {
            const translations = window.I18N_DATA?.[this.lang] || window.I18N_DATA?.zh;
            const scenario = translations?.scenarios?.[scenarioKey];
            if (!scenario) return;

            const fields = {
                'scenario-banner-title': scenario.title,
                'scenario-banner-desc': scenario.desc,
                'scenario-banner-badge': scenario.badge
            };
            Object.entries(fields).forEach(([id, value]) => {
                const element = document.getElementById(id);
                if (element) element.textContent = value;
            });

            const currentEl = document.getElementById('lbl-scenario-current');
            if (currentEl) {
                const prefix = translations.scenarios_toggle_btn || (this.lang === 'en' ? 'Scenario: ' : '场景：');
                currentEl.textContent = `${prefix}${scenario.badge}`;
            }
        },

        playScenarioSound(scenarioKey) {
            if (!window.soundSys) return;
            const simpleSounds = {
                live_broadcast: 'playLiveBroadcastTone',
                cloud_control: 'playClick',
                emergency_alert: 'playClick',
                local_teaching: 'playClick'
            };
            if (scenarioKey === 'bell_music') {
                window.soundSys.playBellChime();
                this.scenarioSoundTimer = setTimeout(() => {
                    this.scenarioSoundTimer = null;
                    if (this.mediaServerEnabled && this.currentScenario === 'bell_music') {
                        window.soundSys.playMusicTune();
                    }
                }, 1200);
                return;
            }
            const method = simpleSounds[scenarioKey];
            if (method) window.soundSys[method]();
        },

        updateScreensAndSpeakers(scenarioKey) {
            this.updateScreenPreviews(scenarioKey);
            SPEAKERS.forEach(speakerId => this.updateSpeaker(speakerId, scenarioKey));
        },

        updateScreenPreviews(scenarioKey) {
            const localeStates = app.data.screenStates[this.lang] || app.data.screenStates.zh;
            const screens = localeStates[scenarioKey] || localeStates.standby;
            Object.entries(screens).forEach(([screenId, data]) => {
                const element = document.getElementById(`screen-${screenId}`);
                if (!element) return;
                element.style.backgroundColor = data.color;
                element.innerHTML = `
                    <div class="screen-badge">${data.badge}</div>
                    <div class="screen-text">${data.title}</div>
                `;
            });
        },

        updateSpeaker(speakerId, scenarioKey) {
            const waveElement = document.getElementById(`waves-${speakerId}`);
            if (!waveElement) return;

            const activeByScenario = {
                live_broadcast: !['spk_sl', 'spk_c'].includes(speakerId),
                bell_music: ['spk_a', 'spk_b', 'spk_h', 'spk_l'].includes(speakerId),
                emergency_alert: false,
                local_teaching: ['spk_a', 'spk_b', 'spk_h', 'spk_sl', 'spk_c'].includes(speakerId)
            };
            const active = Boolean(activeByScenario[scenarioKey]);
            const color = scenarioKey === 'live_broadcast' ? '#3b82f6' : '#2ECC40';

            waveElement.classList.toggle('active', active);
            waveElement.querySelectorAll('span').forEach(wave => {
                wave.style.borderColor = color;
            });
        },

        setupScenarioParticles(scenarioKey) {
            this.particles = [];
            const flows = app.data.scenarioFlows[scenarioKey] || [];
            flows.forEach(flowDefinition => {
                this.addPeriodicParticles(
                    flowDefinition.pathId,
                    flowDefinition.color,
                    flowDefinition.intervalMs,
                    flowDefinition.speed,
                    flowDefinition.initialDelay
                );
            });
        }
    });
})(window.QnexApp, window.QnexApp.services.QnexSimulator);
