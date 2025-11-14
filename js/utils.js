// Smooth scrolling for navigation links
export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Enhanced intersection observer for animated elements
export function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.book-card, .video-card, .counter-card, .detail-content');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Add floating Quran verse on scroll
export function initFloatingVerses() {
  const verses = [
    "And He is with you wherever you are. - Quran 57:4",
    "Indeed, with hardship comes ease. - Quran 94:6",
    "So remember Me; I will remember you. - Quran 2:152",
    "Allah does not burden a soul beyond that it can bear. - Quran 2:286"
  ];
  
  let verseShown = false;
  
  window.addEventListener('scroll', () => {
    if (verseShown || window.scrollY < 500) return;
    
    const verse = verses[Math.floor(Math.random() * verses.length)];
    showFloatingVerse(verse);
    verseShown = true;
  });
}

function showFloatingVerse(verse) {
  const verseEl = document.createElement('div');
  verseEl.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    background: rgba(26, 95, 122, 0.95);
    color: white;
    padding: 25px 35px;
    border-radius: 20px;
    text-align: center;
    font-family: 'Playfair Display', serif;
    font-size: 1.3rem;
    z-index: 9998;
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    max-width: 500px;
    border: 2px solid #d4af37;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
  `;
  
  verseEl.innerHTML = `
    <div style="margin-bottom: 15px; color: #d4af37; font-size: 2rem;"></div>
    <div>${verse}</div>
    <button style="margin-top: 20px; background: #d4af37; color: #1a5f7a; border: none; padding: 10px 25px; border-radius: 25px; font-weight: bold; cursor: pointer; transition: all 0.3s ease;">Continue Reading</button>
  `;
  
  document.body.appendChild(verseEl);
  
  setTimeout(() => {
    verseEl.style.opacity = '1';
    verseEl.style.transform = 'translate(-50%, -50%) scale(1)';
  }, 100);
  
  const closeBtn = verseEl.querySelector('button');
  closeBtn.onclick = () => {
    verseEl.style.opacity = '0';
    verseEl.style.transform = 'translate(-50%, -50%) scale(0.8)';
    setTimeout(() => {
      verseEl.remove();
    }, 500);
  };
  
  setTimeout(() => {
    if (verseEl.parentNode) {
      verseEl.style.opacity = '0';
      verseEl.style.transform = 'translate(-50%, -50%) scale(0.8)';
      setTimeout(() => {
        verseEl.remove();
      }, 500);
    }
  }, 8000);
}

// Enhanced CTA button click effect
export function initCTAButton() {
  const ctaBtn = document.querySelector('.cta-btn');
  if (!ctaBtn) return;
  
  ctaBtn.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.6);
      transform: scale(0);
      animation: ripple 0.6s linear;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
    `;
    
    this.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
}

// Add CSS for ripple animation
export function addRippleAnimation() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
    .cta-btn {
      position: relative;
      overflow: hidden;
    }
  `;
  document.head.appendChild(style);
}
