'use strict';

// Pobierz elementy przycisków
const openMenuButton = document.querySelector('.header__nav-item--burger');
const closeMenuButton = document.querySelector('.menu__nav-item--close');
const logoButton = document.querySelector('.menu__nav-item--logo');
const callButton = document.querySelector('.menu__container-call-link');

const pageBody = document.body;

// Funkcja do obsługi przycisku "Hamburger"
function openMenu() {
  // Otwórz menu
  document.location.href = '#menu';

  // Zablokuj scroll
  pageBody.style.overflow = 'hidden';
}

// Funkcja do obsługi zamknięcia menu
function closeMenu() {
  // Zamknij menu
  document.location.href = '#home';

  // Odblokuj scroll
  pageBody.style.overflow = '';
}

// Dodaj obsługę zdarzeń kliknięcia na przyciski
openMenuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);
logoButton.addEventListener('click', closeMenu);
callButton.addEventListener('click', closeMenu);

// Pobierz wszystkie linki w menu
const menuLinks = document.querySelectorAll('.menu__links-list-item-link');

// Dodaj obsługę zdarzenia kliknięcia do każdego linku w menu
menuLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});
