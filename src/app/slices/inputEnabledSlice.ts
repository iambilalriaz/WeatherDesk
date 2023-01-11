import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = false;

export const inputEnabledSlice = createSlice({
  name: 'inputEnabled',
  initialState,
  reducers: {
    setInputEnabled: (_, action: PayloadAction<boolean>) => {
      return action.payload;
    },
  },
});

export const { setInputEnabled } = inputEnabledSlice.actions;

export default inputEnabledSlice.reducer;
