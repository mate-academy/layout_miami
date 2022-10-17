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

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
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
