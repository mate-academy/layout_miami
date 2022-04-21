'use strict';

const nav = document.querySelector('.nav');
const bgc = document.querySelector('.header__wrapper');
const toggler = document.querySelector('.header__burger');
const cross = document.querySelector('.header__cross');
const title = document.querySelector('.header__title');
const phone = document.querySelector('.header__phone');
const html = document.querySelector('html');

toggler.addEventListener('click', function() {
  nav.style.display = 'block';
  bgc.style.background = '#e8eff9';
  bgc.style.height = '100vh';
  bgc.style.justifyContent = 'start';
  cross.style.display = 'inline-block';
  toggler.style.display = 'none';
  title.style.display = 'none';
  phone.style.display = 'none';
  html.style.overflow = 'hidden';
});

function exit() {
  nav.style.display = 'none';
  bgc.style.background = 'none';
  bgc.style.height = '100%';
  bgc.style.backgroundImg = 'url("/images/photos/background.png")';
  bgc.style.justifyContent = 'space-between';
  cross.style.display = 'none';
  toggler.style.display = 'inline-block';
  title.style.display = 'block';
  phone.style.display = 'inline-block';
  html.style.overflow = 'scroll';
}

cross.addEventListener('click', exit);

const form = document.querySelector('#contactForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});

const link = document.querySelectorAll('.nav__link');

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener('click', exit);
}
