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
const humburgerMenuCancel
  = document.querySelector('.humburger-menu__cancel');

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
