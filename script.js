
const navbarToogle = document.querySelector('navbar-toogle');

const navbarMenu = document.querySelector('.navbar-menu');

navbarToogle .addEventListener('click',()=>{
    navbarToogle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

