const temples_url = "https://herreraaxelbyu.github.io/wdd230/final-project/JSON/temples.json";
const home_temple = document.querySelector('.bs_temple');


fetch(temples_url)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    //console.log(jsonObject)
    const temples = jsonObject['temples']

    // Buenos Aires Temple Variables
    buenos_aires_temple = temples[0]
    bs_adress = buenos_aires_temple.adress
    bs_history = buenos_aires_temple.history
    bs_name = buenos_aires_temple.name
    bs_ordinance = buenos_aires_temple.ordinance
    bs_service = buenos_aires_temple.services
    bs_telephone = buenos_aires_temple.telephone
    bs_closure_2022 = buenos_aires_temple.temple_closure_2022
    bs_closure_2023 = buenos_aires_temple.temple_closure_2023
    bs_image = buenos_aires_temple.day_medium_image

    home_temple.setAttribute("src", bs_image)

    // Rio de Janeiro Temple Variables
    rioDeJaineiro = temples[1]
    bs_adress = buenos_aires_temple.adress
    bs_history = buenos_aires_temple.history
    bs_name = buenos_aires_temple.name
    bs_ordinance = buenos_aires_temple.ordinance
    bs_service = buenos_aires_temple.services
    bs_telephone = buenos_aires_temple.telephone
    bs_closure_2022 = buenos_aires_temple.temple_closure_2022
    bs_closure_2023 = buenos_aires_temple.temple_closure_2023

    temples.forEach(templo => {
      console.log(templo)
      console.log(templo.day_medium_image)





    });

    console.log(temples)

   
  });



