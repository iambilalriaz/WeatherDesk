import { Provider } from 'react-redux';
import { store } from './app/store';
import bgImage from './assets/background.jpg';
import Home from './components/Home';

function App() {
  return (
    <Provider store={store}>
      <div
        className='hero h-screen w-screen'
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className='hero-overlay bg-opacity-60' />
        <div className='hero-content text-center text-neutral-content w-screen'>
          <Home />
        </div>
      </div>
    </Provider>
  );
}

export default App;
