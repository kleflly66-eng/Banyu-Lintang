var allRestaurants = [];
var filteredRestaurants = [];

var restaurantList = document.getElementById('restaurantList');
var searchInput = document.getElementById('searchInput');
var filterKota = document.getElementById('filterKota');
var btnRefresh = document.getElementById('btnRefresh');
var loadingIndicator = document.getElementById('loadingIndicator');


var cityCoordinates = {
    'Surabaya': { lat: -7.2575, lng: 112.7521, radius: 5000 },
    'Malang': { lat: -7.9666, lng: 112.6326, radius: 5000 },
    'Sidoarjo': { lat: -7.4479, lng: 112.7186, radius: 3000 },
    'Banyuwangi': { lat: -8.2194, lng: 114.3691, radius: 3000 }
};


function fetchRestaurantsFromCity(cityName) {
    var cityData = cityCoordinates[cityName];
    
    if (!cityData) {
        return Promise.resolve([]);
    }

    
    var query = '[out:json][timeout:25];' +
                '(' +
                '  node["amenity"="restaurant"](around:' + cityData.radius + ',' + cityData.lat + ',' + cityData.lng + ');' +
                '  node["amenity"="cafe"](around:' + cityData.radius + ',' + cityData.lat + ',' + cityData.lng + ');' +
                '  node["amenity"="fast_food"](around:' + cityData.radius + ',' + cityData.lat + ',' + cityData.lng + ');' +
                ');' +
                'out body;';

    var url = 'https://overpass-api.de/api/interpreter?data=' + encodeURIComponent(query);

    return fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Network error');
            }
            return response.json();
        })
        .then(function(data) {
            var restaurants = data.elements.map(function(place) {
                var name = place.tags.name || 'Restaurant';
                var cuisine = place.tags.cuisine || 'Berbagai Menu';
                var street = place.tags['addr:street'] || '';
                var housenumber = place.tags['addr:housenumber'] || '';
                var address = street && housenumber ? street + ' No. ' + housenumber : street || 'Alamat tidak tersedia';
                
                return {
                    id: place.id,
                    nama: name,
                    kota: cityName,
                    alamat: address,
                    kategori: place.tags.amenity === 'cafe' ? 'Cafe' : place.tags.amenity === 'fast_food' ? 'Fast Food' : 'Restaurant',
                    spesialisasi: cuisine,
                    rating: 'N/A',
                    latitude: place.lat,
                    longitude: place.lon,
                     gambar:  'https://ui-avatars.com/api/?name=' + encodeURIComponent(name) + '&size=300&background=667eea&color=fff&bold=true&format=svg',
                };
            });
            
            return restaurants;
        })
        .catch(function(error) {
            console.log('Error fetching from', cityName, ':', error);
            return [];
        });
}


function loadAllRestaurants() {
    showLoading(true);
    allRestaurants = [];

    var selectedCity = filterKota.value;
    
    if (selectedCity) {
        
        fetchRestaurantsFromCity(selectedCity)
            .then(function(restaurants) {
                allRestaurants = restaurants;
                filteredRestaurants = allRestaurants.slice();
                displayRestaurants(filteredRestaurants);
                showLoading(false);
            });
    } else {
        
        var cities = Object.keys(cityCoordinates);
        var promises = cities.map(function(city) {
            return fetchRestaurantsFromCity(city);
        });
        
        Promise.all(promises)
            .then(function(results) {
                results.forEach(function(restaurants) {
                    allRestaurants = allRestaurants.concat(restaurants);
                });
                filteredRestaurants = allRestaurants.slice();
                displayRestaurants(filteredRestaurants);
                showLoading(false);
                console.log('Total restoran:', allRestaurants.length);
            })
            .catch(function(error) {
                console.log('Error:', error);
                restaurantList.innerHTML = '<p class="no-results error">Gagal memuat data. Coba refresh browser.</p>';
                showLoading(false);
            });
    }
}


function showLoading(show) {
    if (loadingIndicator) {
        loadingIndicator.style.display = show ? 'block' : 'none';
    }
    if (show) {
        restaurantList.innerHTML = '';
    }
}


function displayRestaurants(restaurantsToDisplay) {
    restaurantList.innerHTML = '';
    
    if (restaurantsToDisplay.length === 0) {
        restaurantList.innerHTML = '<p class="no-results">Tidak ada restoran ditemukan. Coba refresh atau pilih kota lain.</p>';
        return;
    }
    
    for (var i = 0; i < restaurantsToDisplay.length; i++) {
        var restaurant = restaurantsToDisplay[i];
        var card = createRestaurantCard(restaurant);
        restaurantList.innerHTML += card;
    }
    
    addLocationButtonListeners();
}


function createRestaurantCard(restaurant) {
    var ratingText = restaurant.rating !== 'N/A' ? '⭐ ' + restaurant.rating : '⭐ Belum ada rating';
    
    return '<div class="restaurant-card">' +
        '<div class="city-badge">' + restaurant.kota + '</div>' +
        '<img src="' + restaurant.gambar + '" alt="' + restaurant.nama + '">' +
        '<div class="card-content">' +
            '<h3>' + restaurant.nama + '</h3>' +
            '<p class="kategori">📍 ' + restaurant.kota + ' | ' + restaurant.kategori + '</p>' +
            '<p class="alamat">' + restaurant.alamat + '</p>' +
            '<p class="spesialisasi"><strong>Spesialisasi:</strong> ' + restaurant.spesialisasi + '</p>' +
            '<div class="card-footer">' +
                '<span class="rating">' + ratingText + '</span>' +
                '<button class="btn-lokasi" data-lat="' + restaurant.latitude + '" data-lng="' + restaurant.longitude + '">📍 Lihat Lokasi</button>' +
            '</div>' +
        '</div>' +
        '<div class="api-badge">OpenStreetMap</div>' +
    '</div>';
}


function filterRestaurants() {
    var searchTerm = searchInput.value.toLowerCase();
    var selectedKota = filterKota.value;
    
    filteredRestaurants = allRestaurants.filter(function(restaurant) {
        var matchSearch = restaurant.nama.toLowerCase().indexOf(searchTerm) !== -1 ||
                          restaurant.kategori.toLowerCase().indexOf(searchTerm) !== -1 ||
                          restaurant.spesialisasi.toLowerCase().indexOf(searchTerm) !== -1 ||
                          restaurant.alamat.toLowerCase().indexOf(searchTerm) !== -1;
        
        var matchKota = selectedKota === '' || restaurant.kota === selectedKota;
        
        return matchSearch && matchKota;
    });
    
    displayRestaurants(filteredRestaurants);
}


function addLocationButtonListeners() {
    var locationButtons = document.querySelectorAll('.btn-lokasi');
    for (var i = 0; i < locationButtons.length; i++) {
        locationButtons[i].addEventListener('click', function() {
            var lat = this.getAttribute('data-lat');
            var lng = this.getAttribute('data-lng');
            var url = 'https://www.google.com/maps/search/?api=1&query=' + lat + ',' + lng;
            window.open(url, '_blank');
        });
    }
}


searchInput.addEventListener('input', filterRestaurants);
filterKota.addEventListener('change', loadAllRestaurants);

if (btnRefresh) {
    btnRefresh.addEventListener('click', function() {
        loadAllRestaurants();
    });
}


document.addEventListener('DOMContentLoaded', function() {
    console.log('Memulai aplikasi dengan OpenStreetMap API...');
    loadAllRestaurants();
});