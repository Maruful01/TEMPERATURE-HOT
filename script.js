document.getElementById ("search-btn").addEventListener ('click', function (){
    function currentWeather (){
        const inputValue = document.getElementById("input").value;
       fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue+'&appid=92b48f87de75a1292b04b39d00d924e3')
       .then(response => response.json())
       .catch(err => alert ("Wrong city name."))
       .then(data => {    
        const weather = data.main;
        const CityName = data.name;
        const country = data.sys.country;
        const temperature = `${weather.temp}`;
        const weatherDescription = data.weather[0].description;
//Kelvin to Celsius
        const kelvinToCelsius = temperature -273.15;
        const tmp = Math.round (kelvinToCelsius);
//
        document.getElementById ("tamp").innerText = tmp;
        document.getElementById ("country").innerText = country;
        document.getElementById ("city-name").innerText = CityName;
        document.getElementById ("description").innerText = weatherDescription;
    })
    }  
    currentWeather ();
  })