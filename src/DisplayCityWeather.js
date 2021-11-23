import React from "react";
import DisplayDate from "./DisplayDate";
import DisplayUnits from "./DisplayUnits";

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
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="cityIcon"
            />{" "}
            <div className="DisplayUnits">
              <DisplayUnits celTemp={props.data.temp} />
            </div>
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
