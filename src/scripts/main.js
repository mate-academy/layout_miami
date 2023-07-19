'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// submitted button

const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  contactForm.reset();

  const submitButton = document.getElementById('contact-submit');

  submitButton.blur();

  const orgContent = submitButton.textContent;

  submitButton.classList.add('sent');
  submitButton.setAttribute('disabled', '');
  submitButton.textContent = 'Sent!';

  setTimeout(function() {
    submitButton.classList.remove('sent');
    submitButton.removeAttribute('disabled');
    submitButton.textContent = orgContent;
  }, 3000);
});
