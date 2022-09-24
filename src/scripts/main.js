'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav') {
    document.body.classList.add('page--with-nav');
  } else {
    document.body.classList.remove('page--with-nav');
  }
});

const formButton = document.querySelector('#form-submit');

formButton.addEventListener('click', submit);

function submit(event) {

  const name = document.querySelector('#form-input-name');
  const email = document.querySelector('#form-input-email');
  const message = document.querySelector('#form-input-message');
  
  if (name.value !== '' && email.value !== '' && message.value !== '') {
    event.preventDefault();

    name.value = '';
    email.value = '';
    message.value = '';
  }
}
