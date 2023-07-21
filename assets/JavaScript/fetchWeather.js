function getWeather(cityName) {
  // URL of weather API
  const requestURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=767865139c275c7f96c76ff9ca1752e9&units=imperial`;

  //loading message during search
  document.getElementById(
    "retrievedName"
  ).innerHTML = `Searching data for ${cityName}`;

  // fetch request for weather api
  fetch(requestURL)
    .then((data) => data.json())
    .then((response) => {
      //if successful, runs these functions
      clearInputs();
      displayWeather(response);
      loadCityData(response);
    })
    .catch(() => {
      //if fails, clears all inputs and reports city not found
      clearInputs();
    });
}
