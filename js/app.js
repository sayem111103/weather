const weatherData = (cityName) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ec6695c0f2ace819446ade5a6734b982&units=metric`
  )
    .then((res) => res.json())
    .then((data) => functionCall(data));
};

const functionCall = (data) =>{
    displayWeather('city-name', data.name)
    displayWeather('temperature-value', data.main? Math.ceil(data.main.temp) : 'N/A')
    displayWeather('weather-situation', data.weather? data.weather[0].description : 'N/A')
    displayWeather('city-name', data.name)
    document.getElementById('img-container').innerHTML=  `<img src="https://openweathermap.org/img/wn/${data.weather? data.weather[0].icon : ''}@2x.png" alt="">`;
   
}

const displayWeather= (id, data) =>{
    document.getElementById(id).innerText = data;
}

document.getElementById('searchBtn').addEventListener('click', function(){
    const inPut = document.getElementById('inputField');
    let inPutValue = inPut.value;
    weatherData(inPutValue)
})

document.getElementById('inputField').addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        const inPut = document.getElementById('inputField');
        let inPutValue = inPut.value;
        weatherData(inPutValue)
    }
})
weatherData("Dhaka")