'use strict';

const buttonContants = document.body.querySelector('.contacts__buttom');
const inputs = document.querySelectorAll('.form-field');

buttonContants.addEventListener('click', (event) => {
  for (const input of inputs) {
    if (input.value.length === 0) {
      return;
    }
  }

  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
