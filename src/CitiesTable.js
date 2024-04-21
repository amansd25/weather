import React, { useState, useEffect } from 'react';

const CityWeather = ({ cityId }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const getCityWeather = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=YOUR_API_KEY`);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };
    getCityWeather(); // Include getCityWeather in the dependency array
  }, [cityId]);

  return (
    <div>
      <h2>Weather</h2>
      {weatherData && (
        <div>
          <h3>{weatherData.name}</h3>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          <p>Pressure: {weatherData.main.pressure} hPa</p>
          <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].description} /> {/* Add alt prop */}
        </div>
      )}
    </div>
  );
};

export default CityWeather;
