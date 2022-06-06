import React, { useState } from "react";

import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          <img
            src={process.env.PUBLIC_URL + "/celsius.png"}
            className="unitIcon"
            alt="celsius icon"
          />{" "}
          <a href="/" onClick={convertToFahrenheit}>
            <img
              src={process.env.PUBLIC_URL + "fahrenheit.png"}
              className="unitIcon"
              alt="fahrenheit icon"
            />
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">
          {Math.round((props.celsius * 9) / 5 + 32)}
        </span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            <img
              src={process.env.PUBLIC_URL + "/celsius.png"}
              className="unitIcon"
              alt="celsius icon"
            />
          </a>{" "}
          <img
            src={process.env.PUBLIC_URL + "fahrenheit.png"}
            className="unitIcon"
            alt="fahrenheit icon"
          />
        </span>
      </div>
    );
  }
}

//link jumping on click?
