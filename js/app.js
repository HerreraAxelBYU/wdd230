const hamburger = document.querySelector('#hamburger-button');
const nav = document.querySelector('#primaryNav');
const container_date = document.querySelector('.header__date');
const today = new Date(document.lastModified);
const current_date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	today);
const date = document.querySelector('.last__modification');


function toggleMenu(){
    document.querySelector('#primaryNav').classList.toggle('open');
    document.querySelector('#hamburger-button').classList.toggle('open');
    console.log('Soy el mejor');
}

hamburger.onclick = toggleMenu;
container_date.innerHTML = `<p>${current_date}</p>`;


date.textContent =`Last modification: ${document.lastModified}`;
