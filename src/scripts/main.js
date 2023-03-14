'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// const form = document.getElementById('formId');

// function submitForm(event) {
//   event.preventDefault();
// }

// form.addEventListener('submit', submitForm);
