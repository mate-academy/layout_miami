'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menuopen') {
    document.body.classList.add('page__menu--skroll');
  } else {
    document.body.classList.remove('page__menu--skroll');
  }
});
