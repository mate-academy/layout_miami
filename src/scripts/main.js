'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav') {
    document.body.classList.add('page__body--nav-open');
  } else if (window.location.hash !== '#nav') {
    document.body.classList.remove('page__body--nav-open');
  }
});
