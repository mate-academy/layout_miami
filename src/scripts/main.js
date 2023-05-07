'use strict';

// const openButton = document.querySelector('#menuOpenButton');
// const closeButton = document.querySelector('#menuCloseButton');
// const menu = document.querySelector('#menu');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// window.addEventListener('scroll', () => {
//   const scrolled = window.scrollY;

//   console.log(scrolled);
// });
