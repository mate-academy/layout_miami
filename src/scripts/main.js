'use strict';

const nav = document.querySelector('.nav');
const burger = document.querySelector('.header__burger-btn');
const times = nav.querySelector('.nav__times');

burger.onclick = function() {
  translateNav();
};

nav.addEventListener('click', function(e) {
  if ((e.target === times || e.target.classList.contains('nav__link'))
    && document.documentElement.clientWidth < 1025) {
    translateNav(100);
  }
});

function translateNav(val = 0) {
  nav.style.transform = `translateX(${val}%)`;
}
