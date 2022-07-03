const hamburger = document.querySelector('#hamburger-button');
const nav = document.querySelector('#primaryNav');
const container_date = document.querySelector('.header__date');
const fecha = new Date();
const today = new Date(document.lastModified);
const current_date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	today);
const date = document.querySelector('.last__modification');
const day = fecha.getDay();
const banner = document.querySelector('#banner');


function toggleMenu(){
    document.querySelector('#primaryNav').classList.toggle('open');
    document.querySelector('#hamburger-button').classList.toggle('open');
}

function showBanner(banner) {
    if (day === 1 || day === 2) {
        banner.textContent = "Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
    }
    else {
        // Do nothing
    }
}

showBanner(banner);

hamburger.onclick = toggleMenu;

const showing_date = document.createElement('p');
showing_date.innerHTML = `${current_date} `

const showing_visits = document.createElement('p');
const last_visited = document.createElement('p');

container_date.appendChild(showing_date);
container_date.appendChild(showing_visits);


date.textContent =`Last modification: ${document.lastModified}`;

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	showing_visits.textContent = `  Number of Visits: ${numVisits}`;
} else {
	showing_visits.textContent = `  This is your first visit!`;
}
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);




