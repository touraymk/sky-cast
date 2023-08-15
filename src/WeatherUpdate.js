import React from "react";

import "./WeatherUpdate.css";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherUpdate() {
  return (
    <div className="WeatherUpdate d-flex">
      <div className="col col-md-6 d-flex">
        <div>
          <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="" />
        </div>
        <WeatherTemperature />
      </div>
      <div className="col col-6">
        <ul>
          <li>Feels Like 36 &deg;C</li>
          <li>Description</li>
          <li>💨: m/s</li>
          <li>💦: %</li>
        </ul>
      </div>
    </div>
  );
}
