'use strict';

const checkIsMenuOpen = () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
};

window.addEventListener('hashchange', () => {
  checkIsMenuOpen();
});

window.addEventListener('scroll', () => {
  const reveals = document.querySelectorAll('.container__reveal');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
});

const formElement = document.getElementById('form');
const nameInputElement = document.getElementById('name-input');
const emailInputElement = document.getElementById('email-input');
const messageInputElement = document.getElementById('message-input');

formElement.addEventListener('submit', (event) => {
  event.preventDefault();

  nameInputElement.value = '';
  emailInputElement.value = '';
  messageInputElement.value = '';

  window.alert('Sent successfully!');
});

checkIsMenuOpen();
