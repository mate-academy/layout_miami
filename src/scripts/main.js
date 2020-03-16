'use strict';

let isScrolling = false;

window.addEventListener('scroll', throttleScroll, false);

function throttleScroll(e) {
  if (isScrolling === false) {
    window.requestAnimationFrame(function() {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}

document.addEventListener('DOMContentLoaded', scrolling, false);

const firstBox = document.querySelector('#animateRight');
const secondBox = document.querySelector('#animateLeft');
const itemRight = document.querySelector('#item-right');
const itemLeft = document.querySelector('#item-left');
const itemTop = document.querySelector('#item-top');

function scrolling(e) {
  if (isPartiallyVisible(firstBox && secondBox)) {
    firstBox.classList.add('wowRight');
    secondBox.classList.add('wowLeft');
  }

  if (isPartiallyVisible(itemRight && itemLeft && itemTop)) {
    itemRight.classList.add('wowLeft');
    itemLeft.classList.add('wowRight');
    itemTop.classList.add('wowTop');
  }
}

function isPartiallyVisible(el) {
  const elementBoundary = el.getBoundingClientRect();
  const topTo = elementBoundary.top;
  const bottom = elementBoundary.bottom;
  const height = elementBoundary.height;

  return ((topTo + height >= 0) && (height + window.innerHeight >= bottom));
}

const hendelForm = document.querySelectorAll('.form');
const collectionsInputs = document.querySelectorAll('.form__input');

const forms = Object.values(hendelForm);
const inputs = Object.values(collectionsInputs);

forms.map(item => {
  // eslint-disable-next-line no-shadow
  item.addEventListener('submit', (event) => {
    event.preventDefault();

    // eslint-disable-next-line
    inputs.map(input => input.value = '');
  });
});
