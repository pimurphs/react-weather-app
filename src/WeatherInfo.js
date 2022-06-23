import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <span>
            <FormattedDate date={props.data.date} />
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col d-flex justify-content-center">
          <span className="unit">ºC </span>
          <span className="unit"> ºF</span>
        </div>
      </div>
      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <WeatherIcon code={props.data.icon} />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ul>
            <li className="text-capitalize">
              Description: {props.data.description}
            </li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
