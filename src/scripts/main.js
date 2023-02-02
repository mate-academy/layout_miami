'use strict';

const button = document.getElementById(form-submit-button);

button.addEventListener('click', event => {
  event.preventDefault();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  };
});


