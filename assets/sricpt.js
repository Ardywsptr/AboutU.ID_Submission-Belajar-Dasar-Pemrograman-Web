// Manipulasi DOM
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navigation-bar');

//Function menampilkan burger
burger.addEventListener('click', function(){
    navbar.classList.toggle('open');
})