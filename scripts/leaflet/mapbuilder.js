//window.onload = function() {

var map = L.map('map');
var zoomax = 18;
var serverIP = '';

var openstreetUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var openstreet = new L.tileLayer(openstreetUrl, {maxZoom: zoomax});
map.addLayer(openstreet);
map.setView([37.826,-122.24],13);

var oakland = L.geoJson("Oakland_Neighborhoods.json").addTo(map);

//}
