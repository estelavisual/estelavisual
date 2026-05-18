// Genera páginas de libro animadas en el fondo
(function createBookBackground() {
  const container = document.getElementById('bookBg');
  if (!container) return;

  const PAGE_COUNT = 18;

  for (let i = 0; i < PAGE_COUNT; i++) {
    const page = document.createElement('div');
    page.classList.add('page');

    // Posición aleatoria en la pantalla
    const left   = Math.random() * 95;
    const top    = Math.random() * 90;
    const height = 80 + Math.random() * 100;    // px — altura variable
    const dur    = 5 + Math.random() * 8;        // segundos
    const delay  = -(Math.random() * dur);       // start en medio del ciclo

    page.style.cssText = `
      left: ${left}%;
      top: ${top}%;
      height: ${height}px;
      --dur: ${dur}s;
      --delay: ${delay}s;
    `;

    container.appendChild(page);
  }
})();

// Animación de entrada para las tarjetas de beneficios
(function animateCards() {
  const cards = document.querySelectorAll('.benefit-card');
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s, border-color 0.3s ease`;
    observer.observe(card);
  });
})();

// Scroll suave para el botón principal
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
