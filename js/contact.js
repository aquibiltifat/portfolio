// Contact Form functionality
export function initContactForm() {
  const contactForm = document.querySelector('.contact-form');
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      
      showIslamicToast("Message sent successfully! Insha'Allah we'll respond soon.", 'success');
      this.reset();
    }, 2000);
  });
}

// Enhanced Islamic-themed toast notification
export function showIslamicToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = 'islamic-toast';
  
  const colors = {
    success: { bg: '#2d9d78', icon: '✓' },
    error: { bg: '#e74c3c', icon: '✗' },
    info: { bg: '#1a5f7a', icon: '' }
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
  
  setTimeout(() => {
    toast.style.transform = 'translateX(0)';
    toast.style.opacity = '1';
  }, 10);
  
  setTimeout(() => {
    toast.style.transform = 'translateX(100px)';
    toast.style.opacity = '0';
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 4000);
}
