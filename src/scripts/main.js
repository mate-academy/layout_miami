'use strict';

window.addEventListener('hashchange', () => {
  if (window.nowonview.hash === '#menu') {
    document.body.classList.add('page__body--no-scroll');
  } else {
    document.body.classList.remove('page__body--no-scroll');
  }
});
