'use strict';

//  toggle nav__links tabindex when menu toggle
const toggleTabIndex = () => {
  const toggle = elem => {
    elem.tabIndex === -1 ? elem.tabIndex = 0 : elem.tabIndex = -1;
  };

  const links = document.querySelectorAll('.nav__link');

  for (const link of links) {
    toggle(link);
  }

  toggle(document.querySelector('.nav__logo'));
  toggle(document.querySelector('.nav__call'));
};

// tollge navigation on click on desired buttons
const toggleNavigation = () => {
  document.querySelector('.burger').classList.toggle('burger--closed');
  document.querySelector('.burger').classList.toggle('burger--opened');
  document.querySelector('.burger').classList.toggle('outline-arrow--grey');
  document.querySelector('.nav').classList.toggle('nav--active');

  const isMenuOpened = document
    .querySelector('.page__body')
    .classList.contains('page__body--menu-opened');

  if (isMenuOpened) {
    document.querySelector('.page__body')
      .classList.toggle('page__body--menu-opened');
  } else {
    setTimeout(() => {
      document.querySelector('.page__body')
        .classList.toggle('page__body--menu-opened');
    }, 300);
  }

  document.querySelector('.header__phone')
    .classList.toggle('header__phone--fixed');

  toggleTabIndex();
};

const clickToToggleNav = element => {
  document.querySelector(element).addEventListener('click', toggleNavigation);
};

clickToToggleNav('.burger');
clickToToggleNav('.nav__logo');

// setting close navigation and smooth scroll after click on nav__link
const anchors = document.querySelectorAll('.nav__link');

for (const anchor of anchors) {
  anchor.addEventListener('click', elem => {
    elem.preventDefault();

    toggleNavigation();

    const blockID = anchor.getAttribute('href').slice(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

//  clearing the form input after click on submit
const clearFormInput = () => {
  const getField = document.querySelectorAll('.contact-form__field');

  for (const field of getField) {
    field.value = '';
  }

  document.querySelector('.contact-form__message').value = '';

  const toggleModal = () => {
    document
      .querySelector('.contact-form__modal')
      .classList.toggle('contact-form__modal--active');
  };

  toggleModal();
  setTimeout(toggleModal, 3000);
};

document
  .querySelector('.contact-form')
  .addEventListener('submit', elem => {
    elem.preventDefault();
    clearFormInput();
  });
