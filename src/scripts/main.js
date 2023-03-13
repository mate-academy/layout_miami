'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const menuButtonOpen = document.querySelector('.top-actions__icon--menu');
  const menuButtonClose = document.querySelector('.top-actions__icon--cross');
  const body = document.querySelector('.body');
  const menuHeaderPage = document.querySelector('.header__menu');

  menuButtonOpen.addEventListener('click', () => {
    menuHeaderPage.classList.add('active');
    body.classList.add('lock');
  });

  menuButtonClose.addEventListener('click', () => {
    menuHeaderPage.classList.remove('active');
    body.classList.remove('lock');
  });
});
