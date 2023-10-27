'use strict';

sendForm();

function sendForm() {
  const form = document.getElementById('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name');

    name.value = '';

    const email = document.getElementById('email');

    email.value = '';

    const message = document.getElementById('message');

    message.value = '';
  });
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
