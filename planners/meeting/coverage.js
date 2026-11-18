// Product optics and tabletop pickup in metres. Both renderers consume these coordinates.
window.MeetingCoverage = (() => {
  const optics = { wide: [80, 42], tele: [8, 3.5] };
  const defaults = () => ({ lens: 'wide', pan: 0, tilt: 0, camera: false, mic: false });
  const mount = (room) => ({ x: room.width / 2, y: Math.min(2.23, room.height - 0.19), z: 0.32 });
  const rad = (degrees) => (degrees * Math.PI) / 180;
  const dot = (a, b) => a.reduce((sum, n, i) => sum + n * b[i], 0);
  const add = (a, b, scale = 1) => a.map((n, i) => n + b[i] * scale);
  const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  function valid(v) {
    return (
      v &&
      Object.keys(optics).includes(v.lens) &&
      Number.isFinite(v.pan) &&
      Math.abs(v.pan) <= 170 &&
      Number.isFinite(v.tilt) &&
      v.tilt >= -30 &&
      v.tilt <= 90 &&
      typeof v.camera === 'boolean' &&
      typeof v.mic === 'boolean'
    );
  }
  function secondMic(room, first) {
    const b = Meeting.roomTable(room);
    return { x: b.x, z: b.z + (first.z <= b.z ? 1 : -1) * b.d * 0.25 };
  }
  // Intersect the four optical half-spaces with the six room half-spaces.
  // Each plane is n.p <= k. Sorting its vertices gives the clipped mesh faces.
  function frustum(room, settings, anchor = mount(room)) {
    const pan = rad(settings.pan),
      tilt = rad(settings.tilt);
    const forward = [Math.sin(pan) * Math.cos(tilt), Math.sin(tilt), Math.cos(pan) * Math.cos(tilt)];
    const right = [Math.cos(pan), 0, -Math.sin(pan)],
      up = cross(forward, right);
    const origin = add([anchor.x, anchor.y + 0.21 * 0.55, anchor.z], forward, 0.2575 * 0.55);
    const [horizontal, vertical] = optics[settings.lens].map((a) => Math.tan(rad(a) / 2));
    const planes = [
      [[1, 0, 0], room.width],
      [[-1, 0, 0], 0],
      [[0, 1, 0], room.height],
      [[0, -1, 0], 0],
      [[0, 0, 1], room.depth],
      [[0, 0, -1], 0],
    ];
    for (const [axis, tangent] of [
      [right, horizontal],
      [up, vertical],
    ]) {
      for (const sign of [-1, 1]) {
        const n = add(
          axis.map((v) => v * sign),
          forward,
          -tangent,
        );
        planes.push([n, dot(n, origin)]);
      }
    }
    const vertices = [],
      eps = 1e-7;
    for (let i = 0; i < planes.length; i++)
      for (let j = 0; j < i; j++)
        for (let k = 0; k < j; k++) {
          const [a, u] = planes[i],
            [b, v] = planes[j],
            [c, w] = planes[k];
          const bc = cross(b, c),
            det = dot(a, bc);
          if (Math.abs(det) < eps) continue;
          const point = add(
            add(
              bc.map((n) => n * u),
              cross(c, a),
              v,
            ),
            cross(a, b),
            w,
          ).map((n) => n / det);
          if (planes.some(([n, max]) => dot(n, point) > max + eps)) continue;
          if (!vertices.some((p) => p.every((n, i) => Math.abs(n - point[i]) < eps))) vertices.push(point);
        }
    const faces = [];
    for (const [normal, k] of planes) {
      const face = vertices.filter((p) => Math.abs(dot(normal, p) - k) < eps);
      if (face.length < 3) continue;
      const center = face.reduce((s, p) => add(s, p, 1 / face.length), [0, 0, 0]);
      const u = add(face[0], center, -1),
        v = cross(normal, u);
      const length = Math.hypot(...normal);
      const angle = (p) => {
        const d = add(p, center, -1);
        return Math.atan2(dot(d, v) / length, dot(d, u));
      };
      faces.push(face.sort((a, b) => angle(a) - angle(b)));
    }
    const exits = planes
      .slice(0, 6)
      .filter(([n]) => dot(n, forward) > eps)
      .map(([n, k]) => (k - dot(n, origin)) / dot(n, forward));
    return {
      faces,
      footprint: hull(vertices.map(([x, , z]) => [x, z])),
      origin,
      end: add(origin, forward, Math.max(0, Math.min(...exits))),
    };
  }
  function hull(points) {
    const sorted = points.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    function half(list) {
      const out = [];
      for (const p of list) {
        while (out.length >= 2) {
          const a = out.at(-2),
            b = out.at(-1);
          if ((b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]) > 1e-9) break;
          out.pop();
        }
        out.push(p);
      }
      return out.slice(0, -1);
    }
    return [...half(sorted), ...half([...sorted].reverse())];
  }
  return { defaults, valid, optics, mount, secondMic, frustum, radius: 6 };
})();
