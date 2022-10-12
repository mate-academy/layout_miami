'use strict';

const contact = document.getElementById('contact-form');

function handleForm(event) {
  event.preventDefault();
  event.target.reset();
}

contact.addEventListener('submit', handleForm);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
