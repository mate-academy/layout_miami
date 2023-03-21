'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#navigation') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const buttonForm = document.getElementsByClassName('form__button');
const inputsForm = document.getElementsByClassName('form__input');

buttonForm[0].addEventListener('click', buttonNotReload);

function buttonNotReload(event) {
  event.preventDefault();

  for (let i = 0; i < inputsForm.length; i++) {
    inputsForm[i].value = '';
  }
}
