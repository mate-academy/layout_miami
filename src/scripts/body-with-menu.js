function disableScroll() {
  document.body.classList.add('no-scroll');
}

function enableScroll() {
  document.body.classList.remove('no-scroll');
}

const menuButton = document.querySelector('.header__nav-icon--menu');
const closeButton = document.querySelector('.menu__nav-icon--close');

menuButton.addEventListener('click', () => {
  disableScroll();
});

closeButton.addEventListener('click', () => {
  enableScroll();
});
