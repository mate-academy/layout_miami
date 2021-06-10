'use strict';

const headerBurger= document.querySelector('.header__burger');
const headerMennu = document.querySelector('.header__menu');

if (headerBurger) {
  headerBurger.addEventListener("click", function(e) {
    document.body.classList.toggle('lock');
    headerBurger.classList.toggle('header__burger--active');
    headerMennu.classList.toggle('header__menu--active');
  });
};

const menuLinks = document.querySelectorAll('.header__link')

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

      if (headerBurger.classList.contains('header__burger--active')) {
        document.body.classList.remove('lock');
        headerBurger.classList.remove('header__burger--active');
        headerMennu.classList.remove('header__menu--active');
      }

      window.scrollTo({
        top:gotoBlockValue,
        behavior:"smooth"
      });
      e.preventDefault();
    }
  }
}
