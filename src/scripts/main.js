'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--menu-visible');
  } else {
    document.body.classList.remove('page--menu-visible');
  }
});

document
  .querySelector('.contact-form__button')
  .addEventListener('click', (e) => {}, false);
