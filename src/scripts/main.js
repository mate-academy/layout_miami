'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__content--menu-opened');
  } else {
    document.body.classList.remove('page__content--menu-opened');
  }
});
