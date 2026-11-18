window.drawMeetingPlan = function (s, svg) {
  const M = window.Meeting,
    C = window.MeetingCoverage,
    $ = (q) => document.querySelector(q);
  const r = s.room,
    b = M.roomTable(r),
    esc = (x) => String(x).replace(/[&<>]/g, '');
  $('#dimensions').textContent = `${r.width} × ${r.depth} × ${r.height} m`;
  svg.setAttribute('viewBox', `-1.5 -1.2 ${r.width + 3} ${r.depth + 2.4}`);
  let text = (x, y, v, size = 0.23) =>
    `<text x="${x}" y="${y}" text-anchor="middle" fill="${document.documentElement.dataset.theme === 'dark' ? '#d8edf5' : '#173c50'}" font-size="${size}" font-family="sans-serif">${esc(v)}</text>`;
  const micIds = ['s350', 's350b'].slice(0, s.s350Count);
  let overlay =
    '<defs><clipPath id="bounds"><rect width="' +
    r.width +
    '" height="' +
    r.depth +
    '"/></clipPath></defs><g pointer-events="none" clip-path="url(#bounds)">';
  if (s.coverage.camera) {
    const view = C.frustum(r, s.coverage);
    overlay += `<polygon points="${view.footprint.map((p) => p.join(',')).join(' ')}" fill="#429be5" fill-opacity=".16" stroke="#2279b9" stroke-width=".035"/><line x1="${view.origin[0]}" y1="${view.origin[2]}" x2="${view.end[0]}" y2="${view.end[2]}" stroke="#2279b9" stroke-width=".035" stroke-dasharray=".12 .08"/>`;
  }
  if (s.coverage.mic)
    for (const id of micIds) {
      const { x, z } = s.devices[id];
      overlay += `<g transform="translate(${x} ${z})" stroke="#15967d" stroke-width=".032"><circle r="${C.radius}" fill="#15967d" fill-opacity=".08"/>`;
      for (let i = 1; i <= 3; i++)
        overlay += `<circle class="wave" style="animation-delay:-${i * 0.86}s" r="${C.radius}" fill="none"/>`;
      overlay += '</g>';
    }
  overlay += '</g>';
  let out = `<rect x="0" y="0" width="${r.width}" height="${r.depth}" fill="${document.documentElement.dataset.theme === 'dark' ? '#243f50' : '#f8fbfb'}" stroke="#84a8b5" stroke-width=".08"/><rect x="${b.x - b.w / 2}" y="${b.z - b.d / 2}" width="${b.w}" height="${b.d}" rx=".12" fill="#c69d72"/>`;
  for (let i = 0; i < Math.max(2, Math.floor(b.d / 1.1)); i++) {
    let z = b.z - b.d / 2 + ((i + 0.5) * b.d) / Math.max(2, Math.floor(b.d / 1.1));
    for (let x of [b.x - b.w / 2 - 0.4, b.x + b.w / 2 + 0.4])
      out += `<rect x="${x - 0.2}" y="${z - 0.25}" width=".4" height=".5" rx=".1" fill="#6b8999"/>`;
  }
  out += overlay;
  out +=
    `<rect x="${r.width / 2 - 1}" y=".08" width="2" height=".13" fill="#167b8a"/>` +
    text(r.width / 2 - .98, .5, M.t('ifp'), .18) +
    `<circle cx="${r.width / 2}" cy="${C.mount(r).z}" r=".12" fill="#23465d"/>` +
    text(r.width / 2 + .9, .62, M.t('camera'), .18);
  let dx = s.door === 'left' ? 0 : r.width,
    sign = s.door === 'left' ? -1 : 1;
  for (const doorZ of s.doorCount === 2 ? [1.4, r.depth - 1.4] : [r.depth - 1.4])
    out += `<line x1="${dx}" y1="${doorZ - 0.6}" x2="${dx}" y2="${doorZ + 0.6}" stroke="#25a89a" stroke-width=".14"/>`;
  out +=
    `<rect x="${dx + sign * 0.3 - 0.12}" y="${r.depth - 2.45}" width=".24" height=".35" fill="#198799"/>` +
    text(dx + sign * 0.8, r.depth - 2.55, M.t('booking'), 0.19);
  for (const [id, col] of [['laptop', '#2f65aa'], ...micIds.map((id) => [id, '#e69838'])]) {
    let p = s.devices[id];
    out +=
      `<g class="device" data-device="${id}" transform="translate(${p.x} ${p.z})">${id !== 'laptop' ? '<rect x="-.30" y="-.26" width=".60" height=".52" rx=".13" fill="#1d252b"/><rect x="-.23" y=".09" width=".46" height=".09" rx=".04" fill="#8b9499"/><circle cx="0" cy=".13" r=".025" fill="#eee"/>' : `<circle r=".32" fill="${col}"/><text text-anchor="middle" y=".07" fill="white" font-size=".16">PC</text>`}</g>` +
      text(
        p.x,
        p.z + 0.58,
        id === 'laptop' ? M.t(id) : 'S350' + (micIds.length === 2 ? ' ' + (micIds.indexOf(id) + 1) : ''),
        0.19,
      );
  }
  let laptop = s.devices.laptop;
  out += `<rect x="${laptop.x + 0.23}" y="${laptop.z - 0.12}" width=".26" height=".12" rx=".05" fill="#111c22"/>`;
  svg.innerHTML = out;
};
