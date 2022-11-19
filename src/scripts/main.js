'use strict';

const addRule = ((style) => {
  const sheet = document.head.appendChild(style).sheet;

  return function(selector, css) {
    const propText = typeof css === 'string'
      ? css : Object.keys(css).map(function(p) {
        return p + ':' + (p === 'content' ? "'" + css[p] + "'" : css[p]);
      }).join(';');

    sheet.insertRule(selector + '{' + propText + '}', sheet.cssRules.length);
  };
})(document.createElement('style'));

$('.header__phone').mouseenter(() => {
  addRule('.header__phone:before', {
    display: 'block',
  });
});

$('.header__phone').mouseleave(() => {
  addRule('.header__phone:before', {
    display: 'none',
  });
});
