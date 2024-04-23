// apikey="7ff6d15c053625fb8a83dc610c55b67a"
// https://api.openweathermap.org/data/2.5/weather?q={cityname}&appid={API key}
const apikey="7ff6d15c053625fb8a83dc610c55b67a"
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=germany"


async function checkweather(){
    const response = await fetch(apiurl +`&appid=${apikey}`)
    let data=await response.json()
    let d=document.querySelector(".city").innerHTML=d

    console.log(data)
}
//continue at 24:26