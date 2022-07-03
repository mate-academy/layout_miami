'use strict';

const form = document.querySelector('.form');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});
