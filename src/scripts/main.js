'use strict';

if (window.location.hash === '#menu') {
  document.body.classList.add('page__body--with-menu');
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const submitFormDisabled = document.querySelector('#submitFormDisabled');
const formFields = document.querySelectorAll('.contacts__field');

submitFormDisabled.addEventListener('submit', (event) => {
  event.preventDefault();

  formFields.forEach(input => {
    input.value = '';
  });
});
