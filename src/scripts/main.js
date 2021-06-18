'use strict';

const checkbox = document.querySelector('.header__nav-toggler');
const navigation = document.querySelectorAll('.nav__link');

navigation.forEach(element => {
  element.addEventListener('click', () => {
    checkbox.checked = !checkbox.checked;
  });
});
