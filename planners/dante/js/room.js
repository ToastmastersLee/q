(function (App) {
    const state = App.state;
    const PPM = App.PPM;
    const EAR_HEIGHT = App.EAR_HEIGHT;
    const svgCanvas = App.svgCanvas;
    const renderAuxiliaryDisplays = (...args) => App.renderAuxiliaryDisplays(...args);
    const renderDevices = (...args) => App.renderDevices(...args);
    const calculateCoverage = (...args) => App.calculateCoverage(...args);

    function renderRoom() {
        App.fitConfiguration();
        const len = state.roomLength;
        const wid = state.roomWidth;
        const pxLen = len * PPM;
        const pxWid = wid * PPM;

        // Update bounds rect
        const bounds = document.getElementById('roomBounds');
        bounds.setAttribute('width', pxLen);
        bounds.setAttribute('height', pxWid);
        const splitLine = document.getElementById('heightSplitLine');
        splitLine.hidden = state.heightProfile.mode !== 'split';
        splitLine.setAttribute('x2', pxLen);
        splitLine.setAttribute('y1', state.heightProfile.split * PPM);
        splitLine.setAttribute('y2', state.heightProfile.split * PPM);

        // Update dimension lines
        // Length Dim Line (Top)
        const lengthDimLine = document.getElementById('lengthDimLine');
        lengthDimLine.setAttribute('x2', pxLen);
        const lengthDimText = document.getElementById('lengthDimText');
        lengthDimText.setAttribute('x', pxLen / 2);
        lengthDimText.textContent = len.toFixed(1) + ' m';

        // Width Dim Line (Left)
        const widthDimLine = document.getElementById('widthDimLine');
        widthDimLine.setAttribute('y2', pxWid);
        const widthDimText = document.getElementById('widthDimText');
        widthDimText.setAttribute('y', pxWid / 2);
        widthDimText.textContent = wid.toFixed(1) + ' m';
        widthDimText.setAttribute('transform', `rotate(-90 -28 ${pxWid / 2})`);

        // Door drawing (Bottom-right corner)
        const doorSize = 0.9 * PPM; // 90cm door width
        const doorPath = document.getElementById('doorPath');
        const doorText = document.getElementById('doorText');
        
        if (pxLen >= doorSize && pxWid >= doorSize) {
            // Draw door panel line and dashed arc swing inwards
            doorPath.setAttribute('d', `M ${pxLen} ${pxWid} A ${doorSize} ${doorSize} 0 0 0 ${pxLen - doorSize} ${pxWid - doorSize} L ${pxLen - doorSize} ${pxWid}`);
            doorPath.style.display = '';
            doorText.setAttribute('x', pxLen - doorSize / 2);
            doorText.setAttribute('y', pxWid - doorSize - 6);
            doorText.style.display = '';
        } else {
            // Hide door if room is too small
            doorPath.style.display = 'none';
            doorText.style.display = 'none';
        }

        // Update SVG viewBox and sizes for responsiveness
        const padding = 45;
        const svgW = pxLen + padding * 2;
        const svgH = pxWid + padding * 2;
        svgCanvas.setAttribute('viewBox', `-${padding} -${padding} ${svgW} ${svgH}`);
        
        renderAuxiliaryDisplays();
        renderDevices();
        calculateCoverage();
    }

    // --- Acoustic Calculations ---
    function updateRadiiFromHeight(ceilingHeight) {
        const profile = state.heightProfile;
        Object.assign(state.radii, App.radiiForHeight(profile.front, profile.drop));
        if (profile.manualPickup !== null) state.radii.m100Pickup = profile.manualPickup;
        if (profile.manualPA !== null) state.radii.m100PA = profile.manualPA;

        // Sync with inputs
        document.getElementById('m100PickupInput').value = state.radii.m100Pickup.toFixed(2);
        document.getElementById('m100PAInput').value = state.radii.m100PA.toFixed(2);
        document.getElementById('m40PickupInput').value = state.radii.m40Pickup.toFixed(2);
        document.getElementById('m40PAInput').value = state.radii.m40PA.toFixed(2);
        document.getElementById('dc20Input').value = state.radii.dc20.toFixed(2);
    }

    App.renderRoom = renderRoom;
    App.updateRadiiFromHeight = updateRadiiFromHeight;
})(window.AISpeech);
