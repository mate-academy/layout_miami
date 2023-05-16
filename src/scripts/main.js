'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__content--with-menu');
  } else {
    document.body.classList.remove('page__content--with-menu');
  }
});

const form = document.querySelector('#contactForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});
