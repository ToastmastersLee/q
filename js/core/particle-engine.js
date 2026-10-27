/** Animated signal particle engine. */
(function (Simulator) {
    Object.assign(Simulator.prototype, {
    addPeriodicParticles(pathId, color, intervalMs, speed = 1.5, initialDelay = 0) {
        const pathEl = document.getElementById(`path-${pathId}`);
        if (!pathEl) return;

        const pathLength = pathEl.getTotalLength();
        if (!pathLength) return;

        const pDef = {
            pathEl: pathEl,
            pathLength: pathLength,
            color: color,
            intervalMs: intervalMs,
            speed: speed,
            nextSpawnTime: performance.now() + initialDelay
        };

        this.particleGenerators = this.particleGenerators || [];
        this.particleGenerators.push(pDef);
    },
    clearParticles() {
        this.particleGenerators = [];
        this.particles = [];
        const container = document.getElementById('particle-container');
        if (container) container.innerHTML = '';
    },
    startAnimationLoop() {
        const loop = (timestamp) => {
            if (!this.lastTimestamp) this.lastTimestamp = timestamp;
            const delta = (timestamp - this.lastTimestamp) * this.speed;
            this.lastTimestamp = timestamp;

            if (this.isPlaying) {
                this.updateParticles(timestamp, delta);
            }

            this.animationFrameId = requestAnimationFrame(loop);
        };
        this.animationFrameId = requestAnimationFrame(loop);
    },
    updateParticles(timestamp, delta) {
        const container = document.getElementById('particle-container');
        if (!container) return;

        // 1. Spawn new particles from generators
        if (this.particleGenerators) {
            this.particleGenerators.forEach(gen => {
                if (gen.pathEl.style.display === 'none') return;
                if (timestamp >= gen.nextSpawnTime) {
                    gen.nextSpawnTime = timestamp + gen.intervalMs / this.speed;

                    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                    circle.setAttribute('r', '5');
                    circle.setAttribute('fill', gen.color);
                    circle.setAttribute('class', 'signal-particle');
                    circle.style.filter = 'drop-shadow(0 0 4px ' + gen.color + ')';
                    container.appendChild(circle);

                    this.particles.push({
                        element: circle,
                        pathEl: gen.pathEl,
                        pathLength: gen.pathLength,
                        progress: 0,
                        speed: (gen.speed / gen.pathLength) * (delta / 16)
                    });
                }
            });
        }

        // 2. Advance existing particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.progress += p.speed * this.speed;

            if (p.progress >= 1.0) {
                if (p.element && p.element.parentNode) {
                    p.element.parentNode.removeChild(p.element);
                }
                this.particles.splice(i, 1);
            } else {
                const pt = p.pathEl.getPointAtLength(p.progress * p.pathLength);
                p.element.setAttribute('cx', pt.x);
                p.element.setAttribute('cy', pt.y);
            }
        }
    }
    });
})(window.QnexApp.services.QnexSimulator);
