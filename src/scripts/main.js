'use strict';

const formInputs = document.querySelectorAll('.form__input');

document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of formInputs) {
    input.value = '';
  }
}, false);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.querySelector('input[name="tel"]')
  .addEventListener('input', event => {
    event.target.value = event.target.value
      .split('').filter(c => !isNaN(+c)).join('');
  });
