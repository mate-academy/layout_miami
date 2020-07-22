'use strict';

const navState = document.querySelector('.mobile-header');
const toggler = document.querySelectorAll('.toggler');

toggler.forEach((item) => {
  item.addEventListener('click', (e) => {
    navState.classList.toggle('mobile-header-active');
  });
});
