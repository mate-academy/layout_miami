'use strict';

const checkForOpenMenu = () => {
  if (window.location.hash === '#nav') {
    document.body.classList.add('page__body--menu-open');
  } else {
    document.body.classList.remove('page__body--menu-open');
  }
};

window.addEventListener('hashchange', () => {
  checkForOpenMenu();
});
