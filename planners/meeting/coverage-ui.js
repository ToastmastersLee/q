// Shared controls for the SVG plan and the Three.js view.
window.coveragePanel = function (state, change) {
  const panel = document.querySelector('#coverage');
  const words = {
    en: ['Camera field of view', 'Microphone pickup · up to 6 m', 'Wide', 'Tele', 'Pan', 'Tilt'],
    zh: ['摄像头视野', '麦克风拾音 · 最远 6 m', '广角', '长焦', '水平', '俯仰'],
    ko: ['카메라 시야', '마이크 수음 · 최대 6 m', '광각', '망원', '팬', '틸트'],
    mn: ['Камерын харах хүрээ', 'Микрофоны хамрах хүрээ · 6 м хүртэл', 'Өргөн', 'Теле', 'Хэвтээ', 'Босоо'],
    ja: ['カメラ視野', 'マイク集音 · 最大 6 m', '広角', '望遠', 'パン', 'チルト'],
    es: ['Campo de visión', 'Captación · hasta 6 m', 'Gran angular', 'Tele', 'Giro', 'Inclinación'],
    fr: ['Champ de vision', 'Captation · jusqu’à 6 m', 'Grand-angle', 'Télé', 'Panoramique', 'Inclinaison'],
    ar: ['مجال رؤية الكاميرا', 'التقاط الصوت · حتى 6 م', 'واسع', 'مقرب', 'أفقي', 'رأسي'],
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
    '</div><label><input type="checkbox" data-cover="mic"> S350 · <span></span></label>';
  function refresh() {
    const [camera, mic, wide, tele, pan, tilt] = words[Meeting.lang];
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
