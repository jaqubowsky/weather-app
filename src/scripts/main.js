import "../styles/styles.scss";
import { fetchWeatherData, fetchUserLocation } from "./weatherData";


const userLocation = await fetchUserLocation();

const weatherData = await fetchWeatherData(userLocation)

console.log(weatherData);