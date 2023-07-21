function displayWeather(weatherObject) {
  const {
    weather: [{ main: dayWeather }],
  } = weatherObject.list[0];

  const {
    main: { temp, humidity },
    wind: { speed },
    weather: [{ icon }],
  } = weatherObject.list[0];

  let weather = [
    { label: "", value: `https://openweathermap.org/img/wn/${icon}@2x.png` },
    { label: "Temp: ", value: `${temp} F` },
    { label: "Wind Speed: ", value: `${speed} mph` },
    { label: "Humidity: ", value: `${humidity} %` },
  ];

  let weatherDiv = document.getElementById("weatherInfo");

  weatherDiv.innerHTML = "";

  weather.forEach((i) => {
    if (i.value.length > 10) {
      weatherDiv.appendChild(uploadIcon(i.value));
      return;
    }
    let weatherInfo = document.createElement("h5");

    weatherInfo.textContent = `${i.label}${i.value}`;

    weatherInfo.classList.add("cityInfo");

    weatherDiv.appendChild(weatherInfo);
  });
}

function uploadIcon(imageSrc) {
  let iconLocation = document.createElement("img");

  iconLocation.src = imageSrc;

  iconLocation.classList.add("centerImg");

  return iconLocation;
}
