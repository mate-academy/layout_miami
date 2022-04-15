'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const e = document.getElementById('email');
const n = document.getElementById('name');
const m = document.getElementById('message');

document.querySelector('#submit').addEventListener('click', function(event) {
  event.preventDefault();

  n.value = '';
  e.value = '';
  m.value = '';
}, false);
