'use strict';

const formButton = document.querySelector('#formButton');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    window.scrollTo(0, 0);
    document.body.classList.add('body--scroll-off');
  } else {
    document.body.classList.remove('body--scroll-off');
  }

  if (window.location.hash === '#About_Us') {
    const location = document.querySelector('#About_Us').offsetTop;
    const screenHeight = window.innerHeight / 100 * 5;

    window.scrollTo(0, location - screenHeight);
  }

  if (window.location.hash === '#Compare_Bikes') {
    const location = document.querySelector('#Compare_Bikes').offsetTop;
    const screenHeight = window.innerHeight / 100 * 5;

    window.scrollTo(0, location - screenHeight);
  }

  if (window.location.hash === '#Details') {
    const location = document.querySelector('#Details').offsetTop;
    const screenHeight = window.innerHeight / 100 * 5;

    window.scrollTo(0, location - screenHeight);
  }

  if (window.location.hash === '#Contacts') {
    const location = document.querySelector('#Contacts').offsetTop;
    const screenHeight = window.innerHeight / 100 * 5;

    window.scrollTo(0, location - screenHeight);
  }
});

formButton.addEventListener('click', (event) => {
  event.preventDefault();
});
