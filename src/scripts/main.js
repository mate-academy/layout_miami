'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--menu');
  } else {
    document.body.classList.remove('page--menu');
  }
});
