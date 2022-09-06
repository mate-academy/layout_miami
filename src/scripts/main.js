'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__content--with-menu');
  } else {
    document.body.classList.remove('page__content--with-menu');
  }
});

document.querySelector('#form').addEventListener('submit', e => {
  e.preventDefault();

  const inputs = document.querySelectorAll('.form-field');

  inputs.forEach(input => {
    input.value = '';
  });
});
