import React, { useState } from "react";

export default function DisplayUnits(props) {
  const [unit, setUnit] = useState("celcius");

  function convertToF(event) {
    event.preventDefault();
    setUnit("faren");
  }

  function convertToC(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div className="TempDisplay">
        <span className="temp">{Math.round(props.celTemp)}</span>
        <span className="units">ºC |</span>
        <span className="units">
          <a href="/" onClick={convertToF}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    let faren = (props.celTemp * 9) / 5 + 32;
    return (
      <div className="TempDisplay">
        <span className="temp">{Math.round(faren)}</span>
        <span className="units">ºF |</span>
        <span className="units">
          <a href="/" onClick={convertToC}>
            ºC
          </a>
        </span>
      </div>
    );
  }
}
