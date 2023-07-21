document
  .getElementById("cityName")
  .addEventListener("keyup", handleCitySearch());

//base URL for fetch
var baseAPI = "http://geodb-free-service.wirefreethought.com/v1/geo/places";

//searches using value of city input
function handleCitySearch() {
  let debounce;

  return function (e) {
    e.preventDefault();

    clearTimeout(debounce);

    const citySearch = document.getElementById("cityName").value;

    //if more than 2 letters in search input, fetch for city data
    if (citySearch.length > 2) {
      debounce = setTimeout(() => {
        handleApiRequest(citySearch);
      }, 500);
    }

    //hide options if search input is empty
    else if (!citySearch.length) {
      document.getElementById("cityOptionsContainer").style.visibility =
        "hidden";
      clearInputs();
    }
  };
}

//initial search done with city name
function handleApiRequest(cityName) {
  fetchCityData(`?namePrefix=${cityName}&limit=5&sort=-population`).then(
    (response) => {
      handleCityData(response);
    }
  );
}

//fetch given specific paramaters
function fetchCityData(params) {
  return fetch(`${baseAPI}${params}`)
    .then((data) => data.json())
    .catch((e) => console.log(e));
}

//load options from initial fetch
function handleCityData(cityData) {
  document.getElementById("cityOptionsContainer").style.visibility = "visible";

  const cityOptions = document.getElementById("cityOptions");

  cityOptions.innerHTML = "";

  cityData.data.forEach((city) => {
    const { name, country, region, id } = city;

    const searchOptionLabel = `${name}, ${region}, ${country}`;

    cityOptions.appendChild(createSearchOption(searchOptionLabel, id));
  });
}

//dynamically creates search match options
function createSearchOption(cityName, cityID) {
  const tableRow = document.createElement("tr");

  const tableData = document.createElement("td");

  tableData.textContent = cityName;

  tableData.classList.add("apiCityOption");

  tableData.addEventListener("click", () => {
    getCityDataById(cityID);
    storeCity(cityName, cityID);
    getGooglePhoto(cityName.split(",", 1));
    getWeather(cityName.split(",", 1));
  });

  tableRow.appendChild(tableData);

  return tableRow;
}

//fetches using place id
function getCityDataById(id) {
  clearInputs();

  fetchCityData(`/${id}`).then((response) => {
    handleCityInfo(response);
  });

  //fetches and loads local time using place id
  fetchCityData(`/${id}/time`).then((cityTime) => {
    document.getElementById("cityTime").textContent = cityTime.data.substring(
      0,
      8
    );
  });
}

//loads info from fetch with specific palce id
function handleCityInfo(specificCity) {
  document.getElementById("cityData").innerHTML = "";

  const {
    latitude: lat,
    longitude: lon,
    population: pop,
    city,
  } = specificCity.data;

  document.getElementById("retrievedName").textContent = city;

  [
    { label: "Latitude", value: lat },
    { label: "Longitude", value: lon },
    { label: "Population", value: pop },
  ].forEach((info) => {
    var cityInfo = document.createElement("h5");

    const cityData = document.getElementById("cityData");

    cityInfo.textContent = `${info.label}: ${info.value}`;

    cityInfo.classList.add("cityInfo");

    cityData.appendChild(cityInfo);
  });
}

//clears all text fields
function clearInputs() {
  document.getElementById("cityOptions").innerHTML = "";

  document.getElementById("cityName").value = "";

  document.getElementById("cityOptionsContainer").style.visibility = "hidden";
}
