const staticWeatherData = [
    { location: "Mysore", temp: 25, condition: "Sunny", windSpeed: "10 kmph" },
    { location: "London", temp: 17, condition: "Cloudy", windSpeed: "15 kmph" },
    { location: "Tokyo", temp: 22, condition: "Rainy", windSpeed: "9 kmph" },
    { location: "Paris", temp: 19, condition: "Windy", windSpeed: "12 kmph" },
    { location: "Sydney", temp: 28, condition: "Sunny", windSpeed: "20 kmph" },
    { location: "Toronto", temp: 10, condition: "Snowy", windSpeed: "5 kmph" },
    { location: "New York", temp: 21, condition: "Cloudy", windSpeed: "11 kmph" },
    { location: "Los Angeles", temp: 30, condition: "Sunny", windSpeed: "8 kmph" },
    { location: "Mumbai", temp: 33, condition: "Humid", windSpeed: "14 kmph" },
    { location: "Dubai", temp: 38, condition: "Hot", windSpeed: "18 kmph" },
    { location: "Cape Town", temp: 23, condition: "Windy", windSpeed: "20 kmph" },
    { location: "Moscow", temp: 5, condition: "Snowy", windSpeed: "7 kmph" },
    { location: "Singapore", temp: 31, condition: "Rainy", windSpeed: "10 kmph" },
    { location: "Beijing", temp: 18, condition: "Rainy", windSpeed: "12 kmph" },
    { location: "Berlin", temp: 16, condition: "Cloudy", windSpeed: "13 kmph" },
    { location: "Rome", temp: 26, condition: "Sunny", windSpeed: "9 kmph" },
    { location: "Madrid", temp: 29, condition: "Sunny", windSpeed: "10 kmph" }
];


const cityInput = document.getElementById('cityname');
const searchBtn = document.getElementById('searchbtn');
const refreshBtn = document.querySelector('.refresh-btn');
const locationEl = document.querySelector('.location');
const tempEl = document.querySelector('.temperature');
const conditionEl = document.querySelector('.condition');
const windEl = document.querySelector('.windspeed');
const weatherCard = document.querySelector('.weather-card');
const weatherImg = document.querySelector('.weather-info img');


const datalist = document.getElementById('cityList');
staticWeatherData.forEach(item => {
    const option = document.createElement('option');
    option.value = item.location;
    datalist.appendChild(option);
});


function updateCardColor(condition) {
    const colors = {
        Sunny: "linear-gradient(to bottom right, #FFD54F, #FFB300)",
        Cloudy: "linear-gradient(to bottom right, #B0BEC5, #78909C)",
        Rainy: "linear-gradient(to bottom right, #4FC3F7, #0288D1)",
        Windy: "linear-gradient(to bottom right, #A5D6A7, #66BB6A)",
        Snowy: "linear-gradient(to bottom right, #E0F7FA, #B2EBF2)",
        Hot: "linear-gradient(to bottom right, #FF7043, #E64A19)",
        Humid: "linear-gradient(to bottom right, #81D4FA, #4FC3F7)",
        Unknown: "linear-gradient(to bottom right, #ECEFF1, #CFD8DC)"
    };
    weatherCard.style.background = colors[condition] || colors.Unknown;
}

function updateWeatherImage(condition) {
    const icons = {
        Sunny: "assets/sunny.png",
        Cloudy: "assets/cloudy.png",
        Rainy: "assets/rainy.png",
        Snowy: "assets/snowy.png",
        Unknown: "assets/photo.png"
    };
    weatherImg.src = icons[condition] || icons.Unknown;
}


function findWeather(city) {
    return staticWeatherData.find(item =>
        item.location.toLowerCase() === city.toLowerCase()
    ) || { location: "Not Found", temp: "-", condition: "Unknown", windSpeed: "-" };
}


function displayWeather(data) {
    locationEl.textContent = data.location;
    tempEl.textContent = `${data.temp}°C`;
    conditionEl.textContent = data.condition;
    windEl.textContent = data.windSpeed;
    updateCardColor(data.condition);
    updateWeatherImage(data.condition);
}


searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    const weather = findWeather(city);
    displayWeather(weather);
});


refreshBtn.addEventListener('click', () => {
    cityInput.value = "";
    displayWeather(staticWeatherData[0]);
});


displayWeather(staticWeatherData[0]);