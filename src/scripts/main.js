'use strict';

const form = document.querySelector('.form');
const pageSections = document.querySelectorAll('.header, .main, .footer');

// stay on the page and clear the form instead of reloading
form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});

const toggleMenuLock = () => {
  const isMenuOpen = window.location.hash === '#menu';

  // locks page scrolling while the menu is open
  document.body.classList.toggle('page__body--with-menu', isMenuOpen);

  // keeps Tab from reaching page content behind the overlay
  pageSections.forEach((section) => {
    section.toggleAttribute('inert', isMenuOpen);
  });
};

window.addEventListener('hashchange', toggleMenuLock);
toggleMenuLock();

// close the menu when Escape is pressed
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && window.location.hash === '#menu') {
    window.location.hash = '#home';
  }
});
