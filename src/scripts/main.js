'use strict';

window.addEventListener('hashchange', () => {
  document.body.classList.toggle('page__body--with-menu');
});

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
