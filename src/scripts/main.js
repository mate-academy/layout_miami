'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.getElementById('form').addEventListener('submit', function(e) {
  document.getElementById('form').reset();
  e.preventDefault();
});
