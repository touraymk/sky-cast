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
          <div className="dayAndTime">
            <FormatteDate date={props.data.date} />
          </div>
        </div>
        <div className="row d-flex mt-4">
          <div className="col-md-6 currentTemp d-flex">
            <div>
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div className="col-md-6">
            <ul>
              <li>
                Feels Like {Math.round(props.data.feelTemperature)} &deg;C
              </li>
              <li>{props.data.description}</li>
              <li>💨: {Math.round(props.data.wind)} m/s</li>
              <li>💦: {props.data.humidity} %</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
