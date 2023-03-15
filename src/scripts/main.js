'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--menu-opened');
  } else {
    document.body.classList.remove('page__body--menu-opened');
  }
});

const form = document.querySelector('.contacts__form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});
