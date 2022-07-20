const widget = document.querySelector('.weather');
const lat = 38.983285138932125;
const lot = -77.09554253083883;

const getapi2 = async (lon, lat) => {
    const appKey = '0ee4f6cf1bc5830b3c91d26d07461764';
    const url = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${appKey}`)

    info = await url.json();

    let {current:  current } = info;
    let {daily: daily} = info;
    const lunes = daily[0];
    const todoslosdias = [daily[0],daily[1],daily[2]] 

    console.log(info)
    /*
    todoslosdias.forEach(dia => {
        console.log(dia.weather[0].description);
        console.log(kelvinToCelcius(dia.temp.max));
        console.log(dia.humidity);
    */

    showWeather(todoslosdias);

   
}

getapi2(lot, lat);

const showWeather = (info) => {

    //const todos = [info[0],info[1],info[2]]
    
    info.forEach(datos => {
        const card = document.createElement('div');
        const widget_container = document.createElement('div');
        const temperatura_max = document.createElement('h4');
        const temperatura_min = document.createElement('h6')
        const description_p = document.createElement('p');
        const humidity = document.createElement('p');
        const image = document.createElement('picture');
        const info_desc = datos.weather[0].main;
        
        temperatura_max.textContent = `Max Temp: ${kelvinToCelcius(datos.temp.max)}°`;
        temperatura_min.textContent = `Min Temp: ${kelvinToCelcius(datos.temp.min)}°`;
        description_p.textContent = datos.weather[0].description;
        humidity.textContent = `Humidity: ${datos.humidity}%`;

        card.classList.add('weather_card');
        widget_container.classList.add('widget_containerr');

        icons(info_desc, image);
        
        widget_container.appendChild(image);
        widget_container.appendChild(description_p);
        card.appendChild(widget_container)
        card.appendChild(temperatura_max);
        card.appendChild(temperatura_min);
        card.appendChild(humidity);
        widget.appendChild(card)
    });
    


    
    
}

const kelvinToCelcius = (temp) => parseInt(temp - 273.15)
const windChillCelsius = (temperature, windSpeed) => {

    chill = 13.12 + 0.6215 * temperature -11.37 * windSpeed ** 0.16 + 0.3965 * temperature * windSpeed ** 0.16;

    return chill.toFixed(1);
}

const icons = (weather, div) => {
    const icon = document.createElement('img');
    icon.setAttribute('alt', 'weather widget');
    icon.classList.add('widget')
    let animatedIcon = '';
    
    switch (weather) {
        case 'Clouds':
            animatedIcon = 'animated/cloudy-day-1.svg';
            icon.src = animatedIcon;
            div.appendChild(icon);
        break;

        case 'Clear':
            animatedIcon = 'animated/day.svg';
            icon.src = animatedIcon;
            div.appendChild(icon);
        break

        case 'Drizzle':
            animatedIcon = 'animated/rainy-4.svg';
            icon.src = animatedIcon;
            div.appendChild(icon);
        break

        case 'Rain':
            animatedIcon = 'animated/rainy-5.svg';
            icon.src = animatedIcon;
            div.appendChild(icon);
        break

        case 'Thunderstorm':
            animatedIcon = 'animated/thunder.svg';
            icon.src = animatedIcon;
            div.appendChild(icon);
        break

        case 'Snow':
            animatedIcon = 'animated/snowy-5.svg';
            icon.src = animatedIcon;
            div.appendChild(icon);
        break
        case 'Mist':
            animatedIcon = 'animated/cloudy.svg';
            icon.src = animatedIcon;
            div.appendChild(icon);
    }

}



