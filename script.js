document.getElementById('getLocation').addEventListener('click', async () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            document.getElementById('latitude').value = position.coords.latitude;
            document.getElementById('longitude').value = position.coords.longitude;
            document.getElementById('locationDisplay').innerText = 
                `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
        }, error => {
            alert('Unable to get geolocation. Please allow location access.');
        });
    } else {
        alert('Geolocation is not supported by your browser.');
    }
});

document.getElementById('dataForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(document.getElementById('dataForm'));

    // Send data to the backend
    const response = await fetch('/submit', {
        method: 'POST',
        body: formData
    });

    const result = await response.json();
    alert(result.message);
});
