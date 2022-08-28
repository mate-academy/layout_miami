'use strict';

window.addEventListener('DOMContentLoaded', () => {
  class Burger {
    constructor(btn, list) {
      this.btn = btn;
      this.list = list;
      this.opened = false;
      this.btnDisabled = false;
      this.scrollWidth = window.innerWidth - document.body.clientWidth;

      this.btn.addEventListener('click', () => {
        this.toggle();
      });
    }

    open() {
      this.disableBtn();

      if (this.scrollWidth) {
        document.body.style.paddingRight = `${this.scrollWidth}px`;

        document.querySelectorAll('[data-fixed-padding]').forEach((el) => {
          el.style.paddingRight = `${this.scrollWidth}px`;
        });
      }

      this.btn.classList.add('burger--active');
      this.btn.setAttribute('aria-expanded', true);
      this.list.classList.add('nav--opened');
      this.list.setAttribute('aria-hidden', false);

      document.body.classList.add('page__content--lock');
    }

    close() {
      this.disableBtn();

      if (this.scrollWidth) {
        document.body.style.paddingRight = null;

        document.querySelectorAll('[data-fixed-padding]').forEach((el) => {
          el.style.paddingRight = null;
        });
      }

      document.body.classList.remove('page__content--lock');
      this.btn.classList.remove('burger--active');
      this.btn.setAttribute('aria-expanded', false);
      this.list.classList.remove('nav--opened');
      this.list.setAttribute('aria-hidden', true);
    }

    toggle() {
      if (this.btn.classList.contains('burger--active')) {
        this.close();
      } else {
        this.open();
      }
    }

    disableBtn() {
      this.btn.disabled = true;

      this.list.addEventListener('transitionend', () => {
        this.btn.disabled = false;
      });
    }
  }

  class Debounce {
    constructor(time = 100, functions = () => { }) {
      this.time = time;
      this.functions = functions;
      this.timeOut = null;
    }

    init() {
      clearTimeout(this.timeOut);

      this.timeOut = setTimeout(() => {
        this.functions();
      }, this.time);
    }
  }

  const header = document.querySelector('.header');
  const headerMenu = document.querySelector('.nav');
  const burgerBtn = document.querySelector('.burger');
  const myBurger = new Burger(burgerBtn, headerMenu);
  const addClassOnScroll = () => {
    if (window.pageYOffset > 0) {
      header.classList.add('header--scroll');
    } else {
      header.classList.remove('header--scroll');
    }
  };
  const debounceFunc = new Debounce(100, addClassOnScroll);

  headerMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav__link')) {
      myBurger.close();
    }
  });

  window.addEventListener('scroll', () => {
    debounceFunc.init();
  });

  document.querySelector('.contacts__form').addEventListener('submit', (e) => {
    e.preventDefault();
  });
});
