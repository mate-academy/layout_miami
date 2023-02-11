'use strict';

function stopDefAction(e) {
  e.preventDefault();
}

document.getElementById('submitButton').addEventListener(
  'submit', stopDefAction, false
);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
