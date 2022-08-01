'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.getElementById('main').setAttribute('style', 'display: none;');
    // eslint-disable-next-line max-len
    document.getElementById('header').setAttribute('style', 'margin-bottom: 0;');
    document.getElementById('footer').setAttribute('style', 'display: none;');
  } else {
    document.getElementById('main').setAttribute('style', 'display: block;');
    // eslint-disable-next-line max-len
    document.getElementById('header').setAttribute('style', 'margin-bottom: 120px');
    document.getElementById('footer').setAttribute('style', 'display: block;');
  }
});

const firstSector = document.getElementById('firstSector');
const aboutUs = document.getElementById('about-us');

function moveOn() {
  setTimeout(function() {
    aboutUs.scrollIntoView(
      {
        block: 'start', behavior: 'smooth',
      });
  },
  10);
}
firstSector.addEventListener('click', moveOn);

const secondSector = document.getElementById('secondSector');
const compateBikes = document.getElementById('compate-bikes');

function moveOn1() {
  setTimeout(function() {
    compateBikes.scrollIntoView(
      {
        block: 'start', behavior: 'smooth',
      });
  },
  10);
}
secondSector.addEventListener('click', moveOn1);

const thirdSector = document.getElementById('thirdSector');
const details = document.getElementById('details');

function moveOn2() {
  setTimeout(function() {
    details.scrollIntoView(
      {
        block: 'start', behavior: 'smooth',
      });
  },
  10);
}
thirdSector.addEventListener('click', moveOn2);

const fourthSector = document.getElementById('fourthSector');
const contacts = document.getElementById('contacts');

function moveOn3() {
  setTimeout(function() {
    contacts.scrollIntoView(
      {
        block: 'start', behavior: 'smooth',
      });
  },
  10);
}
fourthSector.addEventListener('click', moveOn3);
