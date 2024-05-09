import React, { useState, useEffect } from 'react';
import styles from './Weather.module.css';
import { fetchWeatherData } from '../../Api/weatherApi';
import { WeatherData } from '../../interfaces/WeatherInterface';

const Weather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherData();
        setWeatherData(data);
      } catch (error) {
        console.error('Error setting weather data:', error);
      }
    };

    fetchData();
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const temperature = weatherData.main.temp;
  const weatherDescription = weatherData.weather[0].description;

  return (
    <div className={styles.WeatherComponent}>
      <h2>Weather in Tel Aviv</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Weather: {weatherDescription}</p>
    </div>
  );
};

export default Weather;
