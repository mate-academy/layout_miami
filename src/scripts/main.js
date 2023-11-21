'use strict';

function clearAndSubmit() {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const sendButton = document.querySelector('.button--contact');

  if (sendButton) {
    sendButton.addEventListener('click', clearAndSubmit);
  }
});
