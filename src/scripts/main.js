'use strict';

const refs = {
  openModalBtn: document.querySelector('#menu-open'),
  closeModalBtn: document.querySelector('#menu-close'),
  modal: document.querySelector('#menu'),
  closeIfClickNavLink: document.querySelector('.nav__list'),
  menu: document.querySelector('.is-hidden'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.closeIfClickNavLink.addEventListener('click', removeMenuByLink);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');

  if (!refs.menu.classList.contains('is-hidden')) {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
}

function removeMenuByLink() {
  refs.modal.classList.add('is-hidden');
  document.body.classList.remove('page__body--with-menu');
}
