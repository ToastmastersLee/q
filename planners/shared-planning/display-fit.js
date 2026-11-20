// Shared by both classroom planners, including the standalone file:// entry points.
(function () {
    const zones = ['front', 'left', 'right'];
    // Product Comparison, IFP §4 (outer W × H × D), and SW2 Basic auxiliary display table.
    const main = {
        65: [1490, 920, 100],
        75: [1710, 1050, 100],
        86: [1960, 1190, 100],
        98: [2220, 1340, 105],
        110: [2500, 1450, 110],
    };
    const auxiliary = { 55: [1226, 699, 63], 65: [1447, 823, 63], 75: [1668, 948, 67] };
    const mm = (metres) => Math.round(metres * 1000);
    const catalog = (zone) => (zone === 'front' ? main : auxiliary);
    function standard(zone, size, id, x, y) {
        const [widthMm, heightMm, depthMm] = catalog(zone)[size];
        return {
            id: String(id),
            zone,
            size: Number(size),
            name: zone === 'front' ? 'QA1400 Pro' : 'Auxiliary Display',
            widthMm,
            heightMm,
            depthMm,
            offsetMm: zone === 'front' ? 0 : 180,
            x,
            y,
        };
    }
    function valid(plan) {
        const dimension = (n) => Number.isSafeInteger(n) && n > 0 && n <= 100000;
        if (!plan || !dimension(plan.stageMm) || !Array.isArray(plan.screens) || plan.screens.length > 300)
            return false;
        const ids = new Set();
        return plan.screens.every((s) => {
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
                ![s.widthMm, s.heightMm, s.depthMm].every(dimension) ||
                !Number.isSafeInteger(s.offsetMm) ||
                s.offsetMm < 0 ||
                s.offsetMm > 100000 ||
                !Number.isFinite(s.x) ||
                !Number.isFinite(s.y)
            )
                return false;
            ids.add(s.id);
            const dims = catalog(s.zone)[s.size];
            return (
                s.size === null ||
                (Array.isArray(dims) && dims.every((v, i) => v === [s.widthMm, s.heightMm, s.depthMm][i]))
            );
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
        const screens = plan.screens.map((s) => ({ ...s })),
            results = [];
        for (const zone of zones) {
            const front = zone === 'front',
                items = screens.filter((s) => s.zone === zone);
            const start = front ? (mm(room.width) - plan.stageMm) / 2 : 0;
            const blocked = front
                ? (room.stations || []).filter((d) => d.y < 0.8).map((d) => [mm(d.x) - 360, mm(d.x) + 360])
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
    globalThis.DisplayFit = {
        catalog,
        standard,
        valid,
        label,
        quotationName,
        viewingGuide,
        viewingHeight,
        groups,
        doorSpans,
        fit,
        counts,
        nextId,
    };
})();
