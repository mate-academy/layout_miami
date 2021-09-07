'use strict';

const sidebar = document.querySelector('.sidebar');
const toggler = document.querySelector('#nav-toggler');
const label = document.querySelector('.navigation__toggler-label');

toggler.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar--active');
  label.classList.toggle('navigation__toggler--close');
});
