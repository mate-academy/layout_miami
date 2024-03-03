'use strict';

const phoneNumber = document.head.getElementsByClassName('phone-number')[0];
const phoneIcon = document.getElementsByClassName('icon--phone')[0];

phoneIcon.addEventListener('mouseover', () => {
  phoneNumber.classList.add('show-phone-number');
});

phoneIcon.addEventListener('click', () => {
  phoneNumber.classList.remove('show-phone-number');
});
