import React from "react";
import DisplayDate from "./DisplayDate";

export default function DisplayCityWeather(props) {
  return (
    <div className="DisplayCityWeather">
      <div className="cityInfo">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <DisplayDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="weatherInfo">
        <div className="row mt-3">
          <div className="col-6">
            <img src={props.data.iconUrl} alt="description" />{" "}
            <span className="temp">{props.data.temp}</span>
            <span className="units">ºC</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind Speed: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
