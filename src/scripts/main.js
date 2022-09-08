'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.querySelector('#form').addEventListener('submit', e => {
  e.preventDefault();

  const inputs = document.querySelectorAll('.form');

  inputs.forEach(input => {
    input.value = '';
  });
});
