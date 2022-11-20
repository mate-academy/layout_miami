'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--no-scroll');
  } else {
    document.body.classList.remove('page__body--no-scroll');
  }
});

// document.getElementById('submitButton')
//   .addEventListener('submit', submitForm);

// function submitForm(event) {
//   event.preventDefault();

//   return false;
// }
