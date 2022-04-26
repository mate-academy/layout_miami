'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
  window.scrollTo(0, 0);
});

const form2 = document.getElementById('form2');

form2.addEventListener('submit', (event) => {
  event.preventDefault();
  form2.reset();
  window.scrollTo(0, 0);
});
