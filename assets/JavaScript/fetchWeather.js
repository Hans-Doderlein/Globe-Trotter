function getWeather(cityName) {
  // URL of weather API

  const requestURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=767865139c275c7f96c76ff9ca1752e9&units=imperial`;

  // fetch request for weather api

  fetch(requestURL)
    .then((data) => data.json())
    .then((response) => {
      displayWeather(response);
    })
    .catch(() => {
      let weatherDiv = document.getElementById("weatherInfo");

      weatherDiv.innerHTML = "";

      let weatherInfo = document.createElement("h5");

      weatherInfo.classList.add("cityInfo");

      weatherInfo.textContent = "No weather info for this city!";

      weatherDiv.appendChild(weatherInfo);
    });
}
