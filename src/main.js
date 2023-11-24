'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('content--with-menu');
  } else {
    document.body.classList.remove('content--with-menu');
  }
});
