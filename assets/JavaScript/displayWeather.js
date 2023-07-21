//populates weather info on screen
function displayWeather(weatherObject) {
  //destructures response object
  const {
    main: { temp, humidity },
    wind: { speed },
    weather: [{ icon }],
  } = weatherObject.list[0];

  //creates array of weather information
  let weather = [
    { label: "", value: `https://openweathermap.org/img/wn/${icon}@2x.png` },
    { label: "Temp: ", value: `${temp} F` },
    { label: "Wind Speed: ", value: `${speed} mph` },
    { label: "Humidity: ", value: `${humidity} %` },
  ];

  let weatherDiv = document.getElementById("weatherInfo");

  weatherDiv.innerHTML = "";

  weather.forEach((i) => {
    //only runs for the icon information
    if (i.value.length > 10) {
      weatherDiv.appendChild(uploadIcon(i.value));
      return;
    }

    //creates h5 with info and appends it to the page
    let weatherInfo = document.createElement("h5");

    weatherInfo.textContent = `${i.label}${i.value}`;

    weatherInfo.classList.add("cityInfo");

    weatherDiv.appendChild(weatherInfo);
  });
}

//handles creating the icon img
function uploadIcon(imageSrc) {
  let iconLocation = document.createElement("img");

  iconLocation.src = imageSrc;

  iconLocation.classList.add("centerImg");

  return iconLocation;
}
