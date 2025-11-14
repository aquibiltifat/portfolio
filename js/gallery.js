// Islamic-themed gallery modal lightbox
export function initGallery() {
  document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
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
      
      const modalContent = document.createElement('div');
      modalContent.style.cssText = `
        position: relative;
        max-width: 90vw;
        max-height: 90vh;
        text-align: center;
      `;
      
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
      
      modalContent.appendChild(closeBtn);
      modalContent.appendChild(largeImg);
      modal.appendChild(modalContent);
      document.body.appendChild(modal);
      
      setTimeout(() => {
        modal.style.opacity = '1';
        largeImg.style.transform = 'scale(1)';
      }, 10);
      
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
      
      const escHandler = (e) => {
        if (e.key === 'Escape') closeModal();
      };
      document.addEventListener('keydown', escHandler);
      modal._escHandler = escHandler;
    });
  });
}
