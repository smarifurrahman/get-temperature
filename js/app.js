// do not show api keys on your js file.
const API_KEY = `ccfae7d46d5c0919f86523253884799d`;

const loadTemperature = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    displayTemperature(data);
}

const displayTemperature = data => {
    const weatherData = document.getElementById('weather-data');
    weatherData.innerHTML = `
    <h1>${data.name ? data.name : data.message} (${data.name ? data.sys.country : '---'})</h1>
    <h3><span>${data.main ? data.main.temp : '----'}</span>&deg;C</h3>
    <h6><span>Feels like: ${data.main ? data.main.feels_like : '----'}</span>&deg;C</h6>
    <h1 class="lead">${data.weather ? data.weather[0].main : ''}</h1>
    `;
}

const emptyData = () => {
    const weatherData = document.getElementById('weather-data');
    weatherData.innerHTML = '';
}

const processData = (cityName) => {
    emptyData();
    loadTemperature(cityName);
}

const callByValueFromInput = () => {
    const inputField = document.getElementById('input-city-name');
    const inputCityName = inputField.value;
    inputField.value = '';
    processData(inputCityName);
}

document.getElementById('btn-search').addEventListener('click', function () {
    callByValueFromInput();
});

document.getElementById('input-city-name').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        callByValueFromInput();
    }
});

processData('chittagong');