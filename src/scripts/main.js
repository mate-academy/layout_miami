'use strict';

document.querySelector('#menu-icon').addEventListener('click', () => {
  document.body.classList.add('page__body--with-menu');
});

document.querySelector('#cross-icon').addEventListener('click', () => {
  document.body.classList.remove('page__body--with-menu');
});
