'use strict';

const body = document.body;
const burger = document.querySelector('.burger');
const closeBtn = document.querySelector('.close');
const smoothLinks = document.querySelectorAll(
  '.links__link, .button--primary, .footer__link',
);
const form = document.querySelector('.form');
const backToTop = document.querySelector('.back');
const footer = document.querySelector('.footer');
const footerNav = document.querySelector('.footer__nav');

let isFooterVisible = false;

if (burger) {
  burger.addEventListener('click', (event) => {
    event.preventDefault();
    body.classList.add('page__body--with-menu');
  });
}

if (closeBtn) {
  closeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    body.classList.remove('page__body--with-menu');
  });
}

smoothLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        event.preventDefault();
        body.classList.remove('page__body--with-menu');
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  });
});

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();
  });
}

const handleBackToTopVisibility = () => {
  if (!backToTop) return;

  if (window.scrollY > 400 && !isFooterVisible) {
    backToTop.classList.add('back--visible');
  } else {
    backToTop.classList.remove('back--visible');
  }
};

if (backToTop) {
  backToTop.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
  window.addEventListener('scroll', handleBackToTopVisibility);
}
if (footer && footerNav) {
  const footerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isFooterVisible = entry.isIntersecting;

        if (entry.isIntersecting) {
          footerNav.classList.add('is-visible');
        } else {
          footerNav.classList.remove('is-visible');
        }
        handleBackToTopVisibility();
      });
    },
    {
      threshold: 0.1,
    },
  );

  footerObserver.observe(footer);
}
