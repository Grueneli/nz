let stop_lat = -43.53;
let stop_lng = 170.15;
let zoom = 13; // mit 13 wird angegeben wie weit reingezoomt werden soll => Faktor 13
let title= 'Der Fox Gletscher'

const STOPS = ["Wanaka","Der Fox Gletscher", "Franz-Josef Gletscher"];  //Konstante definiert, groß geschrieben, da man sie nicht mehr überschreiben kann
console.log (STOPS);
console.log (STOPS [0]);
console.log (STOPS [1]);
console.log (STOPS [2]);
console.log (STOPS.length);

let map = L.map('map').setView([stop_lat, stop_lng], zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);

L.marker([stop_lat, stop_lng]).addTo(map)
 .bindPopup(title)
.openPopup();