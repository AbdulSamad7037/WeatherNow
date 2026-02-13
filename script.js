const apiKey = "dda1c5ef7b93da3f75f7f5a09694622b";

async function getWeather(){

const cityName =
document.getElementById("cityInput").value;

const url =
"https://api.openweathermap.org/data/2.5/weather?q="
+ cityName +
"&units=metric&appid="
+ apiKey;

const response =
await fetch(url);

const data =
await response.json();

   if (data.cod != 200) {
        alert("Invalid city name");
        document.querySelector(".weatherInfo").style.display = "none";
        return;
    }

    document.getElementById("appTitle").style.display = "none";

    
    document.querySelector(".weatherInfo").style.display = "block";

document.getElementById("city").innerText =
data.name;

document.getElementById("temp").innerText =
Math.round(data.main.temp) + "°C";

document.getElementById("condition").innerText =
data.weather[0].main;

document.getElementById("windText").innerText =
data.wind.speed + " km/h";

document.getElementById("humidityText").innerText =
data.main.humidity + "%";


changeBackground(data.weather[0].main);

}

function changeBackground(condition){

let image = "default-bg.jpg";

if(condition === "Clear"){

image = "clear-bg.jpg";

}

else if(condition === "Clouds"){

image = "clouds-bg.jpg";

}

else if(condition === "Rain"){

image = "rain-bg.jpg";

}

else if(condition === "Snow"){

image = "snow-bg.jpg";

}

document.body.style.backgroundImage =
"url('media/" + image + "')";

}

document.getElementById("cityInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        getWeather();
    }
});
