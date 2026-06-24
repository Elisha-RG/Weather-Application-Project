function updateWeather(response) {
  let temperatureValue = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let citySearch = document.querySelector("#identified-city");

  citySearch.innerHTML = response.data.city;
  temperatureValue.innerHTML = Math.round(temperature);
}

function findCity(city) {
  let apiKey = "7841011o26476aa4cefbe36669ffb9tf";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(updateWeather);
}

function beginSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  findCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", beginSearch);
