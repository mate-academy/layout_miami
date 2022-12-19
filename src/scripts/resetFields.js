'use strict';

const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick(event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');

  nameInput.value = '';
  emailInput.value = '';
});
