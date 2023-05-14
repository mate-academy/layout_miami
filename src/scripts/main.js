'use strict';

const form = document.querySelector('.form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (!isValidName(nameInput.value.trim())) {
    alert('Please enter a valid name');

    return;
  }

  if (!emailInput.value.trim()) {
    alert('Please enter your email');

    return;
  }

  if (!isValidEmail(emailInput.value.trim())) {
    alert('Please enter a valid email');

    return;
  }

  if (!messageInput.value.trim()) {
    alert('Please enter a message');

    return;
  }

});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}

function isValidName(name) {
  const nameRegex = /^[a-zA-Z\s]*$/;

  return nameRegex.test(name);
}
