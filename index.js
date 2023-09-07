const apikey = "59e3b1427b20424390771515a314028a";

const weatherDataEl = document.getElementById("weather-data");

const cityInputEl = document.getElementById("input-city");

const formEl = document.querySelector("form");

const namee = prompt("Enter Your Name")

formEl.addEventListener("submit",(event)=>{
    event.preventDefault();

    

    const cityValue = cityInputEl.value;
    getWeatherData(cityValue);
    
    

});

async function getWeatherData(cityValue){
  try {
    
    
    const response =await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`);
    
    if(!response.ok){
        throw new Error("Network is not working");
    }
    const data = await response.json();

    const icon= data.weather[0].icon;

    const temperature = data.main.temp;

    const discription = data.weather[0].description;


    const details = [
      `Feels like : ${data.main.feels_like}°C`,
      `Humidity: ${data.main.humidity}%`,
      `Wind Speed : ${data.wind.speed}m/s`,
    ];

    weatherDataEl.querySelector(".icon").innerHTML=`<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Data">`;
    weatherDataEl.querySelector(".temperature").textContent=`${temperature}°C`;

    weatherDataEl.querySelector(".discription").textContent=discription;

    weatherDataEl.querySelector(".details").innerHTML=details.map((detail) =>`<div>${detail}</div>`)

    


  } catch (error) {
    weatherDataEl.querySelector(".icon").innerHTML = "";
    weatherDataEl.querySelector(".temperature").textContent = "";
    weatherDataEl.querySelector(".discription").textContent = `Hey ${namee} Maybe you type Wrong City Please Check`
      

    weatherDataEl.querySelector(".details").innerHTML = "";
  }
}