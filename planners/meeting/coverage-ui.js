// Shared controls for the SVG plan and the Three.js view.
window.coveragePanel = function (state, change) {
  const panel = document.querySelector('#coverage');
  const radius = MeetingCoverage.radius;
  const diameter = 2 * radius;
  const words = {
    en: ['Camera field of view', '360° pickup', 'Wide', 'Tele', 'Pan', 'Tilt', `Max. radius ${radius} m · diameter ${diameter} m`],
    zh: ['摄像头视野', '360° 全向拾音', '广角', '长焦', '水平', '俯仰', `最大半径 ${radius} m · 直径 ${diameter} m`],
    ko: ['카메라 시야', '360° 전방향 수음', '광각', '망원', '팬', '틸트', `최대 반경 ${radius} m · 지름 ${diameter} m`],
    mn: ['Камерын харах хүрээ', '360° дуу хүлээн авалт', 'Өргөн', 'Теле', 'Хэвтээ', 'Босоо', `Дээд радиус ${radius} м · диаметр ${diameter} м`],
    ja: ['カメラ視野', '360° 全指向性集音', '広角', '望遠', 'パン', 'チルト', `最大半径 ${radius} m・直径 ${diameter} m`],
    es: ['Campo de visión', 'Captación de 360°', 'Gran angular', 'Tele', 'Giro', 'Inclinación', `Radio máx. ${radius} m · diámetro ${diameter} m`],
    fr: ['Champ de vision', 'Captation à 360°', 'Grand-angle', 'Télé', 'Panoramique', 'Inclinaison', `Rayon max. ${radius} m · diamètre ${diameter} m`],
    ar: ['مجال رؤية الكاميرا', 'التقاط الصوت بزاوية 360°', 'واسع', 'مقرب', 'أفقي', 'رأسي', `أقصى نصف قطر ${radius} م · القطر ${diameter} م`],
  };
  panel.innerHTML =
    '<label><input type="checkbox" data-cover="camera"> CV810 Gen 2 · <span></span></label>' +
    '<div class="aim"><label><select data-cover="lens" aria-label="CV810 Gen 2"><option value="wide"></option><option value="tele"></option></select></label>' +
    ['pan', 'tilt']
      .map(
        (key, i) =>
          '<label><span></span> <output></output><input type="range" data-cover="' +
          key +
          '" min="' +
          [-170, -30][i] +
          '" max="' +
          [170, 90][i] +
          '"></label>',
      )
      .join('') +
    '</div><label><input type="checkbox" data-cover="mic"> S350 · <span></span><br><small class="hint"></small></label>';
  function refresh() {
    const [camera, mic, wide, tele, pan, tilt, size] = words[Meeting.lang];
    panel.querySelector('small').textContent = size;
    const labels = panel.querySelectorAll('span');
    [camera, pan, tilt, mic].forEach((v, i) => (labels[i].textContent = v));
    panel.querySelectorAll('option').forEach((opt, i) => {
      opt.textContent = [wide, tele][i] + ' · ' + MeetingCoverage.optics[opt.value].join('° × ') + '°';
    });
    for (const input of panel.querySelectorAll('[data-cover]')) {
      const key = input.dataset.cover;
      if (input.type === 'checkbox') input.checked = state[key];
      else input.value = state[key];
      if (input.type === 'range') input.parentNode.querySelector('output').value = state[key] + '°';
    }
    panel.querySelector('.aim').hidden = !state.camera;
  }
  panel.oninput = (event) => {
    const input = event.target,
      key = input.dataset.cover;
    if (!Object.hasOwn(state, key)) return;
    state[key] =
      input.type === 'range' ? input.valueAsNumber : input.type === 'checkbox' ? input.checked : input.value;
    refresh();
    change();
  };
  refresh();
  return refresh;
};
