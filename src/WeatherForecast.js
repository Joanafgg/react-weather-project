/** @format */

import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {

    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);
    

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
  }

    if (loaded) {
           return (
             <div className="WeatherForecast">
                   <div className="row">
                       {forecast.map(function (dailyForecast, index) {
                           if (index < 6) {
                               return (
                                   <div className="col" key={index}>
                                       <WeatherForecastDay data={dailyForecast} />
                                   </div>
                               );
                           } else {
                               return null;
                       }
                       })}
                
                   </div>
                   </div>
           );  
    } else {
          let apiKey = "7ed26a6948c661d05fafe7355b41b2ec";
          let longitude = props.coordinates.lon;
          let latitude = props.coordinates.lat;
          let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
          axios.get(apiURL).then(handleResponse);
          return null;
  }
 
}
