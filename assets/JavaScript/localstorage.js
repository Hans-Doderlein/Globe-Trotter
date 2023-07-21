function storeCity(cityName) {
  //stores new searches in local storage array

  let cities = localStorage.getItem("cities")
    ? JSON.parse(localStorage.getItem("cities"))
    : [];

  cityName = cityName.split(",")[0];

  //checks if city is already stored locally
  if (!cities.includes(cityName)) {
    cities.push(cityName);
    localStorage.setItem("cities", JSON.stringify(cities));

    renderRecentSearches(cityName);
  }
}

//on startup, loads search buttons based on local storage
function loadPreviousCities() {
  let cities = localStorage.getItem("cities")
    ? JSON.parse(localStorage.getItem("cities"))
    : [];

  cities.forEach((i) => {
    renderRecentSearches(i);
  });
}

loadPreviousCities();

//renders search buttons and button functionality
function renderRecentSearches(city) {
  var recentSearchesContainer = document.getElementById(
    "pastSearchesContainer"
  );

  var button = document.createElement("button");
  button.className = "waves-effect waves-light btn";
  button.textContent = city;
  button.addEventListener("click", (e) => {
    e.preventDefault();
    getGooglePhoto(city);
    getWeather(city);
  });

  recentSearchesContainer.appendChild(button);
}
