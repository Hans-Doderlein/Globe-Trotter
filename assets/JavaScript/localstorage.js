function storeCity(cityName, searchID) {
  //stores new searches in local storage array

  let cities = localStorage.getItem("cities")
    ? JSON.parse(localStorage.getItem("cities"))
    : {};

  cityName = cityName.split(",", 1);

  if (!(cityName in cities)) {
    cities[cityName] = searchID;
    localStorage.setItem("cities", JSON.stringify(cities));

    renderRecentSearches(cityName, searchID);
  }
}

function loadPreviousCities() {
  //on startup, loads search buttons based on local storage
  let cities = localStorage.getItem("cities")
    ? JSON.parse(localStorage.getItem("cities"))
    : {};

  Object.entries(cities).forEach((entry) => {
    const [city, id] = entry;

    renderRecentSearches(city, id);
  });
}

loadPreviousCities();

//renders search buttons and button functionality
function renderRecentSearches(city, id) {
  var recentSearchesContainer = document.getElementById(
    "pastSearchesContainer"
  );

  // recentSearchesContainer.innerHTML = "";

  var button = document.createElement("button");
  button.className = "waves-effect waves-light btn";
  button.textContent = city;
  button.addEventListener("click", (e) => {
    e.preventDefault();
    getCityDataById(id);
    getGooglePhoto(city);
  });

  recentSearchesContainer.appendChild(button);
}
