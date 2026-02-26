// Small helper: set current year
(() => {
  const el = document.querySelector('[data-year]');
  if (el) el.textContent = new Date().getFullYear();
})();
