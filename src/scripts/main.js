'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--menu');
  } else {
    document.body.classList.remove('page__body--menu');
  }
});

const pageReload = document.querySelector('#form-reload');

pageReload.addEventListener('submit', function formReload(event) {
  event.preventDefault();

  pageReload.reset();
});
