'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__content--with-menu');
  } else {
    document.body.classList.remove('page__content--with-menu');
  }
});

const refresh = document.getElementById('contacts__form');

refresh.addEventListener('submit', function(event) {
  event.preventDefault();
});
