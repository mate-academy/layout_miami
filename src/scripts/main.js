'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
});

document.addEventListener('submit', function(event) {
  event.preventDefault();
  event.target.reset();
});
