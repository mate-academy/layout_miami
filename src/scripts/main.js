'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.bodsy.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.contact-us__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.requestFullscreen();
});
