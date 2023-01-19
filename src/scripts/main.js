'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  this.reset();
});
