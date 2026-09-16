(() => {
  if (!document.documentElement.classList.contains('partner-theme')) return;

  const paths = {
    'benefit-check-v1.png': '<circle class="icon-fill" cx="24" cy="24" r="17"/><path d="m15.5 24 5.5 5.5L33 17.5"/>',
    'benefit-mail-v1.png': '<rect class="icon-fill" x="6" y="12" width="36" height="25" rx="5"/><path d="m8 16 16 12 16-12"/><circle class="icon-accent" cx="38" cy="10" r="4"/>',
    'benefit-car-v1.png': '<path class="icon-fill" d="M8 23.5 12 14h24l4 9.5V34H8Z"/><path d="M12 24h24"/><circle class="icon-accent" cx="15" cy="34" r="3"/><circle class="icon-accent" cx="33" cy="34" r="3"/>',
    'benefit-lock-v1.png': '<path d="M15 20v-5a9 9 0 0 1 18 0v5"/><rect class="icon-fill" x="10" y="20" width="28" height="21" rx="5"/><circle class="icon-accent" cx="24" cy="29" r="3"/><path d="M24 32v3"/>',
    'benefit-price-v1.png': '<path class="icon-fill" d="M7 22V9h17l17 17-15 15Z"/><circle class="icon-accent" cx="17" cy="17" r="3"/>',
    'benefit-speed-v1.png': '<circle class="icon-fill" cx="24" cy="25" r="17"/><path d="M24 14v12l8 5"/><path d="M19 5h10"/><circle class="icon-accent" cx="24" cy="25" r="3"/>'
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
