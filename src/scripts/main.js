'use strict';

// disable menu scroll

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// disable reloading when submit form

function stopDefAction(event) {
  document.getElementById('form').reset();
  event.preventDefault();
}

document.getElementById('form').addEventListener(
  'submit', stopDefAction, false
);
