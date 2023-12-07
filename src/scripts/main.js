'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('body--no-scroll');
  } else {
    document.body.classList.remove('body--no-scroll');
  }
});
