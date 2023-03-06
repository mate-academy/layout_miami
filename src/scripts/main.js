'use strict';

const textarea = document.querySelector('#textarea');
const formInput = document.querySelector('#contacts-form');
const message = document.querySelector('#message');

window.addEventListener('scroll', function() {
  const scroll = document.querySelector('#go-top');

  scroll.classList.toggle('go-top__btn--active', this.scrollY > 500);
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__content--with-menu');
  } else {
    document.body.classList.remove('page__content--with-menu');
  }
});

formInput.addEventListener('submit', function(e) {
  e.preventDefault();
  formInput.classList.add('contacts__form--visibility');
  message.style.display = 'block';
});

textarea.innerHTML = '';
