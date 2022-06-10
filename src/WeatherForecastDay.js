import React from "react";

import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let maxTemperature = Math.round(props.data.temp.max);

    return `${maxTemperature}°`;
  }

  function minTemperature() {
    let minTemperature = Math.round(props.data.temp.min);

    return `${minTemperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecastDay-day">{day()}</div>
      <div>
        <img
          src={process.env.PUBLIC_URL + `/${props.data.weather[0].icon}.gif`}
          className="WeatherForecastDay-icon"
          alt="weather forecast icon"
        />
      </div>

      <div className="WeatherForecast-temperature">
        <span className="WeatherForecastDay-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecastDay-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
