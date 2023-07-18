//original code

// function handlesearch(event) {
//   var cityName = event.target.innerText;
//   searchHistory.push(cityName);
//   localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
//   updateRecentSearches();
// }

// function updateRecentSearches() {
//   var searchHistory = localStorage.getItem("searchHistory");
//   if (searchHistory) {
//     recentSearches = JSON.parse(searchHistory).slice(-6);
//     renderRecentSearches();
//   }
// }

function storeCity(cityName) {
  //stores new searches in local storage array
  console.log(cityName);
  let cities = localStorage.getItem("cities")
    ? JSON.parse(localStorage.getItem("cities"))
    : [];

  if (!cities.includes(cityName)) {
    cities.push(cityName);
    localStorage.setItem("cities", JSON.stringify(cities));
    renderRecentSearches(cities);
  }

  console.log(cities);
}

function loadPreviousCities() {
  //on startup, loads search buttons based on local storage
  let cities = localStorage.getItem("cities")
    ? JSON.parse(localStorage.getItem("cities"))
    : [];

  renderRecentSearches(cities);
}

loadPreviousCities();

//lorna rendering function
function renderRecentSearches(cities) {
  var recentSearchesContainer = document.getElementById(
    "pastSearchesContainer"
  );

  recentSearchesContainer.innerHTML = "";

  cities.forEach((i) => {
    var button = document.createElement("button");
    button.className = "waves-effect waves-light btn";
    button.textContent = i;
    button.addEventListener("click", function () {
      fetchDataForCity(i);
    });

    recentSearchesContainer.appendChild(button);
  });
}

function fetchDataForCity(city) {
  // Implement your logic to fetch data for the selected city
  console.log("Fetching data for city:", city);
  // ...
}
