var localRestaurantsData = [
    {
        id: 1,
        nama: "Rawon Setan",
        kota: "Surabaya",
        alamat: "Jl. Embong Malang No. 78",
        kategori: "Restaurant",
        spesialisasi: "Indonesian",
        rating: 4.8,
        latitude: -7.2575,
        longitude: 112.7521,
        gambar: "https://dummyimage.com/300x200/667eea/ffffff&text=Rawon+Setan"
    },
    {
        id: 2,
        nama: "Depot Bu Rudy",
        kota: "Surabaya",
        alamat: "Jl. Dharmawangsa No. 3",
        kategori: "Restaurant",
        spesialisasi: "Seafood",
        rating: 4.7,
        latitude: -7.2819,
        longitude: 112.7603,
        gambar: "https://dummyimage.com/300x200/667eea/ffffff&text=Depot+Bu+Rudy"
    },
    {
        id: 3,
        nama: "Bakso Bakar Pak Man",
        kota: "Malang",
        alamat: "Jl. Besar Ijen No. 77",
        kategori: "Restaurant",
        spesialisasi: "Indonesian",
        rating: 4.6,
        latitude: -7.9666,
        longitude: 112.6326,
        gambar: "https://dummyimage.com/300x200/667eea/ffffff&text=Bakso+Bakar"
    },
    {
        id: 4,
        nama: "Warung Apung Rahmawati",
        kota: "Banyuwangi",
        alamat: "Jl. Raya Watudodol",
        kategori: "Restaurant",
        spesialisasi: "Seafood",
        rating: 4.5,
        latitude: -8.2194,
        longitude: 114.3691,
        gambar: "https://dummyimage.com/300x200/667eea/ffffff&text=Warung+Apung"
    },
    {
        id: 5,
        nama: "Nasi Pecel Madiun",
        kota: "Sidoarjo",
        alamat: "Jl. Pahlawan No. 45",
        kategori: "Restaurant",
        spesialisasi: "Indonesian",
        rating: 4.4,
        latitude: -7.4479,
        longitude: 112.7186,
        gambar: "https://dummyimage.com/300x200/667eea/ffffff&text=Pecel+Madiun"
    },
    {
        id: 6,
        nama: "Soto Lamongan Cak Har",
        kota: "Surabaya",
        alamat: "Jl. Taman Apsari No. 1",
        kategori: "Restaurant",
        spesialisasi: "Indonesian",
        rating: 4.7,
        latitude: -7.2504,
        longitude: 112.7324,
        gambar: "https://dummyimage.com/300x200/667eea/ffffff&text=Soto+Lamongan"
    },
    {
        id: 7,
        nama: "Bebek Sinjay",
        kota: "Malang",
        alamat: "Jl. Soekarno Hatta No. 1",
        kategori: "Restaurant",
        spesialisasi: "Indonesian",
        rating: 4.5,
        latitude: -7.9553,
        longitude: 112.6544,
        gambar: "https://dummyimage.com/300x200/667eea/ffffff&text=Bebek+Sinjay"
    },
    {
        id: 8,
        nama: "Ayam Goreng Mbok Berek",
        kota: "Malang",
        alamat: "Jl. Besar Ijen No. 63",
        kategori: "Restaurant",
        spesialisasi: "Indonesian",
        rating: 4.6,
        latitude: -7.9797,
        longitude: 112.6304,
        gambar: "https://dummyimage.com/300x200/667eea/ffffff&text=Ayam+Mbok+Berek"
    },
    {
        id: 9,
        nama: "Rujak Cingur Pak Kumis",
        kota: "Sidoarjo",
        alamat: "Jl. Mojopahit No. 30",
        kategori: "Restaurant",
        spesialisasi: "Indonesian",
        rating: 4.6,
        latitude: -7.4477,
        longitude: 112.7191,
        gambar: "https://dummyimage.com/300x200/667eea/ffffff&text=Rujak+Cingur"
    },
    {
        id: 10,
        nama: "Sate Klopo Ondomohen",
        kota: "Surabaya",
        alamat: "Jl. Walikota Mustajab No. 42",
        kategori: "Restaurant",
        spesialisasi: "Indonesian",
        rating: 4.7,
        latitude: -7.2808,
        longitude: 112.7958,
        gambar: "https://dummyimage.com/300x200/667eea/ffffff&text=Sate+Klopo"
    },
    {
        id: 11,
        nama: "Depot Hok Lay",
        kota: "Surabaya",
        alamat: "Jl. Kembang Jepun No. 53",
        kategori: "Restaurant",
        spesialisasi: "Chinese",
        rating: 4.5,
        latitude: -7.2459,
        longitude: 112.7378,
        gambar: "https://dummyimage.com/300x200/667eea/ffffff&text=Depot+Hok+Lay"
    },
    {
        id: 12,
        nama: "Tahu Tek Pak Jayen",
        kota: "Surabaya",
        alamat: "Jl. Walikota Mustajab No. 60",
        kategori: "Restaurant",
        spesialisasi: "Indonesian",
        rating: 4.5,
        latitude: -7.2821,
        longitude: 112.7972,
        gambar: "https://dummyimage.com/300x200/667eea/ffffff&text=Tahu+Tek"
    },
    {
        id: 13,
        nama: "Lontong Balap Pak Gendut",
        kota: "Surabaya",
        alamat: "Jl. Jagir Wonokromo No. 100",
        kategori: "Restaurant",
        spesialisasi: "Indonesian",
        rating: 4.5,
        latitude: -7.3134,
        longitude: 112.7401,
        gambar: "https://dummyimage.com/300x200/667eea/ffffff&text=Lontong+Balap"
    },
    {
        id: 14,
        nama: "Nasi Goreng Jancuk",
        kota: "Malang",
        alamat: "Jl. Soekarno Hatta",
        kategori: "Restaurant",
        spesialisasi: "Indonesian",
        rating: 4.6,
        latitude: -7.9448,
        longitude: 112.6154,
        gambar: "https://dummyimage.com/300x200/667eea/ffffff&text=Nasi+Goreng"
    },
    {
        id: 15,
        nama: "Mie Balap Seafood",
        kota: "Banyuwangi",
        alamat: "Jl. Ahmad Yani No. 88",
        kategori: "Restaurant",
        spesialisasi: "Seafood",
        rating: 4.4,
        latitude: -8.2148,
        longitude: 114.3691,
        gambar: "https://dummyimage.com/300x200/667eea/ffffff&text=Mie+Balap"
    },
    {
        id: 16,
        nama: "Rumah Makan Inggil",
        kota: "Malang",
        alamat: "Jl. Raya Tlogomas No. 37",
        kategori: "Restaurant",
        spesialisasi: "Indonesian",
        rating: 4.5,
        latitude: -7.9437,
        longitude: 112.5999,
        gambar: "https://dummyimage.com/300x200/667eea/ffffff&text=RM+Inggil"
    },
    {
        id: 17,
        nama: "Ikan Bakar Cianjur",
        kota: "Surabaya",
        alamat: "Jl. HR Muhammad No. 168",
        kategori: "Restaurant",
        spesialisasi: "Seafood",
        rating: 4.6,
        latitude: -7.3286,
        longitude: 112.7574,
        gambar: "https://dummyimage.com/300x200/667eea/ffffff&text=Ikan+Bakar"
    },
    {
        id: 18,
        nama: "Bakmi GM Malang",
        kota: "Malang",
        alamat: "Jl. Veteran No. 2",
        kategori: "Restaurant",
        spesialisasi: "Chinese",
        rating: 4.5,
        latitude: -7.9826,
        longitude: 112.6275,
        gambar: "https://dummyimage.com/300x200/667eea/ffffff&text=Bakmi+GM"
    },
    {
        id: 19,
        nama: "Warung Bu Kris",
        kota: "Surabaya",
        alamat: "Jl. Walikota Mustajab No. 56",
        kategori: "Restaurant",
        spesialisasi: "Indonesian",
        rating: 4.4,
        latitude: -7.2816,
        longitude: 112.7966,
        gambar: "https://dummyimage.com/300x200/667eea/ffffff&text=Warung+Bu+Kris"
    },
    {
        id: 20,
        nama: "Coto Makassar Losari",
        kota: "Surabaya",
        alamat: "Jl. Raya Darmo No. 12",
        kategori: "Restaurant",
        spesialisasi: "Indonesian",
        rating: 4.6,
        latitude: -7.2841,
        longitude: 112.7343,
        gambar: "https://dummyimage.com/300x200/667eea/ffffff&text=Coto+Makassar"
    }
];

