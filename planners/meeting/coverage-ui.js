// Shared controls for the SVG plan and the Three.js view.
window.coveragePanel = function (state, change) {
  const panel = document.querySelector('#coverage');
  const radius = MeetingCoverage.radius;
  const testedLimit = 10; // Approximate device-to-speaker distance observed in a field test.
  const words = {
    en: ['Camera field of view', '360° pickup', 'Wide', 'Tele', 'Pan', 'Tilt', `Best within ${radius} m (shown radius). Field-tested limit ≈ ${testedLimit} m.`],
    zh: ['摄像头视野', '360° 全向拾音', '广角', '长焦', '水平', '俯仰', `最佳拾音在 ${radius} 米内（图示半径），实测极限约 ${testedLimit} 米。`],
    ko: ['카메라 시야', '360° 전방향 수음', '광각', '망원', '팬', '틸트', `권장 거리 ${radius} m 이내(표시 반경). 현장 시험 한계 약 ${testedLimit} m.`],
    mn: ['Камерын харах хүрээ', '360° дуу хүлээн авалт', 'Өргөн', 'Теле', 'Хэвтээ', 'Босоо', `Зурагт үзүүлсэн ${radius} м радиус дотор хамгийн сайн. Туршилтаар дээд хязгаар ойролцоогоор ${testedLimit} м.`],
    ja: ['カメラ視野', '360° 全指向性集音', '広角', '望遠', 'パン', 'チルト', `推奨は ${radius} m 以内（図の半径）。実測限界は約 ${testedLimit} m。`],
    es: ['Campo de visión', 'Captación de 360°', 'Gran angular', 'Tele', 'Giro', 'Inclinación', `Óptimo dentro de ${radius} m (radio mostrado). Límite en pruebas ≈ ${testedLimit} m.`],
    fr: ['Champ de vision', 'Captation à 360°', 'Grand-angle', 'Télé', 'Panoramique', 'Inclinaison', `Portée optimale dans un rayon de ${radius} m (illustré). Limite observée en essai ≈ ${testedLimit} m.`],
    ar: ['مجال رؤية الكاميرا', 'التقاط الصوت بزاوية 360°', 'واسع', 'مقرب', 'أفقي', 'رأسي', `أفضل التقاط ضمن ${radius} م (نصف القطر المرسوم). الحد في الاختبار الميداني نحو ${testedLimit} م.`],
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
