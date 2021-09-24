'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('html__body--with-menu');
  } else {
    document.body.classList.remove('html__body--with-menu');
  }
});
