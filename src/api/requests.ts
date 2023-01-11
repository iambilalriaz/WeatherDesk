import axios from 'axios';
import { GET_CITIES_URL, GET_WEATHER_DETAILS_URL } from './urls';

export const getCitites = (query: string) =>
  axios.request({
    method: 'GET',
    url: GET_CITIES_URL(query),
  });
export const getWeatherDetails = (locationKey: string) =>
  axios.request({
    method: 'GET',
    url: GET_WEATHER_DETAILS_URL(locationKey),
  });
