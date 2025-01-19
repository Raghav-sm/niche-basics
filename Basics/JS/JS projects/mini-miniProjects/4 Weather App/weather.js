const apikey = "72fc1d164255fb5ec1430f4c6a491dec";

const cityInputEl = document.getElementById('inputCity');
const weatherDataEl = document.getElementById("details");
const containerEl = document.querySelector('.container');
const formEl = document.querySelector('form');
const temp = document.querySelector('.temp');
const description = document.querySelector('.description');

formEl.addEventListener('submit', () => {
  event.preventDefault();
  const cityName = cityInputEl.value;
  getWeatherData(cityName);
})


async function getWeatherData(cityName) {
  try {
    const JSONresponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`)
    if (!JSONresponse.ok) {
      throw new Error("Api issue")
    }
    const cityData = await JSONresponse.json();
    console.log(cityData);
    const temperature = Math.round(cityData.main.temp);
    const description = cityData.weather[0].description;

    const detailsArr = [
      `Feels like : ${cityData.main.temp}`,
      `Humidity : ${cityData.main.humidity}`,
      `Wind Speed : ${cityData.wind.speed}`
    ]

    containerEl.querySelector('.temp').textContent = `${temperature}°C`

    containerEl.querySelector('.description').
      textContent = description;

    containerEl.querySelector('#details').innerHTML = detailsArr.map((detail) => {
      return `<div class="div1">${detail}</div>`;
    }).join('')
  } catch (error) {
  }
}