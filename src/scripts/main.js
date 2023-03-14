'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const button = document.querySelector('.button-send');

button.addEventListener('click', buttonClick, false);

function buttonClick(event) {
  event.preventDefault();
};
