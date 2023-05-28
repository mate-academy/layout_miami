'use strict';

window.addEventListener('hashchange', ()=> {
  if(window.location.hash === "#menu") {
    document.body.classList.add('body--with-menu');
  } else {
    document.body.classList.remove('body--with-menu');
  }
})

var form=document.getElementById("formId");
function submitForm(event){
  event.preventDefault();
}
form.addEventListener('submit', submitForm);
