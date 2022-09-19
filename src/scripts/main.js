'use strict';

// #region menu
const body = document.body;
const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('a[href^="#"]');

const burgerMenuToggle = () => {
  burgerMenu.classList.toggle('burger-menu--is-active');
  nav.classList.toggle('nav--is-active');
  body.classList.toggle('page__body--with-menu');
};

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    burgerMenu.classList.remove('burger-menu--is-active');
    nav.classList.remove('nav--is-active');
    body.classList.remove('page__body--with-menu');
  });
});

burgerMenu.addEventListener('click', burgerMenuToggle);
// #endregion

// #region animate
const animatedItems = document.querySelectorAll('[data-animate]');
const intViewportHeight = window.innerHeight;

const animated = () => {
  animatedItems.forEach(item => {
    if (item.getBoundingClientRect().top <= intViewportHeight) {
      item.classList.add('animated');
    }
  });
};

window.addEventListener('scroll', animated);
// #endregion

// #region form
const form = document.querySelector('.contact-us__form');

form.onsubmit = (e) => {
  e.preventDefault();

  const name = document.querySelector('[name="name"]');
  const email = document.querySelector('[name="email"]');
  const message = document.querySelector('[name="message"]');

  alert(
    `The form is successfully submitted:
    Name: ${name.value}
    Email: ${email.value}
    ${message.value && 'Message :' + message.value}`
  );

  name.value = '';
  email.value = '';
  message.value = '';
};
// #endregion
