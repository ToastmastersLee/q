/** Korean interface and scenario descriptions. */
window.I18N_DATA.ko = {
    media_server_option: '미디어 서버 (선택 사항)',
    export_png: 'PNG 내보내기', export_busy: '내보내는 중…', export_success: 'PNG 저장 완료',
    export_error: 'PNG 내보내기에 실패했습니다. 다시 시도하거나 페이지를 새로 고치세요.',
    app_title: "시스템 구성 전체 보기", app_tag: '온라인 교육 v3.1',
    app_subtitle: "장비 제어와 멀티미디어 방송 흐름",
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
            btn: "🌐 구성도", badge: '대기', title: "장비 상태와 구성도",
            desc: "Q-NEX 단말과 클라우드의 연결 및 온라인 상태를 확인합니다. 관리 명령과 교내 LAN 미디어 배포를 구분합니다."
        },
        live_broadcast: {
            btn: "📡 실시간 영상", badge: '실시간 방송', title: "교내 실시간 영상 방송",
            desc: "Web Console 또는 앱의 방송 명령이 클라우드를 통해 교내 Media Server에 도착합니다. 서버는 LAN으로 NDP600, NMP311, NDP200, MBX100에 미디어를 배포하고 단말은 영상과 음성을 출력합니다."
        },
        bell_music: {
            btn: "🎵 종소리와 음악", badge: '예약 오디오', title: "교내 종소리와 음악",
            desc: "Web Console 또는 앱에서 방송 작업을 설정합니다. 명령이 클라우드를 통해 Media Server에 도착하면 서버가 종소리와 음악을 배포합니다. 예약 작업은 설정된 시간표를 따릅니다."
        },
        cloud_control: {
            btn: "⚡ 클라우드 제어", badge: '클라우드 제어', title: "클라우드 장비 제어",
            desc: "Web Console 또는 Q-NEX App의 명령이 클라우드, 게이트웨이, 스위치를 거쳐 단말에 도착합니다. 사용 가능한 제어는 장비, 플랫폼 설정 및 계정 권한에 따라 다릅니다."
        },
        emergency_alert: {
            btn: "📢 문자 공지", badge: "문자 공지", title: "교내 문자 공지",
            desc: "Web Console 또는 앱이 일상 공지를 클라우드를 통해 단말과 연결 화면에 전달합니다. Media Server는 필요하지 않습니다."
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
