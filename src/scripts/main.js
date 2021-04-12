'use strict';

const title = document.querySelector('navigation__bar');
const toggler = document.querySelector('#toggler');

toggler.addEventListener('click', () => {
  // title.classList.add('navigation__bar--active');
  // title.classList.remove('navigation__bar--active');
  title.classList.toggle('title--active');
});
