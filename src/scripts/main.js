const menu = document.querySelector('.menu');
const openButton = document.querySelector('a[href="#menu"]');
const closeButton = document.querySelector('a[href="#header"]');

openButton.addEventListener('click', (event) => {
  event.preventDefault();

 menu.classList.add('menu--open');

 console.log('MENU:', menu);
 console.log('KLASY:', menu.className);

 document.body.classList.add('menu-open');
});

closeButton.addEventListener('click', (event) => {
  event.preventDefault();

  menu.classList.remove('menu--open');
  document.body.classList.remove('menu-open');
});
