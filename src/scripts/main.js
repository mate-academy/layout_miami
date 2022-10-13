'use strict';

// Ищем нужные элементы во всём документе
const toggler = document.querySelector('#toggler');
const menu = document.querySelector('.menu');

// ждём клики на toggler
toggler.addEventListener('click', function() {
  // переключаем класс menu--hidden (если есть - убираем, если нет - добавляем)
  menu.classList.toggle('menu--hidden');
});
