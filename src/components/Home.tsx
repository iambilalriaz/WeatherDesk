import { useDispatch, useSelector } from 'react-redux';
import { setInputEnabled } from '../app/slices/inputEnabledSlice';
import { inputEnabledSelector, weatherSelector } from '../app/stateSelectors';
import SearchCity from './SearchCity';
import WeatherDeatils from './WeatherDeatils';
const Home = () => {
  const inputEnabled = useSelector(inputEnabledSelector);
  const { weatherDetails } = useSelector(weatherSelector);

  const dispatch = useDispatch();
  return !weatherDetails?.length ? (
    <div className='max-w-md'>
      <h1 className='mb-5 text-5xl font-bold text-white'>Weather Desk</h1>
      <p className='mb-5 text-white'>
        Weather Desk is a weather app that provides detailed and accurate
        weather forecasts for locations around the world.
      </p>
      {inputEnabled ? (
        <SearchCity />
      ) : (
        <button
          className='btn btn-primary'
          onClick={() => {
            dispatch(setInputEnabled(true));
          }}
        >
          Get Started
        </button>
      )}
    </div>
  ) : (
    <WeatherDeatils />
  );
};

export default Home;
