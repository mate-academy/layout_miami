'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const preventDefault = document.querySelectorAll(".form__prevent");

preventDefault.addEventListener("click", check, false);

function check(e) {
  e.preventDefault();
}
