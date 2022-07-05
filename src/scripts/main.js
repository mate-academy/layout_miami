'use strict';

const form = document.getElementById('form');

form.onsubmit = function() {
  document.getElementById('form').reset();

  return false;
};

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
