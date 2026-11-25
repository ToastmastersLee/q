// Hall coordinates are metres from the front-left corner. +Y runs up the seating tiers.
(function (App) {
    const colors = ['#4387bf','#c07948','#319988','#9a75b2','#a99643','#b76e88'];
    const configs = {
        large: {
            length:13.92, width:20.52, height:3.8, rear:3.8, defaultCount:4, lectern:{x:1.3,y:1.45},
            rows:10, seatsPerBank:5, firstRow:4.3, pitch:1.5, riser:.115, seatPitch:1.03,
            bankStarts:[1.35,8.47], zoneLeft:[.52,7.7], zoneWidth:5.7, desks:[3.41,10.53], deskWidth:5.12,
            micX:[3.65,10.27], micY:[6.6,15.4], speakerX:[1.15,6.96,12.77], speakerY:[2.9,8.1,13.25,18.5],
            screenX:[3.1,10.82], led:{name:'LE163MD 163″ LED',widthMm:3620,heightMm:2030,depthMm:62.5}
        },
        small: {
            small:true, length:13.42, width:12, height:3.05, rear:2.51, defaultCount:2, lectern:{x:7.85,y:1.05},
            platform:{length:4,depth:1.98}, rows:6, seatsPerBank:4, firstRow:3.15, pitch:1.36, riser:.065, seatPitch:1.12,
            bankStarts:[1.78,8.28], zoneLeft:[1.08,7.58], zoneWidth:4.76, desks:[3.46,9.96], deskWidth:4.5,
            micX:[3.46,9.96], micY:[6.5], speakerX:[1.2,12.22], speakerY:[2,4.7,7.5,10.4],
            screenX:[3.36,10.06], led:{name:'LE110ML 110″ LED',widthMm:2440,heightMm:1370,depthMm:100}
        }
    };
    const en = ['Student Voice Tracking','Student cameras','Speaking seat','Panorama','Cycle zones','Stop','End speech','Student close-up','Teacher','Student panorama','Tracking controller','Simulated output','Seat'];
    const zh = ['学生语音跟踪','学生特写机','发言座位','全景','自动轮演','停止轮演','结束发言','学生特写','教师机','学生全景','跟踪主机','模拟输出','座位'];
    const copy = {en, zh,
        fr:['Suivi vocal des étudiants','Caméras étudiants','Siège actif','Panorama','Parcourir les zones','Arrêter','Fin de parole','Gros plan étudiant','Enseignant','Panorama étudiants','Contrôleur de suivi','Sortie simulée','Siège'],
        es:['Seguimiento de voz del alumnado','Cámaras de estudiantes','Asiento activo','Panorámica','Recorrer zonas','Detener','Finalizar intervención','Primer plano','Docente','Panorámica del alumnado','Controlador','Salida simulada','Asiento'],
        ja:['学生の音声追尾','学生用カメラ','発言席','全景','エリアを順に表示','停止','発言終了','学生アップ','教員','学生全景','追尾制御装置','模擬出力','座席'],
        ko:['학생 음성 추적','학생 카메라','발언 좌석','전체 화면','구역 순회','중지','발언 종료','학생 클로즈업','교사','학생 전체 화면','추적 제어기','모의 출력','좌석'],
        it:['Tracciamento vocale studenti','Videocamere studenti','Posto attivo','Panoramica','Scorri zone','Ferma','Fine intervento','Primo piano','Docente','Panoramica studenti','Controller','Uscita simulata','Posto'],
        hu:['Hallgatói hangkövetés','Hallgatói kamerák','Felszólaló helye','Panoráma','Zónák bemutatása','Leállítás','Felszólalás vége','Hallgatói közelkép','Oktató','Hallgatói panoráma','Követésvezérlő','Szimulált kimenet','Ülőhely'],
        mn:['Оюутны дуу хоолойг дагах','Оюутны камер','Ярьж буй суудал','Ерөнхий дүрс','Бүсүүдийг үзүүлэх','Зогсоох','Яриаг дуусгах','Оюутны ойрын дүрс','Багш','Оюутны ерөнхий дүрс','Хяналтын төхөөрөмж','Загварчилсан гаралт','Суудал'],
        ar:['تتبع صوت الطلاب','كاميرات الطلاب','مقعد المتحدث','لقطة شاملة','عرض المناطق','إيقاف','إنهاء الحديث','لقطة طالب مقربة','المحاضر','لقطة شاملة للطلاب','وحدة التتبع','خرج محاكى','مقعد']};
    function words(lang) { return copy[lang] || en; }
    function label(d, lang) {
        return d.model + ' · ' + words(lang)[{student:7, teacher:8, panorama:9, tracker:10}[d.role]];
    }

    // CV870 Pro tracking lens, datasheet p. 6. Microphone-directed PTZ uses a seat target at any distance.
    // The separate 10 m Movement planning rule and the fixed panoramic lens do not gate this shot.
    const studentLens = Object.freeze({opticalZoom:12, digitalZoom:8, wideHfov:81, teleHfov:7.6});
    function closeUpFraming(distance, aspect) {
        const halfAngle = Math.PI / 360;
        const desired = .62 * aspect / Math.max(.7, distance); // 1.24 m tall subject frame
        const optical = Math.max(Math.tan(studentLens.teleHfov * halfAngle),
            Math.min(Math.tan(studentLens.wideHfov * halfAngle), desired));
        return {verticalFov:Math.atan(optical / aspect) / halfAngle,
            crop:Math.min(studentLens.digitalZoom, Math.max(1, optical / desired))};
    }

    function makeHall(id, config) {
        const {length,width,height,lectern,rows,firstRow,pitch} = config;
        const teacherDistance = 10;
        const teacherMount = {x:(lectern.x + length / 2) / 2, y:lectern.y + teacherDistance};
        const teacherHfov = 43;
        function teacherField(stageMm) {
            const stageWidth = config.platform ? config.platform.length : stageMm / 1000;
            const stageLeft = (length - stageWidth) / 2, stageRight = stageLeft + stageWidth;
            const halfSpan = teacherDistance * Math.tan(teacherHfov * Math.PI / 360);
            const left = teacherMount.x - halfSpan, right = teacherMount.x + halfSpan;
            const start = Math.max(left, stageLeft), end = Math.min(right, stageRight);
            const visibleWidth = Math.min(stageWidth, Math.max(0, end - start));
            return {mount:teacherMount, distance:teacherDistance, targetY:lectern.y, hfov:teacherHfov, left, right, start, end,
                stageLeft, stageRight, stageWidth, visibleWidth, percent:Math.round(100 * visibleWidth / stageWidth)};
        }
        const columns = config.seatsPerBank * 2;
        const seats = config.seats || Array.from({length: rows * columns}, (_, i) => {
            const row = Math.floor(i / columns), col = i % columns, bank = Number(col >= columns / 2);
            return {id: String.fromCharCode(65 + row) + (col + 1), row, bank,
                x: config.bankStarts[bank] + (col % config.seatsPerBank) * config.seatPitch, y:firstRow + row * pitch, rise:row * config.riser};
        });
        const seatById = new Map(seats.map(seat => [seat.id, seat]));
        function zones(count) {
            if (!Number.isInteger(count) || count < 2 || count > 6) throw new RangeError('Student camera count must be 2–6');
            const result = [];
            for (let tier = 0; result.length < count; tier++) {
                for (const bank of [0, 1]) {
                    const bands = bank ? Math.floor(count / 2) : Math.ceil(count / 2);
                    if (tier >= bands) continue;
                    const start = Math.ceil(rows * tier / bands), end = Math.ceil(rows * (tier + 1) / bands);
                    const number = result.length + 1;
                    result.push({number, bank, start, end, color:colors[number-1],
                        x: bank ? length * 0.75 : length * 0.25, y: tier ? firstRow + (start - 0.75) * pitch : 0.55});
                }
            }
            return result;
        }
        function devices(count) {
            const camera = (role, number, model, x, y) => ({
                id:'voice-' + role + '-' + number, type:'camera', role, number, model, x, y,
                mountHeight:config.small ? (y >= width/2 ? 2.04 : 2.58) : (role === 'student' ? 2.75 : 2.65), install:role === 'teacher' || (role === 'student' && y > 1) ? 'ceiling' : 'wall', voice:true
            });
            return [...zones(count).map(z => camera('student', z.number, 'CV870', z.x, z.y)),
                camera('panorama', 1, 'CV210 Student', config.panoramaX ?? length / 2, 0.48),
                camera('teacher', 1, 'CV870', teacherMount.x, teacherMount.y),
                {id:'voice-mt200', type:'tracker', role:'tracker', number:1, model:'AIVIS-MT200',
                 ...lectern, mountHeight:config.small ? 1.27 : .55, install:config.small ? 'floor' : 'cabinet', voice:true}];
        }
        function create(count = config.defaultCount, seat = null) {
            return {...(id === 'large' ? {} : {hall:id}), count, seat, devices:devices(count)};
        }
        function valid(t, acceptPreviousMount = false) {
            if (!t || !Number.isInteger(t.count) || t.count < 2 || t.count > 6 ||
                !(t.seat === null || seatById.has(t.seat)) || !Array.isArray(t.devices)) return false;
            const expected = devices(t.count);
            return expected.length === t.devices.length && expected.every((device, i) => {
                const actual = t.devices[i];
                // Recognise only the two previously shipped v6 layouts; all other device fields must match.
                if (acceptPreviousMount && !config.small && device.role === 'teacher') {
                    if (actual?.install === 'wall') device = {...device, x:length / 2, y:width - 0.4, install:'wall'};
                    else if (actual?.y === 10) device = {...device, y:10};
                }
                if (acceptPreviousMount && device.install === 'cabinet' && actual?.install === 'floor')
                    device = {...device, mountHeight:1.27, install:'floor'};
                return Object.entries(device).every(([key, value]) => actual?.[key] === value);
            });
        }
        function zoneFor(seat, list) {
            return list.find(z => z.bank === seat.bank && seat.row >= z.start && seat.row < z.end);
        }
        function shot(t) {
            const seat = seatById.get(t.seat), zone = seat && zoneFor(seat, zones(t.count));
            return {seat, zone, camera:t.devices.find(d => zone ? d.role === 'student' && d.number === zone.number : d.role === 'panorama')};
        }
        function inventory(t) {
            return ['student','teacher','panorama','tracker'].map(role => {
                const items = t.devices.filter(d => d.role === role);
                return {...items[0], quantity:items.length};
            });
        }
        function hall() {
            const equipment = {...App.defaultEquipment(), qnexModel:'NDP200', lcsEnabled:true, ifpCount:3, cameraCount:0,
                processorCount:2, du11Count:1};
            const devices = [];
            function grid(type, xs, ys) {
                for (const y of ys) for (const x of xs) devices.push({id:devices.length+1, type, x, y});
            }
            grid('m100', config.micX, config.micY);
            grid('dc20', config.speakerX, config.speakerY);
            const center=DisplayFit.standard('front',86,'hall-ifp',length/2,0.15);
            if(!config.small) Object.assign(center,{widthMm:1968,heightMm:1194,depthMm:87});
            const displayPlan = {stageMm:Math.round(length*1000), screens:[center,
                ...config.screenX.map((x,i) => ({id:'hall-led-'+i, zone:'front', size:null, ...config.led, offsetMm:0, x, y:0.15}))]};
            return {roomLength:length, roomWidth:width, height,
                heightProfile:{mode:config.small?'split':'uniform',front:height,rear:config.rear,split:width/2,drop:0,manualPickup:null,manualPA:null},
                equipment, devices, displayPlan, auxDisplays:[], showIFP:true, showAuxDisplays:true,
                teachingDevices:[{id:'hall-podium', type:'qnex', model:'NDP200',...lectern},
                    {id:'hall-station',type:'station',model:'LCS810 GEN2',x:0.46,y:0.3}, ...App.screenEntries(displayPlan,width).teaching],
                radii:App.radiiForHeight(height,0), manualAudio:true, manualAux:true, audioDraft:null,
                audioLayout:{mode:'fixed',counts:App.audioCounts(devices)}, tracking:create()};
        }
        function menuName(lang) {
            if (lang === 'zh') return '某航空培训大楼 · ' + (config.small ? '小型阶梯教室' : '大型阶梯教室');
            return 'Aviation Training Building · ' + (config.small ? 'Small' : 'Large') + ' Lecture Hall';
        }
        function hallName(lang) {
            if (config.title) return config.title(lang);
            if (lang === 'zh') return config.small ? '埃航小型阶梯教室' : '埃航大型阶梯教室';
            return 'Ethiopian Airlines · ' + (config.small ? 'Small' : 'Large') + ' Lecture Hall';
        }
        function configurationName(tracking, lang) {
            const trial = config.small && tracking.count !== config.defaultCount;
            return hallName(lang) + (trial ? (lang === 'zh' ? ' · 试配' : ' · Trial') : '');
        }
        function tier(row) {
            const center = firstRow + row * config.pitch;
            const start = center - config.pitch / 2;
            const end = !config.small && row === rows-1 ? width : center + config.pitch / 2;
            return {start, end, top: .03 + row * config.riser};
        }
        return {...config, tier, id, menuName, hallName, configurationName, teacherField, seats, seatById, colors, zones, zoneFor, shot, inventory, create, valid, hall, words, label};
    }
    const halls = {large:makeHall('large', configs.large), small:makeHall('small', configs.small)};
    // v6 snapshots without a hall identifier belong to the original large hall.
    function forTracking(tracking) {
        const id = tracking?.hall;
        return id === undefined || id === 'large' ? halls.large : id === 'small' ? halls.small : undefined;
    }
    App.voice = {...halls.large, halls, forTracking, makeHall, studentLens, closeUpFraming};
})(window.AISpeech);
