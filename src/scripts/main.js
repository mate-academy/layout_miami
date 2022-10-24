'use strict';

const form = document.querySelector('.form');
const fields = document.querySelectorAll('.form__field');

function handler(event) {
  event.preventDefault();

  fields.forEach(input => {
    input.value = '';
  });
}

form.addEventListener('submit', handler);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