var allRestaurants = [];
var filteredRestaurants = [];
var isLoadingFromAPI = false;

var restaurantList = document.getElementById('restaurantList');
var searchInput = document.getElementById('searchInput');
var filterKota = document.getElementById('filterKota');
var btnRefresh = document.getElementById('btnRefresh');

var cityCoordinates = {
    'Surabaya': { lat: -7.2575, lng: 112.7521, radius: 3000 },
    'Malang': { lat: -7.9666, lng: 112.6326, radius: 3000 },
    'Sidoarjo': { lat: -7.4479, lng: 112.7186, radius: 2000 },
    'Banyuwangi': { lat: -8.2194, lng: 114.3691, radius: 2000 }
};

// Load instant dari data lokal
function loadLocalData() {
    allRestaurants = localRestaurantsData.slice();
    filteredRestaurants = allRestaurants.slice();
    displayRestaurants(filteredRestaurants);
    console.log('✅ Data lokal dimuat:', allRestaurants.length, 'restoran');
}

// Load dari API (optional, saat refresh)
function loadFromAPI() {
    if (isLoadingFromAPI) {
        alert('⏳ Sedang memuat data, tunggu sebentar...');
        return;
    }
    
    isLoadingFromAPI = true;
    restaurantList.innerHTML = '<p class="no-results">⏳ Memuat data dari OpenStreetMap API...<br>Ini mungkin butuh 30-60 detik...</p>';
    
    var selectedCity = filterKota.value;
    
    if (selectedCity) {
        fetchRestaurantsFromCity(selectedCity)
            .then(function(restaurants) {
                if (restaurants.length > 0) {
                    allRestaurants = restaurants;
                    filteredRestaurants = allRestaurants.slice();
                    displayRestaurants(filteredRestaurants);
                    alert('✅ Berhasil load ' + restaurants.length + ' restoran dari API!');
                } else {
                    alert('⚠ Tidak ada data dari API, tetap pakai data lokal');
                    loadLocalData();
                }
                isLoadingFromAPI = false;
            });
    } else {
        alert('Pilih kota terlebih dahulu untuk load dari API');
        loadLocalData();
        isLoadingFromAPI = false;
    }
}

