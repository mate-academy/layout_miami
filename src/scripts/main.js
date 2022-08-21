'use strict';

const callIcon = document.querySelector('.top-actions__call-icon');
const phoneNumber = document.querySelector('.top-actions__phone-number');

callIcon.addEventListener('click', () => {
  phoneNumber.classList.toggle('top-actions__phone-number--hidden');
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
