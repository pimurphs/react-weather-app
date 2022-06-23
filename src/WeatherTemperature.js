import React, { useState } from "react";

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
              ºC |{" "}
              <a href="/" onClick={showFahrenheit}>
                ºF
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
                ºC
              </a>{" "}
              | ºF
            </span>
          </div>
        </div>
      </div>
    );
  }
}
