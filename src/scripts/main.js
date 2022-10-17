'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('my-form');

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();

  form.reset();
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
