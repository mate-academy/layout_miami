'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.documentElement.classList.add('page--menu-open');
  } else {
    document.documentElement.classList.remove('page--menu-open');
  }
});

const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  event.target.reset()
});
