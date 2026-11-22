/**
 * Shared namespace for the build-free System Architecture application.
 * Every script extends this object so the page remains compatible with file://.
 */
(function (root) {
    root.QnexApp = root.QnexApp || {
        data: {
            topology: {
                config: {},
                devices: {},
                positions: {},
                connections: []
            }
        },
        services: {}
    };
})(window);
