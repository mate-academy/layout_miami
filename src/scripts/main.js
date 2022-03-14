'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

function stopDefAction(event) {
  document.getElementById('consultationForm').reset();
  event.preventDefault();
}

document.getElementById('consultationForm').addEventListener(
  'submit', stopDefAction, false
);
