'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const frm = document.getElementById('submitForm');

frm.addEventListener('submit', (event) => {
  event.preventDefault();
  // frm.submit(); // Submit the form
  frm.reset(); // Reset all form data
});

// function submitForm() {
//   const frm = document.getElementById('submitForm');
//   frm.submit(); // Submit the form
//   frm.reset();  // Reset all form data
//   return false;
// }
