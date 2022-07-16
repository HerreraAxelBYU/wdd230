const temples_url = "https://herreraaxelbyu.github.io/wdd230/final-project/JSON/temples.json";
const principal = document.querySelector('.principal');
const services_ul = document.querySelector('.services_ul');
const closure_2022 = document.querySelector('.temple_closure_2022');
const closure_2023 = document.querySelector('.temple_closure_2023');
const history_ul = document.querySelector('.history');



fetch(temples_url)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
 
    const temples = jsonObject['temples'];
    console.log(temples);



    italy_temple(temples);
    drapper_temple(temples);
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



const principal_2 = document.querySelector('.principal_2');
const services_ul_2 = document.querySelector('.services_ul_2');
const closure_2022_2 = document.querySelector('.temple_closure_2022_2');
const closure_2023_2 = document.querySelector('.temple_closure_2023_2');
const history_ul_2 = document.querySelector('.history_2');


// DRAPPER TEMPLE FUNCTION
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