'use strict';

const form = document.querySelector('#contact-form');

form.addEventListener('submit', submitClick, false);

function submitClick(event) {
  event.preventDefault();
}
