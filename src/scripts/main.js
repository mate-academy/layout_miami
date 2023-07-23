'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('body--with-menu');
  } else {
    document.body.classList.remove('body--with-menu');
  }
});

const form = document.querySelector('.contactUs__form');

window.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});
