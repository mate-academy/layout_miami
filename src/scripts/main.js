'use strict';

const submitForm = document.querySelector('.contacts__form');

function onSubmit(event) {
  event.preventDefault();
}

submitForm.addEventListener('submit', onSubmit);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with--menu');
  } else {
    document.body.classList.remove('page__body--with--menu');
  }
});
