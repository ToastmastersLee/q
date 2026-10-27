/**
 * Q-NEX System Architecture Simulator - Newbie Training Guided Tour
 * Bilingual support (Chinese & English)
 */

class NewbieTour {
    constructor() {
        this.currentStep = 0;
        
        this.steps_zh = [
            {
                title: '第 1 站：云端与远程管理层 (Cloud & Management Layer)',
                targetNodes: ['console', 'app', 'cloud'],
                description: "<p class=\"tour-text\">Web Console 与移动端用于注册、状态查看及授权远程控制。可用功能按型号、平台版本及账户配置确定。图中云端信令与内网媒体分发路径分别表示。</p>"
            },
            {
                title: '第 2 站：校园流媒体核心中枢 (Media Server inside Campus LAN)',
                targetNodes: ['mediaserver', 'switch', 'router'],
                description: "<p class=\"tour-text\">可选的校园内网流媒体服务，用于直播与定时音频分发。内网分发可减少教室重复下载外部内容；外部节目源和云端管理仍可能需要互联网。服务器硬件按项目选型。</p>"
            },
            {
                title: '第 3 站：物联终端核心家族：NDP vs NMP vs SL100 vs NPS150 vs MBX 选型全解',
                targetNodes: ['ndp600', 'nmp', 'ndp200', 'sl100', 'lcs810', 'nps150', 'mbx_library'],
                description: "<p class=\"tour-text\">NDP600：桌面讲台，23.8 寸手写屏、内置 10.1 寸中控屏与 HDMI/USB 连接。NMP311：教室媒体处理器。NDP200：21.5 寸手写屏电动角度调节、两路外部 HDMI 输出。SL100：23.8 寸手写屏、8.8 寸串口中控屏、电动高度调节及 Type-C 65W PD；本方案不向其分发音视频广播流。MBX100：图书馆广播终端。NPS150: 面向会议室的 Dynamic BYOM 与设备集控中枢，连接自带笔记本与会议室外设，实现混合会议和统一控制。支持混合式教学（Hybrid Learning）：LCS810 通过 USB（UVC/UAC）接入 NDP600 内置 OPS，供 Teams、Zoom 等会议软件使用。S210 拾取教室声音，LCS810 完成录制，并将音视频送至 OPS，供远端师生互动。</p>"
            },
            {
                title: '第 4 站：末端音视频呈现与功放一体化 (Displays & Amplification)',
                targetNodes: ['ifp_a', 'spk_a', 'ifp_b', 'spk_b', 'ifp_h', 'spk_h', 'ifp_sl', 'spk_sl', 'disp_c', 'spk_c', 'disp_l', 'spk_l'],
                description: "<p class=\"tour-text\">HDMI 将终端画面送至显示设备。NDP600、NMP311、NDP200 和 SL100 的 2×40W 功放可连接匹配的无源音箱。礼堂与公共区域的功放、音箱、阻抗及声场覆盖需按项目设计，不能保证所有场景均无需外部功放。SA200 有源音箱连接 NPS150 Line Out，播放会议音频。</p>"
            },
            {
                title: '第 5 站：接线颜色标准规范 (Authoritative Wiring Standards)',
                targetNodes: [],
                description: "<p class=\"tour-text\">本图颜色约定：蓝色为 LAN，红色为 HDMI，绿色为音频，紫色为串口控制，橙色为继电器控制，虚线为无线连接。USB 为黄色 #FFDC00。颜色是本图图例，不是强制布线标准。</p>"
            }
        ];

        this.steps_en = [
            {
                title: 'Step 1: Cloud & Remote Management Plane',
                targetNodes: ['console', 'app', 'cloud'],
                description: "<p class=\"tour-text\">Web Console and the mobile interface provide registration, status monitoring and authorized remote control. Features depend on model, platform version and account configuration. Cloud signaling and LAN media distribution are shown as separate paths.</p>"
            },
            {
                title: 'Step 2: Campus Media Core (Media Server inside Campus LAN)',
                targetNodes: ['mediaserver', 'switch', 'router'],
                description: "<p class=\"tour-text\">Optional campus LAN streaming service for live broadcasts and scheduled audio. Local distribution can reduce repeated external downloads; external sources and cloud management may still require internet. Server hardware is selected for the project.</p>"
            },
            {
                title: 'Step 3: Terminal Hardware Selection: NDP vs NMP vs SL100 vs NPS150 vs MBX',
                targetNodes: ['ndp600', 'nmp', 'ndp200', 'sl100', 'lcs810', 'nps150', 'mbx_library'],
                description: "<p class=\"tour-text\">NDP600: desktop podium with 23.8-inch pen display, built-in 10.1-inch panel and HDMI/USB connections. NMP311: classroom media processor. NDP200: 21.5-inch pen display with electric tilt adjustment and two external HDMI outputs. SL100: 23.8-inch pen display, 8.8-inch serial panel, electric height adjustment and Type-C 65W PD; no AV broadcast route in this example. MBX100: library broadcast endpoint. NPS150: A meeting-room hub for Dynamic BYOM and centralized device control, connecting personal laptops with room peripherals for hybrid collaboration. Hybrid learning: LCS810 connects by USB (UVC/UAC) to the OPS installed in NDP600 for conferencing software such as Teams or Zoom. S210 microphones capture classroom voices; LCS810 records and sends the audio/video to the OPS for remote participants.</p>"
            },
            {
                title: 'Step 4: Integrated Audio Amplification & 4K Display',
                targetNodes: ['ifp_a', 'spk_a', 'ifp_b', 'spk_b', 'ifp_h', 'spk_h', 'ifp_sl', 'spk_sl', 'disp_c', 'spk_c', 'disp_l', 'spk_l'],
                description: "<p class=\"tour-text\">HDMI carries terminal video to displays. The 2×40W amplifiers in NDP600, NMP311, NDP200 and SL100 can drive suitable passive speakers. Amplifiers, speaker loads and acoustic coverage must be selected for the project; external amplification may still be needed. SA200 active speaker connected to NPS150 Line Out for meeting audio.</p>"
            },
            {
                title: 'Step 5: Authoritative Wiring & Color Standards',
                targetNodes: [],
                description: "<p class=\"tour-text\">Diagram color key: blue LAN, red HDMI, green audio, purple serial control, orange relay control, dashed wireless. USB uses yellow #FFDC00. These colors are a drawing convention, not a mandatory cabling standard.</p>"
            }
        ];
    }

