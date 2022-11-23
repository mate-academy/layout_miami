'use strict';

const addRule = (function(style) {
  const sheet = document.head.appendChild(style).sheet;

  return function(selector, css) {
    const propText = typeof css === 'string'
      ? css : Object.keys(css).map(function(p) {
        return p + ':' + (p === 'content' ? "'" + css[p] + "'" : css[p]);
      }).join(';');

    sheet.insertRule(selector + '{' + propText + '}', sheet.cssRules.length);
  };
})(document.createElement('style'));

const headerMenu = document.querySelector('.header__menu');
const headerMenuLogo = document.querySelector('.humburger-menu__logo');

const humburgerMenuCancel
  = document.querySelector('.humburger-menu__cancel');
const navList = document.querySelector('.nav__list');
const form = document.querySelector('.form');
const contactName = document.querySelector('.contact__name');
const contactEmail = document.querySelector('.contact__email');
const contactMessage = document.querySelector('.contact__message');

headerMenu.addEventListener('click', function() {
  addRule('.humburger-menu', {
    display: 'block',
  });
});

humburgerMenuCancel.addEventListener('click', () => {
  addRule('.humburger-menu', {
    display: 'none',
  });
});

navList.addEventListener('click', () => {
  addRule('.humburger-menu', {
    display: 'none',
  });
});

headerMenuLogo.addEventListener('click', () => {
  addRule('.humburger-menu', {
    display: 'none',
  });
});

form.addEventListener('submit', (e) => {
  contactName.value = '';
  contactEmail.value = '';
  contactMessage.value = '';

  e.preventDefault();
});
