'use strict';

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form__field');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--scroll');
  } else {
    document.body.classList.remove('page__body--scroll');
  }
});

function handler(event) {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
}

form.addEventListener('submit', handler);
