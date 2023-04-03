'use strict';

const HEADER = document.querySelector('.js-header');
const BODY = document.body;
const FORM = document.querySelector('.js-form');
const menuButton = document.querySelectorAll('.js-menu-toggle');

menuButton.forEach(el => {
  el.addEventListener('click', toggleMenu);
});

function toggleMenu() {
  HEADER.classList.toggle('header--open');
  toggleBodyScroll();
}

function toggleBodyScroll() {
  BODY.classList.toggle('off-scroll');
}

FORM.addEventListener('submit', function(e) {
  e.preventDefault();

  alert('prevent Form send as part of test work');
});
