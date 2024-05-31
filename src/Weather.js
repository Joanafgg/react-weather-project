/** @format */

import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <h1>Barcelona</h1>
        <ul>
          <li>Friday, 14:00</li>
          <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
                  <div className="col-6">
                      
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly Cloudy"
            />
            <span className="temperature"> 23</span> <span className="unit"> °C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Pricipitation: 0 %</li>
              <li>Humidity: 56 %</li>
              <li>Wind: 27 km/h</li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}
