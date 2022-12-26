'use strict';

const form = document.querySelector('#contact-form');

form.addEventListener('submit', handleForm);

function handleForm(event) {
  event.preventDefault();
};

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
