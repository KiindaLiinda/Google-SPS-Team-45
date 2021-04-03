//This will include all the raw code for the Google Maps API
let map;

//Create the intial map to view the Greater Los Angeles Area
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.0361, lng: -118.2437 }, zoom: 10,
  });
}
