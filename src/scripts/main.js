'use strict';

// prevent the form from submitting
const form = document.querySelector('form');

function submit(event) {
  event.preventDefault();

  for (const field of document.querySelectorAll('.form-field')) {
    field.value = '';
  }
}

form.addEventListener('submit', submit);

// disable page scrolling under the menu
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
