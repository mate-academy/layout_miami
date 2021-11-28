'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }

  document.onkeydown = function(t) {
    if (t.which === 9) {
      return false;
    }
  };
});
