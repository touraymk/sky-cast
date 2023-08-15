import React, { useState } from "react";
import axios from "axios";
import WeatherUpdate from "./WeatherUpdate";

import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      feelTemperature: response.data.main.feels_like,
      description: response.data.weather[0].desctiption,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "55a287616385559356e729db796a24f8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="mb-4">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Enter city.."
                className="col-7"
                onChange={handleCityChange}
              />
              <button type="submit">🔎</button>
              <button type="button">📍</button>
            </form>
          </div>
          <div className="row">
            <div className="m-3">
              <h1>{weatherData.city}</h1>
              <p>{weatherData.country}, Monday 22:00</p>
            </div>
          </div>

          <div className="row">
            <WeatherUpdate data={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
