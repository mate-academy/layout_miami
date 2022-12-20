'use strict';

// disable scrolling when the menu is open

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// preventDefault onSubmit

const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
});
