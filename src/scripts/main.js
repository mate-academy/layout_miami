'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

function stopDefaultAction(evt) {
  evt.preventDefault();
}

document.getElementById('call-me-back-button').addEventListener('click',
  stopDefaultAction, false);
