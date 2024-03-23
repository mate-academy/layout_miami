'use strict';

sendForm();

function sendForm() {
  const form = document.getElementById('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
  });
}
