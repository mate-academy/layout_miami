'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__content--with-menu');
  } else {
    document.body.classList.remove('page__content--with-menu');
  }
});

const button = document.querySelector('#send');

button.addEventListener('click', buttonClick, false);

function buttonClick(event) {
  event.preventDefault();
}
