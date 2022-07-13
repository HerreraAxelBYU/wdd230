const temperature = document.querySelector('#temperature');
const weather_like = document.querySelector('#description');
const wind = document.querySelector('#wind');
const wind_chill = document.querySelector('#wind_chill');
const image = document.querySelector('.weather__widget');

const getAPI = async (ciudad, pais) => {
    const appKey = '0ee4f6cf1bc5830b3c91d26d07461764';
    const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appKey}`);

    info = await url.json();

    showWeather(info);
    
}


const showWeather = (info) => {

    let { main: {temp, feels_like}} = info;
    let { weather: {0: type_weather}} = info;
    let { wind: speed} = info;

    const temperature_celsius = kelvinToCelcius(temp);
    const description = type_weather
    const wind_speed = speed.speed

    temperature.innerHTML = `${temperature_celsius} &#8451`
    weather_like.innerHTML = description.description;
    weather_like.style.textAlign = 'center';
    wind.innerHTML = `Wind Speed ${wind_speed} Km/h`;

    icons(description.main, image);
    
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

getAPI('Buenos aires', 'AR');

