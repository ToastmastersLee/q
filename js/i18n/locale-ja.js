/** Japanese interface and scenario descriptions. */
window.I18N_DATA.ja = {
    media_server_option: 'メディアサーバー（オプション）',
    export_png: 'PNGを書き出す', export_busy: '書き出し中…', export_success: 'PNGを保存しました',
    export_error: 'PNGの書き出しに失敗しました。再試行するかページを更新してください。',
    app_title: "システム構成の全体像", app_tag: 'オンライン研修 v3.1',
    app_subtitle: "機器制御とマルチメディア配信の流れ",
    theme_light: '☀️ テーマ：ライト', theme_dark: '🌙 テーマ：ダーク', lang_btn: '🌐 日本語',
    tour_btn: '🎓 はじめてのガイド', sound_on: '🔊 効果音：オン', sound_off: '🔇 効果音：ミュート',
    pause: '⏸️ 一時停止', play: '▶️ 再生',
    speed_slow: '0.5x ゆっくり', speed_normal: '1.0x 標準速度', speed_fast: '2.0x 高速',
    reset: '🔄 構成をリセット', fullscreen_enter: '⛶ 全画面表示', fullscreen_exit: '🗗 全画面を終了',
    settings_btn: 'ツールと設定', settings_btn_text: 'その他', settings_heading: 'ツールと設定',
    scenarios_toggle_btn: 'シナリオ：', scenarios_collapse_btn: '折りたたむ ▴',
    setting_speed_label: 'アニメーション速度', setting_sound_label: '効果音', setting_theme_label: 'テーマ',
    setting_lang_label: '表示言語', setting_fullscreen_label: '画面表示',
    sidebar_collapse_btn: '📋 説明を閉じる', sidebar_expand_btn: '📋 説明を表示',
    sidebar_heading: '📋 詳細説明と配線仕様', sidebar_close: '閉じる ❯', sidebar_tab: '❮ 説明を表示',
    scenario_bar_title: '研修シナリオ：',
    scenarios: {
        standby: {
            btn: "🌐 構成図", badge: '待機', title: "機器の接続状態と構成図",
            desc: "Q-NEX端末とクラウドの接続・オンライン状態を確認します。管理コマンドと学内LANのメディア配信を分けて表示します。"
        },
        live_broadcast: {
            btn: "📡 ライブ映像", badge: 'ライブ配信', title: "学内ライブ映像配信",
            desc: "Web Consoleまたはアプリの配信指示がクラウド経由で学内Media Serverに届きます。サーバーがLANでNDP600、NMP311、NDP200、MBX100に配信し、端末が映像と音声を出力します。"
        },
        bell_music: {
            btn: "🎵 チャイムと音楽", badge: '定時音声', title: "学内チャイムと音楽",
            desc: "Web Consoleまたはアプリで配信タスクを設定します。指示がクラウド経由でMedia Serverに届き、チャイムや音楽を配信します。予約タスクは設定済みの時刻表に従います。"
        },
        cloud_control: {
            btn: "⚡ クラウド制御", badge: 'クラウド制御', title: "クラウドからの機器制御",
            desc: "Web ConsoleまたはQ-NEX Appからのコマンドが、クラウド、ゲートウェイ、スイッチを経由して端末に届きます。操作範囲は機器、設定、アカウント権限によります。"
        },
        emergency_alert: {
            btn: "📢 テキスト通知", badge: 'テキスト通知', title: "学内テキスト通知",
            desc: "Web Consoleまたはアプリから日常のお知らせをクラウド経由で端末と接続画面に送信します。Media Serverは不要です。"
        },
        local_teaching: {
            btn: "💻 ローカル授業・会議 (AV)", badge: 'ローカルAV', title: "ローカル授業・会議",
            desc: "ノートPC、書画カメラ、マイクの信号をNDP600、NMP311、NDP200、SL100のローカルAV経路で画面とスピーカーへ送ります。学内LANのストリーミング帯域を消費しません。 ローカル制御と入力切替。HDMIで映像を出力し、Line Outにアクティブスピーカーを接続します。"
        }
    },
    zones: {
        cloud_plane: '☁️ インターネット / パブリッククラウド管理領域', campus_lan: "🏫 キャンパス内ギガビットLAN",
        room_a: '教室A（多機能制御教卓）', room_b: '教室B（NMPメディアプロセッサー）',
        room_h: '講堂（NDP200教卓）', room_sl: '教室C（SL100スマート教卓）',
        room_c: "スマート会議室 (NPS150)", room_l: '図書館（音声・お知らせ）'
    },
    inspector: {
        role_label: 'システム内での役割', ports_label: '主な入出力ポート', scenarios_label: '用途と活用シナリオ',
        scenario_teaching: '授業とAV', scenario_control: '機器の統合制御', scenario_cascading: 'キャンパス連携',
        test_btn_prefix: '🚀 診断送信：', test_btn_suffix: '自己診断', ping_success: '正常に応答しました（RTT: 4.2ms）'
    },
    legend: {
        title: '配線の色分け規則', filter_hint: '表示するレイヤーを選択', lan: '🟦 LAN / イーサネット',
        hdmi: '🔴 HDMI / 映像信号', audio: '🟢 音声 / スピーカーケーブル',
        usb: "USB", wireless: '📶 無線 / 4G / UHFマイク（破線）'
    },
    tour: { step_badge: 'ステップ', prev_btn: '← 前へ', next_btn: '次へ →', finish_btn: '研修を終了 🎉', close_btn: '✕ 閉じる' }
};
