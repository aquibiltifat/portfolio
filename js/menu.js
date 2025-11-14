// Menu functionality
export function initHamburgerMenu() {
  const toggles = Array.from(document.querySelectorAll('.desktop-hamburger input[type="checkbox"], .mobile-hamburger input[type="checkbox"], .hamburger-menu input[type="checkbox"], #desktop-menu-toggle, #mobile-menu-toggle'))
    .filter(Boolean);

  function closeAllMenus() {
    toggles.forEach(t => { try { t.checked = false; } catch (e) {} });
    document.body.style.overflow = 'auto';
  }

  toggles.forEach(toggle => {
    const parent = toggle.closest('.desktop-hamburger, .mobile-hamburger, .hamburger-menu');
    if (!parent) return;
    const menu = parent.querySelector('.desktop-menu, .mobile-menu, .menu');
    const closeBtn = parent.querySelector('.desktop-menu-close, .mobile-menu-close, .menu-close');
    const links = menu ? Array.from(menu.querySelectorAll('a')) : [];

    links.forEach(link => link.addEventListener('click', () => {
      toggle.checked = false;
      document.body.style.overflow = 'auto';
    }));

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        toggle.checked = false;
        document.body.style.overflow = 'auto';
      });
    }

    toggle.addEventListener('change', function() {
      if (this.checked) {
        document.body.style.overflow = 'hidden';
        try { createMenuParticles(); } catch (e) {}
      } else {
        document.body.style.overflow = 'auto';
      }
    });

    if (menu) {
      menu.addEventListener('click', (e) => {
        if (e.target === menu) {
          toggle.checked = false;
          document.body.style.overflow = 'auto';
        }
      });
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllMenus();
  });
}

// Floating particles effect for menu opening
function createMenuParticles() {
  const colors = ['#d4af37', '#2d9d78', '#1a5f7a', '#ffffff'];
  
  for (let i = 0; i < 12; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '8px';
    particle.style.height = '8px';
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';
    particle.style.zIndex = '998';
    particle.style.pointerEvents = 'none';
    particle.style.opacity = '0';
    
    document.body.appendChild(particle);
    
    const targetX = 50 + (Math.random() - 0.5) * 40;
    const targetY = 50 + (Math.random() - 0.5) * 40;
    const duration = 1200 + Math.random() * 800;
    
    particle.animate([
      { 
        transform: 'translate(0, 0) scale(0)',
        opacity: 0
      },
      { 
        transform: `translate(${targetX - parseFloat(particle.style.left)}vw, ${targetY - parseFloat(particle.style.top)}vh) scale(1)`,
        opacity: 0.8
      },
      { 
        transform: `translate(${targetX - parseFloat(particle.style.left)}vw, ${targetY - parseFloat(particle.style.top)}vh) scale(0)`,
        opacity: 0
      }
    ], {
      duration: duration,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });
    
    setTimeout(() => {
      if (particle.parentNode) {
        particle.remove();
      }
    }, duration);
  }
}
