'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const formReload = document.querySelector('.js-form');

formReload.addEventListener('submit', (e) => {
  e.preventDefault();
  formReload.reset();
}
);
