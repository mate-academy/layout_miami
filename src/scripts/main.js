'use strict';
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const logo = document.querySelector('.logo');

logo.addEventListener('mouseover', () => {
  logo.style.transition = 'transform 0.4s ease-in-out';
  logo.style.transform = 'scale(1.1)';
});

logo.addEventListener('mouseout', () => {
  logo.style.transform = 'scale(1)';
});

