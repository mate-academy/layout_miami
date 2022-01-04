'use strict';

document.getElementById('formButton')
  .addEventListener('click', function(event) {
    event.preventDefault();
  });

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.getElementById('page').classList.add('page--with-menu');
    document.querySelectorAll('body > div:not(.menu)').tabIndex = -1;
  } else {
    document.getElementById('page').classList.remove('page--with-menu');
  }
});
