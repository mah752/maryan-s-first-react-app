import React from "react";
import IconWeather from "./IconWeather";

export default function DaysForecast(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="ForecastDay">{day()}</div>
      <IconWeather code={props.data.weather[0].icon} size={36} />
      <div>
        <span className="WeatherMax">{maxTemp()}</span>
        <span className="WeatherMin">{minTemp()}</span>
      </div>
    </div>
  );
}