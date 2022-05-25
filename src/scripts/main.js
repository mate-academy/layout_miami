'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

function preventDef(event) {
  event.preventDefault();
}

function removeHandler() {
  document.getElementById('formBtn').removeEventListener('click',
    preventDef, false);
}

removeHandler();
