import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      city: response.data.name,
      precipitation: response.data,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
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
        </form>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <span>
              <FormattedDate date={weatherData.date} />
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col d-flex justify-content-center">
            <span className="unit">ºC </span>
            <span className="unit"> ºF</span>
          </div>
        </div>
        <h1>{weatherData.city}</h1>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <ul>
              <li className="text-capitalize">
                Description: {weatherData.description}
              </li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "8cb4b09ce92dcd0f47ea25293231322e";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
