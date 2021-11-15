import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/kdel01/final-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Github link
          </a>
        </footer>
      </div>
    </div>
  );
}
