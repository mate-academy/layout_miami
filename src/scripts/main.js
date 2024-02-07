'use strict';

const form = document.getElementById('message');

function preventRefresh(event) {
  event.preventDefault();
}

form.addEventListener('submit', preventRefresh);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
