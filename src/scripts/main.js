'use strict';

window.addEventListener('click', () => {
  if (window.location.click === 'menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
