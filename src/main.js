'use strict';

window.onload = function() {
  const subForm = document.getElementById('submitForm');

  subForm.addEventListener('submit', clear);

  function clear() {
    subForm.reset();
  }
};

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__menu--active');
  } else {
    document.body.classList.remove('page__menu--active');
  }
});
