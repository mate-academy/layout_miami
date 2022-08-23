'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('my-bike__body--with-menu');
  } else {
    document.body.classList.remove('my-bike__body--with-menu');
  }
});

document.addEventListener('submit', function(event) {
  event.preventDefault();
});
