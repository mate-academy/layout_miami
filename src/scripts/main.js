'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    document.querySelector('.menu').style.zIndex = '1';
  } else {
    document.body.classList.remove('page__body--with-menu');
    document.querySelector('.menu').style.zIndex = '0';
  }
});

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
