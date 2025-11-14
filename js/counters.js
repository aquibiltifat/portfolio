// Animated stats counters with Islamic-themed effects
export function animateCounter(id, endValue) {
  const el = document.getElementById(id);
  let value = 0;
  let increment = Math.ceil(endValue / 80);
  let interval = setInterval(() => {
    if(value < endValue) {
      value += increment;
      el.textContent = value + '+';
      
      el.style.transform = 'scale(1.1)';
      setTimeout(() => {
        el.style.transform = 'scale(1)';
      }, 100);
    } else {
      el.textContent = endValue + '+';
      clearInterval(interval);
      
      el.style.color = '#d4af37';
      setTimeout(() => {
        el.style.color = '#1a5f7a';
      }, 1000);
      
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
    
    setTimeout(() => {
      particle.remove();
    }, duration);
  }
}

// Initialize counters with scroll trigger
export function initCounters() {
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
