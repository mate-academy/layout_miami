'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('menu__open');
  } else {
    document.body.classList.remove('menu__open');
  }
});

const btn = document.querySelector('.button--send');
const Name = document.querySelector('.name');
const Email = document.querySelector('.email');

// eslint-disable-next-line no-console
btn.addEventListener('click', (e) => {
  if (
    Name.value.length > 0
    && Email.value.indexOf('@') !== -1
    && Email.value.length > 0
  ) {
    e.preventDefault();
    Name.value = '';
    Email.value = '';
  }
});
