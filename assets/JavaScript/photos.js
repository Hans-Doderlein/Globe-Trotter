let cityPhoto = document.querySelector('#city-image');
let cityName = document.querySelector('input');
let searchIcon = document.querySelector('#icon');
let apiKeyK = 'AIzaSyDOLsVI8YiO3P61dwsxdLOsVcXop1zF7l8';

// let cityName = 'Greensboro';
let actualPlaceID = '';
let actualPhotoRef = '';
//This will get us the place-id by inputing the city
let =
  'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' +
  cityName +
  '&inputtype=textquery&key=AIzaSyDOLsVI8YiO3P61dwsxdLOsVcXop1zF7l8';

//Passing the city place-id from the previous link will give the following
//This will give us the photo reference and height, width, photo-reference

// Function to fetch and display the city image
// Example usage
const city = 'New York City';
const zoom = 12;
const size = '800x600';

//Requirement
//Photo_refernce +
//Maxheight +
//Maxwidth +
//City +

function getGooglePhoto() {
  const proxyUrl = 'https://cors.sh/';
  let getPlaceId =
    'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' +
    cityName.value +
    '&inputtype=textquery&key=AIzaSyDOLsVI8YiO3P61dwsxdLOsVcXop1zF7l8';
  fetch(getPlaceId)
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
      actualPlaceID = data.candidates[0].place_id;

      let getPhotoRef =
        'https://maps.googleapis.com/maps/api/place/details/json?place_id=' +
        actualPlaceID +
        '&key=AIzaSyDOLsVI8YiO3P61dwsxdLOsVcXop1zF7l8';

      fetch(getPhotoRef)
        .then((response) => response.json())
        .then(function (data) {
          console.log(data);
          console.log(data.result.photos[0].photo_reference);
          actualPhotoRef = data.result.photos[0].photo_reference;
          let googleExpl =
            'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' +
            actualPhotoRef +
            '&key=' +
            apiKeyK;
          cityPhoto.src = googleExpl;
        });
    })
    .catch((e) => console.log(e));
}

searchIcon.addEventListener('click', getGooglePhoto);
