'use strict';

const form = document.querySelector('#form');

form.addEventListener('submit', onFormSubmit, false);

function onFormSubmit(event) {
  form.reset();
  event.preventDefault();
}
