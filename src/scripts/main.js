'use strict';

const elem = document.getElementById('gallery');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    elem.style.display = 'none';
  } else {
    document.body.classList.remove('page__body--with-menu');
    elem.style.display = 'block';
  }
});

document.getElementById('submit').addEventListener('click', function(event) {
  event.preventDefault();
}, false);
