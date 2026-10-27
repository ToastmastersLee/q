(function (App) {
    const state = App.state;

    function calculateCoverage() {
        const len = state.roomLength, wid = state.roomWidth;
        const { mic: micPct, pa: paPct, speaker: speakerPct } = App.coverageForPlan(len, wid, state.devices, state.radii, state.show, state.heightProfile);

        // Render percentages in UI
        const micVal = document.getElementById('micCoverageVal');
        const micBar = document.getElementById('micCoverageBar');
        micVal.textContent = micPct + '%';
        micBar.style.width = micPct + '%';
        micBar.className = 'progress-bar ' + getPctClass(micPct);

        const paVal = document.getElementById('paCoverageVal');
        const paBar = document.getElementById('paCoverageBar');
        paVal.textContent = paPct + '%';
        paBar.style.width = paPct + '%';
        paBar.className = 'progress-bar ' + getPctClass(paPct);

        const spkVal = document.getElementById('speakerCoverageVal');
        const spkBar = document.getElementById('speakerCoverageBar');
        spkVal.textContent = speakerPct + '%';
        spkBar.style.width = speakerPct + '%';
        spkBar.className = 'progress-bar ' + getPctClass(speakerPct);

        const totalAreaVal = document.getElementById('totalAreaVal');
        totalAreaVal.textContent = (len * wid).toFixed(1) + ' m²';
    }

    function getPctClass(pct) {
        if (pct >= 85) return 'bg-success';
        if (pct >= 60) return 'bg-warning';
        return 'bg-danger';
    }

    App.calculateCoverage = calculateCoverage;
    App.getPctClass = getPctClass;
})(window.AISpeech);
