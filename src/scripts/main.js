'use strict';

document.getElementById('send').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('form').reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});
