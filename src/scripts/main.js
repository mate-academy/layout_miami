'use strict';

if (window.location.hash === '#menu') {
  document.body.classList.add('page__body--with-menu');
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('form');
const inputs = document.querySelectorAll('.form-field');
const textarea = document.querySelector('textarea');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
    textarea.value = '';
  });
});
