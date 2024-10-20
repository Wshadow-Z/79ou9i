function initMap() {
    const avocats = [
      { name: 'Maître A. Ammar', address: 'Ennasr 2, Ariana', lat: 36.8065, lng: 10.1815 },
      // ... autres avocats
    ];
  
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 36.8065, lng: 10.1815 }, // Centre sur Ariana
      zoom: 15
    });
  
    const infoWindow = new google.maps.InfoWindow();
  
    avocats.forEach(avocat => {
      const marker = new google.maps.Marker({
        position: { lat: avocat.lat, lng: avocat.lng },
        map: map
      });
  
      marker.addListener('click', () => {
        infoWindow.setContent(`
          <h5>${avocat.name}</h5>
          <p>${avocat.address}</p>
        `);
        infoWindow.open(map, marker);
      });
  
      const li = document.createElement('li');
      li.classList.add('avocat');
      li.textContent = avocat.name;
      li.addEventListener('click', () => {
        map.setCenter(marker.getPosition());
        infoWindow.open(map, marker);
      });
      document.getElementById('avocat-list').appendChild(li);
    });
  }