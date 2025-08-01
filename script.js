setInterval(() => {
  confetti({
    particleCount: 50,
    spread: 120,
    origin: { 
      x: Math.random(),
      y: Math.random() * 0.6
    },
    colors: ['#FFC1CC', '#FFB347', '#FFFACD', '#D8BFD8'],
    shapes: ['circle', 'square'],
    scalar: 1.2,
    ticks: 200
  });
}, 1200);

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

const links = document.querySelectorAll('.nav-links a');
const currentPage = window.location.pathname.split('/').pop();

links.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});





