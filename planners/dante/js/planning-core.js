// DOM-free calculations shared by the 2D simulator and the bundled 3D demo.
(function (App) {
    const EAR_HEIGHT = 1.2;
    const M100_HALF_ANGLE = 73 * Math.PI / 180;
    const DISPLAY_RULES = [
        { size: 55, maxDistance: 4.1 },
        { size: 65, maxDistance: 5.0 },
        { size: 75, maxDistance: 5.6 }
    ];

    function m100RadiiForHeight(height, drop = 0) {
        const rise = Math.max(0, height - drop - EAR_HEIGHT);
        const pickup = Math.min(8, rise * Math.tan(M100_HALF_ANGLE));
        return { m100Pickup: pickup, m100PA: pickup * 5 / 8 };
    }

    function heightAt(profile, y, roomWidth) {
        if (!profile || profile.mode !== 'split') return profile?.front ?? profile?.height ?? 3;
        const split = Math.min(Math.max(profile.split, 0), roomWidth);
        return y < split ? profile.front : profile.rear;
    }

    function radiiForDevice(device, radii, profile, roomWidth) {
        if (device.type !== 'm100' || !profile || profile.legacy) return radii;
        const calculated = m100RadiiForHeight(heightAt(profile, device.y, roomWidth), profile.drop || 0);
        return { ...radii,
            m100Pickup: profile.manualPickup ?? calculated.m100Pickup,
            m100PA: profile.manualPA ?? calculated.m100PA };
    }

    function radiiForHeight(height, drop = 0) {
        const hDiff = Math.max(0.1, height - EAR_HEIGHT);
        const factor = hDiff / (3.0 - EAR_HEIGHT);
        return {
            ...m100RadiiForHeight(height, drop),
            m40Pickup: 5.0 * factor,
            m40PA: 3.0 * factor,
            dc20: hDiff * 1.73205
        };
    }

    function auxiliaryDisplaysForWidth(roomWidth, roomLength) {
        const seatedAreaEnd = roomWidth - 2.0;
        const displays = [];
        const fullSizeRule = DISPLAY_RULES[2];
        for (let y = 6.0; y < seatedAreaEnd - 0.001; y += fullSizeRule.maxDistance) {
            const remaining = seatedAreaEnd - y;
            const rule = DISPLAY_RULES.find(item => remaining <= item.maxDistance + 0.001) || fullSizeRule;
            const frameWidth = rule.size * 0.0254 * 16 / Math.sqrt(337) + 0.07;
            const offset = frameWidth / 2 + 0.18;
            for (const side of ['left', 'right']) displays.push({
                id: `aux-${displays.length + 1}`,
                side, x: side === 'left' ? offset : roomLength - offset,
                size: rule.size,
                maxDistance: rule.maxDistance,
                y,
                coverageEnd: Math.min(y + rule.maxDistance, seatedAreaEnd)
            });
        }
        return displays;
    }

    function bomForPlan(roomLength, roomWidth, devices, displays) {
        const counts = { m100: 0, m40: 0, dc20: 0, 55: 0, 65: 0, 75: 0 };
        devices.forEach(device => { counts[device.type]++; });
        displays.forEach(display => { counts[display.size]++; });
        const microphones = counts.m100 + counts.m40;
        const channels = microphones * 2 + (counts.dc20 > 0 ? 1 : 0);
        return {
            counts,
            du11: microphones || counts.dc20 ? (roomLength * roomWidth > 100 || microphones >= 2 ? 2 : 1) : 0,
            channels,
            processor: channels === 0 ? null : channels <= 4 ? { type: 'DP44', count: 1 } :
                { type: 'DP88', count: Math.ceil(channels / 8) }
        };
    }

    function coverageForPlan(len, wid, devices, radii, show = {}, profile = null) {
        const step = 0.25;
        let totalPoints = 0;
        let micCoveredPoints = 0;
        let paCoveredPoints = 0;
        let speakerCoveredPoints = 0;

        for (let x = 0; x <= len; x += step) {
            for (let y = 0; y <= wid; y += step) {
                totalPoints++;
                let isMicCovered = false;
                let isPaCovered = false;
                let isSpeakerCovered = false;

                devices.forEach(dev => {
                    const dx = x - dev.x;
                    const dy = y - dev.y;
                    const distSq = dx * dx + dy * dy;

                    if (dev.type === 'm100') {
                        const local = radiiForDevice(dev, radii, profile, wid);
                        isMicCovered = isMicCovered || (show.m100_pickup !== false && distSq <= local.m100Pickup * local.m100Pickup);
                        isPaCovered = isPaCovered || (show.m100_pa !== false && distSq <= local.m100PA * local.m100PA);
                    } else if (dev.type === 'm40') {
                        isMicCovered = isMicCovered || (show.m40_pickup !== false && distSq <= radii.m40Pickup * radii.m40Pickup);
                        isPaCovered = isPaCovered || (show.m40_pa !== false && distSq <= radii.m40PA * radii.m40PA);
                    } else if (dev.type === 'dc20') {
                        isSpeakerCovered = isSpeakerCovered || (show.dc20 !== false && distSq <= radii.dc20 * radii.dc20);
                    }
                });

                if (isMicCovered) micCoveredPoints++;
                if (isPaCovered) paCoveredPoints++;
                if (isSpeakerCovered) speakerCoveredPoints++;
            }
        }

        return {
            mic: totalPoints > 0 ? Math.round((micCoveredPoints / totalPoints) * 100) : 0,
            pa: totalPoints > 0 ? Math.round((paCoveredPoints / totalPoints) * 100) : 0,
            speaker: totalPoints > 0 ? Math.round((speakerCoveredPoints / totalPoints) * 100) : 0
        };
    }

    App.coverageForPlan = coverageForPlan;
    App.DISPLAY_RULES = DISPLAY_RULES;
    App.radiiForHeight = radiiForHeight;
    App.m100RadiiForHeight = m100RadiiForHeight;
    App.radiiForDevice = radiiForDevice;
    App.heightAt = heightAt;
    App.auxiliaryDisplaysForWidth = auxiliaryDisplaysForWidth;
    App.bomForPlan = bomForPlan;
})(window.AISpeech = window.AISpeech || {});
