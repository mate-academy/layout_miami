'use strict';

const form = document.querySelector('#contact-form');

form.addEventListener('submit', submitClick, false);

function submitClick(event) {
  event.preventDefault();
  form.reset();
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const audioHover = document.querySelector('.audio__hover');
const audioClick = document.querySelector('.audio__click');
const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    audioHover.play();
  });
});

const clicableElements
= document.querySelectorAll('.menu__link, .button, .icon');

clicableElements.forEach(element => {
  element.addEventListener('click', () => {
    audioClick.play();
  });
});

window.addEventListener('scroll', reveal);

function reveal() {
  const sections = document.querySelectorAll('.page__section');

  sections.forEach(section => {
    const windowheight = window.innerHeight;
    const revealtop = section.getBoundingClientRect().top;
    const revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      section.classList.add('page__section--active');
    } else {
      section.classList.remove('page__section--active');
    }
  });
}
