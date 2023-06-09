'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const stopDefAction = document.getElementById('form');

stopDefAction.addEventListener('submit', function reload(evn) {
  evn.preventDefault();

  stopDefAction.reset();
});
