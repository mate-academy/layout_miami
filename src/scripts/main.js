'use strict';

const form = document.querySelector('.contuct-us__form');

form.addEventListener('submit', event => {
  document.location.reload();

  event.preventDefault();
});

// const manu = document.querySelector('.page__menu');

// window.addEventListener('scroll', () => {
//   manu.target.style.transform = 'translateX(-100%)';
// });
