'use strict';

const openBtn = document.querySelector('.icon--menu');
const closeBtn = document.querySelector('.icon--cross');
const menuList = document.querySelector('.menu__list');
const menu = document.querySelector('.page__menu');
const body = document.querySelector('body');

const openSlide = 'page__menu--open';
const turnOffScroll = 'page__body--scroll-off';

const addClasses = () => {
  menu.classList.add(openSlide);
  body.classList.add(turnOffScroll);
};

const removeClasses = () => {
  menu.classList.remove(openSlide);
  body.classList.remove(turnOffScroll);
};

openBtn.addEventListener('click', addClasses);
closeBtn.addEventListener('click', removeClasses);

menuList.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    removeClasses();
  }
});
