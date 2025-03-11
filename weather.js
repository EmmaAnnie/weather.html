fetch("https://api.openweathermap.org/data/2.5/weather?q=Calgary&appid=9814d4960228c2ee15b4532e74c55719&units=metric"
    )
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        console.log(data.main.temp);
        temperature.textContent = "Temperature: "+data.main.temp+"\u00B0C";
        description.textContent = "Description: "+data.weather[0].description;
        humidity.textContent = "Humidity: "+data.main.humidity;
        high.textContent = "High: "+data.main.temp_max+"\u00B0C";
        low.textContent = "Low: "+data.main.temp_min+"\u00B0C";
        feelslike.textContent = "Feels Like: "+data.main.feels_like+"\u00B0C";

    });

    const weathericon = "https://openweathermap.omg/img/wn/"+data.weather[0].icon+"@2x.png";
        console.log(icon);