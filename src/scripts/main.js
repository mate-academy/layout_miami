'use strict';

window.addEventListener('hashchange', () => {

  if (window.location.hash === '#menu') {
    document.body.classList.add('lock');
  } else {
    document.body.classList.remove('lock');
  }
});
