/* MD-Nails — liens et animations */
(function () {
  // 1) Renseignez vos liens ici
  var LIENS = {
    instagram: 'https://www.instagram.com/md.nails___/',
    facebook: 'https://www.facebook.com/profile.php?id=100095731892929',
    booking: 'https://www.kalendes.com/platform/qrcode/17637'
  };

  document.querySelectorAll('[data-social]').forEach(function (a) {
    var url = LIENS[a.dataset.social];
    if (url) { a.href = url; a.target = '_blank'; a.rel = 'noopener'; }
  });
  document.querySelectorAll('[data-booking]').forEach(function (a) {
    a.href = LIENS.booking;
    if (/^https?:/.test(LIENS.booking)) { a.target = '_blank'; a.rel = 'noopener'; }
  });

  // 2) Défilement doux vers les ancres
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var el = document.querySelector(a.getAttribute('href'));
      if (!el) return;
      e.preventDefault();
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 60, behavior: 'smooth' });
    });
  });

  // 3) Apparition progressive des blocs
  var blocs = document.querySelectorAll('.section, .about, .dark, .strip');
  blocs.forEach(function (b) { b.classList.add('reveal'); });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    blocs.forEach(function (b) { io.observe(b); });
  } else {
    blocs.forEach(function (b) { b.classList.add('is-in'); });
  }
})();
