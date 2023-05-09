'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    document.querySelector('.menu').classList.add('menu--opened');
  } else {
    document.body.classList.remove('page__body--with-menu');
    document.querySelector('.menu').classList.remove('menu--opened');
  }
});

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
