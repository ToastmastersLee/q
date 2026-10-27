(() => {
  // src/i18n.js
  var i18n = {
    en: {
      title: "General Auditorium LCS Simulation",
      subtitle: "Interactive Camera & Audio Layout Generator",
      teacherCam: "TEACHER CAM (To Stage)",
      studentCam: "STUDENT CAM (To Audience)",
      cv210Cam: "CV210 ePTZ CAM",
      s210Mic: "S210 CEILING MIC",
      dist: "Distance",
      cov: "Coverage",
      warnDist: "WARNING: Exceeds 10m limit!",
      stage: "STAGE AREA",
      audience: "AUDIENCE AREA",
      tCamLbl: "Teacher Cam",
      sCamLbl: "Student Cam",
      cv210Lbl: "CV210",
      s210Lbl: "S210 Mic",
      spk: "Speaker",
      width: "Room Width (m)",
      length: "Room Depth (m)",
      dispSize: "Auxiliary Displays",
      theme: "Theme",
      hubRename: "Hub Name",
      dispRename: "Display Name",
      titleRename: "Project Title",
      cutoffMsg: "10m MAX LIMIT (CANNOT TRACK BEYOND)",
      bestRange: "Best Pickup (6m)",
      limitRange: "Limit Pickup (8m)",
      toggleVis: "Visibility Controls",
      preset: "Room Preset",
      presetCustom: "Custom",
      presetStandard: "Standard Classroom (10x8)",
      presetLarge: "Large Classroom (20x10)",
      presetLecture: "Lecture Hall (15x12)",
      presetUltra: "Ultra-large Hall (37x17)",
      s210Count: "S210 Mics Qty",
      recalculate: "Recalculate",
      deviceStats: "Device BOM Summary",
      addS210: "Add S210",
      spkStats: "Wall Speaker",
      dispStats: "Auxiliary Displays",
      largeScreen: "Large Screen / IFP",
      rotate90: "Rotate 90\xB0",
      mixerStats: "Audio Mixer (A3006)",
      paramTitle: "Device Specifications",
      paramS210: "S210 Ceiling Mic",
      paramS210Best: "Best Pickup: Radius 6m (Dia 12m)",
      paramS210Limit: "Limit Pickup: Radius 8m (Dia 16m)",
      paramTcam: "Teacher Camera",
      paramTcamSpec: "Lens 8mm, HFOV 43\xB0, Max 10m",
      paramScam: "Student Camera",
      paramScamSpec: "Lens 2.8mm, HFOV 94\xB0, Max 10m",
      exportPng: "Export PNG",
      mixerWarn: "(A3006) Max support is 8 channels!",
      disclaimer: "* Disclaimer: This simulation is for reference only. Actual deployment and coverage may vary depending on on-site construction, acoustic treatment, physical obstacles, and ambient lighting conditions."
    },
    zh: {
      title: "\u901A\u7528\u62A5\u544A\u5385\u5F55\u64AD\u4EFF\u771F\u5E03\u5C40",
      subtitle: "\u4EA4\u4E92\u5F0F\u6444\u50CF\u673A\u4E0E\u97F3\u9891\u5E03\u5C40\u751F\u6210\u5668",
      teacherCam: "\u6559\u5E08\u6444\u50CF\u673A (\u671D\u5411\u8BB2\u53F0)",
      studentCam: "\u5B66\u751F\u6444\u50CF\u673A (\u671D\u5411\u89C2\u4F17)",
      cv210Cam: "CV210 ePTZ\u6444\u50CF\u673A",
      s210Mic: "S210 \u5FC3\u5F62\u6307\u5411\u540A\u9EA6",
      dist: "\u62CD\u6444\u8DDD\u79BB",
      cov: "\u8986\u76D6\u5BBD\u5EA6",
      warnDist: "\u8B66\u544A\uFF1A\u8D85\u8FC7\u6700\u5927\u652F\u6301\u8DDD\u79BB 10 \u7C73\uFF01",
      stage: "\u8BB2\u53F0\u533A\u57DF",
      audience: "\u89C2\u4F17\u5E2D\u533A\u57DF",
      tCamLbl: "\u6559\u5E08\u6444\u50CF\u673A",
      sCamLbl: "\u5B66\u751F\u6444\u50CF\u673A",
      cv210Lbl: "CV210",
      s210Lbl: "S210\u540A\u9EA6",
      spk: "\u97F3\u7BB1",
      width: "\u623F\u95F4\u5BBD\u5EA6 (\u7C73)",
      length: "\u623F\u95F4\u6DF1\u5EA6 (\u7C73)",
      dispSize: "\u8F85\u52A9\u5C4F\u5E55\u5C3A\u5BF8",
      theme: "\u754C\u9762\u4E3B\u9898",
      hubRename: "\u63A7\u5236\u4E2D\u5FC3\u540D\u79F0",
      dispRename: "\u8F85\u52A9\u5C4F\u540D\u79F0",
      titleRename: "\u9879\u76EE\u6807\u9898",
      cutoffMsg: "10\u7C73\u8DDF\u8E2A\u6781\u9650 (\u65E0\u6CD5\u8DDF\u8E2A\u6B64\u533A\u57DF\u5916)",
      bestRange: "\u6700\u4F73\u62FE\u97F3 (6m)",
      limitRange: "\u6781\u9650\u62FE\u97F3 (8m)",
      toggleVis: "\u8BBE\u5907\u663E\u793A\u63A7\u5236 (\u53EF\u9690\u85CF)",
      preset: "\u623F\u95F4\u9884\u8BBE",
      presetCustom: "\u81EA\u5B9A\u4E49",
      presetStandard: "\u6807\u51C6\u6559\u5BA4 (10x8)",
      presetLarge: "\u5927\u578B\u6559\u5BA4 (20x10)",
      presetLecture: "\u9636\u68AF\u6559\u5BA4 (15x12)",
      presetUltra: "\u8D85\u5927\u578B\u6559\u5BA4 (37x17)",
      s210Count: "S210\u9EA6\u514B\u98CE\u6570\u91CF",
      recalculate: "\u91CD\u65B0\u8BA1\u7B97",
      deviceStats: "\u8BBE\u5907\u6E05\u5355\u7EDF\u8BA1",
      addS210: "\u6DFB\u52A0 S210",
      spkStats: "\u58C1\u6302\u97F3\u7BB1",
      dispStats: "\u8F85\u52A9\u663E\u793A\u5C4F",
      largeScreen: "\u5927\u5C4F / IFP",
      rotate90: "\u65CB\u8F6C 90\xB0",
      mixerStats: "\u97F3\u9891\u6DF7\u97F3\u5668 (A3006)",
      paramTitle: "\u8BBE\u5907\u53C2\u6570\u8BF4\u660E",
      paramS210: "S210\u540A\u9876\u9EA6\u514B\u98CE",
      paramS210Best: "\u6700\u4F73\u62FE\u97F3\uFF1A\u534A\u5F84 6m (\u76F4\u5F84 12m)",
      paramS210Limit: "\u6781\u9650\u62FE\u97F3\uFF1A\u534A\u5F84 8m (\u76F4\u5F84 16m)",
      paramTcam: "\u6559\u5E08\u6444\u50CF\u673A",
      paramTcamSpec: "\u955C\u5934 8mm, \u89C6\u89D2 43\xB0, \u6700\u5927\u8DDD\u79BB 10m",
      paramScam: "\u5B66\u751F\u6444\u50CF\u673A",
      paramScamSpec: "\u955C\u5934 2.8mm, \u89C6\u89D2 94\xB0, \u6700\u5927\u8DDD\u79BB 10m",
      exportPng: "\u5BFC\u51FA PNG",
      mixerWarn: "\uFF08A3006\uFF09\u6700\u9AD8\u53EA\u652F\u63018\u8DEF\uFF01",
      disclaimer: "* \u514D\u8D23\u58F0\u660E\uFF1A\u6B64\u4EFF\u771F\u5E03\u5C40\u56FE\u4EC5\u4F9B\u53C2\u8003\u3002\u5B9E\u9645\u8986\u76D6\u8303\u56F4\u548C\u90E8\u7F72\u60C5\u51B5\u53EF\u80FD\u56E0\u73B0\u573A\u65BD\u5DE5\u3001\u58F0\u5B66\u88C5\u4FEE\u73AF\u5883\u3001\u5B89\u88C5\u9AD8\u5EA6\u3001\u7269\u7406\u969C\u788D\u7269\u53CA\u73AF\u5883\u5149\u7167\u6761\u4EF6\u7B49\u56E0\u7D20\u800C\u6709\u6240\u4E0D\u540C\u3002"
    },
    es: {
      title: "Simulaci\xF3n de LCS para Auditorio",
      subtitle: "Generador interactivo de dise\xF1o de audio y c\xE1mara",
      teacherCam: "C\xC1MARA DEL PROFESOR (Hacia el escenario)",
      studentCam: "C\xC1MARA DEL ESTUDIANTE (Hacia el p\xFAblico)",
      cv210Cam: "C\xE1mara ePTZ CV210",
      s210Mic: "MICR\xD3FONO DE TECHO S210",
      dist: "Distancia",
      cov: "Cobertura",
      warnDist: "\xA1ADVERTENCIA: Excede el l\xEDmite de 10m!",
      stage: "\xC1REA DEL ESCENARIO",
      audience: "\xC1REA DEL P\xDABLICO",
      tCamLbl: "C\xE1mara del profesor",
      sCamLbl: "C\xE1mara del estudiante",
      cv210Lbl: "CV210",
      s210Lbl: "Micr\xF3fono S210",
      spk: "Altavoz",
      width: "Ancho de la sala (m)",
      length: "Profundidad de la sala (m)",
      dispSize: "Tama\xF1o de pantalla",
      theme: "Tema",
      hubRename: "Nombre del Hub",
      dispRename: "Nombre de Pantalla",
      titleRename: "T\xEDtulo del proyecto",
      cutoffMsg: "L\xCDMITE M\xC1XIMO DE 10M (NO SE PUEDE SEGUIR M\xC1S ALL\xC1)",
      bestRange: "Captura \xF3ptima (6m)",
      limitRange: "Captura l\xEDmite (8m)",
      toggleVis: "Controles de visibilidad",
      preset: "Preajuste de sala",
      presetCustom: "Personalizado",
      presetStandard: "Aula est\xE1ndar (10x8)",
      presetLarge: "Aula grande (20x10)",
      presetLecture: "Sal\xF3n de conferencias (15x12)",
      presetUltra: "Sal\xF3n ultra grande (37x17)",
      s210Count: "Cant. de micr\xF3fonos S210",
      deviceStats: "Resumen de BOM de dispositivos",
      addS210: "A\xF1adir S210",
      spkStats: "Altavoz de pared",
      dispStats: "Pantalla auxiliar",
      rotate90: "Rotar 90\xB0",
      mixerStats: "Mezclador de audio (A3006)",
      paramTitle: "Especificaciones de Dispositivos",
      paramS210: "Micr\xF3fono de Techo S210",
      paramS210Best: "Captura \xD3ptima: Radio 6m (Di\xE1m 12m)",
      paramS210Limit: "Captura L\xEDmite: Radio 8m (Di\xE1m 16m)",
      paramTcam: "C\xE1mara del Profesor",
      paramTcamSpec: "Lente 8mm, HFOV 43\xB0, M\xE1x 10m",
      paramScam: "C\xE1mara del Estudiante",
      paramScamSpec: "Lente 2.8mm, HFOV 94\xB0, M\xE1x 10m",
      exportPng: "Exportar PNG",
      mixerWarn: "\xA1(A3006) Admite un m\xE1ximo de 8 canales!",
      disclaimer: "* Descargo de responsabilidad: Esta simulaci\xF3n es solo para referencia. El despliegue y la cobertura reales pueden variar seg\xFAn la construcci\xF3n del sitio, el tratamiento ac\xFAstico, los obst\xE1culos f\xEDsicos y las condiciones de iluminaci\xF3n ambiental."
    },
    ja: {
      title: "\u8B1B\u5802\u7528LCS\u30EC\u30A4\u30A2\u30A6\u30C8\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3",
      subtitle: "\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D6\u306A\u30AB\u30E1\u30E9\uFF06\u30AA\u30FC\u30C7\u30A3\u30AA\u914D\u7F6E\u30B8\u30A7\u30CD\u30EC\u30FC\u30BF\u30FC",
      teacherCam: "\u6559\u5E2B\u7528\u30AB\u30E1\u30E9 (\u30B9\u30C6\u30FC\u30B8\u65B9\u5411)",
      studentCam: "\u751F\u5F92\u7528\u30AB\u30E1\u30E9 (\u89B3\u5BA2\u65B9\u5411)",
      cv210Cam: "CV210 ePTZ \u30AB\u30E1\u30E9",
      s210Mic: "S210 \u5929\u4E95\u30DE\u30A4\u30AF",
      dist: "\u8DDD\u96E2",
      cov: "\u30AB\u30D0\u30FC\u7BC4\u56F2",
      warnDist: "\u8B66\u544A\uFF1A10m\u306E\u9650\u754C\u3092\u8D85\u3048\u3066\u3044\u307E\u3059\uFF01",
      stage: "\u30B9\u30C6\u30FC\u30B8\u30A8\u30EA\u30A2",
      audience: "\u89B3\u5BA2\u5E2D\u30A8\u30EA\u30A2",
      tCamLbl: "\u6559\u5E2B\u7528\u30AB\u30E1\u30E9",
      sCamLbl: "\u751F\u5F92\u7528\u30AB\u30E1\u30E9",
      cv210Lbl: "CV210",
      s210Lbl: "S210\u30DE\u30A4\u30AF",
      spk: "\u30B9\u30D4\u30FC\u30AB\u30FC",
      width: "\u90E8\u5C4B\u306E\u5E45 (m)",
      length: "\u90E8\u5C4B\u306E\u5965\u884C\u304D (m)",
      dispSize: "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u30B5\u30A4\u30BA",
      theme: "\u30C6\u30FC\u30DE",
      hubRename: "\u30CF\u30D6\u540D",
      dispRename: "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u540D",
      titleRename: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u540D",
      cutoffMsg: "10m\u5236\u9650 (\u3053\u308C\u4EE5\u4E0A\u306F\u8FFD\u5C3E\u4E0D\u53EF)",
      bestRange: "\u6700\u9069\u96C6\u97F3\u7BC4\u56F2 (6m)",
      limitRange: "\u9650\u754C\u96C6\u97F3\u7BC4\u56F2 (8m)",
      toggleVis: "\u8868\u793A\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB",
      preset: "\u90E8\u5C4B\u306E\u30D7\u30EA\u30BB\u30C3\u30C8",
      presetCustom: "\u30AB\u30B9\u30BF\u30E0",
      presetStandard: "\u6A19\u6E96\u6559\u5BA4 (10x8)",
      presetLarge: "\u5927\u578B\u6559\u5BA4 (20x10)",
      presetLecture: "\u968E\u6BB5\u6559\u5BA4 (15x12)",
      presetUltra: "\u8D85\u5927\u578B\u30DB\u30FC\u30EB (37x17)",
      s210Count: "S210\u30DE\u30A4\u30AF\u6570\u91CF",
      deviceStats: "\u69CB\u6210\u30C7\u30D0\u30A4\u30B9\u4E00\u89A7",
      addS210: "S210\u3092\u8FFD\u52A0",
      spkStats: "\u58C1\u639B\u3051\u30B9\u30D4\u30FC\u30AB\u30FC",
      dispStats: "\u88DC\u52A9\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",
      rotate90: "90\xB0\u56DE\u8EE2",
      mixerStats: "\u30AA\u30FC\u30C7\u30A3\u30AA\u30DF\u30AD\u30B5\u30FC (A3006)",
      paramTitle: "\u4E3B\u8981\u30C7\u30D0\u30A4\u30B9\u4ED5\u69D8",
      paramS210: "S210\u5929\u4E95\u96C6\u97F3\u30DE\u30A4\u30AF",
      paramS210Best: "\u6700\u9069\u96C6\u97F3\uFF1A\u534A\u5F84 6m (\u76F4\u5F84 12m)",
      paramS210Limit: "\u9650\u754C\u96C6\u97F3\uFF1A\u534A\u5F84 8m (\u76F4\u5F84 16m)",
      paramTcam: "\u6559\u5E2B\u8FFD\u5C3E\u7528\u30AB\u30E1\u30E9",
      paramTcamSpec: "\u30EC\u30F3\u30BA 8mm, HFOV 43\xB0, \u6700\u592710m",
      paramScam: "\u751F\u5F92\u4FEF\u77B0\u7528\u30AB\u30E1\u30E9",
      paramScamSpec: "\u30EC\u30F3\u30BA 2.8mm, HFOV 94\xB0, \u6700\u592710m",
      exportPng: "PNG\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8",
      mixerWarn: "(A3006) \u6700\u59278\u30C1\u30E3\u30F3\u30CD\u30EB\u306E\u307F\u5BFE\u5FDC\uFF01",
      disclaimer: "* \u514D\u8CAC\u4E8B\u9805\uFF1A\u3053\u306E\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u306F\u53C2\u8003\u7528\u3067\u3059\u3002\u5B9F\u969B\u306E\u914D\u7F6E\u3068\u30AB\u30D0\u30FC\u7BC4\u56F2\u306F\u3001\u73FE\u5730\u306E\u65BD\u5DE5\u3001\u97F3\u97FF\u8A2D\u8A08\u3001\u969C\u5BB3\u7269\u3001\u74B0\u5883\u306E\u7167\u5EA6\u6761\u4EF6\u306A\u3069\u306B\u3088\u3063\u3066\u7570\u306A\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002"
    },
    ko: {
      title: "\uAC15\uB2F9 LCS \uB808\uC774\uC544\uC6C3 \uC2DC\uBBAC\uB808\uC774\uC158",
      subtitle: "\uB300\uD654\uD615 \uCE74\uBA54\uB77C \uBC0F \uC624\uB514\uC624 \uB808\uC774\uC544\uC6C3 \uC0DD\uC131\uAE30",
      teacherCam: "\uAD50\uC0AC\uC6A9 \uCE74\uBA54\uB77C (\uAC15\uB2E8 \uBC29\uD5A5)",
      studentCam: "\uD559\uC0DD\uC6A9 \uCE74\uBA54\uB77C (\uAC1D\uC11D \uBC29\uD5A5)",
      cv210Cam: "CV210 ePTZ \uCE74\uBA54\uB77C",
      s210Mic: "S210 \uCC9C\uC7A5\uD615 \uB9C8\uC774\uD06C",
      dist: "\uAC70\uB9AC",
      cov: "\uCEE4\uBC84\uB9AC\uC9C0",
      warnDist: "\uACBD\uACE0: 10m \uD55C\uACC4\uB97C \uCD08\uACFC\uD588\uC2B5\uB2C8\uB2E4!",
      stage: "\uAC15\uB2E8 \uAD6C\uC5ED",
      audience: "\uAC1D\uC11D \uAD6C\uC5ED",
      tCamLbl: "\uAD50\uC0AC\uC6A9 \uCE74\uBA54\uB77C",
      sCamLbl: "\uD559\uC0DD\uC6A9 \uCE74\uBA54\uB77C",
      cv210Lbl: "CV210",
      s210Lbl: "S210 \uB9C8\uC774\uD06C",
      spk: "\uC2A4\uD53C\uCEE4",
      width: "\uBC29 \uB108\uBE44 (m)",
      length: "\uBC29 \uAE4A\uC774 (m)",
      dispSize: "\uB514\uC2A4\uD50C\uB808\uC774 \uD06C\uAE30",
      theme: "\uD14C\uB9C8",
      hubRename: "\uD5C8\uBE0C \uC774\uB984",
      dispRename: "\uB514\uC2A4\uD50C\uB808\uC774 \uC774\uB984",
      titleRename: "\uD504\uB85C\uC81D\uD2B8 \uC774\uB984",
      cutoffMsg: "10m \uD55C\uACC4 (\uC774\uD6C4 \uC601\uC5ED\uC740 \uCD94\uC801 \uBD88\uAC00)",
      bestRange: "\uCD5C\uC801 \uC9D1\uC74C \uBC94\uC704 (6m)",
      limitRange: "\uD55C\uACC4 \uC9D1\uC74C \uBC94\uC704 (8m)",
      toggleVis: "\uD45C\uC2DC \uC81C\uC5B4",
      preset: "\uBC29 \uD504\uB9AC\uC14B",
      presetCustom: "\uC0AC\uC6A9\uC790 \uC815\uC758",
      presetStandard: "\uD45C\uC900 \uAD50\uC2E4 (10x8)",
      presetLarge: "\uB300\uD615 \uAD50\uC2E4 (20x10)",
      presetLecture: "\uACC4\uB2E8\uC2DD \uAC15\uC758\uC2E4 (15x12)",
      presetUltra: "\uCD08\uB300\uD615 \uAC15\uB2F9 (37x17)",
      s210Count: "S210 \uB9C8\uC774\uD06C \uC218\uB7C9",
      deviceStats: "\uC7A5\uBE44 BOM \uC694\uC57D",
      addS210: "S210 \uCD94\uAC00",
      spkStats: "\uBCBD\uAC78\uC774 \uC2A4\uD53C\uCEE4",
      dispStats: "\uBCF4\uC870 \uB514\uC2A4\uD50C\uB808\uC774",
      rotate90: "90\xB0 \uD68C\uC804",
      mixerStats: "\uC624\uB514\uC624 \uBBF9\uC11C (A3006)",
      paramTitle: "\uB514\uBC14\uC774\uC2A4 \uC138\uBD80 \uC0AC\uC591",
      paramS210: "S210 \uCC9C\uC7A5\uD615 \uB9C8\uC774\uD06C",
      paramS210Best: "\uCD5C\uC801 \uC218\uC74C: \uBC18\uACBD 6m (\uC9C1\uACBD 12m)",
      paramS210Limit: "\uD55C\uACC4 \uC218\uC74C: \uBC18\uACBD 8m (\uC9C1\uACBD 16m)",
      paramTcam: "\uAD50\uC0AC \uCD94\uC801\uC6A9 \uCE74\uBA54\uB77C",
      paramTcamSpec: "\uB80C\uC988 8mm, HFOV 43\xB0, \uCD5C\uB300 10m",
      paramScam: "\uD559\uC0DD \uBD80\uAC10\uC6A9 \uCE74\uBA54\uB77C",
      paramScamSpec: "\uB80C\uC988 2.8mm, HFOV 94\xB0, \uCD5C\uB300 10m",
      exportPng: "PNG \uB0B4\uBCF4\uB0B4\uAE30",
      mixerWarn: "(A3006) \uCD5C\uB300 8\uCC44\uB110\uB9CC \uC9C0\uC6D0!",
      disclaimer: "* \uBA74\uCC45 \uC870\uD56D: \uBCF8 \uC2DC\uBBAC\uB808\uC774\uC158\uC740 \uCC38\uACE0\uC6A9\uC785\uB2C8\uB2E4. \uC2E4\uC81C \uBC30\uCE58 \uBC0F \uCEE4\uBC84\uB9AC\uC9C0\uB294 \uD604\uC7A5 \uC2DC\uACF5 \uC0C1\uD0DC, \uC74C\uD5A5 \uCC98\uB9AC, \uBB3C\uB9AC\uC801 \uC7A5\uC560\uBB3C \uBC0F \uC8FC\uBCC0 \uC870\uBA85 \uC870\uAC74\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
    },
    it: {
      title: "Simulazione LCS per Aula Magna",
      subtitle: "Generatore interattivo di layout telecamera e audio",
      teacherCam: "TELECAMERA DOCENTE (Verso il palco)",
      studentCam: "TELECAMERA STUDENTI (Verso la platea)",
      cv210Cam: "Telecamera ePTZ CV210",
      s210Mic: "MICROFONO A SOFFITTO S210",
      dist: "Distanza",
      cov: "Copertura",
      warnDist: "ATTENZIONE: Supera il limite di 10m!",
      stage: "AREA PALCO",
      audience: "AREA PLATEA",
      tCamLbl: "Telecamera docente",
      sCamLbl: "Telecamera studenti",
      cv210Lbl: "CV210",
      s210Lbl: "Microfono S210",
      spk: "Altoparlante",
      width: "Larghezza stanza (m)",
      length: "Profondit\xE0 stanza (m)",
      dispSize: "Dimensione display",
      theme: "Tema",
      hubRename: "Nome Hub",
      dispRename: "Nome Display",
      titleRename: "Titolo del progetto",
      cutoffMsg: "LIMITE MASSIMO 10M (IMPOSSIBILE TRACCIARE OLTRE)",
      bestRange: "Ripresa ottimale (6m)",
      limitRange: "Ripresa limite (8m)",
      toggleVis: "Controlli di visibilit\xE0",
      preset: "Preset stanza",
      presetCustom: "Personalizzato",
      presetStandard: "Aula standard (10x8)",
      presetLarge: "Aula grande (20x10)",
      presetLecture: "Aula magna (15x12)",
      presetUltra: "Aula ultra grande (37x17)",
      s210Count: "Q.t\xE0 microfoni S210",
      deviceStats: "Riepilogo BOM dispositivi",
      addS210: "Aggiungi S210",
      spkStats: "Altoparlante a parete",
      dispStats: "Display ausiliario",
      rotate90: "Ruota 90\xB0",
      mixerStats: "Mixer audio (A3006)",
      paramTitle: "Specifiche dei Dispositivi",
      paramS210: "Microfono a Soffitto S210",
      paramS210Best: "Ripresa Ottimale: Raggio 6m (Diam 12m)",
      paramS210Limit: "Ripresa Limite: Raggio 8m (Diam 16m)",
      paramTcam: "Telecamera Docente",
      paramTcamSpec: "Lente 8mm, HFOV 43\xB0, Max 10m",
      paramScam: "Telecamera Studenti",
      paramScamSpec: "Lente 2.8mm, HFOV 94\xB0, Max 10m",
      exportPng: "Esporta PNG",
      mixerWarn: "(A3006) Supporta un massimo di 8 canali!",
      disclaimer: "* Dichiarazione di limitazione di responsabilit\xE0: Questa simulazione \xE8 solo di riferimento. La disposizione e la copertura effettive possono variare a seconda della costruzione del sito, del trattamento acustico, degli ostacoli fisici e delle condizioni di illuminazione ambientale."
    },
    hu: {
      title: "\xC1ltal\xE1nos el\u0151ad\xF3termi LCS szimul\xE1ci\xF3",
      subtitle: "Interakt\xEDv kamera \xE9s audio elrendez\xE9s tervez\u0151",
      teacherCam: "TAN\xC1RI KAMERA (Sz\xEDnpad fel\xE9)",
      studentCam: "DI\xC1K KAMERA (K\xF6z\xF6ns\xE9g fel\xE9)",
      cv210Cam: "CV210 ePTZ kamera",
      s210Mic: "S210 MENNYEZETI MIKROFON",
      dist: "T\xE1vols\xE1g",
      cov: "Lefedetts\xE9g",
      warnDist: "FIGYELMEZTET\xC9S: Meghaladja a 10m-es korl\xE1tot!",
      stage: "SZ\xCDNPAD TER\xDCLET",
      audience: "N\xC9Z\u0150T\xC9R",
      tCamLbl: "Tan\xE1ri kamera",
      sCamLbl: "Di\xE1k kamera",
      cv210Lbl: "CV210",
      s210Lbl: "S210 mikrofon",
      spk: "Hangsz\xF3r\xF3",
      width: "Terem sz\xE9less\xE9ge (m)",
      length: "Terem m\xE9lys\xE9ge (m)",
      dispSize: "Kijelz\u0151 m\xE9ret",
      theme: "T\xE9ma",
      hubRename: "K\xF6zpont neve",
      dispRename: "Kijelz\u0151 neve",
      titleRename: "Projekt c\xEDme",
      cutoffMsg: "10M MAX HAT\xC1R (EZEN T\xDAL NEM K\xD6VETHET\u0150)",
      bestRange: "Legjobb v\xE9tel (6m)",
      limitRange: "Hat\xE1r v\xE9tel (8m)",
      toggleVis: "L\xE1that\xF3s\xE1g vez\xE9rl\xE9se",
      preset: "Terem sablon",
      presetCustom: "Egyedi",
      presetStandard: "Standard oszt\xE1lyterem (10x8)",
      presetLarge: "Nagy oszt\xE1lyterem (20x10)",
      presetLecture: "El\u0151ad\xF3terem (15x12)",
      presetUltra: "Ultra-nagy terem (37x17)",
      s210Count: "S210 mikrofonok sz\xE1ma",
      deviceStats: "Eszk\xF6z BOM \xF6sszes\xEDt\u0151",
      addS210: "S210 hozz\xE1ad\xE1sa",
      spkStats: "Fali hangsz\xF3r\xF3",
      dispStats: "Kieg\xE9sz\xEDt\u0151 kijelz\u0151",
      rotate90: "90\xB0-os forgat\xE1s",
      mixerStats: "Audio kever\u0151 (A3006)",
      paramTitle: "Eszk\xF6z\xF6k Technikai Param\xE9terei",
      paramS210: "S210 Mennyezeti Mikrofon",
      paramS210Best: "Legjobb v\xE9tel: Sug\xE1r 6m (\xC1tm 12m)",
      paramS210Limit: "Hat\xE1r v\xE9tel: Sug\xE1r 8m (\xC1tm 16m)",
      paramTcam: "Tan\xE1ri Kamera",
      paramTcamSpec: "Lencse 8mm, HFOV 43\xB0, Max 10m",
      paramScam: "Di\xE1k Kamera",
      paramScamSpec: "Lencse 2.8mm, HFOV 94\xB0, Max 10m",
      exportPng: "PNG Export\xE1l\xE1sa",
      mixerWarn: "(A3006) Legfeljebb 8 csatorn\xE1t t\xE1mogat!",
      disclaimer: "* Felel\u0151ss\xE9gkiz\xE1r\xE1s: Ez a szimul\xE1ci\xF3 csak t\xE1j\xE9koztat\xF3 jelleg\u0171. A t\xE9nyleges elrendez\xE9s \xE9s lefedetts\xE9g v\xE1ltozhat a helysz\xEDni \xE9p\xEDt\xE9si adotts\xE1gok, akusztikai kezel\xE9s, fizikai akad\xE1lyok \xE9s k\xF6rnyezeti f\xE9nyviszonyok f\xFCggv\xE9ny\xE9ben."
    },
    ar: {
      title: "\u0645\u062D\u0627\u0643\u0627\u0629 \u0646\u0638\u0627\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0645\u062D\u0627\u0636\u0631\u0627\u062A \u0644\u0644\u0642\u0627\u0639\u0627\u062A \u0627\u0644\u0639\u0627\u0645\u0629",
      subtitle: "\u0645\u0648\u0644\u062F \u062A\u0641\u0627\u0639\u0644\u064A \u0644\u0645\u062E\u0637\u0637 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627\u062A \u0648\u0627\u0644\u0635\u0648\u062A\u064A\u0627\u062A",
      teacherCam: "\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u0645\u0639\u0644\u0645 (\u0646\u062D\u0648 \u0627\u0644\u0645\u0646\u0635\u0629)",
      studentCam: "\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u0637\u0644\u0627\u0628 (\u0646\u062D\u0648 \u0627\u0644\u062C\u0645\u0647\u0648\u0631)",
      cv210Cam: "\u0643\u0627\u0645\u064A\u0631\u0627 CV210 ePTZ",
      s210Mic: "\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646 \u0633\u0642\u0641\u064A S210",
      dist: "\u0627\u0644\u0645\u0633\u0627\u0641\u0629",
      cov: "\u0627\u0644\u062A\u063A\u0637\u064A\u0629",
      warnDist: "\u062A\u062D\u0630\u064A\u0631: \u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 10 \u0623\u0645\u062A\u0627\u0631!",
      stage: "\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0645\u0646\u0635\u0629",
      audience: "\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u062C\u0645\u0647\u0648\u0631",
      tCamLbl: "\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u0645\u0639\u0644\u0645",
      sCamLbl: "\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u0637\u0644\u0627\u0628",
      cv210Lbl: "CV210",
      s210Lbl: "\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646 S210",
      spk: "\u0645\u0643\u0628\u0631 \u0635\u0648\u062A",
      width: "\u0639\u0631\u0636 \u0627\u0644\u063A\u0631\u0641\u0629 (\u0645\u062A\u0631)",
      length: "\u0639\u0645\u0642 \u0627\u0644\u063A\u0631\u0641\u0629 (\u0645\u062A\u0631)",
      dispSize: "\u062D\u062C\u0645 \u0627\u0644\u0634\u0627\u0634\u0629",
      theme: "\u0627\u0644\u0645\u0638\u0647\u0631",
      hubRename: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0648\u0632\u0639",
      dispRename: "\u0627\u0633\u0645 \u0627\u0644\u0634\u0627\u0634\u0629",
      titleRename: "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
      cutoffMsg: "\u0623\u0642\u0635\u0649 \u062D\u062F 10 \u0623\u0645\u062A\u0627\u0631 (\u0644\u0627 \u064A\u0645\u0643\u0646 \u0627\u0644\u062A\u062A\u0628\u0639 \u0623\u0628\u0639\u062F \u0645\u0646 \u0630\u0644\u0643)",
      bestRange: "\u0627\u0644\u062A\u0642\u0627\u0637 \u0645\u0645\u062A\u0627\u0632 (6\u0645)",
      limitRange: "\u0627\u0644\u062A\u0642\u0627\u0637 \u0623\u0642\u0635\u0649 (8\u0645)",
      toggleVis: "\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u062A\u062D\u0643\u0645 \u0641\u064A \u0627\u0644\u0631\u0624\u064A\u0629",
      preset: "\u0642\u0648\u0627\u0644\u0628 \u0627\u0644\u063A\u0631\u0641",
      presetCustom: "\u0645\u062E\u0635\u0635",
      presetStandard: "\u0641\u0635\u0644 \u062F\u0631\u0627\u0633\u064A \u0642\u064A\u0627\u0633\u064A (10x8)",
      presetLarge: "\u0641\u0635\u0644 \u062F\u0631\u0627\u0633\u064A \u0643\u0628\u064A\u0631 (20x10)",
      presetLecture: "\u0642\u0627\u0639\u0629 \u0645\u062D\u0627\u0636\u0631\u0627\u062A (15x12)",
      presetUltra: "\u0642\u0627\u0639\u0629 \u0636\u062E\u0645\u0629 (37x17)",
      s210Count: "\u0643\u0645\u064A\u0629 \u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646\u0627\u062A S210",
      deviceStats: "\u0645\u0644\u062E\u0635 \u0641\u0627\u062A\u0648\u0631\u0629 \u0627\u0644\u0623\u062C\u0647\u0632\u0629",
      addS210: "\u0625\u0636\u0627\u0641\u0629 S210",
      spkStats: "\u0645\u0643\u0628\u0631 \u0635\u0648\u062A \u062C\u062F\u0627\u0631\u064A",
      dispStats: "\u0634\u0627\u0634\u0629 \u0625\u0636\u0627\u0641\u064A\u0629",
      rotate90: "\u062A\u062F\u0648\u064A\u0631 90 \u062F\u0631\u062C\u0629",
      mixerStats: "\u062E\u0644\u0627\u0637 \u0635\u0648\u062A\u064A (A3006)",
      paramTitle: "\u0645\u0648\u0627\u0635\u0641\u0627\u062A \u0627\u0644\u0623\u062C\u0647\u0632\u0629",
      paramS210: "\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646 \u0633\u0642\u0641\u064A S210",
      paramS210Best: "\u0627\u0644\u062A\u0642\u0627\u0637 \u0645\u0645\u062A\u0627\u0632: \u0646\u0635\u0641 \u0627\u0644\u0642\u0637\u0631 6\u0645 (\u0627\u0644\u0642\u0637\u0631 12\u0645)",
      paramS210Limit: "\u0627\u0644\u062A\u0642\u0627\u0637 \u0623\u0642\u0635\u0649: \u0646\u0635\u0641 \u0627\u0644\u0642\u0637\u0631 8\u0645 (\u0627\u0644\u0642\u0637\u0631 16\u0645)",
      paramTcam: "\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u0645\u0639\u0644\u0645",
      paramTcamSpec: "\u0639\u062F\u0633\u0629 8\u0645\u0645\u060C \u0632\u0627\u0648\u064A\u0629 43\xB0\u060C \u0623\u0642\u0635\u0649 10\u0645",
      paramScam: "\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u0637\u0644\u0627\u0628",
      paramScamSpec: "\u0639\u062F\u0633\u0629 2.8\u0645\u0645\u060C \u0632\u0627\u0648\u064A\u0629 94\xB0\u060C \u0623\u0642\u0635\u0649 10\u0645",
      exportPng: "\u062A\u0635\u062F\u064A\u0631 PNG",
      disclaimer: "* \u0625\u062E\u0644\u0627\u0621 \u0645\u0633\u0624\u0648\u0644\u064A\u0629: \u0647\u0630\u0647 \u0627\u0644\u0645\u062D\u0627\u0643\u0627\u0629 \u0645\u0631\u062C\u0639\u064A\u0629 \u0641\u0642\u0637. \u0642\u062F \u062A\u062E\u062A\u0644\u0641 \u0627\u0644\u062A\u063A\u0637\u064A\u0629 \u0648\u0627\u0644\u062A\u0631\u0643\u064A\u0628 \u0627\u0644\u0641\u0639\u0644\u064A\u0627\u0646 \u062D\u0633\u0628 \u0638\u0631\u0648\u0641 \u0627\u0644\u0628\u0646\u0627\u0621 \u0641\u064A \u0627\u0644\u0645\u0648\u0642\u0639\u060C \u0648\u0627\u0644\u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0635\u0648\u062A\u064A\u0629\u060C \u0648\u0627\u0644\u0639\u0648\u0627\u0626\u0642 \u0627\u0644\u0645\u0627\u062F\u064A\u0629\u060C \u0648\u0627\u0644\u0625\u0636\u0627\u0621\u0629 \u0627\u0644\u0645\u062D\u064A\u0637\u0629."
    }
  };
  Object.assign(i18n.en, {
    language: "Language",
    themeDark: "Dark",
    themeLight: "Light",
    themeHighContrast: "Extreme HC",
    maximumShort: "Max",
    distanceLimitWarn: "WARNING: Exceeds the {distance}m distance limit!",
    standard: "standard",
    projectOnly: "Project only",
    cameraPackage: "Camera Package",
    cv870Package: "CV870 Pro \xB7 Teacher + Student",
    cv210Package: "CV210 \xB7 Teacher + Student",
    cv210PackageNote: "Budget pair: Teacher HFOV 40\xB0 (typical 5\u201312m), Student HFOV 120\xB0 (typical 1\u201310m). It cannot be mixed with CV870 Pro in a standard complete set.",
    paramCv210Teacher: "HFOV 40\xB0, 4\xD7 digital zoom, typical coverage 5\u201312m; confirm missing ePTZ ranges by datasheet",
    paramCv210Student: "HFOV 120\xB0, 4\xD7 digital zoom, typical coverage 1\u201310m; confirm missing ePTZ ranges by datasheet",
    invalidDimensions: "Enter finite room dimensions greater than 0m before recalculating.",
    stageCoverageWarn: "Teacher full-view coverage is narrower than the drawn stage. Reconfirm camera position, lens coverage and the teacher movement area.",
    typicalRangeWarn: "Outside the camera's typical deployment distance; confirm by datasheet and on site.",
    longDistancePlan: "Long-distance camera plan",
    longTitle: "Long-Distance Camera Alternative (Project Only)",
    longIntro: "Room depth above 12m: replace CV870 Pro independently for teacher and student roles.",
    longTeacher: "Teacher role",
    longStudent: "Student role",
    longStudentQty: "Student camera quantity",
    longRecommend: "Recommendation based on maximum room depth",
    longFraming: "Wide-to-tele frame height",
    longCanvasNote: "The canvas cone shows the telephoto/minimum-HFOV precision framing range.",
    longNote: "PVC-G5xxP are project-only options. Final selection depends on actual camera-to-target distance, mounting point and on-site zoom commissioning.",
    longSourceNote: "A selection replaces the corresponding CV870 Pro BOM line; 2\u20133 student cameras are available only for a selected PVC project camera.",
    longProjectWarning: "Project-only: reconfirm supply, price, lead time, firmware, Logo/OEM, warranty and support owner before quotation.",
    longCollapse: "Collapse \xD7",
    longShowWide: "Show maximum-HFOV (wide-end) coverage on canvas: translucent dashed cones",
    longApply: "Apply recommendation",
    longReasonNear: "12\u201320m: G520P is the balanced option; G512P is for full-body/wide shots, not tight close-ups.",
    longReasonMid: "20\u201330m: G520P balances teacher cost and medium framing; G530P is preferred for distant student detail.",
    longReasonFar: "Above 30m: G530P 30x optical zoom is preferred for distant teacher close-ups and rear-student detail.",
    cameraPoEExpansion: "External PoE switch / camera power expansion (over LCS810 3-PoE limit)",
    cameraPoEReview: "Confirm source-channel assignment, network bandwidth, PoE budget and camera-control compatibility before quotation.",
    pvcCameraSpec: "optical zoom, HFOV {wide}\xB0 (wide)\u2013{tele}\xB0 (tele); commission final zoom on site",
    ps610Speaker: "PS610 passive wall speaker",
    ps610AmpReview: "PS610 is passive. Confirm amplifier power, final impedance, per-channel load and zone routing; do not assume the LCS810 2\xD740W amplifier can drive the full distributed layout.",
    delayReview: "Room depth exceeds 18m with front/rear speaker zones: review precedence delay and independent DSP/amplifier outputs. Do not add a processor until the topology is confirmed.",
    feedbackSuppressor: "FE-224N Feedback Suppressor (L3 third-party; recommended above 200m\xB2)",
    feedbackDetail: "The 200m\xB2 value is a quotation-review threshold, not an acoustic pass/fail limit. FE-224N is 2-in/2-out; XLR and 6.35mm are connector options, not four channels. Its verified controls are 24 configurable static notch filters and 6 frequency-shift levels; do not claim automatic/dynamic notch behaviour without current documentation. Use it on the microphone reinforcement bus, not as a replacement for A3006 or by default on program/music paths.",
    feedbackSupplyReview: "Reconfirm FE-224N hardware generation, price, stock, lead time, warranty, software compatibility and support owner before quotation.",
    feedbackCoordination: "A3006 AFC and FE-224N static notch/frequency-shift settings must be coordinated to avoid excessive double processing.",
    feedbackExternalRisks: "Reverberation, reflective finishes and roaming microphones are not modelled; they still require an on-site engineering review.",
    feedbackMicCountReview: "FE-224N engineering review: more than four open S210 microphones increases feedback risk even below 200m\xB2. The device is not auto-added below the area threshold.",
    s210CoverageUnmet: "S210 coverage target is not met. Reposition microphones or request an engineered audio design.",
    s210OverCapacity: "More than 10 S210 microphones exceeds the supported layout limit: up to 8 A3006 channels plus 2 direct to the LCS810.",
    lcsLifecycleReview: "LCS810 is the simulation baseline. Reconfirm current host availability, board generation, interfaces and lifecycle before quotation."
  });
  Object.assign(i18n.zh, {
    language: "\u8BED\u8A00",
    themeDark: "\u6DF1\u8272",
    themeLight: "\u6D45\u8272",
    themeHighContrast: "\u6781\u9AD8\u5BF9\u6BD4\u5EA6",
    maximumShort: "\u6700\u5927",
    distanceLimitWarn: "\u8B66\u544A\uFF1A\u8D85\u8FC7 {distance} \u7C73\u8DDD\u79BB\u9650\u5236\uFF01",
    standard: "\u6807\u51C6",
    projectOnly: "\u9879\u76EE\u578B",
    cameraPackage: "\u6444\u50CF\u673A\u5957\u88C5",
    cv870Package: "CV870 Pro \xB7 Teacher + Student",
    cv210Package: "CV210 \xB7 Teacher + Student",
    cv210PackageNote: "\u964D\u672C\u5957\u88C5\uFF1A\u6559\u5E08\u673A HFOV 40\xB0\uFF08\u5178\u578B 5\u201312m\uFF09\uFF0C\u5B66\u751F\u673A HFOV 120\xB0\uFF08\u5178\u578B 1\u201310m\uFF09\uFF1B\u6807\u51C6\u5B8C\u6574\u5957\u88C5\u4E0D\u5F97\u4E0E CV870 Pro \u6DF7\u7528\u3002",
    paramCv210Teacher: "HFOV 40\xB0\u30014\xD7\u6570\u5B57\u53D8\u7126\u3001\u5178\u578B\u8986\u76D6 5\u201312m\uFF1B\u7F3A\u5931\u7684 ePTZ \u8303\u56F4\u9700\u6309\u89C4\u683C\u4E66\u786E\u8BA4",
    paramCv210Student: "HFOV 120\xB0\u30014\xD7\u6570\u5B57\u53D8\u7126\u3001\u5178\u578B\u8986\u76D6 1\u201310m\uFF1B\u7F3A\u5931\u7684 ePTZ \u8303\u56F4\u9700\u6309\u89C4\u683C\u4E66\u786E\u8BA4",
    invalidDimensions: "\u91CD\u65B0\u8BA1\u7B97\u524D\u8BF7\u8F93\u5165\u5927\u4E8E 0 \u7C73\u7684\u6709\u6548\u623F\u95F4\u5C3A\u5BF8\u3002",
    stageCoverageWarn: "\u6559\u5E08\u673A\u56FA\u5B9A\u5168\u666F\u8986\u76D6\u7A84\u4E8E\u56FE\u793A\u821E\u53F0\uFF0C\u8BF7\u590D\u6838\u6444\u50CF\u673A\u4F4D\u7F6E\u3001\u955C\u5934\u8986\u76D6\u548C\u6559\u5E08\u6D3B\u52A8\u8303\u56F4\u3002",
    typicalRangeWarn: "\u8D85\u51FA\u8BE5\u6444\u50CF\u673A\u7684\u5178\u578B\u90E8\u7F72\u8DDD\u79BB\uFF0C\u8BF7\u6309\u89C4\u683C\u4E66\u548C\u73B0\u573A\u6761\u4EF6\u590D\u6838\u3002",
    longDistancePlan: "\u8FDC\u8DDD\u6444\u50CF\u673A\u65B9\u6848",
    longTitle: "\u8FDC\u8DDD\u79BB\u6444\u50CF\u673A\u66FF\u4EE3\u65B9\u6848\uFF08\u9879\u76EE\u578B\uFF09",
    longIntro: "\u623F\u95F4\u6DF1\u5EA6\u8D85\u8FC7 12m\uFF1A\u53EF\u6309\u6559\u5E08/\u5B66\u751F\u673A\u4F4D\u72EC\u7ACB\u66FF\u6362 CV870 Pro\u3002",
    longTeacher: "\u6559\u5E08\u673A\u4F4D",
    longStudent: "\u5B66\u751F\u673A\u4F4D",
    longStudentQty: "\u5B66\u751F\u673A\u4F4D\u6570\u91CF",
    longRecommend: "\u6309\u623F\u95F4\u6700\u5927\u6DF1\u5EA6\u4F30\u7B97\u7684\u5EFA\u8BAE",
    longFraming: "\u5E7F\u89D2\u81F3\u957F\u7126\u7684\u753B\u9762\u9AD8\u5EA6",
    longCanvasNote: "\u753B\u5E03\u8986\u76D6\u9525\u89D2\u56FA\u5B9A\u663E\u793A\u957F\u7126\u7AEF\uFF08\u6700\u5C0F HFOV\uFF09\u7684\u7CBE\u786E\u53D6\u666F\u8303\u56F4\u3002",
    longNote: "PVC-G5xxP \u4E3A\u9879\u76EE\u578B\u673A\u4F4D\uFF1B\u6700\u7EC8\u4EE5\u6444\u50CF\u673A\u5230\u76EE\u6807\u7684\u5B9E\u9645\u8DDD\u79BB\u3001\u5B89\u88C5\u4F4D\u7F6E\u548C\u73B0\u573A\u53D8\u7126\u6807\u5B9A\u4E3A\u51C6\u3002",
    longSourceNote: "\u9009\u4E2D\u540E\u5C06\u66FF\u6362\u5BF9\u5E94 CV870 Pro BOM\uFF1B\u4EC5\u5F53\u5B66\u751F\u673A\u9009\u62E9 PVC \u9879\u76EE\u6444\u50CF\u673A\u65F6\u624D\u5141\u8BB8\u914D\u7F6E 2\u20133 \u53F0\u3002",
    longProjectWarning: "\u9879\u76EE\u578B\u4EA7\u54C1\uFF1A\u62A5\u4EF7\u524D\u786E\u8BA4\u4F9B\u8D27\u3001\u4EF7\u683C\u3001\u4EA4\u671F\u3001\u56FA\u4EF6\u3001Logo/OEM\u3001\u4FDD\u4FEE\u4E0E\u552E\u540E\u8D23\u4EFB\u3002",
    longCollapse: "\u6536\u8D77 \xD7",
    longShowWide: "\u5728\u753B\u5E03\u663E\u793A\u6700\u5927 HFOV\uFF08\u5E7F\u89D2\u7AEF\uFF09\u8986\u76D6\uFF1A\u534A\u900F\u660E\u865A\u7EBF",
    longApply: "\u91C7\u7528\u63A8\u8350\u7EC4\u5408",
    longReasonNear: "12\u201320m\uFF1AG520P \u4E3A\u4F18\u5148\u5E73\u8861\u65B9\u6848\uFF1BG512P \u4EC5\u9002\u5408\u5168\u8EAB/\u5BBD\u666F\uFF0C\u4E0D\u4F5C\u4E3A\u7D27\u7279\u5199\u63A8\u8350\u3002",
    longReasonMid: "20\u201330m\uFF1A\u6559\u5E08\u4EE5 G520P \u53D6\u5F97\u6210\u672C\u4E0E\u534A\u8EAB/\u4E2D\u666F\u7684\u5E73\u8861\uFF1B\u5B66\u751F\u8FDC\u7AEF\u7EC6\u8282\u4F18\u5148 G530P\u3002",
    longReasonFar: "\u8D85\u8FC7 30m\uFF1AG530P \u7684 30\xD7\u5149\u5B66\u53D8\u7126\u4F18\u5148\u6EE1\u8DB3\u8FDC\u8DDD\u79BB\u6559\u5E08\u7D27\u7279\u5199\uFF1B\u5B66\u751F\u540E\u6392\u7EC6\u8282\u4EA6\u4F18\u5148\u91C7\u7528 G530P\u3002",
    cameraPoEExpansion: "\u6444\u50CF\u673A\u5916\u7F6E PoE \u4EA4\u6362\u673A / \u4F9B\u7535\u6269\u5C55\uFF08\u8D85\u8FC7 LCS810 \u7684 3 \u8DEF PoE\uFF09",
    cameraPoEReview: "\u62A5\u4EF7\u524D\u786E\u8BA4\u6765\u6E90\u901A\u9053\u5206\u914D\u3001\u7F51\u7EDC\u5E26\u5BBD\u3001PoE \u529F\u7387\u9884\u7B97\u548C\u6444\u50CF\u673A\u63A7\u5236\u517C\u5BB9\u6027\u3002",
    pvcCameraSpec: "\u5149\u5B66\u53D8\u7126\uFF0CHFOV {wide}\xB0\uFF08\u5E7F\u89D2\uFF09\u2013{tele}\xB0\uFF08\u957F\u7126\uFF09\uFF1B\u4EE5\u73B0\u573A\u53D8\u7126\u6807\u5B9A\u4E3A\u51C6",
    ps610Speaker: "PS610 \u65E0\u6E90\u58C1\u6302\u97F3\u7BB1",
    ps610AmpReview: "PS610 \u4E3A\u65E0\u6E90\u97F3\u7BB1\uFF0C\u5FC5\u987B\u786E\u8BA4\u529F\u653E\u529F\u7387\u3001\u6700\u7EC8\u963B\u6297\u3001\u6BCF\u901A\u9053\u8D1F\u8F7D\u548C\u5206\u533A\u8DEF\u7531\uFF1B\u4E0D\u5F97\u5047\u8BBE LCS810 \u5185\u7F6E 2\xD740W \u529F\u653E\u53EF\u4EE5\u9A71\u52A8\u5168\u90E8\u5206\u5E03\u5F0F\u97F3\u7BB1\u3002",
    delayReview: "\u623F\u95F4\u6DF1\u5EA6\u8D85\u8FC7 18m \u4E14\u5B58\u5728\u524D\u540E\u97F3\u7BB1\u533A\uFF1A\u9700\u590D\u6838\u4F18\u5148\u6548\u5E94\u5EF6\u65F6\u53CA\u72EC\u7ACB DSP/\u529F\u653E\u8F93\u51FA\uFF1B\u62D3\u6251\u786E\u8BA4\u524D\u4E0D\u81EA\u52A8\u52A0\u5165\u5904\u7406\u5668\u3002",
    feedbackSuppressor: "FE-224N \u53CD\u9988\u6291\u5236\u5668\uFF08L3 \u7B2C\u4E09\u65B9\uFF1B\u9762\u79EF >200\u33A1\u65F6\u5EFA\u8BAE\uFF09",
    feedbackDetail: "200\u33A1\u662F\u62A5\u4EF7\u590D\u6838\u9608\u503C\uFF0C\u4E0D\u662F\u58F0\u5B66\u5408\u683C\u7EBF\u3002FE-224N \u4E3A 2\u8FDB2\u51FA\uFF0CXLR \u4E0E 6.35mm \u662F\u63A5\u53E3\u9009\u9879\u800C\u975E\u56DB\u8DEF\u901A\u9053\uFF1B\u5DF2\u9A8C\u8BC1\u7684\u662F 24 \u4E2A\u53EF\u914D\u7F6E\u9759\u6001\u9677\u6CE2\u5668\u548C 6 \u6863\u79FB\u9891\uFF0C\u5F53\u524D\u8D44\u6599\u672A\u786E\u8BA4\u65F6\u4E0D\u5F97\u5BA3\u79F0\u81EA\u52A8/\u52A8\u6001\u9677\u6CE2\uFF1B\u4EC5\u7528\u4E8E\u9EA6\u514B\u98CE\u6269\u58F0\u603B\u7EBF\uFF0C\u4E0D\u66FF\u4EE3 A3006\uFF0C\u4E5F\u4E0D\u9ED8\u8BA4\u5904\u7406\u8282\u76EE/\u97F3\u4E50\u901A\u9053\u3002",
    feedbackSupplyReview: "\u62A5\u4EF7\u524D\u590D\u6838 FE-224N \u786C\u4EF6\u4EE3\u6B21\u3001\u4EF7\u683C\u3001\u5E93\u5B58\u3001\u4EA4\u671F\u3001\u4FDD\u4FEE\u3001\u8F6F\u4EF6\u517C\u5BB9\u6027\u548C\u652F\u6301\u8D1F\u8D23\u4EBA\u3002",
    feedbackCoordination: "\u540C\u65F6\u4F7F\u7528 A3006 AFC \u4E0E FE-224N \u9759\u6001\u9677\u6CE2/\u79FB\u9891\u65F6\u5FC5\u987B\u534F\u8C03\u8BBE\u7F6E\uFF0C\u907F\u514D\u8FC7\u5EA6\u91CD\u590D\u5904\u7406\u3002",
    feedbackExternalRisks: "\u672C\u6A21\u62DF\u5668\u672A\u5EFA\u6A21\u6DF7\u54CD\u3001\u786C\u8D28\u53CD\u5C04\u9762\u548C\u6E38\u8D70\u9EA6\u514B\u98CE\uFF0C\u4ECD\u9700\u73B0\u573A\u5DE5\u7A0B\u590D\u6838\u3002",
    feedbackMicCountReview: "FE-224N \u5DE5\u7A0B\u590D\u6838\uFF1A\u5373\u4F7F\u9762\u79EF\u4E0D\u8D85\u8FC7 200\u33A1\uFF0C\u8D85\u8FC7 4 \u652F\u5F00\u653E\u7684 S210 \u4E5F\u4F1A\u63D0\u9AD8\u53CD\u9988\u98CE\u9669\uFF1B\u4F4E\u4E8E\u9762\u79EF\u9608\u503C\u65F6\u4E0D\u81EA\u52A8\u52A0\u5165\u8BBE\u5907\u3002",
    s210CoverageUnmet: "S210 \u8986\u76D6\u76EE\u6807\u672A\u8FBE\u5230\uFF0C\u8BF7\u8C03\u6574\u9EA6\u514B\u98CE\u4F4D\u7F6E\u6216\u8FDB\u884C\u4E13\u9879\u97F3\u9891\u8BBE\u8BA1\u3002",
    s210OverCapacity: "S210\u8D85\u8FC710\u652F\uFF0C\u8D85\u51FA\u652F\u6301\u4E0A\u9650\uFF1AA3006\u6700\u591A\u63A58\u652F\uFF0C\u53E6\u67092\u652F\u53EF\u76F4\u8FDELCS810\u3002",
    lcsLifecycleReview: "LCS810 \u4E3A\u6A21\u62DF\u57FA\u51C6\uFF1B\u62A5\u4EF7\u524D\u8BF7\u590D\u6838\u5F53\u524D\u4E3B\u673A\u4F9B\u8D27\u3001\u4E3B\u677F\u4EE3\u6B21\u3001\u63A5\u53E3\u548C\u751F\u547D\u5468\u671F\u3002"
  });
  i18n.fr = {
    title: "Simulation LCS pour auditorium",
    subtitle: "G\xE9n\xE9rateur interactif d\u2019implantation des cam\xE9ras et de l\u2019audio",
    teacherCam: "CAM\xC9RA ENSEIGNANT (vers la sc\xE8ne)",
    studentCam: "CAM\xC9RA \xC9TUDIANTS (vers le public)",
    cv210Cam: "CAM\xC9RA ePTZ CV210",
    s210Mic: "MICROPHONE DE PLAFOND S210",
    dist: "Distance",
    cov: "Couverture",
    warnDist: "AVERTISSEMENT : limite de distance d\xE9pass\xE9e !",
    stage: "ZONE DE SC\xC8NE",
    audience: "ZONE DU PUBLIC",
    tCamLbl: "Cam\xE9ra enseignant",
    sCamLbl: "Cam\xE9ra \xE9tudiants",
    cv210Lbl: "CV210",
    s210Lbl: "Microphone S210",
    spk: "Enceinte",
    width: "Largeur de la salle (m)",
    length: "Profondeur de la salle (m)",
    dispSize: "Taille de l\u2019\xE9cran",
    theme: "Th\xE8me",
    hubRename: "Nom de l\u2019unit\xE9 centrale",
    dispRename: "Nom de l\u2019\xE9cran",
    titleRename: "Titre du projet",
    cutoffMsg: "LIMITE MAXIMALE DE 10m (SUIVI IMPOSSIBLE AU-DEL\xC0)",
    bestRange: "Captation optimale (6m)",
    limitRange: "Captation limite (8m)",
    toggleVis: "Commandes de visibilit\xE9",
    preset: "Pr\xE9r\xE9glage de salle",
    presetCustom: "Personnalis\xE9",
    presetStandard: "Salle standard (10\xD78)",
    presetLarge: "Grande salle (20\xD710)",
    presetLecture: "Amphith\xE9\xE2tre (15\xD712)",
    presetUltra: "Tr\xE8s grand auditorium (37\xD717)",
    s210Count: "Nombre de microphones S210",
    recalculate: "Recalculer",
    deviceStats: "R\xE9sum\xE9 de la nomenclature",
    addS210: "Ajouter un S210",
    spkStats: "Enceinte murale",
    dispStats: "\xC9cran auxiliaire",
    largeScreen: "Grand \xE9cran / IFP",
    rotate90: "Rotation \xE0 90\xB0",
    mixerStats: "Processeur audio (A3006)",
    paramTitle: "Caract\xE9ristiques des appareils",
    paramS210: "Microphone de plafond S210",
    paramS210Best: "Captation optimale : rayon 6m (diam\xE8tre 12m)",
    paramS210Limit: "Captation limite : rayon 8m (diam\xE8tre 16m)",
    paramTcam: "Cam\xE9ra enseignant",
    paramTcamSpec: "Objectif 8mm, HFOV 43\xB0, maximum 10m",
    paramScam: "Cam\xE9ra \xE9tudiants",
    paramScamSpec: "Objectif 2,8mm, HFOV 94\xB0, maximum 10m",
    exportPng: "Exporter en PNG",
    mixerWarn: "L\u2019A3006 accepte au maximum 8 canaux !",
    disclaimer: "* Avertissement : cette simulation est fournie \xE0 titre indicatif. L\u2019implantation et la couverture r\xE9elles d\xE9pendent de la construction, de l\u2019acoustique, des obstacles, de la hauteur d\u2019installation et de l\u2019\xE9clairage du site.",
    language: "Langue",
    themeDark: "Sombre",
    themeLight: "Clair",
    themeHighContrast: "Contraste extr\xEAme",
    maximumShort: "Max.",
    distanceLimitWarn: "AVERTISSEMENT : limite de distance de {distance}m d\xE9pass\xE9e !",
    standard: "standard",
    projectOnly: "projet uniquement",
    cameraPackage: "Ensemble de cam\xE9ras",
    cv870Package: "CV870 Pro \xB7 Teacher + Student",
    cv210Package: "CV210 \xB7 Teacher + Student",
    cv210PackageNote: "Paire \xE9conomique : enseignant HFOV 40\xB0 (5\u201312m typiques), \xE9tudiants HFOV 120\xB0 (1\u201310m typiques). Elle ne doit pas \xEAtre combin\xE9e avec le CV870 Pro dans un ensemble standard.",
    paramCv210Teacher: "HFOV 40\xB0, zoom num\xE9rique 4\xD7, couverture typique 5\u201312m ; confirmer les plages ePTZ manquantes dans la fiche technique",
    paramCv210Student: "HFOV 120\xB0, zoom num\xE9rique 4\xD7, couverture typique 1\u201310m ; confirmer les plages ePTZ manquantes dans la fiche technique",
    invalidDimensions: "Saisissez des dimensions de salle finies et sup\xE9rieures \xE0 0m avant de recalculer.",
    stageCoverageWarn: "La couverture panoramique de la cam\xE9ra enseignant est plus \xE9troite que la sc\xE8ne dessin\xE9e. V\xE9rifiez la position, l\u2019objectif et la zone de d\xE9placement de l\u2019enseignant.",
    typicalRangeWarn: "Distance hors de la plage d\u2019installation typique de la cam\xE9ra ; v\xE9rifiez la fiche technique et le site.",
    longDistancePlan: "Plan de cam\xE9ras longue distance",
    longTitle: "Alternative de cam\xE9ra longue distance (projet uniquement)",
    longIntro: "Profondeur sup\xE9rieure \xE0 12m : remplacez ind\xE9pendamment les r\xF4les enseignant et \xE9tudiants du CV870 Pro.",
    longTeacher: "R\xF4le enseignant",
    longStudent: "R\xF4le \xE9tudiants",
    longStudentQty: "Nombre de cam\xE9ras \xE9tudiants",
    longRecommend: "Recommandation selon la profondeur maximale",
    longFraming: "Hauteur de cadrage du grand-angle au t\xE9l\xE9objectif",
    longCanvasNote: "Le c\xF4ne du plan repr\xE9sente le cadrage pr\xE9cis au t\xE9l\xE9objectif, avec le HFOV minimal.",
    longNote: "Les PVC-G5xxP sont des options de projet. La s\xE9lection finale d\xE9pend de la distance r\xE9elle, du point de montage et du r\xE9glage du zoom sur site.",
    longSourceNote: "La s\xE9lection remplace la ligne CV870 Pro correspondante ; 2 \xE0 3 cam\xE9ras \xE9tudiants ne sont disponibles qu\u2019avec une cam\xE9ra PVC de projet.",
    longProjectWarning: "Produit de projet : confirmez l\u2019approvisionnement, le prix, le d\xE9lai, le micrologiciel, le logo/OEM, la garantie et le responsable du support avant devis.",
    longCollapse: "R\xE9duire \xD7",
    longShowWide: "Afficher sur le plan la couverture au HFOV maximal (grand-angle) : c\xF4nes translucides en pointill\xE9s",
    longApply: "Appliquer la recommandation",
    longReasonNear: "12\u201320m : le G520P offre le meilleur \xE9quilibre ; le G512P convient aux plans larges/en pied, pas aux gros plans serr\xE9s.",
    longReasonMid: "20\u201330m : le G520P \xE9quilibre co\xFBt et plan moyen pour l\u2019enseignant ; le G530P est pr\xE9f\xE9rable pour les d\xE9tails \xE9loign\xE9s des \xE9tudiants.",
    longReasonFar: "Au-del\xE0 de 30m : le zoom optique 30\xD7 du G530P est pr\xE9f\xE9rable pour les gros plans \xE9loign\xE9s de l\u2019enseignant et les d\xE9tails des \xE9tudiants au fond.",
    cameraPoEExpansion: "Commutateur PoE externe / extension d\u2019alimentation des cam\xE9ras (au-del\xE0 des 3 ports PoE du LCS810)",
    cameraPoEReview: "Confirmez l\u2019affectation des sources, la bande passante, le budget PoE et la compatibilit\xE9 de commande avant devis.",
    pvcCameraSpec: "zoom optique, HFOV {wide}\xB0 (grand-angle)\u2013{tele}\xB0 (t\xE9l\xE9objectif) ; r\xE9gler le zoom final sur site",
    ps610Speaker: "Enceinte murale passive PS610",
    ps610AmpReview: "La PS610 est passive. Confirmez la puissance d\u2019amplification, l\u2019imp\xE9dance finale, la charge par canal et le routage des zones ; ne supposez pas que l\u2019amplificateur 2\xD740W du LCS810 peut alimenter toute l\u2019implantation distribu\xE9e.",
    delayReview: "La profondeur d\xE9passe 18m avec des zones avant/arri\xE8re : \xE9tudiez le retard de pr\xE9c\xE9dence et les sorties DSP/amplificateur ind\xE9pendantes. N\u2019ajoutez pas de processeur avant confirmation de la topologie.",
    feedbackSuppressor: "Suppresseur de Larsen FE-224N (tiers L3 ; recommand\xE9 au-del\xE0 de 200m\xB2)",
    feedbackDetail: "200m\xB2 est un seuil de revue du devis, pas une limite acoustique. Le FE-224N poss\xE8de 2 entr\xE9es/2 sorties ; XLR et jack 6,35mm sont des options de connectique, pas quatre canaux. Les fonctions v\xE9rifi\xE9es sont 24 filtres coupe-bande statiques configurables et 6 niveaux de d\xE9calage de fr\xE9quence ; ne revendiquez pas de filtrage automatique/dynamique sans documentation actuelle. Placez-le sur le bus de renforcement des microphones ; il ne remplace pas l\u2019A3006 et ne traite pas par d\xE9faut les programmes musicaux.",
    feedbackSupplyReview: "Avant devis, confirmez la g\xE9n\xE9ration mat\xE9rielle, le prix, le stock, le d\xE9lai, la garantie, la compatibilit\xE9 logicielle et le responsable du support du FE-224N.",
    feedbackCoordination: "Coordonnez l\u2019AFC de l\u2019A3006 avec les filtres statiques et le d\xE9calage de fr\xE9quence du FE-224N afin d\u2019\xE9viter un double traitement excessif.",
    feedbackExternalRisks: "La r\xE9verb\xE9ration, les surfaces r\xE9fl\xE9chissantes et les microphones mobiles ne sont pas mod\xE9lis\xE9s et exigent toujours une \xE9tude sur site.",
    feedbackMicCountReview: "\xC9tude FE-224N : plus de quatre microphones S210 ouverts accroissent le risque de Larsen m\xEAme sous 200m\xB2. L\u2019appareil n\u2019est pas ajout\xE9 automatiquement sous le seuil de surface.",
    s210CoverageUnmet: "L\u2019objectif de couverture S210 n\u2019est pas atteint. Repositionnez les microphones ou demandez une \xE9tude audio.",
    s210OverCapacity: "Plus de 10 microphones S210 d\xE9passe la limite : 8 entr\xE9es A3006 et 2 microphones directement raccord\xE9s au LCS810.",
    lcsLifecycleReview: "Le LCS810 est la r\xE9f\xE9rence de simulation. Confirmez la disponibilit\xE9 actuelle, la g\xE9n\xE9ration de carte, les interfaces et le cycle de vie avant devis."
  };
  var workspaceCopy = {
    en: ["Room Height (m)", "Height is recorded for mounting review; 2D coverage is unchanged.", "More options", "Coverage status", "Room height is 3.5m or more. Verify equipment mounting height and use a pendant/drop mount if needed."],
    zh: ["\u623F\u95F4\u9AD8\u5EA6 (\u7C73)", "\u9AD8\u5EA6\u7528\u4E8E\u5B89\u88C5\u590D\u6838\uFF0C\u4E0D\u6539\u53D8\u4E8C\u7EF4\u8986\u76D6\u8BA1\u7B97\u3002", "\u66F4\u591A\u8BBE\u7F6E", "\u8986\u76D6\u72B6\u6001", "\u623F\u95F4\u9AD8\u5EA6\u8FBE\u5230 3.5m\uFF1A\u8BF7\u6838\u5BF9\u8BBE\u5907\u5B89\u88C5\u9AD8\u5EA6\uFF0C\u5FC5\u8981\u65F6\u4F7F\u7528\u4E0B\u5782\u652F\u67B6\u964D\u4F4E\u5B89\u88C5\u4F4D\u7F6E\u3002"],
    fr: ["Hauteur (m)", "Hauteur relev\xE9e pour la pose ; la couverture 2D reste inchang\xE9e.", "Plus d\u2019options", "\xC9tat de couverture", "Hauteur \u2265 3,5 m : v\xE9rifiez la hauteur de pose et utilisez une suspension si n\xE9cessaire."],
    es: ["Altura (m)", "La altura sirve para revisar el montaje; la cobertura 2D no cambia.", "M\xE1s opciones", "Estado de cobertura", "Altura \u2265 3,5 m: revise la altura de instalaci\xF3n y use un soporte colgante si es necesario."],
    ja: ["\u5BA4\u5185\u9AD8\u3055 (m)", "\u9AD8\u3055\u306F\u8A2D\u7F6E\u78BA\u8A8D\u7528\u3067\u3059\u30022D \u30AB\u30D0\u30EC\u30C3\u30B8\u306F\u5909\u308F\u308A\u307E\u305B\u3093\u3002", "\u8A73\u7D30\u8A2D\u5B9A", "\u30AB\u30D0\u30FC\u72B6\u6CC1", "\u9AD8\u3055\u304C 3.5 m \u4EE5\u4E0A\u3067\u3059\u3002\u8A2D\u7F6E\u9AD8\u3055\u3092\u78BA\u8A8D\u3057\u3001\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u540A\u308A\u4E0B\u3052\u91D1\u5177\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002"],
    ko: ["\uC2E4\uB0B4 \uB192\uC774 (m)", "\uB192\uC774\uB294 \uC124\uCE58 \uAC80\uD1A0\uC6A9\uC774\uBA70 2D \uCEE4\uBC84\uB9AC\uC9C0\uB294 \uBCC0\uACBD\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.", "\uCD94\uAC00 \uC124\uC815", "\uCEE4\uBC84\uB9AC\uC9C0 \uC0C1\uD0DC", "\uB192\uC774\uAC00 3.5m \uC774\uC0C1\uC785\uB2C8\uB2E4. \uC124\uCE58 \uB192\uC774\uB97C \uD655\uC778\uD558\uACE0 \uD544\uC694\uD558\uBA74 \uCC9C\uC7A5 \uB4DC\uB86D \uB9C8\uC6B4\uD2B8\uB97C \uC0AC\uC6A9\uD558\uC138\uC694."],
    it: ["Altezza (m)", "L\u2019altezza serve alla verifica del montaggio; la copertura 2D non cambia.", "Altre opzioni", "Stato copertura", "Altezza \u2265 3,5 m: verificare la quota di installazione e usare un supporto sospeso se necessario."],
    hu: ["Teremmagass\xE1g (m)", "A magass\xE1g a szerel\xE9si ellen\u0151rz\xE9shez kell; a 2D lefedetts\xE9g nem v\xE1ltozik.", "Tov\xE1bbi be\xE1ll\xEDt\xE1sok", "Lefedetts\xE9g \xE1llapota", "A terem magass\xE1ga legal\xE1bb 3,5 m. Ellen\u0151rizze a szerel\xE9si magass\xE1got, \xE9s sz\xFCks\xE9g eset\xE9n haszn\xE1ljon f\xFCggesztett konzolt."],
    ar: ["\u0627\u0631\u062A\u0641\u0627\u0639 \u0627\u0644\u063A\u0631\u0641\u0629 (\u0645)", "\u064A\u064F\u0633\u062C\u0644 \u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639 \u0644\u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u062A\u0631\u0643\u064A\u0628\u061B \u0644\u0627 \u062A\u062A\u063A\u064A\u0631 \u0627\u0644\u062A\u063A\u0637\u064A\u0629 \u062B\u0646\u0627\u0626\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F.", "\u062E\u064A\u0627\u0631\u0627\u062A \u0625\u0636\u0627\u0641\u064A\u0629", "\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u063A\u0637\u064A\u0629", "\u0627\u0631\u062A\u0641\u0627\u0639 \u0627\u0644\u063A\u0631\u0641\u0629 3.5 \u0645 \u0623\u0648 \u0623\u0643\u062B\u0631. \u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0631\u062A\u0641\u0627\u0639 \u0627\u0644\u062A\u0631\u0643\u064A\u0628 \u0648\u0627\u0633\u062A\u062E\u062F\u0645 \u062D\u0627\u0645\u0644\u0627\u064B \u0645\u0639\u0644\u0642\u0627\u064B \u0639\u0646\u062F \u0627\u0644\u062D\u0627\u062C\u0629."]
  };
  for (const [language, [height, heightNote, moreOptions, coverageStatus, heightWarning]] of Object.entries(workspaceCopy)) {
    Object.assign(i18n[language], { height, heightNote, moreOptions, coverageStatus, heightWarning });
  }

  // src/themes.js
  var themes = {
    dark: {
      appBg: "bg-slate-950",
      text: "text-slate-200",
      headerText: "text-blue-400",
      subText: "text-slate-500",
      panelBg: "bg-slate-900",
      panelBorder: "border-slate-800",
      inputBg: "bg-slate-800",
      inputText: "text-white",
      inputBorder: "border-slate-700",
      svgBg: "#020617",
      gridLines: "#1e293b",
      roomBorder: "#334155",
      roomFill: "#020617",
      stageFill: "rgba(30, 41, 59, 0.6)",
      stageText: "fill-slate-500",
      pillarFill: "#475569",
      pillarStroke: "#94a3b8",
      rulerStroke: "#475569",
      rulerTick: "#64748b"
    },
    light: {
      appBg: "bg-slate-50",
      text: "text-slate-800",
      headerText: "text-blue-600",
      subText: "text-slate-500",
      panelBg: "bg-white",
      panelBorder: "border-slate-300",
      inputBg: "bg-white",
      inputText: "text-slate-900",
      inputBorder: "border-slate-300",
      svgBg: "#ffffff",
      gridLines: "#cbd5e1",
      roomBorder: "#64748b",
      roomFill: "#ffffff",
      stageFill: "rgba(226, 232, 240, 0.6)",
      stageText: "fill-slate-400",
      pillarFill: "#cbd5e1",
      pillarStroke: "#94a3b8",
      rulerStroke: "#94a3b8",
      rulerTick: "#64748b"
    },
    highContrast: {
      appBg: "bg-black",
      text: "text-white font-bold",
      headerText: "text-yellow-400",
      subText: "text-gray-300",
      panelBg: "bg-black",
      panelBorder: "border-white border-2",
      inputBg: "bg-black",
      inputText: "text-white font-bold",
      inputBorder: "border-white",
      svgBg: "#000000",
      gridLines: "#333333",
      roomBorder: "#ffffff",
      roomFill: "#000000",
      stageFill: "rgba(255, 255, 255, 0.1)",
      stageText: "fill-white font-bold",
      pillarFill: "#ffffff",
      pillarStroke: "#ffffff",
      rulerStroke: "#ffffff",
      rulerTick: "#ffffff"
    }
  };

  // src/domain/cameras.js
  var cameraModels = {
    CV870: {
      label: "CV870 Pro",
      projectOnly: false,
      roleHfov: { teacher: 43, student: 94 },
      roleMinDistance: { teacher: 0, student: 0 },
      roleMaxDistance: { teacher: 10, student: 10 }
    },
    CV210: {
      label: "CV210",
      projectOnly: false,
      budgetPair: true,
      roleHfov: { teacher: 40, student: 120 },
      roleMinDistance: { teacher: 5, student: 1 },
      roleMaxDistance: { teacher: 12, student: 10 }
    },
    "PVC-G530P": { label: "PVC-G530P", opticalZoom: "30x", minHfov: 2, maxHfov: 56.5, projectOnly: true },
    "PVC-G520P": { label: "PVC-G520P", opticalZoom: "20x", minHfov: 2.8, maxHfov: 56.5, projectOnly: true },
    "PVC-G512P": { label: "PVC-G512P", opticalZoom: "12x", minHfov: 7.6, maxHfov: 81, projectOnly: true }
  };
  var isLongRoomEnabled = (roomLength, roomIsValid, cameraPackage) => roomIsValid && roomLength > 12 && cameraPackage === "CV870";
  var getPvcFrameHeight = (model, roomLength, hfov = model.minHfov) => {
    if (!hfov) return null;
    const frameWidth = 2 * roomLength * Math.tan(hfov / 2 * (Math.PI / 180));
    return frameWidth * 9 / 16;
  };
  var getLongRoomRecommendation = (roomLength, roomWidth, roomArea, t) => {
    const suggestedStudentQty = roomArea > 500 || roomWidth > 16 ? 3 : roomArea > 300 || roomWidth > 12 ? 2 : 1;
    if (roomLength > 30) {
      return {
        teacher: "PVC-G530P",
        student: "PVC-G530P",
        studentQty: suggestedStudentQty,
        reason: t.longReasonFar
      };
    }
    if (roomLength > 20) {
      return {
        teacher: "PVC-G520P",
        student: "PVC-G530P",
        studentQty: suggestedStudentQty,
        reason: t.longReasonMid
      };
    }
    return {
      teacher: "PVC-G520P",
      student: "PVC-G520P",
      studentQty: 1,
      reason: t.longReasonNear
    };
  };

  // src/domain/audio.js
  var s210BestRange = 6;
  var s210LimitRange = 8;
  var getCardioidPath = (cx, cy, maxR, tx, ty, facing = "up") => {
    const points = [];
    const a = maxR / 2;
    for (let i = 0; i <= 360; i += 5) {
      const rad = i * Math.PI / 180;
      const r = facing === "down" ? a * (1 + Math.sin(rad)) : a * (1 - Math.sin(rad));
      const px = cx + r * Math.cos(rad);
      const py = cy + r * Math.sin(rad);
      points.push(`${tx(px)},${ty(py)}`);
    }
    return `M ${points.join(" L ")} Z`;
  };
  var isInsideCardioid = (x, y, cx, cy, maxR, facing = "up") => {
    const dx = x - cx;
    const dy = y - cy;
    const d = Math.sqrt(dx * dx + dy * dy);
    if (d === 0) return true;
    const theta = Math.atan2(dy, dx);
    const a = maxR / 2;
    const r = facing === "down" ? a * (1 + Math.sin(theta)) : a * (1 - Math.sin(theta));
    return d <= r;
  };
  var calculateS210Coverage = (mics, width, length, cols = 30) => {
    if (!mics || mics.length === 0 || width <= 0 || length <= 0) return { best: 0, limit: 0 };
    const rows = Math.round(cols * (length / width));
    if (isNaN(rows) || rows <= 0) return { best: 0, limit: 0 };
    let bestCovered = 0;
    let limitCovered = 0;
    const totalPoints = cols * rows;
    for (let r = 0; r < rows; r++) {
      const y = (r + 0.5) * (length / rows);
      for (let c = 0; c < cols; c++) {
        const x = (c + 0.5) * (width / cols);
        let isBest = false;
        let isLimit = false;
        for (const mic of mics) {
          if (!isBest && isInsideCardioid(x, y, mic.x, mic.y, s210BestRange, mic.facing)) {
            isBest = true;
            isLimit = true;
          }
          if (!isLimit && isInsideCardioid(x, y, mic.x, mic.y, s210LimitRange, mic.facing)) {
            isLimit = true;
          }
          if (isBest && isLimit) break;
        }
        if (isBest) bestCovered++;
        if (isLimit) limitCovered++;
      }
    }
    return {
      best: bestCovered / totalPoints * 100,
      limit: limitCovered / totalPoints * 100
    };
  };

  // src/domain/layout.js
  var clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  var s210DirectHostTarget = { best: 80, limit: 95 };
  var S210_A3006_CAPACITY = 8;
  var S210_DIRECT_HOST_CAPACITY = 2;
  var S210_MAX_COUNT = S210_A3006_CAPACITY + S210_DIRECT_HOST_CAPACITY;
  var placeS210FrontRow = (mics, width, length) => {
    if (mics.length === 0) return mics;
    const frontRowY = Math.min(...mics.map((mic) => mic.y));
    const frontRow = mics.filter((mic) => Math.abs(mic.y - frontRowY) < 1e-6);
    const frontRowIds = new Set(frontRow.map((mic) => mic.id));
    const frontY = clamp(0.8, 0.3, length - 0.3);
    return mics.map((mic) => {
      if (!frontRowIds.has(mic.id)) return { ...mic, facing: "up" };
      const index = frontRow.findIndex((item) => item.id === mic.id);
      const x = frontRow.length === 1 ? width / 2 : width * (0.3 + 0.4 * index / (frontRow.length - 1));
      return { ...mic, x: clamp(x, 0.3, width - 0.3), y: frontY, facing: "down" };
    });
  };
  var buildAuxDisplays = (width, length, size) => {
    if (width <= 8 && length <= 10) return [];
    let maxDist = 4.1;
    if (size === "65") maxDist = 5;
    if (size === "75") maxDist = 5.6;
    const remainingDepth = length - 6;
    const nextDisplays = [];
    if (remainingDepth > 0) {
      const rows = Math.ceil(remainingDepth / maxDist);
      for (let i = 0; i < rows; i++) {
        const yPos = 6 + i * maxDist;
        if (yPos < length - 2) {
          nextDisplays.push({ id: `L${i}`, x: 0.5, y: yPos });
          nextDisplays.push({ id: `R${i}`, x: width - 0.5, y: yPos });
        }
      }
    }
    return nextDisplays;
  };
  var buildLargeScreen = (width) => ({
    x: width / 2,
    y: 0.35,
    width: 86 * 0.0254 * 16 / Math.sqrt(337)
  });
  var buildS210CandidateLayout = (width, length, count, colCount, spreadRows = true) => {
    const rowCount = Math.ceil(count / colCount);
    const mics = [];
    for (let row = 0; row < rowCount; row++) {
      const unitsInRow = Math.min(colCount, count - mics.length);
      for (let col = 0; col < unitsInRow; col++) {
        const id = mics.length;
        const x = unitsInRow === 1 ? width / 2 : (col + 0.5) * width / unitsInRow;
        const lastRowY = clamp(length - 0.5, 1.2, length - 0.3);
        const firstRearRowY = Math.min(0.8 + 2 * s210BestRange, lastRowY);
        const legacyRatio = rowCount === 1 ? 0.5 : 0.32 + 0.58 * row / (rowCount - 1);
        const y = rowCount === 1 ? length / 2 : !spreadRows ? clamp(length * legacyRatio, 1.2, length - 0.5) : row === 0 ? 0.8 : firstRearRowY + (lastRowY - firstRearRowY) * (row - 1) / Math.max(1, rowCount - 2);
        mics.push({
          id,
          x,
          y,
          label: `S${id + 1}`,
          facing: "up"
        });
      }
    }
    return placeS210FrontRow(mics, width, length);
  };
  var scoreS210Layout = (mics, width, length) => {
    const coverage = calculateS210Coverage(mics, width, length);
    return { ...coverage, score: coverage.best + coverage.limit };
  };
  var optimizeS210RearRows = (mics, width, length) => {
    let optimized = mics.map((mic) => ({ ...mic }));
    let currentScore = scoreS210Layout(optimized, width, length).score;
    const rowYs = [...new Set(optimized.map((mic) => mic.y))].sort((a, b) => a - b);
    if (rowYs.length < 2) return optimized;
    for (const step of [0.5, 0.1]) {
      for (let round = 0; round < 4; round++) {
        let improved = false;
        for (let rowIndex = 1; rowIndex < rowYs.length; rowIndex++) {
          const oldY = rowYs[rowIndex];
          const lower = Math.max(rowYs[rowIndex - 1] + 1.2, 1.2);
          const upper = Math.min(rowIndex + 1 < rowYs.length ? rowYs[rowIndex + 1] - 1.2 : length - 0.3, length - 0.3);
          let bestY = oldY;
          let bestScore = currentScore;
          for (const delta of [-2, -1, 0, 1, 2]) {
            const candidateY = clamp(oldY + delta * step, lower, upper);
            if (Math.abs(candidateY - bestY) < 1e-8) continue;
            const candidate = optimized.map((mic) => Math.abs(mic.y - oldY) < 1e-8 ? { ...mic, y: candidateY } : mic);
            const candidateScore = scoreS210Layout(candidate, width, length).score;
            if (candidateScore > bestScore + 1e-8) {
              bestY = candidateY;
              bestScore = candidateScore;
            }
          }
          if (bestY !== oldY) {
            optimized = optimized.map((mic) => Math.abs(mic.y - oldY) < 1e-8 ? { ...mic, y: bestY } : mic);
            rowYs[rowIndex] = bestY;
            currentScore = bestScore;
            improved = true;
          }
        }
        if (!improved) break;
      }
    }
    return optimized;
  };
  var buildCoverageOptimizedS210Layout = (width, length) => {
    const expandedTarget = { best: 75, limit: 85 };
    let bestFallback = null;
    const bestPickupArea = 3 * Math.PI * s210BestRange ** 2 / 8;
    const areaLimitedStart = Math.ceil(expandedTarget.best * width * length / (bestPickupArea * 100));
    const startCount = Math.max(3, Math.min(S210_MAX_COUNT, areaLimitedStart));
    for (let count = startCount; count <= S210_MAX_COUNT; count++) {
      const columnOptions = width >= 9 ? [2, 1] : [1];
      let qualifyingLayout = null;
      let qualifyingScore = -Infinity;
      for (const colCount of columnOptions) {
        if (colCount > count) continue;
        const seeds = [
          buildS210CandidateLayout(width, length, count, colCount, false),
          buildS210CandidateLayout(width, length, count, colCount, true)
        ];
        const baseline = seeds.map((layout) => ({ layout, ...scoreS210Layout(layout, width, length) })).sort((a, b) => b.score - a.score)[0];
        if (!bestFallback || baseline.score > bestFallback.score) {
          bestFallback = { layout: baseline.layout, score: baseline.score };
        }
        const candidate = optimizeS210RearRows(baseline.layout, width, length);
        const candidateCoverage = scoreS210Layout(candidate, width, length);
        if (!bestFallback || candidateCoverage.score > bestFallback.score) {
          bestFallback = { layout: candidate, score: candidateCoverage.score };
        }
        if (candidateCoverage.best >= expandedTarget.best && candidateCoverage.limit >= expandedTarget.limit && candidateCoverage.score > qualifyingScore) {
          qualifyingLayout = candidate;
          qualifyingScore = candidateCoverage.score;
        }
      }
      if (qualifyingLayout) return qualifyingLayout;
    }
    return bestFallback ? bestFallback.layout : optimizeS210RearRows(buildS210CandidateLayout(width, length, 3, 1), width, length);
  };
  var buildDirectHostPairLayout = (width, length) => {
    if (width >= 13) {
      return placeS210FrontRow([
        { id: 0, x: width * 0.3, y: length * 0.5, label: "S1", facing: "up" },
        { id: 1, x: width * 0.7, y: length * 0.5, label: "S2", facing: "up" }
      ], width, length);
    }
    const frontY = clamp(Math.min(length * 0.46, s210BestRange), 1.2, length - 1.2);
    const rearY = clamp(length - 0.5, frontY + 1.2, length - 0.3);
    return placeS210FrontRow([
      { id: 0, x: width / 2, y: frontY, label: "S1", facing: "up" },
      { id: 1, x: width / 2, y: rearY, label: "S2", facing: "up" }
    ], width, length);
  };
  var isDirectHostPairQualified = (mics, width, length) => {
    if (mics.length !== 2) return false;
    const pairCoverage = calculateS210Coverage(mics, width, length);
    return pairCoverage.best >= s210DirectHostTarget.best && pairCoverage.limit >= s210DirectHostTarget.limit;
  };
  var buildS210Layout = (width, length, s210s) => {
    const existingPair = s210s.length === 2 ? placeS210FrontRow(s210s.map((mic, index) => ({
      ...mic,
      id: index,
      x: clamp(mic.x, 0.3, width - 0.3),
      y: clamp(mic.y, 0.3, length - 0.3),
      label: mic.label || `S${index + 1}`
    })), width, length) : null;
    if (existingPair && isDirectHostPairQualified(existingPair, width, length)) {
      return existingPair;
    }
    const proposedPair = buildDirectHostPairLayout(width, length);
    if (isDirectHostPairQualified(proposedPair, width, length)) {
      return proposedPair;
    }
    return buildCoverageOptimizedS210Layout(width, length);
  };
  var buildSpeakerLayout = (width, length) => {
    const pairCount = Math.max(2, Math.ceil(length / 9.5));
    const leftX = clamp(0.8, 0.3, width / 2);
    const rightX = clamp(width - 0.8, width / 2, width - 0.3);
    const nextSpeakers = [];
    for (let i = 0; i < pairCount; i++) {
      const y = pairCount === 1 ? length / 2 : 1.5 + i * (length - 3) / (pairCount - 1);
      nextSpeakers.push({ id: nextSpeakers.length, x: leftX, y });
      nextSpeakers.push({ id: nextSpeakers.length, x: rightX, y });
    }
    return nextSpeakers;
  };

  // src/domain/presets.js
  function getPresetLayout(preset) {
    if (preset === "standard") {
      const width = 8;
      const length = 10;
      return {
        width,
        length,
        teacherCam: { x: width / 2, y: 5 },
        studentCams: [{ id: 0, x: width / 2, y: 1 }],
        speakers: [
          { id: 0, x: 0.8, y: 1.5 },
          { id: 1, x: width - 0.8, y: 1.5 },
          { id: 2, x: 0.8, y: length - 1.5 },
          { id: 3, x: width - 0.8, y: length - 1.5 }
        ],
        largeScreen: buildLargeScreen(width),
        hub: { x: 1.5, y: 1 },
        displaySize: "55"
      };
    }
    if (preset === "large") {
      const width = 10;
      const length = 20;
      return {
        width,
        length,
        teacherCam: { x: width / 2, y: 7 },
        studentCams: [{ id: 0, x: width / 2, y: 1 }],
        speakers: [
          { id: 0, x: 1, y: 2 },
          { id: 1, x: width - 1, y: 2 },
          { id: 2, x: 1, y: 9 },
          { id: 3, x: width - 1, y: 9 },
          { id: 4, x: 1, y: 16 },
          { id: 5, x: width - 1, y: 16 }
        ],
        largeScreen: buildLargeScreen(width),
        hub: { x: 1.5, y: 1 },
        displaySize: "65"
      };
    }
    if (preset === "lecture") {
      const width = 12;
      const length = 15;
      return {
        width,
        length,
        teacherCam: { x: width / 2, y: 7 },
        studentCams: [{ id: 0, x: width / 2, y: 1 }],
        speakers: [
          { id: 0, x: 1, y: 2 },
          { id: 1, x: width - 1, y: 2 },
          { id: 2, x: 1, y: length - 2 },
          { id: 3, x: width - 1, y: length - 2 }
        ],
        largeScreen: buildLargeScreen(width),
        hub: { x: 1.5, y: 1 },
        displaySize: "65"
      };
    }
    if (preset === "ultra") {
      const width = 17;
      const length = 37;
      return {
        width,
        length,
        teacherCam: { x: width / 2, y: 9 },
        studentCams: [{ id: 0, x: width / 2, y: 1 }],
        speakers: [
          { id: 0, x: 1.5, y: 3 },
          { id: 1, x: width - 1.5, y: 3 },
          { id: 2, x: 1.5, y: 15 },
          { id: 3, x: width - 1.5, y: 15 },
          { id: 4, x: 1.5, y: 27 },
          { id: 5, x: width - 1.5, y: 27 },
          { id: 6, x: 1.5, y: length - 3 },
          { id: 7, x: width - 1.5, y: length - 3 }
        ],
        largeScreen: buildLargeScreen(width),
        hub: { x: 2, y: 1.5 },
        displaySize: "75"
      };
    }
    return null;
  }

  // src/domain/camera-layout.js
  function placeCv870Cameras({ width, depth, teacher, students, teacherModel, studentModel }) {
    const center = width / 2;
    return {
      teacher: teacherModel === "CV870" ? { x: center, y: Math.min(depth, 10) } : teacher,
      students: studentModel === "CV870" ? [{ id: 0, x: center, y: 0 }] : students
    };
  }
  function coversWholeStage(camera, hfov, roomWidth, roomDepth) {
    const halfStageWidth = roomWidth * 0.35;
    const center = roomWidth / 2;
    const halfAngleTangent = Math.tan(hfov * Math.PI / 360);
    const stageRear = Math.min(2.2, roomDepth);
    return [0, stageRear].every((y) => {
      const distance = camera.y - y;
      return distance > 0 && [center - halfStageWidth, center + halfStageWidth].every(
        (x) => Math.abs(x - camera.x) <= distance * halfAngleTangent + 0.025
      );
    });
  }

  // src/domain/recalculate.js
  function recalculateLayout({ width, depth, teacher, students, teacherModel = "CV870", studentModel = "CV870", s210s = [], displaySize = "55" }) {
    const cameras = placeCv870Cameras({ width, depth, teacher, students, teacherModel, studentModel });
    return {
      teacherCam: cameras.teacher,
      studentCams: cameras.students,
      s210s: buildS210Layout(width, depth, s210s),
      speakers: buildSpeakerLayout(width, depth),
      displays: buildAuxDisplays(width, depth, displaySize),
      largeScreen: buildLargeScreen(width)
    };
  }

  // src/domain/plan-snapshot.js
  var PLAN_SNAPSHOT_VERSION = 1;
  var snapshotMessages = {
    en: {
      open3D: "Open 3D",
      roomSize: "3D supports width 4\u201330 m, depth 5\u201350 m and height 2.4\u20136 m.",
      screenSpace: "The main screen does not fit on the front wall at its current position.",
      screenHeight: "The main screen is too tall for this room.",
      snapshotInvalid: "This 2D plan could not be imported. Open 3D again from the 2D page.",
      snapshotVersion: "This plan version is unsupported. Open 3D again from the updated 2D page."
    },
    zh: {
      open3D: "\u6253\u5F00 3D",
      roomSize: "3D \u652F\u6301\u5BBD 4\u201330 \u7C73\u3001\u6DF1 5\u201350 \u7C73\u3001\u9AD8 2.4\u20136 \u7C73\u7684\u623F\u95F4\u3002",
      screenSpace: "\u4E3B\u5C4F\u5728\u5F53\u524D\u4F4D\u7F6E\u8D85\u51FA\u524D\u5899\u8303\u56F4\uFF0C\u8BF7\u8C03\u6574\u4F4D\u7F6E\u6216\u623F\u95F4\u5BBD\u5EA6\u3002",
      screenHeight: "\u4E3B\u5C4F\u9AD8\u5EA6\u8D85\u51FA\u623F\u95F4\u53EF\u5B89\u88C5\u7A7A\u95F4\u3002",
      snapshotInvalid: "\u65E0\u6CD5\u5BFC\u5165\u6B64\u4E8C\u7EF4\u65B9\u6848\uFF0C\u8BF7\u4ECE\u4E8C\u7EF4\u9875\u9762\u91CD\u65B0\u6253\u5F00 3D\u3002",
      snapshotVersion: "\u4E0D\u652F\u6301\u6B64\u65B9\u6848\u7248\u672C\uFF0C\u8BF7\u4ECE\u66F4\u65B0\u540E\u7684\u4E8C\u7EF4\u9875\u9762\u91CD\u65B0\u6253\u5F00 3D\u3002"
    }
  };
  var pointIsValid = (point, room) => point && Number.isFinite(point.x) && Number.isFinite(point.y) && point.x >= 0 && point.x <= room.width && point.y >= 0 && point.y <= room.depth;
  function validatePlanSnapshot(snapshot) {
    if (!snapshot || snapshot.version !== PLAN_SNAPSHOT_VERSION) return "snapshotVersion";
    const { room, layout, cameraPlan, visibility } = snapshot;
    if (!room || ![room.width, room.depth, room.height].every(Number.isFinite) || room.width < 4 || room.width > 30 || room.depth < 5 || room.depth > 50 || room.height < 2.4 || room.height > 6) return "roomSize";
    if (!layout || !cameraPlan || !Object.hasOwn(cameraModels, cameraPlan.teacher) || !Object.hasOwn(cameraModels, cameraPlan.student) || !visibility || ["teacher", "student", "s210", "speaker", "display", "ifp"].some((key) => typeof visibility[key] !== "boolean") || typeof snapshot.projectTitle !== "string" || typeof snapshot.lang !== "string" || typeof snapshot.hubName !== "string" || typeof snapshot.displayName !== "string" || !["55", "65", "75"].includes(String(snapshot.displaySize))) return "snapshotInvalid";
    if (!["studentCams", "s210s", "speakers", "displays"].every((key) => Array.isArray(layout[key])) || layout.studentCams.length < 1 || layout.studentCams.length > 3 || layout.s210s.length > 10 || layout.speakers.length > 100 || layout.displays.length > 100 || ![layout.teacherCam, layout.hub, layout.largeScreen, ...layout.studentCams, ...layout.s210s, ...layout.speakers, ...layout.displays].every((point) => pointIsValid(point, room)) || layout.s210s.some((mic) => !["up", "down"].includes(mic.facing)) || !Number.isFinite(layout.largeScreen.width) || layout.largeScreen.width <= 0 || !Number.isInteger(cameraPlan.studentQty) || cameraPlan.studentQty !== layout.studentCams.length || !cameraModels[cameraPlan.student].projectOnly && cameraPlan.studentQty !== 1) return "snapshotInvalid";
    if (visibility.ifp) {
      const { x, width } = layout.largeScreen;
      if (width + 1.3 > room.width || x - width / 2 < 0 || x + width / 2 > room.width) return "screenSpace";
      const halfHeight = width * 9 / 32;
      if (Math.max(1.2, halfHeight + 0.08) > room.height - halfHeight - 0.08) return "screenHeight";
    }
    return null;
  }
  function createPlanSnapshot({
    projectTitle,
    lang,
    roomWidth,
    roomLength,
    roomHeight,
    activeCameraPlan,
    activeStudentQty,
    teacherCam,
    studentCams,
    s210s,
    speakers,
    displays,
    largeScreen,
    hub,
    hubName,
    displayName,
    displaySize,
    showTeacherCam,
    showStudentCam,
    showS210,
    showSpeakers,
    showDisplays,
    showLargeScreen
  }) {
    return JSON.parse(JSON.stringify({
      version: PLAN_SNAPSHOT_VERSION,
      projectTitle,
      lang,
      room: { width: roomWidth, depth: roomLength, height: roomHeight },
      cameraPlan: { teacher: activeCameraPlan.teacher, student: activeCameraPlan.student, studentQty: activeStudentQty },
      layout: { teacherCam, studentCams: studentCams.slice(0, activeStudentQty), s210s, speakers, displays, largeScreen, hub },
      hubName,
      displayName,
      displaySize: String(displaySize),
      visibility: {
        teacher: showTeacherCam,
        student: showStudentCam,
        s210: showS210,
        speaker: showSpeakers,
        display: showDisplays,
        ifp: showLargeScreen
      }
    }));
  }
  function encodePlanSnapshot(snapshot) {
    const error = validatePlanSnapshot(snapshot);
    if (error) throw new Error(error);
    const fragment = "#plan=" + encodeURIComponent(JSON.stringify(snapshot));
    if (fragment.length > 2e5) throw new Error("snapshotInvalid");
    return fragment;
  }

  // src/domain/quotation.js
  function quotationForPlan(v) {
    const { line } = window.Quotation;
    const lines = [...window.Quotation.qnexLines(v.qnexModel), line("LCS810 GEN2", 1, "K3200N1-D15 recording host for lecture capture and USB hybrid learning. Audio-processing and interaction modules are optional; confirm ordered options.")];
    v.cameraBomLines.forEach((l) => lines.push(line(l.model.label, l.quantity, `${l.role === v.longDistanceCopy.teacher ? "Teacher" : "Student"} camera for lecture recording; confirm GEN2 protocol, tracking and power compatibility.`)));
    if (v.showS210) lines.push(line("S210", v.s210s.length, "Ceiling microphone for room voice capture. Confirm GEN2 audio configuration and on-site coverage."));
    if (v.needsA3006) lines.push(line("A3006", 1, "S210 microphone expansion mixer. Confirm GEN2 routing and USB conferencing compatibility."));
    if (v.showSpeakers) lines.push(line("PS610", v.speakers.length, "Room sound reinforcement speaker. Amplification and load matching require confirmation."));
    if (v.needsCameraPoEExpansion) lines.push(line("External PoE switch", 1, "Camera network expansion; select model, PoE budget, VLAN and control path."));
    if (v.needsFeedbackSuppressor) lines.push(line("Feedback suppressor", 1, "Feedback control for this room; model and routing require selection.", false, false));
    if (v.showLargeScreen) lines.push(line("QA1400 Pro 86-inch", 1, "86-inch interactive flat panel for teaching presentations, touch interaction and hybrid learning."));
    if (v.showDisplays) lines.push(line(`Auxiliary Display / TV ${v.displaySize}-inch`, v.displays.length, "Auxiliary display coverage; model, mounting and signal distribution require selection."));
    return {
      sceneKind: "lcs",
      qnexModel: v.qnexModel,
      sceneHash: () => encodePlanSnapshot(createPlanSnapshot({ ...v, lang: "en", hubName: "LCS810 GEN2", projectTitle: "LCS GEN2 Hybrid Learning" })),
      title: "LCS GEN2 Hybrid Learning",
      width: v.roomWidth,
      depth: v.roomLength,
      lines,
      summary: `Teaching, hybrid learning and unified room control with ${v.qnexModel} and LCS lecture capture.`,
      detail: window.Quotation.scenarioDetail(v.qnexModel, true)
    };
  }

  // src/domain/bom.js
  function getBomDecisions({
    showTeacherCam,
    showStudentCam,
    teacherCameraModel,
    studentCameraModel,
    activeStudentQty,
    teacherRole,
    studentRole,
    roomArea,
    showS210,
    s210s,
    showSpeakers,
    speakers,
    roomLength,
    coverage
  }) {
    const cameraBomLines = [
      ...showTeacherCam ? [{ model: teacherCameraModel, role: teacherRole, quantity: 1 }] : [],
      ...showStudentCam ? [{ model: studentCameraModel, role: studentRole, quantity: activeStudentQty }] : []
    ];
    const totalCameraQty = cameraBomLines.reduce((total, line) => total + line.quantity, 0);
    const needsCameraPoEExpansion = totalCameraQty > 3;
    const needsA3006 = showS210 && s210s.length > S210_DIRECT_HOST_CAPACITY && s210s.length <= S210_DIRECT_HOST_CAPACITY + S210_A3006_CAPACITY;
    const needsFeedbackSuppressor = roomArea > 200 && showS210 && s210s.length > 0 && showSpeakers && speakers.length > 0;
    const needsFeedbackMicCountReview = !needsFeedbackSuppressor && showS210 && s210s.length > 4 && showSpeakers && speakers.length > 0;
    const activeS210CoverageTarget = s210s.length <= 2 ? { best: 80, limit: 95 } : { best: 75, limit: 85 };
    const s210CoverageUnmet = showS210 && s210s.length > 0 && (coverage.best < activeS210CoverageTarget.best || coverage.limit < activeS210CoverageTarget.limit);
    const s210OverCapacity = showS210 && s210s.length > S210_MAX_COUNT;
    const needsPs610AmpReview = showSpeakers && speakers.length > 0;
    const needsDelayReview = showSpeakers && speakers.length >= 4 && roomLength > 18;
    return {
      cameraBomLines,
      totalCameraQty,
      needsCameraPoEExpansion,
      needsFeedbackSuppressor,
      needsA3006,
      needsFeedbackMicCountReview,
      activeS210CoverageTarget,
      s210CoverageUnmet,
      s210OverCapacity,
      needsPs610AmpReview,
      needsDelayReview
    };
  }

  // src/drag.js
  var createDragHandler = ({
    isDragging,
    svgRef,
    roomWidth,
    roomLength,
    revX,
    revY,
    setTeacherCam,
    setStudentCams,
    s210s,
    setS210s,
    setHub,
    setLargeScreen,
    speakers,
    setSpeakers,
    displays,
    setDisplays
  }) => (e) => {
    if (!isDragging || !svgRef.current) return;
    const svg = svgRef.current;
    const group = svg.getElementById("rotated-group");
    if (!group) return;
    const point = svg.createSVGPoint();
    point.x = e.clientX;
    point.y = e.clientY;
    const CTM = group.getScreenCTM();
    if (!CTM) return;
    const localPoint = point.matrixTransform(CTM.inverse());
    const px = localPoint.x;
    const py = localPoint.y;
    const nx = Math.max(0.1, Math.min(roomWidth - 0.1, revX(px)));
    const ny = Math.max(0.1, Math.min(roomLength - 0.1, revY(py)));
    const cameraX = Math.max(0, Math.min(roomWidth, revX(px)));
    const cameraY = Math.max(0, Math.min(roomLength, revY(py)));
    if (isDragging === "teacher") setTeacherCam({ x: cameraX, y: cameraY });
    else if (isDragging.startsWith("student-")) {
      const cameraId = parseInt(isDragging.split("-")[1]);
      setStudentCams((cameras) => cameras.map(
        (camera) => camera.id === cameraId ? { ...camera, x: cameraX, y: cameraY } : camera
      ));
    } else if (isDragging.startsWith("s210-")) {
      const idx = parseInt(isDragging.split("-")[1]);
      const newS210s = [...s210s];
      const targetIdx = newS210s.findIndex((m) => m.id === idx);
      if (targetIdx > -1) {
        newS210s[targetIdx] = { ...newS210s[targetIdx], x: nx, y: ny };
        setS210s(newS210s);
      }
    } else if (isDragging === "hub") setHub({ x: nx, y: ny });
    else if (isDragging === "largeScreen") setLargeScreen((screen) => ({ ...screen, x: nx, y: ny }));
    else if (isDragging.startsWith("spk-")) {
      const idx = parseInt(isDragging.split("-")[1]);
      const newSpks = [...speakers];
      newSpks[idx] = { ...newSpks[idx], x: nx, y: ny };
      setSpeakers(newSpks);
    } else if (isDragging.startsWith("disp-")) {
      const idParts = isDragging.split("-");
      const targetId = idParts[1];
      const newDisps = [...displays];
      const idx = newDisps.findIndex((d) => d.id === targetId);
      if (idx > -1) {
        newDisps[idx] = { ...newDisps[idx], x: nx, y: ny };
        setDisplays(newDisps);
      }
    }
  };

  // src/exportPng.js
  var exportSvgPng = ({ svgRef, isRotated, vbW, vbH, projectTitle }) => {
    if (!svgRef.current) return;
    const svgElement = svgRef.current;
    const serializer = new XMLSerializer();
    let svgString = serializer.serializeToString(svgElement);
    const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement("canvas");
      const dpiScale = 2;
      const w = isRotated ? vbH : vbW;
      const h = isRotated ? vbW : vbH;
      canvas.width = w * dpiScale;
      canvas.height = h * dpiScale;
      const context = canvas.getContext("2d");
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.scale(dpiScale, dpiScale);
      context.drawImage(image, 0, 0);
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `${projectTitle.trim().replace(/\s+/g, "-")}-layout.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(url);
    };
    image.src = url;
  };

  // src/appContext.js
  var AppContext = React.createContext(null);
  var useApp = () => React.useContext(AppContext);

  // src/components/Controls.jsx
  function Controls() {
    const {
      qnexModel,
      setQnexModel,
      quote,
      activeStudentQty,
      cameraPackage,
      coverage,
      displayName,
      displaySize,
      formatDistanceLimitWarning,
      formatMetricRange,
      handleAddS210,
      handleCameraPackageChange,
      handleExportPNG,
      handlePresetChange,
      handleRecalculate,
      handleS210CountChange,
      hubName,
      isRotated,
      lang,
      largeScreen,
      longRoomEnabled,
      preset,
      projectTitle,
      roomHeight,
      roomIsValid,
      roomLength,
      roomWidth,
      s210CoverageUnmet,
      s210OverCapacity,
      s210s,
      scale,
      setDisplayName,
      setDisplaySize,
      setHubName,
      setIsLongDistancePanelOpen,
      setIsRotated,
      setLang,
      setPreset,
      setProjectTitle,
      setRoomHeight,
      setRoomLength,
      setRoomWidth,
      setShowDisplays,
      setShowLargeScreen,
      setShowS210,
      setShowSpeakers,
      setShowStudentCam,
      setShowTeacherCam,
      setThemeKey,
      showDisplays,
      showLargeScreen,
      showS210,
      showSpeakers,
      showStudentCam,
      showTeacherCam,
      studentBelowTypicalRange,
      studentCameraModel,
      studentDistanceWarning,
      studentDistances,
      studentMaxDistance,
      studentWidths,
      t,
      tDist,
      tWidth,
      teacherBelowTypicalRange,
      teacherCam,
      teacherCameraModel,
      teacherDistanceWarning,
      teacherMaxDistance,
      teacherStageCoverageWarning,
      th,
      themeKey,
      handleOpen3D,
      threeDCopy,
      threeDError
    } = useApp();
    const [optionsOpen, setOptionsOpen] = React.useState(false);
    return /* @__PURE__ */ React.createElement("header", { className: "lcs-toolbar" }, /* @__PURE__ */ React.createElement("div", { className: "lcs-toolbar-main" }, /* @__PURE__ */ React.createElement("a", { href: new URLSearchParams(location.search).get("home") || "../../index.html" }, window.Quotation.words(lang)[3]), /* @__PURE__ */ React.createElement("div", { className: "lcs-brand" }, /* @__PURE__ */ React.createElement("h1", { className: `font-black uppercase tracking-tighter italic ${th.headerText}` }, projectTitle), /* @__PURE__ */ React.createElement("p", { className: `font-mono tracking-widest uppercase ${th.subText}` }, t.subtitle)), /* @__PURE__ */ React.createElement("div", { className: "lcs-room-controls" }, /* @__PURE__ */ React.createElement("label", { className: "text-[10px] uppercase font-bold flex flex-col opacity-80" }, t.preset, /* @__PURE__ */ React.createElement("select", { value: preset, onChange: (e) => handlePresetChange(e.target.value), className: `${th.inputBg} ${th.inputText} ${th.inputBorder} p-1 rounded border` }, /* @__PURE__ */ React.createElement("option", { value: "custom" }, t.presetCustom), /* @__PURE__ */ React.createElement("option", { value: "standard" }, t.presetStandard), /* @__PURE__ */ React.createElement("option", { value: "large" }, t.presetLarge), /* @__PURE__ */ React.createElement("option", { value: "lecture" }, t.presetLecture), /* @__PURE__ */ React.createElement("option", { value: "ultra" }, t.presetUltra))), /* @__PURE__ */ React.createElement("label", { className: "text-[10px] uppercase font-bold flex flex-col opacity-80" }, t.width, /* @__PURE__ */ React.createElement("input", { type: "number", value: roomWidth, min: "0.1", onChange: (e) => {
      setRoomWidth(Number(e.target.value));
      setPreset("custom");
    }, className: `${th.inputBg} ${th.inputText} ${th.inputBorder} p-1 rounded w-16 border`, step: "0.1" })), /* @__PURE__ */ React.createElement("label", { className: "text-[10px] uppercase font-bold flex flex-col opacity-80" }, t.length, /* @__PURE__ */ React.createElement("input", { type: "number", value: roomLength, min: "0.1", onChange: (e) => {
      setRoomLength(Number(e.target.value));
      setPreset("custom");
    }, className: `${th.inputBg} ${th.inputText} ${th.inputBorder} p-1 rounded w-16 border`, step: "0.1" })), /* @__PURE__ */ React.createElement("label", { className: "text-[10px] uppercase font-bold flex flex-col opacity-80", title: t.heightNote }, t.height, /* @__PURE__ */ React.createElement("input", { type: "number", value: roomHeight, min: "0.1", onChange: (e) => setRoomHeight(Number(e.target.value)), className: `${th.inputBg} ${th.inputText} ${th.inputBorder} p-1 rounded w-16 border`, step: "0.1" })), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: handleRecalculate,
        disabled: !roomIsValid,
        className: `font-bold text-[10px] px-3 py-1 rounded transition h-[28px] flex items-center justify-center gap-1 shadow-md border ${roomIsValid ? "bg-amber-500 hover:bg-amber-600 active:scale-95 text-white border-amber-400" : "bg-slate-600 text-slate-300 border-slate-500 cursor-not-allowed"}`
      },
      t.recalculate
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        id: "open-3d-button",
        type: "button",
        onClick: handleOpen3D,
        className: "font-bold text-[10px] px-3 py-1 rounded h-[28px] bg-blue-600 hover:bg-blue-700 text-white border border-blue-400"
      },
      threeDCopy.open3D
    )), /* @__PURE__ */ React.createElement("button", { type: "button", className: `lcs-panel-trigger ${th.inputBg} ${th.inputText} ${th.inputBorder}`, "aria-expanded": optionsOpen, "aria-controls": "lcs-options", onClick: () => setOptionsOpen(!optionsOpen) }, t.moreOptions, " ", /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, optionsOpen ? "\u25B4" : "\u25BE"))), !roomIsValid && /* @__PURE__ */ React.createElement("p", { className: "text-[10px] font-bold text-red-500" }, t.invalidDimensions), threeDError && /* @__PURE__ */ React.createElement("p", { id: "open-3d-error", role: "alert", className: "text-[10px] font-bold text-red-500" }, threeDError), roomHeight >= 3.5 && /* @__PURE__ */ React.createElement("p", { className: "lcs-height-warning text-[10px] font-bold text-amber-500" }, "\u26A0 ", t.heightWarning), optionsOpen && /* @__PURE__ */ React.createElement("aside", { id: "lcs-options", className: `lcs-options-panel ${th.panelBg} ${th.panelBorder}` }, /* @__PURE__ */ React.createElement("button", { id: "export-quotation", className: "p-2 rounded bg-blue-600 text-white", onClick: (e) => window.Quotation.download(e.currentTarget, quote) }, window.Quotation.words(lang)[0]), /* @__PURE__ */ React.createElement("div", { className: "lcs-options-grid" }, /* @__PURE__ */ React.createElement("label", { className: "text-xs flex flex-col" }, "Q-NEX ", lang === "zh" ? "\u7CFB\u7EDF" : "System", /* @__PURE__ */ React.createElement("select", { id: "qnex-model", value: qnexModel, onChange: (e) => setQnexModel(e.target.value), className: `${th.inputBg} ${th.inputText} p-1 rounded border` }, window.Quotation.qnexModels.map((model) => /* @__PURE__ */ React.createElement("option", { key: model, value: model }, model)))), /* @__PURE__ */ React.createElement("label", { className: "text-[10px] uppercase font-bold flex flex-col opacity-80" }, t.cameraPackage, /* @__PURE__ */ React.createElement("select", { value: cameraPackage, onChange: (e) => handleCameraPackageChange(e.target.value), className: `${th.inputBg} ${th.inputText} ${th.inputBorder} p-1 rounded border` }, /* @__PURE__ */ React.createElement("option", { value: "CV870" }, t.cv870Package), /* @__PURE__ */ React.createElement("option", { value: "CV210" }, t.cv210Package))), /* @__PURE__ */ React.createElement("label", { className: "text-[10px] uppercase font-bold flex flex-col opacity-80" }, t.s210Count, /* @__PURE__ */ React.createElement("select", { id: "s210-count", value: s210s.length, onChange: (e) => handleS210CountChange(e.target.value), className: `${th.inputBg} ${th.inputText} ${th.inputBorder} p-1 rounded border` }, Array.from({ length: S210_MAX_COUNT + 1 }, (_, n) => n).map((n) => /* @__PURE__ */ React.createElement("option", { key: n, value: n }, n)))), /* @__PURE__ */ React.createElement("label", { className: "text-[10px] uppercase font-bold flex flex-col opacity-80" }, t.dispSize, /* @__PURE__ */ React.createElement("select", { value: displaySize, onChange: (e) => setDisplaySize(e.target.value), className: `${th.inputBg} ${th.inputText} ${th.inputBorder} p-1 rounded border` }, /* @__PURE__ */ React.createElement("option", { value: "55" }, '55" (', t.maximumShort, " 4.1m)"), /* @__PURE__ */ React.createElement("option", { value: "65" }, '65" (', t.maximumShort, " 5.0m)"), /* @__PURE__ */ React.createElement("option", { value: "75" }, '75" (', t.maximumShort, " 5.6m)"))), /* @__PURE__ */ React.createElement("label", { className: "text-[10px] uppercase font-bold flex flex-col opacity-80" }, t.dispRename, /* @__PURE__ */ React.createElement("input", { type: "text", value: displayName, onChange: (e) => setDisplayName(e.target.value), className: `${th.inputBg} ${th.inputText} ${th.inputBorder} p-1 rounded w-24 border` })), /* @__PURE__ */ React.createElement("label", { className: "text-[10px] uppercase font-bold flex flex-col opacity-80" }, t.titleRename, /* @__PURE__ */ React.createElement("input", { type: "text", value: projectTitle, onChange: (e) => setProjectTitle(e.target.value), className: `${th.inputBg} ${th.inputText} ${th.inputBorder} p-1 rounded w-48 border` })), /* @__PURE__ */ React.createElement("label", { className: "text-[10px] uppercase font-bold flex flex-col opacity-80" }, t.hubRename, /* @__PURE__ */ React.createElement("input", { type: "text", value: hubName, onChange: (e) => setHubName(e.target.value), className: `${th.inputBg} ${th.inputText} ${th.inputBorder} p-1 rounded w-20 border` })), /* @__PURE__ */ React.createElement("label", { className: "text-[10px] uppercase font-bold flex flex-col opacity-80" }, t.theme, /* @__PURE__ */ React.createElement("select", { value: themeKey, onChange: (e) => setThemeKey(e.target.value), className: `${th.inputBg} ${th.inputText} ${th.inputBorder} p-1 rounded border` }, /* @__PURE__ */ React.createElement("option", { value: "dark" }, t.themeDark), /* @__PURE__ */ React.createElement("option", { value: "light" }, t.themeLight), /* @__PURE__ */ React.createElement("option", { value: "highContrast" }, t.themeHighContrast))), /* @__PURE__ */ React.createElement("label", { className: "text-[10px] uppercase font-bold flex flex-col opacity-80" }, t.language, /* @__PURE__ */ React.createElement("select", { value: lang, onChange: (e) => setLang(e.target.value), className: `${th.inputBg} ${th.inputText} ${th.inputBorder} p-1 rounded border` }, /* @__PURE__ */ React.createElement("option", { value: "en" }, "English"), /* @__PURE__ */ React.createElement("option", { value: "zh" }, "\u7B80\u4F53\u4E2D\u6587"), /* @__PURE__ */ React.createElement("option", { value: "fr" }, "Fran\xE7ais"), /* @__PURE__ */ React.createElement("option", { value: "es" }, "Espa\xF1ol"), /* @__PURE__ */ React.createElement("option", { value: "ja" }, "\u65E5\u672C\u8A9E"), /* @__PURE__ */ React.createElement("option", { value: "ko" }, "\uD55C\uAD6D\uC5B4"), /* @__PURE__ */ React.createElement("option", { value: "it" }, "Italiano"), /* @__PURE__ */ React.createElement("option", { value: "hu" }, "Magyar"), /* @__PURE__ */ React.createElement("option", { value: "ar" }, "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"))), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setIsRotated(!isRotated),
        className: "bg-blue-500 hover:bg-blue-600 active:scale-95 text-white font-bold text-[10px] px-2.5 py-1 rounded transition h-[28px] flex items-center justify-center gap-1 shadow-md border border-blue-400"
      },
      "\u21BB ",
      t.rotate90
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: handleExportPNG,
        className: "bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-[10px] px-2.5 py-1 rounded transition h-[28px] flex items-center justify-center gap-1 shadow-md border border-emerald-500"
      },
      "\u{1F4BE} ",
      t.exportPng
    )), cameraPackage === "CV210" && /* @__PURE__ */ React.createElement("p", { className: "mt-2 text-[9px] font-bold text-amber-500" }, t.cv210PackageNote), /* @__PURE__ */ React.createElement("div", { className: `mt-3 p-2 rounded border ${th.panelBorder} ${th.panelBg} inline-block` }, /* @__PURE__ */ React.createElement("p", { className: `text-[10px] font-bold uppercase mb-1 ${th.subText}` }, t.toggleVis), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-4" }, /* @__PURE__ */ React.createElement("label", { className: "text-[10px] flex items-center gap-1 cursor-pointer" }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: showTeacherCam, onChange: (e) => setShowTeacherCam(e.target.checked) }), t.tCamLbl), /* @__PURE__ */ React.createElement("label", { className: "text-[10px] flex items-center gap-1 cursor-pointer" }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: showStudentCam, onChange: (e) => setShowStudentCam(e.target.checked) }), t.sCamLbl), /* @__PURE__ */ React.createElement("label", { className: "text-[10px] flex items-center gap-1 cursor-pointer" }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: showS210, onChange: (e) => setShowS210(e.target.checked) }), t.s210Lbl), /* @__PURE__ */ React.createElement("label", { className: "text-[10px] flex items-center gap-1 cursor-pointer" }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: showSpeakers, onChange: (e) => setShowSpeakers(e.target.checked) }), t.ps610Speaker), /* @__PURE__ */ React.createElement("label", { className: "text-[10px] flex items-center gap-1 cursor-pointer" }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: showDisplays, onChange: (e) => setShowDisplays(e.target.checked) }), displayName), /* @__PURE__ */ React.createElement("label", { className: "text-[10px] flex items-center gap-1 cursor-pointer" }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: showLargeScreen, onChange: (e) => setShowLargeScreen(e.target.checked) }), "QA1400 Pro 86\u2033 IFP"))), longRoomEnabled && /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setIsLongDistancePanelOpen(true),
        className: "mt-3 bg-violet-600 hover:bg-violet-700 active:scale-95 text-white font-bold text-[9px] px-3 py-1.5 rounded transition shadow-md border border-violet-400"
      },
      "\u{1F4F7} ",
      t.longDistancePlan
    ), /* @__PURE__ */ React.createElement("details", { className: "lcs-status-details" }, /* @__PURE__ */ React.createElement("summary", { className: `text-xs font-bold ${th.headerText}` }, t.coverageStatus), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-3 mt-3" }, showTeacherCam && /* @__PURE__ */ React.createElement("div", { className: `${th.panelBg} border ${teacherDistanceWarning || teacherBelowTypicalRange || teacherStageCoverageWarning ? "border-red-500 border-2" : th.panelBorder} p-3 rounded-xl min-w-[160px] shadow-lg` }, /* @__PURE__ */ React.createElement("p", { className: `text-[10px] font-bold uppercase mb-1 ${th.subText}` }, t.teacherCam, " \xB7 ", teacherCameraModel.label), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-end" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: `text-[10px] uppercase font-mono ${th.subText}` }, t.dist), /* @__PURE__ */ React.createElement("p", { className: `text-sm font-mono font-black ${teacherDistanceWarning || teacherBelowTypicalRange ? "text-red-500" : "text-yellow-500"}` }, tDist.toFixed(1), "m")), /* @__PURE__ */ React.createElement("div", { className: "text-right" }, /* @__PURE__ */ React.createElement("p", { className: `text-[10px] uppercase font-mono ${th.subText}` }, t.cov), /* @__PURE__ */ React.createElement("p", { className: "text-sm font-mono font-black text-yellow-500" }, tWidth.toFixed(1), "m"))), teacherDistanceWarning && /* @__PURE__ */ React.createElement("p", { className: "text-red-500 text-[9px] font-bold mt-1 animate-pulse" }, formatDistanceLimitWarning(teacherMaxDistance)), teacherBelowTypicalRange && /* @__PURE__ */ React.createElement("p", { className: "text-amber-500 text-[9px] font-bold mt-1" }, t.typicalRangeWarn), teacherStageCoverageWarning && /* @__PURE__ */ React.createElement("p", { className: "text-amber-500 text-[9px] font-bold mt-1" }, t.stageCoverageWarn)), showStudentCam && /* @__PURE__ */ React.createElement("div", { className: `${th.panelBg} border ${studentDistanceWarning || studentBelowTypicalRange ? "border-red-500 border-2" : th.panelBorder} p-3 rounded-xl min-w-[160px] shadow-lg` }, /* @__PURE__ */ React.createElement("p", { className: `text-[10px] font-bold uppercase mb-1 ${th.subText}` }, t.studentCam, " \xB7 ", studentCameraModel.label, " \xD7", activeStudentQty), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-end" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: `text-[10px] uppercase font-mono ${th.subText}` }, t.dist), /* @__PURE__ */ React.createElement("p", { className: "text-sm font-mono font-black text-red-500" }, formatMetricRange(studentDistances), "m")), /* @__PURE__ */ React.createElement("div", { className: "text-right" }, /* @__PURE__ */ React.createElement("p", { className: `text-[10px] uppercase font-mono ${th.subText}` }, t.cov), /* @__PURE__ */ React.createElement("p", { className: "text-sm font-mono font-black text-red-500" }, formatMetricRange(studentWidths), "m"))), studentDistanceWarning && /* @__PURE__ */ React.createElement("p", { className: "text-red-500 text-[9px] font-bold mt-1 animate-pulse" }, formatDistanceLimitWarning(studentMaxDistance)), studentBelowTypicalRange && /* @__PURE__ */ React.createElement("p", { className: "text-amber-500 text-[9px] font-bold mt-1" }, t.typicalRangeWarn)), showS210 && /* @__PURE__ */ React.createElement("div", { className: `${th.panelBg} border ${s210OverCapacity ? "border-red-500 border-2" : th.panelBorder} p-3 rounded-xl min-w-[200px] shadow-lg flex flex-col justify-between` }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center mb-1" }, /* @__PURE__ */ React.createElement("p", { className: `text-[10px] font-bold uppercase ${th.subText}` }, t.s210Mic), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: handleAddS210,
        disabled: s210s.length >= S210_MAX_COUNT,
        className: `text-white font-bold text-[9px] px-1.5 py-0.5 rounded transition ${s210s.length >= S210_MAX_COUNT ? "bg-slate-600 cursor-not-allowed" : "bg-emerald-500 hover:bg-emerald-600 active:scale-95"}`,
        title: t.addS210
      },
      "+ ",
      t.addS210
    )), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-end gap-2 mb-1" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-[9px] font-mono font-black text-emerald-400" }, t.bestRange), /* @__PURE__ */ React.createElement("p", { className: "text-lg font-mono font-black text-emerald-400" }, coverage.best.toFixed(0), "%")), /* @__PURE__ */ React.createElement("div", { className: "text-right" }, /* @__PURE__ */ React.createElement("p", { className: "text-[9px] font-mono font-black text-sky-400" }, t.limitRange), /* @__PURE__ */ React.createElement("p", { className: "text-lg font-mono font-black text-sky-400" }, coverage.limit.toFixed(0), "%"))), /* @__PURE__ */ React.createElement("div", { className: "w-full bg-slate-800 rounded-full h-1.5 overflow-hidden flex" }, /* @__PURE__ */ React.createElement("div", { style: { width: `${coverage.best}%` }, className: "bg-emerald-400 h-full" }), /* @__PURE__ */ React.createElement("div", { style: { width: `${coverage.limit - coverage.best}%` }, className: "bg-sky-400 h-full" })), s210OverCapacity && /* @__PURE__ */ React.createElement("p", { className: "text-red-500 text-[9px] font-bold mt-1.5 animate-pulse" }, t.s210OverCapacity), !s210OverCapacity && s210CoverageUnmet && /* @__PURE__ */ React.createElement("p", { className: "text-amber-500 text-[9px] font-bold mt-1.5" }, t.s210CoverageUnmet))))));
  }

  // src/components/LongDistancePanel.jsx
  function LongDistancePanel() {
    const {
      cameraModels: cameraModels2,
      cameraPoEExpansionLabel,
      getPvcFrameRangeText,
      isLongDistancePanelOpen,
      longDistanceCameras,
      longDistanceCopy,
      longRoomEnabled,
      longRoomRecommendation,
      needsCameraPoEExpansion,
      roomLength,
      scale,
      setIsLongDistancePanelOpen,
      setLongDistanceCameras,
      setShowWideFovCones,
      showWideFovCones,
      studentCameraModel,
      t,
      teacherCameraModel,
      th
    } = useApp();
    return /* @__PURE__ */ React.createElement(React.Fragment, null, longRoomEnabled && isLongDistancePanelOpen && /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "fixed inset-0 z-50 bg-slate-950/45 p-4 sm:p-6 flex items-start justify-start",
        onClick: () => setIsLongDistancePanelOpen(false)
      },
      /* @__PURE__ */ React.createElement(
        "aside",
        {
          role: "dialog",
          "aria-modal": "true",
          "aria-label": longDistanceCopy.title,
          className: `w-full max-w-3xl max-h-[calc(100vh-3rem)] overflow-y-auto p-4 rounded-2xl border shadow-2xl ${th.panelBg} ${th.panelBorder}`,
          onClick: (e) => e.stopPropagation()
        },
        /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap justify-between items-start gap-3 mb-3" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: `text-sm font-black ${th.headerText}` }, "\u{1F4F7} ", longDistanceCopy.title), /* @__PURE__ */ React.createElement("p", { className: `text-[10px] mt-1 ${th.subText}` }, longDistanceCopy.intro)), /* @__PURE__ */ React.createElement(
          "button",
          {
            onClick: () => setIsLongDistancePanelOpen(false),
            className: "bg-slate-700 hover:bg-slate-600 active:scale-95 text-white font-bold text-[10px] px-3 py-1.5 rounded transition border border-slate-500"
          },
          t.longCollapse
        )),
        /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3" }, /* @__PURE__ */ React.createElement("label", { className: "text-[11px] font-bold flex flex-col gap-1" }, longDistanceCopy.teacher, /* @__PURE__ */ React.createElement(
          "select",
          {
            value: longDistanceCameras.teacher,
            onChange: (e) => setLongDistanceCameras((prev) => ({ ...prev, teacher: e.target.value })),
            className: `${th.inputBg} ${th.inputText} ${th.inputBorder} p-2 rounded border`
          },
          /* @__PURE__ */ React.createElement("option", { value: "CV870" }, "CV870 Pro (", t.standard, ")"),
          /* @__PURE__ */ React.createElement("option", { value: "PVC-G530P" }, "PVC-G530P \xB7 30x \xB7 HFOV 56.5\xB0\u20132\xB0"),
          /* @__PURE__ */ React.createElement("option", { value: "PVC-G520P" }, "PVC-G520P \xB7 20x \xB7 HFOV 56.5\xB0\u20132.8\xB0"),
          /* @__PURE__ */ React.createElement("option", { value: "PVC-G512P" }, "PVC-G512P \xB7 12x \xB7 HFOV 81\xB0\u20137.6\xB0")
        )), /* @__PURE__ */ React.createElement("label", { className: "text-[11px] font-bold flex flex-col gap-1" }, longDistanceCopy.student, /* @__PURE__ */ React.createElement(
          "select",
          {
            value: longDistanceCameras.student,
            onChange: (e) => setLongDistanceCameras((prev) => ({
              ...prev,
              student: e.target.value,
              studentQty: e.target.value === "CV870" ? 1 : prev.studentQty
            })),
            className: `${th.inputBg} ${th.inputText} ${th.inputBorder} p-2 rounded border`
          },
          /* @__PURE__ */ React.createElement("option", { value: "CV870" }, "CV870 Pro (", t.standard, ")"),
          /* @__PURE__ */ React.createElement("option", { value: "PVC-G530P" }, "PVC-G530P \xB7 30x \xB7 HFOV 56.5\xB0\u20132\xB0"),
          /* @__PURE__ */ React.createElement("option", { value: "PVC-G520P" }, "PVC-G520P \xB7 20x \xB7 HFOV 56.5\xB0\u20132.8\xB0"),
          /* @__PURE__ */ React.createElement("option", { value: "PVC-G512P" }, "PVC-G512P \xB7 12x \xB7 HFOV 81\xB0\u20137.6\xB0")
        )), /* @__PURE__ */ React.createElement("label", { className: "text-[11px] font-bold flex flex-col gap-1" }, longDistanceCopy.studentQty, /* @__PURE__ */ React.createElement(
          "select",
          {
            value: longDistanceCameras.studentQty,
            disabled: !studentCameraModel.projectOnly,
            onChange: (e) => setLongDistanceCameras((prev) => ({ ...prev, studentQty: Number(e.target.value) })),
            className: `${th.inputBg} ${th.inputText} ${th.inputBorder} p-2 rounded border ${!studentCameraModel.projectOnly ? "opacity-50 cursor-not-allowed" : ""}`
          },
          /* @__PURE__ */ React.createElement("option", { value: "1" }, "1"),
          /* @__PURE__ */ React.createElement("option", { value: "2" }, "2"),
          /* @__PURE__ */ React.createElement("option", { value: "3" }, "3")
        ))),
        /* @__PURE__ */ React.createElement("label", { className: `mt-3 inline-flex items-center gap-2 text-[10px] cursor-pointer ${th.subText}` }, /* @__PURE__ */ React.createElement(
          "input",
          {
            type: "checkbox",
            checked: showWideFovCones,
            onChange: (e) => setShowWideFovCones(e.target.checked),
            disabled: !teacherCameraModel.projectOnly && !studentCameraModel.projectOnly
          }
        ), t.longShowWide),
        /* @__PURE__ */ React.createElement("div", { className: "mt-4 flex flex-wrap justify-between items-center gap-2" }, /* @__PURE__ */ React.createElement("p", { className: `text-[11px] font-black ${th.headerText}` }, longDistanceCopy.recommend), /* @__PURE__ */ React.createElement(
          "button",
          {
            onClick: () => setLongDistanceCameras({
              teacher: longRoomRecommendation.teacher,
              student: longRoomRecommendation.student,
              studentQty: longRoomRecommendation.studentQty
            }),
            className: "bg-violet-600 hover:bg-violet-700 active:scale-95 text-white font-bold text-[10px] px-3 py-1.5 rounded transition"
          },
          t.longApply
        )),
        /* @__PURE__ */ React.createElement("div", { className: "mt-2 rounded bg-violet-500/10 border border-violet-400/30 p-3 text-[10px]" }, /* @__PURE__ */ React.createElement("p", { className: "font-bold text-violet-300" }, longRoomRecommendation.teacher, " (", longDistanceCopy.teacher, ") + ", longRoomRecommendation.student, " \xD7 ", longRoomRecommendation.studentQty, " (", longDistanceCopy.student, ")"), /* @__PURE__ */ React.createElement("p", { className: `${th.subText} mt-1.5` }, longRoomRecommendation.reason), /* @__PURE__ */ React.createElement("p", { className: `${th.subText} mt-1.5` }, longDistanceCopy.framing, " @ ", roomLength.toFixed(1), "m \u2014 G530P (56.5\xB0\u21922\xB0): ", getPvcFrameRangeText(cameraModels2["PVC-G530P"]), " \xB7 G520P (56.5\xB0\u21922.8\xB0): ", getPvcFrameRangeText(cameraModels2["PVC-G520P"]), " \xB7 G512P (81\xB0\u21927.6\xB0): ", getPvcFrameRangeText(cameraModels2["PVC-G512P"]))),
        /* @__PURE__ */ React.createElement("div", { className: "mt-3 text-[9px] space-y-1.5" }, /* @__PURE__ */ React.createElement("p", { className: th.subText }, longDistanceCopy.sourceNote), /* @__PURE__ */ React.createElement("p", { className: th.subText }, longDistanceCopy.canvasNote), needsCameraPoEExpansion && /* @__PURE__ */ React.createElement("p", { className: "text-amber-500 font-bold" }, "\u26A0 ", cameraPoEExpansionLabel), /* @__PURE__ */ React.createElement("p", { className: "text-amber-500 font-bold" }, "\u26A0 ", longDistanceCopy.note), /* @__PURE__ */ React.createElement("p", { className: "text-amber-500" }, longDistanceCopy.projectWarning))
      )
    ));
  }

  // src/components/DeviceSpecs.jsx
  function DeviceSpecs() {
    const {
      getCameraSpecText,
      studentCameraModel,
      t,
      teacherCameraModel,
      th
    } = useApp();
    return /* @__PURE__ */ React.createElement("div", { className: `lcs-details-card p-4 rounded-2xl border ${th.panelBg} ${th.panelBorder}` }, /* @__PURE__ */ React.createElement("h3", { className: `text-[10px] font-black tracking-wider uppercase mb-2 ${th.headerText}` }, t.paramTitle), /* @__PURE__ */ React.createElement("div", { className: "space-y-3 text-[10px] font-mono" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "font-bold text-emerald-400 block" }, t.paramS210), /* @__PURE__ */ React.createElement("span", { className: `text-[9px] ${th.subText} block` }, t.paramS210Best), /* @__PURE__ */ React.createElement("span", { className: `text-[9px] ${th.subText} block` }, t.paramS210Limit)), /* @__PURE__ */ React.createElement("div", { className: "border-t border-slate-800/40 pt-1.5" }, /* @__PURE__ */ React.createElement("span", { className: "font-bold text-yellow-500 block" }, t.paramTcam, " \xB7 ", teacherCameraModel.label), /* @__PURE__ */ React.createElement("span", { className: `text-[9px] ${th.subText} block` }, getCameraSpecText(teacherCameraModel, t.paramTcamSpec, "teacher"))), /* @__PURE__ */ React.createElement("div", { className: "border-t border-slate-800/40 pt-1.5" }, /* @__PURE__ */ React.createElement("span", { className: "font-bold text-red-500 block" }, t.paramScam, " \xB7 ", studentCameraModel.label), /* @__PURE__ */ React.createElement("span", { className: `text-[9px] ${th.subText} block` }, getCameraSpecText(studentCameraModel, t.paramScamSpec, "student")))));
  }

  // src/components/BomPanel.jsx
  function BomPanel() {
    const { quote, t, th } = useApp();
    return /* @__PURE__ */ React.createElement("div", { className: `lcs-details-card p-4 rounded-2xl border ${th.panelBg} ${th.panelBorder}` }, /* @__PURE__ */ React.createElement("h3", null, t.deviceStats), quote.lines.filter((l) => l.quantity > 0).map((l, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "flex justify-between gap-2 text-xs py-1" }, /* @__PURE__ */ React.createElement("span", null, l.model), /* @__PURE__ */ React.createElement("strong", null, l.quantity))), /* @__PURE__ */ React.createElement("p", { className: "text-xs mt-3" }, document.documentElement.lang === "zh" ? "GEN2\uFF1A2 HDMI\u8F93\u5165/2\u8F93\u51FA\u30014\u8DEF\u7F51\u7EDC\u89C6\u9891\u30013 PoE\u53E3\u30012\u8DEF\u5E7B\u8C61\u4F9B\u7535\u9EA6\u514B\u98CE\u8F93\u5165\u3002\u97F3\u9891\u5904\u7406\u4E0E\u4E92\u52A8\u6A21\u5757\u9009\u914D\u3002\u8986\u76D6\u4E3A\u4F30\u7B97\uFF0C\u517C\u5BB9\u6027\u4E0E\u4F9B\u8D27\u987B\u6838\u5B9E\u3002" : "GEN2: optional audio processing and interaction; confirm final configuration."));
  }

  // src/components/RoomCanvas.jsx
  function RoomCanvas() {
    const [detailsOpen, setDetailsOpen] = React.useState(false);
    const {
      displayName,
      displaySize,
      displays,
      getCardioidPath: getCardioidPath2,
      getRulerTicks,
      getWidthTicks,
      qnexModel,
      handleDeleteS210,
      handleToggleS210Facing,
      hub,
      hubName,
      isRotated,
      largeScreen,
      maxDistance,
      padding,
      roomIsValid,
      roomLength,
      roomWidth,
      s210BestRange: s210BestRange2,
      s210LimitRange: s210LimitRange2,
      s210s,
      scale,
      setIsDragging,
      showDisplays,
      showLargeScreen,
      showS210,
      showSpeakers,
      showStudentCam,
      showTeacherCam,
      showWideFovCones,
      speakers,
      studentCameraMetrics,
      studentCameraModel,
      studentHfov,
      svgRef,
      t,
      tDist,
      tWideWidth,
      tWidth,
      teacherBelowTypicalRange,
      teacherCam,
      teacherCameraModel,
      teacherDistanceWarning,
      teacherHfov,
      th,
      themeKey,
      tx,
      ty,
      vbH,
      vbW
    } = useApp();
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "lcs-canvas flex-1 rounded-3xl border relative flex items-center justify-center shadow-inner overflow-hidden",
        style: {
          backgroundColor: th.svgBg,
          borderColor: th.roomBorder
        }
      },
      roomIsValid && /* @__PURE__ */ React.createElement(
        "svg",
        {
          ref: svgRef,
          viewBox: isRotated ? `0 0 ${vbH} ${vbW}` : `0 0 ${vbW} ${vbH}`,
          width: isRotated ? vbH : vbW,
          height: isRotated ? vbW : vbH,
          xmlns: "http://www.w3.org/2000/svg",
          className: "lcs-room-svg drop-shadow-2xl opacity-95 transition-all duration-300"
        },
        /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "room-clip" }, /* @__PURE__ */ React.createElement("rect", { x: padding, y: padding, width: roomWidth * scale, height: roomLength * scale })), /* @__PURE__ */ React.createElement("pattern", { id: "grid-pattern", width: "25", height: "25", patternUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("circle", { cx: "1.5", cy: "1.5", r: "1", fill: th.gridLines }))),
        /* @__PURE__ */ React.createElement("rect", { width: "100%", height: "100%", fill: th.svgBg }),
        /* @__PURE__ */ React.createElement("rect", { width: "100%", height: "100%", fill: "url(#grid-pattern)" }),
        /* @__PURE__ */ React.createElement("g", { id: "rotated-group", transform: isRotated ? `translate(0, ${vbW}) rotate(-90)` : "" }, /* @__PURE__ */ React.createElement("rect", { x: padding, y: padding, width: roomWidth * scale, height: roomLength * scale, stroke: th.roomBorder, strokeWidth: themeKey === "highContrast" ? 6 : 4, fill: th.roomFill }), /* @__PURE__ */ React.createElement("rect", { x: tx(roomWidth * 0.15), y: ty(0), width: roomWidth * 0.7 * scale, height: 2.2 * scale, fill: th.stageFill, stroke: th.pillarStroke, strokeWidth: "1" }), /* @__PURE__ */ React.createElement("text", { x: tx(roomWidth / 2), y: ty(1.1), textAnchor: "middle", fill: themeKey === "light" ? "#475569" : "#94a3b8", className: "text-sm font-bold opacity-60", style: { fontFamily: "sans-serif", fontWeight: "bold" } }, t.stage), /* @__PURE__ */ React.createElement("g", { transform: `translate(${tx(roomWidth * 0.25)}, ${ty(1.6)})` }, /* @__PURE__ */ React.createElement("rect", { x: -0.4 * scale, y: -0.2 * scale, width: 0.8 * scale, height: 0.4 * scale, fill: "transparent", stroke: th.pillarStroke, strokeWidth: "2" }), /* @__PURE__ */ React.createElement("line", { x1: "0", y1: -0.2 * scale, x2: "0", y2: -0.4 * scale, stroke: th.pillarStroke, strokeWidth: "2" })), /* @__PURE__ */ React.createElement("text", { x: tx(roomWidth / 2), y: ty(roomLength / 2 + 2), textAnchor: "middle", fill: themeKey === "light" ? "#cbd5e1" : "#1e293b", className: "text-2xl font-black opacity-20 uppercase", style: { fontFamily: "sans-serif", fontWeight: "bold" } }, t.audience), showS210 && s210s.map((mic) => /* @__PURE__ */ React.createElement("g", { key: `s210-range-${mic.id}`, clipPath: "url(#room-clip)" }, /* @__PURE__ */ React.createElement(
          "path",
          {
            d: getCardioidPath2(mic.x, mic.y, s210LimitRange2, mic.facing),
            className: "cardioid-limit",
            fill: "rgba(56, 189, 248, 0.05)",
            stroke: "rgba(56, 189, 248, 0.4)",
            strokeWidth: "1.5"
          }
        ), /* @__PURE__ */ React.createElement(
          "path",
          {
            d: getCardioidPath2(mic.x, mic.y, s210BestRange2, mic.facing),
            className: "cardioid-best",
            fill: "rgba(52, 211, 153, 0.1)",
            stroke: "rgba(52, 211, 153, 0.6)",
            strokeWidth: "2"
          }
        ))), showWideFovCones && showTeacherCam && teacherCameraModel.projectOnly && /* @__PURE__ */ React.createElement(
          "path",
          {
            d: `M ${tx(teacherCam.x)},${ty(teacherCam.y)} L ${tx(teacherCam.x - tWideWidth / 2)},${ty(0)} L ${tx(teacherCam.x + tWideWidth / 2)},${ty(0)} Z`,
            fill: "rgba(250, 204, 21, 0.06)",
            stroke: "rgba(250, 204, 21, 0.85)",
            strokeWidth: "1.5",
            strokeDasharray: "8 5",
            clipPath: "url(#room-clip)"
          }
        ), showWideFovCones && showStudentCam && studentCameraModel.projectOnly && studentCameraMetrics.map((camera) => /* @__PURE__ */ React.createElement(
          "path",
          {
            key: `student-wide-${camera.id}`,
            d: `M ${tx(camera.x)},${ty(camera.y)} L ${tx(camera.x - camera.wideWidth / 2)},${ty(roomLength)} L ${tx(camera.x + camera.wideWidth / 2)},${ty(roomLength)} Z`,
            fill: "rgba(239, 68, 68, 0.06)",
            stroke: "rgba(239, 68, 68, 0.85)",
            strokeWidth: "1.5",
            strokeDasharray: "8 5",
            clipPath: "url(#room-clip)"
          }
        )), showTeacherCam && (() => {
          const isWarning = teacherCameraModel.label === "CV870 Pro" && tDist > maxDistance;
          const w10 = 2 * maxDistance * Math.tan(teacherHfov / 2 * (Math.PI / 180));
          if (isWarning) {
            return /* @__PURE__ */ React.createElement("g", { clipPath: "url(#room-clip)" }, /* @__PURE__ */ React.createElement(
              "path",
              {
                d: `M ${tx(teacherCam.x)},${ty(teacherCam.y)} L ${tx(teacherCam.x - w10 / 2)},${ty(teacherCam.y - 10)} L ${tx(teacherCam.x + w10 / 2)},${ty(teacherCam.y - 10)} Z`,
                className: "camera-cone",
                fill: "rgba(250, 204, 21, 0.15)",
                stroke: "rgba(250, 204, 21, 0.6)",
                strokeWidth: "1.5"
              }
            ), /* @__PURE__ */ React.createElement(
              "path",
              {
                d: `M ${tx(teacherCam.x - w10 / 2)},${ty(teacherCam.y - 10)} L ${tx(teacherCam.x - tWidth / 2)},${ty(0)} L ${tx(teacherCam.x + tWidth / 2)},${ty(0)} L ${tx(teacherCam.x + w10 / 2)},${ty(teacherCam.y - 10)} Z`,
                fill: "rgba(239, 68, 68, 0.22)",
                stroke: "rgba(239, 68, 68, 0.7)",
                strokeWidth: "1"
              }
            ), /* @__PURE__ */ React.createElement("line", { x1: tx(teacherCam.x - w10 / 2 - 0.5), y1: ty(teacherCam.y - 10), x2: tx(teacherCam.x + w10 / 2 + 0.5), y2: ty(teacherCam.y - 10), stroke: "#ef4444", strokeWidth: "3", strokeDasharray: "6 4" }), /* @__PURE__ */ React.createElement("text", { x: tx(teacherCam.x), y: ty(teacherCam.y - 10 - 0.3), textAnchor: "middle", fill: "#dc2626", className: "font-bold text-[9px] uppercase drop-shadow-md bg-white", style: { fontFamily: "sans-serif", fontWeight: "bold" } }, t.cutoffMsg));
          }
          return /* @__PURE__ */ React.createElement(
            "path",
            {
              d: `M ${tx(teacherCam.x)},${ty(teacherCam.y)} L ${tx(teacherCam.x - tWidth / 2)},${ty(0)} L ${tx(teacherCam.x + tWidth / 2)},${ty(0)} Z`,
              className: "camera-cone",
              fill: "rgba(250, 204, 21, 0.15)",
              stroke: "rgba(250, 204, 21, 0.6)",
              strokeWidth: "1.5",
              clipPath: "url(#room-clip)"
            }
          );
        })(), showStudentCam && studentCameraMetrics.map((camera) => {
          const isWarning = studentCameraModel.label === "CV870 Pro" && camera.distance > maxDistance;
          const w10 = 2 * maxDistance * Math.tan(studentHfov / 2 * (Math.PI / 180));
          if (isWarning) {
            return /* @__PURE__ */ React.createElement("g", { key: `student-cone-${camera.id}`, clipPath: "url(#room-clip)" }, /* @__PURE__ */ React.createElement(
              "path",
              {
                d: `M ${tx(camera.x)},${ty(camera.y)} L ${tx(camera.x - w10 / 2)},${ty(camera.y + 10)} L ${tx(camera.x + w10 / 2)},${ty(camera.y + 10)} Z`,
                className: "camera-cone",
                fill: "rgba(239, 68, 68, 0.15)",
                stroke: "rgba(239, 68, 68, 0.6)",
                strokeWidth: "1.5"
              }
            ), /* @__PURE__ */ React.createElement(
              "path",
              {
                d: `M ${tx(camera.x - w10 / 2)},${ty(camera.y + 10)} L ${tx(camera.x - camera.width / 2)},${ty(roomLength)} L ${tx(camera.x + camera.width / 2)},${ty(roomLength)} L ${tx(camera.x + w10 / 2)},${ty(camera.y + 10)} Z`,
                fill: "rgba(239, 68, 68, 0.22)",
                stroke: "rgba(239, 68, 68, 0.7)",
                strokeWidth: "1"
              }
            ), /* @__PURE__ */ React.createElement("line", { x1: tx(camera.x - w10 / 2 - 0.5), y1: ty(camera.y + 10), x2: tx(camera.x + w10 / 2 + 0.5), y2: ty(camera.y + 10), stroke: "#ef4444", strokeWidth: "3", strokeDasharray: "6 4" }), /* @__PURE__ */ React.createElement("text", { x: tx(camera.x), y: ty(camera.y + 10 + 0.6), textAnchor: "middle", fill: "#dc2626", className: "font-bold text-[9px] uppercase drop-shadow-md", style: { fontFamily: "sans-serif", fontWeight: "bold" } }, t.cutoffMsg));
          }
          return /* @__PURE__ */ React.createElement(
            "path",
            {
              key: `student-cone-${camera.id}`,
              d: `M ${tx(camera.x)},${ty(camera.y)} L ${tx(camera.x - camera.width / 2)},${ty(roomLength)} L ${tx(camera.x + camera.width / 2)},${ty(roomLength)} Z`,
              className: "camera-cone",
              fill: "rgba(239, 68, 68, 0.15)",
              stroke: "rgba(239, 68, 68, 0.6)",
              strokeWidth: "1.5",
              clipPath: "url(#room-clip)"
            }
          );
        }), showLargeScreen && /* @__PURE__ */ React.createElement("g", { className: "draggable", onMouseDown: () => setIsDragging("largeScreen"), transform: `translate(${tx(largeScreen.x)}, ${ty(largeScreen.y)})` }, /* @__PURE__ */ React.createElement(
          "rect",
          {
            x: -(largeScreen.width * scale) / 2,
            y: -0.18 * scale,
            width: largeScreen.width * scale,
            height: 0.36 * scale,
            fill: "#111827",
            stroke: "#38bdf8",
            strokeWidth: "2",
            rx: "4"
          }
        ), /* @__PURE__ */ React.createElement(
          "rect",
          {
            x: -(largeScreen.width * scale) / 2 + 4,
            y: -0.18 * scale + 4,
            width: largeScreen.width * scale - 8,
            height: 0.36 * scale - 8,
            fill: "rgba(59, 130, 246, 0.25)",
            stroke: "none",
            rx: "2"
          }
        ), /* @__PURE__ */ React.createElement("text", { y: "-10", textAnchor: "middle", fill: "#38bdf8", className: "font-black text-[9px]", style: { fontFamily: "sans-serif", fontWeight: "bold" } }, "QA1400 Pro 86\u2033 IFP")), showDisplays && displays.map((disp) => /* @__PURE__ */ React.createElement("g", { key: `disp-${disp.id}`, className: "draggable", onMouseDown: () => setIsDragging(`disp-${disp.id}`), transform: `translate(${tx(disp.x)}, ${ty(disp.y)})` }, /* @__PURE__ */ React.createElement("rect", { x: -0.8 * scale, y: -0.1 * scale, width: 1.6 * scale, height: 0.2 * scale, fill: "#3b82f6", stroke: "#1d4ed8", strokeWidth: "1", rx: "2" }), /* @__PURE__ */ React.createElement("text", { y: "-8", textAnchor: "middle", fill: "#2563eb", className: "font-black text-[9px]", style: { fontFamily: "sans-serif", fontWeight: "bold" } }, displayName, " (", displaySize, '")'))), showSpeakers && speakers.map((spk) => /* @__PURE__ */ React.createElement("g", { key: `spk-${spk.id}`, className: "draggable", onMouseDown: () => setIsDragging(`spk-${spk.id}`), transform: `translate(${tx(spk.x)}, ${ty(spk.y)})` }, /* @__PURE__ */ React.createElement("rect", { x: -0.4 * scale, y: -0.4 * scale, width: 0.8 * scale, height: 0.8 * scale, fill: "#1e293b", stroke: "#64748b", strokeWidth: "2", rx: "2" }), /* @__PURE__ */ React.createElement("circle", { cx: "0", cy: "0", r: "4", fill: "#94a3b8" }), /* @__PURE__ */ React.createElement("text", { y: "18", textAnchor: "middle", fill: themeKey === "light" ? "#475569" : "#94a3b8", className: "text-[8px] font-bold", style: { fontFamily: "sans-serif", fontWeight: "bold" } }, "PS610 ", spk.id + 1))), /* @__PURE__ */ React.createElement("g", { transform: `translate(${tx(roomWidth - 1.4)}, ${ty(0.65)})`, pointerEvents: "none" }, /* @__PURE__ */ React.createElement("rect", { x: -1.2 * scale, y: -0.22 * scale, width: 2.4 * scale, height: 0.44 * scale, rx: "3", fill: "#0072ce" }), /* @__PURE__ */ React.createElement("text", { textAnchor: "middle", y: "4", fill: "white", fontSize: "10" }, "Q-NEX ", qnexModel)), /* @__PURE__ */ React.createElement("g", { className: "draggable", onMouseDown: () => setIsDragging("hub"), transform: `translate(${tx(hub.x)}, ${ty(hub.y)})` }, /* @__PURE__ */ React.createElement("rect", { x: -1.2 * scale, y: -0.5 * scale, width: 2.4 * scale, height: 1 * scale, fill: "#0f172a", stroke: "#3b82f6", strokeWidth: "2", rx: "4" }), /* @__PURE__ */ React.createElement("text", { textAnchor: "middle", y: "4", fill: "#ffffff", className: "text-[10px] font-black", style: { fontFamily: "sans-serif", fontWeight: "bold" } }, hubName)), showTeacherCam && /* @__PURE__ */ React.createElement("g", { className: "draggable", onMouseDown: () => setIsDragging("teacher"), transform: `translate(${tx(teacherCam.x)}, ${ty(teacherCam.y)})` }, /* @__PURE__ */ React.createElement("circle", { r: 0.5 * scale, fill: "rgba(250, 204, 21, 0.3)" }), /* @__PURE__ */ React.createElement("circle", { r: 0.25 * scale, fill: "#facc15", stroke: teacherDistanceWarning || teacherBelowTypicalRange ? "#ef4444" : "#000000", strokeWidth: "2" }), /* @__PURE__ */ React.createElement("text", { y: "-16", textAnchor: "middle", fill: "#d97706", className: "font-black text-[10px] drop-shadow-md", style: { fontFamily: "sans-serif", fontWeight: "bold" } }, t.tCamLbl, " \xB7 ", teacherCameraModel.label)), showStudentCam && studentCameraMetrics.map((camera) => /* @__PURE__ */ React.createElement("g", { key: `student-camera-${camera.id}`, className: "draggable", onMouseDown: () => setIsDragging(`student-${camera.id}`), transform: `translate(${tx(camera.x)}, ${ty(camera.y)})` }, /* @__PURE__ */ React.createElement("circle", { r: 0.5 * scale, fill: "rgba(239, 68, 68, 0.3)" }), /* @__PURE__ */ React.createElement("circle", { r: 0.25 * scale, fill: "#ef4444", stroke: camera.overDistance || camera.belowTypicalRange ? "#ffffff" : "#000000", strokeWidth: "2" }), /* @__PURE__ */ React.createElement("text", { y: "24", textAnchor: "middle", fill: "#dc2626", className: "font-black text-[10px] drop-shadow-md", style: { fontFamily: "sans-serif", fontWeight: "bold" } }, t.sCamLbl, " ", camera.id + 1, " \xB7 ", studentCameraModel.label))), showS210 && s210s.map((mic) => /* @__PURE__ */ React.createElement("g", { key: `s210-${mic.id}`, className: "draggable group", transform: `translate(${tx(mic.x)}, ${ty(mic.y)})` }, /* @__PURE__ */ React.createElement("circle", { r: 0.4 * scale, fill: "rgba(52, 211, 153, 0.3)", stroke: "#10b981", strokeWidth: "2", strokeDasharray: "2 2", onMouseDown: () => setIsDragging(`s210-${mic.id}`) }), /* @__PURE__ */ React.createElement("circle", { r: 0.25 * scale, fill: "#10b981", onMouseDown: () => setIsDragging(`s210-${mic.id}`) }), /* @__PURE__ */ React.createElement(
          "path",
          {
            d: mic.facing === "down" ? "M -4,-2 L 0,3 L 4,-2 Z" : "M -4,2 L 0,-3 L 4,2 Z",
            fill: "white",
            pointerEvents: "none"
          }
        ), /* @__PURE__ */ React.createElement("text", { y: "-14", textAnchor: "middle", fill: "#059669", className: "font-black text-[10px] drop-shadow-md pointer-events-none", style: { fontFamily: "sans-serif", fontWeight: "bold" } }, t.s210Lbl, " ", mic.label), /* @__PURE__ */ React.createElement(
          "g",
          {
            onClick: (e) => {
              e.stopPropagation();
              handleDeleteS210(mic.id);
            },
            className: "cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-150",
            opacity: "0",
            transform: `translate(${0.35 * scale}, ${-0.35 * scale})`
          },
          /* @__PURE__ */ React.createElement("circle", { r: 7, fill: "#ef4444", stroke: "#ffffff", strokeWidth: "1" }),
          /* @__PURE__ */ React.createElement("line", { x1: "-3.5", y1: "-3.5", x2: "3.5", y2: "3.5", stroke: "white", strokeWidth: "1.5" }),
          /* @__PURE__ */ React.createElement("line", { x1: "3.5", y1: "-3.5", x2: "-3.5", y2: "3.5", stroke: "white", strokeWidth: "1.5" })
        ), /* @__PURE__ */ React.createElement(
          "g",
          {
            onClick: (e) => {
              e.stopPropagation();
              handleToggleS210Facing(mic.id);
            },
            className: "cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-150",
            opacity: "0",
            transform: `translate(${-0.35 * scale}, ${-0.35 * scale})`
          },
          /* @__PURE__ */ React.createElement("circle", { r: 7, fill: "#3b82f6", stroke: "#ffffff", strokeWidth: "1" }),
          /* @__PURE__ */ React.createElement("path", { d: "M -3,-1 A 3,3 0 0,1 3,-1 A 3,3 0 0,1 1,2", fill: "none", stroke: "white", strokeWidth: "1.2" }),
          /* @__PURE__ */ React.createElement("path", { d: "M -1,1 L -3,-1 L -1,-3", fill: "none", stroke: "white", strokeWidth: "1" })
        ))), /* @__PURE__ */ React.createElement("g", { transform: `translate(${padding - 20}, ${padding})` }, /* @__PURE__ */ React.createElement("line", { x1: "10", y1: "0", x2: "10", y2: roomLength * scale, stroke: th.rulerStroke, strokeWidth: "2" }), getRulerTicks().map((val, i) => /* @__PURE__ */ React.createElement("g", { key: i, transform: `translate(0, ${val * scale})` }, /* @__PURE__ */ React.createElement("line", { x1: "0", y1: "0", x2: "10", y2: "0", stroke: th.rulerTick, strokeWidth: "2" }), /* @__PURE__ */ React.createElement("text", { x: "-5", y: "4", textAnchor: "end", fill: themeKey === "light" ? "#475569" : "#94a3b8", className: "font-mono text-[10px] font-bold", style: { fontFamily: "monospace", fontWeight: "bold" } }, val, "m")))), /* @__PURE__ */ React.createElement("g", { transform: `translate(${padding}, ${padding - 20})` }, /* @__PURE__ */ React.createElement("line", { x1: "0", y1: "10", x2: roomWidth * scale, y2: "10", stroke: th.rulerStroke, strokeWidth: "2" }), getWidthTicks().map((val, i) => /* @__PURE__ */ React.createElement("g", { key: i, transform: `translate(${val * scale}, 0)` }, /* @__PURE__ */ React.createElement("line", { x1: "0", y1: "0", x2: "0", y2: "10", stroke: th.rulerTick, strokeWidth: "2" }), /* @__PURE__ */ React.createElement("text", { x: "0", y: "-5", textAnchor: "middle", fill: themeKey === "light" ? "#475569" : "#94a3b8", className: "font-mono text-[10px] font-bold", style: { fontFamily: "monospace", fontWeight: "bold" } }, val, "m")))))
      ),
      /* @__PURE__ */ React.createElement("button", { type: "button", className: `lcs-canvas-trigger ${th.panelBg} ${th.panelBorder} ${th.headerText}`, "aria-expanded": detailsOpen, "aria-controls": "lcs-details", onClick: () => setDetailsOpen(!detailsOpen) }, t.deviceStats, " ", /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, detailsOpen ? "\xD7" : "\u25B8")),
      detailsOpen && /* @__PURE__ */ React.createElement("aside", { id: "lcs-details", className: `lcs-details-panel ${th.panelBg} ${th.panelBorder}` }, /* @__PURE__ */ React.createElement(DeviceSpecs, null), /* @__PURE__ */ React.createElement(BomPanel, null))
    );
  }

  // src/App.jsx
  var { useState, useRef, useEffect } = React;
  var standardCameraSeed = getPresetLayout("standard");
  var initialLayout = recalculateLayout({
    width: standardCameraSeed.width,
    depth: standardCameraSeed.length,
    teacher: standardCameraSeed.teacherCam,
    students: standardCameraSeed.studentCams,
    teacherModel: "CV870",
    studentModel: "CV870",
    s210s: standardCameraSeed.s210s,
    displaySize: standardCameraSeed.displaySize
  });
  var App = () => {
    const [lang, setLang] = useState(i18n[new URLSearchParams(location.search).get("lang")] ? new URLSearchParams(location.search).get("lang") : "en");
    const [themeKey, setThemeKey] = useState(new URLSearchParams(location.search).get("theme") === "light" ? "light" : "dark");
    const t = { ...i18n.en, ...i18n[lang] || {} };
    const th = themes[themeKey];
    const [roomWidth, setRoomWidth] = useState(8);
    const [roomLength, setRoomLength] = useState(10);
    const [roomHeight, setRoomHeight] = useState(3);
    const [displaySize, setDisplaySize] = useState("55");
    const [qnexModel, setQnexModel] = useState("NDP600");
    const [hubName, setHubName] = useState("LCS810 GEN2");
    const [projectTitle, setProjectTitle] = useState("Auditorium LCS Simulation");
    const [displayName, setDisplayName] = useState("Auxiliary Displays");
    const [preset, setPreset] = useState("standard");
    const [isRotated, setIsRotated] = useState(false);
    const [threeDError, setThreeDError] = useState("");
    const [cameraPackage, setCameraPackage] = useState("CV870");
    useEffect(() => {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      document.title = t.title;
    }, [lang]);
    const prevWidthRef = useRef(8);
    const prevLengthRef = useRef(10);
    const [showTeacherCam, setShowTeacherCam] = useState(true);
    const [showStudentCam, setShowStudentCam] = useState(true);
    const [showS210, setShowS210] = useState(true);
    const [showSpeakers, setShowSpeakers] = useState(true);
    const [showDisplays, setShowDisplays] = useState(true);
    const [showLargeScreen, setShowLargeScreen] = useState(true);
    const [longDistanceCameras, setLongDistanceCameras] = useState({
      teacher: "CV870",
      student: "CV870",
      studentQty: 1
    });
    const [isLongDistancePanelOpen, setIsLongDistancePanelOpen] = useState(false);
    const [showWideFovCones, setShowWideFovCones] = useState(false);
    const scale = 30;
    const padding = 80;
    const roomIsValid = Number.isFinite(roomWidth) && Number.isFinite(roomLength) && Number.isFinite(roomHeight) && roomWidth > 0 && roomLength > 0 && roomHeight > 0;
    const renderRoomWidth = roomIsValid ? roomWidth : 1;
    const renderRoomLength = roomIsValid ? roomLength : 1;
    const vbW = renderRoomWidth * scale + padding * 2;
    const vbH = renderRoomLength * scale + padding * 2;
    const hfovTeacher = 43;
    const hfovStudent = 94;
    const maxDistance = 10;
    const [teacherCam, setTeacherCam] = useState(initialLayout.teacherCam);
    const [studentCams, setStudentCams] = useState(initialLayout.studentCams);
    const [s210s, setS210s] = useState(initialLayout.s210s);
    const [hub, setHub] = useState({ x: 1.5, y: 1 });
    const [speakers, setSpeakers] = useState(initialLayout.speakers);
    const [displays, setDisplays] = useState(initialLayout.displays);
    const [largeScreen, setLargeScreen] = useState(initialLayout.largeScreen);
    const clamp2 = (value, min, max) => Math.max(min, Math.min(max, value));
    const roomArea = roomIsValid ? roomWidth * roomLength : 0;
    const longRoomEnabled = isLongRoomEnabled(roomLength, roomIsValid, cameraPackage);
    const activeCameraPlan = longRoomEnabled ? longDistanceCameras : { teacher: cameraPackage, student: cameraPackage, studentQty: 1 };
    const teacherCameraModel = cameraModels[activeCameraPlan.teacher] || cameraModels.CV870;
    const studentCameraModel = cameraModels[activeCameraPlan.student] || cameraModels.CV870;
    const previousCameraModels = useRef({ teacher: activeCameraPlan.teacher, student: activeCameraPlan.student });
    useEffect(() => {
      const previous = previousCameraModels.current;
      if (!roomIsValid) return;
      if (previous.teacher !== activeCameraPlan.teacher && activeCameraPlan.teacher === "CV870") {
        setTeacherCam(placeCv870Cameras({
          width: roomWidth,
          depth: roomLength,
          teacher: teacherCam,
          students: studentCams,
          teacherModel: "CV870",
          studentModel: null
        }).teacher);
      }
      if (previous.student !== activeCameraPlan.student && activeCameraPlan.student === "CV870") {
        setStudentCams(placeCv870Cameras({
          width: roomWidth,
          depth: roomLength,
          teacher: teacherCam,
          students: studentCams,
          teacherModel: null,
          studentModel: "CV870"
        }).students);
      }
      previousCameraModels.current = { teacher: activeCameraPlan.teacher, student: activeCameraPlan.student };
    }, [activeCameraPlan.teacher, activeCameraPlan.student, roomIsValid]);
    const activeStudentQty = studentCameraModel.projectOnly ? clamp2(Number(activeCameraPlan.studentQty) || 1, 1, 3) : 1;
    const teacherHfov = teacherCameraModel.minHfov || teacherCameraModel.roleHfov?.teacher || hfovTeacher;
    const studentHfov = studentCameraModel.minHfov || studentCameraModel.roleHfov?.student || hfovStudent;
    const teacherWideHfov = teacherCameraModel.maxHfov || teacherHfov;
    const studentWideHfov = studentCameraModel.maxHfov || studentHfov;
    const teacherMaxDistance = teacherCameraModel.projectOnly ? null : teacherCameraModel.roleMaxDistance?.teacher ?? maxDistance;
    const teacherMinDistance = teacherCameraModel.roleMinDistance?.teacher ?? 0;
    const studentMaxDistance = studentCameraModel.projectOnly ? null : studentCameraModel.roleMaxDistance?.student ?? maxDistance;
    const studentMinDistance = studentCameraModel.roleMinDistance?.student ?? 0;
    const longDistanceCopy = {
      title: t.longTitle,
      intro: t.longIntro,
      teacher: t.longTeacher,
      student: t.longStudent,
      studentQty: t.longStudentQty,
      recommend: t.longRecommend,
      framing: t.longFraming,
      canvasNote: t.longCanvasNote,
      note: t.longNote,
      sourceNote: t.longSourceNote,
      projectWarning: t.longProjectWarning
    };
    const getPvcFrameRangeText = (model) => {
      return `${getPvcFrameHeight(model, roomLength, model.maxHfov).toFixed(2)}m \u2192 ${getPvcFrameHeight(model, roomLength, model.minHfov).toFixed(2)}m`;
    };
    const getCameraSpecText = (model, standardSpec, role) => {
      if (!model.projectOnly) {
        if (model.budgetPair) {
          return role === "teacher" ? t.paramCv210Teacher : t.paramCv210Student;
        }
        return standardSpec;
      }
      const detail = t.pvcCameraSpec.replace("{wide}", model.maxHfov).replace("{tele}", model.minHfov);
      return `${model.label}: ${model.opticalZoom} ${detail}`;
    };
    const longRoomRecommendation = getLongRoomRecommendation(roomLength, roomWidth, roomArea, t);
    const coverage = showS210 ? calculateS210Coverage(s210s, roomWidth, roomLength) : { best: 0, limit: 0 };
    const {
      cameraBomLines,
      needsA3006,
      needsCameraPoEExpansion,
      needsFeedbackSuppressor,
      needsFeedbackMicCountReview,
      s210CoverageUnmet,
      s210OverCapacity,
      needsPs610AmpReview,
      needsDelayReview
    } = getBomDecisions({
      showTeacherCam,
      showStudentCam,
      teacherCameraModel,
      studentCameraModel,
      activeStudentQty,
      teacherRole: longDistanceCopy.teacher,
      studentRole: longDistanceCopy.student,
      roomArea,
      showS210,
      s210s,
      showSpeakers,
      speakers,
      roomLength,
      coverage
    });
    const cameraPoEExpansionLabel = t.cameraPoEExpansion;
    const feedbackSuppressorLabel = t.feedbackSuppressor;
    const resizeStudentCameraLayout = (currentCameras, quantity) => {
      const safeQuantity = clamp2(quantity, 1, 3);
      if (currentCameras.length === safeQuantity) return currentCameras;
      const layoutWidth = roomIsValid ? roomWidth : Math.max(1, prevWidthRef.current || 1);
      const existingById = new Map(currentCameras.map((camera) => [camera.id, camera]));
      return Array.from({ length: safeQuantity }, (_, index) => {
        const existing = existingById.get(index);
        return {
          id: index,
          x: layoutWidth * (index + 1) / (safeQuantity + 1),
          y: existing?.y ?? 1
        };
      });
    };
    useEffect(() => {
      setStudentCams((current) => resizeStudentCameraLayout(current, activeStudentQty));
    }, [activeStudentQty, preset]);
    const handleCameraPackageChange = (nextPackage) => {
      setCameraPackage(nextPackage);
      setStudentCams((current) => resizeStudentCameraLayout(current, 1));
      setShowWideFovCones(false);
      setIsLongDistancePanelOpen(false);
    };
    const handleRecalculate = () => {
      if (!roomIsValid) return;
      const next = recalculateLayout({
        width: roomWidth,
        depth: roomLength,
        teacher: teacherCam,
        students: studentCams,
        teacherModel: activeCameraPlan.teacher,
        studentModel: activeCameraPlan.student,
        s210s,
        displaySize
      });
      setTeacherCam(next.teacherCam);
      setStudentCams(next.studentCams);
      setS210s(next.s210s);
      setSpeakers(next.speakers);
      setDisplays(next.displays);
      setLargeScreen(next.largeScreen);
    };
    useEffect(() => {
      const oldW = prevWidthRef.current;
      const oldL = prevLengthRef.current;
      if (oldW !== roomWidth || oldL !== roomLength) {
        if (preset === "custom") {
          if (oldW > 0 && roomWidth > 0 && oldW !== roomWidth) {
            const scaleX = (x) => {
              const val = x / oldW * roomWidth;
              return Math.max(0.1, Math.min(roomWidth - 0.1, isNaN(val) ? x : val));
            };
            setS210s((mics) => mics.map((m) => ({ ...m, x: scaleX(m.x) })));
            setSpeakers((spks) => spks.map((s) => ({ ...s, x: scaleX(s.x) })));
            setLargeScreen((screen) => ({ ...screen, x: scaleX(screen.x), width: clamp2(screen.width / oldW * roomWidth, 2, Math.max(2, roomWidth - 1)) }));
          }
          if (oldL > 0 && roomLength > 0 && oldL !== roomLength) {
            const scaleY = (y) => {
              const val = y / oldL * roomLength;
              return Math.max(0.1, Math.min(roomLength - 0.1, isNaN(val) ? y : val));
            };
            setS210s((mics) => mics.map((m) => ({ ...m, y: scaleY(m.y) })));
            setSpeakers((spks) => spks.map((s) => ({ ...s, y: scaleY(s.y) })));
            setLargeScreen((screen) => ({ ...screen, y: clamp2(screen.y, 0.2, Math.max(0.2, roomLength - 0.2)) }));
          }
        }
        if (roomWidth > 0) prevWidthRef.current = roomWidth;
        if (roomLength > 0) prevLengthRef.current = roomLength;
      }
    }, [roomWidth, roomLength, preset]);
    useEffect(() => {
      setDisplays(roomIsValid ? buildAuxDisplays(roomWidth, roomLength, displaySize) : []);
    }, [displaySize, roomLength, roomWidth, roomIsValid]);
    const [isDragging, setIsDragging] = useState(null);
    const svgRef = useRef(null);
    const tx = (x) => x * scale + padding;
    const ty = (y) => y * scale + padding;
    const revX = (px) => (px - padding) / scale;
    const revY = (py) => (py - padding) / scale;
    const tDist = teacherCam.y;
    const tWidth = 2 * tDist * Math.tan(teacherHfov / 2 * (Math.PI / 180));
    const tWideWidth = 2 * tDist * Math.tan(teacherWideHfov / 2 * (Math.PI / 180));
    const teacherDistanceWarning = teacherMaxDistance !== null && tDist > teacherMaxDistance;
    const teacherBelowTypicalRange = teacherMinDistance > 0 && tDist < teacherMinDistance;
    const teacherStageCoverageWarning = roomIsValid && teacherCameraModel.label === "CV870 Pro" && !coversWholeStage(teacherCam, teacherHfov, roomWidth, roomLength);
    const studentCameraMetrics = studentCams.map((camera) => {
      const distance = roomLength - camera.y;
      return {
        ...camera,
        distance,
        width: 2 * distance * Math.tan(studentHfov / 2 * (Math.PI / 180)),
        wideWidth: 2 * distance * Math.tan(studentWideHfov / 2 * (Math.PI / 180)),
        overDistance: studentMaxDistance !== null && distance > studentMaxDistance,
        belowTypicalRange: studentMinDistance > 0 && distance < studentMinDistance
      };
    });
    const studentDistanceWarning = studentCameraMetrics.some((camera) => camera.overDistance);
    const studentBelowTypicalRange = studentCameraMetrics.some((camera) => camera.belowTypicalRange);
    const studentDistances = studentCameraMetrics.map((camera) => camera.distance);
    const studentWidths = studentCameraMetrics.map((camera) => camera.width);
    const formatMetricRange = (values) => {
      if (!values.length) return "0.0";
      const min = Math.min(...values);
      const max = Math.max(...values);
      return Math.abs(max - min) < 0.05 ? min.toFixed(1) : `${min.toFixed(1)}\u2013${max.toFixed(1)}`;
    };
    const formatDistanceLimitWarning = (distance) => t.distanceLimitWarn.replace("{distance}", Number(distance).toFixed(0));
    const handlePresetChange = (p) => {
      setPreset(p);
      const layout = getPresetLayout(p);
      if (!layout) return;
      setRoomWidth(layout.width);
      setRoomLength(layout.length);
      prevWidthRef.current = layout.width;
      prevLengthRef.current = layout.length;
      const nextCameraPlan = isLongRoomEnabled(layout.length, true, cameraPackage) ? longDistanceCameras : { teacher: cameraPackage, student: cameraPackage };
      const next = recalculateLayout({
        width: layout.width,
        depth: layout.length,
        teacher: layout.teacherCam,
        students: layout.studentCams,
        teacherModel: nextCameraPlan.teacher,
        studentModel: nextCameraPlan.student,
        s210s: layout.s210s,
        displaySize: layout.displaySize
      });
      setTeacherCam(next.teacherCam);
      setStudentCams(next.studentCams);
      setS210s(next.s210s);
      setSpeakers(next.speakers);
      setDisplays(next.displays);
      setLargeScreen(next.largeScreen);
      setHub(layout.hub);
      setDisplaySize(layout.displaySize);
    };
    const handleS210CountChange = (count) => {
      const newCount = parseInt(count);
      if (!Number.isInteger(newCount) || newCount < 0 || newCount > S210_MAX_COUNT) return;
      const currentCount = s210s.length;
      let newS210s = [...s210s];
      if (newCount > currentCount) {
        let maxId = s210s.length > 0 ? Math.max(...s210s.map((m) => m.id)) : -1;
        for (let i = currentCount; i < newCount; i++) {
          maxId++;
          let newX = roomWidth / 2;
          let newY = roomLength * 0.25 + (i - currentCount) * 1.8;
          if (newY >= roomLength - 1.5) {
            newY = roomLength - 2;
          }
          newS210s.push({
            id: maxId,
            x: newX,
            y: newY,
            label: `S${maxId + 1}`,
            facing: "up"
            // default all new mics to point UP
          });
        }
      } else if (newCount < currentCount) {
        newS210s = newS210s.slice(0, newCount);
      }
      setS210s(newS210s);
      setPreset("custom");
    };
    const handleAddS210 = () => {
      if (s210s.length >= S210_MAX_COUNT) return;
      const maxId = s210s.length > 0 ? Math.max(...s210s.map((m) => m.id)) : -1;
      const nextId = maxId + 1;
      setS210s([
        ...s210s,
        {
          id: nextId,
          x: roomWidth / 2,
          y: roomLength * 0.4,
          label: `S${nextId + 1}`,
          facing: "up"
          // default all new mics to point UP
        }
      ]);
      setPreset("custom");
    };
    const handleDeleteS210 = (id) => {
      setS210s(s210s.filter((mic) => mic.id !== id));
      setPreset("custom");
    };
    const handleToggleS210Facing = (id) => {
      const newS210s = s210s.map((mic) => {
        if (mic.id === id) {
          return {
            ...mic,
            facing: mic.facing === "down" ? "up" : "down"
          };
        }
        return mic;
      });
      setS210s(newS210s);
      setPreset("custom");
    };
    const getRulerTicks = () => {
      if (roomLength <= 0) return [];
      const ticks = [];
      for (let i = 0; i < roomLength; i += 5) {
        ticks.push(i);
      }
      const lastTick = Math.floor(roomLength);
      if (!ticks.includes(lastTick)) {
        ticks.push(lastTick);
      }
      return ticks;
    };
    const getWidthTicks = () => {
      if (roomWidth <= 0) return [];
      const ticks = [];
      for (let i = 0; i < roomWidth; i += 5) {
        ticks.push(i);
      }
      const lastTick = Math.floor(roomWidth);
      if (!ticks.includes(lastTick)) {
        ticks.push(lastTick);
      }
      return ticks;
    };
    const handleExportPNG = () => exportSvgPng({ svgRef, isRotated, vbW, vbH, projectTitle });
    const threeDCopy = snapshotMessages[lang] || snapshotMessages.en;
    const handleOpen3D = () => {
      try {
        const snapshot = createPlanSnapshot({
          projectTitle,
          lang,
          roomWidth,
          roomLength,
          roomHeight,
          activeCameraPlan,
          activeStudentQty,
          teacherCam,
          studentCams,
          s210s,
          speakers,
          displays,
          largeScreen,
          hub,
          hubName,
          displayName,
          displaySize,
          showTeacherCam,
          showStudentCam,
          showS210,
          showSpeakers,
          showDisplays,
          showLargeScreen
        });
        const url = new URL("../../demos/lcs/index.html", window.location.href);
        url.hash = encodePlanSnapshot(snapshot);
        setThreeDError("");
        window.open(url.href, "_blank", "noopener");
      } catch (error) {
        setThreeDError(threeDCopy[error.message] || threeDCopy.snapshotInvalid);
      }
    };
    const handleMouseMove = createDragHandler({
      isDragging,
      svgRef,
      roomWidth,
      roomLength,
      revX,
      revY,
      setTeacherCam,
      setStudentCams,
      s210s,
      setS210s,
      setHub,
      setLargeScreen,
      speakers,
      setSpeakers,
      displays,
      setDisplays
    });
    const getCardioidPath2 = (cx, cy, maxR, facing) => getCardioidPath(cx, cy, maxR, tx, ty, facing);
    const handleMouseUp = () => setIsDragging(null);
    useEffect(() => {
      window.addEventListener("mouseup", handleMouseUp);
      return () => window.removeEventListener("mouseup", handleMouseUp);
    }, []);
    const view = {
      activeCameraPlan,
      qnexModel,
      setQnexModel,
      activeStudentQty,
      studentCams,
      cameraBomLines,
      cameraModels,
      cameraPackage,
      cameraPoEExpansionLabel,
      coverage,
      displayName,
      displaySize,
      displays,
      feedbackSuppressorLabel,
      formatDistanceLimitWarning,
      formatMetricRange,
      getCameraSpecText,
      getCardioidPath: getCardioidPath2,
      getPvcFrameRangeText,
      getRulerTicks,
      getWidthTicks,
      handleAddS210,
      handleCameraPackageChange,
      handleDeleteS210,
      handleExportPNG,
      handleOpen3D,
      handlePresetChange,
      handleRecalculate,
      handleS210CountChange,
      handleToggleS210Facing,
      hub,
      hubName,
      isLongDistancePanelOpen,
      isRotated,
      lang,
      largeScreen,
      longDistanceCameras,
      longDistanceCopy,
      longRoomEnabled,
      longRoomRecommendation,
      maxDistance,
      needsA3006,
      needsCameraPoEExpansion,
      needsDelayReview,
      needsFeedbackMicCountReview,
      needsFeedbackSuppressor,
      needsPs610AmpReview,
      padding,
      preset,
      projectTitle,
      roomHeight,
      roomIsValid,
      roomLength,
      roomWidth,
      s210BestRange,
      s210CoverageUnmet,
      s210LimitRange,
      s210OverCapacity,
      s210s,
      scale,
      setDisplayName,
      setDisplaySize,
      setHubName,
      setIsDragging,
      setIsLongDistancePanelOpen,
      setIsRotated,
      setLang,
      setLongDistanceCameras,
      setPreset,
      setProjectTitle,
      setRoomHeight,
      setRoomLength,
      setRoomWidth,
      setShowDisplays,
      setShowLargeScreen,
      setShowS210,
      setShowSpeakers,
      setShowStudentCam,
      setShowTeacherCam,
      setShowWideFovCones,
      setThemeKey,
      showDisplays,
      showLargeScreen,
      showS210,
      showSpeakers,
      showStudentCam,
      showTeacherCam,
      showWideFovCones,
      speakers,
      studentBelowTypicalRange,
      studentCameraMetrics,
      studentCameraModel,
      studentDistanceWarning,
      studentDistances,
      studentHfov,
      studentMaxDistance,
      studentWidths,
      svgRef,
      t,
      tDist,
      tWideWidth,
      tWidth,
      teacherBelowTypicalRange,
      teacherCam,
      teacherCameraModel,
      teacherDistanceWarning,
      teacherHfov,
      teacherMaxDistance,
      teacherStageCoverageWarning,
      th,
      themeKey,
      threeDCopy,
      threeDError,
      tx,
      ty,
      vbH,
      vbW
    };
    view.quote = quotationForPlan(view);
    window.currentLcsQuote = view.quote;
    return /* @__PURE__ */ React.createElement(AppContext.Provider, { value: view }, /* @__PURE__ */ React.createElement("div", { className: `lcs-app flex flex-col h-screen overflow-hidden select-none ${th.appBg} ${th.text}`, onMouseMove: handleMouseMove }, /* @__PURE__ */ React.createElement(Controls, null), /* @__PURE__ */ React.createElement(LongDistancePanel, null), /* @__PURE__ */ React.createElement(RoomCanvas, null), /* @__PURE__ */ React.createElement("footer", { className: "mt-2 text-center flex-shrink-0 pointer-events-none" }, /* @__PURE__ */ React.createElement("p", { className: `${th.subText} text-[10px] italic opacity-80 px-4` }, t.disclaimer))));
  };

  // src/main.jsx
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
})();
