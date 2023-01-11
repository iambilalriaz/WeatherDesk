import { configureStore } from '@reduxjs/toolkit';
import inputEnabledReducer from '../app/slices/inputEnabledSlice';
import selectedCityReducer from './slices/selectedCitySlice';
import citiesReducer from '../app/slices/citiesSlice';
import weatherReducer from '../app/slices/weatherDetailsSlice';
export const store = configureStore({
  reducer: {
    inputEnabled: inputEnabledReducer,
    selectedCity: selectedCityReducer,
    cities: citiesReducer,
    weather: weatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
