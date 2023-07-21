document
  .getElementById("cityName")
  .addEventListener("keyup", handleCitySearch());

//base URL for fetch
var baseAPI = "https://geodb-free-service.wirefreethought.com/v1/geo/places";

//searches using value of city input
function handleCitySearch() {
  let debounce;

  return function (e) {
    e.preventDefault();

    clearTimeout(debounce);

    const citySearch = document.getElementById("cityName").value;

    //if more than 2 letters in search input, fetch for city data
    if (citySearch.length) {
      debounce = setTimeout(() => {
        getWeather(citySearch);
      }, 800);
    }

    //hide options if search input is empty
    else {
      clearInputs();
    }
  };
}

//clears all text fields
function clearInputs() {
  document.getElementById("cityName").value = "";

  document.getElementById("retrievedName").innerHTML = "City not found";

  document.getElementById("cityData").innerHTML = "";

  document.getElementById("weatherInfo").innerHTML = "";
}
