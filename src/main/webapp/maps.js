//pulls the info from the resources.json file
fetch("./resources.json")
    .then(response => {
        return response.json();
    })
    .then(data => console.log(data));

//This will include all the raw code for the Google Maps API
let map;


//Create the intial map to view the Greater Los Angeles Area
function initMap()
{

    var map = new google.maps.Map(document.getElementById("map"),
        {
            center : {lat: 34.0361, lng: -118.2437},
            zoom: 9,
        });


    var resources = {
        "resources":
            [
                {"Place": "Bridge to Home", "Address": "23031 Drayton St. Santa Clarita, CA 91350", "Phone Number": "", "Type": "Shelter", "Shelter Type": "Adult", "Website": "btohome.org", "lat": 34.411758, "lng": -118.538132},
                {"Place": "Hathaway-Sycamores", "Address": "2933 N. El Nido Drive, Altadena, CA 91001", "Phone Number": "", "Type": "Shelter", "Shelter Type": "Youth", "Website": "hathaway-sycamores.org", "lat": 34.196209, "lng": -118.165970},
                {"Place": "SRO Housing Corporation", "Address": "517 San Julian St., Los Angeles, CA 90013", "Phone Number": "213-229-9640", "Type": "Shelter", "Shelter Type": "Adult", "Website": "srohousing.org", "lat": 34.044109, "lng": -118.245331},
                {"Place": "Covenant House California", "Address": "1325 N. Western Ave., Los Angeles, CA 90027", "Phone Number": "323-461-3131", "Type": "Shelter", "Shelter Type": "Youth", "Website": "covenanthousecalifornias.org", "lat": 34.095520, "lng": -118.309640},
                {"Place": "Youth Emerging Stronger", "Address": "1754 Taft Ave., Los Angeles, CA 90028", "Phone Number":"323-467-8466", "Type": "Shelter", "Shelter Type": "Youth", "Website": "youthemergingstronger.org", "lat": 34.103280, "lng": -118.314450},
                {"Place": "HomeBase Youth Services - Shelter for Youth", "Address": "931 E Devonshire Ave, Phoenix, AZ 85014", "Type": "Shelter", "Shelter Type": "Youth", "lat": 34.103280, "lng": -118.314450},
                {"Place": "Family Promise of Greater Phoenix", "Address": "7447 E Earil Dr, Scottsdale, AZ 85251", "Type": "Shelter", "Shelter Type": "Family", "lat": 33.483998, "lng": -111.92079},
                {"Place": "Paz De Cristo", "Address": "424 W Broadway Rd, Mesa, AZ 85210", "Type": "Food", "Shelter Type": "N/A", "lat": 33.407894, "lng": -111.841287},
                {"Place": "Primavera Foundation - Men's Center", "Address": "200 E Benson Hwy, Tuscon, AZ 85713", "Type": "Shelter", "Shelter Type": "Men's", "lat": 32.186388, "lng": -110.966941},
                {"Place": "Brian Garcia Welcome Center", "Address": "206 S 12th Ave, Phoenix, AZ 85007", "Type": "Shelter", "Shelter Type": "Adult", "lat": 33.4458758, "lng": -112.0881999},
                {"Place": "Vista Colina Emergency Family Shelter", "Address": "1050 W Mountain View Rd, Phoenix, AZ 85021", "Phone Number": "602-944-0960", "Type": "Shelter", "Shelter Type": "Family", "Website": "https://www.azhousinginc.org/vista-colina.html", "lat": 33.575024, "lng": -112.086503},
                {"Place": "Dale County Rescue Mission", "Address":"182 Martin St, Ozark, AL 36360", "Type" : "Shelter", "Shelter Type": "Men's", "lat": 31.4554154, "lng": -85.6381106},
                {"Place": "Jimmie Hale Mission Center", "Address": "3420 2nd Avenue North, Birmingham, AL 35222", "Type":  "Shelter", "Shelter Type": "Men's", "lat": 33.5249899, "lng": -86.7862995},
                {"Place": "Faith Crusade Montgomery Rescue Mission", "Address": "17 Mildred Street, Montgomery, AL 36104", "Type": "Food", "Shelter Type": "N/A", "lat": 32.3709894, "lng": -86.3091682},
                {"Place": "Family Promise of Coastal Alabama Mobile", "Address": "1260 Dauphin Street, Mobile, AL 36604", "Type": "Shelter", "Shelter Type": "Family", "lat": 30.687518, "lng": -88.065158},
                {"Place": "Downtown Rescue Mission", "Address": "1400 Evangel Drive, Huntsville, AL 35816", "Type": "Shelter", "Shelter Type": "Family", "lat": 34.738576, "lng": -86.641309},
                {"Place": "Stockholm Family Shelter", "Address": "99 Stockholm St #103 Brooklyn, NY 11221", "Type": "Shelter", "Shelter Type": "Family", "lat": 40.6976117, "lng": -73.9250127},
                {"Place": "Broadway House Women’s Shelter", "Address": "1245 Broadway Avenue Brooklyn, NY 11221", "Type": "Shelter", "Shelter Type": "Women", "lat": 40.6915932, "lng": -73.925138},
                {"Place": "Providence House", "Address": "703 Lexington Avenue Brooklyn, NY 11221", "Type": "Shelter", "Shelter Type": "Women", "lat": 40.6899662, "lng": -73.9327203},
                {"Place": "Barbara Kleiman Shelter", "Address": "300 Skillman Ave Brooklyn, NY 11211", "Type": "Shelter", "Shelter Type": "Women", "lat": 40.7167635, "lng": -73.9384131},
                {"Place": "Ready Willing and Able", "Address": "520 Gates Avenue Brooklyn, NY 11216", "Type": "Shelter", "Shelter Type": "Men's", "lat": 40.6867655, "lng": -73.9451011},
                {"Place": "Atlantic House Men's Shelter", "Address": "2402 Atlantic Avenue Brooklyn, NY 11233", "Type": "Shelter", "Shelter Type": "Men's", "lat": 40.6766861, "lng": -73.9192397},
                {"Place": "Auburn Family Residence Fort Greene", "Address": "39 Auburn Place Brooklyn, NY 11205", "Type": "Shelter", "Shelter Type": "Family", "lat": 40.6945228, "lng": -73.9767989},

            ]
    };

    for(var i = 0; i < resources.resources.length; i++)
    {
        var lat = resources.resources[i].lat;
        var lng = resources.resources[i].lng;
        var place = resources.resources[i].Place;

        var marker = new google.maps.Marker({
            map: map,
            position: {
                lat: lat,
                lng: lng
            },
            title: place

        });

    }

}



