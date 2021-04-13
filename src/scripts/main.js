'use strict';

(function() {
  const burger = document.querySelector('.nav__icon');

  burger.addEventListener('click', () => {
    burger.classList.toggle('nav__icon--active');
  });
}());
