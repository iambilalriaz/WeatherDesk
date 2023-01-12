export const GET_CITIES_URL = (query: string) =>
  `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_API_KEY}&q=${query}`;

export const GET_WEATHER_DETAILS_URL = (locationKey: string) =>
  `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${process.env.REACT_APP_API_KEY}&details=false`;
