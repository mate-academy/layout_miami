'use strict';

const checkbox = document.querySelector('.nav__checkbox');
const form = document.querySelector('.contact__form');
const hero = document.querySelector('.hero');

checkbox.addEventListener(
  'change',
  function () {
    if (this.checked) {
      document.body.classList.add('page__body--with-menu');
    } else {
      document.body.classList.remove('page__body--with-menu');
    }
  },
  false
);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
  alert('You are beautiful');
});

hero.style.setProperty('width', '100%');

checkbox.addEventListener('click', () => {
  if (hero.style.width === '100%') {
    hero.style.setProperty('width', 'calc(100% - 15px)');
  } else {
    hero.style.setProperty('width', '100%');
  }
});

window.addEventListener('hashchange', () => {
  checkbox.checked = false;
  document.body.classList.remove('page__body--with-menu');
});
