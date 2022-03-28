import React from "react";
import IconWeather from "./IconWeather";
import WeatherTemp from "./temp";

//import "./Weatherinfo.css";
import FormattedDate from "./FormattedDate";

export default function Weatherinfo(props) {
  return (
    <div className="weather">
      <div className="row">
        <div className="col-6 icon-image">
          <IconWeather code={props.data.icon} size={130} />
        </div>
        <div className="col-6">
          <h1 className="city-name">{props.data.city}</h1>
          <WeatherTemp temperature={props.data.temperature} />

          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li>
              <span className="description"> {props.data.description}</span>
            </li>
            <li>
              Humidity: <span className="humidity">{props.data.humidity}%</span>{" "}
            </li>
            <li>
              Wind:
              <span className="wind">{Math.round(props.data.wind)} km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
