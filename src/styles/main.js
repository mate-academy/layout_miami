'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

if (window.location.hash === '#menu') {
  document.body.classList.add('page__body--with-menu');
}

document.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
  window.scrollTo(0, 0);
});
