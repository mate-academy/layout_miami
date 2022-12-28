'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

function noReload(event) {
  event.preventDefault();
};

const form = document.getElementById('form');

form.addEventListener('submit', noReload);
