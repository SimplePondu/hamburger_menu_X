function myFunction(x) {
    x.classList.toggle("change");
  }

const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');


menuIcon.addEventListener('click', function () {
        navbar.classList.toggle('change');
    });