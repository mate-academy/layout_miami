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
  event.preventDefault();

  document.querySelector('#form-input-name').value = '';
  document.querySelector('#form-input-email').value = '';
  document.querySelector('#form-input-message').value = '';
}
