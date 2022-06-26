'use strict';

const form = document.querySelector('.form');
const topElement = document.querySelector('.page__body');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
  topElement.scrollIntoView();
});
