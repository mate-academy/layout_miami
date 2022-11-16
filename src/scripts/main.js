'use strict';

const button = document.getElementById('form-submit');

button.addEventListener('click', (e) => {
  e.preventDefault();
});

const aboutUsLink = document.getElementById('about-us-link');
const compareBikesLink = document.getElementById('compare-bikes-link');
const detailsLink = document.getElementById('details-link');
const contactsLink = document.getElementById('contacts-link');

aboutUsLink.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = '#';

  const anchorLocation = document.getElementById('about-us');

  anchorLocation.scrollIntoView({ behavior: 'smooth' });
});

compareBikesLink.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = '#';

  const anchorLocation = document.getElementById('compare-bikes');

  anchorLocation.scrollIntoView({ behavior: 'smooth' });
});

detailsLink.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = '#';

  const anchorLocation = document.getElementById('details');

  anchorLocation.scrollIntoView({ behavior: 'smooth' });
});

contactsLink.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = '#';

  const anchorLocation = document.getElementById('contacts');

  anchorLocation.scrollIntoView({ behavior: 'smooth' });
});
