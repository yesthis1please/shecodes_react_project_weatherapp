import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tokyo" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/annamaria-bara/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Annamaria Bara
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/yesthis1please/shecodes_react_project_weatherapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            open sourced on GitHub
          </a>
          {" | "}
          Shout out to{" "}
          <a
            href="https://www.flaticon.com/free-animated-icons/sun"
            title="sun animated icons"
            rel="noopener noreferrer"
          >
            Freepik
          </a>{" "}
          for the icons!
        </footer>
      </div>
    </div>
  );
}
