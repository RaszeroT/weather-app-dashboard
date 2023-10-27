const apiKey = "6e8b9dafb1358a52c4de35c964fea7c9";
const units = 'imperial'

// find city
var currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=houston&appid=${apiKey}`;
// fetch current weather data
fetch(currentWeatherUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // set variables for current weather data
    var curTemp = data.main.temp;
    var curWind = data.wind.speed;
    var curHumid = data.main.humidity;
    // var curCity = 
    console.log("temp: " + curTemp + "F");
    console.log("wind: " + curWind + "MPH");
    console.log("humidity: " + curHumid + "%");

    // attach to container
    var currentDayCard = `
<h2 id="city">Missouri</h2>
            <img src="" alt="weather icon" class="weather-icon">
            <p id="temp">Temp:${curTemp}</p>
            <p id="wind">Wind:${curWind}mph</p>
            <p id="humidity">Humidity:${curHumid}</p>`;

    $('#current-forecast-container').append(currentDayCard)
  });