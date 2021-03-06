import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherCard.css';
import {API_KEY} from '../API_KEY';


const WeatherCard = ({city}) => {
  const [weather, setWeather] = useState(null);

  const baseUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setWeather(response.data);
    });
  }, [baseUrl]);

  if (!weather) return null;

  return (
    <div className="weatherCard">
      <div className="city">
        {weather.name}
      </div>
      <div className="temp-min">
        Min {Math.floor(weather.main.temp_min)}℃
      </div>
      <div className="temp-max">
        Max {Math.floor(weather.main.temp_max)}℃
      </div>
      <h2 className="temp">
        {Math.floor(weather.main.temp)}℃
      </h2>
      <div className="wind">
        Wind {weather.wind.speed}m/s
      </div>
      <div className="humidity">
        Humidity {weather.main.humidity}%
      </div>
      <div className="main">
        {weather.weather[0].main}%
      </div>
    </div>
  );
};

export default WeatherCard;

