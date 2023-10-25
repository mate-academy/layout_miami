const menu = document.querySelector('.hamburger-menu');
const links = document.querySelector('.links');
const logo = document.querySelector('.navigation__logo');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  links.classList.toggle('active');
  logo.classList.toggle('active');
});

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();
  event.target.reset();
});
