// Small shared controller for React, classic script and standalone 3D hosts.
(function () {
    const F = globalThis.DisplayFit;
    const words = {
        en: [
            'Display layout',
            'Stage width (m)',
            'Enter a positive width in metres, to the nearest millimetre.',
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
            'Screen size',
            'Add custom screen',
            'Change dimensions',
            'Next screen size',
            'Available',
            'Select fewer or smaller screens',
        ],
        zh: [
            '液晶屏布局',
            '舞台总宽（米）',
            '请输入大于零的舞台宽度，最多保留三位小数（1 毫米）。',
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
            '屏幕放不进连续空位，请检查设备或门洞位置',
            '两侧屏体相交',
            '请输入有效尺寸',
            '屏幕尺寸',
            '添加自定义屏',
            '修改尺寸',
            '下一台屏幕尺寸',
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
                result.missing
                    ? (lang === 'zh' ? '还差 ' : 'short by ') + Math.ceil(result.missing) / 1000 + ' m'
                    : '',
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
        const addSizes = {};
        let zone = 'front',
            editing = null,
            notice = '',
            previous = '',
            noticeState = 'blocked',
            repairPlan = null;
        const node = (tag, txt) => {
            const n = document.createElement(tag);
            if (txt != null) n.textContent = txt;
            return n;
        };
        function refresh(force = false) {
            const { plan, room, lang } = read(),
                w = words[lang] || words.en;
            const key = JSON.stringify([plan, room, lang, zone, editing, notice, noticeState]);
            if (!force && previous === key) return;
            previous = key;
            const base = repairPlan || plan;
            const result = F.fit(base, room);
            const current = base.screens.filter((s) => s.zone === zone);
            root.replaceChildren();
            const style = node('style');
            style.textContent =
                ':host{display:block;min-width:0;color:inherit;font:inherit}section{padding:12px;border:1px solid #8295a755;border-radius:8px;display:grid;gap:9px}h3,p{margin:0}h3{font-size:14px}label,.row{display:flex;gap:6px;align-items:center;justify-content:space-between;flex-wrap:wrap;font-size:12px}input,select,button{font:inherit;color:inherit;background:transparent;border:1px solid #8295a788;border-radius:5px;padding:5px;max-width:100%;box-sizing:border-box}input[type=number]{width:85px}option{background:Canvas;color:CanvasText}button{cursor:pointer}button:disabled,select:disabled{opacity:.55}output{font-size:12px;line-height:1.45}output[data-state=tight]{color:#b6790c}output[data-state=blocked]{color:#dc5549}output[data-state=adjusted],output[data-state=blocked]{border-inline-start:3px solid #de6652;padding:6px 9px;background:#b7483315}output[data-state=adjusted]{font-weight:600;color:#822d20;background:#fff1ec}small.limit{line-height:1.4}fieldset{margin:0;padding:9px;display:grid;gap:6px;border:1px solid #8295a755}';
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
            function apply(next, feedback = '') {
                notice = feedback;
                noticeState = feedback ? 'adjusted' : 'blocked';
                editing = null;
                repairPlan = null;
                if (save(next.plan) === false) {
                    notice =
                        lang === 'zh'
                            ? '当前场景未能应用这项修改，已保留原配置。'
                            : 'The scene could not apply this change. The previous layout was kept.';
                    noticeState = 'blocked';
                }
                refresh(true);
            }
            function commit(candidate) {
                const next = F.fit(candidate, room);
                if (next.status === 'blocked') {
                    if (result.status === 'blocked' && F.valid(candidate)) {
                        repairPlan = candidate;
                        editing = null;
                    }
                    notice = message(next, lang);
                    noticeState = 'blocked';
                    refresh(true);
                    return;
                }
                apply(next);
            }
            const width = node('input');
            width.type = 'number';
            width.step = '0.001';
            width.min = '0.001';
            width.max = room.width;
            width.value = base.stageMm / 1000;
            field(w[1], width);
            width.onkeydown = (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    width.blur();
                }
            };
            width.onchange = () => {
                const metres = width.valueAsNumber;
                const stageMm = Math.round(metres * 1000);
                if (!Number.isFinite(metres) || width.validity.stepMismatch || stageMm < 1) {
                    notice = w[2];
                    noticeState = 'blocked';
                    refresh(true);
                    return;
                }
                const next = F.resizeStage(base, stageMm, room);
                if (next.status === 'blocked') {
                    notice = message(next, lang);
                    if (next.reason === 'stage')
                        notice +=
                            lang === 'zh'
                                ? '。当前房间宽 ' + room.width + ' 米，请先调整房间宽度。'
                                : '. Room width is ' + room.width + ' m. Increase the room width first.';
                    noticeState = 'blocked';
                    refresh(true);
                    return;
                }
                let feedback = '';
                if (next.replacedBecause) {
                    const describe = (screens) =>
                        F.groups(screens.filter((s) => s.zone === 'front'))
                            .map(
                                ({ screen, count }) =>
                                    count + ' × ' + (screen.size ? screen.size + '″' : screen.name),
                            )
                            .join(' + ');
                    const from = describe(base.screens);
                    const to = describe(next.plan.screens);
                    const why = message(next.replacedBecause, lang);
                    feedback =
                        lang === 'zh'
                            ? '舞台宽度已改为 ' +
                              metres +
                              ' 米。原配置 ' +
                              from +
                              '：' +
                              why +
                              '。' +
                              (to
                                  ? '已自动改为推荐配置 ' + to + '。'
                                  : '没有可安装的标准主屏，主屏数量已设为 0。可输入自定义屏尺寸。')
                            : 'Stage width changed to ' +
                              metres +
                              ' m. ' +
                              from +
                              ' — ' +
                              why +
                              '. ' +
                              (to
                                  ? 'Switched to the recommended ' + to + '.'
                                  : 'No standard screen fits. Stage screen count is now 0. You can enter custom dimensions.');
                    delete addSizes.front;
                }
                apply(next, feedback);
            };
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
            const seedSize =
                addSizes[zone] ?? current[current.length - 1]?.size ?? (zone === 'front' ? 86 : 55);
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
            select(
                countOptions,
                current.length,
                (v) => commit(F.counts(base, zone, Number(v), room, seedSize)),
                w[7],
            );
            const sizeLimits = new Map();
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
                    if (test.status === 'blocked' && result.status !== 'blocked') {
                        const reason = message(test, lang, zone);
                        if (!sizeLimits.has(reason)) sizeLimits.set(reason, []);
                        sizeLimits.get(reason).push('#' + (index + 1) + ' · ' + size + '″');
                    }
                    return [
                        size,
                        size + '″',
                        test.status === 'blocked' && result.status !== 'blocked',
                        message(test, lang, zone),
                    ];
                });
                options.push(['custom', s.size === null ? s.name : w[8]]);
                select(
                    options,
                    s.size ?? 'custom',
                    (v) => {
                        if (v === 'custom') {
                            editing = s.id;
                            notice = '';
                            refresh(true);
                        } else {
                            delete addSizes[zone];
                            commit(change(Number(v)));
                        }
                    },
                    w[27] + ' #' + (index + 1),
                    row,
                );
                if (s.size === null)
                    button(
                        w[29],
                        () => {
                            editing = s.id;
                            refresh(true);
                        },
                        row,
                    );
                button(
                    w[16],
                    () => commit({ ...base, screens: base.screens.filter((p) => p.id !== s.id) }),
                    row,
                );
            }
            const nextSizes = zoneSizes.map((size) => {
                const trial = F.fit(F.counts(base, zone, current.length + 1, room, size), room);
                const disabled = trial.status === 'blocked';
                const reason = disabled ? message(trial, lang, zone) : '';
                if (disabled) {
                    if (!sizeLimits.has(reason)) sizeLimits.set(reason, []);
                    sizeLimits.get(reason).push(w[30] + ' ' + size + '″');
                }
                return [size, size + '″', disabled, reason];
            });
            select(
                nextSizes,
                seedSize,
                (v) => {
                    addSizes[zone] = Number(v);
                    notice = '';
                    refresh(true);
                },
                w[30],
            );
            button(w[28], () => {
                editing = 'new';
                notice = '';
                refresh(true);
            });
            const output = node('output');
            output.setAttribute('role', notice ? 'alert' : 'status');
            output.setAttribute('aria-atomic', 'true');
            if (notice && !editing) width.parentElement.after(output);
            else box.append(output);
            output.dataset.state = notice ? noticeState : result.status;
            output.textContent = notice || message(result, lang, zone);
            if (!editing) {
                function showLimit(text) {
                    const hint = node('small', text);
                    hint.className = 'limit';
                    box.append(hint);
                }
                if (firstBlocked) {
                    showLimit(
                        (lang === 'zh'
                            ? '按下一台 ' + seedSize + '″ 增至 ' + firstBlocked.n + ' 台：'
                            : 'Increasing to ' + firstBlocked.n + ' with another ' + seedSize + '″: ') +
                            message(firstBlocked.trial, lang, zone),
                    );
                }
                if (sizeLimits.size) {
                    const details = node('details');
                    details.append(
                        node('summary', lang === 'zh' ? '哪些尺寸受限？' : 'Which sizes are unavailable?'),
                    );
                    for (const [reason, entries] of sizeLimits)
                        details.append(node('p', entries.join(', ') + ' · ' + reason));
                    box.append(details);
                }
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
            const applyButton = button(w[14], () => commit(candidate()), form);
            function preview() {
                const r = F.fit(candidate(), room);
                applyButton.disabled =
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
                noticeState = 'blocked';
                refresh(true);
            },
        };
    }
    globalThis.DisplayEditor = { bind, message };
})();
