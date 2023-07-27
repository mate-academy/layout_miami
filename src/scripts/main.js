'use strict';

const menuButton = document.querySelector('.icon--menu');
const crossButton = document.querySelector('.icon--cross');
const body = document.querySelector('.page__body');
const menuList = document.querySelector('.menu__list');
const headerLogo = document.querySelector('#header__logo');

const contactUsForm = document.querySelector('.contact-us-form');

headerLogo.addEventListener('click', function() {
  body.classList.remove('scroll-off');
});

menuButton.addEventListener('click', function() {
  body.classList.add('scroll-off');
});

crossButton.addEventListener('click', function() {
  body.classList.remove('scroll-off');
});

menuList.addEventListener('click', function(e) {
  if (e.target.tagName === 'A') {
    body.classList.remove('scroll-off');
  }
});

contactUsForm.addEventListener('submit', submitReload, false);

function submitReload(event) {
  event.preventDefault();
  contactUsForm.reset();
}
