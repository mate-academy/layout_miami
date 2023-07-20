const menu = document.getElementById('menu');
const openMenuButton = document.getElementById('menu-open-button');
const closeMenuButton = document.getElementById('menu-close-button');

openMenuButton.addEventListener('click', function() {
  document.body.style.overflowY = 'hidden';

  menu.classList.add('menu--active');
});

closeMenuButton.addEventListener('click', function() {
  menu.classList.remove('menu--active');

  document.body.style.overflowY = null;
});

const menuLinks = document.getElementsByClassName('menu__list-link');

Array.from(menuLinks).forEach(link =>
  link.addEventListener('click', redirect));

function redirect(event) {
  menu.classList.remove('menu--active');

  const url = event.target.getAttribute('value');

  setTimeout(function() {
    document.body.style.overflowY = null;

    window.location = url;
  }, 300);
}
