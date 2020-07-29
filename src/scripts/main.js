'use strict';

const navList = document.querySelector('.nav__list');
const burgerList = document.querySelector('.burger__list');
const burgerCheckbox = document.querySelector('.burger__checkbox');

navList.addEventListener('click', function(event) {
  event.preventDefault();

  const anchor = event.target;
  const sectionId = anchor.getAttribute('href');

  document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}
);

burgerList.addEventListener('click', function(event) {
  event.preventDefault();

  burgerCheckbox.checked = false;

  const anchor = event.target;
  const sectionId = anchor.getAttribute('href');

  document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}
);
