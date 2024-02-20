'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const preventDefault = document.querySelector('.form__button');

function check(e) {
  e.preventDefault();
}

preventDefault.addEventListener('click', check, false);
