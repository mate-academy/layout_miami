'use strict';

document.querySelector('#form').addEventListener('submit', (e) =>
  e.preventDefault()
);

document.querySelector('#button').addEventListener('click', function(event) {
  event.preventDefault();
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__icon:last-child')
    .addEventListener('click', openNav);

  document.querySelector('.header__logo--black')
    .addEventListener('click', closeNav);

  document.querySelector('.closebtn').addEventListener('click', closeNav);

  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));

      target.scrollIntoView({
        behavior: 'smooth',
      });
    });
  });

  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    let isValid = true;

    if (nameInput.value.trim() === '') {
      isValid = false;
      nameInput.classList.add('error');
    } else {
      nameInput.classList.remove('error');
    }

    if (emailInput.value.trim() === '') {
      isValid = false;
      emailInput.classList.add('error');
    } else {
      emailInput.classList.remove('error');
    }

    if (messageInput.value.trim() === '') {
      isValid = false;
      messageInput.classList.add('error');
    } else {
      messageInput.classList.remove('error');
    }

    if (isValid) {
      this.submit();
    }
  });
});

function openNav() {
  document.getElementById('mySidenav').style.width = '100%';
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}
