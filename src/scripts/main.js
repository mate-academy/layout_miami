'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', reloaded, false);

function reloaded(event) {
  event.preventDefault();
};
