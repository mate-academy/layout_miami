'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const nameTextbox = document.getElementById('name__text-box');

nameTextbox.addEventListener('keypress', checkName, false);

const emailTextbox = document.getElementById('email__text-box');

emailTextbox.addEventListener('keypress', checkName, false);

const textareaTextbox = document.getElementById('textarea__text-box');

textareaTextbox.addEventListener('keypress', checkName, false);

function checkName(evt) {
  const charCode = evt.charCode;

  if (charCode !== 0) {
    evt.preventDefault();
  }
}
