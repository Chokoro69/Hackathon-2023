function initMap() {
    const mapOptions = {
        center: { lat: 35.2271, lng: -80.8431 }, // Charlotte coordinates
        zoom: 10
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    const foodBanks = [
        {
            name: "Food Bank 1",
            lat: 35.1234,
            lng: -80.5678,
        },
        {
            name: "Food Bank 2",
            lat: 35.2345,
            lng: -80.6789,
        },
        // Add more locations here
    ];

    foodBanks.forEach((foodBank) => {
        const marker = new google.maps.Marker({
            position: { lat: foodBank.lat, lng: foodBank.lng },
            map: map,
            title: foodBank.name
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `<div class="location"><h3>${foodBank.name}</h3></div>`
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    });
}
