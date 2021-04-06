'use strict';

document.querySelector('.mobmenu__bur').addEventListener('click', function() {
  document.querySelector('.mobmenu__bur').classList.toggle('active');
  document.querySelector('.mobmenu__menu').classList.toggle('active');
});
