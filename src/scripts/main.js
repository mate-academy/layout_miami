'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }

  const form = document.querySelector('form');

  function stopDefAction(evt) {
    evt.preventDefault();
    form.reset();
  }

  form.addEventListener('submit', stopDefAction);
});
