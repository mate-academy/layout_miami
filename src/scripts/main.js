'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--no-scroll');
  } else {
    document.body.classList.remove('page__body--no-scroll');
  }
});

const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const firstNameInput = document.getElementById('name');

  firstNameInput.value = '';

  const emailInput = document.getElementById('email');

  emailInput.value = '';

  const messageInput = document.getElementById('message');

  messageInput.value = '';
});
