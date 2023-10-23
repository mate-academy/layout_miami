'use strict';

// Pobierz elementy przycisków
const openMenuButton = document.querySelector('.header__nav-item--burger');
const closeMenuButton = document.querySelector('.menu__nav-item--close');

// Pobierz element body
const pageBody = document.getElementById('page');

// Funkcja do obsługi przycisku "Hamburger"
function openMenu() {
  // Otwórz menu
  document.location.href = '#menu';

  // Zablokuj scroll
  pageBody.style.overflow = 'hidden';
}

// Funkcja do obsługi przycisku "Close"
function closeMenu() {
  // Zamknij menu
  document.location.href = '#home';

  // Odblokuj scroll
  pageBody.style.overflow = '';
}

// Dodaj obsługę zdarzeń kliknięcia
openMenuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);
