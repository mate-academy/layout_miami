'use strict';

(function() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    nav.classList.toggle('nav--active');
  });
}());
