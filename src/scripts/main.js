'use strict';

const form = document.querySelector('.contact__form');
const submitButton = document.getElementById('submitButton');

form.addEventListener('submit', submitContantForm, false);

function submitContantForm(event) {
  submitButton.textContent = 'Message sent!';
  submitButton.style.backgroundColor = 'green';
  submitButton.style.color = 'white';
  event.preventDefault();
}
