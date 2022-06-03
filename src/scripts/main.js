'use strict';

const submitButton = document.getElementById('call-me-back-button');
const formsToClean = document.querySelectorAll('.form-field');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

function stopDefaultAction(evt) {
  evt.preventDefault();

  for (const formToClean of formsToClean) {
    formToClean.value = '';
  }
}

submitButton.addEventListener('click', stopDefaultAction);
