import './App.css';
import Footer from './components/Footer';
import SearchInput from './components/SearchInput';
import WeatherCard from './components/WeatherCard';
import { useState } from 'react';


function App() {
  const [city, setCity] = useState('');

  return (
    <div className="App">
      <h1 className="appTitle">Weather App</h1>
      <WeatherCard city={city} />
      <SearchInput setCity={setCity} />
      <Footer />
    </div>
  );
}

export default App;
