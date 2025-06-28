// Scroll suave para âncoras
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Botão de voltar ao topo
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.createElement('button');
  btn.innerText = '↑';
  btn.id = 'backToTop';
  btn.style.position = 'fixed';
  btn.style.bottom = '30px';
  btn.style.right = '30px';
  btn.style.display = 'none';
  btn.style.background = '#232526';
  btn.style.color = '#fff';
  btn.style.border = 'none';
  btn.style.borderRadius = '50%';
  btn.style.width = '40px';
  btn.style.height = '40px';
  btn.style.fontSize = '1.5rem';
  btn.style.cursor = 'pointer';
  btn.style.zIndex = '9999';
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 200 ? 'block' : 'none';
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});