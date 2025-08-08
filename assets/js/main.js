
let menuForcedScrolled = false;

window.addEventListener('scroll', () => {
  // Only remove 'scrolled' if not forced by menu

  if (!menuForcedScrolled) {
    document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 100);
    menuForcedScrolled = nav.classList.contains('scrolled');


  }
  // aparecer secciones
  document.querySelectorAll('.section').forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight * 0.9) sec.classList.add('visible');
  });
});
window.dispatchEvent(new Event('scroll'));

// Add scrolled class on navbarButton click for mobile
document.getElementById('navbarButton').addEventListener('click', function () {
  if (!menuForcedScrolled) {
    const nav = document.querySelector('nav');
    nav.classList.add('scrolled');
    menuForcedScrolled = true;

  }
  else {
    if (window.scrollY < 100) {
      const nav = document.querySelector('nav');
      nav.classList.remove('scrolled');

    }
    menuForcedScrolled = false;

  }

});
