'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#navMenu') {
    document.body.classList.add('body--with-menu');
  } else {
    document.body.classList.remove('body--with-menu');
  }
});
