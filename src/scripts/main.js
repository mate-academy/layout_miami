'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
// I've added the fuction below but it dont
// send a form instead to prevent reload

function stopDefAction(evt) {
  evt.preventDefault();
}

document.getElementById('form').addEventListener(
  'submit', stopDefAction, false
);
