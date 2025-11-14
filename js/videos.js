// Video Modal functionality
export function initVideoModal() {
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

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.classList.contains('active')) {
      videoModal.classList.remove('active');
      videoIframe.src = '';
      document.body.style.overflow = 'auto';
    }
  });
}
