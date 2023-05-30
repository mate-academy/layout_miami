'use strict';

const formSubmit = document.getElementById('contact_form');

formSubmit.addEventListener('submit', function(event) {
  event.preventDefault();
  formSubmit.reset();
});
