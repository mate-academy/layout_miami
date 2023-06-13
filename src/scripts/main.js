'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--width-menu');
  } else {
    document.body.classList.remove('page__body--width-menu');
  }
});

const resetForm = () => {
  document.getElementById('contact-form').reset();
};

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;

  resetForm();

  window.alert(`Thank you, ${name}!\nForm is submited!`);
});
