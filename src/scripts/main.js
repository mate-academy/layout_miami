'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.querySelector('#button_form-submit')
  .addEventListener('click', (event) => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name !== 0 && email !== 0 && message !== 0) {
      name = '';
      email = '';
      message = '';
    }
  }, false);
