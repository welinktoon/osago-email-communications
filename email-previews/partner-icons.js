(() => {
  if (!document.documentElement.classList.contains('partner-theme')) return;

  const paths = {
    'benefit-check-v1.png': '<circle cx="24" cy="24" r="17"/><path d="m16 24 5.5 5.5L33 18"/>',
    'benefit-mail-v1.png': '<rect x="7" y="12" width="34" height="24" rx="4"/><path d="m8 16 16 12 16-12"/>',
    'benefit-car-v1.png': '<path d="M9 29V22l4-9h22l4 9v7"/><path d="M9 29h30M13 22h22M14 29v5m20-5v5"/><circle cx="16" cy="26" r="1"/><circle cx="32" cy="26" r="1"/>',
    'benefit-lock-v1.png': '<rect x="11" y="21" width="26" height="20" rx="4"/><path d="M16 21v-6a8 8 0 0 1 16 0v6"/><circle cx="24" cy="30" r="2"/><path d="M24 32v3"/>',
    'benefit-price-v1.png': '<path d="M8 22V10h16l17 17-14 14L8 22Z"/><circle cx="17" cy="17" r="2"/>',
    'benefit-speed-v1.png': '<circle cx="24" cy="25" r="16"/><path d="M24 15v11l8 5M19 5h10"/>'
  };

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.benefit-icon img').forEach(image => {
      const fileName = image.getAttribute('src').split('/').pop();
      const shape = paths[fileName];
      if (!shape) return;
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 48 48');
      svg.setAttribute('aria-hidden', 'true');
      svg.innerHTML = shape;
      image.replaceWith(svg);
    });
  });
})();
