'use strict';

const $ = window.$;

$(document).ready(function() {
  const menu = $('.header__menu');

  const toggleMenuButton = () => {
    if (menu.hasClass('header__menu--active')) {
      menu.addClass('header__menu--static');
      menu.removeClass('header__menu--active');
    } else {
      menu.addClass('header__menu--active');
      menu.removeClass('header__menu--static');
    }
  };

  menu.click(function() {
    $('.navigation').toggleClass('navigation--down');
    toggleMenuButton();
  });

  const phone = $('.header__phone-box');
  const phoneNumber = $('.header__number');

  const togglePhone = () => {
    phoneNumber.toggleClass('header__number--toggler');
  };

  phone.mouseover(togglePhone);
  phone.mouseout(togglePhone);
});
