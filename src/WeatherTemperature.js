import React, { useState } from "react";

import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("metric");

  function convertImperialUnit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function convertMetricUnit(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function displayImperial() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "metric") {
    return (
      <div className="WeatherTemperature">
        <h2 className="d-flex">
          {Math.round(props.celsius)}{" "}
          <span className="units">
            &deg;C |{" "}
            <a href="/" onClick={convertImperialUnit}>
              &deg;F
            </a>
          </span>
        </h2>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <h2 className="d-flex">
          {Math.round(displayImperial())}{" "}
          <span className="units">
            &deg;F |{" "}
            <a href="/" onClick={convertMetricUnit}>
              &deg;C
            </a>
          </span>
        </h2>
      </div>
    );
  }
}
