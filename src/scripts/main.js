'use strict';

const form = document.querySelector('form');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    setTimeout(() => {
      document.body.style.overflow = 'hidden';
    }, 220);
  } else {
    document.body.style.overflow = '';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
});
