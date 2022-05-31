'use strict';

function doHeaderMenu() {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
}

function showHeaderWhenScroll() {
  const header = document.querySelector('#header');
  const sectionHome = document.querySelector('#home');
  const sectionHomeHeight = sectionHome.clientHeight;
  const headerModifier = 'page__header--scroll';
  const headerTopIndent = document.querySelector('.top-actions').clientHeight;

  if (window.scrollY >= (sectionHomeHeight - headerTopIndent)) {
    header.classList.add(headerModifier);
  } else {
    header.classList.remove(headerModifier);
  }
};

window.addEventListener('hashchange', doHeaderMenu);
document.addEventListener('scroll', showHeaderWhenScroll);
