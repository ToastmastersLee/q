// Same tab order, keyboard navigation and focus behavior in both planner views.
(() => {
  const tabs = [...document.querySelectorAll('.tabs [role="tab"]')];
  function select(index) {
    tabs.forEach((tab, i) => {
      const active = i === index;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
    });
  }
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(i));
    tab.addEventListener('keydown', (event) => {
      const direction = document.documentElement.dir === 'rtl' ? -1 : 1;
      const keys = {Home: 0, End: tabs.length-1, ArrowLeft: i-direction, ArrowRight: i+direction};
      if (!Object.hasOwn(keys, event.key)) return;
      event.preventDefault();
      const next = (keys[event.key]+tabs.length)%tabs.length;
      select(next);
      tabs[next].focus();
    });
  });
})();