function fetchRestaurantsFromCity(cityName) {
    var cityData = cityCoordinates[cityName];
    
    if (!cityData) {
        return Promise.resolve([]);
    }

    var query = '[out:json][timeout:25];(' +
                'node["amenity"="restaurant"](around:' + cityData.radius + ',' + cityData.lat + ',' + cityData.lng + ');' +
                'node["amenity"="cafe"](around:' + cityData.radius + ',' + cityData.lat + ',' + cityData.lng + ');' +
                ');out body 20;'; // Limit 20 results untuk speed

    var url = 'https://overpass-api.de/api/interpreter?data=' + encodeURIComponent(query);

    return fetch(url)
        .then(function(response) {
            if (!response.ok) throw new Error('API Error');
            return response.json();
        })
        .then(function(data) {
            var restaurants = data.elements.map(function(place) {
                var name = place.tags.name || 'Restaurant';
                var cuisine = place.tags.cuisine || 'Berbagai Menu';
                var address = place.tags['addr:street'] || 'Alamat tidak tersedia';
                
                return {
                    id: place.id,
                    nama: name,
                    kota: cityName,
                    alamat: address,
                    kategori: place.tags.amenity === 'cafe' ? 'Cafe' : 'Restaurant',
                    spesialisasi: cuisine,
                    rating: 'N/A',
                    latitude: place.lat,
                    longitude: place.lon,
                    gambar: 'https://dummyimage.com/300x200/667eea/ffffff&text=' + encodeURIComponent(name)
                };
            });
            
            return restaurants;
        })
        .catch(function(error) {
            console.error('API Error:', error);
            return [];
        });
}

function displayRestaurants(restaurantsToDisplay) {
    restaurantList.innerHTML = '';
    
    if (restaurantsToDisplay.length === 0) {
        restaurantList.innerHTML = '<p class="no-results">Tidak ada restoran ditemukan</p>';
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
    return '<div class="restaurant-card">' +
        '<div class="city-badge">' + restaurant.kota + '</div>' +
        '<img src="' + restaurant.gambar + '" alt="' + restaurant.nama + '" loading="lazy">' +
        '<div class="card-content">' +
            '<h3>' + restaurant.nama + '</h3>' +
            '<p class="kategori">📍 ' + restaurant.kota + ' | ' + restaurant.kategori + '</p>' +
            '<p class="alamat">' + restaurant.alamat + '</p>' +
            '<p class="spesialisasi"><strong>Spesialisasi:</strong> ' + restaurant.spesialisasi + '</p>' +
            '<div class="card-footer">' +
                '<span class="rating">⭐ ' + restaurant.rating + '</span>' +
                '<button class="btn-lokasi" data-lat="' + restaurant.latitude + '" data-lng="' + restaurant.longitude + '">📍 Lihat Lokasi</button>' +
            '</div>' +
        '</div>' +
    '</div>';
}

function filterRestaurants() {
    var searchTerm = searchInput.value.toLowerCase();
    var selectedKota = filterKota.value;
    
    filteredRestaurants = allRestaurants.filter(function(restaurant) {
        var matchSearch = restaurant.nama.toLowerCase().indexOf(searchTerm) !== -1 ||
                          restaurant.kategori.toLowerCase().indexOf(searchTerm) !== -1 ||
                          restaurant.spesialisasi.toLowerCase().indexOf(searchTerm) !== -1;
        
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
            window.open('https://www.google.com/maps/search/?api=1&query=' + lat + ',' + lng, '_blank');
        });
    }
}

searchInput.addEventListener('input', filterRestaurants);
filterKota.addEventListener('change', filterRestaurants);

if (btnRefresh) {
    btnRefresh.addEventListener('click', function() {
        if (confirm('Load data real-time dari OpenStreetMap API?\n(Ini akan butuh waktu 30-60 detik)\n\nKlik OK untuk lanjut, Cancel untuk tetap pakai data lokal')) {
            loadFromAPI();
        }
    });
}

// INSTANT LOAD saat halaman dibuka
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Memuat data lokal (instant load)...');
    loadLocalData();
});