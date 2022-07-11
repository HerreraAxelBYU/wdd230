const menu_mobile = document.querySelector('#menu_mobile');
const hamburguer = document.querySelector('#hamburger-button');

const openMenu = () => {
    menu_mobile.classList.toggle('show');
    
}

hamburguer.addEventListener('click', openMenu);

