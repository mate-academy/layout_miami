'use strict';

const contactForm = document.getElementById('contact-us__form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  window.alert('This form has been successfully submitted!');
  contactForm.reset();
});
