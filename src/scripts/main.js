document.addEventListener('DOMContentLoaded', () => {
  const menuOpenBtn = document.querySelector('#menu-open');
  const menuCloseBtn = document.querySelector('#menu-close');
  const mobileMenu = document.querySelector('#mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav__link');

  const closeMenu = () => {
    mobileMenu.classList.remove('mobile-nav--active');
    document.body.style.overflow = 'auto';
  };

  if (menuOpenBtn && mobileMenu) {
    menuOpenBtn.addEventListener('click', () => {
      mobileMenu.classList.add('mobile-nav--active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (menuCloseBtn && mobileMenu) {
    menuCloseBtn.addEventListener('click', closeMenu);
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});
