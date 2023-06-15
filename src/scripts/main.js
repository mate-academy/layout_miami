'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.js-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    this.reset();
  });
});
