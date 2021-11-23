import React from "react";

export default function DailyForecast(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°`;
  }

  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function icon() {
    let iconUrl = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    return iconUrl;
  }

  return (
    <div>
      <ul>
        <li className="ForecastDay">{day()}</li>
        <li className="ForecastIcon">
          <img src={icon()} alt={props.data.description} />
        </li>
        <li className="ForecastTemps">
          <span className="ForecastTempMax">{maxTemp()}</span>
          <span className="forcedSpace"> | </span>
          <span className="ForecastTempMin">{minTemp()}C</span>
        </li>
      </ul>
    </div>
  );

  /*
  <div className="ForecastDay">{day()}</div>
      <hr />
      <div className="ForecastIcon">
        <img src={icon()} alt={props.data.description} />
      </div>
      <hr />
      <div className="ForecastTemps">
        <span className="ForecastTempMax">{maxTemp()}</span>
        <span className="forcedSpace"> | </span>
        <span className="ForecastTempMin">{minTemp()}</span>
      </div> */
}
