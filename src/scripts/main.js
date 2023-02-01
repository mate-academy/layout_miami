'use strict';

const form = document.querySelector('.form');
const page = document.querySelector('.page');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    for (let i = 0; i < 10; i++) {
      history.back();
    }

    page.style.overflow = 'hidden';
  } else {
    console.log(window.location.origin)
    page.style.overflow = 'visible';
  }
});
