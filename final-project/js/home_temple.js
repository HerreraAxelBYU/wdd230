const temples_url = "https://herreraaxelbyu.github.io/wdd230/final-project/JSON/temples.json";
const home_temple = document.querySelector('.bs_temple');
const home_section = document.querySelector('.home_section');


fetch(temples_url)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   
    const temples = jsonObject['temples']

    // Buenos Aires Temple Variables
    buenos_aires_temple = temples[0];
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


    const h2 = document.createElement('h2');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const h3 = document.createElement('h3')
    
    const service_list = document.createElement('ul');

    h2.textContent = bs_name;
    p1.textContent = bs_adress;
    p2.textContent = bs_telephone;
    h3.textContent = "Services:"

    bs_service.forEach(servicio => {
      const li = document.createElement('li');
      li.textContent = servicio;
      service_list.appendChild(li)
    });

    home_section.appendChild(h2);
    home_temple.setAttribute("src", bs_image);
    home_section.appendChild(p1);
    home_section.appendChild(p2);
    home_section.appendChild(h3);
    home_section.appendChild(service_list);
    

    

    

    
    
  
    if (screen.width <= 1024) {
      home_temple.setAttribute("src", bs_image_small)
    }

    console.log(temples)

   
  });



