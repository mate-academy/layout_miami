'use strict';

const menuPage = document.getElementById('menu-page');
const menuLink = document.getElementById('header__menu-link');
const menuCloseLink = document.getElementById('menu-page__close-link');

menuLink.addEventListener('click', onClickEventHandler);
menuCloseLink.addEventListener('click', onClickEventHandler);

function onClickEventHandler(event) {
  if (menuPage.style.display === 'block') {
    menuPage.style.display = 'none';
  } else {
    menuPage.style.display = 'block';
  }
};
