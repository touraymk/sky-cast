import React from "react";

import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <h2 className="d-flex">
        {Math.round(props.celsius)} <span className="units">&deg;C |</span>
        <span className="units">&deg;F</span>
      </h2>
    </div>
  );
}
