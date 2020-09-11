'use strict';

const burger = document.querySelector('.header__checkbox');
const list = document.querySelector('.nav__list');

burger.addEventListener('click', toActivate(list));

function toActivate(elem) {
  elem.classlist.add('active');
}
