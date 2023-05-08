'use strict';

const openButton = document.querySelector('#navOpenButton');
const closeButton = document.querySelector('#navCloseButton');
const nav = document.querySelector('#nav');
const navList = document.querySelector('#navList');
const body = document.querySelector('body');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const form = document.querySelector('#submitForm');

const openNavClass = 'page__menu--open';
const turnOffScrollClass = 'page__body--scroll-off';

function openMenu() {
  nav.classList.add(openNavClass);
  body.classList.add(turnOffScrollClass);
  main.hidden = true;
  footer.hidden = true;
}

function closeMenu() {
  nav.classList.remove(openNavClass);
  body.classList.remove(turnOffScrollClass);
  main.hidden = false;
  footer.hidden = false;
}

function preventSubmit(event) {
  event.preventDefault();
  document.getElementById('submitForm').reset();
}

form.addEventListener('submit', preventSubmit);

openButton.addEventListener('click', openMenu);

closeButton.addEventListener('click', closeMenu);

navList.addEventListener('click', function(event) {
  if (event.target.tagName === 'A') {
    closeMenu();
  }
});
