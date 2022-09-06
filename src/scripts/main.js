'use strict';

// TURN OFF MENU SCROLL
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// FORM SETTINGS
const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form__field');

function handler(event) {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
}

form.addEventListener('submit', handler);
