'use strict';

const toggleNav = () => {
  const toggleEls = document.getElementsByClassName('toggle');

  for (const elem of toggleEls) {
    elem.classList.toggle('non-visible');
  }
};

// TODO: This is for linters:
toggleNav();
toggleNav();
