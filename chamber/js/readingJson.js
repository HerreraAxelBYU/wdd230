const requestURL = "https://herreraaxelbyu.github.io/wdd230/chamber/js/data.json";
const div_grid = document.querySelector('.companies__grid')

const creating_companies_grid = (empresas) => {
    const wrapper_info = document.createElement('div');
    wrapper_info.classList.add('company__div')

    const company_logo = document.createElement('img');
    const adress = document.createElement('p');
    const cell_number = document.createElement('p');
    const web_site = document.createElement('p');


    adress.textContent = empresas.address;
    cell_number.textContent = empresas.number;
    web_site.innerHTML = empresas.web; 

    wrapper_info.appendChild(adress);
    wrapper_info.appendChild(cell_number);
    wrapper_info.appendChild(web_site);
    div_grid.appendChild(wrapper_info);

}

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing

    const companies = jsonObject['companies']
    companies.forEach(creating_companies_grid)
    companies.forEach(company => {
        console.log(company)
    });
  });