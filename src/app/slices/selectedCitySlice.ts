import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
type SelectedCityType = {
  key: string;
  name: string;
};
const initialState: SelectedCityType = {
  key: '',
  name: '',
};

export const selectedCitySlice = createSlice({
  name: 'selectedCity',
  initialState,
  reducers: {
    setSelectedCity: (_, action: PayloadAction<SelectedCityType>) => {
      return action.payload;
    },
  },
});

export const { setSelectedCity } = selectedCitySlice.actions;

export default selectedCitySlice.reducer;
