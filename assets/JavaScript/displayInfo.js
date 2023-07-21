//populates city info on page
function loadCityData(object) {
  const cityData = document.getElementById("cityData");
  cityData.innerHTML = "";

  //destructures incoming object
  const {
    city: {
      name,
      coord: { lat, lon },
      population,
    },
  } = object;

  //runs the the photo and storage functions
  getGooglePhoto(name);
  storeCity(name);

  //creates array of useful info
  [
    { label: "Latitude", value: lat },
    { label: "Longitude", value: lon },
    { label: "Population", value: population },
    { label: "Name", value: name },
  ].forEach((info) => {
    //if info is the city name, creates and appends separately
    if (info.label == "Name") {
      var cityInfo = document.createElement("h2");

      const cityData = document.getElementById("retrievedName");
      cityData.innerHTML = "";
      cityInfo.textContent = `${info.value}`;

      cityInfo.classList.add("cityInfo");

      cityData.appendChild(cityInfo);

      return;
    }

    //if not city name, creates and appends to info box
    var cityInfo = document.createElement("h5");

    cityInfo.textContent = `${info.label}: ${info.value}`;

    cityInfo.classList.add("cityInfo");

    cityData.appendChild(cityInfo);
  });
}
