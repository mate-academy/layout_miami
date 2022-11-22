'use strict';

const form = document.getElementById('form');

form.addEventListener('submit', handleForm);

function handleForm(event) {
  event.preventDefault();
  this.reset();
}
