'use strict';

const formInputs = document.querySelectorAll('.form__input');
const textArea = document.querySelector('.form__textarea');

document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of formInputs) {
    input.value = '';
  }

  textArea.value = '';
}, false);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
