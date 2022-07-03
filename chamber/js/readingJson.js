const requestURL = "https://herreraaxelbyu.github.io/wdd230/chamber/js/data.json";
const div_grid = document.querySelector('.companies__grid');
const div_list = document.querySelector('.close');
const gridbutton = document.querySelector('.btn__grid');
const listbutton = document.querySelector('.btn__list');


const creating_companies_grid = (empresas) => {
    const wrapper_info = document.createElement('div');
    wrapper_info.classList.add('company__div')

    const company_logo = document.createElement('img');
    const adress = document.createElement('p');
    const cell_number = document.createElement('p');
    const web_site = document.createElement('a');

    company_logo.setAttribute("src", empresas.logo);
    company_logo.setAttribute("alt", "Company who works with Buenos Aires Chamber of Commerce");
    web_site.setAttribute("href", empresas.web);
    web_site.setAttribute("target", "_blank");

    adress.textContent = empresas.address;
    cell_number.textContent = empresas.number;
    web_site.innerHTML = empresas.web; 

    wrapper_info.appendChild(company_logo);
    wrapper_info.appendChild(adress);
    wrapper_info.appendChild(cell_number);
    wrapper_info.appendChild(web_site);
    div_grid.appendChild(wrapper_info);

    return wrapper_info
}

const creating_companies_list = (empresas) => {

  const wrapper_info_list = document.createElement('div');
  wrapper_info_list.classList.add('companies_list')

  const company_name = document.createElement('h3');
  const adress = document.createElement('p');
  const cell_number = document.createElement('p');
  const web_site = document.createElement('a');

  web_site.setAttribute("href", empresas.web)
  web_site.setAttribute("target", "_blank")

  company_name.textContent = empresas.name
  adress.textContent = empresas.address;
  cell_number.textContent = empresas.number;
  web_site.innerHTML = empresas.web; 

  wrapper_info_list.appendChild(company_name);
  wrapper_info_list.appendChild(adress);
  wrapper_info_list.appendChild(cell_number);
  wrapper_info_list.appendChild(web_site);

  div_list.appendChild(wrapper_info_list);

}

const creating_companies_list_larger = (empresas) => {

  const wrapper_info_list = document.createElement('div');
  wrapper_info_list.classList.add('companies_list')

  const company_name = document.createElement('h3');
  const adress = document.createElement('p');
  const cell_number = document.createElement('p');
  const web_site = document.createElement('a');

  web_site.setAttribute("href", empresas.web)
  web_site.setAttribute("target", "_blank")

  company_name.textContent = empresas.name
  adress.textContent = empresas.address;
  cell_number.textContent = empresas.number;
  web_site.innerHTML = empresas.web; 

  wrapper_info_list.appendChild(company_name);
  wrapper_info_list.appendChild(adress);
  wrapper_info_list.appendChild(cell_number);
  wrapper_info_list.appendChild(web_site);

  div_list.appendChild(wrapper_info_list);

} 

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing

    const companies = jsonObject['companies']
    companies.forEach(creating_companies_grid)
    companies.forEach(creating_companies_list);
  });

gridbutton.addEventListener("click", () => {
  
  if(screen.width >= 1024) {
    div_grid.classList.replace('close', 'companies__grid');
    div_list.classList.replace('companies__grid2', 'close');
  } else {
    div_grid.classList.replace('close', 'companies__grid');
    div_list.classList.replace('companies__grid', 'close');
  }

  
})

listbutton.addEventListener("click", () => {

  if(screen.width >= 1024) {
    div_grid.classList.replace('companies__grid', 'close');
    div_list.classList.replace('close', 'companies__grid2')
  } else {
    div_grid.classList.replace('companies__grid', 'close');
    div_list.classList.replace('close', 'companies__grid');
  }
})