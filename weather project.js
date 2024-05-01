// apikey="7ff6d15c053625fb8a83dc610c55b67a"
// https://api.openweathermap.org/data/2.5/weather?q={cityname}&appid={API key}
const apikey="7ff6d15c053625fb8a83dc610c55b67a"
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=imperial&q="

const searchbox=document.querySelector(".sea")

const searchbtn=document.querySelector(".button")

async function checkweather(city){
    const response = await fetch(apiurl +city+`&appid=${apikey}`)
    let data=await response.json()
    document.querySelector(".city").innerHTML=data.name
    document.querySelector(".temp").innerHTML=data.main.temp + "°F"
    document.querySelector(".humidity").innerHTML=data.main.humidity +  "%"
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h"



    console.log(data)
}

searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);

})

//continue at 30:26