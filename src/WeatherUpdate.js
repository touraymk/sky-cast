import React from "react";

import "./WeatherUpdate.css";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherUpdate(props) {
  return (
    <div className="WeatherUpdate d-flex">
      <div className="col col-md-6 d-flex">
        <div>
          <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="" />
        </div>
        <WeatherTemperature celsius={props.data.temperature} />
      </div>
      <div className="col col-6">
        <ul>
          <li>Feels Like {Math.round(props.data.feelTemperature)} &deg;C</li>
          <li>{props.data.description}</li>
          <li>💨: {Math.round(props.data.wind)} m/s</li>
          <li>💦: {props.data.humidity} %</li>
        </ul>
      </div>
    </div>
  );
}
