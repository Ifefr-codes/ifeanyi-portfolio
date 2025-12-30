document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    if (hamburger && nav) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('open');
      });
    }
  
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = entry.target.dataset.index || 0;
          entry.target.style.setProperty('--delay', `${idx * 40}ms`);
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });
  
    const nodes = Array.from(document.querySelectorAll('.fade-up'));
    nodes.forEach((el, i) => {
      el.dataset.index = i;
      observer.observe(el);
    });
  });


//   Smooth Scroll Animation
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for nav links
    document.querySelectorAll('nav a').forEach(link => {
      const href = link.getAttribute('href');
      // Only intercept same-page anchor links (starting with '#')
      if (href && href.startsWith('#')) {
        link.addEventListener('click', e => {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      }
    });
  });
  
  