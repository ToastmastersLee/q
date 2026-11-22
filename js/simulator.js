/** Application bootstrap and legacy simulator alias. */
window.addEventListener('DOMContentLoaded', () => {
    window.simulator = new window.QnexApp.services.QnexSimulator();
    window.simulator.init();
});
