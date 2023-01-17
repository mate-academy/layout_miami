'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const sendButton = document.querySelector('#button-send');

sendButton.addEventListener('click', sendButtonClick, false);

function sendButtonClick(event) {
  event.preventDefault();
}
