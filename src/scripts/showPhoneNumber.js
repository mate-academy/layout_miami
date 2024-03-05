'use strict';

const phoneNumber = document.querySelector('.top-bar__phone-number');
const phoneIcon = document.querySelector('.icon--phone');

phoneIcon.addEventListener('mouseover', () => {
  phoneNumber.classList.add('show-phone-number');
});

phoneIcon.addEventListener('click', () => {
  phoneNumber.classList.remove('show-phone-number');
});
