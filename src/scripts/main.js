'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});

function addedFooterAnimation() {
  const footer = document.querySelector('.footer');
  const footerHeight = footer.clientHeight;

  const scrollHeight = document.body.scrollHeight;
  const scrollHeightForAnimationStart = (
    scrollHeight - document.documentElement.clientHeight - footerHeight
  );

  if (window.scrollY > scrollHeightForAnimationStart) {
    footer.style.animation = 'footerAppearance 2s linear';
  }
}

function addedAnimationForSection() {
  const allSections = [...document.querySelectorAll('.page__section')].slice(1);

  allSections.forEach(section => {
    const windowScroll = window.scrollY;
    const screenClientHeight = document.documentElement.clientHeight;
    const scrollForAnimation = windowScroll + screenClientHeight + 25;
    const sectionOffSetTop = section.offsetTop;

    if (section.classList.contains('contacts')) {
      if (scrollForAnimation - 20 >= sectionOffSetTop) {
        section.style.animation = 'sectionAnimation 2.5s';
      }
    }

    if (scrollForAnimation >= sectionOffSetTop) {
      section.style.animation = 'sectionAnimation 2.5s';
    }
  });
}

window.addEventListener('scroll', () => {
  if (document.documentElement.clientWidth >= 1024) {
    addedAnimationForSection();
  }
  addedFooterAnimation();
});
