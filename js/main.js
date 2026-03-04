document.addEventListener('DOMContentLoaded', () => {

  // Nav scroll
  const nav = document.querySelector('.nav');
  if (nav) window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 50), { passive: true });

  // Reveal observer
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const d = parseFloat(e.target.dataset.delay || 0) * 1000;
        setTimeout(() => e.target.classList.add('visible'), d);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  // Mobile menu
  const ham = document.querySelector('.hamburger');
  const mob = document.querySelector('.mobile-menu');
  const close = document.querySelector('.mobile-close');
  if (ham && mob) {
    ham.onclick = () => { mob.classList.add('open'); document.body.style.overflow = 'hidden'; };
    if (close) close.onclick = () => { mob.classList.remove('open'); document.body.style.overflow = ''; };
    mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { mob.classList.remove('open'); document.body.style.overflow = ''; }));
  }

  // Filter tabs
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.product-card').forEach(card => {
        const show = f === 'all' || card.dataset.cat === f || card.dataset.cat?.includes(f);
        card.style.display = show ? '' : 'none';
        if (show) { card.style.opacity = '0'; setTimeout(() => card.style.opacity = '1', 40); }
      });
    };
  });

  // Cart button
  document.querySelectorAll('.btn-cart').forEach(btn => {
    btn.onclick = e => {
      e.preventDefault();
      const orig = btn.innerHTML;
      btn.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>';
      btn.style.background = '#2A7A46';
      setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; }, 1600);
    };
  });

  // Newsletter
  document.querySelectorAll('.nl-form, .newsletter-form').forEach(form => {
    form.onsubmit = e => {
      e.preventDefault();
      const btn = form.querySelector('button');
      const inp = form.querySelector('input');
      if (inp?.value?.includes('@')) {
        btn.textContent = 'Subscribed \u2713';
        btn.style.background = '#2A7A46';
        inp.value = '';
        setTimeout(() => { btn.textContent = 'Subscribe'; btn.style.background = ''; }, 3000);
      }
    };
  });

  // Contact form
  const cf = document.querySelector('.contact-form');
  if (cf) {
    cf.onsubmit = e => {
      e.preventDefault();
      const btn = cf.querySelector('.btn');
      btn.textContent = 'Message Sent \u2713';
      btn.style.background = '#2A7A46'; btn.style.borderColor = '#2A7A46';
      setTimeout(() => { btn.textContent = 'Send Message'; btn.style.background = ''; btn.style.borderColor = ''; cf.reset(); }, 3000);
    };
  }

  // Back to top
  const btt = document.querySelector('.back-top');
  if (btt) {
    window.addEventListener('scroll', () => btt.classList.toggle('visible', scrollY > 400), { passive: true });
    btt.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Ticker duplicate
  const tick = document.querySelector('.ticker-track');
  if (tick) tick.innerHTML += tick.innerHTML;

  // Active nav
  const pg = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    if (a.getAttribute('href')?.split('/').pop() === pg) a.classList.add('active');
  });
});
