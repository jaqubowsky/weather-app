import { fetchWeatherData, fetchUserLocation } from "./weatherData";

function getWeatherIcon(weatherData) {
  const iconId = weatherData.weather[0].icon;
  const iconURL = `http://openweathermap.org/img/wn/${iconId}@2x.png`;

  return iconURL;
}

function setWeatherIcon(weatherIcon) {
  const weatherImgEl = document.getElementById("weatherImage");

  weatherImgEl.src = weatherIcon;
}

function setWeatherTemp(weatherData) {
  const weatherTempEl = document.getElementById("cityTemp");
  const weatherTempData = weatherData.main.temp.toFixed();

  weatherTempEl.textContent = `${weatherTempData}°C`;
}

function setCityName(locationData, weatherData) {
  const cityName = document.getElementById("cityName");
  const location = locationData.name;
  const country = weatherData.sys.country;

  cityName.textContent = `${location}, ${country}`;
}

function getSunData(weatherData) {
  const { sunrise, sunset } = weatherData.sys;
  const options = {
    hour: "2-digit",
    minute: "2-digit",
  };

  const sunsetDate = new Date(sunset * 1000).toLocaleTimeString([], options); // multiply by 1000 to convert from unix
  const sunriseDate = new Date(sunrise * 1000).toLocaleTimeString([], options);

  return { sunsetDate, sunriseDate };
}

async function setSunData(sunInfo) {
  const sunData = await getSunData(sunInfo);
  const sunDataEl = document.getElementById("sunInfo");

  sunDataEl.textContent = `Sunrise: ${sunData.sunriseDate} | Sunset: ${sunData.sunsetDate}`;
}

async function setWeatherData(location) {
  const userLocation = await fetchUserLocation(location);
  const weatherData = await fetchWeatherData(userLocation);
  const weatherIcon = await getWeatherIcon(weatherData)

  setWeatherIcon(weatherIcon);
  setWeatherTemp(weatherData);
  setCityName(userLocation, weatherData);
  setSunData(weatherData);
}

export default setWeatherData;
