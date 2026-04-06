// Shared Aura UI functionality

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle (if applicable)
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Active Link Highlighting
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-links a');
  
  links.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  // Global Scroll Listener for Header
  const mainHeader = document.getElementById('mainHeader');
  if (mainHeader) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        mainHeader.classList.add('scrolled');
      } else {
        mainHeader.classList.remove('scrolled');
      }
    });

    // Initial check in case page starts scrolled
    if (window.scrollY > 100) mainHeader.classList.add('scrolled');
  }

  // Admin visibility
  const token = localStorage.getItem('adminToken');
  const adminOnly = document.querySelectorAll('.admin-only');
  adminOnly.forEach(el => {
    el.style.display = token ? 'block' : 'none';
  });
});

/**
 * Enhanced alerting system for Aura
 * @param {string} containerId - Element ID to inject alert
 * @param {string} message - Content
 * @param {string} type - 'alert-success' or 'alert-error'
 */
export const showAlert = (containerId, message, type = 'alert-success') => {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = `<div class="alert ${type}">${message}</div>`;
  
  // Smoothly clear after 6s
  setTimeout(() => {
    if (container.firstElementChild) {
       container.firstElementChild.style.opacity = '0';
       container.firstElementChild.style.transform = 'translateY(-10px)';
       setTimeout(() => { container.innerHTML = ''; }, 400);
    }
  }, 6000);
};
