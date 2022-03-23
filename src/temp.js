import React, { useState } from "react";
//import "./WeatherTemp.css";

export default function WeatherTemp(props) {
  let [temperature, setTemperature] = useState("celsius");
  let fahrenheit = (props.temperature * 9) / 5 + 32;

  function showFahrenheit(event) {
    event.preventDefault();
    setTemperature("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setTemperature("celsius");
  }

  if (temperature === "celsius") {
    return (
      <div className="WeatherTemp">
        <strong id="temperature">{Math.round(props.temperature)}</strong>
        <span className="units">
          {" "}
          <span className="active">°C | </span>
          <a href="/" className="desactive" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <strong id="temperature">{Math.round(fahrenheit)}</strong>
        <span className="units">
          {" "}
          <span className="active">°F | </span>{" "}
          <a href="/" className="desactive" onClick={showCelsius}>
            {" "}
            °C{" "}
          </a>{" "}
        </span>
      </div>
    );
  }
}
