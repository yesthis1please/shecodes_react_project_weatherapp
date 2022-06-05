import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import { propTypes } from "react-bootstrap/esm/Image";

export default function WeatherInfo(props) {
  return (
    <div className="WeahterInfo">
      <h1>{props.data.city}</h1>
      <FormattedDate date={props.data.date} />
      <img src={process.env.PUBLIC_URL + `/${props.data.icon}.gif`} className="weatherIcon"/>
      <WeatherTemperature celsius={props.data.temperature} />
      <div>It's {props.data.description}!</div>
      <div className="row">
        <div className="col-6">
          <div className="row">humidity</div>
          <div className="row">{props.data.humidity}%</div>
        </div>
        <div className="col-6">
          <div className="row">wind</div>
          <div className="row">{props.data.wind}km/h</div>
        </div>
      </div>
      <div>C | F</div>
    </div>
  );
}
