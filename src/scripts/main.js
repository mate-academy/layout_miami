'use strict';

document.querySelector('#send').addEventListener('click', function(event) {
  event.preventDefault();
}, false);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
