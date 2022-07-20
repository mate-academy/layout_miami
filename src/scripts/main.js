'use strict';

document
  .getElementById('menu-toggler')
  .addEventListener('change', e => bodyMenuToggle(e.target));

const navLinks = document
  .getElementsByClassName('header__nav-list-link');

for (let i = 0; i < navLinks.length; i++) {
  navLinks.item(i).addEventListener('click', (e) => {
    const toggler = document.getElementById('menu-toggler');

    toggler.checked = !toggler.checked;
    bodyMenuToggle(toggler);
  });
};

function bodyMenuToggle(checkbox) {
  if (checkbox.checked) {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
}
