'use strict';

const scrollbarWidth = (window.innerWidth - document.body.clientWidth);
const menu = document.getElementById('menu');
const paddingRight = (window.getComputedStyle(menu, null)
  .getPropertyValue('padding-right'))
  .slice(0, -2);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    menu.style.paddingRight = (+scrollbarWidth + (+paddingRight)) + 'px';
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.addEventListener('load', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    menu.style.paddingRight = (+scrollbarWidth + (+paddingRight)) + 'px';
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
