'use strict';

const button = document.querySelector('.button--submit');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

button.addEventListener('click', (e) => {
  e.preventDefault();
});
