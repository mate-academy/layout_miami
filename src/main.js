'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
});

document.addEventListener('click', function(e) {
  if (e.target.name === 'exhibitions') {
    e.preventDefault();
  }
});
