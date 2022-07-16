const temples_url = "https://herreraaxelbyu.github.io/wdd230/final-project/JSON/temples.json";
const principal = document.querySelector('.principal');
const services_ul = document.querySelector('.services_ul');
const closure_2022 = document.querySelector('.temple_closure_2022');
const closure_2023 = document.querySelector('.temple_closure_2023');
const history_ul = document.querySelector('.history');
const section1 = document.querySelector('#first_section');
const section2 = document.querySelector('#second_section');
const section3 = document.querySelector('#third_section');
const section4 = document.querySelector('#fourth_section');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');


fetch(temples_url)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
 
    const temples = jsonObject['temples'];
    console.log(temples);

    italy_temple(temples);
    drapper_temple(temples);

    button2.addEventListener('onclick', () => {

        section1.classList.add('close');
        section2.classList.add('close');
        section3.classList.remove('close');
        section4.classList.remove('close')
    })
    
    bs_temple(temples);
    rio_janeiro_temple(temples);
});

// ITALY TEMPLE FUNCTION
const italy_temple = (json) => {
    const ita_temple = json[3];

    // ITALY TEMPLE VARIABLES
    ita_adress = ita_temple.adress;
    ita_history = ita_temple.history;
    ita_name = ita_temple.name;
    ita_ordinance = ita_temple.ordinance;
    ita_service = ita_temple.services;
    ita_telephone = ita_temple.telephone;
    ita_closure_2022 = ita_temple.temple_closure_2022;
    ita_closure_2023 = ita_temple.temple_closure_2023;


    // CREATING ELEMENTS
    const adress = document.createElement('p');
    const name = document.createElement('p');
    const telephone = document.createElement('p');

    // ADDING THE INFORMATION
    adress.textContent = `Adress: ${ita_adress}`;
    name.textContent = ita_name;
    telephone.textContent = `Telephone: ${ita_telephone}`;

    // INFO APPENDING
    principal.appendChild(adress);
    principal.appendChild(telephone);
    
    // LOOP TO BRING EVERY SERVICE
    ita_service.forEach(servicio => {
        const li = document.createElement('li');
        li.textContent = servicio;
        services_ul.appendChild(li)
      });

    // LOOP TO BRING EVERY TEMPLE CLOSURE

    ita_closure_2022.forEach(temple_closure22 => {
        const li = document.createElement('li');
        li.textContent = temple_closure22;
        closure_2022.appendChild(li)
      });

      ita_closure_2023.forEach(templo_closure23 => {
        const li = document.createElement('li');
        li.textContent = templo_closure23;
        closure_2023.appendChild(li)
      });

      // LOOP TO BRING THE HISTORY
      ita_history.forEach(templo_history => {
        const li = document.createElement('li');
        li.textContent = templo_history;
        history_ul.appendChild(li)
      });
}




// >>>>>>>>>>>>>>>>> DRAPPER TEMPLE FUNCTION <<<<<<<<<<<<<<<<<<<<<

const principal_2 = document.querySelector('.principal_2');
const services_ul_2 = document.querySelector('.services_ul_2');
const closure_2022_2 = document.querySelector('.temple_closure_2022_2');
const closure_2023_2 = document.querySelector('.temple_closure_2023_2');
const history_ul_2 = document.querySelector('.history_2');



const drapper_temple = (json) => {
    const dra_temple = json[2];

    // DRAPPER TEMPLE VARIABLES
    dra_adress = dra_temple.adress;
    dra_history = dra_temple.history;
    dra_name = dra_temple.name;
    dra_ordinance = dra_temple.ordinance;
    dra_service = dra_temple.services;
    dra_telephone = dra_temple.telephone;
    dra_closure_2022 = dra_temple.temple_closure_2022;
    dra_closure_2023 = dra_temple.temple_closure_2023;


    // CREATING ELEMENTS
    const adress = document.createElement('p');
    const name = document.createElement('p');
    const telephone = document.createElement('p');

    // ADDING THE INFORMATION
    adress.textContent = `Adress: ${dra_adress}`;
    name.textContent = ita_name;
    telephone.textContent = `Telephone: ${dra_telephone}`;

    // INFO APPENDING
    principal_2.appendChild(adress);
    principal_2.appendChild(telephone);
    
    // LOOP TO BRING EVERY SERVICE
    dra_service.forEach(servicio => {
        const li = document.createElement('li');
        li.textContent = servicio;
        services_ul_2.appendChild(li)
      });

    // LOOP TO BRING EVERY TEMPLE CLOSURES
    dra_closure_2022.forEach(temple_closure22 => {
        const li = document.createElement('li');
        li.textContent = temple_closure22;
        closure_2022_2.appendChild(li)
      });

      dra_closure_2023.forEach(templo_closure23 => {
        const li = document.createElement('li');
        li.textContent = templo_closure23;
        closure_2023_2.appendChild(li)
      });

      // LOOP TO BRING THE HISTORY
      dra_history.forEach(templo_history => {
        const li = document.createElement('li');
        li.textContent = templo_history;
        history_ul_2.appendChild(li)
      });
}

