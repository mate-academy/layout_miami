'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.documentElement.classList.add('page--menu-open');
  } else {
    document.documentElement.classList.remove('page--menu-open');
  }
});

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (form.checkValidity()) {
    form.reset();
    window.alert('Thank you!');
  }
});
