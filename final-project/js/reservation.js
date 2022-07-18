const url = "https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json";
const countries = document.querySelector('#country');

fetch(url)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
 
    const countries = jsonObject['countries'];
    //console.log(countries);

    countries.forEach(country => {
        //console.log(country.name_en)
        create_country(country)
    });


});


const create_country = (json) => {
    const paises = document.createElement('option');
    paises.innerHTML = json.name_en;
    paises.setAttribute('value', json.code);

    countries.appendChild(paises);
}