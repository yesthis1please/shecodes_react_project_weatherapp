import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";


import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <FormattedDate date={props.data.date} />
      <img
        src={process.env.PUBLIC_URL + `/${props.data.icon}.gif`}
        className="weatherIcon"
      />
      <WeatherTemperature celsius={props.data.temperature} />
      <div className="description">It's {props.data.description}!</div>
      <div className="row">
        <div className="col-6">
          <div className="row d-flex justify-content-center">
            <img
              src={process.env.PUBLIC_URL + "/humidity.png"}
              className="humidityIcon"
              alt="humidity icon"
            />
          </div>
          <div className="row d-flex justify-content-center humidity">{props.data.humidity}%</div>
        </div>
        <div className="col-6">
          <div className="row d-flex justify-content-center">
            <img
              src={process.env.PUBLIC_URL + "/wind.gif"}
              className="windIcon"
              alt="wind icon"
            />
          </div>
          <div className="row d-flex justify-content-center wind">{props.data.wind}km/h</div>
        </div>
      </div>
    </div>
  );
}

//temperature is not quite centered!
