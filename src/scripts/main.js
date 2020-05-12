'use strict';
var $nav = $("#nav__container");
var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    $nav.toggleClass("nav__container nav__container--mobile-show");
    $(".mobile-bg").fadeToggle();
    $(".nav__item--link").toggleClass("nav__item--link-mobile");
    $(".header__call-to-order").toggleClass("header__call-to-order--mobile");
    $(".header__phone").toggleClass("header__phone--mobile");
  });