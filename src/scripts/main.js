'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('#form-contact-us');

form.addEventListener('submit', myEvent);

function myEvent(event) {
  event.preventDefault();
  form.reset();
};
