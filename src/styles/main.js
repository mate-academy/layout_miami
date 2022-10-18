'use strict';

const toggler = document.querySelector('#toggler');
const menu = document.querySelector('.menu');

toggler.addEventListener('click', function() {
  menu.classList.toggle('menu--active');
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
    menu.classList.remove('menu--active');
  }
});

const checkbox = document.querySelector('#send');

checkbox.addEventListener('click', checkboxClick, false);

function checkboxClick(event) {
  event.preventDefault();
}
