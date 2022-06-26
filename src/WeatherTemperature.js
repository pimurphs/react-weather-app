import React, { useState } from "react";

//On this page: Convertion of units temperature C | F

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <span className="temperature">{Math.round(props.celsius)}</span>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col d-flex justify-content-center">
            <span className="unit">
              <button className="btn btn-primary">ºC</button>{" "}
              <a href="/" onClick={showFahrenheit}>
                <button className="btn btn-primary">ºF</button>
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    function fahrenheit() {
      return (props.celsius * 9) / 5 + 32;
    }

    return (
      <div className="WeatherTemperature">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <span className="temperature">{Math.round(fahrenheit())}</span>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col d-flex justify-content-center">
            <span className="unit">
              <a href="/" onClick={showCelsius}>
                <button className="btn btn-primary">ºC</button>
              </a>{" "}
              <button className="btn btn-primary">ºF</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
