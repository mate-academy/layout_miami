'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const getElem = document.querySelector('.header__item-hamburger');
  const getModal = document.querySelector('.aside');
  const getCloseBtn = document.querySelector('.header__item-menu-btn');
  const mobileList = document.querySelectorAll('.header__item-menu-describe');
  const getBody = document.querySelector('.body');

  getElem.addEventListener('click', openModal);
  getCloseBtn.addEventListener('click', closeModal);

  function openModal() {
    getModal.classList.remove('aside');
    getModal.classList.add('aside--isEnable');

    getBody.classList.add('body--disableScroll');
  }

  function closeModal() {
    getModal.classList.remove('aside--isEnable');
    getModal.classList.add('aside');
    getBody.classList.remove('body--disableScroll');
    getBody.classList.add('body');
  }

  [...mobileList].forEach((el) =>
    el.addEventListener('click', () => {
      getModal.classList.remove('aside--isEnable');
      getModal.classList.add('aside');
      getBody.classList.remove('body--disableScroll');
      getBody.classList.add('body');
    })
  );
});
