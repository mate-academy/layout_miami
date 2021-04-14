'use strict';

const sidebar = document.querySelector('.sidebar');
const toggler = document.querySelector('#nav-toggler');

toggler.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar--active');
});
