'use strict';
const form = document.querySelector('.page__section--send');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
