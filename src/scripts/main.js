'use strict';

document.querySelector('.menu-icon').onclick = function() {
  document.querySelector('.menu-icon-line')
    .classList.toggle('menu-icon-active');

  document.querySelector('.mob__nav')
    .classList.toggle('mob__slide');
};

// form

function onSubmitConsultation() {
  event.preventDefault();
  document.querySelector('.input__consultation-text').value = '';
  document.querySelector('.input__consultation-email').value = '';
  document.querySelector('.input__consultation-phone').value = '';
}

function onSubmitContact() {
  event.preventDefault();
  document.querySelector('.input__contact-textarea').value = '';
  document.querySelector('.input__contact-name').value = '';
  document.querySelector('.input__contact-phone').value = '';
}

const submitButtonConsultation = document.querySelector('.consultation__form');
const submitButtonContact = document.querySelector('.contact__form');

submitButtonConsultation.addEventListener('submit', onSubmitConsultation);
submitButtonContact.addEventListener('submit', onSubmitContact);

// .addEventListener('submit', onSubmit);
