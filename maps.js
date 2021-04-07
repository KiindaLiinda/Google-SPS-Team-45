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
  const uluru = { lat: 34.0361, lng: -118.2437 }
  map = new google.maps.Map(document.getElementById("map"), {
 Mapdisplay
    center: { lat: 34.0361, lng: -118.2437 }, zoom: 10,
  });
  const marker = new google.maps.marker({
    position: uluru,
    map: map,
  });
}
=======
    center: { lat: 34.0522, lng: 118.2437 },
    zoom: 8,
  });
}

//Dictionary containing all of the locations
var locations[
  //Homeless Shelters
  {
    position: new google.maps.LatLng(34.096254028668056, -118.31193411838731),
    type: 'Shelter',
    name: "PATH - Hollywood",
    address: "5627 Fernwood Ave, Los Angeles, CA 90028",
    phone: "(323)960-333",
  }
]
 main
