'use strict';

const navigation = document.querySelector('#navigation');
const toggler = document.querySelector('#toggler');

toggler.addEventListener('click', () => {
  navigation.classList.toggle('nav--active');
});
