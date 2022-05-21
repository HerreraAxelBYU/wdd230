const hamburger = document.querySelector('#hamburger-button');
const nav = document.querySelector('#primaryNav');
const container_date = document.querySelector('.header__date');
const today = new Date(document.lastModified);
const current_date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	today);
const date = document.querySelector('.last__modification');
const fecha = new Date();
const day = fecha.getDay();


function toggleMenu(){
    document.querySelector('#primaryNav').classList.toggle('open');
    document.querySelector('#hamburger-button').classList.toggle('open');
    console.log('Soy el mejor');
}

function showBanner() {
    if (day === 1 || day === 2) {
        banner.textContent = "Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
    }
    else {
        None
    }
}

showBanner();

hamburger.onclick = toggleMenu;
container_date.innerHTML = `<p>${current_date}</p>`;


date.textContent =`Last modification: ${document.lastModified}`;
