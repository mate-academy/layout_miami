'use strict';

const navigationList = document.querySelector('.header__nav-items-container');

const checkbox = document.querySelector('.header__nav-toggler');

navigationList.addEventListener('click', () => {
  checkbox.checked = false;
});
