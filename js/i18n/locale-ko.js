/** Korean interface and scenario descriptions. */
window.I18N_DATA.ko = {
    media_server_option: '미디어 서버 (선택 사항)',
    export_png: 'PNG 내보내기', export_busy: '내보내는 중…', export_success: 'PNG 저장 완료',
    export_error: 'PNG 내보내기에 실패했습니다. 다시 시도하거나 페이지를 새로 고치세요.',
    app_title: '시스템 아키텍처 시뮬레이터', app_tag: '온라인 교육 v3.1',
    app_subtitle: 'Q-NEX 배선 규격을 기반으로 신호 흐름과 시스템 구성을 확인하는 대화형 교육 도구',
    theme_light: '<span>☀️</span> 테마: 밝게', theme_dark: '<span>🌙</span> 테마: 어둡게',
    lang_btn: '🌐 한국어', tour_btn: '<span>🎓</span> 초보자 가이드',
    sound_on: '<span>🔊</span> 효과음: 켜짐', sound_off: '<span>🔇</span> 효과음: 음소거',
    pause: '⏸️ 일시 정지', play: '▶️ 재생',
    speed_slow: '0.5x 느리게', speed_normal: '1.0x 기본 속도', speed_fast: '2.0x 빠르게',
    reset: '🔄 구성 초기화', fullscreen_enter: '⛶ 전체 화면', fullscreen_exit: '🗗 전체 화면 종료',
    settings_btn: '도구 및 설정', settings_btn_text: '더 보기', settings_heading: '도구 및 설정',
    scenarios_toggle_btn: '시나리오: ', scenarios_collapse_btn: '접기 ▴',
    setting_speed_label: '애니메이션 속도', setting_sound_label: '효과음', setting_theme_label: '화면 테마',
    setting_lang_label: '표시 언어', setting_fullscreen_label: '화면 표시',
    sidebar_collapse_btn: '📋 설명 접기', sidebar_expand_btn: '📋 설명 펼치기',
    sidebar_heading: '📋 상세 설명 및 배선 규격', sidebar_close: '접기 ❯', sidebar_tab: '❮ 설명 펼치기',
    scenario_bar_title: '교육 시나리오:',
    scenarios: {
        standby: {
            btn: '🌐 대기 및 토폴로지', badge: '대기', title: '캠퍼스 IoT 대기 상태 및 하트비트',
            desc: '캠퍼스의 Q-NEX 단말은 클라우드와 가벼운 MQTT 하트비트 연결을 유지하여 온라인 상태를 확인합니다. 교내 영상·음성 배포는 로컬 네트워크에서 처리합니다.'
        },
        live_broadcast: {
            btn: '📡 교내 실시간 방송 (RTMP)', badge: '실시간 방송', title: '캠퍼스 실시간 영상 배포',
            desc: "선택형 Media Server가 교내 LAN을 통해 NDP600, NMP311, NDP200 및 도서관 MBX100에 실시간 영상을 배포합니다. NPS150과 SL100은 수신하지 않습니다."
        },
        bell_music: {
            btn: '🎵 예약 종소리 및 배경 음악', badge: '예약 오디오', title: '수업 종소리 및 점심시간 음악',
            desc: "선택형 Media Server가 NDP600, NMP311, NDP200 및 도서관 MBX100에 예약 종소리와 배경 음악을 배포합니다. NPS150과 SL100은 참여하지 않습니다."
        },
        cloud_control: {
            btn: '⚡ 클라우드 일괄 제어 (MQTT)', badge: '클라우드 제어', title: '클라우드 원격 제어 및 IoT 관리',
            desc: '관리자가 웹 콘솔이나 모바일 앱에서 일괄 전원 켜기를 실행하면 MQTT 제어 명령이 Q-NEX 클라우드, 게이트웨이, 스위치를 거쳐 교실 단말에 전달됩니다.'
        },
        emergency_alert: {
            btn: '🚨 긴급 문자 방송', badge: '문자 알림', title: '교내 긴급 대피 문자 안내',
            desc: 'Q-NEX 클라우드가 MQTT로 긴급 대피 문자를 전송합니다. 미디어 서버가 필요하지 않으며 SL100을 포함한 단말에서 연결된 화면에 안내를 표시합니다. 이 시나리오는 문자 알림입니다.'
        },
        local_teaching: {
            btn: "💻 로컬 수업 및 회의 (AV)", badge: '로컬 AV', title: "로컬 수업 및 회의",
            desc: "노트북, 실물화상기, 마이크의 신호는 NDP600, NMP311, NDP200 또는 SL100의 로컬 AV 경로로 화면과 스피커에 전달됩니다. 교내망 스트리밍 대역폭을 사용하지 않습니다. 로컬 회의 제어와 입력 전환, HDMI 영상 출력 및 Line Out 액티브 스피커 연결."
        }
    },
    zones: {
        cloud_plane: '☁️ 인터넷 / 공용 클라우드 관리 영역', campus_lan: "🏫 캠퍼스 기가비트 LAN",
        room_a: '교실 A (다기능 제어 강의대)', room_b: '교실 B (NMP 미디어 프로세서)',
        room_h: '대강당 (NDP200 강의대)', room_sl: '교실 C (SL100 스마트 강의대)',
        room_c: "스마트 회의실 (NPS150)", room_l: '도서관 (오디오 및 공지)'
    },
    inspector: {
        role_label: '시스템 내 장치 역할', ports_label: '주요 입출력 포트', scenarios_label: '주요 활용 시나리오',
        scenario_teaching: '수업 및 AV', scenario_control: '장치 통합 제어', scenario_cascading: '캠퍼스 연동',
        test_btn_prefix: '🚀 진단 전송:', test_btn_suffix: '자체 점검', ping_success: '장치 응답 정상 (RTT: 4.2ms)'
    },
    legend: {
        title: '배선 색상 규격', filter_hint: '표시할 계층 선택', lan: '🟦 LAN / 이더넷',
        hdmi: '🔴 HDMI / 영상 신호', audio: '🟢 오디오 / 스피커 케이블',
        usb: "USB", wireless: '📶 무선 / 4G / UHF 마이크 (점선)'
    },
    tour: { step_badge: '단계', prev_btn: '← 이전', next_btn: '다음 →', finish_btn: '교육 완료 🎉', close_btn: '✕ 닫기' }
};
