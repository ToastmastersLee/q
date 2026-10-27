/** Shared simulation clock and forward/reverse signal particles. */
(function (Simulator) {
    Object.assign(Simulator.prototype, {
        scheduleAnimation(delay, callback) {
            this.animationTasks.push({ at: this.animationTime + delay, callback, epoch: this.animationEpoch });
        },
        sendParticle(pathId, color, speed = 1.5, reverse = false, onComplete = null) {
            const pathEl = document.getElementById(`path-${pathId}`);
            if (!pathEl) throw new Error(`Missing signal path: ${pathId}`);
            const pathLength = pathEl.getTotalLength();
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('r', '5');
            circle.setAttribute('fill', color);
            circle.setAttribute('class', 'signal-particle');
            circle.style.filter = `drop-shadow(0 0 4px ${color})`;
            circle.style.display = pathEl.style.display === 'none' ? 'none' : '';
            document.getElementById('particle-container').appendChild(circle);
            const particle = { element: circle, pathEl, pathLength, progress: 0, speed, reverse, onComplete };
            this.positionParticle(particle);
            this.particles.push(particle);
        },
        runParticleRoute(route, color, speed, onComplete) {
            const [segment, ...remaining] = route;
            if (!segment) return onComplete?.();
            this.sendParticle(segment.pathId, color, speed, Boolean(segment.reverse), () => {
                this.runParticleRoute(remaining, color, speed, onComplete);
            });
        },
        positionParticle(particle) {
            const distance = (particle.reverse ? 1 - particle.progress : particle.progress) * particle.pathLength;
            const point = particle.pathEl.getPointAtLength(distance);
            particle.element.setAttribute('cx', point.x);
            particle.element.setAttribute('cy', point.y);
        },
        addPeriodicParticles(pathId, color, intervalMs, speed = 1.5, initialDelay = 0) {
            const pathEl = document.getElementById(`path-${pathId}`);
            if (!pathEl) return;
            this.particleGenerators.push({ pathEl, pathId, color, intervalMs, speed,
                nextSpawnTime: this.animationTime + initialDelay });
        },
        clearParticles() {
            this.animationEpoch = (this.animationEpoch || 0) + 1;
            this.animationTasks = [];
            this.particleGenerators = [];
            this.particles = [];
            this.broadcast = null;
            document.getElementById('particle-container')?.replaceChildren();
            document.getElementById('node-mediaserver')?.classList.remove('broadcast-received');
        },
        setPlayback(playing) {
            this.isPlaying = playing;
            const context = window.soundSys?.ctx;
            if (context && context.state !== 'closed') {
                const operation = playing ? context.resume() : context.suspend();
                operation.catch(() => {});
            }
            this.lastTimestamp = performance.now();
            const button = document.getElementById('btn-play-pause');
            if (button) button.innerHTML = playing ? this.getTranslations().pause : this.getTranslations().play;
        },
        startAnimationLoop() {
            const loop = timestamp => {
                const elapsed = this.lastTimestamp ? Math.min(timestamp - this.lastTimestamp, 100) : 0;
                this.lastTimestamp = timestamp;
                if (this.isPlaying) this.updateParticles(timestamp, elapsed * this.speed);
                this.animationFrameId = requestAnimationFrame(loop);
            };
            this.animationFrameId = requestAnimationFrame(loop);
        },
        updateParticles(timestamp, delta) {
            this.animationTime += delta;
            const due = this.animationTasks.filter(task => task.at <= this.animationTime);
            this.animationTasks = this.animationTasks.filter(task => task.at > this.animationTime);
            due.forEach(task => { if (task.epoch === this.animationEpoch) task.callback(); });
            this.particleGenerators.forEach(generator => {
                if (this.animationTime < generator.nextSpawnTime) return;
                generator.nextSpawnTime = this.animationTime + generator.intervalMs;
                this.sendParticle(generator.pathId, generator.color, generator.speed);
            });
            // Snapshot the list so particles created by arrivals start on the next frame.
            [...this.particles].forEach(particle => {
                particle.progress = Math.min(1, particle.progress + particle.speed * delta / (1000 / 60) / particle.pathLength);
                this.positionParticle(particle);
                if (particle.progress < 1) return;
                particle.element.remove();
                this.particles.splice(this.particles.indexOf(particle), 1);
                particle.onComplete?.();
            });
        }
    });
})(window.QnexApp.services.QnexSimulator);
