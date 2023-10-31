const apiKey = "6e8b9dafb1358a52c4de35c964fea7c9";
const units = "imperial";

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
    var currTemp = data.main.temp;
    var currWind = data.wind.speed;
    var currHumid = data.main.humidity;
    var currImg = data.weather[0].icon;
    // var currDate = data
    var cityName = data.name;
    var iconUrl = "http://openweathermap.org/img/w/" + currImg + ".png";

    // check
    console.log("temp: " + currTemp + "F");
    console.log("wind: " + currWind + "MPH");
    console.log("humidity: " + currHumid + "%");
    console.log(currImage);
    console.log(cityName);

    // attach to container
    var currentDayCard = `
<h2 id="city">${cityName}</h2>
            <img src="" alt="weather icon" class="weather-icon">
            <p id="temp">Temp:${currTemp}F</p>
            <p id="wind">Wind:${currWind}MPH</p>
            <p id="humidity">Humidity:${currHumid}%</p>
            `;

    $("#current-weather-container").append(currentDayCard);
  });

//   fetch 5 day data

var fiveDayUrl = `https://api.openweathermap.org/data/2.5/forecast?q=houston&appid=${apiKey}`;

// fetch 5 day forecast
fetch(fiveDayUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    // variables for forecast data
    var forecastTemp = data.list[0].main.temp;
    var forecastWind = data.list[0].wind.speed;
    var forecastHumid = data.list[0].main.humidity;
    var forecastImg = data.list[0].weather[0].icon;
    var forecastDate = data.list[0].dt_txt;

    // check
    console.log("temp: " + forecastTemp + "F");
    console.log("wind " + forecastWind + "MPH");
    console.log("humidity " + forecastHumid + "%");
    console.log(forecastImg);
    console.log(forecastDate);

    // attach to container
    var forecastCard = `
<h3 id="day5">Day of week:</h3>
            <p id="date5">date: ${forecastDate}</p>
            <img src="" alt="weather icon" class="weather-icon5">
            <p id="temp5">temp: ${forecastTemp}F</p>
            <p id="wind5">wind: ${forecastWind}MPH</p>
            <p id="humidity5">humidity: ${forecastHumid}%</p>
`;
    $("#current-weather-container").append(forecastCard);
  });
