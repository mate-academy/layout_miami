'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--disable-scroll');
  } else {
    document.body.classList.remove('page__body--disable-scroll');
  }
});

const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});
