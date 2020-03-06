document.addEventListener("DOMContentLoaded", function(){
    // leafletMap();
});

function leafletMap(){
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoicHJvZGl0eSIsImEiOiJjazc1ZGM0ZDMwZWJlM2VzYmk4NWNtdHpoIn0.lLjYAE_Yh7prFlGuqTyliQ'
    }).addTo(mymap);
    var marker = L.marker([51.5, -0.09]).addTo(mymap);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
};