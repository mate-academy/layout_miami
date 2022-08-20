'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__content--scroll');
  } else {
    document.body.classList.remove('page__content--scroll');
  }
});
