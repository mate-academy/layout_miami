'use strict';

const menuBtn = document.querySelector('.header__menu-button');

const menu = document.querySelector('.header__hidden-menu');

const menuLinks = document.querySelector('.menu__nav');

const form = document.getElementById('form');

const active = '#menu';

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  window.location.hash = active;
});

menuLinks.addEventListener('click', function() {
  menuLinks.classList.toggle('active');
  menu.classList.toggle('active');
  menuBtn.classList.toggle('active');
  window.location.hash = '';
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('body--with-menu');
  } else {
    document.body.classList.remove('body--with-menu');
  }
});

function handleForm(event) {
  event.preventDefault();
}

form.addEventListener('submit', handleForm);

(function onLoad() {
  document.body.classList.remove('body--with-menu');
})();
