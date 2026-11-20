// Small shared controller for React, classic script and standalone 3D hosts.
(function () {
    const F = globalThis.DisplayFit;
    const words = {
        en: [
            'Display layout',
            'Stage width (m)',
            'Confirm width',
            'Stage',
            'Left wall',
            'Right wall',
            'Installation area',
            'Screen count',
            'Custom dimensions',
            'Device name',
            'Width (mm)',
            'Height (mm)',
            'Thickness (mm)',
            'Bracket offset (mm)',
            'Apply',
            'Cancel',
            'Remove',
            'Remaining',
            'Tight · not recommended',
            'Cannot install',
            'Stage exceeds room width',
            'Insufficient width',
            'Insufficient mounting height',
            'Insufficient inward space',
            'No continuous space at this position',
            'Opposite side panels overlap',
            'Enter valid dimensions',
            'Confirm the measured stage width to configure screens',
            'Add custom screen',
            'Change dimensions',
            'Locked for this plan',
            'Available',
            'Select fewer or smaller screens',
        ],
        zh: [
            '液晶屏布局',
            '舞台总宽（米）',
            '确认宽度',
            '舞台',
            '左侧墙',
            '右侧墙',
            '安装区域',
            '屏幕数量',
            '自定义尺寸',
            '设备名称',
            '整机宽（毫米）',
            '整机高（毫米）',
            '整机厚（毫米）',
            '支架离墙距离（毫米）',
            '应用',
            '取消',
            '移除',
            '剩余',
            '紧凑 · 不推荐',
            '无法安装',
            '舞台比房间宽',
            '可安装宽度不足',
            '可安装高度不足',
            '向室内伸出空间不足',
            '当前位置没有连续安装空间',
            '两侧屏体相交',
            '请输入有效尺寸',
            '请先确认实测舞台宽度，再配置屏幕',
            '添加自定义屏',
            '修改尺寸',
            '本方案已锁定',
            '可安装',
            '建议减小尺寸或减少台数',
        ],
    };
    const zoneIndex = { front: 3, left: 4, right: 5 },
        reasons = {
            stage: 20,
            width: 21,
            height: 22,
            projection: 23,
            obstacle: 24,
            opposite: 25,
            dimensions: 26,
        };
    function message(result, lang, zone = 'front') {
        const w = words[lang] || words.en;
        if (result.status === 'blocked')
            return [
                w[19],
                w[zoneIndex[result.zone]],
                w[reasons[result.reason]],
                result.missing ? Math.ceil(result.missing) + ' mm' : '',
            ]
                .filter(Boolean)
                .join(' · ');
        const row = result.results.find((r) => r.zone === zone);
        return [w[row.tight ? 18 : 31], w[17] + ' ' + Math.round(row.slack) + ' mm', row.tight ? w[32] : '']
            .filter(Boolean)
            .join(' · ');
    }
    function bind(host, read, save) {
        const root = host.shadowRoot || host.attachShadow({ mode: 'open' });
        const addSizes = { front: 86, left: 55, right: 55 };
        let zone = 'front',
            editing = null,
            notice = '',
            previous = '',
            draftWidth = null,
            repairPlan = null;
        const node = (tag, txt) => {
            const n = document.createElement(tag);
            if (txt != null) n.textContent = txt;
            return n;
        };
        function refresh(force = false) {
            const { plan, locked, room, lang } = read(),
                w = words[lang] || words.en;
            const key = JSON.stringify([plan, locked, room, lang, zone, editing, notice]);
            if (!force && previous === key) return;
            previous = key;
            const inputWidth = locked ? plan.stageMm / 1000 : (draftWidth ?? plan.stageMm / 1000);
            const base = { ...(repairPlan || plan), stageMm: Math.round(Number(inputWidth) * 1000) };
            const result = F.fit(base, room);
            const current = base.screens.filter((s) => s.zone === zone);
            root.replaceChildren();
            const style = node('style');
            style.textContent =
                ':host{display:block;min-width:0;color:inherit;font:inherit}section{padding:12px;border:1px solid #8295a755;border-radius:8px;display:grid;gap:9px}h3,p{margin:0}h3{font-size:14px}label,.row{display:flex;gap:6px;align-items:center;justify-content:space-between;flex-wrap:wrap;font-size:12px}input,select,button{font:inherit;color:inherit;background:transparent;border:1px solid #8295a788;border-radius:5px;padding:5px;max-width:100%;box-sizing:border-box}input[type=number]{width:85px}option{background:Canvas;color:CanvasText}button{cursor:pointer}button:disabled,select:disabled{opacity:.55}output{font-size:12px;line-height:1.45}output[data-state=tight]{color:#b6790c}output[data-state=blocked]{color:#dc5549}fieldset{margin:0;padding:9px;display:grid;gap:6px;border:1px solid #8295a755}';
            root.append(style);
            const box = node('section');
            root.append(box);
            box.append(node('h3', w[0]));
            function field(title, control, parent = box) {
                const label = node('label');
                control.setAttribute('aria-label', title);
                label.append(node('span', title), control);
                parent.append(label);
                return control;
            }
            function button(title, fn, parent = box) {
                const b = node('button', title);
                b.type = 'button';
                b.onclick = fn;
                parent.append(b);
                return b;
            }
            function select(options, value, fn, label, parent = box) {
                const s = node('select');
                for (const [v, t, disabled, hint] of options) {
                    const o = new Option(t, v);
                    o.disabled = Boolean(disabled);
                    if (hint) o.title = hint;
                    s.add(o);
                }
                s.value = String(value);
                s.onchange = () => fn(s.value);
                return field(label, s, parent);
            }
            function commit(candidate) {
                const next = F.fit(candidate, room);
                if (next.status === 'blocked') {
                    if (result.status === 'blocked' && F.valid(candidate)) {
                        repairPlan = candidate;
                        editing = null;
                    }
                    notice = message(next, lang);
                    refresh(true);
                    return;
                }
                notice = '';
                editing = null;
                draftWidth = null;
                repairPlan = null;
                save(next.plan);
                refresh(true);
            }
            const width = node('input');
            width.type = 'number';
            width.step = '0.001';
            width.min = '0.001';
            width.max = room.width;
            width.value = inputWidth;
            width.disabled = locked;
            const widthRow = node('div');
            widthRow.className = 'row';
            box.append(widthRow);
            field(w[1], width, widthRow);
            width.oninput = () => {
                draftWidth = width.value;
                notice = '';
            };
            if (!locked)
                button(
                    w[2],
                    () => {
                        const candidate = { ...base, stageMm: Math.round(Number(width.value) * 1000) };
                        if (!width.reportValidity() || !F.valid(candidate)) return;
                        const fit = F.fit(candidate, room);
                        if (fit.status === 'blocked' && fit.reason !== 'stage') {
                            notice = message(fit, lang);
                            draftWidth = width.value;
                            refresh(true);
                            return;
                        }
                        commit(candidate);
                    },
                    widthRow,
                );
            else widthRow.append(node('small', w[30]));
            select(
                Object.entries(zoneIndex).map(([k, i]) => [k, w[i]]),
                zone,
                (v) => {
                    zone = v;
                    editing = null;
                    notice = '';
                    refresh(true);
                },
                w[6],
            );
            const zoneSizes = Object.keys(F.catalog(zone)).map(Number);
            const seedSize = addSizes[zone];
            const addingSize = select(
                zoneSizes.map((size) => [size, size + '″']),
                seedSize,
                (v) => {
                    addSizes[zone] = Number(v);
                    refresh(true);
                },
                lang === 'zh' ? '新增屏幕尺寸' : 'Size for additional screens',
            );
            addingSize.disabled = !locked;
            const max = Math.min(
                99,
                Math.max(
                    current.length + 1,
                    Math.floor(
                        (zone === 'front' ? base.stageMm : room.depth * 1000) /
                            Math.min(
                                ...Object.values(F.catalog(zone)).map((d) =>
                                    zone === 'front' ? d[0] : d[2],
                                ),
                            ),
                    ) + 1,
                ),
            );
            const countOptions = [];
            let firstBlocked;
            for (let n = 0; n <= max; n++) {
                const candidate = F.counts(base, zone, n, room, seedSize);
                const trial = n > current.length ? F.fit(candidate, room) : null;
                const disabled = trial?.status === 'blocked';
                if (disabled && !firstBlocked) firstBlocked = { n, trial };
                countOptions.push([n, String(n), disabled, disabled ? message(trial, lang, zone) : '']);
            }
            const count = select(
                countOptions,
                current.length,
                (v) => commit(F.counts(base, zone, Number(v), room, seedSize)),
                w[7],
            );
            const canEdit =
                locked || (draftWidth !== null && result.status === 'blocked' && result.reason !== 'stage');
            count.disabled = !canEdit;
            for (const [index, s] of current.entries()) {
                const row = node('div');
                row.className = 'row';
                box.append(row);
                const change = (size) => ({
                    ...base,
                    screens: base.screens.map((p) =>
                        p.id === s.id ? F.standard(zone, size, s.id, s.x, s.y) : p,
                    ),
                });
                const options = zoneSizes.map((size) => {
                    const test = F.fit(change(size), room);
                    return [
                        size,
                        size + '″',
                        test.status === 'blocked' && result.status !== 'blocked',
                        message(test, lang, zone),
                    ];
                });
                options.push(['custom', s.size === null ? s.name : w[8]]);
                const choice = select(
                    options,
                    s.size ?? 'custom',
                    (v) => {
                        if (v === 'custom') {
                            editing = s.id;
                            notice = '';
                            refresh(true);
                        } else commit(change(Number(v)));
                    },
                    '#' + (index + 1),
                    row,
                );
                choice.disabled = !canEdit;
                if (s.size === null)
                    button(
                        w[29],
                        () => {
                            editing = s.id;
                            refresh(true);
                        },
                        row,
                    ).disabled = !canEdit;
                button(
                    w[16],
                    () => commit({ ...base, screens: base.screens.filter((p) => p.id !== s.id) }),
                    row,
                ).disabled = !canEdit;
            }
            button(w[28], () => {
                editing = 'new';
                notice = '';
                refresh(true);
            }).disabled = !canEdit;
            const output = node('output');
            output.setAttribute('role', 'status');
            box.append(output);
            output.dataset.state = notice ? 'blocked' : result.status;
            output.textContent =
                notice || (!locked && result.status !== 'blocked' ? w[27] : message(result, lang, zone));
            if (firstBlocked && locked && !editing) {
                const hint = node(
                    'small',
                    w[7] +
                        ' ' +
                        firstBlocked.n +
                        ' (' +
                        (lang === 'zh' ? '新增' : 'add') +
                        ' ' +
                        seedSize +
                        '″) · ' +
                        message(firstBlocked.trial, lang, zone),
                );
                box.append(hint);
            }
            if (zone === 'front' && room.depth > 0 && !editing) {
                const zh = lang === 'zh';
                const recommended = F.viewingGuide(room.depth);
                const guide = recommended
                    .map(([n, size]) => n + ' × ' + size + '″')
                    .join(zh ? ' 或 ' : ' or ');
                const distances = [
                    ...new Set(current.map((s) => s.size).filter((size) => F.viewingHeight[size])),
                ]
                    .map((size) => size + '″ ≤ ' + (6 * F.viewingHeight[size]).toFixed(2) + ' m')
                    .join(' · ');
                box.append(
                    node(
                        'small',
                        (zh ? '按教室深度选型' : 'Room-depth guide') +
                            ' (' +
                            room.depth +
                            ' m) · ' +
                            guide +
                            (distances
                                ? ' · ' +
                                  (zh ? '文字观看距离（6H）' : 'Text viewing distance (6H)') +
                                  ' ' +
                                  distances
                                : ''),
                    ),
                );
                if (
                    current.length &&
                    current.every((s) => s.size !== null) &&
                    current.some((s) =>
                        recommended.some(
                            ([n, size]) =>
                                s.size === size && current.filter((p) => p.size === size).length > n,
                        ),
                    )
                ) {
                    box.append(
                        node(
                            'small',
                            zh
                                ? '智慧推荐：可按上方建议调整尺寸或减少台数。'
                                : 'Consider the recommended screen sizes and counts above.',
                        ),
                    );
                }
            }
            if (!editing) return;
            const old = current.find((s) => s.id === editing);
            const form = node('fieldset');
            form.append(node('legend', w[8]));
            box.insertBefore(form, output);
            const inputs = {};
            for (const [key, i, defaultValue] of [
                ['name', 9, ''],
                ['widthMm', 10, ''],
                ['heightMm', 11, ''],
                ['depthMm', 12, zone === 'front' ? 70 : ''],
                ['offsetMm', 13, zone === 'front' ? null : 180],
            ]) {
                if (defaultValue === null) continue;
                const input = node('input');
                input.type = key === 'name' ? 'text' : 'number';
                input.required = true;
                input.maxLength = 100;
                if (input.type === 'number') {
                    input.min = key === 'offsetMm' ? '0' : '1';
                    input.max = 100000;
                    input.step = '1';
                }
                input.value = old?.[key] ?? defaultValue;
                inputs[key] = field(w[i], input, form);
            }
            function candidate() {
                const screen = {
                    id: old?.id || F.nextId(base.screens),
                    zone,
                    size: null,
                    name: inputs.name.value.trim(),
                    widthMm: Number(inputs.widthMm.value),
                    heightMm: Number(inputs.heightMm.value),
                    depthMm: Number(inputs.depthMm?.value ?? old?.depthMm ?? 70),
                    offsetMm: Number(inputs.offsetMm?.value ?? 0),
                    x: old?.x ?? room.width / 2,
                    y: old?.y ?? (zone === 'front' ? 0.15 : room.depth / 2),
                };
                return {
                    ...base,
                    screens: old
                        ? base.screens.map((s) => (s.id === old.id ? screen : s))
                        : [...base.screens, screen],
                };
            }
            const apply = button(w[14], () => commit(candidate()), form);
            function preview() {
                const r = F.fit(candidate(), room);
                apply.disabled =
                    r.status === 'blocked' && !(result.status === 'blocked' && F.valid(candidate()));
                output.dataset.state = r.status;
                output.textContent = message(r, lang, zone);
            }
            form.oninput = preview;
            preview();
            button(
                w[15],
                () => {
                    editing = null;
                    notice = '';
                    refresh(true);
                },
                form,
            );
        }
        refresh();
        return {
            refresh,
            report(msg) {
                notice = msg;
                refresh(true);
            },
        };
    }
    globalThis.DisplayEditor = { bind, message };
})();
