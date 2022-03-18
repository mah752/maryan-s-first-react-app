import React from "react";
import FormattedDate from "./FormattedDate";
import IconWeather from "./IconWeather";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-1">
        <div className="col-6">
          <div className="clearfix">
            <span className="float-start">
              <IconWeather code={props.data.icon} />
            </span>
            <span className="float-start">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°F</span>
            </span>
          </div>
        </div>
        <div className="description col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
