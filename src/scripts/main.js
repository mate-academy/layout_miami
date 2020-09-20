'use strict';

const consultationForm = document
  .querySelector('.consultation__form-to-contact');

consultationForm.addEventListener('submit', event => {
  event.preventDefault();

  [...document.querySelectorAll('.consultation__form .form--input')]
    .map(input => {
      input.value = '';

      return input;
    });
});

const contactsForm = document
  .querySelector('.contacts__form-to-contact');

contactsForm.addEventListener('submit', event => {
  event.preventDefault();

  [...document.querySelectorAll('.contacts__form .form--input')]
    .map(input => {
      input.value = '';

      return input;
    });
});
