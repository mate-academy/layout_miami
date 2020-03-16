'use strict';

const formConsultation = document.querySelector('.consultation__form');
const nameConsultation = document.querySelector('.form__input_name');
const phoneConsultation = document.querySelector('.form__input_phone');
const emailConsultation = document.querySelector('.form__input_email');

formConsultation.addEventListener('submit', function(e) {
  e.preventDefault();
  nameConsultation.value = '';
  phoneConsultation.value = '';
  emailConsultation.value = '';
});

const formContact = document.querySelector('.contact__form');
const nameContact = document.querySelector('.input_name');
const emailContact = document.querySelector('.input_email');
const messageContact = document.querySelector('.input_textarea');

formContact.addEventListener('submit', function(e) {
  e.preventDefault();
  nameContact.value = '';
  emailContact.value = '';
  messageContact.value = '';
});
