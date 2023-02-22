'use strict';

const page = document.querySelector('.page');
const form = document.querySelector('.form');

window.addEventListener('hashchange', () => {
  if (document.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    page.style.overflow = 'hidden';
  } else {
    document.body.classList.remove('page__body--with-menu');
    page.style.overflow = 'auto';
  }
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  this.reset();
});
