'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#bar') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
