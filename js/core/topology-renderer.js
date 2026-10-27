/** SVG boundaries, connections, labels and particle-layer renderer. */
(function (Simulator) {
    const SVG_NS = 'http://www.w3.org/2000/svg';
    const svgElement = (tag, attributes = {}) => {
        const element = document.createElementNS(SVG_NS, tag);
        Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
        return element;
    };

    function createDefinitions(colors) {
        const definitions = svgElement('defs');
        definitions.innerHTML = `
            <marker id="arrow-lan" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="${colors.lan}" />
            </marker>
            <marker id="arrow-hdmi" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="${colors.hdmi}" />
            </marker>
            <marker id="arrow-audio" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="${colors.audio}" />
            </marker>
            <marker id="arrow-wireless" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="${colors.wireless}" />
            </marker>
            <filter id="glow-blue" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="glow-orange" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
        `;
        return definitions;
    }

    function renderCloudBoundary(group, translations) {
        group.appendChild(svgElement('rect', {
            x: 30, y: 30, width: 650, height: 165, rx: 12, class: 'cloud-boundary'
        }));
        const title = svgElement('text', { x: 48, y: 54, class: 'cloud-title' });
        title.textContent = translations?.zones?.cloud_plane || '☁️ Internet / Public Cloud Management Plane';
        group.appendChild(title);
    }

    function renderCampusBoundary(group, translations, canvasHeight) {
        const bottom = canvasHeight - 15;
        const path = svgElement('path', {
            id: 'campus-lan-boundary',
            class: 'campus-lan-boundary',
            d: `M 364 220 L 685 220 Q 695 220, 695 208 L 695 37 Q 695 25, 707 25 L 1408 25 Q 1420 25, 1420 37 L 1420 ${bottom - 12} Q 1420 ${bottom}, 1408 ${bottom} L 364 ${bottom} Q 350 ${bottom}, 350 ${bottom - 12} L 350 232 Q 350 220, 364 220 Z`
        });
        group.appendChild(path);
        const title = svgElement('text', { x: 365, y: 244, class: 'campus-lan-title' });
        title.textContent = translations?.zones?.campus_lan || '🏫 Campus Gigabit LAN (Core Intranet)';
        group.appendChild(title);
    }

    function renderRooms(group, translations, rooms) {
        rooms.forEach(room => {
            group.appendChild(svgElement('rect', {
                x: 770, y: room.y, width: 625, height: room.height || 175, rx: 10, class: 'room-boundary'
            }));
            group.appendChild(svgElement('rect', {
                x: 782, y: room.y + 6, width: 340, height: 18, rx: 4, class: 'room-title-bg'
            }));
            const title = svgElement('text', {
                x: 790, y: room.y + 19, class: 'room-title', 'data-room': room.key
            });
            title.textContent = translations?.zones?.[room.key] || room.key;
            group.appendChild(title);
        });
    }

    function createConnectionPath(connection) {
        const markerType = ['hdmi', 'audio', 'wireless'].includes(connection.type)
            ? connection.type : 'lan';
        const path = svgElement('path', {
            id: `path-${connection.id}`,
            d: TOPOLOGY_DATA.pointsToSvgPath(connection),
            class: `cable-line cable-${connection.type}`,
            stroke: connection.color,
            'stroke-width': 2.5,
            fill: 'none',
            'marker-end': `url(#arrow-${markerType})`
        });
        if (connection.type === 'usb') path.removeAttribute('marker-end');
        if (connection.bidirectional) path.setAttribute('marker-start', 'url(#arrow-lan)');
        if (connection.dashed) path.setAttribute('stroke-dasharray', '6 4');
        const title = svgElement('title');
        title.textContent = `${connection.label} (${connection.type.toUpperCase()})`;
        path.appendChild(title);
        return path;
    }

    function createCableLabel(connection) {
        const switchBranch = connection.from === 'switch';
        if (connection.hideLabel || connection.type === 'hdmi' || switchBranch || connection.points?.length < 2) return null;

        const endIndex = connection.type === 'audio' && connection.pathType === 'cubic' ? 3 : 1;
        const midX = connection.labelPosition?.[0] ?? (connection.points[0][0] + connection.points[endIndex][0]) / 2;
        const midY = connection.labelPosition?.[1] ?? (endIndex === 3
            ? connection.points[1][1]
            : (connection.points[0][1] + connection.points[1][1]) / 2);
        const group = svgElement('g', {
            class: `cable-label-group cable-label-${connection.type}`,
            transform: `translate(${midX}, ${midY})`
        });
        const width = Math.max(76, connection.label.length * 5.3 + 12);
        group.appendChild(svgElement('rect', {
            x: -width / 2, y: -9, width, height: 18, rx: 4, class: 'cable-label-bg'
        }));
        const text = svgElement('text', {
            x: 0, y: 3.5, 'text-anchor': 'middle', class: 'cable-label-text'
        });
        text.textContent = connection.label;
        group.appendChild(text);
        return group;
    }

    Object.assign(Simulator.prototype, {
        renderCanvas() {
            const svg = document.getElementById('topology-svg');
            const nodeContainer = document.getElementById('nodes-container');
            if (!svg || !nodeContainer) return;
            const { canvasWidth, canvasHeight } = this.getTopology().config;
            const board = document.getElementById('topology-board');
            board.dataset.architectureView = this.view;
            board.style.width = `${canvasWidth}px`;
            board.style.height = `${canvasHeight}px`;
            svg.setAttribute('width', canvasWidth);
            svg.setAttribute('height', canvasHeight);
            svg.setAttribute('viewBox', `0 0 ${canvasWidth} ${canvasHeight}`);
            svg.innerHTML = '';
            nodeContainer.innerHTML = '';
            this.renderSvgTopology(svg);
            this.renderDeviceNodes(nodeContainer);
            this.updateBroadcastGuide();
        },

        renderSvgTopology(svg) {
            svg.appendChild(createDefinitions(TOPOLOGY_DATA.config.colors));
            const translations = this.getTranslations();
            const background = svgElement('g', { id: 'bg-group' });
            renderCloudBoundary(background, translations);
            renderCampusBoundary(background, translations, this.getTopology().config.canvasHeight);
            renderRooms(background, translations, this.getTopology().rooms);
            svg.appendChild(background);
            this.renderConnections(svg);
            svg.appendChild(svgElement('g', { id: 'particle-container' }));
        },

        renderConnections(svg) {
            const group = svgElement('g', { id: 'lines-group' });
            this.getTopology().connections.forEach(connection => {
                if (!this.isDeviceVisible(connection.from) || !this.isDeviceVisible(connection.to)) return;
                group.appendChild(createConnectionPath(connection));
                const label = createCableLabel(connection);
                if (label) group.appendChild(label);
            });
            svg.appendChild(group);
        }
    });
})(window.QnexApp.services.QnexSimulator);
