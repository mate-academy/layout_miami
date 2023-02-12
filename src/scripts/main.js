'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.querySelector('#form').addEventListener('submit', formPrevent);

function formPrevent(event) {
  event.preventDefault();
  document.querySelector('#form').reset();
}

if (window.location.hash !== '') {
  document.body.classList.remove('page__body--with-menu');
  window.location.replace(window.location.pathname);
}
