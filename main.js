const menuButton = document.querySelector('.icon--menu');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', function(){
	menu.classList.toggle('active');
})