// >>>>>>>>>>>>>>> BUENOS AIRES TEMPLE FUNCTION <<<<<<<<<<<<<<<<<<<<

const principal_3 = document.querySelector('.principal_3');
const services_ul_3 = document.querySelector('.services_ul_3');
const closure_2022_3 = document.querySelector('.temple_closure_2022_3');
const closure_2023_3 = document.querySelector('.temple_closure_2023_3');
const history_ul_3 = document.querySelector('.history_3');


const bs_temple = (json) => {
    const buenos_aires_temple = json[0];

    // Buenos Aires Temple Variables
    bs_adress = buenos_aires_temple.adress;
    bs_history = buenos_aires_temple.history;
    bs_name = buenos_aires_temple.name;
    bs_ordinance = buenos_aires_temple.ordinance;
    bs_service = buenos_aires_temple.services;
    bs_telephone = buenos_aires_temple.telephone;
    bs_closure_2022 = buenos_aires_temple.temple_closure_2022;
    bs_closure_2023 = buenos_aires_temple.temple_closure_2023;
    bs_image = buenos_aires_temple.day_medium_image;
    bs_image_small = buenos_aires_temple.day_small_image;


    // CREATING ELEMENTS
    const adress = document.createElement('p');
    const name = document.createElement('p');
    const telephone = document.createElement('p');

    // ADDING THE INFORMATION
    adress.textContent = `Adress: ${bs_adress}`;
    name.textContent = bs_name;
    telephone.textContent = `Telephone: ${bs_telephone}`;

    // INFO APPENDING
    principal_3.appendChild(adress);
    principal_3.appendChild(telephone);
    
    // LOOP TO BRING EVERY SERVICE
    bs_service.forEach(servicio => {
        const li = document.createElement('li');
        li.textContent = servicio;
        services_ul_2.appendChild(li)
      });

    // LOOP TO BRING EVERY TEMPLE CLOSURES
    bs_closure_2022.forEach(temple_closure22 => {
        const li = document.createElement('li');
        li.textContent = temple_closure22;
        closure_2022_3.appendChild(li)
      });

    bs_closure_2023.forEach(templo_closure23 => {
        const li = document.createElement('li');
        li.textContent = templo_closure23;
        closure_2023_3.appendChild(li)
      });

      // LOOP TO BRING THE HISTORY
    bs_history.forEach(templo_history => {
        const li = document.createElement('li');
        li.textContent = templo_history;
        history_ul_3.appendChild(li)
      });
}

// >>>>>>>>>>>>>>> RIO DE JANEIRO TEMPLE FUNCTION <<<<<<<<<<<<<<<<<<<<

const principal_4 = document.querySelector('.principal_4');
const services_ul_4 = document.querySelector('.services_ul_4');
const closure_2022_4 = document.querySelector('.temple_closure_2022_4');
const closure_2023_4 = document.querySelector('.temple_closure_2023_4');
const history_ul_4 = document.querySelector('.history_4');


const rio_janeiro_temple = (json) => {
    const rio_temple = json[1];

    // Buenos Aires Temple Variables
    rio_adress = rio_temple.adress;
    rio_history = rio_temple.history;
    rio_name = rio_temple.name;
    rio_ordinance = rio_temple.ordinance;
    rio_service = rio_temple.services;
    rio_telephone = rio_temple.telephone;
    rio_closure_2022 = rio_temple.temple_closure_2022;
    rio_closure_2023 = rio_temple.temple_closure_2023;
    rio_image = rio_temple.day_medium_image;
    rio_image_small = rio_temple.day_small_image;


    // CREATING ELEMENTS
    const adress = document.createElement('p');
    const name = document.createElement('p');
    const telephone = document.createElement('p');
    const li = document.createElement('li');

    // ADDING THE INFORMATION
    adress.textContent = `Adress: ${bs_adress}`;
    name.textContent = bs_name;
    telephone.textContent = `Telephone: ${bs_telephone}`;
    li.textContent = "There's no one temple closure!"

    // INFO APPENDING
    principal_4.appendChild(adress);
    principal_4.appendChild(telephone);
    closure_2022_4.appendChild(li)
    closure_2023_4.appendChild(li)
    

      // LOOP TO BRING THE HISTORY
    rio_history.forEach(templo_history => {
        const li = document.createElement('li');
        li.textContent = templo_history;
        history_ul_4.appendChild(li)
      });
}

