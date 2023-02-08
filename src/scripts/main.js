'use strict';

if (window.location.hash !== '') {
  document.body.classList.remove('page__body--with-menu');
  window.location.replace(window.location.pathname);
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const button = document.querySelector('.contactus__form');
const inputName = document.querySelectorAll('.contactus__input');

button.addEventListener('submit', preventDefault);

function preventDefault(event) {
  event.preventDefault();

  inputName.forEach(input => {
    input.value = '';
  });
}
