// Classic script for the standalone file:// planners. All dimensions are outer W × H × D, mm.
(function () {
    const models = Object.create(null);
    const main = {}, auxiliary = {};
    function register(assetId, dimensions, style, activeArea) {
        const [widthMm, heightMm, depthMm] = dimensions;
        models[assetId] = {assetId, widthMm, heightMm, depthMm, style, activeArea};
        return dimensions;
    }
    // Product Comparison, IFP §4 and SW2 Basic auxiliary display table.
    for (const [size, dimensions] of Object.entries({
        65:[1490,920,100], 75:[1710,1050,100], 86:[1960,1190,100],
        98:[2220,1340,105], 110:[2500,1450,110]
    })) main[size] = register('qa1400-pro/' + size, dimensions, 'interactive');
    for (const [size, dimensions] of Object.entries({
        55:[1226,699,63], 65:[1447,823,63], 75:[1668,948,67]
    })) auxiliary[size] = register('auxiliary-tv/' + size, dimensions, 'television');
    // Project-specific envelope from the Ethiopian Airlines classroom drawing.
    register('qa1400-pro/86-aviation', [1968,1194,87], 'interactive', [1895,1066]);
    const ledByName = Object.create(null);
    for (const [assetId, name, values] of [
        ['le163md','LE163MD 163″ LED',[3620,2030,62.5]],
        ['le110ml','LE110ML 110″ LED',[2440,1370,100]]
    ]) {
        register(assetId, values, 'led');
        models[assetId].name = name;
        ledByName[name] = assetId;
    }
    register('meeting/generic-ifp', [2000,1130,35], 'meeting');
    // Booth drawings give outer W/H. Depth is the original exhibition estimate.
    register('exhibition/ifp', [1501,930,90], 'exhibition');
    register('exhibition/pd150', [518,300,70], 'exhibition');
    const styles = {
        interactive:{bezelMm:12, chinMm:32, color:0x293036},
        television:{bezelMm:9, chinMm:12, color:0x232a30},
        led:{bezelMm:10, topMm:2.5, chinMm:2.5, color:0x191d20},
        meeting:{bezelMm:40, chinMm:40, color:0x243b49},
        exhibition:{bezelMm:25, chinMm:25, color:0x273b48}
    };
    function dimensions(spec) {
        return {widthMm:spec.widthMm, heightMm:spec.heightMm, depthMm:spec.depthMm};
    }
    globalThis.DisplayAssets = {models, main, auxiliary, ledByName, styles, dimensions};
})();
