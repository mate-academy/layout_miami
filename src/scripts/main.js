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
  const menu = document.querySelector('#menu');
  const sectionHomeHeight = document.querySelector('#home').clientHeight;
  const headerTopIndent = document.querySelector('.top-actions').clientHeight;

  if (window.scrollY >= (sectionHomeHeight - headerTopIndent)) {
    header.classList.add('page__header--scroll');
    menu.classList.add('page__menu--scroll');
  } else {
    header.classList.remove('page__header--scroll');
    menu.classList.remove('page__menu--scroll');
  }
};

const form = document.querySelector('.form');

window.addEventListener('hashchange', doHeaderMenu);
document.addEventListener('scroll', showHeaderWhenScroll);

form.addEventListener('submit', e => {
  e.preventDefault();
  form.reset();
});
