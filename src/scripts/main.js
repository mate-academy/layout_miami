'use strict';

// disable page scrolling under the menu
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// Page shouldn't be reloaded on form submit
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});
