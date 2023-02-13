'use strict';

const form = document.querySelector('#contact_us-form');
const page = document.querySelector('.page');

togglePageScroll();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});

window.addEventListener('hashchange', togglePageScroll);

function togglePageScroll() {
  const menuIsOpened = window.location.hash === '#menu';

  if (menuIsOpened) {
    page.classList.add('page--with-menu');
  } else {
    page.classList.remove('page--with-menu');
  }
}
