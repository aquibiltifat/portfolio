// Animated stats counters with Islamic-themed effects
function animateCounter(id, endValue) {
  const el = document.getElementById(id);
  let value = 0;
  let increment = Math.ceil(endValue / 80);
  let interval = setInterval(() => {
    if(value < endValue) {
      value += increment;
      el.textContent = value + '+';
      
      // Add pulse animation on increment
      el.style.transform = 'scale(1.1)';
      setTimeout(() => {
        el.style.transform = 'scale(1)';
      }, 100);
    } else {
      el.textContent = endValue + '+';
      clearInterval(interval);
      
      // Final celebration effect
      el.style.color = '#d4af37';
      setTimeout(() => {
        el.style.color = '#1a5f7a';
      }, 1000);
      
      // Create floating particles effect
      createParticles(el);
    }
  }, 24);
}

// Floating particles effect for counter completion
function createParticles(element) {
  const rect = element.getBoundingClientRect();
  const colors = ['#d4af37', '#2d9d78', '#1a5f7a'];
  
  for (let i = 0; i < 8; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '6px';
    particle.style.height = '6px';
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    particle.style.borderRadius = '50%';
    particle.style.left = (rect.left + rect.width / 2) + 'px';
    particle.style.top = (rect.top + rect.height / 2) + 'px';
    particle.style.zIndex = '1000';
    particle.style.pointerEvents = 'none';
    particle.style.opacity = '1';
    
    document.body.appendChild(particle);
    
    // Animate particle
    const angle = Math.random() * Math.PI * 2;
    const distance = 30 + Math.random() * 50;
    const duration = 800 + Math.random() * 400;
    
    particle.animate([
      { 
        transform: 'translate(0, 0) scale(1)',
        opacity: 1
      },
      { 
        transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`,
        opacity: 0
      }
    ], {
      duration: duration,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });
    
    // Remove particle after animation
    setTimeout(() => {
      particle.remove();
    }, duration);
  }
}

// Initialize counters with scroll trigger
function initCounters() {
  const countersSection = document.querySelector('.stats-counters');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          animateCounter('talks-count', 120);
          animateCounter('students-count', 5000);
          animateCounter('videos-count', 110);
          animateCounter('books-count', 28);
        }, 300);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  if (countersSection) {
    observer.observe(countersSection);
  }
}

// Video Modal functionality
function initVideoModal() {
  const videoModal = document.getElementById('videoModal');
  const videoIframe = document.getElementById('videoIframe');
  const videoModalClose = document.getElementById('videoModalClose');
  const videoCards = document.querySelectorAll('.video-card');

  videoCards.forEach(card => {
    card.addEventListener('click', () => {
      const videoId = card.getAttribute('data-video-id');
      videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      videoModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  videoModalClose.addEventListener('click', () => {
    videoModal.classList.remove('active');
    videoIframe.src = '';
    document.body.style.overflow = 'auto';
  });

  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
      videoModal.classList.remove('active');
      videoIframe.src = '';
      document.body.style.overflow = 'auto';
    }
  });

  // Close with ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.classList.contains('active')) {
      videoModal.classList.remove('active');
      videoIframe.src = '';
      document.body.style.overflow = 'auto';
    }
  });
}

// Islamic-themed gallery modal lightbox
function initGallery() {
  document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
      // Create modal overlay
      const modal = document.createElement('div');
      modal.className = 'islamic-modal';
      modal.style.cssText = `
        position: fixed;
        left: 0; 
        top: 0;
        width: 100vw; 
        height: 100vh;
        background: rgba(26, 95, 122, 0.95);
        backdrop-filter: blur(10px);
        display: flex; 
        align-items: center; 
        justify-content: center;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.3s ease;
      `;
      
      // Create modal content
      const modalContent = document.createElement('div');
      modalContent.style.cssText = `
        position: relative;
        max-width: 90vw;
        max-height: 90vh;
        text-align: center;
      `;
      
      // Create close button with Islamic design
      const closeBtn = document.createElement('button');
      closeBtn.innerHTML = '&#10005;';
      closeBtn.style.cssText = `
        position: absolute;
        top: -40px;
        right: -10px;
        background: #d4af37;
        color: #1a5f7a;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-size: 1.2rem;
        font-weight: bold;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
      `;
      
      closeBtn.onmouseenter = () => {
        closeBtn.style.background = '#2d9d78';
        closeBtn.style.color = 'white';
        closeBtn.style.transform = 'rotate(90deg) scale(1.1)';
      };
      
      closeBtn.onmouseleave = () => {
        closeBtn.style.background = '#d4af37';
        closeBtn.style.color = '#1a5f7a';
        closeBtn.style.transform = 'rotate(0) scale(1)';
      };
      
      // Create image
      const largeImg = document.createElement('img');
      largeImg.src = img.src;
      largeImg.alt = img.alt || 'Gallery Image';
      largeImg.style.cssText = `
        max-width: 100%;
        max-height: 80vh;
        border-radius: 20px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        transform: scale(0.8);
        transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      `;
      
      // Assemble modal
      modalContent.appendChild(closeBtn);
      modalContent.appendChild(largeImg);
      modal.appendChild(modalContent);
      document.body.appendChild(modal);
      
      // Animate modal in
      setTimeout(() => {
        modal.style.opacity = '1';
        largeImg.style.transform = 'scale(1)';
      }, 10);
      
      // Close modal function
      function closeModal() {
        modal.style.opacity = '0';
        largeImg.style.transform = 'scale(0.8)';
        setTimeout(() => {
          modal.remove();
        }, 300);
      }
      
      closeBtn.onclick = closeModal;
      modal.onclick = (e) => {
        if (e.target === modal) closeModal();
      };
      
      // Close with ESC key
      const escHandler = (e) => {
        if (e.key === 'Escape') closeModal();
      };
      document.addEventListener('keydown', escHandler);
      
      // Cleanup event listener
      modal._escHandler = escHandler;
    });
  });
}

// Islamic-themed form submission with enhanced toast
function initContactForm() {
  const contactForm = document.querySelector('.contact-form');
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Add loading state to button
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
      // Reset button
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      
      // Show success toast
      showIslamicToast("Message sent successfully! Insha'Allah we'll respond soon.", 'success');
      
      // Reset form
      this.reset();
    }, 2000);
  });
}

// Enhanced Islamic-themed toast notification
function showIslamicToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = 'islamic-toast';
  
  const colors = {
    success: { bg: '#2d9d78', icon: '✓' },
    error: { bg: '#e74c3c', icon: '✗' },
    info: { bg: '#1a5f7a', icon: '' }
  };
  
  const config = colors[type] || colors.success;
  
  toast.style.cssText = `
    position: fixed;
    bottom: 42px;
    right: 42px;
    background: ${config.bg};
    color: #fff;
    padding: 20px 30px;
    border-radius: 16px;
    font-weight: 700;
    font-size: 1.07rem;
    box-shadow: 0 8px 32px rgba(38, 50, 56, 0.2);
    z-index: 9999;
    display: flex;
    align-items: center;
    gap: 12px;
    transform: translateX(100px);
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    max-width: 400px;
    border-left: 5px solid #d4af37;
  `;
  
  toast.innerHTML = `
    <span style="font-size: 1.3rem;">${config.icon}</span>
    <span>${message}</span>
  `;
  
  document.body.appendChild(toast);
  
  // Animate in
  setTimeout(() => {
    toast.style.transform = 'translateX(0)';
    toast.style.opacity = '1';
  }, 10);
  
  // Add crescent moon decoration
  const crescent = document.createElement('div');
  crescent.style.cssText = `
    position: absolute;
    top: -8px;
    right: -8px;
    width: 24px;
    height: 24px;
    background: #d4af37;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1a5f7a;
    font-size: 0.8rem;
    font-weight: bold;
  `;
  crescent.innerHTML = '';
  crescent.style.fontFamily = 'Font Awesome 6 Free';
  toast.appendChild(crescent);
  
  // Auto remove after delay
  setTimeout(() => {
    toast.style.transform = 'translateX(100px)';
    toast.style.opacity = '0';
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 4000);
}

// Add floating Quran verse on scroll
function initFloatingVerses() {
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
    <div style="margin-bottom: 15px; color: #d4af37; font-size: 2rem;"></div>
    <div>${verse}</div>
    <button style="margin-top: 20px; background: #d4af37; color: #1a5f7a; border: none; padding: 10px 25px; border-radius: 25px; font-weight: bold; cursor: pointer; transition: all 0.3s ease;">Continue Reading</button>
  `;
  
  document.body.appendChild(verseEl);
  
  // Animate in
  setTimeout(() => {
    verseEl.style.opacity = '1';
    verseEl.style.transform = 'translate(-50%, -50%) scale(1)';
  }, 100);
  
  // Close button handler
  const closeBtn = verseEl.querySelector('button');
  closeBtn.onclick = () => {
    verseEl.style.opacity = '0';
    verseEl.style.transform = 'translate(-50%, -50%) scale(0.8)';
    setTimeout(() => {
      verseEl.remove();
    }, 500);
  };
  
  // Auto close after 8 seconds
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
function initCTAButton() {
  const ctaBtn = document.querySelector('.cta-btn');
  if (!ctaBtn) return;
  
  ctaBtn.addEventListener('click', function(e) {
    // Create ripple effect
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
    
    // Remove ripple after animation
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
}

// Add CSS for ripple animation
function addRippleAnimation() {
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

// Initialize Hamburger Menu
// Initialize Hamburger Menu (supports desktop, mobile and universal menus)
function initHamburgerMenu() {
  const toggles = Array.from(document.querySelectorAll('.desktop-hamburger input[type="checkbox"], .mobile-hamburger input[type="checkbox"], .hamburger-menu input[type="checkbox"], #desktop-menu-toggle, #mobile-menu-toggle'))
    .filter(Boolean);

  // Helper to close all menus
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

    // Close on link click
    links.forEach(link => link.addEventListener('click', () => {
      toggle.checked = false;
      document.body.style.overflow = 'auto';
    }));

    // Close on close button
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        toggle.checked = false;
        document.body.style.overflow = 'auto';
      });
    }

    // Toggle body overflow and particles when menu opens/closes
    toggle.addEventListener('change', function() {
      if (this.checked) {
        document.body.style.overflow = 'hidden';
        try { createMenuParticles(); } catch (e) {}
      } else {
        document.body.style.overflow = 'auto';
      }
    });

    // Close when clicking outside (on the overlay)
    if (menu) {
      menu.addEventListener('click', (e) => {
        if (e.target === menu) {
          toggle.checked = false;
          document.body.style.overflow = 'auto';
        }
      });
    }
  });

  // Close all menus with ESC
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
    
    // Animate particle
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
    
    // Remove particle after animation
    setTimeout(() => {
      if (particle.parentNode) {
        particle.remove();
      }
    }, duration);
  }
}

// Smooth scrolling for navigation links
function initSmoothScroll() {
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
function initScrollAnimations() {
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

// Books page category filtering
function initBookCategories() {
  const categoryTabs = document.querySelectorAll('.category-tab');
  const bookItems = document.querySelectorAll('.book-item');
  
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      categoryTabs.forEach(t => t.classList.remove('active'));
      // Add active class to clicked tab
      tab.classList.add('active');
      
      const category = tab.getAttribute('data-category');
      
      // Filter books
      bookItems.forEach(book => {
        if (category === 'all' || book.getAttribute('data-category') === category) {
          book.style.display = 'grid';
          setTimeout(() => {
            book.style.opacity = '1';
            book.style.transform = 'translateY(0)';
          }, 100);
        } else {
          book.style.opacity = '0';
          book.style.transform = 'translateY(20px)';
          setTimeout(() => {
            book.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  addRippleAnimation();
  initCounters();
  initVideoModal();
  initGallery();
  initContactForm();
  initFloatingVerses();
  initCTAButton();
  initHamburgerMenu();
  initSmoothScroll();
  
  // Add loading animation to page
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 100);
  
  // Initialize book categories if on books page
  if (document.querySelector('.books-categories')) {
    initBookCategories();
  }
  
  // Add page-specific animations
  initPageSpecificAnimations();
});

// Page-specific animations
function initPageSpecificAnimations() {
  // Animate struggle timeline items
  const struggleItems = document.querySelectorAll('.struggle-item');
  struggleItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(' + (index % 2 === 0 ? '50px' : '-50px') + ')';
    item.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
    
    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateX(0)';
    }, 500 + (index * 200));
  });
  
  // Animate project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 300 + (index * 100));
  });
}