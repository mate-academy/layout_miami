'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('#form');

function stopUp(e) {
  e.preventDefoult();
  form.reset();
}

form.addEventListener('submit', stopUp);
