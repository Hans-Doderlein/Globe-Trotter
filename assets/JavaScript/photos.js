let cityPhoto = document.querySelector("#city-image");
let cityName = document.querySelector("input");
let searchIcon = document.querySelector("#icon");
let apiKeyK = "AIzaSyDOLsVI8YiO3P61dwsxdLOsVcXop1zF7l8";
let actualPlaceID = "";
let actualPhotoRef = "";

//searches for photo based on city name
function getGooglePhoto(cityName) {
  const proxyUrl = "https://cors.sh/";

  //request url
  let getPlaceId =
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" +
    cityName +
    "&inputtype=textquery&key=AIzaSyDOLsVI8YiO3P61dwsxdLOsVcXop1zF7l8";

  //fetch using url
  fetch(getPlaceId)
    .then((response) => response.json())

    //if successful, fetches using photo reference
    .then(function (data) {
      actualPlaceID = data.candidates[0].place_id;

      //updates url with photo reference
      let getPhotoRef =
        "https://maps.googleapis.com/maps/api/place/details/json?place_id=" +
        actualPlaceID +
        "&key=AIzaSyDOLsVI8YiO3P61dwsxdLOsVcXop1zF7l8";

      //fetch for photo
      fetch(getPhotoRef)
        .then((response) => response.json())
        .then(function (data) {
          actualPhotoRef = data.result.photos[0].photo_reference;

          //link for actual photo
          let googleExpl =
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
            actualPhotoRef +
            "&key=" +
            apiKeyK;

          //set image source to actual link
          cityPhoto.src = googleExpl;
        });
    })
    .catch((e) => console.log(e));
}
