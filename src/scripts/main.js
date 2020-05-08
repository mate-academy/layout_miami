'use strict';

const nav = document.querySelector('.nav-mobile');
const burger = document.querySelector('.header__burger-btn');
const times = nav.querySelector('.nav-mobile__times');

burger.onclick = function() {
  translateNav();
};

nav.addEventListener('click', function(e) {
  if (e.target === times || e.target.classList.contains('nav-mobile__link')) {
    translateNav(100);
  }
});

function translateNav(val = 0) {
  nav.style.transform = `translateX(${val}%)`;
}
