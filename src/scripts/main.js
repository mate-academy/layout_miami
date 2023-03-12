'use strict';

const form = document.getElementById('form');

function submitForm(event) {
  event.preventDefault();
  form.reset();
}

form.addEventListener('submit', submitForm);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});
