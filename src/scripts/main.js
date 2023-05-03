'use strict';

const openButton = document.querySelector('#navOpenButton');
const closeButton = document.querySelector('#navCloseButton');
const nav = document.querySelector('#nav');
const navList = document.querySelector('#navList');
const body = document.querySelector('body');

const openNavClass = 'page__menu--open';
const turnOffScrollClass = 'page__body--scroll-off';

function openMenu() {
  nav.classList.add(openNavClass);
  body.classList.add(turnOffScrollClass);
}

function closeMenu() {
  nav.classList.remove(openNavClass);
  body.classList.remove(turnOffScrollClass);
}

openButton.addEventListener('click', openMenu);

closeButton.addEventListener('click', closeMenu);

navList.addEventListener('click', function(event) {
  if (event.target.tagName === 'A') {
    closeMenu();
  }
});

// openButton.addEventListener('click', function() {
//   console.log('+');
// });
