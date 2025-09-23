window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.classList.add('body--with-menu');
    document.body.style.paddingRight = scrollBarWidth + 'px';
  } else {
    document.body.classList.remove('body--with-menu');
    document.body.style.paddingRight = '0';
  }
});



const form = document.querySelector(".section__form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = form.formName.value;
  const email = form.formEmail.value;
  const message = form.querySelector(".form__message").value;

  console.log("Form submitted!", { name, email, message });

  alert("Form submitted without reloading!");
});
