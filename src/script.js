const menu = document.querySelector('.hamburger-menu');
const links = document.querySelector('.links');
const logo = document.querySelector('.navigation__logo');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  links.classList.toggle('active');
  logo.classList.toggle('active');
});
