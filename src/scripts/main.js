'use strict';

const form = document.querySelector('form');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
});
