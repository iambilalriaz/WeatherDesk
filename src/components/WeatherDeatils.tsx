import { useSelector } from 'react-redux';
import { selectedCitySelector, weatherSelector } from '../app/stateSelectors';

const WeatherDeatils = () => {
  const weatherDetails = useSelector(weatherSelector)?.weatherDetails?.[0];
  const selectedCity = useSelector(selectedCitySelector);
  return (
    <div className='card w-full sm:max-w-[70%] bg-base-100 shadow-xl text-black'>
      <div className='card-body'>
        <div>
          <p className='text-[#a3a1a1] mb-2'>{selectedCity?.name}</p>
          <div className='flex flex-col justify-between items-center'>
            <p className='text-3xl font-semibold'>
              {weatherDetails?.WeatherText}
            </p>
            <img
              className='my-2'
              width={120}
              alt='weather_icon'
              src={`https://developer.accuweather.com/sites/default/files/${
                weatherDetails?.WeatherIcon?.toString?.length === 1
                  ? `0${weatherDetails?.WeatherIcon}`
                  : weatherDetails?.WeatherIcon
              }-s.png`}
            />
            <p className='flex justify-between w-[50%] sm:w-[40%] md:w-[30%]'>
              <div>
                <span className='text-xl'>
                  {weatherDetails?.Temperature?.Metric?.Value}
                </span>
                <sup>&deg;</sup>
                <span className='text-sm'>
                  {weatherDetails?.Temperature?.Metric?.Unit}
                </span>
              </div>
              <div>|</div>
              <div>
                <span className='text-xl'>
                  {weatherDetails?.Temperature?.Imperial?.Value}
                </span>
                <sup>&deg;</sup>
                <span className='text-sm'>
                  {weatherDetails?.Temperature?.Imperial?.Unit}
                </span>
              </div>
            </p>
          </div>
          <div className='text-sm my-6'>
            Chances of Rain: {weatherDetails?.HasPrecipitation ? 'Yes' : 'No'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDeatils;
