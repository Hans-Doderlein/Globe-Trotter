document.addEventListener("DOMContentLoaded", function() {
    var cityOptionsContainer = document.getElementById("cityOptionsContainer");
    var searchHistory = [];
    var recentSearches = [];
  
    cityOptionsContainer.addEventListener("click", handlesearch);
  
    function handlesearch(event) {
      var cityName = event.target.innerText;
      searchHistory.push(cityName);
      localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
      updateRecentSearches();
    }
  
    function updateRecentSearches() {
      var searchHistory = localStorage.getItem("searchHistory");
      if (searchHistory) {
        recentSearches = JSON.parse(searchHistory).slice(-6);
        renderRecentSearches();
      }
    }
  
    function renderRecentSearches() {
      var recentSearchesContainer = document.getElementById("pastSearchesContainer");
      recentSearchesContainer.innerHTML = "";
  
      recentSearches.forEach(function(search) {
        
        var cityName = search.split(",")[0].trim();
  
        var button = document.createElement("button");
        button.className = "waves-effect waves-light btn";
        button.textContent = cityName;
        button.addEventListener("click", function() {
          fetchDataForCity(cityName);
        });
  
        recentSearchesContainer.appendChild(button);
      });
    }
  
    function fetchDataForCity(city) {
      // Implement your logic to fetch data for the selected city
      console.log("Fetching data for city:", city);
      // ...
    }
  
    
    updateRecentSearches();
  });