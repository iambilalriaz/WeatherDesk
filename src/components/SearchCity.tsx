import { debounce } from 'lodash';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { getCitites, getWeatherDetails } from '../api/requests';
import { setCities } from '../app/slices/citiesSlice';
import { setSelectedCity } from '../app/slices/selectedCitySlice';
import { setWeatherDetails } from '../app/slices/weatherDetailsSlice';
import { citiesSelector } from '../app/stateSelectors';

const SearchCity = () => {
  const cities = useSelector(citiesSelector);
  const dispatch = useDispatch();

  const handleOnSearch = (string: string) => {
    debounce(() => {
      getCitites(string).then((response) => {
        dispatch(setCities(response?.data));
      });
    }, 1000)();
  };
  const handleOnSelect = (item: { id: number; name: string }) => {
    dispatch(setSelectedCity({ key: item?.id?.toString(), name: item?.name }));
    getWeatherDetails(`${item?.id}`).then((response) => {
      dispatch(setWeatherDetails(response?.data));
    });
  };
  return (
    <ReactSearchAutocomplete
      placeholder='Enter city name...'
      items={cities?.map((city) => ({
        id: +city?.Key,
        name: `${city?.LocalizedName},  ${city?.AdministrativeArea?.LocalizedName}, ${city?.Country?.LocalizedName}`,
      }))}
      onSearch={handleOnSearch}
      onSelect={handleOnSelect}
      autoFocus
    />
  );
};

export default SearchCity;
