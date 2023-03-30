let stop_lat = -43.53;
let stop_lng = 170.15;
let zoom = 13; // mit 13 wird angegeben wie weit reingezoomt werden soll => Faktor 13
let title= 'Der Fox Gletscher'

const STOPS = ["Wanaka",{
    title:"Der Fox Gletscher",
     user: "grueneli", 
     lat: -43.53, 
     lng: 170.15, 
     Wikipedia: "https://de.wikipedia.org/wiki/Fox-Gletscher" //solang bei dem Objekt Namen nur strings vorhanden sind, braucht man keine ""
}, "Franz-Josef Gletscher"];  //Konstante definiert, groß geschrieben, da man sie nicht mehr überschreiben kann
console.log (STOPS);

let map = L.map('map').setView([stop_lat, stop_lng], zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);

L.marker([stop_lat, stop_lng]).addTo(map)
 .bindPopup(title)
.openPopup();

//lat, lng, Wikipedia