import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
      <WeatherTemperature celsius={props.data.temperature} />
      <div className="row">
        <div className="col">
          <h1>{props.data.city}</h1>
        </div>
      </div>
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
