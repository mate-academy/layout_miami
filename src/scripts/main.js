'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const makeDefault = document.querySelector('.form');

makeDefault.addEventListener('submit', function(e) {
  e.preventDefault();

  document.getElementsByName('name')[0].value = '';
  document.getElementsByName('email')[0].value = '';
  document.getElementsByName('Message')[0].value = '';
});
