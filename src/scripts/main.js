'use strict';

// 1. Selectors
// 2. Helper functions
//      2.1. Header scrolled state
//      2.2. Toggle Menu
//      2.3. Focus Trap & Keyboard Handler
//      2.4. Proximity detection for burger/X
//      2.5. Scroll Lock
//      2.6. Soundwave icon animation
// 3. Handlers
//      3.1. Handle burger click
//      3.2. Submit handling (mock/dummy)
// 4. Init

// =================================================
//      SELECTORS
// =================================================

const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__link');
const menuOverlay = document.querySelector('.menu-overlay');
const contactForm = document.querySelector('.contact__form');

// =================================================
//      HELPER FUNCTIONS
// =================================================

const getFocusableElements = () => {
  return menu.querySelectorAll(
    'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
  );
};

// -------------------------------------------------
//      HEADER SCROLLED STATE (throttle)
// -------------------------------------------------

let ticking = false;

const handleScroll = () => {
  if (!ticking) {
    ticking = true;
    window.requestAnimationFrame(() => {
      if (window.scrollY > 50) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
      ticking = false;
    });
  }
};

// -------------------------------------------------
//      TOGGLE MENU
// -------------------------------------------------

const toggleMenu = (forceClose = false) => {
  const isOpen = forceClose ? true : burger.getAttribute('aria-expanded') === 'true';
  const newState = !isOpen;

  burger.setAttribute('aria-expanded', String(newState));
  menu.classList.toggle('is-open', newState);
  document.body.classList.toggle('menu-is-open', newState);
  header.classList.toggle('menu-is-open', newState);

  toggleScrollLock(newState);

  if (newState) {
    document.addEventListener('keydown', handleFocusTrap);

    requestAnimationFrame(() => {
      const focusable = getFocusableElements();
      focusable[0]?.focus();
    });
  } else {
    document.removeEventListener('keydown', handleFocusTrap);
  }
};

// -------------------------------------------------
//      FOCUS TRAP & KEYBOARD HANDLER
// -------------------------------------------------

const handleFocusTrap = (e) => {
  const focusable = getFocusableElements();
  const firstElement = focusable[0];
  const lastElement = focusable[focusable.length - 1];

// -------------------------------------------------
//      ESC key handle (closing)
// -------------------------------------------------

  if (e.key === 'Escape') {
    toggleMenu(true);
    burger.focus(); // add focus to open menu button

    return;
  }

// -------------------------------------------------
//      TAB key handle
// -------------------------------------------------

  if (e.key === 'Tab') {
    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }
};

// -------------------------------------------------
//      PROXIMITY DETECTION for BURGER/X
// -------------------------------------------------

const initProximitySignal = () => {
  if (!burger) return;

  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    return;
  }

  let ticking = false;

  window.addEventListener('mousemove', (e) => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const rect = burger.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);

        if (burger.getAttribute('aria-expanded') === 'true' && distance < 200) {
          burger.classList.add('is-nearby');
        } else {
          burger.classList.remove('is-nearby');
        }
        ticking = false;
      });
      ticking = true;
    }
  });
};

// -------------------------------------------------
//      SCROLL LOCK
// -------------------------------------------------

// const toggleScrollLock = (isLocked) => {
//   const body = document.body;

//   if (isLocked) {
//     const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
//     body.style.paddingRight = `${scrollBarWidth}px`;
//     body.classList.add('scroll-locked');
//   } else {
//     body.style.paddingRight = '';
//     body.classList.remove('scroll-locked');
//   }
// };

// -------------------------------------------------
//     trying to compensate scrollbar
// -------------------------------------------------

const toggleScrollLock = (isLocked) => {
  const body = document.body;
  const html = document.documentElement;

  if (isLocked) {
    const scrollBarWidth = window.innerWidth - html.clientWidth;

    // --- disable header transitions ---
    if (header) {
      header.style.transition = 'none';
    }

    // --- lock scroll ---
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';

    // --- only compensate if scrollbar exists ---
    if (scrollBarWidth > 0) {
      body.style.paddingRight = `${scrollBarWidth}px`;

      if (header) {
        header.style.paddingRight = `${scrollBarWidth}px`;
      }
    }

    // --- force reflow ---
    if (header) {
      void header.offsetHeight;
    }

    // --- restore header transitions ---
    if (header) {
      header.style.transition = '';
    }

    body.classList.add('scroll-locked');
  } else {

    // --- disable header transitions on unlock ---
    if (header) {
      header.style.transition = 'none';
    }

    // --- unlock scroll ---
    html.style.overflow = '';
    body.style.overflow = '';
    body.style.paddingRight = '';

    if (header) {
      header.style.paddingRight = '';
    }

    // --- force reflow on unlock ---
    if (header) {
      void header.offsetHeight;
    }

    // --- restore header transitions ---
    if (header) {
      header.style.transition = '';
    }

    body.classList.remove('scroll-locked');
  }
};

// -------------------------------------------------
//      FISHER-YATES helper
// -------------------------------------------------

function fisherYatesShuffle(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

// -------------------------------------------------
//      SOUNDWAVE icon ANIMATION (TODO: add rAF)
// -------------------------------------------------

const animateSoundwave = () => {
  const bars = document.querySelectorAll('.wave-bar');
  const barsArray = Array.from(bars);
  if (!barsArray.length) {
    return;
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const shuffled = fisherYatesShuffle(barsArray);
  const selected = [];
  const minDistance = 2;
  const maxBars = 4;

  for (const candidate of shuffled) {
    if (selected.length >= maxBars) break;
    const candIdx = barsArray.indexOf(candidate);
    const tooClose = selected.some(s => Math.abs(barsArray.indexOf(s) - candIdx) < minDistance);
    if (!tooClose) selected.push(candidate);
  }

  selected.forEach((bar, index) => {
    const staggerDelay = (index * 0.15 + Math.random() * 0.2).toFixed(2) + 's';
    const duration = (Math.random() * 1 + 1.5).toFixed(2) + 's';
    const randomOpacity = (Math.random() * 0.6 + 0.1).toFixed(2);

    bar.style.setProperty('--target-opacity', randomOpacity);
    bar.style.setProperty('--delay', staggerDelay);
    bar.style.setProperty('--duration', duration);

    setTimeout(() => {
      bar.classList.add('is-animating');
    }, 10);
  });
};

// =================================================
//     HANDLERS
// =================================================

const handleBurgerClick = () => toggleMenu();

const handleLinkClick = (e) => {
  toggleMenu(true);
};

// -------------------------------------------------
//      SUBMIT HANDLING (mock/dummy)
// -------------------------------------------------

const handleFormSubmit = (e) => {
  e.preventDefault();

  const submitBtn = contactForm.querySelector('.contact__submit');

  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;

  setTimeout(() => {
    submitBtn.textContent = 'Sent!';
    contactForm.reset();

    setTimeout(() => {
      submitBtn.textContent = 'Send';
      submitBtn.disabled = false;
    }, 2000);
  }, 1500);
};

// =================================================
//      INIT
// =================================================

const init = () => {
  if (burger) {
    burger.addEventListener('click', handleBurgerClick);
  }

  if (menuOverlay) {
    menuOverlay.addEventListener('click', () => toggleMenu(true));
  }

  if (menuLinks) {
    menuLinks.forEach(link => link.addEventListener('click', handleLinkClick));
  }

  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }

  initProximitySignal();
  animateSoundwave();

  window.addEventListener('scroll', handleScroll);
};

document.addEventListener('DOMContentLoaded', init);
