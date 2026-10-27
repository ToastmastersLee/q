/**
 * Q-NEX System Architecture Simulator - Web Audio Synthesizer
 * Generates realistic audio cues (bell chime, alert siren, music chords, clicks)
 * using Web Audio API without requiring any external mp3 files.
 */

class SoundSynthesizer {
    constructor() {
        this.ctx = null;
        this.enabled = true;
        this.isMuted = false;
        this.currentTone = null;
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.ctx = new AudioContext();
            }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    setMuted(muted) {
        this.isMuted = muted;
        if (muted) {
            this.stopAll();
        }
    }

    playClick() {
        if (this.isMuted) return;
        this.init();
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.05);

        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.05);
    }

    playBellChime() {
        if (this.isMuted) return;
        this.init();
        if (!this.ctx) return;

        // Classic Westminster / Campus Chime notes: E4, G#4, F#4, B3
        const notes = [329.63, 415.30, 369.99, 246.94];
        notes.forEach((freq, idx) => {
            const startTime = this.ctx.currentTime + idx * 0.45;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, startTime);

            // Chime envelope (fast attack, natural ring decay)
            gain.gain.setValueAtTime(0.0001, startTime);
            gain.gain.exponentialRampToValueAtTime(0.35, startTime + 0.03);
            gain.gain.exponentialRampToValueAtTime(0.001, startTime + 1.2);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(startTime);
            osc.stop(startTime + 1.2);
        });
    }

    playMusicTune() {
        if (this.isMuted) return;
        this.init();
        if (!this.ctx) return;

        // Gentle relaxing campus lunchtime melody
        const notes = [
            { f: 523.25, d: 0.3 }, // C5
            { f: 587.33, d: 0.3 }, // D5
            { f: 659.25, d: 0.4 }, // E5
            { f: 783.99, d: 0.5 }, // G5
            { f: 659.25, d: 0.3 }, // E5
            { f: 587.33, d: 0.5 }  // D5
        ];

        let curTime = this.ctx.currentTime;
        notes.forEach(n => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(n.f, curTime);

            gain.gain.setValueAtTime(0.001, curTime);
            gain.gain.linearRampToValueAtTime(0.2, curTime + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.001, curTime + n.d);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(curTime);
            osc.stop(curTime + n.d);
            curTime += n.d * 0.9;
        });
    }

    playEmergencySiren() {
        if (this.isMuted) return;
        this.init();
        if (!this.ctx) return;

        // Alternating high-low emergency alarm
        for (let i = 0; i < 4; i++) {
            const t = this.ctx.currentTime + i * 0.6;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sawtooth';
            // High note then Low note
            osc.frequency.setValueAtTime(i % 2 === 0 ? 880 : 660, t);

            gain.gain.setValueAtTime(0.18, t);
            gain.gain.exponentialRampToValueAtTime(0.01, t + 0.55);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(t);
            osc.stop(t + 0.55);
        }
    }

    playLiveBroadcastTone() {
        if (this.isMuted) return;
        this.init();
        if (!this.ctx) return;

        // Broadcast fanfare chord
        const freqs = [440, 554.37, 659.25];
        freqs.forEach(f => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(f, this.ctx.currentTime);

            gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.15, this.ctx.currentTime + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.8);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start();
            osc.stop(this.ctx.currentTime + 0.8);
        });
    }

    stopAll() {
        const context = this.ctx;
        this.ctx = null;
        if (context && context.state !== 'closed') context.close().catch(() => {});
    }
}

window.QnexApp.services.SoundSynthesizer = SoundSynthesizer;
window.soundSys = new SoundSynthesizer();
