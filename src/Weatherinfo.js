import React from "react";
import IconWeather from "./IconWeather";
import WeatherTemp from "./temp";

//import "./Weatherinfo.css";
import FormattedDate from "./FormattedDate";

export default function Weatherinfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-8">
          <div className="clearfix">
            <div className="float-left">
              <IconWeather code={props.data.icon} size={200} />
            </div>

            <div className="float-left">
              <WeatherTemp temperature={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-4">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
