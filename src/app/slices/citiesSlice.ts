import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
export type CityType = {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  Country: {
    ID: string;
    LocalizedName: string;
  };
  AdministrativeArea: {
    ID: string;
    LocalizedName: string;
  };
};
const initialState: CityType[] = [];

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    setCities: (_, action: PayloadAction<CityType[]>) => {
      return action.payload;
    },
  },
});

export const { setCities } = citiesSlice.actions;

export default citiesSlice.reducer;