    get steps() {
        const lang = window.simulator?.lang || 'en';
        const content = window.QnexApp.data.localeContent?.[lang];
        const steps = content
            ? this.steps_en.map((step, index) => ({ ...step, ...content.tour[index] }))
            : (lang === 'zh' ? this.steps_zh : this.steps_en);
        return steps.filter(step => window.simulator?.mediaServerEnabled
            || !step.targetNodes.includes('mediaserver'));
    }

    start() {
        this.currentStep = 0;
        this.renderStep();
        if (window.soundSys) window.soundSys.playClick();
    }

    next() {
        if (this.currentStep < this.steps.length - 1) {
            this.currentStep++;
            this.renderStep();
            if (window.soundSys) window.soundSys.playClick();
        } else {
            this.close();
        }
    }

    prev() {
        if (this.currentStep > 0) {
            this.currentStep--;
            this.renderStep();
            if (window.soundSys) window.soundSys.playClick();
        }
    }

    close() {
        const modal = document.getElementById('tour-modal');
        if (modal) modal.classList.add('hidden');
        this.clearHighlights();
        if (window.soundSys) window.soundSys.playClick();
    }

    renderStep() {
        this.currentStep = Math.min(this.currentStep, this.steps.length - 1);
        const modal = document.getElementById('tour-modal');
        if (!modal) return;
        modal.classList.remove('hidden');

        const lang = window.simulator?.lang || 'zh';
        const i18n = window.I18N_DATA[lang]?.tour || window.I18N_DATA.zh.tour;

        const step = this.steps[this.currentStep];
        document.getElementById('tour-step-counter').textContent = `${i18n.step_badge} ${this.currentStep + 1} / ${this.steps.length}`;
        document.getElementById('tour-title').textContent = step.title.replace(
            /^(Step |第 )\d+/, (_, prefix) => `${prefix}${this.currentStep + 1}`);
        document.getElementById('tour-body').innerHTML = step.description;

        const prevBtn = document.getElementById('tour-prev-btn');
        const nextBtn = document.getElementById('tour-next-btn');
        const closeBtn = document.getElementById('tour-close-btn');

        if (prevBtn) {
            prevBtn.textContent = i18n.prev_btn;
            prevBtn.disabled = (this.currentStep === 0);
        }
        if (nextBtn) {
            nextBtn.textContent = (this.currentStep === this.steps.length - 1) ? i18n.finish_btn : i18n.next_btn;
        }
        if (closeBtn) {
            closeBtn.textContent = i18n.close_btn;
        }

        this.applyHighlights(step.targetNodes);
    }

    applyHighlights(nodeIds) {
        this.clearHighlights();
        if (!nodeIds || nodeIds.length === 0) return;

        nodeIds.forEach(id => {
            const el = document.getElementById(`node-${id}`);
            if (el) {
                el.classList.add('node-highlighted');
            }
        });
    }

    clearHighlights() {
        document.querySelectorAll('.node-highlighted').forEach(el => {
            el.classList.remove('node-highlighted');
        });
    }
}

window.QnexApp.services.NewbieTour = NewbieTour;
window.newbieTour = new NewbieTour();
