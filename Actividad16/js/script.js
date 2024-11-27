const buscador = document.getElementById('buscador');

consultar.addEventListener('click', () => {
    let ciudad = buscador.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=377e75f44cdc7462b746630b9afc10fd&units=metric&lang=es`;
    getWeatherData(url, ciudad);
    
});

function getWeatherData(url, ciudad) {
    fetch(url)
        .then(response => response.json()) 
        .then(data => {
            if (data && data.main) {
                const temperatura = Math.round(data.main.temp);
                const descripcion = data.weather[0].description;
                const tempMax = Math.ceil(data.main.temp_max);
                const tempMin = Math.floor(data.main.temp_min); 
                const feelsLike = Math.round(data.main.feels_like);
                const icono = data.weather[0].icon;
                const humedad = data.main.humidity;
                const velocidadViento = data.wind.speed;
                document.getElementById('ciudad').innerHTML = `${ciudad}`;
                document.getElementById('temperatura').innerHTML = `Temperatura: ${temperatura}°C`;
                document.getElementById('descripcion').innerHTML = `Descripción: ${descripcion}`;
                document.getElementById('tempMax').innerHTML = `Máx: ${tempMax}°C`;
                document.getElementById('tempMin').innerHTML = `Mín: ${tempMin}°C`;
                document.getElementById('feelsLike').innerHTML = `Sensación Térmica: ${feelsLike}°C`; 
                document.getElementById('icono').innerHTML = `<img src="http://openweathermap.org/img/wn/${icono}@2x.png" alt="Icono del clima">`;
                document.getElementById('humedad').innerHTML = `Humedad: ${humedad}%`;
                document.getElementById('velocidadViento').innerHTML = `Velocidad del viento: ${velocidadViento} m/s`;
                console.log(data.main);
            } else {
                console.error('Error: Invalid API response');
            }
        })
        .catch(error => console.error(error));
}
