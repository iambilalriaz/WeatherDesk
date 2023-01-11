import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
type WeatherDetails = {
  LocalObservationDateTime: string;
  EpochTime: number;
  WeatherText: string;
  WeatherIcon: number;
  HasPrecipitation: boolean;
  PrecipitationType: string | null;
  IsDayTime: boolean;
  Temperature: {
    Metric: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
    Imperial: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
  };
  MobileLink: string;
  Link: string;
};

const initialState: {
  loadingDetails: boolean;
  weatherDetails: WeatherDetails[];
} = {
  loadingDetails: false,
  weatherDetails: [],
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setLoadingDetails: (state, action: PayloadAction<boolean>) => {
      state.loadingDetails = action.payload;
    },
    setWeatherDetails: (state, action: PayloadAction<WeatherDetails[]>) => {
      state.weatherDetails = [...action.payload];
    },
  },
});

export const { setLoadingDetails, setWeatherDetails } = weatherSlice.actions;

export default weatherSlice.reducer;
