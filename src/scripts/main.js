'use strict';

const form = document.querySelector('.contacts__form');

function stopPageReload(e) {
  e.preventDefault();
}

form.onclick = stopPageReload;

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
