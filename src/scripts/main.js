'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const sendButton = document.querySelector('#form');

sendButton.addEventListener('submit', sendButtonClick, false);

function sendButtonClick(event) {
  event.preventDefault();
  this.reset(); // эта строка добавляет функцию сброса на форму
}
