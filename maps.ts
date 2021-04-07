//This is the Goggle Maps API code for typescript
let map: google.maps.Map;

//Set Initial Map to the Greater Los Angeles Area
function initMap(): void {
  const map = new google.maps.Map(
    middle = { lat: 34.0361, lng: -118.2437 }
    document.getElementById("map") as HTMLElement, {
    center: { lat: 34.0361, lng: -118.2437 },
    zoom: 10,
  });
  new google.maps.Marker({
    position: middle,
    map,
    title: "Los Angeles!"
  })
}