'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--width-menu');
  } else {
    document.body.classList.remove('page__body--width-menu');
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});
