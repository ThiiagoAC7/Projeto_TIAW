function getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
}


function showPosition(position) {
    let x = position.coords.latitude;
    let y = position.coords.longitude;

    // Configurações do mapa
    var options = {
        zoom: 16,
        center: { lat: x, lng: y }
    }

    // Novo mapa
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Link para o Google Maps com os pontos de reciclagem mais proximos
    let z = document.getElementById('link-google-maps');
    z.innerHTML = `<a class="btn" href="https://www.google.com/maps/search/?api=1&query=pontos+proximos+de+reciclagem"><img src="img/ponto-no-mapa.png" alt="ponto-no-mapa" style="max-width: 60px;"></a>`
}

$(document).ready(function () {
    getLocation();
})