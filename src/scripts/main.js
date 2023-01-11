'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body');
  } else {
    document.body.classList.remove('page__body');
  }
});
