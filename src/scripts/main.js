'use strict';

const toggler = document.querySelector('.header__link--burger');
const menu = document.querySelector('.burger-menu');

// ждём клики на toggler
toggler.addEventListener('click', function() {
  menu.classList.toggle('burger-menu--hidden');
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('wrapper--with-menu');
  } else {
    document.body.classList.remove('wrapper--with-menu');
    menu.classList.add('burger-menu--hidden');
  }
});

const form = document.querySelector('#form');

form.addEventListener('submit', buttonClick, false);

function buttonClick(event) {
  event.preventDefault();
  form.reset();
};
