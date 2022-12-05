'use strict';

function onWindowHashChange() {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
}

window.addEventListener('hashchange', () => {
  onWindowHashChange();
});

const button = document.querySelector('.button--send');

button.addEventListener('click', (event) => {
  event.preventDefault();
});
