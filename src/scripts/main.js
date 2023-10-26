'use strict';

sendForm();

function sendForm() {
  const form = document.getElementById('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name');

    name.value = '';

    const email = document.getElementById('email');

    email.value = '';

    const message = document.getElementById('message');

    message.value = '';
  });
}
