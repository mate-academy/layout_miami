'use strict';

const form = document.getElementById('contacts-form');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

function handleForm(event) {
  event.preventDefault();
}

form.addEventListener('submit', handleForm);
