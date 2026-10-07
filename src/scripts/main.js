'use strict';

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});


const toggleMenuLock = () => {
  document.body.classList.toggle(
    'page__body--with-menu',
    window.location.hash === '#menu',
  );
};

window.addEventListener('hashchange', toggleMenuLock);
toggleMenuLock();
