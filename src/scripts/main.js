'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.documentElement.classList.add('html--with-menu');
  } else {
    document.documentElement.classList.remove('html--with-menu');
  }
});
