import React, { useState } from "react";
import axios from "axios";
import DisplayDate from "./DisplayDate";
import "./Weather.css";

export default function Weather(props) {
  const [data, setData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setData({
      ready: true,
      temp: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
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

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (data.ready) {
    return (
      <div className="card">
        <h1 className="pageTitle"> Weather </h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter City"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" className="btn btn-primary" value="Search" />
            </div>
            <div className="col-3">
              <input
                type="submit"
                className="btn btn-warning"
                value="My Location"
              />
            </div>
          </div>
        </form>
        <div className="cityInfo">
          <h1>{data.city}</h1>
          <ul>
            <li>
              <DisplayDate date={data.date} />
            </li>
            <li className="text-capitalize">{data.description}</li>
          </ul>
        </div>
        <div className="weatherInfo">
          <div className="row mt-3">
            <div className="col-6">
              <img src={data.iconUrl} alt="description" />{" "}
              <span className="temp">{data.temp}</span>
              <span className="units">ºC</span>
            </div>
            <div className="col-6">
              <ul>
                <li>Precipitation</li>
                <li>Humidity: {data.humidity}%</li>
                <li>Wind Speed: {data.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  } else {
    searchCity();
    return "Load in progress";
  }
}
