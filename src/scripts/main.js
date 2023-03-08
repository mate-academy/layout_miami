'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('body--with-menu');
  } else {
    document.body.classList.remove('body--with-menu');
  }
});

// prevent default form submit

const formButton = document.querySelector('.contact__button');

formButton.addEventListener('click', function(e) {
  e.preventDefault();
});
