
    document.getElementById('weatherForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const cityName = document.getElementById('cityName').value;
        getWeather(cityName);
    });

    function getWeather(cityName) {
        const apiKey = 'c84dad08d8a64fb9b33115107240502'; // Replace with your OpenWeatherMap API key
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`;
        
        fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
    }

    function displayWeather(data) {
        const weatherData = document.getElementById('weatherData');
        weatherData.innerHTML = `
            <h3>Weather in ${data.location.name}</h3>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Description: ${data.current.condition.text}</p>
            <p>Humidity: ${data.current.humidity}%</p>
            <p>Wind Speed: ${data.current.wind_kph} km/h</p>
        `;
    }