function addMarkers(map)
{

    var resources = {
        "resources":
            [
                {"Place": "Bridge to Home", "Address": "23031 Drayton St. Santa Clarita, CA 91350", "Phone Number": "", "Type": "Shelter", "Shelter Type": "Adult", "Website": "btohome.org", "lat": 34.411758, "lng": -118.538132},
                {"Place": "Hathaway-Sycamores", "Address": "2933 N. El Nido Drive, Altadena, CA 91001", "Phone Number": "", "Type": "Shelter", "Shelter Type": "Youth", "Website": "hathaway-sycamores.org", "lat": 34.196209, "lng": -118.165970},
                {"Place": "SRO Housing Corporation", "Address": "517 San Julian St., Los Angeles, CA 90013", "Phone Number": "213-229-9640", "Type": "Shelter", "Shelter Type": "Adult", "Website": "srohousing.org", "lat": 34.044109, "lng": -118.245331},
                {"Place": "Covenant House California", "Address": "1325 N. Western Ave., Los Angeles, CA 90027", "Phone Number": "323-461-3131", "Type": "Shelter", "Shelter Type": "Youth", "Website": "covenanthousecalifornias.org", "lat": 34.095520, "lng": -118.309640},
                {"Place": "Youth Emerging Stronger", "Address": "1754 Taft Ave., Los Angeles, CA 90028", "Phone Number":"323-467-8466", "Type": "Shelter", "Shelter Type": "Youth", "Website": "youthemergingstronger.org", "lat": 34.103280, "lng": -118.314450},
                {"Place": "HomeBase Youth Services - Shelter for Youth", "Address": "931 E Devonshire Ave, Phoenix, AZ 85014", "Type": "Shelter", "Shelter Type": "Youth", "lat": 34.103280, "lng": -118.314450},
                {"Place": "Family Promise of Greater Phoenix", "Address": "7447 E Earil Dr, Scottsdale, AZ 85251", "Type": "Shelter", "Shelter Type": "Family", "lat": 33.483998, "lng": -111.92079},
                {"Place": "Paz De Cristo", "Address": "424 W Broadway Rd, Mesa, AZ 85210", "Type": "Food", "Shelter Type": "N/A", "lat": 33.407894, "lng": -111.841287},
                {"Place": "Primavera Foundation - Men's Center", "Address": "200 E Benson Hwy, Tuscon, AZ 85713", "Type": "Shelter", "Shelter Type": "Men's", "lat": 32.186388, "lng": -110.966941},
                {"Place": "Brian Garcia Welcome Center", "Address": "206 S 12th Ave, Phoenix, AZ 85007", "Type": "Shelter", "Shelter Type": "Adult", "lat": 33.4458758, "lng": -112.0881999},
                {"Place": "Vista Colina Emergency Family Shelter", "Address": "1050 W Mountain View Rd, Phoenix, AZ 85021", "Phone Number": "602-944-0960", "Type": "Shelter", "Shelter Type": "Family", "Website": "https://www.azhousinginc.org/vista-colina.html", "lat": 33.575024, "lng": -112.086503},
                {"Place": "Dale County Rescue Mission", "Address":"182 Martin St, Ozark, AL 36360", "Type" : "Shelter", "Shelter Type": "Men's", "lat": 31.4554154, "lng": -85.6381106},
                {"Place": "Jimmie Hale Mission Center", "Address": "3420 2nd Avenue North, Birmingham, AL 35222", "Type":  "Shelter", "Shelter Type": "Men's", "lat": 33.5249899, "lng": -86.7862995},
                {"Place": "Faith Crusade Montgomery Rescue Mission", "Address": "17 Mildred Street, Montgomery, AL 36104", "Type": "Food", "Shelter Type": "N/A", "lat": 32.3709894, "lng": -86.3091682},
                {"Place": "Family Promise of Coastal Alabama Mobile", "Address": "1260 Dauphin Street, Mobile, AL 36604", "Type": "Shelter", "Shelter Type": "Family", "lat": 30.687518, "lng": -88.065158},
                {"Place": "Downtown Rescue Mission", "Address": "1400 Evangel Drive, Huntsville, AL 35816", "Type": "Shelter", "Shelter Type": "Family", "lat": 34.738576, "lng": -86.641309},
                {"Place": "Stockholm Family Shelter", "Address": "99 Stockholm St #103 Brooklyn, NY 11221", "Type": "Shelter", "Shelter Type": "Family", "lat": 40.6976117, "lng": -73.9250127},
                {"Place": "Broadway House Women’s Shelter", "Address": "1245 Broadway Avenue Brooklyn, NY 11221", "Type": "Shelter", "Shelter Type": "Women", "lat": 40.6915932, "lng": -73.925138},
                {"Place": "Providence House", "Address": "703 Lexington Avenue Brooklyn, NY 11221", "Type": "Shelter", "Shelter Type": "Women", "lat": 40.6899662, "lng": -73.9327203},
                {"Place": "Barbara Kleiman Shelter", "Address": "300 Skillman Ave Brooklyn, NY 11211", "Type": "Shelter", "Shelter Type": "Women", "lat": 40.7167635, "lng": -73.9384131},
                {"Place": "Ready Willing and Able", "Address": "520 Gates Avenue Brooklyn, NY 11216", "Type": "Shelter", "Shelter Type": "Men's", "lat": 40.6867655, "lng": -73.9451011},
                {"Place": "Atlantic House Men's Shelter", "Address": "2402 Atlantic Avenue Brooklyn, NY 11233", "Type": "Shelter", "Shelter Type": "Men's", "lat": 40.6766861, "lng": -73.9192397},
                {"Place": "Auburn Family Residence Fort Greene", "Address": "39 Auburn Place Brooklyn, NY 11205", "Type": "Shelter", "Shelter Type": "Family", "lat": 40.6945228, "lng": -73.9767989},

            ]
    };

    for(var i = 0; i < resources.resources.length; i++)
    {
        var lat = resources.resources[i].lat;
        var lng = resources.resources[i].lng;
        var place = resources.resources[i].Place;

        var marker = new google.maps.Marker({
            map: map,
            position: {
                lat: lat,
                lng: lng
            },
            title: place

        });

    }
}


function setCenterLA()
{
    var map = new google.maps.Map(document.getElementById("map"),
        {
            center : {lat: 34.0361, lng: -118.2437},
            zoom: 9,
        });

    addMarkers(map);
}

function setCenterAL()
{

    var map = new google.maps.Map(document.getElementById("map"),
        {
            center : {lat: 32.3669656, lng: -86.3006485},
            zoom: 7,
        });

    addMarkers(map);
}

function setCenterAZ()
{

    var map = new google.maps.Map(document.getElementById("map"),
        {
            center : {lat: 33.4484367, lng: -112.0741417},
            zoom: 9,
        });

    addMarkers(map);
}

function setCenterNY()
{
    var map = new google.maps.Map(document.getElementById("map"),
        {
            center : {lat: 40.7127281, lng: -74.0060152},
            zoom: 10,
        });

    addMarkers(map);

}



//initMap();