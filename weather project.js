// apikey="7ff6d15c053625fb8a83dc610c55b67a"
// https://api.openweathermap.org/data/2.5/weather?q={cityname}&appid={API key}
const apikey="7ff6d15c053625fb8a83dc610c55b67a"
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=imperial&q="

const searchbox=document.querySelector(".sea")

const weathericon=document.querySelector(".weather-icon")
const searchbtn=document.querySelector(".button")

console.log(weathericon)
async function checkweather(city){
    console.log(searchbox.value)
    if(searchbox.value === ""){
        alert("Please ENter a city ")
    }
    const response = await fetch(apiurl +city+`&appid=${apikey}`)

    if(response.status === 404 ){
        alert("You entered an invalid city name. Enter a valid one")
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"

    }else{
    let data=await response.json()
    document.querySelector(".city").innerHTML=data.name
    document.querySelector(".temp").innerHTML=data.main.temp + "°F"
    document.querySelector(".humidity").innerHTML=data.main.humidity +  "%"
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h"

    if(data.weather[0].main === "Clouds"){
         weathericon.src="images/clouds.png"


    }else if(data.weather[0].main === "Clear"){
        weathericon.src="images/clear.png"
     }else if(data.weather[0].main === "Rain"){
        weathericon.src="images/rain.png"
     }else if(data.weather[0].main === "Mist"){
        weathericon.src="images/mist.png"
     }else if(data.weather[0].main === "Drizzle"){
        weathericon.src="images/drizzle.png"
     }
     document.querySelector(".weather").style.display="block"
     document.querySelector(".error").style.display="none"

    console.log(data)
}
}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);

})

