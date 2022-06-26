'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form-field');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});
