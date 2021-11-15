import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="card">
      <h1> Weather </h1>
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Enter City"
              className="form-control"
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
        <ul>
          <li>Sydney</li>
          <li>Local Time: 6:00 PM</li>
          <li>Weather Description</li>
        </ul>
      </div>
      <div className="weatherInfo">
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="description"
            />
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation</li>
              <li>Humidity</li>
              <li>Wind Speed</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
