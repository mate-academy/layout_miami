'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('body--with-menu');
  } else {
    document.body.classList.remove('body--with-menu');
  }
});

const formSubmit = document.querySelector('#contact-form__button');

formSubmit.addEventListener('click', e => e.preventDefault(), false);
