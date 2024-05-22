function addCountryMarkers() {
    // API'den ülke koordinatlarını almak için Fetch API kullanma
    fetch("AIzaSyCfixGXglC2fqh_uX8zc-CTCKQPT_SvJXI") // API_URL, API'nin gerçek URL'si ile değiştirilmelidir
        .then((response) => response.json()) // API'den gelen yanıtı JSON'a dönüştürme
        .then((data) => {
            // Veriyi işleme
            data.forEach((country) => {
                // Her bir ülke için marker oluşturma ve haritaya ekleme
                const marker = L.marker(country.coords)
                    .addTo(mymap)
                    .bindPopup(`<b>${country.name}</b> Türkiye <br>${country.veri}`);

                // Marker'a tıklandığında bir işlem gerçekleştirme
                marker.on('click', function () {
                    // Popup penceresini açma
                    console.log(country.name + " marker'ına tıklandı!");
                });
            });
        })
        .catch((error) =>
            console.error("API isteği sırasında bir hata oluştu:", error)
        ); // Hata yakalama ve konsola yazdırma
}

// Ülke arama işlemini gerçekleştiren fonksiyon
// Ülke arama işlemini gerçekleştiren fonksiyon
// Ülke arama işlemini gerçekleştiren fonksiyon
function findCountry() {
    var countryName = document.getElementById("countryInput").value;

    // Google Haritalar Geocoding API'sini kullanarak ülkenin merkez koordinatlarını çekme
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: countryName }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            var location = results[0].geometry.location;
            console.log(
                countryName +
                " ülkesinin merkez koordinatları: " +
                location.lat() +
                ", " +
                location.lng()
            );

            // Yeni bir marker oluşturup haritaya ekleyin
            var marker = L.marker([location.lat(), location.lng()]).addTo(mymap);

            // Marker'a bilgi baloncuğu ekleyin
            marker.bindPopup(`<div><h2><b>${countryName}</b></h2><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, voluptatem.</p></div>`).openPopup();

            // Marker'a tıklama olayını ekleme
            marker.on('click', function () {
                console.log('Marker\'a tıklandı:', countryName);
                // Burada marker'a tıklandığında yapılacak işlemleri belirtebilirsiniz
            });
        } else {
            alert("Ülke bulunamadı!");
        }
    });
}

