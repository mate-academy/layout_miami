'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('form');

function stopDefAction(e) {
  form.reset();
  e.preventDefault();
}

form.addEventListener(
  'submit', stopDefAction, false
);
