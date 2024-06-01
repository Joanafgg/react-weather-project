/** @format */

import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconURL: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      date: "Friday, 14:00",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row mt-3">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
          <h1>{weatherData.city}</h1>
          <ul>
            <li>{weatherData.date}</li>
            <li className="text-capitalize">
              {" "}
              <em> {weatherData.description} </em>
            </li>
          </ul>
          <div className="row">
            <div className="col-6">
              <img src={weatherData.iconURL} alt={weatherData.description} />
              <span className="temperature">
                {" "}
                {Math.round(weatherData.temperature)}
              </span>{" "}
              <span className="unit"> °C</span>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <strong>Pricipitation: </strong>0 %
                </li>
                <li>
                  {" "}
                  <strong>Humidity: </strong> {weatherData.humidity} %
                </li>
                <li>
                  <strong>Wind: </strong> {weatherData.wind} km/h
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    const apiKey = "7ed26a6948c661d05fafe7355b41b2ec";
    let apiURL = ` https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  return "Loading...";
}
