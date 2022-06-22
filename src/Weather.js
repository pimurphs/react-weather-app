import React from "react";
import "./Weather.css";

export default function Weather() {
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
          <p>Wednesday 7.00</p>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <span className="temperature">25º</span>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col d-flex justify-content-center">
          <span className="unit">ºC </span>
          <span className="unit"> ºF</span>
        </div>
      </div>
      <h1>Lisbon</h1>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>Precipitation: 5%</li>
            <li>Humidity: 30%</li>
            <li>Wind: 15km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
