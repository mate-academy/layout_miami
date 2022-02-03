'use strict';

function scrollTop() {
  const scrollTopBtn = document.querySelector('.page__button-scroll');

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
  });

  function showScrollTop() {
    if (window.scrollY >= 250) {
      scrollTopBtn.classList.add('page__button-scroll--visible');
    } else {
      scrollTopBtn.classList.remove('page__button-scroll--visible');
    }
  }

  window.addEventListener('scroll', () => {
    showScrollTop();
  });
}

function openMenu() {
  const menu = document.querySelector('.menu');
  const menuBtnOpen = document.querySelector('.burger-menu');
  const menuBtnClose = document.querySelector('.menu__closer');
  const menuLinks = document.querySelectorAll('.menu__link');

  function toggleMenu() {
    document.body.classList.toggle('page--with-menu');
    menu.classList.toggle('page--menu-open');
  }

  menuBtnOpen.addEventListener('click', toggleMenu);
  menuBtnClose.addEventListener('click', toggleMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });
}

function formSettings() {
  const form = document.querySelector('.form');
  const formRequired = document.querySelectorAll('.form__field--required');
  const formSubmit = document.querySelector('.form__submit');

  function setRequired() {
    formRequired.forEach(field => {
      field.setAttribute('required', '');
    });
  }

  function removeRequired() {
    formRequired.forEach(field => {
      field.removeAttribute('required', '');
    });
  }

  formSubmit.addEventListener('click', setRequired);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();

    window.scrollTo(0, 0);

    removeRequired();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  scrollTop();
  openMenu();
  formSettings();
});
