'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav-menu') {
    document.body.classList.add('page__body--scroll-remove');
  } else {
    document.body.classList.remove('page__body--scroll-remove');
  }
});
