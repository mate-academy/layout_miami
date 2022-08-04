const form = document.getElementById('send-form');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.reset();
});

const check = document.getElementById('menu');

menu.addEventListener('change', e => {

    if(e.target.checked){
      document.body.classList.add('page__body--with-menu');
    } else {
      document.body.classList.remove('page__body--with-menu');
    }

});

window.addEventListener('scroll',(event) => {
  document.getElementById("menu").checked = false;
  document.body.classList.remove('page__body--with-menu');
});
