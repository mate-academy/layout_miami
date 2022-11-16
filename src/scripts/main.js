'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const button = document.querySelectorAll('.button');

function Defaultp(event) {
  event.preventDefault();
};

button.forEach(buttonItem => {
  buttonItem.addEventListener('click', Defaultp);
});
