'use strict';

const sandwichOpen = document.querySelector('.header__sandwich--open');
const sandwichClose = document.querySelector('.header__sandwich--close');
const nav = document.querySelector('.nav');

sandwichOpen.addEventListener('click', () => {
  nav.classList.add('active-nav');
  sandwichOpen.style.display = 'none';
  sandwichClose.style.display = 'block';
});

sandwichClose.addEventListener('click', () => {
  nav.classList.remove('active-nav');
  sandwichOpen.style.display = 'block';
  sandwichClose.style.display = 'none';
});
