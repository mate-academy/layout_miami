'use strict';

const openButton = document.querySelector('#navOpenButton');
const closeButton = document.querySelector('#navCloseButton');
const menuSection = document.querySelector('#menu');
const navList = document.querySelector('#navList');
const body = document.querySelector('body');

function openMenuBar() {
  menuSection.classList.add('menu--shown');
  body.classList.add('page__body--scroll-off');
}

function closeMenuBar() {
  menuSection.classList.remove('menu--shown');
  body.classList.remove('page__body--scroll-off');
}

openButton.addEventListener('click', openMenuBar);

closeButton.addEventListener('click', closeMenuBar);

navList.addEventListener('click', function(event) {
  if (event.target.tagName === 'A') {
    closeMenuBar();
  }
});
