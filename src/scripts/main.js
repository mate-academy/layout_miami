'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const buttonForm = document.querySelector('#form__button');

buttonForm.addEventListener('submit', function(event) {
  event.preventDefault();
  event.target.reset();
});
