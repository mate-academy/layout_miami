'use strict';

const submitForm = document.querySelector('.contacts__form');
const input = document.querySelectorAll('.js-input');

function onSubmit(event) {
  event.preventDefault();

  for (const item of input) {
    item.value = '';
  }
}

submitForm.addEventListener('submit', onSubmit);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with--menu');
  } else {
    document.body.classList.remove('page__body--with--menu');
  }
});
