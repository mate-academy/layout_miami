'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--menu');
  } else {
    document.body.classList.remove('page__body--menu');
  }
});

const pageReload = document.querySelector('#reload');

pageReload.addEventListener('submit', function reload(event) {
  event.preventDefault();

  pageReload.reset();
});
