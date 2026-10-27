(function (App) {
    const state = App.state;
    const renderRoom = (...args) => App.renderRoom(...args);
    const updateRadiiFromHeight = (...args) => App.updateRadiiFromHeight(...args);
    const buildProductRecommendation = (...args) => App.buildProductRecommendation(...args);

    function applyScenario(scenario) {
        const request = App.appliedAudioRequest(state), draft = state.audioDraft;
        if (scenario === 'medium') {
            state.roomLength = 8.0;
            state.roomWidth = 10.0;
            state.height = 3.0;
            Object.assign(state.heightProfile, { mode: 'uniform', front: state.height, rear: state.height,
                split: state.roomWidth / 2, drop: 0, manualPickup: null, manualPA: null });
            updateRadiiFromHeight(state.height);
            state.devices = buildProductRecommendation(request);
        } 
        else if (scenario === 'standard') {
            state.roomLength = 10.0;
            state.roomWidth = 10.0;
            state.height = 3.0;
            state.devices = [
                { id: App.idCounter++, type: 'm100', x: 5.0, y: 5.0 },
                { id: App.idCounter++, type: 'dc20', x: 2.5, y: 2.5 },
                { id: App.idCounter++, type: 'dc20', x: 2.5, y: 7.5 },
                { id: App.idCounter++, type: 'dc20', x: 7.5, y: 2.5 },
                { id: App.idCounter++, type: 'dc20', x: 7.5, y: 7.5 }
            ];
        }
        else if (scenario === 'large') {
            state.roomLength = 10.0;
            state.roomWidth = 14.0;
            state.height = 3.4;
            state.devices = [
                { id: App.idCounter++, type: 'm100', x: 5.0, y: 4.5 },
                { id: App.idCounter++, type: 'm100', x: 5.0, y: 9.5 },
                { id: App.idCounter++, type: 'dc20', x: 2.5, y: 3.0 },
                { id: App.idCounter++, type: 'dc20', x: 7.5, y: 3.0 },
                { id: App.idCounter++, type: 'dc20', x: 2.5, y: 11.0 },
                { id: App.idCounter++, type: 'dc20', x: 7.5, y: 11.0 }
            ];
        } 
        else if (scenario === 'step') {
            state.roomLength = 10.0;
            state.roomWidth = 20.0;
            state.height = 3.6;
            Object.assign(state.heightProfile, { mode: 'uniform', front: state.height, rear: state.height,
                split: state.roomWidth / 2, drop: 0, manualPickup: null, manualPA: null });
            // This preset deliberately uses the same recommendation engine as
            // Recalculate. It prevents the preset BOM from disagreeing with a
            // recalculation made without changing any room dimensions.
            updateRadiiFromHeight(state.height);
            state.devices = buildProductRecommendation(request);
        }
        else if (scenario === 'small') {
            state.roomLength = 5.0;
            state.roomWidth = 6.0;
            state.height = 2.8;
            state.devices = [
                { id: App.idCounter++, type: 'm40', x: 2.5, y: 3.0 },
                { id: App.idCounter++, type: 'dc20', x: 2.5, y: 1.5 },
                { id: App.idCounter++, type: 'dc20', x: 2.5, y: 4.5 }
            ];
        }

        Object.assign(state.heightProfile, { mode: 'uniform', front: state.height, rear: state.height,
            split: state.roomWidth / 2, drop: 0, manualPickup: null, manualPA: null });

        updateRadiiFromHeight(state.height);
        if (request.mode === 'fixed') state.devices = buildProductRecommendation(request);
        App.commitAudioLayout(state, request);
        state.audioDraft = draft;

        // Sync inputs
        document.getElementById('lengthSlider').value = state.roomLength;
        document.getElementById('lengthVal').textContent = state.roomLength.toFixed(1) + 'm';
        
        document.getElementById('widthSlider').value = state.roomWidth;
        document.getElementById('widthVal').textContent = state.roomWidth.toFixed(1) + 'm';
        
        document.getElementById('heightSlider').value = state.height;
        document.getElementById('heightVal').textContent = state.height.toFixed(1) + 'm';

        updateRadiiFromHeight(state.height);
        App.refreshHeightUI?.();
        renderRoom();
    }


    function resetPositions() {
        const scenario = document.getElementById('presetSelect').value;
        if (scenario !== 'custom') {
            applyScenario(scenario);
        } else {
            applyScenario('medium');
            document.getElementById('presetSelect').value = 'medium';
        }
    }

    App.applyScenario = applyScenario;
    App.resetPositions = resetPositions;
})(window.AISpeech);
