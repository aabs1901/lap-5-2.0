
let metroAreaCenterCoordinates = [37.0902, -95.7129]
let zoomLevel = 4



///map
let map = L.map('bridge-map').setView(metroAreaCenterCoordinates, zoomLevel)

///Bridges

let Br = [
    {'Name': 'Verrazano-Narroes Bridge', 'Span': '1298.4 meters', 'coordinates': [40.6066, -74.0447]},
    {'Name': 'Golden Gate Bridge', 'Span': '1280.2 meters', 'coordinates':[37.8199, -122.4783]},
    {'Name': 'Mackinac Bridge ', 'Span': '1158.0 meters', 'coordinates':[45.8174, -84.7278]},
    {'Name': 'George Washington Bridge', 'Span': '1067.0 meters', 'coordinates':[40.8517, -73.9527]},
    {'Name': 'Tacoma Narrows Brdige', 'Span': '853.44', 'coordinates':[47.2690, -122.5517]},
];
let icon =L.icon({
    iconUrl: 'Mark Twain.png',
    iconSize:[50,50],
    iconAnchor: [25,25]
})
Br.forEach(function(element){
console.log(element.coordinates)
console.log(element.name)
console.log(element.span)

L.marker(element.coordinates, {icon:icon}).bindPopup(`${element.Name}, ${element.Span}`).addTo(map)

});
    



/// Circle
let Bridges = L.circle( metroAreaCenterCoordinates, {
    color: 'Blue',
    radius: 2508050,
    fillOpacity: 0.2
})
.bindPopup("Bridges Area")
.addTo(map)
    



///layers

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
id: 'mapbox.streets',
accessToken: 'pk.eyJ1IjoiYWFiczE5MDEiLCJhIjoiY2s2bGhzc3J3MGI0djNkcGZrZHZnZXNjciJ9.LKZ34rhCH3tLI5eFhBdKrw'
}).addTo(map)


