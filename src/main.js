'use strict';

const toggler = document.querySelector('#toggler');
const togglerCross = document.querySelector('#togglerCross');

const menu = document.querySelector('.menu');

const form = document.querySelector('#form');

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();
  form.reset();
});

toggler.addEventListener('click', function() {
  menu.classList.toggle('menu--hidden');
  document.body.classList.add('page--with-menu');
});

togglerCross.addEventListener('click', function() {
  menu.classList.toggle('menu--hidden');
  document.body.classList.remove('page--with-menu');
});

// -------------------------nav-links--------------

const menuList = document.querySelector('.menu__list');

menuList.addEventListener('click', function() {
  menu.classList.toggle('menu--hidden');
  document.body.classList.remove('page--with-menu');
});
