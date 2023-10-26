const menu = document.querySelector('.hamburger-menu');
const links = document.querySelector('.links');
const logo = document.querySelector('.navigation__logo');
const body = document.body;

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  links.classList.toggle('active');
  logo.classList.toggle('active');
  body.classList.toggle('page__body--with-menu');

  // Change the URL hash to #menu
  window.location.hash = 'menu';
});

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();
  // event.target.reset();

  event.target.querySelectorAll('.form__label + *').forEach(input => {
    input.value = '';
  });
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// Function to remove 'active' class from menu, links, and logo
function removeActiveClasses() {
  menu.classList.remove('active');
  links.classList.remove('active');
  logo.classList.remove('active');
}

// Select all links inside the menu and
// add a click event listener to remove 'active' classes
const menuLinks = document.querySelectorAll('a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    removeActiveClasses();
  });
});
