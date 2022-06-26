'use strict';

const form = document.querySelector('.form');
const topElement = document.querySelector('.page__body');
const footer = document.querySelector('.footer');

footer.addEventListener('click', event => topElement.scrollIntoView());

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
  topElement.scrollIntoView();
});
