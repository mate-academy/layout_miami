'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.contact-form');
// const inputs = document.querySelector('.contact-us__field');
const textarea = document.querySelector('.form-field--texterea');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // inputs.value = '';

  textarea.value = '';
});
