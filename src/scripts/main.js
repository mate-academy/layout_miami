'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

function stopDefAction(evt) {
  evt.preventDefault();

  document.getElementById('form-contact__name').value = '';
  document.getElementById('form-contact__email').value = '';
  document.getElementById('form-contact__message').value = '';
  window.alert('Thanks for your message!');
}

document.getElementById('form-contact__button').addEventListener(
  'click', stopDefAction, false
);
