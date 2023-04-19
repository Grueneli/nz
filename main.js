let stop_lat = -43.53;
let stop_lng = 170.15;
let zoom = 8; // mit 13 wird angegeben wie weit reingezoomt werden soll => Faktor 13
let title= 'Der Fox Gletscher'

const STOPS = [
    {
        title: "Christchurch",
        user: "manohog",
        lat: -43.531111,
        lng: 172.636667,
        wikipedia: "https://de.wikipedia.org/wiki/Christchurch"
    },
    { 
        title: "Lake Tekapo",
        user: "chris0810",
        lat: -43.883333,
        lng: 170.516667,
        wikipedia:"https://de.wikipedia.org/wiki/Lake_Tekapo"
    },   
    {
        title: "Moeraki Boulders",
        user: "Mirjamkirschner",
        lat: -45.345275,
        lng: 170.826061,
        wikipedia: "https://en.wikipedia.org/wiki/Moeraki_Boulders"
    },
    {
        title: "Milford Sound", 
        user: "julianple",
        lat: -44.616667,
        lng: 167.866667,
        wikipedia: "https://de.wikipedia.org/wiki/Milford_Sound/Piopiotahi"
    }, 
        {
        title: "Wanaka", 
        user: "sebastianv99",
        lat: -44.71,
        lng: 169.16,
        wikipedia: "https://de.wikipedia.org/wiki/Wanaka",
    },
    {
        title:"Der Fox Gletscher",
         user: "grueneli", 
         lat: -43.53, 
         lng: 170.15, 
         wikipedia: "https://de.wikipedia.org/wiki/Fox-Gletscher"}, 
      
    {
        title: "Der Franz-Joseph Gletscher",
        user: "ttfg22",
        lat: -43.5,
        lng: 170.22,
        wikipedia: "https://de.wikipedia.org/wiki/Franz-Josef-Gletscher"
    },
    {title: "Abel Tasman Nationalpark",
        user: "fabianwild",
        lat: -40.833333,
        lng: 172.9,
        wikipedia: "https://de.wikipedia.org/wiki/Abel-Tasman-Nationalpark"
     },
     {
    title: "Picton", 
        user: "LauraMap",
        lat: -41.293056,
        lng: 174.001944,
        wikipedia: "https://en.wikipedia.org/wiki/Picton,_New_Zealand"    
    },
    {
        title: "Die Hauptstadt von Neuseeland Wellington",
        user: "damerow",
        lat: -41.2875,
        lng: 174.7761,
        Wikipedia: "https://de.wikipedia.org/wiki/Wellington",                
    }, 
    {
        title: "Tongariro-Nationalpark",
        user: "webmapping",
        lat: -39.2,
        lng: 175.583333,
        wikipedia: "https://de.wikipedia.org/wiki/Tongariro-Nationalpark"
    }, 
    {
       title: "Rotorua",
        user: "juba1508",
        lat: "-38.136944",
        lng: "176.250833",
        wikipedia: "https://de.wikipedia.org/wiki/Rotorua"
    }, 
    {
        title:"Auckland",
        user: "madeleinehll",
        lat: -36.833333,
        lng: 174.8,
        wikipedia: "https://de.wikipedia.org/wiki/Auckland"
    } ];
    
console.log (STOPS);


let map = L.map('map' {
    fullscreenControl:true,
}).setView([stop_lat, stop_lng], zoom);
L.control.scale({
    imperial: false, 
    position: "bottomleft"
}).addTo(map); //Maßstab hinzufügen in km und rechts oben. Wenns nicht sein soll, muss der Wert gleich Falsch gesetzt werden

let osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);
let watercolor = L.tileLayer.provider('Stamen.Watercolor').addTo(map);
let OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});
let CyclOSM = L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});


L.control.layers({
    "Openstreetmap":osm,
    "Watercolor": watercolor,  
    "optentopomap": OpenTopoMap,
    "cyclosm": CyclOSM,
}).addTo(map)

for (let stop of STOPS){
//Marker für den Stop

let marker = L.marker([stop.lat, stop.lng] , {
    opacity: 100 //Options OBject: alle Marker sind jetzt zu 50% Transparent
});
 marker.addTo(map);
 marker.bindPopup(`<h3>${stop.title}</h3>
 <a href= "${stop.wikipedia}">Wikipedia</a>
 `);
//Marker wird erweiter, um den Wikipedia Link
if ( stop.user == "grueneli"){
    marker.openPopup();
    console.log("Mein Marker: ", stop);
}
} 


// speicher mir für jeden der STOPS ein Stop
//lat, lng, Wikipedia
//solang bei dem Objekt Namen nur strings vorhanden sind, braucht man keine ""