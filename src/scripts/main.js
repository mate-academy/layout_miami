'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.onload = function() {
  const subForm = document.getElementById('form');

  subForm.addEventListener('submit', clear);

  function clear() {
    subForm.reset();
  }
};
