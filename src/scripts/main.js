'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// const button = document.querySelector('.button--primery');

// button.addEventListener('submit', (e) => {
//   e.preventDefault();
// });
