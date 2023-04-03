'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

function stopUp(e) {
  e.preventDefoult();
}

document.getElementsById('#form').addEventListener('submit', stopUp, false);
