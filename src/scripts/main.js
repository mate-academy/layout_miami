'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const button = document.querySelector('.contactus__button');
const inputName = document.querySelector('.contactus__input');
const textarea = document.querySelector('.contactus__input--textarea');
const email = document.querySelector('.contactus__input--email');

button.addEventListener('click', preventDefault);

function preventDefault(event) {
  event.preventDefault();

  inputName.value = '';
  email.value = '';
  textarea.value = '';
}
