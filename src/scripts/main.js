'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick(event) {
  event.preventDefault();

  const inputs = document.querySelectorAll('#name', 'email', 'message');

  inputs.forEach(input => {
    input.value = '';
  });
});

// const iconMenu = document.querySelector('#toggler');
// const iconCross = document.querySelector('.icon--cross');
// const menu = document.querySelector('.menu__content');

// iconMenu.addEventListener('click', function() {
//   menu.classList.toggle('menu--hidden');
// });

// iconCross.addEventListener('click', function() {
//   menu.classList.remove('menu--hidden');
// });
