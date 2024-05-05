// Declare constants for the API key and base URL for the OpenWeatherMap API
const apikey = "7ff6d15c053625fb8a83dc610c55b67a";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

// Get references to DOM elements for the search box, weather icon, and search button
const searchbox = document.querySelector(".sea");
const weathericon = document.querySelector(".weather-icon");
const searchbtn = document.querySelector(".button");

// Log the weather icon element to the console (for debugging purposes)
console.log(weathericon);

// Asynchronous function to check the weather for a given city
async function checkweather(city) {
    // If the search box is empty, alert the user to enter a city name
    console.log(searchbox.value);
    if (searchbox.value === "") {
        alert("Please enter a city");
    }

    // Fetch weather data from the API for the specified city
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    // Check the response status; if 404 (not found), alert the user and update the UI
    if (response.status === 404) {
        alert("You entered an invalid city name. Enter a valid one.");
        document.querySelector(".error").style.display = "block"; // Show error message
        document.querySelector(".weather").style.display = "none"; // Hide weather info
    } else {
        // If the response is successful, parse the JSON data
        let data = await response.json();

        // Update the city name, temperature, humidity, and wind speed in the DOM
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°F";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        // Update the weather icon based on the weather condition
        if (data.weather[0].main === "Clouds") {
            weathericon.src = "images/clouds.png";
        } else if (data.weather[0].main === "Clear") {
            weathericon.src = "images/clear.png";
        } else if (data.weather[0].main === "Rain") {
            weathericon.src = "images/rain.png";
        } else if (data.weather[0].main === "Mist") {
            weathericon.src = "images/mist.png";
        } else if (data.weather[0].main === "Drizzle") {
            weathericon.src = "images/drizzle.png";
        }

        // Display the weather information and hide the error message
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

        // Log the weather data to the console (for debugging purposes)
        console.log(data);
    }
}

// Add an event listener to the search button to trigger the weather check
searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value); // Call the checkweather function with the entered city
});
