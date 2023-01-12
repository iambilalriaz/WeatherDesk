import { debounce } from 'lodash';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { getCitites, getWeatherDetails } from '../api/requests';
import { setCities } from '../app/slices/citiesSlice';
import { setSelectedCity } from '../app/slices/selectedCitySlice';
import {
  setLoadingDetails,
  setWeatherDetails,
} from '../app/slices/weatherDetailsSlice';
import { citiesSelector, weatherSelector } from '../app/stateSelectors';
import loader from '../assets/loader.gif';
const SearchCity = () => {
  const cities = useSelector(citiesSelector);
  const loadingWeatherDetails = useSelector(weatherSelector)?.loadingDetails;
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
    dispatch(setLoadingDetails(true));
    getWeatherDetails(`${item?.id}`)
      .then((response) => {
        dispatch(setWeatherDetails(response?.data));
        dispatch(setLoadingDetails(false));
      })
      .catch(() => {
        dispatch(setLoadingDetails(false));
      });
  };
  return loadingWeatherDetails ? (
    <div className='grid place-items-center'>
      <img loading='lazy' src={loader} alt='' width={50} />
    </div>
  ) : (
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
