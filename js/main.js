// Main initialization - imports all modules and initializes the page
import { initCounters } from './counters.js';
import { initVideoModal } from './videos.js';
import { initGallery } from './gallery.js';
import { initContactForm } from './contact.js';
import { initHamburgerMenu } from './menu.js';
import { initSmoothScroll, initScrollAnimations, initFloatingVerses, initCTAButton, addRippleAnimation } from './utils.js';
import { initHadithModal } from './hadiths.js';

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
  initScrollAnimations();
  initHadithModal();
  
  // Add page loading animation
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 100);
});
