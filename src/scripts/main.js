'use strict';

const form = document.querySelector('.form');
const page = document.querySelector('.page');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

window.addEventListener('hashchange', (e) => {
  if (e.newURL === 'http://localhost:8080/#menu') {
    page.style.overflow = 'hidden';
  } else {
    page.style.overflow = 'visible';
  }
});
