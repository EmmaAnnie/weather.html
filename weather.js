fetch("https://api.openweathermap.org/data/2.5/weather?q=Calgary&appid=9814d4960228c2ee15b4532e74c55719&units=metric"
    )
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        console.log(data.main.temp);
        temperature.textContent = "Temperature: "+data.main.temp
    })