import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import FormatteDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

import "./WeatherUpdate.css";

export default function WeatherUpdate(props) {
  return (
    <div className="WeatherUpdate">
      <div className="row">
        <div className="cityInfo">
          <div className="mt-3 d-flex">
            <h1>{props.data.city}</h1>
            <span className="country">{props.data.country}</span>
          </div>
          <ul className="dayAndTime">
            <li>
              <FormatteDate date={props.data.date} />
            </li>
            <li>
              {props.data.description.charAt(0).toUpperCase() +
                props.data.description.slice(1)}
            </li>
          </ul>
        </div>
        <div className="row d-flex mt-4">
          <div className="col-md-6 currentTemp d-flex">
            <div>
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div className="weather-decsription col-md-6">
            <ul>
              <li>
                Feels Like {Math.round(props.data.feelTemperature)} &deg;C
              </li>
              <li>Wind: {Math.round(props.data.wind)} m/s</li>
              <li>Humidity: {props.data.humidity}%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
