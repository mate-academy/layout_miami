'use strict';

const $ = window.$;

$(document).ready(function() {
  const menu = $('.header__menu');
  const navigation = $('.navigation');

  const toggleMenuButton = () => {
    if (menu.hasClass('header__menu--active')) {
      menu.addClass('header__menu--static');
      menu.removeClass('header__menu--active');
    } else {
      menu.addClass('header__menu--active');
      menu.removeClass('header__menu--static');
    }
  };

  const upDownMenu = () => {
    navigation.toggleClass('navigation--down');
    toggleMenuButton();
  };

  menu.click(upDownMenu);

  const phone = $('.header__phone-box');
  const phoneNumber = $('.header__number');
  const mobileSide = $('.first-view__side-phone');

  const togglePhone = () => {
    const screenWidth = Number($(window).width());

    if (screenWidth >= 500) {
      phoneNumber.toggleClass('header__number--toggler');
    }
  };

  const toggleMobSide = () => {
    const screenWidth = Number($(window).width());

    if (screenWidth < 500) {
      mobileSide.toggleClass('first-view__side-phone--show');
    }
  };

  phone.mouseover(togglePhone);
  phone.mouseout(togglePhone);
  phone.click(toggleMobSide);
});
