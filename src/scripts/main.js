'use strict';

const form = document.getElementById('formSubmit');

function stopDefAction(e) {
  e.preventDefault();
  form.reset();
}

document.getElementById('formSubmit').addEventListener(
  'submit', stopDefAction, false
);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
