'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const sendButton = document.querySelector('#form');

function stopDefAction(event) {
  sendButton.reset();
  event.preventDefault();
}

sendButton.addEventListener(
  'submit', stopDefAction, false
);
