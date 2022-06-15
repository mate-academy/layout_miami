'use strict';

const button = document.querySelector('.menuButton');
const background = document.querySelector('.menu__background');
const container = document.querySelector('.menu__container');
const headerLink = document.querySelector('.header__link');
const menuBlock = document.querySelector('.menu');
const menuList = document.querySelectorAll('.menu__list');
const rippleButton = document.querySelectorAll('.button__global');
const phoneNumber = document.querySelector('.header__phoneNumber');
const phoneIcon = document.querySelector('.header__phone');
const menuButtonUp = document.querySelector(`.menuButton__bar--up`);
const menuButtonMid = document.querySelector(`.menuButton__bar--mid`);
const menuButtonDown = document.querySelector(`.menuButton__bar--down`);
const form = document.querySelector('.contucts__form');
const body = document.querySelector('body');

/// ///////////////////////menu////////////////////////////////
let menuOpen = false;
let menuButtonEnabled = true;

const toggleHandler = () => {
  menuButtonEnabled = false;
  background.classList.toggle('menu__background--open');
  container.classList.toggle('container--open');
  button.classList.toggle('menuButtonOpen');
  menuButtonUp.classList.toggle('bar--up');
  menuButtonMid.classList.toggle('bar--mid');
  menuButtonDown.classList.toggle('bar--down');
  body.classList.toggle('overflowJidden');
};

const openMenuHandler = () => {
  button.style.setProperty('position', 'fixed');
  headerLink.style.setProperty('position', 'fixed');
  menuBlock.style.setProperty('z-index', '1');
  toggleHandler();
};

const closeMenuHandler = () => {
  button.style.setProperty('position', 'absolute');
  headerLink.style.setProperty('position', 'absolute');
  toggleHandler();
};

button.addEventListener('click', function() {
  if (!menuOpen && menuButtonEnabled) {
    openMenuHandler();
  } else if (menuOpen && menuButtonEnabled) {
    closeMenuHandler();
  }
});

[...menuList].map(el => {
  el.addEventListener('click', function(e) {
    closeMenuHandler();
  });
});

menuBlock.addEventListener('animationend', function() {
  if (!menuOpen && !menuButtonEnabled) {
    menuOpen = true;
    menuButtonEnabled = true;
  } else if (menuOpen) {
    menuBlock.style.setProperty('z-index', '-1');
    menuOpen = false;
    menuButtonEnabled = true;
  }
});

/// /////////////////////////////////ripple button////////////////////////////

[...rippleButton].map(el => {
  el.addEventListener('click', function(e) {
    const posX = e.offsetX;
    const posY = e.offsetY;

    el.style.setProperty('--x', posX + 'px');
    el.style.setProperty('--y', posY + 'px');
    el.classList.add('rippleButton');
  });

  el.addEventListener('animationend', function() {
    el.classList.remove('rippleButton');
  });
});

// phone

phoneIcon.addEventListener('click', function() {
  phoneNumber.classList.toggle('phoneNumber__hiden');
});

/// //////////////////////form ///////////////////////

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // const urlAPI = 'https://boring-fe.herokuapp.com/comments';
  // // courtesy to Illia Litvinov for free API

  // const requestData = new FormData(e.target);

  // fetch(urlAPI, {
  //   method: 'POST',
  //   body: requestData,
  // })
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   });

  form.reset();
});
