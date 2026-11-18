(() => {
  const M = window.Meeting,
    $ = (s) => document.querySelector(s);
  const C = window.MeetingCoverage;
  let s = M.defaults(),
    drag = null;
  s.coverage = C.defaults();
  s.s350Count = 1;
  const panel = coveragePanel(s.coverage, draw);
  const svg = $('#plan');
  M.initTheme();
  $('#language').innerHTML = M.langs.map((l) => `<option value="${l}">${l.toUpperCase()}</option>`).join('');
  function lang() {
    M.setLang($('#language').value || M.lang);
    panel();
    draw();
  }
  $('#language').value = M.lang;
  $('#language').onchange = lang;
  $('#theme').onclick = () => {
    M.theme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
    draw();
  };
  function fields() {
    for (const k of ['width', 'depth', 'height']) $('#' + k).value = s.room[k];
    $('#door').value = s.door;
    $('#doorCount').value = String(s.doorCount || 1);
  }
  function draw() {
    const table = M.roomTable(s.room);
    $('#table-value').value = table.w.toFixed(2) + ' × ' + table.d.toFixed(2) + ' m';
    window.drawMeetingPlan(s, svg, $('#table-size').checked);
  }
  function point(e) {
    let q = svg.createSVGPoint();
    q.x = e.clientX;
    q.y = e.clientY;
    return q.matrixTransform(svg.getScreenCTM().inverse());
  }
  svg.addEventListener('pointerdown', (e) => {
    let target = e.target.closest('[data-device]');
    if (!target) return;
    drag = target.dataset.device;
    svg.setPointerCapture(e.pointerId);
  });
  svg.addEventListener('pointermove', (e) => {
    if (!drag) return;
    let p = point(e),
      b = M.roomTable(s.room);
    s.devices[drag] = {
      x: Math.max(b.x - b.w / 2 + 0.25, Math.min(b.x + b.w / 2 - 0.25, p.x)),
      z: Math.max(b.z - b.d / 2 + 0.25, Math.min(b.z + b.d / 2 - 0.25, p.y)),
    };
    draw();
  });
  svg.addEventListener('pointerup', () => (drag = null));
  svg.addEventListener('pointercancel', () => (drag = null));
  $('#preset').onchange = (e) => {
    if (e.target.value === 'custom') return;
    const values = M.presets[e.target.value];
    ['width', 'depth', 'height'].forEach((key, i) => ($('#' + key).value = values[i]));
  };
  for (let k of ['width', 'depth', 'height'])
    $('#' + k).addEventListener('input', () => ($('#preset').value = 'custom'));
  function apply(reset) {
    let room = {};
    for (const k of ['width', 'depth', 'height']) room[k] = Number($('#' + k).value);
    let next = M.resizeLayout(s, room);
    if (reset) next = M.resetLayout(next);
    let err = M.validate(next);
    $('#error').textContent = err ? M.t(err) : '';
    if (!err) {
      if (reset) Object.assign(s.coverage, { lens: 'wide', pan: 0, tilt: 0 });
      next.coverage = s.coverage;
      s = next;
      panel();
      fields();
      draw();
    }
  }
  $('#table-size').onchange = draw;
  $('#show-labels').onchange = e => svg.classList.toggle('hide-names', !e.target.checked);
  $('#reset-table').onclick = () => {
    s.devices = M.resetLayout(s).devices;
    draw();
  };
  $('#apply').onclick = () => apply(false);
  $('#reset').onclick = () => apply(true);
  $('#s350-count').onchange = (e) => {
    s.s350Count = Number(e.target.value);
    if (s.s350Count === 2 && (!s.devices.s350b || Math.hypot(s.devices.s350b.x-s.devices.s350.x,s.devices.s350b.z-s.devices.s350.z)<.26)) s.devices.s350b = C.secondMic(s.room, s.devices.s350);
    draw();
  };
  $('#door').onchange = (e) => {
    s.door = e.target.value;
    draw();
  };
  $('#doorCount').onchange = (e) => {
    s.doorCount = Number(e.target.value);
    draw();
  };
  $('#open3d').onclick = () => {
    let err = M.validate(s);
    if (err) {
      $('#error').textContent = M.t(err);
      return;
    }
    const url = new URL('three-demo/index.html', location.href);
    url.searchParams.set('lang', M.lang);
    url.searchParams.set('v', '20261118-tabs');
    url.hash = 'plan=' + encodeURIComponent(JSON.stringify(s));
    window.open(url, '_blank', 'noopener');
  };
  fields();
  lang();
})();
