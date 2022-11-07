
// fetch from the api
function buttonClicked(){
    var city=document.getElementById("city_input").value;
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
    .then((response)=>response.json())
    .then((data) =>{
        
        console.log(data);
        var temp=(data.main.temp - 273.15);
        var humidity = data.main.humidity;
        var pressure = data.main.pressure;
        var weather =  data.weather[0].main;
        var wind = data.wind.speed;
        // for displaying at the html
        document.getElementById("a_temp").innerHTML = " TEMPERATURE : " + (data.main.temp - 273.15).toFixed(2)
        document.getElementById("a_humidity").innerHTML ="HUMIDITY : " + humidity;
        document.getElementById("a_pressure").innerHTML = "PRESSURE : " + pressure;
        document.getElementById("a_weather").innerHTML = "WEATHER CONDITION : " + weather;
        document.getElementById("a_wind").innerHTML = "SPEED OF WIND : " + wind;
    })
  }