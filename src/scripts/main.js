'use strict';

document.querySelector('#form').addEventListener('submit', function(e) {
  e.preventDefault();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash !== '#menu') {
    document.body.classList.remove('page__body--withMenu');
  } else if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--withMenu');
  }
});
