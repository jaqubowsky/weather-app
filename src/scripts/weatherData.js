const API_KEY = "1541647ca6a09c8e891e90c3eb2ff7f7";
const MEASUREMENT_UNIT = "metric";
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?";

const LOCATION_URL = "http://api.openweathermap.org/geo/1.0/direct?";
const searchBar = document.getElementById("search");

const fetchUserLocation = async () => {
  const searchBarValue = "Obryte";
  try {
    const response = await fetch(
      `${LOCATION_URL}q=${searchBarValue}}&appid=${API_KEY}&limit=1`
    );

    const data = await response.json();
    const { lat, lon, name } = data[0];

    return { lat, lon, name };
  } catch (err) {
    console.log(err);
    alert(err);
  }
};

const fetchWeatherData = async (location) => {
  try {
    const response = await fetch(
      `${WEATHER_URL}appid=${API_KEY}&lon=${location.lon}&lat=${location.lat}&units=${MEASUREMENT_UNIT}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    alert(err);
  }
};

export { fetchWeatherData, fetchUserLocation };
