'use strict';

const buttonForm = document.querySelector('#form');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});

buttonForm.addEventListener('submit', function(e) {
  e.preventDefault();
  buttonForm.reset();
});
