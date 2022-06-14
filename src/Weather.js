import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import { ThreeDots } from "react-loader-spinner";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "c7bf51f65e9f2e6e240717c3f7dc5bf8";
    let unit = "metric";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-10">
                <input
                  type="search"
                  placeholder="How's the weather in..."
                  autoFocus="on"
                  autoComplete="off"
                  spellCheck="false"
                  className="searchInput"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col">
                <button>
                  <img
                    src={process.env.PUBLIC_URL + "search.png"}
                    className="buttonIcon"
                    alt="submit button"
                  />
                </button>
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />

          <div className="mt-3">
            <WeatherForecast coordinates={weatherData.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <ThreeDots color="#58cdcc" height={80} width={80} />;
  }
}
