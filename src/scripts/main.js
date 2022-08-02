'use strict';

const btn = document.getElementById('button');

btn.addEventListener('click', function handleClick(event) {
  event.preventDefault();

  const firstNameInput = document.getElementById('first_name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  firstNameInput.value = '';
  email.value = '';
  message.value = '';
});

document.getElementById('menu-btn').addEventListener('click', () => {
  document.body.classList.toggle('fixed-position');
});

document.getElementById('cross').addEventListener('click', () => {
  document.body.classList.toggle('fixed-position');
});
