if (!globalThis.DisplayAssets) {
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

}
if (!globalThis.DeviceFootprints) {
(()=>{var i={modelId:"iqboard.irqk-60c",label:"IRQK-60C",dimensions:{widthMm:1141,heightMm:1194,depthMm:142.5},dimensionSource:"Smart Classroom 104 MEMO pair. Width and adjustment ranges from the project equipment register. Height is the selected frame setting. Depth includes the tray in the project drawing model.",frameDepthMm:85,frameHeightRangeMm:[1169,1215],wallStandoffRangeMm:[110,155],portDefs:[]};var d={...i.dimensions,frameHeightRangeMm:i.frameHeightRangeMm,wallStandoffRangeMm:i.wallStandoffRangeMm,centreOffsetMm:(i.dimensions.depthMm-i.frameDepthMm)/2};var r={modelId:"qnex.ndp200",label:"NDP200",dimensions:{widthMm:870,depthMm:609,heightMm:1212},envelope:"closed",anchor:"closed-top-centre-projected-on-support",dimensionSource:"AISpeech/assets/ndp200/README.md",portSource:"SystemArchitecture/js/data/devices-infrastructure.js#ndp200",portDefs:[{portKey:"hdmi-in-1",medium:"hdmi",direction:"in"},{portKey:"hdmi-in-2",medium:"hdmi",direction:"in"},{portKey:"hdmi-in-3",medium:"hdmi",direction:"in"},{portKey:"hdmi-out-1",medium:"hdmi",direction:"out"},{portKey:"hdmi-out-2",medium:"hdmi",direction:"out"}]};function m(){let{widthMm:e,depthMm:t,heightMm:n}=r.dimensions;return{width:e/1e3,depth:t/1e3,height:n/1e3}}function f(){let{width:e,height:t,depth:n}=m();return{x:e/.87,y:t/1.212,z:n/.609}}function a(e){let{width:t,depth:n}=m(),o=f(),s=[{part:"closed-footprint",x:-t/2,z:-n/2,width:t,depth:n}];return e.slide&&s.push({part:"open-sliding-cover",x:.848*o.x-t/2,z:-.591*o.z/2,width:t,depth:.591*o.z}),e.shelf&&s.push({part:"open-shelf",x:(-.301-.578)*o.x,z:(.006-.545/2)*o.z,width:.578*o.x,depth:.545*o.z}),s}var h={modelId:"qnex.lcs810-gen2",label:"LCS810 GEN2",brand:"IQVideo",component:"wall-station",dimensions:{widthMm:369.43,heightMm:235.59,depthMm:41.2},activeAreaMm:{width:345.35,height:194.26,offsetY:5},finish:{enclosure:"#515451",glass:"#121518"},dimensionSource:"Emulators/AISpeech/three-demo/src/hall115/SOURCES.md \u2014 K3200N1-D15 factory drawing for the display enclosure",portDefs:[]};var p={widthMm:600,heightMm:1100,depthMm:500};var c=a({slide:!0,shelf:!0}),w=1e3*(Math.max(...c.map(e=>e.x+e.width))-Math.min(...c.map(e=>e.x)));globalThis.DeviceFootprints={"IRQK-60C":d,NDP200:{...r.dimensions,openWidthMm:w},SL100:p,station:h.dimensions};})();

}
// Shared by both classroom planners, including the standalone file:// entry points.
(function () {
    const zones = ['front', 'left', 'right'];
    const {main, auxiliary, models, dimensions, ledByName} = globalThis.DisplayAssets;
    const standardId = (zone, size) => (zone === 'front' ? 'qa1400-pro/' : 'auxiliary-tv/') + size;
    const stamp = s => [s.widthMm, s.heightMm, s.depthMm].join('/');
    // Immutable fingerprints of untagged layouts saved before catalogue IDs were introduced.
    const legacyFront = {65:'1490/920/100',75:'1710/1050/100',86:'1960/1190/100',98:'2220/1340/105',110:'2500/1450/110'};
    const legacyAux = {55:'1226/699/63',65:'1447/823/63',75:'1668/948/67'};
    const legacyLed = {le163md:'3620/2030/62.5', le110ml:'2440/1370/100'};
    const matchesStamp = (values, savedStamp) => stamp(values) === savedStamp;
    function bind(screen, assetId) {
        const values = dimensions(models[assetId]);
        return {...screen, ...values, ...(models[assetId].name && {name:models[assetId].name}), assetId, assetStamp:stamp(values)};
    }
    function resolve(screen) {
        if (!screen) return screen;
        if (screen.size === null) {
            const led = ledByName[screen.name];
            if (!led || screen.zone !== 'front' || screen.customDimensions) return screen;
            const inherited = screen.assetId ? screen.assetId === led && matchesStamp(screen,screen.assetStamp)
                : matchesStamp(screen,legacyLed[led]);
            return inherited ? bind(screen, led) : screen;
        }
        const key = standardId(screen.zone, screen.size);
        if (!models[key]) return screen;
        const aviation = 'qa1400-pro/86-aviation';
        if (screen.assetId) {
            const allowed = screen.assetId === key || (key === 'qa1400-pro/86' && screen.assetId === aviation);
            return allowed && screen.assetStamp === stamp(screen) ? bind(screen, screen.assetId) : screen;
        }
        const saved = stamp(screen);
        if (key === 'qa1400-pro/86' && saved === '1968/1194/87') return bind(screen, aviation);
        if (saved === stamp(models[key]) || saved === (screen.zone === 'front' ? legacyFront : legacyAux)[screen.size]) return bind(screen,key);
        return screen;
    }
    function resolvePlan(plan) {
        return Array.isArray(plan?.screens) ? {...plan, screens:plan.screens.map(resolve)} : plan;
    }
    const mm = (metres) => Math.round(metres * 1000);
    const catalog = (zone) => (zone === 'front' ? main : auxiliary);
    function standard(zone, size, id, x, y) {
        const assetId = standardId(zone, size);
        return bind({
            id: String(id),
            zone,
            size: Number(size),
            name: zone === 'front' ? 'QA1400 Pro' : 'Auxiliary Display',
            offsetMm: zone === 'front' ? 0 : 180,
            x,
            y,
        }, assetId);
    }
    function valid(plan) {
        const dimension = (n) => Number.isSafeInteger(n) && n > 0 && n <= 100000;
        if (!plan || !dimension(plan.stageMm) || !Array.isArray(plan.screens) || plan.screens.length > 300)
            return false;
        const ids = new Set();
        return plan.screens.every((s) => {
            const led = s && ledByName[s.name];
            const knownLedDepth = led && Number.isFinite(s.depthMm) && s.depthMm > 0 && s.depthMm <= 100000 &&
                (s.depthMm === models[led].depthMm || (s.assetId === led && matchesStamp(s,s.assetStamp)) ||
                    s.depthMm === Number(legacyLed[led].split('/')[2]));
            if (
                !s ||
                !zones.includes(s.zone) ||
                typeof s.id !== 'string' ||
                !s.id ||
                s.id.length > 100 ||
                ids.has(s.id) ||
                typeof s.name !== 'string' ||
                !s.name.trim() ||
                s.name.length > 100 ||
                ![s.widthMm, s.heightMm].every(dimension) ||
                !(dimension(s.depthMm) || knownLedDepth) ||
                !Number.isSafeInteger(s.offsetMm) ||
                s.offsetMm < 0 ||
                s.offsetMm > 100000 ||
                !Number.isFinite(s.x) ||
                !Number.isFinite(s.y)
            )
                return false;
            ids.add(s.id);
            if (s.size === null) return true;
            const resolved = resolve(s);
            return Boolean(resolved.assetId && models[resolved.assetId] &&
                (resolved.assetId === standardId(s.zone, s.size) ||
                    (s.zone === 'front' && s.size === 86 && resolved.assetId === 'qa1400-pro/86-aviation')) &&
                resolved.assetStamp === stamp(resolved) && stamp(resolved) === stamp(models[resolved.assetId]));

        });
    }
    function label(s) {
        return s.size ? s.name + ' ' + s.size + '″' : s.name;
    }
    function quotationName(screen) {
        if (screen.size === null) return screen.name;
        const model = screen.zone === 'front' ? screen.name : 'Auxiliary Display / TV';
        return model + ' ' + screen.size + '-inch';
    }
    // Product Comparison IFP §3.1–3.3 uses the visible image height for viewing distance.
    function viewingGuide(depth) {
        return depth <= 5
            ? [[1, 65]]
            : depth <= 6
              ? [[1, 75]]
              : depth <= 8
                ? [[1, 86]]
                : depth <= 10
                  ? [
                        [1, 98],
                        [2, 75],
                    ]
                  : [
                        [1, 110],
                        [2, 86],
                    ];
    }
    const viewingHeight = { 65: 0.8, 75: 0.93, 86: 1.07, 98: 1.22, 110: 1.37 };
    function groups(screens) {
        const grouped = new Map();
        for (const screen of screens) {
            const key = JSON.stringify([
                screen.zone === 'front',
                screen.name,
                screen.size,
                screen.widthMm,
                screen.heightMm,
                screen.depthMm,
            ]);
            if (!grouped.has(key)) grouped.set(key, { screen, count: 0 });
            grouped.get(key).count++;
        }
        return [...grouped.values()];
    }
    function doorSpans(depth) {
        const width = Math.min(1.16, (depth - 0.36) / 2);
        const inset = Math.max(width / 2 + 0.08, Math.min(1.45, depth * 0.2));
        return [inset, depth - inset].map((c) => [mm(c - width / 2), mm(c + width / 2)]);
    }
    function freeSpans(start, end, blocked) {
        const free = [];
        let cursor = start;
        for (const [a, b] of blocked.sort((p, q) => p[0] - q[0])) {
            if (b <= cursor || a >= end) continue;
            if (a > cursor) free.push([cursor, a]);
            cursor = Math.max(cursor, b);
        }
        if (cursor < end) free.push([cursor, end]);
        return free;
    }
    // Try existing centres first. For an edit requiring rearrangement, divide panels
    // between uninterrupted spans; the largest panels have the fewest choices.
    function arrange(items, spans, front, margin, gap, fixed) {
        const axis = front ? 'x' : 'y';
        const extent = (s) => (front ? s.widthMm : s.depthMm);
        const placed = new Map();
        const sorted = [...items].sort((a, b) => a[axis] - b[axis]);
        let previousEnd = -Infinity;
        if (
            sorted.every((s) => {
                const center = s[axis] * 1000,
                    start = center - extent(s) / 2,
                    end = center + extent(s) / 2;
                const fits =
                    start >= previousEnd + gap - 0.001 &&
                    spans.some(([a, b]) => start >= a + margin - 0.001 && end <= b - margin + 0.001);
                previousEnd = end;
                placed.set(s.id, center);
                return fits;
            })
        )
            return placed;
        if (fixed) return null;
        const bins = spans.map(([a, b]) => ({ a, b, left: b - a - margin * 2, items: [] }));
        const ordered = [...items].sort((a, b) => extent(b) - extent(a));
        const required =
            ordered.reduce((total, s) => total + extent(s), 0) +
            Math.max(0, ordered.length - bins.length) * gap;
        if (required > bins.reduce((total, b) => total + Math.max(0, b.left), 0)) return null;
        function fill(i) {
            if (i === ordered.length) return true;
            const seen = new Set(),
                s = ordered[i];
            for (const bin of bins) {
                const available = bin.left - (bin.items.length ? gap : 0);
                if (seen.has(available) || extent(s) > available) continue;
                seen.add(available);
                const left = bin.left;
                bin.items.push(s);
                bin.left = available - extent(s);
                if (fill(i + 1)) return true;
                bin.items.pop();
                bin.left = left;
            }
            return false;
        }
        if (!fill(0)) return null;
        for (const bin of bins) {
            let cursor = bin.a + margin + bin.left / 2;
            bin.items.sort((a, b) => a[axis] - b[axis]);
            for (const s of bin.items) {
                placed.set(s.id, cursor + extent(s) / 2);
                cursor += extent(s) + gap;
            }
        }
        return placed;
    }
    function fit(plan, room, { fixed = false } = {}) {
        const fail = (zone, reason, missing = 0) => ({ status: 'blocked', zone, reason, missing });
        if (!valid(plan) || ![room.width, room.depth, room.height].every((n) => Number.isFinite(n) && n > 0))
            return fail('front', 'dimensions');
        if (plan.stageMm > mm(room.width)) return fail('front', 'stage', plan.stageMm - mm(room.width));
        const ceiling = (y) =>
            room.profile?.mode === 'split' && y >= room.profile.split ? room.profile.rear : room.height;
        const screens = resolvePlan(plan).screens.map((s) => ({ ...s })),
            results = [];
        for (const zone of zones) {
            const front = zone === 'front',
                items = screens.filter((s) => s.zone === zone);
            const start = front ? (mm(room.width) - plan.stageMm) / 2 : 0;
            const blocked = front
                ? (room.stations || []).filter((d) => d.y < 0.8).map((d) => [mm(d.x) - DeviceFootprints.station.widthMm / 2, mm(d.x) + DeviceFootprints.station.widthMm / 2])
                : zone === (room.doorSide || 'right')
                  ? doorSpans(room.depth)
                  : [];
            const spans = freeSpans(start, front ? start + plan.stageMm : mm(room.depth), blocked);
            const free = spans.reduce((sum, [a, b]) => sum + b - a, 0);
            const slack = free - items.reduce((sum, s) => sum + (front ? s.widthMm : s.depthMm), 0);
            if (slack < 0) return fail(zone, 'width', -slack);
            for (const s of items) {
                const height = mm(front ? ceiling(s.y) : Math.max(room.height, room.profile?.rear || 0));
                if (front && (s.y < 0 || Math.max(s.depthMm, s.y * 1000 + s.depthMm / 2) > mm(room.depth)))
                    return fail(zone, 'projection');
                const mount = room.mainHeight;
                if (s.heightMm > height) return fail(zone, 'height', s.heightMm - height);
                if (
                    front &&
                    mount != null &&
                    (s.heightMm / 2 > mm(mount) || s.heightMm / 2 + mm(mount) > height)
                )
                    return fail(
                        zone,
                        'height',
                        Math.ceil(Math.max(s.heightMm / 2 - mm(mount), s.heightMm / 2 + mm(mount) - height)),
                    );
                if (!front && s.offsetMm + s.widthMm > mm(room.width))
                    return fail(zone, 'projection', s.offsetMm + s.widthMm - mm(room.width));
            }
            const roomy = arrange(items, spans, front, 300, 150, fixed);
            const positions = roomy || arrange(items, spans, front, 0, 0, fixed);
            if (!positions) return fail(zone, 'obstacle');
            for (const s of items) {
                if (front) s.x = positions.get(s.id) / 1000;
                else {
                    s.y = positions.get(s.id) / 1000;
                    const center = (s.offsetMm + s.widthMm / 2) / 1000;
                    s.x = zone === 'left' ? center : room.width - center;
                }
            }
            results.push({
                zone,
                slack,
                tight: items.length > 0 && (!roomy || slack <= 600 + (items.length - 1) * 150),
            });
        }
        const leftPanels = screens.filter((s) => s.zone === 'left');
        const rightPanels = screens.filter((s) => s.zone === 'right');
        const projectsAcross = (a, b) => a.offsetMm + a.widthMm + b.offsetMm + b.widthMm > mm(room.width);
        // Leave the opposite wall in place if a projecting panel can slide along its wall.
        for (const b of rightPanels) {
            const across = leftPanels.filter((a) => projectsAcross(a, b));
            if (!across.some((a) => Math.abs(a.y - b.y) * 1000 < (a.depthMm + b.depthMm) / 2)) continue;
            if (fixed) return fail('right', 'opposite');
            const others = [...across, ...rightPanels.filter((p) => p !== b)];
            const blocked = others.map((p) => [p.y * 1000 - p.depthMm / 2, p.y * 1000 + p.depthMm / 2]);
            if ((room.doorSide || 'right') === 'right') blocked.push(...doorSpans(room.depth));
            const spans = freeSpans(0, mm(room.depth), blocked);
            const comfortable = arrange([b], spans, false, 300, 150, false);
            const placement = comfortable || arrange([b], spans, false, 0, 0, false);
            if (!placement) return fail('right', 'opposite');
            b.y = placement.get(b.id) / 1000;
            if (!comfortable) results.find((r) => r.zone === 'right').tight = true;
        }
        for (const a of screens.filter((s) => s.zone === 'left')) {
            for (const b of screens.filter((s) => s.zone === 'right')) {
                if (
                    Math.abs(a.y - b.y) * 1000 < (a.depthMm + b.depthMm) / 2 &&
                    a.offsetMm + a.widthMm + b.offsetMm + b.widthMm > mm(room.width)
                )
                    return fail('right', 'opposite');
            }
        }
        for (const s of screens) {
            if (s.heightMm > mm(ceiling(s.y))) return fail(s.zone, 'height', s.heightMm - mm(ceiling(s.y)));
        }
        return {
            status: results.some((r) => r.tight) ? 'tight' : 'ok',
            plan: { stageMm: plan.stageMm, screens },
            results,
        };
    }
    function nextId(screens) {
        let i = 1;
        while (screens.some((s) => s.id === 'lcd-' + i)) i++;
        return 'lcd-' + i;
    }
    function counts(plan, zone, count, room, size) {
        if (!Number.isInteger(count) || count < 0 || count > 99) return null;
        const current = plan.screens.filter((s) => s.zone === zone);
        const screens = plan.screens.filter((s) => s.zone !== zone || current.indexOf(s) < count);
        for (let i = current.length; i < count; i++)
            screens.push(
                standard(
                    zone,
                    size || (zone === 'front' ? 86 : 55),
                    nextId(screens),
                    room.width / 2,
                    zone === 'front' ? 0.15 : room.depth / 2,
                ),
            );
        return { ...plan, screens };
    }
    // A width edit may replace the stage screens. Editing an individual screen never does.
    function resizeStage(plan, stageMm, room) {
        const candidate = { ...plan, stageMm };
        if (!valid(candidate)) return fit(candidate, room);
        const sides = plan.screens.filter((s) => s.zone !== 'front');
        function placeStage(layout) {
            const placed = fit(layout, room);
            if (!sides.length || placed.status === 'blocked') return placed;
            const positions = new Map(placed.plan.screens.map((s) => [s.id, s]));
            const screens = layout.screens.map((s) => (s.zone === 'front' ? positions.get(s.id) : s));
            const retained = fit({ stageMm, screens }, room, { fixed: true });
            return retained.status === 'blocked' ? placed : retained;
        }
        const original = placeStage(candidate);
        if (
            original.status !== 'blocked' ||
            original.zone !== 'front' ||
            ['stage', 'dimensions'].includes(original.reason)
        )
            return original;

        const previous = plan.screens.filter((s) => s.zone === 'front');
        if (!previous.length) return original;
        const empty = placeStage({ stageMm, screens: sides });
        if (empty.status === 'blocked') return empty;

        const guide = viewingGuide(room.depth);
        const smaller = Object.keys(main)
            .map(Number)
            .filter((size) => size < guide[0][1])
            .reverse();
        function tryConfiguration(count, size) {
            const screens = [...sides];
            for (let i = 0; i < count; i++) {
                const prior = previous[i];
                screens.push(
                    standard(
                        'front',
                        size,
                        prior?.id ?? nextId([...screens, ...previous]),
                        prior?.x ?? room.width / 2,
                        0.15,
                    ),
                );
            }
            return placeStage({ stageMm, screens });
        }
        for (const choices of [guide, smaller.map((size) => [1, size])]) {
            let tight;
            for (const [count, size] of choices) {
                const trial = tryConfiguration(count, size);
                if (trial.status === 'blocked') continue;
                if (!trial.results.find((row) => row.zone === 'front').tight)
                    return { ...trial, replacedBecause: original };
                tight ??= trial;
            }
            if (tight) return { ...tight, replacedBecause: original };
        }
        return { ...empty, replacedBecause: original };
    }
    globalThis.DisplayFit = {
        catalog,
        bind, resolve, resolvePlan, matchesStamp,
        standard,
        valid,
        label,
        quotationName,
        viewingGuide,
        viewingHeight,
        groups,
        doorSpans,
        fit,
        resizeStage,
        counts,
        nextId,
    };
})();
