import React, { useState, useEffect } from 'react';
import styles from './Weather.module.css';
import axios from 'axios';
import { apiUrl } from './Weather.settings';

interface WeatherData {
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<WeatherData>(apiUrl);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
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
