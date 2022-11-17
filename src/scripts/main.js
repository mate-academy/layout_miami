'use strict';

const contactsFormRef = document.querySelector('.contacts__form');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

contactsFormRef.addEventListener('submit', (e) => {
  e.preventDefault();
});
