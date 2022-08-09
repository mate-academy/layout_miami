'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.querySelector('#submit').addEventListener('click', function(event) {
  const f = document.querySelector('#form');

  f.reportValidity();

  if (f.checkValidity()) {
    f.reset();
  }

  event.preventDefault();
}, false);
