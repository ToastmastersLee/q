/** HTML device-node renderer for the topology canvas. */
(function (Simulator) {
    const fallbackImage = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='30'><rect width='50' height='30' fill='%23334155'/></svg>";

    function createExtraVisual(device) {
        if (device.id.startsWith('ifp') || device.id.startsWith('disp')) {
            return `<div class="screen-preview" id="screen-${device.id}">
                <div class="screen-badge">ON</div>
                <div class="screen-text">准备就绪</div>
            </div>`;
        }
        if (device.id.startsWith('spk')) {
            return `<div class="speaker-soundwaves" id="waves-${device.id}">
                <span></span><span></span><span></span>
            </div>`;
        }
        return '';
    }

    Object.assign(Simulator.prototype, {
        renderDeviceNodes(container) {
            Object.entries(TOPOLOGY_DATA.positions).forEach(([deviceId, position]) => {
                const device = TOPOLOGY_DATA.devices[deviceId];
                if (!device || !this.isDeviceVisible(deviceId)) return;
                container.appendChild(this.createDeviceNode(device, position));
            });
        },

        createDeviceNode(device, position) {
            const node = document.createElement('div');
            node.id = `node-${device.id}`;
            node.className = `topology-node node-${device.category}`;
            Object.assign(node.style, {
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: `${position.w}px`,
                height: `${position.h}px`
            });

            const genericName = this.localizedDeviceValue(device, 'genericName');
            node.innerHTML = `
                <div class="node-badge-container">
                    <span class="node-model-badge">${device.model}</span>
                    <span class="node-status-dot online"></span>
                </div>
                <div class="node-img-wrapper">
                    <img src="${device.image}" alt="${device.name}" class="node-product-img">
                    ${createExtraVisual(device)}
                </div>
                <div class="node-caption">
                    <div class="node-generic-name">${genericName}</div>
                </div>
            `;
            const image = node.querySelector('.node-product-img');
            image.addEventListener('error', () => { image.src = fallbackImage; }, { once: true });
            node.addEventListener('click', () => {
                this.selectDevice(device.id);
                window.soundSys?.playClick();
            });
            return node;
        }
    });
})(window.QnexApp.services.QnexSimulator);
