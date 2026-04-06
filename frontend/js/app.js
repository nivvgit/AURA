// Shared UI functionality

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
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

  // Sticky navbar with blur background (scrolling effect if needed)
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
      nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
      nav.style.backgroundColor = 'rgba(10, 10, 10, 0.9)';
      nav.style.boxShadow = 'none';
    }
  });

  // Check login status for conditional nav links
  const token = localStorage.getItem('adminToken');
  const adminLinks = document.querySelectorAll('.admin-only');
  adminLinks.forEach(link => {
    if (token) {
      link.style.display = 'block';
    } else {
      link.style.display = 'none';
    }
  });
});

export const showAlert = (containerId, message, type = 'success') => {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = `<div class="alert ${type}">${message}</div>`;
  
  setTimeout(() => {
    container.innerHTML = '';
  }, 5000);
};
