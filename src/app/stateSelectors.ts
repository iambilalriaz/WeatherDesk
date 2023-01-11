import { RootState } from './store';
export const inputEnabledSelector = (state: RootState) => state?.inputEnabled;
export const selectedCitySelector = (state: RootState) => state?.selectedCity;
export const citiesSelector = (state: RootState) => state?.cities;
export const weatherSelector = (state: RootState) => state?.weather;
