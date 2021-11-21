import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Sydney" />
        <footer>
          Coded by Kathryn Delavere | View Source Code on{" "}
          <a
            href="https://github.com/kdel01/final-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          | Hosted on{" "}
          <a
            href="https://keen-yonath-04d760.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
