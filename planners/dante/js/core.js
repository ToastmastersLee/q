// Shared state and constants. Scripts load in the order listed in the HTML.
(function (App) {
    const PPM = 50; // Pixels Per Meter (1m = 50px)
    const EAR_HEIGHT = 1.2; // Mouth/ear height for standard sitting position (1.2m)

    // --- State Management ---
    let state = {
        roomLength: 10.0, // x dimension in meters
        roomWidth: 8.0,   // y dimension in meters
        height: 3.0,      // z dimension in meters
        heightProfile: { mode: 'uniform', front: 3.0, rear: 3.0, split: 5.0, drop: 0, manualPickup: null, manualPA: null },
        devices: [],
        auxDisplays: [],
        show: {
            m100_pickup: true,
            m100_pa: true,
            m40_pickup: true,
            m40_pa: true,
            dc20: true
        },
        radii: {
            m100Pickup: 5.89,
            m100PA: 3.68,
            m40Pickup: 5.00,
            m40PA: 3.00,
            dc20: 3.12
        },
        showModels: false,
        theme: 'dark'
    };

    const svgCanvas = document.getElementById('canvas');

    const inputMapping = {
        'm100PickupInput': 'm100Pickup',
        'm100PAInput': 'm100PA',
        'm40PickupInput': 'm40Pickup',
        'm40PAInput': 'm40PA',
        'dc20Input': 'dc20'
    };


    App.PPM = PPM;
    App.EAR_HEIGHT = EAR_HEIGHT;
    App.state = state;
    App.idCounter = 0;
    App.svgCanvas = svgCanvas;
    App.inputMapping = inputMapping;
})(window.AISpeech = window.AISpeech || {});
