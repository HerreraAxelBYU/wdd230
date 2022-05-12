const hamburger = document.querySelector('#hamburger-button');
const nav = document.querySelector('#primaryNav');
const container_date = document.querySelector('.header__date');
const today = new Date();
const current_date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	today);

function toggleMenu(){
    document.querySelector('#primaryNav').classList.toggle('open');
    document.querySelector('#hamburger-button').classList.toggle('open');
    console.log('Soy el mejor');
}

hamburger.onclick = toggleMenu;
container_date.innerHTML = `<p>${current_date}</p>`;

