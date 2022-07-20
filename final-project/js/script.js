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


const fecha = new Date();
const today = new Date(document.lastModified);
const current_date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	today);
const date = document.querySelector('.last__modification');
date.textContent =`Last modification: ${document.lastModified}`;