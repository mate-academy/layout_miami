'use strict';

//  toggle all clickable elements tabindex when toggle menu
const toggleTabIndex = () => {
  const toggle = elem => {
    elem.tabIndex === -1 ? elem.tabIndex = 0 : elem.tabIndex = -1;
  };

  const toggleCollection = (collection) => {
    for (const elem of collection) {
      if (elem.classList.contains('burger')) {
        continue;
      }
      toggle(elem);
    }
  };

  const links = document.getElementsByTagName('a');
  const buttons = document.getElementsByTagName('button');
  const inputs = document.getElementsByTagName('input');
  const textareas = document.getElementsByTagName('textarea');

  toggleCollection(links);
  toggleCollection(buttons);
  toggleCollection(inputs);
  toggleCollection(textareas);
};

// tollge navigation on click on desired buttons
const toggleNavigation = () => {
  const burgerIcon = document.querySelector('.burger');
  const menu = document.querySelector('.nav');

  burgerIcon.classList.toggle('burger--closed');
  burgerIcon.classList.toggle('burger--opened');
  burgerIcon.classList.toggle('outline-arrow--grey');
  menu.classList.toggle('nav--active');

  const body = document.querySelector('.page__body');
  const header = document.querySelector('.header');

  if (body.classList.contains('page__body--menu-opened')) {
    body.classList.toggle('page__body--menu-opened');
    header.classList.toggle('header--menu-opened');
  } else {
    setTimeout(() => {
      body.classList.toggle('page__body--menu-opened');
      header.classList.toggle('header--menu-opened');
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
};

const toggleModal = () => {
  document
    .querySelector('.contact-form__modal')
    .classList.toggle('contact-form__modal--active');
};

document
  .querySelector('.contact-form')
  .addEventListener('submit', elem => {
    elem.preventDefault();
    clearFormInput();
    toggleModal();
    setTimeout(toggleModal, 3000);
  });
