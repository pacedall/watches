// ============================================================
// PACEDALL WATCHES — Main JavaScript
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Navbar scroll effect ----
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  // ---- Hamburger menu ----
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '100%';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = 'rgba(10,22,40,0.98)';
      navLinks.style.padding = '2rem';
      navLinks.style.borderTop = '1px solid rgba(255,167,38,0.2)';
    });
  }

  // ---- Scroll reveal ----
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

  // ---- Stagger children of grids ----
  document.querySelectorAll('[data-stagger]').forEach(parent => {
    const children = parent.children;
    Array.from(children).forEach((child, i) => {
      child.setAttribute('data-reveal', '');
      child.style.transitionDelay = `${i * 0.08}s`;
      observer.observe(child);
    });
  });

  // ---- Newsletter form ----
  const form = document.querySelector('.newsletter-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      const btn = form.querySelector('.btn');
      const originalText = btn.textContent;
      btn.textContent = 'Subscribed ✓';
      btn.style.background = 'linear-gradient(135deg, #2e7d32, #4caf50)';
      input.value = '';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
      }, 3000);
    });
  }

  // ---- Filter buttons (collection page) ----
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      const cards = document.querySelectorAll('.collection-watches-grid .watch-card');
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ---- Add to cart animation ----
  document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const orig = btn.innerHTML;
      btn.innerHTML = '✓';
      btn.style.background = 'var(--gold)';
      btn.style.color = 'var(--navy)';
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.style.background = '';
        btn.style.color = '';
      }, 1500);
    });
  });

  // ---- Smooth ticker duplication ----
  const track = document.querySelector('.ticker-track');
  if (track) {
    const clone = track.innerHTML;
    track.innerHTML += clone;
  }
});

// ---- Cursor glow effect (desktop only) ----
if (window.innerWidth > 768) {
  const glow = document.createElement('div');
  glow.style.cssText = `
    pointer-events:none; position:fixed; z-index:9999;
    width:300px; height:300px; border-radius:50%;
    background: radial-gradient(circle, rgba(21,101,192,0.06) 0%, transparent 70%);
    transform:translate(-50%,-50%);
    transition: left 0.15s ease, top 0.15s ease;
  `;
  document.body.appendChild(glow);
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }, { passive: true });
}
