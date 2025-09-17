const form = document.getElementById('form');
const input = document.getElementById('input');
const subBtn = document.getElementById('sub-btn');
const weatherInfo = document.querySelector('.weather-info');
const cityName = document.getElementById('city-name');
const temp = document.getElementById('temp');
const description = document.getElementById('description');
const errorMessage = document.getElementById('error-message');
const loader = document.getElementById('spin-loading');

const API_KEY = '8ebba781858ce4326330af280b20cf90';

form.addEventListener('submit', function(e){
    e.preventDefault();

    let cityInput = input.value.trim();
    if(cityInput === '') return;
    console.log(cityInput);

        loader.style.display = 'flex';


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${API_KEY}&units=metric`)
    .then((response) => {
       return response.json();
    })
    .then((data) => {

        // handling wrong cityName error
        if(data.cod != 200){
            console.log('inside if block', data)
            console.log(data.response)
            input.value = '';
            loader.style.display = 'none';
            errorMessage.style.display = 'block';
            weatherInfo.style.display = 'none'
            errorMessage.innerHTML = `${data.message}`;
            return;
        }

        // success case
        loader.style.display = 'none';
        errorMessage.style.display = 'none';
        weatherInfo.style.display = 'flex';
        cityName.innerHTML = `${data.name}`;
        temp.innerHTML = `${Math.round(data.main.temp)}°C`;
        description.innerHTML = `${data.weather[0].description}`;
    })
    .catch((error) => {
        //Catches Network error like no internet
        console.log('Network erorr', error)
        weatherInfo.style.display = 'none';
        errorMessage.style.display = 'block';
        errorMessage.innerHTML = `something went wrong`
    })

});
