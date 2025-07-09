// Menu mobile toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Esconder/mostrar header ao scroll (efeito Thiago Finch)
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scroll pra baixo: esconde header
    header.style.top = '-80px';
  } else {
    // Scroll pra cima: mostra header
    header.style.top = '0';
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Fade-in nos elementos ao scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.25,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
