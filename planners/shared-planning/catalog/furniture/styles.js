// Shared by classic offline 2D pages and the bundled Three.js views. Dimensions are millimetres.
(() => {
  const pickerLabels = {
    en:'Student desks', zh:'学生课桌', fr:'Tables des élèves', es:'Mesas de alumnos',
    it:'Banchi degli studenti', hu:'Tanulói asztalok', ja:'生徒用机', ko:'학생용 책상',
    mn:'Сурагчийн ширээ', ar:'طاولات الطلاب'
  };
  const standard = {
    id: 'classroom-standard', label: {
      en:'Standard classroom', zh:'通用教室双人课桌', fr:'Salle de classe standard', es:'Aula estándar',
      it:'Aula standard', hu:'Normál tanterem', ja:'標準教室', ko:'일반 교실', mn:'Ердийн анги', ar:'فصل دراسي قياسي'
    },
    widthMm:1200, depthMm:550, heightMm:750, topColor:'#c99f73',
    colors:{frame:'#829ca9', seat:'#729baa'},
    seatOffsetX:.27, seatCenterZ:.58, rearExtent:.78
  };
  const smart = {
    id:'smart-classroom-104', label:{en:'Smart Classroom 104', zh:'埃航 Smart Classroom 双人课桌'},
    widthMm:1600, depthMm:800, heightMm:764, topColor:'#bf9d76',
    seatOffsetX:.39, seatCenterZ:.59, rearExtent:.825,
    colors:{frame:'#46494b', seat:'#455256', back:'#292d2f'}
  };
  const teacher = {
    id:'teacher-desk-104', widthMm:1450, depthMm:680, heightMm:764,
    topColor:'#bf9d76', colors:{frame:'#46494b'}
  };
  const meeting = {
    id:'meeting-table', topColor:'#bb8b58', topCenterM:.75, thicknessM:.09,
    colors:{frame:'#69808a',seat:'#486675'},
    maxWidthM:2.2, maxDepthM:5, aisleAllowanceM:3, legInsetM:.15
  };
  function roomTable(room) {
    return {w:Math.min(meeting.maxWidthM, room.width-meeting.aisleAllowanceM),
      d:Math.min(meeting.maxDepthM, room.depth-meeting.aisleAllowanceM),
      x:room.width/2, z:room.depth/2+.25};
  }
  function classroom(id = standard.id) {
    if (id === smart.id) return smart;
    if (id === standard.id) return standard;
    throw new Error('Unknown classroom furniture: '+id);
  }
  // Receive the usable rear clearance from the application (including its wall construction).
  function rows(width, depth, first, last) {
    const columns=Math.max(1,Math.floor(width/3.2));
    const count=Math.max(1,Math.floor((depth-2.5)/2.5));
    const step=count>1 ? (last-first)/(count-1) : 0;
    return Array.from({length:columns*count},(_,index)=>[
      (index%columns+.5)*width/columns, 0, first+Math.floor(index/columns)*step
    ]);
  }
  globalThis.FurnitureCatalog = {standard, smart, teacher, meeting, classroom, roomTable, rows, pickerLabels};
})();
