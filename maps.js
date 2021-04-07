//pulls the info from the resources.json file
fetch("./resources.json")
.then(response => {
  return response.json();
})
.then(data => console.log(data));

//This will include all the raw code for the Google Maps API
let map;

//Create the intial map to view the Greater Los Angeles Area
function initMap() {
  const LA = { lat: 34.0361, lng: -118.2437 }
  const map = new google.maps.Map(document.getElementById("map"), {
    center: LA,
     zoom: 10,
  });
  new google.map.Marker({
    postion: LA,
    map,
    title:"help",
  });
}
