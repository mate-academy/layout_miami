"use strict";

const menu = document.querySelector(".menu");
const menuOpen = document.querySelector("#menu");
const menuClose = document.querySelector("#close");

const phone = document.querySelector(".icon--phone");
const tooltip = document.querySelector("#tooltip");

phone.addEventListener("mouseenter", () => {
  tooltip.classList.add("nav__info--tooltip-show");
});

phone.addEventListener("mouseout", () => {
  tooltip.classList.remove("nav__info--tooltip-show");
});

menuOpen.addEventListener("click", () => {
  menu.classList.add("toggle-menu");
});

menuClose.addEventListener("click", () => {
  menu.classList.remove("toggle-menu");
});
