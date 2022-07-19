const lista = document.querySelector('.dropmenu');
const mini_lista = document.querySelector('.tiny_menu');


lista.addEventListener('mouseenter', show_menu);

function show_menu() {
    mini_lista.classList.toggle('hide');
}
