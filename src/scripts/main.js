'use strict';

// page do not scroll when menu is open
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// page do not refresh after submitting form
const form = document.getElementById('formId');
const mess = document.getElementById('opTag');

function submitForm(event) {
  event.preventDefault();
  mess.innerHTML = 'Form submit successful &#10003';
  form.reset();
}
form.addEventListener('submit', submitForm);
