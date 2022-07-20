'use strict';

document.getElementById('menu-toggler').addEventListener('change', (e) => {
  if (e.target.checked) {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
