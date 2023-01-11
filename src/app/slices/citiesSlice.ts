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
const initialState: CityType[] = [
  {
    Version: 1,
    Key: '187226',
    Type: 'City',
    Rank: 45,
    LocalizedName: 'Sahibganj',
    Country: {
      ID: 'IN',
      LocalizedName: 'India',
    },
    AdministrativeArea: {
      ID: 'JH',
      LocalizedName: 'Jharkhand',
    },
  },
  {
    Version: 1,
    Key: '259645',
    Type: 'City',
    Rank: 45,
    LocalizedName: 'Sahiwal',
    Country: {
      ID: 'PK',
      LocalizedName: 'Pakistan',
    },
    AdministrativeArea: {
      ID: 'PB',
      LocalizedName: 'Punjab',
    },
  },
  {
    Version: 1,
    Key: '3352111',
    Type: 'City',
    Rank: 55,
    LocalizedName: 'Sahibabad Daulat Pur',
    Country: {
      ID: 'IN',
      LocalizedName: 'India',
    },
    AdministrativeArea: {
      ID: 'DL',
      LocalizedName: 'Delhi',
    },
  },
  {
    Version: 1,
    Key: '259646',
    Type: 'City',
    Rank: 55,
    LocalizedName: 'Sahiwal',
    Country: {
      ID: 'PK',
      LocalizedName: 'Pakistan',
    },
    AdministrativeArea: {
      ID: 'PB',
      LocalizedName: 'Punjab',
    },
  },
  {
    Version: 1,
    Key: '3558587',
    Type: 'City',
    Rank: 55,
    LocalizedName: 'Sahintepe',
    Country: {
      ID: 'TR',
      LocalizedName: 'Türkiye',
    },
    AdministrativeArea: {
      ID: '34',
      LocalizedName: 'Istanbul',
    },
  },
  {
    Version: 1,
    Key: '3220615',
    Type: 'City',
    Rank: 65,
    LocalizedName: 'Sahiaganj',
    Country: {
      ID: 'IN',
      LocalizedName: 'India',
    },
    AdministrativeArea: {
      ID: 'BR',
      LocalizedName: 'Bihar',
    },
  },
  {
    Version: 1,
    Key: '3209729',
    Type: 'City',
    Rank: 65,
    LocalizedName: 'Sahila Rampur',
    Country: {
      ID: 'IN',
      LocalizedName: 'India',
    },
    AdministrativeArea: {
      ID: 'BR',
      LocalizedName: 'Bihar',
    },
  },
  {
    Version: 1,
    Key: '3221941',
    Type: 'City',
    Rank: 65,
    LocalizedName: 'Sahit',
    Country: {
      ID: 'IN',
      LocalizedName: 'India',
    },
    AdministrativeArea: {
      ID: 'BR',
      LocalizedName: 'Bihar',
    },
  },
  {
    Version: 1,
    Key: '320863',
    Type: 'City',
    Rank: 65,
    LocalizedName: 'Sahinli',
    Country: {
      ID: 'TR',
      LocalizedName: 'Türkiye',
    },
    AdministrativeArea: {
      ID: '57',
      LocalizedName: 'Sinop',
    },
  },
  {
    Version: 1,
    Key: '260239',
    Type: 'City',
    Rank: 75,
    LocalizedName: 'Sahianwala',
    Country: {
      ID: 'PK',
      LocalizedName: 'Pakistan',
    },
    AdministrativeArea: {
      ID: 'PB',
      LocalizedName: 'Punjab',
    },
  },
];

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
