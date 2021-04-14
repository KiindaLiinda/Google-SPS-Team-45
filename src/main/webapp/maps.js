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

    var map = new google.maps.Map(document.getElementById("map"),
        {
            center : {lat: 34.0361, lng: -118.2437},
            zoom: 9,
        });

    var bridgeToHome = {lat: 34.411760, lng: -118.538130}
    var hathaway = {lat: 34.196210, lng: -118.165970};
    var SRO = {lat: 34.044110, lng: -118.245330};

    var BTHmarker = new google.maps.Marker({
        position: bridgeToHome,
        map: map,
        title: 'Bridge to Home Shelter'

    });

    var Hathaway_marker = new google.maps.Marker({
        position: hathaway,
        map: map,
        title: 'Hathaway-Sycamores'

    });

    var SRO_marker = new google.maps.Marker({
        position: SRO,
        map: map,
        title: 'SRO Housing Corporation'

    });

}
