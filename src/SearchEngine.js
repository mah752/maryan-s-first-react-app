import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  let [city, setCity] = useState();
  let [forecast, setForecast] = useState({});
  let [doneLoading, setloading] = useState(null);

  function showWeather(response) {
    console.log(response);
    setloading(true);
    setForecast({
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function updatecity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "b4ff976d0b6bf19c30785d422350f066";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="type city..." onChange={updatecity} />{" "}
      <input type="submit" value="search" />
    </form>
  );
  if (doneLoading) {
    return (
      <div>
        {" "}
        {form}{" "}
        <ul>
          <li>
            <strong> Temperature: </strong> {Math.round(forecast.temp)}°C{" "}
          </li>{" "}
          <li>
            <strong> Description: </strong> {forecast.description}{" "}
          </li>{" "}
          <li>
            <strong> Humidity: </strong> {forecast.humidity}%{" "}
          </li>{" "}
          <li>
            <strong> Windspeed: </strong> {Math.round(forecast.wind)} km/h{" "}
          </li>{" "}
          <li>
            <img src={forecast.icon} alt="weather-icon" />
          </li>{" "}
        </ul>{" "}
      </div>
    );
  } else {
    return form;
  }
}
