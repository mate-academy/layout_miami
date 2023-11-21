'use strict';

const form = document.getElementById('form');

form.addEventListener('clear', function handleSubmit(event) {
  event.preventDefault();

  form.reset();
});
