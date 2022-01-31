'use strict';

// Disabling page scrolling

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__menu--with-menu');
  } else {
    document.body.classList.remove('page__menu--with-menu');
  }
});

// Prevent page refrech on form

document.querySelector('#submit-button').addEventListener(
  'click',
  function(event) {
    event.preventDefault();
  },
  false
);
