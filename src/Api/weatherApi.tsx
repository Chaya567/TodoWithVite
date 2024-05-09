import axios from 'axios';
import { apiUrl } from '../components/WeatherComponents/Weather.settings';
import { WeatherData } from '../interfaces/WeatherInterface';

export const fetchWeatherData = async () => {
  try {
    const response = await axios.get<WeatherData>(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};