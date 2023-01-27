'use strict';

window.addEventListener('hashchange', () => {
  document.body.classList.toggle('page__body--with-menu');
});

document.getElementById('submit-form')
  .addEventListener('submit', function(event) {
    event.preventDefault();
  });
