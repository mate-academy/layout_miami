'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--menu-open');
  } else {
    document.body.classList.remove('page__body--menu-open');
  }
});

const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', sendFormData);

function sendFormData(event) {
  event.preventDefault();
  contactForm.reset();
}
