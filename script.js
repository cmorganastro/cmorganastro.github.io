// Inject spectral bars into every .bar-slot from the template
const barTemplate = document.getElementById('spectral-bar-template');
document.querySelectorAll('.bar-slot').forEach(slot => {
  slot.appendChild(barTemplate.content.cloneNode(true));
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Nav background on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('solid', window.scrollY > 40);
}, { passive: true });

// Starfield — stars coloured roughly by stellar temperature (O -> M)
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
const STAR_COLORS = ['#9FC4FF', '#C7D9FF', '#F0F4FF', '#FFF3D6', '#FFD98A', '#FFA85C', '#FF6B4A'];
let stars = [];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const count = Math.floor((canvas.width * canvas.height) / 6000);
  stars = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.2 + 0.3,
    color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
    phase: Math.random() * Math.PI * 2,
    speed: Math.random() * 0.015 + 0.005
  }));
}

function draw(t) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const s of stars) {
    const twinkle = reduceMotion ? 1 : 0.55 + 0.45 * Math.sin(s.phase + t * s.speed);
    ctx.globalAlpha = twinkle;
    ctx.fillStyle = s.color;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  if (!reduceMotion) requestAnimationFrame(draw);
}

window.addEventListener('resize', resize, { passive: true });
resize();
requestAnimationFrame(draw);
if (reduceMotion) draw(0);
