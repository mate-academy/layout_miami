'use strict';

const navMenu = document.querySelector('.navbar-mobile');
const burger = document.querySelector('.promo__toggler-label');

burger.onclick = function() {
  toggler();
};

navMenu.addEventListener('click', e => {
  toggler(100);
});

function toggler(count = 0) {
  navMenu.style.transform = `translateX(${count}%)`;
}
