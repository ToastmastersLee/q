(function (App) {
    const state = App.state;
    const renderRoom = (...args) => App.renderRoom(...args);
    const planMicrophoneDevices = (...args) => App.planMicrophoneDevices(...args);
    const planSpeakerDevices = (...args) => App.planSpeakerDevices(...args);

    function buildProductRecommendation(request = App.audioRequest(state)) {
        if (request.mode === 'fixed') return App.fixedAudioDevices(request.counts);
        const micDevices = planMicrophoneDevices();
        const speakerDevices = planSpeakerDevices(micDevices);
        return [...micDevices, ...speakerDevices];
    }

    function recalculateProductPlan() {
        const request = App.audioRequest(state);
        state.devices = buildProductRecommendation(request);
        App.commitAudioLayout(state, request);
        document.getElementById('presetSelect').value = 'custom';
        renderRoom();
    }

    App.buildProductRecommendation = buildProductRecommendation;
    App.recalculateProductPlan = recalculateProductPlan;
})(window.AISpeech);
