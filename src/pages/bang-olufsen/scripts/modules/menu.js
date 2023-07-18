window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const menuLinks = document.getElementsByClassName('menu__list-link');

Array.from(menuLinks).forEach(link =>
  link.addEventListener('click', redirect));

function redirect(event) {
  const url = event.target.getAttribute('value');

  window.location = '#home';

  setTimeout(function() {
    window.location = url;
  }, 300);
}
