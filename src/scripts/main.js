'use strict';

const sandwich = document.querySelector('.header__sandwich');
const navigation = document.querySelector('.navigation');
const closeIcon = document.querySelector('.navigation__close');

sandwich.addEventListener('click', function() {
  navigation.classList.remove('showout');
  navigation.classList.add('showin');
});

closeIcon.addEventListener('click', function() {
  navigation.classList.remove('showin');
  navigation.classList.add('showout');

  setTimeout(() => navigation.classList.remove('showout'), 1000);
});
