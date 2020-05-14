'use strict';

const menuBlock = document.getElementById('mobile-menu');
const menuOpenButton = document.getElementById('burger-button');
const menuCloseButton = document.getElementById('close-button');

menuOpenButton.onclick = function() {
  menuBlock.classList.add('mobile-menu--open');
};

menuCloseButton.onclick = function() {
  menuBlock.classList.remove('mobile-menu--open');
};
