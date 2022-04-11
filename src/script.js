'use strict';

const nav = document.querySelector('.nav');
const bgc = document.querySelector('.header__wrapper');
const toggler = document.querySelector('.header__burger');
const cross = document.querySelector('.header__cross');
const title = document.querySelector('.header__title');
const phone = document.querySelector('.header__phone');

toggler.addEventListener('click', function() {
  nav.style.display = 'block';
  bgc.style.background = '#e8eff9';
  bgc.style.height = 'fit-content';
  cross.style.display = 'inline-block';
  toggler.style.display = 'none';
  title.style.display = 'none';
  phone.style.display = 'none';
});

cross.addEventListener('click', function() {
  nav.style.display = 'none';
  bgc.style.background = 'none';
  bgc.style.height = '100%';
  bgc.style.backgroundImg = 'url("/images/photos/background.png")';
  cross.style.display = 'none';
  toggler.style.display = 'inline-block';
  title.style.display = 'block';
  phone.style.display = 'inline-block';
});

const button = document.querySelector('#submitButton');

button.addEventListener('click', function(event) {
  window.alert('preventDeafault', 1);
  event.preventDefault();
}, false);
