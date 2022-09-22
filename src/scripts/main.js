'use strict';

const forButton = document.getElementById('form-button');

forButton.addEventListener('click', function(e) {
  e.preventDefault();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
