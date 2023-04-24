'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('main-page__body--with-menu');
  } else {
    document.body.classList.remove('main-page__body--with-menu');
  }
});
