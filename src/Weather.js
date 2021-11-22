import React, { useState } from "react";
import axios from "axios";
import DisplayCityWeather from "./DisplayCityWeather";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather(props) {
  const [data, setData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setData({
      ready: true,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      coords: response.data.coord,
    });
  }

  function searchCity() {
    let units = "metric";
    const apiKey = "f300ea07549b278ccdffad6a05e9faa5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function handleInput(event) {
    setCity(event.target.value);
  }

  // Code to provide weather for my location
  function handlePosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "f300ea07549b278ccdffad6a05e9faa5";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(handlePosition);
  }
  // end of code to handle my location

  if (data.ready) {
    return (
      <div className="card">
        <h1 className="pageTitle"> Weather Around The World </h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter City"
                className="form-control"
                autoFocus="on"
                onChange={handleInput}
              />
            </div>
            <div className="col-3">
              <input type="submit" className="btn btn-primary" value="Search" />
            </div>
            <div className="col-3">
              <input
                type="submit"
                className="btn btn-info"
                value="My Location"
                onClick={handleLocation}
              />
            </div>
          </div>
        </form>
        <DisplayCityWeather data={data} />
        <hr />
        <Forecast coords={data.coords} />
      </div>
    );
  } else {
    searchCity();
    return "Load in progress";
  }
}
