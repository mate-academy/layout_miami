'use strict';

const toggler = document.querySelector('.header__toggler');
const nav = document.querySelector('.nav');

toggler.addEventListener('click', (events) => {
  nav.classListadd('red');
});
