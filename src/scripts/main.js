'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('body--scroll-off');
  } else {
    document.body.classList.remove('body--scroll-off');
  }
});
