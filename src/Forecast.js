import React from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let lat = props.coords.lat;
  let lon = props.coords.lon;
  let apiKey = "f300ea07549b278ccdffad6a05e9faa5";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="ForecastWrapper">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Thu</div>
          <div className="ForecastIcon">IMG</div>
          <div className="ForecastTemps">
            <span className="ForecastTempMax">19°</span> |{" "}
            <span className="ForecastTempMin">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
