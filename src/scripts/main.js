/* eslint-disable no-unused-vars */
'use strict';

function onSubmitConsult() {
  event.preventDefault();

  document.querySelector('input[name=consult-email]').value = '';
  document.querySelector('input[name=consult-tel]').value = '';
  document.querySelector('input[name=consult-name]').value = '';
}

function onSubmitContacts() {
  event.preventDefault();

  document.querySelector('input[name=contact-tel]').value = '';
  document.querySelector('input[name=contact-name]').value = '';
  document.querySelector('textarea[name=contact-message]').value = '';
}
