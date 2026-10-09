'use strict';

const form = document.querySelector('.form');
const pageSections = document.querySelectorAll('.header, .main, .footer');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});

const toggleMenuLock = () => {
  const isMenuOpen = window.location.hash === '#menu';

  document.body.classList.toggle('page__body--with-menu', isMenuOpen);

  pageSections.forEach((section) => {
    section.toggleAttribute('inert', isMenuOpen);
  });
};

window.addEventListener('hashchange', toggleMenuLock);
toggleMenuLock();

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && window.location.hash === '#menu') {
    window.location.hash = '#home';
  }
});
