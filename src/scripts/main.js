'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('#form');
const formFields = document.querySelectorAll('.contacts__field');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  formFields.forEach(el => {
    el.value = '';
  });
});
