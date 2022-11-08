'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const send = document.querySelector('#send-button');

send.addEventListener('click', sendClick, false);

function sendClick(event) {
  document.querySelector('#form').reset();

  event.preventDefault();
}
