import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 800,
});

const menuButton = document.querySelector('#burger-menu');
const menuOpen = document.querySelector('#menu-open');
const navMenu = document.querySelector('#nav-menu');
const logo = document.querySelector('#logo');
const body = document.querySelector('body');
const form = document.querySelector('#form');

function BurgerMenuToggle() {
  navMenu.classList.toggle('page__menu--is-open');
  menuOpen.classList.toggle('header__menu-opener--is-close');
  body.classList.toggle('page__body--scroll-off');
  logo.classList.toggle('header__logo--dark');
}

menuButton.addEventListener('click', BurgerMenuToggle);

navMenu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    BurgerMenuToggle();
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (form.checkValidity()) {
    form.reset();
    window.alert('Thank you, we will contact you shortly');
  }
});
