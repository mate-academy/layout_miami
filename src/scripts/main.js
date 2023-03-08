'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.querySelector('wrapper').classList.add('wrapper--with-menu');
  } else {
    document.querySelector('wrapper').classList.remove('wrapper--with-menu');
  }
});
