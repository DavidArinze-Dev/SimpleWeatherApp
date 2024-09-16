const apiKey = "75b9ad8dd2fffbde9c606a2fe99fdaec"; // Replace with your API key
const cityInput = document.getElementById("cityInput");
const weatherInfo = document.getElementById("weatherInfo");

function fetchWeatherData(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const cityName = data.name;

      document.getElementById("city").textContent = cityName;
      document.getElementById(
        "temperature"
      ).textContent = `Temperature: ${temperature}°C`;
      document.getElementById("description").textContent = description;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

document.getElementById("searchButton").addEventListener("click", () => {
  const city = cityInput.value;
  fetchWeatherData(city);
});
