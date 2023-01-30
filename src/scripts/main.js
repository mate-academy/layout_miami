'use strict';

const form = document.querySelector('.form');
const page = document.querySelector('.page');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

window.addEventListener('hashchange', (e) => {
  if (window.location.hash === '#menu') {
    page.style.overflow = 'hidden';
  } else {
    page.style.overflow = 'visible';
  }
});
