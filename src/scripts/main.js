'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.contact-form');
const inputs = document.querySelectorAll('.contact-us__field');
const textarea = document.querySelector('.contact-us__field--last');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }

  textarea.value = '';
});
