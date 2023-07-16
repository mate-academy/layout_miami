'use strict';

let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const contactForm = document.getElementById('contact-us-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  contactForm.reset();

  const submitButton = document.getElementById('contact-us-submit');

  submitButton.blur();

  const orgContent = submitButton.textContent;

  submitButton.classList.add('send');
  submitButton.setAttribute('disabled', '');
  submitButton.textContent = 'Your message has been sent!';

  setTimeout(function() {
    submitButton.classList.remove('send');
    submitButton.removeAttribute('disabled');
    submitButton.textContent = orgContent;
  }, 3000);
});
