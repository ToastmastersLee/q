/** Supplied LCS810 system overview, connected locally by USB. */
(function (app) {
    app.data.topology.devices.lcs810 = {
        id: "lcs810",
        name: "LCS810 Lecture Capture for Hybrid Learning",
        model: "LCS810",
        image: "assets/LCS810-System.png",
        category: "peripheral",
        genericName_zh: "LCS810 录播系统（混合式教学）",
        role_zh: "支持混合式教学（Hybrid Learning）：LCS810 通过 USB（UVC/UAC）接入 NDP600 内置 OPS，供 Teams、Zoom 等会议软件使用。S210 拾取教室声音，LCS810 完成录制，并将音视频送至 OPS，供远端师生互动。",
        zone_zh: "Classroom A（多功能集控讲台）",
        genericName_en: "LCS810 Lecture Capture for Hybrid Learning",
        role_en: "Hybrid learning: LCS810 connects by USB (UVC/UAC) to the OPS installed in NDP600 for conferencing software such as Teams or Zoom. S210 microphones capture classroom voices; LCS810 records and sends the audio/video to the OPS for remote participants.",
        zone_en: "Classroom A (Control Lectern)",
        ports: ["USB (UVC/UAC) → NDP600 OPS", "S210 MIC → LCS810"],
        scenarios: {"teaching_en": "Connect LCS810 USB to the NDP600 OPS; select its camera and microphone in the conferencing app to bring classroom video and voices to remote learners.", "control_en": "S210 picks up voices for recording and remote teaching. LCS810 performs recording and delivers audio over USB; S210 is a microphone, not a recorder or network transmitter.", "cascading_en": "GEN 1: LCS810 has 6 source channels (CH1–CH6), plus PGM = 7 recordable streams. LCS810(i) has 6 + 1 interactive source (CH7), plus PGM = 8. PGM is the composite program, not an extra input; counts depend on model and interaction configuration.", "badge1_en": "Hybrid Learning", "badge2_en": "S210 Voice Pickup", "badge3_en": "Recording Channels", "teaching_zh": "将 LCS810 USB 接入 NDP600 的 OPS，在会议软件中选择其摄像头与麦克风，让远端学生看到课堂画面、听到师生声音。", "control_zh": "S210 负责拾音，供课堂录制与远程教学使用；录制及 USB 音频输出由 LCS810 主机完成，S210 本身不是录音机或网络发送器。", "cascading_zh": "GEN 1：LCS810 为 6 路信号源（CH1–CH6），加 PGM 合成画面可录制 7 路；LCS810(i) 为 6+1 路互动信号源（CH7），加 PGM 可录制 8 路。PGM 不是额外物理输入；通道数以具体型号及互动配置为准。", "badge1_zh": "混合式教学", "badge2_zh": "S210 课堂拾音", "badge3_zh": "录制通道", "icon1": "🎓", "icon2": "🎙️", "icon3": "🎬"}
    };
})(window.QnexApp);
