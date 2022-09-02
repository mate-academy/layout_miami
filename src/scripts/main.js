'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const inputs = document.querySelectorAll('.form-field');

const submit = document.querySelector('#consultationButton');

function handle(event) {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
}

submit.addEventListener('click', handle);
