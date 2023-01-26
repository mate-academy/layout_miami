'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body');
  } else {
    document.body.classList.remove('page__body');
  }
});

const form = document.getElementById('formId');

function handleForm(event) {
  event.preventDefault();
}

form.addEventListener('submit', handleForm);
