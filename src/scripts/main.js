'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav') {
    document.body.classList.add('page__body--no-scroll');
  } else {
    document.body.classList.remove('page__body--no-scroll');
  }
});

const loginForm = document.querySelector('#form');

loginForm.addEventListener('submit', login);
document.getElementById('form').reset();

function login(e) {
  e.preventDefault();
  document.getElementById('form').reset();
}
