const menu_mobile = document.querySelector('#menu_mobile');
const hamburguer = document.querySelector('#hamburger-button');

const openMenu = () => {
    menu_mobile.classList.toggle('show');
    
}

hamburguer.addEventListener('click', openMenu);

const lista = document.querySelector('.dropmenu');
const mini_lista = document.querySelector('.tiny_menu');


lista.addEventListener('mouseenter', show_menu);

function show_menu() {
    mini_lista.classList.toggle('hide');
}