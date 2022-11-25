'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const button = document.querySelector('.button');

function DefaultButt(event) {
  event.preventDefault();
};

button.addEventListener('click', DefaultButt);

const form = document.querySelector('.contacts__form');

function Defaultp(event) {
  event.preventDefault();
  event.target.reset();
};

form.addEventListener('submit', Defaultp);
