'use strict';

const buttonContants = document.body.querySelector('.contacts__buttom');

buttonContants.addEventListener('click', (event) => {
  const inputs = document.querySelectorAll('.form-field');

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
