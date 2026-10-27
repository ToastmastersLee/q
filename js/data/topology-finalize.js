/**
 * Final topology helpers and the legacy compatibility alias.
 */
(function (app, root) {
    function pointsToSvgPath(connection) {
        const points = connection.points;
        if (!points || points.length === 0) return '';

        if (connection.pathType === 'linear' || points.length === 2) {
            return `M ${points[0][0]} ${points[0][1]} L ${points[1][0]} ${points[1][1]}`;
        }
        if (connection.pathType === 'curved_above' && points.length === 3) {
            return `M ${points[0][0]} ${points[0][1]} Q ${points[1][0]} ${points[1][1]} ${points[2][0]} ${points[2][1]}`;
        }
        if (connection.pathType === 'cubic' && points.length === 4) {
            return `M ${points[0][0]} ${points[0][1]} C ${points[1][0]} ${points[1][1]}, ${points[2][0]} ${points[2][1]}, ${points[3][0]} ${points[3][1]}`;
        }
        if (connection.pathType === 'orthogonal') {
            return points.slice(1).reduce(
                (path, point) => `${path} L ${point[0]} ${point[1]}`,
                `M ${points[0][0]} ${points[0][1]}`
            );
        }
        return `M ${points.map(point => point.join(' ')).join(' L ')}`;
    }

    Object.values(app.data.topology.devices).forEach(device => {
        if (!device.genericName) device.genericName = device.genericName_zh;
        if (!device.role) device.role = device.role_zh;
        if (!device.zone) device.zone = device.zone_zh;
    });

    app.data.topology.pointsToSvgPath = pointsToSvgPath;
    root.TOPOLOGY_DATA = app.data.topology;
})(window.QnexApp, window);
