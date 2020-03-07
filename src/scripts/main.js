'use strict';

const burgerIcon = document.getElementsByClassName('burger-icon')[0];
const nav = document.getElementsByClassName('header__nav')[0];
const headerLink = document.getElementsByClassName('header__link')[0];
const headerPhone = document.getElementsByClassName('header__phone')[0];

burgerIcon.onclick = function(e) {
  if (nav.classList.contains('header__nav')) {
    nav.classList.remove('header__nav');
    nav.classList.add('nav-burger');
    burgerIcon.classList.add('change');
    headerLink.classList.add('move');
    headerPhone.classList.add('move');
  } else {
    nav.classList.add('header__nav');
    nav.classList.remove('nav-burger');
    burgerIcon.classList.remove('change');
    headerLink.classList.remove('move');
    headerPhone.classList.remove('move');
  }
};

const buttonSubmitForm = document.querySelectorAll('.consultation__form-link');

buttonSubmitForm.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const form = e.target.closest('.consultation__form');
    const inputs = form.querySelectorAll('input');

    inputs.forEach(inputItem => {
      inputItem.value = '';
    });
  });
});
