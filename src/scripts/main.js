'use strict';
/*eslint-disable */ //error *'burger' is defined but never used  no-unused-vars*, but it's used in button's onClick
function burger() {
  const elem = document.getElementById('header');

  elem.classList.toggle('header--active');
}

function onSubmitConsult() {
  event.preventDefault();
  document.querySelector('input[name=consultation-name]').value = '';
  document.querySelector('input[name=consultation-tel]').value = '';
  document.querySelector('input[name=consultation-email]').value = '';
}

function onSubmitContact() {
  event.preventDefault();
  document.querySelector('input[name=contact-name]').value = '';
  document.querySelector('input[name=contact-tel]').value = '';
  document.querySelector('textarea[name=contact-message]').value = '';
}
