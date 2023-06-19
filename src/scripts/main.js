'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const loginForm = document.querySelector('.contacts__form');

loginForm.addEventListener('submit', login);

function login(e) {
  e.preventDefault();
}
