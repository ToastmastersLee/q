/** Spanish interface and scenario descriptions. */
window.I18N_DATA.es = {
    media_server_option: 'Servidor multimedia (opcional)',
    export_png: 'Exportar PNG', export_busy: 'Exportando…', export_success: 'PNG guardado',
    export_error: 'No se pudo exportar el PNG. Inténtelo de nuevo o recargue la página.',
    app_title: "Vista general de la arquitectura", app_tag: 'Formación en línea v3.1',
    app_subtitle: "Control de equipos y distribución multimedia",
    theme_light: '☀️ Tema: claro', theme_dark: '🌙 Tema: oscuro', lang_btn: '🌐 Español',
    tour_btn: '🎓 Guía de inicio', sound_on: '🔊 Sonido: activado', sound_off: '🔇 Sonido: silenciado',
    pause: '⏸️ Pausar', play: '▶️ Reproducir',
    speed_slow: '0.5x Lento', speed_normal: '1.0x Velocidad normal', speed_fast: '2.0x Rápido',
    reset: '🔄 Restablecer topología', fullscreen_enter: '⛶ Pantalla completa', fullscreen_exit: '🗗 Salir de pantalla completa',
    settings_btn: 'Herramientas y ajustes', settings_btn_text: 'Más', settings_heading: 'Herramientas y ajustes',
    scenarios_toggle_btn: 'Escenario: ', scenarios_collapse_btn: 'Contraer ▴',
    setting_speed_label: 'Velocidad', setting_sound_label: 'Efectos de sonido', setting_theme_label: 'Tema',
    setting_lang_label: 'Idioma', setting_fullscreen_label: 'Visualización',
    sidebar_collapse_btn: '📋 Ocultar detalles', sidebar_expand_btn: '📋 Mostrar detalles',
    sidebar_heading: '📋 Detalles y normas', sidebar_close: 'Ocultar ❯', sidebar_tab: '❮ Mostrar detalles',
    scenario_bar_title: 'Escenarios de formación:',
    scenarios: {
        standby: {
            btn: "🌐 Vista de topología", badge: 'EN ESPERA', title: "Estado de equipos y topología",
            desc: "Consulte las conexiones y el estado en línea de los terminales Q-NEX. Las órdenes de gestión y el contenido multimedia de la LAN se muestran por separado."
        },
        live_broadcast: {
            btn: "📡 Vídeo en directo", badge: 'EN DIRECTO', title: "Vídeo en directo del campus",
            desc: "Web Console o la aplicación envía una orden por la nube al Media Server del campus. El servidor distribuye contenido por la LAN a NDP600, NMP311, NDP200 y MBX100 para emitir imagen y sonido."
        },
        bell_music: {
            btn: "🎵 Timbres y música", badge: 'AUDIO PROGRAMADO', title: "Timbres y música del campus",
            desc: "Configure una tarea en Web Console o la aplicación. La orden llega a Media Server mediante la nube y el servidor distribuye timbres y música. Las tareas programadas siguen el horario configurado."
        },
        cloud_control: {
            btn: "⚡ Control en la nube", badge: 'CONTROL REMOTO', title: "Control de equipos desde la nube",
            desc: "El administrador envía órdenes desde Web Console o Q-NEX App por la nube, la puerta de enlace y el conmutador hasta los terminales. Las acciones dependen del equipo, la plataforma y los permisos."
        },
        emergency_alert: {
            btn: "📢 Avisos de texto", badge: "Avisos de texto", title: "Avisos del campus",
            desc: "Web Console o la aplicación envía avisos cotidianos mediante la nube a los terminales y sus pantallas conectadas, sin Media Server."
        },
        local_teaching: {
            btn: "💻 Clases y reuniones (AV local)", badge: 'AV LOCAL', title: "Clases y reuniones locales",
            desc: "Las señales del portátil, visualizador y micrófono se envían a pantallas y altavoces por las rutas AV locales de NDP600, NMP311, NDP200 o SL100, sin consumir ancho de banda de streaming de la LAN. Control local y selección de fuentes; vídeo HDMI y Line Out a un altavoz activo."
        }
    },
    zones: {
        cloud_plane: '☁️ Internet / Gestión en la nube pública', campus_lan: "🏫 LAN Gigabit del campus",
        room_a: 'Aula A (atril de control multifunción)', room_b: 'Aula B (procesador NMP)',
        room_h: 'Auditorio (atril NDP200)', room_sl: 'Aula C (atril inteligente SL100)',
        room_c: "Sala de reuniones inteligente (NPS150)", room_l: 'Biblioteca (audio y avisos)'
    },
    inspector: {
        role_label: 'FUNCIÓN EN EL SISTEMA', ports_label: 'PUERTOS Y CONECTORES', scenarios_label: 'APLICACIONES Y USOS',
        scenario_teaching: 'Clases y AV', scenario_control: 'Control centralizado', scenario_cascading: 'Coordinación del campus',
        test_btn_prefix: '🚀 Enviar', test_btn_suffix: 'diagnóstico', ping_success: 'El equipo responde correctamente (RTT: 4.2ms)'
    },
    legend: {
        title: 'NORMAS DE CABLEADO', filter_hint: 'Filtrar capas', lan: '🟦 LAN / Ethernet',
        hdmi: '🔴 HDMI / Vídeo', audio: '🟢 Audio / Cable de altavoz',
        usb: "USB", wireless: '📶 Inalámbrico / 4G / Micrófono UHF (discontinuo)'
    },
    tour: { step_badge: 'Paso', prev_btn: '← Anterior', next_btn: 'Siguiente →', finish_btn: 'Finalizar formación 🎉', close_btn: '✕ Cerrar' }
};
